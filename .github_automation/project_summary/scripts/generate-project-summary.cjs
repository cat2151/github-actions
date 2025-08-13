const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');
const GitUtils = require('./GitUtils.cjs');
const FileSystemUtils = require('./FileSystemUtils.cjs');
const ProjectAnalyzer = require('./ProjectAnalyzer.cjs');
const CodeAnalyzer = require('./CodeAnalyzer.cjs');

class ProjectSummaryGenerator {
  /**
   * @param {string} overviewPromptPath - プロジェクト概要プロンプトのパス（必須）
   * @param {string} developmentStatusPromptPath - 開発状況プロンプトのパス（必須）
   * @param {string} overviewPath - プロジェクト概要出力先パス（必須）
   * @param {string} developmentPath - 開発状況出力先パス（必須）
   */
  constructor(overviewPromptPath, developmentStatusPromptPath, overviewPath, developmentPath, projectRoot) {
    if (!overviewPromptPath) {
      throw new Error('overviewPromptPath is required as the first argument');
    }
    if (!developmentStatusPromptPath) {
      throw new Error('developmentStatusPromptPath is required as the second argument');
    }
    if (!overviewPath) {
      throw new Error('overviewPath is required as the third argument');
    }
    if (!developmentPath) {
      throw new Error('developmentPath is required as the fourth argument');
    }
    if (!projectRoot) {
      throw new Error('projectRoot is required as the fifth argument');
    }
    this.overviewPromptPath = overviewPromptPath;
    this.developmentStatusPromptPath = developmentStatusPromptPath;
    this.overviewPath = overviewPath;
    this.developmentPath = developmentPath;
    this.projectRoot = projectRoot;
    this.gitUtils = new GitUtils(projectRoot);
    this.fileSystemUtils = new FileSystemUtils(projectRoot);
    this.codeAnalyzer = new CodeAnalyzer(projectRoot);
    this.projectAnalyzer = new ProjectAnalyzer(projectRoot, this.fileSystemUtils, this.codeAnalyzer);
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }); // agentが提案したもの
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.5-flash' }); // userが調査して、こちらがベターである、と判断したもの
  }

  /**
   * メイン実行関数
   */
  async run() {
    try {
      console.log('Starting project summary generation...');

      // 環境変数チェック
      if (!process.env.GEMINI_API_KEY) {
        throw new Error('GEMINI_API_KEY environment variable is not set');
      }

      // 過去24時間のユーザーコミットチェック
      const hasUserCommits = await this.gitUtils.hasUserCommitsInLast24Hours();
      if (!hasUserCommits) {
        console.log('No user commits in the last 24 hours. Skipping summary generation.');
        return;
      }

      // データ収集
      console.log('Collecting project data...');
      const [projectInfo, issues, recentChanges, prompts] = await Promise.all([
        this.collectProjectInfo(),
        this.collectIssues(),
        this.gitUtils.collectRecentChanges(),
        this.loadPrompts()
      ]);

      // Octokitのインストールが必要な場合のハンドリング
      if (issues.length === 0 && !process.env.GITHUB_TOKEN) {
        console.warn('GITHUB_TOKEN not set, skipping Issues collection');
      }

      // テキスト生成
      const summaries = await this.generateSummaries(projectInfo, issues, recentChanges, prompts);

      // ファイル保存
      const filenames = await this.saveSummaries(summaries);

      console.log('Project summary generation completed successfully!');
      console.log(`Generated files: ${filenames.join(', ')}`);
      return filenames;

    } catch (error) {
      console.error('Project summary generation failed:', error.message);
      if (error.response) {
        console.error('API Response:', error.response);
      }
      process.exit(1);
    }
  }

  /**
   * Gemini APIの出力から不要なコードブロック（```markdown等）を除去
   */
  cleanMarkdownCodeBlock(text) {
    if (!text) return '';
    // 先頭の ```markdown または ``` を除去
    text = text.replace(/^```markdown\s*\n?/i, '');
    text = text.replace(/^```\s*\n?/i, '');
    // 末尾の ``` を除去
    text = text.replace(/\n?```\s*$/i, '');
    return text.trim();
  }


  /**
   * GitHub Issues情報を収集
   */
  async collectIssues() {
    console.log('Collecting GitHub Issues...');

    try {
      const { Octokit } = require('@octokit/rest');
      const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
      });

      const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

      const { data: issues } = await octokit.rest.issues.listForRepo({
        owner,
        repo,
        state: 'open',
        per_page: 10
      });

      return issues.map(issue => ({
        number: issue.number,
        title: issue.title,
        body: issue.body ? issue.body.substring(0, 300) + '...' : '',
        labels: issue.labels.map(label => label.name)
      }));
    } catch (error) {
      console.warn('Could not fetch GitHub Issues:', error.message);
      return [];
    }
  }

  /**
   * プロンプトファイルを読み込み
   */
  async loadPrompts() {
    const prompts = {
      overview: '',
      development: ''
    };
    try {
      prompts.overview = await fs.readFile(this.overviewPromptPath, 'utf-8');
    } catch (error) {
      console.warn(`Could not read ${this.overviewPromptPath}:`, error.message);
      throw new Error(`${this.overviewPromptPath} could not be read`);
    }
    try {
      prompts.development = await fs.readFile(this.developmentStatusPromptPath, 'utf-8');
    } catch (error) {
      console.warn(`Could not read ${this.developmentStatusPromptPath}:`, error.message);
      throw new Error(`${this.developmentStatusPromptPath} could not be read`);
    }
    return prompts;
  }

  /**
   * Gemini APIを使って2つのテキストを生成
   */
  async generateSummaries(projectInfo, issues, recentChanges, prompts) {
    console.log('Generating summaries with Gemini API...');

    const contextData = {
      projectInfo,
      issues,
      recentChanges,
      timestamp: new Date().toISOString()
    };

    const summaries = {
      overview: '',
      development: ''
    };

    // 共通のフォーマット関数
    const formatFunctionHierarchy = (hierarchy) => {
      if (!hierarchy || typeof hierarchy !== 'object' || Object.keys(hierarchy).length === 0) {
        return '関数呼び出し階層を分析できませんでした';
      }

      let result = '';
      const processedFunctions = new Set();

      // エントリーポイント（他から呼ばれない関数）を探す
      const entryPoints = Object.keys(hierarchy).filter(func =>
        hierarchy[func] && hierarchy[func].calledBy && hierarchy[func].calledBy.length === 0
      );

      const buildTree = (func, depth = 0) => {
        if (processedFunctions.has(func) || depth > 3) return '';
        processedFunctions.add(func);

        const indent = '  '.repeat(depth);
        let tree = `${indent}- ${func} (${hierarchy[func].file})\n`;

        if (hierarchy[func] && hierarchy[func].calls) {
          hierarchy[func].calls.forEach(calledFunc => {
            if (hierarchy[calledFunc]) {
              tree += buildTree(calledFunc, depth + 1);
            }
          });
        }

        return tree;
      };

      entryPoints.forEach(entry => {
        result += buildTree(entry);
      });

      return result || '関数呼び出し階層を分析できませんでした';
    };

    // ファイル詳細をフォーマット
    const formatFileDetails = (fileAnalysis) => {
      return fileAnalysis.map(file => {
        const functions = file.functions.length > 0 ? file.functions.join(', ') : 'なし';
        const imports = file.imports.length > 0 ? file.imports.slice(0, 3).join(', ') : 'なし';
        return `**${file.path}** (${file.lines}行, ${file.size}バイト)\n  - 関数: ${functions}\n  - インポート: ${imports}`;
      }).join('\n\n');
    };

    // 技術スタックをフォーマット
    const formatTechStack = (techStack) => {
      let result = '';
      Object.entries(techStack).forEach(([category, items]) => {
        if (items.length > 0) {
          const categoryNames = {
            frontend: 'フロントエンド',
            music: '音楽・オーディオ',
            backend: 'バックエンド',
            development: '開発ツール',
            testing: 'テスト',
            buildTools: 'ビルドツール',
            languageFeatures: '言語機能',
            automation: '自動化・CI/CD',
            standards: '開発標準'
          };
          result += `**${categoryNames[category]}:**\n${items.map(item => `  - ${item}`).join('\n')}\n\n`;
        }
      });
      return result || '技術スタック情報を取得できませんでした';
    };

    // 1. プロジェクト概要生成（来訪者向け）
    const overviewPrompt = `
${prompts.overview}

以下のプロジェクト情報を参考にして要約を生成してください：

## プロジェクト情報
名前: ${projectInfo.name}
説明: ${projectInfo.description}

依存関係:
${JSON.stringify(projectInfo.dependencies, null, 2)}

## 技術スタック
${formatTechStack(projectInfo.techStack)}

## ファイル階層ツリー
${projectInfo.fileTree}

## ファイル詳細分析
${formatFileDetails(projectInfo.fileAnalysis)}

## 関数呼び出し階層
${formatFunctionHierarchy(projectInfo.functionHierarchy)}

## プロジェクト構造（ファイル一覧）
${projectInfo.structure}

上記の情報を基に、プロンプトで指定された形式でプロジェクト概要を生成してください。
特に以下の点を重視してください：
- 技術スタックは各カテゴリごとに整理して説明
- ファイル階層ツリーは提供された構造をそのまま使用
- ファイルの説明は各ファイルの実際の内容と機能に基づく
- 関数の説明は実際に検出された関数の役割に基づく
- 関数呼び出し階層は実際の呼び出し関係に基づく
`;

    // 2. 開発状況生成（開発者向け）
    const developmentPrompt = `
${prompts.development}

以下の開発状況情報を参考にして要約を生成してください：

## 現在のオープンIssues
${issues.length === 0 ? 'オープン中のIssueはありません' : issues.map(issue =>
  `[Issue #${issue.number}](issue-notes/${issue.number}.md): ${issue.title}\n${issue.body}\nラベル: ${issue.labels.join(', ')}`
).join('\n\n')}

## 最近の変更（過去7日間）
コミット履歴:
${recentChanges.commits.join('\n')}

変更されたファイル:
${recentChanges.changedFiles.join('\n')}

上記の情報を基に、プロンプトで指定された形式で開発状況を生成してください。
Issue番号を記載する際は、必ず [Issue #番号](issue-notes/番号.md) の形式でMarkdownリンクとして記載してください。
`;

    try {
      // プロジェクト概要生成
      console.log('Generating project overview...');
      const overviewResult = await this.model.generateContent(overviewPrompt);
      summaries.overview = this.cleanMarkdownCodeBlock(overviewResult.response.text());

      // 開発状況生成
      console.log('Generating development status...');
      const developmentResult = await this.model.generateContent(developmentPrompt);
      summaries.development = this.cleanMarkdownCodeBlock(developmentResult.response.text());

      console.log('Both summaries generated successfully');
      return summaries;
    } catch (error) {
      console.error('Error generating summaries:', error.message);
      throw error;
    }
  }

  /**
   * 生成した2つの要約をファイルに保存
   */
  async saveSummaries(summaries) {
    const now = new Date();
    const jstDate = new Date(now.getTime() + (9 * 60 * 60 * 1000)); // JST変換
    const dateStr = jstDate.toISOString().split('T')[0]; // YYYY-MM-DD
    const timeStr = jstDate.toISOString().replace('T', ' ').split('.')[0]; // YYYY-MM-DD HH:mm:ss

    // 出力先パスを this.overviewPath, this.developmentPath から取得
    const overviewPath = this.overviewPath;
    const developmentPath = this.developmentPath;

    // ディレクトリが存在しない場合は作成
    try {
      await fs.mkdir(path.dirname(overviewPath), { recursive: true });
    } catch (error) {}
    try {
      await fs.mkdir(path.dirname(developmentPath), { recursive: true });
    } catch (error) {}

    const filenames = [];

    // 1. プロジェクト概要を保存
    const overviewContent = `Last updated: ${dateStr}
\n${summaries.overview}\n\n---\nGenerated at: ${timeStr} JST\n`;
    await fs.writeFile(overviewPath, overviewContent, 'utf-8');
    console.log(`Project overview saved to: ${path.resolve(overviewPath)}`);
    filenames.push(overviewPath);

    // 2. 開発状況を保存
    const developmentContent = `Last updated: ${dateStr}\n\n${summaries.development}\n\n---\nGenerated at: ${timeStr} JST\n`;
    await fs.writeFile(developmentPath, developmentContent, 'utf-8');
    console.log(`Development status saved to: ${path.resolve(developmentPath)}`);
    filenames.push(developmentPath);

    return filenames;
  }
}

// メイン処理実行

// overviewPath, developmentPath, projectRoot を第3・第4・第5引数で取得
const overviewPromptPath = process.argv[2];
const developmentStatusPromptPath = process.argv[3];
const overviewPath = process.argv[4];
const developmentPath = process.argv[5];
const projectRoot = process.argv[6];

const generator = new ProjectSummaryGenerator(
  overviewPromptPath,
  developmentStatusPromptPath,
  overviewPath,
  developmentPath,
  projectRoot
);
generator.run();

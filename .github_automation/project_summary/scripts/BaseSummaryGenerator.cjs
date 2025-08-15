const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs').promises;
const path = require('path');
const GitUtils = require('./GitUtils.cjs');
const FileSystemUtils = require('./FileSystemUtils.cjs');
const ProjectAnalyzer = require('./ProjectAnalyzer.cjs');
const CodeAnalyzer = require('./CodeAnalyzer.cjs');

/**
 * 要約生成の共通基底クラス
 * 各種要約生成器の共通機能を提供
 */
class BaseSummaryGenerator {
  /**
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(projectRoot) {
    if (!projectRoot) {
      throw new Error('projectRoot is required');
    }
    
    this.projectRoot = projectRoot;
    this.gitUtils = new GitUtils(projectRoot);
    this.fileSystemUtils = new FileSystemUtils(projectRoot);
    this.codeAnalyzer = new CodeAnalyzer(projectRoot);
    this.projectAnalyzer = new ProjectAnalyzer(projectRoot, this.fileSystemUtils, this.codeAnalyzer);
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
  }

  /**
   * 環境変数とコミット状況をチェック
   * @returns {Promise<boolean>} 実行を続行するかどうか
   */
  async validateEnvironment() {
    // 環境変数チェック
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY environment variable is not set');
    }

    // 過去24時間のユーザーコミットチェック
    const hasUserCommits = await this.gitUtils.hasUserCommitsInLast24Hours();
    if (!hasUserCommits) {
      console.log('No user commits in the last 24 hours. Skipping summary generation.');
      return false;
    }

    return true;
  }

  /**
   * Gemini APIの出力から不要なコードブロック（```markdown等）を除去
   * @param {string} text - クリーニング対象のテキスト
   * @returns {string} クリーニング済みテキスト
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
   * @returns {Promise<Array>} Issues情報の配列
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
   * プロジェクト情報を収集
   * @returns {Promise<Object>} プロジェクト情報
   */
  async collectProjectInfo() {
    console.log('Collecting project data...');
    return await this.projectAnalyzer.collectProjectInfo();
  }

  /**
   * 最近の変更情報を収集
   * @returns {Promise<Object>} 最近の変更情報
   */
  async collectRecentChanges() {
    return await this.gitUtils.collectRecentChanges();
  }

  /**
   * 関数呼び出し階層をフォーマット
   * @param {Object} hierarchy - 関数階層オブジェクト
   * @returns {string} フォーマット済み階層テキスト
   */
  formatFunctionHierarchy(hierarchy) {
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
  }

  /**
   * ファイル詳細をフォーマット
   * @param {Array} fileAnalysis - ファイル分析結果
   * @returns {string} フォーマット済みファイル詳細
   */
  formatFileDetails(fileAnalysis) {
    return fileAnalysis.map(file => {
      const functions = file.functions.length > 0 ? file.functions.join(', ') : 'なし';
      const imports = file.imports.length > 0 ? file.imports.slice(0, 3).join(', ') : 'なし';
      return `**${file.path}** (${file.lines}行, ${file.size}バイト)\n  - 関数: ${functions}\n  - インポート: ${imports}`;
    }).join('\n\n');
  }

  /**
   * 技術スタックをフォーマット
   * @param {Object} techStack - 技術スタック情報
   * @returns {string} フォーマット済み技術スタック
   */
  formatTechStack(techStack) {
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
  }

  /**
   * 汎用ファイル保存機能
   * @param {string} content - 保存するコンテンツ
   * @param {string} outputPath - 出力先パス
   * @returns {Promise<string>} 保存されたファイルパス
   */
  async saveToFile(content, outputPath) {
    const now = new Date();
    const jstDate = new Date(now.getTime() + (9 * 60 * 60 * 1000)); // JST変換
    const dateStr = jstDate.toISOString().split('T')[0]; // YYYY-MM-DD
    const timeStr = jstDate.toISOString().replace('T', ' ').split('.')[0]; // YYYY-MM-DD HH:mm:ss

    // ディレクトリが存在しない場合は作成
    try {
      await fs.mkdir(path.dirname(outputPath), { recursive: true });
    } catch (error) {
      // ディレクトリ作成エラーは無視（既に存在する場合など）
    }

    // ファイル保存
    const fileContent = `Last updated: ${dateStr}\n\n${content}\n\n---\nGenerated at: ${timeStr} JST\n`;
    await fs.writeFile(outputPath, fileContent, 'utf-8');
    console.log(`Content saved to: ${path.resolve(outputPath)}`);
    
    return outputPath;
  }

  /**
   * プロンプトファイルを読み込み
   * @param {string} promptPath - プロンプトファイルのパス
   * @returns {Promise<string>} プロンプトの内容
   */
  async loadPrompt(promptPath) {
    try {
      return await fs.readFile(promptPath, 'utf-8');
    } catch (error) {
      console.warn(`Could not read ${promptPath}:`, error.message);
      throw new Error(`${promptPath} could not be read`);
    }
  }
}

module.exports = BaseSummaryGenerator;

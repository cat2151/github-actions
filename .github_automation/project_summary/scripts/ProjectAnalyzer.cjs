const fs = require('fs').promises;
const path = require('path');

/**
 * プロジェクト特化の分析機能を提供するクラス
 * どのコード分析を実行するかの戦略と、プロジェクト固有の判定ロジックを担当
 */
class ProjectAnalyzer {
  /**
   * @param {string} projectRoot - プロジェクトルートディレクトリ
   * @param {Object} fileSystemUtils - FileSystemUtilsインスタンス
   * @param {Object} codeAnalyzer - CodeAnalyzerインスタンス
   */
  constructor(projectRoot, fileSystemUtils, codeAnalyzer) {
    this.projectRoot = projectRoot;
    this.fileSystemUtils = fileSystemUtils;
    this.codeAnalyzer = codeAnalyzer;
  }

  /**
   * プロジェクト基本情報を収集
   */
  async collectProjectInfo() {
    console.log('Collecting project information...');

    const projectInfo = {
      name: '',
      description: '',
      structure: '',
      dependencies: {},
      techStack: {},
      fileTree: '',
      fileAnalysis: [],
      functionHierarchy: {}
    };

    try {
      // package.json から基本情報取得
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
      projectInfo.name = packageJson.name || 'Unknown';
      projectInfo.description = packageJson.description || '';
      projectInfo.dependencies = {
        dependencies: packageJson.dependencies || {},
        devDependencies: packageJson.devDependencies || {}
      };

      // 技術スタックの分析
      projectInfo.techStack = this.analyzeTechStack(packageJson);
    } catch (error) {
      console.warn('Could not read package.json:', error.message);
    }

    try {
      // README.ja.md を優先、なければ README.md を読み込み
      let readmePath = path.join(this.projectRoot, 'README.ja.md');
      try {
        await fs.access(readmePath);
      } catch {
        readmePath = path.join(this.projectRoot, 'README.md');
      }

      const readmeContent = await fs.readFile(readmePath, 'utf-8');
      // READMEの最初の500文字程度を取得
      projectInfo.description = readmeContent.substring(0, 500) + '...';
    } catch (error) {
      console.warn('Could not read README:', error.message);
    }

    try {
      // プロジェクト構造を取得（Node.jsのfsモジュールを使用）
      const structure = await this.fileSystemUtils.getProjectStructure();
      projectInfo.structure = structure;
    } catch (error) {
      console.warn('Could not get project structure:', error.message);
    }

    try {
      // 詳細なファイルツリーを取得
      console.log('Generating detailed file tree...');
      projectInfo.fileTree = await this.fileSystemUtils.getDetailedFileTree();
    } catch (error) {
      console.warn('Could not get detailed file tree:', error.message);
    }

    try {
      // 全ファイルの詳細分析（CodeAnalyzerに委譲）
      console.log('Analyzing all files...');
      projectInfo.fileAnalysis = await this.codeAnalyzer.analyzeAllFiles();
    } catch (error) {
      console.warn('Could not analyze files:', error.message);
    }

    try {
      // 関数呼び出し階層の分析（CodeAnalyzerに委譲）
      console.log('Analyzing function call hierarchy...');
      projectInfo.functionHierarchy = await this.codeAnalyzer.analyzeFunctionCallHierarchy(projectInfo.fileAnalysis);
    } catch (error) {
      console.warn('Could not analyze function hierarchy:', error.message);
      projectInfo.functionHierarchy = {};
    }

    return projectInfo;
  }

  /**
   * 技術スタックを分析
   */
  analyzeTechStack(packageJson) {
    const techStack = {
      frontend: [],
      music: [],
      backend: [],
      development: [],
      testing: [],
      buildTools: [],
      languageFeatures: [],
      automation: [],
      standards: []
    };

    const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };

    // フロントエンド技術
    if (this.fileSystemUtils.checkFileExists('src/index.html')) {
      techStack.frontend.push('HTML5 - ブラウザベースのMMLプレイヤー');
    }

    // 音楽・オーディオ技術
    if (deps['tonejs'] || this.fileSystemUtils.checkFileExists('src/**/*.js', 'Tone.js')) {
      techStack.music.push('Tone.js - Web Audio API音声ライブラリ');
    }

    if (this.fileSystemUtils.checkFileExists('src/index.html')) {
      const htmlContent = this.fileSystemUtils.readFileContent('src/index.html');
      if (htmlContent && htmlContent.includes('unpkg.com/tone')) {
        techStack.music.push('Tone.js CDN - unpkg経由でのライブラリ配信');
      }
    }

    if (this.fileSystemUtils.checkFileExists('src/grammar.pegjs') || this.fileSystemUtils.checkFileExists('src/**/*.js')) {
      techStack.music.push('MML (Music Macro Language) - 音楽記法パーサー');
    }

    if (deps['tonejs'] || this.fileSystemUtils.checkFileExists('src/**/*.js', 'Tone.js')) {
      techStack.music.push('Web Audio API - ブラウザ音声技術（Tone.js経由）');
    }

    // 開発環境・ランタイム
    techStack.development.push('Node.js runtime - JavaScript実行環境');

    if (packageJson.scripts && Object.keys(packageJson.scripts).length > 0) {
      const scriptCount = Object.keys(packageJson.scripts).length;
      techStack.development.push(`npm scripts - タスクランナー (${scriptCount}個のスクリプト)`);
    }

    // 開発ツール
    if (packageJson.packageManager === 'pnpm' || this.fileSystemUtils.checkFileExists('pnpm-lock.yaml')) {
      techStack.development.push('pnpm - 高速で効率的なパッケージマネージャー');
    }

    // テストツール・手法
    if (deps['vitest']) {
      techStack.testing.push('Vitest - 高速なViteベースのテストフレームワーク');
    }

    if (this.fileSystemUtils.checkFileExists('.gitignore')) {
      const gitignoreContent = this.fileSystemUtils.readFileContent('.gitignore');
      if (gitignoreContent && gitignoreContent.includes('TDD開発環境')) {
        techStack.testing.push('TDD (Test-Driven Development) - テスト駆動開発手法');
      }
    }

    // ビルドツール

    // ビルドツール
    if (deps['peggy']) {
      techStack.buildTools.push('Peggy - PEG (Parsing Expression Grammar) パーサージェネレーター');
    }

    // PegJSファイルの存在チェック
    if (this.fileSystemUtils.checkFileExists('src/grammar.pegjs')) {
      techStack.buildTools.push('PEG文法定義 - MML音楽記法のパーサー生成');
    }

    // 開発標準・設定
    if (this.fileSystemUtils.checkFileExists('.editorconfig')) {
      techStack.standards.push('EditorConfig - コード統一ルール');
    }

    // その他の開発ツール
    if (deps['@google/generative-ai']) {
      techStack.development.push('Google Generative AI - AI文書生成サポート');
    }

    if (deps['@octokit/rest']) {
      techStack.development.push('@octokit/rest - GitHub API連携');
    }

    // 言語機能
    if (packageJson.type === 'module') {
      techStack.languageFeatures.push('ES Modules - モダンなJavaScriptモジュールシステム');
    }

    // PegJSファイルの存在チェック
    if (this.fileSystemUtils.checkFileExists('src/grammar.pegjs')) {
      techStack.buildTools.push('PEG文法定義 - MML音楽記法のパーサー生成');
    }

    // GitHub Actionsの検出
    if (this.fileSystemUtils.checkFileExists('.github/workflows')) {
      const workflowFiles = this.fileSystemUtils.getWorkflowFiles();
      if (workflowFiles.length > 0) {
        techStack.automation.push(`GitHub Actions - CI/CD自動化 (${workflowFiles.length}個のワークフロー)`);

        // 特定のワークフローの詳細を追加
        workflowFiles.forEach(workflow => {
          const workflowName = workflow.replace('.yml', '').replace('.yaml', '');
          if (workflowName.includes('summary')) {
            techStack.automation.push('  - プロジェクト要約自動生成');
          }
          if (workflowName.includes('translate')) {
            techStack.automation.push('  - README多言語翻訳');
            techStack.automation.push('  - i18n automation - 自動翻訳ワークフロー');
          }
          if (workflowName.includes('issue')) {
            techStack.automation.push('  - Issue自動管理');
          }
        });
      }
    }

    return techStack;
  }
}

module.exports = ProjectAnalyzer;

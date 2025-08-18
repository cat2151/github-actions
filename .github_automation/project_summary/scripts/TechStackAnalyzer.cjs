/**
 * 技術スタック判定専用クラス
 * プロジェクトの依存関係とファイル構成から技術スタックを分析
 */
class TechStackAnalyzer {
  /**
   * @param {Object} fileSystemUtils - FileSystemUtilsインスタンス
   */
  constructor(fileSystemUtils) {
    this.fileSystemUtils = fileSystemUtils;
  }

  /**
   * 技術スタックを分析
   * @param {Object} packageJson - package.jsonの内容
   * @param {Object} projectInfo - プロジェクト情報
   */
  analyzeTechStack(packageJson, projectInfo = {}) {
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

    // 各カテゴリーの技術を検出
    this.detectFrontendTech(deps, techStack.frontend);
    this.detectMusicTech(deps, techStack.music);
    this.detectDevTools(packageJson, techStack.development);
    this.detectTestingTech(deps, techStack.testing);
    this.detectBuildTools(deps, techStack.buildTools);
    this.detectLanguageFeatures(packageJson, techStack.languageFeatures);
    this.detectAutomation(techStack.automation);
    this.detectStandards(techStack.standards);

    return techStack;
  }

  /**
   * フロントエンド技術を検出
   */
  detectFrontendTech(deps, frontendArray) {
    if (this.fileSystemUtils.checkFileExists('src/index.html')) {
      frontendArray.push('HTML5 - ブラウザベースのMMLプレイヤー');
    }
  }

  /**
   * 音楽・オーディオ技術を検出
   */
  detectMusicTech(deps, musicArray) {
    if (this._checkDependency(deps, 'tonejs') || this.fileSystemUtils.checkFileExists('src/**/*.js', 'Tone.js')) {
      musicArray.push('Tone.js - Web Audio API音声ライブラリ');
      musicArray.push('Web Audio API - ブラウザ音声技術（Tone.js経由）');
    }

    if (this.fileSystemUtils.checkFileExists('src/index.html')) {
      const htmlContent = this.fileSystemUtils.readFileContent('src/index.html');
      if (htmlContent && htmlContent.includes('unpkg.com/tone')) {
        musicArray.push('Tone.js CDN - unpkg経由でのライブラリ配信');
      }
    }

    if (this.fileSystemUtils.checkFileExists('src/grammar.pegjs') || this.fileSystemUtils.checkFileExists('src/**/*.js')) {
      musicArray.push('MML (Music Macro Language) - 音楽記法パーサー');
    }
  }

  /**
   * 開発ツールを検出
   */
  detectDevTools(packageJson, devArray) {
    // 基本ランタイム
    devArray.push('Node.js runtime - JavaScript実行環境');

    // npm scripts
    if (packageJson.scripts && Object.keys(packageJson.scripts).length > 0) {
      const scriptCount = Object.keys(packageJson.scripts).length;
      devArray.push(`npm scripts - タスクランナー (${scriptCount}個のスクリプト)`);
    }

    // パッケージマネージャー
    if (packageJson.packageManager === 'pnpm' || this.fileSystemUtils.checkFileExists('pnpm-lock.yaml')) {
      devArray.push('pnpm - 高速で効率的なパッケージマネージャー');
    }

    // AI・API関連
    const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
    if (deps['@google/generative-ai']) {
      devArray.push('Google Generative AI - AI文書生成サポート');
    }

    if (deps['@octokit/rest']) {
      devArray.push('@octokit/rest - GitHub API連携');
    }
  }

  /**
   * テスト技術を検出
   */
  detectTestingTech(deps, testingArray) {
    if (this._checkDependency(deps, 'vitest')) {
      testingArray.push('Vitest - 高速なViteベースのテストフレームワーク');
    }

    if (this.fileSystemUtils.checkFileExists('.gitignore')) {
      const gitignoreContent = this.fileSystemUtils.readFileContent('.gitignore');
      if (gitignoreContent && gitignoreContent.includes('TDD開発環境')) {
        testingArray.push('TDD (Test-Driven Development) - テスト駆動開発手法');
      }
    }
  }

  /**
   * ビルドツールを検出
   */
  detectBuildTools(deps, buildArray) {
    if (this._checkDependency(deps, 'peggy')) {
      buildArray.push('Peggy - PEG (Parsing Expression Grammar) パーサージェネレーター');
    }

    if (this.fileSystemUtils.checkFileExists('src/grammar.pegjs')) {
      buildArray.push('PEG文法定義 - MML音楽記法のパーサー生成');
    }
  }

  /**
   * 言語機能を検出
   */
  detectLanguageFeatures(packageJson, languageArray) {
    if (packageJson.type === 'module') {
      languageArray.push('ES Modules - モダンなJavaScriptモジュールシステム');
    }
  }

  /**
   * 自動化・CI/CDを検出
   */
  detectAutomation(automationArray) {
    if (this.fileSystemUtils.checkFileExists('.github/workflows')) {
      const workflowFiles = this._detectWorkflows();
      if (workflowFiles.length > 0) {
        automationArray.push(`GitHub Actions - CI/CD自動化 (${workflowFiles.length}個のワークフロー)`);

        // 特定のワークフローの詳細を追加
        workflowFiles.forEach(workflow => {
          const workflowName = workflow.replace('.yml', '').replace('.yaml', '');
          if (workflowName.includes('summary')) {
            automationArray.push('  - プロジェクト要約自動生成');
          }
          if (workflowName.includes('translate')) {
            automationArray.push('  - README多言語翻訳');
            automationArray.push('  - i18n automation - 自動翻訳ワークフロー');
          }
          if (workflowName.includes('issue')) {
            automationArray.push('  - Issue自動管理');
          }
        });
      }
    }
  }

  /**
   * 開発標準を検出
   */
  detectStandards(standardsArray) {
    if (this.fileSystemUtils.checkFileExists('.editorconfig')) {
      standardsArray.push('EditorConfig - コード統一ルール');
    }
  }

  /**
   * 依存関係をチェック
   * @private
   */
  _checkDependency(deps, packageName) {
    return deps.hasOwnProperty(packageName);
  }

  /**
   * ワークフローファイルを検出
   * @private
   */
  _detectWorkflows() {
    return this.fileSystemUtils.getWorkflowFiles();
  }
}

module.exports = TechStackAnalyzer;

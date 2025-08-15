const ProjectOverviewGenerator = require('./ProjectOverviewGenerator.cjs');
const DevelopmentStatusGenerator = require('./DevelopmentStatusGenerator.cjs');

/**
 * プロジェクト要約コーディネーター
 * 既存のProjectSummaryGeneratorとの後方互換性を保ちつつ、
 * 疎結合化された2つの生成器を協調実行する
 */
class ProjectSummaryCoordinator {
  /**
   * @param {string} overviewPromptPath - プロジェクト概要プロンプトのパス（必須）
   * @param {string} developmentStatusPromptPath - 開発状況プロンプトのパス（必須）
   * @param {string} overviewPath - プロジェクト概要出力先パス（必須）
   * @param {string} developmentPath - 開発状況出力先パス（必須）
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(overviewPromptPath, developmentStatusPromptPath, overviewPath, developmentPath, projectRoot) {
    // 引数のバリデーション（既存のコンストラクタと同じ）
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

    // 各生成器を初期化
    this.overviewGenerator = new ProjectOverviewGenerator(overviewPromptPath, overviewPath, projectRoot);
    this.developmentGenerator = new DevelopmentStatusGenerator(developmentStatusPromptPath, developmentPath, projectRoot);
  }

  /**
   * メイン実行関数
   * 既存のProjectSummaryGenerator.run()と同じインターフェース
   * @returns {Promise<Array<string>>} 生成されたファイルパスの配列
   */
  async run() {
    try {
      console.log('Starting project summary generation...');

      const filenames = [];
      
      // 並列実行で効率化
      const [overviewFile, developmentFile] = await Promise.all([
        this.overviewGenerator.run(),
        this.developmentGenerator.run()
      ]);

      // 成功したファイルのみを結果に追加
      if (overviewFile) {
        filenames.push(overviewFile);
      }
      if (developmentFile) {
        filenames.push(developmentFile);
      }

      if (filenames.length > 0) {
        console.log('Project summary generation completed successfully!');
        console.log(`Generated files: ${filenames.join(', ')}`);
      } else {
        console.log('No files were generated.');
      }

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
   * プロジェクト概要のみ生成
   * @returns {Promise<string>} 生成されたファイルのパス
   */
  async generateOverviewOnly() {
    console.log('Generating project overview only...');
    return await this.overviewGenerator.run();
  }

  /**
   * 開発状況のみ生成
   * @returns {Promise<string>} 生成されたファイルのパス
   */
  async generateDevelopmentStatusOnly() {
    console.log('Generating development status only...');
    return await this.developmentGenerator.run();
  }
}

module.exports = ProjectSummaryCoordinator;

const BaseSummaryGenerator = require('./BaseSummaryGenerator.cjs');

/**
 * プロジェクト概要生成器
 * 来訪者向けのプロジェクト紹介を生成
 */
class ProjectOverviewGenerator extends BaseSummaryGenerator {
  /**
   * @param {string} overviewPromptPath - プロジェクト概要プロンプトのパス（必須）
   * @param {string} overviewPath - プロジェクト概要出力先パス（必須）
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(overviewPromptPath, overviewPath, projectRoot) {
    super(projectRoot);
    
    if (!overviewPromptPath) {
      throw new Error('overviewPromptPath is required as the first argument');
    }
    if (!overviewPath) {
      throw new Error('overviewPath is required as the second argument');
    }
    
    this.overviewPromptPath = overviewPromptPath;
    this.overviewPath = overviewPath;
  }

  /**
   * メイン実行関数
   * @returns {Promise<string>} 生成されたファイルのパス
   */
  async run() {
    try {
      console.log('Starting project overview generation...');

      // 環境変数とコミット状況をチェック
      const shouldContinue = await this.validateEnvironment();
      if (!shouldContinue) {
        return null;
      }

      // データ収集
      const [projectInfo, prompt] = await Promise.all([
        this.collectProjectInfo(),
        this.loadPrompt(this.overviewPromptPath)
      ]);

      // プロジェクト概要生成
      const overview = await this.generateOverview(projectInfo, prompt);

      // ファイル保存
      const filename = await this.saveToFile(overview, this.overviewPath);

      console.log('Project overview generation completed successfully!');
      console.log(`Generated file: ${filename}`);
      return filename;

    } catch (error) {
      console.error('Project overview generation failed:', error.message);
      if (error.response) {
        console.error('API Response:', error.response);
      }
      throw error;
    }
  }

  /**
   * プロジェクト概要を生成
   * @param {Object} projectInfo - プロジェクト情報
   * @param {string} prompt - プロンプト内容
   * @returns {Promise<string>} 生成された概要
   */
  async generateOverview(projectInfo, prompt) {
    console.log('Generating project overview with Gemini API...');

    const overviewPrompt = `
${prompt}

以下のプロジェクト情報を参考にして要約を生成してください：

## プロジェクト情報
名前: ${projectInfo.name}
説明: ${projectInfo.description}

依存関係:
${JSON.stringify(projectInfo.dependencies, null, 2)}

## 技術スタック
${this.formatTechStack(projectInfo.techStack)}

## ファイル階層ツリー
${projectInfo.fileTree}

## ファイル詳細分析
${this.formatFileDetails(projectInfo.fileAnalysis)}

## 関数呼び出し階層
${this.formatFunctionHierarchy(projectInfo.functionHierarchy)}

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

    try {
      const result = await this.model.generateContent(overviewPrompt);
      return this.cleanMarkdownCodeBlock(result.response.text());
    } catch (error) {
      console.error('Error generating project overview:', error.message);
      throw error;
    }
  }
}

module.exports = ProjectOverviewGenerator;

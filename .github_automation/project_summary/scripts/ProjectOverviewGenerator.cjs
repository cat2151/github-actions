const BaseGenerator = require('./BaseGenerator.cjs');
const ProjectAnalysisOrchestrator = require('./ProjectAnalysisOrchestrator.cjs');

/**
 * プロジェクト概要生成器
 * AI生成に特化した軽量クラス
 */
class ProjectOverviewGenerator extends BaseGenerator {
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
    this.orchestrator = new ProjectAnalysisOrchestrator(projectRoot);
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

      // データ収集・分析（新しいオーケストレーターを使用）
      const [formattedReport, prompt] = await Promise.all([
        this.orchestrator.generateFormattedReport(),
        this.loadPrompt(this.overviewPromptPath)
      ]);

      // プロジェクト概要生成
      const overview = await this.generateOverview(formattedReport, prompt);

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
   * @param {Object} formattedReport - フォーマット済み分析結果
   * @param {string} prompt - プロンプト内容
   * @returns {Promise<string>} 生成された概要
   */
  async generateOverview(formattedReport, prompt) {
    console.log('Generating project overview with Gemini API...');

    const overviewPrompt = this._buildPrompt(formattedReport, prompt);

    try {
      const result = await this.model.generateContent(overviewPrompt);
      return this._processAIResponse(result.response.text());
    } catch (error) {
      console.error('Error generating project overview:', error.message);
      throw error;
    }
  }

  /**
   * プロンプトを構築
   * @private
   */
  _buildPrompt(formattedReport, basePrompt) {
    return `
${basePrompt}

以下のプロジェクト情報を参考にして要約を生成してください：

## プロジェクト情報
名前: ${formattedReport.name}
説明: ${formattedReport.description}

依存関係:
${JSON.stringify(formattedReport.dependencies, null, 2)}

## 技術スタック
${formattedReport.formatted.techStack}

## ファイル階層ツリー
${formattedReport.fileTree}

## ファイル詳細分析
${formattedReport.formatted.fileDetails}

## 関数呼び出し階層
${formattedReport.formatted.functionHierarchy}

## プロジェクト構造（ファイル一覧）
${formattedReport.structure}

上記の情報を基に、プロンプトで指定された形式でプロジェクト概要を生成してください。
特に以下の点を重視してください：
- 技術スタックは各カテゴリごとに整理して説明
- ファイル階層ツリーは提供された構造をそのまま使用
- ファイルの説明は各ファイルの実際の内容と機能に基づく
- 関数の説明は実際に検出された関数の役割に基づく
- 関数呼び出し階層は実際の呼び出し関係に基づく
`;
  }

  /**
   * AI応答を処理
   * @private
   */
  _processAIResponse(response) {
    return this.cleanMarkdownCodeBlock(response);
  }
}

module.exports = ProjectOverviewGenerator;

const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs').promises;
const path = require('path');

/**
 * 生成器の共通基底クラス
 * 全ての生成器で共通して使用される機能を提供
 */
class BaseGenerator {
  /**
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(projectRoot) {
    if (!projectRoot) {
      throw new Error('projectRoot is required');
    }

    this.projectRoot = projectRoot;
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

    // GitUtilsが必要な場合は子クラスでオーバーライド
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

module.exports = BaseGenerator;

const BaseSummaryGenerator = require('./BaseSummaryGenerator.cjs');

/**
 * 開発状況生成器
 * 開発者向けの進捗状況を生成
 */
class DevelopmentStatusGenerator extends BaseSummaryGenerator {
  /**
   * @param {string} developmentStatusPromptPath - 開発状況プロンプトのパス（必須）
   * @param {string} developmentPath - 開発状況出力先パス（必須）
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(developmentStatusPromptPath, developmentPath, projectRoot) {
    super(projectRoot);
    
    if (!developmentStatusPromptPath) {
      throw new Error('developmentStatusPromptPath is required as the first argument');
    }
    if (!developmentPath) {
      throw new Error('developmentPath is required as the second argument');
    }
    
    this.developmentStatusPromptPath = developmentStatusPromptPath;
    this.developmentPath = developmentPath;
  }

  /**
   * メイン実行関数
   * @returns {Promise<string>} 生成されたファイルのパス
   */
  async run() {
    try {
      console.log('Starting development status generation...');

      // 環境変数とコミット状況をチェック
      const shouldContinue = await this.validateEnvironment();
      if (!shouldContinue) {
        return null;
      }

      // データ収集
      const [issues, recentChanges, prompt] = await Promise.all([
        this.collectIssues(),
        this.collectRecentChanges(),
        this.loadPrompt(this.developmentStatusPromptPath)
      ]);

      // Octokitのインストールが必要な場合のハンドリング
      if (issues.length === 0 && !process.env.GITHUB_TOKEN) {
        console.warn('GITHUB_TOKEN not set, skipping Issues collection');
      }

      // 開発状況生成
      const developmentStatus = await this.generateDevelopmentStatus(issues, recentChanges, prompt);

      // ファイル保存
      const filename = await this.saveToFile(developmentStatus, this.developmentPath);

      console.log('Development status generation completed successfully!');
      console.log(`Generated file: ${filename}`);
      return filename;

    } catch (error) {
      console.error('Development status generation failed:', error.message);
      if (error.response) {
        console.error('API Response:', error.response);
      }
      throw error;
    }
  }

  /**
   * 開発状況を生成
   * @param {Array} issues - Issues情報
   * @param {Object} recentChanges - 最近の変更情報
   * @param {string} prompt - プロンプト内容
   * @returns {Promise<string>} 生成された開発状況
   */
  async generateDevelopmentStatus(issues, recentChanges, prompt) {
    console.log('Generating development status with Gemini API...');

    const developmentPrompt = `
${prompt}

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
      const result = await this.model.generateContent(developmentPrompt);
      return this.cleanMarkdownCodeBlock(result.response.text());
    } catch (error) {
      console.error('Error generating development status:', error.message);
      throw error;
    }
  }
}

module.exports = DevelopmentStatusGenerator;

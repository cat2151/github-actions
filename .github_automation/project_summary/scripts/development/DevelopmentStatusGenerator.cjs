const BaseGenerator = require('../shared/BaseGenerator.cjs');
const IssueTracker = require('./IssueTracker.cjs');

/**
 * 開発状況生成器
 * 開発者向けの進捗状況を生成
 */
class DevelopmentStatusGenerator extends BaseGenerator {
  /**
   * @param {string} developmentStatusPromptPath - 開発状況プロンプトのパス（必須）
   * @param {string} developmentPath - 開発状況出力先パス（必須）
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(developmentStatusPromptPath, developmentPath, developmentGeneratedPath, projectRoot) {
    super(projectRoot);

    if (!developmentStatusPromptPath) {
      throw new Error('developmentStatusPromptPath is required as the first argument');
    }
    if (!developmentPath) {
      throw new Error('developmentPath is required as the second argument');
    }
    if (!developmentGeneratedPath) {
      throw new Error('developmentGeneratedPath is required as the third argument');
    }

    this.developmentStatusPromptPath = developmentStatusPromptPath;
    this.developmentPath = developmentPath;
    this.developmentGeneratedPath = developmentGeneratedPath;
  }

  /**
   * 環境変数とコミット状況をチェック
   * @returns {Promise<boolean>} 実行を続行するかどうか
   */
  async validateEnvironment() {
    // 基底クラスの環境変数チェック
    await super.validateEnvironment();

    // 過去24時間のユーザーコミットチェック
    const hasUserCommits = await IssueTracker.hasRecentUserCommits(this.projectRoot);
    if (!hasUserCommits) {
      console.log('No user commits in the last 24 hours. Skipping summary generation.');
      return false;
    }

    return true;
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
        IssueTracker.collectIssues(this.projectRoot),
        IssueTracker.collectRecentChanges(this.projectRoot),
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

    // Issueノート取得関数を利用
    const IssueTracker = require('./IssueTracker.cjs');
    const issuesWithNotes = issues.map(issue => ({
      ...issue,
      noteContent: IssueTracker.getIssueNoteSync(issue.number, this.projectRoot)
    }));

    const issuesSection = issuesWithNotes.length === 0
      ? 'オープン中のIssueはありません'
      : issuesWithNotes.map(formatIssueSection).join('\n\n');

    // 1Issue分のMarkdown出力を生成
    function formatIssueSection(issue) {
      // generated-docs/ からの相対パスでリンクを生成
      const relativeIssueNoteUrl = `../issue-notes/${issue.number}.md`;
      return [
        `## [Issue #${issue.number}](${relativeIssueNoteUrl}): ${issue.title}`,
        issue.body,
        `ラベル: ${issue.labels.join(', ')}`,
        `--- issue-notes/${issue.number}.md の内容 ---`,
        '',
        '```markdown',
        issue.noteContent,
        '```'
      ].join('\n');
    }

    // プロンプト内のプレースホルダーを置換し、最終的なプロンプトを生成する。具体的には、projectのissuesとrecentChangesを埋め込む。
    const developmentPrompt = generatePrompt(prompt, issuesSection, recentChanges);

    function generatePrompt(prompt, issuesSection, recentChanges) {
      function fillTemplate(template, values) {
        return template.replace(/\$\{(\w+)\}/g, (match, key) => {
          return key in values ? values[key] : match;
        });
      }
      return fillTemplate(prompt, {
        issuesSection,
        commits: recentChanges.commits.join('\n'),
        changedFiles: recentChanges.changedFiles.join('\n')
      });
    }

    // プロンプトをファイルに保存する。開発効率化用。
    await this.saveToFile(developmentPrompt, this.developmentGeneratedPath);
    console.log(`Development status prompt saved to: ${this.developmentGeneratedPath}`);

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

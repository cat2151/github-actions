const BaseGenerator = require('./BaseGenerator.cjs');
const GitUtils = require('./GitUtils.cjs');

/**
 * Issue追跡機能の基底クラス
 * GitHub Issues、Git履歴などの動的な開発状況追跡機能を提供
 */
class BaseIssueTracker extends BaseGenerator {
  /**
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(projectRoot) {
    super(projectRoot);
    
    this.gitUtils = new GitUtils(projectRoot);
  }

  /**
   * 環境変数とコミット状況をチェック
   * GitUtilsを使用してコミット履歴もチェック
   * @returns {Promise<boolean>} 実行を続行するかどうか
   */
  async validateEnvironment() {
    // 基底クラスの環境変数チェック
    await super.validateEnvironment();

    // 過去24時間のユーザーコミットチェック
    const hasUserCommits = await this.gitUtils.hasUserCommitsInLast24Hours();
    if (!hasUserCommits) {
      console.log('No user commits in the last 24 hours. Skipping summary generation.');
      return false;
    }

    return true;
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
   * 最近の変更情報を収集
   * @returns {Promise<Object>} 最近の変更情報
   */
  async collectRecentChanges() {
    return await this.gitUtils.collectRecentChanges();
  }
}

module.exports = BaseIssueTracker;

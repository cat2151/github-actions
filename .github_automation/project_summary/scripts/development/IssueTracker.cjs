const GitUtils = require('./GitUtils.cjs');

/**
 * Issue追跡ユーティリティ関数集
 * GitHub Issues、Git履歴などの動的な開発状況追跡機能を提供
 */

/**
 * GitHub Issues情報を収集
 * @param {string} projectRoot - プロジェクトルートパス
 * @returns {Promise<Array>} Issues情報の配列
 */
async function collectIssues(projectRoot) {
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
 * @param {string} projectRoot - プロジェクトルートパス
 * @returns {Promise<Object>} 最近の変更情報
 */
async function collectRecentChanges(projectRoot) {
  const gitUtils = new GitUtils(projectRoot);
  return await gitUtils.collectRecentChanges();
}

/**
 * ユーザーコミットの存在チェック
 * @param {string} projectRoot - プロジェクトルートパス
 * @returns {Promise<boolean>} 過去24時間にユーザーコミットがあるか
 */
async function hasRecentUserCommits(projectRoot) {
  const gitUtils = new GitUtils(projectRoot);
  return await gitUtils.hasUserCommitsInLast24Hours();
}

module.exports = {
  collectIssues,
  collectRecentChanges,
  hasRecentUserCommits
};

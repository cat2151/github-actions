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
 * 指定したIssue番号のノートmdファイル内容を同期取得 ※まず開発しやすさ優先で、決め打ちで必ずノートがある想定で開発する。これによりノート取得失敗バグを検知できる
 * ノートファイルが存在しない、または読み取りに失敗した場合はエラーメッセージを出力し、プロセスをエラー終了させる。
 * @param {number|string} issueNumber - Issue番号
 * @param {string} projectRoot - プロジェクトルートパス
 * @returns {string} ノート内容
 */
function getIssueNoteSync(issueNumber, projectRoot) {
  const fs = require('fs');
  const path = require('path');
  const notePath = path.resolve(projectRoot, 'issue-notes', `${issueNumber}.md`);
  if (!fs.existsSync(notePath)) {
    console.error(`Issueノートが存在しません: ${notePath}`);
    process.exit(1);
  }
  try {
    return fs.readFileSync(notePath, 'utf-8');
  } catch (e) {
    console.error(`Issueノートの読み取りに失敗しました: ${notePath}`);
    console.error(e);
    process.exit(1);
  }
}

module.exports = {
  collectIssues,
  collectRecentChanges,
  getIssueNoteSync
};

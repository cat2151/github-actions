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
 * 指定したIssue番号のノートmdファイル内容を同期取得
 * 注意: 呼び出し元が別リポジトリ（共有ワークフロー等）である場合、対象プロジェクトに issue-notes が存在しないことがあり得る。
 * そのためノートが見つからない/読み取り失敗の際は致命的にプロセスを終了せず、警告を出して空文字を返すように変更する。
 * @param {number|string} issueNumber - Issue番号
 * @param {string} projectRoot - プロジェクトルートパス
 * @returns {string} ノート内容
 */
function getIssueNoteSync(issueNumber, projectRoot) {
  const fs = require('fs');
  const path = require('path');
  const notePath = path.resolve(projectRoot, 'issue-notes', `${issueNumber}.md`);

  try {
    return fs.readFileSync(notePath, 'utf-8');
  } catch (e) {
    // 読み取り失敗も致命的扱いせず警告で済ませる
    if (e && e.code === 'ENOENT') {
      // ファイルが存在しない場合も空文字を返して処理継続可能にする
      console.warn(`Issueノートが存在しません: ${notePath}`);
      return '';
    }

    const code = e && e.code ? ` (${e.code})` : '';
    const message = e && e.message ? e.message : e;
    console.warn(`Issueノートの読み取りに失敗しました${code}: ${notePath} - ${message}`);
    return '';
  }
}

module.exports = {
  collectIssues,
  collectRecentChanges,
  getIssueNoteSync
};

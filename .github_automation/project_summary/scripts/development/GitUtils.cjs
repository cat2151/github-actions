const { execSync } = require('child_process');

/**
 * Git操作のユーティリティクラス
 */
class GitUtils {
  constructor(projectRoot) {
    if (!projectRoot) {
      throw new Error('projectRoot is required');
    }
    this.projectRoot = projectRoot;
  }

  /**
   * 最近の変更履歴を取得
   */
  async collectRecentChanges() {
    console.log('Collecting recent changes...');

    try {
      // 過去7日間のコミット履歴
      const commits = execSync('git log --since="7 days ago" --oneline', {
        cwd: this.projectRoot,
        encoding: 'utf-8',
        stdio: 'pipe'
      }).trim().split('\n').slice(0, 10);

      // 最近変更されたファイル
      const changedFiles = execSync('git diff --name-only HEAD~7..HEAD', {
        cwd: this.projectRoot,
        encoding: 'utf-8',
        stdio: 'pipe'
      }).trim().split('\n').filter(file => file.length > 0);

      return {
        commits,
        changedFiles
      };
    } catch (error) {
      console.warn('Could not get recent changes:', error.message);
      return {
        commits: [],
        changedFiles: []
      };
    }
  }
}

module.exports = GitUtils;

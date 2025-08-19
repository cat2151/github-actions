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
   * 過去24時間以内にユーザーコミットがあるかチェック
   */
  async hasUserCommitsInLast24Hours() {
    try {
      console.log('Checking for user commits in the last 24 hours...');

      // 過去24時間のコミット履歴を取得（author情報付き）
      const gitCommand = `git log --since="24 hours ago" --pretty=format:"%H %an %s" --oneline`;

      const result = execSync(gitCommand, {
        cwd: this.projectRoot,
        encoding: 'utf-8',
        stdio: 'pipe'
      });

      const allCommits = result.trim();
      if (!allCommits) {
        console.log('No commits found in the last 24 hours.');
        return false;
      }

      // GitHub Actionsによるコミットを除外
      const userCommits = allCommits
        .split('\n')
        .filter(line => {
          const lowerLine = line.toLowerCase();
          return !lowerLine.includes('github-actions') &&
                 !lowerLine.includes('action@github.com');
        });

      const hasCommits = userCommits.length > 0;

      console.log(`User commits found: ${hasCommits}`);
      if (hasCommits) {
        console.log('Recent user commits:');
        userCommits.forEach(commit => console.log(commit));
      }

      return hasCommits;
    } catch (error) {
      console.error('Error checking commits:', error.message);
      return false;
    }
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

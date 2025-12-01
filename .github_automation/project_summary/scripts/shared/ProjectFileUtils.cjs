const fs = require('fs');
const path = require('path');

/**
 * projectのfile一覧取得など担当するユーティリティクラス
 */
class ProjectFileUtils {
  constructor(projectRoot) {
    if (!projectRoot) {
      throw new Error('projectRoot is required');
    }
    this.projectRoot = projectRoot;
  }


  /**
   * projectのファイル一覧を生成
   * @param {Array} issues - Issues情報
   * @param {Object} recentChanges - 最近の変更情報
   * @param {string} prompt - プロンプト内容
   * @returns {Promise<string>} 生成された開発状況
   */
  getProjectFiles(dir = this.projectRoot) {
    // 再帰的にファイル一覧を取得し、Markdownリスト形式で返す
    const results = [];
    const excludeDirs = ['.git', 'node_modules'];
    function walk(currentDir, base = '') {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory() && excludeDirs.includes(entry.name)) {
          continue;
        }
        const relPath = path.join(base, entry.name).replace(/\\/g, '/');
        if (entry.isDirectory()) {
          walk(path.join(currentDir, entry.name), relPath + '/');
        } else {
          results.push(relPath);
        }
      }
    }
    walk(dir);
    // Markdownリスト形式で返す
    return results.length === 0 ? '（ファイルなし）' : results.map(f => `- ${f}`).join('\n');
  }

  /**
   * 指定filenameにマッチする全ファイル内容をmarkdown形式で返す
   * @param {string} filename - 対象のファイル名
   * @returns {string} markdown文字列
   */
  getFileContentsMarkdown(filename) {
  const map = this.getFilenameToPathsMap();
    if (!map[filename] || map[filename].length === 0) {
      return `（該当ファイルなし）`;
    }
    return map[filename].map(relPath => {
      let content = '';
      try {
        content = fs.readFileSync(path.join(this.projectRoot, relPath), 'utf8');
      } catch (e) {
        content = `（ファイル読み込み失敗: ${e.message}）`;
      }
      const ext = relPath.split('.').pop();
      return [
        `### ${relPath}`,
        '```' + ext, // for chord2mml : https://github.com/cat2151/chord2mml/issues/4
        '{% raw %}',
        content,
        '{% endraw %}',
        '```'
      ].join('\n');
    }).join('\n\n');
  }

  /**
   * prompt内で言及されているファイル名の内容をmarkdown文字列群として返す
   * @param {string} prompt - プロンプト全文
   * @returns {string} markdown文字列群
   */
  getMentionedFileContentsInPrompt(prompt) {
    const map = this.getFilenameToPathsMap();
    const mentionedFiles = Object.keys(map).filter(filename => prompt.includes(filename));
    if (mentionedFiles.length === 0) {
      return '';
    }
    // 各ファイル名について内容取得
    return mentionedFiles.map(filename => this.getFileContentsMarkdown(filename)).join('\n\n');
  }

  /**
   * プロジェクト全体のファイル名→相対パス配列のmapを返す
   * @returns {Object} { [filename]: [relativePath, ...] }
   */
  getFilenameToPathsMap(dir = this.projectRoot) {
  const map = {};
  const excludeDirs = ['.git', 'node_modules'];
    function walk(currentDir, base = '') {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory() && excludeDirs.includes(entry.name)) {
          continue;
        }
        const relPath = path.join(base, entry.name).replace(/\\/g, '/');
        if (entry.isDirectory()) {
          walk(path.join(currentDir, entry.name), relPath + '/');
        } else {
          const basename = entry.name;
          if (!map[basename]) {
            map[basename] = [];
          }
          map[basename].push(relPath);
        }
      }
    }
    walk(dir);
    return map;
  }
}

module.exports = ProjectFileUtils;


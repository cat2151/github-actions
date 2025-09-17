const fs = require('fs').promises;
const path = require('path');

/**
 * ファイルシステム操作を担当するユーティリティクラス
 */
class FileSystemUtils {
  constructor(projectRoot) {
    if (!projectRoot) {
      throw new Error('projectRoot is required');
    }
    this.projectRoot = projectRoot;
  }

  /**
   * ファイル存在チェック（簡易版）
   */
  checkFileExists(pattern, keyword = null) {
    try {
      if (pattern.includes('**')) {
        // glob的なパターンの場合は簡易チェック
        const basePath = pattern.split('**')[0];
        const fullPath = path.join(this.projectRoot, basePath);
        return require('fs').existsSync(fullPath);
      } else {
        // 具体的なファイルパス
        const fullPath = path.join(this.projectRoot, pattern);
        return require('fs').existsSync(fullPath);
      }
    } catch (error) {
      return false;
    }
  }

  /**
   * GitHub Actionsワークフローファイルを取得 ※用途は、調査対象projectにどのようなworkflowsがあるかを把握するためである
   */
  getWorkflowFiles() {
    try {
      const workflowsPath = path.join(this.projectRoot, '.github/workflows');

      if (!require('fs').existsSync(workflowsPath)) {
        return [];
      }

      const files = require('fs').readdirSync(workflowsPath);
      return files.filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
    } catch (error) {
      return [];
    }
  }

  /**
   * ファイル内容を読み取る（簡易版）
   */
  readFileContent(filePath) {
    try {
      const fullPath = path.join(this.projectRoot, filePath);

      if (require('fs').existsSync(fullPath)) {
        return require('fs').readFileSync(fullPath, 'utf-8');
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  /**
   * プロジェクト構造を取得（クロスプラットフォーム対応）
   */
  async getProjectStructure() {
    const extensions = ['.js', '.ts', '.json', '.md', '.html', '.css', '.pegjs'];
    const excludeDirs = ['.git', 'node_modules', '.github'];
    const files = [];

    const walkDir = async (dir, relativePath = '') => {
      try {
        const items = await fs.readdir(path.join(this.projectRoot, dir));

        for (const item of items) {
          const fullPath = path.join(dir, item);
          const absolutePath = path.join(this.projectRoot, fullPath);
          const relativeItemPath = path.join(relativePath, item);

          // 除外ディレクトリをスキップ
          if (excludeDirs.includes(item)) {
            continue;
          }

          try {
            const stat = await fs.stat(absolutePath);
            if (stat.isDirectory()) {
              await walkDir(fullPath, relativeItemPath);
            } else if (stat.isFile()) {
              const ext = path.extname(item);
              if (extensions.includes(ext)) {
                files.push(relativeItemPath.replace(/\\/g, '/'));
                if (files.length >= 30) break; // 最大30ファイル
              }
            }
          } catch (error) {
            // ファイル/ディレクトリアクセスエラーをスキップ
            continue;
          }
        }
      } catch (error) {
        // ディレクトリ読み取りエラーをスキップ
      }
    };

    await walkDir('.');
    return files.join('\n');
  }

  /**
   * 詳細なファイル階層ツリーを生成
   */
  async getDetailedFileTree() {
    const excludeDirs = ['.git', 'node_modules', '.github'];
    const tree = [];

    const buildTree = async (dir, depth = 0) => {
      try {
        const items = await fs.readdir(path.join(this.projectRoot, dir));
        items.sort();

        for (const item of items) {
          if (excludeDirs.includes(item)) continue;

          const fullPath = path.join(dir, item);
          const absolutePath = path.join(this.projectRoot, fullPath);
          const indent = '  '.repeat(depth);

          try {
            const stat = await fs.stat(absolutePath);
            if (stat.isDirectory()) {
              tree.push(`${indent}📁 ${item}/`);
              await buildTree(fullPath, depth + 1);
            } else {
              const ext = path.extname(item);
              const icon = this.getFileIcon(ext);
              tree.push(`${indent}${icon} ${item}`);
            }
          } catch (error) {
            continue;
          }
        }
      } catch (error) {
        // ディレクトリ読み取りエラーをスキップ
      }
    };

    await buildTree('.');
    return tree.join('\n');
  }

  /**
   * ファイル拡張子に応じたアイコンを取得
   */
  getFileIcon(ext) {
    const icons = {
      '.js': '📜',
      '.ts': '📘',
      '.json': '📊',
      '.md': '📖',
      '.html': '🌐',
      '.css': '🎨',
      '.pegjs': '📝'
    };
    return icons[ext] || '📄';
  }
}

module.exports = FileSystemUtils;

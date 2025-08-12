const fs = require('fs').promises;
const path = require('path');

/**
 * 汎用的なコード解析機能を提供するクラス
 * どのプロジェクトでも再利用可能な純粋な分析ロジック
 */
class CodeAnalyzer {
  /**
   * @param {string} projectRoot - プロジェクトルートディレクトリ
   */
  constructor(projectRoot) {
    this.projectRoot = projectRoot;
  }

  /**
   * 全ファイルの詳細分析
   * @param {string[]} extensions - 対象拡張子（デフォルト: ['.js', '.ts', '.pegjs', '.html', '.css']）
   * @param {string[]} excludeDirs - 除外ディレクトリ（デフォルト: ['.git', 'node_modules', '.github']）
   */
  async analyzeAllFiles(extensions = ['.js', '.ts', '.pegjs', '.html', '.css'], excludeDirs = ['.git', 'node_modules', '.github']) {
    const fileAnalysis = [];

    const analyzeFiles = async (dir) => {
      try {
        const items = await fs.readdir(path.join(this.projectRoot, dir));

        for (const item of items) {
          const fullPath = path.join(dir, item);
          const absolutePath = path.join(this.projectRoot, fullPath);

          if (excludeDirs.includes(item)) continue;

          try {
            const stat = await fs.stat(absolutePath);
            if (stat.isDirectory()) {
              await analyzeFiles(fullPath);
            } else if (stat.isFile()) {
              const ext = path.extname(item);
              if (extensions.includes(ext)) {
                const analysis = await this.analyzeFile(absolutePath, fullPath);
                if (analysis) {
                  fileAnalysis.push(analysis);
                }
              }
            }
          } catch (error) {
            continue;
          }
        }
      } catch (error) {
        // ディレクトリ読み取りエラーをスキップ
      }
    };

    await analyzeFiles('.');
    return fileAnalysis;
  }

  /**
   * 個別ファイルの分析
   * @param {string} absolutePath - ファイルの絶対パス
   * @param {string} relativePath - ファイルの相対パス
   */
  async analyzeFile(absolutePath, relativePath) {
    try {
      const content = await fs.readFile(absolutePath, 'utf-8');
      const ext = path.extname(relativePath);

      const analysis = {
        path: relativePath.replace(/\\/g, '/'),
        size: content.length,
        lines: content.split('\n').length,
        functions: [],
        imports: [],
        exports: []
      };

      if (ext === '.js' || ext === '.ts') {
        analysis.functions = this.extractJavaScriptFunctions(content);
        analysis.imports = this.extractImports(content);
        analysis.exports = this.extractExports(content);
      } else if (ext === '.pegjs') {
        analysis.functions = this.extractPegJSRules(content);
      }

      return analysis;
    } catch (error) {
      return null;
    }
  }

  /**
   * JavaScript/TypeScript関数を抽出
   * @param {string} content - ファイル内容
   */
  extractJavaScriptFunctions(content) {
    const functions = [];

    // 関数宣言のパターン
    const patterns = [
      /function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)/g,
      /const\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:async\s+)?function/g,
      /const\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:async\s+)?\([^)]*\)\s*=>/g,
      /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)\s*{/g,
      /async\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)/g
    ];

    patterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        if (match[1] && !functions.includes(match[1])) {
          functions.push(match[1]);
        }
      }
    });

    return functions;
  }

  /**
   * import文を抽出
   * @param {string} content - ファイル内容
   */
  extractImports(content) {
    const imports = [];
    const importPattern = /import\s+.*?\s+from\s+['"`]([^'"`]+)['"`]/g;
    const requirePattern = /require\(['"`]([^'"`]+)['"`]\)/g;

    let match;
    while ((match = importPattern.exec(content)) !== null) {
      imports.push(match[1]);
    }
    while ((match = requirePattern.exec(content)) !== null) {
      imports.push(match[1]);
    }

    return imports;
  }

  /**
   * export文を抽出
   * @param {string} content - ファイル内容
   */
  extractExports(content) {
    const exports = [];
    const exportPattern = /export\s+(?:default\s+)?(?:function\s+)?([a-zA-Z_$][a-zA-Z0-9_$]*)/g;
    const moduleExportsPattern = /module\.exports\s*=\s*([a-zA-Z_$][a-zA-Z0-9_$]*)/g;

    let match;
    while ((match = exportPattern.exec(content)) !== null) {
      exports.push(match[1]);
    }
    while ((match = moduleExportsPattern.exec(content)) !== null) {
      exports.push(match[1]);
    }

    return exports;
  }

  /**
   * PegJSルールを抽出
   * @param {string} content - ファイル内容
   */
  extractPegJSRules(content) {
    const rules = [];
    const rulePattern = /^([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/gm;

    let match;
    while ((match = rulePattern.exec(content)) !== null) {
      rules.push(match[1]);
    }

    return rules;
  }

  /**
   * 関数呼び出し階層を分析
   * @param {Array} fileAnalysis - analyzeAllFiles()の結果
   */
  async analyzeFunctionCallHierarchy(fileAnalysis) {
    const hierarchy = {};

    // 各ファイルの関数について、どの関数を呼び出しているかを分析
    for (const file of fileAnalysis) {
      try {
        const content = await fs.readFile(path.join(this.projectRoot, file.path), 'utf-8');

        for (const func of file.functions) {
          if (!hierarchy[func]) {
            hierarchy[func] = {
              file: file.path,
              calls: [],
              calledBy: []
            };
          }

          // この関数が呼び出している他の関数を検索
          const allFunctions = fileAnalysis.flatMap(f => f.functions);
          allFunctions.forEach(targetFunc => {
            if (targetFunc !== func && content.includes(targetFunc + '(')) {
              if (!hierarchy[func].calls.includes(targetFunc)) {
                hierarchy[func].calls.push(targetFunc);
              }

              if (!hierarchy[targetFunc]) {
                hierarchy[targetFunc] = { file: '', calls: [], calledBy: [] };
              }
              if (!hierarchy[targetFunc].calledBy.includes(func)) {
                hierarchy[targetFunc].calledBy.push(func);
              }
            }
          });
        }
      } catch (error) {
        continue;
      }
    }

    return hierarchy;
  }
}

module.exports = CodeAnalyzer;

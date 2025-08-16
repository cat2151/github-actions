const BaseGenerator = require('./BaseGenerator.cjs');
const FileSystemUtils = require('./FileSystemUtils.cjs');
const ProjectAnalyzer = require('./ProjectAnalyzer.cjs');
const CodeAnalyzer = require('./CodeAnalyzer.cjs');

/**
 * プロジェクト分析機能の基底クラス
 * プロジェクト構造、技術スタック、ファイル詳細などの分析機能を提供
 */
class BaseProjectAnalyzer extends BaseGenerator {
  /**
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(projectRoot) {
    super(projectRoot);
    
    this.fileSystemUtils = new FileSystemUtils(projectRoot);
    this.codeAnalyzer = new CodeAnalyzer(projectRoot);
    this.projectAnalyzer = new ProjectAnalyzer(projectRoot, this.fileSystemUtils, this.codeAnalyzer);
  }

  /**
   * プロジェクト情報を収集
   * @returns {Promise<Object>} プロジェクト情報
   */
  async collectProjectInfo() {
    console.log('Collecting project data...');
    return await this.projectAnalyzer.collectProjectInfo();
  }

  /**
   * 関数呼び出し階層をフォーマット
   * @param {Object} hierarchy - 関数階層オブジェクト
   * @returns {string} フォーマット済み階層テキスト
   */
  formatFunctionHierarchy(hierarchy) {
    if (!hierarchy || typeof hierarchy !== 'object' || Object.keys(hierarchy).length === 0) {
      return '関数呼び出し階層を分析できませんでした';
    }

    let result = '';
    const processedFunctions = new Set();

    // エントリーポイント（他から呼ばれない関数）を探す
    const entryPoints = Object.keys(hierarchy).filter(func =>
      hierarchy[func] && hierarchy[func].calledBy && hierarchy[func].calledBy.length === 0
    );

    const buildTree = (func, depth = 0) => {
      if (processedFunctions.has(func) || depth > 3) return '';
      processedFunctions.add(func);

      const indent = '  '.repeat(depth);
      let tree = `${indent}- ${func} (${hierarchy[func].file})\n`;

      if (hierarchy[func] && hierarchy[func].calls) {
        hierarchy[func].calls.forEach(calledFunc => {
          if (hierarchy[calledFunc]) {
            tree += buildTree(calledFunc, depth + 1);
          }
        });
      }

      return tree;
    };

    entryPoints.forEach(entry => {
      result += buildTree(entry);
    });

    return result || '関数呼び出し階層を分析できませんでした';
  }

  /**
   * ファイル詳細をフォーマット
   * @param {Array} fileAnalysis - ファイル分析結果
   * @returns {string} フォーマット済みファイル詳細
   */
  formatFileDetails(fileAnalysis) {
    return fileAnalysis.map(file => {
      const functions = file.functions.length > 0 ? file.functions.join(', ') : 'なし';
      const imports = file.imports.length > 0 ? file.imports.slice(0, 3).join(', ') : 'なし';
      return `**${file.path}** (${file.lines}行, ${file.size}バイト)\n  - 関数: ${functions}\n  - インポート: ${imports}`;
    }).join('\n\n');
  }

  /**
   * 技術スタックをフォーマット
   * @param {Object} techStack - 技術スタック情報
   * @returns {string} フォーマット済み技術スタック
   */
  formatTechStack(techStack) {
    let result = '';
    Object.entries(techStack).forEach(([category, items]) => {
      if (items.length > 0) {
        const categoryNames = {
          frontend: 'フロントエンド',
          music: '音楽・オーディオ',
          backend: 'バックエンド',
          development: '開発ツール',
          testing: 'テスト',
          buildTools: 'ビルドツール',
          languageFeatures: '言語機能',
          automation: '自動化・CI/CD',
          standards: '開発標準'
        };
        result += `**${categoryNames[category]}:**\n${items.map(item => `  - ${item}`).join('\n')}\n\n`;
      }
    });
    return result || '技術スタック情報を取得できませんでした';
  }
}

module.exports = BaseProjectAnalyzer;

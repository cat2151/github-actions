/**
 * プロジェクトデータ整形専用クラス
 * 分析結果を読みやすい形式にフォーマット
 */
class ProjectDataFormatter {
  /**
   * 技術スタックをフォーマット
   * @param {Object} techStack - 技術スタック情報
   * @returns {string} フォーマット済み技術スタック
   */
  formatTechStack(techStack) {
    let result = '';
    
    Object.entries(techStack).forEach(([category, items]) => {
      if (items.length > 0) {
        const categoryName = this._getCategoryName(category);
        result += `**${categoryName}:**\n${items.map(item => `  - ${item}`).join('\n')}\n\n`;
      }
    });
    
    return result || '技術スタック情報を取得できませんでした';
  }

  /**
   * ファイル詳細をフォーマット
   * @param {Array} fileAnalysis - ファイル分析結果
   * @returns {string} フォーマット済みファイル詳細
   */
  formatFileDetails(fileAnalysis) {
    return fileAnalysis.map(file => {
      return this._formatFileInfo(file);
    }).join('\n\n');
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

    entryPoints.forEach(entry => {
      result += this._buildHierarchyTree(hierarchy, entry, processedFunctions);
    });

    return result || '関数呼び出し階層を分析できませんでした';
  }

  /**
   * プロジェクト概要をフォーマット
   * @param {Object} projectInfo - プロジェクト情報
   * @returns {string} フォーマット済みプロジェクト概要
   */
  formatProjectSummary(projectInfo) {
    let summary = '';
    
    if (projectInfo.name) {
      summary += `# ${projectInfo.name}\n\n`;
    }
    
    if (projectInfo.description) {
      summary += `## 概要\n${projectInfo.description}\n\n`;
    }
    
    if (projectInfo.structure) {
      summary += `## ファイル構造\n\`\`\`\n${projectInfo.structure}\n\`\`\`\n\n`;
    }
    
    return summary;
  }

  /**
   * カテゴリー名を取得
   * @private
   */
  _getCategoryName(category) {
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
    
    return categoryNames[category] || category;
  }

  /**
   * ファイル情報をフォーマット
   * @private
   */
  _formatFileInfo(file) {
    const functions = file.functions.length > 0 ? file.functions.join(', ') : 'なし';
    const imports = file.imports.length > 0 ? file.imports.slice(0, 3).join(', ') : 'なし';
    
    return `**${file.path}** (${file.lines}行, ${file.size}バイト)\n  - 関数: ${functions}\n  - インポート: ${imports}`;
  }

  /**
   * 階層ツリーを構築
   * @private
   */
  _buildHierarchyTree(hierarchy, func, processedFunctions, depth = 0) {
    if (processedFunctions.has(func) || depth > 3) return '';
    processedFunctions.add(func);

    const indent = '  '.repeat(depth);
    let tree = `${indent}- ${func} (${hierarchy[func].file})\n`;

    if (hierarchy[func] && hierarchy[func].calls) {
      hierarchy[func].calls.forEach(calledFunc => {
        if (hierarchy[calledFunc]) {
          tree += this._buildHierarchyTree(hierarchy, calledFunc, processedFunctions, depth + 1);
        }
      });
    }

    return tree;
  }
}

module.exports = ProjectDataFormatter;

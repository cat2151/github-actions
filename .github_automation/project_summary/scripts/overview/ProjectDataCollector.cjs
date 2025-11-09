const fs = require('fs').promises;
const path = require('path');

/**
 * プロジェクト情報収集専用クラス
 * ファイルシステムからのデータ収集に特化
 */
class ProjectDataCollector {
  /**
   * @param {string} projectRoot - プロジェクトルートディレクトリ
   * @param {Object} fileSystemUtils - FileSystemUtilsインスタンス
   * @param {Object} codeAnalyzer - CodeAnalyzerインスタンス
   */
  constructor(projectRoot, fileSystemUtils, codeAnalyzer) {
    this.projectRoot = projectRoot;
    this.fileSystemUtils = fileSystemUtils;
    this.codeAnalyzer = codeAnalyzer;
  }

  /**
   * 基本情報を収集（package.json, README）
   */
  async collectBasicInfo() {
    console.log('Collecting basic project information...');

    const basicInfo = {
      name: '',
      description: '',
      dependencies: {}
    };

    try {
      const packageJson = await this._readPackageJson();
      basicInfo.name = packageJson.name || 'Unknown';
      basicInfo.description = packageJson.description || '';
      basicInfo.dependencies = {
        dependencies: packageJson.dependencies || {},
        devDependencies: packageJson.devDependencies || {}
      };
    } catch (error) {
      console.warn('Could not read package.json:', error.message);
    }

    try {
      const readmeContent = await this._readReadme();
      if (readmeContent) {
        // READMEの内容を優先
        basicInfo.description = readmeContent;
      }
    } catch (error) {
      console.warn('Could not read README:', error.message);
    }

    return basicInfo;
  }

  /**
   * 構造情報を収集（ファイルツリー、プロジェクト構造）
   */
  async collectStructureInfo() {
    console.log('Collecting project structure...');

    const structureInfo = {
      structure: '',
      fileTree: ''
    };

    try {
      structureInfo.structure = await this.fileSystemUtils.getProjectStructure();
    } catch (error) {
      console.warn('Could not get project structure:', error.message);
    }

    try {
      console.log('Generating detailed file tree...');
      structureInfo.fileTree = await this.fileSystemUtils.getDetailedFileTree();
    } catch (error) {
      console.warn('Could not get detailed file tree:', error.message);
    }

    return structureInfo;
  }

  /**
   * コード分析情報を収集
   */
  async collectCodeAnalysis() {
    console.log('Collecting code analysis...');

    const codeInfo = {
      fileAnalysis: [],
      functionHierarchy: {}
    };

    try {
      console.log('Analyzing all files...');
      codeInfo.fileAnalysis = await this.codeAnalyzer.analyzeAllFiles();
    } catch (error) {
      console.warn('Could not analyze files:', error.message);
    }

    try {
      console.log('Analyzing function call hierarchy...');
      codeInfo.functionHierarchy = await this.codeAnalyzer.analyzeFunctionCallHierarchy(codeInfo.fileAnalysis);
    } catch (error) {
      console.warn('Could not analyze function hierarchy:', error.message);
      codeInfo.functionHierarchy = {};
    }

    return codeInfo;
  }

  /**
   * 全情報を統合収集
   */
  async collectAll() {
    console.log('Collecting all project information...');

    const [basicInfo, structureInfo, codeInfo] = await Promise.all([
      this.collectBasicInfo(),
      this.collectStructureInfo(),
      this.collectCodeAnalysis()
    ]);

    return {
      ...basicInfo,
      ...structureInfo,
      ...codeInfo
    };
  }

  /**
   * package.json を読み込み
   * @private
   */
  async _readPackageJson() {
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    const content = await fs.readFile(packageJsonPath, 'utf-8');
    return JSON.parse(content);
  }

  /**
   * README を読み込み（.ja.md を優先）
   * @private
   */
  async _readReadme() {
    let readmePath = path.join(this.projectRoot, 'README.ja.md');

    try {
      await fs.access(readmePath);
    } catch {
      readmePath = path.join(this.projectRoot, 'README.md');
    }

    return await fs.readFile(readmePath, 'utf-8');
  }
}

module.exports = ProjectDataCollector;

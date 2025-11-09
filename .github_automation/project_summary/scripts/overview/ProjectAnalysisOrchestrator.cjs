const BaseGenerator = require('../shared/BaseGenerator.cjs');
const FileSystemUtils = require('../shared/FileSystemUtils.cjs');
const CodeAnalyzer = require('./CodeAnalyzer.cjs');
const ProjectDataCollector = require('./ProjectDataCollector.cjs');
const ProjectDataFormatter = require('./ProjectDataFormatter.cjs');

/**
 * プロジェクト分析プロセス統制クラス
 * 各分析コンポーネントを協調させて統合分析結果を生成
 */
class ProjectAnalysisOrchestrator extends BaseGenerator {
  /**
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(projectRoot) {
    super(projectRoot);
    this._initializeComponents();
  }

  /**
   * プロジェクト分析を実行
   * @returns {Promise<Object>} 統合分析結果
   */
  async analyzeProject() {
    console.log('Starting comprehensive project analysis...');

    // 1. データ収集
    const projectData = await this.dataCollector.collectAll();

    // 2. パッケージ情報取得
    const packageJson = await this._getPackageJson();

    // 3. 結果統合
    const analysisResult = this._combineAnalysisResults(projectData, packageJson);

    console.log('Project analysis completed.');
    return analysisResult;
  }

  /**
   * 整形済みレポートを生成
   * @returns {Promise<Object>} フォーマット済み分析結果
   */
  async generateFormattedReport() {
    const analysisResult = await this.analyzeProject();

    return {
      ...analysisResult,
      formatted: {
        fileDetails: this.formatter.formatFileDetails(analysisResult.fileAnalysis),
        functionHierarchy: this.formatter.formatFunctionHierarchy(analysisResult.functionHierarchy),
        projectSummary: this.formatter.formatProjectSummary(analysisResult)
      }
    };
  }

  /**
   * コンポーネントを初期化
   * @private
   */
  _initializeComponents() {
    this.fileSystemUtils = new FileSystemUtils(this.projectRoot);
    this.codeAnalyzer = new CodeAnalyzer(this.projectRoot);
    this.dataCollector = new ProjectDataCollector(
      this.projectRoot,
      this.fileSystemUtils,
      this.codeAnalyzer
    );
    this.formatter = new ProjectDataFormatter();
  }

  /**
   * 分析結果を統合
   * @private
   */
  _combineAnalysisResults(projectData, packageJson) {
    return {
      name: projectData.name,
      description: projectData.description,
      structure: projectData.structure,
      dependencies: projectData.dependencies,
      fileTree: projectData.fileTree,
      fileAnalysis: projectData.fileAnalysis,
      functionHierarchy: projectData.functionHierarchy,
      packageJson: packageJson
    };
  }

  /**
   * package.jsonを取得
   * @private
   */
  async _getPackageJson() {
    try {
      const fs = require('fs').promises;
      const path = require('path');
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const content = await fs.readFile(packageJsonPath, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      console.warn('Could not read package.json:', error.message);
      return {};
    }
  }
}

module.exports = ProjectAnalysisOrchestrator;

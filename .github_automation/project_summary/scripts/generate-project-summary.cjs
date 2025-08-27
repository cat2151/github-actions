const ProjectSummaryCoordinator = require('./ProjectSummaryCoordinator.cjs');

// メイン処理実行

const overviewPromptPath = process.argv[2];
const developmentStatusPromptPath = process.argv[3];
const overviewPath = process.argv[4];
const developmentPath = process.argv[5];
const developmentGeneratedPath = process.argv[6];
const projectRoot = process.argv[7];

const coordinator = new ProjectSummaryCoordinator(
  overviewPromptPath,
  developmentStatusPromptPath,
  overviewPath,
  developmentPath,
  developmentGeneratedPath,
  projectRoot
);
coordinator.run();

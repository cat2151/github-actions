// 共通ユーティリティ関数（循環参照防止用）
const fs = require('fs');
const path = require('path');

// 指定ファイル・行番号のソース行を取得
function getSourceLine(file, line) {
  try {
    const filePath = path.resolve(process.cwd(), file);
    if (!fs.existsSync(filePath)) return null;
    const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
    if (line > 0 && line <= lines.length) {
      return lines[line - 1];
    }
    return null;
  } catch (e) {
    return null;
  }
}

function isValidSourceFile(filePath, allowedFiles) {
  if (!Array.isArray(allowedFiles)) {
    throw new Error('allowedFiles must be provided as an array');
  }
  const normalizedPath = filePath.replace(/\\/g, '/');
  for (const allowedFile of allowedFiles) {
    if (normalizedPath === allowedFile || normalizedPath.endsWith('/' + allowedFile)) {
      return true;
    }
  }
  return false;
}

module.exports = {
  getSourceLine,
  isValidSourceFile
};

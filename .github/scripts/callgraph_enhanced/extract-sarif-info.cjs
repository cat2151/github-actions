// ヘルパー関数群
// SARIFファイルから関数コールグラフを抽出

const fs = require('fs');
const path = require('path');

function extractCallerinfo(sarifFile) {
  try {
    const fileContent = fs.readFileSync(sarifFile, 'utf8');
    const sarif = JSON.parse(fileContent);
    if (!sarif.runs || sarif.runs.length === 0) return [];
    const results = [];
    sarif.runs.forEach((run) => {
      if (!run.results) return;
      run.results.forEach((result) => {
        if (result.message && result.message.text) {
          const text = result.message.text;
          const match = text.match(/^(.+?)\s*->\s*(.+?)\s*\(at\s+(.+):(\d+)(?::(\d+))?\)$/);
          let caller = null, callee = null;
          if (match) {
            caller = match[1].trim();
            callee = match[2].trim();
          } else {
            const lines = text.split('\n').filter(line => line.trim().length > 0);
            for (const line of lines) {
              const m = line.match(/^(.+?)\s*->\s*(.+?)\s*\(at\s+(.+):(\d+)(?::(\d+))?\)$/);
              if (m) {
                caller = m[1].trim();
                callee = m[2].trim();
                break;
              }
            }
          }
          if (caller && callee && Array.isArray(result.locations) && result.locations.length > 0) {
            const loc = result.locations[0].physicalLocation;
            const fileUri = loc.artifactLocation.uri.replace(/^file:\/\//, '').replace(/\\/g, '/');
            const fileName = fileUri.startsWith('src/') ? fileUri : 'src/' + path.basename(fileUri);
            if (isValidSourceFile(fileName)) {
              const srcLine = getSourceLine(fileName, loc.region?.startLine || 1);
              results.push({
                caller,
                callee,
                file: fileName,
                line: loc.region?.startLine || 1,
                column: loc.region?.startColumn || 1,
                fullLocation: `${fileName}:${loc.region?.startLine || 1}:${loc.region?.startColumn || 1}`,
                sourceLine: srcLine
              });
            }
          }
        }
      });
    });
    return results;
  } catch (error) {
    return [];
  }
}

function extractCalleeinfo(sarifFile) {
  try {
    const fileContent = fs.readFileSync(sarifFile, 'utf8');
    const sarif = JSON.parse(fileContent);
    if (!sarif.runs || sarif.runs.length === 0) return [];
    const results = [];
    sarif.runs.forEach((run) => {
      if (!run.results) return;
      run.results.forEach((result) => {
        if (result.message && result.message.text) {
          // 例: calcAttackToReleaseTicks (mml2json.js:111) -> calcLtick (mml2json.js:150) (at mml2json.js:116)
          const text = result.message.text;
          const calleeMatch = text.match(/->\s*([^(]+)\s*\(([^:]+):(\d+)\)/);
          if (calleeMatch) {
            const callee = calleeMatch[1].trim();
            const fileName = calleeMatch[2].trim().startsWith('src/') ? calleeMatch[2].trim() : 'src/' + calleeMatch[2].trim();
            if (isValidSourceFile(fileName)) {
              const line = parseInt(calleeMatch[3], 10);
              let srcLine = null;
              try {
                srcLine = getSourceLine(fileName, line);
              } catch (e) {}
              results.push({
                callee,
                file: fileName,
                line: line,
                sourceLine: srcLine
              });
            }
          }
        }
      });
    });
    return results;
  } catch (e) {
    return [];
  }
}

module.exports = {
  extractCallerinfo,
  extractCalleeinfo
};

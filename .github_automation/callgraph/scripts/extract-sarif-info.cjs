// ヘルパー関数群
// SARIFファイルから関数コールグラフを抽出

const fs = require('fs');
const path = require('path');
const { isValidSourceFile, getSourceLine } = require('./common-utils.cjs');

function extractCallerinfo(sarifFile, allowedFiles) {
  if (!Array.isArray(allowedFiles) || allowedFiles.length === 0) {
    throw new Error('extractCallerinfo: allowedFiles must be a non-empty array');
  }

  console.log(`extractCallerinfo: SARIFファイル処理開始 - ${sarifFile}`);
  console.log(`extractCallerinfo: 許可ファイル - ${allowedFiles.join(', ')}`);

  try {
    const fileContent = fs.readFileSync(sarifFile, 'utf8');
    const sarif = JSON.parse(fileContent);

    console.log(`extractCallerinfo: SARIF解析完了`);

    if (!sarif.runs || sarif.runs.length === 0) {
      console.log('extractCallerinfo: SARIFファイルにrunsが存在しません');
      return [];
    }

    console.log(`extractCallerinfo: ${sarif.runs.length}個のrunを処理中`);

    const results = [];
    let totalResults = 0;

    sarif.runs.forEach((run, runIndex) => {
      console.log(`extractCallerinfo: run[${runIndex}]を処理中`);

      if (!run.results) {
        console.log(`extractCallerinfo: run[${runIndex}].resultsが存在しません`);
        return;
      }

      console.log(`extractCallerinfo: run[${runIndex}]に${run.results.length}個の結果があります`);
      totalResults += run.results.length;

      run.results.forEach((result, resultIndex) => {
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

            if (isValidSourceFile(fileName, allowedFiles)) {
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
            } else {
              console.log(`extractCallerinfo: ファイル ${fileName} は許可リストに含まれていません`);
            }
          } else {
            if (!caller || !callee) {
              console.log(`extractCallerinfo: run[${runIndex}].results[${resultIndex}]でcaller/calleeの解析に失敗: ${text.substring(0, 100)}...`);
            }
            if (!result.locations || result.locations.length === 0) {
              console.log(`extractCallerinfo: run[${runIndex}].results[${resultIndex}]に位置情報がありません`);
            }
          }
        } else {
          console.log(`extractCallerinfo: run[${runIndex}].results[${resultIndex}]にメッセージがありません`);
        }
      });
    });

    console.log(`extractCallerinfo: 処理完了 - 総結果数: ${totalResults}, 有効な結果: ${results.length}`);

    if (results.length === 0) {
      console.log('extractCallerinfo: 詳細なSARIF内容:');
      console.log(JSON.stringify(sarif, null, 2));
      throw new Error('該当するcaller情報が見つかりませんでした');
    }

    return results;
  } catch (e) {
    console.error('extractCallerinfo: エラーが発生しました:', e.message);
    throw e;
  }
}

function extractCalleeinfo(sarifFile, allowedFiles) {
  if (!Array.isArray(allowedFiles) || allowedFiles.length === 0) {
    throw new Error('extractCalleeinfo: allowedFiles must be a non-empty array');
  }

  console.log(`extractCalleeinfo: SARIFファイル処理開始 - ${sarifFile}`);
  console.log(`extractCalleeinfo: 許可ファイル - ${allowedFiles.join(', ')}`);

  try {
    const fileContent = fs.readFileSync(sarifFile, 'utf8');
    const sarif = JSON.parse(fileContent);

    if (!sarif.runs || sarif.runs.length === 0) {
      throw new Error('SARIFファイルにrunsがありません');
    }

    console.log(`extractCalleeinfo: ${sarif.runs.length}個のrunを処理中`);

    const results = [];
    let totalResults = 0;

    sarif.runs.forEach((run, runIndex) => {
      console.log(`extractCalleeinfo: run[${runIndex}]を処理中`);

      if (!run.results) {
        console.log(`extractCalleeinfo: run[${runIndex}].resultsが存在しません`);
        return;
      }

      console.log(`extractCalleeinfo: run[${runIndex}]に${run.results.length}個の結果があります`);
      totalResults += run.results.length;

      run.results.forEach((result, resultIndex) => {
        if (result.message && result.message.text) {
          // 例: calcAttackToReleaseTicks (mml2json.js:111) -> calcLtick (mml2json.js:150) (at mml2json.js:116)
          const text = result.message.text;
          const calleeMatch = text.match(/->\s*([^(]+)\s*\(([^:]+):(\d+)\)/);

          if (calleeMatch) {
            const callee = calleeMatch[1].trim();
            const fileName = calleeMatch[2].trim().startsWith('src/') ? calleeMatch[2].trim() : 'src/' + calleeMatch[2].trim();

            if (isValidSourceFile(fileName, allowedFiles)) {
              const line = parseInt(calleeMatch[3], 10);
              let srcLine = null;
              srcLine = getSourceLine(fileName, line);
              results.push({
                callee,
                file: fileName,
                line: line,
                sourceLine: srcLine
              });
            } else {
              console.log(`extractCalleeinfo: ファイル ${fileName} は許可リストに含まれていません`);
            }
          } else {
            console.log(`extractCalleeinfo: run[${runIndex}].results[${resultIndex}]でcallee情報の解析に失敗: ${text.substring(0, 100)}...`);
          }
        } else {
          console.log(`extractCalleeinfo: run[${runIndex}].results[${resultIndex}]にメッセージがありません`);
        }
      });
    });

    console.log(`extractCalleeinfo: 処理完了 - 総結果数: ${totalResults}, 有効な結果: ${results.length}`);

    if (results.length === 0) {
      console.log('extractCalleeinfo: 詳細なSARIF内容:');
      console.log(JSON.stringify(sarif, null, 2));
      throw new Error('該当するcallee情報が見つかりませんでした');
    }

    return results;
  } catch (e) {
    console.error('extractCalleeinfo: エラーが発生しました:', e.message);
    throw e;
  }
}

module.exports = {
  extractCallerinfo,
  extractCalleeinfo
};

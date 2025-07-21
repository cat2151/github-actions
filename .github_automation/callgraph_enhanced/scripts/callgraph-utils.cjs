// ヘルパー関数群
// データ変換・GitHubリンク生成

const fs = require('fs');
const path = require('path');
const { extractCallerinfo, extractCalleeinfo } = require('./extract-sarif-info.cjs');

function writeDebugCallerSourceLines(sarifFile, debugOutFile) {
  const results = extractCallerinfo(sarifFile);
  try {
    fs.writeFileSync(debugOutFile, JSON.stringify(results, null, 2), 'utf8');
    return true;
  } catch (e) {
    return false;
  }
}

function writeDebugCalleeSourceLines(sarifFile, debugOutFile) {
  const results = extractCalleeinfo(sarifFile);
  try {
    fs.writeFileSync(debugOutFile, JSON.stringify(results, null, 2), 'utf8');
    return true;
  } catch (e) {
    return false;
  }
}

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

function convertDetailedData(detailedData, calleeInfo, allowedFiles) {
  if (!Array.isArray(detailedData) || detailedData.length === 0) {
    throw new Error('convertDetailedData: detailedDataが0件です。入力データを確認してください。');
  }
  if (!Array.isArray(calleeInfo) || calleeInfo.length === 0) {
    throw new Error('convertDetailedData: calleeInfoが0件です。入力データを確認してください。');
  }
  if (!Array.isArray(allowedFiles) || allowedFiles.length === 0) {
    throw new Error('allowedFiles must be provided as an array');
  }
  const nodes = new Map();
  const edges = [];
  const calleeLocationMap = new Map();
  detailedData.forEach((item) => {
    if (item.callee && item.file && item.line && item.line > 0 && isValidSourceFile(item.file, allowedFiles)) {
      if (!calleeLocationMap.has(item.callee)) {
        calleeLocationMap.set(item.callee, []);
      }
      const existingLocations = calleeLocationMap.get(item.callee);
      if (!existingLocations.some(loc => loc.file === item.file && loc.line === item.line)) {
        existingLocations.push({
          file: item.file,
          line: item.line,
          column: item.column || 1,
          type: 'definition',
          sourceLine: item.sourceLine || null
        });
      }
    }
  });
  detailedData.forEach((item, index) => {
    if (!item.caller || !item.callee) return;
    if (!nodes.has(item.caller)) {
      nodes.set(item.caller, {
        id: item.caller,
        label: item.caller,
        locations: [],
        hasLocationInfo: false,
        hasCalleeLocationInfo: false
      });
    }

    let calleeFncDef = null;
    calleeInfo.forEach((calleeItem) => {
      let calleeOfItem = item.callee;
      const calleeParts = calleeOfItem.split(/\s+/);
      if (calleeParts.length > 1) {
        calleeOfItem = calleeParts[0]; // 最初の部分を関数名として使用
      }
      if (calleeItem.callee === calleeOfItem) {
        calleeFncDef = calleeItem.sourceLine || null;
      }
    });

    if (!nodes.has(item.callee)) {
      const calleeLocations = calleeLocationMap.get(item.callee) || [];
      nodes.set(item.callee, {
        id: item.callee,
        label: item.callee,
        locations: [...calleeLocations],
        hasLocationInfo: calleeLocations.length > 0,
        hasCalleeLocationInfo: calleeLocations.length > 0,
        calleeFncDef: calleeFncDef
      });
    }
    if (item.file && item.line && item.line > 0 && isValidSourceFile(item.file, allowedFiles)) {
      const callerNode = nodes.get(item.caller);
      if (!callerNode.locations.some(loc => loc.file === item.file && loc.line === item.line)) {
        callerNode.locations.push({
          file: item.file,
          line: item.line,
          column: item.column || 1,
          type: 'caller',
          sourceLine: item.sourceLine || null
        });
        callerNode.hasLocationInfo = true;
      }
    }
    const calleeNode = nodes.get(item.callee);
    if (calleeLocationMap.has(item.callee)) {
      calleeNode.hasCalleeLocationInfo = true;
    }
    const edgeData = {
      id: `edge-${index}`,
      source: item.caller,
      target: item.callee,
      hasCalleeLocationInfo: calleeLocationMap.has(item.callee)
    };
    if (item.file && item.line && item.line > 0 && isValidSourceFile(item.file, allowedFiles)) {
      edgeData.file = item.file;
      edgeData.line = item.line;
      edgeData.column = item.column || 1;
      edgeData.location = item.fullLocation || `${item.file}:${item.line}:${item.column || 1}`;
      edgeData.hasLocationInfo = true;
      edgeData.sourceLine = item.sourceLine || null;
    } else {
      edgeData.hasLocationInfo = false;
    }
    edges.push(edgeData);
  });
  let allNodes = Array.from(nodes.values());
  let allEdges = edges;
  const blacklist = ['forEach', 'map', 'filter', 'reduce', 'find', 'some', 'every', 'sort', 'concat', 'join', 'push', 'pop', 'shift', 'unshift', 'splice', 'slice'];
  allNodes = allNodes.filter(node => !blacklist.includes(node.id));
  allEdges = allEdges.filter(edge => !blacklist.includes(edge.source) && !blacklist.includes(edge.target));
  if (allNodes.length === 0) {
    // エラー時にデバッグ情報を出力
    console.log('convertDetailedData: detailedData =', detailedData);
    console.log('convertDetailedData: calleeInfo =', calleeInfo);
    console.log('convertDetailedData: nodes.values() =', Array.from(nodes.values()));
    throw new Error('convertDetailedData: allNodesが0件です。入力データやフィルタ条件を確認してください。');
  }
  return {
    nodes: allNodes,
    edges: allEdges
  };
}

function generateGitHubURL(file, line, repo = null, branch = 'main') {
  if (!repo) return null;
  let normalizedFile = file.replace(/\\/g, '/');
  if (normalizedFile.includes('/src/')) {
    const srcIndex = normalizedFile.lastIndexOf('/src/');
    normalizedFile = normalizedFile.substring(srcIndex + 1);
  } else if (normalizedFile.startsWith('src/')) {
    normalizedFile = normalizedFile;
  } else {
    const lastSlash = normalizedFile.lastIndexOf('/');
    if (lastSlash !== -1) {
      normalizedFile = normalizedFile.substring(lastSlash + 1);
    }
  }
  return `https://github.com/${repo}/blob/${branch}/${normalizedFile}#L${line}`;
}

module.exports = {
  isValidSourceFile,
  convertDetailedData,
  generateGitHubURL,
  getSourceLine,
  writeDebugCallerSourceLines,
  writeDebugCalleeSourceLines,
};

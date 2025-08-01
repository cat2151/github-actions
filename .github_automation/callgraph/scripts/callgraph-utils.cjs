// ヘルパー関数群
// データ変換・GitHubリンク生成

const fs = require('fs');
const path = require('path');
const { getSourceLine, isValidSourceFile } = require('./common-utils.cjs');

// 注意：extractCallerinfo, extractCalleeinfo は、requireするかわりに、extractCallerinfo, extractCalleeinfo を引数で渡す設計にしてください。循環参照防止のためです。

function writeDebugCallerSourceLines(sarifFile, debugOutFile, extractCallerinfo, allowedFiles) {
  if (typeof extractCallerinfo !== 'function') {
    throw new Error('extractCallerinfo 関数を引数で渡してください');
  }
  if (!Array.isArray(allowedFiles) || allowedFiles.length === 0) {
    throw new Error('writeDebugCallerSourceLines: allowedFiles must be a non-empty array');
  }
  const results = extractCallerinfo(sarifFile, allowedFiles);
  try {
    fs.writeFileSync(debugOutFile, JSON.stringify(results, null, 2), 'utf8');
    return true;
  } catch (e) {
    return false;
  }
}

function writeDebugCalleeSourceLines(sarifFile, debugOutFile, extractCalleeinfo, allowedFiles) {
  if (typeof extractCalleeinfo !== 'function') {
    throw new Error('extractCalleeinfo 関数を引数で渡してください');
  }
  if (!Array.isArray(allowedFiles) || allowedFiles.length === 0) {
    throw new Error('writeDebugCalleeSourceLines: allowedFiles must be a non-empty array');
  }
  const results = extractCalleeinfo(sarifFile, allowedFiles);
  try {
    fs.writeFileSync(debugOutFile, JSON.stringify(results, null, 2), 'utf8');
    return true;
  } catch (e) {
    return false;
  }
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

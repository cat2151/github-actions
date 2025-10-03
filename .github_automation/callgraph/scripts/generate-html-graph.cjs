#!/usr/bin/env node
/**
 * generate-html-graph.cjs
 *
 * SARIFファイルからコールグラフHTMLを生成する。
 *
 * Usage:
 *   node generate-html-graph.cjs
 */
const path = require('path');
const fs = require('fs');

const { convertDetailedData, writeDebugCallerSourceLines, writeDebugCalleeSourceLines } = require('./callgraph-utils.cjs');
const { extractCallerinfo, extractCalleeinfo } = require('./extract-sarif-info.cjs');
const generateHTML = require('./generateHTML.cjs');


// allowedFiles.jsonのファイル名をコマンドライン引数から取得
const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node generate-html-graph.cjs <allowedFiles.json>');
  process.exit(1);
}
const allowedFilesPath = path.resolve(args[0]);
if (!fs.existsSync(allowedFilesPath)) {
  console.error('allowedFiles.jsonが見つかりません:', allowedFilesPath);
  process.exit(1);
}
let allowedFiles;
try {
  allowedFiles = JSON.parse(fs.readFileSync(allowedFilesPath, 'utf8'));
  if (!Array.isArray(allowedFiles)) throw new Error('allowedFiles.jsonの内容が配列ではありません');
} catch (e) {
  console.error('allowedFiles.jsonの読み込みに失敗:', e);
  process.exit(1);
}

const sarifPath = path.resolve('codeql-results.sarif');
const outputPath = path.resolve('generated-docs/callgraph.html');

if (!fs.existsSync(sarifPath)) {
  console.error('SARIFファイルが見つかりません:', sarifPath);
  process.exit(1);
}

console.log('処理開始...');
console.log('SARIFファイル:', sarifPath);
console.log('許可ファイル:', allowedFiles);

let callerInfo, calleeInfo, graphData;

try {
  console.log('1. Caller情報を抽出中...');
  callerInfo = extractCallerinfo(sarifPath, allowedFiles);
  console.log(`✓ Caller情報抽出完了 (${callerInfo.length}件)`);
} catch (error) {
  console.error('❌ Caller情報の抽出でエラーが発生しました:');
  console.error('エラーメッセージ:', error.message);
  console.error('スタックトレース:', error.stack);
  process.exit(1);
}

try {
  console.log('2. Callee情報を抽出中...');
  calleeInfo = extractCalleeinfo(sarifPath, allowedFiles);
  console.log(`✓ Callee情報抽出完了 (${calleeInfo.length}件)`);
} catch (error) {
  console.error('❌ Callee情報の抽出でエラーが発生しました:');
  console.error('エラーメッセージ:', error.message);
  console.error('スタックトレース:', error.stack);
  process.exit(1);
}

try {
  console.log('3. グラフデータを変換中...');
  graphData = convertDetailedData(callerInfo, calleeInfo, allowedFiles);
  console.log(`✓ グラフデータ変換完了 (ノード: ${graphData.nodes.length}個, エッジ: ${graphData.edges.length}個)`);
} catch (error) {
  console.error('❌ グラフデータの変換でエラーが発生しました:');
  console.error('エラーメッセージ:', error.message);
  console.error('スタックトレース:', error.stack);
  console.error('Caller情報件数:', callerInfo ? callerInfo.length : 'undefined');
  console.error('Callee情報件数:', calleeInfo ? calleeInfo.length : 'undefined');
  process.exit(1);
}

try {
  console.log('4. HTML生成中...');
  const html = generateHTML(graphData, { repo: process.env.GITHUB_REPOSITORY || '', branch: process.env.GITHUB_REF_NAME || 'main' });
  fs.writeFileSync(outputPath, html);
  console.log('✓ コールグラフHTMLを生成しました:', outputPath);
} catch (error) {
  console.error('❌ HTML生成でエラーが発生しました:');
  console.error('エラーメッセージ:', error.message);
  console.error('スタックトレース:', error.stack);
  process.exit(1);
}

// デバッグ用: Caller sourceLine 付きの詳細データをJSONで出力
try {
  console.log('5. デバッグファイル(caller)を生成中...');
  writeDebugCallerSourceLines(sarifPath, path.resolve('generated-docs/callerSourceLines.json'), extractCallerinfo, allowedFiles);
  console.log('✓ callerSourceLines.json (with sourceLine) generated');
} catch (error) {
  console.error('❌ callerSourceLines.json生成でエラーが発生しました:');
  console.error('エラーメッセージ:', error.message);
  console.error('スタックトレース:', error.stack);
  // ここではexitしない（メイン処理は成功しているため）
}

// デバッグ用: Callee sourceLine 付きの詳細データをJSONで出力
try {
  console.log('6. デバッグファイル(callee)を生成中...');
  writeDebugCalleeSourceLines(sarifPath, path.resolve('generated-docs/calleeSourceLines.json'), extractCalleeinfo, allowedFiles);
  console.log('✓ calleeSourceLines.json (with callee sourceLine) generated');
} catch (error) {
  console.error('❌ calleeSourceLines.json生成でエラーが発生しました:');
  console.error('エラーメッセージ:', error.message);
  console.error('スタックトレース:', error.stack);
  // ここではexitしない（メイン処理は成功しているため）
}

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
const outputPath = path.resolve('generated-docs/callgraph-enhanced.html');

if (!fs.existsSync(sarifPath)) {
  console.error('SARIFファイルが見つかりません:', sarifPath);
  process.exit(1);
}


const callerInfo = extractCallerinfo(sarifPath, allowedFiles);
const calleeInfo = extractCalleeinfo(sarifPath, allowedFiles);
const graphData = convertDetailedData(callerInfo, calleeInfo, allowedFiles);
const html = generateHTML(graphData, { repo: process.env.GITHUB_REPOSITORY || '', branch: process.env.GITHUB_REF_NAME || 'main' });

fs.writeFileSync(outputPath, html);
console.log('コールグラフHTMLを生成しました:', outputPath);

// デバッグ用: Caller sourceLine 付きの詳細データをJSONで出力
writeDebugCallerSourceLines(sarifPath, path.resolve('generated-docs/callerSourceLines.json'), extractCallerinfo);
console.log('✓ callerSourceLines.json (with sourceLine) generated');

// デバッグ用: Callee sourceLine 付きの詳細データをJSONで出力
writeDebugCalleeSourceLines(sarifPath, path.resolve('generated-docs/calleeSourceLines.json'), extractCalleeinfo);
console.log('✓ calleeSourceLines.json (with callee sourceLine) generated');

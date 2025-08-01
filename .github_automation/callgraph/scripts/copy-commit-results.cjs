#!/usr/bin/env node
/**
 * copy-commit-results.cjs
 *
 * 生成されたHTML等を generated-docs/ へコピーし、コミットする。
 *
 * Usage:
 *   node copy-commit-results.cjs
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const src = path.resolve('generated-docs/callgraph.html');
const dest = path.resolve('generated-docs/callgraph.html');

if (!fs.existsSync(src)) {
  console.error('生成HTMLが見つかりません:', src);
  process.exit(1);
}

// ここでは同じ場所なのでコピー省略する

// ファイル情報を表示する
const stat = fs.statSync(src);
console.log(`html: ${src}`);
console.log(`size: ${stat.size} bytes`);

// WSL or Act環境ではコミット・プッシュをスキップする
const isWSL = fs.existsSync('/proc/version') && fs.readFileSync('/proc/version', 'utf8').includes('Microsoft');
const isAct = process.env.GITHUB_ACTOR === 'nektos/act';
if (isWSL || isAct) {
  console.log('テスト環境なのでコミット・プッシュはスキップします');
  process.exit(0);
}

try {
  execSync('git add generated-docs/callgraph.html');
  const commitResult = execSync('git commit -m "Update callgraph.html [auto]"', { stdio: 'pipe' }).toString();
  if (/nothing to commit|no changes added to commit|working tree clean/i.test(commitResult)) {
    console.log('コミットすべき変更がありません。push/pullをスキップします。');
    process.exit(0);
  }
  console.log('コミット完了。push前にpull --rebaseを実行します。');
  try {
    execSync('git pull --rebase origin main', { stdio: 'inherit' });
  } catch (e) {
    console.error('git pull --rebaseに失敗しました。競合の可能性があります:', e.message);
    process.exit(1);
  }
  console.log('pull --rebase成功。pushを実行します。');
  execSync('git push', { stdio: 'inherit' });
  console.log('コミット・プッシュ完了');
} catch (e) {
  console.error('コミット・プッシュに失敗:', e.message);
  process.exit(1);
}

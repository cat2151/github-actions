#!/usr/bin/env node
// 過去24時間以内に人間のcommitがあるかどうかをチェックする
// 処理対象はカレントディレクトリのgit repositoryである。運用上、このcjs自体はテンポラリディレクトリにチェックアウトされて実行され、カレントディレクトリはあくまでも調査対象リポジトリとなっている想定である
const { execSync } = require("child_process");
const process = require("process");
const fs = require("fs");

function main() {
  let hasHuman = false;

  // try-catchせず、早期エラーで問題検知をしやすくする

  const repositoryInfo = getRepositoryInfo();
  console.log(`Repository: ${repositoryInfo}`);

  const log = run(
    // %cd とは、committer dateである。また、JST表示のため環境変数TZを設定している
    // 区切り文字に%x01と%x02を使うのは、commit comment内に改行や各種区切り文字が入る可能性があるため
    `TZ=Asia/Tokyo git log --since="24 hours ago" --pretty=format:'%H%x01%an%x01%ae%x01%cd%x01%s%x02' --date=format:'%Y-%m-%d %H:%M:%S JST'`
  );
  const commits = log.split("\x02").filter(Boolean);

  if (commits.length === 0) {
    console.log("過去24時間以内にcommitがありませんでした");

    const latestCommitLog = run(
      `TZ=Asia/Tokyo git log -1 --pretty=format:'%H%x01%an%x01%ae%x01%cd%x01%s' --date=format:'%Y-%m-%d %H:%M:%S JST'`
    );
    const [hash, name, email, date, subject] = latestCommitLog.split('\x01');
    const currentTime = getCurrentJSTTime();
    const timeDiff = calculateTimeDifference(date, currentTime);
    console.log(`現在時刻: ${currentTime}`);
    console.log(`最新commit:`);
    console.log(`  日時: ${date} (${timeDiff})`);
    console.log(`  hash: ${hash}`);
    console.log(`  commit comment: ${subject}`);

    outputResult(hasHuman);
    return;
  }

  for (const entry of commits) {
    const [hash, name, email, date, subject] = entry.split("\x01");
    if (
      !/^41898282\+github-actions\[bot\]@users\.noreply\.github\.com$/.test(
        email
      )
    ) {
      // GitHubでのjob結果log表示時に、仕様ミスなどを検知できるようにする用
      console.log(
        `HUMAN: Commit ${hash} | ${date} | Author: ${name} <${email}> | Message: ${subject}`
      );
      hasHuman = true;
      break;
    } else {
      console.log(
        `BOT: Commit ${hash} | ${date} | Author: ${name} <${email}> | Message: ${subject}`
      );
    }
  }

  outputResult(hasHuman);
}

function getRepositoryInfo() {
  const remoteUrl = run(`git remote get-url origin`);
  const match = remoteUrl.match(/github\.com[:/]([^/]+\/[^/]+?)(\.git)?$/);
  if (match) {
    const ownerRepo = match[1];
    const repoName = ownerRepo.split('/')[1];
    return repoName;
  }
  return remoteUrl;
}

function getCurrentJSTTime() {
  // 現在時刻をJST形式で取得（既存のgit logと同じフォーマット）
  const now = new Date();
  const jstOffset = 9 * 60; // JST is UTC+9
  const jstTime = new Date(now.getTime() + jstOffset * 60 * 1000);

  const year = jstTime.getUTCFullYear();
  const month = String(jstTime.getUTCMonth() + 1).padStart(2, '0');
  const day = String(jstTime.getUTCDate()).padStart(2, '0');
  const hour = String(jstTime.getUTCHours()).padStart(2, '0');
  const minute = String(jstTime.getUTCMinutes()).padStart(2, '0');
  const second = String(jstTime.getUTCSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hour}:${minute}:${second} JST`;
}

function calculateTimeDifference(commitDateStr, currentDateStr) {
  // 日付文字列からDateオブジェクトを作成
  // フォーマット: "YYYY-MM-DD HH:MM:SS JST"
  const parseJSTDate = (dateStr) => {
    const cleanDateStr = dateStr.replace(' JST', '');
    return new Date(cleanDateStr + '+09:00'); // JSTはUTC+9
  };

  const commitDate = parseJSTDate(commitDateStr);
  const currentDate = parseJSTDate(currentDateStr);

  const diffMs = currentDate.getTime() - commitDate.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  const remainingHours = diffHours % 24;

  if (diffDays > 0) {
    if (remainingHours > 0) {
      return `${diffDays}日${remainingHours}時間前`;
    } else {
      return `${diffDays}日前`;
    }
  } else if (diffHours > 0) {
    return `${diffHours}時間前`;
  } else {
    return `${diffMinutes}分前`;
  }
}

function run(cmd) {
  return execSync(cmd, { encoding: "utf-8" }).trim();
}

function outputResult(hasHuman) {
  const output = `has_recent_human_commit=${hasHuman}`;
  console.log(output);
  // GitHub Actionsの出力に反映する
  fs.appendFileSync(process.env.GITHUB_OUTPUT, output + "\n");
}

main();

#!/usr/bin/env node
// 過去24時間以内に人間のcommitがあるかどうかをチェックする
const { execSync } = require("child_process");
const process = require("process");
const fs = require("fs");

function run(cmd) {
  return execSync(cmd, { encoding: "utf-8" }).trim();
}

function main() {
  let hasHuman = false;

  // try-catchせず、早期エラーで問題検知をしやすくする

  const log = run(
    // 区切り文字に%x01と%x02を使うのは、commit comment内に改行や各種区切り文字が入る可能性があるため
    `git log --since="24 hours ago" --pretty=format:'%H%x01%an%x01%ae%x01%s%x02'`
  );

  const commits = log.split("\x02").filter(Boolean);

  for (const entry of commits) {
    const [hash, name, email, subject] = entry.split("\x01");

    if (
      !/^41898282\+github-actions\[bot\]@users\.noreply\.github\.com$/.test(
        email
      )
    ) {
      // GitHubでのjob結果log表示時に、仕様ミスなどを検知できるようにする用
      console.log(
        `HUMAN: Commit ${hash} | Author: ${name} <${email}> | Message: ${subject}`
      );
      hasHuman = true;
      break;
    } else {
      console.log(
        `BOT: Commit ${hash} | Author: ${name} <${email}> | Message: ${subject}`
      );
    }
  }

  const output = `has_recent_human_commit=${hasHuman ? 'true' : 'false'}`;
  console.log(output);

  // GitHub Actionsの出力に反映する
  console.log(`DEBUG: GITHUB_OUTPUT env var: ${process.env.GITHUB_OUTPUT}`);
  console.log(`DEBUG: Writing to GITHUB_OUTPUT: ${output}`);

  try {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, output + "\n");
    console.log(`DEBUG: Successfully wrote to GITHUB_OUTPUT`);

    // 書き込み後の確認
    const fileContent = fs.readFileSync(process.env.GITHUB_OUTPUT, 'utf-8');
    console.log(`DEBUG: GITHUB_OUTPUT file content after write: ${fileContent}`);
  } catch (error) {
    console.error(`DEBUG: Error writing to GITHUB_OUTPUT: ${error.message}`);
    throw error;
  }
}

main();

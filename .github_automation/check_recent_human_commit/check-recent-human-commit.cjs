#!/usr/bin/env node
// 過去24時間以内に人間のcommitがあるかどうかをチェックする
import { execSync } from "child_process";
import process from "process";
import fs from "fs";

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

  const output = `has_recent_human_commit=${hasHuman}`;
  console.log(output);

  // GitHub Actionsの出力に反映する
  fs.appendFileSync(process.env.GITHUB_OUTPUT, output + "\n");
}

main();

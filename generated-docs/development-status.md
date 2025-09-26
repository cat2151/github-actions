Last updated: 2025-09-27

# Development Status

## 現在のIssues
- [Issue #16](../issue-notes/16.md)では、共通ワークフローの`callgraph`を外部プロジェクトで利用する検証と、その導入手順のドキュメント化が残っています。
- [Issue #10](../issue-notes/10.md)、[Issue #11](../issue-notes/11.md)、[Issue #12](../issue-notes/12.md)、[Issue #13](../issue-notes/13.md)は、各共通ワークフロー（`callgraph`、`translate`、`project-summary`、`issue-note`）の導入手順書作成が主なタスクです。
- [Issue #2](../issue-notes/2.md)と[Issue #3](../issue-notes/3.md)の共通ワークフロー化は完了しており、後続のドキュメント整備や外部プロジェクトでの検証に焦点を移しています。

## 次の一手候補
1. [Issue #16](../issue-notes/16.md) callgraphの外部プロジェクトでの動作確認と導入手順作成
   - 最初の小さな一歩: `tonejs-mml-to-json`リポジトリで`call-callgraph.yml`をコピーし、設定を調整して一度動作させてみてください。その後、`callgraph.md`に導入手順を追記します。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/call-callgraph.yml, .github_automation/callgraph/docs/callgraph.md

     実行内容: .github/workflows/call-callgraph.ymlを外部プロジェクトで利用する際の設定変更点（特にCONFIG_NAMEパス）を明確にしてください。その上で、.github_automation/callgraph/docs/callgraph.mdに、外部プロジェクトがcall-callgraph.ymlを導入し、CONFIG_NAMEを適切に設定するための具体的な手順書を追記してください。

     確認事項: call-callgraph.ymlがcat2151/github-actionsリポジトリのcallgraph.ymlを正しく参照していること。CONFIG_NAMEのパスが.github/actions-tmp/内ではなく、呼び出し元リポジトリのルートを基準にしたパスで指定されるべきである点に言及してください。

     期待する出力: .github_automation/callgraph/docs/callgraph.mdに追記する形で、call-callgraph.ymlの外部プロジェクトへの導入手順を示すmarkdownコンテンツ。
     ```

2. [Issue #12](../issue-notes/12.md) project-summaryの導入手順書作成
   - 最初の小さな一歩: `daily-summary-setup.md`の内容をレビューし、`call-daily-project-summary.yml`の導入に関する情報が不足していないか確認し、追記する内容を検討します。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/call-daily-project-summary.yml, .github_automation/project_summary/docs/daily-summary-setup.md

     実行内容: .github/workflows/call-daily-project-summary.ymlの構成を分析し、外部プロジェクトがこのワークフローを導入する際に必要な設定（特にGEMINI_API_KEYシークレット、cronスケジュール）を特定してください。これらの情報を踏まえ、.github_automation/project_summary/docs/daily-summary-setup.mdに、call-daily-project-summary.ymlの導入手順に関する詳細な説明を追記してください。

     確認事項: daily-summary-setup.mdの既存セクション（「必要な設定」「ファイル構成」「手動実行」など）との整合性を保ちつつ、具体的な導入手順を追加すること。usesパスやsecretsの渡し方について明確に記述すること。

     期待する出力: .github_automation/project_summary/docs/daily-summary-setup.mdに追記する形式で、call-daily-project-summary.ymlの導入手順を示すmarkdownコンテンツ。
     ```

3. [Issue #13](../issue-notes/13.md) issue-noteの導入手順書作成
   - 最初の小さな一歩: `issue-notes/13.md`に、`call-issue-note.yml`の導入手順に関する新しいセクションを追加する内容を検討します。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/call-issue-note.yml, issue-notes/13.md

     実行内容: .github/workflows/call-issue-note.ymlの構成を分析し、外部プロジェクトがこのワークフローを導入する際に必要な設定項目（on: issues: types: [opened]トリガー、withで渡すissue_number, issue_title, issue_body, issue_html_url入力、必要な権限など）を洗い出してください。これらの情報を基に、issue-notes/13.mdにcall-issue-note.ymlの導入手順書を追記してください。

     確認事項: issue-notes/13.mdの既存の内容との重複を避け、分かりやすく具体的な手順を記述すること。特にGitHub APIアクセスに必要な権限（contents: write, issues: write）について言及してください。

     期待する出力: issue-notes/13.mdに追記する形式で、call-issue-note.ymlの外部プロジェクトへの導入手順を示すmarkdownコンテンツ。

---
Generated at: 2025-09-27 07:05:27 JST

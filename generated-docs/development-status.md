Last updated: 2025-09-21

# Development Status

## 現在のIssues
- [Issue #26](../issue-notes/26.md) は、botコミットがユーザーコミットと誤認され、不要なProject SummaryとCallgraphが毎日生成される問題の修正を待っています。
- [Issue #16](../issue-notes/16.md) は、issue-note, project-summary, translate, callgraphの共通ワークフローを他のプロジェクトで最新版に更新するタスクが残っています。
- [Issue #10](../issue-notes/10.md), [Issue #11](../issue-notes/11.md), [Issue #12](../issue-notes/12.md), [Issue #13](../issue-notes/13.md) は、各共通ワークフローを他プロジェクトから利用しやすくするためのドキュメント整備や設定の簡素化を継続中です。

## 次の一手候補
1. [Issue #26](../issue-notes/26.md) のクローズ条件の確認と本番テスト
   - 最初の小さな一歩: 最新の`check-recent-human-commit.yml`と`check-recent-human-commit.cjs`が正しく機能しているか、日次バッチの実行ログを確認する。具体的には、24時間以内にユーザーコミットがない状態で、`daily-project-summary.yml` と `callgraph.yml` がスキップされたことを示すログを検証する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/daily-project-summary.yml, .github/workflows/callgraph.yml, .github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs

     実行内容: これらのファイルが協調して、ユーザーコミットがない場合に`daily-project-summary`と`callgraph`のジョブがスキップされる仕組みになっているかを分析してください。特に、`check-recent-human-commit.cjs` の最新の挙動と、それを利用するワークフローの `if` 条件を確認し、実際にジョブがスキップされた際のログの出力例を想定して記述してください。

     確認事項: `check-recent-human-commit.cjs` がbotコミットとユーザーコミットを正しく区別しているか、`check-recent-human-commit.yml` のoutputsが正しく設定されているか、および依存するワークフローがそのoutputsを適切に利用してスキップ判定を行っているかをコードレベルで確認してください。

     期待する出力: `check-recent-human-commit.cjs`の主要なロジック概要と、`daily-project-summary.yml`および`callgraph.yml`におけるジョブスキップの条件 (`if` ステートメント) の説明、そしてユーザーコミットがない場合にジョブがスキップされたことを示すログメッセージの期待例をMarkdown形式で記述してください。
     ```

2. [Issue #16](../issue-notes/16.md) の `issue-note` ワークフローの `tonejs-mml-to-json` への導入
   - 最初の小さな一歩: `tonejs-mml-to-json` リポジトリに、このリポジトリの `.github/workflows/call-issue-note.yml` をコピーし、`workflow_dispatch` で手動実行して正常に動作するかを確認する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/call-issue-note.yml および .github/workflows/issue-note.yml

     実行内容: `call-issue-note.yml` を `tonejs-mml-to-json` リポジトリに導入する際の手順と、その際に必要となる `issue-note.yml` 共通ワークフローの呼び出し設定を分析してください。特に、`inputs` パラメータの渡し方や `secrets` の有無に注目し、`tonejs-mml-to-json` リポジトリでの `.github/workflows/call-issue-note.yml` の初期設定内容を記述してください。

     確認事項: `issue-note.yml` が必要とする `inputs` (issue_number, issue_title, issue_body, issue_html_url) が `call-issue-note.yml` から正しく渡せることを確認してください。また、`tonejs-mml-to-json` がパブリックリポジトリであること、および `GITHUB_TOKEN` のデフォルト権限で issue 作成・更新が可能であることも確認してください。

     期待する出力: `tonejs-mml-to-json` リポジトリにコピーすべき `call-issue-note.yml` の内容（`uses` パスが適切に参照されていること）と、導入後に新しいIssueを作成して `issue-note` が正しく生成されることを確認するための手順書をMarkdown形式で記述してください。
     ```

3. [Issue #12](../issue-notes/12.md) の `daily-summary-setup.md` ドキュメント更新
   - 最初の小さな一歩: `.github_automation/project_summary/docs/daily-summary-setup.md` を開き、`call-daily-project-summary.yml` の導入方法を明確にするためのセクションを追加する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github_automation/project_summary/docs/daily-summary-setup.md および .github/workflows/call-daily-project-summary.yml

     実行内容: `.github_automation/project_summary/docs/daily-summary-setup.md` ファイルを編集し、`call-daily-project-summary.yml` を外部プロジェクトで利用する際の具体的な導入手順を追記してください。特に、必要なsecrets (`GEMINI_API_KEY`) の設定方法と、`uses` パスの指定方法を明確に記述してください。

     確認事項: 既存のドキュメント構成との整合性、およびユーザーがこの手順に従って `call-daily-project-summary.yml` を容易に導入できるかを確認してください。`secrets` の設定は `workflow_call` で渡す必要があることを考慮してください。

     期待する出力: `daily-summary-setup.md` の更新内容をMarkdown形式で提供してください。更新内容には、「外部プロジェクトでの利用方法」のようなセクションを追加し、`call-daily-project-summary.yml` の具体的な記述例、必要となるシークレットの登録方法、および `uses` パスの正しい指定方法を含めてください。

---
Generated at: 2025-09-21 07:04:37 JST

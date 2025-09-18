Last updated: 2025-09-19

# Development Status

## 現在のIssues
- [Issue #26](../issue-notes/26.md)では、ユーザーコミットがない場合のproject summaryとcallgraphの無駄な自動生成を防ぐためのバグ修正とログ改善が課題です。
- [Issue #25](../issue-notes/25.md)は、project summaryのissue-notes参照ディレクトリ誤りが修正済みで、次回の動作確認が待たれています。
- [Issue #16](../issue-notes/16.md)は、issue-note, project-summary, translate, callgraphの各ワークフローを他のリポジトリから呼び出すための移行と動作検証を進める必要があります。

## 次の一手候補
1. [Issue #26](../issue-notes/26.md): userによるcommitがなくなって24時間超経過しているのに、毎日ムダにproject summaryとcallgraphの自動生成が行われてしまっている
   - 最初の小さな一歩: 過去のGitHub Actionsの実行ログ（特に`check-commits`ジョブ）を確認し、「should-run」出力が期待通りに`false`になっているか調査する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/callgraph.yml, .github/workflows/daily-project-summary.yml, .github_automation/callgraph/scripts/check-commits.cjs

     実行内容: `check-commits.cjs`スクリプトがGitHub Actionsのワークフロー（`callgraph.yml`および`daily-project-summary.yml`）内でどのように機能しているかを分析し、特に`should-run`の出力が、ユーザーコミットがない場合に`false`になっているかを調査してください。もし`should-run`が不適切に`true`になっているケースが発見された場合、その原因を特定し、ログ出力の改善やスクリプト修正の提案を行ってください。

     確認事項: 過去のワークフロー実行ログ（特に`check-commits`ジョブ）を確認し、`should-run`の出力と実際のワークフロー実行（後続ジョブのスキップ）の関連性を把握してください。`check-commits.cjs`の実装とワークフローの条件式（`if: needs.check-commits.outputs.should-run == 'true'`）の整合性を確認してください。

     期待する出力: `check-commits.cjs`の動作に関する分析結果、および無駄な実行を防ぐためのログ出力の改善案やスクリプト修正案をmarkdown形式で出力してください。
     ```

2. [Issue #25](../issue-notes/25.md): project summaryを他projectからcallしたところ、issue-notes参照ディレクトリ誤りが発覚した
   - 最初の小さな一歩: `daily-project-summary.yml`ワークフローの最新の実行結果（特に`generate-summary`ジョブ）を確認し、生成されたサマリーファイル内のissue-notes参照リンクが正しく機能しているか検証する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/daily-project-summary.yml, .github_automation/project_summary/scripts/generate-project-summary.cjs, .github_automation/project_summary/scripts/development/IssueTracker.cjs, generated-docs/development-status.md

     実行内容: `daily-project-summary.yml`が外部プロジェクトから呼び出された際に発生したIssueノート参照ディレクトリ誤り（Issue #25）の修正が、実際に機能しているかを確認するため、関連するスクリプトとワークフロー設定を分析してください。特に、`IssueTracker.cjs`が`github.workspace`を正しく参照しているか、また、`generate-project-summary.cjs`に渡されるパスが適切であるかを確認してください。生成された`generated-docs/development-status.md`内のIssueノートへのリンクが正しい形式であり、かつ実際にアクセス可能か検証するための手順を記述してください。

     確認事項: 修正後の`daily-project-summary.yml`の実行ログ、特に`generate-summary`ステップの出力、および生成された`generated-docs/development-status.md`ファイルの内容を確認して、Issueノートへのパスとリンクが正しいことを検証してください。

     期待する出力: Issueノート参照の修正が成功したかどうかの評価、および問題が解決していない場合の追加調査または修正案、ならびに検証手順をmarkdown形式で出力してください。
     ```

3. [Issue #16](../issue-notes/16.md): issue-note / project-summary / translate / callgraph をtonejs-mml-to-jsonから呼び出す
   - 最初の小さな一歩: `tonejs-mml-to-json`リポジトリで、現在の`issue-note`ワークフロー (`.github/workflows/issue-note.yml`) を一時的に無効化し、代わりにこのリポジトリの `call-issue-note.yml` の内容をコピーして配置し、新規Issueを開いて動作を確認する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/call-issue-note.yml, .github_automation/project_summary/scripts/development/IssueTracker.cjs

     実行内容: 他のリポジトリ (`tonejs-mml-to-json`を想定) において、古い`issue-note`ワークフローを、共有ワークフロー (`cat2151/github-actions/.github/workflows/issue-note.yml`) を呼び出す`call-issue-note.yml`に移行するための具体的な手順書を生成してください。この手順書には、`call-issue-note.yml`の配置場所、必要なinputs（`issue_number`, `issue_title`, `issue_body`, `issue_html_url`）の渡し方、および`issue-notes`ディレクトリが呼び出し元リポジトリに存在することを確認するステップなど、移行に必要な全ての具体的なアクションを含めてください。

     確認事項: 移行先リポジトリの古い`issue-note`ワークフローのトリガー（`on: issues: types: [opened]`）と、`call-issue-note.yml`がそのイベントペイロードからInputsを適切にマッピングできることを検証してください。

     期待する出力: `tonejs-mml-to-json`リポジトリにおいて、古い`issue-note`ワークフローを共有ワークフロー呼び出し形式に移行するための、詳細かつ実行可能なmarkdown形式の手順書。

---
Generated at: 2025-09-19 07:05:12 JST

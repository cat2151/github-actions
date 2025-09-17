Last updated: 2025-09-18

# Development Status

## 現在のIssues
- [Issue #26](../issue-notes/26.md)では、ユーザーコミットがない状態でも毎日不必要にproject summaryとcallgraphが自動生成される問題がオープンしています。
- [Issue #25](../issue-notes/25.md)では、他プロジェクトでproject summaryを呼び出した際にissue-notesの参照ディレクトリに誤りがあることが発覚し、その修正が課題となっています。
- [Issue #16](../issue-notes/16.md)では、`issue-note`、`project-summary`、`translate`、`callgraph`の各共通ワークフローを`tonejs-mml-to-json`プロジェクトから呼び出すための置き換えと検証が進行中です。

## 次の一手候補
1.  [Issue #26](../issue-notes/26.md): userによるcommitがなくなって24時間超経過しているのに、毎日ムダにproject summaryとcallgraphの自動生成が行われてしまっている
    -   最初の小さな一歩: `callgraph.yml`が呼び出している`check-commits.cjs`のログ出力を詳細化し、24時間チェックの挙動と`should-run`の判断基準を明確に把握する。
    -   Agent実行プロンプト:
        ```
        対象ファイル: .github_automation/callgraph/scripts/check-commits.cjs, .github/workflows/callgraph.yml

        実行内容: .github/workflows/callgraph.yml の `check-commits` jobで利用されている .github_automation/callgraph/scripts/check-commits.cjs を分析し、ユーザーコミットの有無を判断するロジックを確認してください。特に、過去24時間以内のコミットチェックが正しく行われているか、またはログ出力が不足していないかを分析し、現状の挙動を詳細に把握するためのログ追加やデバッグ出力強化の提案をmarkdown形式で出力してください。

        確認事項: GitHub Actionsの実行ログで、`check-commits`ステップの出力がどのように表示されているかを確認し、`should-run`の出力が意図通りかを理解した上で作業を進めてください。

        期待する出力: .github_automation/callgraph/scripts/check-commits.cjs の現行のコミットチェックロジックの説明と、より詳細なデバッグ情報を出力するための変更提案（例: タイムスタンプ、取得したコミット数、最終コミット時刻などのログ追加）をmarkdown形式で生成してください。
        ```

2.  [Issue #25](../issue-notes/25.md): project summaryを他projectからcallしたところ、issue-notes参照ディレクトリ誤りが発覚した
    -   最初の小さな一歩: `project_summary`関連スクリプト（特に`IssueTracker.cjs`）内で`issue-notes`ディレクトリを参照している箇所を特定し、現在のパス解決ロジックがどのように機能しているか、そしてなぜ誤りが発生するのかを分析する。
    -   Agent実行プロンプト:
        ```
        対象ファイル: .github_automation/project_summary/scripts/development/IssueTracker.cjs, .github/workflows/daily-project-summary.yml, .github_automation/project_summary/scripts/generate-project-summary.cjs

        実行内容: `daily-project-summary.yml`ワークフローから呼び出される`project_summary`関連スクリプト（特に`IssueTracker.cjs`）において、`issue-notes`ディレクトリを参照している全ての箇所を特定し、そのパス解決ロジックを詳細に分析してください。特に、呼び出し元リポジトリのルートからの相対パスとして解決されるべきか、`TMP_DIR`内での解決か、または他の方法が適切かについて、原因分析と修正提案をmarkdown形式で出力してください。

        確認事項: `daily-project-summary.yml`で`TMP_DIR`がどのように設定され、関連するスクリプトがそれをどのように利用しているかを確認してください。また、`IssueTracker.cjs`がGitHub APIを介してIssue情報を取得している場合、その際のパス解決方法との関連性も考慮に入れてください。

        期待する出力: `issue-notes`のパス参照が誤っている原因（例: カレントディレクトリの認識誤り、環境変数の不適切な利用）の分析と、その修正案（例: 環境変数`GITHUB_WORKSPACE`の利用、`TMP_DIR`を基準としたパス解決、スクリプト内での動的なパス構築）をmarkdown形式で生成してください。
        ```

3.  [Issue #16](../issue-notes/16.md): issue-note / project-summary / translate / callgraph をtonejs-mml-to-jsonから呼び出す
    -   最初の小さな一歩: `tonejs-mml-to-json`リポジトリで現在利用されている`issue-note`関連ワークフロー（`tonejs-mml-to-json/.github/workflows/issue-note.yml`相当のもの）の内容を把握し、本リポジトリの`call-issue-note.yml`への置き換えに必要な具体的な変更点を洗い出す。
    -   Agent実行プロンプト:
        ```
        対象ファイル: .github/workflows/issue-note.yml (本リポジトリ), .github/workflows/call-issue-note.yml (本リポジトリ), tonejs-mml-to-json/.github/workflows/issue-note.yml (仮称、ターゲットリポジトリの既存ファイル)

        実行内容: `tonejs-mml-to-json`リポジトリに、本リポジトリで定義されている`call-issue-note.yml`共通ワークフローを導入するための手順書をmarkdown形式で生成してください。具体的には、既存の`issue-note`関連ワークフロー（`tonejs-mml-to-json/.github/workflows/issue-note.yml`と仮定）を削除し、新しい`call-issue-note.yml`を適切な場所に配置し、必要な入力パラメータ（issue_number, issue_title, issue_body, issue_html_url）を設定する方法を含めて記述してください。

        確認事項: `tonejs-mml-to-json`リポジトリ内の既存のissue-noteワークフローの正確なファイルパスと内容を事前に確認し、本リポジトリの`call-issue-note.yml`が提供する機能が既存のニーズを満たすことを確認してください。

        期待する出力: `tonejs-mml-to-json`リポジトリにおける`issue-note`共通ワークフローの導入手順書（ファイル削除、新しい`call-issue-note.yml`の配置、`with`セクションでのパラメータ設定例、`on`トリガーの設定例を含む）をmarkdown形式で生成してください。

---
Generated at: 2025-09-18 07:05:09 JST

Last updated: 2025-09-20

# Development Status

## 現在のIssues
- [Issue #26](../issue-notes/26.md) は、ユーザーによるコミットがないにも関わらず、project summaryとcallgraphが不要に自動生成されてしまう問題のログ調査と改善を求めている。
- [Issue #16](../issue-notes/16.md) は、`issue-note`、`project-summary`、`translate`、`callgraph` の各共通ワークフローを外部プロジェクト (`tonejs-mml-to-json`) に導入し、既存の古いワークフローを最新のものに置き換えることを目指している。
- [Issue #10](../issue-notes/10.md), [Issue #11](../issue-notes/11.md), [Issue #12](../issue-notes/12.md), [Issue #13](../issue-notes/13.md) は、各共通ワークフロー（`callgraph`, `translate`, `project-summary`, `issue-note`）を他のプロジェクトから利用しやすくするための導入手順ドキュメントの整備が必要とされている。

## 次の一手候補
1.  [Issue #26](../issue-notes/26.md): 不要な自動生成の発生源特定と修正
    -   最初の小さな一歩: `check-commits.cjs` 内に、コミット履歴の取得結果と24時間以内のユーザーコミット有無の判定結果を詳細にログ出力する機能を追加し、問題の再現時に原因特定を容易にする。
    -   Agent実行プロンプト:
        ```
        対象ファイル: .github/actions-tmp/.github_automation/callgraph/scripts/check-commits.cjs および .github/actions-tmp/.github_automation/project_summary/scripts/development/GitUtils.cjs

        実行内容: `check-commits.cjs` の `Check for user commits in last 24 hours` ロジックにおいて、Gitコマンドの実行結果、および `should-run` 変数の最終的な判定結果（true/falseと、その理由）を詳細に標準出力するように修正してください。同様に、`daily-project-summary.yml` で利用されている `.github_automation/project_summary/scripts/development/GitUtils.cjs` も、コミット有無の判定ロジックに詳細なログ出力を追加してください。

        確認事項: 既存のロジックを変更せず、デバッグ情報を追加する形にしてください。出力されるログに機密情報や過剰な個人情報が含まれないことを確認してください。

        期待する出力: ログ出力が強化された `check-commits.cjs` と `GitUtils.cjs` の修正コード。
        ```

2.  [Issue #16](../issue-notes/16.md): `callgraph` 共通ワークフローの `tonejs-mml-to-json` への導入
    -   最初の小さな一歩: `tonejs-mml-to-json` リポジトリの `.github/workflows` ディレクトリに、当リポジトリの `call-callgraph.yml` をコピーし、GitHub Actions上で実行されることを確認する。
    -   Agent実行プロンプト:
        ```
        対象ファイル: .github/workflows/call-callgraph.yml (本リポジトリのもの)

        実行内容: `cat2151/github-actions/.github/workflows/call-callgraph.yml` の内容を分析し、外部リポジトリ（例: `tonejs-mml-to-json`）の `.github/workflows/call-callgraph.yml` として配置する際に必要な変更点（主に `uses` パスが `cat2151/github-actions/.github/workflows/callgraph.yml@main` を参照していること、および `CONFIG_NAME` パスが外部リポジトリの適切な相対パスになるように調整すること）を洗い出してください。

        確認事項: 外部リポジトリのファイル構造や既存ワークフローとの競合が発生しないか、特に `CONFIG_NAME` のパスが外部リポジトリに存在することを前提として調整可能かを確認してください。

        期待する出力: 外部リポジトリ用の `call-callgraph.yml` のYAMLスニペットと、その導入における注意点をまとめたMarkdownドキュメント。
        ```

3.  [Issue #12](../issue-notes/12.md): `project-summary` 共通ワークフローの導入手順書作成
    -   最初の小さな一歩: `.github_automation/project_summary/docs/daily-summary-setup.md` に、外部プロジェクトが `call-daily-project-summary.yml` を導入するために必要な手順（具体的なファイルパス、必須シークレットの設定、cronスケジュールの設定など）を追記する。
    -   Agent実行プロンプト:
        ```
        対象ファイル: .github_automation/project_summary/docs/daily-summary-setup.md および .github/workflows/call-daily-project-summary.yml

        実行内容: `daily-summary-setup.md` を編集し、`.github/workflows/call-daily-project-summary.yml` を外部プロジェクトで利用するための具体的な導入手順（`uses` の設定方法、`GEMINI_API_KEY` シークレットの設定手順、スケジュール設定例など）を「必要な設定」セクションに追記してください。また、`prompts` の外部指定がYAGNI原則により現在保留されている点も明記してください。

        確認事項: `daily-summary-setup.md` の既存の情報と整合性が取れているか、そして読者が実際にワークフローを導入できるだけの十分な情報が含まれているかを確認してください。

        期待する出力: `call-daily-project-summary.yml` の導入手順が追記された `daily-summary-setup.md` の更新版Markdownドキュメント。

---
Generated at: 2025-09-20 07:05:31 JST

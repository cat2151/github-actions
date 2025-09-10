Last updated: 2025-09-11

# Development Status

## 現在のIssues
- [Issue #16](../issue-notes/16.md) は、issue-note/project-summary/translate/callgraphが他リポジトリで古いワークフローを使用中。
- `github-actions` リポジトリの最新版 `call-*.yml` へ切り替える必要があることを可視化。
- 各 `call-*.yml` を単純コピーして、`tonejs-mml-to-json` リポジトリでの動作確認を進める。

## 次の一手候補
1. [Issue #16](../issue-notes/16.md) - `issue-note` 共通ワークフローの他リポジトリへの導入テスト
   - 最初の小さな一歩: `tonejs-mml-to-json` リポジトリに `call-issue-note.yml` をコピーし、既存の古い `issue-note.yml` と置き換えて実際に動作するか確認する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `tonejs-mml-to-json` リポジトリ内の既存の `issue-note.yml` （置き換え対象）および、コピー元の `.github/workflows/call-issue-note.yml`

     実行内容: `cat2151/github-actions` リポジトリの `.github/workflows/call-issue-note.yml` を `tonejs-mml-to-json` リポジトリの `.github/workflows/call-issue-note.yml` としてコピーし、既存の `tonejs-mml-to-json` リポジトリ内の古い `issue-note.yml` を無効化または削除する手順をmarkdown形式で記述してください。その後、`tonejs-mml-to-json` リポジトリでテスト用のIssueを新規作成し、新しいワークフローが正常に動作してIssue Noteが生成されるかを確認するための手順を記述してください。

     確認事項: `tonejs-mml-to-json` リポジトリの現在の `issue-note` 関連ワークフローの状態を確認し、新しい `call-issue-note.yml` の導入によって既存の機能に悪影響がないことを検証してください。また、必要な依存関係（Node.jsなど）が満たされているか確認してください。

     期待する出力: `tonejs-mml-to-json` リポジトリでの `call-issue-note.yml` 導入手順書と、テスト用Issue作成からIssue Note生成までの確認手順をまとめたmarkdownファイル。
     ```

2. [Issue #13](../issue-notes/13.md) - `issue-note` ワークフローの導入手順書作成
   - 最初の小さな一歩: `call-issue-note.yml` の `uses` や `with` の設定内容を基に、他プロジェクトがこのワークフローを導入するために必要な手順のドラフトを作成する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `.github/workflows/call-issue-note.yml`, `.github/workflows/issue-note.yml`

     実行内容: `issue-note` ワークフローを他プロジェクトから利用するための導入手順書をmarkdown形式で作成してください。手順書には、ワークフローの呼び出し方法、必須入力パラメータ（`issue_number`, `issue_title`, `issue_body`, `issue_html_url`）の設定方法、必要なパーミッションや依存関係を含めてください。

     確認事項: 既存の `issue-note.yml` および `call-issue-note.yml` の定義を確認し、必要な設定項目がすべて網羅され、導入者が迷うことなく設定できる内容になっているか検証してください。

     期待する出力: `issue-note` ワークフローの導入手順を詳細に記述したmarkdown形式のファイル (`.github_automation/issue-note/docs/ISSUE_NOTE_SETUP.md` など)。
     ```

3. [Issue #12](../issue-notes/12.md) - `project-summary` ワークフローの利用性向上に関する現状分析とプロンプト外部指定の提案
   - 最初の小さな一歩: `project-summary` 関連ファイル (`daily-project-summary.yml`, `call-daily-project-summary.yml`, `ProjectSummaryCoordinator.cjs`) を分析し、Issue #12で言及されている「個別dirへの移動」「共通リポジトリcheckout」「プロンプト外部指定」の現状（どこまで対応済みで何が残っているか）を可視化する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `.github/workflows/daily-project-summary.yml`, `.github/workflows/call-daily-project-summary.yml`, `.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`, `.github_automation/project_summary/prompts/development-status-prompt.md`, `.github_automation/project_summary/prompts/project-overview-prompt.md`

     実行内容: [Issue #12](../issue-notes/12.md) で挙げられている課題（個別ディレクトリへの移動、共通リポジトリの checkout、プロンプトの呼び出し元からの指定）について、現状がどこまで解決されているか、また残りの課題は何かを分析し、markdown形式で報告してください。特に、「プロンプトを呼び出し元ymlから指定可能にする」ための具体的な変更点（どのファイルをどのように修正するか）を提案してください。

     確認事項: `daily-project-summary.yml` が `TMP_DIR`, `PROMPT_DIR` など環境変数でパスを管理している現状を考慮し、これがプロンプトの外部指定にどのように影響するか、およびその変更の複雑性を評価してください。

     期待する出力: [Issue #12](../issue-notes/12.md) の現状分析と、プロンプトの外部指定化を実現するための具体的な改修提案（ファイルパス、変更内容、メリット・デメリット）をまとめたmarkdownファイル。
     ```

---
Generated at: 2025-09-11 07:04:52 JST

Last updated: 2025-09-14

# Development Status

## 現在のIssues
- [Issue #16](../issue-notes/16.md) は、issue-note, project-summary, translate, callgraphの各ワークフローを外部リポジトリ(tonejs-mml-to-json)から呼び出す検証を進めています。
- [Issue #13](../issue-notes/13.md), [Issue #12](../issue-notes/12.md), [Issue #11](../issue-notes/11.md), [Issue #10](../issue-notes/10.md) では、それぞれissue-note, project-summary, translate, callgraphについて、外部プロジェクトでの導入手順ドキュメント作成が課題として挙げられています。
- [Issue #12](../issue-notes/12.md) ではproject-summaryのプロンプトを呼び出し元で指定可能にするかについてはYAGNI原則に基づき保留されています。

## 次の一手候補
1. [Issue #16](../issue-notes/16.md): `issue-note` ワークフローの外部リポジトリへの導入検証
   - 最初の小さな一歩: `tonejs-mml-to-json` リポジトリに、`github-actions` リポジトリの `.github/workflows/call-issue-note.yml` をコピーし、GitHub Actions上で実行可能か確認する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `.github/workflows/call-issue-note.yml` (github-actionsリポジトリ), 外部リポジトリ (例: tonejs-mml-to-json) の `.github/workflows/issue-note-test.yml` (新規作成を想定)

     実行内容: `tonejs-mml-to-json` リポジトリの現行の`issue-note`ワークフローと、`github-actions`リポジトリの`call-issue-note.yml`の内容を比較し、外部リポジトリにコピーする際の変更点（特に`uses:`パスの調整）と、テストするための具体的な`issue_title`などの入力パラメータの提供方法を分析してください。

     確認事項: `call-issue-note.yml`が`issue-note.yml`を正しく参照しているか、また`issue-note.yml`が必要とする`inputs`が全て`call-issue-note.yml`から渡されているかを確認してください。

     期待する出力: `tonejs-mml-to-json`リポジトリで`call-issue-note.yml`を導入・テストするための具体的な手順書をMarkdown形式で生成してください。これには、新しいワークフローファイルの作成内容と、テストのためのIssueのオープン手順が含まれます。
     ```

2. [Issue #12](../issue-notes/12.md): `project-summary` 導入手順ドキュメント (`daily-summary-setup.md`) の更新
   - 最初の小さな一歩: `call-daily-project-summary.yml` の導入手順を、既存の `.github_automation/project_summary/docs/daily-summary-setup.md` に追記する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `.github_automation/project_summary/docs/daily-summary-setup.md` と `.github/workflows/call-daily-project-summary.yml`

     実行内容: `call-daily-project-summary.yml`を外部プロジェクトで利用するために必要な設定（secrets, cronスケジュール等）を抽出し、既存の`daily-summary-setup.md`の「必要な設定」セクションに追記する形で導入手順を分析し、提案してください。

     確認事項: `daily-summary-setup.md`の既存の構成と矛盾しないか、また`call-daily-project-summary.yml`で定義されている`secrets`や`on:`トリガーが網羅されているかを確認してください。

     期待する出力: 更新された`daily-summary-setup.md`の提案内容をMarkdown形式で出力してください。特に`call-daily-project-summary.yml`の具体的な`uses:`パスや`secrets`の設定方法を含めてください。
     ```

3. [Issue #13](../issue-notes/13.md): `issue-note` 導入手順ドキュメントの作成
   - 最初の小さな一歩: `issue-note` ワークフローを外部プロジェクトから呼び出すための導入手順書を新規作成する。既存の `daily-summary-setup.md` を参考にファイル構成を検討し、`.github_automation/issue_note/docs/issue-note-setup.md` として新規作成する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `.github/workflows/call-issue-note.yml` と `.github_automation/project_summary/docs/daily-summary-setup.md` (参考用)

     実行内容: `call-issue-note.yml`を外部プロジェクトで利用するための導入手順書を新規にMarkdown形式で作成してください。`daily-summary-setup.md`の構成を参考に、「必要な設定（GitHub Secrets、ファイル構成、実行条件）」、「プロンプトのカスタマイズ（該当する場合）」、「手動実行」、「トラブルシューティング」、「API制限について」、「セキュリティ」の項目を考慮し、特に`issue_number`, `issue_title`, `issue_body`, `issue_html_url`の`inputs`の渡し方を明確に記述してください。

     確認事項: `call-issue-note.yml`で定義されている`inputs`が全て手順書で説明されているか、また新規ドキュメントとして分かりやすい構成になっているかを確認してください。

     期待する出力: `issue-note`ワークフローの導入手順書（新規作成）をMarkdown形式で出力してください。ファイルパスは`.github_automation/issue_note/docs/issue-note-setup.md`と仮定します。

---
Generated at: 2025-09-14 07:04:36 JST

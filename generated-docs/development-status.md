Last updated: 2025-10-10

# Development Status

## 現在のIssues
- GitHub Actionsの`issue-note` ([Issue #13](../issue-notes/13.md))、`project-summary` ([Issue #12](../issue-notes/12.md))、`translate` ([Issue #11](../issue-notes/11.md))の各共通ワークフローについて、他プロジェクトからの導入・利用を容易にするためのドキュメント整備が主な課題です。
- 特に`project-summary` ([Issue #12](../issue-notes/12.md))では`daily-summary-setup.md`の更新が、`issue-note` ([Issue #13](../issue-notes/13.md))と`translate` ([Issue #11](../issue-notes/11.md))では`call`導入手順の記述が求められています。
- `translate` ([Issue #11](../issue-notes/11.md))は一部のコード分離は完了しており、その状況の可視化とドキュメント化も課題に含まれます。

## 次の一手候補
1. `project-summary`導入手順のドキュメント更新 ([Issue #12](../issue-notes/12.md))
   - 最初の小さな一歩: `.github_automation/project_summary/docs/daily-summary-setup.md` を開き、現状の`call-daily-project-summary.yml`の利用に必要な情報がすべて記載されているかレビューする。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github_automation/project_summary/docs/daily-summary-setup.mdと.github/workflows/call-daily-project-summary.yml

     実行内容: `daily-summary-setup.md` を分析し、`call-daily-project-summary.yml` を他プロジェクトで利用するために必要な設定や手順が網羅されているかを確認してください。特に、`uses` の設定方法、`secrets` の渡し方、前提条件（Node.jsのバージョン、依存関係のインストール等）に焦点を当て、不足している情報を追記してください。

     確認事項: `daily-summary-setup.md` の既存内容との整合性、および `call-daily-project-summary.yml` の最新の構成と一致していることを確認してください。

     期待する出力: `call-daily-project-summary.yml` の導入手順を具体的に説明するよう更新された `daily-summary-setup.md` の内容をmarkdown形式で出力してください。
     ```

2. `translate`導入手順のドキュメント更新 ([Issue #11](../issue-notes/11.md))
   - 最初の小さな一歩: `.github_automation/translate/docs/TRANSLATION_SETUP.md` を開き、現在の `call-translate-readme.yml` を他プロジェクトから利用するために必要な情報を書き出す。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/translate/docs/TRANSLATION_SETUP.mdと.github/workflows/call-translate-readme.yml、.github/workflows/translate-readme.yml

     実行内容: `TRANSLATION_SETUP.md` を分析し、`call-translate-readme.yml` を他プロジェクトで利用するために必要な設定や手順が網羅されているかを確認してください。特に、`uses` の設定方法、`secrets` の渡し方（`GEMINI_API_KEY`）、ファイル配置の前提条件（`README.ja.md`の存在）、および`translate-readme.cjs`スクリプトの配置に関する情報に焦点を当て、不足している情報を追記してください。`issue-notes/11.md` に記載されている「別dirへの切り分け等実施済みのはず」の状況もドキュメントに反映してください。

     確認事項: `TRANSLATION_SETUP.md` の既存内容との整合性、および `call-translate-readme.yml`と`translate-readme.yml` の最新の構成と一致していることを確認してください。

     期待する出力: `call-translate-readme.yml` の導入手順を具体的に説明するよう更新された `TRANSLATION_SETUP.md` の内容をmarkdown形式で出力してください。
     ```

3. `issue-note`導入手順のドキュメント作成 ([Issue #13](../issue-notes/13.md))
   - 最初の小さな一歩: `issue-note` ワークフローの現状の利用方法を把握し、導入手順を記載する新規ドキュメントファイル名（例: `ISSUE_NOTE_SETUP.md`）を決定する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/call-issue-note.ymlと.github/workflows/issue-note.yml

     実行内容: `call-issue-note.yml` を他プロジェクトで利用するための導入手順書を新規に作成してください。以下の要素を必ず含めてください：
     1. `call-issue-note.yml` と `issue-note.yml` を配置する場所。
     2. `on: workflow_dispatch` や `on: issues` などのトリガー設定。
     3. `uses` の設定方法。
     4. `inputs` の渡し方（`issue_title`, `issue_number`, `issue_body`, `issue_url` など）。
     5. `secrets` の設定（`GITHUB_TOKEN`）。
     6. 前提条件（Node.jsのバージョン、依存関係のインストール等）。

     確認事項: `issue-note` ワークフローが正しく動作するために必要なすべての情報が含まれていることを確認してください。

     期待する出力: `call-issue-note.yml` の導入手順を説明する新規ドキュメント `ISSUE_NOTE_SETUP.md` の内容をmarkdown形式で出力してください。
     ```

---
Generated at: 2025-10-10 07:05:31 JST

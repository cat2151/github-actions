Last updated: 2025-09-25

# Development Status

## 現在のIssues
- 外部プロジェクトで `translate` と `callgraph` 共通ワークフローの呼び出し検証が残っており、[Issue #16](../issue-notes/16.md) で対応が必要です。
- 各共通ワークフロー ([Issue #13](../issue-notes/13.md), [Issue #12](../issue-notes/12.md), [Issue #11](../issue-notes/11.md), [Issue #10](../issue-notes/10.md)) の他プロジェクトからの導入手順書の作成または更新が課題です。
- 特に [Issue #12](../issue-notes/12.md) では `project-summary` のプロンプトカスタマイズ機能はYAGNI原則に基づき現状保留されています。

## 次の一手候補
1. [Issue #11](../issue-notes/11.md) translate共通ワークフローの導入手順書を作成する
   - 最初の小さな一歩: `TRANSLATION_SETUP.md`、`translate-readme.yml`、`call-translate-readme.yml` の内容を分析し、外部プロジェクトからの利用ガイドを作成するための情報を収集する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/translate/docs/TRANSLATION_SETUP.md, .github/workflows/translate-readme.yml, .github/workflows/call-translate-readme.yml

     実行内容: `translate-readme.yml` を外部プロジェクトから利用するための手順書を、`TRANSLATION_SETUP.md` の内容を参考に、`call-translate-readme.yml` のパラメータやシークレット設定を含めてmarkdown形式で記述してください。現在の `TRANSLATION_SETUP.md` は一般的なセットアップガイドであり、`workflow_call` の具体的な利用方法には言及が不足しているため、その点を補完してください。特に、`target-branch` 入力と `GEMINI_API_KEY` シークレットの設定方法を明確に記述してください。

     確認事項: `translate-readme.yml` が `check-recent-human-commit.yml` を利用していること、`TMP_DIR`, `SCRIPT_DIR`, `DOC_NAME` 環境変数の使われ方を確認してください。

     期待する出力: 外部プロジェクトが `call-translate-readme.yml` を利用する際の手順書をmarkdown形式で生成してください。既存の `TRANSLATION_SETUP.md` に追記・修正する形ではなく、新規に「他プロジェクトからの利用ガイド」として生成してください。
     ```

2. [Issue #10](../issue-notes/10.md) callgraph共通ワークフローの導入手順書を作成する
   - 最初の小さな一歩: `callgraph.md`、`callgraph.yml`、`call-callgraph.yml` の内容を分析し、外部プロジェクトからの利用ガイドを作成するための情報を収集する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/callgraph/docs/callgraph.md, .github/workflows/callgraph.yml, .github/workflows/call-callgraph.yml

     実行内容: `callgraph.yml` を外部プロジェクトから利用するための手順書を、`callgraph.md` の内容を参考に、`call-callgraph.yml` のパラメータ (`CONFIG_NAME`) やCodeQLのセットアップに関する情報を含めてmarkdown形式で記述してください。現在の `callgraph.md` はCallgraph機能の概要説明に重点を置いているため、`workflow_call` の具体的な利用方法、特に `CONFIG_NAME` の設定やCodeQL CLIのインストール方法を補完してください。

     確認事項: `callgraph.yml` が `check-recent-human-commit.yml` を利用していること、`ACTION_TMP`, `CALLGRAPH`, `PRESETS`, `QUERIES` 環境変数の使われ方を確認してください。

     期待する出力: 外部プロジェクトが `call-callgraph.yml` を利用する際の手順書をmarkdown形式で生成してください。既存の `callgraph.md` に追記・修正する形ではなく、新規に「他プロジェクトからの利用ガイド」として生成してください。
     ```

3. [Issue #12](../issue-notes/12.md) project-summary共通ワークフローの導入手順書を更新する
   - 最初の小さな一歩: `.github_automation/project_summary/docs/daily-summary-setup.md` をレビューし、現在の `call-daily-project-summary.yml` との整合性を確認し、不足している導入手順を特定する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/docs/daily-summary-setup.md, .github/workflows/daily-project-summary.yml, .github/workflows/call-daily-project-summary.yml

     実行内容: `daily-summary-setup.md` をレビューし、`call-daily-project-summary.yml` を外部プロジェクトから利用するための導入手順を具体的に記述してください。特に、`GEMINI_API_KEY` シークレットの設定方法を強調し、`project-overview-prompt.md` や `development-status-prompt.md` のカスタマイズに関する説明を補足してください。Issueの内容に基づき、「promptsをcall側ymlで指定可能にする」機能はYAGNI原則により保留であることも明記してください。

     確認事項: `daily-project-summary.yml` が `check-recent-human-commit.yml` を利用していること、`TMP_DIR`, `SCRIPT_DIR`, `PROMPT_DIR`, `DOCS_DIR` 環境変数の使われ方を確認してください。

     期待する出力: `daily-summary-setup.md` を直接修正し、より実践的な導入ガイドとなるように更新したmarkdown形式のファイルを出力してください。変更箇所は明確に示してください。

---
Generated at: 2025-09-25 07:05:30 JST

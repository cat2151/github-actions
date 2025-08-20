Last updated: 2025-08-21

# Development Status

## 現在のIssues
- 既存のGitHub Actionsや自動化スクリプトを、他のプロジェクトからより簡単に再利用できるようにするための取り組みが進行中です。
- 特に、[Issue #13]では`issue-note`の生成プロセスを、[Issue #12]では`project-summary`（概要と開発状況）の生成機能を他のプロジェクトで利用可能にすることを目指しています。
- また、[Issue #11]と[Issue #10]は、それぞれ`translate`ワークフローと`callgraph`生成ツールが外部プロジェクトから利用しやすくなるよう、改善を進めています。

## 次の一手候補
1. [Issue #13](issue-notes/13.md) issue-note を他projectから使いやすくする
   - 最初の小さな一歩: `issue-note`の生成ワークフローと関連スクリプトの処理フローを分析し、外部プロジェクトで利用するために必要な最低限の入出力と依存関係（ファイルパス、シークレットなど）を特定する。
   - Agent実行プロンプ:
     ```
     対象ファイル: `.github/workflows/issue-note-gen.yml`, `issue-notes/issue-note-template.md`, `.github_automation/issue_note_generator/`配下のスクリプト

     実行内容: `issue-note-gen.yml`ワークフローと関連スクリプトの処理フローを分析し、外部プロジェクトがこの機能を導入する際に必要となる以下の設定項目を洗い出す：1) 必須入力パラメータ、2) 必須シークレット、3) ファイル配置の前提条件（例: `issue-notes`ディレクトリ、テンプレートファイル）、4) 外部プロジェクトでの利用時に必要な追加設定や手順。

     確認事項: 作業前に既存のワークフローファイルや関連スクリプトの依存関係、および`issue-note`の生成ロジックを把握してください。

     期待する出力: 外部プロジェクトが`issue-note`機能を導入する際の手順書をMarkdown形式で生成してください。必須パラメータの設定方法、シークレットの登録手順、前提条件の確認項目、および実行方法を含めてください。
     ```

2. [Issue #12](issue-notes/12.md) project-summary を他projectから使いやすくする
   - 最初の小さな一歩: `project-summary`（`project-overview.md`と`development-status.md`）の生成ワークフローを分析し、外部プロジェクトで利用するために必要な最低限の入出力と依存関係を特定する。
   - Agent実行プロンプ:
     ```
     対象ファイル: `.github/workflows/project-summary-gen.yml`, `.github_automation/project_summary/`配下のスクリプト群

     実行内容: `project-summary-gen.yml`ワークフローと関連スクリプトの処理フローを分析し、外部プロジェクトがこの機能を導入する際に必要となる以下の設定項目を洗い出す：1) 必須入力パラメータ、2) 必須シークレット（例: `GITHUB_TOKEN`）、3) ファイル配置の前提条件（例: `issue-notes`ディレクトリの構造、`generated-docs`ディレクトリ）、4) 外部プロジェクトでの利用時に必要な追加設定や手順。

     確認事項: 作業前に既存のワークフローファイルや関連スクリプトの依存関係、特に最近のリファクタリング（[Issue #15]関連）による影響を確認してください。

     期待する出力: 外部プロジェクトが`project-summary`機能を導入する際の手順書をMarkdown形式で生成してください。必須パラメータの設定方法、シークレットの登録手順、前提条件の確認項目、および実行方法を含めてください。
     ```

3. [Issue #11](issue-notes/11.md) translate を他projectから使いやすくする
   - 最初の小さな一歩: `translate`ワークフロー（`README.md`の翻訳）を分析し、外部プロジェクトで利用するために必要な最低限の入出力と依存関係を特定する。
   - Agent実行プロンプ:
     ```
     対象ファイル: `.github/workflows/translate-readme.yml`と`.github/workflows/call-translate-readme.yml`

     実行内容: 対象ファイルについて、外部プロジェクトから利用する際に必要な設定項目を洗い出し、以下の観点から分析してください：1) 必須入力パラメータ（target-branch等）、2) 必須シークレット（GEMINI_API_KEY）、3) ファイル配置の前提条件（README.ja.mdの存在）、4) 外部プロジェクトでの利用時に必要な追加設定。

     確認事項: 作業前に既存のworkflowファイルとの依存関係、および他のREADME関連ファイルとの整合性を確認してください。

     期待する出力: 外部プロジェクトがこの`call-translate-readme.yml`を導入する際の手順書をmarkdown形式で生成してください。具体的には：必須パラメータの設定方法、シークレットの登録手順、前提条件の確認項目を含めてください。
     ```

---
Generated at: 2025-08-21 07:04:23 JST

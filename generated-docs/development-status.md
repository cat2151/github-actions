Last updated: 2026-02-12

# Development Status

## 現在のIssues
-   [Issue #13](../issue-notes/13.md) は、`issue-note` ワークフローを他のプロジェクトで利用するための導入手順書の作成に焦点を当てています。
-   [Issue #11](../issue-notes/11.md) は、`translate` ワークフローの他プロジェクトでの利用促進を目指しており、特に導入ドキュメントの整備とプロンプトの外部設定化が課題です。
-   両issueとも、共通ワークフローとしてGitHub Actionsをより使いやすくするためのドキュメント整備と機能改善が主な目標です。

## 次の一手候補
1.  [Issue #13](../issue-notes/13.md): `issue-note` ワークフローの外部利用向け導入手順書を作成
   - 最初の小さな一歩: `issue-note` ワークフローを外部プロジェクトから利用するために必要な `inputs`、`secrets`、および前提条件をまとめた導入手順書の初稿を作成します。
   - Agent実行プロンプ:
     ```
     対象ファイル:
     - .github/workflows/issue-note.yml
     - .github/workflows/call-issue-note.yml
     - issue-notes/3.md

     実行内容:
     `.github/workflows/issue-note.yml` の `workflow_call` 定義と、`issue-notes/3.md` に記載されている共通ワークフロー化の経緯を基に、外部プロジェクトがこのワークフローを呼び出す際に必要となる `inputs`、`secrets`、および前提条件（例: `issue-notes` ディレクトリの存在、GitHubトークンのパーミッション設定）を洗い出し、導入手順書のドラフトをMarkdown形式で作成してください。

     確認事項:
     `issue-note.yml` の `workflow_call` で定義されている `inputs` と `secrets` が全て網羅されているか、また、既存の `call-issue-note.yml` がどのように `issue-note.yml` を呼び出しているかを確認し、一般的な利用シナリオを考慮してください。

     期待する出力:
     外部プロジェクトが `issue-note` ワークフローを導入する際の手順書をMarkdown形式で生成してください。手順書には、必要な `inputs` と `secrets` の設定方法、ワークフローの呼び出し例、およびその他の前提条件を含めてください。
     ```

2.  [Issue #11](../issue-notes/11.md): `translate` ワークフローの外部利用向け導入手順書を作成
   - 最初の小さな一歩: `translate-readme.yml` ワークフローを外部プロジェクトから利用するために必要な `inputs`、`secrets`、および前提条件をまとめた導入手順書の初稿を作成します。
   - Agent実行プロンプト:
     ```
     対象ファイル:
     - .github/workflows/translate-readme.yml
     - .github/workflows/call-translate-readme.yml
     - .github_automation/translate/docs/TRANSLATION_SETUP.md
     - .github_automation/translate/scripts/translate-readme.cjs

     実行内容:
     `.github/workflows/translate-readme.yml` の `workflow_call` 定義と、`translate-readme.cjs` スクリプト、既存のドキュメント（`TRANSLATION_SETUP.md`）を基に、外部プロジェクトがこのワークフローを呼び出す際に必要となる `inputs`、`secrets`（例: `GEMINI_API_KEY`）、および前提条件（例: `README.md` と `README.ja.md` の存在、パーミッション設定）を洗い出し、導入手順書のドラフトをMarkdown形式で作成してください。

     確認事項:
     `translate-readme.yml` の `workflow_call` で定義されている `inputs` と `secrets` が全て網羅されているか、また、既存の `call-translate-readme.yml` がどのように `translate-readme.yml` を呼び出しているかを確認し、一般的な利用シナリオを考慮してください。特に `GEMINI_API_KEY` の設定方法に注意してください。

     期待する出力:
     外部プロジェクトが `translate-readme` ワークフローを導入する際の手順書をMarkdown形式で生成してください。手順書には、必要な `inputs` と `secrets` の設定方法、ワークフローの呼び出し例、およびその他の前提条件を含めてください。
     ```

3.  [Issue #11](../issue-notes/11.md): `translate` ワークフローのプロンプト外部化設計を検討
   - 最初の小さな一歩: `translate-readme.cjs` 内で現在ハードコードされている翻訳プロンプトを特定し、外部ファイルから読み込むための設計案を検討します。
   - Agent実行プロンプト:
     ```
     対象ファイル:
     - .github_automation/translate/scripts/translate-readme.cjs
     - .github/workflows/translate-readme.yml
     - .github/workflows/call-translate-readme.yml
     - .github_automation/project_summary/prompts/development-status-prompt.md

     実行内容:
     `.github_automation/translate/scripts/translate-readme.cjs` スクリプト内で現在ハードコードされている翻訳プロンプトを特定し、そのプロンプトを外部ファイル（例: `.md` ファイル）から読み込むように変更するための設計案を考案してください。また、その外部ファイルパスを `.github/workflows/translate-readme.yml` の `inputs` 経由で指定できるようにするためのワークフロー変更点も考慮してください。

     確認事項:
     現在のプロンプトが `translate-readme.cjs` のどこで定義されているか、外部ファイルからプロンプトを読み込む際の方法（例: Node.jsの `fs` モジュールを使用）、および `translate-readme.yml` の `workflow_call` の `inputs` に新しいパラメータを追加する影響を確認してください。ハルシネーションを避けるため、具体的な実装コードは生成せず、設計案に留めてください。

     期待する出力:
     `translate` ワークフローにおけるプロンプト外部化のための設計案をMarkdown形式で生成してください。これには、変更が必要なファイル、新しい `inputs` の提案、外部プロンプトファイルの推奨される構造、および変更のメリットと潜在的な課題を含めてください。
     ```

---
Generated at: 2026-02-12 07:10:08 JST

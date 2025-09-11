Last updated: 2025-09-12

# Development Status

## 現在のIssues
- [Issue #16](../issue-notes/16.md)では、`issue-note`等の共通ワークフロー群を他リポジトリ(`tonejs-mml-to-json`)で動作させるための移行と検証が主要な課題です。
- [Issue #13]、[Issue #12]、[Issue #11]、[Issue #10]は、各共通ワークフロー（issue-note, project-summary, translate, callgraph）の他プロジェクトからの利用を容易にするための改善（プロンプト外部指定、ドキュメント整備など）を進めています。
- 特に[Issue #12]では`project-summary`のプロンプト外部指定化の具体的な改修提案がまとまり、その実装が次の一手となります。

## 次の一手候補
1. [Issue #12] `project-summary` のプロンプト外部指定化の実装
   - 最初の小さな一歩: `.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs` 内でプロンプトファイル名の決め打ち部分を `process.env.PROMPT_FILE` から取得するように修正する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`

     実行内容: `ProjectSummaryCoordinator.cjs` 内のプロンプトファイル名をハードコードしている部分（例: `prompts/development-status-prompt.md`や`project-overview-prompt.md`の指定箇所）を、`process.env.OVERVIEW_PROMPT` および `process.env.DEVELOPMENT_STATUS_BASE_PROMPT` 環境変数から取得するように変更し、環境変数が設定されていない場合は既存のデフォルト値をフォールバックとして使用するように修正してください。

     確認事項: 既存の `ProjectSummaryCoordinator.cjs` のロジックが変更されないこと。環境変数の優先度が正しく設定されること。デフォルトパスが引き続き機能すること。修正後のコードで `overviewPromptPath` と `developmentStatusPromptPath` が環境変数またはデフォルト値から正しく初期化されることを確認してください。

     期待する出力: 修正された `ProjectSummaryCoordinator.cjs` のコード。変更箇所の説明をMarkdown形式で記述してください。
     ```

2. [Issue #11] `translate` を他projectから使いやすくする - プロンプト外部指定化の検討
   - 最初の小さな一歩: `.github_automation/translate/scripts/translate-readme.cjs` が翻訳に用いるプロンプトの扱い方を調査し、外部からプロンプトを指定できる余地があるか、または新規にプロンプトを導入する必要があるか分析する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `.github_automation/translate/scripts/translate-readme.cjs`

     実行内容: `.github_automation/translate/scripts/translate-readme.cjs` が翻訳に用いるプロンプトの扱い方を分析し、現在プロンプトがどのように組み込まれているか、またそれを外部（例: 環境変数、引数）から指定できるようにするためにはどのような改修が必要か、markdown形式で出力してください。

     確認事項: `translate-readme.cjs` のメインロジック（Gemini API呼び出し部分）が翻訳内容生成にどのようなプロンプトを用いているかを確認してください。Gemini APIへのリクエストペイロードにおいてプロンプトがどのように構築されているかを特定してください。

     期待する出力: `translate-readme.cjs`におけるプロンプトの現状と、外部指定化のための具体的な改修案（例：環境変数でのパス指定、引数でのプロンプト文字列渡しなど）をMarkdown形式で記述したレポート。
     ```

3. [Issue #16] `issue-note` を `tonejs-mml-to-json` から呼び出す - 移行手順の確認
   - 最初の小さな一歩: `tonejs-mml-to-json` リポジトリで現在使用されている古い `issue-note` ワークフローが存在するか確認し、存在する場合、`github-actions` リポジトリの `call-issue-note.yml` の内容で置き換える場合の具体的な変更点と手順を洗い出す。
   - Agent実行プロンプト:
     ```
     対象ファイル: `.github/workflows/call-issue-note.yml`

     実行内容: `.github/workflows/call-issue-note.yml` の内容を分析し、これを外部リポジトリ（例: `tonejs-mml-to-json`）の `.github/workflows/` ディレクトリにコピーして使用する際に、変更が必要な箇所（`uses:`の参照パスなど）を特定し、その変更方法と導入手順をMarkdown形式で説明してください。

     確認事項: `call-issue-note.yml` が `cat2151/github-actions/.github/workflows/issue-note.yml@main` を `uses` している点、および `with` で渡している `inputs` の形式が正しいことを確認してください。`issue_body`の入力が正しくエスケープされていることも確認してください。

     期待する出力: `call-issue-note.yml` を外部リポジトリに導入するための具体的な手順書をMarkdown形式で出力してください。これには、ファイルの内容、`uses`パスの指定方法、必要な入力パラメータの渡し方、および`GITHUB_TOKEN`の扱いや権限設定に関する注意点を含めてください。

---
Generated at: 2025-09-12 07:04:56 JST

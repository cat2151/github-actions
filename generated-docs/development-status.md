Last updated: 2026-03-03

# Development Status

## 現在のIssues
- `issue-note` ワークフロー ([Issue #13](../issue-notes/13.md)) を他プロジェクトで利用しやすくするため、導入手順ドキュメントの作成が求められています。
- `translate` ワークフロー ([Issue #11](../issue-notes/11.md)) についても、同様に導入手順ドキュメントの作成が必要です。
- さらに `translate` ワークフローでは、プロンプトをハードコードから外部ファイルに切り出し、呼び出し元から柔軟に指定できるようにする改善が検討されています。

## 次の一手候補
1. [Issue #13](../issue-notes/13.md): issue-note ワークフローの導入手順書を作成する
   - 最初の小さな一歩: `issue-note.yml` の `workflow_call` の `inputs` と `secrets` を確認し、それらの説明を含むドキュメントのドラフトを作成する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/issue-note.yml

     実行内容: .github/workflows/issue-note.yml の workflow_call セクションを分析し、外部プロジェクトからこのワークフローを呼び出す際に必要となる inputs と secrets の一覧を抽出してください。それぞれの入力項目について、その目的と想定される値を明確に記述してください。

     確認事項: 既存の .github/workflows/issue-note.yml が共通ワークフローとして機能しているか、また、inputs や secrets が適切に定義されているかを確認してください。issue-notes/3.md に記載されている issue-note 共通ワークフロー化の経緯も参考にしてください。

     期待する出力: issue-note ワークフローを他プロジェクトから利用するための「必須入力パラメータ」と「必須シークレット」を解説するMarkdown形式のドキュメントのドラフトを出力してください。
     ```

2. [Issue #11](../issue-notes/11.md): translate ワークフローの導入手順書を作成する
   - 最初の小さな一歩: `translate-readme.yml` の `workflow_call` の `inputs` と `secrets` を確認し、それらの説明を含むドキュメントのドラフトを作成する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/call-translate-readme.yml

     実行内容: .github/workflows/call-translate-readme.yml の workflow_call セクションを分析し、外部プロジェクトからこのワークフローを呼び出す際に必要となる inputs と secrets の一覧を抽出してください。それぞれの入力項目について、その目的と想定される値を明確に記述してください。

     確認事項: 既存の .github/workflows/call-translate-readme.yml が共通ワークフローとして機能しているか、また、inputs や secrets が適切に定義されているかを確認してください。

     期待する出力: translate ワークフローを他プロジェクトから利用するための「必須入力パラメータ」と「必須シークレット」を解説するMarkdown形式のドキュメントのドラフトを出力してください。
     ```

3. [Issue #11](../issue-notes/11.md): translate ワークフローのプロンプトを外部ファイルに切り出す
   - 最初の小さな一歩: 現在 `.github_automation/translate/scripts/translate-readme.cjs` でハードコードされているプロンプト文字列を特定し、外部ファイルに切り出すための基本的なファイル構造（例: `prompts/default-translate-readme.md`）と、そのプロンプトを読み込むための `.github_automation/translate/scripts/translate-readme.cjs` 内の変更点を検討する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/translate/scripts/translate-readme.cjs

     実行内容: .github_automation/translate/scripts/translate-readme.cjs 内にハードコードされている翻訳プロンプト文字列を特定し、その文字列を .github_automation/translate/prompts/default-translate-readme.md という新規ファイルとして作成することを検討してください。また、.github_automation/translate/scripts/translate-readme.cjs がこの新規ファイルからプロンプトを読み込むように変更するためのコードの概要を記述してください。

     確認事項: プロンプトが現在どのように使用されているか、また、プロンプトを外部化する際にどのような代替文字列（プレースホルダー）が必要になるかを確認してください。.github_automation/translate/scripts/translate-readme.cjs の処理フロー全体を考慮し、変更が他の機能に影響を与えないことを確認してください。

     期待する出力: default-translate-readme.md に保存すべきプロンプトの内容と、.github_automation/translate/scripts/translate-readme.cjs でそのプロンプトを読み込むように変更する部分の擬似コードまたは具体的なJavaScriptコードスニペットをMarkdown形式で出力してください。

---
Generated at: 2026-03-03 07:08:51 JST

Last updated: 2025-08-15

# Development Status

## 現在のIssues
- [Issue #15](issue-notes/15.md)は、`project_summary`スクリプトを分解し、1ファイルあたりの行数を200行未満に抑えることで、agentによるメンテナンス性を向上させるためのリファクタリングを進めています。
- [Issue #10](issue-notes/10.md)、[Issue #11](issue-notes/11.md)、[Issue #12](issue-notes/12.md)、[Issue #13](issue-notes/13.md)は、それぞれ`callgraph`、`translate`、`project-summary`、`issue-note`といった既存機能を他のプロジェクトから利用しやすくするための汎用化を目的としています。
- これらのissueは、GitHub Actionsのリポジトリ内で開発されているツールの再利用性と保守性を高めることに焦点を当てています。

## 次の一手候補
1. [Issue #15](issue-notes/15.md): project_summary scripts cjs を分解し、できるだけ1ファイル200行未満にし、agentによるメンテをしやすくする
   - 最初の小さな一歩: `project_summary/scripts/generate-project-summary.cjs` ファイル内で、まだ分解されていない大きなロジックがあれば、それを独立した関数またはモジュールとして切り出すための候補を特定する。
   - Agent実行プロンプ:
     ```
     対象ファイル: `.github_automation/project_summary/scripts/generate-project-summary.cjs`
     
     実行内容: 上記ファイルを分析し、複数の責任を持つ、または行数が200行を超える可能性のあるブロックを特定してください。その後、それらのブロックをどのように分割し、別のCJSモジュールとして切り出すことができるかの提案をMarkdown形式で記述してください。各提案には、切り出す機能の概要、新しいファイル名、および現在のファイルからの呼び出し元の変更点を含めてください。
     
     確認事項: 既存の`CodeAnalyzer.cjs`, `ProjectAnalyzer.cjs`, `ProjectSummaryGenerator.cjs`との機能重複がないか、また、分解後のファイル間の依存関係が明確になるかを確認してください。`generate-project-summary.cjs`の全体的な処理フローが理解しやすくなることを優先してください。
     
     期待する出力: `generate-project-summary.cjs`の分解候補と、それぞれの候補を別ファイルに切り出す際の具体的な変更提案をMarkdown形式で出力してください。
     ```

2. [Issue #12](issue-notes/12.md): project-summary を他projectから使いやすくする
   - 最初の小さな一歩: `project-summary`機能が現在どのように呼び出され、どのような設定を必要としているか（例: 入力パス、出力パスなど）を調査し、汎用化のために必要なパラメータを特定する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `.github/workflows/generate-project-summary.yml`, `.github_automation/project_summary/scripts/generate-project-summary.cjs`
     
     実行内容: `project-summary`機能が他のプロジェクトから再利用されることを想定し、現在ハードコードされているパスや設定、またはコマンドライン引数として渡すことが望ましい項目を洗い出してください。それらをGitHub Actionsの`inputs`として定義するために必要な変更点を分析し、Markdown形式で出力してください。
     
     確認事項: 既存のワークフローとスクリプトの連携を確認し、汎用化によって現在の動作が損なわれないこと、および新しい`inputs`が直感的で理解しやすいものであることを確認してください。
     
     期待する出力: `project-summary`を再利用可能なアクションとして構成するために必要な`workflow_dispatch`の`inputs`定義と、それに合わせてスクリプト側でこれらの`inputs`を受け取るための変更点についての提案をMarkdown形式で出力してください。
     ```

3. [Issue #10](issue-notes/10.md): callgraph を他projectから使いやすくする
   - 最初の小さな一歩: `callgraph`機能が現在どのように実行され、どのような出力を生成しているかを確認し、他のプロジェクトで利用する際に最低限必要な入出力要件を特定する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `.github/workflows/generate-callgraph.yml`, `.github_automation/callgraph/generate-callgraph.cjs`
     
     実行内容: `callgraph`機能が他のプロジェクトから再利用されることを想定し、GitHub Actionsの`inputs`として外部から渡せるようにすべきパラメータ（例: 解析対象のディレクトリ、出力ファイル名など）を洗い出してください。それぞれのパラメータについて、説明とデフォルト値を考慮し、`action.yml`または`workflow_dispatch`の`inputs`定義として提案してください。
     
     確認事項: 既存のワークフローとスクリプトの連携、および`callgraph`の生成に必要な依存関係（例: `npm install`など）を考慮し、外部プロジェクトでの利用時に明確な指示を提供できることを確認してください。
     
     期待する出力: `callgraph`を他のプロジェクトから利用するためのアクションとしてパッケージ化する際に必要となる`inputs`の定義（`action.yml`の形式を模倣）と、それらの入力がスクリプトでどのように利用されるかについての説明をMarkdown形式で出力してください。

---
Generated at: 2025-08-15 07:05:32 JST

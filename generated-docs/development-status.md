Last updated: 2026-03-26

# Development Status

## 現在のIssues
- [Issue #57](../issue-notes/57.md) は、既存のRustプロジェクトで`cargo install`されているツールに対し、`rust-fmt-commit`と`rust-windows-check`の共通ワークフローを適用し、CIでの自動検証を導入する作業を計画しています。
- [Issue #13](../issue-notes/13.md) は、`issue-note`共通ワークフローの他プロジェクトからの利用を促進するため、導入手順のドキュメント作成を求めています。
- [Issue #11](../issue-notes/11.md) は、`translate`共通ワークフローの利用を容易にするためのドキュメント作成と、プロンプトの外部からの柔軟な指定方法について検討しています。

## 次の一手候補
1. [Issue #57](../issue-notes/57.md) Rustプロジェクトで`rust-fmt-commit`と`rust-windows-check`のworkflow_callを配置するための準備
   - 最初の小さな一歩: `rust-fmt-commit.yml`と`rust-windows-cargo-check.yml`の`workflow_call`で定義されている必須`inputs`と`secrets`、およびそれらが期待する値のタイプを洗い出す。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/rust-fmt-commit.yml
                   .github/workflows/rust-windows-cargo-check.yml

     実行内容: 各ファイルについて、`on: workflow_call:` セクションで定義されている `inputs` と `secrets` を抽出し、それぞれがどのような情報を期待しているか、その役割とデータタイプを分析してください。

     確認事項: 各workflowがどのようなOS環境（例: `ubuntu-latest`, `windows-latest`）をターゲットとしているか、および `permissions` 設定でどのような権限が要求されているかを確認してください。

     期待する出力: 抽出した `inputs` と `secrets` の詳細（名前、説明、必須/任意、データタイプ）をMarkdownリスト形式で出力し、ワークフロー実行に必要な環境と権限についても補足してください。
     ```

2. [Issue #13](../issue-notes/13.md) `issue-note`共通ワークフローの他プロジェクト向け導入手順書作成の準備
   - 最初の小さな一歩: `.github/workflows/issue-note.yml`の`workflow_call`で公開されている`inputs`と`secrets`、およびそれらがワークフロー内でどのように利用されているかを分析する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/issue-note.yml
                   .github/workflows/call-issue-note.yml

     実行内容: `issue-note.yml`の`on: workflow_call:`セクションで定義されている`inputs`と`secrets`を抽出し、それらがワークフロー内でどのように参照され、どのような影響を与えるかを分析してください。特に、`actions/github-script`ステップでの変数参照方法（例: `process.env.ISSUE_NUMBER`）に注目してください。

     確認事項: 既存の呼び出し元ワークフローである`call-issue-note.yml`が`issue-note.yml`にどのように`inputs`と`secrets`を渡しているかを確認し、`issue-notes/3.md`に記載されたエラー修正の経緯を考慮に入れてください。

     期待する出力: `issue-note.yml`を外部プロジェクトで利用するために必要な`inputs`と`secrets`の設定項目と、各入力がワークフローの挙動に与える影響を解説したMarkdown形式のドキュメントを生成してください。
     ```

3. [Issue #11](../issue-notes/11.md) `translate`共通ワークフローの導入手順とPrompt指定方法の調査
   - 最初の小さな一歩: `.github/workflows/translate-readme.yml`の`workflow_call`定義と、`issue-notes/11.md`で言及されている「promptをハードコーディングでなく、promptsに切り出す。さらに、呼び出し元ymlから任意のpromptsを指定できるようにする。」という課題の現状について、関連ファイルから情報を収集する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/translate-readme.yml
                   .github_automation/translate/scripts/translate-readme.cjs
                   .github_automation/project_summary/prompts/development-status-prompt.md # プロンプトファイルの例として
                   .github_automation/translate/docs/TRANSLATION_SETUP.md

     実行内容: `translate-readme.yml`の`on: workflow_call:`で定義されている`inputs`と`secrets`を抽出し、特にプロンプトの指定に関連する入力（例: `prompt_file_path`のようなもの）があるかを確認してください。また、`translate-readme.cjs`内でプロンプトがどのように読み込まれ、利用されているかを分析し、外部からプロンプトファイルを指定できる柔軟性があるか調査してください。

     確認事項: `issue-notes/11.md`の「promptをハードコーディングでなく、promptsに切り出す。さらに、呼び出し元ymlから任意のpromptsを指定できるようにする。」という課題が現在の実装でどの程度解決されているか、または未解決のままかを評価してください。

     期待する出力: `translate-readme.yml`を外部プロジェクトで利用する際の`inputs`と`secrets`の要件、およびプロンプトのカスタマイズ（外部ファイルからの指定など）に関する現在の実装状況と今後の改善点についてMarkdown形式で出力してください。
     ```

---
Generated at: 2026-03-26 07:12:54 JST

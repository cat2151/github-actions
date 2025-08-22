Last updated: 2025-08-23

# Development Status

## 現在のIssues
- 複数の既存ツール（[Issue #13](issue-notes/13.md) issue-note, [Issue #12](issue-notes/12.md) project-summary, [Issue #11](issue-notes/11.md) translate, [Issue #10](issue-notes/10.md) callgraph）を他のプロジェクトから再利用しやすくするための改善が進行中です。
- これらのツールは、共通の機能として、GitHub Actionsの`workflow_call`トリガーを利用した呼び出し可能化を目指しています。
- 特に [Issue #16](issue-notes/16.md) では、これら再利用可能になったツールの成果を`tonejs-mml-to-json`プロジェクトから実際に呼び出す具体的な統合が課題となっています。

## 次の一手候補
1. [Issue #13](issue-notes/13.md) issue-note を他projectから使いやすくする
   - 最初の小さな一歩: `.github/workflows/issue-note.yml` ワークフローに`on: workflow_call`トリガーを追加し、必要な入力パラメータとシークレットを定義する変更点を洗い出す。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/issue-note.yml
     
     実行内容: 対象ファイルを、他のリポジトリから呼び出し可能な再利用可能なワークフローとして設定するために、`on: workflow_call`トリガーの追加、必要な入力パラメータ（例: `issue_number`, `output_dir`）、およびシークレット（例: `github_token`）の定義を提案してください。
     
     確認事項: 既存のワークフローのロジック、issue-noteの生成に必要な環境変数やアクションの引数との整合性を確認してください。また、生成されるissue-noteの出力パスやファイル名への影響も考慮してください。
     
     期待する出力: .github/workflows/issue-note.yml の変更案をMarkdown形式のコードブロックで提示し、その変更がどのように再利用性を高めるかを説明してください。
     ```

2. [Issue #12](issue-notes/12.md) project-summary を他projectから使いやすくする
   - 最初の小さな一歩: `.github/workflows/project-summary.yml` ワークフローに`on: workflow_call`トリガーを追加し、必要な入力パラメータとシークレットを定義する変更点を洗い出す。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/project-summary.yml
     
     実行内容: 対象ファイルを、他のリポジトリから呼び出し可能な再利用可能なワークフローとして設定するために、`on: workflow_call`トリガーの追加、必要な入力パラメータ（例: `summary_type`, `output_dir`）、およびシークレット（例: `github_token`, `gemini_api_key`）の定義を提案してください。
     
     確認事項: 既存のワークフローのロジック、project-summaryの生成に必要な環境変数やアクションの引数との整合性を確認してください。特にGemini APIキーのセキュアな扱いや、複数の要約タイプ（overview, development-status）への対応方法を考慮してください。
     
     期待する出力: .github/workflows/project-summary.yml の変更案をMarkdown形式のコードブロックで提示し、その変更がどのように再利用性を高めるかを説明してください。
     ```

3. [Issue #11](issue-notes/11.md) translate を他projectから使いやすくする
   - 最初の小さな一歩: `.github/workflows/translate-readme.yml` ワークフローに`on: workflow_call`トリガーを追加し、必要な入力パラメータとシークレットを定義する変更点を洗い出す。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/translate-readme.yml
     
     実行内容: 対象ファイルを、他のリポジトリから呼び出し可能な再利用可能なワークフローとして設定するために、`on: workflow_call`トリガーの追加、必要な入力パラメータ（例: `source_file`, `target_file`, `target_branch`）、およびシークレット（例: `github_token`, `gemini_api_key`）の定義を提案してください。
     
     確認事項: 既存のワークフローのロジック、翻訳処理に必要な環境変数やアクションの引数との整合性を確認してください。特に、翻訳対象ファイルと出力ファイルの指定方法、コミットブランチの指定、Gemini APIキーのセキュアな扱いに注意してください。
     
     期待する出力: .github/workflows/translate-readme.yml の変更案をMarkdown形式のコードブロックで提示し、その変更がどのように再利用性を高めるかを説明してください。

---
Generated at: 2025-08-23 07:04:37 JST

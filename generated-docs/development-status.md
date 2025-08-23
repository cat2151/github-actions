Last updated: 2025-08-24

# Development Status

## 現在のIssues
- [Issue #17](issue-notes/17.md)では、現在生成される開発状況レポート内のissue-noteへのリンクが404エラーとなる問題の修正が求められています。
- [Issue #18](issue-notes/18.md)では、`DevelopmentStatusGenerator.cjs`内でGeminiに与えるプロンプトがハードコーディングされており、その外部化による柔軟性の向上が課題です。
- [Issue #10](issue-notes/10.md), [Issue #11](issue-notes/11.md), [Issue #12](issue-notes/12.md), [Issue #13](issue-notes/13.md), [Issue #16](issue-notes/16.md)などの複数のissueが、既存のGitHub Actions (`callgraph`, `translate`, `project-summary`, `issue-note`) の他プロジェクトからの再利用性を高めることに取り組んでいます。

## 次の一手候補
1. [Issue #17](issue-notes/17.md) `development-status` が生成したmdに誤りがある。issue-note へのlinkがURL誤りで、404となってしまう
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs` 内でissue-noteへのMarkdownリンクを生成している箇所を特定し、現在の出力とGitHubリポジトリのファイルパス構造に基づいた正しいURLパスを比較分析する。
   - Agent実行プロンプト:
     ```
     対象ファイル: DevelopmentStatusGenerator.cjs

     実行内容: DevelopmentStatusGenerator.cjs 内でissue-noteへのMarkdownリンクを生成している箇所を特定し、現在の出力と想定される正しいURLパス（GitHubリポジトリのURL構造に基づく）を比較分析してください。
     
     確認事項: GitHub PagesまたはGitHubリポジトリのファイルパス解決の仕組みと、Markdownリンクの相対パス/絶対パスの動作を確認してください。また、issue-notesディレクトリの実際の構造と、生成されるファイルの出力場所との相対関係を考慮してください。
     
     期待する出力: DevelopmentStatusGenerator.cjs において、`[Issue #番号](issue-notes/番号.md)` 形式のリンクがGitHub上で正しく解決されるために必要な修正案（具体的なコード変更箇所と修正後のコードスニペット）をmarkdown形式で出力してください。
     ```

2. [Issue #18](issue-notes/18.md) DevelopmentStatusGenerator.cjs 内に、Geminiに与えるpromptがハードコーディングされてしまっている
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs` 内のGeminiプロンプトがハードコーディングされている箇所を特定し、外部ファイルからの読み込みやGitHub Actionsの`with`入力として受け取る形へのリファクタリング方針を検討する。
   - Agent実行プロンプト:
     ```
     対象ファイル: DevelopmentStatusGenerator.cjs
     
     実行内容: DevelopmentStatusGenerator.cjs 内のGeminiプロンプトがハードコーディングされている箇所を特定し、そのプロンプトを外部設定ファイル（例: `prompt-templates/development-status.txt`）から読み込む、あるいはGitHub Actionsの`with`入力として受け取る形にリファクタリングする設計案を分析してください。
     
     確認事項: 外部ファイルからの読み込みの場合のファイルパス解決の考慮、または`with`入力の場合のデフォルト値設定やバリデーションの必要性を確認してください。将来的なプロンプトの多様化や多言語化への拡張性を考慮してください。
     
     期待する出力: プロンプトのハードコーディングを解消するための具体的なリファクタリング方針と、DevelopmentStatusGenerator.cjs の修正後の主要なコードスニペット、およびもし外部ファイルを採用する場合の新しいファイル構造の提案をmarkdown形式で出力してください。
     ```

3. [Issue #10](issue-notes/10.md) callgraph を他projectから使いやすくする
   - 最初の小さな一歩: `callgraph` Actionが外部プロジェクトから利用される際の理想的なインターフェース（必要な入力パラメータ、期待される出力、設定方法）を定義する。
   - Agent実行プロンプト:
     ```
     対象ファイル: callgraph/action.yml, callgraph/README.md
     
     実行内容: callgraph Actionが他のリポジトリから呼び出されることを想定し、action.yml の`inputs`および`outputs`を最適化する案を分析してください。具体的には、必要な入力パラメータ（例: 対象ディレクトリ、出力ファイル名）と、期待される出力（例: 生成されたHTMLファイルのパス）を明確化し、README.mdにその利用方法を追記するための内容を検討してください。
     
     確認事項: Actionの入力値が必須か任意か、デフォルト値は必要か、バリデーションは必要かを確認してください。また、外部プロジェクトがActionを呼び出す際の最小限のセットアップと、柔軟なカスタマイズのバランスを考慮してください。
     
     期待する出力: callgraph/action.yml の推奨される`inputs`と`outputs`の定義案、callgraph/README.md に追記すべき「外部プロジェクトからの利用方法」のセクションをmarkdown形式で出力してください。

---
Generated at: 2025-08-24 07:04:13 JST

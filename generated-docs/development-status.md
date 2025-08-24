Last updated: 2025-08-25

# Development Status

## 現在のIssues
- [Issue #19](issue-notes/19.md) を中心に、開発状況生成の際に`issue-notes`や`project-overview`の内容をGeminiに参照させることで、出力品質の向上を目指しています。
- [Issue #18](issue-notes/18.md) と [Issue #17](issue-notes/17.md) では、`DevelopmentStatusGenerator.cjs`におけるプロンプトのハードコーディング解消と、生成されるMarkdown内のリンク誤りの修正が課題となっています。
- [Issue #16](issue-notes/16.md), [Issue #13](issue-notes/13.md), [Issue #12](issue-notes/12.md), [Issue #11](issue-notes/11.md) では、`issue-note`や`project-summary`などの各種GitHub Actionsを他プロジェクトで利用しやすくするための改善を進めています。

## 次の一手候補
1. [Issue #19](issue-notes/19.md) issue-notes/ 配下のmdファイルの内容を参照させる
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs`で、オープン中の各issueに対応する`issue-notes/<issue_number>.md`ファイルを読み込み、その内容をGeminiへのプロンプトに含めるように変更します。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
     
     実行内容: `generateDevelopmentStatus`関数内で、オープン中のIssueリストを取得した後、各Issue番号に対応する`issue-notes/<issue_number>.md`ファイルを読み込む処理を追加してください。読み込んだ内容を、Geminiに渡すプロンプトの一部として含めるように変更してください。
     
     確認事項: `issue-notes/`ディレクトリが存在し、指定された形式のファイルが読み込み可能であることを確認してください。ファイルが見つからない場合の挙動（エラーハンドリング、スキップなど）も考慮してください。
     
     期待する出力: 修正された`DevelopmentStatusGenerator.cjs`ファイル。`issue-notes`の内容がGeminiプロンプトに含まれることを示すテスト結果または説明。
     ```

2. [Issue #18](issue-notes/18.md) Geminiに与えるpromptのハードコーディングを解消する
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs`内のハードコードされたプロンプト文字列を、外部ファイル（例: `prompts/development_status_prompt.md`）として切り出し、それを読み込むように変更します。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs と新規作成するプロンプトファイル（例: prompts/development_status_prompt.md）
     
     実行内容: `DevelopmentStatusGenerator.cjs`内の`generateDevelopmentStatus`関数にあるGeminiへのプロンプト文字列を、新しい`prompts/development_status_prompt.md`ファイルに移動してください。`DevelopmentStatusGenerator.cjs`は、この外部プロンプトファイルを読み込み、テンプレートリテラルで動的な情報を埋め込む形に修正してください。
     
     確認事項: `prompts/`ディレクトリが存在するか、また新しいプロンプトファイルの読み込みパスが正しいことを確認してください。既存のプロンプトの構造が外部ファイルでも適切に機能するか検証してください。
     
     期待する出力: `DevelopmentStatusGenerator.cjs`と`prompts/development_status_prompt.md`の変更ファイル。プロンプトが外部化され、動作に影響がないことを示す説明。
     ```

3. [Issue #17](issue-notes/17.md) development-status 生成mdのリンク誤りを修正する
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs`内で、生成されるMarkdownのissue-noteリンクのURLが正しい形式になるように文字列操作を修正します。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
     
     実行内容: `generateDevelopmentStatus`関数内で、生成される`development-status.md`内の`issue-notes`へのリンク（例: `[Issue #16](issue-notes/16.md)`）が、リポジトリのルートからの相対パスとして正しく解決されるように修正してください。現在の`generated-docs/issue-notes/16.md`のようなパスではなく、`issue-notes/16.md`のように調整してください。
     
     確認事項: 生成される`development-status.md`が`generated-docs/`に配置されることを考慮し、そこから`issue-notes/`への相対パスが正しくなるように調整してください。他のリンクへの影響がないことを確認してください。
     
     期待する出力: 修正された`DevelopmentStatusGenerator.cjs`ファイル。生成された`development-status.md`内のリンクが正しく機能することを確認するための手順または結果。

---
Generated at: 2025-08-25 07:04:23 JST

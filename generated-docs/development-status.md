Last updated: 2025-09-03

# Development Status

## 現在のIssues
- [Issue #23](../issue-notes/23.md)は、issue 17のMarkdownリンク形式のバグが再発し、その修正に取り組んでいます。
- [Issue #21](../issue-notes/21.md)と[Issue #20](../issue-notes/20.md)は、Geminiの生成品質向上のため、関連ファイルの内容をプロンプトに添付する機能拡張を検討しています。
- [Issue #18](../issue-notes/18.md)ではプロンプトのハードコーディングを解消し、[Issue #16](../issue-notes/16.md)、[Issue #13](../issue-notes/13.md)、[Issue #12](../issue-notes/12.md)、[Issue #11](../issue-notes/11.md)、[Issue #10](../issue-notes/10.md)では各ワークフローの汎用化と他プロジェクトからの利用を促進する課題に取り組んでいます。

## 次の一手候補
1. [Issue #18](../issue-notes/18.md) Geminiプロンプトのハードコーディング解消
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs`内の`generateDevelopmentStatus`関数にあるプロンプト文字列を別ファイル（例: `prompts/development-status-prompt.md`）に切り出す。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
     
     実行内容:
     1. DevelopmentStatusGenerator.cjs ファイル内のgenerateDevelopmentStatus関数内で定義されているGeminiに与えるプロンプト文字列を特定してください。
     2. そのプロンプト文字列を新規ファイル `.github_automation/project_summary/prompts/development-status-prompt.md` として作成し、内容を記述してください。
     3. DevelopmentStatusGenerator.cjs ファイルを修正し、新しいプロンプトファイルから内容を読み込むように変更してください。プロンプト文字列内に存在するプレースホルダー（例: `{{openIssuesSummary}}`）は、ファイル読み込み後に適切に置換されるように修正してください。
     
     確認事項:
     - 既存のプロンプトの内容が完全に新しいファイルに移動され、意味が変わらないことを確認してください。
     - プロンプトのプレースホルダーが正しく読み込まれ、置き換えられることを確認してください。
     - 変更後もDevelopmentStatusGenerator.cjsが正しく動作し、期待される出力を生成することを確認するために、テストケースがあれば実行してください。
     
     期待する出力:
     - `.github_automation/project_summary/prompts/development-status-prompt.md` ファイルの新規作成。
     - `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs` ファイルの修正内容（差分）をMarkdown形式で出力。
     ```

2. [Issue #23](../issue-notes/23.md) Markdownリンクの再発バグ修正
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs`または関連する生成ロジックが、誤って絶対パスのような指定（例: `[Issue #番号](issue-notes/番号.md)`）をしている箇所を特定し、相対パス（例: `[Issue #番号](../issue-notes/番号.md)`）に修正する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
     
     実行内容:
     1. DevelopmentStatusGenerator.cjs のgenerateDevelopmentStatus関数において、issue番号をMarkdownリンクとして生成するロジックを分析してください。
     2. `[Issue #番号](issue-notes/番号.md)` の形式でリンクが生成される箇所を特定し、正しく相対パス `[Issue #番号](../issue-notes/番号.md)` になるよう修正してください。
     
     確認事項:
     - 修正後、生成されるMarkdownリンクが常に期待される相対パス形式（`../issue-notes/番号.md`）であることを確認してください。
     - 過去のIssueノートへのリンクが壊れていないことを確認してください。
     - 変更が他のMarkdown生成ロジックに悪影響を与えないことを確認してください。
     
     期待する出力:
     - `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs` の修正内容（差分）をMarkdown形式で出力。
     - 修正後のロジックで生成されるサンプルMarkdownリンクをいくつか提示。
     ```

3. [Issue #16](../issue-notes/16.md) `tonejs-mml-to-json`での`call-issue-note`ワークフロー最新化と動作確認
   - 最初の小さな一歩: まず `tonejs-mml-to-json` リポジトリの`.github/workflows/call-issue-note.yml`を、この`github-actions`リポジトリの最新版にコピーし、CIがグリーンになるか確認する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/call-issue-note.yml

     実行内容:
     1. 現在のgithub-actionsリポジトリ内の`.github/workflows/call-issue-note.yml`の最新内容を取得してください。
     2. `tonejs-mml-to-json`リポジトリ（外部プロジェクト）の`.github/workflows/call-issue-note.yml`を、取得した最新内容で上書き（または新規作成）する手順を記述してください。
     3. 上書き後、`tonejs-mml-to-json`リポジトリでCI/CDパイプラインを実行し、issue-noteワークフローが正しく動作し、テストがグリーンになるか確認する手順を記述してください。
     
     確認事項:
     - コピー元とコピー先のパスが正しいことを確認してください。
     - ワークフローファイル内でハードコードされているパスや環境変数、シークレット等に`tonejs-mml-to-json`リポジトリ固有の調整が必要ないか確認してください。
     - `tonejs-mml-to-json`リポジトリに依存するファイルや設定（例: `issue-notes/`ディレクトリなど）が適切に配置されているか確認してください。
     
     期待する出力:
     - `tonejs-mml-to-json/.github/workflows/call-issue-note.yml` にコピーする内容をMarkdownコードブロックで出力。
     - `tonejs-mml-to-json`リポジトリでのCI実行とテスト結果確認の手順をMarkdown形式で記述。

---
Generated at: 2025-09-03 07:04:56 JST

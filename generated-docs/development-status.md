Last updated: 2025-08-26

# Development Status

## 現在のIssues
- `project-summary`の`development-status`生成において、Geminiへのプロンプト内容（[Issue #22]）や参照情報（[Issue #21], [Issue #20], [Issue #19]）の改善を進めています。
- 生成される`development-status.md`のリンク切れ修正（[Issue #17]）と、プロンプトのハードコーディング解除（[Issue #18]）により、生成物の正確性とメンテナンス性を向上させます。
- `issue-note`や`project-summary`などの共通ワークフローを他プロジェクトで利用しやすくする（[Issue #13], [Issue #12], [Issue #11]）ため、既存ワークフローの更新（[Issue #16]）を進めています。

## 次の一手候補
1. [Issue #22](issue-notes/22.md): Geminiに与えたプロンプトをファイルに保存し、コミットする
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs` に、Gemini APIに送信する最終プロンプト文字列を`generated-docs/prompts/development-status-prompt.md`としてファイルに保存し、コミット対象に含める処理を追加する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
     
     実行内容: `DevelopmentStatusGenerator.cjs` 内の`generateDevelopmentStatus`関数で、Gemini APIに送信する直前の最終的なプロンプト文字列を`generated-docs/prompts/development-status-prompt.md`としてファイルに書き出す処理を追加してください。書き出すファイルパスは`path.join(process.env.GITHUB_WORKSPACE, 'generated-docs', 'prompts', 'development-status-prompt.md')`を使用してください。
     
     確認事項: 既存のファイル生成ロジック（`development-status.md`の生成など）に影響がないこと、および`generated-docs/prompts/`ディレクトリが存在しない場合に適切に作成されることを確認してください。また、生成された`development-status-prompt.md`が`project-summary`ワークフロー実行後に正しくコミット対象に含まれることを確認してください。
     
     期待する出力: `DevelopmentStatusGenerator.cjs` が修正され、`generateDevelopmentStatus`関数がGeminiへの最終プロンプトを`generated-docs/prompts/development-status-prompt.md`として出力するよう変更されていること。
     ```

2. [Issue #18](issue-notes/18.md): `DevelopmentStatusGenerator.cjs`内のプロンプトのハードコーディング解除
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs` 内にハードコーディングされているプロンプトテンプレートを、`.github_automation/project_summary/prompts/development-status-template.md`のようなファイルに外部化し、`DevelopmentStatusGenerator.cjs` からそのファイルを読み込むように修正する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjsと、新規ファイル`.github_automation/project_summary/prompts/development-status-template.md`
     
     実行内容: `DevelopmentStatusGenerator.cjs` の`generateDevelopmentStatus`関数内にある、Gemini APIへのプロンプト文字列（テンプレートリテラルで記述されている部分）を抽出してください。抽出したプロンプトを新規ファイル`.github_automation/project_summary/prompts/development-status-template.md`として保存し、`DevelopmentStatusGenerator.cjs`からはこのファイルを読み込んで使用するように修正してください。読み込む際は`fs.readFileSync`を使用し、ファイルパスは相対パスではなく、`path.join(process.env.GITHUB_WORKSPACE, '.github_automation', 'project_summary', 'prompts', 'development-status-template.md')`のように`GITHUB_WORKSPACE`を基点に指定してください。
     
     確認事項: プロンプトの外部化後も`development-status.md`が以前と同様に生成されること、およびプロンプト内のプレースホルダー（例：`{{issueNotesContent}}`）が正しく置換されることを確認してください。
     
     期待する出力: `DevelopmentStatusGenerator.cjs`が修正され、プロンプトテンプレートが`.github_automation/project_summary/prompts/development-status-template.md`に外部化されていること。
     ```

3. [Issue #17](issue-notes/17.md): `development-status`が生成したmdのissue-noteへのリンク切れを修正
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs` 内でissue-noteへのリンクを生成している箇所を特定し、`generated-docs/`が付加されないように、正しいURLパスに修正する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
     
     実行内容: `DevelopmentStatusGenerator.cjs` 内の`generateDevelopmentStatus`関数で、生成される`development-status.md`内のIssueノートへのリンクが誤っている箇所を特定し、修正してください。具体的には、リンクが`https://github.com/cat2151/github-actions/blob/main/generated-docs/issue-notes/16.md`のようになるのではなく、`https://github.com/cat2151/github-actions/blob/main/issue-notes/16.md`のようにプロジェクトルートからの正しいパスになるように修正してください。これはMarkdownのリンク生成部分で`generated-docs/`が付加されないように調整することで実現できます。
     
     確認事項: 修正後、`project-summary`ワークフローを実行し、生成された`development-status.md`内のIssueノートへのリンクが正しく機能し、404エラーとならないことを確認してください。
     
     期待する出力: `DevelopmentStatusGenerator.cjs` が修正され、`development-status.md`内のIssueノートへのリンクが正しいURLパスを指すよう変更されていること。

---
Generated at: 2025-08-26 07:05:19 JST

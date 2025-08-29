Last updated: 2025-08-30

# Development Status

## 現在のIssues
- `development-status`生成時のGeminiプロンプト品質向上を目指し、[Issue #19](../issue-notes/19.md)、[Issue #20](../issue-notes/20.md)、[Issue #21](../issue-notes/21.md)ではissue-notesやproject-overviewの内容参照を検討中。
- プロンプトのハードコーディング ([Issue #18](../issue-notes/18.md)) や、生成レポート内のリンクエラー ([Issue #17](../issue-notes/17.md)) といった、`development-status`機能自体の改善も進行中。
- `issue-note`、`project-summary`、`translate`、`callgraph`といった主要ワークフローを汎用化し、他プロジェクト（[Issue #16](../issue-notes/16.md)）から利用しやすくする ([Issue #10](../issue-notes/10.md), [Issue #11](../issue-notes/11.md), [Issue #12](../issue-notes/12.md), [Issue #13](../issue-notes/13.md)) 取り組みも進められています。

## 次の一手候補
1. `development-status`生成プロンプトのハードコーディングを解消し、外部ファイル化する [Issue #18](../issue-notes/18.md)
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs`内のGeminiに与えるプロンプト文字列を抽出し、`prompts/development-status-prompt.md`として新規作成し、`DevelopmentStatusGenerator.cjs`からそのファイルを読み込むように修正する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
     
     実行内容: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs 内の generateDevelopmentStatus 関数にあるGeminiに与えるプロンプト文字列を抽出します。抽出したプロンプトを prompts/development-status-prompt.md という新しいファイルに保存し、元の DevelopmentStatusGenerator.cjs からはこのファイルを読み込んで利用するように修正してください。
     
     確認事項: プロンプトのプレースホルダー（例: `${currentIssuesSummary}`）が正しく機能するように、ファイル読み込み後の文字列置換ロジックを維持または再実装してください。新しい prompts/development-status-prompt.md ファイルのパスが正しく指定されていることを確認してください。
     
     期待する出力: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs と prompts/development-status-prompt.md の変更内容。DevelopmentStatusGenerator.cjs が正しく外部プロンプトを読み込み、これまでと同じ形式で development-status を生成できることを示すコード。
     ```

2. `development-status`が生成するIssueノートへのリンクの誤りを修正する [Issue #17](../issue-notes/17.md)
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs`が生成するissue-noteへのリンクを、現在のURL形式から相対パス`../issue-notes/番号.md`に修正する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
     
     実行内容: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs 内のissue-noteへのリンク生成部分を特定し、生成されるMarkdownリンクの形式を `[Issue #番号](issue-notes/番号.md)` ではなく、`[Issue #番号](../issue-notes/番号.md)` となるように修正してください。
     
     確認事項: 修正後、生成される `development-status.md` 内のリンクがGitHub上で正しく機能し、404エラーとならないことを確認してください。また、`issue-notes/` ディレクトリの構造に変更がないことを前提とします。
     
     期待する出力: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs の修正内容。特に、Issueリンクを生成する箇所のコード変更。
     ```

3. 主要ワークフローの汎用化に向け、まず`issue-note`の呼び出し元を更新する [Issue #16](../issue-notes/16.md) [Issue #13](../issue-notes/13.md)
   - 最初の小さな一歩: `tonejs-mml-to-json`プロジェクトで利用されている`issue-note`関連ワークフローを、`github-actions`リポジトリにある`call-issue-note.yml`の最新版に単純コピーして置き換え、動作確認する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/call-issue-note.yml (github-actionsリポジトリ内) と、tonejs-mml-to-jsonリポジトリ内の issue-note 関連ワークフローファイル（例: .github/workflows/issue-note.yml または .github/workflows/call-issue-note.yml）
     
     実行内容: github-actionsリポジトリの `.github/workflows/call-issue-note.yml` の内容を、tonejs-mml-to-jsonリポジトリの適切なワークフローパス（例えば `.github/workflows/call-issue-note.yml`）にコピーする手順を記述してください。この際、tonejs-mml-to-json側で必要な設定変更（例: `uses`パスの調整、環境変数、シークレットの設定）も洗い出してください。
     
     確認事項: コピー後にtonejs-mml-to-jsonリポジトリでworkflowが正常に動作するか、既存の機能が損なわれないかを確認する必要があります。call-issue-note.yml が外部リポジトリから呼び出されることを前提とした設定がされているか確認してください。
     
     期待する出力: `call-issue-note.yml` を tonejs-mml-to-json プロジェクトに導入するための具体的な手順書（markdown形式）。これには、ファイルの配置、必要な入力パラメータ、シークレット、およびその他の設定変更が含まれるようにしてください。

---
Generated at: 2025-08-30 07:04:39 JST

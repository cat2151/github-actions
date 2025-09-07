Last updated: 2025-09-08

# Development Status

## 現在のIssues
- Gemini APIの503エラー対策として、API呼び出しにリトライ機構を導入する計画があります [Issue #24](../issue-notes/24.md)。
- `development-status`生成の品質向上のため、プロンプトにプロジェクトのファイル一覧や、`issue-notes`内の関連ファイルの内容を添付する機能が検討されています [Issue #21](../issue-notes/21.md), [Issue #20](../issue-notes/20.md)。
- `issue-note`, `project-summary`, `translate`, `callgraph`の各ワークフローを、`tonejs-mml-to-json`プロジェクトで最新版に更新し、これら4つのワークフローを他のプロジェクトからより使いやすくするための汎用化とドキュメント化が進められています [Issue #16](../issue-notes/16.md), [Issue #13](../issue-notes/13.md), [Issue #12](../issue-notes/12.md), [Issue #11](../issue-notes/11.md), [Issue #10](../issue-notes/10.md)。

## 次の一手候補
1. Gemini API 503エラー発生時のExponential Backoffリトライを実装 [Issue #24](../issue-notes/24.md)
   - 最初の小さな一歩: `BaseGenerator.cjs`に`generateContentWithRetry`メソッドを追加し、Gemini API呼び出しで503エラーが発生した場合にExponential Backoffを伴うリトライロジックを実装する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github_automation/project_summary/scripts/shared/BaseGenerator.cjs

     実行内容: .github_automation/project_summary/scripts/shared/BaseGenerator.cjs に`generateContentWithRetry`メソッドを新規追加してください。このメソッドは、`this.model.generateContent()`を呼び出し、HTTPステータスコード503が返された場合にExponential Backoffを用いて最大3回リトライします。リトライ間隔は初回1秒、次回2秒、3回目4秒とします。成功した場合のレスポンスを返し、リトライ回数を超えても失敗した場合はエラーをスローします。既存の`this.model.generateContent()`の呼び出し箇所を新しい`generateContentWithRetry`に置き換えてください。

     確認事項: `BaseGenerator.cjs` がGemini APIのインスタンス (`this.model`) を保持していること、および既存の`generateContent`呼び出し箇所が適切に特定できることを確認してください。リトライロジックが無限ループに陥らないよう、最大リトライ回数を設定していることを確認してください。

     期待する出力: 変更後の`BaseGenerator.cjs`のコードを提示してください。
     ```

2. `development-status`プロンプトにプロジェクトの全ファイル一覧を添付する機能を実装 [Issue #21](../issue-notes/21.md)
   - 最初の小さな一歩: `development-status-prompt.md`にファイル一覧用のプレースホルダーを追加し、`DevelopmentStatusGenerator.cjs`にファイル一覧を取得してプレースホルダーに埋め込むロジックを実装する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github_automation/project_summary/prompts/development-status-prompt.md, .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs, .github_automation/project_summary/scripts/development/GitUtils.cjs

     実行内容:
     1. .github_automation/project_summary/prompts/development-status-prompt.md の `# 開発状況情報` の下に `## プロジェクトの全ファイル一覧` というセクションを追加し、その下にファイル一覧を埋め込むためのプレースホルダー `{{FILE_LIST}}` を追加してください。
     2. .github_automation/project_summary/scripts/development/GitUtils.cjs に `getProjectFileList()` メソッドを新規追加してください。このメソッドは、`.git` ディレクトリや `node_modules` ディレクトリを除外してプロジェクトの全てのファイルパスを再帰的に取得し、配列として返します。
     3. .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs 内で、`getProjectFileList()` を呼び出し、取得したファイル一覧を `development-status-prompt.md` の `{{FILE_LIST}}` プレースホルダーに埋め込むロジックを追加してください。

     確認事項: ファイル一覧取得時に`.git`と`node_modules`が正しく除外されることを確認してください。プレースホルダー置換ロジックが正しく動作することを確認してください。

     期待する出力: 変更後の`.github_automation/project_summary/prompts/development-status-prompt.md` と `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`、`.github_automation/project_summary/scripts/development/GitUtils.cjs` のコードを提示してください。
     ```

3. `issue-note`ワークフローの他プロジェクト導入手順書を作成 [Issue #13](../issue-notes/13.md)
   - 最初の小さな一歩: `call-issue-note.yml`の内容を分析し、既存の`TRANSLATION_SETUP.md`を参考に、外部プロジェクトからこのワークフローを呼び出すための手順書ドラフトを作成する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/call-issue-note.yml

     実行内容: .github/workflows/call-issue-note.yml を参照し、外部プロジェクトがこのワークフローを導入する際に必要な手順書をmarkdown形式で作成してください。既存のドキュメント`.github_automation/translate/docs/TRANSLATION_SETUP.md`の構成を参考に、以下の要素を含めてください：
     1. 必須入力パラメータ（例: `github-token` の設定方法）
     2. 必須シークレット（もしあれば）
     3. ファイル配置の前提条件（例: `issue-notes/` ディレクトリの存在）
     4. 外部プロジェクトでの利用時に必要な追加設定や考慮事項。

     確認事項: `call-issue-note.yml` の定義が、入力パラメータやシークレットに関して明確であることを確認してください。生成される手順書が、`TRANSLATION_SETUP.md` と同等以上の分かりやすさを持つことを確認してください。

     期待する出力: `docs/issue-note-setup.md` というファイル名で、`issue-note` ワークフローの導入手順書をmarkdown形式で生成してください。

---
Generated at: 2025-09-08 07:04:43 JST

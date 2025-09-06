Last updated: 2025-09-07

# Development Status

## 現在のIssues
- [Issue #24](../issue-notes/24.md): Gemini APIの503エラー発生時に、開発状況生成の安定性を向上させるためリトライ処理の実装が検討されています。
- [Issue #16](../issue-notes/16.md): `issue-note`、`project-summary`、`translate`、`callgraph` の主要ワークフローを `tonejs-mml-to-json` リポジトリで最新版に更新し、他プロジェクトでの動作検証を進めています。
- [Issue #12](../issue-notes/12.md): `project-summary` ワークフローの他プロジェクトからの再利用性を高めるため、スクリプトやプロンプトの外部化、checkout処理の改善が課題となっています。

## 次の一手候補
1. [Issue #24](../issue-notes/24.md): Gemini APIの503エラーに対するリトライ処理を実装する
   - 最初の小さな一歩: `.github_automation/project_summary/scripts/utils/BaseGenerator.cjs` に、Gemini API呼び出し時に503エラーが発生した場合に指数バックオフでリトライする `generateContent` 関数を実装します。
   - Agent実行プロンプト:
     ```
     対象ファイル: `.github_automation/project_summary/scripts/utils/BaseGenerator.cjs`

     実行内容: Geminiの`model.generateContent`呼び出しをラップし、503エラー時に指数バックオフ（Exponential Backoff）を用いたリトライロジックを実装してください。具体的には、`generateContent` メソッドを新しく定義し、その中で既存の `this.model.generateContent` を呼び出す形にしてください。

     確認事項: リトライ回数、初期遅延時間、最大遅延時間の設定が適切であること。また、リトライ処理が意図しない無限ループに陥らないようにすること。

     期待する出力: `BaseGenerator.cjs` ファイルの変更内容を、リトライロジックが追加された状態でmarkdown形式のコードブロックとして出力してください。
     ```

2. [Issue #16](../issue-notes/16.md): `issue-note` ワークフローを `tonejs-mml-to-json` で利用できるよう更新する
   - 最初の小さな一歩: `github-actions` リポジトリの `.github/workflows/call-issue-note.yml` を `tonejs-mml-to-json` リポジトリの適切なパスにコピーし、GitHub Actionsが正常に実行されるか確認します。
   - Agent実行プロンプト:
     ```
     対象ファイル: `github-actions/.github/workflows/call-issue-note.yml` と `tonejs-mml-to-json` リポジトリ内のワークフローディレクトリ

     実行内容: `github-actions` リポジトリの `call-issue-note.yml` の内容を、`tonejs-mml-to-json` リポジトリにコピーし、そのリポジトリで新しいワークフローとして設定してください。

     確認事項: コピー後、`tonejs-mml-to-json` リポジトリでワークフローが正常にトリガーされ、意図した動作（issue noteの生成）が行われるかを確認してください。パスの調整や必要なシークレットの有無も確認します。

     期待する出力: `tonejs-mml-to-json` リポジトリに追加される `call-issue-note.yml` の内容と、その導入手順をmarkdown形式で出力してください。
     ```

3. [Issue #12](../issue-notes/12.md): `project-summary` 関連ファイルを専用ディレクトリに移動する
   - 最初の小さな一歩: `project-summary` 関連のスクリプト（例: `DevelopmentStatusGenerator.cjs`）とプロンプトファイルを、他プロジェクトでの利用を考慮した専用ディレクトリ（例: `.github_automation/project_summary/scripts/` と `.github_automation/project_summary/prompts/`）に移動し、既存の参照パスを更新します。
   - Agent実行プロンプト:
     ```
     対象ファイル: `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`, `.github_automation/project_summary/prompts/development.prompt` および関連ファイル

     実行内容: `DevelopmentStatusGenerator.cjs` と `development.prompt` を、より汎用的なディレクトリ構造（例: `.github_automation/project_summary/scripts/` と `.github_automation/project_summary/prompts/`）に移動し、移動に伴うファイルパスの変更を`DevelopmentStatusGenerator.cjs` および関連するワークフローファイル内で適切に更新してください。

     確認事項: ファイル移動後、`project-summary` の生成ワークフローが引き続き正常に動作すること。特に、スクリプトやプロンプトへのパスが正しく解決されていることを確認してください。

     期待する出力: 移動後のファイルパスと、それに対応する変更が加えられた `DevelopmentStatusGenerator.cjs` のコードスニペット、および変更が必要なワークフローファイル（もしあれば）の変更点をmarkdown形式で出力してください。

---
Generated at: 2025-09-07 07:04:36 JST

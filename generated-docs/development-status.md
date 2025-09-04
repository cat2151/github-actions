Last updated: 2025-09-04

# Development Status

## 現在のIssues
- [Issue #21](../issue-notes/21.md) および [Issue #20](../issue-notes/20.md) にて、AI生成品質向上のため、`project-summary`の`development-status`生成時にプロンプトに渡す情報（プロジェクト概要や関連ファイル内容）の選定と添付方法を改善する課題に取り組んでいます。
- [Issue #16](../issue-notes/16.md) を含む複数のIssue ([#13](../issue-notes/13.md), [#12](../issue-notes/12.md), [#11](../issue-notes/11.md), [#10](../issue-notes/10.md)) では、`issue-note`、`project-summary`などの既存ワークフローを他プロジェクトから利用しやすくするための共通化、構造改善、ドキュメント化が進行中です。
- [Issue #18](../issue-notes/18.md) では、`DevelopmentStatusGenerator.cjs` 内にハードコードされているGeminiへのプロンプトを外部ファイルに切り出し、コードの可読性と保守性を向上させることを目指しています。

## 次の一手候補
1. [Issue #18](../issue-notes/18.md) `DevelopmentStatusGenerator.cjs`のプロンプトを外部ファイルに切り出す
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs`内のGeminiへのプロンプト文字列を特定し、`prompts/development_status_prompt.md`として新規ファイルに保存する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
     
     実行内容: `DevelopmentStatusGenerator.cjs`内の`generateDevelopmentStatus`関数にあるGeminiへのプロンプト文字列を抽出し、`prompts/development_status_prompt.md`という新しいMarkdownファイルとして作成してください。抽出後、元の`DevelopmentStatusGenerator.cjs`ではその新しいファイルの内容を読み込むように修正してください。
     
     確認事項: プロンプトの切り出し後も、正しくプロンプトが読み込まれ、Geminiに渡されることを確認してください。また、元のプロンプトの変数埋め込み（テンプレートリテラル部分）が正しく機能するように考慮してください。
     
     期待する出力: 新しいプロンプトファイル（`prompts/development_status_prompt.md`）と、それを読み込むように修正された`DevelopmentStatusGenerator.cjs`の変更内容をmarkdown形式で出力してください。
     ```

2. [Issue #16](../issue-notes/16.md) `tonejs-mml-to-json`で`issue-note`ワークフローを最新版に更新する
   - 最初の小さな一歩: `github-actions`リポジトリの`.github/workflows/call-issue-note.yml`を分析し、`tonejs-mml-to-json`リポジトリにコピーする際の変更点を洗い出す。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/call-issue-note.yml
     
     実行内容: `github-actions`リポジトリの`.github/workflows/call-issue-note.yml`の内容を分析し、これを`tonejs-mml-to-json`リポジトリにコピーして使用する際に、特定のプロジェクト依存関係（例: リポジトリのcheckout方法、スクリプトのパス、環境変数など）で変更が必要となる箇所を特定してください。
     
     確認事項: 既存の`call-issue-note.yml`が他のプロジェクトから呼び出されることを想定した汎用的な設計になっているかを確認してください。また、`tonejs-mml-to-json`リポジトリの現在のCI/CD設定との競合がないかを確認してください。
     
     期待する出力: `call-issue-note.yml`を`tonejs-mml-to-json`リポジトリに導入するための手順書をmarkdown形式で生成してください。具体的には、コピーするファイルの内容、変更すべきパラメータ、および導入後のテスト計画を含めてください。
     ```

3. [Issue #20](../issue-notes/20.md) `issue-notes`内の関連ファイル名抽出ロジックの検討
   - 最初の小さな一歩: `issue-notes/`配下のMDテキストから、`.cjs`または`.yml`拡張子を持つファイル名を抽出するための正規表現またはパターンを定義する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
     
     実行内容: `DevelopmentStatusGenerator.cjs`に、与えられた`issue-notes`のMarkdownテキストから、`.cjs`または`.yml`拡張子を持つファイル名を抽出する関数を実装してください。抽出ロジックは、まず完全なファイルパスで検索し、見つからない場合はパス部分を削除したファイル名でプロジェクト内のファイルを検索するようにしてください。この関数の目的は、関連ファイルの内容をGeminiへのプロンプトに添付するためです。
     
     確認事項: ファイル名の抽出ロジックが、誤って関連性のないファイルを抽出したり、必要なファイルを漏らしたりしないことを確認してください。また、抽出されたファイル内容をプロンプトに添付する際の文字数制限やAPIコストへの影響を考慮してください。
     
     期待する出力: 新しく実装されたファイル名抽出関数のコードスニペットと、その関数のテストケースをmarkdown形式で出力してください。

---
Generated at: 2025-09-04 07:04:44 JST

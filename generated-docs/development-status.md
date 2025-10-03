Last updated: 2025-10-04

# Development Status

## 現在のIssues
- 現在、他リポジトリからの共通ワークフロー呼び出し検証を進めており、[Issue #16](../issue-notes/16.md) ではtranslateでログ不足のエラーが発生し、callgraphは未着手です。
- [Issue #13](../issue-notes/13.md)、[#12](../issue-notes/12.md)、[#11](../issue-notes/11.md)、[#10](../issue-notes/10.md) の各Issueでは、共通ワークフローの導入手順ドキュメント整備が課題として残っています。
- 特にproject-summaryのプロンプト指定の柔軟化（[#12](../issue-notes/12.md)）はYAGNI原則に基づき一旦保留とされています。

## 次の一手候補
1. [Issue #16](../issue-notes/16.md) callgraphの他リポジトリからの呼び出し検証を進める
   - 最初の小さな一歩: `tonejs-mml-to-json` リポジトリに `call-callgraph.yml` をコピーし、`CONFIG_NAME` のパスを調整後、手動でワークフローを実行して動作を確認する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/callgraph.yml, .github/workflows/call-callgraph.yml, .github_automation/callgraph/config/example.json

     実行内容: callgraph共通ワークフロー（.github/workflows/callgraph.yml）を外部プロジェクト（例: tonejs-mml-to-json）から利用する際に必要な手順と設定を分析し、以下の観点からmarkdown形式で出力してください：
     1) 必須入力パラメータ CONFIG_NAME の設定方法と、外部プロジェクトでの適切なファイルパスの指定方法。
     2) 必要なシークレット（GITHUB_TOKENなど）の権限と設定。
     3) callgraph.yml内で参照されているパス（例: env.CALLGRAPH, env.PRESETS, env.QUERIES）が外部プロジェクトでどのように解釈されるか。
     4) 外部プロジェクトのルートに配置する `call-callgraph.yml` の具体的な記述例と、それに合わせて外部プロジェクト側で必要となるファイルやディレクトリ構造の準備。

     確認事項: callgraph.ymlが `ACTION_TMP` 変数を用いて共通ワークフローのリポジトリをcheckoutしていることを考慮し、そのパスが外部プロジェクト内でどのようにアクセスされるかを詳細に確認してください。また、`CONFIG_NAME` が `call-callgraph.yml` から `callgraph.yml` へ正しく渡されるか、パスが解決されるかを確認してください。

     期待する出力: 外部プロジェクトがcallgraphワークフローを導入する際の手順書をmarkdown形式で生成してください。特に、`CONFIG_NAME` の設定と、必要なファイル配置（例: `config/example.json` を外部プロジェクトにコピーする場合のパス）について具体的に記述してください。
     ```

2. [Issue #16](../issue-notes/16.md) translateのエラーログを改善する
   - 最初の小さな一歩: `translate-readme.cjs` に、翻訳前後のコンテンツやGemini APIのレスポンス、エラーメッセージを詳細に出力するログを追加する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/translate/scripts/translate-readme.cjs

     実行内容: 対象ファイル（translate-readme.cjs）について、デバッグのためにログ出力を強化してください。具体的には以下の情報をログとして出力するように修正してください：
     1) 翻訳処理の開始と終了。
     2) 翻訳対象のファイルパスと、そのファイルから読み込んだ原文コンテンツの最初の数行。
     3) Gemini APIへのリクエスト内容（プロンプトの主要部分など）。
     4) Gemini APIからのレスポンス（成功時の翻訳結果の最初の数行、エラー時の詳細なエラーメッセージ）。
     5) ファイルへの書き込みが成功したか、変更がなかった場合のメッセージ。
     ログは分かりやすい形式で、タイムスタンプやレベル（DEBUG, INFO, ERRORなど）を含めてください。

     確認事項: 機密情報（APIキーなど）をログに出力しないように注意してください。また、ログが過剰になりすぎないよう、重要なデバッグ情報に絞って出力するようにしてください。既存のロジックに影響を与えないことを確認してください。

     期待する出力: ログ出力が強化された `translate-readme.cjs` の修正案をmarkdown形式のコードブロックで提供してください。
     ```

3. [Issue #12](../issue-notes/12.md) project-summaryの導入手順ドキュメントを整備する
   - 最初の小さな一歩: `daily-summary-setup.md` をレビューし、`call-daily-project-summary.yml` の導入手順が分かりやすく書かれているか確認し、具体的に追記する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/docs/daily-summary-setup.md

     実行内容: 対象ファイル（daily-summary-setup.md）について、`call-daily-project-summary.yml` ワークフローを外部プロジェクトに導入する際の手順を追記・改善してください。特に以下の点を明確に記述してください：
     1) `call-daily-project-summary.yml` を外部プロジェクトの `.github/workflows/` ディレクトリにコピーする手順。
     2) 必要なシークレット（GEMINI_API_KEY）の具体的な設定方法。
     3) ワークフロー内で参照されているパス（例: `uses: cat2151/github-actions/.github/workflows/daily-project-summary.yml@main`）の説明。
     4) `.github_automation/project_summary/prompts/` ディレクトリ配下のプロンプトファイルをカスタマイズする場合の注意点や手順（[#12](../issue-notes/12.md) で保留とされているが、現行のプロンプトが利用される旨を明記）。

     確認事項: ドキュメントの対象読者（GitHub Actionsに慣れていない可能性のある開発者）を意識し、分かりやすく具体的な記述を心がけてください。既存のセクションとの整合性を保ち、重複なく情報を追加してください。

     期待する出力: 更新された `daily-summary-setup.md` の内容をmarkdown形式のコードブロックで提供してください。

---
Generated at: 2025-10-04 07:04:56 JST

Last updated: 2025-10-09

# Development Status

## 現在のIssues
- Callgraph ([Issue #10](../issue-notes/10.md))、Translate ([Issue #11](../issue-notes/11.md))、Project Summary ([Issue #12](../issue-notes/12.md))、Issue Note ([Issue #13](../issue-notes/13.md))の各GitHub Actionsについて、他プロジェクトからの利用を容易にするためのドキュメント整備が主要な課題として挙げられています。
- 具体的には、各アクションの`call`ワークフロー導入手順書の作成が求められています。
- 一部のアクションではスクリプトの別ディレクトリへの移動やpromptの切り出しといった内部的な改善も検討されましたが、多くは既に実施済み、またはYAGNI原則により保留されています。

## 次の一手候補
1. Project Summaryの導入手順書（daily-summary-setup.md）を更新する [Issue #12](../issue-notes/12.md)
   - 最初の小さな一歩: `.github_automation/project_summary/docs/daily-summary-setup.md` の内容を、現在の `call-daily-project-summary.yml` の利用方法に合わせて見直し、必要な更新箇所を特定する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github_automation/project_summary/docs/daily-summary-setup.md, .github/workflows/call-daily-project-summary.yml, .github/workflows/daily-project-summary.yml

     実行内容: `.github_automation/project_summary/docs/daily-summary-setup.md` を分析し、現在の `.github/workflows/call-daily-project-summary.yml` および `.github/workflows/daily-project-summary.yml` の構成と利用方法に整合しているかを確認してください。特に、`call-daily-project-summary.yml` を外部リポジトリから利用する際の手順が明確に記述されているか、および記載されているファイルパスや設定項目が最新の状態を反映しているかをレビューしてください。

     確認事項: `.github_automation/project_summary/docs/daily-summary-setup.md` に記載されているファイルパスや変数名が、実際のワークフローファイル（`daily-project-summary.yml` および `call-daily-project-summary.yml`）と一致していることを確認してください。また、外部プロジェクトでの利用に必要な `uses` 構文や `secrets` の渡し方についての説明が適切かを確認してください。

     期待する出力: レビュー結果をmarkdown形式で出力してください。改善点がある場合は、具体的な修正案を記述してください。
     ```

2. Translateの導入手順書を作成する [Issue #11](../issue-notes/11.md)
   - 最初の小さな一歩: `translate-readme.cjs` と `call-translate-readme.yml` の関係性を理解し、必要なパラメータとシークレットを洗い出す。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github_automation/translate/docs/TRANSLATION_SETUP.md, .github/workflows/call-translate-readme.yml, .github/workflows/translate-readme.yml

     実行内容: `.github/workflows/call-translate-readme.yml` が `cat2151/github-actions/.github/workflows/translate-readme.yml@main` を呼び出す際の具体的な導入手順を、外部プロジェクトのユーザー向けにmarkdown形式で生成してください。特に、`target-branch` の設定や `GEMINI_API_KEY` の登録方法、および `README.ja.md` の存在といった前提条件を明確に記述してください。

     確認事項: `call-translate-readme.yml` で `uses` キーワードを使って `translate-readme.yml` を呼び出す際の必須パラメータとシークレットが網羅されていることを確認してください。また、手順書がユーザーにとって分かりやすいか、あいまいな点がないかを確認してください。

     期待する出力: `.github_automation/translate/docs/TRANSLATION_SETUP.md` を更新するための具体的なmarkdownコンテンツを生成してください。
     ```

3. Callgraphの導入手順書を作成する [Issue #10](../issue-notes/10.md)
   - 最初の小さな一歩: `callgraph.yml` と `call-callgraph.yml` の関係性を理解し、CodeQLに関する依存関係や環境設定の要件を洗い出す。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github_automation/callgraph/docs/callgraph.md, .github/workflows/call-callgraph.yml, .github/workflows/callgraph.yml

     実行内容: `call-callgraph.yml` を外部プロジェクトから利用する際の導入手順をmarkdown形式で生成してください。CodeQL CLIのインストール、クエリパックのセットアップ、Node.jsのバージョン要件など、`callgraph.yml` ワークフローが正しく機能するために必要な全ての事前設定と手順を具体的に記述してください。

     確認事項: `callgraph.yml` の `jobs.generate-callgraph` ステップで実行されている各スクリプト（例: `analyze-codeql.cjs`, `generate-html-graph.cjs`）の前提条件が手順書に反映されていることを確認してください。また、必要なパーミッション（`contents: write`, `security-events: write` など）についても言及されているか確認してください。

     期待する出力: `.github_automation/callgraph/docs/callgraph.md` を新規作成または更新するための具体的なmarkdownコンテンツを生成してください。
     ```

---
Generated at: 2025-10-09 07:05:18 JST

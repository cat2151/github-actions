Last updated: 2025-09-30

# Development Status

## 現在のIssues
- [Issue #16](../issue-notes/16.md) は、issue-note, project-summary, translateが他のリポジトリで動作することを確認し、残るcallgraphワークフローの動作検証が進行中です。
- [Issue #10](../issue-notes/10.md) ではcallgraphワークフローを他プロジェクトから利用しやすくするための導入手順書の作成が必要とされています。
- [Issue #12](../issue-notes/12.md) および [Issue #13](../issue-notes/13.md) では、それぞれproject-summaryとissue-noteワークフローの導入手順書のドキュメント化が課題として挙げられています。

## 次の一手候補
1. [Issue #16](../issue-notes/16.md) tonejs-mml-to-jsonでのCallgraph動作確認
   - 最初の小さな一歩: `tonejs-mml-to-json` リポジトリに最新の `call-callgraph.yml` をコピーし、設定を見直して動作検証を行う。
   - Agent実行プロンプト:
     ```
     対象ファイル:
     - .github/workflows/call-callgraph.yml
     - .github/workflows/callgraph.yml

     実行内容: `call-callgraph.yml` を `tonejs-mml-to-json` リポジトリへコピーする際の具体的な手順を記述してください。特に、`uses` パスが `cat2151/github-actions/.github/workflows/callgraph.yml@main` であること、`CONFIG_NAME` が `tonejs-mml-to-json` リポジトリ内で適切に参照されるパス（例: `.github/actions-tmp/.github_automation/callgraph/config/example.json` または `tonejs-mml-to-json` 内の新しい設定ファイル）になっているかを確認し、設定方法を明確にしてください。

     確認事項: `tonejs-mml-to-json` リポジリの構造と `callgraph` が必要とする設定ファイルのパスの整合性、`GITHUB_TOKEN` の権限要件。`callgraph.yml` が `actions-tmp` ディレクトリに適切にチェックアウトされるための設定。

     期待する出力: `tonejs-mml-to-json` リポジリで `call-callgraph.yml` を設定し、`callgraph` を動作させるための具体的な手順書をMarkdown形式で生成してください。
     ```

2. [Issue #10](../issue-notes/10.md) Callgraph導入手順書の作成
   - 最初の小さな一歩: `callgraph.yml` の `workflow_call` の `inputs` と `env` を分析し、導入手順書に必要な情報を整理する。
   - Agent実行プロンプト:
     ```
     対象ファイル:
     - .github/workflows/callgraph.yml
     - .github_automation/callgraph/docs/callgraph.md

     実行内容: `callgraph` ワークフローを外部プロジェクトに導入するための手順書を、`workflow_call` の `inputs` (`CONFIG_NAME`)、`env` 変数 (`ACTION_TMP`, `CALLGRAPH`, `PRESETS`, `QUERIES`)、および必要な`permissions` (contents: write, security-events: write, actions: read) の観点から詳細に分析し、記述してください。既存の `callgraph.md` に書かれていない、`call-callgraph.yml` の設定方法や、`CONFIG_NAME` のパスの指定方法、共通ワークフローを `actions-tmp` にチェックアウトすることの重要性を含めてください。

     確認事項: `callgraph.yml` の依存関係（例: `check-recent-human-commit.yml`）とそれらの導入手順への影響。外部プロジェクトで `CONFIG_NAME` ファイルを配置する場合の推奨パス。

     期待する出力: `callgraph` ワークフローの導入手順書をMarkdown形式で生成してください。必須入力パラメータ、権限、共通ワークフローのチェックアウトパス、および設定ファイルの作成例を含めてください。
     ```

3. [Issue #12](../issue-notes/12.md) Project Summary導入手順書の作成
   - 最初の小さな一歩: `daily-project-summary.yml` の `workflow_call` の `secrets` を分析し、導入手順書に必要な情報を整理する。
   - Agent実行プロンプト:
     ```
     対象ファイル:
     - .github/workflows/daily-project-summary.yml
     - .github_automation/project_summary/docs/daily-summary-setup.md

     実行内容: `daily-project-summary` ワークフローを外部プロジェクトに導入するための手順書を、`workflow_call` の `secrets` (`GEMINI_API_KEY`)、`env` 変数 (`TMP_DIR`, `SCRIPT_DIR`, `PROMPT_DIR`, `DOCS_DIR` 等)、および必要な`permissions` (contents: write, issues: read, pull-requests: read) の観点から詳細に分析し、記述してください。既存の `daily-summary-setup.md` を補完する形で、`call-daily-project-summary.yml` の設定方法、`GEMINI_API_KEY` の登録手順、`GITHUB_TOKEN` の権限設定の注意点、共通ワークフローのチェックアウトパスについて記述してください。

     確認事項: `daily-project-summary.yml` の依存関係（例: `check-recent-human-commit.yml`）とそれらの導入手順への影響。`GITHUB_TOKEN` に必要な具体的な権限。

     期待する出力: `daily-project-summary` ワークフローの導入手順書をMarkdown形式で生成してください。必須シークレット、権限、共通ワークフローのチェックアウトパス、およびプロンプトファイルのカスタマイズに関する情報を含めてください。

---
Generated at: 2025-09-30 08:48:53 JST

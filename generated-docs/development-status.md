Last updated: 2025-10-01

# Development Status

## 現在のIssues
- 共通ワークフロー（issue-note, project-summary, translate, callgraph）の他プロジェクトへの導入検証タスク [#16](../issue-notes/16.md) が進行中ですが、Callgraphのみが未完了です。
- 各共通ワークフロー（issue-note [#13](../issue-notes/13.md), project-summary [#12](../issue-notes/12.md), translate [#11](../issue-notes/11.md), callgraph [#10](../issue-notes/10.md)）を他プロジェクトで利用するための導入手順ドキュメント作成が課題となっています。
- 特に [#12](../issue-notes/12.md) では、promptsを呼び出し元で指定可能にする機能はYAGNI原則に基づき保留されています。

## 次の一手候補
1. Callgraphワークフローの他プロジェクトへの導入検証完了とIssue [#16](../issue-notes/16.md) のクローズ
   - 最初の小さな一歩: `tonejs-mml-to-json` リポジトリにて、github-actionsにある `call-callgraph.yml` をコピーし、動作を確認する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/call-callgraph.yml, .github/workflows/callgraph.yml

     実行内容: `call-callgraph.yml` を他リポジトリで利用する際に、`callgraph.yml` が期待する `CONFIG_NAME` のパスが正しく指定されているかを確認し、適切な利用例を提示してください。特に、`CONFIG_NAME` の値が`.github/actions-tmp/.github_automation/callgraph/config/example.json` のような共通ワークフロー側のパスを指している点と、もし呼び出し元リポジトリ側で設定ファイルを用意する場合のパス指定の例を分析してください。

     確認事項: 呼び出し元のリポジトリの構造と、`CONFIG_NAME` が指す設定ファイルの配置（共通リポジトリ内か、呼び出し元リポジトリ内か）を考慮してください。

     期待する出力: 他リポジトリ (`tonejs-mml-to-json` のようなリポジトリ) に `call-callgraph.yml` を導入する際の `CONFIG_NAME` の設定に関する具体的なガイダンスをMarkdown形式で提供してください。
     ```

2. Callgraphワークフローの導入ドキュメント作成とIssue [#10](../issue-notes/10.md) の進捗可視化
   - 最初の小さな一歩: `call-callgraph.yml` と `callgraph.yml` を分析し、`callgraph` ワークフローを外部プロジェクトで利用するために必要な設定項目（パラメータ、シークレット、前提ファイルなど）を洗い出す。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/call-callgraph.yml, .github/workflows/callgraph.yml, .github_automation/callgraph/docs/callgraph.md

     実行内容: `callgraph` ワークフローを外部プロジェクトで利用する際に必要な設定項目を洗い出し、以下の観点から導入手順を分析してください：
     1) 必須入力パラメータ (`CONFIG_NAME` など)
     2) 必須シークレット (GitHub Tokenなど)
     3) ファイル配置の前提条件 (設定ファイル `.github_automation/callgraph/config/example.json` のパスなど)
     4) 外部プロジェクトでの利用時に必要な追加設定や考慮事項
     また、Issue [#10](../issue-notes/10.md) で言及されている「別dirへの切り分け」や「名前enhancedの削除」といった完了済みタスクの現状も可視化してください。

     確認事項: `callgraph.yml` 内の `env` 変数や、`uses: cat2151/github-actions/.github/workflows/callgraph.yml@main` のパスの解釈、および `CONFIG_NAME` の使い方を正確に理解してください。

     期待する出力: `callgraph` ワークフローを外部プロジェクトに導入する際の手順書をmarkdown形式で生成してください。具体的には：必須パラメータの設定方法、シークレットの登録手順、前提条件の確認項目、およびIssue [#10](../issue-notes/10.md) の現状の可視化を含めてください。
     ```

3. Project Summaryワークフローの導入ドキュメント作成とIssue [#12](../issue-notes/12.md) の進捗可視化
   - 最初の小さな一歩: `call-daily-project-summary.yml` と `daily-project-summary.yml`、および既存の `daily-summary-setup.md` を分析し、`project-summary` ワークフローを外部プロジェクトで利用するために必要な設定項目を洗い出す。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/call-daily-project-summary.yml, .github/workflows/daily-project-summary.yml, .github_automation/project_summary/docs/daily-summary-setup.md

     実行内容: `project-summary` ワークフローを外部プロジェクトで利用する際に必要な設定項目を洗い出し、`daily-summary-setup.md` を更新するために必要な情報を分析してください：
     1) 必須入力パラメータ（現時点では直接のinputsはないが、今後必要になる可能性のある項目）
     2) 必須シークレット (`GEMINI_API_KEY`)
     3) ファイル配置の前提条件 (プロンプトファイルなどのパス)
     4) 外部プロジェクトでの利用時に必要な追加設定や考慮事項
     また、Issue [#12](../issue-notes/12.md) で「promptsをcall側ymlで指定可能にする」が保留されている状況も踏まえてください。

     確認事項: `daily-project-summary.yml` 内の `secrets` 宣言、`env` 変数、および `generate-project-summary.cjs` スクリプトへの引数の渡し方を正確に理解してください。`daily-summary-setup.md` の既存の内容との整合性も確認してください。

     期待する出力: `daily-summary-setup.md` の「必要な設定」セクションを更新するための内容をmarkdown形式で生成してください。特に、`call-daily-project-summary.yml` を導入する際の手順と、`GEMINI_API_KEY` の設定方法、および関連ファイルの配置に関する詳細、そして保留タスクの現状を含めてください。

---
Generated at: 2025-10-01 07:05:35 JST

Last updated: 2025-11-11

# Development Status

## 現在のIssues
- Issueノートが存在しない場合に進捗状況生成がエラーになる [Issue #30](../issue-notes/30.md) は、処理を改善し空文字を返すことで解消されました。
- `issue-note` 共通ワークフロー [Issue #13](../issue-notes/13.md) を他プロジェクトで利用するための導入手順書の作成が未完了です。
- `translate` 共通ワークフロー [Issue #11](../issue-notes/11.md) については、導入手順書とプロンプトの外部指定化が主要な課題として残っています。

## 次の一手候補
1. [Issue #13](../issue-notes/13.md) `issue-note` 共通ワークフローの導入手順書を作成する
   - 最初の小さな一歩: `issue-note.yml` の `workflow_call` セクションを確認し、必須となる `inputs` や `secrets` を洗い出す。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/issue-note.yml

     実行内容: 対象ファイルである `issue-note.yml` を分析し、外部プロジェクトで共通ワークフローとして利用する際に必要な設定項目を洗い出してください。具体的には、以下の観点から分析し、その結果をmarkdown形式で出力してください：
     1) 必須入力パラメータ（issue_title, issue_number, issue_body, issue_url など）
     2) 必須シークレット（GITHUB_TOKEN など）
     3) ファイル配置の前提条件（例: `issue-notes` ディレクトリの存在や構造）

     確認事項: `issue-note.yml` の `workflow_call` 定義と、スクリプト（特に `actions/github-script` ステップ）内で参照されている `inputs` や `env` 変数を詳細に確認し、全ての設定項目が網羅されていることを確認してください。

     期待する出力: 外部プロジェクトがこの `issue-note.yml` 共通ワークフローを導入する際の手順書をmarkdown形式で生成してください。具体的には：必須パラメータの設定方法、シークレットの登録手順、前提条件の確認項目を含めてください。
     ```

2. [Issue #11](../issue-notes/11.md) `translate` 共通ワークフローの導入手順書を作成する
   - 最初の小さな一歩: `translate-readme.yml` の `workflow_call` セクションを確認し、必須となる `inputs` や `secrets` を洗い出す。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/translate-readme.yml

     実行内容: 対象ファイルである `translate-readme.yml` を分析し、外部プロジェクトで共通ワークフローとして利用する際に必要な設定項目を洗い出してください。具体的には、以下の観点から分析し、その結果をmarkdown形式で出力してください：
     1) 必須入力パラメータ（target-branch, file-path など）
     2) 必須シークレット（GEMINI_API_KEY, GITHUB_TOKEN など）
     3) ファイル配置の前提条件（例: `README.ja.md` の存在）
     4) 外部プロジェクトでの利用時に必要な追加設定や考慮事項

     確認事項: `translate-readme.yml` の `workflow_call` 定義と、スクリプト（`translate-readme.cjs`）内で参照されている `inputs` や `env` 変数を詳細に確認し、全ての設定項目が網羅されていることを確認してください。

     期待する出力: 外部プロジェクトがこの `translate-readme.yml` 共通ワークフローを導入する際の手順書をmarkdown形式で生成してください。具体的には：必須パラメータの設定方法、シークレットの登録手順、前提条件の確認項目を含めてください。
     ```

3. [Issue #11](../issue-notes/11.md) `translate` ワークフローのプロンプト外部指定化を検討する
   - 最初の小さな一歩: 現在 `translate-readme.cjs` でプロンプトがどのように定義され、利用されているかを特定する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/translate/scripts/translate-readme.cjs

     実行内容: `translate-readme.cjs` ファイルを分析し、現在プロンプトがどのようにコード内で定義され、利用されているかを特定してください。その後、プロンプトを外部ファイル（例: `prompts` ディレクトリ内のファイル）として管理し、`translate-readme.yml` の `workflow_call` の `inputs` からその外部ファイルパスを指定できるようにするための具体的な変更点を洗い出し、その実装案をmarkdown形式で出力してください。

     確認事項: プロンプトの外部指定化が既存の翻訳ロジックに影響を与えないこと、および新しいプロンプトファイルが存在しない場合のデフォルト動作やエラーハンドリングについて考慮してください。

     期待する出力: プロンプトの外部指定化のための実装案をmarkdown形式で出力してください。具体的には、`translate-readme.cjs` と `translate-readme.yml` の変更箇所（追加する `inputs`、スクリプトの修正内容、プロンプトファイルの読み込みロジック）を含めてください。
     ```

---
Generated at: 2025-11-11 07:06:04 JST

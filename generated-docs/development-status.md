Last updated: 2025-09-26

# Development Status

## 現在のIssues
- [Issue #16](../issue-notes/16.md) は、issue-noteとproject-summaryの共通ワークフローへの移行は完了しましたが、translateとcallgraphの共通ワークフローへの移行と動作確認が残っています。
- [Issue #13](../issue-notes/13.md), [Issue #12](../issue-notes/12.md), [Issue #11](../issue-notes/11.md), [Issue #10](../issue-notes/10.md) は、各ワークフローを他のプロジェクトから利用しやすくするための導入手順ドキュメントの整備が必要です。
- 特に[Issue #12](../issue-notes/12.md)ではproject-summaryのpromptsの柔軟な指定はYAGNI原則に基づき現状保留されています。

## 次の一手候補
1. [Issue #16](../issue-notes/16.md) translateワークフローの外部リポジトリでの動作確認
   - 最初の小さな一歩: `tonejs-mml-to-json` リポジトリで `call-translate-readme.yml` ワークフローをトリガーし、README.mdが正しく翻訳・更新されるかを確認する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/call-translate-readme.yml および関連するREADMEファイル（README.ja.md, README.md）

     実行内容: `tonejs-mml-to-json`リポジトリにおける`call-translate-readme.yml`の動作状況を分析し、translateワークフローが正常に機能しているか評価してください。もし動作しない、または期待通りでない場合は、その原因を特定し、修正案を提示してください。

     確認事項: `call-translate-readme.yml`が共通ワークフローを正しく呼び出しているか、必要なシークレット（GEMINI_API_KEY）が設定されているか、対象の`README.ja.md`と`README.md`が存在し、適切な権限で書き込み可能かを確認してください。

     期待する出力: `tonejs-mml-to-json`リポジトリでの`call-translate-readme.yml`の動作確認結果と、もし問題があればその原因と具体的な修正案をmarkdown形式で出力してください。
     ```

2. [Issue #12](../issue-notes/12.md) project-summaryの導入手順ドキュメントを更新
   - 最初の小さな一歩: `.github_automation/project_summary/docs/daily-summary-setup.md` に `call-daily-project-summary.yml` の具体的な導入手順を追記する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/docs/daily-summary-setup.md
     
     実行内容: `daily-summary-setup.md`を更新し、`.github/workflows/call-daily-project-summary.yml`を外部プロジェクトで利用する際の導入手順を記述してください。具体的には、GitHub Secrets（GEMINI_API_KEY）の設定、共通ワークフローのパス、呼び出し方法、およびプロジェクト固有の設定（もしあれば）を含めてください。

     確認事項: 既存のドキュメント内容との整合性、および`call-daily-project-summary.yml`のYAML定義との正確な対応を確認してください。

     期待する出力: 更新された`daily-summary-setup.md`の全文をmarkdown形式で出力してください。
     ```

3. [Issue #10](../issue-notes/10.md) callgraphの導入手順ドキュメントを作成
   - 最初の小さな一歩: `.github_automation/callgraph/docs/callgraph.md` を更新し、`call-callgraph.yml` の導入手順の草案を作成する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/callgraph/docs/callgraph.md

     実行内容: `.github_automation/callgraph/docs/callgraph.md`を更新（または新規作成）し、`.github/workflows/call-callgraph.yml`を外部プロジェクトで利用する際の導入手順をmarkdown形式で記述してください。以下の観点を必ず含めてください：
     1. 必須入力パラメータ（`CONFIG_NAME`など）の設定方法
     2. 必須シークレット（`GITHUB_TOKEN`の権限）の確認
     3. ファイル配置の前提条件（例: `CONFIG_NAME`で指定する設定ファイルの場所）
     4. 外部プロジェクトでの利用時に必要な追加設定（例: `.github/workflows/call-callgraph.yml`の記述例）

     確認事項: `.github/workflows/call-callgraph.yml`と`.github/workflows/callgraph.yml`の内容と矛盾がないかを確認してください。

     期待する出力: 更新された`callgraph.md`の全文をmarkdown形式で出力してください。

---
Generated at: 2025-09-26 07:04:28 JST

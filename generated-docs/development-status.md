Last updated: 2025-08-11

# Development Status

## 現在のIssues
- [Issue #15](issue-notes/15.md) `project_summary`スクリプトの`cjs`ファイルをより小さなモジュールに分解し、Agentによる保守性を向上させる作業が進行中です。
- [Issue #10](issue-notes/10.md), [Issue #11](issue-notes/11.md), [Issue #12](issue-notes/12.md), [Issue #13](issue-notes/13.md) `callgraph`, `translate`, `project-summary`, `issue-note`といった主要なGitHub Actionsを他のプロジェクトから利用しやすくするための改善が広範囲にわたって必要とされています。
- 最近の変更では、[Issue #15]に関連する`GitUtils.cjs`の分割や、`cjs`分解のための分析レポートの生成が行われています。

## 次の一手候補
1. [Issue #15] project_summary scripts cjs を分解し、できるだけ1ファイル200行未満にし、agentによるメンテをしやすくする
   - 最初の小さな一歩: `generate-project-summary.cjs`のコードを分析し、分割可能な機能やロジックを特定する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github_automation/project_summary/scripts/generate-project-summary.cjs
     
     実行内容: 上記ファイルを分析し、200行以上のコードブロックや、独立した機能を持つ関数を特定してください。その後、それらを新しい`.cjs`ファイルに分割するためのリファクタリング案をMarkdown形式で提案してください。各分割案に対して、新しいファイル名と、元のファイルから移動する具体的なコード範囲（行番号）を明記してください。
     
     確認事項: 分割によって発生する依存関係の変化（特に`require`パス）や、既存の機能が損なわれないことを確認してください。また、分割後の各ファイルの行数が200行以下になることを目指してください。
     
     期待する出力: `generate-project-summary.cjs`の分解提案をMarkdown形式で出力してください。提案には、各分割対象の機能概要、新しいファイル名、移動するコードの抜粋、および`require`パスの変更点が含まれるようにしてください。
     ```

2. [Issue #12] project-summary を他projectから使いやすくする
   - 最初の小さな一歩: `project-summary`の主要なワークフロー（例: `.github/workflows/generate-project-summaries.yml`）を分析し、現在の利用に必要な入力パラメータや前提条件を洗い出す。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/generate-project-summaries.yml
     
     実行内容: 対象ワークフローが外部プロジェクトから利用されることを想定し、必要な設定項目（入力パラメータ、シークレット、ファイル配置の前提条件など）を洗い出し、Markdown形式でリストアップしてください。
     
     確認事項: 既存のワークフローファイルや、`project-summary`スクリプトとの依存関係、およびプロジェクト内の他のドキュメントとの整合性を確認してください。
     
     期待する出力: 外部プロジェクトが`project-summary`ワークフローを導入する際に必要な設定項目と手順を、箇条書きでまとめたMarkdown形式のレポートを生成してください。
     ```

3. [Issue #10] callgraph を他projectから使いやすくする
   - 最初の小さな一歩: `callgraph`の主要なワークフロー（例: `.github/workflows/generate-callgraph.yml`）を分析し、現在の利用に必要な入力パラメータや前提条件を洗い出す。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/generate-callgraph.yml
     
     実行内容: 対象ワークフローが外部プロジェクトから利用されることを想定し、必要な設定項目（入力パラメータ、シークレット、ファイル配置の前提条件など）を洗い出し、Markdown形式でリストアップしてください。
     
     確認事項: 既存のワークフローファイルや、`callgraph`スクリプトとの依存関係、およびプロジェクト内の他のドキュメントとの整合性を確認してください。
     
     期待する出力: 外部プロジェクトが`callgraph`ワークフローを導入する際に必要な設定項目と手順を、箇条書きでまとめたMarkdown形式のレポートを生成してください。
     ```

---
Generated at: 2025-08-11 07:05:10 JST

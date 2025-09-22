Last updated: 2025-09-23

# Development Status

## 現在のIssues
- 共通ワークフロー（issue-note, project-summary, translate, callgraph）を他プロジェクトから利用できるように改善し、特に `tonejs-mml-to-json` からの呼び出し検証と古いワークフローの置き換えが進行中です ([Issue #16](../issue-notes/16.md))。
- 各共通ワークフローの導入手順を、他プロジェクトで簡単に利用できるようドキュメント化するタスクが主要課題として残っています ([Issue #10](../issue-notes/10.md), [Issue #11](../issue-notes/11.md), [Issue #12](../issue-notes/12.md), [Issue #13](../issue-notes/13.md))。
- `project-summary` のプロンプトのカスタマイズ機能は、YAGNI原則に基づき別プロジェクトでの検証後に必要に応じて実装を検討する形で保留されています ([Issue #12](../issue-notes/12.md))。

## 次の一手候補
1. [Issue #16](../issue-notes/16.md): `tonejs-mml-to-json` リポジトリで issue-note ワークフローを更新し、動作を確認する
   - 最初の小さな一歩: `tonejs-mml-to-json` リポジトリの既存の `issue-note.yml` を、`github-actions` リポジトリの最新の `call-issue-note.yml` の内容で更新する。
   - Agent実行プロンプ:
     ```
     対象ファイル: 外部プロジェクトの `.github/workflows/issue-note.yml` (例: `tonejs-mml-to-json` リポジトリ) およびこのリポジトリの `.github/workflows/call-issue-note.yml`

     実行内容: `github-actions` リポジトリの `.github/workflows/call-issue-note.yml` の内容を参考に、外部プロジェクトの既存の `issue-note.yml` を更新する手順をMarkdown形式で記述してください。具体的には、`uses` のパスを `cat2151/github-actions/.github/workflows/issue-note.yml@main` に変更し、`with` で渡す `inputs` が正しく設定されるように説明してください。

     確認事項: 外部プロジェクトで現在利用している `issue-note.yml` の具体的な内容と、このリポジトリの `call-issue-note.yml` の内容を比較し、必要な変更点と注意点を明確にしてください。

     期待する出力: 外部プロジェクトで `call-issue-note.yml` を導入するための具体的なGitHub ActionsのYAMLコードと、その導入手順をMarkdown形式で出力してください。
     ```

2. [Issue #12](../issue-notes/12.md): project-summary の導入手順を `daily-summary-setup.md` に追記する
   - 最初の小さな一歩: `daily-summary-setup.md` の「必要な設定」セクションに、`call-daily-project-summary.yml` を外部プロジェクトで利用するための具体的な導入手順（`uses` パスの指定、`secrets.GEMINI_API_KEY` の設定方法）を追記する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `.github_automation/project_summary/docs/daily-summary-setup.md` および `.github/workflows/call-daily-project-summary.yml`

     実行内容: `.github_automation/project_summary/docs/daily-summary-setup.md` の「必要な設定」セクションを更新し、`call-daily-project-summary.yml` を外部プロジェクトから呼び出すための具体的な導入手順を追記してください。`uses` のパス指定方法と、`secrets.GEMINI_API_KEY` の設定方法を明確に記述し、既存のドキュメントのフォーマットと整合性を保ってください。

     確認事項: 追記する内容が、既存のドキュメントの構造や目的と合致しているか、また `.github/workflows/call-daily-project-summary.yml` の実際の利用方法を正確に反映しているかを確認してください。

     期待する出力: 更新された `daily-summary-setup.md` の内容をMarkdown形式で出力してください。
     ```

3. [Issue #10](../issue-notes/10.md): callgraph の導入手順を `callgraph.md` に追記する
   - 最初の小さな一歩: `callgraph.md` に、`call-callgraph.yml` を外部プロジェクトで利用するための導入手順（`uses` パスの指定、`CONFIG_NAME` の設定方法、必要なシークレット）を追記する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `.github_automation/callgraph/docs/callgraph.md` および `.github/workflows/call-callgraph.yml`

     実行内容: `.github_automation/callgraph/docs/callgraph.md` を更新し、`call-callgraph.yml` を外部プロジェクトで利用する際の導入手順を追記してください。具体的には、`uses` パスの指定方法、`CONFIG_NAME` の設定（例: `.github/actions-tmp/.github_automation/callgraph/config/example.json` を参考にする方法やカスタム設定ファイルの指定方法）、および必要なGitHub Secrets（もしあれば）を含めてください。

     確認事項: 既存の `callgraph.md` の内容と競合しないか、また `call-callgraph.yml` の利用方法が正確に反映されているかを確認してください。

     期待する出力: 更新された `callgraph.md` の内容をMarkdown形式で出力してください。

---
Generated at: 2025-09-23 07:05:18 JST

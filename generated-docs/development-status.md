Last updated: 2025-09-15

# Development Status

## 現在のIssues
- [Issue #16](../issue-notes/16.md) は、issue-note, project-summary, translate, callgraphの各共通ワークフローが`tonejs-mml-to-json`プロジェクトで古いバージョンを呼び出しているため、最新版への切り替えと動作確認が課題です。
- [Issue #13](../issue-notes/13.md), [Issue #12](../issue-notes/12.md), [Issue #11](../issue-notes/11.md), [Issue #10](../issue-notes/10.md) はそれぞれ、issue-note, project-summary, translate, callgraphの各ワークフローを他プロジェクトから使いやすくするための導入ドキュメント整備が主な課題となっています。
- 特に [Issue #12](../issue-notes/12.md) のproject-summaryについては、`daily-summary-setup.md`のメンテナンスと`call-daily-project-summary.yml`の導入手順追記が具体的なタスクとして挙げられています。

## 次の一手候補
1. [Issue #16](../issue-notes/16.md): `tonejs-mml-to-json`の`issue-note`ワークフローを最新の共通ワークフローに更新する
   - 最初の小さな一歩: `tonejs-mml-to-json`リポジトリで、現在の`issue-note`ワークフローを無効化（またはバックアップ）し、`cat2151/github-actions/.github/workflows/call-issue-note.yml`を`uses`するように更新する。
   - Agent実行プロンプ:
     ```
     対象ファイル: (例:`tonejs-mml-to-json`リポジトリ内の`.github/workflows/issue-note.yml`)

     実行内容: `tonejs-mml-to-json`リポジトリの既存のissue-noteワークフローファイルを、`cat2151/github-actions/.github/workflows/issue-note.yml@main`を`uses`する形式に更新してください。この際、`github-actions`リポジトリの`call-issue-note.yml`の構成を参考に、`workflow_call`で必要となる`issue_number`, `issue_title`, `issue_body`, `issue_html_url`を正しく`with`パラメータとして設定してください。

     確認事項: `tonejs-mml-to-json`リポジトリの既存のissue-noteワークフローファイル名とその内容、および`github-actions`リポジトリの`.github/workflows/issue-note.yml`で定義されている`inputs`と`call-issue-note.yml`の`with`パラメータが整合していることを確認してください。

     期待する出力: `tonejs-mml-to-json`リポジトリのissue-noteワークフローを更新したYAMLファイルの内容をMarkdown形式で出力してください。
     ```

2. [Issue #12](../issue-notes/12.md): `project-summary`ワークフローの導入手順を`daily-summary-setup.md`に追記する
   - 最初の小さな一歩: `.github_automation/project_summary/docs/daily-summary-setup.md`ファイルに、`call-daily-project-summary.yml`の導入に必要な設定項目 (GitHub Secrets、ファイル配置、スケジュール設定) の見出しと概要を追記する。
   - Agent実行プロンプ:
     ```
     対象ファイル: `.github_automation/project_summary/docs/daily-summary-setup.md`と`.github/workflows/call-daily-project-summary.yml`

     実行内容: `.github_automation/project_summary/docs/daily-summary-setup.md`を更新し、「必要な設定」セクションの下に`call-daily-project-summary.yml`を外部プロジェクトで利用する際に必要な手順と設定項目を明確に記述してください。具体的には、`secrets.GEMINI_API_KEY`の設定方法、`GITHUB_TOKEN`の権限、`call-daily-project-summary.yml`の導入例、および推奨されるスケジュール設定について追記してください。

     確認事項: 既存の`daily-summary-setup.md`の内容と、`.github/workflows/call-daily-project-summary.yml`で定義されている`secrets`が正確に反映されていることを確認してください。

     期待する出力: `daily-summary-setup.md`に追記された`call-daily-project-summary.yml`の導入手順を含む、更新されたMarkdownファイルの内容。
     ```

3. [Issue #10](../issue-notes/10.md): `callgraph`ワークフローの導入手順を`.github_automation/callgraph/docs/callgraph.md`に追記する
   - 最初の小さな一歩: `.github_automation/callgraph/docs/callgraph.md`ファイルを新規作成し、`call-callgraph.yml`の導入に必要な設定項目 (必須入力パラメータ、必須シークレット、ファイル配置の前提条件) の見出しと概要を記述する。
   - Agent実行プロンプ:
     ```
     対象ファイル: `.github_automation/callgraph/docs/callgraph.md`と`.github/workflows/call-callgraph.yml`と`.github/workflows/callgraph.yml`

     実行内容: `.github_automation/callgraph/docs/callgraph.md`を新規作成し、`call-callgraph.yml`を外部プロジェクトで利用する際に必要な設定項目を明確に記述してください。具体的には、`inputs.CONFIG_NAME`の指定方法、`secrets.GITHUB_TOKEN`の役割、ワークフローのスケジュール設定例、およびCodeQLクエリパックの配置に関する前提条件を含めてください。

     確認事項: `call-callgraph.yml`で定義されている`inputs`と`secrets`、および`callgraph.yml`でCodeQLクエリパックのパスとして設定されている`env.QUERIES`のパスを正確に反映してください。

     期待する出力: `.github_automation/callgraph/docs/callgraph.md`に記述された`call-callgraph.yml`の導入手順を含む、Markdownファイルの内容。
     ```

---
Generated at: 2025-09-15 07:04:39 JST

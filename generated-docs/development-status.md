Last updated: 2025-09-17

# Development Status

## 現在のIssues
- 共通ワークフロー（`issue-note`, `project-summary`, `translate`, `callgraph`）の他プロジェクト(`tonejs-mml-to-json`)での導入検証 ([Issue #16](../issue-notes/16.md))を進めており、古いワークフローの最新版への置き換えが主な課題です。
- 各共通ワークフローの他プロジェクトからの利用を容易にするため、`issue-note` ([#13](../issue-notes/13.md)), `project-summary` ([#12](../issue-notes/12.md)), `translate` ([#11](../issue-notes/11.md)), `callgraph` ([#10](../issue-notes/10.md)) の導入手順ドキュメントの作成・更新が必要です。
- 特に`project-summary` ([#12](../issue-notes/12.md))については、`daily-summary-setup.md`の更新を通じて導入手順を明確にすることが求められています。

## 次の一手候補
1. `issue-note`共通ワークフローの導入手順ドキュメント案作成 ([Issue #13](../issue-notes/13.md) & [Issue #16](../issue-notes/16.md))
   - 最初の小さな一歩: `call-issue-note.yml`と`issue-note.yml`を分析し、外部プロジェクトでこのワークフローを利用するための設定項目（inputs, secrets, ファイル配置など）を洗い出し、手順書案を作成する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/call-issue-note.yml と .github/workflows/issue-note.yml

     実行内容: `call-issue-note.yml`が`issue-note.yml`を呼び出す際の具体的な`inputs`と、他プロジェクトから利用する際に必要な設定項目を洗い出し、以下の観点から分析してください：
     1) 必須入力パラメータ (`issue_number`, `issue_title`, `issue_body`, `issue_html_url`等)
     2) 必須シークレット (なし)
     3) ファイル配置の前提条件 (なし)
     4) 外部プロジェクトでの利用時に必要な追加設定

     確認事項: 既存の`issue-note.yml`の`workflow_call`定義と`call-issue-note.yml`の`with`の内容が一致していることを確認してください。また、`issue-note.yml`の各ステップが`inputs`を正しく参照していることを確認してください。

     期待する出力: 外部プロジェクトがこの`issue-note`ワークフローを導入する際の手順書をmarkdown形式で生成してください。具体的には：必須パラメータの設定方法、前提条件の確認項目を含めてください。この手順書は、[Issue #13](../issue-notes/13.md)の`docs - call導入手順を書く`の参考となるようにしてください。
     ```

2. `project-summary`共通ワークフローの導入手順ドキュメント更新 ([Issue #12](../issue-notes/12.md))
   - 最初の小さな一歩: `.github_automation/project_summary/docs/daily-summary-setup.md`に、`call-daily-project-summary.yml`の具体的な導入手順（`uses`の設定、`secrets.GEMINI_API_KEY`の指定など）を追記する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github_automation/project_summary/docs/daily-summary-setup.md, .github/workflows/call-daily-project-summary.yml, .github/workflows/daily-project-summary.yml

     実行内容: `.github_automation/project_summary/docs/daily-summary-setup.md`の「必要な設定」セクションに、`call-daily-project-summary.yml`を外部プロジェクトで利用する際の具体的な導入手順を追記してください。追記する内容は以下の点を網羅するようにしてください：
     1. `.github/workflows/call-daily-project-summary.yml`をプロジェクトに追加する手順。
     2. `uses`に指定するリポジトリとブランチ（`cat2151/github-actions/.github/workflows/daily-project-summary.yml@main`）。
     3. 必須シークレット`GEMINI_API_KEY`の設定方法。
     4. スケジュールトリガーや`workflow_dispatch`に関する説明。

     確認事項: `.github_automation/project_summary/docs/daily-summary-setup.md`の既存のフォーマットと内容の整合性を確認してください。また、`call-daily-project-summary.yml`と`daily-project-summary.yml`の定義が正しく反映されているか確認してください。

     期待する出力: 更新された`.github_automation/project_summary/docs/daily-summary-setup.md`のコンテンツ全体をmarkdown形式で出力してください。
     ```

3. `callgraph`共通ワークフローの導入手順ドキュメント案作成と状況可視化 ([Issue #10](../issue-notes/10.md))
   - 最初の小さな一歩: `issue-notes/10.md`を更新し、`callgraph`ワークフローの別ディレクトリへの切り分け状況を明記するとともに、`call-callgraph.yml`の導入手順に関する記載を提案する。
   - Agent実行プロンプ:
     ```
     対象ファイル: issue-notes/10.md, .github/workflows/call-callgraph.yml, .github/workflows/callgraph.yml

     実行内容: `issue-notes/10.md`の「状況」セクションを更新し、`callgraph`ワークフローの別ディレクトリへの切り分け（`codeql-queries`, `scripts`, `presets`などの配置）が実施済みであることを明記してください。また、新しい「docs - call導入手順を書く」セクションを追加し、`call-callgraph.yml`の導入手順（`uses`の設定、`CONFIG_NAME`入力パラメータの指定など）に関する記載を提案してください。

     確認事項: `issue-notes/10.md`の既存コンテンツとフォーマットの整合性を確認してください。また、`call-callgraph.yml`と`callgraph.yml`の定義が正しく反映されているか確認してください。

     期待する出力: 更新された`issue-notes/10.md`のコンテンツ全体をmarkdown形式で出力してください。

---
Generated at: 2025-09-17 07:04:56 JST

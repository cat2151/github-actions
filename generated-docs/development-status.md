Last updated: 2025-09-16

# Development Status

## 現在のIssues
- [Issue #16](../issue-notes/16.md)では、issue-note, project-summary, translate, callgraphの各ワークフローを他プロジェクトへ導入する状況を調査し、旧ワークフローからの切り替えを計画しています。
- [Issue #10](../issue-notes/10.md), [Issue #11](../issue-notes/11.md), [Issue #12](../issue-notes/12.md), [Issue #13](../issue-notes/13.md)は、それぞれcallgraph, translate, project-summary, issue-noteを他プロジェクトから使いやすくするためのドキュメント整備を進めています。
- 具体的には、各ワークフローの導入手順を`docs/`ディレクトリに記述することと、既存の分離状況を可視化することに焦点を当てています。

## 次の一手候補
1. [Issue #16] `call-issue-note.yml` の `tonejs-mml-to-json` への導入検証
   - 最初の小さな一歩: `github-actions`リポジトリにある`call-issue-note.yml`をコピーし、`tonejs-mml-to-json`リポジトリに配置する際の具体的なステップと注意点をまとめる。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/call-issue-note.yml (このリポジトリの)

     実行内容: `call-issue-note.yml`を外部リポジトリ(例: `tonejs-mml-to-json`)に導入する際の手順と、その際に特に注意すべき点を洗い出し、具体的な導入ステップをmarkdown形式で記述してください。特に、`workflow_dispatch`や`issues:opened`トリガーの設定、`with`で渡す入力パラメータ（`issue_number`など）の設定方法に焦点を当ててください。

     確認事項: `call-issue-note.yml`が依存する`issue-note.yml`の入力パラメータと、外部リポジトリのイベントペイロードからこれらの値を取得する方法。`github.event`オブジェクトの構造。

     期待する出力: `tonejs-mml-to-json`リポジトリに`call-issue-note.yml`を導入し、既存のissue-noteワークフローを置き換えるための具体的な手順書をmarkdown形式で生成してください。
     ```

2. [Issue #13] `issue-note` 導入手順のドキュメント化
   - 最初の小さな一歩: `issue-note`ワークフローを他プロジェクトから利用するための導入手順書`issue-note-setup.md`の初版を作成する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github_automation/project_summary/docs/daily-summary-setup.md (参考用), および新規ファイル `issue-note-setup.md`

     実行内容: `daily-summary-setup.md`を参考に、`issue-note.yml`を他プロジェクトで利用するための導入手順書`issue-note-setup.md`を新規作成してください。必須要素として、GitHub Actionsの`uses:`記述方法、`with:`で渡す`issue_title`, `issue_number`, `issue_body`, `issue_html_url`の取得元と設定方法を詳細に記述してください。`secrets`は不要であることを明記してください。

     確認事項: `call-issue-note.yml`と`issue-note.yml`の入力パラメータ定義、およびそれらの相互関係。

     期待する出力: `issue-note-setup.md`として、`issue-note.yml`の他プロジェクトへの導入手順を詳細に記したmarkdownファイルを生成してください。
     ```

3. [Issue #12] `project-summary` 導入手順のドキュメント更新
   - 最初の小さな一歩: `daily-summary-setup.md`に`call-daily-project-summary.yml`の導入に必要なシークレットや設定についての記述を追加する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github_automation/project_summary/docs/daily-summary-setup.md

     実行内容: `daily-summary-setup.md`を編集し、「必要な設定」セクションに`call-daily-project-summary.yml`の導入に必要な`uses:`の記述方法と`secrets.GEMINI_API_KEY`の渡し方を明確に追記してください。また、「GitHub Secrets」セクションに`GEMINI_API_KEY`の設定が必須であることを明記してください。

     確認事項: `call-daily-project-summary.yml`で`uses`される`daily-project-summary.yml`が`secrets.GEMINI_API_KEY`を要求すること、および`call-daily-project-summary.yml`がそのシークレットをどのように渡しているか。

     期待する出力: `daily-summary-setup.md`を更新し、`call-daily-project-summary.yml`の導入手順が明記されたmarkdownファイルを生成してください。
     ```

---
Generated at: 2025-09-16 07:05:26 JST

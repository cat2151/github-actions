Last updated: 2025-09-09

# Development Status

## 現在のIssues
- Gemini APIの503エラー対策としてリトライ機能が`BaseGenerator`に実装され、開発状況生成の安定性が向上しました [Issue #24](../issue-notes/24.md)。
- 開発状況生成の精度向上のため、プロンプトにプロジェクトファイル一覧と関連Issueノートの内容を添付する機能が導入されましたが、一部のプレースホルダーの展開に課題が残っています [Issue #21](../issue-notes/21.md), [Issue #20](../issue-notes/20.md)。
- 主要な共通ワークフロー (`issue-note`, `project-summary`, `translate`, `callgraph`) の他プロジェクトへの導入容易化とドキュメント化が進められています [Issue #16](../issue-notes/16.md), [Issue #13](../issue-notes/13.md), [Issue #12](../issue-notes/12.md), [Issue #11](../issue-notes/11.md), [Issue #10](../issue-notes/10.md)。

## 次の一手候補
1. `development-status`プロンプト内のプレースホルダーが正しく展開されるように`DevelopmentStatusGenerator.cjs`を修正する [Issue #21](../issue-notes/21.md)
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs`の`generateDevelopmentStatus`関数内で、`projectFiles`および`recentChanges`のデータがプロンプトテンプレートの対応するプレースホルダーに正しく置換されるよう、`fillTemplate`関数への引渡し方法、またはテンプレートの構文との整合性を確認・修正する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs

     実行内容: `DevelopmentStatusGenerator.cjs` の `generateDevelopmentStatus` 関数を修正し、以下のプレースホルダーが `development-status-prompt.md` 内で正しく展開されるようにしてください。
     - `${projectFiles}`: `this.getProjectFiles()` の結果で置換されるように修正。
     - `${recentChanges}`: `recentChanges.commits.join('\n')` と `recentChanges.changedFiles.join('\n')` を結合した文字列として置換されるように修正。
     `fillTemplate`関数への引数として渡される`values`オブジェクトのキーと、プロンプトテンプレートのプレースホルダー名が厳密に一致しているか確認し、必要に応じて修正してください。

     確認事項: `fillTemplate` 関数が `${var}` 形式のプレースホルダーを正しく認識し置換できることを確認してください。修正後、`generated-docs/development-status-generated-prompt.md` を確認し、`projectFiles` と `recentChanges` の内容が適切に展開されていることを確認してください。

     期待する出力: 変更後の `DevelopmentStatusGenerator.cjs` のコードを提示してください。
     ```

2. `issue-note`ワークフローの他プロジェクト導入手順書を作成 [Issue #13](../issue-notes/13.md)
   - 最初の小さな一歩: `call-issue-note.yml`の内容を分析し、既存の`TRANSLATION_SETUP.md`を参考に、外部プロジェクトからこのワークフローを呼び出すための手順書ドラフトを`docs/issue-note-setup.md`として作成する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/call-issue-note.yml, .github_automation/translate/docs/TRANSLATION_SETUP.md

     実行内容: `.github/workflows/call-issue-note.yml` の定義を参照し、外部プロジェクトがこのワークフローを導入する際に必要な手順書をmarkdown形式で作成してください。既存のドキュメント`.github_automation/translate/docs/TRANSLATION_SETUP.md`の構成を参考に、以下の要素を含めてください：
     1. 必須入力パラメータ（`issue_title`, `issue_number`, `issue_body`, `issue_html_url` の設定方法）
     2. 必須シークレット（もしあれば、`GITHUB_TOKEN`は通常自動提供されますが、必要に応じて明記）
     3. ファイル配置の前提条件（`issue-notes/` ディレクトリの存在とリポジトリルートからの相対パス）
     4. 外部プロジェクトでの利用時に必要な追加設定や考慮事項。
     ワークフローの呼び出し方法 (`uses: owner/repo/.github/workflows/issue-note.yml@main`) も具体的に記載してください。

     確認事項: `call-issue-note.yml` の `inputs` 定義とGitHub APIの利用 (`actions/github-script`) が、手順書の各項目と整合していることを確認してください。生成される手順書が、`TRANSLATION_SETUP.md` と同等以上の分かりやすさを持つことを確認してください。

     期待する出力: `issue-note` ワークフローの導入手順書をmarkdown形式で生成してください。ファイル名は `issue-note-setup.md` とし、内容を提示してください。
     ```

3. `callgraph`ワークフローの他プロジェクト導入手順書を作成 [Issue #10](../issue-notes/10.md)
   - 最初の小さな一歩: `call-callgraph.yml`と`callgraph.yml`を分析し、`CONFIG_NAME`入力パラメータの指定方法、CodeQLに関する環境変数、`generated-docs`への出力など、外部プロジェクトからの利用に必要な設定項目を洗い出し、`TRANSLATION_SETUP.md`を参考に手順書ドラフトを`docs/callgraph-setup.md`として作成する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/call-callgraph.yml, .github/workflows/callgraph.yml, .github_automation/translate/docs/TRANSLATION_SETUP.md, .github_automation/callgraph/config/example.json

     実行内容: `.github/workflows/call-callgraph.yml` と `.github/workflows/callgraph.yml` の定義、および `.github_automation/callgraph/config/example.json` の内容を参照し、外部プロジェクトがこのワークフローを導入する際に必要な手順書をmarkdown形式で作成してください。既存のドキュメント`.github_automation/translate/docs/TRANSLATION_SETUP.md`の構成を参考に、以下の要素を含めてください：
     1. 必須入力パラメータ（`CONFIG_NAME` の設定方法と`example.json`の参照方法）
     2. 必須シークレット（`GITHUB_TOKEN` は自動提供されますが、`contents: write` 権限が必要な旨を明記）
     3. ファイル配置の前提条件（CodeQLデータベースの作成、SARIF結果のパス、`src/`ディレクトリの存在、`generated-docs/`への出力）
     4. 外部プロジェクトでの利用時に必要な追加設定や考慮事項。CodeQL CLIのインストールやquery packsのインストール手順も簡潔に含めてください。ワークフローの呼び出し方法 (`uses: owner/repo/.github/workflows/callgraph.yml@main`) も具体的に記載してください。

     確認事項: `call-callgraph.yml` と `callgraph.yml` の `inputs`、`env`、`permissions`、`steps`が、手順書の各項目と整合していることを確認してください。CodeQLの実行環境設定 (`/opt/codeql`へのパス、`codeql pack install`) も手順書に反映されていることを確認してください。

     期待する出力: `callgraph` ワークフローの導入手順書をmarkdown形式で生成してください。ファイル名は `callgraph-setup.md` とし、内容を提示してください。

---
Generated at: 2025-09-09 07:05:45 JST

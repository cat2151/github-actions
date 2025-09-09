Last updated: 2025-09-10

# Development Status

## 現在のIssues
- [Issue #16](../issue-notes/16.md) は、issue-note, project-summary, translate, callgraphの各ワークフローが他のリポジトリ（tonejs-mml-to-json）で正しく機能するかを確認し、古い実装を置き換えることを目指しています。
- [Issue #13](../issue-notes/13.md), [Issue #12](../issue-notes/12.md), [Issue #11](../issue-notes/11.md), [Issue #10](../issue-notes/10.md) は、それぞれissue-note, project-summary, translate, callgraphの各ワークフローを他プロジェクトから利用しやすくするための課題（スクリプト/プロンプトのディレクトリ移動、パラメータ化、導入ドキュメント作成など）を扱っています。
- 特に[Issue #12](../issue-notes/12.md) と [Issue #11](../issue-notes/11.md) は、スクリプトやプロンプトの独立した配置と呼び出し元からの設定指定という共通の課題を解決する必要があります。

## 次の一手候補
1.  [Issue #12](../issue-notes/12.md): project-summary を他projectから使いやすくする
    -   最初の小さな一歩: `project_summary`関連のスクリプトとプロンプトファイルを、現在の`.github_automation/project_summary/`配下から、より独立したディレクトリ構造（例: `.github_automation/project_summary_action/scripts` と `.github_automation/project_summary_action/prompts`）に移動し、`daily-project-summary.yml`内のパス参照を新しいパスに更新する。
    -   Agent実行プロンプト:
        ```
        対象ファイル: .github_automation/project_summary/scripts/**/*.cjs, .github_automation/project_summary/prompts/**/*.md, .github/workflows/daily-project-summary.yml

        実行内容: `daily-project-summary.yml`で参照されている`project_summary`関連のスクリプトとプロンプトファイルを、`github-actions`リポジトリ内でより独立したディレクトリ構造（例: `.github_automation/project_summary_action/scripts`と`.github_automation/project_summary_action/prompts`）に移動してください。その後、`daily-project-summary.yml`内のこれらのファイルへのパス参照を新しいパスに更新してください。

        確認事項: ファイル移動後、`daily-project-summary.yml`が新しいパスで正しくスクリプトやプロンプトを参照しているか、既存の機能が壊れていないかを確認してください。`generate-project-summary.cjs`の実行時にパス解決の問題が発生しないか特に注意してください。

        期待する出力: 移動後のファイルパスと、`daily-project-summary.yml`の変更箇所をMarkdown形式で出力してください。
        ```

2.  [Issue #11](../issue-notes/11.md): translate を他projectから使いやすくする
    -   最初の小さな一歩: `translate-readme.cjs`スクリプトを`.github_automation/translate/scripts/`から、より独立したディレクトリ（例: `.github_automation/translate_action/scripts`）に移動し、`translate-readme.yml`内のパスを更新する。
    -   Agent実行プロンプト:
        ```
        対象ファイル: .github_automation/translate/scripts/translate-readme.cjs, .github/workflows/translate-readme.yml

        実行内容: `translate-readme.cjs`を`.github_automation/translate_action/scripts/`ディレクトリに移動し、`translate-readme.yml`内の`SCRIPT_DIR`環境変数を新しいパスに合わせて更新してください。

        確認事項: ファイル移動後、`translate-readme.yml`が新しいパスでスクリプトを正しく参照しているか、および既存の翻訳機能が壊れていないかを確認してください。

        期待する出力: 移動後のファイルパスと、`translate-readme.yml`の変更箇所をMarkdown形式で出力してください。
        ```

3.  [Issue #10](../issue-notes/10.md): callgraph を他projectから使いやすくする
    -   最初の小さな一歩: `callgraph`関連の`codeql-queries`と`scripts`を、現在の`.github_automation/callgraph/`配下から、より独立したディレクトリ構造（例: `.github_automation/callgraph_action/codeql-queries`と`.github_automation/callgraph_action/scripts`）に移動し、`callgraph.yml`内のパス参照を更新する。
    -   Agent実行プロンプト:
        ```
        対象ファイル: .github_automation/callgraph/codeql-queries/**/*.ql, .github_automation/callgraph/scripts/**/*.cjs, .github/workflows/callgraph.yml

        実行内容: `callgraph`関連の`codeql-queries`と`scripts`ファイルを、それぞれ`.github_automation/callgraph_action/codeql-queries/`と`.github_automation/callgraph_action/scripts/`へ移動してください。その後、`callgraph.yml`内の`QUERIES`と`CALLGRAPH`環境変数を新しいパスに更新してください。

        確認事項: ファイル移動後、`callgraph.yml`が新しいパスでCodeQLクエリやスクリプトを正しく参照しているか、および既存のコールグラフ生成機能が壊れていないかを確認してください。CodeQL関連のパスが特に重要です。

        期待する出力: 移動後のファイルパスと、`callgraph.yml`の変更箇所をMarkdown形式で出力してください。

---
Generated at: 2025-09-10 07:05:26 JST

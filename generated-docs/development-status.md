Last updated: 2025-09-13

# Development Status

## 現在のIssues
- [Issue #16](../issue-notes/16.md) は、4つの共通GitHub Actionsワークフロー（issue-note, project-summary, translate, callgraph）を別のプロジェクト（tonejs-mml-to-json）で最新版に切り替えることを目指し、現在古いワークフローが呼び出されている状況を解消します。
- [Issue #12](../issue-notes/12.md) は、project-summaryワークフローにおいて、プロンプトファイルを呼び出し元から柔軟に指定できるよう、設計思想（CJSは引数制御、YAMLは環境変数/inputs制御）に基づいた外部指定化の再実装を必要としています。
- [Issue #13](../issue-notes/13.md), [Issue #11](../issue-notes/11.md), [Issue #10](../issue-notes/10.md) は、issue-note, translate, callgraphの各ワークフローについて、他プロジェクトからの導入手順のドキュメント作成と、既存のディレクトリ構造や名称に関する課題解決を進めることを示しています。

## 次の一手候補
1. **[Issue #12](../issue-notes/12.md): Project Summaryワークフローのプロンプト外部指定化を実装**
   - 最初の小さな一歩: `daily-project-summary.yml` に `workflow_call` の `inputs` セクションを追加し、`overview-prompt-path` と `development-status-prompt-path` を受け取れるように定義します。そして、`generate-project-summary.cjs` を呼び出す際に、これらの `inputs` の値を引数として渡すように変更します。
   - Agent実行プロンプト:
     ```
     対象ファイル: `.github/workflows/daily-project-summary.yml` と `.github_automation/project_summary/scripts/generate-project-summary.cjs`

     実行内容: `project-summary` ワークフローのプロンプトファイルを呼び出し元から指定できるようにするため、`.github/workflows/daily-project-summary.yml` を以下のように修正してください。
     1. `on: workflow_call:` セクションに、`overview-prompt-path` と `development-status-prompt-path` という2つの `inputs` を追加します。これらはそれぞれ、プロジェクト概要プロンプトと開発状況プロンプトのファイルパスを受け取る文字列型の入力とします。`required: false`とし、デフォルト値として現在の環境変数 `PROMPT_DIR` と `OVERVIEW_PROMPT` / `DEVELOPMENT_STATUS_BASE_PROMPT` を組み合わせたパスを設定してください。
     2. `Generate project summary` ステップの `node` コマンドで `generate-project-summary.cjs` を呼び出す際、既存の引数として渡しているプロンプトパスを、新しく定義した `inputs` (もし指定されていればその値、指定されていなければデフォルト値) から取得するように変更してください。
     `generate-project-summary.cjs` は引数の受け取り方を変更する必要はありません。

     確認事項: `daily-project-summary.yml` が `workflow_call` の `inputs` を正しく解釈し、デフォルト値が適切に機能することを確認してください。また、`generate-project-summary.cjs` が受け取る引数の順序と数が変更されないことを保証してください。`call-daily-project-summary.yml`からの呼び出し時に、`with:`で新しい`inputs`が指定できることを想定しています。

     期待する出力: 上記の変更を適用した `.github/workflows/daily-project-summary.yml` の更新内容をMarkdown形式のコードブロックで出力してください。また、`.github_automation/project_summary/scripts/generate-project-summary.cjs` の変更は不要ですが、その旨を明記してください。
     ```

2. **[Issue #16](../issue-notes/16.md): tonejs-mml-to-jsonでのissue-noteワークフロー導入と動作確認**
   - 最初の小さな一歩: `tonejs-mml-to-json` リポジトリに、`github-actions` リポジトリの最新の `call-issue-note.yml` の内容をコピーして配置します。その後、そのリポジトリで新しいIssueを作成し、issue-noteが正しく生成され、Issueの本文にリンクが追加されるかを確認します。
   - Agent実行プロンプト:
     ```
     対象ファイル: `tonejs-mml-to-json`リポジトリ（仮想）における新規`.github/workflows/call-issue-note.yml`、および現在のリポジトリの`.github/workflows/call-issue-note.yml`。

     実行内容: 外部プロジェクト`tonejs-mml-to-json`で、現在のリポジトリの最新版`issue-note`共通ワークフローを利用するための導入手順書をmarkdown形式で作成してください。
     手順書には以下の要素を含めてください：
     1. `tonejs-mml-to-json`リポジトリに配置すべきYAMLファイル（`.github/workflows/call-issue-note.yml`）の完全な内容。現在のリポジリの`call-issue-note.yml`をベースとします。
     2. そのYAMLファイルをどこに配置すべきか。
     3. 導入後、ワークフローが正しく動作するかを確認するための具体的なステップ（例: 新規Issueの作成、Issue本文へのリンク追加の確認）。

     確認事項: 作成されるYAMLが`github.event.issue`の情報を正しく共通ワークフローに渡し、GitHubのリポジトリパスが`cat2151/github-actions`として正しく参照されていることを確認してください。また、導入手順が明確で、非開発者でも理解しやすいように記述されていることを確認してください。

     期待する出力: `tonejs-mml-to-json`リポジトリに`call-issue-note.yml`を導入する際の手順書をmarkdown形式で出力してください。
     ```

3. **[Issue #13](../issue-notes/13.md), [Issue #11](../issue-notes/11.md), [Issue #10](../issue-notes/10.md): 共通ワークフロー導入手順書の汎用テンプレート作成**
   - 最初の小さな一歩: `issue-note`, `translate`, `callgraph` の各共通ワークフローを他プロジェクトから利用する際の導入手順を網羅し、汎用的に利用できるMarkdownテンプレートを新規作成します。このテンプレートは、各ワークフロー固有の情報を埋め込むためのプレースホルダーを含めます。
   - Agent実行プロンプト:
     ```
     対象ファイル: なし（新規作成ファイル: `docs/common-workflow-setup-template.md` を想定）

     実行内容: `issue-note`, `translate`, `callgraph` など、現在のプロジェクトで提供されている共通GitHub Actionsワークフローを、外部のプロジェクトに導入する際に利用できる、汎用的な導入手順書のMarkdownテンプレートを作成してください。
     このテンプレートは、具体的なワークフロー名やパラメータを埋め込めるようなプレースホルダーを含み、以下の必須項目を網羅している必要があります：
     - ワークフローの機能と目的の簡潔な説明
     - 導入ステップ (ファイル配置パス、`uses`構文、リポジトリ参照)
     - 必須/オプションの`inputs`パラメータとその説明、設定例
     - 必須`secrets`とその設定方法、GitHubリポジトリへの登録手順
     - 前提条件 (例: 必要なファイル構造、ブランチ名、CodeQL CLIのインストールなど、ワークフロー固有の要件)
     - 動作確認方法 (例: トリガーイベント、出力ファイルの確認)

     確認事項: テンプレートが十分に汎用性があり、各ワークフローに特化した内容ではなく、異なるワークフローに対応できるよう設計されていることを確認してください。ハルシネーションを避け、現在把握している情報に基づいた実用的な項目を含めてください。

     期待する出力: 汎用的な共通ワークフロー導入手順書のMarkdownテンプレートを、適切なタイトルと説明を付けたMarkdown形式のコードブロックで出力してください。

---
Generated at: 2025-09-13 07:04:59 JST

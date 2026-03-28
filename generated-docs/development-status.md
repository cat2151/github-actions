Last updated: 2026-03-29

# Development Status

## 現在のIssues
- [Issue #57](../issue-notes/57.md) では、`cargo install`運用しているRustプロジェクトへの`rust-fmt`と`cargo check`ワークフロー導入の検証が求められています。
- [Issue #13](../issue-notes/13.md) は、`issue-note`アクションを他のプロジェクトからより利用しやすくするための導入手順ドキュメント整備を進める課題です。
- [Issue #11](../issue-notes/11.md) は、`translate`アクションの他プロジェクトからの利用改善と導入手順ドキュメント作成、およびプロンプトの外部指定化を検討しています。

## 次の一手候補
1. [Issue #57](../issue-notes/57.md): `cargo install` Rustプロジェクトへのfmt/checkワークフロー導入を検証する
   - 最初の小さな一歩: 既存のRustフォーマット・チェックワークフロー（`rust-fmt-commit.yml`と`rust-windows-cargo-check.yml`）が、`cargo install`運用されているプロジェクトにどのように適用可能かを分析し、潜在的な課題を特定します。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/rust-fmt-commit.yml, .github/workflows/rust-windows-cargo-check.yml

     実行内容: 提供されたRust関連ワークフロー（`rust-fmt-commit.yml`と`rust-windows-cargo-check.yml`）が、`cargo install`運用されているRustプロジェクト（例: `catrepo`）に適用可能か、またその際の必要な修正点や前提条件（Rustツールのインストール、ワークスペース構造など）を分析してください。特に、`rust-fmt-commit.yml`が`cargo fmt`を実行し、`rust-windows-cargo-check.yml`が`cargo check`を実行する仕組みに注目してください。

     確認事項: 各ワークフローが想定するリポジトリ構造やRustのバージョン、依存関係の解決方法（`cargo install`でインストールされたツールとの競合など）を確認してください。

     期待する出力: `catrepo`のような`cargo install`運用プロジェクトにこれらのワークフローを導入する際の互換性レポートをmarkdown形式で出力してください。レポートには、潜在的な課題と解決策の提案を含めてください。
     ```

2. [Issue #13](../issue-notes/13.md): `issue-note`を他プロジェクトから使いやすくするための導入手順を文書化する
   - 最初の小さな一歩: `issue-note.yml`の共通ワークフローとしての機能と、`issue-notes/3.md`に記載されている過去の共通ワークフロー化の経緯と`actions/github-script`での入力値利用の修正点を分析します。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/issue-note.yml, issue-notes/3.md

     実行内容: `.github/workflows/issue-note.yml`が共通ワークフローとしてどのように機能し、どのような`inputs`と`secrets`を必要とするかを分析してください。特に`issue-notes/3.md`に記載されている共通ワークフロー化の経緯と`actions/github-script@v7`での`inputs`の正しい参照方法（`env`経由）に着目してください。

     確認事項: 共通ワークフローの`inputs`と`outputs`、必要な`permissions`、およびGitHub APIを呼び出すための`secrets`（例: `GITHUB_TOKEN`）の利用状況を確認してください。

     期待する出力: `.github/workflows/issue-note.yml`を外部プロジェクトで`workflow_call`を使って導入するための詳細な手順書をmarkdown形式で生成してください。必須入力パラメータ、必要なシークレット、`github-script`内でのパラメータ利用方法、および`permissions`設定について具体的に記述してください。
     ```

3. [Issue #11](../issue-notes/11.md): `translate`の他プロジェクトからの利用を改善し、導入手順を文書化する
   - 最初の小さな一歩: `translate-readme.yml`が現在どのように外部プロジェクトから利用されるかを分析し、既存の`inputs`と`secrets`の定義、および`TRANSLATION_SETUP.md`の内容を確認します。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/call-translate-readme.yml, .github_automation/translate/scripts/translate-readme.cjs, .github_automation/translate/docs/TRANSLATION_SETUP.md

     実行内容: `.github/workflows/call-translate-readme.yml`が外部プロジェクトから`workflow_call`で利用される際の現在の導入手順と、`inputs`（特にプロンプト関連）の柔軟性について分析してください。`.github_automation/translate/docs/TRANSLATION_SETUP.md`の内容も考慮に入れ、現在の制約や改善点を特定してください。

     確認事項: `call-translate-readme.yml`の`inputs`定義、`.github_automation/translate/scripts/translate-readme.cjs`でのプロンプトの利用方法、および翻訳対象ファイルの特定方法（現時点ではREADME決め打ちとあるが）を確認してください。

     期待する出力: `call-translate-readme.yml`の現在の導入手順の概要と、[Issue #11](../issue-notes/11.md)で言及されている「プロンプトをハードコーディングでなく、promptsに切り出し、呼び出し元ymlから任意のpromptsを指定できるようにする」という改善提案について、技術的な実現可能性と初期の設計案をmarkdown形式で出力してください。
     ```

---
Generated at: 2026-03-29 07:07:40 JST

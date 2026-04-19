Last updated: 2026-04-20

# Development Status

## 現在のIssues
- [Issue #57](../issue-notes/57.md) は、`cargo install`運用されているRustプロジェクトに対して`rust fmt`と`check`のGitHub Actionsワークフローを配置し、動作を検証することが課題です。
- [Issue #13](../issue-notes/13.md) は、`issue-note`生成アクションを他のプロジェクトで利用しやすくするため、詳細な導入手順ドキュメントを作成する必要があります。
- [Issue #11](../issue-notes/11.md) は、`translate`アクションの他プロジェクトでの利用を容易にするために、導入ドキュメントの作成と、プロンプトを外部から指定可能にするための検討が求められています。

## 次の一手候補
1.  [Issue #11](../issue-notes/11.md): `translate`アクションの外部プロジェクト向け導入ドキュメントを作成する
    -   最初の小さな一歩: `translate-readme.yml`を外部プロジェクトで利用するために必要な設定や前提条件を洗い出し、ドキュメントの初期ドラフトを作成します。
    -   Agent実行プロンプ:
        ```
        対象ファイル: .github/workflows/translate-readme.yml, .github/workflows/call-translate-readme.yml, .github_automation/translate/docs/TRANSLATION_SETUP.md

        実行内容: `translate-readme.yml`アクションを外部プロジェクトで利用するための具体的な導入手順書を作成します。これには、必須入力パラメータ（例: `target-branch`）、必要なシークレット（例: `GEMINI_API_KEY`）、およびワークフローファイルを配置する際の前提条件（例: `README.ja.md`の存在）を明確に含めます。既存の`.github_automation/translate/docs/TRANSLATION_SETUP.md`に追記または更新する形で、詳細なステップバイステップガイドを記述してください。

        確認事項: `translate-readme.yml`および`call-translate-readme.yml`の最新の定義と機能を確認し、外部利用時に必要なすべての設定が網羅されているかを確認してください。

        期待する出力: 更新された`.github_automation/translate/docs/TRANSLATION_SETUP.md`の内容をmarkdown形式で出力してください。このドキュメントは、外部プロジェクトのユーザーが`call-translate-readme.yml`を導入し、正しく設定できるための完全なガイドとなるべきです。
        ```

2.  [Issue #13](../issue-notes/13.md): `issue-note`アクションの外部プロジェクト向け導入ドキュメントを作成する
    -   最初の小さな一歩: `issue-note.yml`を外部プロジェクトで利用するために必要な設定や前提条件を洗い出し、新規ドキュメントとして初期ドラフトを作成します。
    -   Agent実行プロンプ:
        ```
        対象ファイル: .github/workflows/issue-note.yml, .github/workflows/call-issue-note.yml

        実行内容: `issue-note.yml`アクションを外部プロジェクトで利用するための具体的な導入手順書を新規ファイルとして作成します。これには、`workflow_call`で必要となる入力パラメータ（例: `issue_title`, `issue_number`, `issue_body`, `issue_url`）、必要なシークレット（例: `GITHUB_TOKEN`）、およびワークフローファイルを配置する際の前提条件を明確に含めます。新規ファイル`.github_automation/issue_note/docs/ISSUE_NOTE_SETUP.md`として作成してください。

        確認事項: `issue-note.yml`および`call-issue-note.yml`の最新の定義と機能を確認し、外部利用時に必要なすべての設定が網羅されているかを確認してください。既存のドキュメントファイル名との重複や適切な配置場所も検討してください。

        期待する出力: 新規作成される`.github_automation/issue_note/docs/ISSUE_NOTE_SETUP.md`の内容をmarkdown形式で出力してください。このドキュメントは、外部プロジェクトのユーザーが`call-issue-note.yml`を導入し、正しく設定できるための完全なガイドとなるべきです。
        ```

3.  [Issue #57](../issue-notes/57.md): Rustプロジェクト`cargo install`用のCIワークフロー検証計画を分析・準備する
    -   最初の小さな一歩: 既存のRust関連ワークフロー（`fmt`, `check`など）を分析し、`cargo install`運用されている外部プロジェクトへの適用に必要な調整点やパラメータ、テスト戦略について調査レポートを作成します。
    -   Agent実行プロンプ:
        ```
        対象ファイル: .github/workflows/rust-fmt-commit.yml, .github/workflows/rust-windows-cargo-check.yml, .github/workflows/rust-windows-check.yml, .github/workflows/call-rust-fmt-commit.yml, .github/workflows/call-rust-windows-cargo-check.yml, .github/workflows/call-rust-windows-check.yml

        実行内容: `rust-fmt-commit.yml`、`rust-windows-cargo-check.yml`、`rust-windows-check.yml`といった既存のRust CIワークフローが、`cargo install`で運用されている外部プロジェクトで`workflow_call`を通じて利用されることを想定し、必要な調整や追加の入力パラメータ、シークレットを洗い出してください。また、これらのワークフローを外部プロジェクトに適用する際のテスト計画（例: どのような環境で、どのような条件下で検証すべきか）に役立つ分析結果をまとめてください。

        確認事項: 各Rust CIワークフローが現在想定している環境（OS、Rustバージョン）、依存関係、および実行されるコマンドのスコープを確認してください。`cargo install`されたプロジェクトの特性（例: バイナリパス、クレート名）を考慮に入れた上で、汎用的な利用が可能か検証してください。

        期待する出力: Rust CIワークフローの外部プロジェクト適用に関する事前調査レポートをmarkdown形式で出力してください。このレポートには、必要な`inputs`、`secrets`、環境設定、および`cargo install`プロジェクトに特有の考慮事項を含め、[Issue #57](../issue-notes/57.md)の検証フェーズへ移行するための具体的な指針を提供してください。
        ```

---
Generated at: 2026-04-20 07:10:51 JST

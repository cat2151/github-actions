Last updated: 2026-04-19

# Development Status

## 現在のIssues
- RustプロジェクトのCI/CD強化として、`cargo install`運用されているリポジトリへの`fmt`と`check`の導入と検証 ([Issue #57](../issue-notes/57.md)) が進行中です。
- GitHub Actionsの再利用可能なワークフローについて、`issue-note` ([Issue #13](../issue-notes/13.md))と`translate` ([Issue #11](../issue-notes/11.md))の外部プロジェクトからの利用を容易にするためのドキュメント整備が必要です。
- 特に`translate`ワークフローでは、`prompt`の外部指定による柔軟性向上も検討されています。

## 次の一手候補
1. [Issue #13](../issue-notes/13.md): issue-note を他projectから使いやすくするための導入手順書作成
   - 最初の小さな一歩: `issue-note.yml` ワークフローの機能と `workflow_call` の入力パラメータを分析し、外部プロジェクトが利用するための導入手順書のドラフトを作成する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/issue-note.yml, issue-notes/3.md

     実行内容: .github/workflows/issue-note.yml の workflow_call セクション、特に inputs および secrets 定義、そして issue-notes/3.md に記載されている共通ワークフロー化の経緯と修正内容を詳細に分析し、外部プロジェクトがこのワークフローを呼び出す際に必要な設定項目（入力パラメータ、シークレット、前提条件）を洗い出してください。

     確認事項: .github/workflows/issue-note.yml が最新の共通ワークフローの形になっているか確認してください。issue-notes/3.md の内容と実際の .github/workflows/issue-note.yml の整合性を確認してください。

     期待する出力: 外部プロジェクトが issue-note.yml を導入する際の手順書をmarkdown形式で生成してください。具体的には：必須パラメータの設定方法、シークレットの登録手順、前提条件の確認項目（例: issue-notes ディレクトリの存在など）を含めてください。
     ```

2. [Issue #11](../issue-notes/11.md): translate を他projectから使いやすくするための導入手順書作成とPromptの柔軟性確認
   - 最初の小さな一歩: `translate-readme.yml` ワークフローの機能と `workflow_call` の入力パラメータを分析し、外部プロジェクトが利用するための導入手順書のドラフトを作成する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/translate-readme.yml, .github_automation/translate/docs/TRANSLATION_SETUP.md, issue-notes/11.md

     実行内容: .github/workflows/translate-readme.yml の workflow_call セクション、特に inputs および secrets 定義、そして .github_automation/translate/docs/TRANSLATION_SETUP.md の内容を詳細に分析し、外部プロジェクトがこのワークフローを呼び出す際に必要な設定項目（入力パラメータ、シークレット、前提条件）を洗い出してください。また、issue-notes/11.md で言及されている prompt のパラメータ化の現状も確認してください。

     確認事項: .github/workflows/translate-readme.yml が最新の共通ワークフローの形になっているか確認してください。TRANSLATION_SETUP.md の内容と実際の .github/workflows/translate-readme.yml の整合性を確認してください。

     期待する出力: 外部プロジェクトが translate-readme.yml を導入する際の手順書をmarkdown形式で生成してください。具体的には：必須パラメータの設定方法、シークレットの登録手順、前提条件の確認項目（例: README.ja.md の存在など）を含めてください。また、prompt パラメータ化の現状と今後の課題について簡潔にまとめてください。
     ```

3. [Issue #57](../issue-notes/57.md): Rust CIワークフローの外部利用可能性の調査
   - 最初の小さな一歩: プロジェクト内のRust関連CIワークフロー (`rust-windows-check.yml`, `rust-windows-cargo-check.yml`, `rust-fmt-commit.yml`) をレビューし、これらのワークフローが他のリポジトリから `workflow_call` で利用可能かどうか、またその利用方法の概要を把握する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/rust-windows-check.yml, .github/workflows/rust-windows-cargo-check.yml, .github/workflows/rust-fmt-commit.yml

     実行内容: 各Rust CIワークフローファイルの内容を分析し、特に on: workflow_call: の定義、必要な inputs および secrets、そして実行されるステップ（cargo fmt, cargo check, cargo test など）を確認してください。

     確認事項: これらのワークフローが実際に workflow_call を使用して他のリポジトリから呼び出されることを想定しているか、またそのための準備（例えば、適切な permissions 設定や paths の調整など）がされているか確認してください。

     期待する出力: 各Rust CIワークフロー（rust-windows-check.yml, rust-windows-cargo-check.yml, rust-fmt-commit.yml）を外部プロジェクトから利用する際の主要な inputs と secrets の一覧、および各ワークフローが実行する主要なアクション（例: fmt の実行、check の実行、test の実行）をまとめたマークダウン形式のサマリを生成してください。

---
Generated at: 2026-04-19 07:10:00 JST

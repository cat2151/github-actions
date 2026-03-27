Last updated: 2026-03-28

# Development Status

## 現在のIssues
- [Issue #57](../issue-notes/57.md) では、`cargo install`運用されているRustプロジェクトに対し、`rust-fmt`と`rust-check`のGitHub Actionsワークフローを配置し検証する作業が残されています。
- [Issue #13](../issue-notes/13.md) では、`issue-note`アクションを他プロジェクトで容易に利用できるようにするための導入手順書の作成が課題となっています。
- [Issue #11](../issue-notes/11.md) では、`translate`アクションの他プロジェクトからの利用を促進するための導入手順書の整備と、プロンプトの柔軟な指定を可能にする機能改善が検討されています。

## 次の一手候補
1.  [Issue #57](../issue-notes/57.md): Rustのfmtとcheckワークフローをcatrepoで検証する
    -   最初の小さな一歩: プロジェクト内に`rust-fmt-commit.yml`と`rust-windows-cargo-check.yml`を呼び出すテスト用ワークフローファイルを作成し、GitHub Actionsが動作することを確認する。
    -   Agent実行プロンプト:
        ```
        対象ファイル: .github/workflows/call-rust-fmt-commit.yml, .github/workflows/call-rust-windows-cargo-check.yml, .github/workflows/temp-test-rust-workflows.yml (新規作成)

        実行内容: 現在のプロジェクトにRustコードが存在する場合、またはテスト用にダミーのRustファイルを作成し、そのRustコードに対して`.github/workflows/call-rust-fmt-commit.yml`と`.github/workflows/call-rust-windows-cargo-check.yml`を呼び出すテスト用ワークフロー`.github/workflows/temp-test-rust-workflows.yml`の作成案を提示してください。
        この提案には、呼び出しに必要な`inputs`と`secrets`の設定例を含めてください。

        確認事項: `call-rust-fmt-commit.yml`と`call-rust-windows-cargo-check.yml`が`workflow_call`で正しく`inputs`と`secrets`を受け取れる構造になっているかを確認してください。既存のRust関連ワークフローの成功履歴も考慮してください。

        期待する出力: テスト用ワークフロー`.github/workflows/temp-test-rust-workflows.yml`のYAML定義案、およびそのワークフローを実際に実行して動作を検証する際の手順と注意点をまとめたmarkdown形式のドキュメント。
        ```

2.  [Issue #13](../issue-notes/13.md): issue-noteアクションの導入手順書を作成する
    -   最初の小さな一歩: `.github/workflows/issue-note.yml`の`workflow_call`定義を詳細に分析し、外部プロジェクトで利用するために必須となる`inputs`と`secrets`、および前提となるファイル構成を特定する。
    -   Agent実行プロンプト:
        ```
        対象ファイル: .github/workflows/issue-note.yml

        実行内容: `.github/workflows/issue-note.yml`を外部プロジェクトで`workflow_call`経由で利用する際に必要な設定項目（必須入力パラメータ、必須シークレット、ファイル配置の前提条件、外部プロジェクトでの利用時に必要な追加設定や考慮事項）を洗い出し、markdown形式で出力してください。

        確認事項: `issue-note.yml`の`on: workflow_call:`セクションで定義されている`inputs`と`secrets`を正確に把握してください。また、`issue-note.yml`内部のスクリプトが依存する環境変数やファイルパスについても確認してください。

        期待する出力: 外部プロジェクトが`.github/workflows/issue-note.yml`を導入する際の手順書をmarkdown形式で生成してください。具体的には：必須パラメータの設定方法、シークレットの登録手順、前提条件の確認項目、およびトラブルシューティングのヒントを含めてください。
        ```

3.  [Issue #11](../issue-notes/11.md): translateアクションの導入手順書作成とプロンプトの柔軟化を検討する
    -   最初の小さな一歩: `translate-readme.yml`と関連スクリプトを調査し、現在の`workflow_call`で設定可能な項目と、プロンプトがハードコーディングされている箇所を特定する。
    -   Agent実行プロンプト:
        ```
        対象ファイル: .github/workflows/translate-readme.yml, .github_automation/translate/scripts/translate-readme.cjs, .github_automation/translate/docs/TRANSLATION_SETUP.md

        実行内容: `translate-readme.yml`を外部プロジェクトで利用する際に必要な設定項目（必須入力パラメータ、必須シークレット、ファイル配置の前提条件）を洗い出し、その導入手順の叩き台を作成してください。
        さらに、`.github_automation/translate/scripts/translate-readme.cjs`内でプロンプトがどのように定義され、利用されているかを分析し、現状でプロンプトを外部から柔軟に指定可能にするための技術的実現可能性とその実装に必要な変更点をmarkdown形式で出力してください。

        確認事項: `translate-readme.yml`の`workflow_call`の`inputs`と`secrets`の定義を確認し、既存のドキュメント`.github_automation/translate/docs/TRANSLATION_SETUP.md`の内容と突き合わせて不足している情報を特定してください。スクリプトがGemini APIキーをどのように利用しているかも確認してください。

        期待する出力:
        1.  外部プロジェクトが`translate-readme.yml`を導入する際の手順書（必須パラメータ、シークレット、前提条件を含む）の叩き台をmarkdown形式で生成。
        2.  プロンプトの外部指定化に関する技術的分析結果と、その実装に必要な作業の概要、およびその難易度や代替案（もしあれば）をまとめたmarkdown形式のドキュメント。

---
Generated at: 2026-03-28 07:08:45 JST

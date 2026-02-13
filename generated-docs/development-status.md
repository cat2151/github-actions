Last updated: 2026-02-14

# Development Status

## 現在のIssues
- [Issue #13](../issue-notes/13.md) は、`issue-note` ワークフローを他のプロジェクトで利用しやすくするため、導入手順のドキュメント化が求められています。
- [Issue #11](../issue-notes/11.md) は、`translate` ワークフローの他プロジェクトからの使いやすさを向上させるため、導入手順書の作成と、プロンプトの外部化・スクリプト整理が課題として挙げられています。
- 共通ワークフローの利用を促進するためのドキュメント整備が、現在の主要なタスクとなっています。

## 次の一手候補
1.  [Issue #13](../issue-notes/13.md): `issue-note` ワークフローの利用手順書を作成する
    -   最初の小さな一歩: `issue-note` 共通ワークフローの導入手順に関する初期ドラフトをMarkdownファイルとして作成し始める。
    -   Agent実行プロンプ:
        ```
        対象ファイル: .github/workflows/issue-note.yml, .github/workflows/call-issue-note.yml, issue-notes/3.md

        実行内容: .github/workflows/issue-note.yml で定義されている共通ワークフローを外部プロジェクトから利用するための手順書をMarkdown形式で作成してください。issue-notes/3.md の共通ワークフロー化の経緯も参考にし、必須入力パラメータ、シークレット、ファイル配置の前提条件、および外部プロジェクトでの利用時に必要な追加設定を含めてください。

        確認事項: `issue-note.yml` の `workflow_call` セクションで定義されている `inputs` と `secrets` を正確に洗い出し、それぞれの意味と設定方法を明確に記述してください。

        期待する出力: `docs/setup-issue-note-workflow.md` というファイル名で、`issue-note` ワークフローの導入手順書をMarkdown形式で出力してください。
        ```

2.  [Issue #11](../issue-notes/11.md): `translate` ワークフローの利用手順書を作成する
    -   最初の小さな一歩: `translate` 共通ワークフローの導入手順に関する初期ドラフトをMarkdownファイルとして作成し始める。
    -   Agent実行プロンプト:
        ```
        対象ファイル: .github/workflows/translate-readme.yml, .github/workflows/call-translate-readme.yml, .github_automation/translate/docs/TRANSLATION_SETUP.md, issue-notes/11.md

        実行内容: .github/workflows/translate-readme.yml で定義されている共通ワークフローを外部プロジェクトから利用するための手順書をMarkdown形式で作成してください。issue-notes/11.md に記載された課題や、既存の `TRANSLATION_SETUP.md` の内容も考慮し、必須入力パラメータ、シークレット、ファイル配置の前提条件（例: `README.ja.md`の存在）、および外部プロジェクトでの利用時に必要な追加設定を含めてください。

        確認事項: `translate-readme.yml` の `workflow_call` セクションで定義されている `inputs` と `secrets` を正確に洗い出し、それぞれの意味と設定方法を明確に記述してください。

        期待する出力: `docs/setup-translate-workflow.md` というファイル名で、`translate` ワークフローの導入手順書をMarkdown形式で出力してください。
        ```

3.  [Issue #11](../issue-notes/11.md): `translate` ワークフローのプロンプト外部化とスクリプト整理に着手する
    -   最初の小さな一歩: `translate-readme.cjs` スクリプト内で使用されているプロンプト文字列を特定し、その外部化の可能性を調査する。
    -   Agent実行プロンプト:
        ```
        対象ファイル: .github/workflows/translate-readme.yml, .github_automation/translate/scripts/translate-readme.cjs, .github_automation/project_summary/prompts/development-status-prompt.md

        実行内容: `translate-readme.cjs` スクリプト内でハードコーディングされているプロンプト文字列を特定し、それを外部のMarkdownファイル（例: `.github_automation/translate/prompts/translate-readme-prompt.md`）に切り出すための具体的な変更点を分析してください。また、`translate-readme.yml` からこの外部プロンプトファイルを `inputs` を通じて動的に指定できるようにするための `workflow_call` の修正案、および `translate-readme.cjs` 内でのプロンプト読み込み方法の変更点を検討してください。

        確認事項: プロンプトの外部化が現在の翻訳ロジックに影響を与えないこと、および `workflow_call` の `inputs` を拡張する際の互換性を確認してください。既存の `development-status-prompt.md` のような外部プロンプトの管理方法を参考にしてください。

        期待する出力: プロンプトの外部化と動的な指定を可能にするための技術的な検討結果をMarkdown形式で出力してください。具体的には、変更が必要なファイルとコードスニペット、およびその変更の理由を詳細に記述してください。

---
Generated at: 2026-02-14 07:10:02 JST

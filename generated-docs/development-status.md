Last updated: 2025-11-10

# Development Status

## 現在のIssues
- [Issue #13](../issue-notes/13.md) では、`issue-note`生成アクションを他のプロジェクトで容易に利用できるよう、詳細な導入手順書の作成が主な課題です。
- [Issue #11](../issue-notes/11.md) では、翻訳アクションの導入手順書作成に加え、プロンプトのハードコーディングを解消し外部から指定可能にする改善が検討されています。
- 現在、これら共通ワークフローの導入ドキュメント整備と機能改善が優先課題となっています。

## 次の一手候補
1. [Issue #11](../issue-notes/11.md) 翻訳アクションの導入手順書作成
   - 最初の小さな一歩: `.github_automation/translate/docs/TRANSLATION_SETUP.md` を参考に、`call-translate-readme.yml` を外部プロジェクトで利用する際に必要な設定項目（パラメータ、シークレット、ファイル配置）を洗い出し、手順書の骨子を作成する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/translate/docs/TRANSLATION_SETUP.md, .github/workflows/call-translate-readme.yml

     実行内容: `call-translate-readme.yml`を外部プロジェクトから利用するための手順書をMarkdown形式で生成してください。この手順書には、必須入力パラメータ（例: `target-branch`）、必須シークレット（例: `GEMINI_API_KEY`）、ファイル配置の前提条件（例: `README.ja.md`の存在）、および外部プロジェクトで利用する際に必要な追加設定を具体的に記述してください。

     確認事項: 既存のREADME翻訳ワークフローの動作原理と、関連するGitHub Actionsファイル（`translate-readme.yml`など）との整合性を確認してください。

     期待する出力: 外部プロジェクトがこの`call-translate-readme.yml`を導入する際の手順書をmarkdown形式で生成してください。
     ```

2. [Issue #13](../issue-notes/13.md) issue-noteアクションの導入手順書作成
   - 最初の小さな一歩: 既存の`issue-note.yml`の動作と、[Issue #3](../issue-notes/3.md)での共通ワークフロー化の経緯を参照し、`call-issue-note.yml`の外部プロジェクト向け導入手順書の骨子を作成する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/call-issue-note.yml, issue-notes/3.md

     実行内容: `call-issue-note.yml`を外部プロジェクトから利用するための手順書をMarkdown形式で生成してください。手順書には、必要な入力パラメータ（例: `issue_title`, `issue_number`）、必須シークレット（例: `GITHUB_TOKEN`）、および`actions/github-script`における`inputs`の参照方法（`env`経由の利用など、[Issue #3](../issue-notes/3.md)で指摘された点）を考慮して詳述してください。

     確認事項: 既存のissue-note生成ワークフローの動作、特に[Issue #3](../issue-notes/3.md)で解決された`actions/github-script`内での変数参照の問題点と、関連ファイルの整合性を確認してください。

     期待する出力: 外部プロジェクトが`call-issue-note.yml`を導入する際の手順書をmarkdown形式で生成してください。
     ```

3. [Issue #11](../issue-notes/11.md) 翻訳プロンプトの外部化と設定可能化の検討
   - 最初の小さな一歩: `.github_automation/translate/scripts/translate-readme.cjs` 内で翻訳プロンプトがハードコードされている箇所を特定し、外部ファイルからの読み込み、または`workflow_call`の`inputs`として受け取れるようにするための改修計画の初案を文書化する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/translate/scripts/translate-readme.cjs, .github/workflows/translate-readme.yml, .github/workflows/call-translate-readme.yml

     実行内容: `translate-readme.cjs`内で現在ハードコードされている翻訳プロンプトを外部のMarkdownファイル（例: `.github_automation/translate/prompts/translate-readme-prompt.md`）から読み込む形にリファクタリングするための詳細な計画をMarkdown形式で提案してください。また、`call-translate-readme.yml`が`workflow_call`の`inputs`を通じてこのプロンプトファイルを指定できるようにする修正案も含めてください。

     確認事項: プロンプトの外部化が翻訳ロジックに影響を与えないこと、および既存のワークフローが引き続き期待通りに動作することを確認してください。

     期待する出力: プロンプト外部化のための詳細なリファクタリング計画と、関連するワークフローファイル（`translate-readme.yml`, `call-translate-readme.yml`）の修正案をmarkdown形式で生成してください。
     ```

---
Generated at: 2025-11-10 07:04:58 JST

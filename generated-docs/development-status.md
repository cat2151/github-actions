Last updated: 2025-10-15

# Development Status

## 現在のIssues
- [Issue #13](../issue-notes/13.md)では、`issue-note`アクションを他プロジェクトで利用しやすくするための導入手順書の作成が主なタスクです。
- [Issue #11](../issue-notes/11.md)では、`translate`アクションのプロンプトの外部化と、同様に他プロジェクトでの導入手順書の作成が課題となっています。
- 両Issueともに、GitHub Actionsの再利用性を高めるためのドキュメント整備と機能改善が現在の開発の中心です。

## 次の一手候補
1. [Issue #13](../issue-notes/13.md) issue-noteアクションの導入手順書を生成する
   - 最初の小さな一歩: `issue-note.yml`の`workflow_call`の`inputs`と`secrets`セクションを分析し、外部利用に必要なパラメータを特定する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/issue-note.yml

     実行内容: 対象ファイルについて、外部プロジェクトから利用する際に必要な設定項目を洗い出し、以下の観点から分析してください：
     1) 必須入力パラメータ
     2) 必須シークレット
     3) ファイル配置の前提条件

     確認事項: 作業前に、`issue-note.yml`が`github.event.issue`ではなく`workflow_call`の`inputs`経由で値を受け取っていることを確認してください。また、生成されるドキュメントが、現在の`issue-notes/13.md`に記載されている「call導入手順を書く」という目的を達成しているかを確認してください。

     期待する出力: `issue-note`アクションを外部プロジェクトが導入する際の手順書の草案をmarkdown形式で生成してください。具体的には：必須パラメータの設定方法、シークレットの登録手順、前提条件の確認項目を含めてください。
     ```

2. [Issue #11](../issue-notes/11.md) translateアクションの導入手順書を生成する
   - 最初の小さな一歩: `translate-readme.yml`の`workflow_call`の`inputs`と`secrets`セクションを分析し、外部利用に必要なパラメータを特定する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/call-translate-readme.yml

     実行内容: 対象ファイルについて、外部プロジェクトから利用する際に必要な設定項目を洗い出し、以下の観点から分析してください：
     1) 必須入力パラメータ（target-branch等）
     2) 必須シークレット（GEMINI_API_KEY）
     3) ファイル配置の前提条件（README.ja.mdの存在）

     確認事項: 作業前に、`translate-readme.yml`が`github.event.issue`ではなく`workflow_call`の`inputs`経由で値を受け取っていること、また必要なシークレット（例: `GEMINI_API_KEY`）が定義されていることを確認してください。生成されるドキュメントが、現在の`issue-notes/11.md`に記載されている「call導入手順を書く」という目的を達成しているかを確認してください。

     期待する出力: `translate-readme`アクションを外部プロジェクトが導入する際の手順書の草案をmarkdown形式で生成してください。具体的には：必須パラメータの設定方法、シークレットの登録手順、前提条件の確認項目を含めてください。
     ```

3. [Issue #11](../issue-notes/11.md) translateアクションのプロンプトを外部ファイルに切り出す
   - 最初の小さな一歩: `.github_automation/translate/scripts/translate-readme.cjs`スクリプト内でハードコーディングされている翻訳プロンプト箇所を特定する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/translate/scripts/translate-readme.cjs
                 .github/workflows/call-translate-readme.yml

     実行内容: 対象ファイル内の翻訳プロンプトがハードコーディングされている箇所を特定し、そのプロンプトの内容を`.github_automation/translate/prompts/translate-readme-prompt.md`のような外部ファイルに切り出すための変更点を分析してください。その後、`call-translate-readme.yml`に`prompt-path`のようなinputを追加し、このinputで指定されたプロンプトファイルを`translate-readme.cjs`が読み込むようにする改修案を検討してください。

     確認事項: 現在のプロンプトがどのように利用されているか（例: `gemini-api`への渡し方）を把握し、外部化後も同様に機能することを保証してください。また、プロンプトの外部化によって、既存の翻訳ロジックが意図せず変更されないことを確認してください。

     期待する出力: `translate-readme.cjs`のプロンプト外部化のための具体的なコード変更案と、`call-translate-readme.yml`に`inputs`を追加し、そのinputを`translate-readme.cjs`に渡すための変更案をmarkdown形式で出力してください。

---
Generated at: 2025-10-15 07:05:47 JST

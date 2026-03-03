Last updated: 2026-03-04

# Development Status

## 現在のIssues
- GitHub Actionsの`issue-note` ([Issue #13](../issue-notes/13.md)) と `translate` ([Issue #11](../issue-notes/11.md)) アクションを他のプロジェクトからより使いやすくするための改善が進行中です。
- これら2つのアクションについて、外部プロジェクトが導入する際の具体的な手順書のドキュメント化が主要なタスクとして挙げられています。
- `translate`アクションでは、プロンプトのハードコーディングを避け、外部ファイルから柔軟に指定できるようにする課題も検討されています。

## 次の一手候補
1. `translate`アクションの外部プロジェクト向け導入手順をドキュメント化する ([Issue #11](../issue-notes/11.md))
   - 最初の小さな一歩: `.github_automation/translate/docs/TRANSLATION_SETUP.md` ファイルを新規作成し、`translate-readme.yml` を利用する際に必要な基本情報を記述する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/translate-readme.yml および .github_automation/translate/docs/TRANSLATION_SETUP.md (新規作成)

     実行内容: .github/workflows/translate-readme.yml を外部プロジェクトから `workflow_call` で利用する際の導入手順を分析し、.github_automation/translate/docs/TRANSLATION_SETUP.md にMarkdown形式で記述してください。具体的には、必要な `inputs`、`secrets` (`GEMINI_API_KEY`)、および前提条件 (`README.ja.md` の存在) を含めてください。

     確認事項: `translate-readme.yml` の `workflow_call` 定義と、`translate-readme.cjs` スクリプトが参照する環境変数や入力が整合しているかを確認してください。

     期待する出力: .github_automation/translate/docs/TRANSLATION_SETUP.md ファイルの新規作成または更新。
     ```

2. `issue-note`アクションの外部プロジェクト向け導入手順をドキュメント化する ([Issue #13](../issue-notes/13.md))
   - 最初の小さな一歩: `.github_automation/issue_note/docs/ISSUE_NOTE_SETUP.md` ファイルを新規作成し、`issue-note.yml` を利用する際に必要な基本情報を記述する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/issue-note.yml および .github_automation/issue_note/docs/ISSUE_NOTE_SETUP.md (新規作成)

     実行内容: .github/workflows/issue-note.yml を外部プロジェクトから `workflow_call` で利用する際の導入手順を分析し、.github_automation/issue_note/docs/ISSUE_NOTE_SETUP.md にMarkdown形式で記述してください。具体的には、必要な `inputs` (`issue_title`, `issue_number`など) と `secrets` (`GITHUB_TOKEN`)、およびアクションの動作に関する前提条件を含めてください。

     確認事項: `issue-note.yml` の `workflow_call` 定義と、`actions/github-script` 内で利用される `inputs` が整合しているかを確認してください。特に、[Issue #3](../issue-notes/3.md) で修正された `env` 経由での `inputs` 利用方法を考慮してください。

     期待する出力: .github_automation/issue_note/docs/ISSUE_NOTE_SETUP.md ファイルの新規作成。
     ```

3. `translate`アクションのプロンプトを外部ファイルに切り出し、柔軟に指定可能にする ([Issue #11](../issue-notes/11.md))
   - 最初の小さな一歩: 現在 `.github_automation/translate/scripts/translate-readme.cjs` 内にハードコードされている可能性のあるプロンプト文字列を特定する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/translate/scripts/translate-readme.cjs および .github/workflows/translate-readme.yml

     実行内容: .github_automation/translate/scripts/translate-readme.cjs 内でプロンプトとして利用されている文字列を特定し、その文字列を外部のMarkdownファイル（例: `.github_automation/translate/prompts/translate-readme-prompt.md`）に切り出すための変更点を分析してください。さらに、`translate-readme.yml` の `workflow_call` に `prompt_file_path` のような `input` を追加し、スクリプトがその `input` で指定されたプロンプトファイルを読み込むようにする変更案を検討してください。

     確認事項: プロンプトの切り出しと読み込み方法が、既存の翻訳ロジックに影響を与えないことを確認してください。また、新しい `input` が既存のワークフロー呼び出しと競合しないことを確認してください。

     期待する出力: `translate-readme.cjs` と `translate-readme.yml` の変更案をMarkdown形式で提示し、プロンプトの切り出し元となる文字列と、新しいプロンプトファイルのパス、`yml` での `input` の追加方法を具体的に記述してください。

---
Generated at: 2026-03-04 07:08:11 JST

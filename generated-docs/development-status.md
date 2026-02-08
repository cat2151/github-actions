Last updated: 2026-02-09

# Development Status

## 現在のIssues
- [Issue #30](../issue-notes/30.md)では、進捗状況生成時に対応するissue-notesファイルが存在しない場合にエラー終了してしまう問題への対処が必要です。
- [Issue #13](../issue-notes/13.md)は、`issue-note`ワークフローを他プロジェクトで利用しやすくするための導入手順書の作成を求めています。
- [Issue #11](../issue-notes/11.md)では、`translate`ワークフローの外部プロジェクトからの利用を容易にするためのドキュメント化と、未実施の改善（プロンプトの切り出し等）が残っています。

## 次の一手候補
1. [Issue #30](../issue-notes/30.md) 進捗状況生成時のissue-notes不在エラーを修正
   - 最初の小さな一歩: `IssueTracker.cjs`において、issue-notesが存在しない場合にエラーとせず、空文字列として扱うようにコードを修正する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/actions-tmp/.github_automation/project_summary/scripts/development/IssueTracker.cjs

     実行内容: 対象ファイル内の、issueに紐づくissue-notesが存在しない場合に処理がエラー終了する箇所を特定し、その場合に空文字列として扱うよう修正してください。

     確認事項: 既存の進捗状況生成ロジックに予期せぬ影響を与えないこと。issue-notesが存在しない場合でも進捗状況の生成プロセスが中断されないことを確認してください。

     期待する出力: 修正された`.github/actions-tmp/.github_automation/project_summary/scripts/development/IssueTracker.cjs`ファイル。
     ```

2. [Issue #11](../issue-notes/11.md) translateワークフローの外部利用ドキュメント作成とプロンプトの外部化検討
   - 最初の小さな一歩: `translate`ワークフローを外部プロジェクトで利用するための導入手順書を`.github_automation/translate/docs/TRANSLATION_SETUP.md`に追記し、スクリプト内のハードコードされたプロンプトの有無を確認して外部化の可能性を分析する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/actions-tmp/.github_automation/translate/docs/TRANSLATION_SETUP.md, .github/actions-tmp/.github/workflows/translate-readme.yml, .github/actions-tmp/.github_automation/translate/scripts/translate-readme.cjs

     実行内容: `TRANSLATION_SETUP.md`に対し、`translate`ワークフローを外部プロジェクトから利用する際に必要な設定項目（必須入力パラメータ、必須シークレット、前提条件、外部プロジェクトでの利用時に必要な追加設定）を追記してください。また、`translate-readme.cjs`内にハードコーディングされたプロンプトがないかを確認し、もし存在する場合はその箇所と、外部ファイルに切り出すための変更案を提示してください。

     確認事項: ドキュメントが現在のワークフローの実装と乖離がないか。プロンプトの外部化がワークフローの柔軟性を高めつつ、後方互換性を維持できるか。

     期待する出力: 更新された`.github/actions-tmp/.github_automation/translate/docs/TRANSLATION_SETUP.md`ファイル。および、`translate-readme.cjs`のプロンプト切り出しに関する分析結果と提案をmarkdown形式で出力してください。
     ```

3. [Issue #13](../issue-notes/13.md) issue-noteワークフローの他プロジェクト利用手順書作成
   - 最初の小さな一歩: `issue-note`ワークフローを外部プロジェクトから利用するための詳細な導入手順書を新規作成し、適切なドキュメントディレクトリに配置する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/actions-tmp/.github/workflows/issue-note.yml, .github/actions-tmp/.github/workflows/call-issue-note.yml
     （新規作成されるドキュメントファイル例: .github_automation/project_summary/docs/issue-note-setup.md）

     実行内容: `issue-note.yml`と`call-issue-note.yml`を分析し、外部プロジェクトがこの`issue-note`ワークフローを導入する際に必要な設定項目を洗い出してください。具体的には、必須入力パラメータ、必須シークレット、ファイル配置の前提条件、外部プロジェクトでの利用時に必要な追加設定を含めてください。これらの情報を元に、導入手順書をmarkdown形式で生成し、`.github_automation/project_summary/docs/issue-note-setup.md`として保存する案を提案してください。

     確認事項: ドキュメントが現在の共通ワークフローの実装と乖離がなく、利用者が迷うことなく導入できる具体的な手順が記載されているか。

     期待する出力: `issue-note`ワークフローの導入手順をまとめたmarkdown形式のファイルの内容（例: `.github_automation/project_summary/docs/issue-note-setup.md`）。

---
Generated at: 2026-02-09 07:07:21 JST

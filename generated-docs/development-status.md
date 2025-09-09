Last updated: 2025-09-09

# Development Status

## 現在のIssues
- [Issue #21](../issue-notes/21.md) は、development-status生成プロンプトにプロジェクトのファイル一覧を含めることで、Geminiの生成品質向上を試みています。
- [Issue #20](../issue-notes/20.md) は、issue-notesで言及されたファイルのコンテンツをdevelopment-status生成プロンプトに添付し、Geminiの生成品質向上を図っています。
- [Issue #16](../issue-notes/16.md) は、issue-note, project-summary, translate, callgraphの共通ワークフローを`tonejs-mml-to-json`プロジェクトから呼び出すように移行し、動作検証を進めています。

## 次の一手候補
1. [Issue #20](../issue-notes/20.md) のファイル内容添付機能の最終テストとクローズ
   - 最初の小さな一歩: `issue-notes/20.md` に記載されているバグ（プレースホルダーの誤置換、不要ファイルの添付）が修正されているか、`daily-project-summary` ワークフローを手動実行し、生成された `development-status.md` と `development-status-generated-prompt.md` の内容を確認します。
   - Agent実行プロンプ:
     ```
     対象ファイル:
     - `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`
     - `.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs`
     - `.github_automation/project_summary/prompts/development-status-prompt.md`
     - `issue-notes/20.md` (テスト対象のIssueノート)
     - `generated-docs/development-status.md` (生成結果)
     - `generated-docs/development-status-generated-prompt.md` (生成されたプロンプト)

     実行内容:
     [Issue #20](../issue-notes/20.md) で報告された「issue-notesにあるプレースホルダーが置換される」および「issue-notesで言及されていないファイルまで添付される」バグが、最新のコミット `55c1187` で修正されているかを確認してください。具体的には、
     1. `daily-project-summary.yml` ワークフローを手動で実行する。
     2. 生成された `generated-docs/development-status-generated-prompt.md` を開き、以下の点を検証する。
        - `# 開発状況生成プロンプト（開発者向け）` セクションにあるプレースホルダー（例：`${projectFiles}`など）が、意図しない場所（特にIssue #20の本文内）で置換されていないことを確認する。
        - `## ドキュメントで言及されているファイルの内容` セクションに、`issue-notes/20.md` で明示的に言及されているファイル（例：`.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`など）の内容のみが適切に添付されており、関係ないファイルの内容が含まれていないことを確認する。

     確認事項:
     - `DevelopmentStatusGenerator.cjs` と `ProjectFileUtils.cjs` の最新のコードベースで実行されていること。
     - `issue-notes/20.md` がテスト対象のIssueとして参照されていること。
     - プロンプトのプレースホルダー置換ロジックが意図通りに機能しているか。
     - ファイル内容添付の対象が適切に絞られているか。

     期待する出力:
     検証結果と、[Issue #20](../issue-notes/20.md) をクローズできるかどうかの判断（クローズ可能であれば、その理由）。もし問題が見つかった場合は、具体的な問題点と修正の提案をMarkdown形式で出力してください。
     ```

2. [Issue #21](../issue-notes/21.md) の `project-overview.md` 添付機能の最終テストとクローズ
   - 最初の小さな一歩: `daily-project-summary` ワークフローを手動実行し、生成された `development-status.md` と `development-status-generated-prompt.md` の内容を確認します。特に、プロジェクトファイル一覧の生成と添付が適切に行われているか、また `.git` や `node_modules` などの不要なディレクトリが除外されているかを確認します。
   - Agent実行プロンプ:
     ```
     対象ファイル:
     - `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`
     - `.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs`
     - `.github_automation/project_summary/prompts/development-status-prompt.md`
     - `generated-docs/development-status.md` (生成結果)
     - `generated-docs/development-status-generated-prompt.md` (生成されたプロンプト)
     - `generated-docs/project-overview.md` (参照される可能性のあるファイル)

     実行内容:
     [Issue #21](../issue-notes/21.md) の課題（開発状況生成プロンプトへのプロジェクトファイル一覧添付、`project-overview.md` への依存回避、不要ファイル（`.git/`, `node_modules/`）の除外）が、最新のコミットで適切に実装され、機能しているかを確認してください。具体的には、
     1. `daily-project-summary.yml` ワークフローを手動で実行する。
     2. 生成された `generated-docs/development-status-generated-prompt.md` を開き、`## プロジェクトのファイル一覧` セクションにプロジェクト内のファイル一覧が正確に表示されており、`.git/` や `node_modules/` ディレクトリ内のファイルが含まれていないことを確認する。
     3. `generated-docs/development-status.md` の品質が、この変更によって向上しているかどうかを定性的に評価する（AIの生成品質は直接評価できないが、コンテキストが適切に渡されているかを確認する）。

     確認事項:
     - `DevelopmentStatusGenerator.cjs` と `ProjectFileUtils.cjs` の最新のコードベースで実行されていること。
     - プロジェクトファイル一覧の収集ロジックが意図通りに機能し、除外すべきファイルが正しく処理されているか。
     - 生成された開発状況が、より豊富なコンテキスト（ファイル一覧）に基づいているか。

     期待する出力:
     検証結果と、[Issue #21](../issue-notes/21.md) をクローズできるかどうかの判断（クローズ可能であれば、その理由）。もし問題が見つかった場合は、具体的な問題点と修正の提案をMarkdown形式で出力してください。
     ```

3. [Issue #16](../issue-notes/16.md) の `issue-note` ワークフローを `tonejs-mml-to-json` プロジェクトに導入
   - 最初の小さな一歩: `tonejs-mml-to-json` リポジトリの `.github/workflows/` ディレクトリに、`github-actions` リポジトリの `.github/workflows/call-issue-note.yml` をコピーし、リポジトリ名やブランチ名などを調整してコミットします。その後、`tonejs-mml-to-json` リポジトリで新しいIssueを作成し、ワークフローが正しく実行され、`issue-notes/` ディレクトリにMarkdownファイルが生成されることを確認します。
   - Agent実行プロンプ:
     ```
     対象ファイル:
     - `tonejs-mml-to-json` リポジトリ (仮想) の `.github/workflows/call-issue-note.yml`
     - `github-actions` リポジトリの `.github/workflows/call-issue-note.yml`
     - `github-actions` リポジトリの `.github/workflows/issue-note.yml`

     実行内容:
     [Issue #16](../issue-notes/16.md) の「issue-note をtonejs-mml-to-jsonから呼び出す」という対策を実行するための具体的な手順を記述してください。
     1. `github-actions` リポジトリの `.github/workflows/call-issue-note.yml` を `tonejs-mml-to-json` リポジトリの `.github/workflows/` ディレクトリにコピーする。
     2. コピーしたファイルの内容を `tonejs-mml-to-json` リポジトリのコンテキストに合わせて調整する（例: `uses:` パスが正しいことの確認など）。
     3. `tonejs-mml-to-json` リポジトリで新しいIssueを開き、`call-issue-note.yml` ワークフローが正常に実行され、`issue-notes/` ディレクトリにIssueノートが生成されることを確認するための手順を記述する。
     4. 導入後に確認すべき事項（Issue本文へのリンク追加など）をリストアップする。

     確認事項:
     - `call-issue-note.yml` が `issue-note.yml` を正しく参照しているか。
     - `tonejs-mml-to-json` リポジトリに `issue-notes` ディレクトリが存在するか、または自動生成されるか。
     - `GITHUB_TOKEN` などの権限が適切に設定されているか（特に新しいIssueへのコメント追加のため）。

     期待する出力:
     `tonejs-mml-to-json` プロジェクトに `call-issue-note.yml` を導入し、動作確認を行うための具体的なステップバイステップガイドをMarkdown形式で出力してください。

---
Generated at: 2025-09-09 23:04:40 JST

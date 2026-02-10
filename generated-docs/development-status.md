Last updated: 2026-02-11

# Development Status

## 現在のIssues
- [Issue #35](../issue-notes/35.md) は、既存のissue-notesをIssueの状態（open/close）と内容に基づいて整理し、不要なnotesを自動で削除するクリーニング機能の導入を検討しています。
- [Issue #30](../issue-notes/30.md) は、進捗状況生成時に対応するissue-notesが存在しない場合にエラーが発生する問題を修正し、空のnotesとして処理することで正常に完了するようにします。
- [Issue #13](../issue-notes/13.md) は、issue-noteワークフローを他のプロジェクトからより利用しやすくするため、`workflow_call`の導入手順に関するドキュメントを作成することを目指しています。

## 次の一手候補
1. [Issue #30](../issue-notes/30.md): 進捗状況生成時のissue-notes不在エラーを修正
   - 最初の小さな一歩: `IssueTracker.cjs`において、issue-notesファイルが存在しない場合にエラーを発生させずに空文字を返すように修正します。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/IssueTracker.cjs

     実行内容: `IssueTracker.cjs` 内でissue-notesファイルを読み込む際、ファイルが存在しない場合に`fs.readFileSync`がエラーを発生させないよう、ファイル存在チェックを追加し、ファイルがない場合は空文字列を返すように修正してください。

     確認事項: 変更が`DevelopmentStatusGenerator.cjs`や`ProjectSummaryCoordinator.cjs`など、`IssueTracker`を利用する他のスクリプトに影響を与えないことを確認してください。また、issueに紐付くissue-notesがないケースでの進捗状況生成がエラーなく完了することを確認してください。

     期待する出力: 修正された`IssueTracker.cjs`のコードをmarkdown形式で出力してください。
     ```

2. [Issue #35](../issue-notes/35.md): 既存issue-notesの不要note削除機能の実装計画
   - 最初の小さな一歩: `issue-note.yml`ワークフロー内で、`issue-notes`ディレクトリ内のファイルをリストアップし、[Issue #35](../issue-notes/35.md)で定義された「不要note」の基準（紐付くissueがclosedかつ内容が空、またはissueが存在せず内容が空）に合致するファイルを特定するステップを追加する計画を立てます。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/issue-note.yml

     実行内容: `.github/workflows/issue-note.yml` に、issue-notesディレクトリ内のファイルを走査し、[Issue #35](../issue-notes/35.md)の定義に基づいて不要なissue-notesファイルを特定するための新しいjobまたはstepを追加する計画をmarkdown形式で提案してください。具体的には、ファイルリストの取得、各ファイルの分析ロジック、削除アクションのプレースホルダーを含めてください。

     確認事項: 既存のissue-note生成ロジックに影響を与えないことを確認してください。また、この新しいクリーニングプロセスがGitHub Actionsの実行環境内で適切に動作するための権限（ファイルリスト、ファイル読み取り、ファイル削除）要件を考慮してください。

     期待する出力: 新しいクリーニング機能の実装計画を記述したmarkdown形式のドキュメントを生成してください。
     ```

3. [Issue #13](../issue-notes/13.md): issue-noteの外部プロジェクトからの利用手順ドキュメント作成
   - 最初の小さな一歩: `.github_automation/issue_note/docs/` ディレクトリ（存在しない場合は作成）に`ISSUE_NOTE_SETUP.md`ファイルを作成し、`issue-note.yml`を`workflow_call`で利用する際の基本的な構造と必須入力パラメータの項目を定義します。
   - Agent実行プロンプ:
     ```
     対象ファイル: (新規作成) .github_automation/issue_note/docs/ISSUE_NOTE_SETUP.md

     実行内容: 新規ファイル`.github_automation/issue_note/docs/ISSUE_NOTE_SETUP.md`を作成し、`issue-note.yml`を他プロジェクトから`workflow_call`で利用する際の手順書を記述してください。具体的には、以下の項目を含めてください：
     1. 必須入力パラメータ（`issue_title`, `issue_number`, `issue_body`, `issue_url`など）の設定方法
     2. 必要なシークレット（例: `GITHUB_TOKEN`）の登録手順
     3. ワークフローYAMLの呼び出し例

     確認事項: 他の共通ワークフロー（`translate`や`daily-project-summary`）のドキュメント（例: `TRANSLATION_SETUP.md`, `daily-summary-setup.md`）の形式と一貫性があることを確認してください。

     期待する出力: 新規作成する`ISSUE_NOTE_SETUP.md`のコンテンツをmarkdown形式で出力してください。

---
Generated at: 2026-02-11 07:16:20 JST

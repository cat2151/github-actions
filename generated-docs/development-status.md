Last updated: 2025-08-28

# Development Status

## 現在のIssues
- Development Statusの生成品質向上とデバッグ改善が進行中であり、特に`issue-notes`の内容参照 ([Issue #19](issue-notes/19.md)) や関連ファイル添付 ([Issue #20](issue-notes/20.md))、`project-overview`の活用 ([Issue #21](issue-notes/21.md))、そしてデバッグ用のプロンプト保存 ([Issue #22](issue-notes/22.md)) が焦点となっています。
- `DevelopmentStatusGenerator.cjs`にハードコーディングされたGeminiプロンプトの外部化 ([Issue #18](issue-notes/18.md)) および、生成された`development-status.md`内の不適切なリンクの修正 ([Issue #17](issue-notes/17.md)) が必要です。
- `issue-note`、`project-summary`、`translate`、`callgraph`といった主要ワークフローを`tonejs-mml-to-json`プロジェクトで利用できるよう移行し ([Issue #16](issue-notes/16.md))、各ワークフローの他プロジェクトからの利用のしやすさ改善とドキュメント化 ([Issue #13](issue-notes/13.md), [Issue #12](issue-notes/12.md), [Issue #11](issue-notes/11.md)) が課題です。

## 次の一手候補
1. [Issue #19](issue-notes/19.md) のテスト完了と品質検証
   - 最初の小さな一歩: `[Issue #22](issue-notes/22.md)`の実装によって`generated-docs/`に保存されたプロンプトファイルの内容を確認し、`issue-notes/`配下のMDファイルの内容がプロンプトに適切に添付されているかを検証する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `generated-docs/`に保存された最新のプロンプトファイル（例: `generated-docs/gemini-prompt-development-status-<timestamp>.md`）、`issue-notes/`配下のMDファイル。
     
     実行内容: `[Issue #22](issue-notes/22.md)`により生成・コミットされたプロンプトファイルの内容を分析し、特に`issue-notes/`ディレクトリにあるMDファイル（例: `issue-notes/19.md`）の内容が、Geminiに渡されたプロンプト内に正しく含まれているかを確認してください。
     
     確認事項: プロンプトファイルが最新のものであること。`issue-notes/`内のMDファイルの内容が、プロンプトに添付される形式で反映されていること。
     
     期待する出力: `[Issue #19](issue-notes/19.md)`の状況について、`issue-notes/`の内容参照が機能しているかの検証結果をmarkdown形式で出力してください。具体的には、プロンプトファイル内の関連箇所を引用し、それが参照元と一致するかどうかを報告してください。
     ```

2. [Issue #18](issue-notes/18.md) のプロンプトハードコーディングの解消
   - 最初の小さな一歩: `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`内のGeminiへのプロンプト文字列を、`.github_automation/project_summary/prompts/`ディレクトリ内の新しいファイル（例: `development-status-prompt.md`）に切り出し、cjsからそのファイルを読み込むように変更する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`、`.github_automation/project_summary/prompts/`ディレクトリ
     
     実行内容: `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`ファイル内の`generateDevelopmentStatus`関数にあるGeminiへのプロンプト文字列を、`.github_automation/project_summary/prompts/`ディレクトリ内の新しいファイル（例: `development-status-prompt.md`）に切り出してください。その後、`DevelopmentStatusGenerator.cjs`がこの新しいファイルからプロンプトを読み込むように修正してください。
     
     確認事項: プロンプトの切り出し後も、既存の`development-status`生成ワークフローが正しく機能すること。テンプレートリテラル内のプレースホルダー（`{{issue_summaries}}`など）が正しく置換されるように実装すること。
     
     期待する出力: 変更された`DevelopmentStatusGenerator.cjs`と新しく作成されたプロンプトファイルの変更内容を、diff形式で出力してください。また、変更後の`development-status`生成が成功したことを示す簡単なテスト結果を報告してください。
     ```

3. [Issue #16](issue-notes/16.md) の `tonejs-mml-to-json` へのワークフロー導入着手
   - 最初の小さな一歩: `github-actions`リポジトリにある`.github/workflows/call-issue-note.yml`を、`tonejs-mml-to-json`リポジトリの`.github/workflows/call-issue-note.yml`としてコピー・配置し、`tonejs-mml-to-json`リポジトリでワークフローを手動実行して動作確認を行う。
   - Agent実行プロンプト:
     ```
     対象ファイル: `github-actions/.github/workflows/call-issue-note.yml` (ソース), `tonejs-mml-to-json/.github/workflows/call-issue-note.yml` (ターゲット)
     
     実行内容: `github-actions`リポジトリの`.github/workflows/call-issue-note.yml`ファイルを、`tonejs-mml-to-json`リポジトリの`.github/workflows/call-issue-note.yml`としてコピー・配置してください。その後、`tonejs-mml-to-json`リポジトリでこのワークフローを手動実行し、正しく動作するかを確認してください。
     
     確認事項: コピーしたワークフローが`tonejs-mml-to-json`のリポジトリ構造や必要な入力（環境変数、シークレットなど）に合わせて調整が必要ないかを確認してください。特に、`github-actions`リポジトリを参照している部分がないか確認してください。
     
     期待する出力: `call-issue-note.yml`の変更内容（コピーしたファイルの内容）と、`tonejs-mml-to-json`リポジトリでのワークフロー実行結果（成功/失敗とログの要約）をmarkdown形式で出力してください。

---
Generated at: 2025-08-28 07:04:31 JST

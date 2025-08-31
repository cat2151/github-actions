Last updated: 2025-09-01

# Development Status

## 現在のIssues
- [Issue #21](issue-notes/21.md)と[Issue #20](issue-notes/20.md)では、`project-summary`の生成品質改善のため、`project-overview.md`の添付や、`issue-notes/`に記載された関連ファイルの内容をプロンプトに含める方法を検討しています。
- [Issue #18](issue-notes/18.md)では、`DevelopmentStatusGenerator.cjs`内にハードコーディングされたGemini用プロンプトの外部化を進め、管理性と可読性の向上を目指しています。
- [Issue #16](issue-notes/16.md), [Issue #13](issue-notes/13.md), [Issue #12](issue-notes/12.md), [Issue #11](issue-notes/11.md), [Issue #10](issue-notes/10.md)では、`issue-note`、`project-summary`、`translate`、`callgraph`の各ワークフローを他のプロジェクトからより使いやすくするための改善（ドキュメント整備、ファイル配置の見直し、promptの外部化など）を進めています。

## 次の一手候補
1. [Issue #18](issue-notes/18.md) `DevelopmentStatusGenerator.cjs` 内のGeminiプロンプトを外部ファイルに切り出す
   - 最初の小さな一歩: `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs` 内のプロンプト文字列を特定し、`prompts/` ディレクトリ配下に新しいMarkdownファイルとして保存する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs

     実行内容: `DevelopmentStatusGenerator.cjs`の`generateDevelopmentStatus`関数内にあるGeminiに与えるプロンプト文字列を抽出し、その内容を新規ファイル`prompts/development_status_prompt.md`として保存してください。その後、`DevelopmentStatusGenerator.cjs`を修正し、この新規ファイルを読み込むことでプロンプトを取得するように変更してください。

     確認事項: 切り出したプロンプトが正しく読み込まれること、`generateDevelopmentStatus`関数の動作に影響がないことを確認してください。新規プロンプトファイルが`prompts/`ディレクトリの命名規則に沿っていることを確認してください。

     期待する出力: `DevelopmentStatusGenerator.cjs`の変更内容（差分）と、新規作成された`prompts/development_status_prompt.md`のファイル内容をmarkdown形式で出力してください。
     ```

2. [Issue #20](issue-notes/20.md) `issue-notes/` に書かれたファイル内容をpromptに添付するためのロジックを実装
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs` に、`issue-notes/` 配下のmdファイルの内容から`.yml`や`.cjs`のファイル名を抽出し、そのファイルがプロジェクト内に存在するかを検証する関数を追加する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs

     実行内容: `DevelopmentStatusGenerator.cjs`内の`generateDevelopmentStatus`関数に、以下の機能を実装してください。
     1. 現在処理中の各issue-noteのMarkdown内容を解析し、`.yml`または`.cjs`の拡張子を持つファイル名を抽出する。
     2. 抽出されたファイル名がプロジェクト内の既存ファイルと一致するかどうかを判定するロジックを実装する。
     （現時点では、ファイル内容の取得・添付は含めず、ファイルパスの特定と存在確認までを目標とする）

     確認事項: ファイル名の抽出ロジックが、誤った文字列をファイル名として認識しないことを確認してください。ファイル検索ロジックが、プロジェクト内の正しいファイルパスを特定できることを確認してください。

     期待する出力: `DevelopmentStatusGenerator.cjs`の変更内容（差分）をmarkdown形式で出力してください。
     ```

3. [Issue #16](issue-notes/16.md) `tonejs-mml-to-json` リポジトリの `issue-note` ワークフローを更新するための手順を検討
   - 最初の小さな一歩: `github-actions`リポジトリの`.github/workflows/call-issue-note.yml`を分析し、これを外部プロジェクトで利用する際の具体的な導入手順を文書化する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/call-issue-note.yml

     実行内容: `github-actions`リポジトリ内の`.github/workflows/call-issue-note.yml`の内容を詳細に分析し、このワークフローを`tonejs-mml-to-json`のような外部プロジェクトで利用する際に必要な具体的な設定項目と導入手順をmarkdown形式で生成してください。具体的には、ワークフローファイルをコピーして外部プロジェクトに配置する際に変更すべき箇所（例: リポジトリ名、ブランチ、入力パラメータなど）を明確に記述してください。

     確認事項: `call-issue-note.yml`が他の`github-actions`リポジトリ内のローカルパスに依存していないか、または依存している場合はその解決方法が明確に示されているかを確認してください。`workflow_dispatch`イベントの設定と利用方法も説明に含めてください。

     期待する出力: `call-issue-note.yml`を外部プロジェクトに導入するための、詳細かつ具体的な手順書をmarkdown形式で出力してください。

---
Generated at: 2025-09-01 07:04:32 JST

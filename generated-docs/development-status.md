Last updated: 2025-12-07

# Development Status

## 現在のIssues
- [Issue #30](../issue-notes/30.md)は、進捗状況生成時に対応するissue-notesが存在しない場合にエラーで処理が停止する問題を扱っています。
- [Issue #13](../issue-notes/13.md)は、`issue-note`共通ワークフローの導入手順書を作成し、他のプロジェクトから利用しやすくすることを目的としています。
- [Issue #11](../issue-notes/11.md)は、`translate`共通ワークフローを他のプロジェクトで利用しやすくするための改善と、導入手順書の作成を課題としています。

## 次の一手候補
1. [Issue #30](../issue-notes/30.md): 進捗状況生成時、issueに紐付くissue-notesがないときエラー終了してしまうのを修正
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs`内の`IssueTracker`が`issue-notes`ファイルを読み込むロジックを特定し、ファイルが存在しない場合にエラーをスローせず、空文字列を返すように修正する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/IssueTracker.cjs

     実行内容: `IssueTracker.cjs`内の`getIssueNotesContent`などの、`issue-notes`ファイル（例: `issue-notes/9.md`）を読み込む部分を分析し、指定された`issue-notes`ファイルが存在しない場合にエラーが発生しないよう、ファイル読み込み処理を修正してください。具体的には、ファイルが見つからない場合はエラーをスローせずに空文字列を返すように実装を変更してください。

     確認事項: 既存のファイル読み込みロジックが変更によって他の部分に影響を与えないこと。特に、読み込み結果が`null`や`undefined`ではなく空文字列として扱われることを確認してください。

     期待する出力: 修正後の`IssueTracker.cjs`の該当箇所のコードスニペットと、変更点の詳細な説明をmarkdown形式で出力してください。
     ```

2. [Issue #13](../issue-notes/13.md): issue-note を他projectから使いやすくする
   - 最初の小さな一歩: `issue-note`共通ワークフローの呼び出し元（`.github/workflows/call-issue-note.yml`）と本体（`.github/workflows/issue-note.yml`）を分析し、外部プロジェクトがこのワークフローを導入する際に必要なパラメータ、シークレット、前提条件を洗い出す。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/issue-note.yml、.github/workflows/call-issue-note.yml、および issue-notes/3.md

     実行内容: 対象ファイルの内容と`issue-notes/3.md`の情報を基に、`issue-note`共通ワークフローを外部プロジェクトで利用する際の導入手順書を作成してください。以下の観点を含めてください:
     1) 必須入力パラメータ（例: `issue_number`, `issue_title`など）
     2) 必須シークレット（例: `GITHUB_TOKEN`など）
     3) ファイル配置の前提条件（例: `issue-notes/`ディレクトリの有無）
     4) 外部プロジェクトでの利用時に必要な追加設定（例: GitHub Actionsの権限設定）

     確認事項: 導入手順が明確で、GitHub Actionsの知識が中程度の開発者でも理解できるかを確認してください。手順に不足がないか、ハルシネーションが発生しないように既存の情報のみを元に構成してください。

     期待する出力: `issue-note`共通ワークフローの導入手順書をmarkdown形式で出力してください。
     ```

3. [Issue #11](../issue-notes/11.md): translate を他projectから使いやすくする
   - 最初の小さな一歩: `issue-notes/11.md`に記載されている「個別dirへの移動」や「promptのハードコーディングでなく、promptsに切り出す」といった改善点が、現在の`translate`ワークフローにどの程度反映されているかを確認・分析する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/translate-readme.yml、.github/workflows/call-translate-readme.yml、.github_automation/translate/scripts/translate-readme.cjs、および issue-notes/11.md

     実行内容: `issue-notes/11.md`に記載されている「ブレインストーミング」の項目、特に「個別dirへの移動」と「promptをハードコーディングでなく、promptsに切り出す」の現状について、現在の`translate`共通ワークフロー（`.github/workflows/translate-readme.yml`とその関連スクリプト）に実際に反映されているかを確認し、その現状を詳細に分析してください。分析結果に基づき、`translate`共通ワークフローを外部プロジェクトで利用する際の導入手順書を作成する上で、現在の課題と次に記述すべき項目を洗い出してください。

     確認事項: 変更が意図通りに実装されているか。導入手順書に必要な情報が不足していないか。ハルシネーションを避け、現状に基づいた事実のみを記述すること。

     期待する出力: `translate`ワークフローの現状分析結果（特に上記2点に関する反映状況）と、導入手順書を作成する上での課題、および次に記述すべき項目をmarkdown形式で出力してください。

---
Generated at: 2025-12-07 07:05:11 JST

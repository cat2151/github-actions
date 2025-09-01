Last updated: 2025-09-02

# Development Status

## 現在のIssues
- [Issue #23](issue-notes/23.md)ではissue 17の再発が報告されており、同時に[Issue #18](issue-notes/18.md)では`DevelopmentStatusGenerator.cjs`内のプロンプトがハードコードされている課題が挙げられています。
- [Issue #21](issue-notes/21.md)と[Issue #20](issue-notes/20.md)は、`project-summary`機能の生成品質向上のため、`project-overview.md`や`issue-notes`内の関連ファイル内容をプロンプトに含めることを検討しています。
- 複数のアクション（[Issue #16](issue-notes/16.md), [Issue #13](issue-notes/13.md), [Issue #12](issue-notes/12.md), [Issue #11](issue-notes/11.md), [Issue #10](issue-notes/10.md)）を他プロジェクトから利用しやすくするための汎用化とドキュメント化が進められています。

## 次の一手候補
1. [Issue #18](issue-notes/18.md): DevelopmentStatusGenerator.cjs 内のハードコーディングされたpromptを切り出す
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs` 内の `generateDevelopmentStatus` 関数にあるハードコーディングされたprompt文字列を特定し、別の定数またはファイルに切り出すための計画を立てる。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
     
     実行内容: DevelopmentStatusGenerator.cjs の generateDevelopmentStatus 関数内のprompt文字列を特定し、prompts/ ディレクトリに新しいMarkdownファイルとして切り出す際のリファクタリング計画をMarkdown形式で出力してください。計画には、元のcjsファイルからpromptを削除し、新しいファイルから読み込む方法、およびテストの考慮事項を含めてください。
     
     確認事項: generateDevelopmentStatus 関数の既存のロジックや依存関係、特にGemini APIへの入力形式との整合性を確認してください。
     
     期待する出力: DevelopmentStatusGenerator.cjs からpromptを外部ファイルに切り出すためのリファクタリング計画書をMarkdown形式で生成してください。
     ```

2. [Issue #21](issue-notes/21.md) & [Issue #20](issue-notes/20.md): project-summaryのdevelopment-status生成品質を向上させるため、関連ファイル内容をpromptに添付する
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs` が `issue-notes/` 配下の`.md`ファイルを読み込み、その内容から関連するファイルパスを抽出し、それらのファイル内容をプロンプトに含めるためのロジック追加を検討する。まずは、`issue-notes/` 以下のファイルリストを取得し、各ファイルを解析する設計を始める。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
     
     実行内容: DevelopmentStatusGenerator.cjs に、issue-notes/ ディレクトリ内の全Markdownファイルの内容を読み込み、それぞれのファイル内で言及されている .yml または .cjs ファイルを識別し、それらのパスをリストアップする機能を追加するための設計案をMarkdown形式で記述してください。
     
     確認事項: ファイル読み込みのパフォーマンス、存在しないファイルパスのハンドリング、および抽出したファイル内容をGeminiへのプロンプトに効率的に組み込む方法を確認してください。project-overview.md の添付に関する [Issue #21](issue-notes/21.md) も考慮に入れてください。
     
     期待する出力: DevelopmentStatusGenerator.cjs に issue-notes/ から関連ファイルの内容を抽出してプロンプトに含める機能を追加するための設計案をMarkdown形式で生成してください。
     ```

3. [Issue #10](issue-notes/10.md): callgraphアクションを他プロジェクトから利用しやすくする
   - 最初の小さな一歩: `callgraph` 関連ファイルがプロジェクト内でどのように配置されているか（特に `.github/` 配下にある `codeql-queries/` やスクリプト）を詳細に調査し、独立したディレクトリに整理するための計画を立てる。
   - Agent実行プロンプト:
     ```
     対象ファイル: . (プロジェクトルート全体を対象とするが、特に .github/workflows/call-callgraph.yml, .github_automation/callgraph_enhanced/, codeql-queries/ を含む)
     
     実行内容: callgraph アクションを他プロジェクトから利用しやすくするために、関連ファイル（codeql-queries/、スクリプト、ワークフロー定義ファイルなど）を独立したディレクトリ構造（例: .github_automation/callgraph/）に再配置するリファクタリング計画をMarkdown形式で出力してください。また、enhanced という不要な名称の削除も計画に含めてください。
     
     確認事項: 既存の callgraph ワークフロー (.github/workflows/call-callgraph.yml) の動作、codeql-queries/ のパス依存性、およびリネームによる影響を確認してください。
     
     期待する出力: callgraph アクションのファイル構造を整理し、独立性を高めるためのリファクタリング計画をMarkdown形式で生成してください。

---
Generated at: 2025-09-02 07:04:30 JST

Last updated: 2026-03-02

# Development Status

## 現在のIssues
- [Issue #48](../issue-notes/48.md) では、`generated-docs/callgraph.js`が500行を超過しており、リファクタリング前にテストを実装し、その前後で結果を確認することが求められています。
- [Issue #13](../issue-notes/13.md) は、issue-note共通ワークフローの他プロジェクトからの利用を容易にするための導入手順書作成が残っています。
- [Issue #11](../issue-notes/11.md) は、translate共通ワークフローの他プロジェクトからの利用を容易にするための導入手順書作成と、プロンプトの外部指定化が課題です。

## 次の一手候補
1. [Issue #48](../issue-notes/48.md) `callgraph.js` リファクタリングに向けたテスト実装
   - 最初の小さな一歩: `callgraph.js`に含まれる`escapeHtml`関数の単体テストをJestで実装する。
   - Agent実行プロンプ:
     ```
     対象ファイル:
     - .github_automation/callgraph/presets/callgraph.js
     - （新規作成）test/unit/callgraph.test.js

     実行内容:
     `.github_automation/callgraph/presets/callgraph.js` 内の`escapeHtml`関数について、Jestを用いた単体テストファイル`test/unit/callgraph.test.js`を新規作成し、以下のテストケースを実装してください。
     - 基本的な文字列が正しくエスケープされること（例: `&`, `<`, `>`, `"`, `'`）。
     - 空文字列が渡された場合に空文字列を返すこと。
     - エスケープ不要な文字列が渡された場合にそのまま返すこと。
     テストファイルは、プロジェクトルート直下の`test/unit/`ディレクトリに配置してください。

     確認事項:
     - 既存のテストフレームワーク（もしあれば）との整合性。
     - 新規テストファイルが既存のビルドやCIプロセスに影響を与えないこと。
     - Jestがプロジェクトに導入されていない場合は、まずJestのインストールと設定を含めてください。

     期待する出力:
     - `test/unit/callgraph.test.js`の内容（`escapeHtml`関数のテストコードを含む）をmarkdown形式で出力してください。
     - Jestが未導入の場合は、`package.json`へのJestの追加、`jest.config.js`の推奨設定も合わせて提案してください。
     ```

2. [Issue #11](../issue-notes/11.md) translate共通ワークフローのプロンプト外部指定化に向けた分析
   - 最初の小さな一歩: `translate-readme.cjs`がどのようにプロンプトを使用しているかを分析し、ハードコードされているプロンプト部分を特定する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/translate/scripts/translate-readme.cjs

     実行内容:
     `.github_automation/translate/scripts/translate-readme.cjs` ファイルの内容を分析し、Gemini APIに渡すプロンプトがどこで定義されているか、またそれがどのように構築されているかをmarkdown形式で出力してください。特に、現在ハードコードされていると思われるプロンプトのテキストを特定してください。

     確認事項:
     - プロンプトの組み立てロジック、動的に変更される部分、静的な部分を明確に区別してください。
     - プロンプトの入出力に関する依存関係（どの変数がプロンプトに影響するか）を確認してください。

     期待する出力:
     - プロンプトが定義されているコード箇所とその内容（ハードコードされている部分を明記）
     - プロンプトの組み立てフローの説明
     - 今後のプロンプト外部指定化に向けた初期の考察（例: どこを外部ファイルにするか、どのような形式が良いか）
     これらをmarkdown形式で出力してください。
     ```

3. [Issue #13](../issue-notes/13.md) issue-note共通ワークフローの導入手順書作成
   - 最初の小さな一歩: 共通ワークフロー化された`issue-note.yml`の利用に必要なパラメータとシークレットを洗い出す。
   - Agent実行プロンプト:
     ```
     対象ファイル:
     - .github/workflows/issue-note.yml
     - .github/workflows/call-issue-note.yml (呼び出し元サンプルとして)
     - issue-notes/3.md (共通ワークフロー化の経緯)

     実行内容:
     上記のファイルを分析し、共通ワークフローとして`issue-note.yml`を外部プロジェクトで利用する際に必要な設定項目（inputs、secrets、ファイル配置の前提条件など）を洗い出してください。特に、`issue-notes/3.md`で言及されている`actions/github-script`のinputsの渡し方についても考慮してください。

     確認事項:
     - 必須の入力パラメータとオプションの入力パラメータを区別してください。
     - 必要なGitHub Secretsを明記し、その用途を説明してください。
     - どのような前提条件（例: リポジトリのcheckoutが必要か、特定のファイル構造が必要か）があるかを確認してください。

     期待する出力:
     外部プロジェクトがこの`issue-note.yml`を導入する際の手順書の一部として利用できる、必要な設定項目のリストとそれぞれの説明をmarkdown形式で出力してください。

---
Generated at: 2026-03-02 07:05:37 JST

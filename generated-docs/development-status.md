Last updated: 2025-08-22

# Development Status

## 現在のIssues
- [Issue #16](issue-notes/16.md) を中心に、主要なGitHub Actions（`issue-note`, `project-summary`, `translate`, `callgraph`）を`tonejs-mml-to-json`プロジェクトから呼び出すための準備が進められています。
- これら複数のActionについて、[Issue #13](issue-notes/13.md)、[Issue #12](issue-notes/12.md)、[Issue #11](issue-notes/11.md)、[Issue #10](issue-notes/10.md) で他プロジェクトからの利用を容易にするための改善が個別に計画されています。
- 最近、[Issue #15](issue-notes/15.md) でソースコードのリファクタリングが実施され、これらのアクションの将来的な再利用性向上に向けた基盤が整備されました。

## 次の一手候補
1. [Issue #13](issue-notes/13.md): `issue-note` を他プロジェクトから使いやすくする
   - 最初の小さな一歩: `.github/workflows/issue-note.yml`を分析し、`on: workflow_call`を利用して外部から呼び出す際に必要な`inputs`と`outputs`の候補を特定する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/issue-note.yml
     
     実行内容: `issue-note.yml`を分析し、`on: workflow_call`を利用して外部プロジェクトから呼び出せるようにするための変更点を特定し、必要な`inputs`と`outputs`の候補をmarkdown形式で出力してください。
     
     確認事項: 既存のissue-note機能の処理フローと依存関係、特にissue-notesディレクトリとの連携を確認してください。
     
     期待する出力: `issue-note.yml`の`workflow_call`ブロックに追加すべき`inputs`と`outputs`の具体的な定義案、およびその理由をmarkdown形式で記述してください。
     ```

2. [Issue #12](issue-notes/12.md): `project-summary` を他プロジェクトから使いやすくする
   - 最初の小さな一歩: `.github/workflows/project-summary.yml`を分析し、`on: workflow_call`を利用して外部から呼び出す際に必要な`inputs`と`outputs`の候補を特定する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/project-summary.yml
     
     実行内容: `project-summary.yml`を分析し、`on: workflow_call`を利用して外部プロジェクトから呼び出せるようにするための変更点を特定し、必要な`inputs`と`outputs`の候補をmarkdown形式で出力してください。
     
     確認事項: 既存のproject-summary機能の処理フローと依存関係、特に`generated-docs`ディレクトリへの出力プロセスを確認してください。
     
     期待する出力: `project-summary.yml`の`workflow_call`ブロックに追加すべき`inputs`と`outputs`の具体的な定義案、およびその理由をmarkdown形式で記述してください。
     ```

3. [Issue #11](issue-notes/11.md): `translate` を他プロジェクトから使いやすくする
   - 最初の小さな一歩: `.github/workflows/translate.yml`を分析し、`on: workflow_call`を利用して外部から呼び出す際に必要な`inputs`と`secrets`の候補を特定する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/translate.yml
     
     実行内容: `translate.yml`を分析し、`on: workflow_call`を利用して外部プロジェクトから呼び出せるようにするための変更点を特定し、必要な`inputs`、`secrets`の候補をmarkdown形式で出力してください。特に、`GEMINI_API_KEY`のようなAPIキーの扱いを明確にしてください。
     
     確認事項: 既存の翻訳機能の処理フローと依存関係、特に翻訳対象ファイル（例: `README.ja.md`）のパス指定方法を確認してください。
     
     期待する出力: `translate.yml`の`workflow_call`ブロックに追加すべき`inputs`と`secrets`の具体的な定義案、およびその理由をmarkdown形式で記述してください。
     ```

---
Generated at: 2025-08-22 07:04:56 JST

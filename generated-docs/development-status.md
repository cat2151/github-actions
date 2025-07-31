Last updated: 2025-08-01

# Development Status

## 現在のIssues
- 既存のGitHub Actions（[Issue #13](issue-notes/13.md) `issue-note`, [Issue #12](issue-notes/12.md) `project-summary`, [Issue #11](issue-notes/11.md) `translate`, [Issue #10](issue-notes/10.md) `callgraph`）の再利用性を高めるための改善が進行中です。
- これらのアクションを他のプロジェクトでより簡単に統合・利用できるよう、設定の柔軟性向上とエラー対策に注力しています。
- 特に[Issue #12](issue-notes/12.md)の`project-summary`では、出力パスのymlからの指定やバグ修正が最近完了しました。

## 次の一手候補
1. [Issue #13](issue-notes/13.md) issue-note を他projectから使いやすくする
   - 最初の小さな一歩: `issue-note`アクションの`action.yml`を開き、ユーザーがymlから指定できるべき入力パラメータ（例: 出力ファイル名、issueノートテンプレートのパスなど）を洗い出してください。

2. [Issue #11](issue-notes/11.md) translate を他projectから使いやすくする
   - 最初の小さな一歩: `translate`アクションの`action.yml`を開き、ユーザーがymlから指定できるべき入力パラメータ（例: 翻訳対象のファイルパス、出力ディレクトリ、言語設定など）を洗い出してください。

3. [Issue #10](issue-notes/10.md) callgraph を他projectから使いやすくする
   - 最初の小さな一歩: `callgraph`アクションの`action.yml`を開き、ユーザーがymlから指定できるべき入力パラメータ（例: 解析対象のコードパス、出力HTMLファイルのパス、タイトルなど）を洗い出してください。

---
Generated at: 2025-08-01 07:05:20 JST

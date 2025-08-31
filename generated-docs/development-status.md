Last updated: 2025-08-31

# Development Status

## 現在のIssues
- [Issue #19](../issue-notes/19.md), [Issue #20](../issue-notes/20.md), [Issue #21](../issue-notes/21.md)は、開発状況生成時のGeminiプロンプトに、関連Issueノートやプロジェクト概要、関連ファイル内容を添付することで生成品質を高めることを目指しています。
- [Issue #18](../issue-notes/18.md)は、`DevelopmentStatusGenerator.cjs`内のGeminiプロンプトがハードコーディングされている問題を解決し、コードの保守性を向上させます。
- [Issue #16](../issue-notes/16.md)および[Issue #10](../issue-notes/10.md), [Issue #11](../issue-notes/11.md), [Issue #12](../issue-notes/12.md), [Issue #13](../issue-notes/13.md)は、issue-note, project-summary, translate, callgraphといった各種GitHub Actionsを他プロジェクトで利用しやすくするための改善と、既存ワークフローの更新を進めます。

## 次の一手候補
1. [Issue #19](../issue-notes/19.md) issue-notes/配下のmdファイル内容参照の実装確認
   - 最初の小さな一歩: `generated-docs/development-status-generated-prompt.md` を確認し、[Issue #19](../issue-notes/19.md)で参照されるべき `issue-notes/` 配下のmdファイルの内容が実際にプロンプトに添付されていることを確認する。
   - Agent実行プロンプト:
     ```
     対象ファイル: generated-docs/development-status-generated-prompt.md, issue-notes/19.md, issue-notes/20.md, issue-notes/21.md
     
     実行内容: generated-docs/development-status-generated-prompt.md の内容を分析し、[Issue #19](../issue-notes/19.md)のclose条件に記載されている「commitされたpromptを確認し、issue-notes/ 配下のmdファイルがpromptに添付されていること」が満たされているかを確認してください。特に、[Issue #19](../issue-notes/19.md)自体や関連する[Issue #20](../issue-notes/20.md)、[Issue #21](../issue-notes/21.md)の`issue-notes/`ファイルの本文がプロンプトに含まれているかを確認してください。
     
     確認事項: DevelopmentStatusGenerator.cjsが正しく`issue-notes/`ファイルの内容を読み込み、プロンプトに含めるように実装されていることを前提とします。
     
     期待する出力: `issue-notes/`配下のmdファイルの内容がプロンプトに添付されているかの確認結果と、もし添付されていない場合はその原因に関する推測をmarkdown形式で出力してください。
     ```

2. [Issue #18](../issue-notes/18.md) DevelopmentStatusGenerator.cjs内のプロンプトハードコーディング解消
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs`内のハードコーディングされたプロンプト部分を特定し、外部ファイル（例: `prompts/`ディレクトリ）に切り出すための計画を立てる。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
     
     実行内容: DevelopmentStatusGenerator.cjs内の`generateDevelopmentStatus`関数を分析し、Geminiに与えるプロンプトが記述されている箇所を特定してください。その上で、そのプロンプトを外部ファイルに切り出すための具体的な修正方針をmarkdown形式で提案してください。提案には、新しいプロンプトファイルのパス、およびDevelopmentStatusGenerator.cjs内でのそのファイルの読み込み方法を含めてください。
     
     確認事項: 現在のDevelopmentStatusGenerator.cjsの動作に影響を与えないこと。また、`prompts/`ディレクトリへの新規ファイル追加を想定します。
     
     期待する出力: プロンプト切り出しのための修正方針（ファイルパス、コード変更の概要）をmarkdown形式で出力してください。
     ```

3. [Issue #16](../issue-notes/16.md) tonejs-mml-to-jsonへのissue-noteワークフロー統合の検討
   - 最初の小さな一歩: `github-actions`リポジトリの`call-issue-note.yml`を`tonejs-mml-to-json`リポジトリにコピーし、基本的な動作が可能かを確認する手順を策定する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/call-issue-note.yml
     
     実行内容: `github-actions`リポジトリの`.github/workflows/call-issue-note.yml`の内容を分析し、これを他のリポジトリ（例: `tonejs-mml-to-json`）にコピーして利用する際に、必要な変更点や前提条件（例: `issue-notes/`ディレクトリの有無、スクリプトのパス、必要な入力パラメータなど）を洗い出してください。特に、[Issue #13](../issue-notes/13.md)で言及されている「call導入手順」の最初のステップとして、必要なファイルパスや設定項目を特定してください。
     
     確認事項: `tonejs-mml-to-json`プロジェクトの具体的なファイル構造は不明であるため、一般的なGitHub Actionsの呼び出しパターンに基づいた提案としてください。また、`issue-note`のスクリプトやプロンプトファイルへのパスが相対パスで適切に解決されることを考慮してください。
     
     期待する出力: `call-issue-note.yml`を他のリポジトリに導入するための最初のステップとしての手順書（コピーすべきファイル、修正すべき箇所、必要な設定）をmarkdown形式で出力してください。

---
Generated at: 2025-08-31 07:04:12 JST

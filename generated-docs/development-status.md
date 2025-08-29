Last updated: 2025-08-29

# Development Status

## 現在のIssues
- [Issue #19](issue-notes/19.md), [Issue #20](issue-notes/20.md), [Issue #21](issue-notes/21.md)において、`development-status`生成品質向上のため、`issue-notes`や関連ファイルの内容をプロンプトに添付する機能が検討・実装中です。
- [Issue #18](issue-notes/18.md)で`DevelopmentStatusGenerator.cjs`内のプロンプトのハードコーディングが問題視され、これに起因する[Issue #17](issue-notes/17.md)のリンク誤りの修正が進行中です。
- [Issue #10](issue-notes/10.md), [Issue #11](issue-notes/11.md), [Issue #12](issue-notes/12.md), [Issue #13](issue-notes/13.md)では主要なGitHub Actionsワークフローを他プロジェクトから使いやすくするための改善が進められており、[Issue #16](issue-notes/16.md)では既存プロジェクトへの適用を計画しています。

## 次の一手候補
1. [Issue #17](issue-notes/17.md) development-statusが生成したmdのissue-noteへのリンク誤りを修正する
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs`内の`issue-notes/`へのリンク生成部分を特定し、パスが`github.com/cat2151/github-actions/blob/main/issue-notes/XX.md`となるように、`generated-docs/`ディレクトリが含まれないパスに修正する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
     
     実行内容: `DevelopmentStatusGenerator.cjs`ファイル内の`issue-notes/`へのリンクを生成している部分を特定し、パスが`github.com/cat2151/github-actions/blob/main/issue-notes/XX.md`となるように修正してください。具体的には、誤って含まれている`generated-docs/`ディレクトリパスを削除する修正を検討してください。
     
     確認事項: `issue-notes`へのリンク生成ロジックが、プロジェクトのルートからの相対パスで正しく生成されるか、および他のリンク生成に影響がないかを確認してください。修正後に生成される`development-status.md`でリンクが正常に機能することを確認してください。
     
     期待する出力: 修正された`DevelopmentStatusGenerator.cjs`ファイル。
     ```

2. [Issue #18](issue-notes/18.md) DevelopmentStatusGenerator.cjs内のGeminiへのプロンプトを外部化する
   - 最初の小さな一歩: `DevelopmentStatusGenerator.cjs`内の`generateDevelopmentStatus`関数にあるハードコードされたプロンプト文字列を特定し、その内容を新規ファイル`.github_automation/project_summary/prompts/development_status_prompt.md`として切り出す。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
     
     実行内容: `DevelopmentStatusGenerator.cjs`内の`generateDevelopmentStatus`関数にハードコーディングされているGeminiへのプロンプト文字列を特定し、その内容を新規ファイル`.github_automation/project_summary/prompts/development_status_prompt.md`として作成してください。その後、`DevelopmentStatusGenerator.cjs`から新しく作成したプロンプトファイルを読み込むように`generateDevelopmentStatus`関数を修正してください。
     
     確認事項: プロンプトの外部化によって`development-status`の生成ロジックが変わらないこと、およびパスの解決が正しく行われることを確認してください。また、`development_status_prompt.md`の作成場所と命名規則が既存の`prompts`ディレクトリ内の他のファイルと整合性がとれているかを確認してください。
     
     期待する出力: 修正された`DevelopmentStatusGenerator.cjs`ファイルと、新規作成された`prompts/development_status_prompt.md`ファイル。
     ```

3. [Issue #16](issue-notes/16.md) tonejs-mml-to-jsonプロジェクトのワークフローを更新するための分析を行う
   - 最初の小さな一歩: `github-actions`リポジトリの`.github/workflows/call-issue-note.yml`を分析し、`tonejs-mml-to-json`のような外部プロジェクトに導入するために必要な設定項目（パラメータ、シークレット、ファイル配置など）を洗い出す。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github/workflows/call-issue-note.yml
     
     実行内容: 対象のworkflowファイルについて、外部プロジェクト（例: tonejs-mml-to-json）から利用する際に必要な設定項目を洗い出し、以下の観点から分析してください：
     1) 必須入力パラメータ
     2) 必須シークレット
     3) ファイル配置の前提条件
     4) 外部プロジェクトでの利用時に必要な追加設定や考慮事項
     
     確認事項: 作業前に既存のworkflowファイルとの依存関係、およびこのworkflowが意図通りに動作するための制約事項を確認してください。
     
     期待する出力: 外部プロジェクトがこの`call-issue-note.yml`を導入する際の手順書作成の基礎となる分析結果をmarkdown形式で生成してください。具体的には：必須パラメータの設定方法、シークレットの登録手順、前提条件の確認項目を含めてください。

---
Generated at: 2025-08-29 07:04:39 JST

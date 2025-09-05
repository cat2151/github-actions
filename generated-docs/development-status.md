Last updated: 2025-09-06

# Development Status

## 現在のIssues
現在オープン中の課題は、`project-summary`の生成品質とプロンプト管理の改善に焦点を当てています。[Issue #21](../issue-notes/21.md)では、ファイル一覧や関数一覧をプロンプトに添付することで、[Issue #20](../issue-notes/20.md)では`issue-notes/`に記載された関連ファイルの具体的な内容をプロンプトに含めることで、Geminiの生成品質向上を目指しています。また、[Issue #18](../issue-notes/18.md)では、`DevelopmentStatusGenerator.cjs`内のGeminiプロンプトのハードコーディングを解消し、管理性と可読性を高めるリファクタリングを計画しています。

## 次の一手候補
1. [Issue #18](../issue-notes/18.md): DevelopmentStatusGenerator.cjs内のプロンプトを外部ファイル化する
   - 最初の小さな一歩: `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`から、`generateDevelopmentStatus`関数内で使用されているGeminiプロンプトの文字列を抽出し、`.github_automation/project_summary/prompts/development_status_prompt.md`として保存する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
     対象ディレクトリ: .github_automation/project_summary/prompts/

     実行内容:
     1. .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs内の`generateDevelopmentStatus`関数から、Geminiに与えるプロンプト文字列（テンプレートリテラル部分）を特定し、抽出してください。
     2. 抽出したプロンプト文字列を、`.github_automation/project_summary/prompts/development_status_prompt.md`という名前で新規作成し、そのファイルに保存してください。
     3. `DevelopmentStatusGenerator.cjs`を修正し、上記の新規プロンプトファイルを`fs.readFileSync`で読み込み、読み込んだ内容をテンプレートリテラルの代わりに`replace`メソッドでプレースホルダーを置換する形に変更してください。

     確認事項:
     - `DevelopmentStatusGenerator.cjs`がプロンプトを正しく外部ファイルから読み込み、これまでと同様に機能するか確認してください。
     - 新しいプロンプトファイルが`prompts/`ディレクトリに正しく配置されているか確認してください。
     - プロンプト内のプレースホルダー（例: `${currentIssuesSummary}`など）が正しく置換されるように`replace`メソッドが実装されているか確認してください。

     期待する出力:
     - `development_status_prompt.md`ファイルの新規作成とその内容。
     - `DevelopmentStatusGenerator.cjs`の修正前後の差分を示すmarkdown形式の出力。修正後のコードが、外部プロンプトファイルを読み込んで使用する形式になっていること。
     ```

2. [Issue #20](../issue-notes/20.md): project-summary生成時にissue-notesから関連ファイル内容を添付する
   - 最初の小さな一歩: `project-summary`を生成するスクリプト（例: `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`）において、現在処理中の`issue-notes/`配下のMDファイルの内容から、`.yml`または`.cjs`拡張子を持つファイル名を抽出する正規表現または文字列パースロジックを実装し、抽出したファイル名の一覧をログに出力する。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs

     実行内容:
     1. `DevelopmentStatusGenerator.cjs`の`generateDevelopmentStatus`関数内で、`issue-notes/`配下の個々のMDファイルの内容を引数として受け取る部分を特定してください。
     2. 受け取ったMDファイルの内容から、テキスト中に記載されている`.yml`または`.cjs`拡張子を持つファイル名（例: `path/to/file.yml`や`script.cjs`）を抽出する関数`extractRelatedFiles`を実装してください。この関数は抽出したファイル名の配列を返すものとします。
     3. `generateDevelopmentStatus`関数内で、各issue-noteに対してこの`extractRelatedFiles`関数を呼び出し、抽出されたファイル名を一時的にログ出力する処理を追加してください。

     確認事項:
     - 抽出ロジックが、Issue #20の「案、.yml と .cjs がある部分で、space区切り。」や「agentに方法を検討させる。」といったヒントを考慮しているか確認してください。
     - MDファイル内容から正確にファイル名を抽出できるか（例：パスを含む場合、含まない場合など）。
     - 不要な文字列（例：単なる拡張子の言及）がファイル名として抽出されないか確認してください。

     期待する出力:
     - `DevelopmentStatusGenerator.cjs`の修正前後の差分を示すmarkdown形式の出力。特に`extractRelatedFiles`関数の実装と、それが`generateDevelopmentStatus`関数内で呼び出され、抽出結果をログに出力する部分が明記されていること。
     ```

3. [Issue #21](../issue-notes/21.md): project-summary生成時にファイル一覧と関数一覧をプロンプトに含める
   - 最初の小さな一歩: `project-overview.md`に依存せず、プロジェクト内のすべてのファイルパスを再帰的に取得するヘルパー関数を`.github_automation/project_summary/scripts/lib/`ディレクトリに`file_system_utils.cjs`として新規作成する。この関数は特定のディレクトリ（例：`.git`, `node_modules`など）を無視するオプションを持つものとする。
   - Agent実行プロンプト:
     ```
     対象ファイル: .github_automation/project_summary/scripts/lib/

     実行内容:
     1. .github_automation/project_summary/scripts/lib/ディレクトリに`file_system_utils.cjs`という名前で新しいファイルを新規作成してください。
     2. `file_system_utils.cjs`内に、指定されたディレクトリ以下のすべてのファイルパスを再帰的に取得する非同期関数`getAllFilePaths(baseDir, excludeDirs = [])`を実装してください。
     3. `excludeDirs`引数には、検索から除外したいディレクトリの配列を指定できるようにしてください（例: `.git`, `node_modules`など）。
     4. この関数はファイルパスの配列をPromiseとして返すようにしてください。

     確認事項:
     - 関数が非同期であり、`fs/promises`モジュールを使用しているか確認してください。
     - 除外ディレクトリが正しく機能するか確認してください。
     - 再帰的なファイル検索が無限ループに陥らないこと、シンボリックリンクの扱いなどを考慮しているか確認してください（必要であればシンプルな実装で構いません）。

     期待する出力:
     - `file_system_utils.cjs`ファイルの新規作成とその内容を示すmarkdown形式の出力。関数定義、使用されるモジュール、簡単な使用例を含めてください。

---
Generated at: 2025-09-06 07:04:53 JST

Last updated: 2025-09-09

# 開発状況生成プロンプト（開発者向け）

## 生成するもの：
- 現在openされているissuesを3行で要約する
- 次の一手の候補を3つlistする
- 次の一手の候補3つそれぞれについて、極力小さく分解して、その最初の小さな一歩を書く

## 生成しないもの：
- 「今日のissue目標」などuserに提案するもの
  - ハルシネーションの温床なので生成しない
- ハルシネーションしそうなものは生成しない（例、無価値なtaskや新issueを勝手に妄想してそれをuserに提案する等）
- プロジェクト構造情報（来訪者向け情報のため、別ファイルで管理）

## 「Agent実行プロンプト」生成ガイドライン：
「Agent実行プロンプト」作成時は以下の要素を必ず含めてください：

### 必須要素
1. **対象ファイル**: 分析/編集する具体的なファイルパス
2. **実行内容**: 具体的な分析や変更内容（「分析してください」ではなく「XXXファイルのYYY機能を分析し、ZZZの観点でmarkdown形式で出力してください」）
3. **確認事項**: 変更前に確認すべき依存関係や制約
4. **期待する出力**: markdown形式での結果や、具体的なファイル変更

### Agent実行プロンプト例

**良い例（上記「必須要素」4項目を含む具体的なプロンプト形式）**:
```
対象ファイル: `.github/workflows/translate-readme.yml`と`.github/workflows/call-translate-readme.yml`

実行内容: 対象ファイルについて、外部プロジェクトから利用する際に必要な設定項目を洗い出し、以下の観点から分析してください：
1) 必須入力パラメータ（target-branch等）
2) 必須シークレット（GEMINI_API_KEY）
3) ファイル配置の前提条件（README.ja.mdの存在）
4) 外部プロジェクトでの利用時に必要な追加設定

確認事項: 作業前に既存のworkflowファイルとの依存関係、および他のREADME関連ファイルとの整合性を確認してください。

期待する出力: 外部プロジェクトがこの`call-translate-readme.yml`を導入する際の手順書をmarkdown形式で生成してください。具体的には：必須パラメータの設定方法、シークレットの登録手順、前提条件の確認項目を含めてください。
```

**避けるべき例**:
- callgraphについて調べてください
- ワークフローを分析してください
- issue-noteの処理フローを確認してください

## 出力フォーマット：
以下のMarkdown形式で出力してください：

```markdown
# Development Status

## 現在のIssues
[以下の形式で3行でオープン中のissuesを要約。issue番号を必ず書く]
- [1行目の説明]
- [2行目の説明]
- [3行目の説明]

## 次の一手候補
1. [候補1のタイトル。issue番号を必ず書く]
   - 最初の小さな一歩: [具体的で実行可能な最初のアクション]
   - Agent実行プロンプト:
     ```
     対象ファイル: [分析/編集する具体的なファイルパス]

     実行内容: [具体的な分析や変更内容を記述]

     確認事項: [変更前に確認すべき依存関係や制約]

     期待する出力: [markdown形式での結果や、具体的なファイル変更の説明]
     ```

2. [候補2のタイトル。issue番号を必ず書く]
   - 最初の小さな一歩: [具体的で実行可能な最初のアクション]
   - Agent実行プロンプト:
     ```
     対象ファイル: [分析/編集する具体的なファイルパス]

     実行内容: [具体的な分析や変更内容を記述]

     確認事項: [変更前に確認すべき依存関係や制約]

     期待する出力: [markdown形式での結果や、具体的なファイル変更の説明]
     ```

3. [候補3のタイトル。issue番号を必ず書く]
   - 最初の小さな一歩: [具体的で実行可能な最初のアクション]
   - Agent実行プロンプト:
     ```
     対象ファイル: [分析/編集する具体的なファイルパス]

     実行内容: [具体的な分析や変更内容を記述]

     確認事項: [変更前に確認すべき依存関係や制約]

     期待する出力: [markdown形式での結果や、具体的なファイル変更の説明]
     ```
```


# 開発状況情報
- 以下の開発状況情報を参考にしてください。
- Issue番号を記載する際は、必ず [Issue #番号](../issue-notes/番号.md) の形式でMarkdownリンクとして記載してください。

## プロジェクトのファイル一覧
- .github/workflows/call-callgraph.yml
- .github/workflows/call-daily-project-summary.yml
- .github/workflows/call-issue-note.yml
- .github/workflows/call-translate-readme.yml
- .github/workflows/callgraph.yml
- .github/workflows/daily-project-summary.yml
- .github/workflows/issue-note.yml
- .github/workflows/translate-readme.yml
- .github_automation/callgraph/codeql-queries/callgraph.ql
- .github_automation/callgraph/codeql-queries/codeql-pack.lock.yml
- .github_automation/callgraph/codeql-queries/qlpack.yml
- .github_automation/callgraph/config/example.json
- .github_automation/callgraph/docs/callgraph.md
- .github_automation/callgraph/presets/callgraph.js
- .github_automation/callgraph/presets/style.css
- .github_automation/callgraph/scripts/analyze-codeql.cjs
- .github_automation/callgraph/scripts/callgraph-utils.cjs
- .github_automation/callgraph/scripts/check-codeql-exists.cjs
- .github_automation/callgraph/scripts/check-commits.cjs
- .github_automation/callgraph/scripts/check-node-version.cjs
- .github_automation/callgraph/scripts/common-utils.cjs
- .github_automation/callgraph/scripts/copy-commit-results.cjs
- .github_automation/callgraph/scripts/extract-sarif-info.cjs
- .github_automation/callgraph/scripts/find-process-results.cjs
- .github_automation/callgraph/scripts/generate-html-graph.cjs
- .github_automation/callgraph/scripts/generateHTML.cjs
- .github_automation/project_summary/docs/daily-summary-setup.md
- .github_automation/project_summary/prompts/development-status-prompt.md
- .github_automation/project_summary/prompts/project-overview-prompt.md
- .github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs
- .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
- .github_automation/project_summary/scripts/development/GitUtils.cjs
- .github_automation/project_summary/scripts/development/IssueTracker.cjs
- .github_automation/project_summary/scripts/generate-project-summary.cjs
- .github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs
- .github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs
- .github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs
- .github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs
- .github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs
- .github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs
- .github_automation/project_summary/scripts/shared/BaseGenerator.cjs
- .github_automation/project_summary/scripts/shared/FileSystemUtils.cjs
- .github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs
- .github_automation/translate/docs/TRANSLATION_SETUP.md
- .github_automation/translate/scripts/translate-readme.cjs
- .gitignore
- .vscode/settings.json
- LICENSE
- README.ja.md
- README.md
- generated-docs/callgraph.html
- generated-docs/callgraph.js
- generated-docs/development-status-generated-prompt.md
- generated-docs/development-status.md
- generated-docs/project-overview.md
- generated-docs/style.css
- issue-notes/10.md
- issue-notes/11.md
- issue-notes/12.md
- issue-notes/13.md
- issue-notes/14.md
- issue-notes/15.md
- issue-notes/16.md
- issue-notes/17.md
- issue-notes/18.md
- issue-notes/19.md
- issue-notes/2.md
- issue-notes/20.md
- issue-notes/21.md
- issue-notes/22.md
- issue-notes/23.md
- issue-notes/24.md
- issue-notes/3.md
- issue-notes/4.md
- issue-notes/7.md
- issue-notes/8.md
- issue-notes/9.md
- package-lock.json
- package.json
- src/main.js

## 現在のオープンIssues
## [Issue #21](../issue-notes/21.md): project-summary の development-status 生成時、project-overviewが生成済みのproject-overview.mdもpromptに添付、を試す
[issue-notes/21.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/21.md)

...
ラベル: 
--- issue-notes/21.md の内容 ---

```markdown
# issue project-summary の development-status 生成時、project-overviewが生成済みのproject-overview.mdもpromptに添付、を試す #21
[issues #21](https://github.com/cat2151/github-actions/issues/21)

# 何が困るの？
- project-overview.mdがpromptに添付されていたほうが、Geminiの生成品質が改善できる可能性がある。
    - メリットは、ファイル一覧、関数一覧、をGeminiにわたせること

# 検討事項
- 課題、その一覧に付記されている「ファイルや関数の要約」は、Geminiが「ファイル名や関数名を元に生成しただけ」で、「ファイル内容や関数内容を参照せずに生成した」可能性が高い
    - 対策、project-overview.mdに依存しない。
        - 方法、新規関数をagentに実装させる
            - 新規関数で、ファイル一覧と関数一覧を生成する
        - 根拠、そのほうが、シンプルに目的を達成できる可能性が高そう。
        - 根拠、project-overview.mdだと、不具合として.github 配下のymlがlistに含まれておらず、ymlに関するissue、に関する生成、をするとき不具合の可能性がありそう。そういった、別機能の不具合に影響されがち。
- 課題、早期に実施したほうが毎日好影響が出る可能性がある
    - 対策、上記検討事項の対処は後回しにして、先に実装してみる
    - agentに投げる
- 課題、ProjectSummaryCoordinator をみたところ、並列処理されている
    - なので、project-overview.mdを参照したいときに、まだ生成されていない、という可能性が高い
    - 対策、前述の、新規関数で、ファイル一覧と関数一覧を生成させる

# agentに投げるための整理
- 編集対象ファイル
    - prompt
        - .github_automation/project_summary/prompts/development-status-prompt.md
        - 編集内容
            - projectのファイル一覧を埋め込む用の、プレースホルダーを追加する
    - source
        - .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
        - 編集内容
            - projectのファイル一覧を生成する関数、を実装し、
            - それを前述のプレースホルダーに埋め込む

# agentに投げて実装させた

# test結果
- 以下が不要
    - .git/
    - node_modules/

# どうする？
- agentに上記を変更させた
- testする


```

## [Issue #20](../issue-notes/20.md): project-summary の development-status 生成時、issue-notes/ 配下のmdにファイル名が書いてあれば、そのファイル内容もpromptに添付、を試す
[issue-notes/20.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/20.md)

...
ラベル: 
--- issue-notes/20.md の内容 ---

```markdown
# issue project-summary の development-status 生成時、issue-notes/ 配下のmdにファイル名が書いてあれば、そのファイル内容もpromptに添付、を試す #20
[issues #20](https://github.com/cat2151/github-actions/issues/20)

# 何が困るの？
- Geminiに次の一手を生成させるとき、cjsの内容も添付したほうが、生成品質が改善できる可能性がある。

# 案
## outputのimage
- promptが言及するfilename、について、そのfileの内容もすべてpromptに含める。
    - 軸は、projectのfilename一覧である。
        - 一覧それぞれのfilenameについて、promptで言及されているものをfile内容埋め込み、とする。
- 方向性
    - シンプルで明確なルール、曖昧さのないルールで、メンテを楽にすることを優先する
    - 余分なファイルが出てしまうが割り切ってOKとし、欠落リスクを減らせることを優先する
- 備考
    - 曖昧でメンテが必要な「documentからのfilename抽出」をやめ、
        - かわりに、逆に、「今のprojectにあるfileすべてのうち、promptで言及されているもの」を軸とする
## 実現方法の案
- project全体について、filenameと、filepath配列（複数ありうる）、のmapを取得する。そういう関数Aをまず実装する。
    - filepathは、agentが扱えるよう、github上のworkの絶対pathではなく、projectRootからの相対パス表記とする。
- そして、そのfilenameにmatchするfilepath配列について、filepathとファイル内容を記したmarkdown文字列を返却、という関数Bを実装する。
- さらに、Geminiにわたすpromptについて、前述の関数Aのfilenameそれぞれについて、prompt内を検索し、filenameが存在する場合は、そのfilenameについて、関数Bを用いてmarkdown文字列を取得する。そうして得られたmarkdown文字列群を返却する、という関数Cを実装する。
- さらに、promptの末尾に書いてあるプレースホルダー「`${file_contents}`」を、関数Cの結果で置き換える、という関数Dを実装する。
- 実際には、Geminiにわたすpromptのプレースホルダー展開は、2回にわたる必要がある。1回目でissues-note内容をpromptに埋め込む。2回目でそのpromptに対して関数Dを適用する。
## 備忘
- 上記は、agentにplanさせてレビューし、context不足と感じたら上記をメンテ、というサイクルで書いた。

# どうする？
- 上記をagentに投げる。documentやtestについてのplanもしてくるかもしれないがそこは時間の都合で省略して実施させるつもり。
- 投げた、実装させた、レビューして人力リファクタリングした
- testする

# 結果
- バグ
    - この20.mdにあるプレースホルダーが置換されてしまっている
    - issue-notesで言及されていないfileまで添付されてしまっている
- 分析
    - この20.mdにあるプレースホルダーが置換されてしまっている
        - 原因
            - 20.mdにあるプレースホルダーまで置換対象としてしまっていたため。
            - prompt全体のプレースホルダーを置換対象としてしまっていたため。
            - issue-notesを埋め込んだあとでの、プレースホルダー処理だったので、
                - 20.md が置換対象となってしまったため。
        - 対策案
            - プレースホルダーはすべて、「行頭と行末で囲まれている」ときだけ置換対象とする。
                - つまり文中やcode中のプレースホルダーは置換対象外とする。
            - さらに、2つ以上プレースホルダーが出たら想定外なので早期エラー終了させ、検知させる。
    - issue-notesで言及されていないfileまで添付されてしまっている
        - 原因
            - promptに、既にprojectの全file listが書き込まれたあとなので、
                - issue-noteで言及されていなくても、
                - promptの全file listを対象に検索してしまっている
        - 対策案の候補
            - プレースホルダー置換の順番を変更し、全file listは最後に置換する
            - file添付の対象を変更し、promptでなく、issue-notesとする
                - これが範囲が絞られているので安全である、と考える
        - 備忘
            - 全fileの対象は、リモートリポジトリ側のfileなので、secretsの心配はないし、実際に検索して確認済み

# どうする？
- agent半分、人力が半分（agentがハルシネーションでソース破壊したので、関数切り分けしたり、リファクタリングしたり）。
- で実装した。
- testする

```

## [Issue #16](../issue-notes/16.md): issue-note / project-summary / translate / callgraph をtonejs-mml-to-jsonから呼び出す
[issue-notes/16.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/16.md)

...
ラベル: 
--- issue-notes/16.md の内容 ---

```markdown
# issue issue-note / project-summary / translate / callgraph をtonejs-mml-to-jsonから呼び出す #16
[issues #16](https://github.com/cat2151/github-actions/issues/16)

# これまでの課題
- issue issue-note / project-summary / translate / callgraph は、github-actions リポジトリ上ではtest greenである。
- だが他のリポジトリにおいて動作するか？が可視化不足である。

# 対策
- issue-note / project-summary / translate / callgraph をtonejs-mml-to-jsonから呼び出す
- 詳しく
    - まず、現状、tonejs-mml-to-json でその4つのworkflowがどうなっているか、このmdに可視化する
    - 例えば、既に呼び出している、呼び出していない、tonejs-mml-to-jsonにある古いworkflowを呼び出している

# 調査結果
- まず、現状、tonejs-mml-to-json でその4つのworkflowがどうなっているか、このmdに可視化する
    - 結果：
        - issue-note
            - tonejs-mml-to-jsonにある古いworkflowを呼び出している
        - project-summary
            - tonejs-mml-to-jsonにある古いworkflowを呼び出している
        - translate
            - tonejs-mml-to-jsonにある古いworkflowを呼び出している
        - callgraph
            - tonejs-mml-to-jsonにある古いworkflowを呼び出している

# どうする？
- issue-note
    - github-actions リポジトリにある、call-issue-note.yml をcpして使うようにする、まず単純cpして動くかを確認する
- project-summary
    - github-actions リポジトリにある、call-daily-project-summary.yml をcpして使うようにする、まず単純cpして動くかを確認する
- translate
    - github-actions リポジトリにある、call-translate-readme.yml をcpして使うようにする、まず単純cpして動くかを確認する
- callgraph
    - github-actions リポジトリにある、call-callgraph.yml をcpして使うようにする、まず単純cpして動くかを確認する

```

## [Issue #13](../issue-notes/13.md): issue-note を他projectから使いやすくする
[issue-notes/13.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/13.md)

...
ラベル: 
--- issue-notes/13.md の内容 ---

```markdown
# issue issue-note を他projectから使いやすくする #13
[issues #13](https://github.com/cat2151/github-actions/issues/13)

- docs
    - call導入手順を書く

```

## [Issue #12](../issue-notes/12.md): project-summary を他projectから使いやすくする
[issue-notes/12.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/12.md)

...
ラベル: 
--- issue-notes/12.md の内容 ---

```markdown
# issue project-summary を他projectから使いやすくする #12
[issues #12](https://github.com/cat2151/github-actions/issues/12)

- 課題、個別dirへの移動が必要。
    - scripts
    - prompts
        - さらに、呼び出し元ymlから任意のpromptsを指定できるようにする。
- 課題、これだと別project時に動かない。
    - 現在はたまたま共通ワークフローのリポジトリと呼び出し元ワークフローのリポジトリが同一のため、
    - 呼び出し元checkoutをするだけで、
    - 共通ワークフロー側のscriptファイルが取得できてしまっている
    - 対策
        - 他のyml同様、共通ワークフロー側のリポジトリをcheckoutする
- docs
    - call導入手順を書く
- 課題、promptを呼び出し元ymlから指定できるようにすべし。
    - 現在はscript内にファイル名決め打ちで存在しているため、他のprojectで別ymlを指定できない。
    - 方法、他のcallワークフローで指定しているところを参考にすべし


```

## [Issue #11](../issue-notes/11.md): translate を他projectから使いやすくする
[issue-notes/11.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/11.md)

...
ラベル: 
--- issue-notes/11.md の内容 ---

```markdown
# issue translate を他projectから使いやすくする #11
[issues #11](https://github.com/cat2151/github-actions/issues/11)

# ブレインストーミング
- 課題、個別dirへの移動が必要。
    - scripts
- 課題、promptをハードコーディングでなく、promptsに切り出す。
    - さらに、呼び出し元ymlから任意のpromptsを指定できるようにする。
- 済、課題、README以外のtranslateも可能にするか検討する
    - 対策、シンプル優先でREADME決め打ちにする
        - 理由、README以外の用途となると、複数ファイルをどうGemini APIにわたすか？等、仕様が爆発的にふくらんでいくリスクがある
        - README以外の用途が明確でないうちは、README決め打ちにするほうがよい
- docs
    - call導入手順を書く

```

## [Issue #10](../issue-notes/10.md): callgraph を他projectから使いやすくする
[issue-notes/10.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/10.md)

...
ラベル: 
--- issue-notes/10.md の内容 ---

```markdown
# issue callgraph を他projectから使いやすくする #10
[issues #10](https://github.com/cat2151/github-actions/issues/10)

# ブレインストーミング
- 洗い出し
    - 他projectから使う場合の問題を洗い出す、今見えている範囲で、手早く、このnoteに可視化する
    - 洗い出したものは、一部は別issueに切り分ける
- close条件
    - まずは4つそれぞれを個別のdirに切り分けてtest greenとなること、とするつもり
    - それ以外は別issueに切り分けるつもり
- 切り分け
    - 別dirに切り分ける
        - 課題、`codeql-queries/` が `.github/` 配下にある。対策、`.github_automation/callgraph_enhanced/codeql-queries/` とする
        - 課題、scriptも、`.github/`配下にある。対策、移動する
        - 方法、agentを試し、ハルシネーションで時間が取られるなら人力に切り替える
- test
    - local WSL + act でtestする
- 名前
    - 課題、名前 enhanced が不要。対策、名前から enhanced を削除してymlなどもそれぞれ同期して修正すべし
- docs
    - call導入手順を書く

```

## ドキュメントで言及されているファイルの内容
### .github/workflows/call-callgraph.yml
```yml
# 呼び出し元ワークフロー: call-callgraph.yml
name: Call Call Graph

on:
  schedule:
    # 毎日午前5時(JST) = UTC 20:00前日
    - cron: '0 20 * * *'
  workflow_dispatch:

jobs:
  call-callgraph:
    # uses: ./.github/workflows/callgraph.yml # ローカルでのテスト用
    uses: cat2151/github-actions/.github/workflows/callgraph.yml@main
    with:
      CONFIG_NAME: .github/actions-tmp/.github_automation/callgraph/config/example.json # このファイルは共通ワークフロー側にありますので参考にしてください（この記述になっているのは、共通ワークフロー側で .github/actions-tmp/ にcheckoutしているため）
      # CONFIG_NAME: ./my.json # projectごとに設定を変える場合用。上記と衝突しないファイル名にしてください

```

### .github/workflows/call-daily-project-summary.yml
```yml
name: Call Daily Project Summary

on:
  schedule:
    # 日本時間 07:00 (UTC 22:00 前日)
    - cron: '0 22 * * *'
  workflow_dispatch:

jobs:
  call-daily-project-summary:
    uses: cat2151/github-actions/.github/workflows/daily-project-summary.yml@main
    # uses: ./.github/workflows/daily-project-summary.yml # ローカルでのテスト用
    secrets:
      GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}

```

### .github/workflows/call-issue-note.yml
```yml
name: Call Issue Note Generator

on:
  issues:
    types: [opened]

jobs:
  call-reusable-issue-note:
    uses: cat2151/github-actions/.github/workflows/issue-note.yml@main
    with:
      issue_number: "${{ github.event.issue.number }}"
      issue_title: ${{ github.event.issue.title }}
      issue_body: ${{ github.event.issue.body }}
      issue_html_url: ${{ github.event.issue.html_url }}

```

### .github/workflows/call-translate-readme.yml
```yml
name: Call Auto Translate README

on:
  push:
    paths:
      - 'README.ja.md'
    branches:
      - main
      - master
  workflow_dispatch:

jobs:
  call-shared-workflow:
    uses: cat2151/github-actions/.github/workflows/translate-readme.yml@main
    with:
      target-branch: main
    secrets:
      GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}

```

### .github/workflows/callgraph.yml
```yml
name: Generate Call Graph

on:
  workflow_call:
    inputs:
      CONFIG_NAME:
        required: true
        type: string

env:
  ACTION_TMP: .github/actions-tmp
  CALLGRAPH: .github/actions-tmp/.github_automation/callgraph/scripts
  PRESETS: .github/actions-tmp/.github_automation/callgraph/presets
  QUERIES: .github/actions-tmp/.github_automation/callgraph/codeql-queries

jobs:
  check-commits:
    runs-on: ubuntu-latest
    outputs:
      should-run: ${{ steps.check.outputs.should-run }}
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 50 # 過去のコミットを取得

      - name: Checkout shared github-actions repo ※共通ワークフロー側。こうしないと呼び出し元リポジトリ側の内容が上書きされて消える
        uses: actions/checkout@v4
        with:
          repository: cat2151/github-actions
          path: ${{ env.ACTION_TMP }}
          fetch-depth: 0
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Check for user commits in last 24 hours
        id: check
        run: |
          node ${{ env.CALLGRAPH }}/check-commits.cjs

  generate-callgraph:
    needs: check-commits
    if: needs.check-commits.outputs.should-run == 'true'
    runs-on: ubuntu-latest
    permissions:
      contents: write
      security-events: write
      actions: read

    steps:
      - name: Checkout repository ※呼び出し元リポジトリ側
        uses: actions/checkout@v4

      - name: Set Git identity
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"

      - name: Checkout shared github-actions repo ※共通ワークフロー側。こうしないと呼び出し元リポジトリ側の内容が上書きされて消える
        uses: actions/checkout@v4
        with:
          repository: cat2151/github-actions
          path: ${{ env.ACTION_TMP }}
          fetch-depth: 0
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Check Node.js version
        run: |
          node ${{ env.CALLGRAPH }}/check-node-version.cjs

      - name: Install CodeQL CLI
        run: |
          wget https://github.com/github/codeql-cli-binaries/releases/download/v2.22.1/codeql-linux64.zip
          unzip codeql-linux64.zip
          sudo mv codeql /opt/codeql
          echo "/opt/codeql" >> $GITHUB_PATH

      - name: Install CodeQL query packs
        run: |
          /opt/codeql/codeql pack install ${{ env.QUERIES }}

      - name: Check CodeQL exists
        run: |
          node ${{ env.CALLGRAPH }}/check-codeql-exists.cjs

      - name: Verify CodeQL Configuration
        run: |
          node ${{ env.CALLGRAPH }}/analyze-codeql.cjs verify-config

      - name: Perform CodeQL Analysis
        run: |
          node ${{ env.CALLGRAPH }}/analyze-codeql.cjs analyze --overwrite

      - name: Check CodeQL Analysis Results
        run: |
          node ${{ env.CALLGRAPH }}/analyze-codeql.cjs check-results

      - name: Debug CodeQL execution
        run: |
          node ${{ env.CALLGRAPH }}/analyze-codeql.cjs debug

      - name: Wait for CodeQL results
        run: |
          node -e "setTimeout(()=>{}, 10000)"

      - name: Find and process CodeQL results
        run: |
          node ${{ env.CALLGRAPH }}/find-process-results.cjs

      - name: Generate HTML graph
        run: |
          node ${{ env.CALLGRAPH }}/generate-html-graph.cjs ${{ inputs.CONFIG_NAME }}

      - name: copy presets to generated-docs
        run: |
          cp -r ${{ env.PRESETS }}/* generated-docs/ # htmlと同じ場所にcssとjsをコピーする。htmlをシンプルにする用

      - name: Copy files to generated-docs and commit results
        run: |
          node ${{ env.CALLGRAPH }}/copy-commit-results.cjs

```

### .github/workflows/daily-project-summary.yml
```yml
name: Daily Project Summary
on:
  workflow_call:
    secrets:
      GEMINI_API_KEY:
        required: true
env:
  TMP_DIR: .github/actions-tmp
  SCRIPT_DIR: .github/actions-tmp/.github_automation/project_summary/scripts
  PROMPT_DIR: .github/actions-tmp/.github_automation/project_summary/prompts
  DOCS_DIR: generated-docs
  OVERVIEW_PROMPT: project-overview-prompt.md
  DEVELOPMENT_STATUS_BASE_PROMPT: development-status-prompt.md
  OUT_OVERVIEW: project-overview.md
  OUT_DEVELOPMENT_STATUS: development-status.md
  OUT_DEVELOPMENT_STATUS_GENERATED_PROMPT: development-status-generated-prompt.md

jobs:
  generate-summary:
    runs-on: ubuntu-latest

    permissions:
      contents: write
      issues: read
      pull-requests: read

    steps:
      - name: Checkout repository # サマリ対象を取得するため、呼び出し元リポジトリをcheckout
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          fetch-depth: 0  # 履歴を取得するため

      - name: Checkout shared github-actions repo # スクリプトを取得するため、共有のgithub-actionsリポジトリをcheckout
        uses: actions/checkout@v4
        with:
          repository: cat2151/github-actions
          path: ${{ env.TMP_DIR }}
          fetch-depth: 0
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: |
          mkdir -p ${{ env.TMP_DIR }}
          cd ${{ env.TMP_DIR }}
          npm init -y
          npm install @google/generative-ai @octokit/rest

      - name: remove generated files # こうしないと生成ミスを検知できない
        run: |
          rm -f ${{ env.DOCS_DIR }}/${{ env.OUT_OVERVIEW }}
          rm -f ${{ env.DOCS_DIR }}/${{ env.OUT_DEVELOPMENT_STATUS }}
          rm -f ${{ env.DOCS_DIR }}/${{ env.OUT_DEVELOPMENT_STATUS_GENERATED_PROMPT }}

      - name: Generate project summary
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          GITHUB_REPOSITORY: ${{ github.repository }}
          NODE_PATH: ${{ env.TMP_DIR }}/node_modules
        run: |
          mkdir -p ${{ env.DOCS_DIR }}
          node ${{ env.SCRIPT_DIR }}/generate-project-summary.cjs \
            ${{ env.PROMPT_DIR }}/${{ env.OVERVIEW_PROMPT }} \
            ${{ env.PROMPT_DIR }}/${{ env.DEVELOPMENT_STATUS_BASE_PROMPT }} \
            ${{ env.DOCS_DIR }}/${{ env.OUT_OVERVIEW }} \
            ${{ env.DOCS_DIR }}/${{ env.OUT_DEVELOPMENT_STATUS }} \
            ${{ env.DOCS_DIR }}/${{ env.OUT_DEVELOPMENT_STATUS_GENERATED_PROMPT }} \
            ${{ env.TMP_DIR }}

      - name: Verify generated files # 生成後のtimestampやfilesizeのチェック用
        run: |
          ls -la ${{ env.DOCS_DIR }}/${{ env.OUT_OVERVIEW }}
          ls -la ${{ env.DOCS_DIR }}/${{ env.OUT_DEVELOPMENT_STATUS }}
          ls -la ${{ env.DOCS_DIR }}/${{ env.OUT_DEVELOPMENT_STATUS_GENERATED_PROMPT }}

      - name: Check for generated summaries
        id: check_summaries
        run: |
          if [ -f "${{ env.DOCS_DIR }}/${{ env.OUT_OVERVIEW }}" ] && [ -f "${{ env.DOCS_DIR }}/${{ env.OUT_DEVELOPMENT_STATUS }}" ] && [ -f "${{ env.DOCS_DIR }}/${{ env.OUT_DEVELOPMENT_STATUS_GENERATED_PROMPT }}" ]; then
            echo "summaries_generated=true" >> $GITHUB_OUTPUT
          else
            echo "summaries_generated=false" >> $GITHUB_OUTPUT
          fi

      - name: Commit and push summaries
        if: steps.check_summaries.outputs.summaries_generated == 'true'
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add ${{ env.DOCS_DIR }}/${{ env.OUT_OVERVIEW }}
          git add ${{ env.DOCS_DIR }}/${{ env.OUT_DEVELOPMENT_STATUS }}
          git add ${{ env.DOCS_DIR }}/${{ env.OUT_DEVELOPMENT_STATUS_GENERATED_PROMPT }}
          if git diff --cached --quiet; then
            echo "No changes to commit"
          else
            git commit -m "Update project summaries (overview & development status)"
            git push
          fi

      - name: Summary generation result
        run: |
          if [ "${{ steps.check_summaries.outputs.summaries_generated }}" == "true" ]; then
            echo "✅ Project summaries updated successfully"
            echo "📊 Generated: ${{ env.OUT_OVERVIEW }} & ${{ env.OUT_DEVELOPMENT_STATUS }} & ${{ env.OUT_DEVELOPMENT_STATUS_GENERATED_PROMPT }}"
          else
            echo "ℹ️ No summaries generated (likely no user commits in the last 24 hours)"
          fi

```

### .github/workflows/issue-note.yml
```yml

name: Issue Note Generator

on:
  workflow_call:
    inputs:
      issue_title:
        required: true
        type: string
      issue_number:
        required: true
        type: string
      issue_body:
        required: true
        type: string
      issue_html_url:
        required: true
        type: string

jobs:
  create-issue-note:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Generate issue note markdown
        id: generate_md
        run: |
          mkdir -p issue-notes
          echo "# issue ${{ inputs.issue_title }} #${{ inputs.issue_number }}" > issue-notes/${{ inputs.issue_number }}.md
          echo "[issues #${{ inputs.issue_number }}](${{ inputs.issue_html_url }})" >> issue-notes/${{ inputs.issue_number }}.md
          echo "" >> issue-notes/${{ inputs.issue_number }}.md
          echo "${{ inputs.issue_body }}" >> issue-notes/${{ inputs.issue_number }}.md
      - name: Commit and push note
        run: |
          git config user.name github-actions
          git config user.email github-actions@github.com
          git add issue-notes/${{ inputs.issue_number }}.md
          git commit -m "Add issue note for #${{ inputs.issue_number }}"
          git push

      - name: Add link to issue note in issue body
        uses: actions/github-script@v7
        env:
          ISSUE_NUMBER: ${{ inputs.issue_number }}
          ISSUE_BODY: ${{ inputs.issue_body }}
        with:
          script: |
            const notePath = `issue-notes/${process.env.ISSUE_NUMBER}.md`;
            const repo = context.repo.repo;
            const owner = context.repo.owner;
            const noteUrl = `https://github.com/${owner}/${repo}/blob/main/${notePath}`;
            const newBody = `[issue-notes/${process.env.ISSUE_NUMBER}.md](${noteUrl})\n\n${process.env.ISSUE_BODY}`;
            await github.rest.issues.update({
              owner,
              repo,
              issue_number: Number(process.env.ISSUE_NUMBER),
              body: newBody
            });

```

### .github/workflows/translate-readme.yml
```yml
name: Auto Translate README

on:
  workflow_call:
    inputs:
      target-branch:
        required: false
        type: string
        default: main
    secrets:
      GEMINI_API_KEY:
        required: true

env:
  TMP_DIR: .github/actions-tmp
  SCRIPT_DIR: .github_automation/translate/scripts
  DOC_NAME: README

jobs:
  translate:
    runs-on: ubuntu-latest

    permissions:
      contents: write
      pull-requests: write

    steps:
      - name: Checkout target repository # 翻訳対象ファイルを取得するため、呼び出し元リポジトリをcheckout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
          ref: ${{ inputs.target-branch }}

      - name: Checkout shared github-actions repo # スクリプトを取得するため、共有のgithub-actionsリポジトリをcheckout
        uses: actions/checkout@v4
        with:
          repository: cat2151/github-actions
          path: ${{ env.TMP_DIR }}
          fetch-depth: 0
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: |
          npm init -y
          npm install @google/generative-ai

      - name: Translate README
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
        run: node ${{ env.TMP_DIR }}/${{ env.SCRIPT_DIR }}/translate-readme.cjs ./${{ env.DOC_NAME }}.ja.md

      - name: Check for changes
        id: changes
        run: |
          if git diff --quiet HEAD -- ${{ env.DOC_NAME }}.md; then
            echo "changed=false" >> $GITHUB_OUTPUT
          else
            echo "changed=true" >> $GITHUB_OUTPUT
          fi

      - name: Commit and push changes
        if: steps.changes.outputs.changed == 'true'
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add ${{ env.DOC_NAME }}.md
          git commit -m "Auto-translate ${{ env.DOC_NAME }}.ja.md to ${{ env.DOC_NAME }}.md"
          git push

```

### .github_automation/project_summary/prompts/development-status-prompt.md
```md
# 開発状況生成プロンプト（開発者向け）

## 生成するもの：
- 現在openされているissuesを3行で要約する
- 次の一手の候補を3つlistする
- 次の一手の候補3つそれぞれについて、極力小さく分解して、その最初の小さな一歩を書く

## 生成しないもの：
- 「今日のissue目標」などuserに提案するもの
  - ハルシネーションの温床なので生成しない
- ハルシネーションしそうなものは生成しない（例、無価値なtaskや新issueを勝手に妄想してそれをuserに提案する等）
- プロジェクト構造情報（来訪者向け情報のため、別ファイルで管理）

## 「Agent実行プロンプト」生成ガイドライン：
「Agent実行プロンプト」作成時は以下の要素を必ず含めてください：

### 必須要素
1. **対象ファイル**: 分析/編集する具体的なファイルパス
2. **実行内容**: 具体的な分析や変更内容（「分析してください」ではなく「XXXファイルのYYY機能を分析し、ZZZの観点でmarkdown形式で出力してください」）
3. **確認事項**: 変更前に確認すべき依存関係や制約
4. **期待する出力**: markdown形式での結果や、具体的なファイル変更

### Agent実行プロンプト例

**良い例（上記「必須要素」4項目を含む具体的なプロンプト形式）**:
```
対象ファイル: `.github/workflows/translate-readme.yml`と`.github/workflows/call-translate-readme.yml`

実行内容: 対象ファイルについて、外部プロジェクトから利用する際に必要な設定項目を洗い出し、以下の観点から分析してください：
1) 必須入力パラメータ（target-branch等）
2) 必須シークレット（GEMINI_API_KEY）
3) ファイル配置の前提条件（README.ja.mdの存在）
4) 外部プロジェクトでの利用時に必要な追加設定

確認事項: 作業前に既存のworkflowファイルとの依存関係、および他のREADME関連ファイルとの整合性を確認してください。

期待する出力: 外部プロジェクトがこの`call-translate-readme.yml`を導入する際の手順書をmarkdown形式で生成してください。具体的には：必須パラメータの設定方法、シークレットの登録手順、前提条件の確認項目を含めてください。
```

**避けるべき例**:
- callgraphについて調べてください
- ワークフローを分析してください
- issue-noteの処理フローを確認してください

## 出力フォーマット：
以下のMarkdown形式で出力してください：

```markdown
# Development Status

## 現在のIssues
[以下の形式で3行でオープン中のissuesを要約。issue番号を必ず書く]
- [1行目の説明]
- [2行目の説明]
- [3行目の説明]

## 次の一手候補
1. [候補1のタイトル。issue番号を必ず書く]
   - 最初の小さな一歩: [具体的で実行可能な最初のアクション]
   - Agent実行プロンプト:
     ```
     対象ファイル: [分析/編集する具体的なファイルパス]

     実行内容: [具体的な分析や変更内容を記述]

     確認事項: [変更前に確認すべき依存関係や制約]

     期待する出力: [markdown形式での結果や、具体的なファイル変更の説明]
     ```

2. [候補2のタイトル。issue番号を必ず書く]
   - 最初の小さな一歩: [具体的で実行可能な最初のアクション]
   - Agent実行プロンプト:
     ```
     対象ファイル: [分析/編集する具体的なファイルパス]

     実行内容: [具体的な分析や変更内容を記述]

     確認事項: [変更前に確認すべき依存関係や制約]

     期待する出力: [markdown形式での結果や、具体的なファイル変更の説明]
     ```

3. [候補3のタイトル。issue番号を必ず書く]
   - 最初の小さな一歩: [具体的で実行可能な最初のアクション]
   - Agent実行プロンプト:
     ```
     対象ファイル: [分析/編集する具体的なファイルパス]

     実行内容: [具体的な分析や変更内容を記述]

     確認事項: [変更前に確認すべき依存関係や制約]

     期待する出力: [markdown形式での結果や、具体的なファイル変更の説明]
     ```
```


# 開発状況情報
- 以下の開発状況情報を参考にしてください。
- Issue番号を記載する際は、必ず [Issue #番号](../issue-notes/番号.md) の形式でMarkdownリンクとして記載してください。

## プロジェクトのファイル一覧
${projectFiles}

## 現在のオープンIssues
${issuesSection}

## ドキュメントで言及されているファイルの内容
${fileContents}

## 最近の変更（過去7日間）
### コミット履歴:
${commits}

### 変更されたファイル:
${changedFiles}

```

### .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
```cjs
const BaseGenerator = require('../shared/BaseGenerator.cjs');
const IssueTracker = require('./IssueTracker.cjs');
const ProjectFileUtils = require('../shared/ProjectFileUtils.cjs');

/**
 * 開発状況生成器
 * 開発者向けの進捗状況を生成
 */

class DevelopmentStatusGenerator extends BaseGenerator {
  /**
   * @param {string} developmentStatusPromptPath - 開発状況プロンプトのパス（必須）
   * @param {string} developmentPath - 開発状況出力先パス（必須）
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(developmentStatusPromptPath, developmentPath, developmentGeneratedPath, projectRoot) {
    super(projectRoot);

    if (!developmentStatusPromptPath) {
      throw new Error('developmentStatusPromptPath is required as the first argument');
    }
    if (!developmentPath) {
      throw new Error('developmentPath is required as the second argument');
    }
    if (!developmentGeneratedPath) {
      throw new Error('developmentGeneratedPath is required as the third argument');
    }

    this.developmentStatusPromptPath = developmentStatusPromptPath;
    this.developmentPath = developmentPath;
    this.developmentGeneratedPath = developmentGeneratedPath;
    this.projectFileUtils = new ProjectFileUtils(projectRoot);
  }

  /**
   * 環境変数とコミット状況をチェック
   * @returns {Promise<boolean>} 実行を続行するかどうか
   */
  async validateEnvironment() {
    // 基底クラスの環境変数チェック
    await super.validateEnvironment();

    // 過去24時間のユーザーコミットチェック
    const hasUserCommits = await IssueTracker.hasRecentUserCommits(this.projectRoot);
    if (!hasUserCommits) {
      console.log('No user commits in the last 24 hours. Skipping summary generation.');
      return false;
    }

    return true;
  }

  /**
   * メイン実行関数
   * @returns {Promise<string>} 生成されたファイルのパス
   */
  async run() {
    try {
      console.log('Starting development status generation...');

      // 環境変数とコミット状況をチェック
      const shouldContinue = await this.validateEnvironment();
      if (!shouldContinue) {
        return null;
      }

      // データ収集
      const [issues, recentChanges, prompt] = await Promise.all([
        IssueTracker.collectIssues(this.projectRoot),
        IssueTracker.collectRecentChanges(this.projectRoot),
        this.loadPrompt(this.developmentStatusPromptPath)
      ]);

      // Octokitのインストールが必要な場合のハンドリング
      if (issues.length === 0 && !process.env.GITHUB_TOKEN) {
        console.warn('GITHUB_TOKEN not set, skipping Issues collection');
      }

      // 開発状況生成
      const developmentStatus = await this.generateDevelopmentStatus(issues, recentChanges, prompt);

      // ファイル保存
      const filename = await this.saveToFile(developmentStatus, this.developmentPath);

      console.log('Development status generation completed successfully!');
      console.log(`Generated file: ${filename}`);
      return filename;

    } catch (error) {
      console.error('Development status generation failed:', error.message);
      if (error.stack) {
        console.error('Stack trace:', error.stack);
      }
      if (error.response) {
        console.error('API Response:', error.response);
      }
      throw error;
    }
  }

  async generateDevelopmentStatus(issues, recentChanges, prompt) {
    console.log('Generating development status with Gemini API...');

    // Issueノート取得関数を利用
    const IssueTracker = require('./IssueTracker.cjs');
    const issuesWithNotes = issues.map(issue => ({
      ...issue,
      noteContent: IssueTracker.getIssueNoteSync(issue.number, this.projectRoot)
    }));

    const issuesSection = issuesWithNotes.length === 0
      ? 'オープン中のIssueはありません'
      : issuesWithNotes.map(formatIssueSection).join('\n\n');

    // 1Issue分のMarkdown出力を生成
    function formatIssueSection(issue) {
      // generated-docs/ からの相対パスでリンクを生成
      const relativeIssueNoteUrl = `../issue-notes/${issue.number}.md`;
      return [
        `## [Issue #${issue.number}](${relativeIssueNoteUrl}): ${issue.title}`,
        issue.body,
        `ラベル: ${issue.labels.join(', ')}`,
        `--- issue-notes/${issue.number}.md の内容 ---`,
        '',
        '```markdown',
        issue.noteContent,
        '```'
      ].join('\n');
    }

    // プロジェクトファイル一覧を取得（同期）
    const projectFiles = this.projectFileUtils.getProjectFiles();
    // issue-notesで参照されているファイル内容を取得（同期）
    const fileContents = this.projectFileUtils.getMentionedFileContentsInPrompt(issuesSection);

    // プロンプトを生成 : issues, recentChanges, projectFiles, fileContents を埋め込む
    function fillTemplate(template, values) {
      const lines = template.split(/\r?\n/);
      // エラーメッセージ共通生成関数
      function formatTemplateError(message) {
        return (
          message + '\n' +
          `--- テンプレート内容 ---\n${template}\n` +
          `--- テンプレート分割後のlines ---\n${JSON.stringify(lines, null, 2)}`
        );
      }
      // 各keyが複数行で使われていないかチェック＆keyごとに存在確認
      for (const key of Object.keys(values)) {
        const keyRegex = new RegExp(String.raw`^\$\{${key}\}$`);
        let foundLine = -1;
        for (let i = 0; i < lines.length; i++) {
          if (keyRegex.test(lines[i])) {
            if (foundLine !== -1) {
              throw new Error(
                formatTemplateError(`テンプレート内でkey '${key}' が複数行(${foundLine+1}行目, ${i+1}行目)で使われています`)
              );
            }
            foundLine = i;
          }
        }
        if (foundLine === -1) {
          throw new Error(
            formatTemplateError(`テンプレート内にkey '${key}' が見つかりませんでした`)
          );
        }
      }
      // 埋め込み
      return lines.map(line => {
        for (const key of Object.keys(values)) {
          const keyRegex = new RegExp(String.raw`^\$\{${key}\}$`);
          if (keyRegex.test(line)) {
            return values[key];
          }
        }
        return line;
      }).join('\n');
    }
    let developmentPrompt = fillTemplate(prompt, {
      projectFiles,
      issuesSection,
      fileContents,
      commits: recentChanges.commits.join('\n'),
      changedFiles: recentChanges.changedFiles.join('\n')
    });

    // プロンプトをファイルに保存する。開発効率化用。
    await this.saveToFile(developmentPrompt, this.developmentGeneratedPath);
    console.log(`Development status prompt saved to: ${this.developmentGeneratedPath}`);

    try {
      const result = await this.generateContent(developmentPrompt);
      return this.cleanMarkdownCodeBlock(result.response.text());
    } catch (error) {
      console.error('Error generating development status:', error.message);
      throw error;
    }
  }
}

module.exports = DevelopmentStatusGenerator;

```

### generated-docs/project-overview.md
```md
Last updated: 2025-09-09

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド:
  - HTML/CSS/JavaScript: 呼び出しグラフ表示（`callgraph.html`）のための基盤技術。特定のフレームワークは使用せず、Vanilla JSでグラフのインタラクティブな操作を提供。
- 音楽・オーディオ:
  - Tone.js: Web Audio APIを用いた高品質な音声合成・エフェクトを実現するJavaScriptライブラリ。
  - Web Audio API: ブラウザ上で高度な音声処理を行うための標準API（Tone.js経由で利用）。
  - MML (Music Macro Language): 簡易的な音楽記法を解析し、音楽を生成するためのパーサー。
  (注: これらの技術は、本リポジトリのGitHub Actionsワークフロー集としての主要目的とは直接関連が薄いですが、提供情報に含まれています。)
- 開発ツール:
  - Node.js runtime: JavaScriptコードの実行環境。各種スクリプトの動作基盤。
  - npm scripts: `package.json` に定義されたスクリプトを実行するためのタスクランナー。
  - Google Generative AI (@google/generative-ai): AIによる文書生成、特にプロジェクト概要や開発状況レポートの自動生成をサポート。
  - @octokit/rest: GitHub APIと連携し、リポジトリ情報やIssue情報の取得、操作を可能にするライブラリ。
- テスト: 特になし (提供情報に具体的なテスト関連技術の記載はありません)
- ビルドツール: 特になし (提供情報に特定のビルド・パース関連技術の記載はありませんが、CodeQLによるコード解析が含まれます)
- 言語機能:
  - JavaScript (CommonJS): 主にNode.js環境で動作するスクリプト言語。`.cjs` 拡張子でCommonJSモジュールを使用。
- 自動化・CI/CD:
  - GitHub Actions: コードのリント、テスト、デプロイなど、開発ワークフローを自動化する強力なプラットフォーム。本プロジェクトは、このGitHub Actionsの共通ワークフロー集として機能します。
  - プロジェクト要約自動生成: AIを活用してプロジェクトの概要や開発状況を自動的に生成するワークフロー。
  - Issue自動管理: GitHub Issuesの管理を自動化するワークフロー。
  - README多言語翻訳: READMEファイルを複数の言語に自動翻訳するワークフロー。
  - i18n automation: 国際化（i18n）に関する自動化ワークフロー。
- 開発標準: 特になし (提供情報に特定のコード品質・統一ルール関連技術の記載はありません)

## ファイル階層ツリー
```
📁 .github_automation/
  📁 callgraph/
    📁 codeql-queries/
      📄 callgraph.ql
      📄 codeql-pack.lock.yml
      📄 qlpack.yml
    📁 config/
      📊 example.json
    📁 docs/
      📖 callgraph.md
    📁 presets/
      📜 callgraph.js
      🎨 style.css
    📁 scripts/
      📄 analyze-codeql.cjs
      📄 callgraph-utils.cjs
      📄 check-codeql-exists.cjs
      📄 check-commits.cjs
      📄 check-node-version.cjs
      📄 common-utils.cjs
      📄 copy-commit-results.cjs
      📄 extract-sarif-info.cjs
      📄 find-process-results.cjs
      📄 generate-html-graph.cjs
      📄 generateHTML.cjs
  📁 project_summary/
    📁 docs/
      📖 daily-summary-setup.md
    📁 prompts/
      📖 development-status-prompt.md
      📖 project-overview-prompt.md
    📁 scripts/
      📄 ProjectSummaryCoordinator.cjs
      📁 development/
        📄 DevelopmentStatusGenerator.cjs
        📄 GitUtils.cjs
        📄 IssueTracker.cjs
      📄 generate-project-summary.cjs
      📁 overview/
        📄 CodeAnalyzer.cjs
        📄 ProjectAnalysisOrchestrator.cjs
        📄 ProjectDataCollector.cjs
        📄 ProjectDataFormatter.cjs
        📄 ProjectOverviewGenerator.cjs
        📄 TechStackAnalyzer.cjs
      📁 shared/
        📄 BaseGenerator.cjs
        📄 FileSystemUtils.cjs
        📄 ProjectFileUtils.cjs
  📁 translate/
    📁 docs/
      📖 TRANSLATION_SETUP.md
    📁 scripts/
      📄 translate-readme.cjs
📄 .gitignore
📁 .vscode/
  📊 settings.json
📄 LICENSE
📖 README.ja.md
📖 README.md
📁 generated-docs/
  🌐 callgraph.html
  📜 callgraph.js
  📖 development-status-generated-prompt.md
  📖 development-status.md
  📖 project-overview.md
  🎨 style.css
📁 issue-notes/
  📖 10.md
  📖 11.md
  📖 12.md
  📖 13.md
  📖 14.md
  📖 15.md
  📖 16.md
  📖 17.md
  📖 18.md
  📖 19.md
  📖 2.md
  📖 20.md
  📖 21.md
  📖 22.md
  📖 23.md
  📖 24.md
  📖 3.md
  📖 4.md
  📖 7.md
  📖 8.md
  📖 9.md
📊 package-lock.json
📊 package.json
📁 src/
  📜 main.js
```

## ファイル詳細説明
- **`.github_automation/`**: GitHub Actionsの自動化ワークフローに関連するスクリプトや設定を格納する主要ディレクトリ。
  - **`callgraph/`**: CodeQLを用いた関数呼び出しグラフの生成と表示に関する機能を提供します。
    - **`codeql-queries/callgraph.ql`**: CodeQL言語で書かれたクエリ。コードベースから関数呼び出し関係を抽出し、グラフデータを生成します。
    - **`config/example.json`**: 呼び出しグラフの生成設定の例。
    - **`docs/callgraph.md`**: 呼び出しグラフ機能に関するドキュメント。
    - **`presets/callgraph.js`**: 生成された呼び出しグラフHTML (`callgraph.html`) で使用されるJavaScriptコード。グラフのインタラクティブな表示や操作（ノードの選択、情報パネルの表示など）を担当します。
    - **`presets/style.css`**: 生成された呼び出しグラフHTMLのスタイルを定義するCSSファイル。
    - **`scripts/`**: 呼び出しグラフ生成のためのユーティリティスクリプト群。
      - `analyze-codeql.cjs`: CodeQL解析を実行し、結果を処理します。
      - `callgraph-utils.cjs`: 呼び出しグラフ生成に関する汎用ユーティリティ関数。
      - `check-codeql-exists.cjs`: CodeQLが環境に存在するかを確認します。
      - `check-commits.cjs`: コミット履歴をチェックするユーティリティ。
      - `check-node-version.cjs`: Node.jsのバージョンを確認します。
      - `common-utils.cjs`: 共通で利用されるユーティリティ関数群。
      - `copy-commit-results.cjs`: コミット結果をコピーします。
      - `extract-sarif-info.cjs`: SARIF形式の解析結果から情報を抽出します。
      - `find-process-results.cjs`: プロセス結果を検索します。
      - `generate-html-graph.cjs`: 抽出されたデータからインタラクティブなHTML呼び出しグラフを生成します。
      - `generateHTML.cjs`: HTML生成に関するユーティリティ。
  - **`project_summary/`**: AIを用いたプロジェクト概要・開発状況レポートの自動生成に関する機能を提供します。
    - **`docs/daily-summary-setup.md`**: 日次サマリー設定に関するドキュメント。
    - **`prompts/`**: AIに渡すプロンプトのテンプレートファイル群。
      - `development-status-prompt.md`: 開発状況レポート生成用のプロンプト。
      - `project-overview-prompt.md`: プロジェクト概要生成用のプロンプト。
    - **`scripts/`**: プロジェクト概要生成のロジックを実装したスクリプト群。
      - `ProjectSummaryCoordinator.cjs`: プロジェクト概要生成処理全体の調整役。
      - `development/`
        - `DevelopmentStatusGenerator.cjs`: 開発状況レポートを生成するクラス。
        - `GitUtils.cjs`: Gitリポジトリ操作に関連するユーティリティ。
        - `IssueTracker.cjs`: GitHub Issueからの情報を取得・処理するクラス。
      - `generate-project-summary.cjs`: プロジェクト概要生成ワークフローのエントリポイント。
      - `overview/`
        - `CodeAnalyzer.cjs`: コードベースを解析し、構造や統計情報を抽出するクラス。
        - `ProjectAnalysisOrchestrator.cjs`: プロジェクト解析の各ステップを管理し、調整するクラス。
        - `ProjectDataCollector.cjs`: プロジェクトに関する各種データを収集するクラス。
        - `ProjectDataFormatter.cjs`: 収集したデータを整形するクラス。
        - `ProjectOverviewGenerator.cjs`: 収集・整形されたデータからプロジェクト概要を生成するクラス。
        - `TechStackAnalyzer.cjs`: 使用されている技術スタックを特定・解析するクラス。
      - `shared/`
        - `BaseGenerator.cjs`: 各種生成スクリプトの共通基底クラス。
        - `FileSystemUtils.cjs`: ファイルシステム操作に関するユーティリティ。
        - `ProjectFileUtils.cjs`: プロジェクト内のファイル操作に関するユーティリティ。
  - **`translate/`**: READMEの多言語翻訳に関する機能を提供します。
    - **`docs/TRANSLATION_SETUP.md`**: 翻訳機能の設定に関するドキュメント。
    - **`scripts/translate-readme.cjs`**: READMEファイルを指定された言語に自動翻訳するスクリプト。
- **`.gitignore`**: Gitがバージョン管理の対象外とするファイルやディレクトリを指定する設定ファイル。
- **`.vscode/settings.json`**: VS Codeエディタのプロジェクト固有の設定ファイル。
- **`LICENSE`**: プロジェクトのライセンス情報。
- **`README.ja.md`**: プロジェクトの日本語版説明書。
- **`README.md`**: プロジェクトの英語版（または主要言語）説明書。
- **`generated-docs/`**: GitHub Actionsワークフローによって自動生成されたドキュメントやファイルが格納されます。
  - **`callgraph.html`**: CodeQLで生成された呼び出しグラフを表示するHTMLファイル。
  - **`callgraph.js`**: `callgraph.html` で使用されるJavaScriptファイルで、インタラクティブなグラフ表示機能を提供します（`.github_automation/callgraph/presets/callgraph.js` と同じ内容）。
  - **`development-status-generated-prompt.md`**: AIによって生成された開発状況プロンプトの成果物。
  - **`development-status.md`**: AIによって生成された開発状況レポート。
  - **`project-overview.md`**: AIによって生成されたプロジェクト概要。
  - **`style.css`**: `callgraph.html` で使用されるCSSファイル（`.github_automation/callgraph/presets/style.css` と同じ内容）。
- **`issue-notes/`**: GitHub ActionsによってIssueから自動生成されたメモや情報が格納されます。
- **`package-lock.json`**: `package.json` に記載された依存関係の正確なバージョンと依存ツリーを記録するファイル。
- **`package.json`**: プロジェクトのメタデータ（名前、説明、スクリプト、依存関係など）を定義するファイル。
- **`src/main.js`**: プロジェクトの例として含まれるJavaScriptファイル。シンプルな挨拶関数とメイン関数を含みます。

## 関数詳細説明
- **`escapeHtml`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: HTML特殊文字をエスケープし、セキュリティを向上させます。
  - **機能**: 文字列中の `<` `>` `&` `"` `'` などを対応するHTMLエンティティに変換します。
- **`getLayoutConfig`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: グラフのレイアウト設定を返します。
  - **機能**: グラフの表示形式や配置に関する設定オブジェクトを提供します。
- **`placeCentralNode`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: グラフの中心ノードを配置します。
  - **機能**: 呼び出しグラフの中心となるノードの位置を調整します。
- **`showNodeInfo`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: グラフノードの詳細情報を表示します。
  - **機能**: ユーザーがノードを選択した際に、そのノードに関する追加情報を情報パネルに表示します。
- **`showEdgeInfo`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: グラフエッジ（線）の詳細情報を表示します。
  - **機能**: ユーザーがエッジを選択した際に、そのエッジに関する追加情報を情報パネルに表示します。
- **`hideInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: 情報表示パネルを非表示にします。
  - **機能**: グラフ上の情報パネルを隠します。
- **`showInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: 情報表示パネルを表示します。
  - **機能**: グラフ上の情報パネルを表示します。
- **`toggleInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: 情報表示パネルの表示/非表示を切り替えます。
  - **機能**: 現在の表示状態に応じてパネルを切り替えます。
- **`generateGitHubURL`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: GitHubのURLを生成します。
  - **機能**: ファイルパスや行番号などから、対応するGitHub上のコードへのリンクを作成します。
- **`resetLayout`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: グラフのレイアウトを初期状態にリセットします。
  - **機能**: ユーザーの操作で変更されたグラフの配置を元に戻します。
- **`watchNodeMovementAndFixOverlapsWrap`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: ノードの移動を監視し、重なりを修正する処理のラッパー。
  - **機能**: グラフ描画ライブラリのコールバックとして機能し、ノードの重なりを解決する処理を呼び出します。
- **`watchNodeMovementAndFixOverlaps`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: ノードの移動を監視し、重なりを修正します。
  - **機能**: ノードが移動した際に、他のノードとの重なりを検出し、自動的に位置を調整して見やすくします。
- **`resolveNodeOverlaps`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: ノード間の重なりを解決します。
  - **機能**: 複数のノードが視覚的に重なっている場合、それらを離して配置し、視認性を高めます。
- **`switchLayout`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: グラフのレイアウトを切り替えます。
  - **機能**: 異なるアルゴリズムや設定に基づいてグラフのノードとエッジを再配置します。
- **`resetNodeStates`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: グラフノードの状態（色、選択など）をリセットします。
  - **機能**: 選択状態やハイライト表示を解除し、ノードを初期表示に戻します。
- **`fitToContent`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: グラフ全体がビューポートに収まるようにズームレベルを調整します。
  - **機能**: グラフの全ての要素が見えるように、表示領域を最適化します。
- **`toggleNodeLabels`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: ノードラベルの表示/非表示を切り替えます。
  - **機能**: グラフノードに付随するテキストラベルの表示をオンオフします。
- **`toggleCalleeLocationFilter`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: 呼び出し先の場所によるフィルタリングを切り替えます。
  - **機能**: 特定のファイルやモジュールからの呼び出し元/呼び出し先のみを表示するなど、フィルタリングを適用・解除します。
- **`replace`**, **`switch`**, **`function`**, **`max`**, **`on`**, **`if`**, **`for`**, **`ready`**, **`addListener`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: これらはJavaScriptの一般的なキーワード、組み込み関数 (`Math.max` など)、またはイベントハンドラ登録 (`jQuery.on`, `DOMContentLoaded` `ready` イベントリスナーなど) に関連する記述です。
  - **機能**: 個別のアプリケーションロジックを持つ関数ではなく、言語の基本的な制御構造やイベント処理の仕組みを構成する要素として機能します。
- **`greet`** (`src/main.js`):
  - **役割**: 特定のメッセージで挨拶を生成します。
  - **機能**: 入力された名前（`name`）を含む挨拶文字列を返します。
- **`main`** (`src/main.js`):
  - **役割**: プログラムの主要なエントリポイント。
  - **機能**: `greet` 関数を呼び出し、その結果をコンソールに出力します。

## 関数呼び出し階層ツリー
```
- switch (.github_automation/callgraph/presets/callgraph.js)
  - escapeHtml (.github_automation/callgraph/presets/callgraph.js)
    - getLayoutConfig ()
      - placeCentralNode ()
      - showNodeInfo ()
      - showEdgeInfo ()
      - hideInfoPanel ()
      - showInfoPanel ()
      - toggleInfoPanel ()
      - generateGitHubURL ()
      - resetLayout ()
      - watchNodeMovementAndFixOverlapsWrap ()
      - watchNodeMovementAndFixOverlaps ()
      - resolveNodeOverlaps ()
      - switchLayout ()
      - resetNodeStates ()
      - fitToContent ()
      - toggleNodeLabels ()
      - toggleCalleeLocationFilter ()
      - replace ()
      - function ()
      - max ()
      - on ()
      - ready ()
      - addListener ()
- if (.github_automation/callgraph/presets/callgraph.js)
- for (.github_automation/callgraph/presets/callgraph.js)

---
Generated at: 2025-09-09 09:30:04 JST

```

### issue-notes/10.md
```md
# issue callgraph を他projectから使いやすくする #10
[issues #10](https://github.com/cat2151/github-actions/issues/10)

# ブレインストーミング
- 洗い出し
    - 他projectから使う場合の問題を洗い出す、今見えている範囲で、手早く、このnoteに可視化する
    - 洗い出したものは、一部は別issueに切り分ける
- close条件
    - まずは4つそれぞれを個別のdirに切り分けてtest greenとなること、とするつもり
    - それ以外は別issueに切り分けるつもり
- 切り分け
    - 別dirに切り分ける
        - 課題、`codeql-queries/` が `.github/` 配下にある。対策、`.github_automation/callgraph_enhanced/codeql-queries/` とする
        - 課題、scriptも、`.github/`配下にある。対策、移動する
        - 方法、agentを試し、ハルシネーションで時間が取られるなら人力に切り替える
- test
    - local WSL + act でtestする
- 名前
    - 課題、名前 enhanced が不要。対策、名前から enhanced を削除してymlなどもそれぞれ同期して修正すべし
- docs
    - call導入手順を書く

```

### issue-notes/11.md
```md
# issue translate を他projectから使いやすくする #11
[issues #11](https://github.com/cat2151/github-actions/issues/11)

# ブレインストーミング
- 課題、個別dirへの移動が必要。
    - scripts
- 課題、promptをハードコーディングでなく、promptsに切り出す。
    - さらに、呼び出し元ymlから任意のpromptsを指定できるようにする。
- 済、課題、README以外のtranslateも可能にするか検討する
    - 対策、シンプル優先でREADME決め打ちにする
        - 理由、README以外の用途となると、複数ファイルをどうGemini APIにわたすか？等、仕様が爆発的にふくらんでいくリスクがある
        - README以外の用途が明確でないうちは、README決め打ちにするほうがよい
- docs
    - call導入手順を書く

```

### issue-notes/12.md
```md
# issue project-summary を他projectから使いやすくする #12
[issues #12](https://github.com/cat2151/github-actions/issues/12)

- 課題、個別dirへの移動が必要。
    - scripts
    - prompts
        - さらに、呼び出し元ymlから任意のpromptsを指定できるようにする。
- 課題、これだと別project時に動かない。
    - 現在はたまたま共通ワークフローのリポジトリと呼び出し元ワークフローのリポジトリが同一のため、
    - 呼び出し元checkoutをするだけで、
    - 共通ワークフロー側のscriptファイルが取得できてしまっている
    - 対策
        - 他のyml同様、共通ワークフロー側のリポジトリをcheckoutする
- docs
    - call導入手順を書く
- 課題、promptを呼び出し元ymlから指定できるようにすべし。
    - 現在はscript内にファイル名決め打ちで存在しているため、他のprojectで別ymlを指定できない。
    - 方法、他のcallワークフローで指定しているところを参考にすべし


```

### issue-notes/13.md
```md
# issue issue-note を他projectから使いやすくする #13
[issues #13](https://github.com/cat2151/github-actions/issues/13)

- docs
    - call導入手順を書く

```

### issue-notes/16.md
```md
# issue issue-note / project-summary / translate / callgraph をtonejs-mml-to-jsonから呼び出す #16
[issues #16](https://github.com/cat2151/github-actions/issues/16)

# これまでの課題
- issue issue-note / project-summary / translate / callgraph は、github-actions リポジトリ上ではtest greenである。
- だが他のリポジトリにおいて動作するか？が可視化不足である。

# 対策
- issue-note / project-summary / translate / callgraph をtonejs-mml-to-jsonから呼び出す
- 詳しく
    - まず、現状、tonejs-mml-to-json でその4つのworkflowがどうなっているか、このmdに可視化する
    - 例えば、既に呼び出している、呼び出していない、tonejs-mml-to-jsonにある古いworkflowを呼び出している

# 調査結果
- まず、現状、tonejs-mml-to-json でその4つのworkflowがどうなっているか、このmdに可視化する
    - 結果：
        - issue-note
            - tonejs-mml-to-jsonにある古いworkflowを呼び出している
        - project-summary
            - tonejs-mml-to-jsonにある古いworkflowを呼び出している
        - translate
            - tonejs-mml-to-jsonにある古いworkflowを呼び出している
        - callgraph
            - tonejs-mml-to-jsonにある古いworkflowを呼び出している

# どうする？
- issue-note
    - github-actions リポジトリにある、call-issue-note.yml をcpして使うようにする、まず単純cpして動くかを確認する
- project-summary
    - github-actions リポジトリにある、call-daily-project-summary.yml をcpして使うようにする、まず単純cpして動くかを確認する
- translate
    - github-actions リポジトリにある、call-translate-readme.yml をcpして使うようにする、まず単純cpして動くかを確認する
- callgraph
    - github-actions リポジトリにある、call-callgraph.yml をcpして使うようにする、まず単純cpして動くかを確認する

```

### issue-notes/2.md
```md
# issue GitHub Actions「関数コールグラフhtmlビジュアライズ生成」を共通ワークフロー化する #2
[issues #2](https://github.com/cat2151/github-actions/issues/2)


# prompt
```
あなたはGitHub Actionsと共通ワークフローのスペシャリストです。
このymlファイルを、以下の2つのファイルに分割してください。
1. 共通ワークフロー       cat2151/github-actions/.github/workflows/callgraph_enhanced.yml
2. 呼び出し元ワークフロー cat2151/github-actions/.github/workflows/call-callgraph_enhanced.yml
まずplanしてください
```

# 結果
- indent
    - linter？がindentのエラーを出しているがyml内容は見た感じOK
    - テキストエディタとagentの相性問題と判断する
    - 別のテキストエディタでsaveしなおし、テキストエディタをreload
    - indentのエラーは解消した
- LLMレビュー
    - agent以外の複数のLLMにレビューさせる
    - prompt
```
あなたはGitHub Actionsと共通ワークフローのスペシャリストです。
以下の2つのファイルをレビューしてください。最優先で、エラーが発生するかどうかだけレビューしてください。エラー以外の改善事項のチェックをするかわりに、エラー発生有無チェックに最大限注力してください。

--- 共通ワークフロー

# GitHub Actions Reusable Workflow for Call Graph Generation
name: Generate Call Graph

# TODO Windowsネイティブでのtestをしていた名残が残っているので、今後整理していく。今はWSL act でtestしており、Windowsネイティブ環境依存問題が解決した
#  ChatGPTにレビューさせるとそこそこ有用そうな提案が得られたので、今後それをやる予定
#  agentに自己チェックさせる手も、セカンドオピニオンとして選択肢に入れておく

on:
  workflow_call:

jobs:
  check-commits:
    runs-on: ubuntu-latest
    outputs:
      should-run: ${{ steps.check.outputs.should-run }}
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 50 # 過去のコミットを取得

      - name: Check for user commits in last 24 hours
        id: check
        run: |
          node .github/scripts/callgraph_enhanced/check-commits.cjs

  generate-callgraph:
    needs: check-commits
    if: needs.check-commits.outputs.should-run == 'true'
    runs-on: ubuntu-latest
    permissions:
      contents: write
      security-events: write
      actions: read

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set Git identity
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"

      - name: Remove old CodeQL packages cache
        run: rm -rf ~/.codeql/packages

      - name: Check Node.js version
        run: |
          node .github/scripts/callgraph_enhanced/check-node-version.cjs

      - name: Install CodeQL CLI
        run: |
          wget https://github.com/github/codeql-cli-binaries/releases/download/v2.22.1/codeql-linux64.zip
          unzip codeql-linux64.zip
          sudo mv codeql /opt/codeql
          echo "/opt/codeql" >> $GITHUB_PATH

      - name: Install CodeQL query packs
        run: |
          /opt/codeql/codeql pack install .github/codeql-queries

      - name: Check CodeQL exists
        run: |
          node .github/scripts/callgraph_enhanced/check-codeql-exists.cjs

      - name: Verify CodeQL Configuration
        run: |
          node .github/scripts/callgraph_enhanced/analyze-codeql.cjs verify-config

      - name: Remove existing CodeQL DB (if any)
        run: |
          rm -rf codeql-db

      - name: Perform CodeQL Analysis
        run: |
          node .github/scripts/callgraph_enhanced/analyze-codeql.cjs analyze

      - name: Check CodeQL Analysis Results
        run: |
          node .github/scripts/callgraph_enhanced/analyze-codeql.cjs check-results

      - name: Debug CodeQL execution
        run: |
          node .github/scripts/callgraph_enhanced/analyze-codeql.cjs debug

      - name: Wait for CodeQL results
        run: |
          node -e "setTimeout(()=>{}, 10000)"

      - name: Find and process CodeQL results
        run: |
          node .github/scripts/callgraph_enhanced/find-process-results.cjs

      - name: Generate HTML graph
        run: |
          node .github/scripts/callgraph_enhanced/generate-html-graph.cjs

      - name: Copy files to generated-docs and commit results
        run: |
          node .github/scripts/callgraph_enhanced/copy-commit-results.cjs

--- 呼び出し元
# 呼び出し元ワークフロー: call-callgraph_enhanced.yml
name: Call Call Graph Enhanced

on:
  schedule:
    # 毎日午前5時(JST) = UTC 20:00前日
    - cron: '0 20 * * *'
  workflow_dispatch:

jobs:
  call-callgraph-enhanced:
    # uses: cat2151/github-actions/.github/workflows/callgraph_enhanced.yml
    uses: ./.github/workflows/callgraph_enhanced.yml # ローカルでのテスト用
```

# レビュー結果OKと判断する
- レビュー結果を人力でレビューした形になった

# test
- #4 同様にローカル WSL + act でtestする
- エラー。userのtest設計ミス。
  - scriptの挙動 : src/ がある前提
  - 今回の共通ワークフローのリポジトリ : src/ がない
  - 今回testで実現したいこと
    - 仮のソースでよいので、関数コールグラフを生成させる
  - 対策
    - src/ にダミーを配置する
- test green
  - ただしcommit pushはしてないので、html内容が0件NG、といったケースの検知はできない
  - もしそうなったら別issueとしよう

# test green

# commit用に、yml 呼び出し元 uses をlocal用から本番用に書き換える

# closeとする
- もしhtml内容が0件NG、などになったら、別issueとするつもり

```

### issue-notes/20.md
```md
# issue project-summary の development-status 生成時、issue-notes/ 配下のmdにファイル名が書いてあれば、そのファイル内容もpromptに添付、を試す #20
[issues #20](https://github.com/cat2151/github-actions/issues/20)

# 何が困るの？
- Geminiに次の一手を生成させるとき、cjsの内容も添付したほうが、生成品質が改善できる可能性がある。

# 案
## outputのimage
- promptが言及するfilename、について、そのfileの内容もすべてpromptに含める。
    - 軸は、projectのfilename一覧である。
        - 一覧それぞれのfilenameについて、promptで言及されているものをfile内容埋め込み、とする。
- 方向性
    - シンプルで明確なルール、曖昧さのないルールで、メンテを楽にすることを優先する
    - 余分なファイルが出てしまうが割り切ってOKとし、欠落リスクを減らせることを優先する
- 備考
    - 曖昧でメンテが必要な「documentからのfilename抽出」をやめ、
        - かわりに、逆に、「今のprojectにあるfileすべてのうち、promptで言及されているもの」を軸とする
## 実現方法の案
- project全体について、filenameと、filepath配列（複数ありうる）、のmapを取得する。そういう関数Aをまず実装する。
    - filepathは、agentが扱えるよう、github上のworkの絶対pathではなく、projectRootからの相対パス表記とする。
- そして、そのfilenameにmatchするfilepath配列について、filepathとファイル内容を記したmarkdown文字列を返却、という関数Bを実装する。
- さらに、Geminiにわたすpromptについて、前述の関数Aのfilenameそれぞれについて、prompt内を検索し、filenameが存在する場合は、そのfilenameについて、関数Bを用いてmarkdown文字列を取得する。そうして得られたmarkdown文字列群を返却する、という関数Cを実装する。
- さらに、promptの末尾に書いてあるプレースホルダー「`${file_contents}`」を、関数Cの結果で置き換える、という関数Dを実装する。
- 実際には、Geminiにわたすpromptのプレースホルダー展開は、2回にわたる必要がある。1回目でissues-note内容をpromptに埋め込む。2回目でそのpromptに対して関数Dを適用する。
## 備忘
- 上記は、agentにplanさせてレビューし、context不足と感じたら上記をメンテ、というサイクルで書いた。

# どうする？
- 上記をagentに投げる。documentやtestについてのplanもしてくるかもしれないがそこは時間の都合で省略して実施させるつもり。
- 投げた、実装させた、レビューして人力リファクタリングした
- testする

# 結果
- バグ
    - この20.mdにあるプレースホルダーが置換されてしまっている
    - issue-notesで言及されていないfileまで添付されてしまっている
- 分析
    - この20.mdにあるプレースホルダーが置換されてしまっている
        - 原因
            - 20.mdにあるプレースホルダーまで置換対象としてしまっていたため。
            - prompt全体のプレースホルダーを置換対象としてしまっていたため。
            - issue-notesを埋め込んだあとでの、プレースホルダー処理だったので、
                - 20.md が置換対象となってしまったため。
        - 対策案
            - プレースホルダーはすべて、「行頭と行末で囲まれている」ときだけ置換対象とする。
                - つまり文中やcode中のプレースホルダーは置換対象外とする。
            - さらに、2つ以上プレースホルダーが出たら想定外なので早期エラー終了させ、検知させる。
    - issue-notesで言及されていないfileまで添付されてしまっている
        - 原因
            - promptに、既にprojectの全file listが書き込まれたあとなので、
                - issue-noteで言及されていなくても、
                - promptの全file listを対象に検索してしまっている
        - 対策案の候補
            - プレースホルダー置換の順番を変更し、全file listは最後に置換する
            - file添付の対象を変更し、promptでなく、issue-notesとする
                - これが範囲が絞られているので安全である、と考える
        - 備忘
            - 全fileの対象は、リモートリポジトリ側のfileなので、secretsの心配はないし、実際に検索して確認済み

# どうする？
- agent半分、人力が半分（agentがハルシネーションでソース破壊したので、関数切り分けしたり、リファクタリングしたり）。
- で実装した。
- testする

```

### issue-notes/21.md
```md
# issue project-summary の development-status 生成時、project-overviewが生成済みのproject-overview.mdもpromptに添付、を試す #21
[issues #21](https://github.com/cat2151/github-actions/issues/21)

# 何が困るの？
- project-overview.mdがpromptに添付されていたほうが、Geminiの生成品質が改善できる可能性がある。
    - メリットは、ファイル一覧、関数一覧、をGeminiにわたせること

# 検討事項
- 課題、その一覧に付記されている「ファイルや関数の要約」は、Geminiが「ファイル名や関数名を元に生成しただけ」で、「ファイル内容や関数内容を参照せずに生成した」可能性が高い
    - 対策、project-overview.mdに依存しない。
        - 方法、新規関数をagentに実装させる
            - 新規関数で、ファイル一覧と関数一覧を生成する
        - 根拠、そのほうが、シンプルに目的を達成できる可能性が高そう。
        - 根拠、project-overview.mdだと、不具合として.github 配下のymlがlistに含まれておらず、ymlに関するissue、に関する生成、をするとき不具合の可能性がありそう。そういった、別機能の不具合に影響されがち。
- 課題、早期に実施したほうが毎日好影響が出る可能性がある
    - 対策、上記検討事項の対処は後回しにして、先に実装してみる
    - agentに投げる
- 課題、ProjectSummaryCoordinator をみたところ、並列処理されている
    - なので、project-overview.mdを参照したいときに、まだ生成されていない、という可能性が高い
    - 対策、前述の、新規関数で、ファイル一覧と関数一覧を生成させる

# agentに投げるための整理
- 編集対象ファイル
    - prompt
        - .github_automation/project_summary/prompts/development-status-prompt.md
        - 編集内容
            - projectのファイル一覧を埋め込む用の、プレースホルダーを追加する
    - source
        - .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
        - 編集内容
            - projectのファイル一覧を生成する関数、を実装し、
            - それを前述のプレースホルダーに埋め込む

# agentに投げて実装させた

# test結果
- 以下が不要
    - .git/
    - node_modules/

# どうする？
- agentに上記を変更させた
- testする


```

### issue-notes/3.md
```md
# issue GitHub Actions「issue note生成」を共通ワークフロー化する #3
[issues #3](https://github.com/cat2151/github-actions/issues/3)

- 前提
  - userは、translateのworkflowを共通ワークフロー化し、動くようにしたので、共通ワークフロー化の知識がある
  - よって、今回は、promptでplanさせ、そのplanをuserがレビューし、planの改善を指示できるので、ハルシネーションのリスクを下げることができる

- prompt
```
あなたはGitHub Actionsと共通ワークフローのスペシャリストです。
このymlはまだ共通ワークフロー化されず、
呼び出し元からコピーされたままの状態です。
このymlファイル名のまま、
中身を共通ワークフロー化してください。
呼び出し元ymlは別途書きますので気にしないでください。
まずplanしてください
```

- plan 生成結果
```
共通ワークフロー化のためのplanは以下の通りです。

1. 目的
現在の issue-note.yml を「共通ワークフロー」として再設計し、他リポジトリや他ワークフローから workflow_call で呼び出せるようにする。
2. 主な変更点
on: トリガーを workflow_call に変更（直接イベントで起動しない）。
必要な入力（inputs）やシークレット（secrets）を workflow_call セクションで定義。
github.event.issue などのイベント依存部分を、inputs経由で受け取る形に修正。
既存の処理（issueノート生成、コミット、issue body更新）はそのまま活かすが、パラメータ化する。
3. 具体的な修正内容
on: issues: → on: workflow_call: に変更。
inputs で必要な値（例: issue_title, issue_number, issue_body, issue_url など）を受け取る。
スクリプト内の ${{ github.event.issue.xxx }} を ${{ inputs.xxx }} に置換。
github-script ステップも同様にinputsを参照。
必要に応じて secrets も workflow_call で受け取れるようにする。
4. ファイル名・配置
ファイル名はそのまま issue-note.yml。
配置場所は workflows でOK（共通ワークフローとしてもこの場所で良い）。
5. 呼び出し元への影響
呼び出し元ワークフローで uses: <repo>/.github/workflows/issue-note.yml@main のように参照し、inputsを渡す形になる。
このplanで進めます。次に、実際の共通ワークフロー化のためのyml修正案を作成しますか？
```

- userがplanレビューし、OKを出した
- agentに生成結果ymlをレビューさせた、OKとなった
  - userはこのレビューは認知負荷が高いのでskipとする（単純な細かい間違い探し作業になるので、それはagentに任せた）
-  エラー。呼び出し元ymlのエラーがあり修正。共通ワークフローのエラー指摘があり、共通ワークフロー側の修正が必要となった
```
原因の分析：

呼び出し元（tonejs-mml-to-jsonのissue-note.yml）は、reusable workflow（cat2151/github-actions/.github/workflows/issue-note.yml@main）をusesで呼び出し、inputsをwithで渡しています。
共通ワークフロー（reusable workflow）は inputs を workflow_call で受け取り、各ステップで ${{ inputs.xxx }} で参照しています。
しかし、エラーが発生したのは actions/github-script@v7 の script 内です。
エラーの本質的な原因：

actions/github-script の script: で ${{ inputs.issue_number }} のような式を直接 JavaScript テンプレートリテラル内で使っていますが、これはサポートされていません。
script: の中は JavaScript であり、YAMLの ${{ ... }} は展開されません（または意図通りに展開されません）。
そのため、inputs 変数は script 内の JavaScript で未定義となり、ReferenceError になります。
正しい書き方：

actions/github-script の script: でワークフローの inputs を使いたい場合は、with: で input を environment 変数や script の引数として渡し、JavaScript で process.env から取得するか、github-script の input 機能を使う必要があります。
例（修正版）：

このように、inputs の値を env で渡し、script 内では process.env で参照してください。

まとめ：

actions/github-script の script 内で ${{ inputs.xxx }} を直接使うと ReferenceError になる
env: で値を渡し、process.env で参照するのが正しい
修正が必要です。修正版のワークフローが必要な場合はお知らせください。
```

- test green
- closeとする

```

## 最近の変更（過去7日間）
### コミット履歴:
55c1187 #20 プレースホルダーが見つかるように修正したつもり。agentは失敗したので外部LLMにcodeとlogをすべて投げて、String.rawを得た
df253f7 #20 プレースホルダーが見つからないエンバグが発生。バグ調査中
e8383da #20 置き換えに失敗していたのでバグ調査中。あわせてpromptを見直した
b321c54 Update project summaries (overview & development status)
587a78a #20 落ちないようにしたつもり。あわせて、agentが複雑にasyncしていたのを、処理速度より読みやすさを優先して同期処理に統一したつもり
247dbb6 #20 LLMソース破壊が発生したので、ソースを分割してProjectFileUtils.cjsに切り出した。あわせてプレースホルダーとみなす条件を厳しくて誤変換を防止した。あわせてfile内容はissue-notesから取得とし、誤変換を防止した。
48ce194 Merge branch 'main' of github.com:cat2151/github-actions into main
271f52f fix #24 2日やってエラーなく、ソース机上確認OKだったのでcloseとする
7367b1c Update project summaries (overview & development status)
1b21b89 Update callgraph.html [auto]

### 変更されたファイル:
.github_automation/project_summary/prompts/development-status-prompt.md
.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs
generated-docs/callgraph.html
generated-docs/development-status-generated-prompt.md
generated-docs/development-status.md
generated-docs/project-overview.md
issue-notes/20.md


---
Generated at: 2025-09-09 23:03:02 JST

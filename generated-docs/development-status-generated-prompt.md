Last updated: 2025-08-28


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


以下の開発状況情報を参考にして要約を生成してください：

## 現在のオープンIssues
## [Issue #22](issue-notes/22.md): project-summary の development-status 生成時、Geminiに与えたprompt、もcommit push、を試す
[issue-notes/22.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/22.md)

...
ラベル: 
--- issue-notes/22.md の内容 ---

```markdown
# issue project-summary の development-status 生成時、Geminiに与えたprompt、もcommit push、を試す #22
[issues #22](https://github.com/cat2151/github-actions/issues/22)

# 何が困るの？
- 生成された development-status.md の妥当性がわかりづらいし、バグった場合の原因調査がしづらい

# 対策案
- Geminiに与えたpromptをfileにしてcommit pushしておくと、デバッグに役立つ可能性がある。

# 方法案
- Geminiに与えるprompt を生成時、それをfileにsaveし、commit push対象にする。
- ひとまずgenerated-docs/ に保存する。落ち着いたら移動先を検討する。
    - generated-docs/ 配下のまま、も有力な候補である。
        - なぜなら、cjsによってgenerateされたdocなので。

# 日次バッチでpromptを生成させ、agentに投げた
- レビューした
- 修正させた

# 結果
- エラー。pathのミス。呼び出し元側に保存したいのに、共通ワークフロー側に保存となってしまった。
- 対策、ymlで引数を指定するようにした。
- testする。

```

## [Issue #21](issue-notes/21.md): project-summary の development-status 生成時、project-overviewが生成済みのproject-overview.mdもpromptに添付、を試す
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

```

## [Issue #20](issue-notes/20.md): project-summary の development-status 生成時、issue-notes/ 配下のmdにファイル名が書いてあれば、そのファイル内容もpromptに添付、を試す
[issue-notes/20.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/20.md)

...
ラベル: 
--- issue-notes/20.md の内容 ---

```markdown
# issue project-summary の development-status 生成時、issue-notes/ 配下のmdにファイル名が書いてあれば、そのファイル内容もpromptに添付、を試す #20
[issues #20](https://github.com/cat2151/github-actions/issues/20)

# 何が困るの？
- Geminiに次の一手を生成させるとき、cjsの内容も添付したほうが、生成品質が改善できる可能性がある。

# 方法は？
- cjsでファイル検索をさせる。
    - project内のファイル検索をさせる。
    - まず書いてあるファイル名そのもので検索させる。
    - 見つからない場合、パス部分を削除して改めてproject内の全ファイルlistから見つかった最初のファイルを対象とする。
- 課題、issue-notes/ 配下のmdファイルの内容、からファイル名を得る方法が曖昧。
    - 案、.yml と .cjs がある部分で、space区切り。
    - 案、agentに方法を検討させる。

```

## [Issue #19](issue-notes/19.md): project-summary の development-status 生成時、issue-notes/ 配下のmdファイルの内容を参照させる
[issue-notes/19.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/19.md)

...
ラベル: 
--- issue-notes/19.md の内容 ---

```markdown
# issue project-summary の development-status 生成時、issue-notes/ 配下のmdファイルの内容を参照させる #19
[issues #19](https://github.com/cat2151/github-actions/issues/19)

# 何が困るの？
- issue解決に向けての次の一手の内容が実態に即していないことが多い。

# 対策案
- issue-notes/ 配下のmdファイルの内容を参照させる

# 備考
- さらにmd内に書かれているfileも、project内をcjsに検索させて添付させると、よりGeminiの生成品質が向上する可能性がある。
    - [issues #20](https://github.com/cat2151/github-actions/issues/20)
- さらにproject overviewでGeminiがまとめたmdも、Geminiに与えると、よりGeminiの生成品質が向上する可能性がある。
    - [issues #21](https://github.com/cat2151/github-actions/issues/21)
- さらに、Geminiに与えたpromptをfileにしてcommit pushしておくと、デバッグに役立つ可能性がある。
    - [issues #22](https://github.com/cat2151/github-actions/issues/22)

# close条件
- issues #22 がcloseされること。
- commitされたpromptを確認し、issue-notes/ 配下のmdファイルがpromptに添付されていること、が確認できること。

# 状況
- 課題、実装したがtestができていない
- 対策、issues #22 が実装されれば、testができる
- 対策、issues #22 のcloseを待つ

```

## [Issue #18](issue-notes/18.md): DevelopmentStatusGenerator.cjs 内に、Geminiに与えるpromptがハードコーディングされてしまっている
[issue-notes/18.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/18.md)

...
ラベル: 
--- issue-notes/18.md の内容 ---

```markdown
# issue DevelopmentStatusGenerator.cjs 内に、Geminiに与えるpromptがハードコーディングされてしまっている #18
[issues #18](https://github.com/cat2151/github-actions/issues/18)

# 何が困るの？
- project把握しづらい。どこにpromptが書いてあるのか、把握しづらい。
- prompts/ にほかのpromptがあるため、方針がブレていると、読みづらい。
- 備忘、いくらテンプレートリテラルとプレースホルダーで密結合しているからとはいえ、ハードコーディングはNG。
    - それらはreplaceを使う等で楽に切り出しできるので。

# 問題のcjsの場所は？
- ファイルパス : .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
- 関数 : generateDevelopmentStatus

```

## [Issue #17](issue-notes/17.md): development-status が生成したmdに誤りがある。issue-note へのlinkがURL誤りで、404となってしまう
[issue-notes/17.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/17.md)

...
ラベル: 
--- issue-notes/17.md の内容 ---

```markdown
# issue development-status が生成したmdに誤りがある。issue-note へのlinkがURL誤りで、404となってしまう #17
[issues #17](https://github.com/cat2151/github-actions/issues/17)

# 事例
- 生成したmdのURL：
    - https://github.com/cat2151/github-actions/blob/main/generated-docs/development-status.md
- そのmdに含まれるlink、404である：
    - https://github.com/cat2151/github-actions/blob/main/generated-docs/issue-notes/16.md

# どうする？
- 案
    - promptを修正する
    - promptの場所は：
        - .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
    - 備考、cjs内にpromptがハードコーディングされており、promptをメンテしづらいので別途対処する : [issues #18](https://github.com/cat2151/github-actions/issues/18)

```

## [Issue #16](issue-notes/16.md): issue-note / project-summary / translate / callgraph をtonejs-mml-to-jsonから呼び出す
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

## [Issue #13](issue-notes/13.md): issue-note を他projectから使いやすくする
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

## [Issue #12](issue-notes/12.md): project-summary を他projectから使いやすくする
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

## [Issue #11](issue-notes/11.md): translate を他projectから使いやすくする
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

## 最近の変更（過去7日間）
コミット履歴:
5c4d14f Update callgraph.html [auto]
70c2489 #22 バグ修正。プロンプトファイルの保存pathを修正したつもり。
4e0fd08 Update callgraph.html [auto]
4c832d8 Merge branches 'main' and 'main' of github.com:cat2151/github-actions into main
a59c9a6 trim trailing white space
3408c2d vscode設定 : trim trailing white space : true
1672d80 #22 Geminiに投げる直前の、issue情報反映済みpromptを、ファイルsaveしcommit pushするようにしたつもり
5569c8a Update project summaries (overview & development status)
d05a619 Update callgraph.html [auto]
a6e15ae #19 状況を整理した

変更されたファイル:
.github/workflows/daily-project-summary.yml
.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs
.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
.github_automation/project_summary/scripts/generate-project-summary.cjs
.github_automation/project_summary/scripts/shared/BaseGenerator.cjs
.vscode/settings.json
generated-docs/callgraph.html
generated-docs/development-status.md
generated-docs/project-overview.md
issue-notes/22.md

上記の情報を基に、プロンプトで指定された形式で開発状況を生成してください。
Issue番号を記載する際は、必ず [Issue #番号](issue-notes/番号.md) の形式でMarkdownリンクとして記載してください。


---
Generated at: 2025-08-28 07:04:08 JST

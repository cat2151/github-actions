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
以下の開発状況情報を参考にして要約を生成してください：

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
## [Issue #24](../issue-notes/24.md): Geminiが503で落ちたのでretryを実装する
[issue-notes/24.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/24.md)

...
ラベル: 
--- issue-notes/24.md の内容 ---

```markdown
# issue Geminiが503で落ちたのでretryを実装する #24
[issues #24](https://github.com/cat2151/github-actions/issues/24)

# 何が困るの？
- 朝起きて、development statusがgenerateされてないのは困る
    - それをタスク実施のヒントにしているので
    - 毎朝generatedな状態を維持したい

# 方法
- retryを実装する
    - 現在は `this.model.generateContent(developmentPrompt);`
    - 実装後は `this.generateContent(developmentPrompt);`
    - BaseGenerator 側に、
        - generateContent関数を実装する
            - そこで、
                - `this.model.generateContent(developmentPrompt);` する
                - 503のとき、
                    - retryあり
                    - Exponential Backoff

# 結果
- 直近の実行結果をlog確認した
    - 本番で503が発生しなかったことをlog確認した
- 本番の503 testは、今回発生しなかったので、できず
- ここ1週間で2回発生しているので、次の1週間で1回発生する想定
- ソース机上確認した

# どうする？
- このissueはcloseしたほうがわかりやすい、と判断する
- 1週間503を毎日チェック、は省略とする
- もし今後503が発生したら別issueとする

# closeとする

```

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
- さらに、promptの末尾に書いてあるプレースホルダー「`### .github/workflows/call-callgraph.yml
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

### .github_automation/callgraph/codeql-queries/callgraph.ql
```ql
/**
 * @name Function Call Graph
 * @description Extract function call relationships
 * @kind problem
 * @problem.severity info
 * @precision low
 * @id javascript/function-call-graph
 * @tags callgraph
 *       maintainability
 *       metrics
 */

import javascript

// 方針 : agentがハルシネーションでql破壊を連発するので、ここでは絞り込みせず、後続処理で、nodesとedgesを絞り込む方法で応急対策します


from CallExpr call, string callerName, string calleeName, Location callerLoc, Location calleeLoc
where
  // 呼び出し元を特定
  (
    exists(Function caller |
      call.getEnclosingFunction() = caller and
      exists(caller.getName()) and
      callerName = caller.getName() and
      callerLoc = caller.getLocation()
    )
    or
    exists(Function caller |
      call.getEnclosingFunction() = caller and
      not exists(caller.getName()) and
      callerName = "anonymous_" + caller.getLocation().getStartLine() and
      callerLoc = caller.getLocation()
    )
    or
    exists(MethodDefinition method |
      call.getEnclosingFunction() = method.getBody() and
      callerName = method.getName() and
      callerLoc = method.getLocation()
    )
    or
    exists(Constructor cons |
      call.getEnclosingFunction() = cons and
      callerName = "constructor" and
      callerLoc = cons.getLocation()
    )
    or
    (
      not exists(call.getEnclosingFunction()) and
      callerName = "global" and
      callerLoc = call.getLocation()
    )
    or
    (
      not exists(Function f | call.getEnclosingFunction() = f) and
      callerName = "unknown_" + call.getLocation().getStartLine() and
      callerLoc = call.getLocation()
    )
  ) and

  // 呼び出し先を特定
  (
    exists(Identifier id |
      call.getCallee() = id and
      calleeName = id.getName() and
      exists(Function calleeF | calleeF.getName() = calleeName and calleeLoc = calleeF.getLocation())
    )
    or
    exists(PropAccess prop |
      call.getCallee() = prop and
      calleeName = prop.getPropertyName() and
      exists(MethodDefinition calleeM | calleeM.getName() = calleeName and calleeLoc = calleeM.getLocation())
    )
    or
    (
      not exists(Identifier id | call.getCallee() = id) and
      not exists(PropAccess prop | call.getCallee() = prop) and
      calleeName = call.getCallee().toString() and
      calleeLoc = call.getLocation()
    )
  )

  and callerName != ""
  and calleeName != ""

select call,
  callerName + " (" + callerLoc.toString() + ")"
  + " -> " +
  calleeName + " (" + calleeLoc.toString() + ")"
  + " (at " + call.getLocation().toString() + ")"

```

### .github_automation/callgraph/codeql-queries/codeql-pack.lock.yml
```yml
---
lockVersion: 1.0.0
dependencies:
  codeql/dataflow:
    version: 2.0.10
  codeql/javascript-all:
    version: 2.6.6
  codeql/mad:
    version: 1.0.26
  codeql/regex:
    version: 1.0.26
  codeql/ssa:
    version: 2.0.2
  codeql/threat-models:
    version: 1.0.26
  codeql/tutorial:
    version: 1.0.26
  codeql/typetracking:
    version: 2.0.10
  codeql/util:
    version: 2.0.13
  codeql/xml:
    version: 1.0.26
  codeql/yaml:
    version: 1.0.26
compiled: false

```

### .github_automation/callgraph/codeql-queries/qlpack.yml
```yml

name: tonejs-mml-to-json/callgraph-queries
version: 1.0.0
dependencies:
  codeql/javascript-all: "*"

```

### .github_automation/callgraph/config/example.json
```json
[
"src/main.js"
]

```

### .github_automation/callgraph/docs/callgraph.md
```md
# 関数呼び出しグラフ生成システム

※AI生成で過不足があります。新仕様を反映していません

このドキュメントでは、GitHub ActionsとCodeQLを使用してJavaScript/TypeScriptコードの関数呼び出しグラフを自動生成するシステムについて説明します。

## 概要

このシステムは以下の機能を提供します：

1. **自動解析**: 毎日午前5時（JST）にCodeQLを使ってコードを解析
2. **スマートトリガー**: 過去24時間にユーザーのコミットがある場合のみ実行
3. **可視化**: Cytoscape.jsを使ったインタラクティブなグラフ表示
4. **自動更新**: 生成されたグラフを自動的にリポジトリに保存

## システム構成

### ファイル構成

```
.github/
├── workflows/
│   └── callgraph.yml          # メインワークフロー
├── codeql-queries/
│   └── callgraph.ql           # CodeQLカスタムクエリ
├── scripts/
│   └── convert-to-html.cjs    # CSV→HTML変換スクリプト
└── docs/
    └── callgraph.md           # このドキュメント

generated-docs/
└── callgraph.html             # 生成されたグラフ（自動生成）
```

### 処理フロー

1. **コミットチェック**
   - 過去24時間のコミット履歴を確認
   - GitHub Actionsボット以外のコミットがある場合のみ続行

2. **CodeQL解析**
   - JavaScript/TypeScriptファイルを対象に解析実行
   - カスタムクエリで関数呼び出し関係を抽出

3. **データ変換**
   - CodeQLの結果（SARIF形式）からCSVデータを生成
   - 「呼び出し元 -> 呼び出し先」の形式でペアを抽出

4. **グラフ生成**
   - CSVデータをCytoscape.js用のJSONに変換
   - インタラクティブなHTMLファイルを生成

5. **結果保存**
   - 生成されたHTMLファイルをリポジトリにコミット・プッシュ

## CodeQLクエリの詳細

### `callgraph.ql`の機能

- **対象**: JavaScript/TypeScriptの関数呼び出し
- **抽出内容**: 関数名レベルでの呼び出し関係
- **除外項目**:
  - 匿名関数
  - 名前のない関数
- **含む項目**:
  - 直接的な関数呼び出し
  - メソッド呼び出し
  - 自己再帰呼び出し

### クエリの仕組み

```javascript
// 主要な検出ロジック
from DataFlow::CallNode call, Function caller, Function callee
where
  caller = call.getEnclosingFunction() and
  callee = call.getACallee() and
  exists(caller.getName()) and
  exists(callee.getName())
```

## 生成されるHTMLの機能

### インタラクティブ機能

- **ドラッグ**: ノード（関数）の位置調整
- **ズーム**: マウスホイールでのズームイン/アウト
- **ハイライト**: ノードクリックで関連する呼び出し関係を強調
- **レイアウト**: 自動的な美しいグラフレイアウト

### 操作ボタン

- **Fit to Screen**: グラフ全体を画面に収める
- **Reset Layout**: レイアウトを初期状態に戻す
- **Toggle Labels**: 関数名の表示/非表示切り替え

### 統計情報

- 総関数数
- 総呼び出し関係数
- 生成日時

## 設定のカスタマイズ

### 実行タイミングの変更

`.github/workflows/callgraph.yml`の`cron`設定を変更：

```yaml
schedule:
  - cron: '0 20 * * *'  # 毎日JST 5:00 (UTC 20:00前日)
```

### 解析対象の変更

CodeQLクエリ（`callgraph.ql`）を編集して：

- 特定のファイルやディレクトリを除外
- 追加の関数呼び出しパターンを含める
- フィルタリング条件を調整

### グラフ表示のカスタマイズ

`convert-to-html.cjs`のスタイル設定を変更：

- ノードの色やサイズ
- エッジの太さや色
- レイアウトアルゴリズム
- UI要素の表示/非表示

## トラブルシューティング

### よくある問題

1. **CodeQL解析が失敗する**
   - JavaScript/TypeScriptファイルが正しく認識されているか確認
   - カスタムクエリの構文エラーをチェック

2. **グラフが空になる**
   - 対象コードに名前付き関数が存在するか確認
   - CodeQLクエリの条件が厳しすぎないかチェック

3. **HTMLが生成されない**
   - CSVファイルの形式が正しいか確認
   - Node.jsスクリプトのエラーログを確認

### デバッグ方法

1. **GitHub Actionsログの確認**
   - ワークフローの各ステップの実行結果を確認
   - エラーメッセージから問題の特定

2. **ローカルテスト**
   - `convert-to-html.cjs`を手動実行してテスト
   - サンプルCSVファイルでの動作確認

3. **CodeQLクエリテスト**
   - VS CodeのCodeQL拡張機能でクエリをテスト
   - 小さなサンプルコードでの動作確認

## セキュリティ考慮事項

- **権限**: ワークフローには最小限の権限のみ付与
- **依存関係**: 外部パッケージはCDNから読み込み（ローカルインストールなし）
- **データ**: 関数名のみを抽出（ソースコードの内容は含まない）

## 今後の拡張可能性

- **言語サポート**: Python、Java等への対応
- **メトリクス**: 複雑度分析、依存関係の深さ測定
- **通知**: Slack/Teams等への結果通知
- **比較**: 前回との差分表示機能
- **エクスポート**: PNG、SVG等の画像形式での出力

---

このシステムにより、プロジェクトのコード構造を視覚的に把握し、リファクタリングや新機能開発の際の影響範囲を理解しやすくなります。

```

### .github_automation/callgraph/presets/callgraph.js
```js
// callgraph.js
// このファイルは generateHTML.cjs から分離したCytoscape.jsの描画・操作ロジックです。
// 依存: graphData, repo, branch（グローバル変数としてHTML側で宣言されていること）

// HTMLエスケープ関数（グローバルで利用可能に）
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (c) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c];
    });
}

// ダークモード検出
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// ダークモード用のカラーパレット
const colors = {
    light: {
        node: '#2196F3',
        nodeBorder: '#1976D2',
        nodeSelected: '#FF5722',
        nodeSelectedBorder: '#D84315',
        nodeWithLocation: '#4CAF50',
        edge: '#666',
        edgeSelected: '#FF5722',
        edgeWithLocation: '#4CAF50',
        textBackground: 'white'
    },
    dark: {
        node: '#64B5F6',
        nodeBorder: '#42A5F5',
        nodeSelected: '#FF7043',
        nodeSelectedBorder: '#FF5722',
        nodeWithLocation: '#66BB6A',
        edge: '#999',
        edgeSelected: '#FF7043',
        edgeWithLocation: '#66BB6A',
        textBackground: '#1e1e1e'
    }
};

const currentColors = isDarkMode ? colors.dark : colors.light;

const layoutNames = ['breadthfirst', 'concentric', 'cose', 'grid', 'circle'];
let currentLayoutIndex = 0;

const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
        ...graphData.nodes.map(node => ({
            data: {
                id: node.id,
                label: node.label,
                locations: node.locations || [],
                hasLocationInfo: node.hasLocationInfo || false,
                hasCalleeLocationInfo: node.hasCalleeLocationInfo || false,
                calleeFncDef: node.calleeFncDef || false,
            }
        })),
        ...graphData.edges.map(edge => ({
            data: {
                id: edge.id,
                source: edge.source,
                target: edge.target,
                file: edge.file || '',
                line: edge.line || 0,
                column: edge.column || 0,
                location: edge.location || '',
                hasLocationInfo: edge.hasLocationInfo || false,
                hasCalleeLocationInfo: edge.hasCalleeLocationInfo || false
            }
        }))
    ],
    style: [
        { selector: 'node', style: {
            'background-color': currentColors.node,
            'label': 'data(label)',
            'color': isDarkMode ? '#ffffff' : '#333',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '12px',
            'font-weight': 'bold',
            'text-wrap': 'wrap',
            'text-max-width': '100px',
            'width': '70px',
            'height': '70px',
            'border-width': '2px',
            'border-color': currentColors.nodeBorder,
            'text-background-color': currentColors.textBackground,
            'text-background-opacity': 0.8,
            'text-background-padding': '3px'
        }},
        { selector: 'node:selected', style: {
            'background-color': currentColors.nodeSelected,
            'border-color': currentColors.nodeSelectedBorder
        }},
        { selector: 'node[hasLocationInfo = true]', style: {
            'border-width': '3px',
            'border-color': currentColors.nodeWithLocation
        }},
        { selector: 'node[hasCalleeLocationInfo = true]', style: {
            'border-width': '4px',
            'border-color': '#FF9800'
        }},
        { selector: 'node[hasCalleeLocationInfo = false]', style: {
            'border-style': 'dotted',
            'border-width': '2px',
            'opacity': 0.6
        }},
        { selector: 'edge', style: {
            'width': 2,
            'line-color': currentColors.edge,
            'target-arrow-color': currentColors.edge,
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'arrow-scale': 1.2
        }},
        { selector: 'edge:selected', style: {
            'line-color': currentColors.edgeSelected,
            'target-arrow-color': currentColors.edgeSelected,
            'width': 3
        }},
        { selector: 'edge[hasLocationInfo = true]', style: {
            'line-color': currentColors.edgeWithLocation,
            'target-arrow-color': currentColors.edgeWithLocation
        }},
        { selector: 'node[hasLocationInfo = false]', style: {
            'border-style': 'dashed',
            'border-width': '2px',
            'opacity': 0.8
        }},
        { selector: 'edge[hasCalleeLocationInfo = true]', style: {
            'line-color': '#FF9800',
            'target-arrow-color': '#FF9800',
            'width': 3
        }},
        { selector: 'edge[hasLocationInfo = false]', style: {
            'line-style': 'dashed',
            'opacity': 0.7
        }}
    ],
    layout: getLayoutConfig('cose')
});

function getLayoutConfig(name) {
    switch (name) {
        case 'cose':
            return {
                name: 'cose',
                fit: true,          // ←もう一度trueに戻す（座標がズレない）
                padding: 50,        // 余白は控えめ
                animate: true,
                randomize: false,   // ←初期配置を固定して安定させる
                nodeRepulsion: 8000, // ←ほどよい反発（200000は強すぎた）
                idealEdgeLength: 120, // ←適度な長さに戻す
                edgeElasticity: 0.45,
                gravity: 1.2,        // ←少し強めて中央に集める
                numIter: 1000,       // ほどほどに
                componentSpacing: 80,
                nestingFactor: 0.9
            };
        case 'breadthfirst':
            return {
                name: 'breadthfirst', fit: true, padding: 30, directed: true, animate: true, spacingFactor: 1.2
            };
        case 'concentric':
            return {
                name: 'concentric', fit: true, padding: 30, animate: true,
                concentric: function(node) { return node.degree(); },
                levelWidth: function(nodes) { return 2; }
            };
        case 'grid':
            return {
                name: 'grid',
                fit: true,
                padding: 30,
                animate: true,
                avoidOverlap: true,
                spacingFactor: 1.2,
                rows: undefined, // 自動計算
                cols: undefined
            };
        case 'circle':
            return {
                name: 'circle',
                fit: true,
                padding: 30,
                animate: true,
                radius: 200,
                ready: function() {
                    placeCentralNode();
                }
            };
        default:
            return {
                name: 'circle', fit: true, padding: 30, animate: true, radius: 200
            };
    }
}

function placeCentralNode() {
    // エッジ数が一番多いノードを探す
    let maxDegreeNode = cy.nodes().max(function(node) {
        return node.degree(); // degree() = in+outの合計
    }).ele;

    if (maxDegreeNode.nonempty()) {
        // 中央に配置（画面中央座標を取得して移動）
        const centerPos = { x: cy.width() / 2, y: cy.height() / 2 };
        maxDegreeNode.position(centerPos);
        maxDegreeNode.lock(); // レイアウトで動かないよう固定
    }
}

cy.on('tap', 'node', function(evt) {
    const node = evt.target;
    const data = node.data();
    showNodeInfo(data);
});

cy.on('tap', 'edge', function(evt) {
    const edge = evt.target;
    const data = edge.data();
    showEdgeInfo(data);
});

cy.on('tap', function(evt) {
    if (evt.target === cy) {
        hideInfoPanel();
    }
});

function showNodeInfo(data) {
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('info-content');
    let html = '<div class="info-title">Function: ' + data.label + '</div>';
    if (data.hasCalleeLocationInfo && data.calleeFncDef) {
        // calleeの関数定義のソースコードを1行表示
        // html += '<p><strong>✓ This function has source location info</strong></p>'; // コメントアウト理由 : かわりに calleeFncDef を表示しているので
        // html += '<div style="margin-bottom:6px;font-size:13px;color:#888">'; // 備忘、888だと暗い
        html += '<div style="margin-bottom:6px;font-size:13px;color:#EEE">'; // 備忘、EEEだとダークモードならOK、今後はライトモードとダークモードの切り替えに対応予定
        html += '<div class="location-item"><div><small>';
        html += '<pre class="source-line">' + escapeHtml(data.calleeFncDef) + '</pre>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
      } else {
        html += '<p><strong>⚠ This function has NO source location info</strong></p>';
        html += '<p><small>匿名関数、動的関数、または外部ライブラリの関数である可能性があります。</small></p>';
    }
    if (data.hasLocationInfo && data.locations && data.locations.length > 0) {
        html += '<h4>Callers:</h4>';
        data.locations.forEach(loc => {
            const githubURL = generateGitHubURL(loc.file, loc.line);
            html += '<div class="location-item">';
            html += '<div class="location-file">' + loc.file + ':' + loc.line + ':' + loc.column + '</div>';
            html += '<div><small>Type: ' + loc.type + '</small></div>';
            if (loc.sourceLine) {
                html += '<pre class="source-line">' + escapeHtml(loc.sourceLine) + '</pre>';
            }
            if (githubURL) {
                html += '<div><a href="' + githubURL + '" target="_blank" class="location-link">View on GitHub</a></div>';
            }
            html += '</div>';
        });
    } else {
        html += '<p>呼び出し位置情報がありません</p>';
    }
    content.innerHTML = html;
    showInfoPanel();
}

function showEdgeInfo(data) {
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('info-content');
    let html = '<div class="info-title">Call: ' + data.source + ' → ' + data.target + '</div>';
    html += '<div style="margin-bottom:6px;font-size:13px;color:#888">';
    html += '<b>source:</b> <span style="color:#1976D2">' + data.source + '</span> &nbsp; ';
    html += '<b>target:</b> <span style="color:#FF9800">' + data.target + '</span>';
    html += '</div>';
    if (data.hasCalleeLocationInfo) {
        html += '<p><strong>✓ Target function (' + data.target + ') has source location</strong></p>';
    } else {
        html += '<p><strong>⚠ Target function (' + data.target + ') has NO source location</strong></p>';
        html += '<p><small>呼び出し先が匿名関数や外部ライブラリ関数の可能性があります。</small></p>';
    }
    if (data.hasLocationInfo && data.location) {
        html += '<h4>Call Location:</h4>';
        html += '<div class="edge-info">';
        html += '<div class="location-file">' + data.location + '</div>';
        if (data.sourceLine) {
            html += '<pre class="source-line">' + escapeHtml(data.sourceLine) + '</pre>';
        }
        const githubURL = generateGitHubURL(data.file, data.line);
        if (githubURL) {
            html += '<div><a href="' + githubURL + '" target="_blank" class="location-link">View on GitHub</a></div>';
        }
        html += '</div>';
    } else {
        html += '<p>呼び出し位置情報がありません</p>';
        html += '<p><small>この呼び出しは動的に発生するか、CodeQLで検出できない方法で行われている可能性があります。</small></p>';
    }
// HTMLエスケープ関数
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (c) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c];
    });
}
    content.innerHTML = html;
    showInfoPanel();
}

function hideInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.add('hidden');
}

function showInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.remove('hidden');
}

function toggleInfoPanel() {
    const panel = document.getElementById('info-panel');
    const isHidden = panel.classList.contains('hidden');
    if (isHidden) {
        panel.classList.remove('hidden');
        panel.style.transform = 'scale(1.02)';
        setTimeout(() => { panel.style.transform = 'scale(1)'; }, 200);
    } else {
        panel.classList.add('hidden');
    }
}

function generateGitHubURL(file, line) {
    if (!repo || !file) return null;
    let normalizedFile = file.replace(/\\\\/g, '/');
    if (normalizedFile.includes('/src/')) {
        const srcIndex = normalizedFile.lastIndexOf('/src/');
        normalizedFile = normalizedFile.substring(srcIndex + 1);
    } else if (normalizedFile.startsWith('src/')) {
        normalizedFile = normalizedFile;
    } else {
        const lastSlash = normalizedFile.lastIndexOf('/');
        if (lastSlash !== -1) {
            normalizedFile = normalizedFile.substring(lastSlash + 1);
        }
    }
    return 'https://github.com/' + repo + '/blob/' + branch + '/' + normalizedFile + '#L' + line;
}

function resetLayout() {
    currentLayoutIndex = 0;
    const layout = cy.layout(getLayoutConfig(layoutNames[currentLayoutIndex]));
    layout.run();

    watchNodeMovementAndFixOverlapsWrap();
}

function watchNodeMovementAndFixOverlapsWrap() {
    watchNodeMovementAndFixOverlaps(100, 20);
}

let movementWatcherTimer;

/**
 * ノードの動きを監視して、動きが止まったら重なり修正をする関数
 * @param {number} interval - チェック間隔(ms)
 * @param {number} maxChecks - 最大チェック回数
 */
function watchNodeMovementAndFixOverlaps(interval, maxChecks) {
    let prevPositions = new Map();
    let checks = 0;
    let stableCount = 0;
    const movementThreshold = 1.0; // 動き判定閾値(px)
    const stableThreshold = 3;     // 何回連続で動かないと止まった判定するか

    // 初期ノード位置を記録
    cy.nodes().forEach(node => {
        prevPositions.set(node.id(), {...node.position()});
    });

    if (movementWatcherTimer) {
        clearInterval(movementWatcherTimer);
        movementWatcherTimer = null;
    }

    movementWatcherTimer = setInterval(() => {
        let moving = false;

        cy.nodes().forEach(node => {
            const prevPos = prevPositions.get(node.id());
            const currentPos = node.position();
            if (Math.abs(currentPos.x - prevPos.x) > movementThreshold || Math.abs(currentPos.y - prevPos.y) > movementThreshold) {
                moving = true;
                prevPositions.set(node.id(), {...currentPos});
            }
        });

        if (!moving) {
            stableCount++;
        } else {
            stableCount = 0;
        }

        checks++;

        if (stableCount >= stableThreshold || checks >= maxChecks) {
            clearInterval(movementWatcherTimer);
            movementWatcherTimer = null;
            if (!moving) {
              console.log('ノードの動きが止まった！重なり修正開始 (check' + checks + '回)');
            } else {
              console.log('時間切れ！重なり修正開始');
            }

            resolveNodeOverlaps(100, 0.2, 10);
            cy.fit();
        }
    }, interval);
}

/**
 * ノード同士の重なりを軽減する
 * 反発力ベースで自然に押しのける
 * @param {number} minDistance - ノード間の最小距離(px)
 * @param {number} shiftRatio - 移動の強さ(0~1)
 * @param {number} iterations - 繰り返し回数
 */
function resolveNodeOverlaps(minDistance, shiftRatio, iterations) {
    for (let iter = 0; iter < iterations; iter++) {
        cy.nodes().forEach(node => {
            const pos = node.position();
            
            cy.nodes().forEach(other => {
                if (node.id() === other.id()) return; // 自分自身はスキップ

                const otherPos = other.position();
                const dx = pos.x - otherPos.x;
                const dy = pos.y - otherPos.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < minDistance && dist > 0.0001) {
                    // 反発力の大きさ（距離が近いほど強く押す）
                    const force = (1 - dist / minDistance) * shiftRatio;

                    // 正規化ベクトル（方向だけを表す）
                    const nx = dx / dist;
                    const ny = dy / dist;

                    // お互いを少しずつ押しのける（対称に動かす）
                    node.position({
                        x: pos.x + nx * force * (minDistance / 2),
                        y: pos.y + ny * force * (minDistance / 2)
                    });

                    other.position({
                        x: otherPos.x - nx * force * (minDistance / 2),
                        y: otherPos.y - ny * force * (minDistance / 2)
                    });
                }
            });
        });
    }
}

function switchLayout(button) {
    resetNodeStates();
    currentLayoutIndex = (currentLayoutIndex + 1) % layoutNames.length;
    const layoutName = layoutNames[currentLayoutIndex];
    const layout = cy.layout(getLayoutConfig(layoutName));
    layout.run();
    if (button) button.textContent = 'レイアウト切替 (' + layoutName + ')';

    watchNodeMovementAndFixOverlapsWrap();
}

function resetNodeStates() {
    cy.nodes().unlock();          // すべてのロック解除
    cy.nodes().positions(() => {  // 古い座標をクリア（nullにしておく）
        return null;
    });
}

function fitToContent() {
    cy.fit();
}

let labelsVisible = true;
let calleeLocationFilterEnabled = false;

function toggleNodeLabels() {
    labelsVisible = !labelsVisible;
    cy.style()
        .selector('node')
        .style('label', labelsVisible ? 'data(label)' : '')
        .update();
}

function toggleCalleeLocationFilter() {
    calleeLocationFilterEnabled = !calleeLocationFilterEnabled;
    const button = event.target;
    if (calleeLocationFilterEnabled) {
        cy.nodes('[hasCalleeLocationInfo = false]').style('display', 'none');
        cy.edges('[hasCalleeLocationInfo = false]').style('display', 'none');
        button.textContent = 'Show No-Callee-Location';
        button.style.backgroundColor = '#FF5722';
    } else {
        cy.nodes().style('display', 'element');
        cy.edges().style('display', 'element');
        button.textContent = 'Hide No-Callee-Location';
        button.style.backgroundColor = '#2196F3';
    }
}

cy.ready(function() {
    resetLayout();
});

if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(function(e) {
        window.location.reload();
    });
}

```

### generated-docs/callgraph.js
```js
// callgraph.js
// このファイルは generateHTML.cjs から分離したCytoscape.jsの描画・操作ロジックです。
// 依存: graphData, repo, branch（グローバル変数としてHTML側で宣言されていること）

// HTMLエスケープ関数（グローバルで利用可能に）
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (c) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c];
    });
}

// ダークモード検出
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// ダークモード用のカラーパレット
const colors = {
    light: {
        node: '#2196F3',
        nodeBorder: '#1976D2',
        nodeSelected: '#FF5722',
        nodeSelectedBorder: '#D84315',
        nodeWithLocation: '#4CAF50',
        edge: '#666',
        edgeSelected: '#FF5722',
        edgeWithLocation: '#4CAF50',
        textBackground: 'white'
    },
    dark: {
        node: '#64B5F6',
        nodeBorder: '#42A5F5',
        nodeSelected: '#FF7043',
        nodeSelectedBorder: '#FF5722',
        nodeWithLocation: '#66BB6A',
        edge: '#999',
        edgeSelected: '#FF7043',
        edgeWithLocation: '#66BB6A',
        textBackground: '#1e1e1e'
    }
};

const currentColors = isDarkMode ? colors.dark : colors.light;

const layoutNames = ['breadthfirst', 'concentric', 'cose', 'grid', 'circle'];
let currentLayoutIndex = 0;

const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
        ...graphData.nodes.map(node => ({
            data: {
                id: node.id,
                label: node.label,
                locations: node.locations || [],
                hasLocationInfo: node.hasLocationInfo || false,
                hasCalleeLocationInfo: node.hasCalleeLocationInfo || false,
                calleeFncDef: node.calleeFncDef || false,
            }
        })),
        ...graphData.edges.map(edge => ({
            data: {
                id: edge.id,
                source: edge.source,
                target: edge.target,
                file: edge.file || '',
                line: edge.line || 0,
                column: edge.column || 0,
                location: edge.location || '',
                hasLocationInfo: edge.hasLocationInfo || false,
                hasCalleeLocationInfo: edge.hasCalleeLocationInfo || false
            }
        }))
    ],
    style: [
        { selector: 'node', style: {
            'background-color': currentColors.node,
            'label': 'data(label)',
            'color': isDarkMode ? '#ffffff' : '#333',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '12px',
            'font-weight': 'bold',
            'text-wrap': 'wrap',
            'text-max-width': '100px',
            'width': '70px',
            'height': '70px',
            'border-width': '2px',
            'border-color': currentColors.nodeBorder,
            'text-background-color': currentColors.textBackground,
            'text-background-opacity': 0.8,
            'text-background-padding': '3px'
        }},
        { selector: 'node:selected', style: {
            'background-color': currentColors.nodeSelected,
            'border-color': currentColors.nodeSelectedBorder
        }},
        { selector: 'node[hasLocationInfo = true]', style: {
            'border-width': '3px',
            'border-color': currentColors.nodeWithLocation
        }},
        { selector: 'node[hasCalleeLocationInfo = true]', style: {
            'border-width': '4px',
            'border-color': '#FF9800'
        }},
        { selector: 'node[hasCalleeLocationInfo = false]', style: {
            'border-style': 'dotted',
            'border-width': '2px',
            'opacity': 0.6
        }},
        { selector: 'edge', style: {
            'width': 2,
            'line-color': currentColors.edge,
            'target-arrow-color': currentColors.edge,
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'arrow-scale': 1.2
        }},
        { selector: 'edge:selected', style: {
            'line-color': currentColors.edgeSelected,
            'target-arrow-color': currentColors.edgeSelected,
            'width': 3
        }},
        { selector: 'edge[hasLocationInfo = true]', style: {
            'line-color': currentColors.edgeWithLocation,
            'target-arrow-color': currentColors.edgeWithLocation
        }},
        { selector: 'node[hasLocationInfo = false]', style: {
            'border-style': 'dashed',
            'border-width': '2px',
            'opacity': 0.8
        }},
        { selector: 'edge[hasCalleeLocationInfo = true]', style: {
            'line-color': '#FF9800',
            'target-arrow-color': '#FF9800',
            'width': 3
        }},
        { selector: 'edge[hasLocationInfo = false]', style: {
            'line-style': 'dashed',
            'opacity': 0.7
        }}
    ],
    layout: getLayoutConfig('cose')
});

function getLayoutConfig(name) {
    switch (name) {
        case 'cose':
            return {
                name: 'cose',
                fit: true,          // ←もう一度trueに戻す（座標がズレない）
                padding: 50,        // 余白は控えめ
                animate: true,
                randomize: false,   // ←初期配置を固定して安定させる
                nodeRepulsion: 8000, // ←ほどよい反発（200000は強すぎた）
                idealEdgeLength: 120, // ←適度な長さに戻す
                edgeElasticity: 0.45,
                gravity: 1.2,        // ←少し強めて中央に集める
                numIter: 1000,       // ほどほどに
                componentSpacing: 80,
                nestingFactor: 0.9
            };
        case 'breadthfirst':
            return {
                name: 'breadthfirst', fit: true, padding: 30, directed: true, animate: true, spacingFactor: 1.2
            };
        case 'concentric':
            return {
                name: 'concentric', fit: true, padding: 30, animate: true,
                concentric: function(node) { return node.degree(); },
                levelWidth: function(nodes) { return 2; }
            };
        case 'grid':
            return {
                name: 'grid',
                fit: true,
                padding: 30,
                animate: true,
                avoidOverlap: true,
                spacingFactor: 1.2,
                rows: undefined, // 自動計算
                cols: undefined
            };
        case 'circle':
            return {
                name: 'circle',
                fit: true,
                padding: 30,
                animate: true,
                radius: 200,
                ready: function() {
                    placeCentralNode();
                }
            };
        default:
            return {
                name: 'circle', fit: true, padding: 30, animate: true, radius: 200
            };
    }
}

function placeCentralNode() {
    // エッジ数が一番多いノードを探す
    let maxDegreeNode = cy.nodes().max(function(node) {
        return node.degree(); // degree() = in+outの合計
    }).ele;

    if (maxDegreeNode.nonempty()) {
        // 中央に配置（画面中央座標を取得して移動）
        const centerPos = { x: cy.width() / 2, y: cy.height() / 2 };
        maxDegreeNode.position(centerPos);
        maxDegreeNode.lock(); // レイアウトで動かないよう固定
    }
}

cy.on('tap', 'node', function(evt) {
    const node = evt.target;
    const data = node.data();
    showNodeInfo(data);
});

cy.on('tap', 'edge', function(evt) {
    const edge = evt.target;
    const data = edge.data();
    showEdgeInfo(data);
});

cy.on('tap', function(evt) {
    if (evt.target === cy) {
        hideInfoPanel();
    }
});

function showNodeInfo(data) {
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('info-content');
    let html = '<div class="info-title">Function: ' + data.label + '</div>';
    if (data.hasCalleeLocationInfo && data.calleeFncDef) {
        // calleeの関数定義のソースコードを1行表示
        // html += '<p><strong>✓ This function has source location info</strong></p>'; // コメントアウト理由 : かわりに calleeFncDef を表示しているので
        // html += '<div style="margin-bottom:6px;font-size:13px;color:#888">'; // 備忘、888だと暗い
        html += '<div style="margin-bottom:6px;font-size:13px;color:#EEE">'; // 備忘、EEEだとダークモードならOK、今後はライトモードとダークモードの切り替えに対応予定
        html += '<div class="location-item"><div><small>';
        html += '<pre class="source-line">' + escapeHtml(data.calleeFncDef) + '</pre>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
      } else {
        html += '<p><strong>⚠ This function has NO source location info</strong></p>';
        html += '<p><small>匿名関数、動的関数、または外部ライブラリの関数である可能性があります。</small></p>';
    }
    if (data.hasLocationInfo && data.locations && data.locations.length > 0) {
        html += '<h4>Callers:</h4>';
        data.locations.forEach(loc => {
            const githubURL = generateGitHubURL(loc.file, loc.line);
            html += '<div class="location-item">';
            html += '<div class="location-file">' + loc.file + ':' + loc.line + ':' + loc.column + '</div>';
            html += '<div><small>Type: ' + loc.type + '</small></div>';
            if (loc.sourceLine) {
                html += '<pre class="source-line">' + escapeHtml(loc.sourceLine) + '</pre>';
            }
            if (githubURL) {
                html += '<div><a href="' + githubURL + '" target="_blank" class="location-link">View on GitHub</a></div>';
            }
            html += '</div>';
        });
    } else {
        html += '<p>呼び出し位置情報がありません</p>';
    }
    content.innerHTML = html;
    showInfoPanel();
}

function showEdgeInfo(data) {
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('info-content');
    let html = '<div class="info-title">Call: ' + data.source + ' → ' + data.target + '</div>';
    html += '<div style="margin-bottom:6px;font-size:13px;color:#888">';
    html += '<b>source:</b> <span style="color:#1976D2">' + data.source + '</span> &nbsp; ';
    html += '<b>target:</b> <span style="color:#FF9800">' + data.target + '</span>';
    html += '</div>';
    if (data.hasCalleeLocationInfo) {
        html += '<p><strong>✓ Target function (' + data.target + ') has source location</strong></p>';
    } else {
        html += '<p><strong>⚠ Target function (' + data.target + ') has NO source location</strong></p>';
        html += '<p><small>呼び出し先が匿名関数や外部ライブラリ関数の可能性があります。</small></p>';
    }
    if (data.hasLocationInfo && data.location) {
        html += '<h4>Call Location:</h4>';
        html += '<div class="edge-info">';
        html += '<div class="location-file">' + data.location + '</div>';
        if (data.sourceLine) {
            html += '<pre class="source-line">' + escapeHtml(data.sourceLine) + '</pre>';
        }
        const githubURL = generateGitHubURL(data.file, data.line);
        if (githubURL) {
            html += '<div><a href="' + githubURL + '" target="_blank" class="location-link">View on GitHub</a></div>';
        }
        html += '</div>';
    } else {
        html += '<p>呼び出し位置情報がありません</p>';
        html += '<p><small>この呼び出しは動的に発生するか、CodeQLで検出できない方法で行われている可能性があります。</small></p>';
    }
// HTMLエスケープ関数
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (c) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c];
    });
}
    content.innerHTML = html;
    showInfoPanel();
}

function hideInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.add('hidden');
}

function showInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.remove('hidden');
}

function toggleInfoPanel() {
    const panel = document.getElementById('info-panel');
    const isHidden = panel.classList.contains('hidden');
    if (isHidden) {
        panel.classList.remove('hidden');
        panel.style.transform = 'scale(1.02)';
        setTimeout(() => { panel.style.transform = 'scale(1)'; }, 200);
    } else {
        panel.classList.add('hidden');
    }
}

function generateGitHubURL(file, line) {
    if (!repo || !file) return null;
    let normalizedFile = file.replace(/\\\\/g, '/');
    if (normalizedFile.includes('/src/')) {
        const srcIndex = normalizedFile.lastIndexOf('/src/');
        normalizedFile = normalizedFile.substring(srcIndex + 1);
    } else if (normalizedFile.startsWith('src/')) {
        normalizedFile = normalizedFile;
    } else {
        const lastSlash = normalizedFile.lastIndexOf('/');
        if (lastSlash !== -1) {
            normalizedFile = normalizedFile.substring(lastSlash + 1);
        }
    }
    return 'https://github.com/' + repo + '/blob/' + branch + '/' + normalizedFile + '#L' + line;
}

function resetLayout() {
    currentLayoutIndex = 0;
    const layout = cy.layout(getLayoutConfig(layoutNames[currentLayoutIndex]));
    layout.run();

    watchNodeMovementAndFixOverlapsWrap();
}

function watchNodeMovementAndFixOverlapsWrap() {
    watchNodeMovementAndFixOverlaps(100, 20);
}

let movementWatcherTimer;

/**
 * ノードの動きを監視して、動きが止まったら重なり修正をする関数
 * @param {number} interval - チェック間隔(ms)
 * @param {number} maxChecks - 最大チェック回数
 */
function watchNodeMovementAndFixOverlaps(interval, maxChecks) {
    let prevPositions = new Map();
    let checks = 0;
    let stableCount = 0;
    const movementThreshold = 1.0; // 動き判定閾値(px)
    const stableThreshold = 3;     // 何回連続で動かないと止まった判定するか

    // 初期ノード位置を記録
    cy.nodes().forEach(node => {
        prevPositions.set(node.id(), {...node.position()});
    });

    if (movementWatcherTimer) {
        clearInterval(movementWatcherTimer);
        movementWatcherTimer = null;
    }

    movementWatcherTimer = setInterval(() => {
        let moving = false;

        cy.nodes().forEach(node => {
            const prevPos = prevPositions.get(node.id());
            const currentPos = node.position();
            if (Math.abs(currentPos.x - prevPos.x) > movementThreshold || Math.abs(currentPos.y - prevPos.y) > movementThreshold) {
                moving = true;
                prevPositions.set(node.id(), {...currentPos});
            }
        });

        if (!moving) {
            stableCount++;
        } else {
            stableCount = 0;
        }

        checks++;

        if (stableCount >= stableThreshold || checks >= maxChecks) {
            clearInterval(movementWatcherTimer);
            movementWatcherTimer = null;
            if (!moving) {
              console.log('ノードの動きが止まった！重なり修正開始 (check' + checks + '回)');
            } else {
              console.log('時間切れ！重なり修正開始');
            }

            resolveNodeOverlaps(100, 0.2, 10);
            cy.fit();
        }
    }, interval);
}

/**
 * ノード同士の重なりを軽減する
 * 反発力ベースで自然に押しのける
 * @param {number} minDistance - ノード間の最小距離(px)
 * @param {number} shiftRatio - 移動の強さ(0~1)
 * @param {number} iterations - 繰り返し回数
 */
function resolveNodeOverlaps(minDistance, shiftRatio, iterations) {
    for (let iter = 0; iter < iterations; iter++) {
        cy.nodes().forEach(node => {
            const pos = node.position();
            
            cy.nodes().forEach(other => {
                if (node.id() === other.id()) return; // 自分自身はスキップ

                const otherPos = other.position();
                const dx = pos.x - otherPos.x;
                const dy = pos.y - otherPos.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < minDistance && dist > 0.0001) {
                    // 反発力の大きさ（距離が近いほど強く押す）
                    const force = (1 - dist / minDistance) * shiftRatio;

                    // 正規化ベクトル（方向だけを表す）
                    const nx = dx / dist;
                    const ny = dy / dist;

                    // お互いを少しずつ押しのける（対称に動かす）
                    node.position({
                        x: pos.x + nx * force * (minDistance / 2),
                        y: pos.y + ny * force * (minDistance / 2)
                    });

                    other.position({
                        x: otherPos.x - nx * force * (minDistance / 2),
                        y: otherPos.y - ny * force * (minDistance / 2)
                    });
                }
            });
        });
    }
}

function switchLayout(button) {
    resetNodeStates();
    currentLayoutIndex = (currentLayoutIndex + 1) % layoutNames.length;
    const layoutName = layoutNames[currentLayoutIndex];
    const layout = cy.layout(getLayoutConfig(layoutName));
    layout.run();
    if (button) button.textContent = 'レイアウト切替 (' + layoutName + ')';

    watchNodeMovementAndFixOverlapsWrap();
}

function resetNodeStates() {
    cy.nodes().unlock();          // すべてのロック解除
    cy.nodes().positions(() => {  // 古い座標をクリア（nullにしておく）
        return null;
    });
}

function fitToContent() {
    cy.fit();
}

let labelsVisible = true;
let calleeLocationFilterEnabled = false;

function toggleNodeLabels() {
    labelsVisible = !labelsVisible;
    cy.style()
        .selector('node')
        .style('label', labelsVisible ? 'data(label)' : '')
        .update();
}

function toggleCalleeLocationFilter() {
    calleeLocationFilterEnabled = !calleeLocationFilterEnabled;
    const button = event.target;
    if (calleeLocationFilterEnabled) {
        cy.nodes('[hasCalleeLocationInfo = false]').style('display', 'none');
        cy.edges('[hasCalleeLocationInfo = false]').style('display', 'none');
        button.textContent = 'Show No-Callee-Location';
        button.style.backgroundColor = '#FF5722';
    } else {
        cy.nodes().style('display', 'element');
        cy.edges().style('display', 'element');
        button.textContent = 'Hide No-Callee-Location';
        button.style.backgroundColor = '#2196F3';
    }
}

cy.ready(function() {
    resetLayout();
});

if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(function(e) {
        window.location.reload();
    });
}

```

### .github_automation/callgraph/presets/style.css
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    flex-wrap: wrap;
    gap: 10px;
}

.header h1 {
    color: #333;
    margin: 0;
    font-size: 24px;
    transition: color 0.3s ease;
}

.stats-container {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.stats {
    background: white;
    padding: 10px 15px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    min-width: 80px;
}

.stat-value {
    font-size: 20px;
    font-weight: bold;
    color: #2196F3;
    margin-bottom: 2px;
}

.stat-label {
    font-size: 12px;
    color: #666;
    transition: color 0.3s ease;
}

.main-container {
    display: flex;
    gap: 15px;
    height: calc(100vh - 120px);
    min-height: 500px;
    position: relative;
}

.graph-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0; /* flexアイテムのはみ出しを防ぐ */
}

#cy {
    width: 100%;
    flex: 1;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.controls {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
}

.control-button {
    background: #2196F3;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
    transition: background-color 0.3s ease;
}

.control-button:hover {
    background: #1976D2;
}

.info-panel {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    width: 320px;
    max-width: 100vw;
    max-height: 100%;
    overflow-y: auto;
    transition: all 0.3s ease;
    flex-shrink: 0;
    box-sizing: border-box;
}

.info-panel.hidden {
    width: 0;
    padding: 0;
    overflow: hidden;
    min-width: 0;
}

.info-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
    transition: color 0.3s ease;
}

.location-item {
    background: #f8f9fa;
    padding: 8px 12px;
    margin: 5px 0;
    border-radius: 4px;
    border-left: 4px solid #2196F3;
    transition: background-color 0.3s ease;
}

.location-file {
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 13px;
    color: #666;
    transition: color 0.3s ease;
}

.location-link {
    color: #2196F3;
    text-decoration: none;
    font-weight: bold;
}

.location-link:hover {
    text-decoration: underline;
}

.edge-info {
    background: #e3f2fd;
    padding: 8px 12px;
    margin: 5px 0;
    border-radius: 4px;
    border-left: 4px solid #1976D2;
    transition: background-color 0.3s ease;
}

.generated-time {
    text-align: center;
    color: #999;
    font-size: 11px;
    margin-top: 10px;
    transition: color 0.3s ease;
}

/* レスポンシブデザイン */
@media (max-width: 1024px) {
    .main-container {
        flex-direction: column;
        height: auto;
        min-height: 400px;
    }

    .info-panel {
        width: 100% !important;
        max-height: 300px;
        order: 2;
    }

    .info-panel.hidden {
        height: 0;
        padding: 0;
        min-height: 0;
    }

    .graph-container {
        order: 1;
        min-height: 400px;
    }
}

@media (max-width: 768px) {
    .header {
        flex-direction: column;
        text-align: center;
    }

    .stats-container {
        justify-content: center;
    }

    .controls {
        justify-content: center;
    }

    .control-button {
        padding: 6px 12px;
        font-size: 12px;
    }
}

/* ダークモード対応 */
@media (prefers-color-scheme: dark) {
    body {
        background-color: #121212;
        color: #e0e0e0;
    }

    .header h1 {
        color: #ffffff;
    }

    .stats {
        background: #1e1e1e;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .stat-label {
        color: #b0b0b0;
    }

    #cy {
        background-color: #1e1e1e;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }

    .control-button {
        background: #2196F3;
    }

    .control-button:hover {
        background: #1976D2;
    }

    .info-panel {
        background: #1e1e1e;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .info-title {
        color: #ffffff;
    }

    .location-item {
        background: #2a2a2a;
    }

    .location-file {
        color: #b0b0b0;
    }

    .edge-info {
        background: #1a2d3a;
    }

    .generated-time {
        color: #888;
    }
}

```

### generated-docs/style.css
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    flex-wrap: wrap;
    gap: 10px;
}

.header h1 {
    color: #333;
    margin: 0;
    font-size: 24px;
    transition: color 0.3s ease;
}

.stats-container {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.stats {
    background: white;
    padding: 10px 15px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    min-width: 80px;
}

.stat-value {
    font-size: 20px;
    font-weight: bold;
    color: #2196F3;
    margin-bottom: 2px;
}

.stat-label {
    font-size: 12px;
    color: #666;
    transition: color 0.3s ease;
}

.main-container {
    display: flex;
    gap: 15px;
    height: calc(100vh - 120px);
    min-height: 500px;
    position: relative;
}

.graph-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0; /* flexアイテムのはみ出しを防ぐ */
}

#cy {
    width: 100%;
    flex: 1;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.controls {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
}

.control-button {
    background: #2196F3;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
    transition: background-color 0.3s ease;
}

.control-button:hover {
    background: #1976D2;
}

.info-panel {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    width: 320px;
    max-width: 100vw;
    max-height: 100%;
    overflow-y: auto;
    transition: all 0.3s ease;
    flex-shrink: 0;
    box-sizing: border-box;
}

.info-panel.hidden {
    width: 0;
    padding: 0;
    overflow: hidden;
    min-width: 0;
}

.info-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
    transition: color 0.3s ease;
}

.location-item {
    background: #f8f9fa;
    padding: 8px 12px;
    margin: 5px 0;
    border-radius: 4px;
    border-left: 4px solid #2196F3;
    transition: background-color 0.3s ease;
}

.location-file {
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 13px;
    color: #666;
    transition: color 0.3s ease;
}

.location-link {
    color: #2196F3;
    text-decoration: none;
    font-weight: bold;
}

.location-link:hover {
    text-decoration: underline;
}

.edge-info {
    background: #e3f2fd;
    padding: 8px 12px;
    margin: 5px 0;
    border-radius: 4px;
    border-left: 4px solid #1976D2;
    transition: background-color 0.3s ease;
}

.generated-time {
    text-align: center;
    color: #999;
    font-size: 11px;
    margin-top: 10px;
    transition: color 0.3s ease;
}

/* レスポンシブデザイン */
@media (max-width: 1024px) {
    .main-container {
        flex-direction: column;
        height: auto;
        min-height: 400px;
    }

    .info-panel {
        width: 100% !important;
        max-height: 300px;
        order: 2;
    }

    .info-panel.hidden {
        height: 0;
        padding: 0;
        min-height: 0;
    }

    .graph-container {
        order: 1;
        min-height: 400px;
    }
}

@media (max-width: 768px) {
    .header {
        flex-direction: column;
        text-align: center;
    }

    .stats-container {
        justify-content: center;
    }

    .controls {
        justify-content: center;
    }

    .control-button {
        padding: 6px 12px;
        font-size: 12px;
    }
}

/* ダークモード対応 */
@media (prefers-color-scheme: dark) {
    body {
        background-color: #121212;
        color: #e0e0e0;
    }

    .header h1 {
        color: #ffffff;
    }

    .stats {
        background: #1e1e1e;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .stat-label {
        color: #b0b0b0;
    }

    #cy {
        background-color: #1e1e1e;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }

    .control-button {
        background: #2196F3;
    }

    .control-button:hover {
        background: #1976D2;
    }

    .info-panel {
        background: #1e1e1e;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .info-title {
        color: #ffffff;
    }

    .location-item {
        background: #2a2a2a;
    }

    .location-file {
        color: #b0b0b0;
    }

    .edge-info {
        background: #1a2d3a;
    }

    .generated-time {
        color: #888;
    }
}

```

### .github_automation/callgraph/scripts/analyze-codeql.cjs
```cjs
#!/usr/bin/env node
/**
 * analyze-codeql.cjs
 *
 * 用途
 *  SARIFファイルを生成するための、CodeQL解析を行う。
 */

const { execSync } = require('child_process');
const path = require('path');

const dbPath = path.resolve('codeql-db');
if (!process.env.QUERIES) {
  console.error('環境変数 QUERIES が設定されていません。');
  process.exit(1);
}
const queriesPath = path.resolve(process.env.QUERIES);

// コマンドライン引数取得
const args = process.argv.slice(2);
const hasOverwrite = args.includes('--overwrite');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

try {
  if (args[0] === 'verify-config') {
    // DB作成のみ
    let createCmd = `codeql database create ${dbPath} --language=javascript --source-root=src`;
    if (hasOverwrite) createCmd += ' --overwrite';
    run(createCmd);
    console.log('CodeQL DB verified.');
  } else if (args[0] === 'analyze') {
    // DB作成+解析
    let createCmd = `codeql database create ${dbPath} --language=javascript --source-root=src`;
    if (hasOverwrite) createCmd += ' --overwrite';
    run(createCmd);
    run(`codeql database analyze ${dbPath} ${queriesPath} --format=sarifv2.1.0 --output=codeql-results.sarif`);
    console.log('CodeQL analysis completed.');
  } else if (args[0] === 'check-results') {
    // 結果ファイルの存在確認
    const fs = require('fs');
    if (fs.existsSync('codeql-results.sarif')) {
      console.log('CodeQL results found.');
    } else {
      throw new Error('codeql-results.sarif not found.');
    }
  } else if (args[0] === 'debug') {
    // デバッグ用: DBディレクトリの中身を表示
    const fs = require('fs');
    if (fs.existsSync(dbPath)) {
      console.log('DB contents:', fs.readdirSync(dbPath));
    } else {
      console.log('DB directory not found.');
    }
  } else {
    // デフォルト: analyze相当
    let createCmd = `codeql database create ${dbPath} --language=javascript --source-root=src`;
    if (hasOverwrite) createCmd += ' --overwrite';
    run(createCmd);
    run(`codeql database analyze ${dbPath} ${queriesPath} --format=sarifv2.1.0 --output=codeql-results.sarif`);
    console.log('CodeQL analysis completed.');
  }
} catch (e) {
  console.error('CodeQL解析に失敗:', e.message);
  process.exit(1);
}

```

### .github_automation/callgraph/scripts/callgraph-utils.cjs
```cjs
// ヘルパー関数群
// データ変換・GitHubリンク生成

const fs = require('fs');
const path = require('path');
const { getSourceLine, isValidSourceFile } = require('./common-utils.cjs');

// 注意：extractCallerinfo, extractCalleeinfo は、requireするかわりに、extractCallerinfo, extractCalleeinfo を引数で渡す設計にしてください。循環参照防止のためです。

function writeDebugCallerSourceLines(sarifFile, debugOutFile, extractCallerinfo, allowedFiles) {
  if (typeof extractCallerinfo !== 'function') {
    throw new Error('extractCallerinfo 関数を引数で渡してください');
  }
  if (!Array.isArray(allowedFiles) || allowedFiles.length === 0) {
    throw new Error('writeDebugCallerSourceLines: allowedFiles must be a non-empty array');
  }
  const results = extractCallerinfo(sarifFile, allowedFiles);
  try {
    fs.writeFileSync(debugOutFile, JSON.stringify(results, null, 2), 'utf8');
    return true;
  } catch (e) {
    return false;
  }
}

function writeDebugCalleeSourceLines(sarifFile, debugOutFile, extractCalleeinfo, allowedFiles) {
  if (typeof extractCalleeinfo !== 'function') {
    throw new Error('extractCalleeinfo 関数を引数で渡してください');
  }
  if (!Array.isArray(allowedFiles) || allowedFiles.length === 0) {
    throw new Error('writeDebugCalleeSourceLines: allowedFiles must be a non-empty array');
  }
  const results = extractCalleeinfo(sarifFile, allowedFiles);
  try {
    fs.writeFileSync(debugOutFile, JSON.stringify(results, null, 2), 'utf8');
    return true;
  } catch (e) {
    return false;
  }
}

function convertDetailedData(detailedData, calleeInfo, allowedFiles) {
  if (!Array.isArray(detailedData) || detailedData.length === 0) {
    throw new Error('convertDetailedData: detailedDataが0件です。入力データを確認してください。');
  }
  if (!Array.isArray(calleeInfo) || calleeInfo.length === 0) {
    throw new Error('convertDetailedData: calleeInfoが0件です。入力データを確認してください。');
  }
  if (!Array.isArray(allowedFiles) || allowedFiles.length === 0) {
    throw new Error('allowedFiles must be provided as an array');
  }
  const nodes = new Map();
  const edges = [];
  const calleeLocationMap = new Map();
  detailedData.forEach((item) => {
    if (item.callee && item.file && item.line && item.line > 0 && isValidSourceFile(item.file, allowedFiles)) {
      if (!calleeLocationMap.has(item.callee)) {
        calleeLocationMap.set(item.callee, []);
      }
      const existingLocations = calleeLocationMap.get(item.callee);
      if (!existingLocations.some(loc => loc.file === item.file && loc.line === item.line)) {
        existingLocations.push({
          file: item.file,
          line: item.line,
          column: item.column || 1,
          type: 'definition',
          sourceLine: item.sourceLine || null
        });
      }
    }
  });
  detailedData.forEach((item, index) => {
    if (!item.caller || !item.callee) return;
    if (!nodes.has(item.caller)) {
      nodes.set(item.caller, {
        id: item.caller,
        label: item.caller,
        locations: [],
        hasLocationInfo: false,
        hasCalleeLocationInfo: false
      });
    }

    let calleeFncDef = null;
    calleeInfo.forEach((calleeItem) => {
      let calleeOfItem = item.callee;
      const calleeParts = calleeOfItem.split(/\s+/);
      if (calleeParts.length > 1) {
        calleeOfItem = calleeParts[0]; // 最初の部分を関数名として使用
      }
      if (calleeItem.callee === calleeOfItem) {
        calleeFncDef = calleeItem.sourceLine || null;
      }
    });

    if (!nodes.has(item.callee)) {
      const calleeLocations = calleeLocationMap.get(item.callee) || [];
      nodes.set(item.callee, {
        id: item.callee,
        label: item.callee,
        locations: [...calleeLocations],
        hasLocationInfo: calleeLocations.length > 0,
        hasCalleeLocationInfo: calleeLocations.length > 0,
        calleeFncDef: calleeFncDef
      });
    }
    if (item.file && item.line && item.line > 0 && isValidSourceFile(item.file, allowedFiles)) {
      const callerNode = nodes.get(item.caller);
      if (!callerNode.locations.some(loc => loc.file === item.file && loc.line === item.line)) {
        callerNode.locations.push({
          file: item.file,
          line: item.line,
          column: item.column || 1,
          type: 'caller',
          sourceLine: item.sourceLine || null
        });
        callerNode.hasLocationInfo = true;
      }
    }
    const calleeNode = nodes.get(item.callee);
    if (calleeLocationMap.has(item.callee)) {
      calleeNode.hasCalleeLocationInfo = true;
    }
    const edgeData = {
      id: `edge-${index}`,
      source: item.caller,
      target: item.callee,
      hasCalleeLocationInfo: calleeLocationMap.has(item.callee)
    };
    if (item.file && item.line && item.line > 0 && isValidSourceFile(item.file, allowedFiles)) {
      edgeData.file = item.file;
      edgeData.line = item.line;
      edgeData.column = item.column || 1;
      edgeData.location = item.fullLocation || `${item.file}:${item.line}:${item.column || 1}`;
      edgeData.hasLocationInfo = true;
      edgeData.sourceLine = item.sourceLine || null;
    } else {
      edgeData.hasLocationInfo = false;
    }
    edges.push(edgeData);
  });
  let allNodes = Array.from(nodes.values());
  let allEdges = edges;
  const blacklist = ['forEach', 'map', 'filter', 'reduce', 'find', 'some', 'every', 'sort', 'concat', 'join', 'push', 'pop', 'shift', 'unshift', 'splice', 'slice'];
  allNodes = allNodes.filter(node => !blacklist.includes(node.id));
  allEdges = allEdges.filter(edge => !blacklist.includes(edge.source) && !blacklist.includes(edge.target));
  if (allNodes.length === 0) {
    // エラー時にデバッグ情報を出力
    console.log('convertDetailedData: detailedData =', detailedData);
    console.log('convertDetailedData: calleeInfo =', calleeInfo);
    console.log('convertDetailedData: nodes.values() =', Array.from(nodes.values()));
    throw new Error('convertDetailedData: allNodesが0件です。入力データやフィルタ条件を確認してください。');
  }
  return {
    nodes: allNodes,
    edges: allEdges
  };
}

function generateGitHubURL(file, line, repo = null, branch = 'main') {
  if (!repo) return null;
  let normalizedFile = file.replace(/\\/g, '/');
  if (normalizedFile.includes('/src/')) {
    const srcIndex = normalizedFile.lastIndexOf('/src/');
    normalizedFile = normalizedFile.substring(srcIndex + 1);
  } else if (normalizedFile.startsWith('src/')) {
    normalizedFile = normalizedFile;
  } else {
    const lastSlash = normalizedFile.lastIndexOf('/');
    if (lastSlash !== -1) {
      normalizedFile = normalizedFile.substring(lastSlash + 1);
    }
  }
  return `https://github.com/${repo}/blob/${branch}/${normalizedFile}#L${line}`;
}

module.exports = {
  isValidSourceFile,
  convertDetailedData,
  generateGitHubURL,
  getSourceLine,
  writeDebugCallerSourceLines,
  writeDebugCalleeSourceLines,
};

```

### .github_automation/callgraph/scripts/check-codeql-exists.cjs
```cjs
#!/usr/bin/env node
/**
 * check-codeql-exists.cjs
 *
 * CodeQL CLIの存在チェックを行う。
 */
const { execSync } = require('child_process');
try {
  execSync('codeql --version', { stdio: 'inherit' });
  console.log('CodeQL CLI detected.');
} catch (e) {
  console.error('CodeQL CLIが見つかりません。 https://codeql.github.com/docs/codeql-cli/getting-started/ を参照してください。');
  process.exit(1);
}

```

### .github_automation/callgraph/scripts/check-commits.cjs
```cjs
#!/usr/bin/env node
/**
 * check-commits.cjs
 *
 * 過去24時間以内にユーザーコミットがあるかを判定し、
 * 手動実行時は常にtrueを返す。
 *
 * Usage:
 *   node check-commits.cjs [--manual]
 *
 * 出力: should-run=true/false を stdout に出力
 */
const { execSync } = require('child_process');

function isManual() {
  return process.argv.includes('--manual');
}

function main() {
  if (isManual()) {
    console.log('should-run=true');
    console.log('Manual execution, proceeding with analysis');
    process.exit(0);
  }
  try {
    // 過去24時間のコミットを取得
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    console.log(`Checking commits since: ${since}`);
    // github-actions[bot] 以外のコミット数をカウント
    const log = execSync(`git log --since="${since}" --pretty=format:"%an"`, { encoding: 'utf-8' });
    const userCommits = log.split('\n').filter(name => name && name !== 'github-actions[bot]').length;
    console.log(`User commits in last 24 hours: ${userCommits}`);
    if (userCommits > 0) {
      console.log('Found user commits, proceeding with analysis');
      if (process.env.GITHUB_OUTPUT) {
        require('fs').appendFileSync(process.env.GITHUB_OUTPUT, 'should-run=true\n');
      }
    } else {
      console.log('No user commits found, skipping analysis');
      if (process.env.GITHUB_OUTPUT) {
        require('fs').appendFileSync(process.env.GITHUB_OUTPUT, 'should-run=false\n');
      }
    }
  } catch (e) {
    console.error('Error checking commits:', e.message);
    process.exit(1);
  }
}

if (require.main === module) main();

```

### .github_automation/callgraph/scripts/check-node-version.cjs
```cjs
#!/usr/bin/env node
/**
 * check-node-version.cjs
 *
 * Node.jsのバージョンをチェックする。
 */
const requiredVersion = 20;

// WSL or Act環境ではcheckをスキップ
const fs = require('fs');
const isWSL = fs.existsSync('/proc/version') && fs.readFileSync('/proc/version', 'utf8').includes('Microsoft');
const isAct = process.env.GITHUB_ACTOR === 'nektos/act';
if (isWSL || isAct) {
  console.log('テスト環境なのでcheckはスキップします');
  process.exit(0);
}

const current = process.versions.node.split('.')[0];
if (parseInt(current, 10) < requiredVersion) {
  console.error(`Node.js v${requiredVersion} 以上が必要です (現在: v${process.versions.node})`);
  process.exit(1);
} else {
  console.log(`Node.js version OK: v${process.versions.node}`);
}

```

### .github_automation/callgraph/scripts/common-utils.cjs
```cjs
// 共通ユーティリティ関数（循環参照防止用）
const fs = require('fs');
const path = require('path');

// 指定ファイル・行番号のソース行を取得
function getSourceLine(file, line) {
  try {
    const filePath = path.resolve(process.cwd(), file);
    if (!fs.existsSync(filePath)) return null;
    const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
    if (line > 0 && line <= lines.length) {
      return lines[line - 1];
    }
    return null;
  } catch (e) {
    return null;
  }
}

function isValidSourceFile(filePath, allowedFiles) {
  if (!Array.isArray(allowedFiles)) {
    throw new Error('allowedFiles must be provided as an array');
  }
  const normalizedPath = filePath.replace(/\\/g, '/');
  for (const allowedFile of allowedFiles) {
    if (normalizedPath === allowedFile || normalizedPath.endsWith('/' + allowedFile)) {
      return true;
    }
  }
  return false;
}

module.exports = {
  getSourceLine,
  isValidSourceFile
};

```

### .github_automation/callgraph/scripts/copy-commit-results.cjs
```cjs
#!/usr/bin/env node
/**
 * copy-commit-results.cjs
 *
 * 生成されたHTML等を generated-docs/ へコピーし、コミットする。
 *
 * Usage:
 *   node copy-commit-results.cjs
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const src = path.resolve('generated-docs/callgraph.html');
const dest = path.resolve('generated-docs/callgraph.html');

if (!fs.existsSync(src)) {
  console.error('生成HTMLが見つかりません:', src);
  process.exit(1);
}

// ここでは同じ場所なのでコピー省略する

// ファイル情報を表示する
const stat = fs.statSync(src);
console.log(`html: ${src}`);
console.log(`size: ${stat.size} bytes`);

// WSL or Act環境ではコミット・プッシュをスキップする
const isWSL = fs.existsSync('/proc/version') && fs.readFileSync('/proc/version', 'utf8').includes('Microsoft');
const isAct = process.env.GITHUB_ACTOR === 'nektos/act';
if (isWSL || isAct) {
  console.log('テスト環境なのでコミット・プッシュはスキップします');
  process.exit(0);
}

try {
  execSync('git add generated-docs/callgraph.html');
  const commitResult = execSync('git commit -m "Update callgraph.html [auto]"', { stdio: 'pipe' }).toString();
  if (/nothing to commit|no changes added to commit|working tree clean/i.test(commitResult)) {
    console.log('コミットすべき変更がありません。push/pullをスキップします。');
    process.exit(0);
  }
  console.log('コミット完了。push前にpull --rebaseを実行します。');
  try {
    execSync('git pull --rebase origin main', { stdio: 'inherit' });
  } catch (e) {
    console.error('git pull --rebaseに失敗しました。競合の可能性があります:', e.message);
    process.exit(1);
  }
  console.log('pull --rebase成功。pushを実行します。');
  execSync('git push', { stdio: 'inherit' });
  console.log('コミット・プッシュ完了');
} catch (e) {
  console.error('コミット・プッシュに失敗:', e.message);
  process.exit(1);
}

```

### .github_automation/callgraph/scripts/extract-sarif-info.cjs
```cjs
// ヘルパー関数群
// SARIFファイルから関数コールグラフを抽出

const fs = require('fs');
const path = require('path');
const { isValidSourceFile, getSourceLine } = require('./common-utils.cjs');

function extractCallerinfo(sarifFile, allowedFiles) {
  if (!Array.isArray(allowedFiles) || allowedFiles.length === 0) {
    throw new Error('extractCallerinfo: allowedFiles must be a non-empty array');
  }
  try {
    const fileContent = fs.readFileSync(sarifFile, 'utf8');
    const sarif = JSON.parse(fileContent);
    if (!sarif.runs || sarif.runs.length === 0) return [];
    const results = [];
    sarif.runs.forEach((run) => {
      if (!run.results) return;
      run.results.forEach((result) => {
        if (result.message && result.message.text) {
          const text = result.message.text;
          const match = text.match(/^(.+?)\s*->\s*(.+?)\s*\(at\s+(.+):(\d+)(?::(\d+))?\)$/);
          let caller = null, callee = null;
          if (match) {
            caller = match[1].trim();
            callee = match[2].trim();
          } else {
            const lines = text.split('\n').filter(line => line.trim().length > 0);
            for (const line of lines) {
              const m = line.match(/^(.+?)\s*->\s*(.+?)\s*\(at\s+(.+):(\d+)(?::(\d+))?\)$/);
              if (m) {
                caller = m[1].trim();
                callee = m[2].trim();
                break;
              }
            }
          }
          if (caller && callee && Array.isArray(result.locations) && result.locations.length > 0) {
            const loc = result.locations[0].physicalLocation;
            const fileUri = loc.artifactLocation.uri.replace(/^file:\/\//, '').replace(/\\/g, '/');
            const fileName = fileUri.startsWith('src/') ? fileUri : 'src/' + path.basename(fileUri);
            if (isValidSourceFile(fileName, allowedFiles)) {
              const srcLine = getSourceLine(fileName, loc.region?.startLine || 1);
              results.push({
                caller,
                callee,
                file: fileName,
                line: loc.region?.startLine || 1,
                column: loc.region?.startColumn || 1,
                fullLocation: `${fileName}:${loc.region?.startLine || 1}:${loc.region?.startColumn || 1}`,
                sourceLine: srcLine
              });
            }
          }
        }
      });
    });
    if (results.length === 0) {
      console.log('SARIF内容:', JSON.stringify(sarif, null, 2));
      throw new Error('該当するcaller情報が見つかりませんでした');
    }
    return results;
  } catch (e) {
    throw e;
  }
}

function extractCalleeinfo(sarifFile, allowedFiles) {
  if (!Array.isArray(allowedFiles) || allowedFiles.length === 0) {
    throw new Error('extractCalleeinfo: allowedFiles must be a non-empty array');
  }
  try {
    const fileContent = fs.readFileSync(sarifFile, 'utf8');
    const sarif = JSON.parse(fileContent);
    if (!sarif.runs || sarif.runs.length === 0) throw new Error('SARIFファイルにrunsがありません');
    const results = [];
    sarif.runs.forEach((run) => {
      if (!run.results) return;
      run.results.forEach((result) => {
        if (result.message && result.message.text) {
          // 例: calcAttackToReleaseTicks (mml2json.js:111) -> calcLtick (mml2json.js:150) (at mml2json.js:116)
          const text = result.message.text;
          const calleeMatch = text.match(/->\s*([^(]+)\s*\(([^:]+):(\d+)\)/);
          if (calleeMatch) {
            const callee = calleeMatch[1].trim();
            const fileName = calleeMatch[2].trim().startsWith('src/') ? calleeMatch[2].trim() : 'src/' + calleeMatch[2].trim();
            if (isValidSourceFile(fileName, allowedFiles)) {
              const line = parseInt(calleeMatch[3], 10);
              let srcLine = null;
              srcLine = getSourceLine(fileName, line);
              results.push({
                callee,
                file: fileName,
                line: line,
                sourceLine: srcLine
              });
            }
          }
        }
      });
    });
    if (results.length === 0) {
      console.log('SARIF内容:', JSON.stringify(sarif, null, 2));
      throw new Error('該当するcallee情報が見つかりませんでした');
    }
    return results;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  extractCallerinfo,
  extractCalleeinfo
};

```

### .github_automation/callgraph/scripts/find-process-results.cjs
```cjs
#!/usr/bin/env node
/**
 * find-process-results.cjs
 *
 * CodeQLのSARIF結果ファイルを探し、なければエラー。
 *
 * Usage:
 *   node find-process-results.cjs
 */
const fs = require('fs');
const path = require('path');

const sarifPath = path.resolve('codeql-results.sarif');
if (!fs.existsSync(sarifPath)) {
  console.error('SARIFファイルが見つかりません: codeql-results.sarif');
  process.exit(1);
}
console.log('SARIFファイルが見つかりました:', sarifPath);

```

### .github_automation/callgraph/scripts/generate-html-graph.cjs
```cjs
#!/usr/bin/env node
/**
 * generate-html-graph.cjs
 *
 * SARIFファイルからコールグラフHTMLを生成する。
 *
 * Usage:
 *   node generate-html-graph.cjs
 */
const path = require('path');
const fs = require('fs');

const { convertDetailedData, writeDebugCallerSourceLines, writeDebugCalleeSourceLines } = require('./callgraph-utils.cjs');
const { extractCallerinfo, extractCalleeinfo } = require('./extract-sarif-info.cjs');
const generateHTML = require('./generateHTML.cjs');


// allowedFiles.jsonのファイル名をコマンドライン引数から取得
const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node generate-html-graph.cjs <allowedFiles.json>');
  process.exit(1);
}
const allowedFilesPath = path.resolve(args[0]);
if (!fs.existsSync(allowedFilesPath)) {
  console.error('allowedFiles.jsonが見つかりません:', allowedFilesPath);
  process.exit(1);
}
let allowedFiles;
try {
  allowedFiles = JSON.parse(fs.readFileSync(allowedFilesPath, 'utf8'));
  if (!Array.isArray(allowedFiles)) throw new Error('allowedFiles.jsonの内容が配列ではありません');
} catch (e) {
  console.error('allowedFiles.jsonの読み込みに失敗:', e);
  process.exit(1);
}

const sarifPath = path.resolve('codeql-results.sarif');
const outputPath = path.resolve('generated-docs/callgraph.html');

if (!fs.existsSync(sarifPath)) {
  console.error('SARIFファイルが見つかりません:', sarifPath);
  process.exit(1);
}


const callerInfo = extractCallerinfo(sarifPath, allowedFiles);
const calleeInfo = extractCalleeinfo(sarifPath, allowedFiles);
const graphData = convertDetailedData(callerInfo, calleeInfo, allowedFiles);
const html = generateHTML(graphData, { repo: process.env.GITHUB_REPOSITORY || '', branch: process.env.GITHUB_REF_NAME || 'main' });

fs.writeFileSync(outputPath, html);
console.log('コールグラフHTMLを生成しました:', outputPath);

// デバッグ用: Caller sourceLine 付きの詳細データをJSONで出力
writeDebugCallerSourceLines(sarifPath, path.resolve('generated-docs/callerSourceLines.json'), extractCallerinfo, allowedFiles);
console.log('✓ callerSourceLines.json (with sourceLine) generated');

// デバッグ用: Callee sourceLine 付きの詳細データをJSONで出力
writeDebugCalleeSourceLines(sarifPath, path.resolve('generated-docs/calleeSourceLines.json'), extractCalleeinfo, allowedFiles);
console.log('✓ calleeSourceLines.json (with callee sourceLine) generated');

```

### .github_automation/callgraph/scripts/generateHTML.cjs
```cjs
/**
 * HTMLテンプレートを生成
 */
function generateHTML(graphData, options = {}) {
  const {
    title = 'Function Call Graph with Source Links',
    repo = null,
    branch = 'main',
  } = options;

  return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <script src="https://unpkg.com/cytoscape@3.29.2/dist/cytoscape.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="header">
        <h1>${title}</h1>
        <div class="stats-container">
            <div class="stats">
                <div class="stat-value">${graphData.nodes.length}</div>
                <div class="stat-label">Functions</div>
            </div>
            <div class="stats">
                <div class="stat-value">${graphData.edges.length}</div>
                <div class="stat-label">Call Relationships</div>
            </div>
            <div class="stats">
                <div class="stat-value">${graphData.nodes.filter(n => n.hasCalleeLocationInfo).length}</div>
                <div class="stat-label">With Callee Location</div>
            </div>
        </div>
    </div>

    <div class="main-container">
        <div class="graph-container">
            <div id="cy"></div>
            <div class="controls">
                <button class="control-button" onclick="resetLayout()">Reset Layout</button>
                <button class="control-button" onclick="switchLayout(this)">レイアウト切替</button>
                <button class="control-button" onclick="fitToContent()">Fit to Content</button>
                <button class="control-button" onclick="toggleNodeLabels()">Toggle Labels</button>
                <button class="control-button" onclick="toggleCalleeLocationFilter()">Hide No-Callee-Location</button>
                <button class="control-button" onclick="toggleInfoPanel()">Toggle Info Panel</button>
            </div>
        </div>

        <div id="info-panel" class="info-panel hidden">
            <div class="info-title">選択した要素の詳細</div>
            <div id="info-content"></div>
        </div>
    </div>

    <div class="generated-time">
        Generated: ${new Date().toLocaleString('ja-JP')}
    </div>

    <script>
      const graphData = ${JSON.stringify(graphData, null, 2)};
      const repo = ${JSON.stringify(repo)};
      const branch = ${JSON.stringify(branch)};
    </script>
    <script src="callgraph.js"></script>
</body>
</html>`;
}

module.exports = generateHTML;

```

### .github_automation/project_summary/docs/daily-summary-setup.md
```md
# Daily Project Summary Setup

このドキュメントでは、Daily Project Summary機能のセットアップ方法を説明します。

## 必要な設定

### GitHub Secrets

リポジトリの Settings > Secrets and variables > Actions で以下のシークレットを設定してください：

1. **GEMINI_API_KEY** (必須)
   - Google AI Studio で取得したGemini APIキー
   - [Google AI Studio](https://aistudio.google.com/) でAPIキーを作成

2. **GITHUB_TOKEN** (自動設定)
   - GitHub Actionsで自動的に提供されます
   - Issue情報の取得に使用

### ファイル構成

```
.github/
├── workflows/
│   └── daily-project-summary.yml     # メインワークフロー
├── scripts/
│   ├── generate-project-summary.cjs  # 要約生成スクリプト（Node.js）
└── prompts/
    ├── project-overview-prompt.md    # 来訪者向けプロンプト
    └── development-status-prompt.md  # 開発者向けプロンプト

generated-docs/                       # 生成された要約の保存先
├── project-overview.md              # プロジェクト概要（来訪者向け）
└── development-status.md            # 開発状況（開発者向け）
```

## 実行条件

- **スケジュール**: 毎日日本時間 07:00
- **実行条件**: 過去24時間以内にユーザーによるコミットプッシュがある場合のみ
- **除外条件**: GitHub Actionsによるコミットは除外

## プロンプトのカスタマイズ

プロジェクトサマリーは2つの異なる文書に分かれています：

### 🌟 来訪者向け (`project-overview-prompt.md`)
- プロジェクト概要、技術スタック、ファイル・関数構造
- 出力: `project-overview.md`

### 🔧 開発者向け (`development-status-prompt.md`)
- Issues状況、次のアクション候補
- 出力: `development-status.md`

これらのプロンプトファイルを編集することで、生成内容をカスタマイズできます。

### 生成内容

**来訪者向け:**
- プロジェクト概要（3行）
- 技術スタック（カテゴリ別）
- ファイル階層ツリー
- ファイル詳細説明
- 関数詳細説明
- 関数呼び出し階層

**開発者向け:**
- オープンIssues要約（3行）
- 次の一手候補（3つ）
- 各候補の最初の小さな一歩

## 手動実行

### GitHub Actions UI
1. GitHub リポジトリの Actions タブに移動
2. "Daily Project Summary" ワークフローを選択
3. "Run workflow" ボタンをクリック

## トラブルシューティング

### よくある問題

1. **GEMINI_API_KEY not set**
   - GitHub SecretsでGEMINI_API_KEYが設定されているか確認

2. **No user commits found**
   - 過去24時間以内にユーザーによるコミットがない場合は正常な動作

3. **Issues collection failed**
   - GITHUB_TOKENの権限を確認
   - リポジトリがプライベートの場合はissues:read権限が必要

### ログの確認

GitHub Actions の実行ログで詳細なエラー情報を確認できます：
1. Actions タブ → ワークフロー実行 → ログを確認

## API制限について

### Gemini API
- 無料枠: 1日50リクエスト
- 必要に応じて有料プランの検討

### GitHub API
- 認証済みリクエスト: 5000回/時間
- 1日1回のIssue取得なので十分な余裕

## セキュリティ

- APIキーはGitHub Secretsで管理
- 生成されたコンテンツはパブリックリポジトリの場合公開される
- プライベート情報を含むプロンプトは避ける

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
以下の開発状況情報を参考にして要約を生成してください：

## プロジェクトのファイル一覧
${projectFiles}

## 現在のオープンIssues
${issuesSection}

## ドキュメントで言及されているファイルの内容
${file_contents}

## 最近の変更（過去7日間）
コミット履歴:
${recentChanges}

変更されたファイル:
${recentChanges}

上記の情報を基に、プロンプトで指定された形式で開発状況を生成してください。
Issue番号を記載する際は、必ず [Issue #番号](../issue-notes/番号.md) の形式でMarkdownリンクとして記載してください。

```

### .github_automation/project_summary/prompts/project-overview-prompt.md
```md
# プロジェクト概要生成プロンプト（来訪者向け）

## 生成するもの：
- projectを3行で要約する
- プロジェクトで使用されている技術スタックをカテゴリ別に整理して説明する
- プロジェクト全体のファイル階層ツリー（ディレクトリ構造を図解）
- プロジェクト全体のファイルそれぞれの説明
- プロジェクト全体の関数それぞれの説明
- プロジェクト全体の関数の呼び出し階層ツリー

## 生成しないもの：
- Issues情報（開発者向け情報のため）
- 次の一手候補（開発者向け情報のため）
- ハルシネーションしそうなもの（例、存在しない機能や計画を勝手に妄想する等）

## 出力フォーマット：
以下のMarkdown形式で出力してください：

```markdown
# Project Overview

## プロジェクト概要
[以下の形式で3行でプロジェクトを要約]
- [1行目の説明]
- [2行目の説明]
- [3行目の説明]

## 技術スタック
[使用している技術をカテゴリ別に整理して説明]
- フロントエンド: [フロントエンド技術とその説明]
- 音楽・オーディオ: [音楽・オーディオ関連技術とその説明]
- 開発ツール: [開発支援ツールとその説明]
- テスト: [テスト関連技術とその説明]
- ビルドツール: [ビルド・パース関連技術とその説明]
- 言語機能: [言語仕様・機能とその説明]
- 自動化・CI/CD: [自動化・継続的統合関連技術とその説明]
- 開発標準: [コード品質・統一ルール関連技術とその説明]

## ファイル階層ツリー
```
[プロジェクトのディレクトリ構造をツリー形式で表現]
```

## ファイル詳細説明
[各ファイルの役割と機能を詳細に説明]

## 関数詳細説明
[各関数の役割、引数、戻り値、機能を詳細に説明]

## 関数呼び出し階層ツリー
```
[関数間の呼び出し関係をツリー形式で表現]
```
```

```

### .github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs
```cjs
const ProjectOverviewGenerator = require('./overview/ProjectOverviewGenerator.cjs');
const DevelopmentStatusGenerator = require('./development/DevelopmentStatusGenerator.cjs');

/**
 * プロジェクト要約コーディネーター
 * 既存のProjectSummaryGeneratorとの後方互換性を保ちつつ、
 * 疎結合化された2つの生成器を協調実行する
 */
class ProjectSummaryCoordinator {
  /**
   * @param {string} overviewPromptPath - プロジェクト概要プロンプトのパス（必須）
   * @param {string} developmentStatusPromptPath - 開発状況プロンプトのパス（必須）
   * @param {string} overviewPath - プロジェクト概要出力先パス（必須）
   * @param {string} developmentPath - 開発状況出力先パス（必須）
   * @param {string} developmentGeneratedPath - 開発状況生成プロンプトのパス（必須）
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(overviewPromptPath, developmentStatusPromptPath, overviewPath, developmentPath, developmentGeneratedPath, projectRoot) {
    // 引数のバリデーション
    if (!overviewPromptPath) {
      throw new Error('overviewPromptPath is required as the first argument');
    }
    if (!developmentStatusPromptPath) {
      throw new Error('developmentStatusPromptPath is required as the second argument');
    }
    if (!overviewPath) {
      throw new Error('overviewPath is required as the third argument');
    }
    if (!developmentPath) {
      throw new Error('developmentPath is required as the fourth argument');
    }
    if (!developmentGeneratedPath) {
      throw new Error('developmentGeneratedPath is required as the fifth argument');
    }
    if (!projectRoot) {
      throw new Error('projectRoot is required as the sixth argument');
    }

    // 各生成器を初期化
    this.overviewGenerator = new ProjectOverviewGenerator(overviewPromptPath, overviewPath, projectRoot);
    this.developmentGenerator = new DevelopmentStatusGenerator(developmentStatusPromptPath, developmentPath, developmentGeneratedPath, projectRoot);
  }

  /**
   * メイン実行関数
   * 既存のProjectSummaryGenerator.run()と同じインターフェース
   * @returns {Promise<Array<string>>} 生成されたファイルパスの配列
   */
  async run() {
    try {
      console.log('Starting project summary generation...');

      const filenames = [];

      // 並列実行で効率化
      const [overviewFile, developmentFile] = await Promise.all([
        this.overviewGenerator.run(),
        this.developmentGenerator.run()
      ]);

      // 成功したファイルのみを結果に追加
      if (overviewFile) {
        filenames.push(overviewFile);
      }
      if (developmentFile) {
        filenames.push(developmentFile);
      }

      if (filenames.length > 0) {
        console.log('Project summary generation completed successfully!');
        console.log(`Generated files: ${filenames.join(', ')}`);
      } else {
        console.log('No files were generated.');
      }

      return filenames;

    } catch (error) {
      console.error('Project summary generation failed:', error.message);
      if (error.response) {
        console.error('API Response:', error.response);
      }
      process.exit(1);
    }
  }

  /**
   * プロジェクト概要のみ生成
   * @returns {Promise<string>} 生成されたファイルのパス
   */
  async generateOverviewOnly() {
    console.log('Generating project overview only...');
    return await this.overviewGenerator.run();
  }

  /**
   * 開発状況のみ生成
   * @returns {Promise<string>} 生成されたファイルのパス
   */
  async generateDevelopmentStatusOnly() {
    console.log('Generating development status only...');
    return await this.developmentGenerator.run();
  }
}

module.exports = ProjectSummaryCoordinator;

```

### .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
```cjs
const BaseGenerator = require('../shared/BaseGenerator.cjs');
const IssueTracker = require('./IssueTracker.cjs');

/**
 * 開発状況生成器
 * 開発者向けの進捗状況を生成
 */
const fs = require('fs');
const path = require('path');

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
      if (error.response) {
        console.error('API Response:', error.response);
      }
      throw error;
    }
  }

  /**
   * 開発状況を生成
   * @param {Array} issues - Issues情報
   * @param {Object} recentChanges - 最近の変更情報
   * @param {string} prompt - プロンプト内容
   * @returns {Promise<string>} 生成された開発状況
   */
  async getProjectFiles(dir = this.projectRoot) {
    // 再帰的にファイル一覧を取得し、Markdownリスト形式で返す
    const results = [];
    const excludeDirs = ['.git', 'node_modules'];
    function walk(currentDir, base = '') {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory() && excludeDirs.includes(entry.name)) {
          continue;
        }
        const relPath = path.join(base, entry.name).replace(/\\/g, '/');
        if (entry.isDirectory()) {
          walk(path.join(currentDir, entry.name), relPath + '/');
        } else {
          results.push(relPath);
        }
      }
    }
    walk(dir);
    // Markdownリスト形式で返す
    return results.length === 0 ? '（ファイルなし）' : results.map(f => `- ${f}`).join('\n');
  }

  /**
   * 指定filenameにマッチする全ファイル内容をmarkdown形式で返す
   * @param {string} filename - 対象のファイル名
   * @returns {string} markdown文字列
   */
  getFileContentsMarkdown(filename) {
    const map = this.getFilenameToPathsMap();
    const fs = require('fs');
    const path = require('path');
    if (!map[filename] || map[filename].length === 0) {
      return `（該当ファイルなし）`;
    }
    return map[filename].map(relPath => {
      let content = '';
      try {
        content = fs.readFileSync(path.join(this.projectRoot, relPath), 'utf8');
      } catch (e) {
        content = `（ファイル読み込み失敗: ${e.message}）`;
      }
      const ext = relPath.split('.').pop();
      return [
        `### ${relPath}`,
        '```' + ext,
        content,
        '```'
      ].join('\n');
    }).join('\n\n');
  }

  /**
   * prompt内で言及されているファイル名の内容をmarkdown文字列群として返す
   * @param {string} prompt - プロンプト全文
   * @returns {string} markdown文字列群
   */
  getMentionedFileContentsInPrompt(prompt) {
    const map = this.getFilenameToPathsMap();
    const mentionedFiles = Object.keys(map).filter(filename => prompt.includes(filename));
    if (mentionedFiles.length === 0) {
      return '';
    }
    // 各ファイル名について内容取得
    return mentionedFiles.map(filename => this.getFileContentsMarkdown(filename)).join('\n\n');
  }

  /**
   * プロジェクト全体のファイル名→相対パス配列のmapを返す
   * @returns {Object} { [filename]: [relativePath, ...] }
   */
  getFilenameToPathsMap(dir = this.projectRoot) {
    const map = {};
    const excludeDirs = ['.git', 'node_modules'];
    const path = require('path');
    const fs = require('fs');
    function walk(currentDir, base = '') {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory() && excludeDirs.includes(entry.name)) {
          continue;
        }
        const relPath = path.join(base, entry.name).replace(/\\/g, '/');
        if (entry.isDirectory()) {
          walk(path.join(currentDir, entry.name), relPath + '/');
        } else {
          const basename = entry.name;
          if (!map[basename]) {
            map[basename] = [];
          }
          map[basename].push(relPath);
        }
      }
    }
    walk(dir);
    return map;
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

    // プロジェクトファイル一覧を取得
    const projectFiles = await this.getProjectFiles();

    // プロンプトを生成
    // phase1: issues, recentChanges, projectFilesを埋め込む
    function fillTemplate(template, values) {
      return template.replace(/\$\{(\w+)\}/g, (match, key) => {
        return key in values ? values[key] : match;
      });
    }
    let developmentPrompt = fillTemplate(prompt, {
      issuesSection,
      commits: recentChanges.commits.join('\n'),
      changedFiles: recentChanges.changedFiles.join('\n'),
      projectFiles
    });
    // phase2: developmentPrompt を元に、fileContentsを得て埋め込む
    const fileContents = this.getMentionedFileContentsInPrompt(developmentPrompt);
    developmentPrompt = developmentPrompt.replace(/\$\{file_contents\}/g, fileContents);

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

### .github_automation/project_summary/scripts/development/GitUtils.cjs
```cjs
const { execSync } = require('child_process');

/**
 * Git操作のユーティリティクラス
 */
class GitUtils {
  constructor(projectRoot) {
    if (!projectRoot) {
      throw new Error('projectRoot is required');
    }
    this.projectRoot = projectRoot;
  }

  /**
   * 過去24時間以内にユーザーコミットがあるかチェック
   */
  async hasUserCommitsInLast24Hours() {
    try {
      console.log('Checking for user commits in the last 24 hours...');

      // 過去24時間のコミット履歴を取得（author情報付き）
      const gitCommand = `git log --since="24 hours ago" --pretty=format:"%H %an %s" --oneline`;

      const result = execSync(gitCommand, {
        cwd: this.projectRoot,
        encoding: 'utf-8',
        stdio: 'pipe'
      });

      const allCommits = result.trim();
      if (!allCommits) {
        console.log('No commits found in the last 24 hours.');
        return false;
      }

      // GitHub Actionsによるコミットを除外
      const userCommits = allCommits
        .split('\n')
        .filter(line => {
          const lowerLine = line.toLowerCase();
          return !lowerLine.includes('github-actions') &&
                 !lowerLine.includes('action@github.com');
        });

      const hasCommits = userCommits.length > 0;

      console.log(`User commits found: ${hasCommits}`);
      if (hasCommits) {
        console.log('Recent user commits:');
        userCommits.forEach(commit => console.log(commit));
      }

      return hasCommits;
    } catch (error) {
      console.error('Error checking commits:', error.message);
      return false;
    }
  }

  /**
   * 最近の変更履歴を取得
   */
  async collectRecentChanges() {
    console.log('Collecting recent changes...');

    try {
      // 過去7日間のコミット履歴
      const commits = execSync('git log --since="7 days ago" --oneline', {
        cwd: this.projectRoot,
        encoding: 'utf-8',
        stdio: 'pipe'
      }).trim().split('\n').slice(0, 10);

      // 最近変更されたファイル
      const changedFiles = execSync('git diff --name-only HEAD~7..HEAD', {
        cwd: this.projectRoot,
        encoding: 'utf-8',
        stdio: 'pipe'
      }).trim().split('\n').filter(file => file.length > 0);

      return {
        commits,
        changedFiles
      };
    } catch (error) {
      console.warn('Could not get recent changes:', error.message);
      return {
        commits: [],
        changedFiles: []
      };
    }
  }
}

module.exports = GitUtils;

```

### .github_automation/project_summary/scripts/development/IssueTracker.cjs
```cjs
const GitUtils = require('./GitUtils.cjs');

/**
 * Issue追跡ユーティリティ関数集
 * GitHub Issues、Git履歴などの動的な開発状況追跡機能を提供
 */

/**
 * GitHub Issues情報を収集
 * @param {string} projectRoot - プロジェクトルートパス
 * @returns {Promise<Array>} Issues情報の配列
 */
async function collectIssues(projectRoot) {
  console.log('Collecting GitHub Issues...');

  try {
    const { Octokit } = require('@octokit/rest');
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

    const { data: issues } = await octokit.rest.issues.listForRepo({
      owner,
      repo,
      state: 'open',
      per_page: 10
    });

    return issues.map(issue => ({
      number: issue.number,
      title: issue.title,
      body: issue.body ? issue.body.substring(0, 300) + '...' : '',
      labels: issue.labels.map(label => label.name)
    }));
  } catch (error) {
    console.warn('Could not fetch GitHub Issues:', error.message);
    return [];
  }
}

/**
 * 最近の変更情報を収集
 * @param {string} projectRoot - プロジェクトルートパス
 * @returns {Promise<Object>} 最近の変更情報
 */
async function collectRecentChanges(projectRoot) {
  const gitUtils = new GitUtils(projectRoot);
  return await gitUtils.collectRecentChanges();
}

/**
 * ユーザーコミットの存在チェック
 * @param {string} projectRoot - プロジェクトルートパス
 * @returns {Promise<boolean>} 過去24時間にユーザーコミットがあるか
 */
async function hasRecentUserCommits(projectRoot) {
  const gitUtils = new GitUtils(projectRoot);
  return await gitUtils.hasUserCommitsInLast24Hours();
}

/**
 * 指定したIssue番号のノートmdファイル内容を同期取得 ※まず開発しやすさ優先で、決め打ちで必ずノートがある想定で開発する。これによりノート取得失敗バグを検知できる
 * ノートファイルが存在しない、または読み取りに失敗した場合はエラーメッセージを出力し、プロセスをエラー終了させる。
 * @param {number|string} issueNumber - Issue番号
 * @param {string} projectRoot - プロジェクトルートパス
 * @returns {string} ノート内容
 */
function getIssueNoteSync(issueNumber, projectRoot) {
  const fs = require('fs');
  const path = require('path');
  const notePath = path.resolve(projectRoot, 'issue-notes', `${issueNumber}.md`);
  if (!fs.existsSync(notePath)) {
    console.error(`Issueノートが存在しません: ${notePath}`);
    process.exit(1);
  }
  try {
    return fs.readFileSync(notePath, 'utf-8');
  } catch (e) {
    console.error(`Issueノートの読み取りに失敗しました: ${notePath}`);
    console.error(e);
    process.exit(1);
  }
}

module.exports = {
  collectIssues,
  collectRecentChanges,
  hasRecentUserCommits,
  getIssueNoteSync
};

```

### .github_automation/project_summary/scripts/generate-project-summary.cjs
```cjs
const ProjectSummaryCoordinator = require('./ProjectSummaryCoordinator.cjs');

// メイン処理実行

const overviewPromptPath = process.argv[2];
const developmentStatusPromptPath = process.argv[3];
const overviewPath = process.argv[4];
const developmentPath = process.argv[5];
const developmentGeneratedPath = process.argv[6];
const projectRoot = process.argv[7];

const coordinator = new ProjectSummaryCoordinator(
  overviewPromptPath,
  developmentStatusPromptPath,
  overviewPath,
  developmentPath,
  developmentGeneratedPath,
  projectRoot
);
coordinator.run();

```

### .github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs
```cjs
const fs = require('fs').promises;
const path = require('path');

/**
 * 汎用的なコード解析機能を提供するクラス
 * どのプロジェクトでも再利用可能な純粋な分析ロジック
 */
class CodeAnalyzer {
  /**
   * @param {string} projectRoot - プロジェクトルートディレクトリ
   */
  constructor(projectRoot) {
    this.projectRoot = projectRoot;
  }

  /**
   * 全ファイルの詳細分析
   * @param {string[]} extensions - 対象拡張子（デフォルト: ['.js', '.ts', '.pegjs', '.html', '.css']）
   * @param {string[]} excludeDirs - 除外ディレクトリ（デフォルト: ['.git', 'node_modules', '.github']）
   */
  async analyzeAllFiles(extensions = ['.js', '.ts', '.pegjs', '.html', '.css'], excludeDirs = ['.git', 'node_modules', '.github']) {
    const fileAnalysis = [];

    const analyzeFiles = async (dir) => {
      try {
        const items = await fs.readdir(path.join(this.projectRoot, dir));

        for (const item of items) {
          const fullPath = path.join(dir, item);
          const absolutePath = path.join(this.projectRoot, fullPath);

          if (excludeDirs.includes(item)) continue;

          try {
            const stat = await fs.stat(absolutePath);
            if (stat.isDirectory()) {
              await analyzeFiles(fullPath);
            } else if (stat.isFile()) {
              const ext = path.extname(item);
              if (extensions.includes(ext)) {
                const analysis = await this.analyzeFile(absolutePath, fullPath);
                if (analysis) {
                  fileAnalysis.push(analysis);
                }
              }
            }
          } catch (error) {
            continue;
          }
        }
      } catch (error) {
        // ディレクトリ読み取りエラーをスキップ
      }
    };

    await analyzeFiles('.');
    return fileAnalysis;
  }

  /**
   * 個別ファイルの分析
   * @param {string} absolutePath - ファイルの絶対パス
   * @param {string} relativePath - ファイルの相対パス
   */
  async analyzeFile(absolutePath, relativePath) {
    try {
      const content = await fs.readFile(absolutePath, 'utf-8');
      const ext = path.extname(relativePath);

      const analysis = {
        path: relativePath.replace(/\\/g, '/'),
        size: content.length,
        lines: content.split('\n').length,
        functions: [],
        imports: [],
        exports: []
      };

      if (ext === '.js' || ext === '.ts') {
        analysis.functions = this.extractJavaScriptFunctions(content);
        analysis.imports = this.extractImports(content);
        analysis.exports = this.extractExports(content);
      } else if (ext === '.pegjs') {
        analysis.functions = this.extractPegJSRules(content);
      }

      return analysis;
    } catch (error) {
      return null;
    }
  }

  /**
   * JavaScript/TypeScript関数を抽出
   * @param {string} content - ファイル内容
   */
  extractJavaScriptFunctions(content) {
    const functions = [];

    // 関数宣言のパターン
    const patterns = [
      /function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)/g,
      /const\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:async\s+)?function/g,
      /const\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:async\s+)?\([^)]*\)\s*=>/g,
      /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)\s*{/g,
      /async\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)/g
    ];

    patterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        if (match[1] && !functions.includes(match[1])) {
          functions.push(match[1]);
        }
      }
    });

    return functions;
  }

  /**
   * import文を抽出
   * @param {string} content - ファイル内容
   */
  extractImports(content) {
    const imports = [];
    const importPattern = /import\s+.*?\s+from\s+['"`]([^'"`]+)['"`]/g;
    const requirePattern = /require\(['"`]([^'"`]+)['"`]\)/g;

    let match;
    while ((match = importPattern.exec(content)) !== null) {
      imports.push(match[1]);
    }
    while ((match = requirePattern.exec(content)) !== null) {
      imports.push(match[1]);
    }

    return imports;
  }

  /**
   * export文を抽出
   * @param {string} content - ファイル内容
   */
  extractExports(content) {
    const exports = [];
    const exportPattern = /export\s+(?:default\s+)?(?:function\s+)?([a-zA-Z_$][a-zA-Z0-9_$]*)/g;
    const moduleExportsPattern = /module\.exports\s*=\s*([a-zA-Z_$][a-zA-Z0-9_$]*)/g;

    let match;
    while ((match = exportPattern.exec(content)) !== null) {
      exports.push(match[1]);
    }
    while ((match = moduleExportsPattern.exec(content)) !== null) {
      exports.push(match[1]);
    }

    return exports;
  }

  /**
   * PegJSルールを抽出
   * @param {string} content - ファイル内容
   */
  extractPegJSRules(content) {
    const rules = [];
    const rulePattern = /^([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/gm;

    let match;
    while ((match = rulePattern.exec(content)) !== null) {
      rules.push(match[1]);
    }

    return rules;
  }

  /**
   * 関数呼び出し階層を分析
   * @param {Array} fileAnalysis - analyzeAllFiles()の結果
   */
  async analyzeFunctionCallHierarchy(fileAnalysis) {
    const hierarchy = {};

    // 各ファイルの関数について、どの関数を呼び出しているかを分析
    for (const file of fileAnalysis) {
      try {
        const content = await fs.readFile(path.join(this.projectRoot, file.path), 'utf-8');

        for (const func of file.functions) {
          if (!hierarchy[func]) {
            hierarchy[func] = {
              file: file.path,
              calls: [],
              calledBy: []
            };
          }

          // この関数が呼び出している他の関数を検索
          const allFunctions = fileAnalysis.flatMap(f => f.functions);
          allFunctions.forEach(targetFunc => {
            if (targetFunc !== func && content.includes(targetFunc + '(')) {
              if (!hierarchy[func].calls.includes(targetFunc)) {
                hierarchy[func].calls.push(targetFunc);
              }

              if (!hierarchy[targetFunc]) {
                hierarchy[targetFunc] = { file: '', calls: [], calledBy: [] };
              }
              if (!hierarchy[targetFunc].calledBy.includes(func)) {
                hierarchy[targetFunc].calledBy.push(func);
              }
            }
          });
        }
      } catch (error) {
        continue;
      }
    }

    return hierarchy;
  }
}

module.exports = CodeAnalyzer;

```

### .github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs
```cjs
const BaseGenerator = require('../shared/BaseGenerator.cjs');
const FileSystemUtils = require('../shared/FileSystemUtils.cjs');
const CodeAnalyzer = require('./CodeAnalyzer.cjs');
const ProjectDataCollector = require('./ProjectDataCollector.cjs');
const TechStackAnalyzer = require('./TechStackAnalyzer.cjs');
const ProjectDataFormatter = require('./ProjectDataFormatter.cjs');

/**
 * プロジェクト分析プロセス統制クラス
 * 各分析コンポーネントを協調させて統合分析結果を生成
 */
class ProjectAnalysisOrchestrator extends BaseGenerator {
  /**
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(projectRoot) {
    super(projectRoot);
    this._initializeComponents();
  }

  /**
   * プロジェクト分析を実行
   * @returns {Promise<Object>} 統合分析結果
   */
  async analyzeProject() {
    console.log('Starting comprehensive project analysis...');

    // 1. データ収集
    const projectData = await this.dataCollector.collectAll();

    // 2. 技術スタック分析
    const packageJson = await this._getPackageJson();
    const techStack = this.techStackAnalyzer.analyzeTechStack(packageJson, projectData);

    // 3. 結果統合
    const analysisResult = this._combineAnalysisResults(projectData, techStack, packageJson);

    console.log('Project analysis completed.');
    return analysisResult;
  }

  /**
   * 整形済みレポートを生成
   * @returns {Promise<Object>} フォーマット済み分析結果
   */
  async generateFormattedReport() {
    const analysisResult = await this.analyzeProject();

    return {
      ...analysisResult,
      formatted: {
        techStack: this.formatter.formatTechStack(analysisResult.techStack),
        fileDetails: this.formatter.formatFileDetails(analysisResult.fileAnalysis),
        functionHierarchy: this.formatter.formatFunctionHierarchy(analysisResult.functionHierarchy),
        projectSummary: this.formatter.formatProjectSummary(analysisResult)
      }
    };
  }

  /**
   * コンポーネントを初期化
   * @private
   */
  _initializeComponents() {
    this.fileSystemUtils = new FileSystemUtils(this.projectRoot);
    this.codeAnalyzer = new CodeAnalyzer(this.projectRoot);
    this.dataCollector = new ProjectDataCollector(
      this.projectRoot,
      this.fileSystemUtils,
      this.codeAnalyzer
    );
    this.techStackAnalyzer = new TechStackAnalyzer(this.fileSystemUtils);
    this.formatter = new ProjectDataFormatter();
  }

  /**
   * 分析結果を統合
   * @private
   */
  _combineAnalysisResults(projectData, techStack, packageJson) {
    return {
      name: projectData.name,
      description: projectData.description,
      structure: projectData.structure,
      dependencies: projectData.dependencies,
      techStack: techStack,
      fileTree: projectData.fileTree,
      fileAnalysis: projectData.fileAnalysis,
      functionHierarchy: projectData.functionHierarchy,
      packageJson: packageJson
    };
  }

  /**
   * package.jsonを取得
   * @private
   */
  async _getPackageJson() {
    try {
      const fs = require('fs').promises;
      const path = require('path');
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const content = await fs.readFile(packageJsonPath, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      console.warn('Could not read package.json:', error.message);
      return {};
    }
  }
}

module.exports = ProjectAnalysisOrchestrator;

```

### .github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs
```cjs
const fs = require('fs').promises;
const path = require('path');

/**
 * プロジェクト情報収集専用クラス
 * ファイルシステムからのデータ収集に特化
 */
class ProjectDataCollector {
  /**
   * @param {string} projectRoot - プロジェクトルートディレクトリ
   * @param {Object} fileSystemUtils - FileSystemUtilsインスタンス
   * @param {Object} codeAnalyzer - CodeAnalyzerインスタンス
   */
  constructor(projectRoot, fileSystemUtils, codeAnalyzer) {
    this.projectRoot = projectRoot;
    this.fileSystemUtils = fileSystemUtils;
    this.codeAnalyzer = codeAnalyzer;
  }

  /**
   * 基本情報を収集（package.json, README）
   */
  async collectBasicInfo() {
    console.log('Collecting basic project information...');
    
    const basicInfo = {
      name: '',
      description: '',
      dependencies: {}
    };

    try {
      const packageJson = await this._readPackageJson();
      basicInfo.name = packageJson.name || 'Unknown';
      basicInfo.description = packageJson.description || '';
      basicInfo.dependencies = {
        dependencies: packageJson.dependencies || {},
        devDependencies: packageJson.devDependencies || {}
      };
    } catch (error) {
      console.warn('Could not read package.json:', error.message);
    }

    try {
      const readmeContent = await this._readReadme();
      if (readmeContent) {
        // READMEの内容を優先（最初の500文字）
        basicInfo.description = readmeContent.substring(0, 500) + '...';
      }
    } catch (error) {
      console.warn('Could not read README:', error.message);
    }

    return basicInfo;
  }

  /**
   * 構造情報を収集（ファイルツリー、プロジェクト構造）
   */
  async collectStructureInfo() {
    console.log('Collecting project structure...');
    
    const structureInfo = {
      structure: '',
      fileTree: ''
    };

    try {
      structureInfo.structure = await this.fileSystemUtils.getProjectStructure();
    } catch (error) {
      console.warn('Could not get project structure:', error.message);
    }

    try {
      console.log('Generating detailed file tree...');
      structureInfo.fileTree = await this.fileSystemUtils.getDetailedFileTree();
    } catch (error) {
      console.warn('Could not get detailed file tree:', error.message);
    }

    return structureInfo;
  }

  /**
   * コード分析情報を収集
   */
  async collectCodeAnalysis() {
    console.log('Collecting code analysis...');
    
    const codeInfo = {
      fileAnalysis: [],
      functionHierarchy: {}
    };

    try {
      console.log('Analyzing all files...');
      codeInfo.fileAnalysis = await this.codeAnalyzer.analyzeAllFiles();
    } catch (error) {
      console.warn('Could not analyze files:', error.message);
    }

    try {
      console.log('Analyzing function call hierarchy...');
      codeInfo.functionHierarchy = await this.codeAnalyzer.analyzeFunctionCallHierarchy(codeInfo.fileAnalysis);
    } catch (error) {
      console.warn('Could not analyze function hierarchy:', error.message);
      codeInfo.functionHierarchy = {};
    }

    return codeInfo;
  }

  /**
   * 全情報を統合収集
   */
  async collectAll() {
    console.log('Collecting all project information...');

    const [basicInfo, structureInfo, codeInfo] = await Promise.all([
      this.collectBasicInfo(),
      this.collectStructureInfo(),
      this.collectCodeAnalysis()
    ]);

    return {
      ...basicInfo,
      ...structureInfo,
      ...codeInfo
    };
  }

  /**
   * package.json を読み込み
   * @private
   */
  async _readPackageJson() {
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    const content = await fs.readFile(packageJsonPath, 'utf-8');
    return JSON.parse(content);
  }

  /**
   * README を読み込み（.ja.md を優先）
   * @private
   */
  async _readReadme() {
    let readmePath = path.join(this.projectRoot, 'README.ja.md');
    
    try {
      await fs.access(readmePath);
    } catch {
      readmePath = path.join(this.projectRoot, 'README.md');
    }

    return await fs.readFile(readmePath, 'utf-8');
  }
}

module.exports = ProjectDataCollector;

```

### .github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs
```cjs
/**
 * プロジェクトデータ整形専用クラス
 * 分析結果を読みやすい形式にフォーマット
 */
class ProjectDataFormatter {
  /**
   * 技術スタックをフォーマット
   * @param {Object} techStack - 技術スタック情報
   * @returns {string} フォーマット済み技術スタック
   */
  formatTechStack(techStack) {
    let result = '';
    
    Object.entries(techStack).forEach(([category, items]) => {
      if (items.length > 0) {
        const categoryName = this._getCategoryName(category);
        result += `**${categoryName}:**\n${items.map(item => `  - ${item}`).join('\n')}\n\n`;
      }
    });
    
    return result || '技術スタック情報を取得できませんでした';
  }

  /**
   * ファイル詳細をフォーマット
   * @param {Array} fileAnalysis - ファイル分析結果
   * @returns {string} フォーマット済みファイル詳細
   */
  formatFileDetails(fileAnalysis) {
    return fileAnalysis.map(file => {
      return this._formatFileInfo(file);
    }).join('\n\n');
  }

  /**
   * 関数呼び出し階層をフォーマット
   * @param {Object} hierarchy - 関数階層オブジェクト
   * @returns {string} フォーマット済み階層テキスト
   */
  formatFunctionHierarchy(hierarchy) {
    if (!hierarchy || typeof hierarchy !== 'object' || Object.keys(hierarchy).length === 0) {
      return '関数呼び出し階層を分析できませんでした';
    }

    let result = '';
    const processedFunctions = new Set();

    // エントリーポイント（他から呼ばれない関数）を探す
    const entryPoints = Object.keys(hierarchy).filter(func =>
      hierarchy[func] && hierarchy[func].calledBy && hierarchy[func].calledBy.length === 0
    );

    entryPoints.forEach(entry => {
      result += this._buildHierarchyTree(hierarchy, entry, processedFunctions);
    });

    return result || '関数呼び出し階層を分析できませんでした';
  }

  /**
   * プロジェクト概要をフォーマット
   * @param {Object} projectInfo - プロジェクト情報
   * @returns {string} フォーマット済みプロジェクト概要
   */
  formatProjectSummary(projectInfo) {
    let summary = '';
    
    if (projectInfo.name) {
      summary += `# ${projectInfo.name}\n\n`;
    }
    
    if (projectInfo.description) {
      summary += `## 概要\n${projectInfo.description}\n\n`;
    }
    
    if (projectInfo.structure) {
      summary += `## ファイル構造\n\`\`\`\n${projectInfo.structure}\n\`\`\`\n\n`;
    }
    
    return summary;
  }

  /**
   * カテゴリー名を取得
   * @private
   */
  _getCategoryName(category) {
    const categoryNames = {
      frontend: 'フロントエンド',
      music: '音楽・オーディオ',
      backend: 'バックエンド',
      development: '開発ツール',
      testing: 'テスト',
      buildTools: 'ビルドツール',
      languageFeatures: '言語機能',
      automation: '自動化・CI/CD',
      standards: '開発標準'
    };
    
    return categoryNames[category] || category;
  }

  /**
   * ファイル情報をフォーマット
   * @private
   */
  _formatFileInfo(file) {
    const functions = file.functions.length > 0 ? file.functions.join(', ') : 'なし';
    const imports = file.imports.length > 0 ? file.imports.slice(0, 3).join(', ') : 'なし';
    
    return `**${file.path}** (${file.lines}行, ${file.size}バイト)\n  - 関数: ${functions}\n  - インポート: ${imports}`;
  }

  /**
   * 階層ツリーを構築
   * @private
   */
  _buildHierarchyTree(hierarchy, func, processedFunctions, depth = 0) {
    if (processedFunctions.has(func) || depth > 3) return '';
    processedFunctions.add(func);

    const indent = '  '.repeat(depth);
    let tree = `${indent}- ${func} (${hierarchy[func].file})\n`;

    if (hierarchy[func] && hierarchy[func].calls) {
      hierarchy[func].calls.forEach(calledFunc => {
        if (hierarchy[calledFunc]) {
          tree += this._buildHierarchyTree(hierarchy, calledFunc, processedFunctions, depth + 1);
        }
      });
    }

    return tree;
  }
}

module.exports = ProjectDataFormatter;

```

### .github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs
```cjs
const BaseGenerator = require('../shared/BaseGenerator.cjs');
const ProjectAnalysisOrchestrator = require('./ProjectAnalysisOrchestrator.cjs');

/**
 * プロジェクト概要生成器
 * AI生成に特化した軽量クラス
 */
class ProjectOverviewGenerator extends BaseGenerator {
  /**
   * @param {string} overviewPromptPath - プロジェクト概要プロンプトのパス（必須）
   * @param {string} overviewPath - プロジェクト概要出力先パス（必須）
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(overviewPromptPath, overviewPath, projectRoot) {
    super(projectRoot);

    if (!overviewPromptPath) {
      throw new Error('overviewPromptPath is required as the first argument');
    }
    if (!overviewPath) {
      throw new Error('overviewPath is required as the second argument');
    }

    this.overviewPromptPath = overviewPromptPath;
    this.overviewPath = overviewPath;
    this.orchestrator = new ProjectAnalysisOrchestrator(projectRoot);
  }

  /**
   * メイン実行関数
   * @returns {Promise<string>} 生成されたファイルのパス
   */
  async run() {
    try {
      console.log('Starting project overview generation...');

      // 環境変数とコミット状況をチェック
      const shouldContinue = await this.validateEnvironment();
      if (!shouldContinue) {
        return null;
      }

      // データ収集・分析（新しいオーケストレーターを使用）
      const [formattedReport, prompt] = await Promise.all([
        this.orchestrator.generateFormattedReport(),
        this.loadPrompt(this.overviewPromptPath)
      ]);

      // プロジェクト概要生成
      const overview = await this.generateOverview(formattedReport, prompt);

      // ファイル保存
      const filename = await this.saveToFile(overview, this.overviewPath);

      console.log('Project overview generation completed successfully!');
      console.log(`Generated file: ${filename}`);
      return filename;

    } catch (error) {
      console.error('Project overview generation failed:', error.message);
      if (error.response) {
        console.error('API Response:', error.response);
      }
      throw error;
    }
  }

  /**
   * プロジェクト概要を生成
   * @param {Object} formattedReport - フォーマット済み分析結果
   * @param {string} prompt - プロンプト内容
   * @returns {Promise<string>} 生成された概要
   */
  async generateOverview(formattedReport, prompt) {
    console.log('Generating project overview with Gemini API...');

    const overviewPrompt = this._buildPrompt(formattedReport, prompt);

    try {
      const result = await this.generateContent(overviewPrompt);
      return this._processAIResponse(result.response.text());
    } catch (error) {
      console.error('Error generating project overview:', error.message);
      throw error;
    }
  }

  /**
   * プロンプトを構築
   * @private
   */
  _buildPrompt(formattedReport, basePrompt) {
    return `
${basePrompt}

以下のプロジェクト情報を参考にして要約を生成してください：

## プロジェクト情報
名前: ${formattedReport.name}
説明: ${formattedReport.description}

依存関係:
${JSON.stringify(formattedReport.dependencies, null, 2)}

## 技術スタック
${formattedReport.formatted.techStack}

## ファイル階層ツリー
${formattedReport.fileTree}

## ファイル詳細分析
${formattedReport.formatted.fileDetails}

## 関数呼び出し階層
${formattedReport.formatted.functionHierarchy}

## プロジェクト構造（ファイル一覧）
${formattedReport.structure}

上記の情報を基に、プロンプトで指定された形式でプロジェクト概要を生成してください。
特に以下の点を重視してください：
- 技術スタックは各カテゴリごとに整理して説明
- ファイル階層ツリーは提供された構造をそのまま使用
- ファイルの説明は各ファイルの実際の内容と機能に基づく
- 関数の説明は実際に検出された関数の役割に基づく
- 関数呼び出し階層は実際の呼び出し関係に基づく
`;
  }

  /**
   * AI応答を処理
   * @private
   */
  _processAIResponse(response) {
    return this.cleanMarkdownCodeBlock(response);
  }
}

module.exports = ProjectOverviewGenerator;

```

### .github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs
```cjs
/**
 * 技術スタック判定専用クラス
 * プロジェクトの依存関係とファイル構成から技術スタックを分析
 */
class TechStackAnalyzer {
  /**
   * @param {Object} fileSystemUtils - FileSystemUtilsインスタンス
   */
  constructor(fileSystemUtils) {
    this.fileSystemUtils = fileSystemUtils;
  }

  /**
   * 技術スタックを分析
   * @param {Object} packageJson - package.jsonの内容
   * @param {Object} projectInfo - プロジェクト情報
   */
  analyzeTechStack(packageJson, projectInfo = {}) {
    const techStack = {
      frontend: [],
      music: [],
      backend: [],
      development: [],
      testing: [],
      buildTools: [],
      languageFeatures: [],
      automation: [],
      standards: []
    };

    const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };

    // 各カテゴリーの技術を検出
    this.detectFrontendTech(deps, techStack.frontend);
    this.detectMusicTech(deps, techStack.music);
    this.detectDevTools(packageJson, techStack.development);
    this.detectTestingTech(deps, techStack.testing);
    this.detectBuildTools(deps, techStack.buildTools);
    this.detectLanguageFeatures(packageJson, techStack.languageFeatures);
    this.detectAutomation(techStack.automation);
    this.detectStandards(techStack.standards);

    return techStack;
  }

  /**
   * フロントエンド技術を検出
   */
  detectFrontendTech(deps, frontendArray) {
    if (this.fileSystemUtils.checkFileExists('src/index.html')) {
      frontendArray.push('HTML5 - ブラウザベースのMMLプレイヤー');
    }
  }

  /**
   * 音楽・オーディオ技術を検出
   */
  detectMusicTech(deps, musicArray) {
    if (this._checkDependency(deps, 'tonejs') || this.fileSystemUtils.checkFileExists('src/**/*.js', 'Tone.js')) {
      musicArray.push('Tone.js - Web Audio API音声ライブラリ');
      musicArray.push('Web Audio API - ブラウザ音声技術（Tone.js経由）');
    }

    if (this.fileSystemUtils.checkFileExists('src/index.html')) {
      const htmlContent = this.fileSystemUtils.readFileContent('src/index.html');
      if (htmlContent && htmlContent.includes('unpkg.com/tone')) {
        musicArray.push('Tone.js CDN - unpkg経由でのライブラリ配信');
      }
    }

    if (this.fileSystemUtils.checkFileExists('src/grammar.pegjs') || this.fileSystemUtils.checkFileExists('src/**/*.js')) {
      musicArray.push('MML (Music Macro Language) - 音楽記法パーサー');
    }
  }

  /**
   * 開発ツールを検出
   */
  detectDevTools(packageJson, devArray) {
    // 基本ランタイム
    devArray.push('Node.js runtime - JavaScript実行環境');

    // npm scripts
    if (packageJson.scripts && Object.keys(packageJson.scripts).length > 0) {
      const scriptCount = Object.keys(packageJson.scripts).length;
      devArray.push(`npm scripts - タスクランナー (${scriptCount}個のスクリプト)`);
    }

    // パッケージマネージャー
    if (packageJson.packageManager === 'pnpm' || this.fileSystemUtils.checkFileExists('pnpm-lock.yaml')) {
      devArray.push('pnpm - 高速で効率的なパッケージマネージャー');
    }

    // AI・API関連
    const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
    if (deps['@google/generative-ai']) {
      devArray.push('Google Generative AI - AI文書生成サポート');
    }

    if (deps['@octokit/rest']) {
      devArray.push('@octokit/rest - GitHub API連携');
    }
  }

  /**
   * テスト技術を検出
   */
  detectTestingTech(deps, testingArray) {
    if (this._checkDependency(deps, 'vitest')) {
      testingArray.push('Vitest - 高速なViteベースのテストフレームワーク');
    }

    if (this.fileSystemUtils.checkFileExists('.gitignore')) {
      const gitignoreContent = this.fileSystemUtils.readFileContent('.gitignore');
      if (gitignoreContent && gitignoreContent.includes('TDD開発環境')) {
        testingArray.push('TDD (Test-Driven Development) - テスト駆動開発手法');
      }
    }
  }

  /**
   * ビルドツールを検出
   */
  detectBuildTools(deps, buildArray) {
    if (this._checkDependency(deps, 'peggy')) {
      buildArray.push('Peggy - PEG (Parsing Expression Grammar) パーサージェネレーター');
    }

    if (this.fileSystemUtils.checkFileExists('src/grammar.pegjs')) {
      buildArray.push('PEG文法定義 - MML音楽記法のパーサー生成');
    }
  }

  /**
   * 言語機能を検出
   */
  detectLanguageFeatures(packageJson, languageArray) {
    if (packageJson.type === 'module') {
      languageArray.push('ES Modules - モダンなJavaScriptモジュールシステム');
    }
  }

  /**
   * 自動化・CI/CDを検出
   */
  detectAutomation(automationArray) {
    if (this.fileSystemUtils.checkFileExists('.github/workflows')) {
      const workflowFiles = this._detectWorkflows();
      if (workflowFiles.length > 0) {
        automationArray.push(`GitHub Actions - CI/CD自動化 (${workflowFiles.length}個のワークフロー)`);

        // 特定のワークフローの詳細を追加
        workflowFiles.forEach(workflow => {
          const workflowName = workflow.replace('.yml', '').replace('.yaml', '');
          if (workflowName.includes('summary')) {
            automationArray.push('  - プロジェクト要約自動生成');
          }
          if (workflowName.includes('translate')) {
            automationArray.push('  - README多言語翻訳');
            automationArray.push('  - i18n automation - 自動翻訳ワークフロー');
          }
          if (workflowName.includes('issue')) {
            automationArray.push('  - Issue自動管理');
          }
        });
      }
    }
  }

  /**
   * 開発標準を検出
   */
  detectStandards(standardsArray) {
    if (this.fileSystemUtils.checkFileExists('.editorconfig')) {
      standardsArray.push('EditorConfig - コード統一ルール');
    }
  }

  /**
   * 依存関係をチェック
   * @private
   */
  _checkDependency(deps, packageName) {
    return deps.hasOwnProperty(packageName);
  }

  /**
   * ワークフローファイルを検出
   * @private
   */
  _detectWorkflows() {
    return this.fileSystemUtils.getWorkflowFiles();
  }
}

module.exports = TechStackAnalyzer;

```

### .github_automation/project_summary/scripts/shared/BaseGenerator.cjs
```cjs
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs').promises;
const path = require('path');

/**
 * 生成器の共通基底クラス
 * 全ての生成器で共通して使用される機能を提供
 */
class BaseGenerator {
  /**
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(projectRoot) {
    if (!projectRoot) {
      throw new Error('projectRoot is required');
    }

    this.projectRoot = projectRoot;
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
  }

  /**
   * Geminiのmodel.generateContentをラップし、503エラー時に指数バックオフでリトライする
   * @param {...any} args - model.generateContentの引数
   * @returns {Promise<any>}
   */
  async generateContent(...args) {
    const initialDelay = 60 * 1000; // 60秒
    const maxDelay = 3600 * 1000; // 3600秒（1時間）
    let delay = initialDelay;
    while (true) {
      if (delay > maxDelay) {
        throw new Error(`generateContent: 遅延が最大値(${maxDelay}ms)を超えたため中断します`);
      }
      try {
        return await this.model.generateContent(...args);
      } catch (err) {
        // 503エラーのみリトライ
        if (err && err.status === 503) {
          const now = new Date(Date.now() + (9 * 60 * 60 * 1000)); // JST
          const iso = now.toISOString().replace('T', ' ').split('.')[0];
          console.warn(`[${iso} JST] Gemini generateContent: 503エラー、delay=${delay}msでリトライ`);
          await new Promise(res => setTimeout(res, delay));
          delay = Math.min(delay * 2, maxDelay);
        } else {
          // その他のエラーは即座にthrow
          throw err;
        }
      }
    }
  }

  /**
   * 環境変数とコミット状況をチェック
   * @returns {Promise<boolean>} 実行を続行するかどうか
   */
  async validateEnvironment() {
    // 環境変数チェック
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY environment variable is not set');
    }

    // GitUtilsが必要な場合は子クラスでオーバーライド
    return true;
  }

  /**
   * Gemini APIの出力から不要なコードブロック（```markdown等）を除去
   * @param {string} text - クリーニング対象のテキスト
   * @returns {string} クリーニング済みテキスト
   */
  cleanMarkdownCodeBlock(text) {
    if (!text) return '';
    // 先頭の ```markdown または ``` を除去
    text = text.replace(/^```markdown\s*\n?/i, '');
    text = text.replace(/^```\s*\n?/i, '');
    // 末尾の ``` を除去
    text = text.replace(/\n?```\s*$/i, '');
    return text.trim();
  }

  /**
   * 汎用ファイル保存機能
   * @param {string} content - 保存するコンテンツ
   * @param {string} outputPath - 出力先パス
   * @returns {Promise<string>} 保存されたファイルパス
   */
  async saveToFile(content, outputPath) {
    const now = new Date();
    const jstDate = new Date(now.getTime() + (9 * 60 * 60 * 1000)); // JST変換
    const dateStr = jstDate.toISOString().split('T')[0]; // YYYY-MM-DD
    const timeStr = jstDate.toISOString().replace('T', ' ').split('.')[0]; // YYYY-MM-DD HH:mm:ss

    // ディレクトリが存在しない場合は作成
    try {
      await fs.mkdir(path.dirname(outputPath), { recursive: true });
    } catch (error) {
      // ディレクトリ作成エラーは無視（既に存在する場合など）
    }

    // ファイル保存
    const fileContent = `Last updated: ${dateStr}\n\n${content}\n\n---\nGenerated at: ${timeStr} JST\n`;
    await fs.writeFile(outputPath, fileContent, 'utf-8');
    console.log(`Content saved to: ${path.resolve(outputPath)}`);

    return outputPath;
  }

  /**
   * プロンプトファイルを読み込み
   * @param {string} promptPath - プロンプトファイルのパス
   * @returns {Promise<string>} プロンプトの内容
   */
  async loadPrompt(promptPath) {
    try {
      return await fs.readFile(promptPath, 'utf-8');
    } catch (error) {
      console.warn(`Could not read ${promptPath}:`, error.message);
      throw new Error(`${promptPath} could not be read`);
    }
  }
}

module.exports = BaseGenerator;

```

### .github_automation/project_summary/scripts/shared/FileSystemUtils.cjs
```cjs
const fs = require('fs').promises;
const path = require('path');

/**
 * ファイルシステム操作を担当するユーティリティクラス
 */
class FileSystemUtils {
  constructor(projectRoot) {
    if (!projectRoot) {
      throw new Error('projectRoot is required');
    }
    this.projectRoot = projectRoot;
  }

  /**
   * ファイル存在チェック（簡易版）
   */
  checkFileExists(pattern, keyword = null) {
    try {
      if (pattern.includes('**')) {
        // glob的なパターンの場合は簡易チェック
        const basePath = pattern.split('**')[0];
        const fullPath = path.join(this.projectRoot, basePath);
        return require('fs').existsSync(fullPath);
      } else {
        // 具体的なファイルパス
        const fullPath = path.join(this.projectRoot, pattern);
        return require('fs').existsSync(fullPath);
      }
    } catch (error) {
      return false;
    }
  }

  /**
   * GitHub Actionsワークフローファイルを取得
   */
  getWorkflowFiles() {
    try {
      const workflowsPath = path.join(this.projectRoot, '.github/workflows');

      if (!require('fs').existsSync(workflowsPath)) {
        return [];
      }

      const files = require('fs').readdirSync(workflowsPath);
      return files.filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
    } catch (error) {
      return [];
    }
  }

  /**
   * ファイル内容を読み取る（簡易版）
   */
  readFileContent(filePath) {
    try {
      const fullPath = path.join(this.projectRoot, filePath);

      if (require('fs').existsSync(fullPath)) {
        return require('fs').readFileSync(fullPath, 'utf-8');
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  /**
   * プロジェクト構造を取得（クロスプラットフォーム対応）
   */
  async getProjectStructure() {
    const extensions = ['.js', '.ts', '.json', '.md', '.html', '.css', '.pegjs'];
    const excludeDirs = ['.git', 'node_modules', '.github'];
    const files = [];

    const walkDir = async (dir, relativePath = '') => {
      try {
        const items = await fs.readdir(path.join(this.projectRoot, dir));

        for (const item of items) {
          const fullPath = path.join(dir, item);
          const absolutePath = path.join(this.projectRoot, fullPath);
          const relativeItemPath = path.join(relativePath, item);

          // 除外ディレクトリをスキップ
          if (excludeDirs.includes(item)) {
            continue;
          }

          try {
            const stat = await fs.stat(absolutePath);
            if (stat.isDirectory()) {
              await walkDir(fullPath, relativeItemPath);
            } else if (stat.isFile()) {
              const ext = path.extname(item);
              if (extensions.includes(ext)) {
                files.push(relativeItemPath.replace(/\\/g, '/'));
                if (files.length >= 30) break; // 最大30ファイル
              }
            }
          } catch (error) {
            // ファイル/ディレクトリアクセスエラーをスキップ
            continue;
          }
        }
      } catch (error) {
        // ディレクトリ読み取りエラーをスキップ
      }
    };

    await walkDir('.');
    return files.join('\n');
  }

  /**
   * 詳細なファイル階層ツリーを生成
   */
  async getDetailedFileTree() {
    const excludeDirs = ['.git', 'node_modules', '.github'];
    const tree = [];

    const buildTree = async (dir, depth = 0) => {
      try {
        const items = await fs.readdir(path.join(this.projectRoot, dir));
        items.sort();

        for (const item of items) {
          if (excludeDirs.includes(item)) continue;

          const fullPath = path.join(dir, item);
          const absolutePath = path.join(this.projectRoot, fullPath);
          const indent = '  '.repeat(depth);

          try {
            const stat = await fs.stat(absolutePath);
            if (stat.isDirectory()) {
              tree.push(`${indent}📁 ${item}/`);
              await buildTree(fullPath, depth + 1);
            } else {
              const ext = path.extname(item);
              const icon = this.getFileIcon(ext);
              tree.push(`${indent}${icon} ${item}`);
            }
          } catch (error) {
            continue;
          }
        }
      } catch (error) {
        // ディレクトリ読み取りエラーをスキップ
      }
    };

    await buildTree('.');
    return tree.join('\n');
  }

  /**
   * ファイル拡張子に応じたアイコンを取得
   */
  getFileIcon(ext) {
    const icons = {
      '.js': '📜',
      '.ts': '📘',
      '.json': '📊',
      '.md': '📖',
      '.html': '🌐',
      '.css': '🎨',
      '.pegjs': '📝'
    };
    return icons[ext] || '📄';
  }
}

module.exports = FileSystemUtils;

```

### .github_automation/translate/docs/TRANSLATION_SETUP.md
```md
# README Auto-Translation Setup

このプロジェクトでは、GitHub ActionsとGemini APIを使用して、README.ja.mdが更新されたときに自動的にREADME.mdを英語に翻訳します。

## ファイル構成

```
.github/
├── workflows/
│   └── translate-readme.yml    # GitHub Actionsワークフロー
├── scripts/
│   └── translate-readme.js     # 翻訳スクリプト
└── docs/
    └── TRANSLATION_SETUP.md    # このファイル
```

## セットアップ手順

### 1. Gemini API Keyの取得

1. [Google AI Studio](https://aistudio.google.com/)にアクセス
2. 「Get API key」をクリック
3. 新しいAPI keyを作成
4. API keyをコピーして保存

### 2. GitHub Secretsの設定

1. GitHubリポジトリページで「Settings」タブを開く
2. 左サイドバーの「Secrets and variables」→「Actions」をクリック
3. 「New repository secret」をクリック
4. 以下のシークレットを追加：
   - Name: `GEMINI_API_KEY`
   - Secret: 上記で取得したGemini API Key

### 3. 動作確認

0. README.mdファイルが存在しない場合は任意内容のダミーを作成（ないと生成結果がcommitされません）
1. README.ja.mdファイルを編集
2. 変更をcommitしてpush
3. GitHub Actionsタブで翻訳ワークフローが実行されることを確認
4. README.mdが自動生成されることを確認

## ワークフローの詳細

- **トリガー**: README.ja.mdファイルがmain/masterブランチにpushされたとき
- **処理**: Gemini APIを使用してREADME.ja.mdを英語に翻訳し、README.mdを更新
- **自動コミット**: 翻訳されたREADME.mdは自動的にコミット・プッシュされます

## 手動実行

GitHub Actionsタブから「Auto Translate README」ワークフローを手動で実行することも可能です。

## 注意事項

- Gemini API の利用制限に注意してください
- 大きなREADMEファイルの場合、API制限に引っかかる可能性があります
- 翻訳の品質は完璧ではない場合があるため、必要に応じて手動で調整してください

## トラブルシューティング

### よくある問題

1. **API Key エラー**
   - GitHub Secretsが正しく設定されているか確認
   - API Keyが有効か確認

2. **翻訳が実行されない**
   - README.ja.mdがmain/masterブランチにpushされているか確認
   - GitHub Actionsが有効になっているか確認

3. **ファイルパスエラー**
   - スクリプトは`.github/scripts/`ディレクトリから実行される前提
   - プロジェクトルートの相対パスが正しく設定されているか確認

```

### .github_automation/translate/scripts/translate-readme.cjs
```cjs
const BaseGenerator = require('../../project_summary/scripts/shared/BaseGenerator.cjs');
const fs = require('fs').promises;

async function translateReadme() {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY environment variable is not set');
    }

    console.log('Starting README translation process...');

    // 引数から対象ファイル名を取得（相対パスまたは絶対パスをそのまま使用）
    const targetFile = process.argv[2];
    if (!targetFile) {
      throw new Error('Target file name is required');
    }

    // ファイルの存在確認（受け取ったパスで直接確認）
    try {
      await fs.access(targetFile);
    } catch {
      throw new Error(`${targetFile} file not found`);
    }

    // 翻訳先ファイル名の生成（受け取ったファイル名に基づく）
    const readmePath = targetFile.replace('.ja.md', '.md');

    const japaneseContent = await fs.readFile(targetFile, 'utf-8');
    if (!japaneseContent.trim()) {
      console.log(`${targetFile} is empty, skipping translation.`);
      return;
    }

    console.log(`${targetFile} length: ${japaneseContent.length} chars`);
    console.log('Sending translation request to Gemini API...');

    const prompt = `Please translate the following Japanese Markdown text to English.
Keep the Markdown formatting intact, including headers, links, code blocks, and other formatting elements.
Make the translation natural and professional for an English-speaking developer audience.
If there are any technical terms or project-specific terms, keep them appropriate for a software development context.
Preserve all URLs, code snippets, and special formatting exactly as they are.

IMPORTANT: Return ONLY the translated Markdown content. Do NOT wrap the response in code blocks or add any extra formatting markers like \`\`\`markdown or \`\`\`.

Japanese text to translate:
${japaneseContent}`;

    const generator = new BaseGenerator(process.cwd());
    const result = await generator.generateContent(prompt);
    let translatedText = generator.cleanMarkdownCodeBlock(result.response.text());

    // 既存ファイルと比較
    let existingContent = '';
    try {
      existingContent = await fs.readFile(readmePath, 'utf-8');
    } catch {
      console.log(`${readmePath} does not exist yet, will create new file`);
    }

    if (existingContent === translatedText) {
      console.log('No update needed');
      return;
    }

    await fs.writeFile(readmePath, translatedText, 'utf-8');
    console.log(`${readmePath} updated successfully!`);
  } catch (error) {
    console.error('Translation failed:', error.message);
    process.exit(1);
  }
}

translateReadme();

```

### .gitignore
```gitignore
.secrets
copilot-instructions.md

```

### .vscode/settings.json
```json
{
    "files.trimTrailingWhitespace": true
}

```

### LICENSE
```LICENSE
MIT License

Copyright (c) 2025 cat2151

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

### README.ja.md
```md
# GitHub Actions 共通ワークフロー集

このリポジトリは、**複数プロジェクトで使い回せるGitHub Actions共通ワークフロー集**です

<p align="left">
  <a href="README.ja.md"><img src="https://img.shields.io/badge/🇯🇵-Japanese-red.svg" alt="Japanese"></a>
  <a href="README.md"><img src="https://img.shields.io/badge/🇺🇸-English-blue.svg" alt="English"></a>
</p>

# 3行で説明
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## Quick Links
| 項目 | リンク |
|------|--------|
| 📖 プロジェクト概要 | [generated-docs/project-overview.md](generated-docs/project-overview.md) |
| 📖 コールグラフ | [generated-docs/callgraph.html](https://cat2151.github.io/github-actions/generated-docs/callgraph.html) |
| 📊 開発状況 | [generated-docs/development-status.md](generated-docs/development-status.md) |

# notes
- まだ共通化の作業中です
- まだワークフロー内容を改善中です

※README.md は README.ja.md を元にGeminiの翻訳でGitHub Actionsで自動生成しています

```

### README.md
```md
# GitHub Actions Shared Workflow Collection

This repository is a **collection of GitHub Actions shared workflows reusable across multiple projects.**

<p align="left">
  <a href="README.ja.md"><img src="https://img.shields.io/badge/🇯🇵-Japanese-red.svg" alt="Japanese"></a>
  <a href="README.md"><img src="https://img.shields.io/badge/🇺🇸-English-blue.svg" alt="English"></a>
</p>

# Summary in 3 Points
- 🚀 Simplify GitHub Actions management for individual projects.
- 🔗 With standardized workflows, just call them from any project.
- ✅ Unified maintenance allows you to focus on project development.

## Quick Links
| Item | Link |
|------|--------|
| 📖 Project Overview | [generated-docs/project-overview.md](generated-docs/project-overview.md) |
| 📖 Call Graph | [generated-docs/callgraph.html](https://cat2151.github.io/github-actions/generated-docs/callgraph.html) |
| 📊 Development Status | [generated-docs/development-status.md](generated-docs/development-status.md) |

# notes
- Still in the process of standardizing workflows.
- Still improving workflow content.

Note: README.md is automatically generated by GitHub Actions based on README.ja.md and translated by Gemini.
```

### generated-docs/callgraph.html
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Function Call Graph with Source Links</title>
    <script src="https://unpkg.com/cytoscape@3.29.2/dist/cytoscape.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="header">
        <h1>Function Call Graph with Source Links</h1>
        <div class="stats-container">
            <div class="stats">
                <div class="stat-value">3</div>
                <div class="stat-label">Functions</div>
            </div>
            <div class="stats">
                <div class="stat-value">2</div>
                <div class="stat-label">Call Relationships</div>
            </div>
            <div class="stats">
                <div class="stat-value">2</div>
                <div class="stat-label">With Callee Location</div>
            </div>
        </div>
    </div>

    <div class="main-container">
        <div class="graph-container">
            <div id="cy"></div>
            <div class="controls">
                <button class="control-button" onclick="resetLayout()">Reset Layout</button>
                <button class="control-button" onclick="switchLayout(this)">レイアウト切替</button>
                <button class="control-button" onclick="fitToContent()">Fit to Content</button>
                <button class="control-button" onclick="toggleNodeLabels()">Toggle Labels</button>
                <button class="control-button" onclick="toggleCalleeLocationFilter()">Hide No-Callee-Location</button>
                <button class="control-button" onclick="toggleInfoPanel()">Toggle Info Panel</button>
            </div>
        </div>

        <div id="info-panel" class="info-panel hidden">
            <div class="info-title">選択した要素の詳細</div>
            <div id="info-content"></div>
        </div>
    </div>

    <div class="generated-time">
        Generated: 2025/9/8 20:07:47
    </div>

    <script>
      const graphData = {
  "nodes": [
    {
      "id": "main (main.js:6)",
      "label": "main (main.js:6)",
      "locations": [
        {
          "file": "src/main.js",
          "line": 7,
          "column": 5,
          "type": "caller",
          "sourceLine": "    greet('World');"
        }
      ],
      "hasLocationInfo": true,
      "hasCalleeLocationInfo": true
    },
    {
      "id": "greet (main.js:2)",
      "label": "greet (main.js:2)",
      "locations": [
        {
          "file": "src/main.js",
          "line": 7,
          "column": 5,
          "type": "definition",
          "sourceLine": "    greet('World');"
        }
      ],
      "hasLocationInfo": true,
      "hasCalleeLocationInfo": true,
      "calleeFncDef": "function greet(name) {"
    },
    {
      "id": "global (main.js:10)",
      "label": "global (main.js:10)",
      "locations": [
        {
          "file": "src/main.js",
          "line": 10,
          "column": 1,
          "type": "caller",
          "sourceLine": "main();"
        }
      ],
      "hasLocationInfo": true,
      "hasCalleeLocationInfo": false
    }
  ],
  "edges": [
    {
      "id": "edge-0",
      "source": "main (main.js:6)",
      "target": "greet (main.js:2)",
      "hasCalleeLocationInfo": true,
      "file": "src/main.js",
      "line": 7,
      "column": 5,
      "location": "src/main.js:7:5",
      "hasLocationInfo": true,
      "sourceLine": "    greet('World');"
    },
    {
      "id": "edge-1",
      "source": "global (main.js:10)",
      "target": "main (main.js:6)",
      "hasCalleeLocationInfo": true,
      "file": "src/main.js",
      "line": 10,
      "column": 1,
      "location": "src/main.js:10:1",
      "hasLocationInfo": true,
      "sourceLine": "main();"
    }
  ]
};
      const repo = "cat2151/github-actions";
      const branch = "main";
    </script>
    <script src="callgraph.js"></script>
</body>
</html>
```

### generated-docs/development-status-generated-prompt.md
```md
Last updated: 2025-09-08

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
以下の開発状況情報を参考にして要約を生成してください：

## プロジェクトのファイル一覧
- .git/FETCH_HEAD
- .git/HEAD
- .git/config
- .git/config.worktree
- .git/description
- .git/hooks/applypatch-msg.sample
- .git/hooks/commit-msg.sample
- .git/hooks/fsmonitor-watchman.sample
- .git/hooks/post-update.sample
- .git/hooks/pre-applypatch.sample
- .git/hooks/pre-commit.sample
- .git/hooks/pre-merge-commit.sample
- .git/hooks/pre-push.sample
- .git/hooks/pre-rebase.sample
- .git/hooks/pre-receive.sample
- .git/hooks/prepare-commit-msg.sample
- .git/hooks/push-to-checkout.sample
- .git/hooks/sendemail-validate.sample
- .git/hooks/update.sample
- .git/index
- .git/info/exclude
- .git/logs/HEAD
- .git/logs/refs/heads/main
- .git/logs/refs/remotes/origin/main
- .git/objects/pack/pack-d9dc01d66cd6ffb9cfdb63bb11d471fa3519d651.idx
- .git/objects/pack/pack-d9dc01d66cd6ffb9cfdb63bb11d471fa3519d651.pack
- .git/objects/pack/pack-d9dc01d66cd6ffb9cfdb63bb11d471fa3519d651.rev
- .git/refs/heads/main
- .git/refs/remotes/origin/main
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
- node_modules/.package-lock.json
- node_modules/@google/generative-ai/LICENSE
- node_modules/@google/generative-ai/README.md
- node_modules/@google/generative-ai/dist/generative-ai.d.ts
- node_modules/@google/generative-ai/dist/index.js
- node_modules/@google/generative-ai/dist/index.js.map
- node_modules/@google/generative-ai/dist/index.mjs
- node_modules/@google/generative-ai/dist/index.mjs.map
- node_modules/@google/generative-ai/dist/scripts/check-format.d.ts
- node_modules/@google/generative-ai/dist/scripts/format-patterns.d.ts
- node_modules/@google/generative-ai/dist/scripts/license.d.ts
- node_modules/@google/generative-ai/dist/scripts/run-format.d.ts
- node_modules/@google/generative-ai/dist/server/index.js
- node_modules/@google/generative-ai/dist/server/index.js.map
- node_modules/@google/generative-ai/dist/server/index.mjs
- node_modules/@google/generative-ai/dist/server/index.mjs.map
- node_modules/@google/generative-ai/dist/server/scripts/check-format.d.ts
- node_modules/@google/generative-ai/dist/server/scripts/format-patterns.d.ts
- node_modules/@google/generative-ai/dist/server/scripts/license.d.ts
- node_modules/@google/generative-ai/dist/server/scripts/run-format.d.ts
- node_modules/@google/generative-ai/dist/server/server.d.ts
- node_modules/@google/generative-ai/dist/server/src/errors.d.ts
- node_modules/@google/generative-ai/dist/server/src/gen-ai.d.ts
- node_modules/@google/generative-ai/dist/server/src/index.d.ts
- node_modules/@google/generative-ai/dist/server/src/methods/chat-session-helpers.d.ts
- node_modules/@google/generative-ai/dist/server/src/methods/chat-session.d.ts
- node_modules/@google/generative-ai/dist/server/src/methods/count-tokens.d.ts
- node_modules/@google/generative-ai/dist/server/src/methods/embed-content.d.ts
- node_modules/@google/generative-ai/dist/server/src/methods/generate-content.d.ts
- node_modules/@google/generative-ai/dist/server/src/models/generative-model.d.ts
- node_modules/@google/generative-ai/dist/server/src/requests/request-helpers.d.ts
- node_modules/@google/generative-ai/dist/server/src/requests/request.d.ts
- node_modules/@google/generative-ai/dist/server/src/requests/response-helpers.d.ts
- node_modules/@google/generative-ai/dist/server/src/requests/stream-reader.d.ts
- node_modules/@google/generative-ai/dist/server/src/server/cache-manager.d.ts
- node_modules/@google/generative-ai/dist/server/src/server/constants.d.ts
- node_modules/@google/generative-ai/dist/server/src/server/file-manager.d.ts
- node_modules/@google/generative-ai/dist/server/src/server/index.d.ts
- node_modules/@google/generative-ai/dist/server/src/server/request.d.ts
- node_modules/@google/generative-ai/dist/server/types/content.d.ts
- node_modules/@google/generative-ai/dist/server/types/enums.d.ts
- node_modules/@google/generative-ai/dist/server/types/function-calling.d.ts
- node_modules/@google/generative-ai/dist/server/types/index.d.ts
- node_modules/@google/generative-ai/dist/server/types/requests.d.ts
- node_modules/@google/generative-ai/dist/server/types/responses.d.ts
- node_modules/@google/generative-ai/dist/server/types/search-grounding.d.ts
- node_modules/@google/generative-ai/dist/server/types/server/caching.d.ts
- node_modules/@google/generative-ai/dist/server/types/server/files.d.ts
- node_modules/@google/generative-ai/dist/server/types/server/index.d.ts
- node_modules/@google/generative-ai/dist/server/types/server/shared.d.ts
- node_modules/@google/generative-ai/dist/src/errors.d.ts
- node_modules/@google/generative-ai/dist/src/gen-ai.d.ts
- node_modules/@google/generative-ai/dist/src/index.d.ts
- node_modules/@google/generative-ai/dist/src/methods/chat-session-helpers.d.ts
- node_modules/@google/generative-ai/dist/src/methods/chat-session.d.ts
- node_modules/@google/generative-ai/dist/src/methods/count-tokens.d.ts
- node_modules/@google/generative-ai/dist/src/methods/embed-content.d.ts
- node_modules/@google/generative-ai/dist/src/methods/generate-content.d.ts
- node_modules/@google/generative-ai/dist/src/models/generative-model.d.ts
- node_modules/@google/generative-ai/dist/src/requests/request-helpers.d.ts
- node_modules/@google/generative-ai/dist/src/requests/request.d.ts
- node_modules/@google/generative-ai/dist/src/requests/response-helpers.d.ts
- node_modules/@google/generative-ai/dist/src/requests/stream-reader.d.ts
- node_modules/@google/generative-ai/dist/src/server/cache-manager.d.ts
- node_modules/@google/generative-ai/dist/src/server/constants.d.ts
- node_modules/@google/generative-ai/dist/src/server/file-manager.d.ts
- node_modules/@google/generative-ai/dist/src/server/index.d.ts
- node_modules/@google/generative-ai/dist/src/server/request.d.ts
- node_modules/@google/generative-ai/dist/tsdoc-metadata.json
- node_modules/@google/generative-ai/dist/types/content.d.ts
- node_modules/@google/generative-ai/dist/types/enums.d.ts
- node_modules/@google/generative-ai/dist/types/function-calling.d.ts
- node_modules/@google/generative-ai/dist/types/index.d.ts
- node_modules/@google/generative-ai/dist/types/requests.d.ts
- node_modules/@google/generative-ai/dist/types/responses.d.ts
- node_modules/@google/generative-ai/dist/types/search-grounding.d.ts
- node_modules/@google/generative-ai/dist/types/server/caching.d.ts
- node_modules/@google/generative-ai/dist/types/server/files.d.ts
- node_modules/@google/generative-ai/dist/types/server/index.d.ts
- node_modules/@google/generative-ai/dist/types/server/shared.d.ts
- node_modules/@google/generative-ai/package.json
- node_modules/@google/generative-ai/server/package.json
- node_modules/@octokit/auth-token/LICENSE
- node_modules/@octokit/auth-token/README.md
- node_modules/@octokit/auth-token/dist-bundle/index.js
- node_modules/@octokit/auth-token/dist-bundle/index.js.map
- node_modules/@octokit/auth-token/dist-src/auth.js
- node_modules/@octokit/auth-token/dist-src/hook.js
- node_modules/@octokit/auth-token/dist-src/index.js
- node_modules/@octokit/auth-token/dist-src/is-jwt.js
- node_modules/@octokit/auth-token/dist-src/with-authorization-prefix.js
- node_modules/@octokit/auth-token/dist-types/auth.d.ts
- node_modules/@octokit/auth-token/dist-types/hook.d.ts
- node_modules/@octokit/auth-token/dist-types/index.d.ts
- node_modules/@octokit/auth-token/dist-types/is-jwt.d.ts
- node_modules/@octokit/auth-token/dist-types/types.d.ts
- node_modules/@octokit/auth-token/dist-types/with-authorization-prefix.d.ts
- node_modules/@octokit/auth-token/package.json
- node_modules/@octokit/core/LICENSE
- node_modules/@octokit/core/README.md
- node_modules/@octokit/core/dist-src/index.js
- node_modules/@octokit/core/dist-src/version.js
- node_modules/@octokit/core/dist-types/index.d.ts
- node_modules/@octokit/core/dist-types/types.d.ts
- node_modules/@octokit/core/dist-types/version.d.ts
- node_modules/@octokit/core/package.json
- node_modules/@octokit/endpoint/LICENSE
- node_modules/@octokit/endpoint/README.md
- node_modules/@octokit/endpoint/dist-bundle/index.js
- node_modules/@octokit/endpoint/dist-bundle/index.js.map
- node_modules/@octokit/endpoint/dist-src/defaults.js
- node_modules/@octokit/endpoint/dist-src/endpoint-with-defaults.js
- node_modules/@octokit/endpoint/dist-src/index.js
- node_modules/@octokit/endpoint/dist-src/merge.js
- node_modules/@octokit/endpoint/dist-src/parse.js
- node_modules/@octokit/endpoint/dist-src/util/add-query-parameters.js
- node_modules/@octokit/endpoint/dist-src/util/extract-url-variable-names.js
- node_modules/@octokit/endpoint/dist-src/util/is-plain-object.js
- node_modules/@octokit/endpoint/dist-src/util/lowercase-keys.js
- node_modules/@octokit/endpoint/dist-src/util/merge-deep.js
- node_modules/@octokit/endpoint/dist-src/util/omit.js
- node_modules/@octokit/endpoint/dist-src/util/remove-undefined-properties.js
- node_modules/@octokit/endpoint/dist-src/util/url-template.js
- node_modules/@octokit/endpoint/dist-src/version.js
- node_modules/@octokit/endpoint/dist-src/with-defaults.js
- node_modules/@octokit/endpoint/dist-types/defaults.d.ts
- node_modules/@octokit/endpoint/dist-types/endpoint-with-defaults.d.ts
- node_modules/@octokit/endpoint/dist-types/index.d.ts
- node_modules/@octokit/endpoint/dist-types/merge.d.ts
- node_modules/@octokit/endpoint/dist-types/parse.d.ts
- node_modules/@octokit/endpoint/dist-types/util/add-query-parameters.d.ts
- node_modules/@octokit/endpoint/dist-types/util/extract-url-variable-names.d.ts
- node_modules/@octokit/endpoint/dist-types/util/is-plain-object.d.ts
- node_modules/@octokit/endpoint/dist-types/util/lowercase-keys.d.ts
- node_modules/@octokit/endpoint/dist-types/util/merge-deep.d.ts
- node_modules/@octokit/endpoint/dist-types/util/omit.d.ts
- node_modules/@octokit/endpoint/dist-types/util/remove-undefined-properties.d.ts
- node_modules/@octokit/endpoint/dist-types/util/url-template.d.ts
- node_modules/@octokit/endpoint/dist-types/version.d.ts
- node_modules/@octokit/endpoint/dist-types/with-defaults.d.ts
- node_modules/@octokit/endpoint/package.json
- node_modules/@octokit/graphql/LICENSE
- node_modules/@octokit/graphql/README.md
- node_modules/@octokit/graphql/dist-bundle/index.js
- node_modules/@octokit/graphql/dist-bundle/index.js.map
- node_modules/@octokit/graphql/dist-src/error.js
- node_modules/@octokit/graphql/dist-src/graphql.js
- node_modules/@octokit/graphql/dist-src/index.js
- node_modules/@octokit/graphql/dist-src/version.js
- node_modules/@octokit/graphql/dist-src/with-defaults.js
- node_modules/@octokit/graphql/dist-types/error.d.ts
- node_modules/@octokit/graphql/dist-types/graphql.d.ts
- node_modules/@octokit/graphql/dist-types/index.d.ts
- node_modules/@octokit/graphql/dist-types/types.d.ts
- node_modules/@octokit/graphql/dist-types/version.d.ts
- node_modules/@octokit/graphql/dist-types/with-defaults.d.ts
- node_modules/@octokit/graphql/package.json
- node_modules/@octokit/openapi-types/LICENSE
- node_modules/@octokit/openapi-types/README.md
- node_modules/@octokit/openapi-types/package.json
- node_modules/@octokit/openapi-types/types.d.ts
- node_modules/@octokit/plugin-paginate-rest/LICENSE
- node_modules/@octokit/plugin-paginate-rest/README.md
- node_modules/@octokit/plugin-paginate-rest/dist-bundle/index.js
- node_modules/@octokit/plugin-paginate-rest/dist-bundle/index.js.map
- node_modules/@octokit/plugin-paginate-rest/dist-src/compose-paginate.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/generated/paginating-endpoints.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/index.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/iterator.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/normalize-paginated-list-response.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/paginate.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/paginating-endpoints.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/version.js
- node_modules/@octokit/plugin-paginate-rest/dist-types/compose-paginate.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/generated/paginating-endpoints.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/index.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/iterator.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/normalize-paginated-list-response.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/paginate.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/paginating-endpoints.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/types.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/version.d.ts
- node_modules/@octokit/plugin-paginate-rest/package.json
- node_modules/@octokit/plugin-request-log/LICENSE
- node_modules/@octokit/plugin-request-log/README.md
- node_modules/@octokit/plugin-request-log/dist-src/index.js
- node_modules/@octokit/plugin-request-log/dist-src/version.js
- node_modules/@octokit/plugin-request-log/dist-types/index.d.ts
- node_modules/@octokit/plugin-request-log/dist-types/version.d.ts
- node_modules/@octokit/plugin-request-log/package.json
- node_modules/@octokit/plugin-rest-endpoint-methods/LICENSE
- node_modules/@octokit/plugin-rest-endpoint-methods/README.md
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/endpoints-to-methods.js
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/endpoints-to-methods.js.map
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/generated/endpoints.js
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/generated/endpoints.js.map
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/index.js
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/index.js.map
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/version.js
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/version.js.map
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/endpoints-to-methods.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/generated/endpoints.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/generated/method-types.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/generated/parameters-and-response-types.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/index.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/types.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/version.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/package.json
- node_modules/@octokit/request/LICENSE
- node_modules/@octokit/request/README.md
- node_modules/@octokit/request/dist-bundle/index.js
- node_modules/@octokit/request/dist-bundle/index.js.map
- node_modules/@octokit/request/dist-src/defaults.js
- node_modules/@octokit/request/dist-src/fetch-wrapper.js
- node_modules/@octokit/request/dist-src/index.js
- node_modules/@octokit/request/dist-src/is-plain-object.js
- node_modules/@octokit/request/dist-src/version.js
- node_modules/@octokit/request/dist-src/with-defaults.js
- node_modules/@octokit/request/dist-types/defaults.d.ts
- node_modules/@octokit/request/dist-types/fetch-wrapper.d.ts
- node_modules/@octokit/request/dist-types/index.d.ts
- node_modules/@octokit/request/dist-types/is-plain-object.d.ts
- node_modules/@octokit/request/dist-types/version.d.ts
- node_modules/@octokit/request/dist-types/with-defaults.d.ts
- node_modules/@octokit/request/package.json
- node_modules/@octokit/request-error/LICENSE
- node_modules/@octokit/request-error/README.md
- node_modules/@octokit/request-error/dist-src/index.js
- node_modules/@octokit/request-error/dist-types/index.d.ts
- node_modules/@octokit/request-error/dist-types/types.d.ts
- node_modules/@octokit/request-error/package.json
- node_modules/@octokit/rest/LICENSE
- node_modules/@octokit/rest/README.md
- node_modules/@octokit/rest/dist-src/index.js
- node_modules/@octokit/rest/dist-src/index.js.map
- node_modules/@octokit/rest/dist-src/version.js
- node_modules/@octokit/rest/dist-src/version.js.map
- node_modules/@octokit/rest/dist-types/index.d.ts
- node_modules/@octokit/rest/dist-types/version.d.ts
- node_modules/@octokit/rest/package.json
- node_modules/@octokit/types/LICENSE
- node_modules/@octokit/types/README.md
- node_modules/@octokit/types/dist-types/AuthInterface.d.ts
- node_modules/@octokit/types/dist-types/EndpointDefaults.d.ts
- node_modules/@octokit/types/dist-types/EndpointInterface.d.ts
- node_modules/@octokit/types/dist-types/EndpointOptions.d.ts
- node_modules/@octokit/types/dist-types/Fetch.d.ts
- node_modules/@octokit/types/dist-types/GetResponseTypeFromEndpointMethod.d.ts
- node_modules/@octokit/types/dist-types/OctokitResponse.d.ts
- node_modules/@octokit/types/dist-types/RequestError.d.ts
- node_modules/@octokit/types/dist-types/RequestHeaders.d.ts
- node_modules/@octokit/types/dist-types/RequestInterface.d.ts
- node_modules/@octokit/types/dist-types/RequestMethod.d.ts
- node_modules/@octokit/types/dist-types/RequestOptions.d.ts
- node_modules/@octokit/types/dist-types/RequestParameters.d.ts
- node_modules/@octokit/types/dist-types/RequestRequestOptions.d.ts
- node_modules/@octokit/types/dist-types/ResponseHeaders.d.ts
- node_modules/@octokit/types/dist-types/Route.d.ts
- node_modules/@octokit/types/dist-types/StrategyInterface.d.ts
- node_modules/@octokit/types/dist-types/Url.d.ts
- node_modules/@octokit/types/dist-types/VERSION.d.ts
- node_modules/@octokit/types/dist-types/generated/Endpoints.d.ts
- node_modules/@octokit/types/dist-types/index.d.ts
- node_modules/@octokit/types/package.json
- node_modules/before-after-hook/LICENSE
- node_modules/before-after-hook/README.md
- node_modules/before-after-hook/index.d.ts
- node_modules/before-after-hook/index.js
- node_modules/before-after-hook/lib/add.js
- node_modules/before-after-hook/lib/register.js
- node_modules/before-after-hook/lib/remove.js
- node_modules/before-after-hook/package.json
- node_modules/fast-content-type-parse/.gitattributes
- node_modules/fast-content-type-parse/.github/.stale.yml
- node_modules/fast-content-type-parse/.github/dependabot.yml
- node_modules/fast-content-type-parse/.github/tests_checker.yml
- node_modules/fast-content-type-parse/.github/workflows/ci.yml
- node_modules/fast-content-type-parse/.github/workflows/package-manager-ci.yml
- node_modules/fast-content-type-parse/LICENSE
- node_modules/fast-content-type-parse/README.md
- node_modules/fast-content-type-parse/benchmarks/simple-ows.js
- node_modules/fast-content-type-parse/benchmarks/simple.js
- node_modules/fast-content-type-parse/benchmarks/suite.js
- node_modules/fast-content-type-parse/benchmarks/with-param-quoted.js
- node_modules/fast-content-type-parse/benchmarks/with-param.js
- node_modules/fast-content-type-parse/eslint.config.js
- node_modules/fast-content-type-parse/index.js
- node_modules/fast-content-type-parse/package.json
- node_modules/fast-content-type-parse/test/index.test.js
- node_modules/fast-content-type-parse/types/.gitkeep
- node_modules/fast-content-type-parse/types/index.d.ts
- node_modules/fast-content-type-parse/types/index.test-d.ts
- node_modules/universal-user-agent/.github/workflows/release.yml
- node_modules/universal-user-agent/.github/workflows/test.yml
- node_modules/universal-user-agent/.github/workflows/update-prettier.yml
- node_modules/universal-user-agent/CODE_OF_CONDUCT.md
- node_modules/universal-user-agent/LICENSE.md
- node_modules/universal-user-agent/README.md
- node_modules/universal-user-agent/SECURITY.md
- node_modules/universal-user-agent/index.d.ts
- node_modules/universal-user-agent/index.js
- node_modules/universal-user-agent/index.test-d.ts
- node_modules/universal-user-agent/index.test.js
- node_modules/universal-user-agent/package.json
- package-lock.json
- package.json
- src/main.js

## 現在のオープンIssues
## [Issue #24](../issue-notes/24.md): Geminiが503で落ちたのでretryを実装する
[issue-notes/24.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/24.md)

...
ラベル: 
--- issue-notes/24.md の内容 ---

```markdown
# issue Geminiが503で落ちたのでretryを実装する #24
[issues #24](https://github.com/cat2151/github-actions/issues/24)

# 何が困るの？
- 朝起きて、development statusがgenerateされてないのは困る
    - それをタスク実施のヒントにしているので
    - 毎朝generatedな状態を維持したい

# 方法
- retryを実装する
    - 現在は `this.model.generateContent(developmentPrompt);`
    - 実装後は `this.generateContent(developmentPrompt);`
    - BaseGenerator 側に、
        - generateContent関数を実装する
            - そこで、
                - `this.model.generateContent(developmentPrompt);` する
                - 503のとき、
                    - retryあり
                    - Exponential Backoff


```

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

# 方法は？
- cjsでファイル検索をさせる。
    - project内のファイル検索をさせる。
    - まず書いてあるファイル名そのもので検索させる。
    - 見つからない場合、パス部分を削除して改めてproject内の全ファイルlistから見つかった最初のファイルを対象とする。
- 課題、issue-notes/ 配下のmdファイルの内容、からファイル名を得る方法が曖昧。
    - 案、.yml と .cjs がある部分で、space区切り。
    - 案、agentに方法を検討させる。

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

## 最近の変更（過去7日間）
コミット履歴:
${recentChanges}

変更されたファイル:
${recentChanges}

上記の情報を基に、プロンプトで指定された形式で開発状況を生成してください。
Issue番号を記載する際は、必ず [Issue #番号](../issue-notes/番号.md) の形式でMarkdownリンクとして記載してください。


---
Generated at: 2025-09-08 07:04:23 JST

```

### generated-docs/development-status.md
```md
Last updated: 2025-09-08

# Development Status

## 現在のIssues
- Gemini APIの503エラー対策として、API呼び出しにリトライ機構を導入する計画があります [Issue #24](../issue-notes/24.md)。
- `development-status`生成の品質向上のため、プロンプトにプロジェクトのファイル一覧や、`issue-notes`内の関連ファイルの内容を添付する機能が検討されています [Issue #21](../issue-notes/21.md), [Issue #20](../issue-notes/20.md)。
- `issue-note`, `project-summary`, `translate`, `callgraph`の各ワークフローを、`tonejs-mml-to-json`プロジェクトで最新版に更新し、これら4つのワークフローを他のプロジェクトからより使いやすくするための汎用化とドキュメント化が進められています [Issue #16](../issue-notes/16.md), [Issue #13](../issue-notes/13.md), [Issue #12](../issue-notes/12.md), [Issue #11](../issue-notes/11.md), [Issue #10](../issue-notes/10.md)。

## 次の一手候補
1. Gemini API 503エラー発生時のExponential Backoffリトライを実装 [Issue #24](../issue-notes/24.md)
   - 最初の小さな一歩: `BaseGenerator.cjs`に`generateContentWithRetry`メソッドを追加し、Gemini API呼び出しで503エラーが発生した場合にExponential Backoffを伴うリトライロジックを実装する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github_automation/project_summary/scripts/shared/BaseGenerator.cjs

     実行内容: .github_automation/project_summary/scripts/shared/BaseGenerator.cjs に`generateContentWithRetry`メソッドを新規追加してください。このメソッドは、`this.model.generateContent()`を呼び出し、HTTPステータスコード503が返された場合にExponential Backoffを用いて最大3回リトライします。リトライ間隔は初回1秒、次回2秒、3回目4秒とします。成功した場合のレスポンスを返し、リトライ回数を超えても失敗した場合はエラーをスローします。既存の`this.model.generateContent()`の呼び出し箇所を新しい`generateContentWithRetry`に置き換えてください。

     確認事項: `BaseGenerator.cjs` がGemini APIのインスタンス (`this.model`) を保持していること、および既存の`generateContent`呼び出し箇所が適切に特定できることを確認してください。リトライロジックが無限ループに陥らないよう、最大リトライ回数を設定していることを確認してください。

     期待する出力: 変更後の`BaseGenerator.cjs`のコードを提示してください。
     ```

2. `development-status`プロンプトにプロジェクトの全ファイル一覧を添付する機能を実装 [Issue #21](../issue-notes/21.md)
   - 最初の小さな一歩: `development-status-prompt.md`にファイル一覧用のプレースホルダーを追加し、`DevelopmentStatusGenerator.cjs`にファイル一覧を取得してプレースホルダーに埋め込むロジックを実装する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github_automation/project_summary/prompts/development-status-prompt.md, .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs, .github_automation/project_summary/scripts/development/GitUtils.cjs

     実行内容:
     1. .github_automation/project_summary/prompts/development-status-prompt.md の `# 開発状況情報` の下に `## プロジェクトの全ファイル一覧` というセクションを追加し、その下にファイル一覧を埋め込むためのプレースホルダー `{{FILE_LIST}}` を追加してください。
     2. .github_automation/project_summary/scripts/development/GitUtils.cjs に `getProjectFileList()` メソッドを新規追加してください。このメソッドは、`.git` ディレクトリや `node_modules` ディレクトリを除外してプロジェクトの全てのファイルパスを再帰的に取得し、配列として返します。
     3. .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs 内で、`getProjectFileList()` を呼び出し、取得したファイル一覧を `development-status-prompt.md` の `{{FILE_LIST}}` プレースホルダーに埋め込むロジックを追加してください。

     確認事項: ファイル一覧取得時に`.git`と`node_modules`が正しく除外されることを確認してください。プレースホルダー置換ロジックが正しく動作することを確認してください。

     期待する出力: 変更後の`.github_automation/project_summary/prompts/development-status-prompt.md` と `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`、`.github_automation/project_summary/scripts/development/GitUtils.cjs` のコードを提示してください。
     ```

3. `issue-note`ワークフローの他プロジェクト導入手順書を作成 [Issue #13](../issue-notes/13.md)
   - 最初の小さな一歩: `call-issue-note.yml`の内容を分析し、既存の`TRANSLATION_SETUP.md`を参考に、外部プロジェクトからこのワークフローを呼び出すための手順書ドラフトを作成する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/call-issue-note.yml

     実行内容: .github/workflows/call-issue-note.yml を参照し、外部プロジェクトがこのワークフローを導入する際に必要な手順書をmarkdown形式で作成してください。既存のドキュメント`.github_automation/translate/docs/TRANSLATION_SETUP.md`の構成を参考に、以下の要素を含めてください：
     1. 必須入力パラメータ（例: `github-token` の設定方法）
     2. 必須シークレット（もしあれば）
     3. ファイル配置の前提条件（例: `issue-notes/` ディレクトリの存在）
     4. 外部プロジェクトでの利用時に必要な追加設定や考慮事項。

     確認事項: `call-issue-note.yml` の定義が、入力パラメータやシークレットに関して明確であることを確認してください。生成される手順書が、`TRANSLATION_SETUP.md` と同等以上の分かりやすさを持つことを確認してください。

     期待する出力: `docs/issue-note-setup.md` というファイル名で、`issue-note` ワークフローの導入手順書をmarkdown形式で生成してください。

---
Generated at: 2025-09-08 07:04:43 JST

```

### generated-docs/project-overview.md
```md
Last updated: 2025-09-08

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: 生成されたHTML/CSSファイルによってUIが構築されますが、特定のフレームワークやライブラリは明示されていません。
- 音楽・オーディオ:
    - **Tone.js**: Web Audio APIをより簡単に扱うためのJavaScriptライブラリ。
    - **Web Audio API**: ブラウザに標準搭載されている音声処理を行うためのAPI（Tone.jsを介して使用）。
    - **MML (Music Macro Language)**: 音楽をテキストで記述するための言語のパーサー。
- 開発ツール:
    - **Node.js runtime**: JavaScriptコードを実行するための環境。
    - **npm scripts**: `package.json`に定義されたスクリプトを実行するタスクランナー。
    - **Google Generative AI (@google/generative-ai)**: AIによる文書生成機能をサポートするライブラリ。
    - **@octokit/rest**: GitHub APIと連携するための公式ライブラリ。
- テスト: 特になし
- ビルドツール: 特になし
- 言語機能:
    - **JavaScript**: プロジェクトの主要なプログラミング言語。
- 自動化・CI/CD:
    - **GitHub Actions**: リポジトリのイベントに基づいてワークフローを自動実行するCI/CDプラットフォーム。プロジェクト要約、Issue管理、README翻訳などの共通ワークフローを提供。
    - **i18n automation**: 国際化（多言語対応）に関連する自動翻訳ワークフロー。
- 開発標準: 特になし

## ファイル階層ツリー
```
.github_automation/
  callgraph/
    codeql-queries/
      callgraph.ql
      codeql-pack.lock.yml
      qlpack.yml
    config/
      example.json
    docs/
      callgraph.md
    presets/
      callgraph.js
      style.css
    scripts/
      analyze-codeql.cjs
      callgraph-utils.cjs
      check-codeql-exists.cjs
      check-commits.cjs
      check-node-version.cjs
      common-utils.cjs
      copy-commit-results.cjs
      extract-sarif-info.cjs
      find-process-results.cjs
      generate-html-graph.cjs
      generateHTML.cjs
  project_summary/
    docs/
      daily-summary-setup.md
    prompts/
      development-status-prompt.md
      project-overview-prompt.md
    scripts/
      ProjectSummaryCoordinator.cjs
      development/
        DevelopmentStatusGenerator.cjs
        GitUtils.cjs
        IssueTracker.cjs
      generate-project-summary.cjs
      overview/
        CodeAnalyzer.cjs
        ProjectAnalysisOrchestrator.cjs
        ProjectDataCollector.cjs
        ProjectDataFormatter.cjs
        ProjectOverviewGenerator.cjs
        TechStackAnalyzer.cjs
      shared/
        BaseGenerator.cjs
        FileSystemUtils.cjs
  translate/
    docs/
      TRANSLATION_SETUP.md
    scripts/
      translate-readme.cjs
.gitignore
.vscode/
  settings.json
LICENSE
README.ja.md
README.md
generated-docs/
  callgraph.html
  callgraph.js
  development-status-generated-prompt.md
  development-status.md
  project-overview.md
  style.css
issue-notes/
  10.md
  11.md
  12.md
  13.md
  14.md
  15.md
  16.md
  17.md
  18.md
  19.md
  2.md
  20.md
  21.md
  22.md
  23.md
  24.md
  3.md
  4.md
  7.md
  8.md
  9.md
package-lock.json
package.json
src/
  main.js
```

## ファイル詳細説明
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLを用いて関数呼び出しグラフを抽出するためのクエリを定義。
- **.github_automation/callgraph/config/example.json**: CodeQLの呼び出しグラフ生成に関する設定例を提供。
- **.github_automation/callgraph/docs/callgraph.md**: 呼び出しグラフの生成・利用方法に関するドキュメント。
- **.github_automation/callgraph/presets/callgraph.js**: 呼び出しグラフの表示ロジック、インタラクション、レイアウト等を定義するJavaScriptファイル。
- **.github_automation/callgraph/presets/style.css**: 呼び出しグラフの視覚的なスタイルを定義するCSSファイル。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: AIによる日次サマリー生成機能のセットアップガイド。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: 開発状況サマリー生成に使用されるAIプロンプトの定義。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: プロジェクト概要生成に使用されるAIプロンプトの定義。
- **.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs**: プロジェクト概要生成プロセス全体を調整するメインスクリプト。
- **.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs**: 開発状況レポートを生成するスクリプト。
- **.github_automation/project_summary/scripts/development/GitUtils.cjs**: Git操作に関連するユーティリティ関数を提供するスクリプト。
- **.github_automation/project_summary/scripts/development/IssueTracker.cjs**: Issueの追跡と管理に関連する機能を提供するスクリプト。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: プロジェクト概要を生成するための主要なエントリーポイントスクリプト。
- **.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs**: プロジェクトのコードベースを分析する機能を提供するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs**: プロジェクト分析プロセス全体を統括するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs**: プロジェクトに関連する各種データを収集するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs**: 収集したプロジェクトデータを整形するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs**: プロジェクト概要コンテンツを生成するスクリプト。
- **.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs**: プロジェクトの技術スタックを分析するスクリプト。
- **.github_automation/project_summary/scripts/shared/BaseGenerator.cjs**: 各種ジェネレータの共通基底クラスやユーティリティを提供。
- **.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs**: ファイルシステム操作に関連するユーティリティ関数を提供するスクリプト。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: 自動翻訳機能のセットアップガイド。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルの自動翻訳を実行するスクリプト。
- **.gitignore**: Gitがバージョン管理の対象としないファイルやディレクトリを指定する設定ファイル。
- **.vscode/settings.json**: Visual Studio Codeのワークスペース固有の設定ファイル。
- **LICENSE**: プロジェクトのライセンス情報が記述されたファイル。
- **README.ja.md**: プロジェクトの概要や使い方などを日本語で記述したドキュメント。
- **README.md**: プロジェクトの概要や使い方などを英語で記述したドキュメント。
- **generated-docs/callgraph.html**: 自動生成された呼び出しグラフのHTML形式での表示ファイル。
- **generated-docs/callgraph.js**: 自動生成された呼び出しグラフの動的な表示ロジックを含むJavaScriptファイル（`.github_automation/callgraph/presets/callgraph.js`と同じ内容）。
- **generated-docs/development-status-generated-prompt.md**: 自動生成された開発状況プロンプトの内容。
- **generated-docs/development-status.md**: 自動生成された開発状況レポート。
- **generated-docs/project-overview.md**: 自動生成されたプロジェクトの概要レポート。
- **generated-docs/style.css**: 自動生成されたドキュメントのスタイルシート（`.github_automation/callgraph/presets/style.css`と同じ内容）。
- **issue-notes/*.md**: GitHub Issuesに関連する詳細なメモや追跡情報が個別に記述されたファイル群。
- **package-lock.json**: npmパッケージの正確な依存関係ツリーとバージョンを記録し、ビルドの再現性を保証するファイル。
- **package.json**: プロジェクトのメタデータ（名前、バージョン、説明など）と依存関係、スクリプトを定義するファイル。
- **src/main.js**: プロジェクトのメイン処理を含む可能性のあるサンプルJavaScriptファイル。

## 関数詳細説明
- **.github_automation/callgraph/presets/callgraph.js** (および `generated-docs/callgraph.js`):
    - `escapeHtml(unsafe)`: HTMLエスケープ処理を行い、XSS攻撃などを防ぐための関数。
    - `getLayoutConfig()`: グラフのレイアウトに関する設定情報を取得する関数。
    - `placeCentralNode()`: グラフの中心に特定のノードを配置する関数。
    - `showNodeInfo(node)`: 指定されたノードの詳細情報を表示パネルに表示する関数。引数: `node` (object), 戻り値: なし。
    - `showEdgeInfo(edge)`: 指定されたエッジ（接続線）の詳細情報を表示パネルに表示する関数。引数: `edge` (object), 戻り値: なし。
    - `hideInfoPanel()`: 情報表示パネルを非表示にする関数。
    - `showInfoPanel()`: 情報表示パネルを表示する関数。
    - `toggleInfoPanel()`: 情報表示パネルの表示/非表示を切り替える関数。
    - `generateGitHubURL(path, line)`: 指定されたファイルパスと行番号からGitHub上のURLを生成する関数。引数: `path` (string), `line` (number), 戻り値: `string`。
    - `resetLayout()`: グラフのレイアウトを初期状態にリセットする関数。
    - `watchNodeMovementAndFixOverlapsWrap()`: ノードの動きを監視し、重なりを修正するロジックをラップする関数。
    - `watchNodeMovementAndFixOverlaps()`: ノードの動きをリアルタイムで監視し、重なりが発生しないように自動調整する関数。
    - `resolveNodeOverlaps()`: 重複して配置されたノードの位置を調整し、重なりを解消する関数。
    - `switchLayout(layoutName)`: グラフのレイアウトアルゴリズムを切り替える関数。引数: `layoutName` (string), 戻り値: なし。
    - `resetNodeStates()`: 全てのノードの表示状態や選択状態を初期状態にリセットする関数。
    - `fitToContent()`: グラフの表示範囲を現在のコンテンツに合わせて調整し、全体が表示されるようにする関数。
    - `toggleNodeLabels()`: グラフ上のノードラベルの表示/非表示を切り替える関数。
    - `toggleCalleeLocationFilter()`: 呼び出し先ノードのロケーションに基づくフィルターの表示/非表示を切り替える関数。
    - `replace()`: (詳細不明) 文字列の置換処理や要素の差し替えに関連する可能性のある関数。
    - `switch()`: (詳細不明) 条件分岐の制御フローに関連する可能性のある関数。
    - `function()`: (詳細不明) 匿名関数やコールバック関数として使用される可能性のある関数。
    - `max()`: (詳細不明) 最大値を計算するユーティリティ関数。
    - `on()`: (詳細不明) イベントリスナーを設定するための関数。
    - `if()`: (詳細不明) 条件分岐の制御フローに関連する可能性のある関数。
    - `for()`: (詳細不明) ループ処理の制御フローに関連する可能性のある関数。
    - `ready()`: (詳細不明) DOMの準備が完了したイベントなどを処理する関数。
    - `addListener()`: (詳細不明) イベントリスナーを追加する関数。
- **src/main.js**:
    - `greet(name)`: 受け取った名前に挨拶メッセージを返すシンプルな関数。引数: `name` (string), 戻り値: `string`。
    - `main()`: アプリケーションのエントリーポイントまたは主要な処理を実行する関数。引数: なし, 戻り値: なし。

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
Generated at: 2025-09-08 07:06:48 JST

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

### issue-notes/14.md
```md
# issue Development Status のdocument生成において、最初の小さな一歩 を実現する用のプロンプト生成がされなくなっている #14
[issues #14](https://github.com/cat2151/github-actions/issues/14)

## 何が困るの？
- #11の場合
- 期待値
    - 最初の小さな一歩 : [Issue #11]のtranslateについて、現在の処理フローを確認し、外部プロジェクトから利用する際にどのような情報（翻訳対象のファイルパス、ターゲット言語設定など）が必要となるかを明確にする。これにより、再利用可能なワークフロー設計の基礎を築く。
    - 最初の小さな一歩をagentに実行させるためのプロンプト : 現在のGitHub Actions翻訳ワークフロー（translate-readme.yml、call-translate-readme.yml、translate-readme.cjs）を分析し、外部プロジェクトから利用する際に必要となる設定項目を洗い出してください。具体的には、以下の観点から調査し、markdown形式でまとめてください：1) 必須入力パラメータ（現在はtarget-branchのみ） 2) 必須シークレット（GEMINI_API_KEY） 3) ファイル配置の前提条件（README.ja.md の存在、配置場所） 4) 翻訳対象ファイル名の制約（現在はREADME固定） 5) ブランチ・トリガー設定の制約 6) 外部プロジェクトでの利用時に追加で必要となりそうな設定項目の提案
- 実際の結果
    - 最初の小さな一歩: [Issue #11]のtranslateについて、現在の処理フローを確認し、外部プロジェクトから利用する際にどのような情報（翻訳対象のファイルパス、ターゲット言語設定など）が必要となるかを明確にする。これにより、再利用可能なワークフロー設計の基礎を築く。

## close条件
- 期待値のように、Agent実行プロンプト、が生成されること

## agentに修正させた
- development-status.md を修正させた
- test green

## closeとする

```

### issue-notes/15.md
```md
# issue project_summary scripts cjs を分解し、できるだけ1ファイル200行未満にし、agentによるメンテをしやすくする #15
[issues #15](https://github.com/cat2151/github-actions/issues/15)

# 状況
- agentに、最初の小さな一歩のAgent実行プロンプトを実行させた
- 結果、以下を得た：
    - project_summary_cjs_analysis.md
- どうする？
    - 次の一手をagentに生成させてみる（翌日の日次バッチで自動生成させる）
- 結果
    - 生成させたpromptをレビューした
    - promptを修正した
    - agentに投げた
    - 結果、GitUtils.cjsを切り出しできた
    - それをリファクタリングミスがないかチェックさせた
    - agentによるチェック結果は合格だった
- どうする？
    - 次の一手をagentに生成させてみる（翌日の日次バッチで自動生成させる）
- 結果
    - 生成させたpromptをレビューした
        - promptの対象ファイルから project_summary_cjs_analysis.md が漏れていることがわかったので修正した
    - promptを修正した
    - agentに投げた
    - 結果、FileSystemUtils.cjsを切り出しできた
    - それをリファクタリングミスがないかチェックさせた
    - agentによるチェック結果は合格だった
- どうする？
    - 次の一手をagentに生成させてみる（翌日の日次バッチで自動生成させる）
- 結果
    - 生成させたpromptをレビューした
    - 今回は低品質、NG、と判断した
    - 判断基準は、project_summary_cjs_analysis.md と乖離してしまっている点。今回はハルシネーションを含んだplanである、と判断した
    - 人力でpromptを書き、planさせ、plan結果をレビューし、agentに投げた
    - 結果、CodeAnalyzer.cjsとProjectAnalyzer.cjsを切り出しできた
- どうする？
    - 次の一手をagentに生成させてみる（翌日の日次バッチで自動生成させる）
    - 備考、課題、Geminiに生成させているdocumentは2つある。かなり位置づけが違うものである。
        - projectのソースファイル分析。
        - projectのissues分析。
        - この2つについて、class, cjs, yml まで分割をするかを、あとで検討する。
        - おそらく、class分割どまりとし、ソースファイル分析結果をissues分析の参考資料としてGeminiのcontextに与える改善をする、がよい、と想定しておく。
- 課題、エラーで落ちた。昨日は落ちてない。
    - 原因、昨日のagentのリファクタリング時に、ハルシネーションで、
        - codeが破壊されていた
        - run メソッドが削除されていた
        - 一つ前のrevisionにはrun メソッドがあった
        - ほかにもcode破壊があったのかは不明、調査省略、明日の日次バッチをtestと調査として利用するつもり
- どうする？
    - 単純に一つ前のrevisionからrun メソッドを復活させ、明日の日次バッチをtestと調査として利用する
- 再発防止策は？
    - ノーアイデア。昨日それなりにagentにチェックをさせたはずだが根本的な大きなミスが発生していた。
    - 構文チェックは通っていたが、問題を検知できなかった。
    - チェックが機能していない、あるいは機能として不足している。
    - 分析。変更量が大きかったぶんミスのリスクが増えていた。
    - 対策案。もっと小さく一歩ずつ変更させる。
    - 対策案。リファクタリング時、いきなりメソッド削除をさせない。
        - まず全cjsの全メソッドのlistをさせる。
        - のち、削除対象の重複メソッドのlistをさせる。
        - そして削除planをさせる。
        - のち、削除させる。
        - さらに削除後のメソッドlistをさせる。
        - そして削除しすぎていないかを削除前後のlist比較でチェックさせる。
        - これでrunまで削除してしまうのを防止できるかもしれない。
        - これは人力からみると、おかしな話である。人力なら1つずつ移動をするだけであり、ミスのしようがない。
        - LLMの典型的なハルシネーション問題の一つである、と認識する
- 結果は？
    - test green
    - run メソッドの人力復活は成功した
    - 日次バッチで生成した次の一手のpromptを投げた
    - リファクタリング成功した。ProjectSummaryGenerator を切り出した
- どうする？
    - 次の一手をagentに生成させてみる（agentに投げるpromptを、翌日の日次バッチで自動生成させる）
- 結果
    - 先に、2つのdocument生成を、1つずつ生成できるよう疎結合にリファクタリング、をしたほうがよさそう
    - agentにそれを投げた
    - 成功した、と判断する
    - 課題、`BaseSummaryGenerator.cjs` は、baseの機能と、`ProjectOverviewGenerator.cjs`専用の機能とが混ざっている。
        - baseに集約すべきは、`ProjectSummaryCoordinator.cjs`と`ProjectOverviewGenerator.cjs`とが必ずどちらも使う機能、である、と考える。
        - 対策、明日以降それをagentに投げる
    - `project_summary_cjs_analysis.md` は削除とする。役目が完了した、と判断する。リファクタリング前のソース構造の分析documentであり、今は存在しているとわかりづらくなる。シンプル優先のため削除とする。
- どうする？
    - 次の一手をagentに生成させてみる（agentに投げるpromptを、翌日の日次バッチで自動生成させる）
- 結果
    - test green
    - `BaseSummaryGenerator.cjs` を切り出したのは成功した、と判断する
    - `BaseSummaryGenerator.cjs` を2分割するため、agentにplanさせた
    - レビューした
    - agentに2分割させた
    - レビューした。OKと判断する
- どうする？
    - 次の一手をagentに生成させてみる（agentに投げるpromptを、翌日の日次バッチで自動生成させる）
- 結果
    - test green
    - `BaseSummaryGenerator.cjs` を2分割は成功した、と判断する
    - issue track機能構造をリファクタリングし、以下にする
        - development status generator : baseを継承する
        - issue tracker : 汎用関数群
    - agentに実施させた
    - レビューした。OKと判断する
- どうする？
    - 次の一手をagentに生成させてみる（agentに投げるpromptを、翌日の日次バッチで自動生成させる）
- 結果
    - test green
    - DevelopmentStatusGeneratorとissue trackerのリファクタリングは成功した、と判断する
    - ProjectOverview生成機能のリファクタリングをする
    - agentに実施させた
    - レビューした。OKと判断する
- どうする？
    - 次の一手をagentに生成させてみる（agentに投げるpromptを、翌日の日次バッチで自動生成させる）
- 結果
    - test green
    - ProjectOverview生成機能のリファクタリングは成功した、と判断する
    - 課題、overviewと、developmentStatusとが混在し、dirが読みづらい。
    - 対策、shared/、overview/、development/、の3つのdirに切り分ける
    - agentに分析、planさせ、レビューし、planさせ、実施させた
    - レビューした。OKと判断する
- どうする？
    - 次の一手をagentに生成させてみる（agentに投げるpromptを、翌日の日次バッチで自動生成させる）
- 結果
    - test green
    - shared/、overview/、development/、の3つのdirに切り分けるリファクタリングは成功した、と判断する
    - agentに、agentがメンテしやすいか？の観点からレビューさせた
    - 詳細は割愛
        - `> 最優先で取り組むべきは 設定管理の一元化 と エラーハンドリングの統一 です。これにより、Agentにとって予測可能で理解しやすいコードベースになります。`
        - それは別issueで、設定変更をマストでやるので、OKと判断する
- これでagentによるメンテは十分しやすくなった、と判断する
- closeとする

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

### issue-notes/17.md
```md
# issue development-status が生成したmdに誤りがある。issue-note へのlinkがURL誤りで、404となってしまう #17
[issues #17](https://github.com/cat2151/github-actions/issues/17)

# 事例
- 生成したmdのURL：
    - https://github.com/cat2151/github-actions/blob/main/generated-docs/development-status.md
- そのmdをGitHub上でdecodeして閲覧したときのURL、404である：
    - https://github.com/cat2151/github-actions/blob/main/generated-docs/issue-notes/16.md
- そのmdに実際に含まれるURL：
    - issue-notes/16.md
- あるべきURL：
    - https://github.com/cat2151/github-actions/blob/main/issue-notes/16.md
- あるべきURLがmdにどう含まれているべきか：
    - ../issue-notes/16.md

# どうする？
- 案
    - promptを修正する
    - promptの場所は：
        - .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
    - 備考、cjs内にpromptがハードコーディングされており、promptをメンテしづらいので別途対処する : [issues #18](https://github.com/cat2151/github-actions/issues/18)

# 結果
- agentにpromptを投げた
    - ※promptは、development-statusで生成したもの
- レビューした
    - agentがフルパスで実装した、ことがわかった
- userが分析し、 ../ のほうが適切と判断した
    - ※「事例」コーナーを、あわせて修正した
- そのように指示してagentに修正させた
- testする

# 結果
- test green
- closeする

```

### issue-notes/18.md
```md
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

# 結果
- Geminiに生成させたpromptを、agentに投げて、リファクタリングさせてみた
- ハルシネーションした。使い物にならなかった
- 人力でやる

# 結果
- test green

# closeとする


```

### issue-notes/19.md
```md
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

# 状況
- issues #22 がcloseされた
- testできるようになった
- commitされたpromptを確認した。issue-notes/ 配下のmdファイルがpromptに添付されていること、が確認できた

# closeする

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

### issue-notes/22.md
```md
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

# 結果
- test green。呼び出し元側にcommitされていることを確認した。
- 20Kbytesである
    - Geminiにわたすサイズとしても許容範囲内と判断する
        - token数から概算して100Kbytes～1Mbytes程度を想定

# closeとする

```

### issue-notes/23.md
```md
# issue issue 17が再発してしまっている #23
[issues #23](https://github.com/cat2151/github-actions/issues/23)

# 症状は？
- issue 17と同じ

# どうする？
- development-status-generated-prompt.md を確認する
- 結果
    - >Issue番号を記載する際は、必ず [Issue #番号](issue-notes/番号.md) の形式でMarkdownリンクとして記載してください。
    - 仮説、これが残っており、ほかの ../ 指定と競合し、どちらかがランダムで選ばれていた
    - 対策、ここを ../ 指定にする

# 結果
- test green

# closeとする

```

### issue-notes/24.md
```md
# issue Geminiが503で落ちたのでretryを実装する #24
[issues #24](https://github.com/cat2151/github-actions/issues/24)

# 何が困るの？
- 朝起きて、development statusがgenerateされてないのは困る
    - それをタスク実施のヒントにしているので
    - 毎朝generatedな状態を維持したい

# 方法
- retryを実装する
    - 現在は `this.model.generateContent(developmentPrompt);`
    - 実装後は `this.generateContent(developmentPrompt);`
    - BaseGenerator 側に、
        - generateContent関数を実装する
            - そこで、
                - `this.model.generateContent(developmentPrompt);` する
                - 503のとき、
                    - retryあり
                    - Exponential Backoff

# 結果
- 直近の実行結果をlog確認した
    - 本番で503が発生しなかったことをlog確認した
- 本番の503 testは、今回発生しなかったので、できず
- ここ1週間で2回発生しているので、次の1週間で1回発生する想定
- ソース机上確認した

# どうする？
- このissueはcloseしたほうがわかりやすい、と判断する
- 1週間503を毎日チェック、は省略とする
- もし今後503が発生したら別issueとする

# closeとする

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

### issue-notes/4.md
```md
# issue GitHub Actions「project概要生成」を共通ワークフロー化する #4
[issues #4](https://github.com/cat2151/github-actions/issues/4)

# prompt
```
あなたはGitHub Actionsと共通ワークフローのスペシャリストです。
このymlファイルを、以下の2つのファイルに分割してください。
1. 共通ワークフロー       cat2151/github-actions/.github/workflows/daily-project-summary.yml
2. 呼び出し元ワークフロー cat2151/github-actions/.github/workflows/call-daily-project-summary.yml
まずplanしてください
```

# 結果、あちこちハルシネーションのあるymlが生成された
- agentの挙動があからさまにハルシネーション
    - インデントが修正できない、「失敗した」という
    - 構文誤りを認識できない
- 人力で修正した

# このagentによるセルフレビューが信頼できないため、別のLLMによるセカンドオピニオンを試す
```
あなたはGitHub Actionsと共通ワークフローのスペシャリストです。
以下の2つのファイルをレビューしてください。最優先で、エラーが発生するかどうかだけレビューてください。エラー以外の改善事項のチェックをするかわりに、エラー発生有無チェックに最大限注力してください。

--- 呼び出し元

name: Call Daily Project Summary

on:
  schedule:
    # 日本時間 07:00 (UTC 22:00 前日)
    - cron: '0 22 * * *'
  workflow_dispatch:

jobs:
  call-daily-project-summary:
    uses: cat2151/github-actions/.github/workflows/daily-project-summary.yml
    secrets:
      GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}

--- 共通ワークフロー
name: Daily Project Summary
on:
  workflow_call:

jobs:
  generate-summary:
    runs-on: ubuntu-latest

    permissions:
      contents: write
      issues: read
      pull-requests: read

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          fetch-depth: 0  # 履歴を取得するため

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: |
          # 一時的なディレクトリで依存関係をインストール
          mkdir -p /tmp/summary-deps
          cd /tmp/summary-deps
          npm init -y
          npm install @google/generative-ai @octokit/rest
          # generated-docsディレクトリを作成
          mkdir -p $GITHUB_WORKSPACE/generated-docs

      - name: Generate project summary
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          GITHUB_REPOSITORY: ${{ github.repository }}
          NODE_PATH: /tmp/summary-deps/node_modules
        run: |
          node .github/scripts/generate-project-summary.cjs

      - name: Check for generated summaries
        id: check_summaries
        run: |
          if [ -f "generated-docs/project-overview.md" ] && [ -f "generated-docs/development-status.md" ]; then
            echo "summaries_generated=true" >> $GITHUB_OUTPUT
          else
            echo "summaries_generated=false" >> $GITHUB_OUTPUT
          fi

      - name: Commit and push summaries
        if: steps.check_summaries.outputs.summaries_generated == 'true'
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          # package.jsonの変更のみリセット（generated-docsは保持）
          git restore package.json 2>/dev/null || true
          # サマリーファイルのみを追加
          git add generated-docs/project-overview.md
          git add generated-docs/development-status.md
          git commit -m "Update project summaries (overview & development status)"
          git push

      - name: Summary generation result
        run: |
          if [ "${{ steps.check_summaries.outputs.summaries_generated }}" == "true" ]; then
            echo "✅ Project summaries updated successfully"
            echo "📊 Generated: project-overview.md & development-status.md"
          else
            echo "ℹ️ No summaries generated (likely no user commits in the last 24 hours)"
          fi
```

# 上記promptで、2つのLLMにレビューさせ、合格した

# 細部を、先行する2つのymlを参照に手直しした

# ローカルtestをしてからcommitできるとよい。方法を検討する
- ローカルtestのメリット
    - 素早く修正のサイクルをまわせる
    - ムダにgit historyを汚さない
        - これまでの事例：「実装したつもり」「エラー。修正したつもり」「エラー。修正したつもり」...（以降エラー多数）
- 方法
    - ※検討、WSL + act を環境構築済みである。test可能であると判断する
    - 呼び出し元のURLをコメントアウトし、相対パス記述にする
    - ※備考、テスト成功すると結果がcommit pushされる。それでよしとする
- 結果
    - OK
    - secretsを簡略化できるか試した、できなかった、現状のsecrets記述が今わかっている範囲でベストと判断する
    - OK

# test green

# commit用に、yml 呼び出し元 uses をlocal用から本番用に書き換える

# closeとする

```

### issue-notes/7.md
```md
# issue issue note生成できるかのtest用 #7
[issues #7](https://github.com/cat2151/github-actions/issues/7)

- 生成できた
- closeとする

```

### issue-notes/8.md
```md
# issue 関数コールグラフhtmlビジュアライズ生成の対象ソースファイルを、呼び出し元ymlで指定できるようにする #8
[issues #8](https://github.com/cat2151/github-actions/issues/8)

# これまでの課題
- 以下が決め打ちになっていた
```
  const allowedFiles = [
    'src/main.js',
    'src/mml2json.js',
    'src/play.js'
  ];
```

# 対策
- 呼び出し元ymlで指定できるようにする

# agent
- agentにやらせることができれば楽なので、初手agentを試した
- 失敗
    - ハルシネーションしてscriptを大量破壊した
- 分析
    - 修正対象scriptはagentが生成したもの
    - 低品質な生成結果でありソースが巨大
    - ハルシネーションで破壊されやすいソース
    - AIの生成したソースは、必ずしもAIフレンドリーではない

# 人力リファクタリング
- 低品質コードを、最低限agentが扱えて、ハルシネーションによる大量破壊を防止できる内容、にする
- 手短にやる
    - そもそもビジュアライズは、agentに雑に指示してやらせたもので、
    - 今後別のビジュアライザを選ぶ可能性も高い
    - 今ここで手間をかけすぎてコンコルド効果（サンクコストバイアス）を増やすのは、project群をトータルで俯瞰して見たとき、損
- 対象
    - allowedFiles のあるソース
        - callgraph-utils.cjs
            - たかだか300行未満のソースである
            - この程度でハルシネーションされるのは予想外
            - やむなし、リファクタリングでソース分割を進める

# agentに修正させる
## prompt
```
allowedFilesを引数で受け取るようにしたいです。
ないならエラー。
最終的に呼び出し元すべてに波及して修正したいです。

呼び出し元をたどってエントリポイントも見つけて、
エントリポイントにおいては、
引数で受け取ったjsonファイル名 allowedFiles.js から
jsonファイル allowedFiles.jsonの内容をreadして
変数 allowedFilesに格納、
後続処理に引き渡す、としたいです。

まずplanしてください。
planにおいては、修正対象のソースファイル名と関数名を、呼び出し元を遡ってすべて特定し、listしてください。
```

# 修正が順調にできた
- コマンドライン引数から受け取る作りになっていなかったので、そこだけ指示して修正させた
- yml側は人力で修正した

# 他のリポジトリから呼び出した場合にバグらないよう修正する
- 気付いた
    - 共通ワークフローとして他のリポジトリから使った場合はバグるはず。
        - ymlから、共通ワークフロー側リポジトリのcheckoutが漏れているので。
- 他のyml同様に修正する
- あわせて全体にymlをリファクタリングし、修正しやすくし、今後のyml読み書きの学びにしやすくする

# local WSL + act : test green

# closeとする
- もし生成されたhtmlがNGの場合は、別issueとするつもり

```

### issue-notes/9.md
```md
# issue 関数コールグラフhtmlビジュアライズが0件なので、原因を可視化する #9
[issues #9](https://github.com/cat2151/github-actions/issues/9)

# agentに修正させたり、人力で修正したりした
- agentがハルシネーションし、いろいろ根の深いバグにつながる、エラー隠蔽などを仕込んでいたため、検知が遅れた
- 詳しくはcommit logを参照のこと
- WSL + actの環境を少し変更、act起動時のコマンドライン引数を変更し、generated-docsをmountする（ほかはデフォルト挙動であるcpだけにする）ことで、デバッグ情報をコンテナ外に出力できるようにし、デバッグを効率化した

# test green

# closeとする

```

### package-lock.json
```json
{
  "name": "actions-tmp",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "actions-tmp",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "@google/generative-ai": "^0.24.1",
        "@octokit/rest": "^22.0.0"
      }
    },
    "node_modules/@google/generative-ai": {
      "version": "0.24.1",
      "resolved": "https://registry.npmjs.org/@google/generative-ai/-/generative-ai-0.24.1.tgz",
      "integrity": "sha512-MqO+MLfM6kjxcKoy0p1wRzG3b4ZZXtPI+z2IE26UogS2Cm/XHO+7gGRBh6gcJsOiIVoH93UwKvW4HdgiOZCy9Q==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@octokit/auth-token": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/@octokit/auth-token/-/auth-token-6.0.0.tgz",
      "integrity": "sha512-P4YJBPdPSpWTQ1NU4XYdvHvXJJDxM6YwpS0FZHRgP7YFkdVxsWcpWGy/NVqlAA7PcPCnMacXlRm1y2PFZRWL/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@octokit/core": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/@octokit/core/-/core-7.0.3.tgz",
      "integrity": "sha512-oNXsh2ywth5aowwIa7RKtawnkdH6LgU1ztfP9AIUCQCvzysB+WeU8o2kyyosDPwBZutPpjZDKPQGIzzrfTWweQ==",
      "license": "MIT",
      "dependencies": {
        "@octokit/auth-token": "^6.0.0",
        "@octokit/graphql": "^9.0.1",
        "@octokit/request": "^10.0.2",
        "@octokit/request-error": "^7.0.0",
        "@octokit/types": "^14.0.0",
        "before-after-hook": "^4.0.0",
        "universal-user-agent": "^7.0.0"
      },
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@octokit/endpoint": {
      "version": "11.0.0",
      "resolved": "https://registry.npmjs.org/@octokit/endpoint/-/endpoint-11.0.0.tgz",
      "integrity": "sha512-hoYicJZaqISMAI3JfaDr1qMNi48OctWuOih1m80bkYow/ayPw6Jj52tqWJ6GEoFTk1gBqfanSoI1iY99Z5+ekQ==",
      "license": "MIT",
      "dependencies": {
        "@octokit/types": "^14.0.0",
        "universal-user-agent": "^7.0.2"
      },
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@octokit/graphql": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/@octokit/graphql/-/graphql-9.0.1.tgz",
      "integrity": "sha512-j1nQNU1ZxNFx2ZtKmL4sMrs4egy5h65OMDmSbVyuCzjOcwsHq6EaYjOTGXPQxgfiN8dJ4CriYHk6zF050WEULg==",
      "license": "MIT",
      "dependencies": {
        "@octokit/request": "^10.0.2",
        "@octokit/types": "^14.0.0",
        "universal-user-agent": "^7.0.0"
      },
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@octokit/openapi-types": {
      "version": "25.1.0",
      "resolved": "https://registry.npmjs.org/@octokit/openapi-types/-/openapi-types-25.1.0.tgz",
      "integrity": "sha512-idsIggNXUKkk0+BExUn1dQ92sfysJrje03Q0bv0e+KPLrvyqZF8MnBpFz8UNfYDwB3Ie7Z0TByjWfzxt7vseaA==",
      "license": "MIT"
    },
    "node_modules/@octokit/plugin-paginate-rest": {
      "version": "13.1.1",
      "resolved": "https://registry.npmjs.org/@octokit/plugin-paginate-rest/-/plugin-paginate-rest-13.1.1.tgz",
      "integrity": "sha512-q9iQGlZlxAVNRN2jDNskJW/Cafy7/XE52wjZ5TTvyhyOD904Cvx//DNyoO3J/MXJ0ve3rPoNWKEg5iZrisQSuw==",
      "license": "MIT",
      "dependencies": {
        "@octokit/types": "^14.1.0"
      },
      "engines": {
        "node": ">= 20"
      },
      "peerDependencies": {
        "@octokit/core": ">=6"
      }
    },
    "node_modules/@octokit/plugin-request-log": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/@octokit/plugin-request-log/-/plugin-request-log-6.0.0.tgz",
      "integrity": "sha512-UkOzeEN3W91/eBq9sPZNQ7sUBvYCqYbrrD8gTbBuGtHEuycE4/awMXcYvx6sVYo7LypPhmQwwpUe4Yyu4QZN5Q==",
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "peerDependencies": {
        "@octokit/core": ">=6"
      }
    },
    "node_modules/@octokit/plugin-rest-endpoint-methods": {
      "version": "16.0.0",
      "resolved": "https://registry.npmjs.org/@octokit/plugin-rest-endpoint-methods/-/plugin-rest-endpoint-methods-16.0.0.tgz",
      "integrity": "sha512-kJVUQk6/dx/gRNLWUnAWKFs1kVPn5O5CYZyssyEoNYaFedqZxsfYs7DwI3d67hGz4qOwaJ1dpm07hOAD1BXx6g==",
      "license": "MIT",
      "dependencies": {
        "@octokit/types": "^14.1.0"
      },
      "engines": {
        "node": ">= 20"
      },
      "peerDependencies": {
        "@octokit/core": ">=6"
      }
    },
    "node_modules/@octokit/request": {
      "version": "10.0.3",
      "resolved": "https://registry.npmjs.org/@octokit/request/-/request-10.0.3.tgz",
      "integrity": "sha512-V6jhKokg35vk098iBqp2FBKunk3kMTXlmq+PtbV9Gl3TfskWlebSofU9uunVKhUN7xl+0+i5vt0TGTG8/p/7HA==",
      "license": "MIT",
      "dependencies": {
        "@octokit/endpoint": "^11.0.0",
        "@octokit/request-error": "^7.0.0",
        "@octokit/types": "^14.0.0",
        "fast-content-type-parse": "^3.0.0",
        "universal-user-agent": "^7.0.2"
      },
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@octokit/request-error": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/@octokit/request-error/-/request-error-7.0.0.tgz",
      "integrity": "sha512-KRA7VTGdVyJlh0cP5Tf94hTiYVVqmt2f3I6mnimmaVz4UG3gQV/k4mDJlJv3X67iX6rmN7gSHCF8ssqeMnmhZg==",
      "license": "MIT",
      "dependencies": {
        "@octokit/types": "^14.0.0"
      },
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@octokit/rest": {
      "version": "22.0.0",
      "resolved": "https://registry.npmjs.org/@octokit/rest/-/rest-22.0.0.tgz",
      "integrity": "sha512-z6tmTu9BTnw51jYGulxrlernpsQYXpui1RK21vmXn8yF5bp6iX16yfTtJYGK5Mh1qDkvDOmp2n8sRMcQmR8jiA==",
      "license": "MIT",
      "dependencies": {
        "@octokit/core": "^7.0.2",
        "@octokit/plugin-paginate-rest": "^13.0.1",
        "@octokit/plugin-request-log": "^6.0.0",
        "@octokit/plugin-rest-endpoint-methods": "^16.0.0"
      },
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@octokit/types": {
      "version": "14.1.0",
      "resolved": "https://registry.npmjs.org/@octokit/types/-/types-14.1.0.tgz",
      "integrity": "sha512-1y6DgTy8Jomcpu33N+p5w58l6xyt55Ar2I91RPiIA0xCJBXyUAhXCcmZaDWSANiha7R9a6qJJ2CRomGPZ6f46g==",
      "license": "MIT",
      "dependencies": {
        "@octokit/openapi-types": "^25.1.0"
      }
    },
    "node_modules/before-after-hook": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/before-after-hook/-/before-after-hook-4.0.0.tgz",
      "integrity": "sha512-q6tR3RPqIB1pMiTRMFcZwuG5T8vwp+vUvEG0vuI6B+Rikh5BfPp2fQ82c925FOs+b0lcFQ8CFrL+KbilfZFhOQ==",
      "license": "Apache-2.0"
    },
    "node_modules/fast-content-type-parse": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/fast-content-type-parse/-/fast-content-type-parse-3.0.0.tgz",
      "integrity": "sha512-ZvLdcY8P+N8mGQJahJV5G4U88CSvT1rP8ApL6uETe88MBXrBHAkZlSEySdUlyztF7ccb+Znos3TFqaepHxdhBg==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT"
    },
    "node_modules/universal-user-agent": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/universal-user-agent/-/universal-user-agent-7.0.3.tgz",
      "integrity": "sha512-TmnEAEAsBJVZM/AADELsK76llnwcf9vMKuPz8JflO1frO8Lchitr0fNaN9d+Ap0BjKtqWqd/J17qeDnXh8CL2A==",
      "license": "ISC"
    }
  }
}

```

### package.json
```json
{
  "name": "actions-tmp",
  "version": "1.0.0",
  "description": "This repository is a **collection of GitHub Actions shared workflows reusable across multiple projects.**",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@google/generative-ai": "^0.24.1",
    "@octokit/rest": "^22.0.0"
  }
}

```

### src/main.js
```js
// 仮の解析対象 main.js
function greet(name) {
    console.log('Hello, ' + name + '!');
}

function main() {
    greet('World');
}

main();

````」を、関数Cの結果で置き換える、という関数Dを実装する。
- 実際には、Geminiにわたすpromptのプレースホルダー展開は、2回にわたる必要がある。1回目でissues-note内容をpromptに埋め込む。2回目でそのpromptに対して関数Dを適用する。
## 備忘
- 上記は、agentにplanさせてレビューし、context不足と感じたら上記をメンテ、というサイクルで書いた。

# どうする？
- 上記をagentに投げる。documentやtestについてのplanもしてくるかもしれないがそこは時間の都合で省略して実施させるつもり。
- 投げた、実装させた、レビューして人力リファクタリングした
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

### .github_automation/callgraph/codeql-queries/callgraph.ql
```ql
/**
 * @name Function Call Graph
 * @description Extract function call relationships
 * @kind problem
 * @problem.severity info
 * @precision low
 * @id javascript/function-call-graph
 * @tags callgraph
 *       maintainability
 *       metrics
 */

import javascript

// 方針 : agentがハルシネーションでql破壊を連発するので、ここでは絞り込みせず、後続処理で、nodesとedgesを絞り込む方法で応急対策します


from CallExpr call, string callerName, string calleeName, Location callerLoc, Location calleeLoc
where
  // 呼び出し元を特定
  (
    exists(Function caller |
      call.getEnclosingFunction() = caller and
      exists(caller.getName()) and
      callerName = caller.getName() and
      callerLoc = caller.getLocation()
    )
    or
    exists(Function caller |
      call.getEnclosingFunction() = caller and
      not exists(caller.getName()) and
      callerName = "anonymous_" + caller.getLocation().getStartLine() and
      callerLoc = caller.getLocation()
    )
    or
    exists(MethodDefinition method |
      call.getEnclosingFunction() = method.getBody() and
      callerName = method.getName() and
      callerLoc = method.getLocation()
    )
    or
    exists(Constructor cons |
      call.getEnclosingFunction() = cons and
      callerName = "constructor" and
      callerLoc = cons.getLocation()
    )
    or
    (
      not exists(call.getEnclosingFunction()) and
      callerName = "global" and
      callerLoc = call.getLocation()
    )
    or
    (
      not exists(Function f | call.getEnclosingFunction() = f) and
      callerName = "unknown_" + call.getLocation().getStartLine() and
      callerLoc = call.getLocation()
    )
  ) and

  // 呼び出し先を特定
  (
    exists(Identifier id |
      call.getCallee() = id and
      calleeName = id.getName() and
      exists(Function calleeF | calleeF.getName() = calleeName and calleeLoc = calleeF.getLocation())
    )
    or
    exists(PropAccess prop |
      call.getCallee() = prop and
      calleeName = prop.getPropertyName() and
      exists(MethodDefinition calleeM | calleeM.getName() = calleeName and calleeLoc = calleeM.getLocation())
    )
    or
    (
      not exists(Identifier id | call.getCallee() = id) and
      not exists(PropAccess prop | call.getCallee() = prop) and
      calleeName = call.getCallee().toString() and
      calleeLoc = call.getLocation()
    )
  )

  and callerName != ""
  and calleeName != ""

select call,
  callerName + " (" + callerLoc.toString() + ")"
  + " -> " +
  calleeName + " (" + calleeLoc.toString() + ")"
  + " (at " + call.getLocation().toString() + ")"

```

### .github_automation/callgraph/codeql-queries/codeql-pack.lock.yml
```yml
---
lockVersion: 1.0.0
dependencies:
  codeql/dataflow:
    version: 2.0.10
  codeql/javascript-all:
    version: 2.6.6
  codeql/mad:
    version: 1.0.26
  codeql/regex:
    version: 1.0.26
  codeql/ssa:
    version: 2.0.2
  codeql/threat-models:
    version: 1.0.26
  codeql/tutorial:
    version: 1.0.26
  codeql/typetracking:
    version: 2.0.10
  codeql/util:
    version: 2.0.13
  codeql/xml:
    version: 1.0.26
  codeql/yaml:
    version: 1.0.26
compiled: false

```

### .github_automation/callgraph/codeql-queries/qlpack.yml
```yml

name: tonejs-mml-to-json/callgraph-queries
version: 1.0.0
dependencies:
  codeql/javascript-all: "*"

```

### .github_automation/callgraph/config/example.json
```json
[
"src/main.js"
]

```

### .github_automation/callgraph/docs/callgraph.md
```md
# 関数呼び出しグラフ生成システム

※AI生成で過不足があります。新仕様を反映していません

このドキュメントでは、GitHub ActionsとCodeQLを使用してJavaScript/TypeScriptコードの関数呼び出しグラフを自動生成するシステムについて説明します。

## 概要

このシステムは以下の機能を提供します：

1. **自動解析**: 毎日午前5時（JST）にCodeQLを使ってコードを解析
2. **スマートトリガー**: 過去24時間にユーザーのコミットがある場合のみ実行
3. **可視化**: Cytoscape.jsを使ったインタラクティブなグラフ表示
4. **自動更新**: 生成されたグラフを自動的にリポジトリに保存

## システム構成

### ファイル構成

```
.github/
├── workflows/
│   └── callgraph.yml          # メインワークフロー
├── codeql-queries/
│   └── callgraph.ql           # CodeQLカスタムクエリ
├── scripts/
│   └── convert-to-html.cjs    # CSV→HTML変換スクリプト
└── docs/
    └── callgraph.md           # このドキュメント

generated-docs/
└── callgraph.html             # 生成されたグラフ（自動生成）
```

### 処理フロー

1. **コミットチェック**
   - 過去24時間のコミット履歴を確認
   - GitHub Actionsボット以外のコミットがある場合のみ続行

2. **CodeQL解析**
   - JavaScript/TypeScriptファイルを対象に解析実行
   - カスタムクエリで関数呼び出し関係を抽出

3. **データ変換**
   - CodeQLの結果（SARIF形式）からCSVデータを生成
   - 「呼び出し元 -> 呼び出し先」の形式でペアを抽出

4. **グラフ生成**
   - CSVデータをCytoscape.js用のJSONに変換
   - インタラクティブなHTMLファイルを生成

5. **結果保存**
   - 生成されたHTMLファイルをリポジトリにコミット・プッシュ

## CodeQLクエリの詳細

### `callgraph.ql`の機能

- **対象**: JavaScript/TypeScriptの関数呼び出し
- **抽出内容**: 関数名レベルでの呼び出し関係
- **除外項目**:
  - 匿名関数
  - 名前のない関数
- **含む項目**:
  - 直接的な関数呼び出し
  - メソッド呼び出し
  - 自己再帰呼び出し

### クエリの仕組み

```javascript
// 主要な検出ロジック
from DataFlow::CallNode call, Function caller, Function callee
where
  caller = call.getEnclosingFunction() and
  callee = call.getACallee() and
  exists(caller.getName()) and
  exists(callee.getName())
```

## 生成されるHTMLの機能

### インタラクティブ機能

- **ドラッグ**: ノード（関数）の位置調整
- **ズーム**: マウスホイールでのズームイン/アウト
- **ハイライト**: ノードクリックで関連する呼び出し関係を強調
- **レイアウト**: 自動的な美しいグラフレイアウト

### 操作ボタン

- **Fit to Screen**: グラフ全体を画面に収める
- **Reset Layout**: レイアウトを初期状態に戻す
- **Toggle Labels**: 関数名の表示/非表示切り替え

### 統計情報

- 総関数数
- 総呼び出し関係数
- 生成日時

## 設定のカスタマイズ

### 実行タイミングの変更

`.github/workflows/callgraph.yml`の`cron`設定を変更：

```yaml
schedule:
  - cron: '0 20 * * *'  # 毎日JST 5:00 (UTC 20:00前日)
```

### 解析対象の変更

CodeQLクエリ（`callgraph.ql`）を編集して：

- 特定のファイルやディレクトリを除外
- 追加の関数呼び出しパターンを含める
- フィルタリング条件を調整

### グラフ表示のカスタマイズ

`convert-to-html.cjs`のスタイル設定を変更：

- ノードの色やサイズ
- エッジの太さや色
- レイアウトアルゴリズム
- UI要素の表示/非表示

## トラブルシューティング

### よくある問題

1. **CodeQL解析が失敗する**
   - JavaScript/TypeScriptファイルが正しく認識されているか確認
   - カスタムクエリの構文エラーをチェック

2. **グラフが空になる**
   - 対象コードに名前付き関数が存在するか確認
   - CodeQLクエリの条件が厳しすぎないかチェック

3. **HTMLが生成されない**
   - CSVファイルの形式が正しいか確認
   - Node.jsスクリプトのエラーログを確認

### デバッグ方法

1. **GitHub Actionsログの確認**
   - ワークフローの各ステップの実行結果を確認
   - エラーメッセージから問題の特定

2. **ローカルテスト**
   - `convert-to-html.cjs`を手動実行してテスト
   - サンプルCSVファイルでの動作確認

3. **CodeQLクエリテスト**
   - VS CodeのCodeQL拡張機能でクエリをテスト
   - 小さなサンプルコードでの動作確認

## セキュリティ考慮事項

- **権限**: ワークフローには最小限の権限のみ付与
- **依存関係**: 外部パッケージはCDNから読み込み（ローカルインストールなし）
- **データ**: 関数名のみを抽出（ソースコードの内容は含まない）

## 今後の拡張可能性

- **言語サポート**: Python、Java等への対応
- **メトリクス**: 複雑度分析、依存関係の深さ測定
- **通知**: Slack/Teams等への結果通知
- **比較**: 前回との差分表示機能
- **エクスポート**: PNG、SVG等の画像形式での出力

---

このシステムにより、プロジェクトのコード構造を視覚的に把握し、リファクタリングや新機能開発の際の影響範囲を理解しやすくなります。

```

### .github_automation/callgraph/presets/callgraph.js
```js
// callgraph.js
// このファイルは generateHTML.cjs から分離したCytoscape.jsの描画・操作ロジックです。
// 依存: graphData, repo, branch（グローバル変数としてHTML側で宣言されていること）

// HTMLエスケープ関数（グローバルで利用可能に）
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (c) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c];
    });
}

// ダークモード検出
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// ダークモード用のカラーパレット
const colors = {
    light: {
        node: '#2196F3',
        nodeBorder: '#1976D2',
        nodeSelected: '#FF5722',
        nodeSelectedBorder: '#D84315',
        nodeWithLocation: '#4CAF50',
        edge: '#666',
        edgeSelected: '#FF5722',
        edgeWithLocation: '#4CAF50',
        textBackground: 'white'
    },
    dark: {
        node: '#64B5F6',
        nodeBorder: '#42A5F5',
        nodeSelected: '#FF7043',
        nodeSelectedBorder: '#FF5722',
        nodeWithLocation: '#66BB6A',
        edge: '#999',
        edgeSelected: '#FF7043',
        edgeWithLocation: '#66BB6A',
        textBackground: '#1e1e1e'
    }
};

const currentColors = isDarkMode ? colors.dark : colors.light;

const layoutNames = ['breadthfirst', 'concentric', 'cose', 'grid', 'circle'];
let currentLayoutIndex = 0;

const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
        ...graphData.nodes.map(node => ({
            data: {
                id: node.id,
                label: node.label,
                locations: node.locations || [],
                hasLocationInfo: node.hasLocationInfo || false,
                hasCalleeLocationInfo: node.hasCalleeLocationInfo || false,
                calleeFncDef: node.calleeFncDef || false,
            }
        })),
        ...graphData.edges.map(edge => ({
            data: {
                id: edge.id,
                source: edge.source,
                target: edge.target,
                file: edge.file || '',
                line: edge.line || 0,
                column: edge.column || 0,
                location: edge.location || '',
                hasLocationInfo: edge.hasLocationInfo || false,
                hasCalleeLocationInfo: edge.hasCalleeLocationInfo || false
            }
        }))
    ],
    style: [
        { selector: 'node', style: {
            'background-color': currentColors.node,
            'label': 'data(label)',
            'color': isDarkMode ? '#ffffff' : '#333',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '12px',
            'font-weight': 'bold',
            'text-wrap': 'wrap',
            'text-max-width': '100px',
            'width': '70px',
            'height': '70px',
            'border-width': '2px',
            'border-color': currentColors.nodeBorder,
            'text-background-color': currentColors.textBackground,
            'text-background-opacity': 0.8,
            'text-background-padding': '3px'
        }},
        { selector: 'node:selected', style: {
            'background-color': currentColors.nodeSelected,
            'border-color': currentColors.nodeSelectedBorder
        }},
        { selector: 'node[hasLocationInfo = true]', style: {
            'border-width': '3px',
            'border-color': currentColors.nodeWithLocation
        }},
        { selector: 'node[hasCalleeLocationInfo = true]', style: {
            'border-width': '4px',
            'border-color': '#FF9800'
        }},
        { selector: 'node[hasCalleeLocationInfo = false]', style: {
            'border-style': 'dotted',
            'border-width': '2px',
            'opacity': 0.6
        }},
        { selector: 'edge', style: {
            'width': 2,
            'line-color': currentColors.edge,
            'target-arrow-color': currentColors.edge,
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'arrow-scale': 1.2
        }},
        { selector: 'edge:selected', style: {
            'line-color': currentColors.edgeSelected,
            'target-arrow-color': currentColors.edgeSelected,
            'width': 3
        }},
        { selector: 'edge[hasLocationInfo = true]', style: {
            'line-color': currentColors.edgeWithLocation,
            'target-arrow-color': currentColors.edgeWithLocation
        }},
        { selector: 'node[hasLocationInfo = false]', style: {
            'border-style': 'dashed',
            'border-width': '2px',
            'opacity': 0.8
        }},
        { selector: 'edge[hasCalleeLocationInfo = true]', style: {
            'line-color': '#FF9800',
            'target-arrow-color': '#FF9800',
            'width': 3
        }},
        { selector: 'edge[hasLocationInfo = false]', style: {
            'line-style': 'dashed',
            'opacity': 0.7
        }}
    ],
    layout: getLayoutConfig('cose')
});

function getLayoutConfig(name) {
    switch (name) {
        case 'cose':
            return {
                name: 'cose',
                fit: true,          // ←もう一度trueに戻す（座標がズレない）
                padding: 50,        // 余白は控えめ
                animate: true,
                randomize: false,   // ←初期配置を固定して安定させる
                nodeRepulsion: 8000, // ←ほどよい反発（200000は強すぎた）
                idealEdgeLength: 120, // ←適度な長さに戻す
                edgeElasticity: 0.45,
                gravity: 1.2,        // ←少し強めて中央に集める
                numIter: 1000,       // ほどほどに
                componentSpacing: 80,
                nestingFactor: 0.9
            };
        case 'breadthfirst':
            return {
                name: 'breadthfirst', fit: true, padding: 30, directed: true, animate: true, spacingFactor: 1.2
            };
        case 'concentric':
            return {
                name: 'concentric', fit: true, padding: 30, animate: true,
                concentric: function(node) { return node.degree(); },
                levelWidth: function(nodes) { return 2; }
            };
        case 'grid':
            return {
                name: 'grid',
                fit: true,
                padding: 30,
                animate: true,
                avoidOverlap: true,
                spacingFactor: 1.2,
                rows: undefined, // 自動計算
                cols: undefined
            };
        case 'circle':
            return {
                name: 'circle',
                fit: true,
                padding: 30,
                animate: true,
                radius: 200,
                ready: function() {
                    placeCentralNode();
                }
            };
        default:
            return {
                name: 'circle', fit: true, padding: 30, animate: true, radius: 200
            };
    }
}

function placeCentralNode() {
    // エッジ数が一番多いノードを探す
    let maxDegreeNode = cy.nodes().max(function(node) {
        return node.degree(); // degree() = in+outの合計
    }).ele;

    if (maxDegreeNode.nonempty()) {
        // 中央に配置（画面中央座標を取得して移動）
        const centerPos = { x: cy.width() / 2, y: cy.height() / 2 };
        maxDegreeNode.position(centerPos);
        maxDegreeNode.lock(); // レイアウトで動かないよう固定
    }
}

cy.on('tap', 'node', function(evt) {
    const node = evt.target;
    const data = node.data();
    showNodeInfo(data);
});

cy.on('tap', 'edge', function(evt) {
    const edge = evt.target;
    const data = edge.data();
    showEdgeInfo(data);
});

cy.on('tap', function(evt) {
    if (evt.target === cy) {
        hideInfoPanel();
    }
});

function showNodeInfo(data) {
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('info-content');
    let html = '<div class="info-title">Function: ' + data.label + '</div>';
    if (data.hasCalleeLocationInfo && data.calleeFncDef) {
        // calleeの関数定義のソースコードを1行表示
        // html += '<p><strong>✓ This function has source location info</strong></p>'; // コメントアウト理由 : かわりに calleeFncDef を表示しているので
        // html += '<div style="margin-bottom:6px;font-size:13px;color:#888">'; // 備忘、888だと暗い
        html += '<div style="margin-bottom:6px;font-size:13px;color:#EEE">'; // 備忘、EEEだとダークモードならOK、今後はライトモードとダークモードの切り替えに対応予定
        html += '<div class="location-item"><div><small>';
        html += '<pre class="source-line">' + escapeHtml(data.calleeFncDef) + '</pre>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
      } else {
        html += '<p><strong>⚠ This function has NO source location info</strong></p>';
        html += '<p><small>匿名関数、動的関数、または外部ライブラリの関数である可能性があります。</small></p>';
    }
    if (data.hasLocationInfo && data.locations && data.locations.length > 0) {
        html += '<h4>Callers:</h4>';
        data.locations.forEach(loc => {
            const githubURL = generateGitHubURL(loc.file, loc.line);
            html += '<div class="location-item">';
            html += '<div class="location-file">' + loc.file + ':' + loc.line + ':' + loc.column + '</div>';
            html += '<div><small>Type: ' + loc.type + '</small></div>';
            if (loc.sourceLine) {
                html += '<pre class="source-line">' + escapeHtml(loc.sourceLine) + '</pre>';
            }
            if (githubURL) {
                html += '<div><a href="' + githubURL + '" target="_blank" class="location-link">View on GitHub</a></div>';
            }
            html += '</div>';
        });
    } else {
        html += '<p>呼び出し位置情報がありません</p>';
    }
    content.innerHTML = html;
    showInfoPanel();
}

function showEdgeInfo(data) {
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('info-content');
    let html = '<div class="info-title">Call: ' + data.source + ' → ' + data.target + '</div>';
    html += '<div style="margin-bottom:6px;font-size:13px;color:#888">';
    html += '<b>source:</b> <span style="color:#1976D2">' + data.source + '</span> &nbsp; ';
    html += '<b>target:</b> <span style="color:#FF9800">' + data.target + '</span>';
    html += '</div>';
    if (data.hasCalleeLocationInfo) {
        html += '<p><strong>✓ Target function (' + data.target + ') has source location</strong></p>';
    } else {
        html += '<p><strong>⚠ Target function (' + data.target + ') has NO source location</strong></p>';
        html += '<p><small>呼び出し先が匿名関数や外部ライブラリ関数の可能性があります。</small></p>';
    }
    if (data.hasLocationInfo && data.location) {
        html += '<h4>Call Location:</h4>';
        html += '<div class="edge-info">';
        html += '<div class="location-file">' + data.location + '</div>';
        if (data.sourceLine) {
            html += '<pre class="source-line">' + escapeHtml(data.sourceLine) + '</pre>';
        }
        const githubURL = generateGitHubURL(data.file, data.line);
        if (githubURL) {
            html += '<div><a href="' + githubURL + '" target="_blank" class="location-link">View on GitHub</a></div>';
        }
        html += '</div>';
    } else {
        html += '<p>呼び出し位置情報がありません</p>';
        html += '<p><small>この呼び出しは動的に発生するか、CodeQLで検出できない方法で行われている可能性があります。</small></p>';
    }
// HTMLエスケープ関数
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (c) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c];
    });
}
    content.innerHTML = html;
    showInfoPanel();
}

function hideInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.add('hidden');
}

function showInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.remove('hidden');
}

function toggleInfoPanel() {
    const panel = document.getElementById('info-panel');
    const isHidden = panel.classList.contains('hidden');
    if (isHidden) {
        panel.classList.remove('hidden');
        panel.style.transform = 'scale(1.02)';
        setTimeout(() => { panel.style.transform = 'scale(1)'; }, 200);
    } else {
        panel.classList.add('hidden');
    }
}

function generateGitHubURL(file, line) {
    if (!repo || !file) return null;
    let normalizedFile = file.replace(/\\\\/g, '/');
    if (normalizedFile.includes('/src/')) {
        const srcIndex = normalizedFile.lastIndexOf('/src/');
        normalizedFile = normalizedFile.substring(srcIndex + 1);
    } else if (normalizedFile.startsWith('src/')) {
        normalizedFile = normalizedFile;
    } else {
        const lastSlash = normalizedFile.lastIndexOf('/');
        if (lastSlash !== -1) {
            normalizedFile = normalizedFile.substring(lastSlash + 1);
        }
    }
    return 'https://github.com/' + repo + '/blob/' + branch + '/' + normalizedFile + '#L' + line;
}

function resetLayout() {
    currentLayoutIndex = 0;
    const layout = cy.layout(getLayoutConfig(layoutNames[currentLayoutIndex]));
    layout.run();

    watchNodeMovementAndFixOverlapsWrap();
}

function watchNodeMovementAndFixOverlapsWrap() {
    watchNodeMovementAndFixOverlaps(100, 20);
}

let movementWatcherTimer;

/**
 * ノードの動きを監視して、動きが止まったら重なり修正をする関数
 * @param {number} interval - チェック間隔(ms)
 * @param {number} maxChecks - 最大チェック回数
 */
function watchNodeMovementAndFixOverlaps(interval, maxChecks) {
    let prevPositions = new Map();
    let checks = 0;
    let stableCount = 0;
    const movementThreshold = 1.0; // 動き判定閾値(px)
    const stableThreshold = 3;     // 何回連続で動かないと止まった判定するか

    // 初期ノード位置を記録
    cy.nodes().forEach(node => {
        prevPositions.set(node.id(), {...node.position()});
    });

    if (movementWatcherTimer) {
        clearInterval(movementWatcherTimer);
        movementWatcherTimer = null;
    }

    movementWatcherTimer = setInterval(() => {
        let moving = false;

        cy.nodes().forEach(node => {
            const prevPos = prevPositions.get(node.id());
            const currentPos = node.position();
            if (Math.abs(currentPos.x - prevPos.x) > movementThreshold || Math.abs(currentPos.y - prevPos.y) > movementThreshold) {
                moving = true;
                prevPositions.set(node.id(), {...currentPos});
            }
        });

        if (!moving) {
            stableCount++;
        } else {
            stableCount = 0;
        }

        checks++;

        if (stableCount >= stableThreshold || checks >= maxChecks) {
            clearInterval(movementWatcherTimer);
            movementWatcherTimer = null;
            if (!moving) {
              console.log('ノードの動きが止まった！重なり修正開始 (check' + checks + '回)');
            } else {
              console.log('時間切れ！重なり修正開始');
            }

            resolveNodeOverlaps(100, 0.2, 10);
            cy.fit();
        }
    }, interval);
}

/**
 * ノード同士の重なりを軽減する
 * 反発力ベースで自然に押しのける
 * @param {number} minDistance - ノード間の最小距離(px)
 * @param {number} shiftRatio - 移動の強さ(0~1)
 * @param {number} iterations - 繰り返し回数
 */
function resolveNodeOverlaps(minDistance, shiftRatio, iterations) {
    for (let iter = 0; iter < iterations; iter++) {
        cy.nodes().forEach(node => {
            const pos = node.position();
            
            cy.nodes().forEach(other => {
                if (node.id() === other.id()) return; // 自分自身はスキップ

                const otherPos = other.position();
                const dx = pos.x - otherPos.x;
                const dy = pos.y - otherPos.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < minDistance && dist > 0.0001) {
                    // 反発力の大きさ（距離が近いほど強く押す）
                    const force = (1 - dist / minDistance) * shiftRatio;

                    // 正規化ベクトル（方向だけを表す）
                    const nx = dx / dist;
                    const ny = dy / dist;

                    // お互いを少しずつ押しのける（対称に動かす）
                    node.position({
                        x: pos.x + nx * force * (minDistance / 2),
                        y: pos.y + ny * force * (minDistance / 2)
                    });

                    other.position({
                        x: otherPos.x - nx * force * (minDistance / 2),
                        y: otherPos.y - ny * force * (minDistance / 2)
                    });
                }
            });
        });
    }
}

function switchLayout(button) {
    resetNodeStates();
    currentLayoutIndex = (currentLayoutIndex + 1) % layoutNames.length;
    const layoutName = layoutNames[currentLayoutIndex];
    const layout = cy.layout(getLayoutConfig(layoutName));
    layout.run();
    if (button) button.textContent = 'レイアウト切替 (' + layoutName + ')';

    watchNodeMovementAndFixOverlapsWrap();
}

function resetNodeStates() {
    cy.nodes().unlock();          // すべてのロック解除
    cy.nodes().positions(() => {  // 古い座標をクリア（nullにしておく）
        return null;
    });
}

function fitToContent() {
    cy.fit();
}

let labelsVisible = true;
let calleeLocationFilterEnabled = false;

function toggleNodeLabels() {
    labelsVisible = !labelsVisible;
    cy.style()
        .selector('node')
        .style('label', labelsVisible ? 'data(label)' : '')
        .update();
}

function toggleCalleeLocationFilter() {
    calleeLocationFilterEnabled = !calleeLocationFilterEnabled;
    const button = event.target;
    if (calleeLocationFilterEnabled) {
        cy.nodes('[hasCalleeLocationInfo = false]').style('display', 'none');
        cy.edges('[hasCalleeLocationInfo = false]').style('display', 'none');
        button.textContent = 'Show No-Callee-Location';
        button.style.backgroundColor = '#FF5722';
    } else {
        cy.nodes().style('display', 'element');
        cy.edges().style('display', 'element');
        button.textContent = 'Hide No-Callee-Location';
        button.style.backgroundColor = '#2196F3';
    }
}

cy.ready(function() {
    resetLayout();
});

if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(function(e) {
        window.location.reload();
    });
}

```

### generated-docs/callgraph.js
```js
// callgraph.js
// このファイルは generateHTML.cjs から分離したCytoscape.jsの描画・操作ロジックです。
// 依存: graphData, repo, branch（グローバル変数としてHTML側で宣言されていること）

// HTMLエスケープ関数（グローバルで利用可能に）
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (c) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c];
    });
}

// ダークモード検出
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// ダークモード用のカラーパレット
const colors = {
    light: {
        node: '#2196F3',
        nodeBorder: '#1976D2',
        nodeSelected: '#FF5722',
        nodeSelectedBorder: '#D84315',
        nodeWithLocation: '#4CAF50',
        edge: '#666',
        edgeSelected: '#FF5722',
        edgeWithLocation: '#4CAF50',
        textBackground: 'white'
    },
    dark: {
        node: '#64B5F6',
        nodeBorder: '#42A5F5',
        nodeSelected: '#FF7043',
        nodeSelectedBorder: '#FF5722',
        nodeWithLocation: '#66BB6A',
        edge: '#999',
        edgeSelected: '#FF7043',
        edgeWithLocation: '#66BB6A',
        textBackground: '#1e1e1e'
    }
};

const currentColors = isDarkMode ? colors.dark : colors.light;

const layoutNames = ['breadthfirst', 'concentric', 'cose', 'grid', 'circle'];
let currentLayoutIndex = 0;

const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
        ...graphData.nodes.map(node => ({
            data: {
                id: node.id,
                label: node.label,
                locations: node.locations || [],
                hasLocationInfo: node.hasLocationInfo || false,
                hasCalleeLocationInfo: node.hasCalleeLocationInfo || false,
                calleeFncDef: node.calleeFncDef || false,
            }
        })),
        ...graphData.edges.map(edge => ({
            data: {
                id: edge.id,
                source: edge.source,
                target: edge.target,
                file: edge.file || '',
                line: edge.line || 0,
                column: edge.column || 0,
                location: edge.location || '',
                hasLocationInfo: edge.hasLocationInfo || false,
                hasCalleeLocationInfo: edge.hasCalleeLocationInfo || false
            }
        }))
    ],
    style: [
        { selector: 'node', style: {
            'background-color': currentColors.node,
            'label': 'data(label)',
            'color': isDarkMode ? '#ffffff' : '#333',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '12px',
            'font-weight': 'bold',
            'text-wrap': 'wrap',
            'text-max-width': '100px',
            'width': '70px',
            'height': '70px',
            'border-width': '2px',
            'border-color': currentColors.nodeBorder,
            'text-background-color': currentColors.textBackground,
            'text-background-opacity': 0.8,
            'text-background-padding': '3px'
        }},
        { selector: 'node:selected', style: {
            'background-color': currentColors.nodeSelected,
            'border-color': currentColors.nodeSelectedBorder
        }},
        { selector: 'node[hasLocationInfo = true]', style: {
            'border-width': '3px',
            'border-color': currentColors.nodeWithLocation
        }},
        { selector: 'node[hasCalleeLocationInfo = true]', style: {
            'border-width': '4px',
            'border-color': '#FF9800'
        }},
        { selector: 'node[hasCalleeLocationInfo = false]', style: {
            'border-style': 'dotted',
            'border-width': '2px',
            'opacity': 0.6
        }},
        { selector: 'edge', style: {
            'width': 2,
            'line-color': currentColors.edge,
            'target-arrow-color': currentColors.edge,
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'arrow-scale': 1.2
        }},
        { selector: 'edge:selected', style: {
            'line-color': currentColors.edgeSelected,
            'target-arrow-color': currentColors.edgeSelected,
            'width': 3
        }},
        { selector: 'edge[hasLocationInfo = true]', style: {
            'line-color': currentColors.edgeWithLocation,
            'target-arrow-color': currentColors.edgeWithLocation
        }},
        { selector: 'node[hasLocationInfo = false]', style: {
            'border-style': 'dashed',
            'border-width': '2px',
            'opacity': 0.8
        }},
        { selector: 'edge[hasCalleeLocationInfo = true]', style: {
            'line-color': '#FF9800',
            'target-arrow-color': '#FF9800',
            'width': 3
        }},
        { selector: 'edge[hasLocationInfo = false]', style: {
            'line-style': 'dashed',
            'opacity': 0.7
        }}
    ],
    layout: getLayoutConfig('cose')
});

function getLayoutConfig(name) {
    switch (name) {
        case 'cose':
            return {
                name: 'cose',
                fit: true,          // ←もう一度trueに戻す（座標がズレない）
                padding: 50,        // 余白は控えめ
                animate: true,
                randomize: false,   // ←初期配置を固定して安定させる
                nodeRepulsion: 8000, // ←ほどよい反発（200000は強すぎた）
                idealEdgeLength: 120, // ←適度な長さに戻す
                edgeElasticity: 0.45,
                gravity: 1.2,        // ←少し強めて中央に集める
                numIter: 1000,       // ほどほどに
                componentSpacing: 80,
                nestingFactor: 0.9
            };
        case 'breadthfirst':
            return {
                name: 'breadthfirst', fit: true, padding: 30, directed: true, animate: true, spacingFactor: 1.2
            };
        case 'concentric':
            return {
                name: 'concentric', fit: true, padding: 30, animate: true,
                concentric: function(node) { return node.degree(); },
                levelWidth: function(nodes) { return 2; }
            };
        case 'grid':
            return {
                name: 'grid',
                fit: true,
                padding: 30,
                animate: true,
                avoidOverlap: true,
                spacingFactor: 1.2,
                rows: undefined, // 自動計算
                cols: undefined
            };
        case 'circle':
            return {
                name: 'circle',
                fit: true,
                padding: 30,
                animate: true,
                radius: 200,
                ready: function() {
                    placeCentralNode();
                }
            };
        default:
            return {
                name: 'circle', fit: true, padding: 30, animate: true, radius: 200
            };
    }
}

function placeCentralNode() {
    // エッジ数が一番多いノードを探す
    let maxDegreeNode = cy.nodes().max(function(node) {
        return node.degree(); // degree() = in+outの合計
    }).ele;

    if (maxDegreeNode.nonempty()) {
        // 中央に配置（画面中央座標を取得して移動）
        const centerPos = { x: cy.width() / 2, y: cy.height() / 2 };
        maxDegreeNode.position(centerPos);
        maxDegreeNode.lock(); // レイアウトで動かないよう固定
    }
}

cy.on('tap', 'node', function(evt) {
    const node = evt.target;
    const data = node.data();
    showNodeInfo(data);
});

cy.on('tap', 'edge', function(evt) {
    const edge = evt.target;
    const data = edge.data();
    showEdgeInfo(data);
});

cy.on('tap', function(evt) {
    if (evt.target === cy) {
        hideInfoPanel();
    }
});

function showNodeInfo(data) {
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('info-content');
    let html = '<div class="info-title">Function: ' + data.label + '</div>';
    if (data.hasCalleeLocationInfo && data.calleeFncDef) {
        // calleeの関数定義のソースコードを1行表示
        // html += '<p><strong>✓ This function has source location info</strong></p>'; // コメントアウト理由 : かわりに calleeFncDef を表示しているので
        // html += '<div style="margin-bottom:6px;font-size:13px;color:#888">'; // 備忘、888だと暗い
        html += '<div style="margin-bottom:6px;font-size:13px;color:#EEE">'; // 備忘、EEEだとダークモードならOK、今後はライトモードとダークモードの切り替えに対応予定
        html += '<div class="location-item"><div><small>';
        html += '<pre class="source-line">' + escapeHtml(data.calleeFncDef) + '</pre>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
      } else {
        html += '<p><strong>⚠ This function has NO source location info</strong></p>';
        html += '<p><small>匿名関数、動的関数、または外部ライブラリの関数である可能性があります。</small></p>';
    }
    if (data.hasLocationInfo && data.locations && data.locations.length > 0) {
        html += '<h4>Callers:</h4>';
        data.locations.forEach(loc => {
            const githubURL = generateGitHubURL(loc.file, loc.line);
            html += '<div class="location-item">';
            html += '<div class="location-file">' + loc.file + ':' + loc.line + ':' + loc.column + '</div>';
            html += '<div><small>Type: ' + loc.type + '</small></div>';
            if (loc.sourceLine) {
                html += '<pre class="source-line">' + escapeHtml(loc.sourceLine) + '</pre>';
            }
            if (githubURL) {
                html += '<div><a href="' + githubURL + '" target="_blank" class="location-link">View on GitHub</a></div>';
            }
            html += '</div>';
        });
    } else {
        html += '<p>呼び出し位置情報がありません</p>';
    }
    content.innerHTML = html;
    showInfoPanel();
}

function showEdgeInfo(data) {
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('info-content');
    let html = '<div class="info-title">Call: ' + data.source + ' → ' + data.target + '</div>';
    html += '<div style="margin-bottom:6px;font-size:13px;color:#888">';
    html += '<b>source:</b> <span style="color:#1976D2">' + data.source + '</span> &nbsp; ';
    html += '<b>target:</b> <span style="color:#FF9800">' + data.target + '</span>';
    html += '</div>';
    if (data.hasCalleeLocationInfo) {
        html += '<p><strong>✓ Target function (' + data.target + ') has source location</strong></p>';
    } else {
        html += '<p><strong>⚠ Target function (' + data.target + ') has NO source location</strong></p>';
        html += '<p><small>呼び出し先が匿名関数や外部ライブラリ関数の可能性があります。</small></p>';
    }
    if (data.hasLocationInfo && data.location) {
        html += '<h4>Call Location:</h4>';
        html += '<div class="edge-info">';
        html += '<div class="location-file">' + data.location + '</div>';
        if (data.sourceLine) {
            html += '<pre class="source-line">' + escapeHtml(data.sourceLine) + '</pre>';
        }
        const githubURL = generateGitHubURL(data.file, data.line);
        if (githubURL) {
            html += '<div><a href="' + githubURL + '" target="_blank" class="location-link">View on GitHub</a></div>';
        }
        html += '</div>';
    } else {
        html += '<p>呼び出し位置情報がありません</p>';
        html += '<p><small>この呼び出しは動的に発生するか、CodeQLで検出できない方法で行われている可能性があります。</small></p>';
    }
// HTMLエスケープ関数
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (c) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c];
    });
}
    content.innerHTML = html;
    showInfoPanel();
}

function hideInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.add('hidden');
}

function showInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.remove('hidden');
}

function toggleInfoPanel() {
    const panel = document.getElementById('info-panel');
    const isHidden = panel.classList.contains('hidden');
    if (isHidden) {
        panel.classList.remove('hidden');
        panel.style.transform = 'scale(1.02)';
        setTimeout(() => { panel.style.transform = 'scale(1)'; }, 200);
    } else {
        panel.classList.add('hidden');
    }
}

function generateGitHubURL(file, line) {
    if (!repo || !file) return null;
    let normalizedFile = file.replace(/\\\\/g, '/');
    if (normalizedFile.includes('/src/')) {
        const srcIndex = normalizedFile.lastIndexOf('/src/');
        normalizedFile = normalizedFile.substring(srcIndex + 1);
    } else if (normalizedFile.startsWith('src/')) {
        normalizedFile = normalizedFile;
    } else {
        const lastSlash = normalizedFile.lastIndexOf('/');
        if (lastSlash !== -1) {
            normalizedFile = normalizedFile.substring(lastSlash + 1);
        }
    }
    return 'https://github.com/' + repo + '/blob/' + branch + '/' + normalizedFile + '#L' + line;
}

function resetLayout() {
    currentLayoutIndex = 0;
    const layout = cy.layout(getLayoutConfig(layoutNames[currentLayoutIndex]));
    layout.run();

    watchNodeMovementAndFixOverlapsWrap();
}

function watchNodeMovementAndFixOverlapsWrap() {
    watchNodeMovementAndFixOverlaps(100, 20);
}

let movementWatcherTimer;

/**
 * ノードの動きを監視して、動きが止まったら重なり修正をする関数
 * @param {number} interval - チェック間隔(ms)
 * @param {number} maxChecks - 最大チェック回数
 */
function watchNodeMovementAndFixOverlaps(interval, maxChecks) {
    let prevPositions = new Map();
    let checks = 0;
    let stableCount = 0;
    const movementThreshold = 1.0; // 動き判定閾値(px)
    const stableThreshold = 3;     // 何回連続で動かないと止まった判定するか

    // 初期ノード位置を記録
    cy.nodes().forEach(node => {
        prevPositions.set(node.id(), {...node.position()});
    });

    if (movementWatcherTimer) {
        clearInterval(movementWatcherTimer);
        movementWatcherTimer = null;
    }

    movementWatcherTimer = setInterval(() => {
        let moving = false;

        cy.nodes().forEach(node => {
            const prevPos = prevPositions.get(node.id());
            const currentPos = node.position();
            if (Math.abs(currentPos.x - prevPos.x) > movementThreshold || Math.abs(currentPos.y - prevPos.y) > movementThreshold) {
                moving = true;
                prevPositions.set(node.id(), {...currentPos});
            }
        });

        if (!moving) {
            stableCount++;
        } else {
            stableCount = 0;
        }

        checks++;

        if (stableCount >= stableThreshold || checks >= maxChecks) {
            clearInterval(movementWatcherTimer);
            movementWatcherTimer = null;
            if (!moving) {
              console.log('ノードの動きが止まった！重なり修正開始 (check' + checks + '回)');
            } else {
              console.log('時間切れ！重なり修正開始');
            }

            resolveNodeOverlaps(100, 0.2, 10);
            cy.fit();
        }
    }, interval);
}

/**
 * ノード同士の重なりを軽減する
 * 反発力ベースで自然に押しのける
 * @param {number} minDistance - ノード間の最小距離(px)
 * @param {number} shiftRatio - 移動の強さ(0~1)
 * @param {number} iterations - 繰り返し回数
 */
function resolveNodeOverlaps(minDistance, shiftRatio, iterations) {
    for (let iter = 0; iter < iterations; iter++) {
        cy.nodes().forEach(node => {
            const pos = node.position();
            
            cy.nodes().forEach(other => {
                if (node.id() === other.id()) return; // 自分自身はスキップ

                const otherPos = other.position();
                const dx = pos.x - otherPos.x;
                const dy = pos.y - otherPos.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < minDistance && dist > 0.0001) {
                    // 反発力の大きさ（距離が近いほど強く押す）
                    const force = (1 - dist / minDistance) * shiftRatio;

                    // 正規化ベクトル（方向だけを表す）
                    const nx = dx / dist;
                    const ny = dy / dist;

                    // お互いを少しずつ押しのける（対称に動かす）
                    node.position({
                        x: pos.x + nx * force * (minDistance / 2),
                        y: pos.y + ny * force * (minDistance / 2)
                    });

                    other.position({
                        x: otherPos.x - nx * force * (minDistance / 2),
                        y: otherPos.y - ny * force * (minDistance / 2)
                    });
                }
            });
        });
    }
}

function switchLayout(button) {
    resetNodeStates();
    currentLayoutIndex = (currentLayoutIndex + 1) % layoutNames.length;
    const layoutName = layoutNames[currentLayoutIndex];
    const layout = cy.layout(getLayoutConfig(layoutName));
    layout.run();
    if (button) button.textContent = 'レイアウト切替 (' + layoutName + ')';

    watchNodeMovementAndFixOverlapsWrap();
}

function resetNodeStates() {
    cy.nodes().unlock();          // すべてのロック解除
    cy.nodes().positions(() => {  // 古い座標をクリア（nullにしておく）
        return null;
    });
}

function fitToContent() {
    cy.fit();
}

let labelsVisible = true;
let calleeLocationFilterEnabled = false;

function toggleNodeLabels() {
    labelsVisible = !labelsVisible;
    cy.style()
        .selector('node')
        .style('label', labelsVisible ? 'data(label)' : '')
        .update();
}

function toggleCalleeLocationFilter() {
    calleeLocationFilterEnabled = !calleeLocationFilterEnabled;
    const button = event.target;
    if (calleeLocationFilterEnabled) {
        cy.nodes('[hasCalleeLocationInfo = false]').style('display', 'none');
        cy.edges('[hasCalleeLocationInfo = false]').style('display', 'none');
        button.textContent = 'Show No-Callee-Location';
        button.style.backgroundColor = '#FF5722';
    } else {
        cy.nodes().style('display', 'element');
        cy.edges().style('display', 'element');
        button.textContent = 'Hide No-Callee-Location';
        button.style.backgroundColor = '#2196F3';
    }
}

cy.ready(function() {
    resetLayout();
});

if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(function(e) {
        window.location.reload();
    });
}

```

### .github_automation/callgraph/presets/style.css
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    flex-wrap: wrap;
    gap: 10px;
}

.header h1 {
    color: #333;
    margin: 0;
    font-size: 24px;
    transition: color 0.3s ease;
}

.stats-container {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.stats {
    background: white;
    padding: 10px 15px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    min-width: 80px;
}

.stat-value {
    font-size: 20px;
    font-weight: bold;
    color: #2196F3;
    margin-bottom: 2px;
}

.stat-label {
    font-size: 12px;
    color: #666;
    transition: color 0.3s ease;
}

.main-container {
    display: flex;
    gap: 15px;
    height: calc(100vh - 120px);
    min-height: 500px;
    position: relative;
}

.graph-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0; /* flexアイテムのはみ出しを防ぐ */
}

#cy {
    width: 100%;
    flex: 1;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.controls {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
}

.control-button {
    background: #2196F3;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
    transition: background-color 0.3s ease;
}

.control-button:hover {
    background: #1976D2;
}

.info-panel {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    width: 320px;
    max-width: 100vw;
    max-height: 100%;
    overflow-y: auto;
    transition: all 0.3s ease;
    flex-shrink: 0;
    box-sizing: border-box;
}

.info-panel.hidden {
    width: 0;
    padding: 0;
    overflow: hidden;
    min-width: 0;
}

.info-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
    transition: color 0.3s ease;
}

.location-item {
    background: #f8f9fa;
    padding: 8px 12px;
    margin: 5px 0;
    border-radius: 4px;
    border-left: 4px solid #2196F3;
    transition: background-color 0.3s ease;
}

.location-file {
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 13px;
    color: #666;
    transition: color 0.3s ease;
}

.location-link {
    color: #2196F3;
    text-decoration: none;
    font-weight: bold;
}

.location-link:hover {
    text-decoration: underline;
}

.edge-info {
    background: #e3f2fd;
    padding: 8px 12px;
    margin: 5px 0;
    border-radius: 4px;
    border-left: 4px solid #1976D2;
    transition: background-color 0.3s ease;
}

.generated-time {
    text-align: center;
    color: #999;
    font-size: 11px;
    margin-top: 10px;
    transition: color 0.3s ease;
}

/* レスポンシブデザイン */
@media (max-width: 1024px) {
    .main-container {
        flex-direction: column;
        height: auto;
        min-height: 400px;
    }

    .info-panel {
        width: 100% !important;
        max-height: 300px;
        order: 2;
    }

    .info-panel.hidden {
        height: 0;
        padding: 0;
        min-height: 0;
    }

    .graph-container {
        order: 1;
        min-height: 400px;
    }
}

@media (max-width: 768px) {
    .header {
        flex-direction: column;
        text-align: center;
    }

    .stats-container {
        justify-content: center;
    }

    .controls {
        justify-content: center;
    }

    .control-button {
        padding: 6px 12px;
        font-size: 12px;
    }
}

/* ダークモード対応 */
@media (prefers-color-scheme: dark) {
    body {
        background-color: #121212;
        color: #e0e0e0;
    }

    .header h1 {
        color: #ffffff;
    }

    .stats {
        background: #1e1e1e;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .stat-label {
        color: #b0b0b0;
    }

    #cy {
        background-color: #1e1e1e;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }

    .control-button {
        background: #2196F3;
    }

    .control-button:hover {
        background: #1976D2;
    }

    .info-panel {
        background: #1e1e1e;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .info-title {
        color: #ffffff;
    }

    .location-item {
        background: #2a2a2a;
    }

    .location-file {
        color: #b0b0b0;
    }

    .edge-info {
        background: #1a2d3a;
    }

    .generated-time {
        color: #888;
    }
}

```

### generated-docs/style.css
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    flex-wrap: wrap;
    gap: 10px;
}

.header h1 {
    color: #333;
    margin: 0;
    font-size: 24px;
    transition: color 0.3s ease;
}

.stats-container {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.stats {
    background: white;
    padding: 10px 15px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    min-width: 80px;
}

.stat-value {
    font-size: 20px;
    font-weight: bold;
    color: #2196F3;
    margin-bottom: 2px;
}

.stat-label {
    font-size: 12px;
    color: #666;
    transition: color 0.3s ease;
}

.main-container {
    display: flex;
    gap: 15px;
    height: calc(100vh - 120px);
    min-height: 500px;
    position: relative;
}

.graph-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0; /* flexアイテムのはみ出しを防ぐ */
}

#cy {
    width: 100%;
    flex: 1;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.controls {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
}

.control-button {
    background: #2196F3;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
    transition: background-color 0.3s ease;
}

.control-button:hover {
    background: #1976D2;
}

.info-panel {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    width: 320px;
    max-width: 100vw;
    max-height: 100%;
    overflow-y: auto;
    transition: all 0.3s ease;
    flex-shrink: 0;
    box-sizing: border-box;
}

.info-panel.hidden {
    width: 0;
    padding: 0;
    overflow: hidden;
    min-width: 0;
}

.info-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
    transition: color 0.3s ease;
}

.location-item {
    background: #f8f9fa;
    padding: 8px 12px;
    margin: 5px 0;
    border-radius: 4px;
    border-left: 4px solid #2196F3;
    transition: background-color 0.3s ease;
}

.location-file {
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 13px;
    color: #666;
    transition: color 0.3s ease;
}

.location-link {
    color: #2196F3;
    text-decoration: none;
    font-weight: bold;
}

.location-link:hover {
    text-decoration: underline;
}

.edge-info {
    background: #e3f2fd;
    padding: 8px 12px;
    margin: 5px 0;
    border-radius: 4px;
    border-left: 4px solid #1976D2;
    transition: background-color 0.3s ease;
}

.generated-time {
    text-align: center;
    color: #999;
    font-size: 11px;
    margin-top: 10px;
    transition: color 0.3s ease;
}

/* レスポンシブデザイン */
@media (max-width: 1024px) {
    .main-container {
        flex-direction: column;
        height: auto;
        min-height: 400px;
    }

    .info-panel {
        width: 100% !important;
        max-height: 300px;
        order: 2;
    }

    .info-panel.hidden {
        height: 0;
        padding: 0;
        min-height: 0;
    }

    .graph-container {
        order: 1;
        min-height: 400px;
    }
}

@media (max-width: 768px) {
    .header {
        flex-direction: column;
        text-align: center;
    }

    .stats-container {
        justify-content: center;
    }

    .controls {
        justify-content: center;
    }

    .control-button {
        padding: 6px 12px;
        font-size: 12px;
    }
}

/* ダークモード対応 */
@media (prefers-color-scheme: dark) {
    body {
        background-color: #121212;
        color: #e0e0e0;
    }

    .header h1 {
        color: #ffffff;
    }

    .stats {
        background: #1e1e1e;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .stat-label {
        color: #b0b0b0;
    }

    #cy {
        background-color: #1e1e1e;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }

    .control-button {
        background: #2196F3;
    }

    .control-button:hover {
        background: #1976D2;
    }

    .info-panel {
        background: #1e1e1e;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .info-title {
        color: #ffffff;
    }

    .location-item {
        background: #2a2a2a;
    }

    .location-file {
        color: #b0b0b0;
    }

    .edge-info {
        background: #1a2d3a;
    }

    .generated-time {
        color: #888;
    }
}

```

### .github_automation/callgraph/scripts/analyze-codeql.cjs
```cjs
#!/usr/bin/env node
/**
 * analyze-codeql.cjs
 *
 * 用途
 *  SARIFファイルを生成するための、CodeQL解析を行う。
 */

const { execSync } = require('child_process');
const path = require('path');

const dbPath = path.resolve('codeql-db');
if (!process.env.QUERIES) {
  console.error('環境変数 QUERIES が設定されていません。');
  process.exit(1);
}
const queriesPath = path.resolve(process.env.QUERIES);

// コマンドライン引数取得
const args = process.argv.slice(2);
const hasOverwrite = args.includes('--overwrite');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

try {
  if (args[0] === 'verify-config') {
    // DB作成のみ
    let createCmd = `codeql database create ${dbPath} --language=javascript --source-root=src`;
    if (hasOverwrite) createCmd += ' --overwrite';
    run(createCmd);
    console.log('CodeQL DB verified.');
  } else if (args[0] === 'analyze') {
    // DB作成+解析
    let createCmd = `codeql database create ${dbPath} --language=javascript --source-root=src`;
    if (hasOverwrite) createCmd += ' --overwrite';
    run(createCmd);
    run(`codeql database analyze ${dbPath} ${queriesPath} --format=sarifv2.1.0 --output=codeql-results.sarif`);
    console.log('CodeQL analysis completed.');
  } else if (args[0] === 'check-results') {
    // 結果ファイルの存在確認
    const fs = require('fs');
    if (fs.existsSync('codeql-results.sarif')) {
      console.log('CodeQL results found.');
    } else {
      throw new Error('codeql-results.sarif not found.');
    }
  } else if (args[0] === 'debug') {
    // デバッグ用: DBディレクトリの中身を表示
    const fs = require('fs');
    if (fs.existsSync(dbPath)) {
      console.log('DB contents:', fs.readdirSync(dbPath));
    } else {
      console.log('DB directory not found.');
    }
  } else {
    // デフォルト: analyze相当
    let createCmd = `codeql database create ${dbPath} --language=javascript --source-root=src`;
    if (hasOverwrite) createCmd += ' --overwrite';
    run(createCmd);
    run(`codeql database analyze ${dbPath} ${queriesPath} --format=sarifv2.1.0 --output=codeql-results.sarif`);
    console.log('CodeQL analysis completed.');
  }
} catch (e) {
  console.error('CodeQL解析に失敗:', e.message);
  process.exit(1);
}

```

### .github_automation/callgraph/scripts/callgraph-utils.cjs
```cjs
// ヘルパー関数群
// データ変換・GitHubリンク生成

const fs = require('fs');
const path = require('path');
const { getSourceLine, isValidSourceFile } = require('./common-utils.cjs');

// 注意：extractCallerinfo, extractCalleeinfo は、requireするかわりに、extractCallerinfo, extractCalleeinfo を引数で渡す設計にしてください。循環参照防止のためです。

function writeDebugCallerSourceLines(sarifFile, debugOutFile, extractCallerinfo, allowedFiles) {
  if (typeof extractCallerinfo !== 'function') {
    throw new Error('extractCallerinfo 関数を引数で渡してください');
  }
  if (!Array.isArray(allowedFiles) || allowedFiles.length === 0) {
    throw new Error('writeDebugCallerSourceLines: allowedFiles must be a non-empty array');
  }
  const results = extractCallerinfo(sarifFile, allowedFiles);
  try {
    fs.writeFileSync(debugOutFile, JSON.stringify(results, null, 2), 'utf8');
    return true;
  } catch (e) {
    return false;
  }
}

function writeDebugCalleeSourceLines(sarifFile, debugOutFile, extractCalleeinfo, allowedFiles) {
  if (typeof extractCalleeinfo !== 'function') {
    throw new Error('extractCalleeinfo 関数を引数で渡してください');
  }
  if (!Array.isArray(allowedFiles) || allowedFiles.length === 0) {
    throw new Error('writeDebugCalleeSourceLines: allowedFiles must be a non-empty array');
  }
  const results = extractCalleeinfo(sarifFile, allowedFiles);
  try {
    fs.writeFileSync(debugOutFile, JSON.stringify(results, null, 2), 'utf8');
    return true;
  } catch (e) {
    return false;
  }
}

function convertDetailedData(detailedData, calleeInfo, allowedFiles) {
  if (!Array.isArray(detailedData) || detailedData.length === 0) {
    throw new Error('convertDetailedData: detailedDataが0件です。入力データを確認してください。');
  }
  if (!Array.isArray(calleeInfo) || calleeInfo.length === 0) {
    throw new Error('convertDetailedData: calleeInfoが0件です。入力データを確認してください。');
  }
  if (!Array.isArray(allowedFiles) || allowedFiles.length === 0) {
    throw new Error('allowedFiles must be provided as an array');
  }
  const nodes = new Map();
  const edges = [];
  const calleeLocationMap = new Map();
  detailedData.forEach((item) => {
    if (item.callee && item.file && item.line && item.line > 0 && isValidSourceFile(item.file, allowedFiles)) {
      if (!calleeLocationMap.has(item.callee)) {
        calleeLocationMap.set(item.callee, []);
      }
      const existingLocations = calleeLocationMap.get(item.callee);
      if (!existingLocations.some(loc => loc.file === item.file && loc.line === item.line)) {
        existingLocations.push({
          file: item.file,
          line: item.line,
          column: item.column || 1,
          type: 'definition',
          sourceLine: item.sourceLine || null
        });
      }
    }
  });
  detailedData.forEach((item, index) => {
    if (!item.caller || !item.callee) return;
    if (!nodes.has(item.caller)) {
      nodes.set(item.caller, {
        id: item.caller,
        label: item.caller,
        locations: [],
        hasLocationInfo: false,
        hasCalleeLocationInfo: false
      });
    }

    let calleeFncDef = null;
    calleeInfo.forEach((calleeItem) => {
      let calleeOfItem = item.callee;
      const calleeParts = calleeOfItem.split(/\s+/);
      if (calleeParts.length > 1) {
        calleeOfItem = calleeParts[0]; // 最初の部分を関数名として使用
      }
      if (calleeItem.callee === calleeOfItem) {
        calleeFncDef = calleeItem.sourceLine || null;
      }
    });

    if (!nodes.has(item.callee)) {
      const calleeLocations = calleeLocationMap.get(item.callee) || [];
      nodes.set(item.callee, {
        id: item.callee,
        label: item.callee,
        locations: [...calleeLocations],
        hasLocationInfo: calleeLocations.length > 0,
        hasCalleeLocationInfo: calleeLocations.length > 0,
        calleeFncDef: calleeFncDef
      });
    }
    if (item.file && item.line && item.line > 0 && isValidSourceFile(item.file, allowedFiles)) {
      const callerNode = nodes.get(item.caller);
      if (!callerNode.locations.some(loc => loc.file === item.file && loc.line === item.line)) {
        callerNode.locations.push({
          file: item.file,
          line: item.line,
          column: item.column || 1,
          type: 'caller',
          sourceLine: item.sourceLine || null
        });
        callerNode.hasLocationInfo = true;
      }
    }
    const calleeNode = nodes.get(item.callee);
    if (calleeLocationMap.has(item.callee)) {
      calleeNode.hasCalleeLocationInfo = true;
    }
    const edgeData = {
      id: `edge-${index}`,
      source: item.caller,
      target: item.callee,
      hasCalleeLocationInfo: calleeLocationMap.has(item.callee)
    };
    if (item.file && item.line && item.line > 0 && isValidSourceFile(item.file, allowedFiles)) {
      edgeData.file = item.file;
      edgeData.line = item.line;
      edgeData.column = item.column || 1;
      edgeData.location = item.fullLocation || `${item.file}:${item.line}:${item.column || 1}`;
      edgeData.hasLocationInfo = true;
      edgeData.sourceLine = item.sourceLine || null;
    } else {
      edgeData.hasLocationInfo = false;
    }
    edges.push(edgeData);
  });
  let allNodes = Array.from(nodes.values());
  let allEdges = edges;
  const blacklist = ['forEach', 'map', 'filter', 'reduce', 'find', 'some', 'every', 'sort', 'concat', 'join', 'push', 'pop', 'shift', 'unshift', 'splice', 'slice'];
  allNodes = allNodes.filter(node => !blacklist.includes(node.id));
  allEdges = allEdges.filter(edge => !blacklist.includes(edge.source) && !blacklist.includes(edge.target));
  if (allNodes.length === 0) {
    // エラー時にデバッグ情報を出力
    console.log('convertDetailedData: detailedData =', detailedData);
    console.log('convertDetailedData: calleeInfo =', calleeInfo);
    console.log('convertDetailedData: nodes.values() =', Array.from(nodes.values()));
    throw new Error('convertDetailedData: allNodesが0件です。入力データやフィルタ条件を確認してください。');
  }
  return {
    nodes: allNodes,
    edges: allEdges
  };
}

function generateGitHubURL(file, line, repo = null, branch = 'main') {
  if (!repo) return null;
  let normalizedFile = file.replace(/\\/g, '/');
  if (normalizedFile.includes('/src/')) {
    const srcIndex = normalizedFile.lastIndexOf('/src/');
    normalizedFile = normalizedFile.substring(srcIndex + 1);
  } else if (normalizedFile.startsWith('src/')) {
    normalizedFile = normalizedFile;
  } else {
    const lastSlash = normalizedFile.lastIndexOf('/');
    if (lastSlash !== -1) {
      normalizedFile = normalizedFile.substring(lastSlash + 1);
    }
  }
  return `https://github.com/${repo}/blob/${branch}/${normalizedFile}#L${line}`;
}

module.exports = {
  isValidSourceFile,
  convertDetailedData,
  generateGitHubURL,
  getSourceLine,
  writeDebugCallerSourceLines,
  writeDebugCalleeSourceLines,
};

```

### .github_automation/callgraph/scripts/check-codeql-exists.cjs
```cjs
#!/usr/bin/env node
/**
 * check-codeql-exists.cjs
 *
 * CodeQL CLIの存在チェックを行う。
 */
const { execSync } = require('child_process');
try {
  execSync('codeql --version', { stdio: 'inherit' });
  console.log('CodeQL CLI detected.');
} catch (e) {
  console.error('CodeQL CLIが見つかりません。 https://codeql.github.com/docs/codeql-cli/getting-started/ を参照してください。');
  process.exit(1);
}

```

### .github_automation/callgraph/scripts/check-commits.cjs
```cjs
#!/usr/bin/env node
/**
 * check-commits.cjs
 *
 * 過去24時間以内にユーザーコミットがあるかを判定し、
 * 手動実行時は常にtrueを返す。
 *
 * Usage:
 *   node check-commits.cjs [--manual]
 *
 * 出力: should-run=true/false を stdout に出力
 */
const { execSync } = require('child_process');

function isManual() {
  return process.argv.includes('--manual');
}

function main() {
  if (isManual()) {
    console.log('should-run=true');
    console.log('Manual execution, proceeding with analysis');
    process.exit(0);
  }
  try {
    // 過去24時間のコミットを取得
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    console.log(`Checking commits since: ${since}`);
    // github-actions[bot] 以外のコミット数をカウント
    const log = execSync(`git log --since="${since}" --pretty=format:"%an"`, { encoding: 'utf-8' });
    const userCommits = log.split('\n').filter(name => name && name !== 'github-actions[bot]').length;
    console.log(`User commits in last 24 hours: ${userCommits}`);
    if (userCommits > 0) {
      console.log('Found user commits, proceeding with analysis');
      if (process.env.GITHUB_OUTPUT) {
        require('fs').appendFileSync(process.env.GITHUB_OUTPUT, 'should-run=true\n');
      }
    } else {
      console.log('No user commits found, skipping analysis');
      if (process.env.GITHUB_OUTPUT) {
        require('fs').appendFileSync(process.env.GITHUB_OUTPUT, 'should-run=false\n');
      }
    }
  } catch (e) {
    console.error('Error checking commits:', e.message);
    process.exit(1);
  }
}

if (require.main === module) main();

```

### .github_automation/callgraph/scripts/check-node-version.cjs
```cjs
#!/usr/bin/env node
/**
 * check-node-version.cjs
 *
 * Node.jsのバージョンをチェックする。
 */
const requiredVersion = 20;

// WSL or Act環境ではcheckをスキップ
const fs = require('fs');
const isWSL = fs.existsSync('/proc/version') && fs.readFileSync('/proc/version', 'utf8').includes('Microsoft');
const isAct = process.env.GITHUB_ACTOR === 'nektos/act';
if (isWSL || isAct) {
  console.log('テスト環境なのでcheckはスキップします');
  process.exit(0);
}

const current = process.versions.node.split('.')[0];
if (parseInt(current, 10) < requiredVersion) {
  console.error(`Node.js v${requiredVersion} 以上が必要です (現在: v${process.versions.node})`);
  process.exit(1);
} else {
  console.log(`Node.js version OK: v${process.versions.node}`);
}

```

### .github_automation/callgraph/scripts/common-utils.cjs
```cjs
// 共通ユーティリティ関数（循環参照防止用）
const fs = require('fs');
const path = require('path');

// 指定ファイル・行番号のソース行を取得
function getSourceLine(file, line) {
  try {
    const filePath = path.resolve(process.cwd(), file);
    if (!fs.existsSync(filePath)) return null;
    const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
    if (line > 0 && line <= lines.length) {
      return lines[line - 1];
    }
    return null;
  } catch (e) {
    return null;
  }
}

function isValidSourceFile(filePath, allowedFiles) {
  if (!Array.isArray(allowedFiles)) {
    throw new Error('allowedFiles must be provided as an array');
  }
  const normalizedPath = filePath.replace(/\\/g, '/');
  for (const allowedFile of allowedFiles) {
    if (normalizedPath === allowedFile || normalizedPath.endsWith('/' + allowedFile)) {
      return true;
    }
  }
  return false;
}

module.exports = {
  getSourceLine,
  isValidSourceFile
};

```

### .github_automation/callgraph/scripts/copy-commit-results.cjs
```cjs
#!/usr/bin/env node
/**
 * copy-commit-results.cjs
 *
 * 生成されたHTML等を generated-docs/ へコピーし、コミットする。
 *
 * Usage:
 *   node copy-commit-results.cjs
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const src = path.resolve('generated-docs/callgraph.html');
const dest = path.resolve('generated-docs/callgraph.html');

if (!fs.existsSync(src)) {
  console.error('生成HTMLが見つかりません:', src);
  process.exit(1);
}

// ここでは同じ場所なのでコピー省略する

// ファイル情報を表示する
const stat = fs.statSync(src);
console.log(`html: ${src}`);
console.log(`size: ${stat.size} bytes`);

// WSL or Act環境ではコミット・プッシュをスキップする
const isWSL = fs.existsSync('/proc/version') && fs.readFileSync('/proc/version', 'utf8').includes('Microsoft');
const isAct = process.env.GITHUB_ACTOR === 'nektos/act';
if (isWSL || isAct) {
  console.log('テスト環境なのでコミット・プッシュはスキップします');
  process.exit(0);
}

try {
  execSync('git add generated-docs/callgraph.html');
  const commitResult = execSync('git commit -m "Update callgraph.html [auto]"', { stdio: 'pipe' }).toString();
  if (/nothing to commit|no changes added to commit|working tree clean/i.test(commitResult)) {
    console.log('コミットすべき変更がありません。push/pullをスキップします。');
    process.exit(0);
  }
  console.log('コミット完了。push前にpull --rebaseを実行します。');
  try {
    execSync('git pull --rebase origin main', { stdio: 'inherit' });
  } catch (e) {
    console.error('git pull --rebaseに失敗しました。競合の可能性があります:', e.message);
    process.exit(1);
  }
  console.log('pull --rebase成功。pushを実行します。');
  execSync('git push', { stdio: 'inherit' });
  console.log('コミット・プッシュ完了');
} catch (e) {
  console.error('コミット・プッシュに失敗:', e.message);
  process.exit(1);
}

```

### .github_automation/callgraph/scripts/extract-sarif-info.cjs
```cjs
// ヘルパー関数群
// SARIFファイルから関数コールグラフを抽出

const fs = require('fs');
const path = require('path');
const { isValidSourceFile, getSourceLine } = require('./common-utils.cjs');

function extractCallerinfo(sarifFile, allowedFiles) {
  if (!Array.isArray(allowedFiles) || allowedFiles.length === 0) {
    throw new Error('extractCallerinfo: allowedFiles must be a non-empty array');
  }
  try {
    const fileContent = fs.readFileSync(sarifFile, 'utf8');
    const sarif = JSON.parse(fileContent);
    if (!sarif.runs || sarif.runs.length === 0) return [];
    const results = [];
    sarif.runs.forEach((run) => {
      if (!run.results) return;
      run.results.forEach((result) => {
        if (result.message && result.message.text) {
          const text = result.message.text;
          const match = text.match(/^(.+?)\s*->\s*(.+?)\s*\(at\s+(.+):(\d+)(?::(\d+))?\)$/);
          let caller = null, callee = null;
          if (match) {
            caller = match[1].trim();
            callee = match[2].trim();
          } else {
            const lines = text.split('\n').filter(line => line.trim().length > 0);
            for (const line of lines) {
              const m = line.match(/^(.+?)\s*->\s*(.+?)\s*\(at\s+(.+):(\d+)(?::(\d+))?\)$/);
              if (m) {
                caller = m[1].trim();
                callee = m[2].trim();
                break;
              }
            }
          }
          if (caller && callee && Array.isArray(result.locations) && result.locations.length > 0) {
            const loc = result.locations[0].physicalLocation;
            const fileUri = loc.artifactLocation.uri.replace(/^file:\/\//, '').replace(/\\/g, '/');
            const fileName = fileUri.startsWith('src/') ? fileUri : 'src/' + path.basename(fileUri);
            if (isValidSourceFile(fileName, allowedFiles)) {
              const srcLine = getSourceLine(fileName, loc.region?.startLine || 1);
              results.push({
                caller,
                callee,
                file: fileName,
                line: loc.region?.startLine || 1,
                column: loc.region?.startColumn || 1,
                fullLocation: `${fileName}:${loc.region?.startLine || 1}:${loc.region?.startColumn || 1}`,
                sourceLine: srcLine
              });
            }
          }
        }
      });
    });
    if (results.length === 0) {
      console.log('SARIF内容:', JSON.stringify(sarif, null, 2));
      throw new Error('該当するcaller情報が見つかりませんでした');
    }
    return results;
  } catch (e) {
    throw e;
  }
}

function extractCalleeinfo(sarifFile, allowedFiles) {
  if (!Array.isArray(allowedFiles) || allowedFiles.length === 0) {
    throw new Error('extractCalleeinfo: allowedFiles must be a non-empty array');
  }
  try {
    const fileContent = fs.readFileSync(sarifFile, 'utf8');
    const sarif = JSON.parse(fileContent);
    if (!sarif.runs || sarif.runs.length === 0) throw new Error('SARIFファイルにrunsがありません');
    const results = [];
    sarif.runs.forEach((run) => {
      if (!run.results) return;
      run.results.forEach((result) => {
        if (result.message && result.message.text) {
          // 例: calcAttackToReleaseTicks (mml2json.js:111) -> calcLtick (mml2json.js:150) (at mml2json.js:116)
          const text = result.message.text;
          const calleeMatch = text.match(/->\s*([^(]+)\s*\(([^:]+):(\d+)\)/);
          if (calleeMatch) {
            const callee = calleeMatch[1].trim();
            const fileName = calleeMatch[2].trim().startsWith('src/') ? calleeMatch[2].trim() : 'src/' + calleeMatch[2].trim();
            if (isValidSourceFile(fileName, allowedFiles)) {
              const line = parseInt(calleeMatch[3], 10);
              let srcLine = null;
              srcLine = getSourceLine(fileName, line);
              results.push({
                callee,
                file: fileName,
                line: line,
                sourceLine: srcLine
              });
            }
          }
        }
      });
    });
    if (results.length === 0) {
      console.log('SARIF内容:', JSON.stringify(sarif, null, 2));
      throw new Error('該当するcallee情報が見つかりませんでした');
    }
    return results;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  extractCallerinfo,
  extractCalleeinfo
};

```

### .github_automation/callgraph/scripts/find-process-results.cjs
```cjs
#!/usr/bin/env node
/**
 * find-process-results.cjs
 *
 * CodeQLのSARIF結果ファイルを探し、なければエラー。
 *
 * Usage:
 *   node find-process-results.cjs
 */
const fs = require('fs');
const path = require('path');

const sarifPath = path.resolve('codeql-results.sarif');
if (!fs.existsSync(sarifPath)) {
  console.error('SARIFファイルが見つかりません: codeql-results.sarif');
  process.exit(1);
}
console.log('SARIFファイルが見つかりました:', sarifPath);

```

### .github_automation/callgraph/scripts/generate-html-graph.cjs
```cjs
#!/usr/bin/env node
/**
 * generate-html-graph.cjs
 *
 * SARIFファイルからコールグラフHTMLを生成する。
 *
 * Usage:
 *   node generate-html-graph.cjs
 */
const path = require('path');
const fs = require('fs');

const { convertDetailedData, writeDebugCallerSourceLines, writeDebugCalleeSourceLines } = require('./callgraph-utils.cjs');
const { extractCallerinfo, extractCalleeinfo } = require('./extract-sarif-info.cjs');
const generateHTML = require('./generateHTML.cjs');


// allowedFiles.jsonのファイル名をコマンドライン引数から取得
const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node generate-html-graph.cjs <allowedFiles.json>');
  process.exit(1);
}
const allowedFilesPath = path.resolve(args[0]);
if (!fs.existsSync(allowedFilesPath)) {
  console.error('allowedFiles.jsonが見つかりません:', allowedFilesPath);
  process.exit(1);
}
let allowedFiles;
try {
  allowedFiles = JSON.parse(fs.readFileSync(allowedFilesPath, 'utf8'));
  if (!Array.isArray(allowedFiles)) throw new Error('allowedFiles.jsonの内容が配列ではありません');
} catch (e) {
  console.error('allowedFiles.jsonの読み込みに失敗:', e);
  process.exit(1);
}

const sarifPath = path.resolve('codeql-results.sarif');
const outputPath = path.resolve('generated-docs/callgraph.html');

if (!fs.existsSync(sarifPath)) {
  console.error('SARIFファイルが見つかりません:', sarifPath);
  process.exit(1);
}


const callerInfo = extractCallerinfo(sarifPath, allowedFiles);
const calleeInfo = extractCalleeinfo(sarifPath, allowedFiles);
const graphData = convertDetailedData(callerInfo, calleeInfo, allowedFiles);
const html = generateHTML(graphData, { repo: process.env.GITHUB_REPOSITORY || '', branch: process.env.GITHUB_REF_NAME || 'main' });

fs.writeFileSync(outputPath, html);
console.log('コールグラフHTMLを生成しました:', outputPath);

// デバッグ用: Caller sourceLine 付きの詳細データをJSONで出力
writeDebugCallerSourceLines(sarifPath, path.resolve('generated-docs/callerSourceLines.json'), extractCallerinfo, allowedFiles);
console.log('✓ callerSourceLines.json (with sourceLine) generated');

// デバッグ用: Callee sourceLine 付きの詳細データをJSONで出力
writeDebugCalleeSourceLines(sarifPath, path.resolve('generated-docs/calleeSourceLines.json'), extractCalleeinfo, allowedFiles);
console.log('✓ calleeSourceLines.json (with callee sourceLine) generated');

```

### .github_automation/callgraph/scripts/generateHTML.cjs
```cjs
/**
 * HTMLテンプレートを生成
 */
function generateHTML(graphData, options = {}) {
  const {
    title = 'Function Call Graph with Source Links',
    repo = null,
    branch = 'main',
  } = options;

  return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <script src="https://unpkg.com/cytoscape@3.29.2/dist/cytoscape.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="header">
        <h1>${title}</h1>
        <div class="stats-container">
            <div class="stats">
                <div class="stat-value">${graphData.nodes.length}</div>
                <div class="stat-label">Functions</div>
            </div>
            <div class="stats">
                <div class="stat-value">${graphData.edges.length}</div>
                <div class="stat-label">Call Relationships</div>
            </div>
            <div class="stats">
                <div class="stat-value">${graphData.nodes.filter(n => n.hasCalleeLocationInfo).length}</div>
                <div class="stat-label">With Callee Location</div>
            </div>
        </div>
    </div>

    <div class="main-container">
        <div class="graph-container">
            <div id="cy"></div>
            <div class="controls">
                <button class="control-button" onclick="resetLayout()">Reset Layout</button>
                <button class="control-button" onclick="switchLayout(this)">レイアウト切替</button>
                <button class="control-button" onclick="fitToContent()">Fit to Content</button>
                <button class="control-button" onclick="toggleNodeLabels()">Toggle Labels</button>
                <button class="control-button" onclick="toggleCalleeLocationFilter()">Hide No-Callee-Location</button>
                <button class="control-button" onclick="toggleInfoPanel()">Toggle Info Panel</button>
            </div>
        </div>

        <div id="info-panel" class="info-panel hidden">
            <div class="info-title">選択した要素の詳細</div>
            <div id="info-content"></div>
        </div>
    </div>

    <div class="generated-time">
        Generated: ${new Date().toLocaleString('ja-JP')}
    </div>

    <script>
      const graphData = ${JSON.stringify(graphData, null, 2)};
      const repo = ${JSON.stringify(repo)};
      const branch = ${JSON.stringify(branch)};
    </script>
    <script src="callgraph.js"></script>
</body>
</html>`;
}

module.exports = generateHTML;

```

### .github_automation/project_summary/docs/daily-summary-setup.md
```md
# Daily Project Summary Setup

このドキュメントでは、Daily Project Summary機能のセットアップ方法を説明します。

## 必要な設定

### GitHub Secrets

リポジトリの Settings > Secrets and variables > Actions で以下のシークレットを設定してください：

1. **GEMINI_API_KEY** (必須)
   - Google AI Studio で取得したGemini APIキー
   - [Google AI Studio](https://aistudio.google.com/) でAPIキーを作成

2. **GITHUB_TOKEN** (自動設定)
   - GitHub Actionsで自動的に提供されます
   - Issue情報の取得に使用

### ファイル構成

```
.github/
├── workflows/
│   └── daily-project-summary.yml     # メインワークフロー
├── scripts/
│   ├── generate-project-summary.cjs  # 要約生成スクリプト（Node.js）
└── prompts/
    ├── project-overview-prompt.md    # 来訪者向けプロンプト
    └── development-status-prompt.md  # 開発者向けプロンプト

generated-docs/                       # 生成された要約の保存先
├── project-overview.md              # プロジェクト概要（来訪者向け）
└── development-status.md            # 開発状況（開発者向け）
```

## 実行条件

- **スケジュール**: 毎日日本時間 07:00
- **実行条件**: 過去24時間以内にユーザーによるコミットプッシュがある場合のみ
- **除外条件**: GitHub Actionsによるコミットは除外

## プロンプトのカスタマイズ

プロジェクトサマリーは2つの異なる文書に分かれています：

### 🌟 来訪者向け (`project-overview-prompt.md`)
- プロジェクト概要、技術スタック、ファイル・関数構造
- 出力: `project-overview.md`

### 🔧 開発者向け (`development-status-prompt.md`)
- Issues状況、次のアクション候補
- 出力: `development-status.md`

これらのプロンプトファイルを編集することで、生成内容をカスタマイズできます。

### 生成内容

**来訪者向け:**
- プロジェクト概要（3行）
- 技術スタック（カテゴリ別）
- ファイル階層ツリー
- ファイル詳細説明
- 関数詳細説明
- 関数呼び出し階層

**開発者向け:**
- オープンIssues要約（3行）
- 次の一手候補（3つ）
- 各候補の最初の小さな一歩

## 手動実行

### GitHub Actions UI
1. GitHub リポジトリの Actions タブに移動
2. "Daily Project Summary" ワークフローを選択
3. "Run workflow" ボタンをクリック

## トラブルシューティング

### よくある問題

1. **GEMINI_API_KEY not set**
   - GitHub SecretsでGEMINI_API_KEYが設定されているか確認

2. **No user commits found**
   - 過去24時間以内にユーザーによるコミットがない場合は正常な動作

3. **Issues collection failed**
   - GITHUB_TOKENの権限を確認
   - リポジトリがプライベートの場合はissues:read権限が必要

### ログの確認

GitHub Actions の実行ログで詳細なエラー情報を確認できます：
1. Actions タブ → ワークフロー実行 → ログを確認

## API制限について

### Gemini API
- 無料枠: 1日50リクエスト
- 必要に応じて有料プランの検討

### GitHub API
- 認証済みリクエスト: 5000回/時間
- 1日1回のIssue取得なので十分な余裕

## セキュリティ

- APIキーはGitHub Secretsで管理
- 生成されたコンテンツはパブリックリポジトリの場合公開される
- プライベート情報を含むプロンプトは避ける

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
以下の開発状況情報を参考にして要約を生成してください：

## プロジェクトのファイル一覧
${projectFiles}

## 現在のオープンIssues
${issuesSection}

## ドキュメントで言及されているファイルの内容
${file_contents}

## 最近の変更（過去7日間）
コミット履歴:
${recentChanges}

変更されたファイル:
${recentChanges}

上記の情報を基に、プロンプトで指定された形式で開発状況を生成してください。
Issue番号を記載する際は、必ず [Issue #番号](../issue-notes/番号.md) の形式でMarkdownリンクとして記載してください。

```

### .github_automation/project_summary/prompts/project-overview-prompt.md
```md
# プロジェクト概要生成プロンプト（来訪者向け）

## 生成するもの：
- projectを3行で要約する
- プロジェクトで使用されている技術スタックをカテゴリ別に整理して説明する
- プロジェクト全体のファイル階層ツリー（ディレクトリ構造を図解）
- プロジェクト全体のファイルそれぞれの説明
- プロジェクト全体の関数それぞれの説明
- プロジェクト全体の関数の呼び出し階層ツリー

## 生成しないもの：
- Issues情報（開発者向け情報のため）
- 次の一手候補（開発者向け情報のため）
- ハルシネーションしそうなもの（例、存在しない機能や計画を勝手に妄想する等）

## 出力フォーマット：
以下のMarkdown形式で出力してください：

```markdown
# Project Overview

## プロジェクト概要
[以下の形式で3行でプロジェクトを要約]
- [1行目の説明]
- [2行目の説明]
- [3行目の説明]

## 技術スタック
[使用している技術をカテゴリ別に整理して説明]
- フロントエンド: [フロントエンド技術とその説明]
- 音楽・オーディオ: [音楽・オーディオ関連技術とその説明]
- 開発ツール: [開発支援ツールとその説明]
- テスト: [テスト関連技術とその説明]
- ビルドツール: [ビルド・パース関連技術とその説明]
- 言語機能: [言語仕様・機能とその説明]
- 自動化・CI/CD: [自動化・継続的統合関連技術とその説明]
- 開発標準: [コード品質・統一ルール関連技術とその説明]

## ファイル階層ツリー
```
[プロジェクトのディレクトリ構造をツリー形式で表現]
```

## ファイル詳細説明
[各ファイルの役割と機能を詳細に説明]

## 関数詳細説明
[各関数の役割、引数、戻り値、機能を詳細に説明]

## 関数呼び出し階層ツリー
```
[関数間の呼び出し関係をツリー形式で表現]
```
```

```

### .github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs
```cjs
const ProjectOverviewGenerator = require('./overview/ProjectOverviewGenerator.cjs');
const DevelopmentStatusGenerator = require('./development/DevelopmentStatusGenerator.cjs');

/**
 * プロジェクト要約コーディネーター
 * 既存のProjectSummaryGeneratorとの後方互換性を保ちつつ、
 * 疎結合化された2つの生成器を協調実行する
 */
class ProjectSummaryCoordinator {
  /**
   * @param {string} overviewPromptPath - プロジェクト概要プロンプトのパス（必須）
   * @param {string} developmentStatusPromptPath - 開発状況プロンプトのパス（必須）
   * @param {string} overviewPath - プロジェクト概要出力先パス（必須）
   * @param {string} developmentPath - 開発状況出力先パス（必須）
   * @param {string} developmentGeneratedPath - 開発状況生成プロンプトのパス（必須）
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(overviewPromptPath, developmentStatusPromptPath, overviewPath, developmentPath, developmentGeneratedPath, projectRoot) {
    // 引数のバリデーション
    if (!overviewPromptPath) {
      throw new Error('overviewPromptPath is required as the first argument');
    }
    if (!developmentStatusPromptPath) {
      throw new Error('developmentStatusPromptPath is required as the second argument');
    }
    if (!overviewPath) {
      throw new Error('overviewPath is required as the third argument');
    }
    if (!developmentPath) {
      throw new Error('developmentPath is required as the fourth argument');
    }
    if (!developmentGeneratedPath) {
      throw new Error('developmentGeneratedPath is required as the fifth argument');
    }
    if (!projectRoot) {
      throw new Error('projectRoot is required as the sixth argument');
    }

    // 各生成器を初期化
    this.overviewGenerator = new ProjectOverviewGenerator(overviewPromptPath, overviewPath, projectRoot);
    this.developmentGenerator = new DevelopmentStatusGenerator(developmentStatusPromptPath, developmentPath, developmentGeneratedPath, projectRoot);
  }

  /**
   * メイン実行関数
   * 既存のProjectSummaryGenerator.run()と同じインターフェース
   * @returns {Promise<Array<string>>} 生成されたファイルパスの配列
   */
  async run() {
    try {
      console.log('Starting project summary generation...');

      const filenames = [];

      // 並列実行で効率化
      const [overviewFile, developmentFile] = await Promise.all([
        this.overviewGenerator.run(),
        this.developmentGenerator.run()
      ]);

      // 成功したファイルのみを結果に追加
      if (overviewFile) {
        filenames.push(overviewFile);
      }
      if (developmentFile) {
        filenames.push(developmentFile);
      }

      if (filenames.length > 0) {
        console.log('Project summary generation completed successfully!');
        console.log(`Generated files: ${filenames.join(', ')}`);
      } else {
        console.log('No files were generated.');
      }

      return filenames;

    } catch (error) {
      console.error('Project summary generation failed:', error.message);
      if (error.response) {
        console.error('API Response:', error.response);
      }
      process.exit(1);
    }
  }

  /**
   * プロジェクト概要のみ生成
   * @returns {Promise<string>} 生成されたファイルのパス
   */
  async generateOverviewOnly() {
    console.log('Generating project overview only...');
    return await this.overviewGenerator.run();
  }

  /**
   * 開発状況のみ生成
   * @returns {Promise<string>} 生成されたファイルのパス
   */
  async generateDevelopmentStatusOnly() {
    console.log('Generating development status only...');
    return await this.developmentGenerator.run();
  }
}

module.exports = ProjectSummaryCoordinator;

```

### .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
```cjs
const BaseGenerator = require('../shared/BaseGenerator.cjs');
const IssueTracker = require('./IssueTracker.cjs');

/**
 * 開発状況生成器
 * 開発者向けの進捗状況を生成
 */
const fs = require('fs');
const path = require('path');

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
      if (error.response) {
        console.error('API Response:', error.response);
      }
      throw error;
    }
  }

  /**
   * 開発状況を生成
   * @param {Array} issues - Issues情報
   * @param {Object} recentChanges - 最近の変更情報
   * @param {string} prompt - プロンプト内容
   * @returns {Promise<string>} 生成された開発状況
   */
  async getProjectFiles(dir = this.projectRoot) {
    // 再帰的にファイル一覧を取得し、Markdownリスト形式で返す
    const results = [];
    const excludeDirs = ['.git', 'node_modules'];
    function walk(currentDir, base = '') {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory() && excludeDirs.includes(entry.name)) {
          continue;
        }
        const relPath = path.join(base, entry.name).replace(/\\/g, '/');
        if (entry.isDirectory()) {
          walk(path.join(currentDir, entry.name), relPath + '/');
        } else {
          results.push(relPath);
        }
      }
    }
    walk(dir);
    // Markdownリスト形式で返す
    return results.length === 0 ? '（ファイルなし）' : results.map(f => `- ${f}`).join('\n');
  }

  /**
   * 指定filenameにマッチする全ファイル内容をmarkdown形式で返す
   * @param {string} filename - 対象のファイル名
   * @returns {string} markdown文字列
   */
  getFileContentsMarkdown(filename) {
    const map = this.getFilenameToPathsMap();
    const fs = require('fs');
    const path = require('path');
    if (!map[filename] || map[filename].length === 0) {
      return `（該当ファイルなし）`;
    }
    return map[filename].map(relPath => {
      let content = '';
      try {
        content = fs.readFileSync(path.join(this.projectRoot, relPath), 'utf8');
      } catch (e) {
        content = `（ファイル読み込み失敗: ${e.message}）`;
      }
      const ext = relPath.split('.').pop();
      return [
        `### ${relPath}`,
        '```' + ext,
        content,
        '```'
      ].join('\n');
    }).join('\n\n');
  }

  /**
   * prompt内で言及されているファイル名の内容をmarkdown文字列群として返す
   * @param {string} prompt - プロンプト全文
   * @returns {string} markdown文字列群
   */
  getMentionedFileContentsInPrompt(prompt) {
    const map = this.getFilenameToPathsMap();
    const mentionedFiles = Object.keys(map).filter(filename => prompt.includes(filename));
    if (mentionedFiles.length === 0) {
      return '';
    }
    // 各ファイル名について内容取得
    return mentionedFiles.map(filename => this.getFileContentsMarkdown(filename)).join('\n\n');
  }

  /**
   * プロジェクト全体のファイル名→相対パス配列のmapを返す
   * @returns {Object} { [filename]: [relativePath, ...] }
   */
  getFilenameToPathsMap(dir = this.projectRoot) {
    const map = {};
    const excludeDirs = ['.git', 'node_modules'];
    const path = require('path');
    const fs = require('fs');
    function walk(currentDir, base = '') {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory() && excludeDirs.includes(entry.name)) {
          continue;
        }
        const relPath = path.join(base, entry.name).replace(/\\/g, '/');
        if (entry.isDirectory()) {
          walk(path.join(currentDir, entry.name), relPath + '/');
        } else {
          const basename = entry.name;
          if (!map[basename]) {
            map[basename] = [];
          }
          map[basename].push(relPath);
        }
      }
    }
    walk(dir);
    return map;
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

    // プロジェクトファイル一覧を取得
    const projectFiles = await this.getProjectFiles();

    // プロンプトを生成
    // phase1: issues, recentChanges, projectFilesを埋め込む
    function fillTemplate(template, values) {
      return template.replace(/\$\{(\w+)\}/g, (match, key) => {
        return key in values ? values[key] : match;
      });
    }
    let developmentPrompt = fillTemplate(prompt, {
      issuesSection,
      commits: recentChanges.commits.join('\n'),
      changedFiles: recentChanges.changedFiles.join('\n'),
      projectFiles
    });
    // phase2: developmentPrompt を元に、fileContentsを得て埋め込む
    const fileContents = this.getMentionedFileContentsInPrompt(developmentPrompt);
    developmentPrompt = developmentPrompt.replace(/\$\{file_contents\}/g, fileContents);

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

### .github_automation/project_summary/scripts/development/GitUtils.cjs
```cjs
const { execSync } = require('child_process');

/**
 * Git操作のユーティリティクラス
 */
class GitUtils {
  constructor(projectRoot) {
    if (!projectRoot) {
      throw new Error('projectRoot is required');
    }
    this.projectRoot = projectRoot;
  }

  /**
   * 過去24時間以内にユーザーコミットがあるかチェック
   */
  async hasUserCommitsInLast24Hours() {
    try {
      console.log('Checking for user commits in the last 24 hours...');

      // 過去24時間のコミット履歴を取得（author情報付き）
      const gitCommand = `git log --since="24 hours ago" --pretty=format:"%H %an %s" --oneline`;

      const result = execSync(gitCommand, {
        cwd: this.projectRoot,
        encoding: 'utf-8',
        stdio: 'pipe'
      });

      const allCommits = result.trim();
      if (!allCommits) {
        console.log('No commits found in the last 24 hours.');
        return false;
      }

      // GitHub Actionsによるコミットを除外
      const userCommits = allCommits
        .split('\n')
        .filter(line => {
          const lowerLine = line.toLowerCase();
          return !lowerLine.includes('github-actions') &&
                 !lowerLine.includes('action@github.com');
        });

      const hasCommits = userCommits.length > 0;

      console.log(`User commits found: ${hasCommits}`);
      if (hasCommits) {
        console.log('Recent user commits:');
        userCommits.forEach(commit => console.log(commit));
      }

      return hasCommits;
    } catch (error) {
      console.error('Error checking commits:', error.message);
      return false;
    }
  }

  /**
   * 最近の変更履歴を取得
   */
  async collectRecentChanges() {
    console.log('Collecting recent changes...');

    try {
      // 過去7日間のコミット履歴
      const commits = execSync('git log --since="7 days ago" --oneline', {
        cwd: this.projectRoot,
        encoding: 'utf-8',
        stdio: 'pipe'
      }).trim().split('\n').slice(0, 10);

      // 最近変更されたファイル
      const changedFiles = execSync('git diff --name-only HEAD~7..HEAD', {
        cwd: this.projectRoot,
        encoding: 'utf-8',
        stdio: 'pipe'
      }).trim().split('\n').filter(file => file.length > 0);

      return {
        commits,
        changedFiles
      };
    } catch (error) {
      console.warn('Could not get recent changes:', error.message);
      return {
        commits: [],
        changedFiles: []
      };
    }
  }
}

module.exports = GitUtils;

```

### .github_automation/project_summary/scripts/development/IssueTracker.cjs
```cjs
const GitUtils = require('./GitUtils.cjs');

/**
 * Issue追跡ユーティリティ関数集
 * GitHub Issues、Git履歴などの動的な開発状況追跡機能を提供
 */

/**
 * GitHub Issues情報を収集
 * @param {string} projectRoot - プロジェクトルートパス
 * @returns {Promise<Array>} Issues情報の配列
 */
async function collectIssues(projectRoot) {
  console.log('Collecting GitHub Issues...');

  try {
    const { Octokit } = require('@octokit/rest');
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

    const { data: issues } = await octokit.rest.issues.listForRepo({
      owner,
      repo,
      state: 'open',
      per_page: 10
    });

    return issues.map(issue => ({
      number: issue.number,
      title: issue.title,
      body: issue.body ? issue.body.substring(0, 300) + '...' : '',
      labels: issue.labels.map(label => label.name)
    }));
  } catch (error) {
    console.warn('Could not fetch GitHub Issues:', error.message);
    return [];
  }
}

/**
 * 最近の変更情報を収集
 * @param {string} projectRoot - プロジェクトルートパス
 * @returns {Promise<Object>} 最近の変更情報
 */
async function collectRecentChanges(projectRoot) {
  const gitUtils = new GitUtils(projectRoot);
  return await gitUtils.collectRecentChanges();
}

/**
 * ユーザーコミットの存在チェック
 * @param {string} projectRoot - プロジェクトルートパス
 * @returns {Promise<boolean>} 過去24時間にユーザーコミットがあるか
 */
async function hasRecentUserCommits(projectRoot) {
  const gitUtils = new GitUtils(projectRoot);
  return await gitUtils.hasUserCommitsInLast24Hours();
}

/**
 * 指定したIssue番号のノートmdファイル内容を同期取得 ※まず開発しやすさ優先で、決め打ちで必ずノートがある想定で開発する。これによりノート取得失敗バグを検知できる
 * ノートファイルが存在しない、または読み取りに失敗した場合はエラーメッセージを出力し、プロセスをエラー終了させる。
 * @param {number|string} issueNumber - Issue番号
 * @param {string} projectRoot - プロジェクトルートパス
 * @returns {string} ノート内容
 */
function getIssueNoteSync(issueNumber, projectRoot) {
  const fs = require('fs');
  const path = require('path');
  const notePath = path.resolve(projectRoot, 'issue-notes', `${issueNumber}.md`);
  if (!fs.existsSync(notePath)) {
    console.error(`Issueノートが存在しません: ${notePath}`);
    process.exit(1);
  }
  try {
    return fs.readFileSync(notePath, 'utf-8');
  } catch (e) {
    console.error(`Issueノートの読み取りに失敗しました: ${notePath}`);
    console.error(e);
    process.exit(1);
  }
}

module.exports = {
  collectIssues,
  collectRecentChanges,
  hasRecentUserCommits,
  getIssueNoteSync
};

```

### .github_automation/project_summary/scripts/generate-project-summary.cjs
```cjs
const ProjectSummaryCoordinator = require('./ProjectSummaryCoordinator.cjs');

// メイン処理実行

const overviewPromptPath = process.argv[2];
const developmentStatusPromptPath = process.argv[3];
const overviewPath = process.argv[4];
const developmentPath = process.argv[5];
const developmentGeneratedPath = process.argv[6];
const projectRoot = process.argv[7];

const coordinator = new ProjectSummaryCoordinator(
  overviewPromptPath,
  developmentStatusPromptPath,
  overviewPath,
  developmentPath,
  developmentGeneratedPath,
  projectRoot
);
coordinator.run();

```

### .github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs
```cjs
const fs = require('fs').promises;
const path = require('path');

/**
 * 汎用的なコード解析機能を提供するクラス
 * どのプロジェクトでも再利用可能な純粋な分析ロジック
 */
class CodeAnalyzer {
  /**
   * @param {string} projectRoot - プロジェクトルートディレクトリ
   */
  constructor(projectRoot) {
    this.projectRoot = projectRoot;
  }

  /**
   * 全ファイルの詳細分析
   * @param {string[]} extensions - 対象拡張子（デフォルト: ['.js', '.ts', '.pegjs', '.html', '.css']）
   * @param {string[]} excludeDirs - 除外ディレクトリ（デフォルト: ['.git', 'node_modules', '.github']）
   */
  async analyzeAllFiles(extensions = ['.js', '.ts', '.pegjs', '.html', '.css'], excludeDirs = ['.git', 'node_modules', '.github']) {
    const fileAnalysis = [];

    const analyzeFiles = async (dir) => {
      try {
        const items = await fs.readdir(path.join(this.projectRoot, dir));

        for (const item of items) {
          const fullPath = path.join(dir, item);
          const absolutePath = path.join(this.projectRoot, fullPath);

          if (excludeDirs.includes(item)) continue;

          try {
            const stat = await fs.stat(absolutePath);
            if (stat.isDirectory()) {
              await analyzeFiles(fullPath);
            } else if (stat.isFile()) {
              const ext = path.extname(item);
              if (extensions.includes(ext)) {
                const analysis = await this.analyzeFile(absolutePath, fullPath);
                if (analysis) {
                  fileAnalysis.push(analysis);
                }
              }
            }
          } catch (error) {
            continue;
          }
        }
      } catch (error) {
        // ディレクトリ読み取りエラーをスキップ
      }
    };

    await analyzeFiles('.');
    return fileAnalysis;
  }

  /**
   * 個別ファイルの分析
   * @param {string} absolutePath - ファイルの絶対パス
   * @param {string} relativePath - ファイルの相対パス
   */
  async analyzeFile(absolutePath, relativePath) {
    try {
      const content = await fs.readFile(absolutePath, 'utf-8');
      const ext = path.extname(relativePath);

      const analysis = {
        path: relativePath.replace(/\\/g, '/'),
        size: content.length,
        lines: content.split('\n').length,
        functions: [],
        imports: [],
        exports: []
      };

      if (ext === '.js' || ext === '.ts') {
        analysis.functions = this.extractJavaScriptFunctions(content);
        analysis.imports = this.extractImports(content);
        analysis.exports = this.extractExports(content);
      } else if (ext === '.pegjs') {
        analysis.functions = this.extractPegJSRules(content);
      }

      return analysis;
    } catch (error) {
      return null;
    }
  }

  /**
   * JavaScript/TypeScript関数を抽出
   * @param {string} content - ファイル内容
   */
  extractJavaScriptFunctions(content) {
    const functions = [];

    // 関数宣言のパターン
    const patterns = [
      /function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)/g,
      /const\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:async\s+)?function/g,
      /const\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:async\s+)?\([^)]*\)\s*=>/g,
      /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)\s*{/g,
      /async\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)/g
    ];

    patterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        if (match[1] && !functions.includes(match[1])) {
          functions.push(match[1]);
        }
      }
    });

    return functions;
  }

  /**
   * import文を抽出
   * @param {string} content - ファイル内容
   */
  extractImports(content) {
    const imports = [];
    const importPattern = /import\s+.*?\s+from\s+['"`]([^'"`]+)['"`]/g;
    const requirePattern = /require\(['"`]([^'"`]+)['"`]\)/g;

    let match;
    while ((match = importPattern.exec(content)) !== null) {
      imports.push(match[1]);
    }
    while ((match = requirePattern.exec(content)) !== null) {
      imports.push(match[1]);
    }

    return imports;
  }

  /**
   * export文を抽出
   * @param {string} content - ファイル内容
   */
  extractExports(content) {
    const exports = [];
    const exportPattern = /export\s+(?:default\s+)?(?:function\s+)?([a-zA-Z_$][a-zA-Z0-9_$]*)/g;
    const moduleExportsPattern = /module\.exports\s*=\s*([a-zA-Z_$][a-zA-Z0-9_$]*)/g;

    let match;
    while ((match = exportPattern.exec(content)) !== null) {
      exports.push(match[1]);
    }
    while ((match = moduleExportsPattern.exec(content)) !== null) {
      exports.push(match[1]);
    }

    return exports;
  }

  /**
   * PegJSルールを抽出
   * @param {string} content - ファイル内容
   */
  extractPegJSRules(content) {
    const rules = [];
    const rulePattern = /^([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/gm;

    let match;
    while ((match = rulePattern.exec(content)) !== null) {
      rules.push(match[1]);
    }

    return rules;
  }

  /**
   * 関数呼び出し階層を分析
   * @param {Array} fileAnalysis - analyzeAllFiles()の結果
   */
  async analyzeFunctionCallHierarchy(fileAnalysis) {
    const hierarchy = {};

    // 各ファイルの関数について、どの関数を呼び出しているかを分析
    for (const file of fileAnalysis) {
      try {
        const content = await fs.readFile(path.join(this.projectRoot, file.path), 'utf-8');

        for (const func of file.functions) {
          if (!hierarchy[func]) {
            hierarchy[func] = {
              file: file.path,
              calls: [],
              calledBy: []
            };
          }

          // この関数が呼び出している他の関数を検索
          const allFunctions = fileAnalysis.flatMap(f => f.functions);
          allFunctions.forEach(targetFunc => {
            if (targetFunc !== func && content.includes(targetFunc + '(')) {
              if (!hierarchy[func].calls.includes(targetFunc)) {
                hierarchy[func].calls.push(targetFunc);
              }

              if (!hierarchy[targetFunc]) {
                hierarchy[targetFunc] = { file: '', calls: [], calledBy: [] };
              }
              if (!hierarchy[targetFunc].calledBy.includes(func)) {
                hierarchy[targetFunc].calledBy.push(func);
              }
            }
          });
        }
      } catch (error) {
        continue;
      }
    }

    return hierarchy;
  }
}

module.exports = CodeAnalyzer;

```

### .github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs
```cjs
const BaseGenerator = require('../shared/BaseGenerator.cjs');
const FileSystemUtils = require('../shared/FileSystemUtils.cjs');
const CodeAnalyzer = require('./CodeAnalyzer.cjs');
const ProjectDataCollector = require('./ProjectDataCollector.cjs');
const TechStackAnalyzer = require('./TechStackAnalyzer.cjs');
const ProjectDataFormatter = require('./ProjectDataFormatter.cjs');

/**
 * プロジェクト分析プロセス統制クラス
 * 各分析コンポーネントを協調させて統合分析結果を生成
 */
class ProjectAnalysisOrchestrator extends BaseGenerator {
  /**
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(projectRoot) {
    super(projectRoot);
    this._initializeComponents();
  }

  /**
   * プロジェクト分析を実行
   * @returns {Promise<Object>} 統合分析結果
   */
  async analyzeProject() {
    console.log('Starting comprehensive project analysis...');

    // 1. データ収集
    const projectData = await this.dataCollector.collectAll();

    // 2. 技術スタック分析
    const packageJson = await this._getPackageJson();
    const techStack = this.techStackAnalyzer.analyzeTechStack(packageJson, projectData);

    // 3. 結果統合
    const analysisResult = this._combineAnalysisResults(projectData, techStack, packageJson);

    console.log('Project analysis completed.');
    return analysisResult;
  }

  /**
   * 整形済みレポートを生成
   * @returns {Promise<Object>} フォーマット済み分析結果
   */
  async generateFormattedReport() {
    const analysisResult = await this.analyzeProject();

    return {
      ...analysisResult,
      formatted: {
        techStack: this.formatter.formatTechStack(analysisResult.techStack),
        fileDetails: this.formatter.formatFileDetails(analysisResult.fileAnalysis),
        functionHierarchy: this.formatter.formatFunctionHierarchy(analysisResult.functionHierarchy),
        projectSummary: this.formatter.formatProjectSummary(analysisResult)
      }
    };
  }

  /**
   * コンポーネントを初期化
   * @private
   */
  _initializeComponents() {
    this.fileSystemUtils = new FileSystemUtils(this.projectRoot);
    this.codeAnalyzer = new CodeAnalyzer(this.projectRoot);
    this.dataCollector = new ProjectDataCollector(
      this.projectRoot,
      this.fileSystemUtils,
      this.codeAnalyzer
    );
    this.techStackAnalyzer = new TechStackAnalyzer(this.fileSystemUtils);
    this.formatter = new ProjectDataFormatter();
  }

  /**
   * 分析結果を統合
   * @private
   */
  _combineAnalysisResults(projectData, techStack, packageJson) {
    return {
      name: projectData.name,
      description: projectData.description,
      structure: projectData.structure,
      dependencies: projectData.dependencies,
      techStack: techStack,
      fileTree: projectData.fileTree,
      fileAnalysis: projectData.fileAnalysis,
      functionHierarchy: projectData.functionHierarchy,
      packageJson: packageJson
    };
  }

  /**
   * package.jsonを取得
   * @private
   */
  async _getPackageJson() {
    try {
      const fs = require('fs').promises;
      const path = require('path');
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const content = await fs.readFile(packageJsonPath, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      console.warn('Could not read package.json:', error.message);
      return {};
    }
  }
}

module.exports = ProjectAnalysisOrchestrator;

```

### .github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs
```cjs
const fs = require('fs').promises;
const path = require('path');

/**
 * プロジェクト情報収集専用クラス
 * ファイルシステムからのデータ収集に特化
 */
class ProjectDataCollector {
  /**
   * @param {string} projectRoot - プロジェクトルートディレクトリ
   * @param {Object} fileSystemUtils - FileSystemUtilsインスタンス
   * @param {Object} codeAnalyzer - CodeAnalyzerインスタンス
   */
  constructor(projectRoot, fileSystemUtils, codeAnalyzer) {
    this.projectRoot = projectRoot;
    this.fileSystemUtils = fileSystemUtils;
    this.codeAnalyzer = codeAnalyzer;
  }

  /**
   * 基本情報を収集（package.json, README）
   */
  async collectBasicInfo() {
    console.log('Collecting basic project information...');
    
    const basicInfo = {
      name: '',
      description: '',
      dependencies: {}
    };

    try {
      const packageJson = await this._readPackageJson();
      basicInfo.name = packageJson.name || 'Unknown';
      basicInfo.description = packageJson.description || '';
      basicInfo.dependencies = {
        dependencies: packageJson.dependencies || {},
        devDependencies: packageJson.devDependencies || {}
      };
    } catch (error) {
      console.warn('Could not read package.json:', error.message);
    }

    try {
      const readmeContent = await this._readReadme();
      if (readmeContent) {
        // READMEの内容を優先（最初の500文字）
        basicInfo.description = readmeContent.substring(0, 500) + '...';
      }
    } catch (error) {
      console.warn('Could not read README:', error.message);
    }

    return basicInfo;
  }

  /**
   * 構造情報を収集（ファイルツリー、プロジェクト構造）
   */
  async collectStructureInfo() {
    console.log('Collecting project structure...');
    
    const structureInfo = {
      structure: '',
      fileTree: ''
    };

    try {
      structureInfo.structure = await this.fileSystemUtils.getProjectStructure();
    } catch (error) {
      console.warn('Could not get project structure:', error.message);
    }

    try {
      console.log('Generating detailed file tree...');
      structureInfo.fileTree = await this.fileSystemUtils.getDetailedFileTree();
    } catch (error) {
      console.warn('Could not get detailed file tree:', error.message);
    }

    return structureInfo;
  }

  /**
   * コード分析情報を収集
   */
  async collectCodeAnalysis() {
    console.log('Collecting code analysis...');
    
    const codeInfo = {
      fileAnalysis: [],
      functionHierarchy: {}
    };

    try {
      console.log('Analyzing all files...');
      codeInfo.fileAnalysis = await this.codeAnalyzer.analyzeAllFiles();
    } catch (error) {
      console.warn('Could not analyze files:', error.message);
    }

    try {
      console.log('Analyzing function call hierarchy...');
      codeInfo.functionHierarchy = await this.codeAnalyzer.analyzeFunctionCallHierarchy(codeInfo.fileAnalysis);
    } catch (error) {
      console.warn('Could not analyze function hierarchy:', error.message);
      codeInfo.functionHierarchy = {};
    }

    return codeInfo;
  }

  /**
   * 全情報を統合収集
   */
  async collectAll() {
    console.log('Collecting all project information...');

    const [basicInfo, structureInfo, codeInfo] = await Promise.all([
      this.collectBasicInfo(),
      this.collectStructureInfo(),
      this.collectCodeAnalysis()
    ]);

    return {
      ...basicInfo,
      ...structureInfo,
      ...codeInfo
    };
  }

  /**
   * package.json を読み込み
   * @private
   */
  async _readPackageJson() {
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    const content = await fs.readFile(packageJsonPath, 'utf-8');
    return JSON.parse(content);
  }

  /**
   * README を読み込み（.ja.md を優先）
   * @private
   */
  async _readReadme() {
    let readmePath = path.join(this.projectRoot, 'README.ja.md');
    
    try {
      await fs.access(readmePath);
    } catch {
      readmePath = path.join(this.projectRoot, 'README.md');
    }

    return await fs.readFile(readmePath, 'utf-8');
  }
}

module.exports = ProjectDataCollector;

```

### .github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs
```cjs
/**
 * プロジェクトデータ整形専用クラス
 * 分析結果を読みやすい形式にフォーマット
 */
class ProjectDataFormatter {
  /**
   * 技術スタックをフォーマット
   * @param {Object} techStack - 技術スタック情報
   * @returns {string} フォーマット済み技術スタック
   */
  formatTechStack(techStack) {
    let result = '';
    
    Object.entries(techStack).forEach(([category, items]) => {
      if (items.length > 0) {
        const categoryName = this._getCategoryName(category);
        result += `**${categoryName}:**\n${items.map(item => `  - ${item}`).join('\n')}\n\n`;
      }
    });
    
    return result || '技術スタック情報を取得できませんでした';
  }

  /**
   * ファイル詳細をフォーマット
   * @param {Array} fileAnalysis - ファイル分析結果
   * @returns {string} フォーマット済みファイル詳細
   */
  formatFileDetails(fileAnalysis) {
    return fileAnalysis.map(file => {
      return this._formatFileInfo(file);
    }).join('\n\n');
  }

  /**
   * 関数呼び出し階層をフォーマット
   * @param {Object} hierarchy - 関数階層オブジェクト
   * @returns {string} フォーマット済み階層テキスト
   */
  formatFunctionHierarchy(hierarchy) {
    if (!hierarchy || typeof hierarchy !== 'object' || Object.keys(hierarchy).length === 0) {
      return '関数呼び出し階層を分析できませんでした';
    }

    let result = '';
    const processedFunctions = new Set();

    // エントリーポイント（他から呼ばれない関数）を探す
    const entryPoints = Object.keys(hierarchy).filter(func =>
      hierarchy[func] && hierarchy[func].calledBy && hierarchy[func].calledBy.length === 0
    );

    entryPoints.forEach(entry => {
      result += this._buildHierarchyTree(hierarchy, entry, processedFunctions);
    });

    return result || '関数呼び出し階層を分析できませんでした';
  }

  /**
   * プロジェクト概要をフォーマット
   * @param {Object} projectInfo - プロジェクト情報
   * @returns {string} フォーマット済みプロジェクト概要
   */
  formatProjectSummary(projectInfo) {
    let summary = '';
    
    if (projectInfo.name) {
      summary += `# ${projectInfo.name}\n\n`;
    }
    
    if (projectInfo.description) {
      summary += `## 概要\n${projectInfo.description}\n\n`;
    }
    
    if (projectInfo.structure) {
      summary += `## ファイル構造\n\`\`\`\n${projectInfo.structure}\n\`\`\`\n\n`;
    }
    
    return summary;
  }

  /**
   * カテゴリー名を取得
   * @private
   */
  _getCategoryName(category) {
    const categoryNames = {
      frontend: 'フロントエンド',
      music: '音楽・オーディオ',
      backend: 'バックエンド',
      development: '開発ツール',
      testing: 'テスト',
      buildTools: 'ビルドツール',
      languageFeatures: '言語機能',
      automation: '自動化・CI/CD',
      standards: '開発標準'
    };
    
    return categoryNames[category] || category;
  }

  /**
   * ファイル情報をフォーマット
   * @private
   */
  _formatFileInfo(file) {
    const functions = file.functions.length > 0 ? file.functions.join(', ') : 'なし';
    const imports = file.imports.length > 0 ? file.imports.slice(0, 3).join(', ') : 'なし';
    
    return `**${file.path}** (${file.lines}行, ${file.size}バイト)\n  - 関数: ${functions}\n  - インポート: ${imports}`;
  }

  /**
   * 階層ツリーを構築
   * @private
   */
  _buildHierarchyTree(hierarchy, func, processedFunctions, depth = 0) {
    if (processedFunctions.has(func) || depth > 3) return '';
    processedFunctions.add(func);

    const indent = '  '.repeat(depth);
    let tree = `${indent}- ${func} (${hierarchy[func].file})\n`;

    if (hierarchy[func] && hierarchy[func].calls) {
      hierarchy[func].calls.forEach(calledFunc => {
        if (hierarchy[calledFunc]) {
          tree += this._buildHierarchyTree(hierarchy, calledFunc, processedFunctions, depth + 1);
        }
      });
    }

    return tree;
  }
}

module.exports = ProjectDataFormatter;

```

### .github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs
```cjs
const BaseGenerator = require('../shared/BaseGenerator.cjs');
const ProjectAnalysisOrchestrator = require('./ProjectAnalysisOrchestrator.cjs');

/**
 * プロジェクト概要生成器
 * AI生成に特化した軽量クラス
 */
class ProjectOverviewGenerator extends BaseGenerator {
  /**
   * @param {string} overviewPromptPath - プロジェクト概要プロンプトのパス（必須）
   * @param {string} overviewPath - プロジェクト概要出力先パス（必須）
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(overviewPromptPath, overviewPath, projectRoot) {
    super(projectRoot);

    if (!overviewPromptPath) {
      throw new Error('overviewPromptPath is required as the first argument');
    }
    if (!overviewPath) {
      throw new Error('overviewPath is required as the second argument');
    }

    this.overviewPromptPath = overviewPromptPath;
    this.overviewPath = overviewPath;
    this.orchestrator = new ProjectAnalysisOrchestrator(projectRoot);
  }

  /**
   * メイン実行関数
   * @returns {Promise<string>} 生成されたファイルのパス
   */
  async run() {
    try {
      console.log('Starting project overview generation...');

      // 環境変数とコミット状況をチェック
      const shouldContinue = await this.validateEnvironment();
      if (!shouldContinue) {
        return null;
      }

      // データ収集・分析（新しいオーケストレーターを使用）
      const [formattedReport, prompt] = await Promise.all([
        this.orchestrator.generateFormattedReport(),
        this.loadPrompt(this.overviewPromptPath)
      ]);

      // プロジェクト概要生成
      const overview = await this.generateOverview(formattedReport, prompt);

      // ファイル保存
      const filename = await this.saveToFile(overview, this.overviewPath);

      console.log('Project overview generation completed successfully!');
      console.log(`Generated file: ${filename}`);
      return filename;

    } catch (error) {
      console.error('Project overview generation failed:', error.message);
      if (error.response) {
        console.error('API Response:', error.response);
      }
      throw error;
    }
  }

  /**
   * プロジェクト概要を生成
   * @param {Object} formattedReport - フォーマット済み分析結果
   * @param {string} prompt - プロンプト内容
   * @returns {Promise<string>} 生成された概要
   */
  async generateOverview(formattedReport, prompt) {
    console.log('Generating project overview with Gemini API...');

    const overviewPrompt = this._buildPrompt(formattedReport, prompt);

    try {
      const result = await this.generateContent(overviewPrompt);
      return this._processAIResponse(result.response.text());
    } catch (error) {
      console.error('Error generating project overview:', error.message);
      throw error;
    }
  }

  /**
   * プロンプトを構築
   * @private
   */
  _buildPrompt(formattedReport, basePrompt) {
    return `
${basePrompt}

以下のプロジェクト情報を参考にして要約を生成してください：

## プロジェクト情報
名前: ${formattedReport.name}
説明: ${formattedReport.description}

依存関係:
${JSON.stringify(formattedReport.dependencies, null, 2)}

## 技術スタック
${formattedReport.formatted.techStack}

## ファイル階層ツリー
${formattedReport.fileTree}

## ファイル詳細分析
${formattedReport.formatted.fileDetails}

## 関数呼び出し階層
${formattedReport.formatted.functionHierarchy}

## プロジェクト構造（ファイル一覧）
${formattedReport.structure}

上記の情報を基に、プロンプトで指定された形式でプロジェクト概要を生成してください。
特に以下の点を重視してください：
- 技術スタックは各カテゴリごとに整理して説明
- ファイル階層ツリーは提供された構造をそのまま使用
- ファイルの説明は各ファイルの実際の内容と機能に基づく
- 関数の説明は実際に検出された関数の役割に基づく
- 関数呼び出し階層は実際の呼び出し関係に基づく
`;
  }

  /**
   * AI応答を処理
   * @private
   */
  _processAIResponse(response) {
    return this.cleanMarkdownCodeBlock(response);
  }
}

module.exports = ProjectOverviewGenerator;

```

### .github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs
```cjs
/**
 * 技術スタック判定専用クラス
 * プロジェクトの依存関係とファイル構成から技術スタックを分析
 */
class TechStackAnalyzer {
  /**
   * @param {Object} fileSystemUtils - FileSystemUtilsインスタンス
   */
  constructor(fileSystemUtils) {
    this.fileSystemUtils = fileSystemUtils;
  }

  /**
   * 技術スタックを分析
   * @param {Object} packageJson - package.jsonの内容
   * @param {Object} projectInfo - プロジェクト情報
   */
  analyzeTechStack(packageJson, projectInfo = {}) {
    const techStack = {
      frontend: [],
      music: [],
      backend: [],
      development: [],
      testing: [],
      buildTools: [],
      languageFeatures: [],
      automation: [],
      standards: []
    };

    const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };

    // 各カテゴリーの技術を検出
    this.detectFrontendTech(deps, techStack.frontend);
    this.detectMusicTech(deps, techStack.music);
    this.detectDevTools(packageJson, techStack.development);
    this.detectTestingTech(deps, techStack.testing);
    this.detectBuildTools(deps, techStack.buildTools);
    this.detectLanguageFeatures(packageJson, techStack.languageFeatures);
    this.detectAutomation(techStack.automation);
    this.detectStandards(techStack.standards);

    return techStack;
  }

  /**
   * フロントエンド技術を検出
   */
  detectFrontendTech(deps, frontendArray) {
    if (this.fileSystemUtils.checkFileExists('src/index.html')) {
      frontendArray.push('HTML5 - ブラウザベースのMMLプレイヤー');
    }
  }

  /**
   * 音楽・オーディオ技術を検出
   */
  detectMusicTech(deps, musicArray) {
    if (this._checkDependency(deps, 'tonejs') || this.fileSystemUtils.checkFileExists('src/**/*.js', 'Tone.js')) {
      musicArray.push('Tone.js - Web Audio API音声ライブラリ');
      musicArray.push('Web Audio API - ブラウザ音声技術（Tone.js経由）');
    }

    if (this.fileSystemUtils.checkFileExists('src/index.html')) {
      const htmlContent = this.fileSystemUtils.readFileContent('src/index.html');
      if (htmlContent && htmlContent.includes('unpkg.com/tone')) {
        musicArray.push('Tone.js CDN - unpkg経由でのライブラリ配信');
      }
    }

    if (this.fileSystemUtils.checkFileExists('src/grammar.pegjs') || this.fileSystemUtils.checkFileExists('src/**/*.js')) {
      musicArray.push('MML (Music Macro Language) - 音楽記法パーサー');
    }
  }

  /**
   * 開発ツールを検出
   */
  detectDevTools(packageJson, devArray) {
    // 基本ランタイム
    devArray.push('Node.js runtime - JavaScript実行環境');

    // npm scripts
    if (packageJson.scripts && Object.keys(packageJson.scripts).length > 0) {
      const scriptCount = Object.keys(packageJson.scripts).length;
      devArray.push(`npm scripts - タスクランナー (${scriptCount}個のスクリプト)`);
    }

    // パッケージマネージャー
    if (packageJson.packageManager === 'pnpm' || this.fileSystemUtils.checkFileExists('pnpm-lock.yaml')) {
      devArray.push('pnpm - 高速で効率的なパッケージマネージャー');
    }

    // AI・API関連
    const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
    if (deps['@google/generative-ai']) {
      devArray.push('Google Generative AI - AI文書生成サポート');
    }

    if (deps['@octokit/rest']) {
      devArray.push('@octokit/rest - GitHub API連携');
    }
  }

  /**
   * テスト技術を検出
   */
  detectTestingTech(deps, testingArray) {
    if (this._checkDependency(deps, 'vitest')) {
      testingArray.push('Vitest - 高速なViteベースのテストフレームワーク');
    }

    if (this.fileSystemUtils.checkFileExists('.gitignore')) {
      const gitignoreContent = this.fileSystemUtils.readFileContent('.gitignore');
      if (gitignoreContent && gitignoreContent.includes('TDD開発環境')) {
        testingArray.push('TDD (Test-Driven Development) - テスト駆動開発手法');
      }
    }
  }

  /**
   * ビルドツールを検出
   */
  detectBuildTools(deps, buildArray) {
    if (this._checkDependency(deps, 'peggy')) {
      buildArray.push('Peggy - PEG (Parsing Expression Grammar) パーサージェネレーター');
    }

    if (this.fileSystemUtils.checkFileExists('src/grammar.pegjs')) {
      buildArray.push('PEG文法定義 - MML音楽記法のパーサー生成');
    }
  }

  /**
   * 言語機能を検出
   */
  detectLanguageFeatures(packageJson, languageArray) {
    if (packageJson.type === 'module') {
      languageArray.push('ES Modules - モダンなJavaScriptモジュールシステム');
    }
  }

  /**
   * 自動化・CI/CDを検出
   */
  detectAutomation(automationArray) {
    if (this.fileSystemUtils.checkFileExists('.github/workflows')) {
      const workflowFiles = this._detectWorkflows();
      if (workflowFiles.length > 0) {
        automationArray.push(`GitHub Actions - CI/CD自動化 (${workflowFiles.length}個のワークフロー)`);

        // 特定のワークフローの詳細を追加
        workflowFiles.forEach(workflow => {
          const workflowName = workflow.replace('.yml', '').replace('.yaml', '');
          if (workflowName.includes('summary')) {
            automationArray.push('  - プロジェクト要約自動生成');
          }
          if (workflowName.includes('translate')) {
            automationArray.push('  - README多言語翻訳');
            automationArray.push('  - i18n automation - 自動翻訳ワークフロー');
          }
          if (workflowName.includes('issue')) {
            automationArray.push('  - Issue自動管理');
          }
        });
      }
    }
  }

  /**
   * 開発標準を検出
   */
  detectStandards(standardsArray) {
    if (this.fileSystemUtils.checkFileExists('.editorconfig')) {
      standardsArray.push('EditorConfig - コード統一ルール');
    }
  }

  /**
   * 依存関係をチェック
   * @private
   */
  _checkDependency(deps, packageName) {
    return deps.hasOwnProperty(packageName);
  }

  /**
   * ワークフローファイルを検出
   * @private
   */
  _detectWorkflows() {
    return this.fileSystemUtils.getWorkflowFiles();
  }
}

module.exports = TechStackAnalyzer;

```

### .github_automation/project_summary/scripts/shared/BaseGenerator.cjs
```cjs
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs').promises;
const path = require('path');

/**
 * 生成器の共通基底クラス
 * 全ての生成器で共通して使用される機能を提供
 */
class BaseGenerator {
  /**
   * @param {string} projectRoot - プロジェクトルートパス（必須）
   */
  constructor(projectRoot) {
    if (!projectRoot) {
      throw new Error('projectRoot is required');
    }

    this.projectRoot = projectRoot;
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
  }

  /**
   * Geminiのmodel.generateContentをラップし、503エラー時に指数バックオフでリトライする
   * @param {...any} args - model.generateContentの引数
   * @returns {Promise<any>}
   */
  async generateContent(...args) {
    const initialDelay = 60 * 1000; // 60秒
    const maxDelay = 3600 * 1000; // 3600秒（1時間）
    let delay = initialDelay;
    while (true) {
      if (delay > maxDelay) {
        throw new Error(`generateContent: 遅延が最大値(${maxDelay}ms)を超えたため中断します`);
      }
      try {
        return await this.model.generateContent(...args);
      } catch (err) {
        // 503エラーのみリトライ
        if (err && err.status === 503) {
          const now = new Date(Date.now() + (9 * 60 * 60 * 1000)); // JST
          const iso = now.toISOString().replace('T', ' ').split('.')[0];
          console.warn(`[${iso} JST] Gemini generateContent: 503エラー、delay=${delay}msでリトライ`);
          await new Promise(res => setTimeout(res, delay));
          delay = Math.min(delay * 2, maxDelay);
        } else {
          // その他のエラーは即座にthrow
          throw err;
        }
      }
    }
  }

  /**
   * 環境変数とコミット状況をチェック
   * @returns {Promise<boolean>} 実行を続行するかどうか
   */
  async validateEnvironment() {
    // 環境変数チェック
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY environment variable is not set');
    }

    // GitUtilsが必要な場合は子クラスでオーバーライド
    return true;
  }

  /**
   * Gemini APIの出力から不要なコードブロック（```markdown等）を除去
   * @param {string} text - クリーニング対象のテキスト
   * @returns {string} クリーニング済みテキスト
   */
  cleanMarkdownCodeBlock(text) {
    if (!text) return '';
    // 先頭の ```markdown または ``` を除去
    text = text.replace(/^```markdown\s*\n?/i, '');
    text = text.replace(/^```\s*\n?/i, '');
    // 末尾の ``` を除去
    text = text.replace(/\n?```\s*$/i, '');
    return text.trim();
  }

  /**
   * 汎用ファイル保存機能
   * @param {string} content - 保存するコンテンツ
   * @param {string} outputPath - 出力先パス
   * @returns {Promise<string>} 保存されたファイルパス
   */
  async saveToFile(content, outputPath) {
    const now = new Date();
    const jstDate = new Date(now.getTime() + (9 * 60 * 60 * 1000)); // JST変換
    const dateStr = jstDate.toISOString().split('T')[0]; // YYYY-MM-DD
    const timeStr = jstDate.toISOString().replace('T', ' ').split('.')[0]; // YYYY-MM-DD HH:mm:ss

    // ディレクトリが存在しない場合は作成
    try {
      await fs.mkdir(path.dirname(outputPath), { recursive: true });
    } catch (error) {
      // ディレクトリ作成エラーは無視（既に存在する場合など）
    }

    // ファイル保存
    const fileContent = `Last updated: ${dateStr}\n\n${content}\n\n---\nGenerated at: ${timeStr} JST\n`;
    await fs.writeFile(outputPath, fileContent, 'utf-8');
    console.log(`Content saved to: ${path.resolve(outputPath)}`);

    return outputPath;
  }

  /**
   * プロンプトファイルを読み込み
   * @param {string} promptPath - プロンプトファイルのパス
   * @returns {Promise<string>} プロンプトの内容
   */
  async loadPrompt(promptPath) {
    try {
      return await fs.readFile(promptPath, 'utf-8');
    } catch (error) {
      console.warn(`Could not read ${promptPath}:`, error.message);
      throw new Error(`${promptPath} could not be read`);
    }
  }
}

module.exports = BaseGenerator;

```

### .github_automation/project_summary/scripts/shared/FileSystemUtils.cjs
```cjs
const fs = require('fs').promises;
const path = require('path');

/**
 * ファイルシステム操作を担当するユーティリティクラス
 */
class FileSystemUtils {
  constructor(projectRoot) {
    if (!projectRoot) {
      throw new Error('projectRoot is required');
    }
    this.projectRoot = projectRoot;
  }

  /**
   * ファイル存在チェック（簡易版）
   */
  checkFileExists(pattern, keyword = null) {
    try {
      if (pattern.includes('**')) {
        // glob的なパターンの場合は簡易チェック
        const basePath = pattern.split('**')[0];
        const fullPath = path.join(this.projectRoot, basePath);
        return require('fs').existsSync(fullPath);
      } else {
        // 具体的なファイルパス
        const fullPath = path.join(this.projectRoot, pattern);
        return require('fs').existsSync(fullPath);
      }
    } catch (error) {
      return false;
    }
  }

  /**
   * GitHub Actionsワークフローファイルを取得
   */
  getWorkflowFiles() {
    try {
      const workflowsPath = path.join(this.projectRoot, '.github/workflows');

      if (!require('fs').existsSync(workflowsPath)) {
        return [];
      }

      const files = require('fs').readdirSync(workflowsPath);
      return files.filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
    } catch (error) {
      return [];
    }
  }

  /**
   * ファイル内容を読み取る（簡易版）
   */
  readFileContent(filePath) {
    try {
      const fullPath = path.join(this.projectRoot, filePath);

      if (require('fs').existsSync(fullPath)) {
        return require('fs').readFileSync(fullPath, 'utf-8');
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  /**
   * プロジェクト構造を取得（クロスプラットフォーム対応）
   */
  async getProjectStructure() {
    const extensions = ['.js', '.ts', '.json', '.md', '.html', '.css', '.pegjs'];
    const excludeDirs = ['.git', 'node_modules', '.github'];
    const files = [];

    const walkDir = async (dir, relativePath = '') => {
      try {
        const items = await fs.readdir(path.join(this.projectRoot, dir));

        for (const item of items) {
          const fullPath = path.join(dir, item);
          const absolutePath = path.join(this.projectRoot, fullPath);
          const relativeItemPath = path.join(relativePath, item);

          // 除外ディレクトリをスキップ
          if (excludeDirs.includes(item)) {
            continue;
          }

          try {
            const stat = await fs.stat(absolutePath);
            if (stat.isDirectory()) {
              await walkDir(fullPath, relativeItemPath);
            } else if (stat.isFile()) {
              const ext = path.extname(item);
              if (extensions.includes(ext)) {
                files.push(relativeItemPath.replace(/\\/g, '/'));
                if (files.length >= 30) break; // 最大30ファイル
              }
            }
          } catch (error) {
            // ファイル/ディレクトリアクセスエラーをスキップ
            continue;
          }
        }
      } catch (error) {
        // ディレクトリ読み取りエラーをスキップ
      }
    };

    await walkDir('.');
    return files.join('\n');
  }

  /**
   * 詳細なファイル階層ツリーを生成
   */
  async getDetailedFileTree() {
    const excludeDirs = ['.git', 'node_modules', '.github'];
    const tree = [];

    const buildTree = async (dir, depth = 0) => {
      try {
        const items = await fs.readdir(path.join(this.projectRoot, dir));
        items.sort();

        for (const item of items) {
          if (excludeDirs.includes(item)) continue;

          const fullPath = path.join(dir, item);
          const absolutePath = path.join(this.projectRoot, fullPath);
          const indent = '  '.repeat(depth);

          try {
            const stat = await fs.stat(absolutePath);
            if (stat.isDirectory()) {
              tree.push(`${indent}📁 ${item}/`);
              await buildTree(fullPath, depth + 1);
            } else {
              const ext = path.extname(item);
              const icon = this.getFileIcon(ext);
              tree.push(`${indent}${icon} ${item}`);
            }
          } catch (error) {
            continue;
          }
        }
      } catch (error) {
        // ディレクトリ読み取りエラーをスキップ
      }
    };

    await buildTree('.');
    return tree.join('\n');
  }

  /**
   * ファイル拡張子に応じたアイコンを取得
   */
  getFileIcon(ext) {
    const icons = {
      '.js': '📜',
      '.ts': '📘',
      '.json': '📊',
      '.md': '📖',
      '.html': '🌐',
      '.css': '🎨',
      '.pegjs': '📝'
    };
    return icons[ext] || '📄';
  }
}

module.exports = FileSystemUtils;

```

### .github_automation/translate/docs/TRANSLATION_SETUP.md
```md
# README Auto-Translation Setup

このプロジェクトでは、GitHub ActionsとGemini APIを使用して、README.ja.mdが更新されたときに自動的にREADME.mdを英語に翻訳します。

## ファイル構成

```
.github/
├── workflows/
│   └── translate-readme.yml    # GitHub Actionsワークフロー
├── scripts/
│   └── translate-readme.js     # 翻訳スクリプト
└── docs/
    └── TRANSLATION_SETUP.md    # このファイル
```

## セットアップ手順

### 1. Gemini API Keyの取得

1. [Google AI Studio](https://aistudio.google.com/)にアクセス
2. 「Get API key」をクリック
3. 新しいAPI keyを作成
4. API keyをコピーして保存

### 2. GitHub Secretsの設定

1. GitHubリポジトリページで「Settings」タブを開く
2. 左サイドバーの「Secrets and variables」→「Actions」をクリック
3. 「New repository secret」をクリック
4. 以下のシークレットを追加：
   - Name: `GEMINI_API_KEY`
   - Secret: 上記で取得したGemini API Key

### 3. 動作確認

0. README.mdファイルが存在しない場合は任意内容のダミーを作成（ないと生成結果がcommitされません）
1. README.ja.mdファイルを編集
2. 変更をcommitしてpush
3. GitHub Actionsタブで翻訳ワークフローが実行されることを確認
4. README.mdが自動生成されることを確認

## ワークフローの詳細

- **トリガー**: README.ja.mdファイルがmain/masterブランチにpushされたとき
- **処理**: Gemini APIを使用してREADME.ja.mdを英語に翻訳し、README.mdを更新
- **自動コミット**: 翻訳されたREADME.mdは自動的にコミット・プッシュされます

## 手動実行

GitHub Actionsタブから「Auto Translate README」ワークフローを手動で実行することも可能です。

## 注意事項

- Gemini API の利用制限に注意してください
- 大きなREADMEファイルの場合、API制限に引っかかる可能性があります
- 翻訳の品質は完璧ではない場合があるため、必要に応じて手動で調整してください

## トラブルシューティング

### よくある問題

1. **API Key エラー**
   - GitHub Secretsが正しく設定されているか確認
   - API Keyが有効か確認

2. **翻訳が実行されない**
   - README.ja.mdがmain/masterブランチにpushされているか確認
   - GitHub Actionsが有効になっているか確認

3. **ファイルパスエラー**
   - スクリプトは`.github/scripts/`ディレクトリから実行される前提
   - プロジェクトルートの相対パスが正しく設定されているか確認

```

### .github_automation/translate/scripts/translate-readme.cjs
```cjs
const BaseGenerator = require('../../project_summary/scripts/shared/BaseGenerator.cjs');
const fs = require('fs').promises;

async function translateReadme() {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY environment variable is not set');
    }

    console.log('Starting README translation process...');

    // 引数から対象ファイル名を取得（相対パスまたは絶対パスをそのまま使用）
    const targetFile = process.argv[2];
    if (!targetFile) {
      throw new Error('Target file name is required');
    }

    // ファイルの存在確認（受け取ったパスで直接確認）
    try {
      await fs.access(targetFile);
    } catch {
      throw new Error(`${targetFile} file not found`);
    }

    // 翻訳先ファイル名の生成（受け取ったファイル名に基づく）
    const readmePath = targetFile.replace('.ja.md', '.md');

    const japaneseContent = await fs.readFile(targetFile, 'utf-8');
    if (!japaneseContent.trim()) {
      console.log(`${targetFile} is empty, skipping translation.`);
      return;
    }

    console.log(`${targetFile} length: ${japaneseContent.length} chars`);
    console.log('Sending translation request to Gemini API...');

    const prompt = `Please translate the following Japanese Markdown text to English.
Keep the Markdown formatting intact, including headers, links, code blocks, and other formatting elements.
Make the translation natural and professional for an English-speaking developer audience.
If there are any technical terms or project-specific terms, keep them appropriate for a software development context.
Preserve all URLs, code snippets, and special formatting exactly as they are.

IMPORTANT: Return ONLY the translated Markdown content. Do NOT wrap the response in code blocks or add any extra formatting markers like \`\`\`markdown or \`\`\`.

Japanese text to translate:
${japaneseContent}`;

    const generator = new BaseGenerator(process.cwd());
    const result = await generator.generateContent(prompt);
    let translatedText = generator.cleanMarkdownCodeBlock(result.response.text());

    // 既存ファイルと比較
    let existingContent = '';
    try {
      existingContent = await fs.readFile(readmePath, 'utf-8');
    } catch {
      console.log(`${readmePath} does not exist yet, will create new file`);
    }

    if (existingContent === translatedText) {
      console.log('No update needed');
      return;
    }

    await fs.writeFile(readmePath, translatedText, 'utf-8');
    console.log(`${readmePath} updated successfully!`);
  } catch (error) {
    console.error('Translation failed:', error.message);
    process.exit(1);
  }
}

translateReadme();

```

### .gitignore
```gitignore
.secrets
copilot-instructions.md

```

### .vscode/settings.json
```json
{
    "files.trimTrailingWhitespace": true
}

```

### LICENSE
```LICENSE
MIT License

Copyright (c) 2025 cat2151

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

### README.ja.md
```md
# GitHub Actions 共通ワークフロー集

このリポジトリは、**複数プロジェクトで使い回せるGitHub Actions共通ワークフロー集**です

<p align="left">
  <a href="README.ja.md"><img src="https://img.shields.io/badge/🇯🇵-Japanese-red.svg" alt="Japanese"></a>
  <a href="README.md"><img src="https://img.shields.io/badge/🇺🇸-English-blue.svg" alt="English"></a>
</p>

# 3行で説明
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## Quick Links
| 項目 | リンク |
|------|--------|
| 📖 プロジェクト概要 | [generated-docs/project-overview.md](generated-docs/project-overview.md) |
| 📖 コールグラフ | [generated-docs/callgraph.html](https://cat2151.github.io/github-actions/generated-docs/callgraph.html) |
| 📊 開発状況 | [generated-docs/development-status.md](generated-docs/development-status.md) |

# notes
- まだ共通化の作業中です
- まだワークフロー内容を改善中です

※README.md は README.ja.md を元にGeminiの翻訳でGitHub Actionsで自動生成しています

```

### README.md
```md
# GitHub Actions Shared Workflow Collection

This repository is a **collection of GitHub Actions shared workflows reusable across multiple projects.**

<p align="left">
  <a href="README.ja.md"><img src="https://img.shields.io/badge/🇯🇵-Japanese-red.svg" alt="Japanese"></a>
  <a href="README.md"><img src="https://img.shields.io/badge/🇺🇸-English-blue.svg" alt="English"></a>
</p>

# Summary in 3 Points
- 🚀 Simplify GitHub Actions management for individual projects.
- 🔗 With standardized workflows, just call them from any project.
- ✅ Unified maintenance allows you to focus on project development.

## Quick Links
| Item | Link |
|------|--------|
| 📖 Project Overview | [generated-docs/project-overview.md](generated-docs/project-overview.md) |
| 📖 Call Graph | [generated-docs/callgraph.html](https://cat2151.github.io/github-actions/generated-docs/callgraph.html) |
| 📊 Development Status | [generated-docs/development-status.md](generated-docs/development-status.md) |

# notes
- Still in the process of standardizing workflows.
- Still improving workflow content.

Note: README.md is automatically generated by GitHub Actions based on README.ja.md and translated by Gemini.
```

### generated-docs/callgraph.html
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Function Call Graph with Source Links</title>
    <script src="https://unpkg.com/cytoscape@3.29.2/dist/cytoscape.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="header">
        <h1>Function Call Graph with Source Links</h1>
        <div class="stats-container">
            <div class="stats">
                <div class="stat-value">3</div>
                <div class="stat-label">Functions</div>
            </div>
            <div class="stats">
                <div class="stat-value">2</div>
                <div class="stat-label">Call Relationships</div>
            </div>
            <div class="stats">
                <div class="stat-value">2</div>
                <div class="stat-label">With Callee Location</div>
            </div>
        </div>
    </div>

    <div class="main-container">
        <div class="graph-container">
            <div id="cy"></div>
            <div class="controls">
                <button class="control-button" onclick="resetLayout()">Reset Layout</button>
                <button class="control-button" onclick="switchLayout(this)">レイアウト切替</button>
                <button class="control-button" onclick="fitToContent()">Fit to Content</button>
                <button class="control-button" onclick="toggleNodeLabels()">Toggle Labels</button>
                <button class="control-button" onclick="toggleCalleeLocationFilter()">Hide No-Callee-Location</button>
                <button class="control-button" onclick="toggleInfoPanel()">Toggle Info Panel</button>
            </div>
        </div>

        <div id="info-panel" class="info-panel hidden">
            <div class="info-title">選択した要素の詳細</div>
            <div id="info-content"></div>
        </div>
    </div>

    <div class="generated-time">
        Generated: 2025/9/8 20:07:47
    </div>

    <script>
      const graphData = {
  "nodes": [
    {
      "id": "main (main.js:6)",
      "label": "main (main.js:6)",
      "locations": [
        {
          "file": "src/main.js",
          "line": 7,
          "column": 5,
          "type": "caller",
          "sourceLine": "    greet('World');"
        }
      ],
      "hasLocationInfo": true,
      "hasCalleeLocationInfo": true
    },
    {
      "id": "greet (main.js:2)",
      "label": "greet (main.js:2)",
      "locations": [
        {
          "file": "src/main.js",
          "line": 7,
          "column": 5,
          "type": "definition",
          "sourceLine": "    greet('World');"
        }
      ],
      "hasLocationInfo": true,
      "hasCalleeLocationInfo": true,
      "calleeFncDef": "function greet(name) {"
    },
    {
      "id": "global (main.js:10)",
      "label": "global (main.js:10)",
      "locations": [
        {
          "file": "src/main.js",
          "line": 10,
          "column": 1,
          "type": "caller",
          "sourceLine": "main();"
        }
      ],
      "hasLocationInfo": true,
      "hasCalleeLocationInfo": false
    }
  ],
  "edges": [
    {
      "id": "edge-0",
      "source": "main (main.js:6)",
      "target": "greet (main.js:2)",
      "hasCalleeLocationInfo": true,
      "file": "src/main.js",
      "line": 7,
      "column": 5,
      "location": "src/main.js:7:5",
      "hasLocationInfo": true,
      "sourceLine": "    greet('World');"
    },
    {
      "id": "edge-1",
      "source": "global (main.js:10)",
      "target": "main (main.js:6)",
      "hasCalleeLocationInfo": true,
      "file": "src/main.js",
      "line": 10,
      "column": 1,
      "location": "src/main.js:10:1",
      "hasLocationInfo": true,
      "sourceLine": "main();"
    }
  ]
};
      const repo = "cat2151/github-actions";
      const branch = "main";
    </script>
    <script src="callgraph.js"></script>
</body>
</html>
```

### generated-docs/development-status-generated-prompt.md
```md
Last updated: 2025-09-08

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
以下の開発状況情報を参考にして要約を生成してください：

## プロジェクトのファイル一覧
- .git/FETCH_HEAD
- .git/HEAD
- .git/config
- .git/config.worktree
- .git/description
- .git/hooks/applypatch-msg.sample
- .git/hooks/commit-msg.sample
- .git/hooks/fsmonitor-watchman.sample
- .git/hooks/post-update.sample
- .git/hooks/pre-applypatch.sample
- .git/hooks/pre-commit.sample
- .git/hooks/pre-merge-commit.sample
- .git/hooks/pre-push.sample
- .git/hooks/pre-rebase.sample
- .git/hooks/pre-receive.sample
- .git/hooks/prepare-commit-msg.sample
- .git/hooks/push-to-checkout.sample
- .git/hooks/sendemail-validate.sample
- .git/hooks/update.sample
- .git/index
- .git/info/exclude
- .git/logs/HEAD
- .git/logs/refs/heads/main
- .git/logs/refs/remotes/origin/main
- .git/objects/pack/pack-d9dc01d66cd6ffb9cfdb63bb11d471fa3519d651.idx
- .git/objects/pack/pack-d9dc01d66cd6ffb9cfdb63bb11d471fa3519d651.pack
- .git/objects/pack/pack-d9dc01d66cd6ffb9cfdb63bb11d471fa3519d651.rev
- .git/refs/heads/main
- .git/refs/remotes/origin/main
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
- node_modules/.package-lock.json
- node_modules/@google/generative-ai/LICENSE
- node_modules/@google/generative-ai/README.md
- node_modules/@google/generative-ai/dist/generative-ai.d.ts
- node_modules/@google/generative-ai/dist/index.js
- node_modules/@google/generative-ai/dist/index.js.map
- node_modules/@google/generative-ai/dist/index.mjs
- node_modules/@google/generative-ai/dist/index.mjs.map
- node_modules/@google/generative-ai/dist/scripts/check-format.d.ts
- node_modules/@google/generative-ai/dist/scripts/format-patterns.d.ts
- node_modules/@google/generative-ai/dist/scripts/license.d.ts
- node_modules/@google/generative-ai/dist/scripts/run-format.d.ts
- node_modules/@google/generative-ai/dist/server/index.js
- node_modules/@google/generative-ai/dist/server/index.js.map
- node_modules/@google/generative-ai/dist/server/index.mjs
- node_modules/@google/generative-ai/dist/server/index.mjs.map
- node_modules/@google/generative-ai/dist/server/scripts/check-format.d.ts
- node_modules/@google/generative-ai/dist/server/scripts/format-patterns.d.ts
- node_modules/@google/generative-ai/dist/server/scripts/license.d.ts
- node_modules/@google/generative-ai/dist/server/scripts/run-format.d.ts
- node_modules/@google/generative-ai/dist/server/server.d.ts
- node_modules/@google/generative-ai/dist/server/src/errors.d.ts
- node_modules/@google/generative-ai/dist/server/src/gen-ai.d.ts
- node_modules/@google/generative-ai/dist/server/src/index.d.ts
- node_modules/@google/generative-ai/dist/server/src/methods/chat-session-helpers.d.ts
- node_modules/@google/generative-ai/dist/server/src/methods/chat-session.d.ts
- node_modules/@google/generative-ai/dist/server/src/methods/count-tokens.d.ts
- node_modules/@google/generative-ai/dist/server/src/methods/embed-content.d.ts
- node_modules/@google/generative-ai/dist/server/src/methods/generate-content.d.ts
- node_modules/@google/generative-ai/dist/server/src/models/generative-model.d.ts
- node_modules/@google/generative-ai/dist/server/src/requests/request-helpers.d.ts
- node_modules/@google/generative-ai/dist/server/src/requests/request.d.ts
- node_modules/@google/generative-ai/dist/server/src/requests/response-helpers.d.ts
- node_modules/@google/generative-ai/dist/server/src/requests/stream-reader.d.ts
- node_modules/@google/generative-ai/dist/server/src/server/cache-manager.d.ts
- node_modules/@google/generative-ai/dist/server/src/server/constants.d.ts
- node_modules/@google/generative-ai/dist/server/src/server/file-manager.d.ts
- node_modules/@google/generative-ai/dist/server/src/server/index.d.ts
- node_modules/@google/generative-ai/dist/server/src/server/request.d.ts
- node_modules/@google/generative-ai/dist/server/types/content.d.ts
- node_modules/@google/generative-ai/dist/server/types/enums.d.ts
- node_modules/@google/generative-ai/dist/server/types/function-calling.d.ts
- node_modules/@google/generative-ai/dist/server/types/index.d.ts
- node_modules/@google/generative-ai/dist/server/types/requests.d.ts
- node_modules/@google/generative-ai/dist/server/types/responses.d.ts
- node_modules/@google/generative-ai/dist/server/types/search-grounding.d.ts
- node_modules/@google/generative-ai/dist/server/types/server/caching.d.ts
- node_modules/@google/generative-ai/dist/server/types/server/files.d.ts
- node_modules/@google/generative-ai/dist/server/types/server/index.d.ts
- node_modules/@google/generative-ai/dist/server/types/server/shared.d.ts
- node_modules/@google/generative-ai/dist/src/errors.d.ts
- node_modules/@google/generative-ai/dist/src/gen-ai.d.ts
- node_modules/@google/generative-ai/dist/src/index.d.ts
- node_modules/@google/generative-ai/dist/src/methods/chat-session-helpers.d.ts
- node_modules/@google/generative-ai/dist/src/methods/chat-session.d.ts
- node_modules/@google/generative-ai/dist/src/methods/count-tokens.d.ts
- node_modules/@google/generative-ai/dist/src/methods/embed-content.d.ts
- node_modules/@google/generative-ai/dist/src/methods/generate-content.d.ts
- node_modules/@google/generative-ai/dist/src/models/generative-model.d.ts
- node_modules/@google/generative-ai/dist/src/requests/request-helpers.d.ts
- node_modules/@google/generative-ai/dist/src/requests/request.d.ts
- node_modules/@google/generative-ai/dist/src/requests/response-helpers.d.ts
- node_modules/@google/generative-ai/dist/src/requests/stream-reader.d.ts
- node_modules/@google/generative-ai/dist/src/server/cache-manager.d.ts
- node_modules/@google/generative-ai/dist/src/server/constants.d.ts
- node_modules/@google/generative-ai/dist/src/server/file-manager.d.ts
- node_modules/@google/generative-ai/dist/src/server/index.d.ts
- node_modules/@google/generative-ai/dist/src/server/request.d.ts
- node_modules/@google/generative-ai/dist/tsdoc-metadata.json
- node_modules/@google/generative-ai/dist/types/content.d.ts
- node_modules/@google/generative-ai/dist/types/enums.d.ts
- node_modules/@google/generative-ai/dist/types/function-calling.d.ts
- node_modules/@google/generative-ai/dist/types/index.d.ts
- node_modules/@google/generative-ai/dist/types/requests.d.ts
- node_modules/@google/generative-ai/dist/types/responses.d.ts
- node_modules/@google/generative-ai/dist/types/search-grounding.d.ts
- node_modules/@google/generative-ai/dist/types/server/caching.d.ts
- node_modules/@google/generative-ai/dist/types/server/files.d.ts
- node_modules/@google/generative-ai/dist/types/server/index.d.ts
- node_modules/@google/generative-ai/dist/types/server/shared.d.ts
- node_modules/@google/generative-ai/package.json
- node_modules/@google/generative-ai/server/package.json
- node_modules/@octokit/auth-token/LICENSE
- node_modules/@octokit/auth-token/README.md
- node_modules/@octokit/auth-token/dist-bundle/index.js
- node_modules/@octokit/auth-token/dist-bundle/index.js.map
- node_modules/@octokit/auth-token/dist-src/auth.js
- node_modules/@octokit/auth-token/dist-src/hook.js
- node_modules/@octokit/auth-token/dist-src/index.js
- node_modules/@octokit/auth-token/dist-src/is-jwt.js
- node_modules/@octokit/auth-token/dist-src/with-authorization-prefix.js
- node_modules/@octokit/auth-token/dist-types/auth.d.ts
- node_modules/@octokit/auth-token/dist-types/hook.d.ts
- node_modules/@octokit/auth-token/dist-types/index.d.ts
- node_modules/@octokit/auth-token/dist-types/is-jwt.d.ts
- node_modules/@octokit/auth-token/dist-types/types.d.ts
- node_modules/@octokit/auth-token/dist-types/with-authorization-prefix.d.ts
- node_modules/@octokit/auth-token/package.json
- node_modules/@octokit/core/LICENSE
- node_modules/@octokit/core/README.md
- node_modules/@octokit/core/dist-src/index.js
- node_modules/@octokit/core/dist-src/version.js
- node_modules/@octokit/core/dist-types/index.d.ts
- node_modules/@octokit/core/dist-types/types.d.ts
- node_modules/@octokit/core/dist-types/version.d.ts
- node_modules/@octokit/core/package.json
- node_modules/@octokit/endpoint/LICENSE
- node_modules/@octokit/endpoint/README.md
- node_modules/@octokit/endpoint/dist-bundle/index.js
- node_modules/@octokit/endpoint/dist-bundle/index.js.map
- node_modules/@octokit/endpoint/dist-src/defaults.js
- node_modules/@octokit/endpoint/dist-src/endpoint-with-defaults.js
- node_modules/@octokit/endpoint/dist-src/index.js
- node_modules/@octokit/endpoint/dist-src/merge.js
- node_modules/@octokit/endpoint/dist-src/parse.js
- node_modules/@octokit/endpoint/dist-src/util/add-query-parameters.js
- node_modules/@octokit/endpoint/dist-src/util/extract-url-variable-names.js
- node_modules/@octokit/endpoint/dist-src/util/is-plain-object.js
- node_modules/@octokit/endpoint/dist-src/util/lowercase-keys.js
- node_modules/@octokit/endpoint/dist-src/util/merge-deep.js
- node_modules/@octokit/endpoint/dist-src/util/omit.js
- node_modules/@octokit/endpoint/dist-src/util/remove-undefined-properties.js
- node_modules/@octokit/endpoint/dist-src/util/url-template.js
- node_modules/@octokit/endpoint/dist-src/version.js
- node_modules/@octokit/endpoint/dist-src/with-defaults.js
- node_modules/@octokit/endpoint/dist-types/defaults.d.ts
- node_modules/@octokit/endpoint/dist-types/endpoint-with-defaults.d.ts
- node_modules/@octokit/endpoint/dist-types/index.d.ts
- node_modules/@octokit/endpoint/dist-types/merge.d.ts
- node_modules/@octokit/endpoint/dist-types/parse.d.ts
- node_modules/@octokit/endpoint/dist-types/util/add-query-parameters.d.ts
- node_modules/@octokit/endpoint/dist-types/util/extract-url-variable-names.d.ts
- node_modules/@octokit/endpoint/dist-types/util/is-plain-object.d.ts
- node_modules/@octokit/endpoint/dist-types/util/lowercase-keys.d.ts
- node_modules/@octokit/endpoint/dist-types/util/merge-deep.d.ts
- node_modules/@octokit/endpoint/dist-types/util/omit.d.ts
- node_modules/@octokit/endpoint/dist-types/util/remove-undefined-properties.d.ts
- node_modules/@octokit/endpoint/dist-types/util/url-template.d.ts
- node_modules/@octokit/endpoint/dist-types/version.d.ts
- node_modules/@octokit/endpoint/dist-types/with-defaults.d.ts
- node_modules/@octokit/endpoint/package.json
- node_modules/@octokit/graphql/LICENSE
- node_modules/@octokit/graphql/README.md
- node_modules/@octokit/graphql/dist-bundle/index.js
- node_modules/@octokit/graphql/dist-bundle/index.js.map
- node_modules/@octokit/graphql/dist-src/error.js
- node_modules/@octokit/graphql/dist-src/graphql.js
- node_modules/@octokit/graphql/dist-src/index.js
- node_modules/@octokit/graphql/dist-src/version.js
- node_modules/@octokit/graphql/dist-src/with-defaults.js
- node_modules/@octokit/graphql/dist-types/error.d.ts
- node_modules/@octokit/graphql/dist-types/graphql.d.ts
- node_modules/@octokit/graphql/dist-types/index.d.ts
- node_modules/@octokit/graphql/dist-types/types.d.ts
- node_modules/@octokit/graphql/dist-types/version.d.ts
- node_modules/@octokit/graphql/dist-types/with-defaults.d.ts
- node_modules/@octokit/graphql/package.json
- node_modules/@octokit/openapi-types/LICENSE
- node_modules/@octokit/openapi-types/README.md
- node_modules/@octokit/openapi-types/package.json
- node_modules/@octokit/openapi-types/types.d.ts
- node_modules/@octokit/plugin-paginate-rest/LICENSE
- node_modules/@octokit/plugin-paginate-rest/README.md
- node_modules/@octokit/plugin-paginate-rest/dist-bundle/index.js
- node_modules/@octokit/plugin-paginate-rest/dist-bundle/index.js.map
- node_modules/@octokit/plugin-paginate-rest/dist-src/compose-paginate.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/generated/paginating-endpoints.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/index.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/iterator.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/normalize-paginated-list-response.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/paginate.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/paginating-endpoints.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/version.js
- node_modules/@octokit/plugin-paginate-rest/dist-types/compose-paginate.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/generated/paginating-endpoints.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/index.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/iterator.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/normalize-paginated-list-response.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/paginate.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/paginating-endpoints.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/types.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/version.d.ts
- node_modules/@octokit/plugin-paginate-rest/package.json
- node_modules/@octokit/plugin-request-log/LICENSE
- node_modules/@octokit/plugin-request-log/README.md
- node_modules/@octokit/plugin-request-log/dist-src/index.js
- node_modules/@octokit/plugin-request-log/dist-src/version.js
- node_modules/@octokit/plugin-request-log/dist-types/index.d.ts
- node_modules/@octokit/plugin-request-log/dist-types/version.d.ts
- node_modules/@octokit/plugin-request-log/package.json
- node_modules/@octokit/plugin-rest-endpoint-methods/LICENSE
- node_modules/@octokit/plugin-rest-endpoint-methods/README.md
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/endpoints-to-methods.js
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/endpoints-to-methods.js.map
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/generated/endpoints.js
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/generated/endpoints.js.map
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/index.js
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/index.js.map
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/version.js
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/version.js.map
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/endpoints-to-methods.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/generated/endpoints.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/generated/method-types.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/generated/parameters-and-response-types.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/index.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/types.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/version.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/package.json
- node_modules/@octokit/request/LICENSE
- node_modules/@octokit/request/README.md
- node_modules/@octokit/request/dist-bundle/index.js
- node_modules/@octokit/request/dist-bundle/index.js.map
- node_modules/@octokit/request/dist-src/defaults.js
- node_modules/@octokit/request/dist-src/fetch-wrapper.js
- node_modules/@octokit/request/dist-src/index.js
- node_modules/@octokit/request/dist-src/is-plain-object.js
- node_modules/@octokit/request/dist-src/version.js
- node_modules/@octokit/request/dist-src/with-defaults.js
- node_modules/@octokit/request/dist-types/defaults.d.ts
- node_modules/@octokit/request/dist-types/fetch-wrapper.d.ts
- node_modules/@octokit/request/dist-types/index.d.ts
- node_modules/@octokit/request/dist-types/is-plain-object.d.ts
- node_modules/@octokit/request/dist-types/version.d.ts
- node_modules/@octokit/request/dist-types/with-defaults.d.ts
- node_modules/@octokit/request/package.json
- node_modules/@octokit/request-error/LICENSE
- node_modules/@octokit/request-error/README.md
- node_modules/@octokit/request-error/dist-src/index.js
- node_modules/@octokit/request-error/dist-types/index.d.ts
- node_modules/@octokit/request-error/dist-types/types.d.ts
- node_modules/@octokit/request-error/package.json
- node_modules/@octokit/rest/LICENSE
- node_modules/@octokit/rest/README.md
- node_modules/@octokit/rest/dist-src/index.js
- node_modules/@octokit/rest/dist-src/index.js.map
- node_modules/@octokit/rest/dist-src/version.js
- node_modules/@octokit/rest/dist-src/version.js.map
- node_modules/@octokit/rest/dist-types/index.d.ts
- node_modules/@octokit/rest/dist-types/version.d.ts
- node_modules/@octokit/rest/package.json
- node_modules/@octokit/types/LICENSE
- node_modules/@octokit/types/README.md
- node_modules/@octokit/types/dist-types/AuthInterface.d.ts
- node_modules/@octokit/types/dist-types/EndpointDefaults.d.ts
- node_modules/@octokit/types/dist-types/EndpointInterface.d.ts
- node_modules/@octokit/types/dist-types/EndpointOptions.d.ts
- node_modules/@octokit/types/dist-types/Fetch.d.ts
- node_modules/@octokit/types/dist-types/GetResponseTypeFromEndpointMethod.d.ts
- node_modules/@octokit/types/dist-types/OctokitResponse.d.ts
- node_modules/@octokit/types/dist-types/RequestError.d.ts
- node_modules/@octokit/types/dist-types/RequestHeaders.d.ts
- node_modules/@octokit/types/dist-types/RequestInterface.d.ts
- node_modules/@octokit/types/dist-types/RequestMethod.d.ts
- node_modules/@octokit/types/dist-types/RequestOptions.d.ts
- node_modules/@octokit/types/dist-types/RequestParameters.d.ts
- node_modules/@octokit/types/dist-types/RequestRequestOptions.d.ts
- node_modules/@octokit/types/dist-types/ResponseHeaders.d.ts
- node_modules/@octokit/types/dist-types/Route.d.ts
- node_modules/@octokit/types/dist-types/StrategyInterface.d.ts
- node_modules/@octokit/types/dist-types/Url.d.ts
- node_modules/@octokit/types/dist-types/VERSION.d.ts
- node_modules/@octokit/types/dist-types/generated/Endpoints.d.ts
- node_modules/@octokit/types/dist-types/index.d.ts
- node_modules/@octokit/types/package.json
- node_modules/before-after-hook/LICENSE
- node_modules/before-after-hook/README.md
- node_modules/before-after-hook/index.d.ts
- node_modules/before-after-hook/index.js
- node_modules/before-after-hook/lib/add.js
- node_modules/before-after-hook/lib/register.js
- node_modules/before-after-hook/lib/remove.js
- node_modules/before-after-hook/package.json
- node_modules/fast-content-type-parse/.gitattributes
- node_modules/fast-content-type-parse/.github/.stale.yml
- node_modules/fast-content-type-parse/.github/dependabot.yml
- node_modules/fast-content-type-parse/.github/tests_checker.yml
- node_modules/fast-content-type-parse/.github/workflows/ci.yml
- node_modules/fast-content-type-parse/.github/workflows/package-manager-ci.yml
- node_modules/fast-content-type-parse/LICENSE
- node_modules/fast-content-type-parse/README.md
- node_modules/fast-content-type-parse/benchmarks/simple-ows.js
- node_modules/fast-content-type-parse/benchmarks/simple.js
- node_modules/fast-content-type-parse/benchmarks/suite.js
- node_modules/fast-content-type-parse/benchmarks/with-param-quoted.js
- node_modules/fast-content-type-parse/benchmarks/with-param.js
- node_modules/fast-content-type-parse/eslint.config.js
- node_modules/fast-content-type-parse/index.js
- node_modules/fast-content-type-parse/package.json
- node_modules/fast-content-type-parse/test/index.test.js
- node_modules/fast-content-type-parse/types/.gitkeep
- node_modules/fast-content-type-parse/types/index.d.ts
- node_modules/fast-content-type-parse/types/index.test-d.ts
- node_modules/universal-user-agent/.github/workflows/release.yml
- node_modules/universal-user-agent/.github/workflows/test.yml
- node_modules/universal-user-agent/.github/workflows/update-prettier.yml
- node_modules/universal-user-agent/CODE_OF_CONDUCT.md
- node_modules/universal-user-agent/LICENSE.md
- node_modules/universal-user-agent/README.md
- node_modules/universal-user-agent/SECURITY.md
- node_modules/universal-user-agent/index.d.ts
- node_modules/universal-user-agent/index.js
- node_modules/universal-user-agent/index.test-d.ts
- node_modules/universal-user-agent/index.test.js
- node_modules/universal-user-agent/package.json
- package-lock.json
- package.json
- src/main.js

## 現在のオープンIssues
## [Issue #24](../issue-notes/24.md): Geminiが503で落ちたのでretryを実装する
[issue-notes/24.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/24.md)

...
ラベル: 
--- issue-notes/24.md の内容 ---

```markdown
# issue Geminiが503で落ちたのでretryを実装する #24
[issues #24](https://github.com/cat2151/github-actions/issues/24)

# 何が困るの？
- 朝起きて、development statusがgenerateされてないのは困る
    - それをタスク実施のヒントにしているので
    - 毎朝generatedな状態を維持したい

# 方法
- retryを実装する
    - 現在は `this.model.generateContent(developmentPrompt);`
    - 実装後は `this.generateContent(developmentPrompt);`
    - BaseGenerator 側に、
        - generateContent関数を実装する
            - そこで、
                - `this.model.generateContent(developmentPrompt);` する
                - 503のとき、
                    - retryあり
                    - Exponential Backoff


```

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

# 方法は？
- cjsでファイル検索をさせる。
    - project内のファイル検索をさせる。
    - まず書いてあるファイル名そのもので検索させる。
    - 見つからない場合、パス部分を削除して改めてproject内の全ファイルlistから見つかった最初のファイルを対象とする。
- 課題、issue-notes/ 配下のmdファイルの内容、からファイル名を得る方法が曖昧。
    - 案、.yml と .cjs がある部分で、space区切り。
    - 案、agentに方法を検討させる。

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

## 最近の変更（過去7日間）
コミット履歴:
${recentChanges}

変更されたファイル:
${recentChanges}

上記の情報を基に、プロンプトで指定された形式で開発状況を生成してください。
Issue番号を記載する際は、必ず [Issue #番号](../issue-notes/番号.md) の形式でMarkdownリンクとして記載してください。


---
Generated at: 2025-09-08 07:04:23 JST

```

### generated-docs/development-status.md
```md
Last updated: 2025-09-08

# Development Status

## 現在のIssues
- Gemini APIの503エラー対策として、API呼び出しにリトライ機構を導入する計画があります [Issue #24](../issue-notes/24.md)。
- `development-status`生成の品質向上のため、プロンプトにプロジェクトのファイル一覧や、`issue-notes`内の関連ファイルの内容を添付する機能が検討されています [Issue #21](../issue-notes/21.md), [Issue #20](../issue-notes/20.md)。
- `issue-note`, `project-summary`, `translate`, `callgraph`の各ワークフローを、`tonejs-mml-to-json`プロジェクトで最新版に更新し、これら4つのワークフローを他のプロジェクトからより使いやすくするための汎用化とドキュメント化が進められています [Issue #16](../issue-notes/16.md), [Issue #13](../issue-notes/13.md), [Issue #12](../issue-notes/12.md), [Issue #11](../issue-notes/11.md), [Issue #10](../issue-notes/10.md)。

## 次の一手候補
1. Gemini API 503エラー発生時のExponential Backoffリトライを実装 [Issue #24](../issue-notes/24.md)
   - 最初の小さな一歩: `BaseGenerator.cjs`に`generateContentWithRetry`メソッドを追加し、Gemini API呼び出しで503エラーが発生した場合にExponential Backoffを伴うリトライロジックを実装する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github_automation/project_summary/scripts/shared/BaseGenerator.cjs

     実行内容: .github_automation/project_summary/scripts/shared/BaseGenerator.cjs に`generateContentWithRetry`メソッドを新規追加してください。このメソッドは、`this.model.generateContent()`を呼び出し、HTTPステータスコード503が返された場合にExponential Backoffを用いて最大3回リトライします。リトライ間隔は初回1秒、次回2秒、3回目4秒とします。成功した場合のレスポンスを返し、リトライ回数を超えても失敗した場合はエラーをスローします。既存の`this.model.generateContent()`の呼び出し箇所を新しい`generateContentWithRetry`に置き換えてください。

     確認事項: `BaseGenerator.cjs` がGemini APIのインスタンス (`this.model`) を保持していること、および既存の`generateContent`呼び出し箇所が適切に特定できることを確認してください。リトライロジックが無限ループに陥らないよう、最大リトライ回数を設定していることを確認してください。

     期待する出力: 変更後の`BaseGenerator.cjs`のコードを提示してください。
     ```

2. `development-status`プロンプトにプロジェクトの全ファイル一覧を添付する機能を実装 [Issue #21](../issue-notes/21.md)
   - 最初の小さな一歩: `development-status-prompt.md`にファイル一覧用のプレースホルダーを追加し、`DevelopmentStatusGenerator.cjs`にファイル一覧を取得してプレースホルダーに埋め込むロジックを実装する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github_automation/project_summary/prompts/development-status-prompt.md, .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs, .github_automation/project_summary/scripts/development/GitUtils.cjs

     実行内容:
     1. .github_automation/project_summary/prompts/development-status-prompt.md の `# 開発状況情報` の下に `## プロジェクトの全ファイル一覧` というセクションを追加し、その下にファイル一覧を埋め込むためのプレースホルダー `{{FILE_LIST}}` を追加してください。
     2. .github_automation/project_summary/scripts/development/GitUtils.cjs に `getProjectFileList()` メソッドを新規追加してください。このメソッドは、`.git` ディレクトリや `node_modules` ディレクトリを除外してプロジェクトの全てのファイルパスを再帰的に取得し、配列として返します。
     3. .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs 内で、`getProjectFileList()` を呼び出し、取得したファイル一覧を `development-status-prompt.md` の `{{FILE_LIST}}` プレースホルダーに埋め込むロジックを追加してください。

     確認事項: ファイル一覧取得時に`.git`と`node_modules`が正しく除外されることを確認してください。プレースホルダー置換ロジックが正しく動作することを確認してください。

     期待する出力: 変更後の`.github_automation/project_summary/prompts/development-status-prompt.md` と `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`、`.github_automation/project_summary/scripts/development/GitUtils.cjs` のコードを提示してください。
     ```

3. `issue-note`ワークフローの他プロジェクト導入手順書を作成 [Issue #13](../issue-notes/13.md)
   - 最初の小さな一歩: `call-issue-note.yml`の内容を分析し、既存の`TRANSLATION_SETUP.md`を参考に、外部プロジェクトからこのワークフローを呼び出すための手順書ドラフトを作成する。
   - Agent実行プロンプ:
     ```
     対象ファイル: .github/workflows/call-issue-note.yml

     実行内容: .github/workflows/call-issue-note.yml を参照し、外部プロジェクトがこのワークフローを導入する際に必要な手順書をmarkdown形式で作成してください。既存のドキュメント`.github_automation/translate/docs/TRANSLATION_SETUP.md`の構成を参考に、以下の要素を含めてください：
     1. 必須入力パラメータ（例: `github-token` の設定方法）
     2. 必須シークレット（もしあれば）
     3. ファイル配置の前提条件（例: `issue-notes/` ディレクトリの存在）
     4. 外部プロジェクトでの利用時に必要な追加設定や考慮事項。

     確認事項: `call-issue-note.yml` の定義が、入力パラメータやシークレットに関して明確であることを確認してください。生成される手順書が、`TRANSLATION_SETUP.md` と同等以上の分かりやすさを持つことを確認してください。

     期待する出力: `docs/issue-note-setup.md` というファイル名で、`issue-note` ワークフローの導入手順書をmarkdown形式で生成してください。

---
Generated at: 2025-09-08 07:04:43 JST

```

### generated-docs/project-overview.md
```md
Last updated: 2025-09-08

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: 生成されたHTML/CSSファイルによってUIが構築されますが、特定のフレームワークやライブラリは明示されていません。
- 音楽・オーディオ:
    - **Tone.js**: Web Audio APIをより簡単に扱うためのJavaScriptライブラリ。
    - **Web Audio API**: ブラウザに標準搭載されている音声処理を行うためのAPI（Tone.jsを介して使用）。
    - **MML (Music Macro Language)**: 音楽をテキストで記述するための言語のパーサー。
- 開発ツール:
    - **Node.js runtime**: JavaScriptコードを実行するための環境。
    - **npm scripts**: `package.json`に定義されたスクリプトを実行するタスクランナー。
    - **Google Generative AI (@google/generative-ai)**: AIによる文書生成機能をサポートするライブラリ。
    - **@octokit/rest**: GitHub APIと連携するための公式ライブラリ。
- テスト: 特になし
- ビルドツール: 特になし
- 言語機能:
    - **JavaScript**: プロジェクトの主要なプログラミング言語。
- 自動化・CI/CD:
    - **GitHub Actions**: リポジトリのイベントに基づいてワークフローを自動実行するCI/CDプラットフォーム。プロジェクト要約、Issue管理、README翻訳などの共通ワークフローを提供。
    - **i18n automation**: 国際化（多言語対応）に関連する自動翻訳ワークフロー。
- 開発標準: 特になし

## ファイル階層ツリー
```
.github_automation/
  callgraph/
    codeql-queries/
      callgraph.ql
      codeql-pack.lock.yml
      qlpack.yml
    config/
      example.json
    docs/
      callgraph.md
    presets/
      callgraph.js
      style.css
    scripts/
      analyze-codeql.cjs
      callgraph-utils.cjs
      check-codeql-exists.cjs
      check-commits.cjs
      check-node-version.cjs
      common-utils.cjs
      copy-commit-results.cjs
      extract-sarif-info.cjs
      find-process-results.cjs
      generate-html-graph.cjs
      generateHTML.cjs
  project_summary/
    docs/
      daily-summary-setup.md
    prompts/
      development-status-prompt.md
      project-overview-prompt.md
    scripts/
      ProjectSummaryCoordinator.cjs
      development/
        DevelopmentStatusGenerator.cjs
        GitUtils.cjs
        IssueTracker.cjs
      generate-project-summary.cjs
      overview/
        CodeAnalyzer.cjs
        ProjectAnalysisOrchestrator.cjs
        ProjectDataCollector.cjs
        ProjectDataFormatter.cjs
        ProjectOverviewGenerator.cjs
        TechStackAnalyzer.cjs
      shared/
        BaseGenerator.cjs
        FileSystemUtils.cjs
  translate/
    docs/
      TRANSLATION_SETUP.md
    scripts/
      translate-readme.cjs
.gitignore
.vscode/
  settings.json
LICENSE
README.ja.md
README.md
generated-docs/
  callgraph.html
  callgraph.js
  development-status-generated-prompt.md
  development-status.md
  project-overview.md
  style.css
issue-notes/
  10.md
  11.md
  12.md
  13.md
  14.md
  15.md
  16.md
  17.md
  18.md
  19.md
  2.md
  20.md
  21.md
  22.md
  23.md
  24.md
  3.md
  4.md
  7.md
  8.md
  9.md
package-lock.json
package.json
src/
  main.js
```

## ファイル詳細説明
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLを用いて関数呼び出しグラフを抽出するためのクエリを定義。
- **.github_automation/callgraph/config/example.json**: CodeQLの呼び出しグラフ生成に関する設定例を提供。
- **.github_automation/callgraph/docs/callgraph.md**: 呼び出しグラフの生成・利用方法に関するドキュメント。
- **.github_automation/callgraph/presets/callgraph.js**: 呼び出しグラフの表示ロジック、インタラクション、レイアウト等を定義するJavaScriptファイル。
- **.github_automation/callgraph/presets/style.css**: 呼び出しグラフの視覚的なスタイルを定義するCSSファイル。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: AIによる日次サマリー生成機能のセットアップガイド。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: 開発状況サマリー生成に使用されるAIプロンプトの定義。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: プロジェクト概要生成に使用されるAIプロンプトの定義。
- **.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs**: プロジェクト概要生成プロセス全体を調整するメインスクリプト。
- **.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs**: 開発状況レポートを生成するスクリプト。
- **.github_automation/project_summary/scripts/development/GitUtils.cjs**: Git操作に関連するユーティリティ関数を提供するスクリプト。
- **.github_automation/project_summary/scripts/development/IssueTracker.cjs**: Issueの追跡と管理に関連する機能を提供するスクリプト。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: プロジェクト概要を生成するための主要なエントリーポイントスクリプト。
- **.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs**: プロジェクトのコードベースを分析する機能を提供するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs**: プロジェクト分析プロセス全体を統括するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs**: プロジェクトに関連する各種データを収集するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs**: 収集したプロジェクトデータを整形するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs**: プロジェクト概要コンテンツを生成するスクリプト。
- **.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs**: プロジェクトの技術スタックを分析するスクリプト。
- **.github_automation/project_summary/scripts/shared/BaseGenerator.cjs**: 各種ジェネレータの共通基底クラスやユーティリティを提供。
- **.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs**: ファイルシステム操作に関連するユーティリティ関数を提供するスクリプト。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: 自動翻訳機能のセットアップガイド。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルの自動翻訳を実行するスクリプト。
- **.gitignore**: Gitがバージョン管理の対象としないファイルやディレクトリを指定する設定ファイル。
- **.vscode/settings.json**: Visual Studio Codeのワークスペース固有の設定ファイル。
- **LICENSE**: プロジェクトのライセンス情報が記述されたファイル。
- **README.ja.md**: プロジェクトの概要や使い方などを日本語で記述したドキュメント。
- **README.md**: プロジェクトの概要や使い方などを英語で記述したドキュメント。
- **generated-docs/callgraph.html**: 自動生成された呼び出しグラフのHTML形式での表示ファイル。
- **generated-docs/callgraph.js**: 自動生成された呼び出しグラフの動的な表示ロジックを含むJavaScriptファイル（`.github_automation/callgraph/presets/callgraph.js`と同じ内容）。
- **generated-docs/development-status-generated-prompt.md**: 自動生成された開発状況プロンプトの内容。
- **generated-docs/development-status.md**: 自動生成された開発状況レポート。
- **generated-docs/project-overview.md**: 自動生成されたプロジェクトの概要レポート。
- **generated-docs/style.css**: 自動生成されたドキュメントのスタイルシート（`.github_automation/callgraph/presets/style.css`と同じ内容）。
- **issue-notes/*.md**: GitHub Issuesに関連する詳細なメモや追跡情報が個別に記述されたファイル群。
- **package-lock.json**: npmパッケージの正確な依存関係ツリーとバージョンを記録し、ビルドの再現性を保証するファイル。
- **package.json**: プロジェクトのメタデータ（名前、バージョン、説明など）と依存関係、スクリプトを定義するファイル。
- **src/main.js**: プロジェクトのメイン処理を含む可能性のあるサンプルJavaScriptファイル。

## 関数詳細説明
- **.github_automation/callgraph/presets/callgraph.js** (および `generated-docs/callgraph.js`):
    - `escapeHtml(unsafe)`: HTMLエスケープ処理を行い、XSS攻撃などを防ぐための関数。
    - `getLayoutConfig()`: グラフのレイアウトに関する設定情報を取得する関数。
    - `placeCentralNode()`: グラフの中心に特定のノードを配置する関数。
    - `showNodeInfo(node)`: 指定されたノードの詳細情報を表示パネルに表示する関数。引数: `node` (object), 戻り値: なし。
    - `showEdgeInfo(edge)`: 指定されたエッジ（接続線）の詳細情報を表示パネルに表示する関数。引数: `edge` (object), 戻り値: なし。
    - `hideInfoPanel()`: 情報表示パネルを非表示にする関数。
    - `showInfoPanel()`: 情報表示パネルを表示する関数。
    - `toggleInfoPanel()`: 情報表示パネルの表示/非表示を切り替える関数。
    - `generateGitHubURL(path, line)`: 指定されたファイルパスと行番号からGitHub上のURLを生成する関数。引数: `path` (string), `line` (number), 戻り値: `string`。
    - `resetLayout()`: グラフのレイアウトを初期状態にリセットする関数。
    - `watchNodeMovementAndFixOverlapsWrap()`: ノードの動きを監視し、重なりを修正するロジックをラップする関数。
    - `watchNodeMovementAndFixOverlaps()`: ノードの動きをリアルタイムで監視し、重なりが発生しないように自動調整する関数。
    - `resolveNodeOverlaps()`: 重複して配置されたノードの位置を調整し、重なりを解消する関数。
    - `switchLayout(layoutName)`: グラフのレイアウトアルゴリズムを切り替える関数。引数: `layoutName` (string), 戻り値: なし。
    - `resetNodeStates()`: 全てのノードの表示状態や選択状態を初期状態にリセットする関数。
    - `fitToContent()`: グラフの表示範囲を現在のコンテンツに合わせて調整し、全体が表示されるようにする関数。
    - `toggleNodeLabels()`: グラフ上のノードラベルの表示/非表示を切り替える関数。
    - `toggleCalleeLocationFilter()`: 呼び出し先ノードのロケーションに基づくフィルターの表示/非表示を切り替える関数。
    - `replace()`: (詳細不明) 文字列の置換処理や要素の差し替えに関連する可能性のある関数。
    - `switch()`: (詳細不明) 条件分岐の制御フローに関連する可能性のある関数。
    - `function()`: (詳細不明) 匿名関数やコールバック関数として使用される可能性のある関数。
    - `max()`: (詳細不明) 最大値を計算するユーティリティ関数。
    - `on()`: (詳細不明) イベントリスナーを設定するための関数。
    - `if()`: (詳細不明) 条件分岐の制御フローに関連する可能性のある関数。
    - `for()`: (詳細不明) ループ処理の制御フローに関連する可能性のある関数。
    - `ready()`: (詳細不明) DOMの準備が完了したイベントなどを処理する関数。
    - `addListener()`: (詳細不明) イベントリスナーを追加する関数。
- **src/main.js**:
    - `greet(name)`: 受け取った名前に挨拶メッセージを返すシンプルな関数。引数: `name` (string), 戻り値: `string`。
    - `main()`: アプリケーションのエントリーポイントまたは主要な処理を実行する関数。引数: なし, 戻り値: なし。

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
Generated at: 2025-09-08 07:06:48 JST

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

### issue-notes/14.md
```md
# issue Development Status のdocument生成において、最初の小さな一歩 を実現する用のプロンプト生成がされなくなっている #14
[issues #14](https://github.com/cat2151/github-actions/issues/14)

## 何が困るの？
- #11の場合
- 期待値
    - 最初の小さな一歩 : [Issue #11]のtranslateについて、現在の処理フローを確認し、外部プロジェクトから利用する際にどのような情報（翻訳対象のファイルパス、ターゲット言語設定など）が必要となるかを明確にする。これにより、再利用可能なワークフロー設計の基礎を築く。
    - 最初の小さな一歩をagentに実行させるためのプロンプト : 現在のGitHub Actions翻訳ワークフロー（translate-readme.yml、call-translate-readme.yml、translate-readme.cjs）を分析し、外部プロジェクトから利用する際に必要となる設定項目を洗い出してください。具体的には、以下の観点から調査し、markdown形式でまとめてください：1) 必須入力パラメータ（現在はtarget-branchのみ） 2) 必須シークレット（GEMINI_API_KEY） 3) ファイル配置の前提条件（README.ja.md の存在、配置場所） 4) 翻訳対象ファイル名の制約（現在はREADME固定） 5) ブランチ・トリガー設定の制約 6) 外部プロジェクトでの利用時に追加で必要となりそうな設定項目の提案
- 実際の結果
    - 最初の小さな一歩: [Issue #11]のtranslateについて、現在の処理フローを確認し、外部プロジェクトから利用する際にどのような情報（翻訳対象のファイルパス、ターゲット言語設定など）が必要となるかを明確にする。これにより、再利用可能なワークフロー設計の基礎を築く。

## close条件
- 期待値のように、Agent実行プロンプト、が生成されること

## agentに修正させた
- development-status.md を修正させた
- test green

## closeとする

```

### issue-notes/15.md
```md
# issue project_summary scripts cjs を分解し、できるだけ1ファイル200行未満にし、agentによるメンテをしやすくする #15
[issues #15](https://github.com/cat2151/github-actions/issues/15)

# 状況
- agentに、最初の小さな一歩のAgent実行プロンプトを実行させた
- 結果、以下を得た：
    - project_summary_cjs_analysis.md
- どうする？
    - 次の一手をagentに生成させてみる（翌日の日次バッチで自動生成させる）
- 結果
    - 生成させたpromptをレビューした
    - promptを修正した
    - agentに投げた
    - 結果、GitUtils.cjsを切り出しできた
    - それをリファクタリングミスがないかチェックさせた
    - agentによるチェック結果は合格だった
- どうする？
    - 次の一手をagentに生成させてみる（翌日の日次バッチで自動生成させる）
- 結果
    - 生成させたpromptをレビューした
        - promptの対象ファイルから project_summary_cjs_analysis.md が漏れていることがわかったので修正した
    - promptを修正した
    - agentに投げた
    - 結果、FileSystemUtils.cjsを切り出しできた
    - それをリファクタリングミスがないかチェックさせた
    - agentによるチェック結果は合格だった
- どうする？
    - 次の一手をagentに生成させてみる（翌日の日次バッチで自動生成させる）
- 結果
    - 生成させたpromptをレビューした
    - 今回は低品質、NG、と判断した
    - 判断基準は、project_summary_cjs_analysis.md と乖離してしまっている点。今回はハルシネーションを含んだplanである、と判断した
    - 人力でpromptを書き、planさせ、plan結果をレビューし、agentに投げた
    - 結果、CodeAnalyzer.cjsとProjectAnalyzer.cjsを切り出しできた
- どうする？
    - 次の一手をagentに生成させてみる（翌日の日次バッチで自動生成させる）
    - 備考、課題、Geminiに生成させているdocumentは2つある。かなり位置づけが違うものである。
        - projectのソースファイル分析。
        - projectのissues分析。
        - この2つについて、class, cjs, yml まで分割をするかを、あとで検討する。
        - おそらく、class分割どまりとし、ソースファイル分析結果をissues分析の参考資料としてGeminiのcontextに与える改善をする、がよい、と想定しておく。
- 課題、エラーで落ちた。昨日は落ちてない。
    - 原因、昨日のagentのリファクタリング時に、ハルシネーションで、
        - codeが破壊されていた
        - run メソッドが削除されていた
        - 一つ前のrevisionにはrun メソッドがあった
        - ほかにもcode破壊があったのかは不明、調査省略、明日の日次バッチをtestと調査として利用するつもり
- どうする？
    - 単純に一つ前のrevisionからrun メソッドを復活させ、明日の日次バッチをtestと調査として利用する
- 再発防止策は？
    - ノーアイデア。昨日それなりにagentにチェックをさせたはずだが根本的な大きなミスが発生していた。
    - 構文チェックは通っていたが、問題を検知できなかった。
    - チェックが機能していない、あるいは機能として不足している。
    - 分析。変更量が大きかったぶんミスのリスクが増えていた。
    - 対策案。もっと小さく一歩ずつ変更させる。
    - 対策案。リファクタリング時、いきなりメソッド削除をさせない。
        - まず全cjsの全メソッドのlistをさせる。
        - のち、削除対象の重複メソッドのlistをさせる。
        - そして削除planをさせる。
        - のち、削除させる。
        - さらに削除後のメソッドlistをさせる。
        - そして削除しすぎていないかを削除前後のlist比較でチェックさせる。
        - これでrunまで削除してしまうのを防止できるかもしれない。
        - これは人力からみると、おかしな話である。人力なら1つずつ移動をするだけであり、ミスのしようがない。
        - LLMの典型的なハルシネーション問題の一つである、と認識する
- 結果は？
    - test green
    - run メソッドの人力復活は成功した
    - 日次バッチで生成した次の一手のpromptを投げた
    - リファクタリング成功した。ProjectSummaryGenerator を切り出した
- どうする？
    - 次の一手をagentに生成させてみる（agentに投げるpromptを、翌日の日次バッチで自動生成させる）
- 結果
    - 先に、2つのdocument生成を、1つずつ生成できるよう疎結合にリファクタリング、をしたほうがよさそう
    - agentにそれを投げた
    - 成功した、と判断する
    - 課題、`BaseSummaryGenerator.cjs` は、baseの機能と、`ProjectOverviewGenerator.cjs`専用の機能とが混ざっている。
        - baseに集約すべきは、`ProjectSummaryCoordinator.cjs`と`ProjectOverviewGenerator.cjs`とが必ずどちらも使う機能、である、と考える。
        - 対策、明日以降それをagentに投げる
    - `project_summary_cjs_analysis.md` は削除とする。役目が完了した、と判断する。リファクタリング前のソース構造の分析documentであり、今は存在しているとわかりづらくなる。シンプル優先のため削除とする。
- どうする？
    - 次の一手をagentに生成させてみる（agentに投げるpromptを、翌日の日次バッチで自動生成させる）
- 結果
    - test green
    - `BaseSummaryGenerator.cjs` を切り出したのは成功した、と判断する
    - `BaseSummaryGenerator.cjs` を2分割するため、agentにplanさせた
    - レビューした
    - agentに2分割させた
    - レビューした。OKと判断する
- どうする？
    - 次の一手をagentに生成させてみる（agentに投げるpromptを、翌日の日次バッチで自動生成させる）
- 結果
    - test green
    - `BaseSummaryGenerator.cjs` を2分割は成功した、と判断する
    - issue track機能構造をリファクタリングし、以下にする
        - development status generator : baseを継承する
        - issue tracker : 汎用関数群
    - agentに実施させた
    - レビューした。OKと判断する
- どうする？
    - 次の一手をagentに生成させてみる（agentに投げるpromptを、翌日の日次バッチで自動生成させる）
- 結果
    - test green
    - DevelopmentStatusGeneratorとissue trackerのリファクタリングは成功した、と判断する
    - ProjectOverview生成機能のリファクタリングをする
    - agentに実施させた
    - レビューした。OKと判断する
- どうする？
    - 次の一手をagentに生成させてみる（agentに投げるpromptを、翌日の日次バッチで自動生成させる）
- 結果
    - test green
    - ProjectOverview生成機能のリファクタリングは成功した、と判断する
    - 課題、overviewと、developmentStatusとが混在し、dirが読みづらい。
    - 対策、shared/、overview/、development/、の3つのdirに切り分ける
    - agentに分析、planさせ、レビューし、planさせ、実施させた
    - レビューした。OKと判断する
- どうする？
    - 次の一手をagentに生成させてみる（agentに投げるpromptを、翌日の日次バッチで自動生成させる）
- 結果
    - test green
    - shared/、overview/、development/、の3つのdirに切り分けるリファクタリングは成功した、と判断する
    - agentに、agentがメンテしやすいか？の観点からレビューさせた
    - 詳細は割愛
        - `> 最優先で取り組むべきは 設定管理の一元化 と エラーハンドリングの統一 です。これにより、Agentにとって予測可能で理解しやすいコードベースになります。`
        - それは別issueで、設定変更をマストでやるので、OKと判断する
- これでagentによるメンテは十分しやすくなった、と判断する
- closeとする

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

### issue-notes/17.md
```md
# issue development-status が生成したmdに誤りがある。issue-note へのlinkがURL誤りで、404となってしまう #17
[issues #17](https://github.com/cat2151/github-actions/issues/17)

# 事例
- 生成したmdのURL：
    - https://github.com/cat2151/github-actions/blob/main/generated-docs/development-status.md
- そのmdをGitHub上でdecodeして閲覧したときのURL、404である：
    - https://github.com/cat2151/github-actions/blob/main/generated-docs/issue-notes/16.md
- そのmdに実際に含まれるURL：
    - issue-notes/16.md
- あるべきURL：
    - https://github.com/cat2151/github-actions/blob/main/issue-notes/16.md
- あるべきURLがmdにどう含まれているべきか：
    - ../issue-notes/16.md

# どうする？
- 案
    - promptを修正する
    - promptの場所は：
        - .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
    - 備考、cjs内にpromptがハードコーディングされており、promptをメンテしづらいので別途対処する : [issues #18](https://github.com/cat2151/github-actions/issues/18)

# 結果
- agentにpromptを投げた
    - ※promptは、development-statusで生成したもの
- レビューした
    - agentがフルパスで実装した、ことがわかった
- userが分析し、 ../ のほうが適切と判断した
    - ※「事例」コーナーを、あわせて修正した
- そのように指示してagentに修正させた
- testする

# 結果
- test green
- closeする

```

### issue-notes/18.md
```md
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

# 結果
- Geminiに生成させたpromptを、agentに投げて、リファクタリングさせてみた
- ハルシネーションした。使い物にならなかった
- 人力でやる

# 結果
- test green

# closeとする


```

### issue-notes/19.md
```md
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

# 状況
- issues #22 がcloseされた
- testできるようになった
- commitされたpromptを確認した。issue-notes/ 配下のmdファイルがpromptに添付されていること、が確認できた

# closeする

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

### issue-notes/22.md
```md
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

# 結果
- test green。呼び出し元側にcommitされていることを確認した。
- 20Kbytesである
    - Geminiにわたすサイズとしても許容範囲内と判断する
        - token数から概算して100Kbytes～1Mbytes程度を想定

# closeとする

```

### issue-notes/23.md
```md
# issue issue 17が再発してしまっている #23
[issues #23](https://github.com/cat2151/github-actions/issues/23)

# 症状は？
- issue 17と同じ

# どうする？
- development-status-generated-prompt.md を確認する
- 結果
    - >Issue番号を記載する際は、必ず [Issue #番号](issue-notes/番号.md) の形式でMarkdownリンクとして記載してください。
    - 仮説、これが残っており、ほかの ../ 指定と競合し、どちらかがランダムで選ばれていた
    - 対策、ここを ../ 指定にする

# 結果
- test green

# closeとする

```

### issue-notes/24.md
```md
# issue Geminiが503で落ちたのでretryを実装する #24
[issues #24](https://github.com/cat2151/github-actions/issues/24)

# 何が困るの？
- 朝起きて、development statusがgenerateされてないのは困る
    - それをタスク実施のヒントにしているので
    - 毎朝generatedな状態を維持したい

# 方法
- retryを実装する
    - 現在は `this.model.generateContent(developmentPrompt);`
    - 実装後は `this.generateContent(developmentPrompt);`
    - BaseGenerator 側に、
        - generateContent関数を実装する
            - そこで、
                - `this.model.generateContent(developmentPrompt);` する
                - 503のとき、
                    - retryあり
                    - Exponential Backoff

# 結果
- 直近の実行結果をlog確認した
    - 本番で503が発生しなかったことをlog確認した
- 本番の503 testは、今回発生しなかったので、できず
- ここ1週間で2回発生しているので、次の1週間で1回発生する想定
- ソース机上確認した

# どうする？
- このissueはcloseしたほうがわかりやすい、と判断する
- 1週間503を毎日チェック、は省略とする
- もし今後503が発生したら別issueとする

# closeとする

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

### issue-notes/4.md
```md
# issue GitHub Actions「project概要生成」を共通ワークフロー化する #4
[issues #4](https://github.com/cat2151/github-actions/issues/4)

# prompt
```
あなたはGitHub Actionsと共通ワークフローのスペシャリストです。
このymlファイルを、以下の2つのファイルに分割してください。
1. 共通ワークフロー       cat2151/github-actions/.github/workflows/daily-project-summary.yml
2. 呼び出し元ワークフロー cat2151/github-actions/.github/workflows/call-daily-project-summary.yml
まずplanしてください
```

# 結果、あちこちハルシネーションのあるymlが生成された
- agentの挙動があからさまにハルシネーション
    - インデントが修正できない、「失敗した」という
    - 構文誤りを認識できない
- 人力で修正した

# このagentによるセルフレビューが信頼できないため、別のLLMによるセカンドオピニオンを試す
```
あなたはGitHub Actionsと共通ワークフローのスペシャリストです。
以下の2つのファイルをレビューしてください。最優先で、エラーが発生するかどうかだけレビューてください。エラー以外の改善事項のチェックをするかわりに、エラー発生有無チェックに最大限注力してください。

--- 呼び出し元

name: Call Daily Project Summary

on:
  schedule:
    # 日本時間 07:00 (UTC 22:00 前日)
    - cron: '0 22 * * *'
  workflow_dispatch:

jobs:
  call-daily-project-summary:
    uses: cat2151/github-actions/.github/workflows/daily-project-summary.yml
    secrets:
      GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}

--- 共通ワークフロー
name: Daily Project Summary
on:
  workflow_call:

jobs:
  generate-summary:
    runs-on: ubuntu-latest

    permissions:
      contents: write
      issues: read
      pull-requests: read

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          fetch-depth: 0  # 履歴を取得するため

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: |
          # 一時的なディレクトリで依存関係をインストール
          mkdir -p /tmp/summary-deps
          cd /tmp/summary-deps
          npm init -y
          npm install @google/generative-ai @octokit/rest
          # generated-docsディレクトリを作成
          mkdir -p $GITHUB_WORKSPACE/generated-docs

      - name: Generate project summary
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          GITHUB_REPOSITORY: ${{ github.repository }}
          NODE_PATH: /tmp/summary-deps/node_modules
        run: |
          node .github/scripts/generate-project-summary.cjs

      - name: Check for generated summaries
        id: check_summaries
        run: |
          if [ -f "generated-docs/project-overview.md" ] && [ -f "generated-docs/development-status.md" ]; then
            echo "summaries_generated=true" >> $GITHUB_OUTPUT
          else
            echo "summaries_generated=false" >> $GITHUB_OUTPUT
          fi

      - name: Commit and push summaries
        if: steps.check_summaries.outputs.summaries_generated == 'true'
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          # package.jsonの変更のみリセット（generated-docsは保持）
          git restore package.json 2>/dev/null || true
          # サマリーファイルのみを追加
          git add generated-docs/project-overview.md
          git add generated-docs/development-status.md
          git commit -m "Update project summaries (overview & development status)"
          git push

      - name: Summary generation result
        run: |
          if [ "${{ steps.check_summaries.outputs.summaries_generated }}" == "true" ]; then
            echo "✅ Project summaries updated successfully"
            echo "📊 Generated: project-overview.md & development-status.md"
          else
            echo "ℹ️ No summaries generated (likely no user commits in the last 24 hours)"
          fi
```

# 上記promptで、2つのLLMにレビューさせ、合格した

# 細部を、先行する2つのymlを参照に手直しした

# ローカルtestをしてからcommitできるとよい。方法を検討する
- ローカルtestのメリット
    - 素早く修正のサイクルをまわせる
    - ムダにgit historyを汚さない
        - これまでの事例：「実装したつもり」「エラー。修正したつもり」「エラー。修正したつもり」...（以降エラー多数）
- 方法
    - ※検討、WSL + act を環境構築済みである。test可能であると判断する
    - 呼び出し元のURLをコメントアウトし、相対パス記述にする
    - ※備考、テスト成功すると結果がcommit pushされる。それでよしとする
- 結果
    - OK
    - secretsを簡略化できるか試した、できなかった、現状のsecrets記述が今わかっている範囲でベストと判断する
    - OK

# test green

# commit用に、yml 呼び出し元 uses をlocal用から本番用に書き換える

# closeとする

```

### issue-notes/7.md
```md
# issue issue note生成できるかのtest用 #7
[issues #7](https://github.com/cat2151/github-actions/issues/7)

- 生成できた
- closeとする

```

### issue-notes/8.md
```md
# issue 関数コールグラフhtmlビジュアライズ生成の対象ソースファイルを、呼び出し元ymlで指定できるようにする #8
[issues #8](https://github.com/cat2151/github-actions/issues/8)

# これまでの課題
- 以下が決め打ちになっていた
```
  const allowedFiles = [
    'src/main.js',
    'src/mml2json.js',
    'src/play.js'
  ];
```

# 対策
- 呼び出し元ymlで指定できるようにする

# agent
- agentにやらせることができれば楽なので、初手agentを試した
- 失敗
    - ハルシネーションしてscriptを大量破壊した
- 分析
    - 修正対象scriptはagentが生成したもの
    - 低品質な生成結果でありソースが巨大
    - ハルシネーションで破壊されやすいソース
    - AIの生成したソースは、必ずしもAIフレンドリーではない

# 人力リファクタリング
- 低品質コードを、最低限agentが扱えて、ハルシネーションによる大量破壊を防止できる内容、にする
- 手短にやる
    - そもそもビジュアライズは、agentに雑に指示してやらせたもので、
    - 今後別のビジュアライザを選ぶ可能性も高い
    - 今ここで手間をかけすぎてコンコルド効果（サンクコストバイアス）を増やすのは、project群をトータルで俯瞰して見たとき、損
- 対象
    - allowedFiles のあるソース
        - callgraph-utils.cjs
            - たかだか300行未満のソースである
            - この程度でハルシネーションされるのは予想外
            - やむなし、リファクタリングでソース分割を進める

# agentに修正させる
## prompt
```
allowedFilesを引数で受け取るようにしたいです。
ないならエラー。
最終的に呼び出し元すべてに波及して修正したいです。

呼び出し元をたどってエントリポイントも見つけて、
エントリポイントにおいては、
引数で受け取ったjsonファイル名 allowedFiles.js から
jsonファイル allowedFiles.jsonの内容をreadして
変数 allowedFilesに格納、
後続処理に引き渡す、としたいです。

まずplanしてください。
planにおいては、修正対象のソースファイル名と関数名を、呼び出し元を遡ってすべて特定し、listしてください。
```

# 修正が順調にできた
- コマンドライン引数から受け取る作りになっていなかったので、そこだけ指示して修正させた
- yml側は人力で修正した

# 他のリポジトリから呼び出した場合にバグらないよう修正する
- 気付いた
    - 共通ワークフローとして他のリポジトリから使った場合はバグるはず。
        - ymlから、共通ワークフロー側リポジトリのcheckoutが漏れているので。
- 他のyml同様に修正する
- あわせて全体にymlをリファクタリングし、修正しやすくし、今後のyml読み書きの学びにしやすくする

# local WSL + act : test green

# closeとする
- もし生成されたhtmlがNGの場合は、別issueとするつもり

```

### issue-notes/9.md
```md
# issue 関数コールグラフhtmlビジュアライズが0件なので、原因を可視化する #9
[issues #9](https://github.com/cat2151/github-actions/issues/9)

# agentに修正させたり、人力で修正したりした
- agentがハルシネーションし、いろいろ根の深いバグにつながる、エラー隠蔽などを仕込んでいたため、検知が遅れた
- 詳しくはcommit logを参照のこと
- WSL + actの環境を少し変更、act起動時のコマンドライン引数を変更し、generated-docsをmountする（ほかはデフォルト挙動であるcpだけにする）ことで、デバッグ情報をコンテナ外に出力できるようにし、デバッグを効率化した

# test green

# closeとする

```

### package-lock.json
```json
{
  "name": "actions-tmp",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "actions-tmp",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "@google/generative-ai": "^0.24.1",
        "@octokit/rest": "^22.0.0"
      }
    },
    "node_modules/@google/generative-ai": {
      "version": "0.24.1",
      "resolved": "https://registry.npmjs.org/@google/generative-ai/-/generative-ai-0.24.1.tgz",
      "integrity": "sha512-MqO+MLfM6kjxcKoy0p1wRzG3b4ZZXtPI+z2IE26UogS2Cm/XHO+7gGRBh6gcJsOiIVoH93UwKvW4HdgiOZCy9Q==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@octokit/auth-token": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/@octokit/auth-token/-/auth-token-6.0.0.tgz",
      "integrity": "sha512-P4YJBPdPSpWTQ1NU4XYdvHvXJJDxM6YwpS0FZHRgP7YFkdVxsWcpWGy/NVqlAA7PcPCnMacXlRm1y2PFZRWL/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@octokit/core": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/@octokit/core/-/core-7.0.3.tgz",
      "integrity": "sha512-oNXsh2ywth5aowwIa7RKtawnkdH6LgU1ztfP9AIUCQCvzysB+WeU8o2kyyosDPwBZutPpjZDKPQGIzzrfTWweQ==",
      "license": "MIT",
      "dependencies": {
        "@octokit/auth-token": "^6.0.0",
        "@octokit/graphql": "^9.0.1",
        "@octokit/request": "^10.0.2",
        "@octokit/request-error": "^7.0.0",
        "@octokit/types": "^14.0.0",
        "before-after-hook": "^4.0.0",
        "universal-user-agent": "^7.0.0"
      },
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@octokit/endpoint": {
      "version": "11.0.0",
      "resolved": "https://registry.npmjs.org/@octokit/endpoint/-/endpoint-11.0.0.tgz",
      "integrity": "sha512-hoYicJZaqISMAI3JfaDr1qMNi48OctWuOih1m80bkYow/ayPw6Jj52tqWJ6GEoFTk1gBqfanSoI1iY99Z5+ekQ==",
      "license": "MIT",
      "dependencies": {
        "@octokit/types": "^14.0.0",
        "universal-user-agent": "^7.0.2"
      },
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@octokit/graphql": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/@octokit/graphql/-/graphql-9.0.1.tgz",
      "integrity": "sha512-j1nQNU1ZxNFx2ZtKmL4sMrs4egy5h65OMDmSbVyuCzjOcwsHq6EaYjOTGXPQxgfiN8dJ4CriYHk6zF050WEULg==",
      "license": "MIT",
      "dependencies": {
        "@octokit/request": "^10.0.2",
        "@octokit/types": "^14.0.0",
        "universal-user-agent": "^7.0.0"
      },
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@octokit/openapi-types": {
      "version": "25.1.0",
      "resolved": "https://registry.npmjs.org/@octokit/openapi-types/-/openapi-types-25.1.0.tgz",
      "integrity": "sha512-idsIggNXUKkk0+BExUn1dQ92sfysJrje03Q0bv0e+KPLrvyqZF8MnBpFz8UNfYDwB3Ie7Z0TByjWfzxt7vseaA==",
      "license": "MIT"
    },
    "node_modules/@octokit/plugin-paginate-rest": {
      "version": "13.1.1",
      "resolved": "https://registry.npmjs.org/@octokit/plugin-paginate-rest/-/plugin-paginate-rest-13.1.1.tgz",
      "integrity": "sha512-q9iQGlZlxAVNRN2jDNskJW/Cafy7/XE52wjZ5TTvyhyOD904Cvx//DNyoO3J/MXJ0ve3rPoNWKEg5iZrisQSuw==",
      "license": "MIT",
      "dependencies": {
        "@octokit/types": "^14.1.0"
      },
      "engines": {
        "node": ">= 20"
      },
      "peerDependencies": {
        "@octokit/core": ">=6"
      }
    },
    "node_modules/@octokit/plugin-request-log": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/@octokit/plugin-request-log/-/plugin-request-log-6.0.0.tgz",
      "integrity": "sha512-UkOzeEN3W91/eBq9sPZNQ7sUBvYCqYbrrD8gTbBuGtHEuycE4/awMXcYvx6sVYo7LypPhmQwwpUe4Yyu4QZN5Q==",
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "peerDependencies": {
        "@octokit/core": ">=6"
      }
    },
    "node_modules/@octokit/plugin-rest-endpoint-methods": {
      "version": "16.0.0",
      "resolved": "https://registry.npmjs.org/@octokit/plugin-rest-endpoint-methods/-/plugin-rest-endpoint-methods-16.0.0.tgz",
      "integrity": "sha512-kJVUQk6/dx/gRNLWUnAWKFs1kVPn5O5CYZyssyEoNYaFedqZxsfYs7DwI3d67hGz4qOwaJ1dpm07hOAD1BXx6g==",
      "license": "MIT",
      "dependencies": {
        "@octokit/types": "^14.1.0"
      },
      "engines": {
        "node": ">= 20"
      },
      "peerDependencies": {
        "@octokit/core": ">=6"
      }
    },
    "node_modules/@octokit/request": {
      "version": "10.0.3",
      "resolved": "https://registry.npmjs.org/@octokit/request/-/request-10.0.3.tgz",
      "integrity": "sha512-V6jhKokg35vk098iBqp2FBKunk3kMTXlmq+PtbV9Gl3TfskWlebSofU9uunVKhUN7xl+0+i5vt0TGTG8/p/7HA==",
      "license": "MIT",
      "dependencies": {
        "@octokit/endpoint": "^11.0.0",
        "@octokit/request-error": "^7.0.0",
        "@octokit/types": "^14.0.0",
        "fast-content-type-parse": "^3.0.0",
        "universal-user-agent": "^7.0.2"
      },
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@octokit/request-error": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/@octokit/request-error/-/request-error-7.0.0.tgz",
      "integrity": "sha512-KRA7VTGdVyJlh0cP5Tf94hTiYVVqmt2f3I6mnimmaVz4UG3gQV/k4mDJlJv3X67iX6rmN7gSHCF8ssqeMnmhZg==",
      "license": "MIT",
      "dependencies": {
        "@octokit/types": "^14.0.0"
      },
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@octokit/rest": {
      "version": "22.0.0",
      "resolved": "https://registry.npmjs.org/@octokit/rest/-/rest-22.0.0.tgz",
      "integrity": "sha512-z6tmTu9BTnw51jYGulxrlernpsQYXpui1RK21vmXn8yF5bp6iX16yfTtJYGK5Mh1qDkvDOmp2n8sRMcQmR8jiA==",
      "license": "MIT",
      "dependencies": {
        "@octokit/core": "^7.0.2",
        "@octokit/plugin-paginate-rest": "^13.0.1",
        "@octokit/plugin-request-log": "^6.0.0",
        "@octokit/plugin-rest-endpoint-methods": "^16.0.0"
      },
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@octokit/types": {
      "version": "14.1.0",
      "resolved": "https://registry.npmjs.org/@octokit/types/-/types-14.1.0.tgz",
      "integrity": "sha512-1y6DgTy8Jomcpu33N+p5w58l6xyt55Ar2I91RPiIA0xCJBXyUAhXCcmZaDWSANiha7R9a6qJJ2CRomGPZ6f46g==",
      "license": "MIT",
      "dependencies": {
        "@octokit/openapi-types": "^25.1.0"
      }
    },
    "node_modules/before-after-hook": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/before-after-hook/-/before-after-hook-4.0.0.tgz",
      "integrity": "sha512-q6tR3RPqIB1pMiTRMFcZwuG5T8vwp+vUvEG0vuI6B+Rikh5BfPp2fQ82c925FOs+b0lcFQ8CFrL+KbilfZFhOQ==",
      "license": "Apache-2.0"
    },
    "node_modules/fast-content-type-parse": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/fast-content-type-parse/-/fast-content-type-parse-3.0.0.tgz",
      "integrity": "sha512-ZvLdcY8P+N8mGQJahJV5G4U88CSvT1rP8ApL6uETe88MBXrBHAkZlSEySdUlyztF7ccb+Znos3TFqaepHxdhBg==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT"
    },
    "node_modules/universal-user-agent": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/universal-user-agent/-/universal-user-agent-7.0.3.tgz",
      "integrity": "sha512-TmnEAEAsBJVZM/AADELsK76llnwcf9vMKuPz8JflO1frO8Lchitr0fNaN9d+Ap0BjKtqWqd/J17qeDnXh8CL2A==",
      "license": "ISC"
    }
  }
}

```

### package.json
```json
{
  "name": "actions-tmp",
  "version": "1.0.0",
  "description": "This repository is a **collection of GitHub Actions shared workflows reusable across multiple projects.**",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@google/generative-ai": "^0.24.1",
    "@octokit/rest": "^22.0.0"
  }
}

```

### src/main.js
```js
// 仮の解析対象 main.js
function greet(name) {
    console.log('Hello, ' + name + '!');
}

function main() {
    greet('World');
}

main();

```

## 最近の変更（過去7日間）
コミット履歴:
${recentChanges}

変更されたファイル:
${recentChanges}

上記の情報を基に、プロンプトで指定された形式で開発状況を生成してください。
Issue番号を記載する際は、必ず [Issue #番号](../issue-notes/番号.md) の形式でMarkdownリンクとして記載してください。


---
Generated at: 2025-09-09 07:04:57 JST

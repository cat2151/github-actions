Last updated: 2025-10-11

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
- .github/actions-tmp/.github/workflows/call-callgraph.yml
- .github/actions-tmp/.github/workflows/call-daily-project-summary.yml
- .github/actions-tmp/.github/workflows/call-issue-note.yml
- .github/actions-tmp/.github/workflows/call-translate-readme.yml
- .github/actions-tmp/.github/workflows/callgraph.yml
- .github/actions-tmp/.github/workflows/check-recent-human-commit.yml
- .github/actions-tmp/.github/workflows/daily-project-summary.yml
- .github/actions-tmp/.github/workflows/issue-note.yml
- .github/actions-tmp/.github/workflows/translate-readme.yml
- .github/actions-tmp/.github_automation/callgraph/codeql-queries/callgraph.ql
- .github/actions-tmp/.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml
- .github/actions-tmp/.github_automation/callgraph/codeql-queries/qlpack.yml
- .github/actions-tmp/.github_automation/callgraph/config/example.json
- .github/actions-tmp/.github_automation/callgraph/docs/callgraph.md
- .github/actions-tmp/.github_automation/callgraph/presets/callgraph.js
- .github/actions-tmp/.github_automation/callgraph/presets/style.css
- .github/actions-tmp/.github_automation/callgraph/scripts/analyze-codeql.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/callgraph-utils.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/check-codeql-exists.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/check-node-version.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/common-utils.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/copy-commit-results.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/extract-sarif-info.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/find-process-results.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/generate-html-graph.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/generateHTML.cjs
- .github/actions-tmp/.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs
- .github/actions-tmp/.github_automation/project_summary/docs/daily-summary-setup.md
- .github/actions-tmp/.github_automation/project_summary/prompts/development-status-prompt.md
- .github/actions-tmp/.github_automation/project_summary/prompts/project-overview-prompt.md
- .github/actions-tmp/.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/development/GitUtils.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/development/IssueTracker.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/generate-project-summary.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/shared/BaseGenerator.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs
- .github/actions-tmp/.github_automation/translate/docs/TRANSLATION_SETUP.md
- .github/actions-tmp/.github_automation/translate/scripts/translate-readme.cjs
- .github/actions-tmp/.gitignore
- .github/actions-tmp/.vscode/settings.json
- .github/actions-tmp/LICENSE
- .github/actions-tmp/README.ja.md
- .github/actions-tmp/README.md
- .github/actions-tmp/generated-docs/callgraph.html
- .github/actions-tmp/generated-docs/callgraph.js
- .github/actions-tmp/generated-docs/development-status-generated-prompt.md
- .github/actions-tmp/generated-docs/development-status.md
- .github/actions-tmp/generated-docs/project-overview.md
- .github/actions-tmp/generated-docs/style.css
- .github/actions-tmp/issue-notes/10.md
- .github/actions-tmp/issue-notes/11.md
- .github/actions-tmp/issue-notes/12.md
- .github/actions-tmp/issue-notes/13.md
- .github/actions-tmp/issue-notes/14.md
- .github/actions-tmp/issue-notes/15.md
- .github/actions-tmp/issue-notes/16.md
- .github/actions-tmp/issue-notes/17.md
- .github/actions-tmp/issue-notes/18.md
- .github/actions-tmp/issue-notes/19.md
- .github/actions-tmp/issue-notes/2.md
- .github/actions-tmp/issue-notes/20.md
- .github/actions-tmp/issue-notes/21.md
- .github/actions-tmp/issue-notes/22.md
- .github/actions-tmp/issue-notes/23.md
- .github/actions-tmp/issue-notes/24.md
- .github/actions-tmp/issue-notes/25.md
- .github/actions-tmp/issue-notes/26.md
- .github/actions-tmp/issue-notes/27.md
- .github/actions-tmp/issue-notes/28.md
- .github/actions-tmp/issue-notes/3.md
- .github/actions-tmp/issue-notes/4.md
- .github/actions-tmp/issue-notes/7.md
- .github/actions-tmp/issue-notes/8.md
- .github/actions-tmp/issue-notes/9.md
- .github/actions-tmp/package-lock.json
- .github/actions-tmp/package.json
- .github/actions-tmp/src/main.js
- .github/workflows/call-callgraph.yml
- .github/workflows/call-daily-project-summary.yml
- .github/workflows/call-issue-note.yml
- .github/workflows/call-translate-readme.yml
- .github/workflows/callgraph.yml
- .github/workflows/check-recent-human-commit.yml
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
- .github_automation/callgraph/scripts/check-node-version.cjs
- .github_automation/callgraph/scripts/common-utils.cjs
- .github_automation/callgraph/scripts/copy-commit-results.cjs
- .github_automation/callgraph/scripts/extract-sarif-info.cjs
- .github_automation/callgraph/scripts/find-process-results.cjs
- .github_automation/callgraph/scripts/generate-html-graph.cjs
- .github_automation/callgraph/scripts/generateHTML.cjs
- .github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs
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
- issue-notes/25.md
- issue-notes/26.md
- issue-notes/27.md
- issue-notes/28.md
- issue-notes/3.md
- issue-notes/4.md
- issue-notes/7.md
- issue-notes/8.md
- issue-notes/9.md
- src/main.js

## 現在のオープンIssues
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

# 保留、別projectでの検証待ちのもの
- promptsをcall側ymlで指定可能にする
  - 保留の理由
    - YAGNI原則
      - 現状の共通workflow側のpromptsで問題ないうちは、保留とする
        - そのままで使える可能性が高い見込み
      - 検証が必要
      - 別promptsを実際に書く必要が出たときに、追加実装をする
# 課題、 docs/ をメンテする
- 対象は、 daily-summary-setup.md
- call-daily-project-summary.yml の導入手順を書く
- どうする？
  - 次の日次バッチでagent用promptを生成させる

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

# 状況
- 上記のうち、別dirへの切り分け等は実施済みのはず
- どうする？
    - それをここに可視化する。

```

## ドキュメントで言及されているファイルの内容
### .github/actions-tmp/.github/workflows/call-daily-project-summary.yml
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

### .github/actions-tmp/.github/workflows/daily-project-summary.yml
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
  check_recent_human_commit:
    uses: ./.github/workflows/check-recent-human-commit.yml

  generate-summary:
    needs: check_recent_human_commit
    if: needs.check_recent_human_commit.outputs.has_recent_human_commit == 'true'
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
            ${{ github.workspace }}

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
          git config --local user.name "github-actions[bot]"
          git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add ${{ env.DOCS_DIR }}/${{ env.OUT_OVERVIEW }}
          git add ${{ env.DOCS_DIR }}/${{ env.OUT_DEVELOPMENT_STATUS }}
          git add ${{ env.DOCS_DIR }}/${{ env.OUT_DEVELOPMENT_STATUS_GENERATED_PROMPT }}
          if git diff --cached --quiet; then
            echo "No changes to commit"
          else
            git commit -m "Update project summaries (overview & development status) [auto]"
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
  check_recent_human_commit:
    uses: ./.github/workflows/check-recent-human-commit.yml

  generate-summary:
    needs: check_recent_human_commit
    if: needs.check_recent_human_commit.outputs.has_recent_human_commit == 'true'
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
            ${{ github.workspace }}

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
          git config --local user.name "github-actions[bot]"
          git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add ${{ env.DOCS_DIR }}/${{ env.OUT_OVERVIEW }}
          git add ${{ env.DOCS_DIR }}/${{ env.OUT_DEVELOPMENT_STATUS }}
          git add ${{ env.DOCS_DIR }}/${{ env.OUT_DEVELOPMENT_STATUS_GENERATED_PROMPT }}
          if git diff --cached --quiet; then
            echo "No changes to commit"
          else
            git commit -m "Update project summaries (overview & development status) [auto]"
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

### .github/actions-tmp/.github_automation/project_summary/docs/daily-summary-setup.md
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

### .github/actions-tmp/issue-notes/11.md
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

# 状況
- 上記のうち、別dirへの切り分け等は実施済みのはず
- どうする？
    - それをここに可視化する。

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

# 状況
- 上記のうち、別dirへの切り分け等は実施済みのはず
- どうする？
    - それをここに可視化する。

```

### .github/actions-tmp/issue-notes/12.md
```md
# issue project-summary を他projectから使いやすくする #12
[issues #12](https://github.com/cat2151/github-actions/issues/12)

# 保留、別projectでの検証待ちのもの
- promptsをcall側ymlで指定可能にする
  - 保留の理由
    - YAGNI原則
      - 現状の共通workflow側のpromptsで問題ないうちは、保留とする
        - そのままで使える可能性が高い見込み
      - 検証が必要
      - 別promptsを実際に書く必要が出たときに、追加実装をする
# 課題、 docs/ をメンテする
- 対象は、 daily-summary-setup.md
- call-daily-project-summary.yml の導入手順を書く
- どうする？
  - 次の日次バッチでagent用promptを生成させる

```

### issue-notes/12.md
```md
# issue project-summary を他projectから使いやすくする #12
[issues #12](https://github.com/cat2151/github-actions/issues/12)

# 保留、別projectでの検証待ちのもの
- promptsをcall側ymlで指定可能にする
  - 保留の理由
    - YAGNI原則
      - 現状の共通workflow側のpromptsで問題ないうちは、保留とする
        - そのままで使える可能性が高い見込み
      - 検証が必要
      - 別promptsを実際に書く必要が出たときに、追加実装をする
# 課題、 docs/ をメンテする
- 対象は、 daily-summary-setup.md
- call-daily-project-summary.yml の導入手順を書く
- どうする？
  - 次の日次バッチでagent用promptを生成させる

```

### .github/actions-tmp/issue-notes/13.md
```md
# issue issue-note を他projectから使いやすくする #13
[issues #13](https://github.com/cat2151/github-actions/issues/13)

- docs
    - call導入手順を書く

```

### issue-notes/13.md
```md
# issue issue-note を他projectから使いやすくする #13
[issues #13](https://github.com/cat2151/github-actions/issues/13)

- docs
    - call導入手順を書く

```

### .github/actions-tmp/issue-notes/2.md
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

### .github/actions-tmp/issue-notes/3.md
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
b8e2fa6 Update callgraph.html [auto]
caebafd #10 document改善。agentのハルシネーションによるdocument破壊があったので、対策としてdocument行数を400行から100行に削減した。のち、全体をできるだけ見直して修正した
48d20a8 Update project summaries (overview & development status) [auto]
e20c0c6 Update callgraph.html [auto]
603ddba #10 document改善
2cf5f56 Merge branch 'main' of github.com:cat2151/github-actions into main
c5fe30e fix #10 close条件を満たしたと判断し、closeとする
4020f8b Update project summaries (overview & development status) [auto]
f23ec9c Update callgraph.html [auto]
162a8ee fix #16 test greenなのでcloseとする

### 変更されたファイル:
.github_automation/callgraph/docs/callgraph.md
generated-docs/callgraph.html
generated-docs/development-status-generated-prompt.md
generated-docs/development-status.md
generated-docs/project-overview.md
issue-notes/10.md


---
Generated at: 2025-10-11 07:04:57 JST

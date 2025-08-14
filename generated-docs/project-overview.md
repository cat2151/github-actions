Last updated: 2025-08-14

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: 特になし（生成されるドキュメントはHTML/CSS/JSを含むが、このプロジェクトの主要な開発領域ではない）
- 音楽・オーディオ: Tone.js (Web Audio API音声ライブラリ), MML (Music Macro Language), Web Audio API (ブラウザ音声技術、Tone.js経由で利用)
- 開発ツール: Node.js runtime (JavaScript実行環境), npm scripts (タスクランナー), Google Generative AI (AI文書生成サポート), @octokit/rest (GitHub API連携)
- テスト: 特になし
- ビルドツール: npm scripts (タスクランナーとしてプロジェクトの自動化やスクリプト実行に利用)
- 言語機能: JavaScript (Node.js環境下でのスクリプト開発に利用)
- 自動化・CI/CD: GitHub Actions (複数プロジェクトで再利用可能な共通ワークフロー集として、プロジェクト要約自動生成、Issue自動管理、README多言語翻訳、i18n自動化など8つのワークフローを提供)
- 開発標準: 特になし

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
      📖 project_summary_cjs_analysis.md
    📁 prompts/
      📖 development-status-prompt.md
      📖 project-overview-prompt.md
    📁 scripts/
      📄 CodeAnalyzer.cjs
      📄 FileSystemUtils.cjs
      📄 GitUtils.cjs
      📄 ProjectAnalyzer.cjs
      📄 generate-project-summary.cjs
  📁 translate/
    📁 docs/
      📖 TRANSLATION_SETUP.md
    📁 scripts/
      📄 translate-readme.cjs
📄 .gitignore
📄 LICENSE
📖 README.ja.md
📖 README.md
📁 generated-docs/
  🌐 callgraph.html
  📜 callgraph.js
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
  📖 2.md
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
- **`.github_automation/`**: GitHub Actionsの自動化スクリプトや設定ファイルを格納する最上位ディレクトリ。
  - **`callgraph/`**: 関数呼び出しグラフの生成と可視化に関連する自動化処理を格納。
    - **`codeql-queries/callgraph.ql`**: CodeQLを使用して呼び出しグラフデータを抽出するためのクエリ。
    - **`presets/callgraph.js`**: 生成された呼び出しグラフのHTMLページで動作するインタラクティブなJavaScriptロジック（ノード表示、レイアウト調整など）を定義。
    - **`presets/style.css`**: 呼び出しグラフのHTMLページの視覚スタイルを定義するCSSファイル。
    - **`scripts/`**: 呼び出しグラフ生成プロセスにおける各種ユーティリティスクリプト。
      - **`analyze-codeql.cjs`**: CodeQL分析を実行し、結果を処理するスクリプト。
      - **`generate-html-graph.cjs`**: 分析結果からインタラクティブなHTMLグラフを生成するスクリプト。
  - **`project_summary/`**: プロジェクト概要の自動生成に関連する処理を格納。
    - **`prompts/development-status-prompt.md`**: 開発状況の概要を生成する際にAIに与えるプロンプトの定義ファイル。
    - **`prompts/project-overview-prompt.md`**: プロジェクト全体の概要を生成する際にAIに与えるプロンプトの定義ファイル。
    - **`scripts/`**: プロジェクト概要生成プロセスにおける各種ユーティリティスクリプト。
      - **`CodeAnalyzer.cjs`**: コードベースの分析を担当するスクリプト。
      - **`FileSystemUtils.cjs`**: ファイルシステム操作を補助するユーティリティスクリプト。
      - **`GitUtils.cjs`**: Gitリポジトリ操作を補助するユーティリティスクリプト。
      - **`ProjectAnalyzer.cjs`**: プロジェクト全体の構造や内容を分析する主要なスクリプト。
      - **`generate-project-summary.cjs`**: AI（Google Generative AI）を利用してプロジェクトの概要を自動生成するメインスクリプト。
  - **`translate/scripts/translate-readme.cjs`**: READMEファイルの多言語翻訳を自動化するためのスクリプト。
- **`.gitignore`**: Gitが追跡しないファイルやディレクトリを指定する設定ファイル。
- **`LICENSE`**: プロジェクトのライセンス情報が記載されたファイル。
- **`README.ja.md` / `README.md`**: プロジェクトの目的、使い方、特徴などを記述したメインドキュメントの日本語版と英語版。
- **`generated-docs/`**: GitHub Actionsによって自動生成されたドキュメントや成果物を格納するディレクトリ。
  - **`callgraph.html`**: 生成された関数呼び出しグラフをブラウザで表示するためのHTMLファイル。
  - **`callgraph.js`**: `callgraph.html`から読み込まれ、インタラクティブなグラフ表示と操作を提供するJavaScriptファイル。
  - **`style.css`**: `callgraph.html`から読み込まれ、グラフ表示のスタイルを定義するCSSファイル。
  - **`development-status.md`**: AIによって自動生成された開発状況の概要ドキュメント。
  - **`project-overview.md`**: AIによって自動生成されたプロジェクト概要ドキュメント。
- **`issue-notes/`**: GitHub ActionsのIssue管理ワークフローによって生成された、Issue関連のメモや記録を格納するディレクトリ。
- **`package.json`**: Node.jsプロジェクトのメタデータ（プロジェクト名、バージョン、スクリプト、依存関係など）を定義するファイル。
- **`package-lock.json`**: `package.json`で定義された依存関係のインストール時の正確なツリー構造とバージョンを記録し、ビルドの再現性を保証するファイル。
- **`src/main.js`**: プロジェクトのシンプルなエントリポイントとなるJavaScriptファイル。

## 関数詳細説明
- **`escapeHtml(str)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): HTML特殊文字をエスケープし、文字列を安全にHTMLとして表示可能にする。
- **`getLayoutConfig()`** (同上): グラフのレイアウト設定を取得または決定する。
- **`placeCentralNode()`** (同上): グラフ表示の中心となるノードの配置を処理する。
- **`showNodeInfo()`** (同上): 選択されたノード（関数など）の詳細情報をパネルに表示する。
- **`showEdgeInfo()`** (同上): 選択されたエッジ（関数間の呼び出しなど）の詳細情報をパネルに表示する。
- **`hideInfoPanel()`** (同上): 情報表示パネルを非表示にする。
- **`showInfoPanel()`** (同上): 情報表示パネルを表示する。
- **`toggleInfoPanel()`** (同上): 情報表示パネルの表示/非表示を切り替える。
- **`generateGitHubURL()`** (同上): GitHub上のファイルやコード行へのURLを生成する。
- **`resetLayout()`** (同上): グラフのレイアウトを初期状態にリセットする。
- **`watchNodeMovementAndFixOverlapsWrap()`** (同上): ノードの動きを監視し、重なりを修正するロジックをラップする。
- **`watchNodeMovementAndFixOverlaps()`** (同上): グラフ内のノードの重なりを動的に検出し、解消する主要なロジック。
- **`resolveNodeOverlaps()`** (同上): 複数のノードが重なっている場合に、それらを適切に配置し直すアルゴリズムを実行する。
- **`switchLayout()`** (同上): グラフの表示レイアウト（例：ツリー、フォースディレクテッド）を切り替える。
- **`resetNodeStates()`** (同上): 選択状態やハイライトなど、ノードの視覚的な状態をリセットする。
- **`fitToContent()`** (同上): グラフ全体がビューポートに収まるようにズームレベルや位置を調整する。
- **`toggleNodeLabels()`** (同上): ノードに表示されるラベル（関数名など）の表示/非表示を切り替える。
- **`toggleCalleeLocationFilter()`** (同上): 呼び出し元または呼び出し先の位置によるフィルタリングを有効/無効にする。
- **`greet()`** (`src/main.js`): シンプルな挨拶メッセージを返す関数。
- **`main()`** (`src/main.js`): プロジェクトの基本的な実行エントリポイントとなる関数。

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
Generated at: 2025-08-14 07:05:32 JST

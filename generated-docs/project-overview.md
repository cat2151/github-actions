Last updated: 2025-08-04

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽にするための共通ワークフロー集です。
- 🔗 共通化されたワークフローを提供し、どのプロジェクトからも呼び出すだけで利用可能です。
- ✅ ワークフローの一括メンテナンスを可能にし、プロジェクト開発に集中できる環境を提供します。

## 技術スタック
- フロントエンド: N/A (プロジェクトの性質上、直接的なフロントエンド技術は含まれませんが、生成されるHTMLはWebブラウザで表示されます。)
- 音楽・オーディオ: N/A (提供された依存関係には音楽・オーディオ関連の記載がありますが、本プロジェクトの目的からは直接使用されていません。)
- 開発ツール:
    - Node.js runtime: JavaScript実行環境として、スクリプトやワークフローの実行に使用されます。
    - npm scripts: Node.jsプロジェクトのタスクランナーとして、スクリプト実行を効率化します。
    - Google Generative AI: プロジェクトの文書生成サポートに利用されます。
    - @octokit/rest: GitHub APIと連携し、リポジトリ情報の取得や操作を可能にします。
- テスト: N/A (明示的なテストフレームワークの記載はありません。)
- ビルドツール: N/A (明示的なビルドツールの記載はありません。)
- 言語機能: N/A (特定の言語機能に特化した説明はありません。)
- 自動化・CI/CD:
    - GitHub Actions: プロジェクトのCI/CDプロセスを自動化するための主要なプラットフォームです。
        - プロジェクト要約自動生成: プロジェクトの概要を自動生成するワークフロー。
        - Issue自動管理: Issueのライフサイクルを自動化するワークフロー。
        - README多言語翻訳: READMEファイルを多言語に翻訳するワークフロー。
        - i18n automation: 国際化（i18n）関連の自動翻訳ワークフロー。
- 開発標準: N/A (明示的な開発標準ツールの記載はありません。)

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
- **`.github_automation/`**: GitHub Actionsの共通ワークフローや自動化スクリプトが格納されているルートディレクトリです。
    - **`callgraph/`**: コードの呼び出しグラフを生成・表示するための関連ファイル群です。
        - **`codeql-queries/callgraph.ql`**: CodeQLを使用してコードの呼び出し関係を抽出するためのクエリファイルです。
        - **`presets/callgraph.js`**: 生成された呼び出しグラフをブラウザ上でインタラクティブに表示・操作するためのJavaScriptスクリプトです。Cytoscape.jsなどのグラフ描画ライブラリと連携し、ノードの配置、情報表示、レイアウト切り替えなどを行います。
        - **`presets/style.css`**: 呼び出しグラフのHTML表示におけるスタイル定義を記述したCSSファイルです。
        - **`scripts/`**: 呼び出しグラフの生成、解析、HTML出力などに関連するユーティリティスクリプト群です。
            - `analyze-codeql.cjs`: CodeQLの分析結果を処理するスクリプト。
            - `generate-html-graph.cjs`: 分析結果からHTML形式の呼び出しグラフを生成するスクリプト。
            - `generateHTML.cjs`: HTMLファイルを生成する汎用スクリプト。
    - **`project_summary/`**: プロジェクト概要や開発状況の自動生成に関連するファイル群です。
        - **`prompts/project-overview-prompt.md`**: プロジェクト概要を生成する際にAIに与えるプロンプトの定義ファイルです。
        - **`scripts/generate-project-summary.cjs`**: Google Generative AIを利用してプロジェクト概要を自動生成するためのスクリプトです。
    - **`translate/scripts/translate-readme.cjs`**: READMEファイルを多言語に翻訳するためのスクリプトです。
- **`README.md` / `README.ja.md`**: プロジェクトの目的、使い方、概要などを説明する主要なドキュメントファイル（英語と日本語版）です。
- **`generated-docs/`**: 自動化ワークフローによって生成されたドキュメントやレポートが格納されるディレクトリです。
    - **`callgraph.html`**: 自動生成されたコード呼び出しグラフのHTMLビューファイルです。
    - **`callgraph.js`**: `presets/callgraph.js`がコピーまたは生成されたもので、`callgraph.html`から参照され、グラフのインタラクティブな表示を提供します。
    - **`project-overview.md`**: 自動生成されたプロジェクト概要のMarkdownファイルです。
- **`package.json`**: Node.jsプロジェクトの設定ファイルで、プロジェクトのメタデータ、スクリプト、依存関係が定義されています。
- **`package-lock.json`**: `package.json`に基づく依存関係の厳密なバージョンを記録するファイルで、ビルドの再現性を保証します。
- **`src/main.js`**: このリポジトリのサンプル、またはテスト用のシンプルなJavaScriptファイルです。

## 関数詳細説明
- **`escapeHtml(str)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: HTML特殊文字をエスケープし、安全に文字列をHTMLに埋め込むためのユーティリティ関数。
    - 引数: `str` (string) - エスケープする文字列。
    - 戻り値: (string) - エスケープされた文字列。
- **`getLayoutConfig()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフのレイアウト設定を取得または決定するための関数。
    - 引数: なし。
    - 戻り値: (object) - レイアウト設定オブジェクト。
- **`placeCentralNode(cy, node, x, y)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフの中心に特定のノードを配置するための関数。
    - 引数: `cy` (object) - Cytoscape.jsインスタンス, `node` (object) - 配置するノードオブジェクト, `x` (number) - X座標, `y` (number) - Y座標。
    - 戻り値: なし。
- **`showNodeInfo(node)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 選択されたノード（関数など）の詳細情報を情報パネルに表示する関数。
    - 引数: `node` (object) - 表示するノードオブジェクト。
    - 戻り値: なし。
- **`showEdgeInfo(edge)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 選択されたエッジ（呼び出し関係）の詳細情報を情報パネルに表示する関数。
    - 引数: `edge` (object) - 表示するエッジオブジェクト。
    - 戻り値: なし。
- **`hideInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 情報表示パネルを非表示にする関数。
    - 引数: なし。
    - 戻り値: なし。
- **`showInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 情報表示パネルを表示する関数。
    - 引数: なし。
    - 戻り値: なし。
- **`toggleInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 情報表示パネルの表示/非表示を切り替える関数。
    - 引数: なし。
    - 戻り値: なし。
- **`generateGitHubURL(filePath, startLine)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: ファイルパスと行番号からGitHubリポジトリの該当箇所のURLを生成する関数。
    - 引数: `filePath` (string) - ファイルのパス, `startLine` (number) - 開始行番号。
    - 戻り値: (string) - 生成されたGitHub URL。
- **`resetLayout()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフのレイアウトを初期状態にリセットする関数。
    - 引数: なし。
    - 戻り値: なし。
- **`watchNodeMovementAndFixOverlapsWrap()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: ノードの動きを監視し、重なりを修正する処理をラップする関数。
    - 引数: なし。
    - 戻り値: なし。
- **`watchNodeMovementAndFixOverlaps(cy)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: Cytoscape.jsインスタンス上でノードの動きをリアルタイムで監視し、ノードの重なりを解決する関数。
    - 引数: `cy` (object) - Cytoscape.jsインスタンス。
    - 戻り値: なし。
- **`resolveNodeOverlaps(cy)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ上のノード間の重なりを検出し、解消するアルゴリズムを実行する関数。
    - 引数: `cy` (object) - Cytoscape.jsインスタンス。
    - 戻り値: なし。
- **`switchLayout(layoutName)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフの表示レイアウトを切り替える関数（例: 円形、グリッド、ツリーなど）。
    - 引数: `layoutName` (string) - 切り替えるレイアウトの名前。
    - 戻り値: なし。
- **`resetNodeStates()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: すべてのノードの表示状態（選択、ハイライトなど）をリセットする関数。
    - 引数: なし。
    - 戻り値: なし。
- **`fitToContent()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ全体がビューポートに収まるようにズームレベルを調整する関数。
    - 引数: なし。
    - 戻り値: なし。
- **`toggleNodeLabels()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: ノードのラベル（テキスト）の表示/非表示を切り替える関数。
    - 引数: なし。
    - 戻り値: なし。
- **`toggleCalleeLocationFilter()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 呼び出し元/呼び出し先の場所によるフィルタリングの有効/無効を切り替える関数。
    - 引数: なし。
    - 戻り値: なし。
- **`replace()`**, **`switch()`**, **`function()`**, **`max()`**, **`on()`**, **`if()`**, **`for()`**, **`ready()`**, **`addListener()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: これらの関数は、多くの場合、Cytoscape.jsやjQueryのようなライブラリの内部処理、コールバック関数、またはJavaScriptのキーワードや組み込み関数として、グラフの描画、イベント処理、データ操作などの文脈で使用されます。特定の独立した関数というよりは、プログラムの構造の一部として機能します。
- **`greet(name)`** (`src/main.js`)
    - 役割: 指定された名前で挨拶メッセージを返すシンプルな関数。
    - 引数: `name` (string) - 挨拶の対象となる名前。
    - 戻り値: (string) - 挨拶メッセージ。
- **`main()`** (`src/main.js`)
    - 役割: プログラムのエントリポイントとなる関数。`greet`関数を呼び出してコンソールに出力します。
    - 引数: なし。
    - 戻り値: なし。

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
Generated at: 2025-08-04 07:05:17 JST

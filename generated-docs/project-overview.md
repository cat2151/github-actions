Last updated: 2025-08-09

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: このプロジェクトは主にGitHub Actionsワークフローとそれに関連するスクリプトで構成されており、特定のフロントエンド技術は直接使用していません。
- 音楽・オーディオ:
    - Tone.js: Web Audio APIを扱うための高機能なJavaScriptフレームワーク。
    - MML (Music Macro Language): 音楽をテキストで記述するための簡易記法パーサー。
    - Web Audio API: ブラウザで高度な音声処理を行うためのAPI（主にTone.jsを通じて利用）。
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するための環境。
    - npm scripts: `package.json`に定義されたスクリプトを実行するためのタスクランナー。
    - Google Generative AI: AIによる文書生成（プロジェクト要約、翻訳など）をサポートするためのAPI。
    - @octokit/rest: GitHub APIと連携し、リポジトリ情報の取得や操作を行うためのライブラリ。
- テスト: 特定のテストフレームワークやライブラリは明示されていません。
- ビルドツール: 特定のビルドツールは明示されていませんが、npm scriptsが簡易的なビルド・処理タスクに使用されることがあります。
- 言語機能: このプロジェクトのスクリプトはJavaScript (Node.js環境) で記述されており、JavaScriptの基本的な言語機能が利用されています。
- 自動化・CI/CD:
    - GitHub Actions: コードの変更を検知して、テスト、デプロイ、文書生成、翻訳などのワークフローを自動的に実行するためのCI/CDプラットフォーム。
- 開発標準: 特定のコード品質ツールや開発標準は明示されていません。

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
- **.github_automation/callgraph/presets/callgraph.js**: 関数呼び出しグラフの動的な表示、ノード情報のインタラクション、レイアウト制御など、グラフの視覚化と操作に関する主要なJavaScriptロジックを定義しています。
- **.github_automation/callgraph/presets/style.css**: 関数呼び出しグラフの視覚的なスタイル（色、形状、配置など）を定義するCSSファイルです。
- **generated-docs/callgraph.html**: 自動生成された関数呼び出しグラフをWebブラウザで表示するためのHTMLファイルです。このファイルがグラフのコンテナとなります。
- **generated-docs/callgraph.js**: `generated-docs/callgraph.html`内で読み込まれるJavaScriptファイルで、生成された関数呼び出しグラフの動的な表示やユーザーインタラクション（ノードの選択、情報表示など）を制御します。内容は`.github_automation/callgraph/presets/callgraph.js`と同じです。
- **generated-docs/style.css**: `generated-docs/callgraph.html`で読み込まれるCSSファイルで、生成された関数呼び出しグラフのスタイルを適用します。内容は`.github_automation/callgraph/presets/style.css`と同じです。
- **src/main.js**: プロジェクトの主要なエントリポイントの一つで、基本的な関数（例: `greet`, `main`）が含まれています。このファイルは、プロジェクトがJavaScriptアプリケーションとしてどのように動作するかを示す最小限の例である可能性があります。

## 関数詳細説明
- **escapeHtml(text)**: HTML特殊文字をエスケープし、スクリプトインジェクションなどのセキュリティ脆弱性を防ぎます。
- **getLayoutConfig()**: 関数呼び出しグラフのレイアウトに関する設定オブジェクトを取得します。
- **placeCentralNode()**: グラフの中心に特定のノード（関数）を配置する処理を行います。
- **showNodeInfo()**: 選択されたグラフノード（関数など）の詳細情報を表示パネルに表示します。
- **showEdgeInfo()**: 選択されたグラフエッジ（関数間の呼び出し関係）の詳細情報を表示パネルに表示します。
- **hideInfoPanel()**: グラフに関連する情報表示パネルを非表示にします。
- **showInfoPanel()**: グラフに関連する情報表示パネルを表示します。
- **toggleInfoPanel()**: グラフに関連する情報表示パネルの表示状態（表示/非表示）を切り替えます。
- **generateGitHubURL()**: 関連するGitHubリポジトリやファイルへのURLを生成します。
- **resetLayout()**: グラフの表示レイアウトを初期状態にリセットします。
- **watchNodeMovementAndFixOverlapsWrap()**: ノードの移動を監視し、他のノードとの重なりを解決するためのラッパー関数です。
- **watchNodeMovementAndFixOverlaps()**: ノードの移動を継続的に監視し、移動中のノードや他のノードとの重なりを自動的に調整して解消します。
- **resolveNodeOverlaps()**: グラフ内のノードの重なりを検出し、それらを互いに離して視覚的な衝突を解消します。
- **switchLayout()**: グラフの表示レイアウト（例: 円形、グリッドなど）を異なる種類に切り替えます。
- **resetNodeStates()**: グラフ内のノードの現在の状態（選択状態、ハイライト状態など）をリセットし、初期状態に戻します。
- **fitToContent()**: グラフ全体の表示範囲を、すべてのノードとエッジが収まるように調整します。
- **toggleNodeLabels()**: グラフノードに表示されるラベル（関数名など）の表示/非表示を切り替えます。
- **toggleCalleeLocationFilter()**: 呼び出しグラフにおいて、呼び出し元または呼び出し先のファイルパスやロケーションに基づいてフィルタリングを切り替えます。
- **replace()**: 文字列の置換など、汎用的な置換処理を実行します。
- **switch()**: JavaScriptの制御構文で、複数の条件分岐を効率的に処理するために使用されます。
- **function()**: JavaScriptで関数を定義するためのキーワードです。
- **max()**: 複数の値の中から最大値を取得する関数です（例: `Math.max`）。
- **on()**: イベントリスナーを登録する際に使用されるメソッドです（例: ライブラリにおけるイベントハンドラの設定）。
- **if()**: JavaScriptの制御構文で、条件に基づいてコードブロックを実行するために使用されます。
- **for()**: JavaScriptの制御構文で、指定された回数だけ処理を繰り返すために使用されます。
- **ready()**: ドキュメントの準備が完了した際に実行されるイベントを待ち受けるメソッドです（例: DOMContentLoaded）。
- **addListener()**: 特定のイベントが発生した際に実行されるリスナー関数を追加するメソッドです。
- **greet()**: シンプルな挨拶メッセージを生成し、返す関数です。
- **main()**: プログラムの主要な実行フローを定義する関数です。

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
Generated at: 2025-08-09 07:05:31 JST

Last updated: 2025-07-22

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: HTML (呼び出しグラフ表示用ビューア)、CSS (ビューアのスタイル定義)、JavaScript (呼び出しグラフの描画、インタラクティブ機能、DOM操作)
- 音楽・オーディオ: (該当なし)
- 開発ツール: Node.js (GitHub Actionsワークフロー内で実行されるスクリプトの実行環境)
- テスト: (情報なし)
- ビルドツール: (情報なし、ただしNode.jsスクリプトが分析・生成プロセスに関わる)
- 言語機能: JavaScript (CommonJSモジュール形式 .cjs を含む)
- 自動化・CI/CD: GitHub Actions (複数プロジェクトで再利用可能な共通ワークフローの基盤として活用)
- 開発標準: (情報なし)

## ファイル階層ツリー
```
📁 .github_automation/
  📁 callgraph_enhanced/
    📁 config/
      📊 example.json
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
📄 .gitignore
📄 LICENSE
📖 README.ja.md
📖 README.md
📁 generated-docs/
  🌐 callgraph-enhanced.html
  📜 callgraph.js
  📖 development-status.md
  📖 project-overview.md
  🎨 style.css
📁 issue-notes/
  📖 2.md
  📖 3.md
  📖 4.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明
- **generated-docs/callgraph-enhanced.html**: プロジェクトの関数呼び出しグラフを視覚的に表示するためのHTMLファイルです。このファイルは、`callgraph.js` と `style.css` を利用して、インタラクティブなコード構造ビューアとして機能します。
- **generated-docs/callgraph.js**: 呼び出しグラフの描画ロジック、インタラクション処理（ノードの選択、情報パネルの表示、レイアウト調整、ズームなど）、およびデータ処理を行うJavaScriptライブラリです。`callgraph-enhanced.html` と連携し、動的なグラフ表示とユーザー操作を提供します。
- **generated-docs/style.css**: 呼び出しグラフの見た目、ノードやエッジ、情報パネルなどのUI要素のスタイルを定義するCSSファイルです。
- **src/main.js**: 非常に簡潔なJavaScriptファイルで、`greet` 関数と `main` 関数を含みます。主に基本的な機能のサンプルやテスト目的で使用されている可能性があります。
- **.github_automation/callgraph_enhanced/config/example.json**: 呼び出しグラフの生成プロセスや関連するスクリプトの設定例を記述したJSONファイルです。
- **.github_automation/callgraph_enhanced/scripts/*.cjs**: GitHub Actionsワークフロー内で実行されるNode.jsスクリプト群です。これらは、コード品質ツール（CodeQL）のチェック、コミット情報の検証、SARIFレポートからのセキュリティ情報抽出、そして最終的な呼び出しグラフHTMLの生成など、CI/CDパイプラインにおける自動化された分析とレポート生成の各ステップを担当します。これらのスクリプトが連携して、動的な呼び出しグラフのデータと静的リソース（HTML, JS, CSS）を生成します。
- **.gitignore**: Gitのバージョン管理から除外するファイルやディレクトリを指定する設定ファイルです。
- **LICENSE**: 本プロジェクトのライセンス情報が記載されています。
- **README.ja.md**, **README.md**: プロジェクトの目的、使い方、概要などを説明するドキュメントファイル（日本語版と英語版）です。
- **generated-docs/development-status.md**, **generated-docs/project-overview.md**: 生成されたドキュメントの一部で、プロジェクトの現在の開発状況や詳細な概要を説明するMarkdownファイルです。
- **issue-notes/*.md**: 開発中の課題や検討事項、あるいは過去の決定に関するメモを記録したMarkdownファイル群です。

## 関数詳細説明
- **escapeHtml(string)** (generated-docs/callgraph.js):
    - 役割: HTMLの特殊文字（&, <, >, ", '）を対応するHTMLエンティティに変換し、クロスサイトスクリプティング (XSS) 攻撃を防ぎます。
    - 引数: `string` (処理対象の文字列)
    - 戻り値: エスケープされた文字列
- **getLayoutConfig()** (generated-docs/callgraph.js):
    - 役割: グラフのレイアウトに関する設定情報を取得または決定します。
    - 引数: なし
    - 戻り値: レイアウト設定オブジェクト
- **placeCentralNode()** (generated-docs/callgraph.js):
    - 役割: グラフの中心となるノードを特定の初期位置に配置します。
    - 引数: なし
    - 戻り値: なし
- **showNodeInfo(nodeData)** (generated-docs/callgraph.js):
    - 役割: 指定されたノード（関数やファイルなど）の詳細情報をサイドパネルに表示します。
    - 引数: `nodeData` (表示するノードのデータ)
    - 戻り値: なし
- **showEdgeInfo(edgeData)** (generated-docs/callgraph.js):
    - 役割: 指定されたエッジ（関数間の呼び出し関係）の詳細情報をサイドパネルに表示します。
    - 引数: `edgeData` (表示するエッジのデータ)
    - 戻り値: なし
- **hideInfoPanel()** (generated-docs/callgraph.js):
    - 役割: 情報表示パネルを非表示にします。
    - 引数: なし
    - 戻り値: なし
- **showInfoPanel(data)** (generated-docs/callgraph.js):
    - 役割: 情報表示パネルを表示し、渡されたデータをパネル内にレンダリングします。
    - 引数: `data` (パネルに表示する情報)
    - 戻り値: なし
- **toggleInfoPanel()** (generated-docs/callgraph.js):
    - 役割: 情報表示パネルの表示状態（表示/非表示）を切り替えます。
    - 引数: なし
    - 戻り値: なし
- **generateGitHubURL(filePath, lineNumber)** (generated-docs/callgraph.js):
    - 役割: 指定されたファイルパスと行番号に基づき、GitHub上のソースコードへのリンクURLを生成します。
    - 引数: `filePath` (ファイルのパス), `lineNumber` (行番号)
    - 戻り値: GitHubのURL文字列
- **resetLayout()** (generated-docs/callgraph.js):
    - 役割: グラフのレイアウトを初期状態にリセットし、ノードの配置を再計算します。
    - 引数: なし
    - 戻り値: なし
- **watchNodeMovementAndFixOverlapsWrap()** (generated-docs/callgraph.js):
    - 役割: ノードの動きを監視し、必要に応じて`watchNodeMovementAndFixOverlaps`関数を呼び出してノードの重なりを修正するラッパー関数です。
    - 引数: なし
    - 戻り値: なし
- **watchNodeMovementAndFixOverlaps()** (generated-docs/callgraph.js):
    - 役割: グラフ内のノードの動きを継続的に監視し、ノードが重なり合わないように位置を調整するロジックを実行します。
    - 引数: なし
    - 戻り値: なし
- **resolveNodeOverlaps()** (generated-docs/callgraph.js):
    - 役割: グラフ内の重なったノードを検出し、視覚的に分かりやすく配置し直すための処理を実行します。
    - 引数: なし
    - 戻り値: なし
- **switchLayout(layoutType)** (generated-docs/callgraph.js):
    - 役割: グラフの描画に使用するレイアウトアルゴリズム（例: 力学ベース、階層型など）を切り替えます。
    - 引数: `layoutType` (切り替えるレイアウトのタイプを示す文字列)
    - 戻り値: なし
- **resetNodeStates()** (generated-docs/callgraph.js):
    - 役割: グラフ内の全てのノードの現在の状態（選択状態、ハイライト表示など）を初期状態にリセットします。
    - 引数: なし
    - 戻り値: なし
- **fitToContent()** (generated-docs/callgraph.js):
    - 役割: グラフ全体が現在の表示領域（ビューポート）に収まるように、ズームレベルとパン位置を自動調整します。
    - 引数: なし
    - 戻り値: なし
- **toggleNodeLabels()** (generated-docs/callgraph.js):
    - 役割: グラフノードに表示されるラベルの表示/非表示を切り替えます。
    - 引数: なし
    - 戻り値: なし
- **toggleCalleeLocationFilter()** (generated-docs/callgraph.js):
    - 役割: 呼び出し先（callee）のファイルや位置に基づいて、グラフのフィルタリングを有効/無効に切り替えます。
    - 引数: なし
    - 戻り値: なし
- **replace()** (generated-docs/callgraph.js):
    - 役割: 文字列置換など、JavaScriptの組み込み`String.prototype.replace()`メソッドが使用されている可能性があります。文脈によって具体的な機能は異なります。
    - 引数: 検索パターン、置換文字列
    - 戻り値: 置換後の文字列
- **function()** (generated-docs/callgraph.js):
    - 役割: これは匿名関数または一般的な関数定義キーワードを示しており、特定の機能を持つ関数名ではありません。コールバック関数として使用されていることが多いです。
    - 引数: 文脈による
    - 戻り値: 文脈による
- **max()** (generated-docs/callgraph.js):
    - 役割: 数値の最大値を取得するなど、JavaScriptの組み込み`Math.max()`メソッドが使用されている可能性があります。
    - 引数: 数値のリスト
    - 戻り値: 最大値
- **on()** (generated-docs/callgraph.js):
    - 役割: イベントリスナーの登録など、jQueryや特定のライブラリにおけるイベントハンドラのアタッチメントメソッドとして使用されている可能性があります。
    - 引数: イベント名、ハンドラ関数
    - 戻り値: 文脈による (通常はチェーン可能なオブジェクト)
- **if()** (generated-docs/callgraph.js):
    - 役割: これは条件分岐の構文であり、特定の関数ではありません。コードフロー制御のために使用されています。
    - 引数: 条件式
    - 戻り値: なし (コードブロックの実行を制御)
- **for()** (generated-docs/callgraph.js):
    - 役割: これはループ構文であり、特定の関数ではありません。反復処理のために使用されています。
    - 引数: ループ初期化、条件、更新式
    - 戻り値: なし (コードブロックの繰り返し実行を制御)
- **ready()** (generated-docs/callgraph.js):
    - 役割: DOMが完全にロードされたときに実行されるコールバックを設定するなど、jQueryの`$(document).ready()`のような機能で使用されている可能性があります。
    - 引数: コールバック関数
    - 戻り値: 文脈による
- **addListener()** (generated-docs/callgraph.js):
    - 役割: 特定のイベントに対してリスナー関数を追加します。Web APIやカスタムイベントシステムで一般的に使用されます。
    - 引数: イベント名、イベントハンドラ関数
    - 戻り値: なし
- **greet(name)** (src/main.js):
    - 役割: 指定された名前に対して簡単な挨拶メッセージを生成します。
    - 引数: `name` (挨拶の対象となる文字列)
    - 戻り値: 挨拶メッセージ文字列 (例: "Hello, [name]!")
- **main()** (src/main.js):
    - 役割: プログラムのエントリーポイント。`greet`関数を呼び出すなど、アプリケーションの主要な処理を開始します。
    - 引数: なし
    - 戻り値: なし

## 関数呼び出し階層ツリー
```
- switch (generated-docs/callgraph.js)
  - escapeHtml (generated-docs/callgraph.js)
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
- if (generated-docs/callgraph.js)
- for (generated-docs/callgraph.js)

---
Generated at: 2025-07-22 07:05:35 JST

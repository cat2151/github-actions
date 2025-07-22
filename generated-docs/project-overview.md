Last updated: 2025-07-23

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: HTML (呼び出しグラフ表示用のWebページ)、CSS (スタイリング)、JavaScript (動的なグラフ描画とUI操作ロビジック)
- 音楽・オーディオ: 特になし
- 開発ツール: Node.js (共通ワークフローのスクリプト実行環境)、npm/Yarn (JavaScriptパッケージ管理、推測)
- テスト: 現時点では具体的なテストフレームワークの言及なし
- ビルドツール: 現時点では具体的なビルドツールの言及なし
- 言語機能: JavaScript (ESNextの機能とCommonJSモジュールを使用)
- 自動化・CI/CD: GitHub Actions (リポジトリの主要機能として共通ワークフローを提供)、CodeQL (コードの静的解析ツール、セキュリティ脆弱性や品質問題を検出するために利用)
- 開発標準: 現時点では具体的な開発標準ツールの言及なし

## ファイル階層ツリー
```
📁 .github_automation/
  📁 callgraph_enhanced/
    📁 config/
      📊 example.json
    📁 docs/
      📖 callgraph.md
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
    📖 daily-summary-setup.md
  📁 translate/
    📖 TRANSLATION_SETUP.md
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
  📖 10.md
  📖 11.md
  📖 12.md
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
*   **`.github_automation/`**: GitHub Actionsの共通ワークフローや自動化スクリプトが格納されているルートディレクトリ。
    *   **`callgraph_enhanced/`**: コードの関数呼び出しグラフ生成・表示に関する自動化機能がまとめられています。
        *   **`config/example.json`**: 呼び出しグラフ生成の設定例を提供します。
        *   **`docs/callgraph.md`**: 呼び出しグラフ機能の詳細な説明ドキュメントです。
        *   **`scripts/`**: 呼び出しグラフ生成やCodeQL連携のための各種ユーティリティスクリプトが含まれます。
            *   `analyze-codeql.cjs`: CodeQLを用いたコード解析を実行します。
            *   `callgraph-utils.cjs`: 呼び出しグラフ生成に関連する共通ユーティリティ関数を提供します。
            *   `check-codeql-exists.cjs`: CodeQLの存在を確認します。
            *   `check-commits.cjs`: コミット履歴をチェックします。
            *   `check-node-version.cjs`: Node.jsのバージョンを確認します。
            *   `common-utils.cjs`: 他のスクリプトで共通して利用される汎用的なユーティリティ関数を提供します。
            *   `copy-commit-results.cjs`: コミット結果をコピーします。
            *   `extract-sarif-info.cjs`: CodeQLなどの静的解析ツールが出力するSARIF形式のレポートから情報を抽出します。
            *   `find-process-results.cjs`: プロセス実行結果を検索します。
            *   `generate-html-graph.cjs`: 解析結果からHTML形式の呼び出しグラフを生成します。
            *   `generateHTML.cjs`: HTML生成に関する共通処理を提供します。
    *   **`project_summary/daily-summary-setup.md`**: プロジェクトの日次サマリーレポートをセットアップするための手順を説明するドキュメントです。
    *   **`translate/TRANSLATION_SETUP.md`**: プロジェクトの翻訳ワークフローや多言語対応のセットアップ手順を説明するドキュメントです。
*   **`.gitignore`**: Gitのバージョン管理から除外するファイルやディレクトリのパターンを指定します。
*   **`LICENSE`**: 本プロジェクトのソフトウェアライセンス情報を提供します。
*   **`README.ja.md`**: プロジェクトの概要、目的、使用方法などを説明する日本語の主要ドキュメントです。
*   **`README.md`**: プロジェクトの概要、目的、使用方法などを説明する英語の主要ドキュメントです。
*   **`generated-docs/`**: 自動生成されたドキュメントや関連ファイルが格納されます。
    *   **`callgraph-enhanced.html`**: コードの関数呼び出し階層を視覚的に表現したインタラクティブなHTMLページです。
    *   **`callgraph.js`**: `callgraph-enhanced.html`内で利用され、呼び出しグラフの描画、UIの操作、ノードやエッジのインタラクションを制御するJavaScriptロジックが含まれます。
    *   **`development-status.md`**: プロジェクトの現在の開発状況や進捗に関するドキュメントです。
    *   **`project-overview.md`**: このプロジェクト概要自体が格納される可能性のあるドキュメントです。
    *   **`style.css`**: `callgraph-enhanced.html`およびその他のHTMLページに適用されるスタイル定義です。
*   **`issue-notes/`**: GitHub Issuesに関連するメモや詳細情報をまとめたドキュメントが格納されます。
    *   `10.md`, `11.md`, `12.md`, `2.md`, `3.md`, `4.md`, `7.md`, `8.md`, `9.md`: それぞれ特定のIssue IDに関連するノートファイルです。
*   **`src/main.js`**: プロジェクトのデモンストレーションや、特定のコアロジックのエントリポイントとして機能するJavaScriptファイルです。

## 関数詳細説明
*   **`generated-docs/callgraph.js`**
    *   `escapeHtml(html)`: HTML文字列内の特殊文字をエスケープし、クロスサイトスクリプティング（XSS）攻撃を防止します。
    *   `getLayoutConfig()`: グラフのレイアウトに関する設定情報を取得します。
    *   `placeCentralNode()`: グラフの中心に特定のノードを配置する処理を行います。
    *   `showNodeInfo(node)`: 指定されたノードの詳細情報をUIパネルに表示します。
    *   `showEdgeInfo(edge)`: 指定されたエッジ（ノード間の接続）の詳細情報をUIパネルに表示します。
    *   `hideInfoPanel()`: 情報表示パネルを非表示にします。
    *   `showInfoPanel()`: 情報表示パネルを表示します。
    *   `toggleInfoPanel()`: 情報表示パネルの表示/非表示を切り替えます。
    *   `generateGitHubURL(path, line, column)`: GitHubのリポジトリ上のファイルパス、行、列に基づいて、直接リンクできるURLを生成します。
    *   `resetLayout()`: グラフの現在のレイアウトを初期状態にリセットします。
    *   `watchNodeMovementAndFixOverlapsWrap()`: ノードの移動を監視し、その重なりを解決する処理をラップします。
    *   `watchNodeMovementAndFixOverlaps()`: ノードが移動した際に、他のノードとの重なりが発生しないように位置を調整します。
    *   `resolveNodeOverlaps()`: 複数のノードが重なっている場合に、それらを分離して視認性を高めます。
    *   `switchLayout(layoutType)`: グラフのレイアウトアルゴリズムや表示形式を切り替えます。
    *   `resetNodeStates()`: グラフ内の全てのノードの選択状態やハイライト状態をリセットします。
    *   `fitToContent()`: グラフ全体が現在のビューポートに収まるようにズームレベルを調整します。
    *   `toggleNodeLabels()`: グラフノードに表示されるラベルの表示/非表示を切り替えます。
    *   `toggleCalleeLocationFilter()`: 呼び出し先のファイルパスや場所に基づいて、グラフの表示をフィルタリングする機能を切り替えます。
    *   `replace()`, `switch()`, `function()`, `max()`, `on()`, `if()`, `for()`, `ready()`, `addListener()`: これらはJavaScriptの一般的なキーワードやjQueryなどのライブラリにおけるイベントハンドリング関数に類似しており、具体的なアプリケーションロジック関数というよりは、コード内でイベントリスナーの登録や条件分岐、ループ処理など、様々なコンテキストで利用される可能性のある識別子です。それぞれの具体的な機能は、ソースコード内の使用箇所に依存します。

*   **`src/main.js`**
    *   `greet(name)`: 引数 `name` を受け取り、「Hello, [name]!」という挨拶メッセージを生成して返します。
    *   `main()`: プログラムのメインエントリポイントとなる関数で、通常はここから主要な処理が開始されます。

*   **`.github_automation/callgraph_enhanced/scripts/*.cjs`**
    *   これらのスクリプト群には、CodeQLを用いたコード解析の実行、SARIF形式の解析結果からの情報抽出、コミット履歴のチェック、Node.jsバージョンの検証、そして解析結果を基にしたHTML形式の呼び出しグラフ生成など、GitHub Actions共通ワークフローをサポートするための多様なユーティリティ関数が含まれています。具体的な関数名は分析情報に含まれていませんが、ファイル名からその役割が推測できます。

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
Generated at: 2025-07-23 07:05:08 JST

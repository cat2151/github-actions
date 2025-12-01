Last updated: 2025-12-02

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: JavaScript (ECMAScript), CSS, HTML (呼び出しグラフのインタラクティブ表示やスタイリングに利用されます。具体的なライブラリは明示されていませんが、グラフ描画にCytoscape.jsのようなライブラリが想定されます。)
- 音楽・オーディオ: 該当なし
- 開発ツール: GitHub Actions (継続的インテグレーション・デリバリーの自動化), CodeQL (静的コード解析によるセキュリティ脆弱性・バグ検出), Node.js (共通スクリプトの実行環境), Git (バージョン管理), VS Code (開発環境設定の共有)
- テスト: 明示的なテストフレームワークはありませんが、Node.jsスクリプト（例: `check-node-version.cjs`, `check-codeql-exists.cjs`）による各種環境チェックや検証が行われます。
- ビルドツール: 主にNode.jsスクリプトが実行環境として利用されており、特定のビルドツール（Webpack, Rollupなど）は明示されていません。
- 言語機能: JavaScript (ECMAScript), Markdown (ドキュメント記述), YAML (GitHub Actionsワークフロー定義), CSS (スタイルシート), HTML (Webページ構造), JSON (設定ファイル・データ形式)
- 自動化・CI/CD: GitHub Actions (リポジトリ全体のワークフロー自動化の中心), Node.js (各種自動化スクリプトの実行)
- 開発標準: `.vscode/settings.json`によるIDE設定共有、Markdown形式のドキュメント記述標準、共通ワークフローによる開発プロセスの標準化。

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
      📄 check-node-version.cjs
      📄 common-utils.cjs
      📄 copy-commit-results.cjs
      📄 extract-sarif-info.cjs
      📄 find-process-results.cjs
      📄 generate-html-graph.cjs
      📄 generateHTML.cjs
  📁 check_recent_human_commit/
    📁 scripts/
      📄 check-recent-human-commit.cjs
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
📄 _config.yml
📁 generated-docs/
  🌐 callgraph.html
  📜 callgraph.js
  🎨 style.css
🌐 googled947dc864c270e07.html
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
  📖 25.md
  📖 26.md
  📖 27.md
  📖 28.md
  📖 29.md
  📖 3.md
  📖 30.md
  📖 4.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明
- **.github_automation/**: GitHub Actionsワークフローで利用される各種スクリプトや設定ファイルを格納するディレクトリです。
  - **callgraph/**: コードの呼び出しグラフを生成するためのツール群が含まれます。
    - **codeql-queries/callgraph.ql**: CodeQLを用いてJavaScript/TypeScriptの呼び出しグラフを解析するためのクエリ定義ファイルです。
    - **presets/callgraph.js**: 呼び出しグラフの表示ロジック（UI操作、レイアウト、情報表示など）を定義するJavaScriptファイルです。Cytoscape.jsなどのグラフ描画ライブラリと連携して動作します。
    - **presets/style.css**: 呼び出しグラフの表示スタイルを定義するCSSファイルです。
    - **scripts/analyze-codeql.cjs**: CodeQL解析を実行し、結果をSARIF形式で出力するNode.jsスクリプトです。
    - **scripts/generate-html-graph.cjs**: SARIF形式のCodeQL解析結果から、インタラクティブなHTML形式の呼び出しグラフを生成するNode.jsスクリプトです。
  - **check_recent_human_commit/scripts/check-recent-human-commit.cjs**: 最近のコミットが自動ボットによるものではなく、人間によって行われたものかをチェックするNode.jsスクリプトです。
  - **project_summary/**: プロジェクトの概要や開発状況レポートを自動生成するためのツール群が含まれます。
    - **prompts/development-status-prompt.md**: 開発状況レポート生成時に使用されるプロンプトのテンプレートです。
    - **prompts/project-overview-prompt.md**: プロジェクト概要生成時に使用されるプロンプトのテンプレートです。
    - **scripts/ProjectSummaryCoordinator.cjs**: プロジェクトサマリー生成プロセス全体を調整する中心的なNode.jsスクリプトです。
    - **scripts/development/DevelopmentStatusGenerator.cjs**: プロジェクトの開発状況レポートを生成するNode.jsスクリプトです。
    - **scripts/overview/ProjectOverviewGenerator.cjs**: プロジェクトの概要情報を生成するNode.jsスクリプトです。
  - **translate/scripts/translate-readme.cjs**: READMEファイル（`README.ja.md`など）を自動翻訳し、多言語版（`README.md`など）を生成するNode.jsスクリプトです。
- **.gitignore**: Gitのバージョン管理から除外するファイルやディレクトリを指定する設定ファイルです。
- **.vscode/settings.json**: VS Codeエディタのワークスペース固有の設定を定義するファイルで、開発環境の統一に役立ちます。
- **LICENSE**: プロジェクトのライセンス情報が記載されたファイルです。
- **README.ja.md**: プロジェクトの日本語での概要、目的、利用方法などを説明するメインドキュメントです。
- **README.md**: `README.ja.md`を元に自動翻訳された英語のプロジェクト概要ドキュメントです。
- **_config.yml**: GitHub Pages（Jekyll）の設定ファイルです。
- **generated-docs/**: 各種スクリプトによって自動生成されたドキュメント（HTMLグラフ、スタイルシートなど）が格納されるディレクトリです。
  - **callgraph.html**: 自動生成された呼び出しグラフを表示するHTMLファイルです。
  - **callgraph.js**: `generated-docs/callgraph.html`で使用される呼び出しグラフのインタラクティブなロジックを提供するJavaScriptファイルです。
  - **style.css**: `generated-docs/callgraph.html`で使用されるグラフのスタイリング用CSSファイルです。
- **googled947dc864c270e07.html**: Googleサイト所有権確認用のファイルです。
- **issue-notes/**: 開発中の課題や特定のIssueに関するメモを格納するディレクトリです。
- **src/main.js**: プロジェクトの基本的な動作を示すサンプルコードまたはテスト用のJavaScriptファイルです。

## 関数詳細説明
- **escapeHtml(text)**:
  - 役割: 与えられた文字列内のHTML特殊文字をエスケープし、クロスサイトスクリプティング（XSS）攻撃などの潜在的なセキュリティリスクを防ぎます。
  - 引数: `text` (文字列) - エスケープ対象の文字列。
  - 戻り値: (文字列) - エスケープされた文字列。
- **getLayoutConfig()**:
  - 役割: グラフのレイアウト設定を定義し、返します。
  - 引数: なし
  - 戻り値: (オブジェクト) - レイアウト設定を含むオブジェクト。
- **placeCentralNode()**:
  - 役割: グラフの中心となるノードを配置します。
  - 引数: なし (おそらく内部的にCytoscape.jsインスタンスにアクセス)
  - 戻り値: なし
- **showNodeInfo(node)**:
  - 役割: 指定されたグラフノードの詳細情報をUI上に表示します。
  - 引数: `node` (オブジェクト) - Cytoscape.jsのノードオブジェクト。
  - 戻り値: なし
- **showEdgeInfo(edge)**:
  - 役割: 指定されたグラフのエッジ（線）の詳細情報をUI上に表示します。
  - 引数: `edge` (オブジェクト) - Cytoscape.jsのエッジオブジェクト。
  - 戻り値: なし
- **hideInfoPanel()**:
  - 役割: UI上の情報表示パネルを非表示にします。
  - 引数: なし
  - 戻り値: なし
- **showInfoPanel()**:
  - 役割: UI上の情報表示パネルを表示します。
  - 引数: なし
  - 戻り値: なし
- **toggleInfoPanel(show)**:
  - 役割: 情報表示パネルの表示/非表示を切り替えます。
  - 引数: `show` (ブール値) - `true`なら表示、`false`なら非表示。
  - 戻り値: なし
- **generateGitHubURL(filePath, startLine, endLine)**:
  - 役割: 指定されたファイルパスと行番号に基づき、GitHub上の該当箇所へのURLを生成します。
  - 引数: `filePath` (文字列), `startLine` (数値), `endLine` (数値)
  - 戻り値: (文字列) - 生成されたGitHub URL。
- **resetLayout()**:
  - 役割: グラフのレイアウトを初期状態にリセットします。
  - 引数: なし (おそらく内部的にCytoscape.jsインスタンスにアクセス)
  - 戻り値: なし
- **watchNodeMovementAndFixOverlapsWrap(cy)**:
  - 役割: ノードの動きを監視し、その動きに応じてノードの重なりを解消するための処理をラップします。
  - 引数: `cy` (オブジェクト) - Cytoscape.jsインスタンス。
  - 戻り値: なし
- **watchNodeMovementAndFixOverlaps(cy, resolveDelay)**:
  - 役割: グラフノードの動きを継続的に監視し、ノードが重なった場合に解決処理を実行します。
  - 引数: `cy` (オブジェクト) - Cytoscape.jsインスタンス。 `resolveDelay` (数値) - 重なり解決までの遅延時間。
  - 戻り値: なし
- **resolveNodeOverlaps(cy)**:
  - 役割: 現在のグラフ内のノードの重なりを検出し、解消します。
  - 引数: `cy` (オブジェクト) - Cytoscape.jsインスタンス。
  - 戻り値: なし
- **switchLayout(layoutName, cy)**:
  - 役割: グラフの表示レイアウトを、指定されたレイアウト名に切り替えます。
  - 引数: `layoutName` (文字列) - 適用するレイアウトの名前。 `cy` (オブジェクト) - Cytoscape.jsインスタンス。
  - 戻り値: なし
- **resetNodeStates(cy)**:
  - 役割: グラフノードの視覚的な状態（選択状態、ハイライトなど）をリセットします。
  - 引数: `cy` (オブジェクト) - Cytoscape.jsインスタンス。
  - 戻り値: なし
- **fitToContent(cy)**:
  - 役割: グラフ全体がビューポート内に収まるようにズームレベルを調整します。
  - 引数: `cy` (オブジェクト) - Cytoscape.jsインスタンス。
  - 戻り値: なし
- **toggleNodeLabels(cy, show)**:
  - 役割: グラフノードのラベルの表示/非表示を切り替えます。
  - 引数: `cy` (オブジェクト) - Cytoscape.jsインスタンス。 `show` (ブール値) - `true`なら表示、`false`なら非表示。
  - 戻り値: なし
- **toggleCalleeLocationFilter(cy, show)**:
  - 役割: 呼び出し先（Callee）のロケーションフィルターの表示/非表示を切り替えます。
  - 引数: `cy` (オブジェクト) - Cytoscape.jsインスタンス。 `show` (ブール値) - `true`なら表示、`false`なら非表示。
  - 戻り値: なし
- **replace(str, search, replacement)**:
  - 役割: 文字列の置換を行います。
  - 引数: `str` (文字列) - 元の文字列。 `search` (文字列) - 検索する部分文字列。 `replacement` (文字列) - 置換する文字列。
  - 戻り値: (文字列) - 置換後の文字列。
- **max()**:
  - 役割: 複数の数値の中から最大値を返すユーティリティ関数。
  - 引数: 可変長引数 (数値)
  - 戻り値: (数値) - 最大値。
- **on()**:
  - 役割: イベントリスナーを設定するためのメソッド。主にCytoscape.jsなどのライブラリのコンテキストで使用されます。
  - 引数: (可変長引数) - イベント名、セレクタ（オプション）、ハンドラ関数など。
  - 戻り値: なし
- **ready()**:
  - 役割: DOMまたは特定のライブラリ（Cytoscape.jsなど）の準備が完了したときに実行される処理を定義するメソッド。
  - 引数: (関数) - 準備完了時に実行されるコールバック関数。
  - 戻り値: なし
- **addListener()**:
  - 役割: イベントリスナーを追加するための汎用的なメソッド。
  - 引数: (可変長引数) - イベントタイプ、リスナー関数など。
  - 戻り値: なし
- **greet(name)**:
  - 役割: 指定された名前に挨拶メッセージを生成します。
  - 引数: `name` (文字列) - 挨拶する対象の名前。
  - 戻り値: (文字列) - 挨拶メッセージ。
- **main()**:
  - 役割: プロジェクトの主要な処理フローを実行します。`greet`関数を呼び出すデモンストレーションを行います。
  - 引数: なし
  - 戻り値: なし

## 関数呼び出し階層ツリー
```
- main (src/main.js)
  - greet (src/main.js)

---
Generated at: 2025-12-02 07:05:11 JST

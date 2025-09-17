Last updated: 2025-09-18

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: N/A
- 音楽・オーディオ:
  - Tone.js: Web Audio APIを用いた音楽・オーディオ処理のためのJavaScriptライブラリ。
  - Web Audio API: ブラウザ上で高度な音声処理を行うためのAPI（Tone.jsを介して利用）。
  - MML (Music Macro Language): 音楽をテキストで記述するための簡易記法をパースする技術。
- 開発ツール:
  - Node.js runtime: JavaScriptコードを実行するための環境。
  - npm scripts: プロジェクトのビルド、テスト、その他のタスクを自動化するためのコマンドラインツール。
  - Google Generative AI: AIによる文書生成や要約などをサポートする技術。
  - @octokit/rest: GitHub APIと連携し、リポジトリ操作やワークフロー管理を行うためのJavaScriptライブラリ。
- テスト: N/A
- ビルドツール: N/A
- 言語機能: N/A
- 自動化・CI/CD:
  - GitHub Actions: コードの変更を検知し、テスト、ビルド、デプロイなどのワークフローを自動化するCI/CDサービス。8つのワークフローが定義されており、プロジェクト要約、Issue管理、README翻訳、i18nの自動化などを実現します。
- 開発標準: N/A

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
  📖 25.md
  📖 26.md
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

*   **.github_automation/**: GitHub Actionsワークフローや自動化スクリプトを格納するルートディレクトリ。
    *   **callgraph/**: コードの関数呼び出しグラフを生成し、可視化するためのツール群。
        *   **codeql-queries/**: CodeQL解析ツールで使用されるクエリファイル。
            *   `callgraph.ql`: コードから関数呼び出しグラフを抽出するためのCodeQLクエリ。
            *   `codeql-pack.lock.yml`: CodeQLパックの依存関係を固定するファイル。
            *   `qlpack.yml`: CodeQLパックのメタデータと設定を定義するファイル。
        *   **config/**: 設定ファイルを格納するディレクトリ。
            *   `example.json`: 呼び出しグラフ生成に関する設定の例。
        *   **docs/**: ドキュメントファイルを格納するディレクトリ。
            *   `callgraph.md`: 関数呼び出しグラフ機能に関する詳細な説明ドキュメント。
        *   **presets/**: 呼び出しグラフの表示やスタイルに関するプリセットファイル。
            *   `callgraph.js`: 呼び出しグラフのインタラクティブな表示ロジック、レイアウト、イベント処理などを定義するJavaScriptファイル。
            *   `style.css`: 呼び出しグラフのHTML表示のためのスタイルシート。
        *   **scripts/**: 呼び出しグラフ生成に関連する様々なユーティリティスクリプト。
            *   `analyze-codeql.cjs`: CodeQLを用いてコード解析を実行するスクリプト。
            *   `callgraph-utils.cjs`: 呼び出しグラフの処理に特化したユーティリティ関数群。
            *   `check-codeql-exists.cjs`: CodeQLコマンドラインツールが存在するかを確認するスクリプト。
            *   `check-commits.cjs`: Gitコミット履歴を分析するためのスクリプト。
            *   `check-node-version.cjs`: Node.jsのバージョンが要件を満たしているかを確認するスクリプト。
            *   `common-utils.cjs`: プロジェクト全体で共有される一般的なユーティリティ関数。
            *   `copy-commit-results.cjs`: コミット解析の結果をコピーするスクリプト。
            *   `extract-sarif-info.cjs`: SARIF形式の解析結果から情報を抽出するスクリプト。
            *   `find-process-results.cjs`: 特定の処理結果ファイルを検索するスクリプト。
            *   `generate-html-graph.cjs`: 解析結果からHTML形式の呼び出しグラフを生成するスクリプト。
            *   `generateHTML.cjs`: HTMLコンテンツを生成するための汎用スクリプト。
    *   **project_summary/**: プロジェクトの概要や開発状況を自動生成するためのツール群。
        *   **docs/**: ドキュメントファイルを格納するディレクトリ。
            *   `daily-summary-setup.md`: 日次プロジェクト概要生成の設定に関するドキュメント。
        *   **prompts/**: AIモデルに渡すプロンプト定義ファイル。
            *   `development-status-prompt.md`: 開発状況レポート生成用のプロンプト定義。
            *   `project-overview-prompt.md`: プロジェクト概要生成用のプロンプト定義。
        *   **scripts/**: プロジェクト概要生成に関連するスクリプト。
            *   `ProjectSummaryCoordinator.cjs`: プロジェクト概要生成プロセス全体の調整役となるスクリプト。
            *   **development/**: 開発状況レポート生成に関連するスクリプト。
                *   `DevelopmentStatusGenerator.cjs`: 開発状況レポートを生成するスクリプト。
                *   `GitUtils.cjs`: Gitリポジトリ操作に関連するユーティリティ関数群。
                *   `IssueTracker.cjs`: GitHub Issuesの情報を追跡・処理するユーティリティ。
            *   `generate-project-summary.cjs`: プロジェクト概要生成のメインエントリスクリプト。
            *   **overview/**: プロジェクト概要の詳細生成ロジック。
                *   `CodeAnalyzer.cjs`: プロジェクトのコードを解析するスクリプト。
                *   `ProjectAnalysisOrchestrator.cjs`: プロジェクト解析プロセスを統括するスクリプト。
                *   `ProjectDataCollector.cjs`: プロジェクトに関する様々なデータを収集するスクリプト。
                *   `ProjectDataFormatter.cjs`: 収集したプロジェクトデータを整形するスクリプト。
                *   `ProjectOverviewGenerator.cjs`: 収集・整形されたデータからプロジェクト概要を生成するスクリプト。
                *   `TechStackAnalyzer.cjs`: プロジェクトの使用技術スタックを解析するスクリプト。
            *   **shared/**: 複数のスクリプトで共有されるユーティリティ。
                *   `BaseGenerator.cjs`: 各種ジェネレータの基底クラス。
                *   `FileSystemUtils.cjs`: ファイルシステム操作に関するユーティリティ関数群。
                *   `ProjectFileUtils.cjs`: プロジェクトファイルに関するユーティリティ関数群。
    *   **translate/**: プロジェクトドキュメントの自動翻訳に関するツール群。
        *   **docs/**: ドキュメントファイルを格納するディレクトリ。
            *   `TRANSLATION_SETUP.md`: 翻訳機能の設定と利用方法に関するドキュメント。
        *   **scripts/**: 翻訳に関連するスクリプト。
            *   `translate-readme.cjs`: READMEファイルを自動的に多言語に翻訳するスクリプト。
*   `.gitignore`: Gitバージョン管理システムが無視すべきファイルやディレクトリを指定する設定ファイル。
*   **.vscode/**: Visual Studio Codeエディタのワークスペース固有の設定を格納するディレクトリ。
    *   `settings.json`: VS Codeのワークスペース設定ファイル。
*   `LICENSE`: プロジェクトのオープンソースライセンス情報が記述されたファイル。
*   `README.ja.md`: プロジェクトの日本語版の概要と説明が記述されたドキュメント。
*   `README.md`: プロジェクトの主要な概要と説明が記述された英語のドキュメント（通常、デフォルトで表示される）。
*   **generated-docs/**: 自動生成された各種ドキュメントやレポートを格納するディレクトリ。
    *   `callgraph.html`: 生成された関数呼び出しグラフをブラウザで表示するためのHTMLファイル。
    *   `callgraph.js`: `callgraph.html`で使用されるインタラクティブなグラフ表示ロジックを担うJavaScriptファイル。
    *   `development-status-generated-prompt.md`: 自動生成された開発状況レポート用のプロンプトファイル。
    *   `development-status.md`: 自動生成された開発状況レポート。
    *   `project-overview.md`: 自動生成されたプロジェクトの概要ドキュメント。
    *   `style.css`: `callgraph.html`などの自動生成されたHTMLに適用されるスタイルシート。
*   **issue-notes/**: GitHub Actionsによって自動生成されたIssueに関連するメモや詳細情報を格納するディレクトリ。
*   `package-lock.json`: `package.json`に記述された依存関係パッケージの具体的なバージョンと依存ツリーを記録するファイル。一貫性のあるビルドを保証する。
*   `package.json`: Node.jsプロジェクトのメタデータ、依存関係、スクリプトなどを定義する設定ファイル。
*   **src/**: プロジェクトの主要なソースコードを格納するディレクトリ。
    *   `main.js`: プロジェクトのメインエントリポイントとなるJavaScriptファイル。

## 関数詳細説明

*   **src/main.js**:
    *   `greet()`:
        *   役割: コンソールに「Hello, GitHub Actions!」というメッセージを出力します。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: 簡単な挨拶メッセージを表示し、スクリプトが正常に実行されたことを示します。
    *   `main()`:
        *   役割: プログラムの主要な実行ロジックをカプセル化し、`greet`関数を呼び出します。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: プログラムのエントリーポイントとして機能し、`greet`関数を実行します。

*   **.github_automation/callgraph/presets/callgraph.js** (および **generated-docs/callgraph.js**):
    *   `escapeHtml(unsafe)`:
        *   役割: 与えられた文字列中のHTML特殊文字をエスケープします。
        *   引数: `unsafe` (string) - エスケープする文字列。
        *   戻り値: (string) - エスケープされた文字列。
        *   機能: クロスサイトスクリプティング (XSS) 攻撃を防ぐため、HTMLコンテンツとして表示する前に文字列を安全な形式に変換します。
    *   `getLayoutConfig()`:
        *   役割: 呼び出しグラフのレイアウト設定を取得または決定します。
        *   引数: なし。
        *   戻り値: (object) - レイアウト設定オブジェクト。
        *   機能: グラフのノード配置や全体の視覚的配置に関する設定を提供します。
    *   `placeCentralNode(cy, node)`:
        *   役割: 指定されたノードをグラフの中央に配置します。
        *   引数: `cy` (Cytoscape.jsインスタンス), `node` (Cytoscape.jsノード要素)。
        *   戻り値: なし。
        *   機能: グラフ表示において特定のノードをユーザーの視点の中央に固定します。
    *   `showNodeInfo(node)`:
        *   役割: 指定されたノードの詳細情報を情報パネルに表示します。
        *   引数: `node` (Cytoscape.jsノード要素)。
        *   戻り値: なし。
        *   機能: ユーザーがノードをクリックまたはホバーした際に、そのノードに関する追加情報（例: 関数名、ファイルパスなど）を提供します。
    *   `showEdgeInfo(edge)`:
        *   役割: 指定されたエッジ（接続線）の詳細情報を情報パネルに表示します。
        *   引数: `edge` (Cytoscape.jsエッジ要素)。
        *   戻り値: なし。
        *   機能: ユーザーがエッジをクリックまたはホバーした際に、そのエッジに関する追加情報（例: 呼び出し関係のタイプ）を提供します。
    *   `hideInfoPanel()`:
        *   役割: グラフの情報表示パネルを非表示にします。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: 情報を表示する必要がなくなったときにパネルを隠し、グラフの視認性を向上させます。
    *   `showInfoPanel()`:
        *   役割: グラフの情報表示パネルを表示します。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: ノードやエッジの詳細情報を提供するためにパネルを表示します。
    *   `toggleInfoPanel()`:
        *   役割: グラフの情報表示パネルの表示/非表示を切り替えます。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: ユーザー操作に応じてパネルの表示状態をトグルします。
    *   `generateGitHubURL(nodeData)`:
        *   役割: 与えられたノードデータから、対応するGitHubリポジトリのURLを生成します。
        *   引数: `nodeData` (object) - ノードに関連するデータ（ファイルパス、リポジトリ情報などを含む）。
        *   戻り値: (string) - 生成されたGitHub URL。
        *   機能: グラフ上のノードから直接、GitHub上のソースコードにジャンプするためのリンクを作成します。
    *   `resetLayout()`:
        *   役割: グラフのレイアウトを初期状態にリセットします。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: ユーザーがレイアウトを変更した後、元の配置に戻したい場合に利用します。
    *   `watchNodeMovementAndFixOverlapsWrap()`:
        *   役割: ノードの移動を監視し、重なりを修正する処理をラップします。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: ノードの重なりを動的に解決する処理の開始点となるラッパー関数。
    *   `watchNodeMovementAndFixOverlaps()`:
        *   役割: グラフ内のノードの移動を継続的に監視し、ノードの重なりを自動的に修正します。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: グラフのノードが密集して見づらくなるのを防ぎ、視覚的な整理を保ちます。
    *   `resolveNodeOverlaps()`:
        *   役割: グラフ内のノードの重なりを一度だけ解決します。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: ノードが互いに重なり合っている場合に、それらを離して配置し、視認性を改善します。
    *   `switchLayout(layoutName)`:
        *   役割: グラフの表示レイアウトを切り替えます。
        *   引数: `layoutName` (string) - 適用するレイアウトの名前（例: 'cola', 'dagre'など）。
        *   戻り値: なし。
        *   機能: ユーザーがグラフの表示形式を異なるアルゴリズムに基づいて変更できるようにします。
    *   `resetNodeStates()`:
        *   役割: グラフ内の全てのノードの状態（選択状態、ハイライトなど）をリセットします。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: ユーザーの操作によって変更されたノードの視覚的状態を初期化します。
    *   `fitToContent()`:
        *   役割: グラフの表示領域を、全てのコンテンツ（ノードとエッジ）が収まるように調整します。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: グラフ全体を一望できるように、ズームレベルとパン位置を調整します。
    *   `toggleNodeLabels()`:
        *   役割: グラフ内のノードラベルの表示/非表示を切り替えます。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: グラフが密集している場合などに、ノードラベルの表示を切り替えて視認性を向上させます。
    *   `toggleCalleeLocationFilter()`:
        *   役割: 呼び出し先（callee）の場所に基づくフィルターの表示/非表示を切り替えます。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: 特定の場所（ファイル、モジュールなど）にある呼び出し先のみを表示するフィルターを適用または解除します。
    *   `replace(search, replace)`:
        *   役割: 文字列中の特定のパターンを別の文字列に置換します（一般的なString.prototype.replaceの利用または類似機能）。
        *   引数: `search` (string|RegExp), `replace` (string)。
        *   戻り値: (string) - 置換後の文字列。
        *   機能: 文字列操作において特定の文字やパターンを別のものに置き換えます。
    *   `max(a, b)`:
        *   役割: 2つの値のうち大きい方を返します（一般的なMath.maxの利用または類似機能）。
        *   引数: `a`, `b` (number)。
        *   戻り値: (number) - より大きい値。
        *   機能: 数値の比較と最大値の取得を行います。
    *   `on(eventName, handler)`:
        *   役割: 特定のイベントが発生したときに実行されるイベントハンドラを登録します（jQueryなどのイベントリスナー機能）。
        *   引数: `eventName` (string), `handler` (function)。
        *   戻り値: なし。
        *   機能: ユーザーインタラクションやシステムイベントに応答するコールバック関数を設定します。
    *   `ready(handler)`:
        *   役割: ドキュメントが完全にロードされ、操作可能になったときに実行されるイベントハンドラを登録します（jQueryの$(document).ready()に相当）。
        *   引数: `handler` (function)。
        *   戻り値: なし。
        *   機能: DOMの準備が完了した時点で初期化処理を実行します。
    *   `addListener(event, listener)`:
        *   役割: 指定されたイベントに対するリスナー関数を追加します（Node.js EventEmitterや類似のAPIの利用）。
        *   引数: `event` (string), `listener` (function)。
        *   戻り値: なし。
        *   機能: 特定のイベントに反応する複数のコールバック関数を登録します。

## 関数呼び出し階層ツリー
```
- escapeHtml (.github_automation/callgraph/presets/callgraph.js)
- getLayoutConfig (.github_automation/callgraph/presets/callgraph.js)
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

---
Generated at: 2025-09-18 07:06:11 JST

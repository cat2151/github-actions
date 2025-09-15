Last updated: 2025-09-16

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: [N/A]
- 音楽・オーディオ:
  - Tone.js - Web Audio APIを活用した音楽・オーディオ処理のためのJavaScriptライブラリ。
  - Web Audio API - ブラウザで高度な音声処理を行うためのAPI（Tone.js経由で利用）。
  - MML (Music Macro Language) - 音楽をテキストで記述するための簡易記法パーサー。
- 開発ツール:
  - Node.js runtime - JavaScriptの実行環境。
  - npm scripts - package.jsonで定義されたタスクを実行するためのタスクランナー。
  - Google Generative AI - AIによる文書生成（プロジェクト要約、翻訳など）をサポート。
  - @octokit/rest - GitHub APIと連携し、リポジトリ情報の取得や操作を可能にするライブラリ。
- テスト: [N/A]
- ビルドツール: [N/A]
- 言語機能:
  - JavaScript (Node.js) - サーバーサイドスクリプト実行環境としての主要言語。
- 自動化・CI/CD:
  - GitHub Actions - プロジェクト要約の自動生成、Issue管理、READMEの多言語翻訳など、様々なCI/CDワークフローを自動化。
- 開発標準: [N/A]

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

*   **.github_automation/**: GitHub Actionsから呼び出される自動化スクリプトや設定を格納する主要ディレクトリ。
    *   **callgraph/**: コードの呼び出しグラフを生成し、可視化するためのツール群。
        *   **codeql-queries/**: CodeQL分析ツールで使用されるクエリファイルと設定。`callgraph.ql`は呼び出しグラフ抽出のためのクエリ。
        *   **config/example.json**: 呼び出しグラフ機能の設定例を定義するJSONファイル。
        *   **docs/callgraph.md**: 呼び出しグラフ機能に関する説明ドキュメント。
        *   **presets/**: 呼び出しグラフのフロントエンド表示に関連するファイル。
            *   `callgraph.js`: 呼び出しグラフのレンダリング、インタラクション、レイアウト制御を行うJavaScriptコード。
            *   `style.css`: 呼び出しグラフの視覚的なスタイルを定義するCSSファイル。
        *   **scripts/**: 呼び出しグラフの分析、生成、表示に関連するユーティリティスクリプト群。CodeQL分析の実行、SARIF結果の解析、HTMLグラフの生成などを行う。
    *   **project_summary/**: プロジェクトの概要や開発状況を自動生成するためのツール群。
        *   **docs/daily-summary-setup.md**: 日次サマリーの自動生成設定に関するドキュメント。
        *   **prompts/**: AIによる文書生成（プロジェクト概要、開発状況レポートなど）に用いるプロンプトテンプレート。
        *   **scripts/**: プロジェクト概要生成のためのコアスクリプト群。
            *   **development/**: 開発状況の分析とレポート生成に関連するスクリプト。
            *   **overview/**: プロジェクト全体のコード分析、データ収集、概要生成に関連するスクリプト。
            *   **shared/**: 複数の生成プロセスで共通して利用されるユーティリティ関数やクラス。
    *   **translate/**: READMEなどのドキュメントを多言語に自動翻訳するためのツール群。
        *   **docs/TRANSLATION_SETUP.md**: 自動翻訳機能の設定方法に関するドキュメント。
        *   **scripts/translate-readme.cjs**: READMEファイルを指定された言語に翻訳するスクリプト。
*   **.gitignore**: Gitがバージョン管理の対象外とするファイルやディレクトリを指定する設定ファイル。
*   **.vscode/settings.json**: Visual Studio Codeエディタのワークスペース固有の設定ファイル。
*   **LICENSE**: プロジェクトの利用条件を定めるライセンス情報ファイル。
*   **README.ja.md**: プロジェクトの目的、使い方、機能などを日本語で説明するメインドキュメント。
*   **README.md**: プロジェクトの目的、使い方、機能などを英語で説明するメインドキュメント。
*   **generated-docs/**: 自動化プロセスによって生成されたドキュメントや関連リソースが格納されるディレクトリ。
    *   `callgraph.html`: 生成された呼び出しグラフを可視化するためのHTMLファイル。
    *   `callgraph.js`: `presets/callgraph.js`と同じ内容で、生成されたHTMLファイルに埋め込まれる呼び出しグラフのインタラクティブなロジック。
    *   `development-status-generated-prompt.md`: 開発状況レポート生成のためにAIに渡されたプロンプト。
    *   `development-status.md`: 自動生成された開発状況レポート。
    *   `project-overview.md`: 自動生成されたプロジェクト概要ドキュメント。
    *   `style.css`: `presets/style.css`と同じ内容で、生成されたHTMLファイルに適用されるスタイルシート。
*   **issue-notes/**: GitHub Issuesに関連する追加のメモや詳細情報を格納するMarkdownファイル群。
*   **package-lock.json**: `package.json`に基づく依存関係の厳密なツリー構造とバージョンを記録するファイル。
*   **package.json**: Node.jsプロジェクトのメタデータ（プロジェクト名、バージョン、スクリプト、依存関係など）を定義するファイル。
*   **src/main.js**: プロジェクトのシンプルなエントリーポイント。基本的なJavaScript関数（例: 挨拶）を含む。

## 関数詳細説明

*   **`.github_automation/callgraph/presets/callgraph.js`** および **`generated-docs/callgraph.js`**
    *   `escapeHtml(unsafe)`:
        *   役割: HTMLの特殊文字をエンティティに変換し、XSS攻撃を防ぐために文字列をサニタイズする。
        *   引数: `unsafe` (string) - エスケープする文字列。
        *   戻り値: (string) - エスケープされた安全な文字列。
        *   機能: `< > & " '` などのHTML特殊文字を対応するHTMLエンティティに置き換える。
    *   `getLayoutConfig()`:
        *   役割: 呼び出しグラフのレイアウトに関する設定オブジェクトを返す。
        *   引数: なし。
        *   戻り値: (object) - レイアウト設定。
        *   機能: グラフ表示におけるノードの配置や挙動に関する設定を提供する。
    *   `placeCentralNode(cy, node)`:
        *   役割: 指定されたノードをCytoscape.jsグラフの中心に配置する。
        *   引数: `cy` (Cytoscape.jsインスタンス), `node` (Cytoscape.jsノード要素)。
        *   戻り値: なし。
        *   機能: ユーザーが特定のノードに注目する際に、そのノードを中心にする。
    *   `showNodeInfo(node)`:
        *   役割: 指定されたノードの詳細情報を情報パネルに表示する。
        *   引数: `node` (Cytoscape.jsノード要素)。
        *   戻り値: なし。
        *   機能: ノードクリック時などにノード名、ファイルパスなどの詳細を表示。
    *   `showEdgeInfo(edge)`:
        *   役割: 指定されたエッジ（関係線）の詳細情報を情報パネルに表示する。
        *   引数: `edge` (Cytoscape.jsエッジ要素)。
        *   戻り値: なし。
        *   機能: エッジクリック時などに呼び出し元・呼び出し先、関係の種類などを表示。
    *   `hideInfoPanel()`:
        *   役割: 情報パネルを非表示にする。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: 情報パネルの表示を制御する。
    *   `showInfoPanel()`:
        *   役割: 情報パネルを表示する。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: 情報パネルの表示を制御する。
    *   `toggleInfoPanel()`:
        *   役割: 情報パネルの表示/非表示を切り替える。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: ユーザー操作に応じてパネルの可視性を変更する。
    *   `generateGitHubURL(nodeData)`:
        *   役割: ノードデータからGitHubリポジトリ内のファイルへのURLを生成する。
        *   引数: `nodeData` (object) - ノードのファイルパスなどの情報を含むデータ。
        *   戻り値: (string) - GitHub上のファイルURL。
        *   機能: グラフ上のノードが示すコードに直接アクセスするためのリンクを生成する。
    *   `resetLayout(cy)`:
        *   役割: グラフのレイアウトを初期状態にリセットする。
        *   引数: `cy` (Cytoscape.jsインスタンス)。
        *   戻り値: なし。
        *   機能: ユーザー操作で変更されたレイアウトを元に戻す。
    *   `watchNodeMovementAndFixOverlapsWrap(cy, options)`:
        *   役割: ノードの移動を監視し、オーバーラップを解決するプロセスをラップする。
        *   引数: `cy` (Cytoscape.jsインスタンス), `options` (object) - オプション設定。
        *   戻り値: なし。
        *   機能: オーバーラップ解決処理の開始と停止を管理する。
    *   `watchNodeMovementAndFixOverlaps(cy, options)`:
        *   役割: グラフ内のノードの動きを監視し、ノード同士が重ならないように位置を調整する。
        *   引数: `cy` (Cytoscape.jsインスタンス), `options` (object) - オーバーラップ解決のオプション。
        *   戻り値: なし。
        *   機能: グラフの可読性を高めるためにノードの重なりを解消する。
    *   `resolveNodeOverlaps(cy, node, neighbors, options)`:
        *   役割: 指定されたノードとその隣接ノード間の重なりを検出し、解消する。
        *   引数: `cy` (Cytoscape.jsインスタンス), `node` (Cytoscape.jsノード要素), `neighbors` (Cytoscape.jsコレクション), `options` (object)。
        *   戻り値: なし。
        *   機能: 個別のノードとその周辺の重なりを調整する。
    *   `switchLayout(cy, layoutType)`:
        *   役割: 呼び出しグラフの表示レイアウトタイプを切り替える。
        *   引数: `cy` (Cytoscape.jsインスタンス), `layoutType` (string) - 適用するレイアウトの種類。
        *   戻り値: なし。
        *   機能: ユーザーが異なる視覚的表現でグラフを探索できるようにする。
    *   `resetNodeStates(cy)`:
        *   役割: グラフ内の全てのノードの状態（選択、強調表示など）を初期状態に戻す。
        *   引数: `cy` (Cytoscape.jsインスタンス)。
        *   戻り値: なし。
        *   機能: ユーザー操作によって変更されたノードの視覚的状態をクリアする。
    *   `fitToContent(cy)`:
        *   役割: グラフ全体がビューポート内に収まるようにズームレベルとパン位置を調整する。
        *   引数: `cy` (Cytoscape.jsインスタンス)。
        *   戻り値: なし。
        *   機能: グラフ全体を一望できるようにビューを最適化する。
    *   `toggleNodeLabels(cy, show)`:
        *   役割: グラフノードのラベルの表示/非表示を切り替える。
        *   引数: `cy` (Cytoscape.jsインスタンス), `show` (boolean) - 表示するかどうか。
        *   戻り値: なし。
        *   機能: グラフの視覚的混雑を軽減するためにラベルの表示を制御する。
    *   `toggleCalleeLocationFilter(cy)`:
        *   役割: 呼び出し先（Callee）のロケーションに基づいてノードをフィルタリングする機能の有効/無効を切り替える。
        *   引数: `cy` (Cytoscape.jsインスタンス)。
        *   戻り値: なし。
        *   機能: 特定の場所からの呼び出しのみを表示するなど、グラフを絞り込む。
    *   `replace()`:
        *   役割: 文字列の一部を別の文字列に置換する。
        *   引数: (string, string) - 検索文字列、置換文字列。
        *   戻り値: (string) - 置換後の文字列。
        *   機能: JavaScriptの`String.prototype.replace()`に相当し、テキストデータの整形に利用される。
    *   `switch()`:
        *   役割: 複数の条件に基づいて異なるコードブロックを実行する。
        *   引数: (any) - 比較する値。
        *   戻り値: なし。
        *   機能: JavaScriptの`switch`ステートメントと同様の制御フロー。
    *   `function()`:
        *   役割: 関数を定義する。このコンテキストでは、おそらく無名関数やコールバックとして利用されている。
        *   引数: (可変) - 定義される関数の引数。
        *   戻り値: (可変) - 定義される関数の戻り値。
        *   機能: JavaScriptの関数定義の基本要素。
    *   `max()`:
        *   役割: 複数の数値の中から最大値を返す。
        *   引数: (number, ...) - 比較する数値。
        *   戻り値: (number) - 最大値。
        *   機能: `Math.max()`と同様、数値比較に利用される。
    *   `on()`:
        *   役割: 特定のイベントが発生したときに実行されるイベントリスナーを登録する。
        *   引数: (string, function) - イベント名、ハンドラ関数。
        *   戻り値: なし。
        *   機能: UI要素やCytoscape.jsインスタンスへのイベントハンドリングに利用される。
    *   `if()`:
        *   役割: 条件が真の場合にコードブロックを実行する。
        *   引数: (boolean) - 評価する条件。
        *   戻り値: なし。
        *   機能: JavaScriptの`if`ステートメントと同様の条件分岐。
    *   `for()`:
        *   役割: 指定された回数、またはコレクションの各要素に対してコードブロックを繰り返し実行する。
        *   引数: (初期化, 条件, 更新) または (可変) - ループ制御のための引数。
        *   戻り値: なし。
        *   機能: JavaScriptの`for`または`for...of/in`ステートメントと同様の繰り返し処理。
    *   `ready()`:
        *   役割: ドキュメントオブジェクトモデル（DOM）の準備が完了したときに実行されるコールバックを登録する。
        *   引数: (function) - DOM準備完了時に実行される関数。
        *   戻り値: なし。
        *   機能: ページの初期化処理をDOMが安全に操作できる状態になった後に行うために利用される。
    *   `addListener()`:
        *   役割: イベントリスナーを追加する。`on()`と類似の機能を持つが、特定のAPI（Node.jsのEventEmitterなど）で使用されることが多い。
        *   引数: (string, function) - イベント名、ハンドラ関数。
        *   戻り値: なし。
        *   機能: イベント駆動型のプログラミングで、特定のイベントを購読するために利用される。

*   **`src/main.js`**
    *   `greet(name)`:
        *   役割: 指定された名前に挨拶メッセージを生成する。
        *   引数: `name` (string) - 挨拶の対象となる名前。
        *   戻り値: (string) - 挨拶メッセージ。
        *   機能: 例: "Hello, [name]!"という文字列を返す。
    *   `main()`:
        *   役割: プログラムのエントリーポイント。`greet`関数を呼び出し、その結果をコンソールに出力する。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: アプリケーションの開始時に実行され、主要な処理を調整する。

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
Generated at: 2025-09-16 07:05:45 JST

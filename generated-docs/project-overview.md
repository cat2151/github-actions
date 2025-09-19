Last updated: 2025-09-20

# Project Overview

## プロジェクト概要
- プロジェクトごとのGitHub Actions管理を容易にする共通ワークフロー集です。
- 共通化されたワークフローを提供し、様々なプロジェクトから簡単に再利用できます。
- ワークフローのメンテナンスを一括化し、プロジェクト開発に集中できる環境を支援します。

## 技術スタック
- フロントエンド: なし
- 音楽・オーディオ:
    - Tone.js: Web Audio APIを抽象化し、Webブラウザで高度な音楽・オーディオ処理を可能にするJavaScriptライブラリ。
    - Web Audio API: Webブラウザ上で音声処理を行うためのAPI（Tone.jsを介して利用）。
    - MML (Music Macro Language): 音楽をテキストで記述するための記法パーサー。
- 開発ツール:
    - Node.js runtime: サーバーサイドやツール実行環境としてJavaScriptを動作させるためのランタイム。
- テスト: なし
- ビルドツール: なし
- 言語機能: なし
- 自動化・CI/CD:
    - GitHub Actions: コードの変更を検知し、自動的にビルド、テスト、デプロイ、その他のタスクを実行するためのCI/CDプラットフォーム。
        - プロジェクト要約自動生成: プロジェクトの情報を自動的に収集・要約するワークフロー。
        - Issue自動管理: GitHub Issuesの作成、更新、クローズなどを自動化するワークフロー。
        - README多言語翻訳: READMEファイルを複数の言語に自動翻訳するワークフロー。
        - i18n automation: 国際化（i18n）関連の翻訳プロセスを自動化するワークフロー。
- 開発標準: なし

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
📁 src/
  📜 main.js
```

## ファイル詳細説明
-   `.github_automation/callgraph/codeql-queries/callgraph.ql`: CodeQLを使用してコールグラフを抽出するためのクエリを定義します。
-   `.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml`: CodeQLパックの依存関係をロックし、安定したビルドを保証します。
-   `.github_automation/callgraph/codeql-queries/qlpack.yml`: CodeQLパックのメタデータと設定を記述します。
-   `.github_automation/callgraph/config/example.json`: コールグラフ生成に関する設定の例をJSON形式で提供します。
-   `.github_automation/callgraph/docs/callgraph.md`: コールグラフ機能に関する詳細なドキュメントです。
-   `.github_automation/callgraph/presets/callgraph.js`: コールグラフの視覚化、インタラクション、および関連するJavaScriptロジックを定義します。
-   `.github_automation/callgraph/presets/style.css`: コールグラフの視覚化に使用されるCSSスタイルを定義します。
-   `.github_automation/callgraph/scripts/analyze-codeql.cjs`: CodeQLによるコード分析を実行するNode.jsスクリプトです。
-   `.github_automation/callgraph/scripts/callgraph-utils.cjs`: コールグラフの生成や処理に関連するユーティリティ関数を提供します。
-   `.github_automation/callgraph/scripts/check-codeql-exists.cjs`: システムにCodeQLがインストールされているかを確認するスクリプトです。
-   `.github_automation/callgraph/scripts/check-commits.cjs`: コミット履歴をチェックするためのスクリプトです。
-   `.github_automation/callgraph/scripts/check-node-version.cjs`: 実行環境のNode.jsバージョンが要件を満たしているかを確認します。
-   `.github_automation/callgraph/scripts/common-utils.cjs`: プロジェクト全体で共通利用されるユーティリティ関数を集めたスクリプトです。
-   `.github_automation/callgraph/scripts/copy-commit-results.cjs`: コミット結果や関連ファイルをコピーするためのスクリプトです。
-   `.github_automation/callgraph/scripts/extract-sarif-info.cjs`: SARIF（Static Analysis Results Interchange Format）ファイルから分析結果情報を抽出します。
-   `.github_automation/callgraph/scripts/find-process-results.cjs`: 特定の処理結果やファイルを検索するためのスクリプトです。
-   `.github_automation/callgraph/scripts/generate-html-graph.cjs`: 分析結果からHTML形式のグラフを生成するスクリプトです。
-   `.github_automation/callgraph/scripts/generateHTML.cjs`: 一般的なHTMLファイルを生成するためのスクリプトです。
-   `.github_automation/project_summary/docs/daily-summary-setup.md`: 日次プロジェクトサマリー設定に関するドキュメントです。
-   `.github_automation/project_summary/prompts/development-status-prompt.md`: 開発ステータスレポート生成に使用するプロンプトの定義ファイルです。
-   `.github_automation/project_summary/prompts/project-overview-prompt.md`: プロジェクト概要生成に使用するプロンプトの定義ファイルです。
-   `.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`: プロジェクトサマリー生成プロセス全体の調整と実行を管理するスクリプトです。
-   `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`: 開発ステータスレポートを生成する機能を提供します。
-   `.github_automation/project_summary/scripts/development/GitUtils.cjs`: Gitリポジトリ操作に関連するユーティリティ関数を提供します。
-   `.github_automation/project_summary/scripts/development/IssueTracker.cjs`: GitHub Issuesの追跡や情報収集に関連する機能を提供します。
-   `.github_automation/project_summary/scripts/generate-project-summary.cjs`: プロジェクトサマリーを生成するためのメインエントリスクリプトです。
-   `.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs`: プロジェクトのソースコードを分析し、構造や依存関係を抽出します。
-   `.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs`: プロジェクト分析の各ステップを統括し、実行順序を管理します。
-   `.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs`: プロジェクトに関する様々なデータを収集する機能を提供します。
-   `.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs`: 収集したプロジェクトデータを整形し、出力に適した形式に変換します。
-   `.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs`: プロジェクトの概要レポートを生成する中心的なロジックを提供します。
-   `.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs`: プロジェクトで使用されている技術スタックを特定し、分析します。
-   `.github_automation/project_summary/scripts/shared/BaseGenerator.cjs`: 各種レポート生成スクリプトの基底クラスとして、共通の機能を提供します。
-   `.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs`: ファイルシステム操作（読み書き、ディレクトリ作成など）に関するユーティリティ関数を提供します。
-   `.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs`: プロジェクト内のファイル操作に特化したユーティリティ関数を提供します。
-   `.github_automation/translate/docs/TRANSLATION_SETUP.md`: 翻訳機能のセットアップに関するドキュメントです。
-   `.github_automation/translate/scripts/translate-readme.cjs`: READMEファイルの自動翻訳を実行するスクリプトです。
-   `.gitignore`: Gitによってバージョン管理の対象外とするファイルやディレクトリを指定します。
-   `.vscode/settings.json`: VS Codeエディタのワークスペース固有の設定を定義します。
-   `LICENSE`: このプロジェクトのソフトウェアライセンス情報が記載されています。
-   `README.ja.md`: プロジェクトの概要、目的、使用方法などを日本語で説明する主要なドキュメントです。
-   `README.md`: プロジェクトの概要、目的、使用方法などを英語で説明する主要なドキュメントです。
-   `generated-docs/callgraph.html`: 生成されたコールグラフのHTML形式の表示ファイルです。
-   `generated-docs/callgraph.js`: 生成されたコールグラフ表示のためのJavaScriptコードです。
-   `generated-docs/style.css`: 生成されたコールグラフ表示のためのCSSスタイルシートです。
-   `issue-notes/*.md`: 各Issue番号に対応する開発ノートやメモを記録するマークダウンファイル群です。
-   `src/main.js`: プロジェクトの主要なエントリポイントまたはデモンストレーション用のJavaScriptファイルです。

## 関数詳細説明
-   `escapeHtml(unsafe)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: HTMLの特殊文字をエスケープし、XSS攻撃を防ぐ。
    -   引数: `unsafe` (string) - エスケープする文字列。
    -   戻り値: (string) - エスケープされた文字列。
    -   機能: 文字列内の`<`, `>`, `&`, `"`, `'`などのHTML特殊文字を対応するHTMLエンティティに変換します。
-   `getLayoutConfig()` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: コールグラフのレイアウト設定を取得する。
    -   引数: なし。
    -   戻り値: (object) - レイアウト設定オブジェクト。
    -   機能: コールグラフの描画に使用するレイアウトのパラメータ（例: アルゴリズム、間隔、アニメーション）を定義したオブジェクトを返します。
-   `placeCentralNode(cy, nodeId)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: 指定されたノードを中心位置に配置する。
    -   引数: `cy` (Cytoscape.jsインスタンス), `nodeId` (string) - 中心に配置するノードのID。
    -   戻り値: なし。
    -   機能: グラフ表示において、特定のノードを画面の中央に配置し、見やすくします。
-   `showNodeInfo(node)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: グラフ上のノードの詳細情報を表示する。
    -   引数: `node` (Cytoscape.jsノードオブジェクト) - 情報表示対象のノード。
    -   戻り値: なし。
    -   機能: ユーザーがノードをクリックまたはホバーした際に、そのノードに関する追加情報（例: ファイルパス、関数名、行数）を情報パネルに表示します。
-   `showEdgeInfo(edge)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: グラフ上のエッジの詳細情報を表示する。
    -   引数: `edge` (Cytoscape.jsエッジオブジェクト) - 情報表示対象のエッジ。
    -   戻り値: なし。
    -   機能: ユーザーがエッジをクリックまたはホバーした際に、そのエッジ（呼び出し関係など）に関する追加情報を情報パネルに表示します。
-   `hideInfoPanel()` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: 情報表示パネルを非表示にする。
    -   引数: なし。
    -   戻り値: なし。
    -   機能: 表示中の情報パネルを閉じ、画面から隠します。
-   `showInfoPanel(element)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: 情報表示パネルを表示する。
    -   引数: `element` (DOMエレメントまたはセレクタ) - 表示する情報パネルの要素。
    -   戻り値: なし。
    -   機能: 引数で指定された内容を含む情報パネルを表示します。
-   `toggleInfoPanel()` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: 情報パネルの表示/非表示を切り替える。
    -   引数: なし。
    -   戻り値: なし。
    -   機能: 現在情報パネルが表示されていれば非表示に、非表示であれば表示に切り替えます。
-   `generateGitHubURL(nodeData)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: ノードデータからGitHubリポジトリの該当ファイルへのURLを生成する。
    -   引数: `nodeData` (object) - ノードに関連するデータ（ファイルパス、行番号などを含む）。
    -   戻り値: (string) - 生成されたGitHub URL。
    -   機能: グラフ上の要素に対応するGitHub上のソースコードの場所へ直接リンクするためのURLを作成します。
-   `resetLayout()` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: グラフのレイアウトを初期状態にリセットする。
    -   引数: なし。
    -   戻り値: なし。
    -   機能: グラフの表示位置や配置を最初の状態に戻します。
-   `watchNodeMovementAndFixOverlapsWrap(cy)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: ノードの移動を監視し、重なりを修正する機能のラッパー。
    -   引数: `cy` (Cytoscape.jsインスタンス)。
    -   戻り値: なし。
    -   機能: `watchNodeMovementAndFixOverlaps`関数をCytoscape.jsのイベントリスナーとして登録するためのラッパーです。
-   `watchNodeMovementAndFixOverlaps(cy)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: グラフ内のノードが移動した際に、他のノードとの重なりを検出し、修正する。
    -   引数: `cy` (Cytoscape.jsインスタンス)。
    -   戻り値: なし。
    -   機能: ユーザー操作やレイアウト変更によってノードが移動するたびに、ノード同士が重ならないように自動的に調整します。
-   `resolveNodeOverlaps(cy)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: ノードの重なりを解決する。
    -   引数: `cy` (Cytoscape.jsインスタンス)。
    -   戻り値: なし。
    -   機能: グラフ内のノードが互いに重なっている場合に、それらを離して配置し、視認性を高めます。
-   `switchLayout(layoutName)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: グラフのレイアウトアルゴリズムを切り替える。
    -   引数: `layoutName` (string) - 新しいレイアウトの名前（例: 'cose', 'grid'）。
    -   戻り値: なし。
    -   機能: グラフのノード配置方法を変更し、異なる視点や構造を表現します。
-   `resetNodeStates(cy)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: 全てのノードのビジュアル状態（選択、ハイライトなど）をリセットする。
    -   引数: `cy` (Cytoscape.jsインスタンス)。
    -   戻り値: なし。
    -   機能: グラフの全てのノードから選択状態やハイライト効果などを解除し、デフォルトの外観に戻します。
-   `fitToContent(cy)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: グラフの表示範囲をコンテンツ全体に合わせる。
    -   引数: `cy` (Cytoscape.jsインスタンス)。
    -   戻り値: なし。
    -   機能: グラフのズームレベルとパン位置を調整し、全てのノードとエッジが画面内に収まるようにします。
-   `toggleNodeLabels(cy)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: ノードのラベル表示を切り替える。
    -   引数: `cy` (Cytoscape.jsインスタンス)。
    -   戻り値: なし。
    -   機能: グラフのノードに表示されるテキストラベルの表示/非表示を切り替えます。
-   `toggleCalleeLocationFilter()` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: 呼び出し先（Callee）の位置によるフィルタリング機能の表示/非表示を切り替える。
    -   引数: なし。
    -   戻り値: なし。
    -   機能: 特定のファイルやディレクトリに存在する呼び出し先のみを表示するフィルターUIの表示状態を切り替えます。
-   `replace(target, search, replacement)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: 文字列置換を行う。
    -   引数: `target` (string) - 置換対象の文字列, `search` (string) - 検索する文字列, `replacement` (string) - 置換後の文字列。
    -   戻り値: (string) - 置換後の文字列。
    -   機能: JavaScriptの`String.prototype.replace()`に類似した文字列置換を実行します。
-   `switch(value)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: JavaScriptの`switch`文の制御構造。
    -   引数: `value` (any) - 評価する値。
    -   戻り値: なし。
    -   機能: 指定された値に基づいて、複数の処理パスの中から一つを選択し実行します。
-   `function` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: JavaScriptにおける関数定義のキーワード。
    -   引数: 記述なし。
    -   戻り値: 記述なし。
    -   機能: 新しい関数を定義するために使用されます。無名関数やコールバック関数として多く利用されている可能性があります。
-   `max(a, b)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: 2つの数値の大きい方を返す。
    -   引数: `a` (number), `b` (number) - 比較する数値。
    -   戻り値: (number) - `a`と`b`のうち大きい方の値。
    -   機能: 通常、`Math.max()`と同等かそれに類する数値比較機能を提供します。
-   `on(eventName, handler)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: イベントリスナーを設定する。
    -   引数: `eventName` (string) - 監視するイベントの名前, `handler` (function) - イベント発生時に実行される関数。
    -   戻り値: なし。
    -   機能: 指定されたイベント（例: 'click', 'mouseover'）が発生した際に、登録されたハンドラ関数を呼び出します。
-   `if(condition)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: JavaScriptの`if`文の制御構造。
    -   引数: `condition` (boolean) - 評価する条件式。
    -   戻り値: なし。
    -   機能: 指定された条件が真である場合にのみ、特定のコードブロックを実行します。
-   `for(statement)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: JavaScriptの`for`文の制御構造。
    -   引数: `statement` (string) - ループの初期化、条件、更新式。
    -   戻り値: なし。
    -   機能: 指定された回数、または条件が満たされるまで、コードブロックを繰り返し実行します。
-   `ready(callback)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: DOMコンテンツが完全にロードされたときにコールバック関数を実行する。
    -   引数: `callback` (function) - DOM準備完了時に実行される関数。
    -   戻り値: なし。
    -   機能: ウェブページがインタラクティブになる準備ができた時点で特定のJavaScriptコードを実行するために使用されます。
-   `addListener(eventName, listener)` (.github_automation/callgraph/presets/callgraph.js):
    -   役割: イベントリスナーを追加する。
    -   引数: `eventName` (string) - イベント名, `listener` (function) - イベントハンドラ関数。
    -   戻り値: なし。
    -   機能: 特定のDOM要素やオブジェクトに対して、指定されたイベントが発生したときに呼び出される関数を登録します。
-   `greet(name)` (src/main.js):
    -   役割: 指定された名前に挨拶メッセージを返す。
    -   引数: `name` (string) - 挨拶する相手の名前。
    -   戻り値: (string) - 挨拶メッセージ。
    -   機能: `Hello, [name]!`という形式の文字列を生成して返します。
-   `main()` (src/main.js):
    -   役割: アプリケーションの主要なエントリポイント。
    -   引数: なし。
    -   戻り値: なし。
    -   機能: `greet`関数を呼び出し、その結果をコンソールに出力します。

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
- main (src/main.js)
  - greet (src/main.js)

---
Generated at: 2025-09-20 07:05:56 JST

Last updated: 2026-03-28

# Project Overview

## プロジェクト概要
- 🚀 このプロジェクトは、GitHub Actionsのワークフロー管理を効率化し、複数のプロジェクトで再利用可能な共通ワークフローを提供します。
- 🔗 開発者は共通化されたワークフローを呼び出すだけで済むため、各プロジェクトでのGitHub Actionsの設定とメンテナンスの手間を大幅に削減できます。
- ✅ ワークフローのメンテナンスは一元的に行えるため、各プロジェクトは本来の開発業務に集中できるよう設計されています。

## 技術スタック
- フロントエンド: **HTML** (呼び出しグラフの表示), **CSS** (呼び出しグラフのスタイル設定), **JavaScript** (呼び出しグラフのインタラクティブ機能)
- 音楽・オーディオ: 該当なし
- 開発ツール: **Node.js** (各種自動化スクリプトの実行環境), **CodeQL** (コードの静的解析と呼び出しグラフ生成), **Python** (一部のファイルチェック用スクリプト)
- テスト: 該当なし
- ビルドツール: 該当なし
- 言語機能: **JavaScript (ECMAScript)** (主要なスクリプト言語), **Python** (補助的なスクリプト言語), **Gemini API** (READMEの自動翻訳に使用)
- 自動化・CI/CD: **GitHub Actions** (プロジェクトの中心技術であり、共通ワークフローの実行環境)
- 開発標準: **Markdown** (ドキュメント記述), **TOML** (設定ファイル形式), **YAML** (CodeQLパック定義ファイル形式)

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
  📁 check-large-files/
    📖 README.md
    📄 check-large-files.toml.default
    📁 scripts/
      📄 check_large_files.py
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
📖 AGENTS.md
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
  📖 35.md
  📖 38.md
  📖 4.md
  📖 40.md
  📖 44.md
  📖 57.md
  📖 61.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明
- **`.github_automation/`**: 複数プロジェクトで利用される共通ワークフロー関連のスクリプトや設定を格納する主要ディレクトリ。
    - **`callgraph/`**: CodeQLを用いた関数呼び出しグラフの生成と可視化に関する機能群。
        - **`codeql-queries/callgraph.ql`**: CodeQLでコードベースから関数呼び出し関係を抽出するためのクエリファイル。
        - **`codeql-pack.lock.yml`**: CodeQLパックの依存関係をロックするためのファイル。
        - **`qlpack.yml`**: CodeQLパックの定義ファイル。
        - **`config/example.json`**: 呼び出しグラフ生成スクリプトの設定例。
        - **`docs/callgraph.md`**: 呼び出しグラフの生成と利用に関するドキュメント。
        - **`presets/callgraph.js`**: 呼び出しグラフをWebページ上でインタラクティブに表示するためのJavaScriptコード。
        - **`presets/style.css`**: 呼び出しグラフのWebページ用のスタイルシート。
        - **`scripts/*.cjs`**: CodeQLの実行、SARIF結果の解析、HTMLグラフの生成などを行うNode.jsスクリプト群。
    - **`check-large-files/`**: リポジトリ内の大容量ファイルをチェックする機能群。
        - **`README.md`**: この機能の利用方法や説明。
        - **`check-large-files.toml.default`**: 大容量ファイルチェックの設定例。
        - **`scripts/check_large_files.py`**: 大容量ファイルを検出するPythonスクリプト。
    - **`check_recent_human_commit/scripts/check-recent-human-commit.cjs`**: 最近の人間によるコミットがあるかをチェックするNode.jsスクリプト。CI/CDの特定の条件分岐などに利用される。
    - **`project_summary/`**: プロジェクトの概要や開発状況を生成する機能群。
        - **`docs/daily-summary-setup.md`**: デイリーサマリー生成の設定に関するドキュメント。
        - **`prompts/development-status-prompt.md`**: 開発状況レポート生成時にAIに与えるプロンプト。
        - **`prompts/project-overview-prompt.md`**: プロジェクト概要生成時にAIに与えるプロンプト。
        - **`scripts/ProjectSummaryCoordinator.cjs`**: プロジェクト概要生成プロセス全体の調整役となるNode.jsスクリプト。
        - **`scripts/development/DevelopmentStatusGenerator.cjs`**: 開発状況レポートを生成するNode.jsスクリプト。
        - **`scripts/development/GitUtils.cjs`**: Git操作に関連するユーティリティ関数を提供するNode.jsスクリプト。
        - **`scripts/development/IssueTracker.cjs`**: Issueトラッキングシステムと連携するNode.jsスクリプト。
        - **`scripts/generate-project-summary.cjs`**: プロジェクト概要生成の主要なエントリーポイントとなるNode.jsスクリプト。
        - **`scripts/overview/CodeAnalyzer.cjs`**: プロジェクトのコードを分析するNode.jsスクリプト。
        - **`scripts/overview/ProjectAnalysisOrchestrator.cjs`**: プロジェクト分析プロセスを統括するNode.jsスクリプト。
        - **`scripts/overview/ProjectDataCollector.cjs`**: プロジェクトに関する各種データを収集するNode.jsスクリプト。
        - **`scripts/overview/ProjectDataFormatter.cjs`**: 収集したデータを整形するNode.jsスクリプト。
        - **`scripts/overview/ProjectOverviewGenerator.cjs`**: 最終的なプロジェクト概要を生成するNode.jsスクリプト。
        - **`scripts/shared/BaseGenerator.cjs`**: 各種ジェネレーターの基底クラスを提供するNode.jsスクリプト。
        - **`scripts/shared/FileSystemUtils.cjs`**: ファイルシステム操作に関するユーティリティ関数を提供するNode.jsスクリプト。
        - **`scripts/shared/ProjectFileUtils.cjs`**: プロジェクトファイル関連のユーティリティ関数を提供するNode.jsスクリプト。
    - **`translate/`**: READMEファイルの多言語翻訳に関する機能群。
        - **`docs/TRANSLATION_SETUP.md`**: 翻訳機能の設定に関するドキュメント。
        - **`scripts/translate-readme.cjs`**: READMEファイルを自動翻訳するNode.jsスクリプト。
- **`.gitignore`**: Gitがバージョン管理の対象外とするファイルやディレクトリを指定する設定ファイル。
- **`.vscode/settings.json`**: Visual Studio Code用のプロジェクト固有の設定ファイル。
- **`AGENTS.md`**: プロジェクト内で使用される（あるいは想定される）エージェントに関するドキュメント。
- **`LICENSE`**: プロジェクトのライセンス情報が記載されたファイル。
- **`README.ja.md`**: プロジェクトの日本語版メイン説明書。
- **`README.md`**: プロジェクトの英語版メイン説明書。`README.ja.md`から自動生成される。
- **`_config.yml`**: GitHub Pagesのサイト設定ファイル。
- **`generated-docs/`**: GitHub Actionsによって自動生成されたドキュメントや成果物を格納するディレクトリ。
    - **`callgraph.html`**: 生成された関数呼び出しグラフを可視化するHTMLファイル。
    - **`callgraph.js`**: `presets/callgraph.js` と同じ内容で、生成されたHTMLファイルに埋め込まれる呼び出しグラフ表示用JavaScript。
    - **`style.css`**: `presets/style.css` と同じ内容で、生成されたHTMLファイルに埋め込まれるスタイルシート。
- **`googled947dc864c270e07.html`**: Googleサイト認証のために使用されるファイル。
- **`issue-notes/`**: 開発中の課題やメモが記述されたMarkdownファイルのコレクション。
- **`src/main.js`**: プロジェクトのサンプルまたはテスト用のエントリーポイントファイル。

## 関数詳細説明
- **`escapeHtml(str)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: HTMLの特殊文字をエスケープし、セキュリティを向上させます。
    - 引数: `str` (文字列) - エスケープ対象の文字列。
    - 戻り値: エスケープされた文字列。
- **`getLayoutConfig()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 呼び出しグラフの表示レイアウトに関する設定オブジェクトを返します。
    - 引数: なし。
    - 戻り値: レイアウト設定を含むオブジェクト。
- **`placeCentralNode(nodeId, x, y)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 指定されたIDのノードをグラフの中央に配置します。
    - 引数: `nodeId` (文字列/数値) - 中央に配置するノードのID。`x`, `y` (数値) - 配置する座標。
    - 戻り値: なし。
- **`showNodeInfo(nodeId, data)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 指定されたノードの詳細情報を情報パネルに表示します。
    - 引数: `nodeId` (文字列/数値) - 情報を表示するノードのID。`data` (オブジェクト) - ノードに関連するデータ。
    - 戻り値: なし。
- **`showEdgeInfo(edgeId, data)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 指定されたエッジ（線）の詳細情報を情報パネルに表示します。
    - 引数: `edgeId` (文字列/数値) - 情報を表示するエッジのID。`data` (オブジェクト) - エッジに関連するデータ。
    - 戻り値: なし。
- **`hideInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 情報表示パネルを非表示にします。
    - 引数: なし。
    - 戻り値: なし。
- **`showInfoPanel(content)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 指定された内容で情報表示パネルを表示します。
    - 引数: `content` (文字列) - パネルに表示するHTMLコンテンツ。
    - 戻り値: なし。
- **`toggleInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 情報表示パネルの表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **`generateGitHubURL(path, line)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: ファイルパスと行番号からGitHubリポジトリへのURLを生成します。
    - 引数: `path` (文字列) - ファイルパス。`line` (数値) - 行番号。
    - 戻り値: 生成されたGitHub URL (文字列)。
- **`resetLayout()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 呼び出しグラフのレイアウトを初期状態にリセットします。
    - 引数: なし。
    - 戻り値: なし。
- **`watchNodeMovementAndFixOverlapsWrap()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: ノードの移動を監視し、重なりを修正する処理をラップして実行します。
    - 引数: なし。
    - 戻り値: なし。
- **`watchNodeMovementAndFixOverlaps()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: ノードの移動イベントを監視し、ノード同士の重なりを解決します。
    - 引数: なし。
    - 戻り値: なし。
- **`resolveNodeOverlaps()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフ上のノードが互いに重ならないように位置を調整します。
    - 引数: なし。
    - 戻り値: なし。
- **`switchLayout(layoutName)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 呼び出しグラフの表示レイアウトを切り替えます。
    - 引数: `layoutName` (文字列) - 適用するレイアウトの名前。
    - 戻り値: なし。
- **`resetNodeStates()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフ内のすべてのノードの状態（選択、ハイライトなど）をリセットします。
    - 引数: なし。
    - 戻り値: なし。
- **`fitToContent()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフがビューポート全体に収まるようにズームレベルを調整します。
    - 引数: なし。
    - 戻り値: なし。
- **`toggleNodeLabels()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: ノードラベルの表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **`toggleCalleeLocationFilter()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 呼び出し先（Callee）の位置によるフィルタリングの有効/無効を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **`replace(oldValue, newValue)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 文字列内の特定のサブ文字列を別の文字列に置換します（一般的な文字列操作）。
    - 引数: `oldValue` (文字列) - 置換対象の文字列。`newValue` (文字列) - 置換後の文字列。
    - 戻り値: 置換後の文字列。
- **`switch(value)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: JavaScriptの`switch`文の文法要素として使用されます。複数の条件分岐を処理します。
    - 引数: `value` (任意) - 比較対象の値。
    - 戻り値: なし (制御フローを処理)。
- **`function(args)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: JavaScriptの関数定義のキーワードとして使用されます。特定の処理をまとめたコードブロックを定義します。
    - 引数: `args` (任意) - 関数が受け取る引数。
    - 戻り値: 関数定義。
- **`max(a, b)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 複数の値の中から最大値を返します（`Math.max`のような汎用的な数学関数）。
    - 引数: `a`, `b` (数値) - 比較対象の数値。
    - 戻り値: 最大値。
- **`on(eventName, handler)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 要素にイベントリスナーをアタッチします（jQueryなどのイベント処理）。
    - 引数: `eventName` (文字列) - イベント名。`handler` (関数) - イベント発生時に実行されるハンドラ。
    - 戻り値: なし。
- **`if(condition)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: JavaScriptの`if`文の文法要素として使用されます。条件に基づいてコードの実行を分岐させます。
    - 引数: `condition` (真偽値) - 評価される条件。
    - 戻り値: なし (制御フローを処理)。
- **`for(init; condition; increment)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: JavaScriptの`for`文の文法要素として使用されます。指定された回数だけコードブロックを繰り返します。
    - 引数: `init` (式) - 初期化式。`condition` (真偽値) - 繰り返し条件。`increment` (式) - 増分式。
    - 戻り値: なし (制御フローを処理)。
- **`ready(handler)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: ドキュメントがロードされて準備が完了したときに実行されるハンドラを設定します（jQueryの`$(document).ready()`に類似）。
    - 引数: `handler` (関数) - ドキュメント準備完了時に実行される関数。
    - 戻り値: なし。
- **`addListener(event, handler)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 指定されたイベントにイベントリスナーを追加します。
    - 引数: `event` (文字列) - イベント名。`handler` (関数) - イベント発生時に実行されるハンドラ。
    - 戻り値: なし。
- **`greet(name)`** (`src/main.js`):
    - 役割: 指定された名前に挨拶するメッセージを生成します。
    - 引数: `name` (文字列) - 挨拶の対象となる名前。
    - 戻り値: 挨拶メッセージ (文字列)。
- **`main()`** (`src/main.js`):
    - 役割: `src/main.js`ファイルのエントリーポイントとして機能し、`greet`関数を呼び出して結果をコンソールに出力します。
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
Generated at: 2026-03-28 07:09:02 JST

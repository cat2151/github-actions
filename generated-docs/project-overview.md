Last updated: 2026-04-19

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽にするための共通ワークフロー集です。
- 🔗 共通化されたワークフローを提供し、どのプロジェクトからも呼び出すだけで利用可能です。
- ✅ ワークフローのメンテナンスは一括で行われ、各プロジェクト開発者は自身の開発に集中できます。

## 技術スタック
- フロントエンド: JavaScript、CSS、HTML - 関数呼び出しグラフのインタラクティブな表示やスタイリング、および関連するWebページの構築に利用されます。
- 音楽・オーディオ: 該当なし - このプロジェクトでは音楽やオーディオ関連の技術は使用していません。
- 開発ツール:
    - GitHub Actions: 複数プロジェクトで再利用可能な共通ワークフローの実行環境として、プロジェクトの核となっています。
    - CodeQL: コードの静的解析ツールであり、特にJavaScript/TypeScriptの関数呼び出し関係の抽出に利用されています。
    - Node.js: 多数の自動化スクリプト（`.cjs`ファイル）の実行環境として使用されています。
    - Python: 大容量ファイルチェックなどの特定のスクリプト（`.py`ファイル）で利用されています。
    - VS Code: 開発環境として推奨され、設定ファイル（`settings.json`）が存在します。
- テスト: 該当なし - 明示的なテストフレームワークや手法に関する記述はありません。
- ビルドツール: 該当なし - 明示的なビルドツールは使用されていませんが、GitHub Actionsが自動化されたプロセスの一部として同様の役割を担うことがあります。
- 言語機能:
    - JavaScript: 自動化スクリプトやWebUIのロジック開発に利用されます。
    - Python: ファイルシステムの操作や特定のユーティリティスクリプトに利用されます。
    - QL (CodeQL Query Language): コードベースから特定のパターンや関係性を抽出するためのクエリ言語です。
    - Markdown: プロジェクトのドキュメントやプロンプトテンプレートの記述に利用されます。
    - CSS: WebUIのスタイル定義に利用されます。
    - HTML: WebUIの構造定義に利用されます。
    - TOML: 設定ファイルの記述形式に利用されます。
- 自動化・CI/CD:
    - GitHub Actions: コードの品質チェック、ドキュメント生成、翻訳、サマリー作成など、プロジェクトの様々な自動化と継続的インテグレーション/デリバリーのプロセスを担います。
- 開発標準: 該当なし - 明示的なコード品質ツールや統一ルールに関する記述はありません。

## ファイル階層ツリー
```
📄 .gitattributes
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
  📖 67.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明
- **`.gitattributes`**: Gitリポジトリで特定のファイルタイプに対する属性（例: 改行コードの扱い、Git LFSの追跡など）を定義します。
- **`.github_automation/`**: GitHub Actionsの共通ワークフローや、それを実行するための各種スクリプトが格納されている主要なディレクトリです。
    - **`callgraph/`**: コードの関数呼び出しグラフを生成するためのツールとスクリプト群を格納します。
        - **`codeql-queries/callgraph.ql`**: CodeQLを使ってJavaScript/TypeScriptのコードから関数呼び出しの関係を抽出するためのクエリです。
        - **`codeql-pack.lock.yml`**: CodeQLパックの依存関係をロックするファイルです。
        - **`qlpack.yml`**: CodeQLパックのメタデータを定義するファイルです。
        - **`config/example.json`**: 呼び出しグラフ生成に関する設定の例が記述されています。
        - **`docs/callgraph.md`**: 呼び出しグラフ機能に関する説明ドキュメントです。
        - **`presets/callgraph.js`**: 呼び出しグラフをWebブラウザ上でインタラクティブに描画するためのJavaScriptコードです。
        - **`presets/style.css`**: 呼び出しグラフの見た目を定義するCSSスタイルシートです。
        - **`scripts/*.cjs`**: CodeQLの分析を実行し、SARIF形式の結果を抽出し、最終的にHTML形式の呼び出しグラフを生成する一連のNode.jsスクリプト群です。
    - **`check-large-files/`**: リポジトリ内の大容量ファイルをチェックする機能に関連するファイル群です。
        - **`README.md`**: 大容量ファイルチェック機能に関する説明ドキュメントです。
        - **`check-large-files.toml.default`**: 大容量ファイルチェックの設定テンプレートファイルです。
        - **`scripts/check_large_files.py`**: 大容量ファイルを検出するためのPythonスクリプトです。
    - **`check_recent_human_commit/scripts/check-recent-human-commit.cjs`**: 最近の人間（ボットではない）によるコミットをチェックするためのNode.jsスクリプトです。
    - **`project_summary/`**: プロジェクトの概要や開発状況を自動生成する機能に関連するファイル群です。
        - **`docs/daily-summary-setup.md`**: 日次サマリーの設定方法に関するドキュメントです。
        - **`prompts/*.md`**: プロジェクト概要や開発状況レポートを生成するためのプロンプト（指示文）のテンプレートです。
        - **`scripts/`**: プロジェクトサマリー生成のコアロジックを担うNode.jsスクリプト群です。
            - **`ProjectSummaryCoordinator.cjs`**: サマリー生成プロセス全体の調整役です。
            - **`development/`**: 開発状況レポート生成に関連するスクリプト群です。
                - **`DevelopmentStatusGenerator.cjs`**: 開発状況を生成します。
                - **`GitUtils.cjs`**: Gitリポジトリ操作のユーティリティ関数を提供します。
                - **`IssueTracker.cjs`**: Issue追跡システムとの連携を扱うユーティリティです。
            - **`generate-project-summary.cjs`**: プロジェクトサマリー生成処理のエントリスクリプトです。
            - **`overview/`**: プロジェクト概要生成に関連するスクリプト群です。
                - **`CodeAnalyzer.cjs`**: コードの静的解析を行い、情報を抽出します。
                - **`ProjectAnalysisOrchestrator.cjs`**: プロジェクト分析プロセスを統括します。
                - **`ProjectDataCollector.cjs`**: プロジェクトに関する様々なデータを収集します。
                - **`ProjectDataFormatter.cjs`**: 収集したデータを整形します。
                - **`ProjectOverviewGenerator.cjs`**: 最終的なプロジェクト概要を生成します。
            - **`shared/`**: 複数の生成機能で共通して使用されるユーティリティスクリプト群です。
                - **`BaseGenerator.cjs`**: 各種ジェネレーターの共通基底クラスです。
                - **`FileSystemUtils.cjs`**: ファイルシステム操作に関するユーティリティ関数を提供します。
                - **`ProjectFileUtils.cjs`**: プロジェクト内のファイル操作に特化したユーティリティ関数を提供します。
    - **`translate/`**: ドキュメントの翻訳機能に関連するファイル群です。
        - **`docs/TRANSLATION_SETUP.md`**: 翻訳機能の設定方法に関するドキュメントです。
        - **`scripts/translate-readme.cjs`**: READMEファイルを自動翻訳するためのNode.jsスクリプトです。
- **`.gitignore`**: Gitがバージョン管理の対象外とするファイルやディレクトリのパターンを指定します。
- **`.vscode/settings.json`**: Visual Studio Codeエディタのワークスペース固有の設定を定義します。
- **`AGENTS.md`**: おそらくAIエージェントの利用や設定に関する情報が記述されたドキュメントです。
- **`LICENSE`**: プロジェクトのライセンス情報が記載されています。
- **`README.ja.md`**: プロジェクトの日本語での説明が記述されたメインドキュメントです。
- **`README.md`**: プロジェクトの英語での説明が記述されたメインドキュメントで、通常`README.ja.md`から自動翻訳されます。
- **`_config.yml`**: GitHub Pagesなどの静的サイトジェネレータの設定ファイルです。
- **`generated-docs/`**: GitHub Actionsによって自動生成されたドキュメントや成果物が格納されるディレクトリです。
    - **`callgraph.html`**: 生成された関数呼び出しグラフをWebブラウザで表示するためのHTMLファイルです。
    - **`callgraph.js`**: `presets/callgraph.js`の内容と同じで、`callgraph.html`内で呼び出しグラフを描画するためのJavaScriptです。
    - **`style.css`**: `presets/style.css`の内容と同じで、`callgraph.html`のスタイルを定義するCSSです。
- **`googled947dc864c270e07.html`**: Google Search Consoleなどのサイト所有権確認に使用されるファイルです。
- **`issue-notes/`**: プロジェクトのIssueに関する個人的なメモなどが格納されている可能性があります。
- **`src/main.js`**: 非常にシンプルなJavaScriptのサンプルファイルで、開発中のテストや機能の基本構造を示す目的で使用されている可能性があります。

## 関数詳細説明
- **`escapeHtml`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: HTMLの特殊文字（例: `<`, `>`, `&`）を対応するHTMLエンティティに変換し、XSS攻撃などを防ぐために文字列を安全にする。
    - 引数: `unsafe` (文字列) - エスケープする文字列。
    - 戻り値: `safe` (文字列) - エスケープされた文字列。
- **`getLayoutConfig`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフ描画ライブラリで使用するレイアウト設定オブジェクトを取得または生成する。
    - 引数: なし。
    - 戻り値: `Object` - レイアウト設定。
- **`placeCentralNode`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフ内の特定のノードを中央に配置する処理を行う。
    - 引数: おそらく`node` (オブジェクト) - 中央に配置するノード。
    - 戻り値: なし。
- **`showNodeInfo`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフ上で選択されたノード（例: 関数）の詳細情報を情報パネルに表示する。
    - 引数: おそらく`node` (オブジェクト) - 情報表示対象のノード。
    - 戻り値: なし。
- **`showEdgeInfo`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフ上で選択されたエッジ（例: 関数呼び出し）の詳細情報を情報パネルに表示する。
    - 引数: おそらく`edge` (オブジェクト) - 情報表示対象のエッジ。
    - 戻り値: なし。
- **`hideInfoPanel`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフの詳細情報表示パネルを隠す。
    - 引数: なし。
    - 戻り値: なし。
- **`showInfoPanel`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフの詳細情報表示パネルを表示する。
    - 引数: なし。
    - 戻り値: なし。
- **`toggleInfoPanel`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフの詳細情報表示パネルの表示/非表示を切り替える。
    - 引数: なし。
    - 戻り値: なし。
- **`generateGitHubURL`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: 指定されたファイルパスや行番号に基づいて、GitHubリポジトリ上の対応するファイルのURLを生成する。
    - 引数: おそらく`filePath` (文字列), `lineNumber` (数値) など。
    - 戻り値: `String` - 生成されたGitHub URL。
- **`resetLayout`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフのレイアウトを初期状態にリセットし、ノードの配置などを再調整する。
    - 引数: なし。
    - 戻り値: なし。
- **`watchNodeMovementAndFixOverlapsWrap`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: `watchNodeMovementAndFixOverlaps`関数のラッパーであり、ノードの移動監視と重なり修正処理をカプセル化する。
    - 引数: おそらく`cy` (Cytoscape.jsインスタンス) など。
    - 戻り値: なし。
- **`watchNodeMovementAndFixOverlaps`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフ内のノードの移動を監視し、他のノードとの重なりが発生した場合に自動的に位置を調整して解消する。
    - 引数: おそらく`cy` (Cytoscape.jsインスタンス) など。
    - 戻り値: なし。
- **`resolveNodeOverlaps`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフ内のノードが互いに重なり合っている状態を検出し、重ならないように位置を調整する。
    - 引数: おそらく`cy` (Cytoscape.jsインスタンス) など。
    - 戻り値: なし。
- **`switchLayout`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフのレイアウトアルゴリズムを別のものに切り替える。
    - 引数: おそらく`layoutName` (文字列) - 切り替えるレイアウトの名前。
    - 戻り値: なし。
- **`resetNodeStates`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフ内の全てのノードの選択状態、ハイライト状態などの視覚的な状態をリセットする。
    - 引数: なし。
    - 戻り値: なし。
- **`fitToContent`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフの表示ズームレベルとパン位置を調整し、全てのノードとエッジが画面内に収まるように表示を最適化する。
    - 引数: なし。
    - 戻り値: なし。
- **`toggleNodeLabels`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフノードのラベル（名前）の表示/非表示を切り替える。
    - 引数: なし。
    - 戻り値: なし。
- **`toggleCalleeLocationFilter`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: 呼び出し先（callee）のファイルロケーションに基づいてグラフ表示をフィルターする機能を切り替える。
    - 引数: なし。
    - 戻り値: なし。
- **`replace`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: 文字列内の特定のパターンを別の文字列に置き換える汎用的な置換処理。
    - 引数: おそらく`target` (文字列), `search` (文字列/RegExp), `replacement` (文字列)。
    - 戻り値: `String` - 置換後の文字列。
- **`switch`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: JavaScriptの制御構造の一部であり、複数の条件分岐を効率的に処理するために使用されるブロック。特定の関数ではなく、コードの構造を指す。
    - 引数: なし (制御構造のため)。
    - 戻り値: なし。
- **`function`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: JavaScriptで関数を定義するためのキーワード。コールバック関数や匿名関数の記述の一部として検出される。特定の関数ではなく、コードの構造を指す。
    - 引数: なし (制御構造のため)。
    - 戻り値: なし。
- **`max`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: 複数の数値の中から最大値を見つけるユーティリティ関数。JavaScriptの`Math.max`に相当する可能性が高い。
    - 引数: 複数の数値。
    - 戻り値: `Number` - 最大値。
- **`on`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: イベントリスナーを要素にアタッチするために使用されるメソッド。jQueryのイベントハンドリングなどでよく見られる。
    - 引数: おそらく`eventName` (文字列), `handler` (関数)。
    - 戻り値: なし。
- **`if`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: JavaScriptの制御構造の一部であり、指定された条件が真の場合にコードブロックを実行するために使用される。特定の関数ではなく、コードの構造を指す。
    - 引数: なし (制御構造のため)。
    - 戻り値: なし。
- **`for`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: JavaScriptの制御構造の一部であり、指定された回数だけコードブロックを繰り返し実行するために使用されるループ構造。特定の関数ではなく、コードの構造を指す。
    - 引数: なし (制御構造のため)。
    - 戻り値: なし。
- **`ready`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: DOM（Document Object Model）が完全にロードされ、操作可能になったときに実行されるイベントハンドラを登録する。jQueryの`$(document).ready()`に相当する可能性が高い。
    - 引数: おそらく`handler` (関数)。
    - 戻り値: なし。
- **`addListener`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: イベントターゲットに特定のイベントのリスナーを追加する。
    - 引数: おそらく`eventName` (文字列), `listener` (関数)。
    - 戻り値: なし。
- **`greet`** (src/main.js):
    - 役割: 引数として受け取った名前を用いて挨拶メッセージを生成する。
    - 引数: `name` (文字列) - 挨拶の対象となる名前。
    - 戻り値: `String` - 生成された挨拶メッセージ（例: "Hello, [name]!"）。
- **`main`** (src/main.js):
    - 役割: プログラムのエントリポイントであり、`greet`関数を呼び出してその結果をコンソールに出力する。
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
Generated at: 2026-04-19 07:10:24 JST

Last updated: 2026-02-09

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド:
    - **HTML**: Webページの構造を定義します。特に、関数呼び出しグラフの可視化 (`generated-docs/callgraph.html`) に使用されています。
    - **CSS**: Webページのスタイル（見た目）を定義します。グラフの視覚スタイル (`.github_automation/callgraph/presets/style.css`, `generated-docs/style.css`) やUIのレイアウトに使用されています。
    - **JavaScript**: 動的なコンテンツやユーザーインタラクションを実装します。関数呼び出しグラフのレンダリング、レイアウト、インタラクション (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`) に広く利用されています。
- 音楽・オーディオ: 該当する技術はありません。
- 開発ツール:
    - **GitHub Actions**: 継続的インテグレーション/デリバリー (CI/CD) やその他の自動化ワークフローを定義・実行するためのプラットフォームです。このプロジェクトの核となる技術であり、共通ワークフローの実行環境として機能します。
    - **CodeQL**: セキュリティ脆弱性やバグを検出するための、GitHubが提供する静的コード解析エンジンです。特に、関数呼び出しグラフの抽出に利用されています。
    - **Node.js**: JavaScriptのサーバーサイド実行環境です。多くの自動化スクリプト (`.cjs` ファイル) の実行基盤として使用されています。
    - **Python**: スクリプト言語で、大容量ファイルチェック (`check_large_files.py`) のような特定の自動化タスクに使用されています。
    - **TOML**: 設定ファイルの記述に使用される簡易なデータ形式です。大容量ファイルチェックの設定例 (`check-large-files.toml.example`) に見られます。
    - **VSCode**: 主要な統合開発環境 (IDE) で、開発者のための設定 (`.vscode/settings.json`) が管理されています。
    - **Gemini API**: GoogleのAIモデルで、READMEファイルの自動翻訳（日本語から英語）に利用されています。
- テスト:
    - **CodeQL**: 静的コード解析を通じて、コード品質や潜在的な問題をテスト的に検出します。
- ビルドツール:
    - **GitHub Actions**: ワークフローの一部として、スクリプトの実行やドキュメントの生成など、間接的なビルド・パース作業をオーケストレーションします。
    - **Node.jsスクリプト**: 各種自動生成やデータ処理 (`.cjs` ファイル) が、Node.js環境下で実行されます。
- 言語機能:
    - **JavaScript**: スクリプトの記述、フロントエンドのインタラクション実装。
    - **Python**: 特定の自動化スクリプト。
    - **CodeQL (QL言語)**: コード解析クエリの記述。
    - **Markdown**: ドキュメント記述、プロンプト定義。
    - **YAML**: GitHub Actionsワークフロー定義。
- 自動化・CI/CD:
    - **GitHub Actions**: プロジェクトのワークフローを自動化し、共通ワークフローとして再利用可能な形式で提供します。翻訳、サマリー生成、コード解析などが自動実行されます。
- 開発標準:
    - **VSCode設定 (`.vscode/settings.json`)**: コードのフォーマット、リンティング、その他の開発環境設定を統一し、コード品質を維持します。
    - **`.gitignore`**: バージョン管理に含めないファイルを定義し、リポジトリの整理とパフォーマンスを保ちます。

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
    📄 check-large-files.toml.example
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
📁 src/
  📜 main.js
```

## ファイル詳細説明

-   **`.github_automation/callgraph/codeql-queries/callgraph.ql`**: CodeQL言語で書かれたクエリファイル。コードベース内の関数呼び出し関係を抽出し、呼び出しグラフを生成するために使用されます。
-   **`.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml`**: CodeQLパックの依存関係をロックするためのファイルで、ビルドの再現性を保証します。
-   **`.github_automation/callgraph/codeql-queries/qlpack.yml`**: CodeQLパックの設定ファイル。クエリのメタデータや依存関係を定義します。
-   **`.github_automation/callgraph/config/example.json`**: 関数呼び出しグラフ生成のための設定例をJSON形式で提供します。
-   **`.github_automation/callgraph/docs/callgraph.md`**: 関数呼び出しグラフ生成機能に関するドキュメント。
-   **`.github_automation/callgraph/presets/callgraph.js`**: 生成された関数呼び出しグラフのレンダリング、レイアウト調整、ユーザーインタラクション（ノード情報表示、レイアウト切り替えなど）を制御するJavaScriptコードです。
-   **`.github_automation/callgraph/presets/style.css`**: 関数呼び出しグラフの視覚的なスタイル（色、フォント、レイアウトなど）を定義するCSSファイルです。
-   **`.github_automation/callgraph/scripts/analyze-codeql.cjs`**: CodeQL解析を実行するためのNode.jsスクリプト。ソースコードからSARIF形式の解析結果を生成します。
-   **`.github_automation/callgraph/scripts/callgraph-utils.cjs`**: 関数呼び出しグラフ関連の共通ユーティリティ関数を集めたNode.jsスクリプト。
-   **`.github_automation/callgraph/scripts/check-codeql-exists.cjs`**: システムにCodeQL CLIがインストールされているかを確認するためのNode.jsスクリプト。
-   **`.github_automation/callgraph/scripts/check-node-version.cjs`**: 実行中のNode.jsのバージョンが特定の要件を満たしているかを確認するためのNode.jsスクリプト。
-   **`.github_automation/callgraph/scripts/common-utils.cjs`**: callgraph機能全体で利用される汎用的なユーティリティ関数群をまとめたNode.jsスクリプト。
-   **`.github_automation/callgraph/scripts/copy-commit-results.cjs`**: コミット結果を特定の場所にコピーするためのNode.jsスクリプト。
-   **`.github_automation/callgraph/scripts/extract-sarif-info.cjs`**: CodeQLの出力形式であるSARIFファイルから必要な情報を抽出するためのNode.jsスクリプト。
-   **`.github_automation/callgraph/scripts/find-process-results.cjs`**: 処理結果ファイルやディレクトリを探索するためのNode.jsスクリプト。
-   **`.github_automation/callgraph/scripts/generate-html-graph.cjs`**: 抽出された呼び出し情報に基づいて、インタラクティブなHTML形式の呼び出しグラフを生成するNode.jsスクリプト。
-   **`.github_automation/callgraph/scripts/generateHTML.cjs`**: HTMLファイルを生成するための汎用的なNode.jsスクリプト。
-   **`.github_automation/check-large-files/README.md`**: 大容量ファイルチェック機能に関する説明ドキュメント。
-   **`.github_automation/check-large-files/check-large-files.toml.example`**: 大容量ファイルチェックの閾値や除外パスなどを設定するためのTOML形式のサンプルファイルです。
-   **`.github_automation/check-large-files/scripts/check_large_files.py`**: Gitリポジトリ内で設定されたサイズを超える大容量ファイルを検出し、レポートするPythonスクリプト。
-   **`.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs`**: 最近のコミットが人間によるものか、または自動化されたものかを判断するのに役立つ情報を取得するNode.jsスクリプト。
-   **`.github_automation/project_summary/docs/daily-summary-setup.md`**: 日次サマリーレポートの設定方法に関するドキュメント。
-   **`.github_automation/project_summary/prompts/development-status-prompt.md`**: 開発状況レポートをAIに生成させるためのプロンプト定義ファイル。
-   **`.github_automation/project_summary/prompts/project-overview-prompt.md`**: プロジェクト概要をAIに生成させるためのプロンプト定義ファイル。
-   **`.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`**: プロジェクトサマリー生成プロセス全体を調整・管理するNode.jsスクリプト。
-   **`.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`**: 現在の開発状況に関するレポートを生成するNode.jsスクリプト。
-   **`.github_automation/project_summary/scripts/development/GitUtils.cjs`**: Gitリポジトリの操作（コミット履歴取得など）を行うためのユーティリティ関数を集めたNode.jsスクリプト。
-   **`.github_automation/project_summary/scripts/generate-project-summary.cjs`**: プロジェクトサマリー（概要、開発状況など）を自動生成するメインのNode.jsスクリプト。
-   **`.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs`**: プロジェクトのソースコードを分析し、構造や統計情報を抽出するNode.jsスクリプト。
-   **`.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs`**: プロジェクトの分析プロセスを調整し、様々なデータ収集・解析ステップを管理するNode.jsスクリプト。
-   **`.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs`**: プロジェクトに関する様々なデータ（ファイル情報、関数情報など）を収集するNode.jsスクリプト。
-   **`.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs`**: 収集したプロジェクトデータを、レポート生成に適した形式に整形するNode.jsスクリプト。
-   **`.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs`**: プロジェクトの全体像を説明する概要ドキュメントを生成するNode.jsスクリプト。
-   **`.github_automation/project_summary/scripts/shared/BaseGenerator.cjs`**: 各種レポートやドキュメントジェネレータの共通基底クラスを提供するNode.jsスクリプト。
-   **`.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs`**: ファイルシステム操作（ファイルの読み書き、ディレクトリ作成など）を行うためのユーティリティ関数を集めたNode.jsスクリプト。
-   **`.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs`**: プロジェクト内のファイルに関する操作や情報取得を行うユーティリティ関数を集めたNode.jsスクリプト。
-   **`.github_automation/translate/docs/TRANSLATION_SETUP.md`**: ドキュメント翻訳機能の設定方法に関するドキュメント。
-   **`.github_automation/translate/scripts/translate-readme.cjs`**: READMEファイルを自動的に翻訳（日本語から英語）するためのNode.jsスクリプト。
-   **`.gitignore`**: Gitがバージョン管理の対象としないファイルやディレクトリを指定する設定ファイルです。
-   **`.vscode/settings.json`**: Visual Studio Codeのワークスペース固有の設定ファイル。コードフォーマット、リンティング、拡張機能の動作などを定義します。
-   **`LICENSE`**: プロジェクトのソフトウェアライセンス情報。
-   **`README.ja.md`**: このリポジトリの日本語版メイン説明ドキュメント。プロジェクトの目的、使い方、構成などが記載されています。
-   **`README.md`**: `README.ja.md`を元にGeminiで自動翻訳された英語版のメイン説明ドキュメント。
-   **`_config.yml`**: GitHub Pagesの設定ファイル。Jekyllを使用している場合にサイトのテーマやプラグイン、メタデータなどを定義します。
-   **`generated-docs/callgraph.html`**: 自動生成された関数呼び出しグラフをブラウザで表示するためのHTMLファイル。
-   **`generated-docs/callgraph.js`**: `generated-docs/callgraph.html`内で使用されるJavaScriptコード。グラフのインタラクションや動的な表示を制御します。
-   **`generated-docs/style.css`**: `generated-docs/callgraph.html`で使用されるスタイルシート。
-   **`googled947dc864c270e07.html`**: Google Search Consoleなどのサイト所有権確認に使用されるHTMLファイル。
-   **`src/main.js`**: サンプルまたはテスト目的の簡易なJavaScriptファイル。

## 関数詳細説明

-   **`escapeHtml`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: HTMLの特殊文字（例: `<`, `>`, `&`）をHTMLエンティティに変換し、XSS攻撃などを防ぎながら安全にHTMLコンテンツを表示できるようにします。
    -   **引数**: `text` (string) - エスケープする文字列。
    -   **戻り値**: エスケープされた文字列 (string)。
    -   **機能**: 文字列中のHTML特殊文字を対応するエンティティに置換します。
-   **`getLayoutConfig`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: グラフの描画レイアウトに関する設定オブジェクトを取得します。
    -   **引数**: なし。
    -   **戻り値**: レイアウト設定を含むオブジェクト (object)。
    -   **機能**: グラフの描画方法や配置に関するパラメータを提供します。
-   **`placeCentralNode`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: グラフ内で特定のノード（中心となる関数など）を中央に配置します。
    -   **引数**: `cy` (Cytoscape.jsインスタンス), `nodeId` (string) - 中央に配置するノードのID。
    -   **戻り値**: なし。
    -   **機能**: 選択されたノードを視覚的に強調し、関連する呼び出し関係を見やすくします。
-   **`showNodeInfo`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: グラフ上のノード（関数）に関する詳細情報をパネルに表示します。
    -   **引数**: `node` (Cytoscape.jsノードオブジェクト)。
    -   **戻り値**: なし。
    -   **機能**: ノードがクリックされた際などに、そのノードの属性（関数名、ファイルパスなど）をユーザーに提示します。
-   **`showEdgeInfo`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: グラフ上のエッジ（関数間の呼び出し関係）に関する詳細情報をパネルに表示します。
    -   **引数**: `edge` (Cytoscape.jsエッジオブジェクト)。
    -   **戻り値**: なし。
    -   **機能**: エッジがクリックされた際などに、そのエッジの属性（呼び出し元、呼び出し先、関係性など）をユーザーに提示します。
-   **`hideInfoPanel`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: グラフに関する情報表示パネルを非表示にします。
    -   **引数**: なし。
    -   **戻り値**: なし。
    -   **機能**: ユーザーが情報パネルを閉じたときなどに、画面をすっきりさせます。
-   **`showInfoPanel`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: グラフに関する情報表示パネルを表示します。
    -   **引数**: なし。
    -   **戻り値**: なし。
    -   **機能**: `showNodeInfo` や `showEdgeInfo` と連携し、情報パネルを可視化します。
-   **`toggleInfoPanel`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: グラフ情報表示パネルの表示状態（表示/非表示）を切り替えます。
    -   **引数**: なし。
    -   **戻り値**: なし。
    -   **機能**: ユーザーがボタンなどを操作してパネルの表示を制御できるようにします。
-   **`generateGitHubURL`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: 指定されたファイルパスや行番号に基づいて、GitHub上のソースコードへのURLを生成します。
    -   **引数**: `filePath` (string), `lineNumber` (number)。
    -   **戻り値**: 生成されたGitHub URL (string)。
    -   **機能**: グラフ上のノードから直接ソースコードへジャンプするリンクを提供します。
-   **`resetLayout`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: グラフのレイアウトを初期状態にリセットします。
    -   **引数**: `cy` (Cytoscape.jsインスタンス)。
    -   **戻り値**: なし。
    -   **機能**: ユーザーがグラフを操作した後に、元のレイアウトに戻りたい場合に利用します。
-   **`watchNodeMovementAndFixOverlapsWrap`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: ノードの動きを監視し、重なりを修正する処理をラップ（包む）する関数。
    -   **引数**: `cy` (Cytoscape.jsインスタンス), `options` (object)。
    -   **戻り値**: なし。
    -   **機能**: `watchNodeMovementAndFixOverlaps` の呼び出しを管理し、処理の開始・停止などを制御します。
-   **`watchNodeMovementAndFixOverlaps`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: グラフノードの移動を監視し、他のノードとの視覚的な重なりが発生した場合に位置を自動調整します。
    -   **引数**: `cy` (Cytoscape.jsインスタンス), `options` (object)。
    -   **戻り値**: なし。
    -   **機能**: ユーザーがノードをドラッグした際などに、見やすいレイアウトを維持します。
-   **`resolveNodeOverlaps`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: 複数のグラフノードが重なっている状態を検出し、重なりを解消するようにノードの位置を調整します。
    -   **引数**: `cy` (Cytoscape.jsインスタンス)。
    -   **戻り値**: なし。
    -   **機能**: グラフの可読性を向上させます。
-   **`switchLayout`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: グラフの描画レイアウトアルゴリズムを切り替えます（例: 円形レイアウト、階層レイアウトなど）。
    -   **引数**: `cy` (Cytoscape.jsインスタンス), `layoutName` (string)。
    -   **戻り値**: なし。
    -   **機能**: ユーザーが異なる視点でグラフを探索できるようにします。
-   **`resetNodeStates`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: グラフ内のノードの強調表示や選択状態などの視覚的な状態をリセットします。
    -   **引数**: `cy` (Cytoscape.jsインスタンス)。
    -   **戻り値**: なし。
    -   **機能**: ユーザーが特定のノードを操作した後、グラフ全体を通常の表示に戻す際に使用します。
-   **`fitToContent`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: グラフ全体が現在のビューポートに収まるように、ズームレベルとパン位置を調整します。
    -   **引数**: `cy` (Cytoscape.jsインスタンス)。
    -   **戻り値**: なし。
    -   **機能**: ユーザーがグラフ全体を一覧したい場合に便利です。
-   **`toggleNodeLabels`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: グラフノードに表示されるラベル（関数名など）の表示・非表示を切り替えます。
    -   **引数**: `cy` (Cytoscape.jsインスタンス)。
    -   **戻り値**: なし。
    -   **機能**: ラベルが多い場合に画面をすっきりさせたり、詳細を確認したい場合に表示したりするのに使われます。
-   **`toggleCalleeLocationFilter`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: 呼び出し先の場所（ファイルパスなど）に基づいてグラフノードをフィルタリングする機能を切り替えます。
    -   **引数**: `cy` (Cytoscape.jsインスタンス)。
    -   **戻り値**: なし。
    -   **機能**: 特定のファイルやモジュールに限定して呼び出し関係を分析したい場合に利用します。
-   **`replace`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: JavaScriptの`String.prototype.replace()`メソッドに相当する汎用的な文字列置換機能。
    -   **引数**: `search` (string or RegExp), `replace` (string or function)。
    -   **戻り値**: 置換後の文字列 (string)。
    -   **機能**: 文字列内の特定のパターンを別の文字列で置き換えます。
-   **`switch`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: 複数の条件分岐を効率的に処理するJavaScriptの制御構造。
    -   **引数**: `expression` (any)。
    -   **戻り値**: なし（実行フローを制御）。
    -   **機能**: 特定の値に基づいて異なるコードブロックを実行します。
-   **`function`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: JavaScriptで関数を定義するためのキーワード。
    -   **引数**: なし (文脈による)。
    -   **戻り値**: なし (文脈による)。
    -   **機能**: 再利用可能なコードブロックを作成し、特定のタスクを実行できるようにします。
-   **`max`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: 複数の数値の中から最大値を取得するJavaScriptの`Math.max()`メソッドに相当する機能。
    -   **引数**: `value1` (number), `value2` (number), ...。
    -   **戻り値**: 最大値 (number)。
    -   **機能**: 数値の比較を行い、最大値を特定します。
-   **`on`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: イベントリスナーを要素にアタッチするためのメソッド（例: jQueryやCytoscape.jsのイベントハンドリング）。
    -   **引数**: `eventName` (string), `handler` (function)。
    -   **戻り値**: イベントをアタッチしたオブジェクト。
    -   **機能**: 特定のイベントが発生したときに指定された関数を実行します。
-   **`if`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: 条件が真である場合にコードブロックを実行するJavaScriptの制御構造。
    -   **引数**: `condition` (boolean)。
    -   **戻り値**: なし（実行フローを制御）。
    -   **機能**: 条件付きでコードを実行します。
-   **`for`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: コードブロックを指定された回数だけ繰り返し実行するJavaScriptの制御構造。
    -   **引数**: 初期化、条件、増減式。
    -   **戻り値**: なし（実行フローを制御）。
    -   **機能**: 配列のイテレーションや繰り返しのタスクに利用されます。
-   **`ready`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: DOM (Document Object Model) の準備が完了したときに指定された関数を実行するためのメソッド（例: jQuery）。
    -   **引数**: `handler` (function)。
    -   **戻り値**: jQueryオブジェクトなど。
    -   **機能**: スクリプトがDOM要素にアクセスする前に、DOMが完全にロードされるのを待ちます。
-   **`addListener`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    -   **役割**: 特定のイベントが発生したときに実行されるイベントリスナーを追加します。
    -   **引数**: `eventName` (string), `handler` (function)。
    -   **戻り値**: なし。
    -   **機能**: ユーザーの操作やシステムイベントに応答して、指定された処理を開始します。
-   **`greet`** (src/main.js):
    -   **役割**: 指定された名前に挨拶する文字列を生成します。
    -   **引数**: `name` (string) - 挨拶の対象となる名前。
    -   **戻り値**: 挨拶メッセージ (string)。
    -   **機能**: 簡単な文字列操作で挨拶文を作成します。
-   **`main`** (src/main.js):
    -   **役割**: アプリケーションのエントリーポイントまたは主要な処理フローを開始する関数。
    -   **引数**: なし。
    -   **戻り値**: なし。
    -   **機能**: `greet` 関数を呼び出し、その結果をコンソールに出力する簡単な処理を実行します。

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
Generated at: 2026-02-09 07:07:49 JST

Last updated: 2026-03-29

# Project Overview

## プロジェクト概要
- 🚀 このプロジェクトは、複数の開発プロジェクトで再利用可能なGitHub Actionsワークフローを共有・管理するための共通ワークフロー集です。
- 🔗 共通化されたワークフローを提供することで、各プロジェクトは呼び出すだけでCI/CDプロセスを簡単に導入・実行できます。
- ✅ ワークフローの一元管理とメンテナンスを可能にし、開発者が個別のプロジェクト開発に集中できる環境を支援します。

## 技術スタック
- フロントエンド:
    - HTML/CSS: 関数呼び出しグラフなどのドキュメント生成や表示に利用。特に`generated-docs`配下にHTML, CSSファイルが存在します。
    - JavaScript: 関数呼び出しグラフのインタラクティブな表示 (`.github_automation/callgraph/presets/callgraph.js`) や、各種自動化スクリプトの開発にNode.js環境で使用されています。
- 音楽・オーディオ: このプロジェクトでは音楽・オーディオ関連技術は使用されていません。
- 開発ツール:
    - GitHub Actions: プロジェクトの核となるCI/CDプラットフォーム。共通ワークフローの実行環境として利用されます。
    - Node.js: 多くの自動化スクリプト (`.cjs`ファイル) の実行環境として使用されます。
    - Python: 大容量ファイルチェック (`.github_automation/check-large-files/scripts/check_large_files.py`) に使用されています。
    - CodeQL: 関数呼び出しグラフの生成のために、静的解析ツールとして利用されます。
- テスト: 明示的なテスト関連技術の記述はありませんが、GitHub Actions内で簡易的なチェックが行われている可能性があります。
- ビルドツール: 明示的なビルドツールは使用されていません。スクリプト実行によるファイル生成が中心です。
- 言語機能:
    - JavaScript (Node.js): スクリプト言語として広範囲にわたる自動化タスクに使用されています。
    - Python: 特定のユーティリティスクリプトに利用されています。
    - YAML: GitHub Actionsのワークフロー定義に利用されます（プロジェクト情報には直接記載されていませんが、GitHub Actions集であるため使用されています）。
- 自動化・CI/CD:
    - GitHub Actions: 継続的インテグレーションおよび継続的デリバリーの自動化プラットフォームとして全面的に活用されています。
- 開発標準:
    - Markdown: ドキュメント記述、プロンプト定義、READMEファイルなど、広範なテキストベースのドキュメントに利用されています。

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
  📖 67.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明
- **`.github_automation/callgraph/codeql-queries/callgraph.ql`**: CodeQLを使用してJavaScriptコードから関数呼び出しグラフを抽出するためのクエリ定義ファイルです。
- **`.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml`**: CodeQLパックの依存関係とそのバージョンをロックするファイルで、ビルドの再現性を保証します。
- **`.github_automation/callgraph/codeql-queries/qlpack.yml`**: CodeQLパックの設定ファイルであり、クエリのメタデータや依存関係を定義します。
- **`.github_automation/callgraph/config/example.json`**: 関数呼び出しグラフ生成ツールの設定例をJSON形式で提供します。
- **`.github_automation/callgraph/docs/callgraph.md`**: 関数呼び出しグラフツールに関する詳細なドキュメントです。
- **`.github_automation/callgraph/presets/callgraph.js`**: 関数呼び出しグラフの表示ロジック、インタラクション、UI要素を制御するJavaScriptコードです。
- **`.github_automation/callgraph/presets/style.css`**: 関数呼び出しグラフの視覚的なスタイルを定義するCSSファイルです。
- **`.github_automation/callgraph/scripts/analyze-codeql.cjs`**: CodeQL解析プロセスを実行し、SARIF形式の結果を生成するためのNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/callgraph-utils.cjs`**: 関数呼び出しグラフの生成と処理に関連する補助的なユーティリティ関数を提供するNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/check-codeql-exists.cjs`**: システムにCodeQLがインストールされているかを確認するためのNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/check-node-version.cjs`**: Node.jsのバージョンが要件を満たしているかを確認するためのNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/common-utils.cjs`**: プロジェクト全体で共通して使用される汎用ユーティリティ関数をまとめたNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/copy-commit-results.cjs`**: Gitコミットに関連する結果やファイルをコピーするためのNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/extract-sarif-info.cjs`**: CodeQL解析によって生成されたSARIFファイルから特定の情報を抽出するためのNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/find-process-results.cjs`**: プロセス実行結果や生成されたファイルを検索するためのNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/generate-html-graph.cjs`**: 抽出されたデータからインタラクティブなHTML形式の関数呼び出しグラフを生成するためのNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/generateHTML.cjs`**: HTMLコンテンツの生成に関する一般的な処理を行うNode.jsスクリプトです。
- **`.github_automation/check-large-files/README.md`**: 大容量ファイルチェックワークフローに関する説明ドキュメントです。
- **`.github_automation/check-large-files/check-large-files.toml.default`**: 大容量ファイルチェックワークフローのデフォルト設定をTOML形式で定義します。
- **`.github_automation/check-large-files/scripts/check_large_files.py`**: Gitリポジトリ内の大容量ファイルを識別し、警告を発するためのPythonスクリプトです。
- **`.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs`**: 最近のコミットが人間によって行われたものか、あるいは特定の条件を満たしているかを確認するためのNode.jsスクリプトです。
- **`.github_automation/project_summary/docs/daily-summary-setup.md`**: 日次サマリー生成機能の設定方法に関するドキュメントです。
- **`.github_automation/project_summary/prompts/development-status-prompt.md`**: 開発状況レポートを生成する際にAIに与えるプロンプトの定義ファイルです。
- **`.github_automation/project_summary/prompts/project-overview-prompt.md`**: プロジェクト概要を生成する際にAIに与えるプロンプトの定義ファイルです。
- **`.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`**: プロジェクトサマリー生成プロセス全体を調整し、各サブコンポーネントを連携させるためのNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`**: プロジェクトの開発状況に関するレポートを生成するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/development/GitUtils.cjs`**: Gitリポジトリの操作（コミット履歴の取得など）に関するユーティリティ関数を提供するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/development/IssueTracker.cjs`**: プロジェクトのIssueトラッキングシステム（例: GitHub Issues）から情報を取得・処理するユーティリティです。
- **`.github_automation/project_summary/scripts/generate-project-summary.cjs`**: プロジェクトサマリー（概要や開発状況など）の生成をトリガーするメインのNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs`**: プロジェクトのコードベースを解析し、構造や統計情報を収集するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs`**: プロジェクトの分析プロセスを調整し、データ収集からレポート生成までを管理するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs`**: プロジェクトに関する様々なデータ（ファイル、コード行数など）を収集するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs`**: 収集したプロジェクトデータを整形し、人間が読みやすい形式や機械が処理しやすい形式に変換するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs`**: 収集・整形されたデータに基づいてプロジェクト概要レポートを生成するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/shared/BaseGenerator.cjs`**: 各種レポートジェネレータが継承する基底クラスで、共通の機能を提供します。
- **`.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs`**: ファイルシステム操作（ファイルの読み書き、ディレクトリ作成など）に関する汎用ユーティリティを提供するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs`**: プロジェクト固有のファイル操作やパス解決に関するユーティリティを提供するNode.jsスクリプトです。
- **`.github_automation/translate/docs/TRANSLATION_SETUP.md`**: READMEファイルなどの翻訳ワークフローを設定するためのドキュメントです。
- **`.github_automation/translate/scripts/translate-readme.cjs`**: READMEファイルを自動的に翻訳するNode.jsスクリプトです。
- **`.gitignore`**: Gitがバージョン管理から無視するファイルやディレクトリのパターンを定義します。
- **`.vscode/settings.json`**: Visual Studio Codeエディタのワークスペース固有の設定を定義します。
- **`AGENTS.md`**: プロジェクトで利用される可能性のある「エージェント」（おそらくAIエージェントや自動化ボット）に関する情報を提供するドキュメントです。
- **`LICENSE`**: プロジェクトのソフトウェアライセンス情報が記載されています。
- **`README.ja.md`**: プロジェクトの目的、使用方法、その他の詳細を日本語で説明するメインドキュメントです。
- **`README.md`**: プロジェクトの目的、使用方法、その他の詳細を英語で説明するメインドキュメントです（`README.ja.md`から自動翻訳されます）。
- **`_config.yml`**: GitHub Pagesなどのサイト生成に関する設定ファイルです。
- **`generated-docs/callgraph.html`**: CodeQLとNode.jsスクリプトによって生成された、インタラクティブな関数呼び出しグラフを表示するHTMLファイルです。
- **`generated-docs/callgraph.js`**: `callgraph.html`で利用される、グラフの描画やインタラクションを制御するJavaScriptファイルです。
- **`generated-docs/style.css`**: `callgraph.html`のスタイルを定義するCSSファイルです。
- **`googled947dc864c270e07.html`**: Googleサイト認証のために配置されるHTMLファイルです。
- **`issue-notes/*.md`**: 開発中の課題や検討事項に関するメモがMarkdown形式で格納されているファイル群です。
- **`src/main.js`**: サンプルまたはテスト用のシンプルなJavaScriptファイルで、基本的な関数定義を含みます。

## 関数詳細説明
- **`escapeHtml`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: HTMLの特殊文字をエスケープし、スクリプトインジェクションなどのセキュリティリスクを防ぐ役割があります。
    - 引数: なし (ただし、通常は文字列を受け取ります)
    - 戻り値: なし (ただし、通常はエスケープされた文字列を返します)
- **`getLayoutConfig`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 関数呼び出しグラフのレイアウト設定を取得し、グラフの描画方法を決定します。
    - 引数: なし
    - 戻り値: なし
- **`placeCentralNode`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフの中央に特定のノードを配置し、視覚的な焦点を設定します。
    - 引数: なし
    - 戻り値: なし
- **`showNodeInfo`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 選択されたノード（関数など）に関する詳細情報をUIパネルに表示します。
    - 引数: なし
    - 戻り値: なし
- **`showEdgeInfo`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 選択されたエッジ（呼び出し関係など）に関する詳細情報をUIパネルに表示します。
    - 引数: なし
    - 戻り値: なし
- **`hideInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 情報表示パネルを非表示にします。
    - 引数: なし
    - 戻り値: なし
- **`showInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 情報表示パネルを表示します。
    - 引数: なし
    - 戻り値: なし
- **`toggleInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 情報表示パネルの表示・非表示を切り替えます。
    - 引数: なし
    - 戻り値: なし
- **`generateGitHubURL`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 特定のファイルやコード行に対応するGitHubリポジトリのURLを生成します。
    - 引数: なし
    - 戻り値: なし
- **`resetLayout`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフのレイアウトを初期状態にリセットします。
    - 引数: なし
    - 戻り値: なし
- **`watchNodeMovementAndFixOverlapsWrap`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: ノードの移動を監視し、その重なりを修正する処理のラッパー関数です。
    - 引数: なし
    - 戻り値: なし
- **`watchNodeMovementAndFixOverlaps`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフ内のノードが移動した際に、他のノードとの重なりを検出し、修正して見やすい配置を維持します。
    - 引数: なし
    - 戻り値: なし
- **`resolveNodeOverlaps`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 複数のノードが視覚的に重なっている場合に、それらを離して配置し、視認性を向上させます。
    - 引数: なし
    - 戻り値: なし
- **`switchLayout`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフの表示レイアウト（例: 円形、グリッドなど）を切り替えます。
    - 引数: なし
    - 戻り値: なし
- **`resetNodeStates`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフ内のノードの状態（選択状態、ハイライトなど）をリセットします。
    - 引数: なし
    - 戻り値: なし
- **`fitToContent`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフ全体がビューポートに収まるようにズームレベルや位置を調整します。
    - 引数: なし
    - 戻り値: なし
- **`toggleNodeLabels`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフノードのラベル（名前）の表示・非表示を切り替えます。
    - 引数: なし
    - 戻り値: なし
- **`toggleCalleeLocationFilter`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 呼び出される関数（Callee）の場所に基づいたフィルターの有効/無効を切り替えます。
    - 引数: なし
    - 戻り値: なし
- **`replace`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 文字列内の特定のパターンを別の文字列で置き換える一般的な処理に使用されます。
    - 引数: なし (通常は検索対象、置換対象、置換後の文字列)
    - 戻り値: なし (通常は置換後の文字列)
- **`switch`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 複数の条件に基づいて異なるコードブロックを実行する制御フロー構造です。
    - 引数: なし (通常は比較対象の値)
    - 戻り値: なし
- **`function`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: JavaScriptにおける関数を定義するためのキーワードです。
    - 引数: なし
    - 戻り値: なし
- **`max`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 複数の値の中から最大値を見つけるために使用される可能性があります。
    - 引数: なし (通常は数値のリスト)
    - 戻り値: なし (通常は最大値)
- **`on`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: イベントリスナーを要素にアタッチするために使用されるjQueryなどのメソッドである可能性が高いです。
    - 引数: なし (通常はイベントタイプ、セレクタ、ハンドラ関数)
    - 戻り値: なし
- **`if`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 条件が真である場合に特定のコードブロックを実行する制御フロー構造です。
    - 引数: なし (通常は評価される条件式)
    - 戻り値: なし
- **`for`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 指定された回数だけコードブロックを繰り返し実行するループ構造です。
    - 引数: なし (通常は初期化、条件、増分式)
    - 戻り値: なし
- **`ready`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: ドキュメントのDOMツリーが完全にロードされ、操作可能になったときに実行されるイベントハンドラを登録するために使用されるjQueryなどのメソッドである可能性が高いです。
    - 引数: なし (通常はイベントハンドラ関数)
    - 戻り値: なし
- **`addListener`** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: イベントリスナーをオブジェクトに登録するために使用されます。
    - 引数: なし (通常はイベントタイプ、リスナー関数)
    - 戻り値: なし
- **`greet`** (`src/main.js`):
    - 役割: シンプルな挨拶メッセージを生成します。
    - 引数: なし
    - 戻り値: なし (通常は文字列を返します)
- **`main`** (`src/main.js`):
    - 役割: プログラムのエントリポイントであり、アプリケーションの主要なロジックを呼び出します。
    - 引数: なし
    - 戻り値: なし

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
Generated at: 2026-03-29 07:07:58 JST

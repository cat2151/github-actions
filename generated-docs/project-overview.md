Last updated: 2025-12-07

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: HTML (動的なドキュメント表示), CSS (スタイル設定), JavaScript (インタラクティブなコールグラフ表示やUI操作に利用)
- 音楽・オーディオ: なし
- 開発ツール: Node.js (自動化スクリプトの実行環境), CodeQL (コードの静的解析ツール), Git (バージョン管理システム), Jekyll (ドキュメントサイト生成ツール), Visual Studio Code (開発環境設定)
- テスト: CodeQL (共通ワークフローの品質を保証するための静的コード解析)
- ビルドツール: なし (GitHub Actionsがワークフローのオーケストレーションと実行を担います)
- 言語機能: JavaScript (自動化スクリプト記述), QL (CodeQLクエリ言語), Markdown (ドキュメント記述)
- 自動化・CI/CD: GitHub Actions (複数プロジェクトで再利用可能な共通ワークフローの実行基盤), Gemini (READMEファイルの自動翻訳サービス)
- 開発標準: Markdown (統一されたドキュメント形式), CodeQL (コード品質ガイドラインとしての活用)

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
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLを利用してJavaScript/TypeScriptコードの関数呼び出しグラフを生成するためのクエリロジックが記述されています。
- **.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係を管理し、ビルドの一貫性を保つためのロックファイルです。
- **.github_automation/callgraph/codeql-queries/qlpack.yml**: CodeQLパックのメタデータや依存関係を定義するファイルです。
- **.github_automation/callgraph/config/example.json**: コールグラフ生成に関連する設定の例が格納されています。
- **.github_automation/callgraph/docs/callgraph.md**: コールグラフ機能に関する詳細なドキュメントです。
- **.github_automation/callgraph/presets/callgraph.js**: ウェブ上でコールグラフをインタラクティブに表示・操作するためのJavaScriptコードが含まれています。ノードの配置、情報表示、レイアウト調整などの機能を提供します。
- **.github_automation/callgraph/presets/style.css**: コールグラフ表示ページの視覚スタイルを定義するCSSファイルです。
- **.github_automation/callgraph/scripts/analyze-codeql.cjs**: CodeQLを実行してコード解析を行い、SARIF形式のレポートを生成するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/callgraph-utils.cjs**: コールグラフの生成と表示に関連する共通ユーティリティ関数を提供するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/check-codeql-exists.cjs**: システムにCodeQLコマンドラインツールが存在するかを確認するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/check-node-version.cjs**: Node.jsのバージョンがプロジェクトの要件を満たしているかを確認するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/common-utils.cjs**: プロジェクト全体で利用される汎用的なユーティリティ関数群を提供するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/copy-commit-results.cjs**: コミットの結果を特定のディレクトリにコピーするNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/extract-sarif-info.cjs**: CodeQLから生成されたSARIFレポートから、コールグラフ作成に必要な情報を抽出するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/find-process-results.cjs**: 特定の処理の結果ファイルを検索し、取得するためのNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/generate-html-graph.cjs**: 抽出されたコード解析情報から、インタラクティブなHTML形式のコールグラフを生成するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/generateHTML.cjs**: HTMLコンテンツを動的に生成するための汎用的なNode.jsスクリプトです。
- **.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs**: 直近のコミットが人間によって行われたものか（自動化されたものではないか）をチェックするNode.jsスクリプトです。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: 日次サマリーレポートの設定方法に関するドキュメントです。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: 開発状況レポートを生成するためのプロンプト（AIへの指示）が定義されたファイルです。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: プロジェクト概要レポートを生成するためのプロンプトが定義されたファイルです。
- **.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs**: プロジェクトサマリー生成プロセス全体の調整役を担うNode.jsスクリプトです。
- **.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs**: プロジェクトの開発状況レポートを自動生成するNode.jsスクリプトです。
- **.github_automation/project_summary/scripts/development/GitUtils.cjs**: Gitリポジトリ操作に関連するユーティリティ関数を提供するNode.jsスクリプトです。
- **.github_automation/project_summary/scripts/development/IssueTracker.cjs**: Issueトラッキングシステムから情報を取得・処理するNode.jsスクリプトです。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: プロジェクトサマリー生成処理を開始するためのメインのNode.jsスクリプトです。
- **.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs**: コードベースを分析し、プロジェクト構造や統計情報を収集するNode.jsスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs**: プロジェクト分析プロセス全体のオーケストレーション（調整と実行）を行うNode.jsスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs**: プロジェクトに関する様々なデータ（ファイル、関数、コミットなど）を収集するNode.jsスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs**: 収集したプロジェクトデータを、レポート生成に適した形式に整形するNode.jsスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs**: プロジェクトの概要レポートを生成するNode.jsスクリプトです。
- **.github_automation/project_summary/scripts/shared/BaseGenerator.cjs**: 各種レポート生成スクリプトが共通して利用する基底クラスや機能を提供するNode.jsスクリプトです。
- **.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs**: ファイルシステム操作（ファイル読み書き、ディレクトリ作成など）に関連するユーティリティ関数を提供するNode.jsスクリプトです。
- **.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs**: プロジェクト固有のファイル操作やパス解決に関連するユーティリティ関数を提供するNode.jsスクリプトです。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: READMEの自動翻訳機能の設定方法に関するドキュメントです。
- **.github_automation/translate/scripts/translate-readme.cjs**: Gemini AIサービスを利用してREADMEファイルを自動的に翻訳するNode.jsスクリプトです。
- **.gitignore**: Gitがバージョン管理の対象としないファイルやディレクトリのパターンを定義するファイルです。
- **.vscode/settings.json**: Visual Studio Codeエディタのワークスペース固有の設定が記述されたファイルです。
- **LICENSE**: このプロジェクトのライセンス情報が記述されています。
- **README.ja.md**: このプロジェクトの日本語版の説明書であり、主要なドキュメントです。
- **README.md**: このプロジェクトの英語版の説明書で、通常は`README.ja.md`から自動翻訳されます。
- **_config.yml**: GitHub Pages（Jekyll）でサイトをホスティングする際の設定ファイルです。
- **generated-docs/callgraph.html**: 生成されたインタラクティブな関数呼び出しグラフを表示するためのHTMLファイルです。
- **generated-docs/callgraph.js**: 生成されたコールグラフの表示ロジックと操作機能を提供するJavaScriptファイル（`presets/callgraph.js`から生成）。
- **generated-docs/style.css**: 生成されたドキュメントのスタイルを定義するCSSファイル（`presets/style.css`から生成）。
- **googled947dc864c270e07.html**: Google Search Consoleのサイト所有権確認に使用されるHTMLファイルです。
- **issue-notes/*.md**: プロジェクトの課題や進捗に関するメモがMarkdown形式で保存されています。
- **src/main.js**: プロジェクトの基本的な機能やサンプルロジックを含む、テスト用のエントリーポイントJavaScriptファイルです。

## 関数詳細説明
- **escapeHtml** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): HTMLの特殊文字を安全な形式にエスケープし、スクリプトインジェクションなどのセキュリティリスクを防ぎます。
- **getLayoutConfig** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): コールグラフのレイアウトに関する設定情報を取得します。
- **placeCentralNode** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): コールグラフの視覚的な中心となるノード（関数など）を特定の位置に配置します。
- **showNodeInfo** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): コールグラフ上の特定のノード（例: 関数）に関する詳細情報を表示します。
- **showEdgeInfo** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): コールグラフ上の特定のエッジ（例: 関数呼び出しの関係）に関する詳細情報を表示します。
- **hideInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): 画面上に表示されている情報パネルを非表示にします。
- **showInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): 画面上に情報パネルを表示します。
- **toggleInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): 情報パネルの表示状態（表示/非表示）を切り替えます。
- **generateGitHubURL** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): コールグラフ内の要素に関連するGitHubリポジトリのURLを生成します。
- **resetLayout** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): コールグラフのレイアウトを初期状態に戻します。
- **watchNodeMovementAndFixOverlapsWrap** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): ノードの動きを監視し、重なりを修正する処理を包括的に管理します。
- **watchNodeMovementAndFixOverlaps** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): コールグラフ内のノードの移動をリアルタイムで監視し、他のノードとの重なりを自動的に解消します。
- **resolveNodeOverlaps** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): 複数のノードが重なっている場合に、それらを適切に配置し直して重なりを解消します。
- **switchLayout** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): コールグラフの表示レイアウト方式（例: 物理シミュレーション、円形など）を切り替えます。
- **resetNodeStates** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): コールグラフ内のノードの選択状態や強調表示などを初期状態にリセットします。
- **fitToContent** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): コールグラフ全体がビューポート内に収まるようにズームレベルと位置を自動調整します。
- **toggleNodeLabels** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): コールグラフ内のノードに表示されるラベル（名前）の表示/非表示を切り替えます。
- **toggleCalleeLocationFilter** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): 呼び出される関数（callee）の場所に基づいてコールグラフをフィルタリングする機能を有効/無効にします。
- **replace** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): 文字列の置換操作を行います。
- **switch** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): JavaScriptの`switch`文による条件分岐処理です。
- **function** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): JavaScriptにおける関数定義、または無名関数を指します。
- **max** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): 数値の最大値を計算する汎用的な処理です。
- **on** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): イベントリスナーを設定する際に使用される汎用的なイベントハンドリング関数です。
- **if** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): JavaScriptの`if`文による条件分岐処理です。
- **for** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): JavaScriptの`for`文による繰り返し処理です。
- **ready** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): ドキュメントが完全に読み込まれ、操作可能になった時に実行される処理（jQueryなどでよく利用）を定義します。
- **addListener** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`): 特定のイベントに対するイベントリスナーを追加します。
- **greet** (`src/main.js`): 挨拶メッセージを生成して返します。
- **main** (`src/main.js`): プログラムの主要な処理を実行するエントリーポイント関数です。

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
Generated at: 2025-12-07 07:05:36 JST

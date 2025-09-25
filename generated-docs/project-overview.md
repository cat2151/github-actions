Last updated: 2025-09-25

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: 該当なし (本プロジェクトは共通ワークフロー集であり、直接的なフロントエンド技術は使用していません)
- 音楽・オーディオ: 該当なし (本プロジェクトの主要な機能として音楽・オーディオ関連技術は使用していません)
- 開発ツール:
    - Node.js runtime: JavaScriptの実行環境として、GitHub Actionsのスクリプト実行に利用されています。
- テスト: 該当なし (テストに関する特定のフレームワークやツールは明記されていません)
- ビルドツール: 該当なし (本プロジェクトは共通ワークフロー集であり、特定のアプリケーションのビルドツールは使用していません)
- 言語機能: 該当なし (特定の言語仕様や機能に特化した説明は記載されていません)
- 自動化・CI/CD:
    - GitHub Actions: 複数プロジェクトで再利用可能なCI/CDワークフローを定義し、自動化を実現するための主要なプラットフォームです。プロジェクト要約自動生成、Issue自動管理、README多言語翻訳、i18n自動翻訳などのワークフローが含まれています。
- 開発標準: 該当なし (コード品質や統一ルールに関する特定の技術やツールは明記されていません)

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
  📖 27.md
  📖 28.md
  📖 3.md
  📖 4.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明
- **.github_automation/**: GitHub Actionsの共通ワークフローや関連スクリプトを格納する主要ディレクトリです。
    - **callgraph/**: コードの関数呼び出しグラフを生成する機能に関連するファイル群です。
        - `callgraph.ql`: CodeQLクエリファイル。コードベースから呼び出しグラフ情報を抽出するために使用されます。
        - `codeql-pack.lock.yml`, `qlpack.yml`: CodeQLパックの設定ファイル。
        - `example.json`: callgraph機能の設定例。
        - `callgraph.md`: callgraph機能に関するドキュメント。
        - `callgraph.js`: 生成された呼び出しグラフをブラウザで表示するためのJavaScriptロジック（UI操作、レイアウトなど）。
        - `style.css`: 呼び出しグラフ表示のスタイリング定義。
        - `analyze-codeql.cjs`: CodeQLを用いてコードを解析し、呼び出しグラフデータを生成するスクリプト。
        - `generate-html-graph.cjs`, `generateHTML.cjs`: 抽出されたデータからHTML形式の呼び出しグラフを生成するスクリプト。
        - その他のスクリプト (`callgraph-utils.cjs`, `check-codeql-exists.cjs`, `check-node-version.cjs`, `common-utils.cjs`, `copy-commit-results.cjs`, `extract-sarif-info.cjs`, `find-process-results.cjs`): callgraph生成プロセスを支援するユーティリティスクリプト群。
    - **check_recent_human_commit/scripts/check-recent-human-commit.cjs**: 最近の人間によるコミット（ボット以外のコミット）をチェックするためのスクリプト。特定の条件でワークフローの実行を制御する際に利用されます。
    - **project_summary/**: プロジェクトの概要や開発状況を自動生成する機能に関連するファイル群です。
        - `daily-summary-setup.md`, `development-status-prompt.md`, `project-overview-prompt.md`: プロジェクト概要生成機能のセットアップガイドや、プロンプトのテンプレート。
        - `ProjectSummaryCoordinator.cjs`, `generate-project-summary.cjs`: プロジェクト概要生成の全体の流れを調整・実行するスクリプト。
        - `development/DevelopmentStatusGenerator.cjs`: 開発状況レポートを生成するスクリプト。
        - `development/GitUtils.cjs`: Gitリポジトリ操作に関するユーティリティ。
        - `development/IssueTracker.cjs`: Issueトラッキングに関するユーティリティ。
        - `overview/CodeAnalyzer.cjs`: コードベースを分析するスクリプト。
        - `overview/ProjectAnalysisOrchestrator.cjs`: プロジェクト分析プロセスの調整役。
        - `overview/ProjectDataCollector.cjs`: プロジェクトデータを収集するスクリプト。
        - `overview/ProjectDataFormatter.cjs`: 収集したデータを整形するスクリプト。
        - `overview/ProjectOverviewGenerator.cjs`: プロジェクト概要を生成するスクリプト。
        - `overview/TechStackAnalyzer.cjs`: プロジェクトの技術スタックを分析するスクリプト。
        - `shared/BaseGenerator.cjs`, `shared/FileSystemUtils.cjs`, `shared/ProjectFileUtils.cjs`: 各生成スクリプト間で共有される共通のユーティリティ。
    - **translate/scripts/translate-readme.cjs**: READMEファイルを多言語に自動翻訳するためのスクリプト。
    - **translate/docs/TRANSLATION_SETUP.md**: 翻訳機能のセットアップガイド。
- **.gitignore**: Gitの管理対象から除外するファイルやディレクトリを指定します。
- **.vscode/settings.json**: VS Codeエディタのワークスペース設定ファイル。
- **LICENSE**: 本プロジェクトのライセンス情報。
- **README.ja.md**, **README.md**: プロジェクトの説明ドキュメント（日本語版と英語版）。
- **generated-docs/**: `callgraph`ワークフローによって生成されたHTML形式の呼び出しグラフ、関連するJavaScript、CSSファイルが格納されます。
- **issue-notes/**: GitHub Issuesに関するメモや詳細情報がMarkdown形式で保存されています。
- **src/main.js**: プロジェクトのサンプルまたはテスト用のJavaScriptファイル。

## 関数詳細説明
- **greet()** (`src/main.js`):
    - 役割: コンソールに挨拶メッセージを出力します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: "Hello, GitHub Actions Common Workflows!"という文字列をコンソールに表示します。
- **main()** (`src/main.js`):
    - 役割: プログラムのエントリーポイントとして機能し、`greet`関数を呼び出します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: `greet`関数を実行します。
- **escapeHtml(unsafe)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: HTML特殊文字をエスケープし、XSS攻撃を防ぐための安全な文字列を生成します。
    - 引数: `unsafe` (文字列) - エスケープ対象の文字列。
    - 戻り値: エスケープされた文字列。
    - 機能: HTMLエンティティに変換することで、ブラウザでの予期せぬスクリプト実行などを防ぎます。
- **getLayoutConfig()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフのレイアウト設定を取得または定義します。
    - 引数: なし。
    - 戻り値: レイアウト設定オブジェクト。
    - 機能: 呼び出しグラフの視覚的な配置に関するパラメータを提供します。
- **placeCentralNode(cy, selector)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 指定されたセレクタに一致するノードをグラフの中央に配置します。
    - 引数: `cy` (Cytoscape.jsインスタンス), `selector` (文字列) - 中央に配置するノードのセレクタ。
    - 戻り値: なし。
    - 機能: 特定の関数やファイルを中心にしてグラフを見やすくします。
- **showNodeInfo(node)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 特定のノード（関数など）の詳細情報を情報パネルに表示します。
    - 引数: `node` (Cytoscape.jsノードオブジェクト) - 情報表示対象のノード。
    - 戻り値: なし。
    - 機能: ノードの属性（名前、ファイルパス、行番号など）をユーザーインターフェースに表示します。
- **showEdgeInfo(edge)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 特定のエッジ（呼び出し関係）の詳細情報を情報パネルに表示します。
    - 引数: `edge` (Cytoscape.jsエッジオブジェクト) - 情報表示対象のエッジ。
    - 戻り値: なし。
    - 機能: 呼び出し元と呼び出し先の関係性や、呼び出しが行われた場所などの情報を表示します。
- **hideInfoPanel()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 情報パネルを非表示にします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザーがパネルを閉じる、または他の情報を表示する際に呼び出されます。
- **showInfoPanel()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 情報パネルを表示します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ノードやエッジがクリックされた際などに情報パネルを表示します。
- **toggleInfoPanel()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 情報パネルの表示・非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: パネルの現在の状態に応じて表示・非表示を反転させます。
- **generateGitHubURL(filePath, line)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: ファイルパスと行番号からGitHubリポジトリの該当ファイルへのURLを生成します。
    - 引数: `filePath` (文字列) - ファイルのパス, `line` (数値) - 行番号。
    - 戻り値: GitHubリポジトリへのURL文字列。
    - 機能: コードの特定の箇所へ直接ジャンプできるリンクを生成します。
- **resetLayout(cy)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフのレイアウトを初期状態にリセットします。
    - 引数: `cy` (Cytoscape.jsインスタンス)。
    - 戻り値: なし。
    - 機能: ユーザーによる変更やズームを元に戻し、デフォルトの表示に戻します。
- **watchNodeMovementAndFixOverlapsWrap(cy, layoutOptions)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: ノードの動きを監視し、重なりを修正する処理をラップします。
    - 引数: `cy` (Cytoscape.jsインスタンス), `layoutOptions` (オブジェクト) - レイアウトオプション。
    - 戻り値: なし。
    - 機能: `watchNodeMovementAndFixOverlaps`関数を適切に呼び出すためのラッパー関数。
- **watchNodeMovementAndFixOverlaps(cy, layoutOptions)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ内のノードが動いた際に、ノード間の重なりを検出し、修正を試みます。
    - 引数: `cy` (Cytoscape.jsインスタンス), `layoutOptions` (オブジェクト) - レイアウトオプション。
    - 戻り値: なし。
    - 機能: グラフの視認性を高めるため、ノードが重なり合わないように調整します。
- **resolveNodeOverlaps(cy, overlappingNodes, padding)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 重なっているノードのグループを受け取り、それらの位置を調整して重なりを解消します。
    - 引数: `cy` (Cytoscape.jsインスタンス), `overlappingNodes` (Cytoscape.jsノードコレクション), `padding` (数値) - ノード間の最小余白。
    - 戻り値: なし。
    - 機能: ノードを物理的に移動させて重なりを回避します。
- **switchLayout(cy, layoutName)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフのレイアウトアルゴリズムを切り替えます。
    - 引数: `cy` (Cytoscape.jsインスタンス), `layoutName` (文字列) - 適用するレイアウトの名前。
    - 戻り値: なし。
    - 機能: ユーザーが異なる視覚的表現でグラフを探索できるようにします。
- **resetNodeStates(cy)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 全てのノードのスタイル状態（ハイライトなど）をリセットします。
    - 引数: `cy` (Cytoscape.jsインスタンス)。
    - 戻り値: なし。
    - 機能: グラフの選択状態や強調表示をクリアし、デフォルトの状態に戻します。
- **fitToContent(cy)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ全体がビューポートに収まるようにズームレベルとパンを調整します。
    - 引数: `cy` (Cytoscape.jsインスタンス)。
    - 戻り値: なし。
    - 機能: グラフ全体を一目で確認できるように表示を最適化します。
- **toggleNodeLabels(cy)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: ノードのラベル（関数名など）の表示/非表示を切り替えます。
    - 引数: `cy` (Cytoscape.jsインスタンス)。
    - 戻り値: なし。
    - 機能: ラベルの有無を選択できるようにすることで、ユーザーがグラフの視認性を調整できるようにします。
- **toggleCalleeLocationFilter(cy)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 呼び出し先の場所（ファイルパス）に基づいてノードをフィルタリングする機能を切り替えます。
    - 引数: `cy` (Cytoscape.jsインスタンス)。
    - 戻り値: なし。
    - 機能: 特定のファイル内の関数のみを表示するなど、複雑なグラフの探索を補助します。

## 関数呼び出し階層ツリー
```
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
- greet ()
- main ()
  - greet ()
```

---
Generated at: 2025-09-25 07:05:44 JST

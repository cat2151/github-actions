Last updated: 2025-09-01

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド:
  - **HTML/CSS/JavaScript**: コードコールグラフ可視化のためのWebページ(`generated-docs/callgraph.html`, `generated-docs/callgraph.js`, `generated-docs/style.css`)の構築に用いられています。
- 開発ツール:
  - **Node.js runtime**: GitHub Actionsのスクリプト実行環境として利用。
  - **npm scripts**: パッケージ管理およびタスクランナーとして使用。
  - **Google Generative AI (@google/generative-ai)**: プロジェクト要約などのAIによる文書生成機能のサポートに利用。
  - **@octokit/rest**: GitHub APIと連携し、Issue管理やリポジトリ情報の取得に利用。
  - **CodeQL**: コードベースのセキュリティ脆弱性やバグを検出するための静的解析ツール。特に関数呼び出しグラフの生成に利用されています。
- テスト:
  - このプロジェクトでは直接的なテストフレームワークは明記されていません。
- ビルドツール:
  - このプロジェクトでは直接的なビルドツールは明記されていません。
- 言語機能:
  - **JavaScript / ECMAScript**: プロジェクトの主要なスクリプト言語として使用。CommonJSモジュール形式で実装されています。
- 自動化・CI/CD:
  - **GitHub Actions**: プロジェクトの自動化（CI/CD）の中心。以下の共通ワークフローが含まれます。
    - プロジェクト要約自動生成
    - Issue自動管理
    - README多言語翻訳
    - i18n automation (自動翻訳ワークフロー)
- 開発標準:
  - このプロジェクトでは直接的なコード品質・統一ルール関連ツールは明記されていません。

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
- **`.github_automation/callgraph/codeql-queries/callgraph.ql`**: CodeQLによってプロジェクト内の関数呼び出し関係を分析し、呼び出しグラフを生成するためのクエリロジックを定義します。
- **`.github_automation/callgraph/presets/callgraph.js`**: 生成された呼び出しグラフをブラウザで表示するためのJavaScriptロジックが含まれています。グラフのレンダリング、インタラクション、レイアウト調整などを担当します。
- **`.github_automation/callgraph/presets/style.css`**: 呼び出しグラフの視覚的なスタイルを定義するCSSファイルです。
- **`.github_automation/callgraph/scripts/*.cjs`**: CodeQL解析の実行、結果の処理、HTMLグラフの生成など、呼び出しグラフ関連の自動化タスクを実行するNode.jsスクリプト群です。
  - `analyze-codeql.cjs`: CodeQL解析を実行するスクリプト。
  - `callgraph-utils.cjs`: 呼び出しグラフ生成に関するユーティリティ関数。
  - `generate-html-graph.cjs`: 解析結果からHTML形式の呼び出しグラフを生成するスクリプト。
- **`.github_automation/project_summary/prompts/*.md`**: AIによるプロジェクト要約生成時に使用されるプロンプトのテンプレートファイルです。
  - `development-status-prompt.md`: 開発状況の要約に使用するプロンプト。
  - `project-overview-prompt.md`: プロジェクト概要の生成に使用するプロンプト。
- **`.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`**: プロジェクト要約生成プロセス全体を調整し、各種分析スクリプトと連携して最終的な要約を生成します。
- **`.github_automation/project_summary/scripts/development/*.cjs`**: 開発状況の追跡と要約に関連するスクリプト群です。
  - `DevelopmentStatusGenerator.cjs`: 開発状況レポートを生成します。
  - `GitUtils.cjs`: Gitリポジトリ操作に関するユーティリティ関数を提供します。
  - `IssueTracker.cjs`: GitHub Issuesの情報を取得・追跡します。
- **`.github_automation/project_summary/scripts/overview/*.cjs`**: プロジェクト概要生成のためのコード分析やデータ収集を行うスクリプト群です。
  - `CodeAnalyzer.cjs`: コードベースを分析し、構造や統計情報を抽出します。
  - `ProjectAnalysisOrchestrator.cjs`: プロジェクト分析プロセス全体を調整します。
  - `ProjectDataCollector.cjs`: プロジェクトに関連する各種データを収集します。
  - `ProjectOverviewGenerator.cjs`: 収集したデータと分析結果に基づいてプロジェクト概要を生成します。
  - `TechStackAnalyzer.cjs`: プロジェクトで使用されている技術スタックを特定・分析します。
- **`.github_automation/project_summary/scripts/shared/*.cjs`**: 要約生成スクリプト間で共有される共通ユーティリティ関数が含まれます。
  - `BaseGenerator.cjs`: 各種ジェネレーターの基底クラス。
  - `FileSystemUtils.cjs`: ファイルシステム操作に関するユーティリティ関数。
- **`.github_automation/translate/scripts/translate-readme.cjs`**: READMEファイルなどのコンテンツを多言語に自動翻訳するためのスクリプトです。
- **`generated-docs/callgraph.html`**: 生成された関数呼び出しグラフをWebブラウザで表示するためのHTMLファイルです。
- **`generated-docs/callgraph.js`**: `callgraph.html`で使用されるJavaScriptで、グラフのインタラクティブな表示ロジックが含まれます。`.github_automation/callgraph/presets/callgraph.js`と同じ内容です。
- **`generated-docs/style.css`**: `callgraph.html`で使用されるCSSで、グラフのスタイルを定義します。`.github_automation/callgraph/presets/style.css`と同じ内容です。
- **`generated-docs/*.md`**: AIによって生成されたプロジェクト要約や開発状況レポートの出力先ファイルです。
- **`issue-notes/*.md`**: Issueに関するメモや詳細情報が格納されているファイルです。
- **`package.json`**: プロジェクトのメタデータ（名前、説明、スクリプト、依存関係など）を定義するファイルです。
- **`package-lock.json`**: `package.json`で定義された依存関係の具体的なバージョンをロックするためのファイルです。
- **`README.md` / `README.ja.md`**: プロジェクトの概要、使い方、貢献方法などを説明するドキュメントファイル（英語/日本語）。
- **`src/main.js`**: プロジェクトのエントリーポイントとなるJavaScriptファイル。シンプルな例示的な関数が含まれています。

## 関数詳細説明
- **`escapeHtml(str)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: HTMLの特殊文字をエスケープし、スクリプト挿入などの潜在的なセキュリティリスクを防ぎます。
  - 引数: `str` (string) - エスケープする文字列。
  - 戻り値: (string) - エスケープされた文字列。
- **`getLayoutConfig()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフのレイアウト設定オブジェクトを生成・取得します。Cytoscape.jsなどのグラフライブラリで使用される設定を返します。
  - 引数: なし。
  - 戻り値: (object) - グラフのレイアウト設定オブジェクト。
- **`placeCentralNode(cy, node)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフの中心に特定のノードを配置するためのロジックを提供します。
  - 引数: `cy` (object) - Cytoscape.jsインスタンス、`node` (object) - 配置するノードオブジェクト。
  - 戻り値: なし。
- **`showNodeInfo(node)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 特定のグラフノード（関数など）に関する詳細情報をパネルに表示します。
  - 引数: `node` (object) - 情報表示対象のノードオブジェクト。
  - 戻り値: なし。
- **`showEdgeInfo(edge)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 特定のグラフエッジ（呼び出し関係など）に関する詳細情報をパネルに表示します。
  - 引数: `edge` (object) - 情報表示対象のエッジオブジェクト。
  - 戻り値: なし。
- **`hideInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフの詳細情報パネルを非表示にします。
  - 引数: なし。
  - 戻り値: なし。
- **`showInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフの詳細情報パネルを表示します。
  - 引数: なし。
  - 戻り値: なし。
- **`toggleInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフの詳細情報パネルの表示・非表示を切り替えます。
  - 引数: なし。
  - 戻り値: なし。
- **`generateGitHubURL(filePath, startLine, endLine)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: ファイルパスと行番号に基づいて、GitHub上の該当コードへのURLを生成します。
  - 引数: `filePath` (string), `startLine` (number), `endLine` (number)。
  - 戻り値: (string) - 生成されたGitHub URL。
- **`resetLayout()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフのレイアウトを初期状態にリセットします。
  - 引数: なし。
  - 戻り値: なし。
- **`switchLayout(layoutName)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフのレイアウトアルゴリズムを切り替えます。
  - 引数: `layoutName` (string) - 適用するレイアウトアルゴリズムの名前。
  - 戻り値: なし。
- **`greet(name)`** (`src/main.js`)
  - 役割: 指定された名前で挨拶メッセージをコンソールに出力します。
  - 引数: `name` (string) - 挨拶する対象の名前。
  - 戻り値: なし。
- **`main()`** (`src/main.js`)
  - 役割: アプリケーションのエントリーポイントとして機能し、`greet`関数を呼び出します。
  - 引数: なし。
  - 戻り値: なし。

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
- main (src/main.js)
  - greet (src/main.js)

---
Generated at: 2025-09-01 07:04:55 JST

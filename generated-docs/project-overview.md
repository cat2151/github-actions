Last updated: 2025-08-22

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽にし、共通化されたワークフローを提供します
- 🔗 どのプロジェクトからも共通ワークフローを呼び出すだけでCI/CDプロセスを構築できます
- ✅ ワークフローのメンテナンスは一括で行え、プロジェクト開発に集中できる環境を支援します

## 技術スタック
- フロントエンド: このプロジェクトはGitHub Actionsのワークフロー集であり、エンドユーザー向けの直接的なフロントエンドアプリケーションは持ちません。ただし、生成される関数呼び出しグラフ（`generated-docs/callgraph.html`）はWebブラウザで表示され、そのインタラクティブな機能にはJavaScriptとCSSが用いられます。
- 音楽・オーディオ: (提供情報に記載がありますが、本プロジェクトの主目的であるCI/CDワークフローとは直接関連しません)
    - Tone.js: Web Audio APIを抽象化し、ブラウザ上で高度な音声処理を行うためのJavaScriptライブラリ。
    - Web Audio API: Webブラウザに組み込まれた音声処理APIで、Tone.jsを通じて利用されます。
    - MML (Music Macro Language): 音楽をテキスト形式で記述するための記法パーサー。
- 開発ツール:
    - Node.js runtime: JavaScriptコードの実行環境。主にGitHub Actionsワークフロー内のスクリプト実行に使用されます。
    - npm scripts: `package.json`で定義されたスクリプトを実行し、タスク自動化や依存関係管理を行います。
    - Google Generative AI: プロジェクトの概要や開発状況レポートなどをAIが自動生成するために利用されます。
    - @octokit/rest: GitHub APIと連携し、リポジトリ情報の取得やIssue操作などを行います。
- テスト: 明示的なテストフレームワークの記述はありませんが、GitHub Actionsワークフロー自体がCI/CDのテスト機能を内包しています。
- ビルドツール: 特筆すべき専用のビルドツールはありません。Node.js環境でのスクリプト実行とnpmによる依存関係解決が中心です。
- 言語機能:
    - JavaScript (Node.js): プロジェクトのスクリプト開発における主要言語として使用されます。
    - CodeQL: コードベースのセキュリティ脆弱性やバグを特定し、関数呼び出しグラフを生成するための静的解析エンジン。
- 自動化・CI/CD:
    - GitHub Actions: 本プロジェクトの中核となるCI/CDプラットフォーム。共通ワークフローとして、プロジェクト要約自動生成、Issue自動管理、README多言語翻訳、i18n自動化などが提供されます。
- 開発標準: 明示的な開発標準ツール（リンター、フォーマッター）の記述はありません。

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
📄 LICENSE
📖 README.ja.md
📖 README.md
📁 generated-docs/
  🌐 callgraph.html
  📜 callgraph.js
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
  📖 2.md
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
- **`.github_automation/callgraph/` 配下**: プロジェクトの関数呼び出しグラフを生成・表示するための関連ファイル群。
    - `codeql-queries/callgraph.ql`: CodeQLで関数呼び出し関係を抽出するためのクエリ。
    - `codeql-queries/codeql-pack.lock.yml`, `qlpack.yml`: CodeQLパックの依存関係と設定ファイル。
    - `config/example.json`: 関数呼び出しグラフ生成のための設定例。
    - `docs/callgraph.md`: 関数呼び出しグラフ機能に関する説明ドキュメント。
    - `presets/callgraph.js`: 生成されたHTML形式の呼び出しグラフをインタラクティブに操作するためのJavaScriptコード。ノードの配置、情報表示、レイアウト調整などの機能を提供します。
    - `presets/style.css`: 生成された呼び出しグラフのHTMLに適用されるスタイルシート。
    - `scripts/`: CodeQL解析の実行、結果の処理、HTMLグラフの生成などを行う各種ユーティリティスクリプト。
        - `analyze-codeql.cjs`: CodeQLによるソースコード解析を実行し、SARIF形式の結果を処理。
        - `callgraph-utils.cjs`: 呼び出しグラフ関連の共通ユーティリティ関数。
        - `generate-html-graph.cjs`: CodeQLの解析結果からHTML形式の関数呼び出しグラフを生成。
        - `generateHTML.cjs`: 汎用的なHTMLファイル生成ユーティリティ。
- **`.github_automation/project_summary/` 配下**: AIによるプロジェクト要約や開発状況レポートの自動生成に関連するファイル群。
    - `docs/daily-summary-setup.md`: 日次サマリー生成機能のセットアップガイド。
    - `prompts/`: AIの応答を導くためのプロンプト定義ファイル。
        - `development-status-prompt.md`: 開発状況レポート生成用のプロンプト。
        - `project-overview-prompt.md`: プロジェクト概要生成用のプロンプト。
    - `scripts/`: プロジェクト要約生成の主要ロジックを含むスクリプト群。
        - `ProjectSummaryCoordinator.cjs`: プロジェクト要約生成プロセスの全体を調整。
        - `development/`: 開発状況レポートに関連するスクリプト。
            - `DevelopmentStatusGenerator.cjs`: 開発状況レポートを生成。
            - `GitUtils.cjs`: Gitリポジトリ操作のユーティリティ。
            - `IssueTracker.cjs`: Issue追跡に関連する機能。
        - `generate-project-summary.cjs`: プロジェクト要約生成のメインエントリポイント。
        - `overview/`: プロジェクト概要生成に関連するスクリプト。
            - `CodeAnalyzer.cjs`: コードベースの構造や内容を解析。
            - `ProjectAnalysisOrchestrator.cjs`: プロジェクト解析プロセスのオーケストレーション。
            - `ProjectDataCollector.cjs`: プロジェクト関連データを収集。
            - `ProjectDataFormatter.cjs`: 収集したデータを整形。
            - `ProjectOverviewGenerator.cjs`: 最終的なプロジェクト概要を生成。
            - `TechStackAnalyzer.cjs`: 使用されている技術スタックを分析。
        - `shared/`: 複数のスクリプトで共有される共通ユーティリティ。
            - `BaseGenerator.cjs`: 各種ジェネレータの基底クラス。
            - `FileSystemUtils.cjs`: ファイルシステム操作のユーティリティ。
- **`.github_automation/translate/` 配下**: READMEファイルの多言語翻訳に関連するファイル群。
    - `docs/TRANSLATION_SETUP.md`: 翻訳機能のセットアップガイド。
    - `scripts/translate-readme.cjs`: READMEファイルを自動翻訳するスクリプト。
- **リポジトリルートのファイル**:
    - `.gitignore`: Gitが追跡しないファイルやディレクトリを指定。
    - `LICENSE`: プロジェクトのライセンス情報。
    - `README.ja.md`: プロジェクトの日本語版説明ドキュメント。
    - `README.md`: プロジェクトの英語版（メイン）説明ドキュメント。
- **`generated-docs/` 配下**: GitHub Actionsによって自動生成されるドキュメントやリソース。
    - `callgraph.html`, `callgraph.js`, `style.css`: 生成された関数呼び出しグラフのHTMLと、その表示・操作のためのJavaScriptおよびCSS。
    - `development-status.md`: AIによって生成された開発状況レポート。
    - `project-overview.md`: AIによって生成されたプロジェクト概要。
- **`issue-notes/` 配下**: Issueに関連するメモや詳細情報がMarkdown形式で格納されるディレクトリ。
- **`package-lock.json`**: `package.json`に記述された依存関係の具体的なバージョンと依存ツリーを固定し、再現可能なビルドを保証します。
- **`package.json`**: プロジェクトのメタデータ（名前、バージョン、説明など）と、Node.jsの依存関係、スクリプトコマンドを定義します。
- **`src/main.js`**: プロジェクトの簡単な実行例またはエントリポイントとなるJavaScriptファイル。

## 関数詳細説明
- **`.github_automation/callgraph/presets/callgraph.js` および `generated-docs/callgraph.js` 内の関数**:
    - `escapeHtml(html)`: HTML文字列に含まれる特殊文字をエスケープし、セキュリティを向上させます。
    - `getLayoutConfig()`: グラフのレイアウトに関する設定情報を取得します。
    - `placeCentralNode()`: グラフの中心となるノードを配置します。
    - `showNodeInfo()`: 特定のノードが選択された際に、そのノードの詳細情報を表示するパネルを操作します。
    - `showEdgeInfo()`: グラフ上のエッジ（接続線）が選択された際に、そのエッジの詳細情報を表示するパネルを操作します。
    - `hideInfoPanel()`: 現在表示されている情報パネルを非表示にします。
    - `showInfoPanel()`: 情報パネルを表示します。
    - `toggleInfoPanel()`: 情報パネルの表示・非表示を切り替えます。
    - `generateGitHubURL()`: GitHubリポジトリ内のファイルやコードへのURLを生成します。
    - `resetLayout()`: グラフのレイアウトを初期状態にリセットします。
    - `watchNodeMovementAndFixOverlapsWrap()`: ノードの移動を監視し、重なり合い（オーバーラップ）が発生しないように調整する処理のラッパー関数です。
    - `watchNodeMovementAndFixOverlaps()`: ノードが移動した際に、他のノードとの重なり合いを検出し、自動的に位置を調整して視認性を保ちます。
    - `resolveNodeOverlaps()`: 既存のノード間の重なり合いを解消し、適切な間隔に配置します。
    - `switchLayout()`: グラフの表示レイアウト（例：円形、グリッドなど）を切り替えます。
    - `resetNodeStates()`: グラフ内のすべてのノードの状態（選択状態、強調表示など）をリセットします。
    - `fitToContent()`: グラフ全体が画面内に収まるようにズームレベルや位置を調整します。
    - `toggleNodeLabels()`: グラフノードのラベル（名前）の表示・非表示を切り替えます。
    - `toggleCalleeLocationFilter()`: 呼び出し先（Callee）の場所に基づいてノードをフィルタリングする機能のオン/オフを切り替えます。
    - `replace`: 文字列の置換処理などに用いられる可能性のある、JavaScriptの標準的なメソッドまたはそれに関連する処理。
    - `switch`: JavaScriptの制御構文の一つで、複数の条件に基づく処理分岐を実装する際に用いられる処理ブロック。
    - `function`: JavaScriptで関数を定義する際に使われるキーワード、または匿名関数やコールバック関数として利用される処理ブロック。
    - `max`: 数値の最大値を求めるJavaScriptのMathオブジェクトのメソッド、または同様の機能を持つ処理。
    - `on`: イベントリスナーを登録するためのメソッド（通常、グラフライブラリなどで特定のイベント発生時のコールバック関数を指定する際に使用）。
    - `if`: JavaScriptの制御構文の一つで、条件に基づいて処理を実行するかどうかを判断する処理ブロック。
    - `for`: JavaScriptの制御構文の一つで、特定の処理を繰り返し実行するループ処理。
    - `ready`: グラフライブラリの初期化完了時など、特定の準備完了イベントが発生した際に実行されるコールバック関数。
    - `addListener`: イベントリスナーを追加するためのメソッド。
- **`src/main.js` 内の関数**:
    - `greet()`: 簡単な挨拶メッセージを返す関数。
    - `main()`: アプリケーションの主要な実行ロジックを含むエントリポイント関数。

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
Generated at: 2025-08-22 07:05:22 JST

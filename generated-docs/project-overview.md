Last updated: 2025-08-19

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: なし
- 音楽・オーディオ:
    - **Tone.js**: Web Audio APIを抽象化し、Web上で高度なオーディオ処理や音楽生成を容易にするJavaScriptライブラリ。
    - **Web Audio API**: ブラウザに内蔵された音声処理APIで、音声合成、加工、分析などを行うための低レベルな機能を提供。Tone.js経由で利用されます。
    - **MML (Music Macro Language)**: テキストベースで音楽を記述するための記法。このプロジェクトでは音楽記法パーサーとして利用される可能性があります。
- 開発ツール:
    - **Node.js runtime**: JavaScriptコードを実行するためのオープンソースのランタイム環境。
    - **npm scripts**: `package.json`に定義されたカスタムコマンドを実行するためのNode.jsパッケージマネージャーの機能。プロジェクト内のタスク自動化に利用されます。
    - **Google Generative AI**: Googleの提供する生成AIサービス。文書生成などのAIサポート機能に利用されます。
    - **@octokit/rest**: GitHub REST APIと連携するためのJavaScriptライブラリ。GitHub上のリソース操作に利用されます。
- テスト: なし
- ビルドツール: なし
- 言語機能: JavaScript (Node.js環境下で動作)
- 自動化・CI/CD:
    - **GitHub Actions**: GitHubが提供するCI/CD（継続的インテグレーション/継続的デリバリー）プラットフォーム。リポジトリ内のイベントに基づいて自動化されたワークフローを実行します。このプロジェクトは共通ワークフロー集として機能します。
    - **自動生成ワークフロー**: プロジェクトの要約や開発ステータスなどを自動生成するワークフロー。
    - **Issue自動管理**: GitHub Issuesの自動的な管理を行うワークフロー。
    - **README多言語翻訳/i18n automation**: READMEファイルやその他のドキュメントの多言語翻訳を自動化するワークフロー。
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
      📄 BaseGenerator.cjs
      📄 CodeAnalyzer.cjs
      📄 DevelopmentStatusGenerator.cjs
      📄 FileSystemUtils.cjs
      📄 GitUtils.cjs
      📄 IssueTracker.cjs
      📄 ProjectAnalysisOrchestrator.cjs
      📄 ProjectDataCollector.cjs
      📄 ProjectDataFormatter.cjs
      📄 ProjectOverviewGenerator.cjs
      📄 ProjectSummaryCoordinator.cjs
      📄 TechStackAnalyzer.cjs
      📄 generate-project-summary.cjs
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

*   **.github_automation/**: GitHub Actionsの自動化スクリプトや設定ファイルを格納するディレクトリ。
    *   **callgraph/**: CodeQLを用いた呼び出しグラフ（コールグラフ）生成に関連するファイル群。
        *   **codeql-queries/**: CodeQLクエリと設定ファイル。
            *   `callgraph.ql`: CodeQLでコールグラフを生成するためのクエリ。
            *   `codeql-pack.lock.yml`, `qlpack.yml`: CodeQLパックの依存関係と設定を定義するファイル。
        *   **config/example.json**: コールグラフ生成に関する設定のサンプル。
        *   **docs/callgraph.md**: コールグラフ生成機能に関するドキュメント。
        *   **presets/**: コールグラフの視覚化に関するファイル。
            *   `callgraph.js`: 生成されたコールグラフをインタラクティブに表示するためのJavaScriptコード。ノードの配置、情報表示、ユーザー操作への応答などを担当します。
            *   `style.css`: コールグラフの視覚化に使用されるスタイルシート。
        *   **scripts/**: コールグラフ生成ワークフローで実行されるユーティリティスクリプト。
            *   `analyze-codeql.cjs`: CodeQLによるコード解析を実行するスクリプト。
            *   `callgraph-utils.cjs`: コールグラフ関連のユーティリティ関数を提供するスクリプト。
            *   `check-codeql-exists.cjs`: CodeQLが利用可能かを確認するスクリプト。
            *   `check-commits.cjs`: コミット履歴をチェックするスクリプト。
            *   `check-node-version.cjs`: Node.jsのバージョンを確認するスクリプト。
            *   `common-utils.cjs`: 共通のユーティリティ関数を提供するスクリプト。
            *   `copy-commit-results.cjs`: コミット結果をコピーするスクリプト。
            *   `extract-sarif-info.cjs`: SARIF形式の解析結果から情報を抽出するスクリプト。
            *   `find-process-results.cjs`: プロセス結果を検索するスクリプト。
            *   `generate-html-graph.cjs`: HTML形式のコールグラフを生成するスクリプト。
            *   `generateHTML.cjs`: HTMLファイルを生成するための汎用スクリプト。
    *   **project_summary/**: プロジェクトの要約や開発ステータスを自動生成する機能に関連するファイル群。
        *   **docs/daily-summary-setup.md**: 日次サマリーの設定に関するドキュメント。
        *   **prompts/**: AIによる文書生成に使用されるプロンプトテンプレート。
            *   `development-status-prompt.md`: 開発ステータスレポート生成用のプロンプト。
            *   `project-overview-prompt.md`: プロジェクト概要生成用のプロンプト。
        *   **scripts/**: プロジェクト要約生成ワークフローで実行されるスクリプト。
            *   `BaseGenerator.cjs`: 各種生成スクリプトの基底クラス。
            *   `CodeAnalyzer.cjs`: コードの解析を担当するスクリプト。
            *   `DevelopmentStatusGenerator.cjs`: 開発ステータスレポートを生成するスクリプト。
            *   `FileSystemUtils.cjs`: ファイルシステム操作のユーティリティスクリプト。
            *   `GitUtils.cjs`: Git操作のユーティリティスクリプト。
            *   `IssueTracker.cjs`: Issueトラッキングに関するスクリプト。
            *   `ProjectAnalysisOrchestrator.cjs`: プロジェクト分析全体のオーケストレーションを行うスクリプト。
            *   `ProjectDataCollector.cjs`: プロジェクトデータを収集するスクリプト。
            *   `ProjectDataFormatter.cjs`: 収集したプロジェクトデータを整形するスクリプト。
            *   `ProjectOverviewGenerator.cjs`: プロジェクト概要を生成するスクリプト。
            *   `ProjectSummaryCoordinator.cjs`: プロジェクトサマリー生成の全体を調整するスクリプト。
            *   `TechStackAnalyzer.cjs`: 技術スタックを分析するスクリプト。
            *   `generate-project-summary.cjs`: プロジェクトサマリーを生成するためのメインスクリプト。
    *   **translate/**: READMEなどのドキュメント翻訳機能に関連するファイル群。
        *   **docs/TRANSLATION_SETUP.md**: 翻訳機能の設定に関するドキュメント。
        *   **scripts/translate-readme.cjs**: READMEファイルを自動翻訳するためのスクリプト。
*   `.gitignore`: Gitのバージョン管理から除外するファイルやディレクトリを指定するファイル。
*   `LICENSE`: プロジェクトのライセンス情報が記述されたファイル。
*   `README.ja.md`: プロジェクトの概要、使い方、貢献方法などを日本語で説明するメインドキュメント。
*   `README.md`: プロジェクトの概要、使い方、貢献方法などを英語で説明するメインドキュメント。
*   **generated-docs/**: GitHub Actionsによって自動生成されたドキュメントやレポートを格納するディレクトリ。
    *   `callgraph.html`: 生成されたコールグラフのHTMLビュー。
    *   `callgraph.js`: コールグラフのインタラクティブな表示を制御するJavaScript（`.github_automation/callgraph/presets/callgraph.js`と同じ内容）。
    *   `development-status.md`: 自動生成された開発ステータスレポート。
    *   `project-overview.md`: 自動生成されたプロジェクト概要。
    *   `style.css`: コールグラフのHTMLビューに適用されるスタイルシート（`.github_automation/callgraph/presets/style.css`と同じ内容）。
*   **issue-notes/**: Issueに関するメモや詳細情報を格納するディレクトリ。各ファイルは特定のIssueに関連するマークダウン形式のメモです。
*   `package-lock.json`: `package.json`の依存関係の正確なツリー構造とバージョンを記録するファイル。
*   `package.json`: Node.jsプロジェクトのメタデータ（プロジェクト名、バージョン、スクリプト、依存関係など）を定義するファイル。
*   **src/main.js**: プロジェクトのメインエントリポイントまたは簡単なテスト用のJavaScriptファイル。

## 関数詳細説明

*   **.github_automation/callgraph/presets/callgraph.js** (および **generated-docs/callgraph.js**)
    *   `escapeHtml(str)`: HTML特殊文字をエスケープして、文字列が安全にHTMLに埋め込めるようにします。
        *   引数: `str` (string) - エスケープする文字列。
        *   戻り値: `string` - エスケープされた文字列。
    *   `getLayoutConfig()`: グラフのレイアウトに関する設定オブジェクトを返します。
        *   引数: なし。
        *   戻り値: `object` - レイアウト設定を含むオブジェクト。
    *   `placeCentralNode()`: グラフの中央に特定のノードを配置します。
        *   引数: なし。
        *   戻り値: なし。
    *   `showNodeInfo(nodeData)`: 指定されたノードの詳細情報を情報パネルに表示します。
        *   引数: `nodeData` (object) - 表示するノードのデータ。
        *   戻り値: なし。
    *   `showEdgeInfo(edgeData)`: 指定されたエッジの詳細情報を情報パネルに表示します。
        *   引数: `edgeData` (object) - 表示するエッジのデータ。
        *   戻り値: なし。
    *   `hideInfoPanel()`: 情報パネルを非表示にします。
        *   引数: なし。
        *   戻り値: なし。
    *   `showInfoPanel()`: 情報パネルを表示します。
        *   引数: なし。
        *   戻り値: なし。
    *   `toggleInfoPanel()`: 情報パネルの表示/非表示を切り替えます。
        *   引数: なし。
        *   戻り値: なし。
    *   `generateGitHubURL(filePath, startLine, endLine)`: GitHub上のファイルへのURLを生成します。
        *   引数: `filePath` (string), `startLine` (number), `endLine` (number)。
        *   戻り値: `string` - 生成されたGitHub URL。
    *   `resetLayout()`: グラフのレイアウトを初期状態にリセットします。
        *   引数: なし。
        *   戻り値: なし。
    *   `watchNodeMovementAndFixOverlapsWrap()`: ノードの動きを監視し、重なりを修正する処理をラップします。
        *   引数: なし。
        *   戻り値: なし。
    *   `watchNodeMovementAndFixOverlaps()`: ノードの動きを継続的に監視し、重なりが発生しないように調整します。
        *   引数: なし。
        *   戻り値: なし。
    *   `resolveNodeOverlaps()`: 重なっているノードの位置を調整し、重なりを解消します。
        *   引数: なし。
        *   戻り値: なし。
    *   `switchLayout(layoutName)`: グラフのレイアウトを切り替えます。
        *   引数: `layoutName` (string) - 使用するレイアウトの名前。
        *   戻り値: なし。
    *   `resetNodeStates()`: すべてのノードの状態（選択、ハイライトなど）をリセットします。
        *   引数: なし。
        *   戻り値: なし。
    *   `fitToContent()`: グラフの表示範囲をコンテンツ全体が収まるように調整します。
        *   引数: なし。
        *   戻り値: なし。
    *   `toggleNodeLabels()`: ノードのラベルの表示/非表示を切り替えます。
        *   引数: なし。
        *   戻り値: なし。
    *   `toggleCalleeLocationFilter()`: 呼び出し先（Callee）の位置によるフィルタリングの有効/無効を切り替えます。
        *   引数: なし。
        *   戻り値: なし。

*   **src/main.js**
    *   `greet(name)`: 指定された名前に対して挨拶メッセージを生成します。
        *   引数: `name` (string) - 挨拶する対象の名前。
        *   戻り値: `string` - 挨拶メッセージ。
    *   `main()`: スクリプトのメイン処理を実行します。`greet`関数を呼び出してコンソールに出力します。
        *   引数: なし。
        *   戻り値: なし。

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
Generated at: 2025-08-19 07:05:06 JST

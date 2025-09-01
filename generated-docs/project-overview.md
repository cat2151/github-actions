Last updated: 2025-09-02

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: 特になし (本プロジェクトはGitHub Actionsワークフローとスクリプト集であり、専用のフロントエンドフレームワークは使用していません。ただし、コールグラフの視覚化にはJavaScriptとCSSが使用されています。)
- 音楽・オーディオ:
  - Tone.js: Web Audio APIを用いたブラウザベースの音声合成・エフェクトライブラリ。
  - Web Audio API: Webブラウザで高度な音声処理を行うためのAPI。Tone.jsを介して利用されます。
  - MML (Music Macro Language): 音楽をテキスト形式で記述するための記法パーサー。
- 開発ツール:
  - Node.js runtime: JavaScriptのサーバーサイドおよびスクリプト実行環境。
  - npm scripts: `package.json`に定義されたスクリプトを実行するタスクランナー。
  - Google Generative AI (@google/generative-ai): AIによるテキスト生成機能を活用し、プロジェクト文書の自動生成をサポートします。
  - @octokit/rest: GitHub APIと連携し、リポジトリ情報の取得やIssue管理などを行います。
- テスト: 特になし (明示的なテストフレームワークは指定されていません。)
- ビルドツール: 特になし (伝統的なビルドプロセスや専用のビルドツールは使用されていません。スクリプト実行が中心です。)
- 言語機能:
  - JavaScript: プロジェクト内の自動化スクリプトやツール開発の主要言語として使用されます (Node.js環境)。
- 自動化・CI/CD:
  - GitHub Actions: コードの変更を検知し、テスト、デプロイ、文書生成、翻訳などのワークフローを自動化するCI/CDプラットフォーム。以下のワークフローが含まれます:
    - プロジェクト要約自動生成
    - Issue自動管理
    - README多言語翻訳
    - i18n automation (国際化対応の自動翻訳)
- 開発標準: 特になし (明示的なコード品質ツールやスタイルガイドは指定されていません。)

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
  📖 23.md
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
- **.github_automation/**: GitHub Actionsワークフローや関連する自動化スクリプトを格納するルートディレクトリ。
  - **callgraph/**: コードの関数呼び出しグラフを生成・表示するための自動化機能に関連するファイル群。
    - **codeql-queries/**: CodeQLを使ってコードを解析し、呼び出しグラフデータを抽出するためのクエリを格納。
      - `callgraph.ql`: 関数呼び出しグラフを抽出するためのCodeQLクエリ。
      - `codeql-pack.lock.yml`: CodeQLパックの依存関係のバージョンを固定するファイル。
      - `qlpack.yml`: CodeQLパックのメタデータを定義するファイル。
    - **config/**: Call graph機能の設定ファイル。
      - `example.json`: Call graph設定のサンプルファイル。
    - **docs/**: Call graph機能に関するドキュメント。
      - `callgraph.md`: Call graph機能の概要や使用方法を説明するMarkdownドキュメント。
    - **presets/**: Call graphの表示ロジックやスタイルのテンプレートファイル。
      - `callgraph.js`: コールグラフのインタラクティブな表示、レイアウト調整、ノード・エッジ情報の表示などを制御するJavaScriptファイル。`generated-docs/callgraph.js`の元となるファイル。
      - `style.css`: コールグラフの視覚的なスタイルを定義するCSSファイル。`generated-docs/style.css`の元となるファイル。
    - **scripts/**: Call graph生成プロセスを自動化するためのNode.jsスクリプト群。
      - `analyze-codeql.cjs`: CodeQLを用いてリポジトリのコードを分析し、SARIF形式の分析結果を生成するスクリプト。
      - `callgraph-utils.cjs`: コールグラフのデータ処理や変換に役立つユーティリティ関数を集めたスクリプト。
      - `check-codeql-exists.cjs`: システムにCodeQL CLIがインストールされているかを確認するスクリプト。
      - `check-commits.cjs`: Gitコミット履歴をチェックし、特定の条件に合致するかを検証するスクリプト。
      - `check-node-version.cjs`: スクリプト実行に必要なNode.jsのバージョンが満たされているかを確認するスクリプト。
      - `common-utils.cjs`: 複数のスクリプトで共有される汎用的なユーティリティ関数を提供するスクリプト。
      - `copy-commit-results.cjs`: コミット分析の結果ファイルなどを指定の場所にコピーするスクリプト。
      - `extract-sarif-info.cjs`: SARIF形式の分析結果ファイルから必要な情報（例えば関数呼び出しデータ）を抽出するスクリプト。
      - `find-process-results.cjs`: 過去の処理結果や生成されたファイルを検索するスクリプト。
      - `generate-html-graph.cjs`: 抽出されたコールグラフデータを基に、インタラクティブなHTML形式のグラフを生成するスクリプト。
      - `generateHTML.cjs`: 汎用的なHTMLファイル生成機能を提供するスクリプト。
  - **project_summary/**: プロジェクトの概要や開発状況を自動生成する機能に関連するファイル群。
    - **docs/**: プロジェクトサマリー機能に関するドキュメント。
      - `daily-summary-setup.md`: 日次サマリーのセットアップ方法を説明するMarkdownドキュメント。
    - **prompts/**: AIによる文書生成に使用されるプロンプトテンプレート。
      - `development-status-prompt.md`: 開発状況レポートを生成するためのプロンプトのテンプレート。
      - `project-overview-prompt.md`: プロジェクト概要レポートを生成するためのプロンプトのテンプレート。
    - **scripts/**: プロジェクトサマリー生成プロセスを自動化するためのNode.jsスクリプト群。
      - `ProjectSummaryCoordinator.cjs`: プロジェクトサマリー生成プロセスの全体を調整し、各サブコンポーネントを連携させるスクリプト。
      - **development/**: 開発状況レポート生成に関連するスクリプト。
        - `DevelopmentStatusGenerator.cjs`: 現在の開発状況を分析し、レポートを生成するスクリプト。
        - `GitUtils.cjs`: Gitリポジトリからコミット履歴や変更情報などを取得するためのユーティリティスクリプト。
        - `IssueTracker.cjs`: GitHub Issueを追跡し、関連情報を収集するためのスクリプト。
      - `generate-project-summary.cjs`: プロジェクト全体のサマリー文書を生成するメインスクリプト。
      - **overview/**: プロジェクト概要レポート生成に関連するスクリプト。
        - `CodeAnalyzer.cjs`: プロジェクトのソースコードを分析し、構造や統計情報を抽出するスクリプト。
        - `ProjectAnalysisOrchestrator.cjs`: プロジェクト分析の各ステップを調整し、データの流れを管理するスクリプト。
        - `ProjectDataCollector.cjs`: プロジェクトに関する様々なデータ（ファイル、コミット、技術スタックなど）を収集するスクリプト。
        - `ProjectDataFormatter.cjs`: 収集した生データをレポート生成に適した形式に整形するスクリプト。
        - `ProjectOverviewGenerator.cjs`: 収集・整形されたデータに基づいてプロジェクト概要レポートを生成するスクリプト。
        - `TechStackAnalyzer.cjs`: プロジェクトで使用されている技術スタックを自動的に検出・分析するスクリプト。
      - **shared/**: 複数のサマリー生成スクリプトで共有される共通コンポーネント。
        - `BaseGenerator.cjs`: 各種レポートジェネレータの共通基底クラスを提供し、共通ロジックをカプセル化するスクリプト。
        - `FileSystemUtils.cjs`: ファイルシステム操作（ファイルの読み書き、ディレクトリ作成など）のためのユーティリティスクリプト。
  - **translate/**: READMEなどの多言語翻訳を自動化する機能に関連するファイル群。
    - **docs/**: 翻訳機能に関するドキュメント。
      - `TRANSLATION_SETUP.md`: 翻訳機能のセットアップ方法を説明するMarkdownドキュメント。
    - **scripts/**: 翻訳処理を自動化するためのNode.jsスクリプト。
      - `translate-readme.cjs`: READMEファイルを指定された言語に自動翻訳するスクリプト。
- `.gitignore`: Gitがバージョン管理の対象としないファイルやディレクトリを指定する設定ファイル。
- `.vscode/`: Visual Studio Codeエディタのワークスペース固有の設定を格納するディレクトリ。
  - `settings.json`: Visual Studio Codeのワークスペース設定ファイル。
- `LICENSE`: プロジェクトのライセンス情報が記載されたファイル。
- `README.ja.md`: プロジェクトの日本語版説明書。
- `README.md`: プロジェクトの主要な説明書（通常は英語版またはデフォルト版）。
- **generated-docs/**: 自動生成されたドキュメントや出力ファイルを格納するディレクトリ。
  - `callgraph.html`: 生成されたコールグラフをWebブラウザで表示するためのHTMLファイル。
  - `callgraph.js`: 生成されたコールグラフのHTMLに埋め込まれるインタラクティブ機能を担当するJavaScriptファイル。`.github_automation/callgraph/presets/callgraph.js`のコピーまたは出力。
  - `development-status-generated-prompt.md`: AIモデルに渡される開発状況プロンプトの最終的な内容が記録されたファイル。
  - `development-status.md`: 自動生成された開発状況レポート。
  - `project-overview.md`: 自動生成されたプロジェクト概要レポート。
  - `style.css`: 生成されたコールグラフのHTMLに適用されるスタイルシート。`.github_automation/callgraph/presets/style.css`のコピーまたは出力。
- **issue-notes/**: GitHub Issueに関連する個別のメモや詳細情報を格納するMarkdownファイル群。
  - `10.md`から`23.md`, `2.md`, `3.md`, `4.md`, `7.md`, `8.md`, `9.md`: 各Issue番号に対応する詳細なメモや補足情報を記述したファイル。
- `package-lock.json`: `npm install`時にインストールされたnpmパッケージの正確な依存関係ツリーを記録するファイル。
- `package.json`: プロジェクトのメタデータ（名前、バージョン、説明など）および依存関係、スクリプトコマンドを定義するファイル。
- **src/**: プロジェクトの主要なソースコードを格納するディレクトリ。
  - `main.js`: プロジェクトのメインエントリーポイントとなるJavaScriptファイル。

## 関数詳細説明
- `escapeHtml(unsafe)`: HTML特殊文字（`<`, `>`, `&`, `"`, `'`)を対応するHTMLエンティティに変換し、XSS攻撃を防ぐ。
  - 引数: `unsafe` (string) - エスケープする文字列。
  - 戻り値: (string) - エスケープされた文字列。
- `getLayoutConfig()`: Cytoscape.jsグラフのレイアウト設定（アルゴリズム、オプションなど）を取得する。
  - 引数: なし
  - 戻り値: (object) - レイアウト設定オブジェクト。
- `placeCentralNode(cy, node, x, y)`: 指定されたCytoscape.jsインスタンス上で、特定のノードを画面の中央付近に配置する。
  - 引数: `cy` (object), `node` (object), `x` (number), `y` (number)
  - 戻り値: なし
- `showNodeInfo(node)`: グラフ上のノード（関数など）が選択された際に、その詳細情報を情報パネルに表示する。
  - 引数: `node` (object) - 表示するCytoscape.jsノードオブジェクト。
  - 戻り値: なし
- `showEdgeInfo(edge)`: グラフ上のエッジ（関数呼び出し関係）が選択された際に、その詳細情報を情報パネルに表示する。
  - 引数: `edge` (object) - 表示するCytoscape.jsエッジオブジェクト。
  - 戻り値: なし
- `hideInfoPanel()`: 画面に表示されている情報パネルを非表示にする。
  - 引数: なし
  - 戻り値: なし
- `showInfoPanel()`: 画面に情報パネルを表示する。
  - 引数: なし
  - 戻り値: なし
- `toggleInfoPanel()`: 情報パネルの現在の表示状態を切り替える（表示されていれば非表示に、非表示であれば表示）。
  - 引数: なし
  - 戻り値: なし
- `generateGitHubURL(filePath, startLine, endLine)`: 指定されたファイルパスと行範囲に基づいて、GitHub上の該当ファイルへのURLを生成する。
  - 引数: `filePath` (string), `startLine` (number), `endLine` (number)
  - 戻り値: (string) - GitHubのファイルURL。
- `resetLayout(cy)`: Cytoscape.jsグラフの現在のレイアウトを初期状態にリセットし、ノード位置などを再配置する。
  - 引数: `cy` (object) - Cytoscape.jsインスタンス。
  - 戻り値: なし
- `watchNodeMovementAndFixOverlapsWrap(cy, resolveNodeOverlaps)`: ノードの移動を監視し、移動後に重なりが生じた場合に重なり解決関数を呼び出すためのラッパー関数。
  - 引数: `cy` (object), `resolveNodeOverlaps` (function)
  - 戻り値: なし
- `watchNodeMovementAndFixOverlaps(cy, resolveNodeOverlaps)`: Cytoscape.jsグラフ内のノードの移動イベントをリッスンし、移動後にノードの重なりを解決する処理を実行する。
  - 引数: `cy` (object) - Cytoscape.jsインスタンス, `resolveNodeOverlaps` (function) - 重なりを解決する関数。
  - 戻り値: なし
- `resolveNodeOverlaps(nodes)`: 重なり合う複数のノード群を検出し、それぞれの位置を調整して重なりを解消する。
  - 引数: `nodes` (collection) - 処理対象のCytoscape.jsノードのコレクション。
  - 戻り値: なし
- `switchLayout(cy, layoutName)`: Cytoscape.jsグラフの表示レイアウトを指定された名前に切り替える。
  - 引数: `cy` (object) - Cytoscape.jsインスタンス, `layoutName` (string) - 適用するレイアウトの名前。
  - 戻り値: なし
- `resetNodeStates(cy)`: Cytoscape.jsグラフ内の全てのノードの視覚的な状態（選択、ハイライトなど）をリセットする。
  - 引数: `cy` (object) - Cytoscape.jsインスタンス。
  - 戻り値: なし
- `fitToContent(cy)`: Cytoscape.jsグラフの表示領域を、全てのノードとエッジが収まるように調整する。
  - 引数: `cy` (object) - Cytoscape.jsインスタンス。
  - 戻り値: なし
- `toggleNodeLabels()`: グラフ上のノードラベルの表示/非表示を切り替える。
  - 引数: なし
  - 戻り値: なし
- `toggleCalleeLocationFilter()`: 呼び出し元と呼び出し先の場所に基づいて、ノードのフィルタリングを切り替える。
  - 引数: なし
  - 戻り値: なし
- `greet(name)`: 指定された名前を含む挨拶メッセージを生成する。
  - 引数: `name` (string) - 挨拶の対象となる名前。
  - 戻り値: (string) - 挨拶メッセージ。
- `main()`: `src/main.js`の主要な実行関数。`greet`関数を呼び出してメッセージをコンソールに出力する。
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
Generated at: 2025-09-02 07:04:57 JST

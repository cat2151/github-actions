Last updated: 2025-09-21

# Project Overview

## プロジェクト概要
- GitHub Actionsの管理を簡素化し、プロジェクトごとの負担を軽減します。
- 共通化されたワークフローを提供し、どのリポジトリからも簡単に再利用可能です。
- ワークフローの一括メンテナンスにより、開発者はプロジェクト開発に集中できます。

## 技術スタック
- フロントエンド: なし
- 音楽・オーディオ: なし (このプロジェクトの目的外のため)
- 開発ツール:
    - Node.js runtime: JavaScriptで記述されたスクリプトを実行するための環境。GitHub Actionsの多くのスクリプトで利用されます。
- テスト: なし
- ビルドツール: なし
- 言語機能: なし
- 自動化・CI/CD:
    - GitHub Actions: コードのリポジトリイベントに基づいて自動化されたワークフローを実行するCI/CDプラットフォーム。以下の共通ワークフローが含まれます。
        - プロジェクト要約自動生成: リポジトリの活動からプロジェクトの概要を自動生成します。
        - Issue自動管理: GitHub Issuesの自動的な管理や整理を支援します。
        - README多言語翻訳: READMEファイルを複数の言語に自動翻訳します。
        - i18n automation: 国際化（i18n）関連の自動翻訳ワークフローを提供します。
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
- **.github_automation/**: GitHub Actionsワークフローで使用される自動化スクリプトや設定ファイルを格納するルートディレクトリ。
    - **callgraph/**: 関数呼び出しグラフの生成と表示に関連する自動化機能を提供します。
        - **codeql-queries/**: CodeQLツール用のクエリ定義ファイルを格納します。`callgraph.ql`は関数呼び出しグラフを生成するための主要なCodeQLクエリです。
        - **config/example.json**: 呼び出しグラフ生成のための設定例を定義します。
        - **docs/callgraph.md**: 関数呼び出しグラフ機能に関する詳細なドキュメント。
        - **presets/callgraph.js**: 生成された呼び出しグラフのHTML表示におけるインタラクティブな機能（レイアウト、ノード操作など）を制御するJavaScriptコード。
        - **presets/style.css**: 呼び出しグラフの視覚的なスタイルを定義するCSSファイル。
        - **scripts/**: CodeQL分析の実行、結果の処理、HTML形式でのグラフ生成など、呼び出しグラフ生成プロセス全体を管理する補助スクリプト群。
    - **check_recent_human_commit/scripts/check-recent-human-commit.cjs**: 最近のコミットが人間によって行われたものか（ボットではないか）をチェックするスクリプト。
    - **project_summary/**: プロジェクトの概要や開発状況を自動生成する機能を提供します。
        - **docs/daily-summary-setup.md**: 日次サマリー機能の設定手順に関するドキュメント。
        - **prompts/**: プロジェクト概要や開発状況レポートを生成するためのプロンプト（指示文）を定義するMarkdownファイル。
        - **scripts/**: プロジェクトの情報を収集、分析し、概要を生成するコアスクリプト群。
            - `ProjectSummaryCoordinator.cjs`: プロジェクト要約生成の全体の流れを調整する主要なスクリプト。
            - `development/`: 開発状況の取得や分析に関連するスクリプトが含まれます。
            - `overview/`: コードベースの分析、データ収集、フォーマット化、概要生成といったプロジェクト概要作成プロセスを担うスクリプトが含まれます。
            - `shared/`: 複数のスクリプトで共通して利用されるユーティリティ関数や基本クラスを提供します。
    - **translate/**: READMEなどのドキュメントを多言語に翻訳する機能を提供します。
        - **docs/TRANSLATION_SETUP.md**: 翻訳ワークフローの設定方法に関するドキュメント。
        - **scripts/translate-readme.cjs**: READMEファイルを指定された言語に自動翻訳するスクリプト。
- **.gitignore**: Gitのバージョン管理から除外するファイルやディレクトリを指定します。
- **.vscode/settings.json**: Visual Studio Codeエディタのワークスペース固有の設定を定義します。
- **LICENSE**: プロジェクトのライセンス情報が記述されています。
- **README.ja.md**: プロジェクトの概要、使い方、貢献方法などを日本語で説明するメインドキュメント。
- **README.md**: プロジェクトの概要、使い方、貢献方法などを英語で説明するメインドキュメント。
- **generated-docs/**: GitHub Actionsワークフローによって生成されたドキュメントや成果物を格納するディレクトリ。
    - `callgraph.html`, `callgraph.js`, `style.css`: 生成された関数呼び出しグラフをブラウザで表示するためのHTMLファイルと、関連するJavaScript、CSSファイル。
- **issue-notes/**: GitHub Issueに関連する追加のメモや詳細情報をMarkdown形式で格納するディレクトリ。
- **src/main.js**: プロジェクトの機能を例示するためのシンプルなJavaScriptファイル。

## 関数詳細説明
- **escapeHtml** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: HTMLの特殊文字をエスケープ処理し、文字列を安全にHTMLコンテンツとして表示できるようにします。
    - 引数: HTMLエスケープが必要な文字列。
    - 戻り値: エスケープされた文字列。
    - 機能: クロスサイトスクリプティング（XSS）攻撃を防ぐため、ユーザーが提供する可能性のあるコンテンツを安全に描画する際に使用されます。
- **getLayoutConfig** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 呼び出しグラフの表示レイアウトに関する設定を取得または定義します。
    - 引数: なし。
    - 戻り値: レイアウト設定オブジェクト。
    - 機能: グラフのノード配置や視覚的属性を決定するためのパラメータを提供します。
- **placeCentralNode** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 呼び出しグラフの中心となるノードを特定の位置に配置します。
    - 引数: 配置するノードのIDなど。
    - 戻り値: なし。
    - 機能: グラフの特定の要素を強調表示したり、レイアウトの基準点として設定するために使用されます。
- **showNodeInfo**, **showEdgeInfo**, **hideInfoPanel**, **showInfoPanel**, **toggleInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 呼び出しグラフのノード（関数）やエッジ（呼び出し関係）の詳細情報を表示するパネルの表示・非表示、および切り替えを制御します。
    - 引数: 表示/非表示の対象となるノード/エッジの情報、イベントオブジェクトなど。
    - 戻り値: なし。
    - 機能: ユーザーがグラフ要素をクリックした際に、その詳細情報をインタラクティブに提供します。
- **generateGitHubURL** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ上の要素（例: 関数定義箇所）に対応するGitHubリポジトリ内のファイルへのURLを生成します。
    - 引数: ファイルパス、行番号など。
    - 戻り値: 生成されたGitHubのURL文字列。
    - 機能: グラフから直接コードのリポジトリへナビゲートするリンクを提供します。
- **resetLayout**, **switchLayout**, **resetNodeStates**, **fitToContent** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 呼び出しグラフの表示レイアウトをリセットしたり、異なるレイアウトに切り替えたり、ノードの状態を初期化したり、表示領域に合わせてコンテンツをフィットさせたりします。
    - 引数: レイアウトの種類など。
    - 戻り値: なし。
    - 機能: ユーザーがグラフの表示を自由に操作できるようにするためのUI制御機能を提供します。
- **watchNodeMovementAndFixOverlapsWrap**, **watchNodeMovementAndFixOverlaps**, **resolveNodeOverlaps** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフノードの動きを監視し、ノードが互いに重なり合わないように位置を調整します。
    - 引数: グラフのノードやレイアウト情報。
    - 戻り値: なし。
    - 機能: グラフの視認性を高め、複雑なグラフでもノードが見えにくくならないようにするレイアウト調整機能です。
- **toggleNodeLabels**, **toggleCalleeLocationFilter** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフノードのラベル表示を切り替えたり、呼び出し先の場所によるフィルタリングを有効/無効にしたりします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザーがグラフの表示情報をカスタマイズできるようにするためのUI制御機能です。
- **greet** (`src/main.js`):
    - 役割: 指定された名前を用いて挨拶メッセージを生成します。
    - 引数: `name` (string) - 挨拶の対象となる名前。
    - 戻り値: 挨拶メッセージ (string)。
    - 機能: シンプルな文字列操作の例として提供されます。
- **main** (`src/main.js`):
    - 役割: `src/main.js`のアプリケーションエントリポイントとして機能します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: `greet`関数を呼び出し、その結果をコンソールに出力します。

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
Generated at: 2025-09-21 07:04:39 JST

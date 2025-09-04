Last updated: 2025-09-04

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: このプロジェクトではユーザーインターフェースを持たないため、特定のフロントエンド技術は使用されていません。
- 音楽・オーディオ:
    - Tone.js: Web Audio APIを抽象化し、ブラウザ上で高度な音楽・オーディオ処理を可能にするJavaScriptライブラリ。
    - Web Audio API: ブラウザに組み込まれている音声処理API。Tone.jsを介して利用されます。
    - MML (Music Macro Language): 音楽をテキストで記述するための簡易記法パーサー。
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するための環境。
    - npm scripts: プロジェクトのビルド、テスト、その他のタスクを自動化するためのスクリプト定義。
    - Google Generative AI (`@google/generative-ai`): AIモデルを利用してテキスト生成や要約などをサポートするライブラリ。プロジェクトの自動要約機能などで利用されます。
    - @octokit/rest: GitHub APIと連携し、リポジトリ情報の取得、Issue管理、PR操作などをプログラムから行うためのライブラリ。
- テスト: このプロジェクトでは明示的なテストフレームワークは指定されていません。
- ビルドツール: このプロジェクトでは特定のビルドツールは指定されていませんが、npm scriptsでタスクを管理しています。
- 言語機能: このプロジェクトはJavaScript/Node.jsを主に使用しています。
- 自動化・CI/CD:
    - GitHub Actions: コードの変更をトリガーに、自動テスト、デプロイ、ドキュメント生成、Issue管理などのワークフローを実行するためのCI/CDプラットフォーム。以下のワークフローが含まれます。
        - プロジェクト要約自動生成
        - Issue自動管理
        - README多言語翻訳
        - i18n automation (自動翻訳ワークフロー)
- 開発標準: このプロジェクトでは明示的なコード品質・統一ルール関連技術は指定されていません。

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
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLを利用して、JavaScript/TypeScriptプロジェクト内の関数呼び出し関係を抽出するためのクエリを定義します。
- **.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係とバージョンを固定するためのロックファイル。
- **.github_automation/callgraph/codeql-queries/qlpack.yml**: CodeQLパックのメタデータ（名前、バージョン、依存関係など）を定義するファイル。
- **.github_automation/callgraph/config/example.json**: 関数呼び出しグラフ生成ツールの設定例を格納するJSONファイル。
- **.github_automation/callgraph/docs/callgraph.md**: 関数呼び出しグラフ生成機能に関するドキュメント。
- **.github_automation/callgraph/presets/callgraph.js**: 関数呼び出しグラフを視覚化するためのJavaScriptロジック（レイアウト設定、ノード・エッジ情報表示、インタラクション処理など）を提供します。
- **.github_automation/callgraph/presets/style.css**: 関数呼び出しグラフの視覚化に使用されるスタイル定義。グラフの見た目を制御します。
- **.github_automation/callgraph/scripts/analyze-codeql.cjs**: CodeQLの結果を分析し、処理するためのスクリプト。
- **.github_automation/callgraph/scripts/callgraph-utils.cjs**: 関数呼び出しグラフ関連の共通ユーティリティ関数を集めたスクリプト。
- **.github_automation/callgraph/scripts/check-codeql-exists.cjs**: CodeQLコマンドがシステムに存在するかを確認するスクリプト。
- **.github_automation/callgraph/scripts/check-commits.cjs**: コミット履歴をチェックするためのスクリプト。
- **.github_automation/callgraph/scripts/check-node-version.cjs**: Node.jsのバージョンが要件を満たしているかを確認するスクリプト。
- **.github_automation/callgraph/scripts/common-utils.cjs**: プロジェクト全体で利用される汎用的なユーティリティ関数を含むスクリプト。
- **.github_automation/callgraph/scripts/copy-commit-results.cjs**: コミット結果をコピーするためのスクリプト。
- **.github_automation/callgraph/scripts/extract-sarif-info.cjs**: SARIFファイルから情報を抽出するためのスクリプト。
- **.github_automation/callgraph/scripts/find-process-results.cjs**: プロセス結果を検索するためのスクリプト。
- **.github_automation/callgraph/scripts/generate-html-graph.cjs**: CodeQLの分析結果を基に、インタラクティブなHTML形式の関数呼び出しグラフを生成するスクリプト。
- **.github_automation/callgraph/scripts/generateHTML.cjs**: HTMLファイルを生成するための汎用スクリプト。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: 日次プロジェクト要約設定に関するドキュメント。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: 開発状況要約のためのAIプロンプト定義。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: プロジェクト概要生成のためのAIプロンプト定義。
- **.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs**: プロジェクト要約生成プロセスの全体を調整・管理するスクリプト。
- **.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs**: 開発状況レポートを生成するスクリプト。
- **.github_automation/project_summary/scripts/development/GitUtils.cjs**: Git操作（コミット履歴取得など）に関するユーティリティ関数。
- **.github_automation/project_summary/scripts/development/IssueTracker.cjs**: GitHub Issueを追跡し、情報を取得するためのスクリプト。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: AIを利用してプロジェクト全体の要約を生成するメインスクリプト。
- **.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs**: プロジェクトのコードベースを分析し、構造や統計情報を抽出するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs**: プロジェクト分析の各ステップ（データ収集、解析、フォーマットなど）を調整するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs**: プロジェクトの様々なデータ（ファイル、コード行数など）を収集するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs**: 収集したプロジェクトデータを特定の形式に整形するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs**: プロジェクト概要を生成するための主要なロジックを実装するスクリプト。
- **.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs**: プロジェクトで使用されている技術スタックを分析し、リストアップするスクリプト。
- **.github_automation/project_summary/scripts/shared/BaseGenerator.cjs**: 各種ジェネレーターの共通基盤となるクラスや関数を提供するスクリプト。
- **.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs**: ファイルシステム操作（ファイルの読み書き、ディレクトリ走査など）に関するユーティリティ関数。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: 自動翻訳機能の設定に関するドキュメント。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルを複数の言語に自動翻訳するためのスクリプト。
- **.gitignore**: Gitのバージョン管理から除外するファイルやディレクトリを指定する設定ファイル。
- **.vscode/settings.json**: Visual Studio Codeのワークスペース固有の設定ファイル。
- **LICENSE**: プロジェクトのライセンス情報が記述されたファイル。
- **README.ja.md**: プロジェクトの概要、目的、使い方などを日本語で説明するドキュメント。
- **README.md**: プロジェクトの概要、目的、使い方などを英語で説明するドキュメント（メインのREADME）。
- **generated-docs/callgraph.html**: 自動生成されたインタラクティブな関数呼び出しグラフのHTMLビュー。
- **generated-docs/callgraph.js**: `generated-docs/callgraph.html`で使用される、グラフの表示ロジックやインタラクション機能を提供するJavaScriptファイル。
- **generated-docs/development-status-generated-prompt.md**: AIによって生成された開発状況プロンプトの出力結果を格納するMarkdownファイル。
- **generated-docs/development-status.md**: AIによって生成された開発状況レポートを格納するMarkdownファイル。
- **generated-docs/project-overview.md**: AIによって生成されたプロジェクト概要レポートを格納するMarkdownファイル。
- **generated-docs/style.css**: `generated-docs/callgraph.html`およびその他の生成ドキュメントで使用されるスタイルシート。
- **issue-notes/**: GitHub Issuesに関連する個別のメモや詳細情報を格納するMarkdownファイルのディレクトリ。
- **package-lock.json**: `package.json`に定義された依存関係の正確なバージョンと依存ツリーを記録し、ビルドの一貫性を保証するファイル。
- **package.json**: Node.jsプロジェクトのメタデータ（プロジェクト名、バージョン、スクリプト、依存関係など）を定義するファイル。
- **src/main.js**: プロジェクトのエントリーポイントまたは主要な実行ロジックを含むスクリプト。

## 関数詳細説明
- **escapeHtml(html)**: HTML文字列に含まれる特殊文字をエスケープし、XSS攻撃などを防ぐ安全な文字列を返します。
- **getLayoutConfig()**: グラフのレイアウトに関する設定オブジェクト（ノード間隔、配置方法など）を返します。
- **placeCentralNode()**: グラフ内の特定のノードを視覚的に中央に配置する処理を実行します。
- **showNodeInfo()**: 選択されたノード（関数など）に関する詳細情報（名前、ファイルパスなど）を表示するパネルを表示します。
- **showEdgeInfo()**: グラフ上のエッジ（関数間の呼び出し関係）に関する詳細情報（呼び出し元、呼び出し先など）を表示するパネルを表示します。
- **hideInfoPanel()**: 表示されている情報パネルを非表示にします。
- **showInfoPanel()**: 情報パネルを表示します。
- **toggleInfoPanel()**: 情報パネルの表示/非表示状態を切り替えます。
- **generateGitHubURL()**: 関連するファイルやコードのGitHubリポジトリへのURLを生成します。
- **resetLayout()**: グラフのレイアウトを初期状態にリセットします。
- **watchNodeMovementAndFixOverlapsWrap()**: ノードの移動を監視し、重なりを修正するロジックをラップする関数。
- **watchNodeMovementAndFixOverlaps()**: グラフ内のノードの移動を継続的に監視し、他のノードとの視覚的な重なりを解決します。
- **resolveNodeOverlaps()**: 複数のノードが重なり合っている場合に、それらを適切に配置し直して重なりを解消します。
- **switchLayout()**: グラフの表示レイアウト（例: ツリー、強制指向性など）を切り替えます。
- **resetNodeStates()**: 選択状態やハイライト表示など、すべてのノードの視覚的状態を初期値にリセットします。
- **fitToContent()**: グラフの表示範囲を、全てのノードとエッジが画面に収まるように自動調整します。
- **toggleNodeLabels()**: グラフのノードに表示されるラベルの表示/非表示を切り替えます。
- **toggleCalleeLocationFilter()**: 呼び出し先ノードの物理的なファイル位置に基づいて、グラフの表示をフィルタリングする機能を切り替えます。
- **replace(search_value, replace_value)**: 文字列内の特定のパターンを別の文字列に置換する汎用的な関数。
- **switch(expression, ...cases)**: 複数の条件分岐を処理するためのJavaScriptの`switch`文に相当するロジック。
- **function(...)**: 無名関数、または何らかの処理をカプセル化した関数定義。
- **max(value1, value2, ...)**: 複数の数値の中から最大値を見つける関数。
- **on(event, handler)**: 特定のイベントが発生したときに実行されるハンドラ関数を登録するイベントリスナー関数。
- **if(condition, true_branch, false_branch)**: 条件に基づいて異なる処理を実行するJavaScriptの`if`文に相当するロジック。
- **for(initialization, condition, increment, body)**: ループ処理を実行するJavaScriptの`for`文に相当するロジック。
- **ready(callback)**: DOMコンテンツの読み込みが完了した際に指定されたコールバック関数を実行します。
- **addListener(event, listener)**: 指定されたイベントに対し、新しいイベントリスナーを追加します。
- **greet(name)**: 引数`name`を受け取り、「Hello, [name]!」のような挨拶メッセージを生成し、返します。
- **main()**: プロジェクトの主要な実行ロジックをカプセル化した関数。プログラムのエントリーポイントとして機能することが多いです。

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
```

---
Generated at: 2025-09-04 07:04:57 JST

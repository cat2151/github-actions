Last updated: 2025-08-28

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: 
  - JavaScript: ブラウザ上での動的な処理（グラフ操作、データ表示など）に使用されます。
  - HTML/CSS: 呼び出しグラフ表示ページの構造定義とスタイリングに用いられます。
- 音楽・オーディオ: 
  - Tone.js: Web Audio APIを抽象化し、Webブラウザ上で音楽やオーディオアプリケーションを構築するためのライブラリ。
  - Web Audio API: Webブラウザで音声処理を行うための標準API。Tone.jsを介して利用されます。
  - MML (Music Macro Language): テキスト形式で音楽を記述するための言語。このプロジェクトに直接の使用は示唆されていませんが、関連技術として挙げられています。
- 開発ツール: 
  - Node.js runtime: JavaScriptコードを実行するためのサーバーサイドおよびコマンドライン実行環境。
  - npm scripts: `package.json`に定義されたスクリプトを実行し、プロジェクトのビルド、テスト、その他タスクを自動化します。
  - Google Generative AI (`@google/generative-ai`): AIを活用してドキュメントの生成、要約、翻訳などのタスクをサポートします。
  - @octokit/rest: GitHub REST APIと連携し、リポジトリ情報の取得、Issue管理、ワークフローの操作などを行います。
  - CodeQL: コードの静的解析ツール。セキュリティ脆弱性やバグを検出したり、関数呼び出しグラフを生成したりします。
- テスト: 
  - (具体的なテストフレームワークの記載はありませんが、GitHub Actions内で自動テストが実行される可能性があります。)
- ビルドツール: 
  - npm scripts: プロジェクトのビルドプロセスを管理するためのスクリプトを実行します。
  - CodeQL: コード解析を実行し、ビルドプロセスの一部として品質チェックを行います。
- 言語機能: 
  - JavaScript (ES Modules/CommonJS): Node.jsおよびブラウザ環境で動作する主要なプログラミング言語です。
- 自動化・CI/CD: 
  - GitHub Actions: コードリポジトリのイベント（プッシュ、プルリクエストなど）をトリガーとして、コードの自動テスト、ビルド、デプロイ、ドキュメント生成、Issue管理などの継続的インテグレーション/デリバリーワークフローを実行します。
  - プロジェクト要約自動生成ワークフロー: AIを用いてプロジェクトの概要や開発状況を自動生成します。
  - Issue自動管理ワークフロー: GitHub Issueのライフサイクル管理を自動化します。
  - README多言語翻訳ワークフロー (i18n automation): READMEファイルなどのドキュメントを多言語に自動翻訳します。
- 開発標準: 
  - (具体的なコード品質ツールやリンターの記載はありません。)

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
- **.github_automation/**: GitHub Actionsワークフローによって実行される自動化スクリプトや設定を格納するルートディレクトリ。
  - **callgraph/**: コードの呼び出しグラフを生成・表示するための自動化機能に関連するファイル群。
    - **codeql-queries/**: CodeQLのクエリ定義ファイル群。`callgraph.ql`は呼び出しグラフを抽出するためのクエリ。`qlpack.yml`と`codeql-pack.lock.yml`はCodeQLパッケージの設定と依存関係を定義。
    - **config/example.json**: 呼び出しグラフ生成のための設定例。
    - **docs/callgraph.md**: 呼び出しグラフ機能に関する説明ドキュメント。
    - **presets/callgraph.js**: 生成された呼び出しグラフの表示ロジック、インタラクション、スタイルを定義するJavaScriptファイル。
    - **presets/style.css**: 呼び出しグラフの表示スタイルを定義するCSSファイル。
    - **scripts/**: 呼び出しグラフの生成プロセス全体を管理するスクリプト群。
      - `analyze-codeql.cjs`: CodeQLによるコード解析を実行するスクリプト。
      - `callgraph-utils.cjs`: 呼び出しグラフ生成に共通して利用されるユーティリティ関数。
      - `check-codeql-exists.cjs`: CodeQLが利用可能かを確認するスクリプト。
      - `check-commits.cjs`: コミット履歴をチェックするスクリプト。
      - `check-node-version.cjs`: Node.jsのバージョンを確認するスクリプト。
      - `common-utils.cjs`: プロジェクト全体で利用される共通ユーティリティ関数。
      - `copy-commit-results.cjs`: コミット結果をコピーするスクリプト。
      - `extract-sarif-info.cjs`: CodeQLの出力形式であるSARIFファイルから情報を抽出するスクリプト。
      - `find-process-results.cjs`: プロセス結果を検索するスクリプト。
      - `generate-html-graph.cjs`: 解析結果からHTML形式の呼び出しグラフを生成するスクリプト。
      - `generateHTML.cjs`: HTMLファイルを生成する汎用スクリプト。
  - **project_summary/**: プロジェクトの概要や開発状況をAIを用いて自動生成するための機能に関連するファイル群。
    - **docs/daily-summary-setup.md**: 日次サマリーの設定方法に関するドキュメント。
    - **prompts/**: AIがテキストを生成する際に使用するプロンプトの定義ファイル。
      - `development-status-prompt.md`: 開発状況の要約のためのプロンプト。
      - `project-overview-prompt.md`: プロジェクト概要生成のためのプロンプト。
    - **scripts/**: プロジェクト要約生成プロセスを管理するスクリプト群。
      - `ProjectSummaryCoordinator.cjs`: プロジェクト要約生成全体のオーケストレーションを行うスクリプト。
      - **development/**: 開発状況の要約生成に関連するスクリプト。
        - `DevelopmentStatusGenerator.cjs`: 開発状況のサマリーを生成するコアロジック。
        - `GitUtils.cjs`: Gitリポジトリ操作（コミット履歴取得など）のユーティリティ。
        - `IssueTracker.cjs`: GitHub Issueに関する情報を取得・処理するユーティリティ。
      - `generate-project-summary.cjs`: プロジェクト要約生成のメインエントリーポイント。
      - **overview/**: プロジェクト概要の生成に関連するスクリプト。
        - `CodeAnalyzer.cjs`: コードベースを分析し、構造や内容に関する情報を抽出。
        - `ProjectAnalysisOrchestrator.cjs`: プロジェクト分析プロセスの全体を調整。
        - `ProjectDataCollector.cjs`: プロジェクトに関する各種データを収集。
        - `ProjectDataFormatter.cjs`: 収集したデータをAIが利用しやすい形式に整形。
        - `ProjectOverviewGenerator.cjs`: AIモデルを呼び出し、プロジェクト概要を生成。
        - `TechStackAnalyzer.cjs`: 使用されている技術スタックを特定し分析。
      - **shared/**: 要約生成機能で共通して利用されるユーティリティ。
        - `BaseGenerator.cjs`: 各種ジェネレータの基底クラス。
        - `FileSystemUtils.cjs`: ファイルシステム操作（ファイルの読み書きなど）のユーティリティ。
  - **translate/**: ドキュメントの多言語翻訳を自動化するための機能に関連するファイル群。
    - **docs/TRANSLATION_SETUP.md**: 翻訳自動化の設定方法に関するドキュメント。
    - **scripts/translate-readme.cjs**: `README.md`ファイルなどを自動翻訳するスクリプト。
- **.gitignore**: Gitバージョン管理システムが無視すべきファイルやディレクトリを定義。
- **.vscode/settings.json**: VS Codeエディタのワークスペース固有の設定ファイル。
- **LICENSE**: プロジェクトの利用条件を定めるライセンス情報。
- **README.ja.md**: プロジェクトの概要を日本語で説明するMarkdownファイル。
- **README.md**: プロジェクトの概要を英語で説明するMarkdownファイル。
- **generated-docs/**: 自動生成されたドキュメントやレポートを格納するディレクトリ。
  - `callgraph.html`: 生成された呼び出しグラフを表示するためのHTMLファイル。
  - `callgraph.js`: `callgraph.html`で使用されるJavaScript（`presets/callgraph.js`のコピーまたは生成物）。
  - `development-status.md`: AIによって生成された開発状況のサマリー。
  - `project-overview.md`: AIによって生成されたプロジェクトの概要ドキュメント。
  - `style.css`: `callgraph.html`で使用されるCSS（`presets/style.css`のコピーまたは生成物）。
- **issue-notes/**: GitHub ActionsのIssue自動管理によって生成されたIssue関連のメモや詳細を格納するMarkdownファイル群。
- **package-lock.json**: `package.json`で定義された依存関係の具体的なバージョンをロックし、再現可能なビルドを保証するファイル。
- **package.json**: Node.jsプロジェクトのメタデータ（プロジェクト名、バージョン、スクリプト、依存関係など）を定義。
- **src/main.js**: プロジェクトのメインエントリポイント、または例として提供されているシンプルなJavaScriptスクリプト。

## 関数詳細説明
- **escapeHtml(text)** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: HTMLの特殊文字をエスケープし、スクリプト挿入（XSS）攻撃を防ぐために文字列を安全な形式に変換します。
  - 引数: `text` (string) - エスケープする文字列。
  - 戻り値: (string) - エスケープされた文字列。
  - 機能: HTMLエンティティ変換マップに基づいて、`&`, `<`, `>`, `"`, `'`などの文字を対応するHTMLエンティティに置換します。
- **getLayoutConfig()** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフのレイアウトに関する設定オブジェクトを提供します。
  - 引数: なし。
  - 戻り値: (object) - レイアウト設定を含むオブジェクト。
  - 機能: さまざまなレイアウト（例: Cola、CoSE、Gridなど）のデフォルト設定を定義し、必要に応じて返します。
- **placeCentralNode(cy, node)** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 指定されたノードをグラフ表示の中心に配置します。
  - 引数: `cy` (object) - Cytoscape.jsインスタンス, `node` (object) - 中央に配置するノードオブジェクト。
  - 戻り値: なし。
  - 機能: グラフのズームとパンを調整し、指定されたノードがビューポートの中心に来るようにします。
- **showNodeInfo(node)** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 選択されたノード（関数など）の詳細情報を情報パネルに表示します。
  - 引数: `node` (object) - 詳細情報を表示するノードオブジェクト。
  - 戻り値: なし。
  - 機能: ノード名、ファイルパス、行数、GitHubへのリンクなど、ノードに関連するメタデータを取得し、HTML要素に整形して表示します。
- **showEdgeInfo(edge)** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 選択されたエッジ（呼び出し関係）の詳細情報を情報パネルに表示します。
  - 引数: `edge` (object) - 詳細情報を表示するエッジオブジェクト。
  - 戻り値: なし。
  - 機能: エッジのソースノードとターゲットノード、呼び出し元の情報（ファイル、行数など）を取得し、HTML要素に整形して表示します。
- **hideInfoPanel()** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフの詳細情報が表示されるパネルを非表示にします。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: パネル要素のスタイルを変更し、非表示にします。
- **showInfoPanel()** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフの詳細情報が表示されるパネルを表示します。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: パネル要素のスタイルを変更し、表示します。
- **toggleInfoPanel()** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフの詳細情報パネルの表示状態（表示/非表示）を切り替えます。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: 現在の表示状態をチェックし、`showInfoPanel`または`hideInfoPanel`を呼び出します。
- **generateGitHubURL(filePath, startLine, endLine)** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 指定されたファイルパスと行範囲に基づいて、GitHubリポジトリ上のファイルへのURLを生成します。
  - 引数: `filePath` (string) - ファイルのパス, `startLine` (number) - 開始行番号, `endLine` (number) - 終了行番号。
  - 戻り値: (string) - GitHub上のファイルへのURL。
  - 機能: リポジトリのURLとファイルパス、行範囲を結合して、直接ファイルを参照できるURLを作成します。
- **resetLayout()** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフのレイアウトを初期状態にリセットします。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: 適用されているグラフレイアウトを再実行し、ノード位置などを初期化します。
- **watchNodeMovementAndFixOverlapsWrap()** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: ノードの移動を監視し、他のノードとの重なりを修正する処理をラップします。これは通常、イベントリスナーとして使用されます。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: 内部で`watchNodeMovementAndFixOverlaps`を呼び出します。
- **watchNodeMovementAndFixOverlaps(cy, nodes, layout)** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: Cytoscape.jsグラフ内のノードの移動イベントを監視し、移動したノードが他のノードと重ならないように位置を自動調整します。
  - 引数: `cy` (object) - Cytoscape.jsインスタンス, `nodes` (collection) - 監視するノードのコレクション, `layout` (object) - 現在のレイアウトオブジェクト。
  - 戻り値: なし。
  - 機能: ノードが移動した際に`resolveNodeOverlaps`を呼び出し、重なりを解決します。
- **resolveNodeOverlaps(cy, nodes)** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 指定されたノードコレクション内で発生している重なりを検出し、ノードの位置を調整して重なりを解消します。
  - 引数: `cy` (object) - Cytoscape.jsインスタンス, `nodes` (collection) - 重なりを解決するノードのコレクション。
  - 戻り値: なし。
  - 機能: 各ノードの境界ボックスを比較し、重なっているノードを検出し、小さなオフセットを加えて重なりを解除します。
- **switchLayout(layoutName)** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフの表示レイアウトを動的に変更します。
  - 引数: `layoutName` (string) - 適用するレイアウトの名前（例: 'cola', 'cose', 'grid'）。
  - 戻り値: なし。
  - 機能: `getLayoutConfig`から指定されたレイアウトの設定を取得し、Cytoscape.jsインスタンスに新しいレイアウトを適用します。
- **resetNodeStates()** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフ内のすべてのノードの選択状態や強調表示などの視覚的な状態をリセットします。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: 各ノードから特定のCSSクラスやデータを削除し、デフォルトの状態に戻します。
- **fitToContent()** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフ全体がビューポート内に収まるようにズームレベルとパン位置を調整します。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: Cytoscape.jsの`fit()`メソッドを呼び出します。
- **toggleNodeLabels()** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフノードのラベル（テキスト表示）の表示/非表示を切り替えます。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: ノードのスタイルシートを変更してラベルの可視性を制御します。
- **toggleCalleeLocationFilter()** (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 呼び出し先（callee）のファイルパスに基づいてノードをフィルタリングする機能を切り替えます。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: 特定のディレクトリ（例: 'node_modules'）に属する呼び出し先のノードを非表示にする/表示する機能をトグルします。
- **greet(name)** (定義元: `src/main.js`)
  - 役割: 指定された名前を用いて挨拶メッセージを生成します。
  - 引数: `name` (string) - 挨拶の対象となる名前。
  - 戻り値: (string) - 挨拶メッセージ。
  - 機能: "Hello, [name]!"という形式の文字列を返します。
- **main()** (定義元: `src/main.js`)
  - 役割: プログラムの主要な実行フローを定義します。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: `greet`関数を呼び出し、その結果をコンソールに出力します。これはプログラムのエントリポイントとして機能します。
- **switch** (定義元: `.github_automation/callgraph/presets/callgraph.js`)
  - 役割: JavaScriptの制御フロー文。複数の条件分岐を簡潔に記述します。
  - 機能: 変数の値に基づいて異なるコードブロックを実行します。
- **if** (定義元: `.github_automation/callgraph/presets/callgraph.js`)
  - 役割: JavaScriptの条件分岐文。特定の条件が真の場合にコードブロックを実行します。
  - 機能: 条件式の評価結果に基づいて処理の流れを制御します。
- **for** (定義元: `.github_automation/callgraph/presets/callgraph.js`)
  - 役割: JavaScriptのループ文。指定された回数または条件が満たされるまでコードブロックを繰り返し実行します。
  - 機能: 配列のイテレーションや繰り返し処理に利用されます。
- **function** (定義元: `.github_automation/callgraph/presets/callgraph.js`)
  - 役割: JavaScriptのキーワード。関数を定義します。
  - 機能: 再利用可能なコードブロックを作成し、名前を付けて呼び出すことを可能にします。
- **max** (定義元: `.github_automation/callgraph/presets/callgraph.js`)
  - 役割: `Math.max()`などの数学関数。複数の数値の中から最大値を返します。
  - 機能: 数値比較。
- **on** (定義元: `.github_automation/callgraph/presets/callgraph.js`)
  - 役割: イベントリスナーをアタッチするためによく使用されるメソッド名（例: `element.on('click', handler)`）。
  - 機能: 特定のイベントが発生したときに指定されたコールバック関数を実行します。
- **ready** (定義元: `.github_automation/callgraph/presets/callgraph.js`)
  - 役割: ドキュメントが完全にロードされ、操作可能になったときに実行されるイベント（例: jQueryの`$(document).ready()`）。
  - 機能: DOM操作が安全に行えるようになるまでコードの実行を遅延させます。
- **addListener** (定義元: `.github_automation/callgraph/presets/callgraph.js`)
  - 役割: イベントリスナーを追加するための一般的なメソッド名（例: `eventEmitter.addListener('event', listener)`）。
  - 機能: 特定のイベントに対する複数のハンドラを登録し、イベント発生時にそれらを順次実行します。
- **replace** (定義元: `.github_automation/callgraph/presets/callgraph.js`)
  - 役割: 文字列の置換によく使われるメソッド（例: `string.replace(searchValue, replaceValue)`）。
  - 機能: 文字列内の一致する部分を新しい文字列で置き換えます。

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
Generated at: 2025-08-28 07:04:52 JST

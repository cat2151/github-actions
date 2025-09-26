Last updated: 2025-09-26

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するための環境を提供します。
- 自動化・CI/CD:
    - GitHub Actions: コードの変更を検知し、自動的にビルド、テスト、デプロイなどのワークフローを実行するためのCI/CDプラットフォームです。このプロジェクトでは、以下の共通ワークフローを提供します：
        - プロジェクト要約自動生成: リポジトリの現状を解析し、概要を自動生成します。
        - Issue自動管理: GitHub Issuesの管理を自動化します。
        - README多言語翻訳: READMEファイルを複数の言語に自動翻訳します。
        - i18n automation: 国際化 (i18n) 関連の翻訳プロセスを自動化します。

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
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLを用いて関数呼び出しグラフを生成するためのクエリ定義ファイルです。
- **.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係を管理するロックファイルです。
- **.github_automation/callgraph/codeql-queries/qlpack.yml**: CodeQLパックのメタデータを定義するファイルです。
- **.github_automation/callgraph/config/example.json**: 呼び出しグラフ生成に関する設定の例が記述されたJSONファイルです。
- **.github_automation/callgraph/docs/callgraph.md**: 呼び出しグラフ機能に関するドキュメントです。
- **.github_automation/callgraph/presets/callgraph.js**: 生成された呼び出しグラフのHTMLビューで使用されるJavaScriptのプリセット/テンプレートファイルです。グラフの表示ロジックやインタラクションを定義します。
- **.github_automation/callgraph/presets/style.css**: 生成された呼び出しグラフのHTMLビューで使用されるCSSのプリセット/テンプレートファイルです。グラフのスタイルを定義します。
- **.github_automation/callgraph/scripts/analyze-codeql.cjs**: CodeQL解析を実行し、結果を処理するスクリプトです。
- **.github_automation/callgraph/scripts/callgraph-utils.cjs**: 呼び出しグラフ生成に関連する共通ユーティリティ関数を提供します。
- **.github_automation/callgraph/scripts/check-codeql-exists.cjs**: CodeQLがシステムに存在するかどうかを確認するスクリプトです。
- **.github_automation/callgraph/scripts/check-node-version.cjs**: Node.jsのバージョンが要件を満たしているか確認するスクリプトです。
- **.github_automation/callgraph/scripts/common-utils.cjs**: プロジェクト全体で利用される汎用的なユーティリティ関数をまとめたスクリプトです。
- **.github_automation/callgraph/scripts/copy-commit-results.cjs**: コミット結果をコピーするスクリプトです。
- **.github_automation/callgraph/scripts/extract-sarif-info.cjs**: SARIF形式の解析結果から情報を抽出するスクリプトです。
- **.github_automation/callgraph/scripts/find-process-results.cjs**: 処理結果を検索するスクリプトです。
- **.github_automation/callgraph/scripts/generate-html-graph.cjs**: CodeQLの解析結果からHTML形式の呼び出しグラフを生成するスクリプトです。
- **.github_automation/callgraph/scripts/generateHTML.cjs**: 一般的なHTMLコンテンツを生成するためのスクリプトです。
- **.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs**: 最近の人間によるコミットをチェックし、自動化されたコミットではないことを確認するためのスクリプトです。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: 日次サマリー生成のセットアップ手順を説明するドキュメントです。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: 開発状況レポート生成に使用されるプロンプトのテンプレートです。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: プロジェクト概要生成に使用されるプロンプトのテンプレートです。
- **.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs**: プロジェクトサマリー生成プロセス全体の調整役となるメインスクリプトです。
- **.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs**: プロジェクトの開発状況レポートを生成するスクリプトです。
- **.github_automation/project_summary/scripts/development/GitUtils.cjs**: Gitリポジトリに関する操作を行うユーティリティ関数を提供します。
- **.github_automation/project_summary/scripts/development/IssueTracker.cjs**: GitHub Issuesの情報を追跡・処理するためのスクリプトです。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: プロジェクトのサマリー全体を生成するメインスクリプトです。
- **.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs**: プロジェクトのコードを解析し、構造や特徴を把握するためのスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs**: プロジェクト解析の各ステップをオーケストレーション（調整）するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs**: プロジェクトに関する様々なデータを収集するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs**: 収集したプロジェクトデータを整形し、表示に適した形式にするスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs**: プロジェクトの概要レポートを生成するスクリプトです。
- **.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs**: プロジェクトで使用されている技術スタックを分析・特定するスクリプトです。
- **.github_automation/project_summary/scripts/shared/BaseGenerator.cjs**: 各種ジェネレーターの基底クラスまたは共通機能を提供するスクリプトです。
- **.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs**: ファイルシステム操作に関する共通ユーティリティ関数を提供します。
- **.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs**: プロジェクト内のファイル操作に関するユーティリティ関数を提供します。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: 翻訳ワークフローのセットアップ手順を説明するドキュメントです。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルを指定された言語に自動翻訳するスクリプトです。
- **.gitignore**: Gitが追跡しないファイルやディレクトリを指定するファイルです。
- **.vscode/settings.json**: Visual Studio Codeのワークスペース設定ファイルです。
- **LICENSE**: プロジェクトのライセンス情報が記述されたファイルです。
- **README.ja.md**: プロジェクトの概要を日本語で説明するメインのドキュメントです。
- **README.md**: プロジェクトの概要を英語で説明するメインのドキュメントです。
- **generated-docs/callgraph.html**: 生成されたHTML形式の呼び出しグラフビューです。
- **generated-docs/callgraph.js**: 生成された呼び出しグラフHTMLビューのインタラクティブ機能を提供するJavaScriptファイルです。
- **generated-docs/style.css**: 生成された呼び出しグラフHTMLビューのスタイルを定義するCSSファイルです。
- **issue-notes/**: GitHub Issuesに関するメモや詳細情報が格納されるディレクトリです。
- **src/main.js**: プロジェクトのサンプルまたはエントリポイントとなるJavaScriptファイルです。

## 関数詳細説明
- **escapeHtml()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: HTML特殊文字をエスケープし、XSS攻撃を防ぐための文字列を生成します。
    - 引数: 文字列 (string)
    - 戻り値: エスケープされた文字列 (string)
    - 機能: `<`を`&lt;`に、`>`を`&gt;`に、`&`を`&amp;`に変換するなど。
- **getLayoutConfig()**:
    - 役割: 呼び出しグラフのレイアウト設定を取得または決定します。
    - 引数: なし (またはレイアウトタイプなどの引数を取る可能性)
    - 戻り値: レイアウト設定オブジェクト (object)
    - 機能: グラフの表示方法に関するパラメータを提供します。
- **placeCentralNode()**:
    - 役割: グラフの中央に特定のノードを配置します。
    - 引数: ノードID (string) またはノードオブジェクト (object)
    - 戻り値: なし
    - 機能: グラフの初期表示や特定ノードへのフォーカス時に使用されます。
- **showNodeInfo()**:
    - 役割: 特定のノードに関する情報をパネルに表示します。
    - 引数: ノードオブジェクト (object)
    - 戻り値: なし
    - 機能: ノードがクリックされた際などに詳細情報をユーザーに提示します。
- **showEdgeInfo()**:
    - 役割: 特定のエッジ（接続線）に関する情報をパネルに表示します。
    - 引数: エッジオブジェクト (object)
    - 戻り値: なし
    - 機能: エッジがクリックされた際などに詳細情報をユーザーに提示します。
- **hideInfoPanel()**:
    - 役割: 情報表示パネルを非表示にします。
    - 引数: なし
    - 戻り値: なし
    - 機能: ユーザーがパネルを閉じたり、別の要素を選択したりしたときに呼び出されます。
- **showInfoPanel()**:
    - 役割: 情報表示パネルを表示します。
    - 引数: なし (または表示する情報の内容)
    - 戻り値: なし
    - 機能: `showNodeInfo`や`showEdgeInfo`から呼び出され、パネルの可視性を制御します。
- **toggleInfoPanel()**:
    - 役割: 情報表示パネルの表示/非表示を切り替えます。
    - 引数: なし
    - 戻り値: なし
    - 機能: ボタンクリックなどでパネルの表示状態をトグルします。
- **generateGitHubURL()**:
    - 役割: 関連するGitHubリポジトリやファイルのURLを生成します。
    - 引数: ファイルパス、行番号など (string, number)
    - 戻り値: GitHubのURL (string)
    - 機能: コードの特定の場所へ直接リンクするためのURLを作成します。
- **resetLayout()**:
    - 役割: グラフのレイアウトを初期状態にリセットします。
    - 引数: なし
    - 戻り値: なし
    - 機能: ユーザーがグラフの配置を自由に変更した後、元の状態に戻したい場合に利用されます。
- **watchNodeMovementAndFixOverlapsWrap()**:
    - 役割: ノードの動きを監視し、重なりを修正する処理のラッパー関数です。
    - 引数: なし
    - 戻り値: なし
    - 機能: 重複するノードが存在しないように、ノードの配置を調整します。
- **watchNodeMovementAndFixOverlaps()**:
    - 役割: 実際にノードの動きを監視し、重なりを修正するロジックを実装します。
    - 引数: なし
    - 戻り値: なし
    - 機能: ノードの座標を計算し、視認性を高めるために重なりを解消します。
- **resolveNodeOverlaps()**:
    - 役割: ノード間の重なりを検出し、解消します。
    - 引数: ノードの配列 (array)
    - 戻り値: なし
    - 機能: 力学モデルや衝突検出アルゴリズムを用いて、ノードが互いに重ならないように配置を微調整します。
- **switchLayout()**:
    - 役割: グラフのレイアウトアルゴリズムを切り替えます。
    - 引数: レイアウトタイプ (string)
    - 戻り値: なし
    - 機能: 円形レイアウト、階層レイアウトなど、異なる視覚化モードを適用します。
- **resetNodeStates()**:
    - 役割: グラフ内の全てのノードの状態（選択、ハイライトなど）を初期状態にリセットします。
    - 引数: なし
    - 戻り値: なし
    - 機能: ユーザーが操作した後のノードの状態をクリアします。
- **fitToContent()**:
    - 役割: グラフ全体がビューポートに収まるようにズームレベルとパンを調整します。
    - 引数: なし
    - 戻り値: なし
    - 機能: グラフの内容全体を一目で確認できるようにします。
- **toggleNodeLabels()**:
    - 役割: ノードのラベル（名前）の表示/非表示を切り替えます。
    - 引数: なし
    - 戻り値: なし
    - 機能: グラフの混雑を軽減したり、詳細な情報表示を切り替えたりするために使用されます。
- **toggleCalleeLocationFilter()**:
    - 役割: 呼び出し先の位置によるフィルタリングのON/OFFを切り替えます。
    - 引数: なし
    - 戻り値: なし
    - 機能: 特定のファイルやモジュールからの呼び出しのみを表示するフィルタリング機能です。
- **replace()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 文字列内の特定のパターンを別の文字列で置換します。
    - 引数: 検索パターン (string or RegExp), 置換文字列 (string)
    - 戻り値: 置換後の文字列 (string)
    - 機能: JavaScriptのString.prototype.replaceメソッドを参照している可能性が高いです。
- **switch** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 複数の条件分岐を扱うJavaScriptの制御構文です。
    - 引数: 評価する式
    - 戻り値: なし
    - 機能: 式の値に応じて、対応する`case`ブロックのコードを実行します。
- **function** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: JavaScriptにおいて関数を定義するためのキーワードです。
    - 引数: （定義する関数の引数）
    - 戻り値: （定義する関数の戻り値）
    - 機能: 実行可能なコードのブロックをカプセル化し、再利用可能な単位とします。
- **max()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 複数の数値の中から最大値を返します。
    - 引数: 数値 (number...)
    - 戻り値: 最大値 (number)
    - 機能: JavaScriptのMath.maxメソッドを参照している可能性が高いです。
- **on()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 特定のイベントが発生したときに実行されるイベントハンドラをアタッチします。
    - 引数: イベントタイプ (string), コールバック関数 (function)
    - 戻り値: 呼び出し元のオブジェクト
    - 機能: DOM要素やその他のオブジェクトに対するイベント駆動型の処理を設定します。jQueryなどのライブラリでよく見られます。
- **if** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 条件が真である場合にのみコードブロックを実行するJavaScriptの制御構文です。
    - 引数: 評価する条件式
    - 戻り値: なし
    - 機能: プログラムの実行フローを条件に基づいて分岐させます。
- **for** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 特定の条件が満たされる間、コードブロックを繰り返し実行するJavaScriptのループ構文です。
    - 引数: 初期化式, 条件式, 更新式
    - 戻り値: なし
    - 機能: 配列の反復処理や、回数が決まっている繰り返しの実行に利用されます。
- **ready()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: ドキュメントのDOMツリーが完全に構築されたときに実行されるイベントハンドラを設定します。
    - 引数: コールバック関数 (function)
    - 戻り値: 呼び出し元のオブジェクト
    - 機能: ドキュメントの準備ができた後にJavaScriptコードを実行するために使用されます。jQueryなどのライブラリでよく見られます。
- **addListener()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 指定したイベントの発生時に呼び出されるリスナー関数を登録します。
    - 引数: イベントタイプ (string), リスナー関数 (function)
    - 戻り値: なし
    - 機能: 標準的なイベントリスナー登録APIです。
- **greet(name)** (src/main.js):
    - 役割: 指定された名前に挨拶メッセージを生成します。
    - 引数: `name` (string) - 挨拶の対象となる名前。
    - 戻り値: 挨拶メッセージ (string)
    - 機能: `Hello, [name]!` 形式の文字列を返します。
- **main()** (src/main.js):
    - 役割: プログラムの主要な実行ロジックをカプセル化します。
    - 引数: なし
    - 戻り値: なし
    - 機能: `greet`関数を呼び出して挨拶メッセージをコンソールに出力します。

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
Generated at: 2025-09-26 07:04:55 JST

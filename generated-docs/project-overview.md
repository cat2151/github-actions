Last updated: 2025-09-07

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
使用している技術をカテゴリ別に整理して説明します。
- フロントエンド: HTML/CSS/JavaScript (Web標準技術) - 関数呼び出しグラフなどの視覚化されたドキュメント生成において、ブラウザ上で表示されるUIを構成するための基本的なWeb技術群です。
- 音楽・オーディオ: 該当なし
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するための環境です。
    - npm scripts: プロジェクトのタスク（スクリプトの実行、テストなど）を定義し実行するためのツールです。
    - Google Generative AI (@google/generative-ai): AIを活用して文書の自動生成（プロジェクト要約、翻訳など）をサポートするためのライブラリです。
    - @octokit/rest: GitHubのAPIと連携し、リポジトリ情報の取得やIssueの操作などをプログラムから行うためのライブラリです。
- テスト: 該当なし
- ビルドツール: 該当なし
- 言語機能: JavaScript - Node.js環境で動作する、本プロジェクトの主要なプログラミング言語です。
- 自動化・CI/CD:
    - GitHub Actions: コードの変更を検知して、自動的にテスト、ビルド、デプロイ、ドキュメント生成、翻訳などのワークフローを実行するためのCI/CDプラットフォームです。
- 開発標準: 該当なし

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
  📖 24.md
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
各ファイルの役割と機能を詳細に説明します。

*   **.github_automation/**: GitHub Actionsワークフローで利用される各種自動化スクリプトや設定を格納する主要ディレクトリです。
    *   **callgraph/**: プロジェクト内の関数呼び出しグラフを生成するためのツール群が含まれます。
        *   **codeql-queries/callgraph.ql**: CodeQLというセキュリティ分析ツールを用いて、コードベースから関数呼び出しの関係を抽出するためのクエリファイルです。
        *   **codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係をロックするためのファイルです。
        *   **codeql-queries/qlpack.yml**: CodeQLパックのメタデータを定義するファイルです。
        *   **config/example.json**: 呼び出しグラフツールの設定例を記述したJSONファイルです。
        *   **docs/callgraph.md**: 呼び出しグラフツールに関する説明ドキュメントです。
        *   **presets/callgraph.js**: 呼び出しグラフの描画ロジック、インタラクション、およびUI操作を定義するJavaScriptファイルです。ブラウザ上でグラフを表示するための主要なスクリプトです。
        *   **presets/style.css**: 呼び出しグラフの見た目を定義するCSSスタイルシートです。
        *   **scripts/**: 呼び出しグラフ生成プロセスを制御するユーティリティスクリプト群です。
            *   `analyze-codeql.cjs`: CodeQLによるコード分析を実行するスクリプトです。
            *   `callgraph-utils.cjs`: 呼び出しグラフに関連する共通ユーティリティ関数を提供します。
            *   `check-codeql-exists.cjs`: CodeQLツールが存在するかどうかを確認するスクリプトです。
            *   `check-commits.cjs`: コミット履歴をチェックするためのスクリプトです。
            *   `check-node-version.cjs`: Node.jsのバージョンが要件を満たしているか確認するスクリプトです。
            *   `common-utils.cjs`: プロジェクト全体で利用される共通ユーティリティ関数を提供します。
            *   `copy-commit-results.cjs`: コミット結果をコピーするスクリプトです。
            *   `extract-sarif-info.cjs`: CodeQLの分析結果ファイル（SARIF形式）から情報を抽出するスクリプトです。
            *   `find-process-results.cjs`: プロセス結果を検索するスクリプトです。
            *   `generate-html-graph.cjs`: 分析結果を元にHTML形式の呼び出しグラフを生成するスクリプトです。
            *   `generateHTML.cjs`: HTMLファイルを生成するための汎用的なスクリプトです。
    *   **project_summary/**: プロジェクト概要や開発状況を自動生成するためのツール群が含まれます。
        *   **docs/daily-summary-setup.md**: 日次サマリーの設定に関するドキュメントです。
        *   **prompts/**: AIに渡すプロンプト定義ファイル群です。
            *   `development-status-prompt.md`: 開発状況の要約をAIに生成させるためのプロンプト定義です。
            *   `project-overview-prompt.md`: プロジェクト概要をAIに生成させるためのプロンプト定義です。
        *   **scripts/**: プロジェクト概要生成プロセスを制御するスクリプト群です。
            *   `ProjectSummaryCoordinator.cjs`: プロジェクトサマリー生成全体の調整役となるスクリプトです。
            *   **development/**: 開発状況の生成に関連するスクリプトです。
                *   `DevelopmentStatusGenerator.cjs`: 開発状況レポートを生成するスクリプトです。
                *   `GitUtils.cjs`: Gitリポジトリから情報を取得するためのユーティリティ関数を提供します。
                *   `IssueTracker.cjs`: GitHub Issuesから情報を取得・処理するためのユーティリティ関数を提供します。
            *   `generate-project-summary.cjs`: プロジェクト概要生成のメインエントリスクリプトです。
            *   **overview/**: プロジェクト概要の分析・生成に関連するスクリプトです。
                *   `CodeAnalyzer.cjs`: プロジェクトのコードを分析し、構造や内容に関する情報を抽出します。
                *   `ProjectAnalysisOrchestrator.cjs`: プロジェクト分析プロセス全体を調整し、各種分析器を連携させます。
                *   `ProjectDataCollector.cjs`: プロジェクトに関する様々なデータ（ファイル、コード、依存関係など）を収集します。
                *   `ProjectDataFormatter.cjs`: 収集したプロジェクトデータを、AIが処理しやすい形式に整形します。
                *   `ProjectOverviewGenerator.cjs`: 収集・整形されたデータとAIを活用して、プロジェクト概要を最終的に生成します。
                *   `TechStackAnalyzer.cjs`: プロジェクトで使用されている技術スタックを特定し、詳細を分析します。
            *   **shared/**: プロジェクトサマリーツール全体で共有されるユーティリティスクリプトです。
                *   `BaseGenerator.cjs`: 各種ジェネレーターの基底クラスを提供し、共通の機能やプロパティを定義します。
                *   `FileSystemUtils.cjs`: ファイルシステムの操作（ファイルの読み書き、ディレクトリの走査など）に関するユーティリティ関数を提供します。
    *   **translate/**: READMEなどの多言語翻訳を自動化するためのツール群が含まれます。
        *   **docs/TRANSLATION_SETUP.md**: 翻訳ワークフローの設定に関するドキュメントです。
        *   **scripts/translate-readme.cjs**: READMEファイルを指定された言語に自動翻訳するスクリプトです。
*   **.gitignore**: Gitバージョン管理システムにおいて、リポジトリに含めないファイルやディレクトリを指定する設定ファイルです。
*   **.vscode/settings.json**: Visual Studio Codeエディタのワークスペース固有の設定を定義するファイルです。
*   **LICENSE**: 本プロジェクトの利用条件や配布に関するライセンス情報が記述されたファイルです。
*   **README.ja.md**: プロジェクトの目的、使い方、貢献方法などを日本語で説明する主要なドキュメントファイルです。
*   **README.md**: プロジェクトの目的、使い方、貢献方法などを英語で説明する主要なドキュメントファイルです。
*   **generated-docs/**: GitHub Actionsによって自動生成されたドキュメントや成果物が格納されるディレクトリです。
    *   `callgraph.html`: 生成された関数呼び出しグラフをブラウザで表示するためのHTMLファイルです。
    *   `callgraph.js`: `presets/callgraph.js`がビルド・コピーされたもので、生成されたHTMLと共に呼び出しグラフのインタラクティブ機能を提供します。
    *   `development-status-generated-prompt.md`: 開発状況を生成するために実際にAIに渡されたプロンプトの履歴ファイルです。
    *   `development-status.md`: 自動生成された開発状況レポートです。
    *   `project-overview.md`: 自動生成されたプロジェクト概要ドキュメントです。
    *   `style.css`: `presets/style.css`がビルド・コピーされたもので、生成されたHTMLのスタイルを定義します。
*   **issue-notes/**: GitHub Issuesに関連する個別のメモや詳細情報がMarkdown形式で格納されるディレクトリです。
*   **package-lock.json**: `package.json`に記述された依存関係の正確なバージョンと依存ツリーを記録し、ビルドの再現性を保証するファイルです。
*   **package.json**: プロジェクトのメタデータ（名前、バージョン、説明など）、依存関係、およびnpmスクリプトを定義する設定ファイルです。
*   **src/main.js**: プロジェクトのメインアプリケーションのシンプルなサンプルコードが含まれるJavaScriptファイルです。

## 関数詳細説明
各関数の役割、引数、戻り値、機能を詳細に説明します。

*   **escapeHtml**:
    *   役割: 与えられた文字列内のHTML特殊文字をエスケープします。
    *   引数: `text` (string) - エスケープする文字列。
    *   戻り値: (string) - エスケープされた文字列。
    *   機能: `&`, `<`, `>`, `"`, `'` などの文字をそれぞれ `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#039;` に変換し、安全にHTMLとして表示できるようにします。
*   **getLayoutConfig**:
    *   役割: グラフのレイアウト設定を取得します。
    *   引数: なし。
    *   戻り値: (object) - レイアウト設定を含むオブジェクト。
    *   機能: グラフ表示におけるノードの配置や見た目に関する設定を返します。
*   **placeCentralNode**:
    *   役割: グラフの中心となるノードを配置します。
    *   引数: なし。
    *   戻り値: なし。
    *   機能: グラフの特定のノードを中心として、他のノードがその周りに配置されるように調整します。
*   **showNodeInfo**:
    *   役割: 特定のノードに関する情報を情報パネルに表示します。
    *   引数: `nodeId` (string) - 情報を表示するノードのID。
    *   戻り値: なし。
    *   機能: グラフ内のノードが選択された際、そのノードの詳細情報（例: 関数名、ファイルパス）をUI上の情報パネルに表示します。
*   **showEdgeInfo**:
    *   役割: 特定のエッジ（ノード間の接続線）に関する情報を情報パネルに表示します。
    *   引数: `edgeId` (string) - 情報を表示するエッジのID。
    *   戻り値: なし。
    *   機能: グラフ内のエッジが選択された際、そのエッジの詳細情報（例: 呼び出し元、呼び出し先）をUI上の情報パネルに表示します。
*   **hideInfoPanel**:
    *   役割: 情報パネルを非表示にします。
    *   引数: なし。
    *   戻り値: なし。
    *   機能: 表示されている情報パネルをUI上から隠します。
*   **showInfoPanel**:
    *   役割: 情報パネルを表示します。
    *   引数: なし。
    *   戻り値: なし。
    *   機能: 非表示になっている情報パネルをUI上に表示します。
*   **toggleInfoPanel**:
    *   役割: 情報パネルの表示/非表示を切り替えます。
    *   引数: なし。
    *   戻り値: なし。
    *   機能: 情報パネルが表示されていれば非表示にし、非表示であれば表示します。
*   **generateGitHubURL**:
    *   役割: 関連するGitHubリソースへのURLを生成します。
    *   引数: `filePath` (string), `lineNumber` (number) など - URLを生成するための情報。
    *   戻り値: (string) - 生成されたGitHubのURL。
    *   機能: 例えば、特定のファイルやコード行へのGitHub上のリンクを動的に生成します。
*   **resetLayout**:
    *   役割: グラフのレイアウトを初期状態にリセットします。
    *   引数: なし。
    *   戻り値: なし。
    *   機能: ユーザー操作などで変更されたグラフの配置やズーム状態を、デフォルトの状態に戻します。
*   **watchNodeMovementAndFixOverlapsWrap**:
    *   役割: ノードの移動を監視し、重複解消を行う処理のラッパー関数です。
    *   引数: なし。
    *   戻り値: なし。
    *   機能: `watchNodeMovementAndFixOverlaps`関数を呼び出すための準備や、後処理などを行います。
*   **watchNodeMovementAndFixOverlaps**:
    *   役割: グラフ内のノードの動きを監視し、他のノードとの重複を自動的に解消します。
    *   引数: なし。
    *   戻り値: なし。
    *   機能: グラフ内のノードが重なり合わないように、位置を調整し続けます。
*   **resolveNodeOverlaps**:
    *   役割: グラフ内のノードの重複を一度に解消します。
    *   引数: なし。
    *   戻り値: なし。
    *   機能: 複数のノードが重なり合っている場合に、それらのノードが視覚的に分離されるように位置を調整します。
*   **switchLayout**:
    *   役割: グラフのレイアウトアルゴリズムを切り替えます。
    *   引数: `layoutType` (string) - 切り替えるレイアウトの種類（例: 'tree', 'force-directed'）。
    *   戻り値: なし。
    *   機能: グラフの表示方法を、階層型、強制力指向型など、異なる視覚化スタイルに変更します。
*   **resetNodeStates**:
    *   役割: グラフ内の全てのノードの状態を初期化します。
    *   引数: なし。
    *   戻り値: なし。
    *   機能: ノードの選択状態、ハイライト、位置などをリセットし、未選択の初期状態に戻します。
*   **fitToContent**:
    *   役割: グラフの表示範囲を、全てのノードとエッジが収まるように調整します。
    *   引数: なし。
    *   戻り値: なし。
    *   機能: グラフが画面全体にフィットするようにズームレベルやパン位置を調整し、全ての要素が見えるようにします。
*   **toggleNodeLabels**:
    *   役割: グラフのノードラベルの表示/非表示を切り替えます。
    *   引数: なし。
    *   戻り値: なし。
    *   機能: ノードに付随するテキスト（例: 関数名）を隠したり表示したりします。
*   **toggleCalleeLocationFilter**:
    *   役割: 呼び出し先（Callee）の位置によるフィルタリングの有効/無効を切り替えます。
    *   引数: なし。
    *   戻り値: なし。
    *   機能: グラフ表示において、特定の場所にある呼び出し先のみを表示する/しないといったフィルタリング機能を制御します。
*   **replace**:
    *   役割: (汎用) 文字列や配列などの要素を置換します。
    *   引数: 実装依存。
    *   戻り値: 実装依存。
    *   機能: 与えられたパターンや値に基づいて、対象のデータ内の要素を新しい値に置き換えます。
*   **switch**:
    *   役割: (汎用) 複数の条件分岐を簡潔に記述します。
    *   引数: `expression` (any) - 評価する式。
    *   戻り値: 実装依存。
    *   機能: 式の評価結果に基づき、対応する処理ブロックを実行します。
*   **function**:
    *   役割: (汎用) JavaScriptで関数を定義します。
    *   引数: 定義された関数のパラメータ。
    *   戻り値: 定義された関数の戻り値。
    *   機能: 特定のタスクを実行するための再利用可能なコードブロックをカプセル化します。
*   **max**:
    *   役割: (汎用) 複数の数値の中から最大値を取得します。
    *   引数: `value1`, `value2`, ... (number) - 比較する数値。
    *   戻り値: (number) - 最大の数値。
    *   機能: 数値の集合から最も大きい値を見つけ出します。
*   **on**:
    *   役割: (汎用) イベントリスナーを要素に登録します。
    *   引数: `eventName` (string), `handler` (function) - イベント名とイベント発生時に実行する関数。
    *   戻り値: 実装依存。
    *   機能: DOM要素やオブジェクトに対して、特定のイベント（クリック、マウスオーバーなど）が発生したときに実行される処理を設定します。
*   **if**:
    *   役割: (汎用) 条件が真の場合に特定のコードブロックを実行します。
    *   引数: `condition` (boolean) - 評価する条件。
    *   戻り値: なし。
    *   機能: 条件式の結果に基づいてプログラムの実行フローを制御します。
*   **for**:
    *   役割: (汎用) 指定された回数だけコードブロックを繰り返します。
    *   引数: `initialization`, `condition`, `final-expression` - ループの制御式。
    *   戻り値: なし。
    *   機能: 配列の要素を順に処理したり、一定回数処理を繰り返したりするために使われます。
*   **ready**:
    *   役割: (汎用) ドキュメントの読み込みと準備が完了したときに特定のコードを実行します。
    *   引数: `handler` (function) - DOMがロードされたときに実行する関数。
    *   戻り値: 実装依存。
    *   機能: ウェブページがインタラクティブになる準備ができた時点でJavaScriptコードを実行するために使われます。
*   **addListener**:
    *   役割: (汎用) イベントリスナーをオブジェクトにアタッチします。
    *   引数: `eventName` (string), `listener` (function) - イベント名とイベント発生時に呼び出される関数。
    *   戻り値: 実装依存。
    *   機能: 特定のイベントが発生したときに実行されるコールバック関数を登録します。
*   **greet (src/main.js)**:
    *   役割: 挨拶メッセージを生成します。
    *   引数: `name` (string) - 挨拶の対象となる名前。
    *   戻り値: (string) - 挨拶メッセージ。
    *   機能: "Hello, [name]!"という形式の文字列を返します。
*   **main (src/main.js)**:
    *   役割: プログラムのエントリポイントです。
    *   引数: なし。
    *   戻り値: なし。
    *   機能: `greet`関数を呼び出し、その結果をコンソールに出力します。

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
Generated at: 2025-09-07 07:05:03 JST

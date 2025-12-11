Last updated: 2025-12-12

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: 
    - JavaScript: ブラウザ上で動作するインタラクティブなコールグラフの表示ロジックやイベント処理に利用されます。
    - HTML: 生成されるドキュメントの構造やWebページの作成に利用されます。
    - CSS: 生成されるWebページのスタイル設定やレイアウト調整に利用されます。
    - グラフ描画ライブラリ: コールグラフの可視化のために、ノードの配置、情報表示、インタラクションなどを提供するライブラリ（`callgraph.js`の関数群から推測）が使用されています。
- 音楽・オーディオ: 該当なし
- 開発ツール: 
    - Node.js: 共通ワークフローの自動化スクリプトを実行するための環境として広く利用されています。ファイルシステム操作、SARIF解析、HTML生成など多岐にわたる処理を実行します。
    - CodeQL: プロジェクトのソースコードに対する静的解析を行い、関数の呼び出し関係などの詳細なコード情報を抽出するために使用されます。コード品質とセキュリティの向上に貢献します。
    - Git: バージョン管理システムとしてプロジェクトの履歴管理に使用されるほか、スクリプトを通じてコミット履歴の取得などに利用されます。
- テスト: 
    - CodeQL: 直接的なテストツールではありませんが、コードの静的解析を通じて品質問題や潜在的な脆弱性を検出するため、広義の品質保証に貢献します。
- ビルドツール: 
    - CommonJS: Node.jsスクリプトのモジュールシステムとして利用され、コードの分割と再利用を可能にします。
- 言語機能: 
    - JavaScript (ECMAScript): 自動化スクリプトやフロントエンドのロジックを記述するための主要なプログラミング言語です。
    - GitHub Actions DSL (Domain Specific Language): ワークフローを定義するためのGitHub Actions独自の記述言語です。
- 自動化・CI/CD: 
    - GitHub Actions: リポジトリ全体のCI/CDプロセスを自動化し、複数プロジェクトで再利用可能な共通ワークフローを提供するプラットフォームとして中心的な役割を担っています。
- 開発標準: 
    - CodeQL: コードの品質維持とセキュリティチェックのための静的解析ツールとして、開発標準の遵守に貢献します。

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
📄 _config.yml
📁 generated-docs/
  🌐 callgraph.html
  📜 callgraph.js
  🎨 style.css
🌐 googled947dc864c270e07.html
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
  📖 29.md
  📖 3.md
  📖 30.md
  📖 4.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明
- **`.github_automation/`**: GitHub Actionsの自動化スクリプトや関連設定を格納する主要ディレクトリです。
    - **`callgraph/`**: コードの関数呼び出しグラフを生成するための機能群です。
        - **`codeql-queries/`**: CodeQL解析ツールで使用されるクエリファイル群です。
            - `callgraph.ql`: CodeQLがソースコードから関数の呼び出し関係を抽出するためのDatalogクエリ。
            - `codeql-pack.lock.yml`: CodeQLパックの依存関係を管理し、ビルドの一貫性を保証するロックファイル。
            - `qlpack.yml`: CodeQLパックのメタデータ（名前、バージョン、依存関係など）を定義するファイル。
        - **`config/`**: 設定ファイル群です。
            - `example.json`: 設定ファイルの例を示すJSONファイル。
        - **`docs/`**: ドキュメントファイル群です。
            - `callgraph.md`: 関数呼び出しグラフ生成機能に関する説明文書。
        - **`presets/`**: プリセットファイル群です。
            - `callgraph.js`: ブラウザ上で表示される関数呼び出しグラフの描画ロジック、インタラクション、レイアウトなどを定義するJavaScriptファイル。
            - `style.css`: 関数呼び出しグラフの見た目やレイアウトを定義するCSSファイル。
        - **`scripts/`**: 関数呼び出しグラフ生成プロセスを支援するNode.jsスクリプト群です。
            - `analyze-codeql.cjs`: CodeQLによるコード解析を実行し、結果を生成するスクリプト。
            - `callgraph-utils.cjs`: コールグラフ関連の汎用的なユーティリティ関数を提供するスクリプト。
            - `check-codeql-exists.cjs`: CodeQL実行環境の存在を確認するためのスクリプト。
            - `check-node-version.cjs`: 実行環境のNode.jsバージョンが要件を満たしているかを確認するスクリプト。
            - `common-utils.cjs`: プロジェクト全体で利用される共通のユーティリティ関数を提供するスクリプト。
            - `copy-commit-results.cjs`: コミット結果などの生成物を特定の場所にコピーするスクリプト。
            - `extract-sarif-info.cjs`: CodeQLのSARIF形式解析結果から必要な情報を抽出するスクリプト。
            - `find-process-results.cjs`: 特定のプロセス実行結果を検索するスクリプト。
            - `generate-html-graph.cjs`: 抽出されたコールグラフデータをもとにHTML形式のグラフページを生成するスクリプト。
            - `generateHTML.cjs`: HTML生成に関連するユーティリティスクリプト。
    - **`check_recent_human_commit/`**: 最近の人間によるコミット活動をチェックするための機能群です。
        - **`scripts/`**: スクリプト群です。
            - `check-recent-human-commit.cjs`: 特定の期間内に人間が行ったコミットが存在するかどうかを確認するスクリプト。
    - **`project_summary/`**: プロジェクトの概要や開発状況を自動生成する機能群です。
        - **`docs/`**: ドキュメントファイル群です。
            - `daily-summary-setup.md`: 日次概要レポートの設定方法に関する説明文書。
        - **`prompts/`**: プロンプト定義ファイル群です。
            - `development-status-prompt.md`: 開発状況レポート生成時に使用されるプロンプトの定義。
            - `project-overview-prompt.md`: プロジェクト概要レポート生成時に使用されるプロンプトの定義。
        - **`scripts/`**: プロジェクト概要生成に関連するNode.jsスクリプト群です。
            - `ProjectSummaryCoordinator.cjs`: プロジェクト概要生成処理全体の調整役となるスクリプト。
            - **`development/`**: 開発状況レポート生成に関連するスクリプト群です。
                - `DevelopmentStatusGenerator.cjs`: 現在の開発状況に関するレポートを生成するスクリプト。
                - `GitUtils.cjs`: Gitリポジトリ操作（コミット履歴取得など）のユーティリティ関数を提供するスクリプト。
                - `IssueTracker.cjs`: プロジェクトのIssue（課題）を追跡・管理する機能に関連するスクリプト。
            - `generate-project-summary.cjs`: プロジェクトの全体概要レポートを生成するメインスクリプト。
            - **`overview/`**: プロジェクト概要の具体的なコンテンツ生成に関連するスクリプト群です。
                - `CodeAnalyzer.cjs`: プロジェクトのコードを解析し、構造や統計情報を取得するスクリプト。
                - `ProjectAnalysisOrchestrator.cjs`: プロジェクト分析プロセスの各ステップを調整し、統括するスクリプト。
                - `ProjectDataCollector.cjs`: プロジェクトに関する様々なデータを収集するスクリプト。
                - `ProjectDataFormatter.cjs`: 収集したプロジェクトデータを整形し、レポートに適した形式に変換するスクリプト。
                - `ProjectOverviewGenerator.cjs`: 最終的なプロジェクト概要レポートのコンテンツを生成するスクリプト。
            - **`shared/`**: 複数の機能で共有される共通ユーティリティスクリプト群です。
                - `BaseGenerator.cjs`: レポート生成などのジェネレータークラスの基底となるクラス定義。
                - `FileSystemUtils.cjs`: ファイルシステム操作（ファイルの読み書き、ディレクトリ作成など）を行うユーティリティ関数。
                - `ProjectFileUtils.cjs`: プロジェクト内のファイル操作に特化したユーティリティ関数。
    - **`translate/`**: ドキュメントの翻訳機能群です。
        - **`docs/`**: ドキュメントファイル群です。
            - `TRANSLATION_SETUP.md`: 翻訳機能の設定と使用方法に関する説明文書。
        - **`scripts/`**: スクリプト群です。
            - `translate-readme.cjs`: READMEファイルを自動翻訳するためのスクリプト。
- **`.gitignore`**: Gitがバージョン管理の対象としないファイルやディレクトリのパターンを指定する設定ファイルです。
- **`.vscode/`**: Visual Studio Codeエディタのワークスペース設定を格納するディレクトリです。
    - `settings.json`: VS Codeのワークスペース固有の設定を定義するファイル。
- **`LICENSE`**: プロジェクトの利用条件や配布に関するライセンス情報が記述されたファイルです。
- **`README.ja.md`**: プロジェクトの概要を日本語で説明するメインのドキュメントファイルです。
- **`README.md`**: プロジェクトの概要を英語で説明するメインのドキュメントファイルです（通常、`README.ja.md`から自動生成されます）。
- **`_config.yml`**: GitHub Pagesで静的サイトを構築する際に使用されるJekyllの設定ファイルです。
- **`generated-docs/`**: 自動生成されたドキュメントや成果物を格納するディレクトリです。
    - `callgraph.html`: 生成された関数の呼び出しグラフをブラウザで表示するためのHTMLファイル。
    - `callgraph.js`: (内容 `.github_automation/callgraph/presets/callgraph.js` と同じ) ブラウザ上で表示される関数呼び出しグラフの描画ロジック、インタラクション、レイアウトなどを定義するJavaScriptファイル。
    - `style.css`: (内容 `.github_automation/callgraph/presets/style.css` と同じ) 関数呼び出しグラフの見た目やレイアウトを定義するCSSファイル。
- **`googled947dc864c270e07.html`**: Googleサイト認証のために配置されるHTMLファイルです。
- **`issue-notes/`**: プロジェクトのIssue番号に関連するメモや補足情報が格納されるMarkdownファイル群です。
- **`src/`**: プロジェクトの主要なソースコードを格納するディレクトリです。
    - `main.js`: プロジェクトのメインエントリポイントとなるJavaScriptファイルです。

## 関数詳細説明
- **`escapeHtml(text)`**:
    - 役割: HTMLの特殊文字（例: `<`, `>`, `&`）を安全なエンティティに変換し、XSS（クロスサイトスクリプティング）攻撃を防ぎます。
    - 引数: `text` (string) - エスケープする文字列。
    - 戻り値: (string) - エスケープされた文字列。
- **`getLayoutConfig()`**:
    - 役割: グラフの表示レイアウトに関する設定（例: ノード間の距離、配置アルゴリズム）を取得します。
    - 引数: なし。
    - 戻り値: (object) - レイアウト設定オブジェクト。
- **`placeCentralNode()`**:
    - 役割: グラフの中心となるノードを特定し、その配置を調整します。
    - 引数: なし。
    - 戻り値: なし。
- **`showNodeInfo(node)`**:
    - 役割: グラフ上の特定のノード（関数など）が選択された際に、その詳細情報を表示パネルに表示します。
    - 引数: `node` (object) - 表示するノードオブジェクト。
    - 戻り値: なし。
- **`showEdgeInfo(edge)`**:
    - 役割: グラフ上の特定のエッジ（呼び出し関係）が選択された際に、その詳細情報を表示パネルに表示します。
    - 引数: `edge` (object) - 表示するエッジオブジェクト。
    - 戻り値: なし。
- **`hideInfoPanel()`**:
    - 役割: グラフの詳細情報を表示するパネルを非表示にします。
    - 引数: なし。
    - 戻り値: なし。
- **`showInfoPanel(title, content)`**:
    - 役割: 指定されたタイトルと内容で情報表示パネルを表示します。
    - 引数: `title` (string) - パネルのタイトル。`content` (string) - パネルに表示するHTMLコンテンツ。
    - 戻り値: なし。
- **`toggleInfoPanel()`**:
    - 役割: 情報表示パネルの表示状態（表示/非表示）を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **`generateGitHubURL(path, line, column)`**:
    - 役割: コードのファイルパス、行、列情報からGitHub上の該当箇所へのURLを生成します。
    - 引数: `path` (string), `line` (number), `column` (number)。
    - 戻り値: (string) - 生成されたGitHub URL。
- **`resetLayout()`**:
    - 役割: グラフの現在のレイアウトを初期状態にリセットします。
    - 引数: なし。
    - 戻り値: なし。
- **`watchNodeMovementAndFixOverlapsWrap()`**:
    - 役割: ノードの移動を監視し、重なりを修正する処理を安全に実行するためのラッパー関数。
    - 引数: なし。
    - 戻り値: なし。
- **`watchNodeMovementAndFixOverlaps()`**:
    - 役割: グラフ内のノードが移動した際に、他のノードとの重なりを検出し、自動的に位置を調整して重なりを解消します。
    - 引数: なし。
    - 戻り値: なし。
- **`resolveNodeOverlaps()`**:
    - 役割: グラフ内の全てのノード間の重なりを検出し、解決します。
    - 引数: なし。
    - 戻り値: なし。
- **`switchLayout(layoutName)`**:
    - 役割: グラフの表示レイアウトを、指定された名前の別のレイアウトに切り替えます。
    - 引数: `layoutName` (string) - 切り替えるレイアウトの名前。
    - 戻り値: なし。
- **`resetNodeStates()`**:
    - 役割: グラフ内の全てのノードの選択状態やハイライト状態などをリセットし、初期状態に戻します。
    - 引数: なし。
    - 戻り値: なし。
- **`fitToContent()`**:
    - 役割: グラフ全体が現在のビューポートに収まるようにズームレベルとパン位置を調整します。
    - 引数: なし。
    - 戻り値: なし。
- **`toggleNodeLabels()`**:
    - 役割: グラフノードのラベル（名前）の表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **`toggleCalleeLocationFilter()`**:
    - 役割: 呼び出し先（Callee）の場所（ファイルや行など）に基づいてグラフをフィルタリングする機能の有効/無効を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **`replace()`**:
    - 役割: 文字列置換などの一般的な用途で使われる可能性のある汎用関数。具体的な文脈はコードに依存します。
    - 引数: 文脈により異なる。
    - 戻り値: 文脈により異なる。
- **`switch()`**:
    - 役割: JavaScriptの制御構文の一部として認識されているか、または特定の切り替えロジックをカプセル化した関数として機能します。
    - 引数: 文脈により異なる。
    - 戻り値: 文脈により異なる。
- **`function()`**:
    - 役割: 無名関数またはコールバック関数として、イベントハンドラなどで使用されることがあります。
    - 引数: 文脈により異なる。
    - 戻り値: 文脈により異なる。
- **`max()`**:
    - 役割: 最大値を計算するなどの数学的な操作や、コレクションから最大要素を見つけるために使用される可能性があります。
    - 引数: 文脈により異なる。
    - 戻り値: 文脈により異なる。
- **`on()`**:
    - 役割: イベントリスナーを登録するために使用される一般的な関数（例: jQuery, Cytoscape.jsなどのライブラリ）。特定のイベントが発生した際にコールバック関数を実行します。
    - 引数: `eventName` (string), `handler` (function)。
    - 戻り値: 文脈により異なる。
- **`if()`**:
    - 役割: JavaScriptの条件分岐構文の一部として認識されているか、または条件に基づいて処理を実行する関数として機能します。
    - 引数: 文脈により異なる。
    - 戻り値: 文脈により異なる。
- **`for()`**:
    - 役割: JavaScriptのループ構文の一部として認識されているか、またはコレクションの各要素に対して処理を実行する関数として機能します。
    - 引数: 文脈により異なる。
    - 戻り値: 文脈により異なる。
- **`ready()`**:
    - 役割: ドキュメントの準備が完了した際や、特定の初期化処理が完了した際に実行されるコールバックを登録するために使用される関数（例: jQuery）。
    - 引数: `handler` (function)。
    - 戻り値: 文脈により異なる。
- **`addListener()`**:
    - 役割: イベントリスナーを登録するために使用される一般的な関数（例: Node.jsのEventEmitter、DOM API）。
    - 引数: `eventName` (string), `handler` (function)。
    - 戻り値: 文脈により異なる。
- **`greet(name)` (`src/main.js`)**:
    - 役割: 指定された名前に対して挨拶メッセージを生成します。
    - 引数: `name` (string) - 挨拶の対象となる名前。
    - 戻り値: (string) - 挨拶メッセージ。
- **`main()` (`src/main.js`)**:
    - 役割: プロジェクトの主要な処理を実行するエントリポイント関数です。
    - 引数: なし。
    - 戻り値: なし。

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
Generated at: 2025-12-12 07:06:02 JST

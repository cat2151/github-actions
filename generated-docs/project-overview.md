Last updated: 2025-08-25

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド:
    - HTML: Call Graph等の可視化ドキュメントの構造定義
    - CSS: Call Graph等の可視化ドキュメントのスタイル定義（`.github_automation/callgraph/presets/style.css`）
    - JavaScript: Call Graphのインタラクティブな表示・操作ロジック（`.github_automation/callgraph/presets/callgraph.js`）
- 音楽・オーディオ:
    - Tone.js: Web Audio APIを用いた音楽・オーディオ処理のためのJavaScriptライブラリ
    - Web Audio API: ブラウザ上で音声を処理するための標準API（Tone.js経由で利用）
    - MML (Music Macro Language): 音楽記法を解析するためのパーサー
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するための環境
    - npm scripts: `package.json`で定義されたスクリプトを実行するタスクランナー
    - Google Generative AI (@google/generative-ai): AIによる文書生成や要約をサポートするAPIクライアント
    - @octokit/rest: GitHub REST APIをJavaScriptから利用するためのライブラリ
    - CodeQL: コードのセキュリティ分析やセマンティック分析（関数呼び出しグラフ生成など）を行うツール
- テスト: [N/A] (提供情報に記載なし)
- ビルドツール: [N/A] (npm scriptsが一部ビルド的な役割も持つが、明確なビルドツールは記載なし)
- 言語機能:
    - JavaScript: プロジェクトの主要なスクリプト言語
- 自動化・CI/CD:
    - GitHub Actions: コードの変更を検知して自動でタスクを実行するCI/CDプラットフォーム。以下のワークフローが含まれる:
        - プロジェクト要約自動生成
        - Issue自動管理
        - README多言語翻訳
        - i18n automation (自動翻訳ワークフロー)
- 開発標準: [N/A] (提供情報に記載なし)

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
- **.github_automation/:** GitHub Actionsによる自動化関連のスクリプトや設定を格納するルートディレクトリ。
    - **callgraph/:** コードの関数呼び出しグラフを生成・可視化するための機能群。
        - **codeql-queries/:** CodeQLを使用して関数呼び出しグラフを生成するためのクエリファイル群。
            - `callgraph.ql`: 関数呼び出し関係を抽出するCodeQLクエリ。
            - `codeql-pack.lock.yml`: CodeQLパックの依存関係をロックするファイル。
            - `qlpack.yml`: CodeQLパックの設定ファイル。
        - **config/:** 設定ファイル群。
            - `example.json`: 設定の例。
        - **docs/:** ドキュメントファイル。
            - `callgraph.md`: 関数呼び出しグラフ機能に関する説明ドキュメント。
        - **presets/:** Call Graphの表示に関するプリセットファイル。
            - `callgraph.js`: Call Graphの描画、インタラクション、レイアウト調整などを行うJavaScriptロジック。
            - `style.css`: Call Graphの表示スタイルを定義するCSSファイル。
        - **scripts/:** Call Graphの生成から表示までを制御するスクリプト群。
            - `analyze-codeql.cjs`: CodeQL分析を実行するスクリプト。
            - `callgraph-utils.cjs`: Call Graph関連のユーティリティ関数を集めたスクリプト。
            - `check-codeql-exists.cjs`: CodeQLが環境に存在するか確認するスクリプト。
            - `check-commits.cjs`: コミット履歴をチェックするスクリプト。
            - `check-node-version.cjs`: Node.jsのバージョンをチェックするスクリプト。
            - `common-utils.cjs`: 共通で利用されるユーティリティ関数を集めたスクリプト。
            - `copy-commit-results.cjs`: コミット結果をコピーするスクリプト。
            - `extract-sarif-info.cjs`: SARIF形式の分析結果から情報を抽出するスクリプト。
            - `find-process-results.cjs`: プロセス結果を検索するスクリプト。
            - `generate-html-graph.cjs`: HTML形式のグラフを生成するスクリプト。
            - `generateHTML.cjs`: HTMLファイルを生成する汎用スクリプト。
    - **project_summary/:** プロジェクトの概要や開発状況を自動生成する機能群。
        - **docs/:** ドキュメントファイル。
            - `daily-summary-setup.md`: 日次サマリーの設定に関するドキュメント。
        - **prompts/:** AIに与えるプロンプトの定義ファイル群。
            - `development-status-prompt.md`: 開発状況レポート生成用のプロンプト。
            - `project-overview-prompt.md`: プロジェクト概要生成用のプロンプト。
        - **scripts/:** プロジェクトサマリー生成のコアロジック。
            - `ProjectSummaryCoordinator.cjs`: プロジェクトサマリー生成全体の調整役。
            - **development/:** 開発状況レポートに関連するスクリプト。
                - `DevelopmentStatusGenerator.cjs`: 開発状況レポートを生成する。
                - `GitUtils.cjs`: Gitリポジトリに関するユーティリティ関数。
                - `IssueTracker.cjs`: GitHub Issueの情報を追跡・処理する。
            - `generate-project-summary.cjs`: プロジェクトサマリーを生成するメインスクリプト。
            - **overview/:** プロジェクト概要レポートに関連するスクリプト。
                - `CodeAnalyzer.cjs`: コードの静的分析を行う。
                - `ProjectAnalysisOrchestrator.cjs`: プロジェクト分析プロセスを調整する。
                - `ProjectDataCollector.cjs`: プロジェクトデータを収集する。
                - `ProjectDataFormatter.cjs`: 収集したデータを整形する。
                - `ProjectOverviewGenerator.cjs`: プロジェクト概要を生成する。
                - `TechStackAnalyzer.cjs`: プロジェクトの技術スタックを分析する。
            - **shared/:** 複数のスクリプトで共有されるユーティリティ関数。
                - `BaseGenerator.cjs`: 各種レポート生成器の基底クラス。
                - `FileSystemUtils.cjs`: ファイルシステム操作に関するユーティリティ関数。
    - **translate/:** READMEファイルなどの多言語翻訳機能。
        - **docs/:** ドキュメントファイル。
            - `TRANSLATION_SETUP.md`: 翻訳機能の設定に関するドキュメント。
        - **scripts/:** 翻訳処理を実行するスクリプト。
            - `translate-readme.cjs`: READMEファイルを自動翻訳するスクリプト。
- **.gitignore:** Gitが追跡しないファイルやディレクトリを指定する設定ファイル。
- **LICENSE:** プロジェクトのライセンス情報。
- **README.ja.md:** プロジェクトの日本語版説明ドキュメント。
- **README.md:** プロジェクトの英語版説明ドキュメント。
- **generated-docs/:** GitHub Actionsによって自動生成されたドキュメントやレポートを格納するディレクトリ。
    - `callgraph.html`: 生成された関数呼び出しグラフをブラウザで表示するためのHTMLファイル。
    - `callgraph.js`: 生成された関数呼び出しグラフのインタラクティブな動作を制御するJavaScript（`presets/callgraph.js`の出力版）。
    - `development-status.md`: 自動生成された開発状況レポート。
    - `project-overview.md`: 自動生成されたプロジェクト概要レポート。
    - `style.css`: 生成されたドキュメントのスタイルシート（`presets/style.css`の出力版）。
- **issue-notes/:** GitHub Issueに関連するメモや詳細情報を格納するディレクトリ。各ファイルは特定のIssue番号に対応する。
- **package-lock.json:** `package.json`に基づく依存関係の厳密なバージョンを記録するファイル。
- **package.json:** Node.jsプロジェクトのメタデータ、依存関係、スクリプトコマンドなどを定義するファイル。
- **src/:** プロジェクトのソースコードを格納するディレクトリ。
    - `main.js`: プロジェクトのメインエントリポイントとなるJavaScriptファイル。

## 関数詳細説明
- **escapeHtml(text):**
    - 役割: HTMLの特殊文字（`&`, `<`, `>`, `"`, `'`）を対応するHTMLエンティティに変換し、XSS攻撃などを防ぐために使用されます。
    - 引数: `text` (string) - エスケープ対象の文字列。
    - 戻り値: (string) - エスケープされた文字列。
- **getLayoutConfig():**
    - 役割: グラフのレイアウトに関する設定を取得します。
    - 引数: なし。
    - 戻り値: (object) - レイアウト設定オブジェクト。
- **placeCentralNode():**
    - 役割: グラフの中央にノードを配置します。
    - 引数: なし。
    - 戻り値: なし。
- **showNodeInfo():**
    - 役割: 選択されたノード（グラフ要素）の詳細情報を表示します。
    - 引数: なし。
    - 戻り値: なし。
- **showEdgeInfo():**
    - 役割: 選択されたエッジ（グラフの接続線）の詳細情報を表示します。
    - 引数: なし。
    - 戻り値: なし。
- **hideInfoPanel():**
    - 役割: 情報表示パネルを非表示にします。
    - 引数: なし。
    - 戻り値: なし。
- **showInfoPanel():**
    - 役割: 情報表示パネルを表示します。
    - 引数: なし。
    - 戻り値: なし。
- **toggleInfoPanel():**
    - 役割: 情報表示パネルの表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **generateGitHubURL():**
    - 役割: 関連するGitHubリソースへのURLを生成します。
    - 引数: なし。
    - 戻り値: (string) - 生成されたGitHub URL。
- **resetLayout():**
    - 役割: グラフのレイアウトを初期状態にリセットします。
    - 引数: なし。
    - 戻り値: なし。
- **watchNodeMovementAndFixOverlapsWrap():**
    - 役割: ノードの動きを監視し、重なりを修正する処理をラップします。
    - 引数: なし。
    - 戻り値: なし。
- **watchNodeMovementAndFixOverlaps():**
    - 役割: ノードの動きを監視し、互いに重ならないように位置を調整します。
    - 引数: なし。
    - 戻り値: なし。
- **resolveNodeOverlaps():**
    - 役割: ノード間の重なりを解消します。
    - 引数: なし。
    - 戻り値: なし。
- **switchLayout():**
    - 役割: グラフのレイアウト方式を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **resetNodeStates():**
    - 役割: 全てのノードの状態（選択状態、ハイライトなど）をリセットします。
    - 引数: なし。
    - 戻り値: なし。
- **fitToContent():**
    - 役割: グラフの表示範囲をコンテンツ全体に合わせて調整します。
    - 引数: なし。
    - 戻り値: なし。
- **toggleNodeLabels():**
    - 役割: ノードのラベル表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **toggleCalleeLocationFilter():**
    - 役割: 呼び出し先（Callee）の位置によるフィルタリングを切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **replace():**
    - 役割: 文字列置換処理を行います。具体的な用途はコンテキストに依存します。
    - 引数: なし。
    - 戻り値: なし。
- **switch():**
    - 役割: `switch`文として、条件に応じた処理を実行します。
    - 引数: なし。
    - 戻り値: なし。
- **function():**
    - 役割: 無名関数または特定のコンテキストで定義される関数。具体的な役割はコード内の定義に依存します。
    - 引数: なし。
    - 戻り値: なし。
- **max():**
    - 役割: 最大値を計算する関数。
    - 引数: なし。
    - 戻り値: なし。
- **on():**
    - 役割: イベントリスナーを登録する関数。
    - 引数: なし。
    - 戻り値: なし。
- **if():**
    - 役割: `if`文として、条件分岐処理を実行します。
    - 引数: なし。
    - 戻り値: なし。
- **for():**
    - 役割: `for`ループとして、繰り返し処理を実行します。
    - 引数: なし。
    - 戻り値: なし。
- **ready():**
    - 役割: ドキュメントがロードされた後の処理を定義するイベントハンドラ。
    - 引数: なし。
    - 戻り値: なし。
- **addListener():**
    - 役割: イベントリスナーを追加する関数。
    - 引数: なし。
    - 戻り値: なし。
- **greet(name):** (src/main.js)
    - 役割: 指定された名前に対して挨拶メッセージを生成します。
    - 引数: `name` (string) - 挨拶の対象となる名前。
    - 戻り値: (string) - 挨拶メッセージ。
- **main():** (src/main.js)
    - 役割: プロジェクトの主要な実行ロジックを含むメイン関数です。
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
Generated at: 2025-08-25 07:04:38 JST

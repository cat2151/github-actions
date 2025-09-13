Last updated: 2025-09-14

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: HTML, CSS, JavaScript (Callgraphの描画に利用), Cy.js (グラフ描画ライブラリと推定)
- 音楽・オーディオ: Tone.js (Web Audio API音声ライブラリ), Web Audio API (ブラウザ音声技術), MML (Music Macro Language - 音楽記法パーサー)
- 開発ツール: Node.js runtime (JavaScript実行環境), npm scripts (タスクランナー), Google Generative AI (AI文書生成サポート), @octokit/rest (GitHub API連携)
- テスト: CodeQL (静的コード解析による品質・セキュリティチェック)
- ビルドツール: Node.js runtime, npm scripts (タスク実行・管理)
- 言語機能: JavaScript (ECMAScript仕様)
- 自動化・CI/CD: GitHub Actions (CI/CD自動化プラットフォーム)
- 開発標準: CodeQL (コード品質およびセキュリティ標準の自動チェック)

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
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLクエリ。JavaScript/TypeScriptコードベースにおける関数の呼び出し関係を分析し、コールグラフデータを抽出するために使用されます。
- **.github_automation/callgraph/config/example.json**: コールグラフ生成に関する設定の例を示したJSONファイルです。
- **.github_automation/callgraph/docs/callgraph.md**: コールグラフ自動生成ワークフローに関する説明ドキュメントです。
- **.github_automation/callgraph/presets/callgraph.js**: コールグラフのインタラクティブな表示と操作のためのJavaScriptコード。Cy.jsライブラリを使用してグラフの描画、ノード・エッジ情報の表示、レイアウト調整などを行います。
- **.github_automation/callgraph/presets/style.css**: コールグラフの見た目を定義するCSSスタイルシートです。
- **.github_automation/callgraph/scripts/**:
    - **analyze-codeql.cjs**: CodeQL分析を実行し、結果を処理するスクリプト。
    - **callgraph-utils.cjs**: コールグラフ生成プロセスで使用される共通ユーティリティ関数を集めたスクリプト。
    - **check-codeql-exists.cjs**: CodeQLが環境に存在するかを確認するスクリプト。
    - **check-commits.cjs**: コミット履歴をチェックするためのスクリプト。
    - **check-node-version.cjs**: Node.jsのバージョンを確認するスクリプト。
    - **common-utils.cjs**: プロジェクト全体で利用される共通のユーティリティ関数。
    - **copy-commit-results.cjs**: コミット結果をコピーするスクリプト。
    - **extract-sarif-info.cjs**: CodeQLのSARIF出力から情報を抽出するスクリプト。
    - **find-process-results.cjs**: プロセス結果を検索するスクリプト。
    - **generate-html-graph.cjs**: CodeQLの結果を基にHTML形式のコールグラフを生成するスクリプト。
    - **generateHTML.cjs**: HTMLファイルを生成するための汎用スクリプト。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: プロジェクトのデイリーサマリー自動生成に関する設定ドキュメントです。
- **.github_automation/project_summary/prompts/**:
    - **development-status-prompt.md**: 開発状況サマリー生成のためのプロンプトテンプレート。
    - **project-overview-prompt.md**: プロジェクト概要生成のためのプロンプトテンプレート。
- **.github_automation/project_summary/scripts/**:
    - **ProjectSummaryCoordinator.cjs**: プロジェクトサマリー生成プロセス全体の調整を行うスクリプト。
    - **development/**: 開発状況レポート生成に関連するスクリプト群。
        - **DevelopmentStatusGenerator.cjs**: 開発状況レポートを生成するスクリプト。
        - **GitUtils.cjs**: Gitリポジトリ操作に関するユーティリティ関数。
        - **IssueTracker.cjs**: Issueトラッキングシステムと連携するスクリプト。
    - **generate-project-summary.cjs**: プロジェクト概要を生成するメインスクリプト。
    - **overview/**: プロジェクト概要生成に関連するスクリプト群。
        - **CodeAnalyzer.cjs**: コードベースの分析を行うスクリプト。
        - **ProjectAnalysisOrchestrator.cjs**: プロジェクト分析のオーケストレーションを行うスクリプト。
        - **ProjectDataCollector.cjs**: プロジェクト関連データを収集するスクリプト。
        - **ProjectDataFormatter.cjs**: 収集したデータを整形するスクリプト。
        - **ProjectOverviewGenerator.cjs**: プロジェクト概要テキストを生成するスクリプト。
        - **TechStackAnalyzer.cjs**: 技術スタックを分析するスクリプト。
    - **shared/**: サマリー生成プロセス全体で共有されるユーティリティスクリプト群。
        - **BaseGenerator.cjs**: 各種ジェネレータの基底クラス。
        - **FileSystemUtils.cjs**: ファイルシステム操作に関するユーティリティ関数。
        - **ProjectFileUtils.cjs**: プロジェクトファイルの操作に関するユーティリティ関数。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: READMEの多言語翻訳自動化に関する設定ドキュメントです。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルの多言語翻訳を自動化するスクリプトです。
- **.gitignore**: Gitが追跡しないファイルやディレクトリを指定する設定ファイルです。
- **.vscode/settings.json**: VS Codeエディタのワークスペース固有の設定ファイルです。
- **LICENSE**: プロジェクトのライセンス情報です。
- **README.ja.md**: プロジェクトの日本語版説明書です。
- **README.md**: プロジェクトの英語版説明書です。
- **generated-docs/**:
    - **callgraph.html**: 自動生成されたHTML形式のコールグラフ表示ページです。
    - **callgraph.js**: `presets/callgraph.js`と同じ内容で、生成された`callgraph.html`で使用されるJavaScriptファイルです。
    - **development-status-generated-prompt.md**: 開発状況レポート生成のために使用されたプロンプトの自動生成版。
    - **development-status.md**: 自動生成された開発状況レポートです。
    - **project-overview.md**: 自動生成されたプロジェクト概要レポートです。
    - **style.css**: `presets/style.css`と同じ内容で、生成された`callgraph.html`で使用されるCSSファイルです。
- **issue-notes/**: GitHub Issuesに関連するメモや詳細情報を格納するMarkdownファイル群です。
- **package-lock.json**: `package.json`に定義された依存関係の具体的なバージョンをロックするファイルです。
- **package.json**: Node.jsプロジェクトのメタデータ、スクリプト、依存関係を定義するファイルです。
- **src/main.js**: プロジェクトのメインエントリポイントまたは簡単なテスト用のJavaScriptファイルです。

## 関数詳細説明
- **escapeHtml** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: HTMLの特殊文字をエスケープし、安全な文字列として扱うためのユーティリティ関数。
    - 引数: `str` (string) - エスケープ対象の文字列。
    - 戻り値: エスケープされた文字列。
- **getLayoutConfig** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフのレイアウト設定を生成または取得する。
    - 引数: なし。
    - 戻り値: レイアウト設定オブジェクト。
- **placeCentralNode** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 特定のノードをグラフの中心に配置する。
    - 引数: `node` (object) - 対象のノードオブジェクト。
    - 戻り値: なし。
- **showNodeInfo** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフのノードに関する詳細情報をパネルに表示する。
    - 引数: `node` (object) - 情報表示対象のノードオブジェクト。
    - 戻り値: なし。
- **showEdgeInfo** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフのエッジ（連結線）に関する詳細情報をパネルに表示する。
    - 引数: `edge` (object) - 情報表示対象のエッジオブジェクト。
    - 戻り値: なし。
- **hideInfoPanel** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 情報を表示するパネルを非表示にする。
    - 引数: なし。
    - 戻り値: なし。
- **showInfoPanel** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 情報を表示するパネルを表示する。
    - 引数: なし。
    - 戻り値: なし。
- **toggleInfoPanel** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 情報パネルの表示/非表示を切り替える。
    - 引数: なし。
    - 戻り値: なし。
- **generateGitHubURL** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 関連するGitHubリポジトリやファイルへのURLを生成する。
    - 引数: `path` (string) - GitHub上のパス。
    - 戻り値: 生成されたURL文字列。
- **resetLayout** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフのレイアウトを初期状態にリセットする。
    - 引数: なし。
    - 戻り値: なし。
- **watchNodeMovementAndFixOverlapsWrap** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: ノードの動きを監視し、重なりを修正する処理のラッパー関数。
    - 引数: なし。
    - 戻り値: なし。
- **watchNodeMovementAndFixOverlaps** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフ内のノードの移動を監視し、ノード間の重なりが発生しないように位置を調整する。
    - 引数: なし。
    - 戻り値: なし。
- **resolveNodeOverlaps** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 重なっているノードの位置を解決し、互いに離れるように調整する。
    - 引数: なし。
    - 戻り値: なし。
- **switchLayout** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフのレイアウトアルゴリズムを切り替える。
    - 引数: `layoutName` (string) - 切り替えるレイアウトの名前。
    - 戻り値: なし。
- **resetNodeStates** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフ内のすべてのノードの状態（選択状態、ハイライトなど）をリセットする。
    - 引数: なし。
    - 戻り値: なし。
- **fitToContent** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフ全体がビューポート内に収まるようにズームレベルを調整する。
    - 引数: なし。
    - 戻り値: なし。
- **toggleNodeLabels** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: ノードのラベルの表示/非表示を切り替える。
    - 引数: なし。
    - 戻り値: なし。
- **toggleCalleeLocationFilter** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 呼び出された関数の位置に基づくフィルタの適用/解除を切り替える。
    - 引数: なし。
    - 戻り値: なし。
- **replace** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 文字列内のパターンを別の文字列に置換する。
    - 引数: `pattern`, `replacement`。
    - 戻り値: 置換後の文字列。
- **switch** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 複数の条件に基づいて異なる処理パスを実行する制御構造の開始点として検出されたコードブロック。
    - 引数: なし（特定の引数を取る関数ではないが、CodeQLがブロックを検出）。
    - 戻り値: なし。
- **function** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 無名関数やコールバック関数として検出されたコードブロック。特定のタスクを実行するために定義されます。
    - 引数: 文脈に依存。
    - 戻り値: 文脈に依存。
- **max** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 複数の値の中から最大値を取得する。通常は`Math.max`または類似のユーティリティとして使用されます。
    - 引数: `value1`, `value2`, ... (number)。
    - 戻り値: 最大値 (number)。
- **on** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 特定のイベントが発生した際に実行されるイベントリスナーを登録する。
    - 引数: `eventName`, `handlerFunction`。
    - 戻り値: イベントを発生させるオブジェクト自身。
- **if** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 指定された条件が真の場合にのみコードブロックを実行する条件分岐の開始点として検出されたコードブロック。
    - 引数: なし（特定の引数を取る関数ではないが、CodeQLがブロックを検出）。
    - 戻り値: なし。
- **for** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 指定された回数だけコードブロックを繰り返し実行するループ処理の開始点として検出されたコードブロック。
    - 引数: なし（特定の引数を取る関数ではないが、CodeQLがブロックを検出）。
    - 戻り値: なし。
- **ready** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: DOM（文書オブジェクトモデル）が完全にロードされ、操作可能になったときに実行されるコールバックを登録する。
    - 引数: `handlerFunction`。
    - 戻り値: なし。
- **addListener** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: イベントリスナーを追加する。`on`と同様の機能を持つが、別のAPIとして提供されることがある。
    - 引数: `eventName`, `listenerFunction`。
    - 戻り値: なし。
- **greet** (src/main.js):
    - 役割: 指定された名前に挨拶するメッセージを生成する。
    - 引数: `name` (string) - 挨拶の対象となる名前。
    - 戻り値: 挨拶メッセージ (string)。
- **main** (src/main.js):
    - 役割: プログラムの主要な実行ロジックを含むエントリポイント関数。`greet`関数を呼び出して挨拶メッセージを表示します。
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
Generated at: 2025-09-14 07:04:54 JST

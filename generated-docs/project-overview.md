Last updated: 2026-02-11

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: HTML, CSS, JavaScript (主に、動的な関数呼び出しグラフのWebベースUI表示に利用されています。)
- 音楽・オーディオ: なし (このプロジェクトでは音楽・オーディオ関連の技術は使用されていません。)
- 開発ツール: GitHub Actions (リポジトリのCI/CD機能の基盤として、共通ワークフローの実行環境を提供), Node.js (各種自動化スクリプトの実行環境), Python (一部のユーティリティスクリプト実行), CodeQL (コードの静的解析を行い、品質・セキュリティを保証), Visual Studio Code (開発環境の構成管理), Gemini API (READMEの自動翻訳に利用)。
- テスト: なし (明示的なテストフレームワークは使用されていませんが、CodeQLによる静的解析がコード品質の向上に寄与します。)
- ビルドツール: なし (一般的なビルドツールは明示されていませんが、GitHub Actionsワークフローが自動化されたプロセスを構築します。)
- 言語機能: JavaScript (Node.js環境で動作するスクリプトの中心言語), Python (大容量ファイルチェックなど一部スクリプト), CodeQL (CodeQLクエリの記述言語)。
- 自動化・CI/CD: GitHub Actions (複数プロジェクトで再利用可能な共通ワークフローを提供し、継続的インテグレーション・デリバリーを実現), Node.js (CI/CDプロセス内のスクリプト実行に利用)。
- 開発標準: CodeQL (コードベースの品質とセキュリティを静的解析により維持するための標準)。

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
  📁 check-large-files/
    📖 README.md
    📄 check-large-files.toml.example
    📁 scripts/
      📄 check_large_files.py
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
  📖 31.md
  📖 33.md
  📖 35.md
  📖 4.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLを用いてコードベースから関数呼び出しグラフを抽出するためのクエリ定義ファイルです。
- **.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係を固定し、一貫した解析を保証するファイルです。
- **.github_automation/callgraph/codeql-queries/qlpack.yml**: CodeQLパックのメタデータと設定を定義するファイルです。
- **.github_automation/callgraph/config/example.json**: 関数呼び出しグラフ生成に関する設定のサンプルを提供するファイルです。
- **.github_automation/callgraph/docs/callgraph.md**: 関数呼び出しグラフ機能に関する詳細な説明と使用方法を記述したドキュメントです。
- **.github_automation/callgraph/presets/callgraph.js**: 関数呼び出しグラフのWeb UIにおけるインタラクション、レイアウト、表示ロジックを定義するJavaScriptファイルです。
- **.github_automation/callgraph/presets/style.css**: 関数呼び出しグラフのWeb UIの見た目やスタイルを定義するCSSファイルです。
- **.github_automation/callgraph/scripts/analyze-codeql.cjs**: CodeQLを実行してコードを解析し、解析結果を生成するJavaScriptスクリプトです。
- **.github_automation/callgraph/scripts/callgraph-utils.cjs**: 関数呼び出しグラフの生成と表示に関する様々なユーティリティ関数を集めたスクリプトです。
- **.github_automation/callgraph/scripts/check-codeql-exists.cjs**: 実行環境にCodeQLがインストールされているかを確認するJavaScriptスクリプトです。
- **.github_automation/callgraph/scripts/check-node-version.cjs**: 実行環境のNode.jsバージョンが要件を満たしているかを確認するJavaScriptスクリプトです。
- **.github_automation/callgraph/scripts/common-utils.cjs**: プロジェクト全体で共通的に利用される汎用的なユーティリティ関数群です。
- **.github_automation/callgraph/scripts/copy-commit-results.cjs**: 特定のコミットに関連する結果ファイルをコピーするためのスクリプトです。
- **.github_automation/callgraph/scripts/extract-sarif-info.cjs**: CodeQLの出力形式であるSARIFファイルから必要な情報を抽出するJavaScriptスクリプトです。
- **.github_automation/callgraph/scripts/find-process-results.cjs**: 特定のプロセスに関連する結果ファイルを検索するためのスクリプトです。
- **.github_automation/callgraph/scripts/generate-html-graph.cjs**: CodeQLの解析結果を基に、インタラクティブなHTML形式の関数呼び出しグラフを生成するJavaScriptスクリプトです。
- **.github_automation/callgraph/scripts/generateHTML.cjs**: HTMLコンテンツの生成に関連する汎用的な機能を提供するJavaScriptスクリプトです。
- **.github_automation/check-large-files/README.md**: リポジトリ内の大容量ファイルを検出する機能に関する説明ドキュメントです。
- **.github_automation/check-large-files/check-large-files.toml.example**: 大容量ファイルチェック機能の設定例を記述したTOML形式のファイルです。
- **.github_automation/check-large-files/scripts/check_large_files.py**: 指定されたファイルサイズ制限を超えるファイルを検出するPythonスクリプトです。
- **.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs**: 最近のコミットが人間によって行われたものか（ボットではないか）をチェックするJavaScriptスクリプトです。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: 日次プロジェクトサマリーのセットアップ方法に関するドキュメントです。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: プロジェクトの開発状況を生成するためのプロンプトのテンプレートファイルです。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: プロジェクト概要を生成するためのプロンプトのテンプレートファイルです。
- **.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs**: プロジェクトサマリー生成プロセスの全体を調整し、各サブコンポーネントを連携させるJavaScriptスクリプトです。
- **.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs**: プロジェクトの開発状況に関するレポートを生成するJavaScriptスクリプトです。
- **.github_automation/project_summary/scripts/development/GitUtils.cjs**: Gitリポジトリから情報を取得するためのユーティリティ関数群を提供するJavaScriptスクリプトです。
- **.github_automation/project_summary/scripts/development/IssueTracker.cjs**: GitHub Issuesから情報を取得し、開発状況レポートに組み込むためのユーティリティ関数を提供するJavaScriptスクリプトです。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: プロジェクトサマリー生成のメインエントリスクリプトであり、各種ジェネレータを呼び出して最終的なサマリーを出力します。
- **.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs**: プロジェクトのソースコードを解析し、構造や統計情報を収集するJavaScriptスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs**: プロジェクト分析プロセス全体の流れを管理し、複数のデータ収集・解析ステップを調整するJavaScriptスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs**: プロジェクトに関連する様々なデータ（ファイル、コード、Git履歴など）を収集するJavaScriptスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs**: 収集した生データを、サマリー生成に適した形式に整形するJavaScriptスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs**: プロジェクトの概要レポートを生成するJavaScriptスクリプトです。
- **.github_automation/project_summary/scripts/shared/BaseGenerator.cjs**: 各種サマリージェネレータの共通基盤となるクラスを提供するJavaScriptスクリプトです。
- **.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs**: ファイルシステム操作（ファイルの読み書き、ディレクトリ走査など）に関するユーティリティ関数を提供するJavaScriptスクリプトです。
- **.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs**: プロジェクト内のファイルに関する操作（特定のファイルの検索、コンテンツ読み込みなど）を扱うユーティリティ関数を提供するJavaScriptスクリプトです。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: README自動翻訳機能のセットアップ方法に関するドキュメントです。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルを自動的に異なる言語に翻訳するJavaScriptスクリプトです。
- **.gitignore**: Gitが追跡しないファイルやディレクトリを指定する設定ファイルです。
- **.vscode/settings.json**: Visual Studio Codeのワークスペース固有の設定を定義するファイルです。
- **LICENSE**: プロジェクトのライセンス情報が記載されたファイルです。
- **README.ja.md**: プロジェクトの日本語版説明書です。
- **README.md**: プロジェクトの英語版説明書で、通常`README.ja.md`から自動生成されます。
- **_config.yml**: GitHub Pagesなどの静的サイトジェネレータ（Jekyllなど）のための設定ファイルです。
- **generated-docs/callgraph.html**: 自動生成されたインタラクティブな関数呼び出しグラフを表示するHTMLファイルです。
- **generated-docs/callgraph.js**: `callgraph.html`のグラフ表示ロジックを制御するJavaScriptファイルです。
- **generated-docs/style.css**: `callgraph.html`のグラフの見た目を定義するCSSファイルです。
- **googled947dc864c270e07.html**: Googleサイト所有権確認のためのHTMLファイルです。
- **issue-notes/*.md**: 各GitHub Issueに関する追加のメモや詳細情報を記録したMarkdownファイル群です。
- **src/main.js**: このプロジェクトの基本的なエントリポイントとなるJavaScriptファイルで、簡単な挨拶機能を含みます。

## 関数詳細説明
- **escapeHtml(text)**: HTML特殊文字を安全な形式に変換し、クロスサイトスクリプティング（XSS）攻撃を防ぐために使用されます。
    - 引数: `text` (string) - エスケープする文字列。
    - 戻り値: エスケープ処理された文字列。
- **getLayoutConfig()**: 関数呼び出しグラフの描画に使用されるレイアウト設定（例: ノードの配置方法、間隔など）を取得します。
    - 引数: なし。
    - 戻り値: レイアウト設定を含むオブジェクト。
- **placeCentralNode()**: グラフの中心に特定のノード（関数）を配置し、視覚的な焦点を当てる役割を果たします。
    - 引数: なし。
    - 戻り値: なし。
- **showNodeInfo()**: グラフ上のノード（関数）が選択された際に、そのノードに関する詳細情報（例: ファイルパス、行番号）を表示します。
    - 引数: なし。
    - 戻り値: なし。
- **showEdgeInfo()**: グラフ上のエッジ（関数呼び出し関係）が選択された際に、そのエッジに関する詳細情報を表示します。
    - 引数: なし。
    - 戻り値: なし。
- **hideInfoPanel()**: グラフの詳細情報を表示するパネルを非表示にします。
    - 引数: なし。
    - 戻り値: なし。
- **showInfoPanel()**: グラフの詳細情報を表示するパネルを表示します。
    - 引数: なし。
    - 戻り値: なし。
- **toggleInfoPanel()**: 情報パネルの表示状態（表示/非表示）を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **generateGitHubURL()**: 関連するGitHubリポジトリのURLを動的に生成します。
    - 引数: なし。
    - 戻り値: 生成されたGitHub URL文字列。
- **resetLayout()**: グラフの現在のレイアウトを初期状態にリセットし、ノードの配置を再計算します。
    - 引数: なし。
    - 戻り値: なし。
- **watchNodeMovementAndFixOverlapsWrap()**: ノードの動きを監視し、他のノードとの重なりを修正する処理のラッパー関数です。
    - 引数: なし。
    - 戻り値: なし。
- **watchNodeMovementAndFixOverlaps()**: グラフ内のノードが移動するたびに、ノード同士が重ならないように位置を調整します。
    - 引数: なし。
    - 戻り値: なし。
- **resolveNodeOverlaps()**: グラフ内の重なっているノードの位置を調整し、視覚的な明確さを確保します。
    - 引数: なし。
    - 戻り値: なし。
- **switchLayout()**: 関数呼び出しグラフの表示レイアウト（例: 円形、グリッドなど）を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **resetNodeStates()**: グラフ内のすべてのノードの選択状態や強調表示などの状態を初期値にリセットします。
    - 引数: なし。
    - 戻り値: なし。
- **fitToContent()**: グラフの表示範囲を、すべてのノードとエッジが画面内に収まるように調整します。
    - 引数: なし。
    - 戻り値: なし。
- **toggleNodeLabels()**: グラフのノード（関数）に表示されるラベルの表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **toggleCalleeLocationFilter()**: 呼び出し先の位置に基づいてノードをフィルタリングする機能の表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **replace(searchString, replaceString)**: 文字列内の特定の部分を別の文字列に置き換える汎用的な処理です。
    - 引数: `searchString` (string) - 検索対象の文字列、`replaceString` (string) - 置換する文字列。
    - 戻り値: 置換後の文字列。
- **switch(expression)**: プログラミング言語における条件分岐の構造で、`expression`の値に応じて異なるコードブロックを実行します。
    - 引数: `expression` (any) - 評価対象の値。
    - 戻り値: なし (処理の実行)。
- **function()**: 名前が指定されていない、または汎用的な関数ブロックの定義を示します。具体的な役割はコンテキストに依存します。
    - 引数: なし。
    - 戻り値: なし。
- **max(value1, value2)**: 複数の数値の中から最大の値を返す関数です。
    - 引数: `value1` (number), `value2` (number) - 比較対象の数値。
    - 戻り値: 2つの値のうち大きい方。
- **on(eventName, handler)**: 特定のイベントが発生したときに、指定されたハンドラ関数を実行するためのイベントリスナーを登録します。
    - 引数: `eventName` (string) - イベントの名前、`handler` (function) - イベント発生時に呼び出される関数。
    - 戻り値: なし。
- **if(condition)**: プログラミング言語における条件分岐の構造で、`condition`が真の場合にコードブロックを実行します。
    - 引数: `condition` (boolean) - 評価対象の真偽値。
    - 戻り値: なし (処理の実行)。
- **for(initialization; condition; increment)**: プログラミング言語における繰り返し処理の構造で、特定の回数または条件が満たされるまでコードブロックを繰り返します。
    - 引数: `initialization`, `condition`, `increment` (いずれもプログラミングのループ制御要素)。
    - 戻り値: なし (処理の実行)。
- **ready(callback)**: WebページやDOMの読み込みが完了したときに、指定されたコールバック関数を実行します。
    - 引数: `callback` (function) - DOM準備完了時に呼び出される関数。
    - 戻り値: なし。
- **addListener(event, listener)**: 特定の要素やオブジェクトに対して、指定されたイベントのリスナー（監視者）を追加します。
    - 引数: `event` (string) - 監視するイベント、`listener` (function) - イベント発生時に実行される関数。
    - 戻り値: なし。
- **greet() (`src/main.js`)**: 簡単な挨拶メッセージを生成し、返します。
    - 引数: なし。
    - 戻り値: 挨拶文字列（例: "Hello, GitHub Actions!"）。
- **main() (`src/main.js`)**: `src/main.js`ファイルのエントリポイントとなる主要な関数で、プログラムの実行フローを開始します。
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
Generated at: 2026-02-11 07:16:45 JST

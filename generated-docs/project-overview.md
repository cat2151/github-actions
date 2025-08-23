Last updated: 2025-08-24

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド:
  - HTML/CSS/JavaScript: 生成される呼び出しグラフ (callgraph.html/js/css) の表示と操作に使用されます。
- 音楽・オーディオ:
  - Tone.js: Web Audio APIを用いたウェブベースの音楽・オーディオアプリケーション開発を簡素化するJavaScriptライブラリです。
  - Web Audio API: ウェブブラウザで高度なオーディオ処理を行うためのブラウザ標準APIで、Tone.jsを通じて利用されます。
  - MML (Music Macro Language): 音楽をテキスト形式で記述するための簡易記法パーサーです。
- 開発ツール:
  - Node.js runtime: JavaScriptコードを実行するためのサーバーサイドおよびコマンドライン環境です。
  - npm scripts: `package.json` に定義されたスクリプトを実行し、開発タスクを自動化するためのツールです。
  - Google Generative AI: AIによる文書生成やコンテンツ作成を支援するAPIです。プロジェクトの要約生成などに利用されます。
  - @octokit/rest: GitHub APIと連携し、リポジトリ情報取得やIssue管理などの操作をプログラムから行うためのライブラリです。
- テスト: N/A
- ビルドツール: N/A
- 言語機能: N/A
- 自動化・CI/CD:
  - GitHub Actions: コードのビルド、テスト、デプロイなどのワークフローを自動化するCI/CDサービスです。本プロジェクトでは以下の共通ワークフローを提供します。
    - プロジェクト要約自動生成: リポジトリの内容に基づき、プロジェクト概要を自動生成します。
    - Issue自動管理: GitHub Issuesのライフサイクル管理や定型処理を自動化します。
    - README多言語翻訳: READMEファイルを複数の言語に自動翻訳します。
    - i18n automation: 国際化（i18n）関連の自動翻訳ワークフローです。
- 開発標準: N/A

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
  📖 2.md
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
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLを利用してコードの関数呼び出しグラフを解析するためのクエリファイルです。
- **.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係をロックするファイルです。
- **.github_automation/callgraph/codeql-queries/qlpack.yml**: CodeQLパックの定義ファイルで、クエリのメタデータを含みます。
- **.github_automation/callgraph/config/example.json**: 呼び出しグラフ生成に関する設定の例が記述されたJSONファイルです。
- **.github_automation/callgraph/docs/callgraph.md**: 呼び出しグラフ機能に関するドキュメントです。
- **.github_automation/callgraph/presets/callgraph.js**: 呼び出しグラフの描画やインタラクションを制御するJavaScriptコードです。
  - HTML特殊文字のエスケープ、レイアウト設定の取得、ノード情報の表示/非表示、GitHub URLの生成、レイアウトのリセットなど、グラフ表示に関わる多くの機能を提供します。
- **.github_automation/callgraph/presets/style.css**: 呼び出しグラフの表示スタイルを定義するCSSファイルです。
- **.github_automation/callgraph/scripts/analyze-codeql.cjs**: CodeQL分析を実行し、SARIF結果を処理するスクリプトです。
- **.github_automation/callgraph/scripts/callgraph-utils.cjs**: 呼び出しグラフに関連するユーティリティ関数を集めたスクリプトです。
- **.github_automation/callgraph/scripts/check-codeql-exists.cjs**: CodeQLがシステムに存在するかどうかを確認するスクリプトです。
- **.github_automation/callgraph/scripts/check-commits.cjs**: Gitのコミット情報をチェックするスクリプトです。
- **.github_automation/callgraph/scripts/check-node-version.cjs**: Node.jsのバージョンをチェックするスクリプトです。
- **.github_automation/callgraph/scripts/common-utils.cjs**: 複数のスクリプトで共通して利用されるユーティリティ関数を提供するスクリプトです。
- **.github_automation/callgraph/scripts/copy-commit-results.cjs**: コミット結果をコピーするスクリプトです。
- **.github_automation/callgraph/scripts/extract-sarif-info.cjs**: SARIFファイルから情報を抽出するスクリプトです。
- **.github_automation/callgraph/scripts/find-process-results.cjs**: プロセス結果を検索するスクリプトです。
- **.github_automation/callgraph/scripts/generate-html-graph.cjs**: CodeQLの分析結果からHTML形式の呼び出しグラフを生成するスクリプトです。
- **.github_automation/callgraph/scripts/generateHTML.cjs**: HTMLファイルを生成するための汎用スクリプトです。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: 日次サマリーの設定に関するドキュメントです。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: 開発状況のサマリーを生成するためのプロンプトのテンプレートです。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: プロジェクト概要を生成するためのプロンプトのテンプレートです。
- **.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs**: プロジェクトサマリー生成プロセス全体の調整を行うスクリプトです。
- **.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs**: 開発状況のサマリーを生成するスクリプトです。
- **.github_automation/project_summary/scripts/development/GitUtils.cjs**: Git操作に関連するユーティリティ関数を提供するスクリプトです。
- **.github_automation/project_summary/scripts/development/IssueTracker.cjs**: GitHub Issueの追跡と情報取得を行うスクリプトです。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: プロジェクトの概要情報を自動生成するメインスクリプトです。
- **.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs**: プロジェクトのコードを分析し、構造や統計情報を収集するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs**: プロジェクト分析プロセスの調整と管理を行うスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs**: プロジェクトに関連する各種データを収集するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs**: 収集したプロジェクトデータを整形し、出力形式に合わせるスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs**: 収集・整形されたデータに基づいてプロジェクト概要を生成するスクリプトです。
- **.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs**: プロジェクトの技術スタックを分析し、情報を抽出するスクリプトです。
- **.github_automation/project_summary/scripts/shared/BaseGenerator.cjs**: 各種ジェネレータの基底クラスまたは共通機能を提供するスクリプトです。
- **.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs**: ファイルシステム操作に関連するユーティリティ関数を提供するスクリプトです。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: 翻訳ワークフローの設定に関するドキュメントです。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルを多言語に自動翻訳するためのスクリプトです。
- **.gitignore**: Gitが追跡しないファイルやディレクトリを指定する設定ファイルです。
- **LICENSE**: プロジェクトのライセンス情報が記述されたファイルです。
- **README.ja.md**: プロジェクトの概要を日本語で説明するメインのドキュメントファイルです。
- **README.md**: プロジェクトの概要を英語で説明するメインのドキュメントファイルです。
- **generated-docs/callgraph.html**: 生成された呼び出しグラフを表示するためのHTMLファイルです。
- **generated-docs/callgraph.js**: 生成された呼び出しグラフのインタラクティブな動作を制御するJavaScriptファイルです。
  - `.github_automation/callgraph/presets/callgraph.js` と同じ内容を持つ可能性があります。
- **generated-docs/development-status.md**: 生成された開発状況のサマリーが記述されるMarkdownファイルです。
- **generated-docs/project-overview.md**: 生成されたプロジェクト概要が記述されるMarkdownファイルです。
- **generated-docs/style.css**: 生成されたドキュメントのスタイルを定義するCSSファイルです。
  - `.github_automation/callgraph/presets/style.css` と同じ内容を持つ可能性があります。
- **issue-notes/**: GitHub Issuesに関するメモや詳細情報が格納されるディレクトリです。各ファイルは特定のIssueに関連する情報を含みます。
- **package-lock.json**: `package.json` に基づく依存関係の正確なツリー構造とバージョンを記録するファイルです。
- **package.json**: プロジェクトのメタデータ（名前、バージョン、依存関係、スクリプトなど）を定義するファイルです。
- **src/main.js**: プロジェクトの主要なエントリーポイントまたはシンプルな実行可能なJavaScriptファイルです。

## 関数詳細説明
- **escapeHtml** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: HTMLの特殊文字（例: `<`、`>`、`&`）をHTMLエンティティに変換し、XSS攻撃を防ぐなど、文字列を安全に表示するために使用されます。
  - 引数: 不明 (通常は変換対象の文字列)
  - 戻り値: 不明 (通常はエスケープされた文字列)
- **getLayoutConfig** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 呼び出しグラフの描画レイアウトに関する設定を取得します。
  - 引数: 不明
  - 戻り値: 不明 (通常はレイアウト設定オブジェクト)
- **placeCentralNode** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフの中央に特定のノードを配置する処理を行います。
  - 引数: 不明
  - 戻り値: 不明
- **showNodeInfo** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフ上のノード（関数やファイルなど）の詳細情報を表示します。
  - 引数: 不明 (通常はノードIDまたはノードデータ)
  - 戻り値: 不明
- **showEdgeInfo** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフ上のエッジ（呼び出し関係など）の詳細情報を表示します。
  - 引数: 不明 (通常はエッジIDまたはエッジデータ)
  - 戻り値: 不明
- **hideInfoPanel** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 情報表示パネルを非表示にします。
  - 引数: なし
  - 戻り値: 不明
- **showInfoPanel** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 情報表示パネルを表示します。
  - 引数: 不明
  - 戻り値: 不明
- **toggleInfoPanel** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 情報表示パネルの表示/非表示を切り替えます。
  - 引数: 不明
  - 戻り値: 不明
- **generateGitHubURL** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: GitHub上のリソース（ファイル、コミットなど）へのURLを生成します。
  - 引数: 不明 (通常はリポジトリ情報やファイルパス)
  - 戻り値: 不明 (通常は生成されたURL文字列)
- **resetLayout** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフのレイアウトを初期状態にリセットします。
  - 引数: 不明
  - 戻り値: 不明
- **watchNodeMovementAndFixOverlapsWrap** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: ノードの動きを監視し、重なりを修正する処理のラッパー関数です。
  - 引数: 不明
  - 戻り値: 不明
- **watchNodeMovementAndFixOverlaps** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフノードの移動を監視し、他のノードとの重なりを自動的に解消します。
  - 引数: 不明
  - 戻り値: 不明
- **resolveNodeOverlaps** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: ノード間の重なりを解決し、視覚的に見やすい配置にします。
  - 引数: 不明
  - 戻り値: 不明
- **switchLayout** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフの表示レイアウトを切り替えます（例: 円形、グリッドなど）。
  - 引数: 不明 (通常はレイアウトの種類)
  - 戻り値: 不明
- **resetNodeStates** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフノードの状態（選択、ハイライトなど）をリセットします。
  - 引数: 不明
  - 戻り値: 不明
- **fitToContent** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフ全体がビューポートに収まるようにズームレベルや位置を調整します。
  - 引数: 不明
  - 戻り値: 不明
- **toggleNodeLabels** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: ノードのラベル（名称）の表示/非表示を切り替えます。
  - 引数: 不明
  - 戻り値: 不明
- **toggleCalleeLocationFilter** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 呼び出し先（callee）の場所に基づいてノードをフィルタリングする機能を切り替えます。
  - 引数: 不明
  - 戻り値: 不明
- **replace** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 文字列置換またはDOM要素の置換を行う汎用関数です。
  - 引数: 不明
  - 戻り値: 不明
- **switch** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 条件分岐処理を行う一般的なスイッチ文またはそれに関連する処理です。
  - 引数: 不明
  - 戻り値: 不明
- **function** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 関数定義または匿名関数に関連する処理です。
  - 引数: 不明
  - 戻り値: 不明
- **max** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 最大値を計算する汎用関数です。
  - 引数: 不明 (通常は数値のリストまたは複数の数値引数)
  - 戻り値: 不明 (通常は最大値)
- **on** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: イベントリスナーを登録する汎用関数です。
  - 引数: 不明 (通常はイベント名とコールバック関数)
  - 戻り値: 不明
- **if** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 条件分岐処理を行う一般的なif文またはそれに関連する処理です。
  - 引数: 不明
  - 戻り値: 不明
- **for** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 繰り返し処理を行う一般的なforループまたはそれに関連する処理です。
  - 引数: 不明
  - 戻り値: 不明
- **ready** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: DOMが完全にロードされた後に実行される処理を登録します。
  - 引数: 不明 (通常はコールバック関数)
  - 戻り値: 不明
- **addListener** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 特定のイベントにリスナーを追加します。
  - 引数: 不明 (通常はイベントの種類とコールバック関数)
  - 戻り値: 不明
- **greet** (src/main.js):
  - 役割: 挨拶メッセージを生成または出力します。
  - 引数: 不明 (通常は名前など)
  - 戻り値: 不明 (通常は挨拶文字列)
- **main** (src/main.js):
  - 役割: プログラムの主要な実行フローを定義するエントリーポイント関数です。
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
Generated at: 2025-08-24 07:04:34 JST

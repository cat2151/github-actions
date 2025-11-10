Last updated: 2025-11-11

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: HTML, CSS, JavaScript (主にコールグラフの視覚化とインタラクティブな表示を実現するために使用されます。)
- 音楽・オーディオ: (該当する技術はありません。)
- 開発ツール:
    - GitHub Actions: 複数プロジェクトで使い回せる共通ワークフローの実行環境として、プロジェクトの中心的な役割を担います。
    - Node.js: 各種自動化スクリプト（コールグラフ生成、プロジェクトサマリー生成、翻訳など）の実行環境として使用されます。
    - CodeQL: コードベースの静的解析を行い、関数呼び出しグラフなどの情報を抽出するために利用されます。
    - VSCode: 開発時に使用される統合開発環境です。
- テスト: CodeQLによる静的解析がコード品質の確認に貢献しますが、専用のテストフレームワークは明示されていません。
- ビルドツール: (一般的なビルドツールは使用されていませんが、Node.jsスクリプトが多様な生成処理を実行します。)
- 言語機能: JavaScript (CommonJSモジュール形式で記述されたスクリプトがプロジェクトの自動化を支えます。)
- 自動化・CI/CD: GitHub Actions (リポジトリ横断的なワークフローの自動実行、翻訳、プロジェクトサマリー生成、コールグラフ生成など、様々な自動化プロセスを管理します。)
- 開発標準: (Jekyllなどの静的サイトジェネレーターの設定ファイルである`_config.yml`が含まれます。)

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
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLのクエリ定義ファイルで、ソースコードから関数呼び出しの情報を抽出するために使用されます。
- **.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係を管理し、一貫性を保つためのロックファイルです。
- **.github_automation/callgraph/codeql-queries/qlpack.yml**: CodeQLパックのメタデータと設定を定義するファイルです。
- **.github_automation/callgraph/config/example.json**: コールグラフ生成に関連する設定の例を示すJSONファイルです。
- **.github_automation/callgraph/docs/callgraph.md**: コールグラフ機能に関する詳細なドキュメントです。
- **.github_automation/callgraph/presets/callgraph.js**: コールグラフの視覚的な表示、ユーザーインタラクション、レイアウト調整などのクライアントサイドロジックを定義するJavaScriptファイルです。
- **.github_automation/callgraph/presets/style.css**: コールグラフのHTML表示に適用されるスタイルシートです。
- **.github_automation/callgraph/scripts/analyze-codeql.cjs**: CodeQLツールを実行し、コード分析プロセスを管理するスクリプトです。
- **.github_automation/callgraph/scripts/callgraph-utils.cjs**: コールグラフ生成に関連する汎用的なユーティリティ関数を提供します。
- **.github_automation/callgraph/scripts/check-codeql-exists.cjs**: 実行環境にCodeQLツールがインストールされているかを確認するスクリプトです。
- **.github_automation/callgraph/scripts/check-node-version.cjs**: Node.jsのバージョンが要件を満たしているかを確認するスクリプトです。
- **.github_automation/callgraph/scripts/common-utils.cjs**: プロジェクト全体で利用される共通のユーティリティ関数を集めたスクリプトです。
- **.github_automation/callgraph/scripts/copy-commit-results.cjs**: 特定のコミット結果をコピーする処理を行うスクリプトです。
- **.github_automation/callgraph/scripts/extract-sarif-info.cjs**: CodeQLの分析結果フォーマットであるSARIFファイルから必要な情報を抽出するためのスクリプトです。
- **.github_automation/callgraph/scripts/find-process-results.cjs**: プロセス実行結果を検索し、処理するためのスクリプトです。
- **.github_automation/callgraph/scripts/generate-html-graph.cjs**: CodeQLの分析結果を基に、インタラクティブなHTML形式のコールグラフを生成するスクリプトです。
- **.github_automation/callgraph/scripts/generateHTML.cjs**: HTMLファイルを生成するための汎用的なスクリプトです。
- **.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs**: 最近のコミットが自動化されたものではなく、人間によるものであるかを検証するスクリプトです。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: 日次プロジェクトサマリーの設定と利用方法に関するドキュメントです。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: 開発状況のサマリーを生成する際に使用されるプロンプトの定義ファイルです。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: プロジェクト概要を生成する際に使用されるプロンプトの定義ファイルです。
- **.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs**: プロジェクトサマリー生成プロセス全体の調整役を担うスクリプトです。
- **.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs**: プロジェクトの開発状況に関するサマリーを生成するスクリプトです。
- **.github_automation/project_summary/scripts/development/GitUtils.cjs**: Gitリポジトリ操作（コミット履歴の取得など）のためのユーティリティ関数群です。
- **.github_automation/project_summary/scripts/development/IssueTracker.cjs**: GitHub Issuesなどの課題追跡システムから情報を取得・処理するユーティリティ関数群です。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: プロジェクトサマリー生成処理を開始するメインのエントリーポイントスクリプトです。
- **.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs**: プロジェクトのソースコードを分析し、構造や機能に関する情報を抽出するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs**: プロジェクト分析の各段階を調整し、全体を統合するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs**: プロジェクトに関する様々なデータ（ファイル情報、設定など）を収集するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs**: 収集した生データを、サマリー生成に適した形式に整形するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs**: 収集・整形されたデータとプロンプトを基に、プロジェクト概要を生成するスクリプトです。
- **.github_automation/project_summary/scripts/shared/BaseGenerator.cjs**: 各種サマリー生成スクリプトの基盤となる共通機能や抽象化を提供するスクリプトです。
- **.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs**: ファイルシステムへのアクセスや操作（ファイルの読み書き、ディレクトリ作成など）を行うユーティリティ関数群です。
- **.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs**: プロジェクト内のファイル構造を分析し、関連情報を取得するユーティリティ関数群です。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: 自動翻訳機能の設定方法や利用に関するドキュメントです。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルを別の言語に自動翻訳するスクリプトです。
- **.gitignore**: Gitがバージョン管理から無視すべきファイルやディレクトリを指定する設定ファイルです。
- **.vscode/settings.json**: VS Codeエディタのワークスペース固有の設定を定義するファイルです。
- **LICENSE**: プロジェクトの利用条件や著作権情報を示すライセンスファイルです。
- **README.ja.md**: プロジェクトの概要を日本語で説明するメインのドキュメントファイルです。
- **README.md**: プロジェクトの概要を英語で説明するメインのドキュメントファイルで、日本語版から自動生成されます。
- **_config.yml**: GitHub Pagesなどで使用されるJekyllサイトジェネレーターの設定ファイルです。
- **generated-docs/callgraph.html**: 自動生成されたインタラクティブなコールグラフを表示するHTMLファイルです。
- **generated-docs/callgraph.js**: 生成されたコールグラフのクライアントサイドの挙動を制御するJavaScriptファイルです。
- **generated-docs/style.css**: 生成されたコールグラフの表示スタイルを定義するCSSファイルです。
- **issue-notes/*.md**: 開発中の特定の課題やメモを記録したMarkdownファイル群です。
- **src/main.js**: プロジェクトのサンプルコードまたはテスト用のエントリーポイントファイルです。

## 関数詳細説明
- **escapeHtml**: HTMLの特殊文字をエスケープし、スクリプトインジェクションなどのセキュリティリスクを防ぎ、安全な表示を可能にします。
- **getLayoutConfig**: コールグラフの視覚的な配置やレイアウトに関する設定情報を取得します。
- **placeCentralNode**: コールグラフの中心となるノード（関数）を特定の位置に配置する処理を行います。
- **showNodeInfo**: コールグラフ上の特定のノード（関数）に関する詳細情報（名前、ファイル、行数など）を画面に表示します。
- **showEdgeInfo**: コールグラフ上のエッジ（関数間の呼び出し関係）に関する詳細情報を表示します。
- **hideInfoPanel**: 現在表示されている情報パネルを非表示にします。
- **showInfoPanel**: 特定の情報パネルを表示します。
- **toggleInfoPanel**: 情報パネルの表示状態（表示/非表示）を切り替えます。
- **generateGitHubURL**: 指定されたファイルパスや行番号に基づき、GitHubリポジトリ上のソースコードへのURLを生成します。
- **resetLayout**: コールグラフの現在のレイアウトを初期状態にリセットします。
- **watchNodeMovementAndFixOverlapsWrap**: ノードの移動を監視し、その重なりを解消する処理をラップする関数です。
- **watchNodeMovementAndFixOverlaps**: コールグラフ上のノードが移動した際に、他のノードとの重なりを検出し、自動的に位置を調整して重なりを解消します。
- **resolveNodeOverlaps**: 複数のノードが重なっている場合に、それらのノードを適切に配置し直して重なりを解消する具体的なロジックを実行します。
- **switchLayout**: コールグラフの表示レイアウト（例: 円形、ツリー形）を異なるタイプに切り替えます。
- **resetNodeStates**: コールグラフ上のノードが持つ状態（選択、ハイライトなど）をリセットし、初期状態に戻します。
- **fitToContent**: コールグラフ全体のコンテンツが画面に収まるように、ズームレベルやパン位置を自動調整します。
- **toggleNodeLabels**: コールグラフ上のノードに表示されるラベル（関数名など）の表示/非表示を切り替えます。
- **toggleCalleeLocationFilter**: 呼び出される側の関数（callee）のロケーションフィルタを切り替える機能です。
- **replace**: 文字列内の特定の部分を別の文字列で置き換える汎用的な機能です。
- **switch**: 複数の条件分岐を効率的に処理するためのJavaScriptの構文要素です。
- **function**: JavaScriptで関数を定義するためのキーワードです。
- **max**: 複数の数値の中から最大の値を見つける汎用的な機能です。
- **on**: イベントリスナーを要素にアタッチし、特定のイベントが発生したときに指定された関数を実行させる汎用的な機能です。
- **if**: 条件が真である場合に特定のコードブロックを実行するためのJavaScriptの構文要素です。
- **for**: 特定のコードブロックを複数回繰り返し実行するためのJavaScriptの構文要素です。
- **ready**: ドキュメントオブジェクトモデル (DOM) が完全にロードされて準備ができたときに実行されるコールバック関数を登録する機能です。
- **addListener**: イベントリスナーをオブジェクトに追加し、特定のイベントの発生を監視する汎用的な機能です。
- **greet** (`src/main.js`): あいさつメッセージを生成するシンプルな関数です。
- **main** (`src/main.js`): `src/main.js` のエントリーポイントとなる関数で、プログラムの主要な処理を開始します。

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
Generated at: 2025-11-11 07:06:22 JST

Last updated: 2026-03-04

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽にします
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOKです
- ✅ メンテナンスは一括で済むため、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: JavaScript (グラフ表示のためのインタラクティブな機能を提供), HTML (Webページ構造の定義), CSS (グラフやページのスタイル設定)
- 音楽・オーディオ: 該当なし (このプロジェクトでは音楽やオーディオ関連技術は使用されていません)
- 開発ツール: GitHub Actions (リポジトリ全体で再利用可能な自動化ワークフローの実行環境), CodeQL (コードの静的解析を行い、セキュリティ脆弱性や品質問題を検出するツール), Node.js (JavaScript実行環境で、多くのスクリプトを実行するために使用)
- テスト: 該当なし (明示的なテストフレームワークは情報にありません)
- ビルドツール: Python (一部のスクリプト処理に使用), Node.js (JavaScriptベースのスクリプト実行環境)
- 言語機能: JavaScript (クライアントサイドのインタラクティブな機能やサーバーサイドのスクリプトに利用), Python (ファイルシステム操作やデータ処理スクリプトに利用), YAML (GitHub Actionsワークフローの定義に使用)
- 自動化・CI/CD: GitHub Actions (継続的インテグレーション/デリバリーのための自動ワークフロー実行プラットフォーム)
- 開発標準: CodeQL (コード品質とセキュリティの標準化を支援)

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
    📄 check-large-files.toml.default
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
  📖 35.md
  📖 38.md
  📖 4.md
  📖 40.md
  📖 44.md
  📖 52.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明
- **.gitignore**: Gitのバージョン管理から除外するファイルやディレクトリを指定します。
- **.vscode/settings.json**: Visual Studio Codeエディタのプロジェクト固有の設定を定義します。
- **LICENSE**: このプロジェクトのソフトウェアライセンス情報が記載されています。
- **README.ja.md**: プロジェクトの概要、目的、使用方法などを日本語で説明するメインドキュメントです。
- **README.md**: プロジェクトの概要、目的、使用方法などを英語で説明するメインドキュメントです。
- **_config.yml**: GitHub Pagesのサイト設定を定義するファイルです。
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLを用いてコードの呼び出しグラフを生成するためのクエリファイルです。
- **.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係をロックするためのファイルです。
- **.github_automation/callgraph/codeql-queries/qlpack.yml**: CodeQLパックの設定ファイルです。
- **.github_automation/callgraph/config/example.json**: コールグラフ生成に関連する設定の例です。
- **.github_automation/callgraph/docs/callgraph.md**: コールグラフ機能に関する詳細なドキュメントです。
- **.github_automation/callgraph/presets/callgraph.js**: コールグラフの表示やインタラクションに関するJavaScriptコードが含まれています。
- **.github_automation/callgraph/presets/style.css**: コールグラフの視覚的なスタイルを定義するCSSファイルです。
- **.github_automation/callgraph/scripts/**: コールグラフの生成、解析、HTML出力など、一連の処理を行うためのNode.jsスクリプト群です。
    - `analyze-codeql.cjs`: CodeQLの分析を実行するスクリプトです。
    - `callgraph-utils.cjs`: コールグラフ関連のユーティリティ関数を提供します。
    - `check-codeql-exists.cjs`: CodeQLが環境に存在するかを確認します。
    - `check-node-version.cjs`: Node.jsのバージョンを確認します。
    - `common-utils.cjs`: 共通的に利用されるユーティリティ関数を提供します。
    - `copy-commit-results.cjs`: コミット結果をコピーするスクリプトです。
    - `extract-sarif-info.cjs`: SARIF形式の結果から情報を抽出します。
    - `find-process-results.cjs`: プロセス結果を検索します。
    - `generate-html-graph.cjs`: HTML形式のグラフを生成します。
    - `generateHTML.cjs`: HTMLファイルを生成するためのスクリプトです。
- **.github_automation/check-large-files/README.md**: 大容量ファイルチェック機能に関するドキュメントです。
- **.github_automation/check-large-files/check-large-files.toml.default**: 大容量ファイルチェックの設定例です。
- **.github_automation/check-large-files/scripts/check_large_files.py**: リポジトリ内の大容量ファイルをチェックするためのPythonスクリプトです。
- **.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs**: 最近の人間によるコミットがあるかをチェックするNode.jsスクリプトです。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: プロジェクトの日次サマリー設定に関するドキュメントです。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: 開発状況のサマリー生成に使用されるプロンプト（指示文）のテンプレートです。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: プロジェクト概要生成に使用されるプロンプト（指示文）のテンプレートです。
- **.github_automation/project_summary/scripts/**: プロジェクトサマリー生成に関連するNode.jsスクリプト群です。
    - `ProjectSummaryCoordinator.cjs`: プロジェクトサマリー生成全体の調整役を担うスクリプトです。
    - `development/DevelopmentStatusGenerator.cjs`: 開発状況レポートを生成するスクリプトです。
    - `development/GitUtils.cjs`: Git関連のユーティリティ機能を提供します。
    - `development/IssueTracker.cjs`: Issueトラッカーから情報を収集します。
    - `generate-project-summary.cjs`: プロジェクトサマリーを生成するメインスクリプトです。
    - `overview/CodeAnalyzer.cjs`: コードの分析を行うスクリプトです。
    - `overview/ProjectAnalysisOrchestrator.cjs`: プロジェクト分析を調整するスクリプトです。
    - `overview/ProjectDataCollector.cjs`: プロジェクトデータを収集するスクリプトです。
    - `overview/ProjectDataFormatter.cjs`: 収集したプロジェクトデータを整形するスクリプトです。
    - `overview/ProjectOverviewGenerator.cjs`: プロジェクト概要を生成するスクリプトです。
    - `shared/BaseGenerator.cjs`: ジェネレータの基底クラスを提供します。
    - `shared/FileSystemUtils.cjs`: ファイルシステム関連のユーティリティ機能を提供します。
    - `shared/ProjectFileUtils.cjs`: プロジェクトファイルのユーティリティ機能を提供します。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: READMEなどの翻訳設定に関するドキュメントです。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルを自動翻訳するためのNode.jsスクリプトです。
- **generated-docs/callgraph.html**: 生成されたコールグラフを表示するためのHTMLファイルです。
- **generated-docs/callgraph.js**: 生成されたコールグラフのインタラクティブな表示を制御するJavaScriptファイルです。
- **generated-docs/style.css**: 生成されたコールグラフのスタイルを定義するCSSファイルです。
- **googled947dc864c270e07.html**: Googleサイト所有権確認のためのファイルです。
- **issue-notes/**: 開発中の作業や課題に関するメモを保存するディレクトリです。各ファイルは特定の課題に関連するノートです。
- **src/main.js**: プロジェクト内のJavaScriptコードのメインエントリポイントとなる例示ファイルです。

## 関数詳細説明
- **escapeHtml**: HTMLの特殊文字をエスケープし、安全に表示できるようにします。
- **getLayoutConfig**: グラフ表示のレイアウトに関する設定情報を取得します。
- **placeCentralNode**: グラフの中心となるノードを配置します。
- **showNodeInfo**: グラフ上のノード（関数やファイルなど）の詳細情報を表示します。
- **showEdgeInfo**: グラフ上のエッジ（ノード間の接続）の詳細情報を表示します。
- **hideInfoPanel**: 画面上の情報パネルを非表示にします。
- **showInfoPanel**: 画面上の情報パネルを表示します。
- **toggleInfoPanel**: 情報パネルの表示・非表示を切り替えます。
- **generateGitHubURL**: 関連するGitHubリソースへのURLを生成します。
- **resetLayout**: グラフの表示レイアウトを初期状態に戻します。
- **watchNodeMovementAndFixOverlapsWrap**: ノードの移動を監視し、ノード間の重なりを自動的に修正する処理をカプセル化（ラップ）します。
- **watchNodeMovementAndFixOverlaps**: グラフ内のノードの動きを検知し、互いに重ならないように位置を調整します。
- **resolveNodeOverlaps**: 既に発生しているノード間の重なりを解消し、見やすい配置にします。
- **switchLayout**: グラフの表示レイアウト方式を別のものに切り替えます。
- **resetNodeStates**: グラフ内の各ノードの状態（選択状態、表示設定など）を初期値に戻します。
- **fitToContent**: グラフ全体が画面や指定された領域内に収まるように自動的に拡大縮小・調整します。
- **toggleNodeLabels**: グラフ上のノードに表示されるラベルの表示・非表示を切り替えます。
- **toggleCalleeLocationFilter**: 呼び出し先の場所（ファイルパスなど）に基づいてグラフ表示をフィルタリングする機能のオン・オフを切り替えます。
- **replace**: 文字列中の特定のパターンを別の文字列に置換します。
- **switch**: 複数の条件分岐の中から、一致するものに応じた処理を実行します。
- **function**: JavaScriptで新しい関数を定義する際に用いられるキーワードです。
- **max**: 与えられた数値の中から最大の値を取得します。
- **on**: 特定のイベント（クリック、ロードなど）が発生した際に実行する処理を設定します。
- **if**: 特定の条件が真である場合にのみ、指定されたコードブロックを実行します。
- **for**: 指定された回数だけ繰り返し処理を実行します。
- **ready**: ドキュメントの読み込みと解析が完了し、操作可能になった時点で処理を実行します。
- **addListener**: 特定のイベントソースに、イベント発生時に実行するリスナー関数を追加します。
- **greet**: 挨拶メッセージを作成し、返します。
- **main**: アプリケーションの主要な処理を開始し、全体の流れを制御します。

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
Generated at: 2026-03-04 07:08:28 JST

Last updated: 2025-09-08

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: 生成されたHTML/CSSファイルによってUIが構築されますが、特定のフレームワークやライブラリは明示されていません。
- 音楽・オーディオ:
    - **Tone.js**: Web Audio APIをより簡単に扱うためのJavaScriptライブラリ。
    - **Web Audio API**: ブラウザに標準搭載されている音声処理を行うためのAPI（Tone.jsを介して使用）。
    - **MML (Music Macro Language)**: 音楽をテキストで記述するための言語のパーサー。
- 開発ツール:
    - **Node.js runtime**: JavaScriptコードを実行するための環境。
    - **npm scripts**: `package.json`に定義されたスクリプトを実行するタスクランナー。
    - **Google Generative AI (@google/generative-ai)**: AIによる文書生成機能をサポートするライブラリ。
    - **@octokit/rest**: GitHub APIと連携するための公式ライブラリ。
- テスト: 特になし
- ビルドツール: 特になし
- 言語機能:
    - **JavaScript**: プロジェクトの主要なプログラミング言語。
- 自動化・CI/CD:
    - **GitHub Actions**: リポジトリのイベントに基づいてワークフローを自動実行するCI/CDプラットフォーム。プロジェクト要約、Issue管理、README翻訳などの共通ワークフローを提供。
    - **i18n automation**: 国際化（多言語対応）に関連する自動翻訳ワークフロー。
- 開発標準: 特になし

## ファイル階層ツリー
```
.github_automation/
  callgraph/
    codeql-queries/
      callgraph.ql
      codeql-pack.lock.yml
      qlpack.yml
    config/
      example.json
    docs/
      callgraph.md
    presets/
      callgraph.js
      style.css
    scripts/
      analyze-codeql.cjs
      callgraph-utils.cjs
      check-codeql-exists.cjs
      check-commits.cjs
      check-node-version.cjs
      common-utils.cjs
      copy-commit-results.cjs
      extract-sarif-info.cjs
      find-process-results.cjs
      generate-html-graph.cjs
      generateHTML.cjs
  project_summary/
    docs/
      daily-summary-setup.md
    prompts/
      development-status-prompt.md
      project-overview-prompt.md
    scripts/
      ProjectSummaryCoordinator.cjs
      development/
        DevelopmentStatusGenerator.cjs
        GitUtils.cjs
        IssueTracker.cjs
      generate-project-summary.cjs
      overview/
        CodeAnalyzer.cjs
        ProjectAnalysisOrchestrator.cjs
        ProjectDataCollector.cjs
        ProjectDataFormatter.cjs
        ProjectOverviewGenerator.cjs
        TechStackAnalyzer.cjs
      shared/
        BaseGenerator.cjs
        FileSystemUtils.cjs
  translate/
    docs/
      TRANSLATION_SETUP.md
    scripts/
      translate-readme.cjs
.gitignore
.vscode/
  settings.json
LICENSE
README.ja.md
README.md
generated-docs/
  callgraph.html
  callgraph.js
  development-status-generated-prompt.md
  development-status.md
  project-overview.md
  style.css
issue-notes/
  10.md
  11.md
  12.md
  13.md
  14.md
  15.md
  16.md
  17.md
  18.md
  19.md
  2.md
  20.md
  21.md
  22.md
  23.md
  24.md
  3.md
  4.md
  7.md
  8.md
  9.md
package-lock.json
package.json
src/
  main.js
```

## ファイル詳細説明
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLを用いて関数呼び出しグラフを抽出するためのクエリを定義。
- **.github_automation/callgraph/config/example.json**: CodeQLの呼び出しグラフ生成に関する設定例を提供。
- **.github_automation/callgraph/docs/callgraph.md**: 呼び出しグラフの生成・利用方法に関するドキュメント。
- **.github_automation/callgraph/presets/callgraph.js**: 呼び出しグラフの表示ロジック、インタラクション、レイアウト等を定義するJavaScriptファイル。
- **.github_automation/callgraph/presets/style.css**: 呼び出しグラフの視覚的なスタイルを定義するCSSファイル。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: AIによる日次サマリー生成機能のセットアップガイド。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: 開発状況サマリー生成に使用されるAIプロンプトの定義。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: プロジェクト概要生成に使用されるAIプロンプトの定義。
- **.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs**: プロジェクト概要生成プロセス全体を調整するメインスクリプト。
- **.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs**: 開発状況レポートを生成するスクリプト。
- **.github_automation/project_summary/scripts/development/GitUtils.cjs**: Git操作に関連するユーティリティ関数を提供するスクリプト。
- **.github_automation/project_summary/scripts/development/IssueTracker.cjs**: Issueの追跡と管理に関連する機能を提供するスクリプト。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: プロジェクト概要を生成するための主要なエントリーポイントスクリプト。
- **.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs**: プロジェクトのコードベースを分析する機能を提供するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs**: プロジェクト分析プロセス全体を統括するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs**: プロジェクトに関連する各種データを収集するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs**: 収集したプロジェクトデータを整形するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs**: プロジェクト概要コンテンツを生成するスクリプト。
- **.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs**: プロジェクトの技術スタックを分析するスクリプト。
- **.github_automation/project_summary/scripts/shared/BaseGenerator.cjs**: 各種ジェネレータの共通基底クラスやユーティリティを提供。
- **.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs**: ファイルシステム操作に関連するユーティリティ関数を提供するスクリプト。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: 自動翻訳機能のセットアップガイド。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルの自動翻訳を実行するスクリプト。
- **.gitignore**: Gitがバージョン管理の対象としないファイルやディレクトリを指定する設定ファイル。
- **.vscode/settings.json**: Visual Studio Codeのワークスペース固有の設定ファイル。
- **LICENSE**: プロジェクトのライセンス情報が記述されたファイル。
- **README.ja.md**: プロジェクトの概要や使い方などを日本語で記述したドキュメント。
- **README.md**: プロジェクトの概要や使い方などを英語で記述したドキュメント。
- **generated-docs/callgraph.html**: 自動生成された呼び出しグラフのHTML形式での表示ファイル。
- **generated-docs/callgraph.js**: 自動生成された呼び出しグラフの動的な表示ロジックを含むJavaScriptファイル（`.github_automation/callgraph/presets/callgraph.js`と同じ内容）。
- **generated-docs/development-status-generated-prompt.md**: 自動生成された開発状況プロンプトの内容。
- **generated-docs/development-status.md**: 自動生成された開発状況レポート。
- **generated-docs/project-overview.md**: 自動生成されたプロジェクトの概要レポート。
- **generated-docs/style.css**: 自動生成されたドキュメントのスタイルシート（`.github_automation/callgraph/presets/style.css`と同じ内容）。
- **issue-notes/*.md**: GitHub Issuesに関連する詳細なメモや追跡情報が個別に記述されたファイル群。
- **package-lock.json**: npmパッケージの正確な依存関係ツリーとバージョンを記録し、ビルドの再現性を保証するファイル。
- **package.json**: プロジェクトのメタデータ（名前、バージョン、説明など）と依存関係、スクリプトを定義するファイル。
- **src/main.js**: プロジェクトのメイン処理を含む可能性のあるサンプルJavaScriptファイル。

## 関数詳細説明
- **.github_automation/callgraph/presets/callgraph.js** (および `generated-docs/callgraph.js`):
    - `escapeHtml(unsafe)`: HTMLエスケープ処理を行い、XSS攻撃などを防ぐための関数。
    - `getLayoutConfig()`: グラフのレイアウトに関する設定情報を取得する関数。
    - `placeCentralNode()`: グラフの中心に特定のノードを配置する関数。
    - `showNodeInfo(node)`: 指定されたノードの詳細情報を表示パネルに表示する関数。引数: `node` (object), 戻り値: なし。
    - `showEdgeInfo(edge)`: 指定されたエッジ（接続線）の詳細情報を表示パネルに表示する関数。引数: `edge` (object), 戻り値: なし。
    - `hideInfoPanel()`: 情報表示パネルを非表示にする関数。
    - `showInfoPanel()`: 情報表示パネルを表示する関数。
    - `toggleInfoPanel()`: 情報表示パネルの表示/非表示を切り替える関数。
    - `generateGitHubURL(path, line)`: 指定されたファイルパスと行番号からGitHub上のURLを生成する関数。引数: `path` (string), `line` (number), 戻り値: `string`。
    - `resetLayout()`: グラフのレイアウトを初期状態にリセットする関数。
    - `watchNodeMovementAndFixOverlapsWrap()`: ノードの動きを監視し、重なりを修正するロジックをラップする関数。
    - `watchNodeMovementAndFixOverlaps()`: ノードの動きをリアルタイムで監視し、重なりが発生しないように自動調整する関数。
    - `resolveNodeOverlaps()`: 重複して配置されたノードの位置を調整し、重なりを解消する関数。
    - `switchLayout(layoutName)`: グラフのレイアウトアルゴリズムを切り替える関数。引数: `layoutName` (string), 戻り値: なし。
    - `resetNodeStates()`: 全てのノードの表示状態や選択状態を初期状態にリセットする関数。
    - `fitToContent()`: グラフの表示範囲を現在のコンテンツに合わせて調整し、全体が表示されるようにする関数。
    - `toggleNodeLabels()`: グラフ上のノードラベルの表示/非表示を切り替える関数。
    - `toggleCalleeLocationFilter()`: 呼び出し先ノードのロケーションに基づくフィルターの表示/非表示を切り替える関数。
    - `replace()`: (詳細不明) 文字列の置換処理や要素の差し替えに関連する可能性のある関数。
    - `switch()`: (詳細不明) 条件分岐の制御フローに関連する可能性のある関数。
    - `function()`: (詳細不明) 匿名関数やコールバック関数として使用される可能性のある関数。
    - `max()`: (詳細不明) 最大値を計算するユーティリティ関数。
    - `on()`: (詳細不明) イベントリスナーを設定するための関数。
    - `if()`: (詳細不明) 条件分岐の制御フローに関連する可能性のある関数。
    - `for()`: (詳細不明) ループ処理の制御フローに関連する可能性のある関数。
    - `ready()`: (詳細不明) DOMの準備が完了したイベントなどを処理する関数。
    - `addListener()`: (詳細不明) イベントリスナーを追加する関数。
- **src/main.js**:
    - `greet(name)`: 受け取った名前に挨拶メッセージを返すシンプルな関数。引数: `name` (string), 戻り値: `string`。
    - `main()`: アプリケーションのエントリーポイントまたは主要な処理を実行する関数。引数: なし, 戻り値: なし。

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
Generated at: 2025-09-08 07:06:48 JST

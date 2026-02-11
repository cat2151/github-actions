Last updated: 2026-02-12

# Project Overview

## プロジェクト概要
- 🚀 このリポジトリは、複数のプロジェクトで共通して利用できるGitHub Actionsワークフローを集約しています。
- 🔗 各プロジェクトは共通化されたワークフローを呼び出すだけで良く、GitHub Actionsの管理を簡素化します。
- ✅ ワークフローのメンテナンスは一元化され、個々のプロジェクト開発者は自身の開発に集中できます。

## 技術スタック
- フロントエンド: HTML (呼び出しグラフ表示用), CSS (グラフのスタイリング), JavaScript (インタラクティブな呼び出しグラフ操作、おそらくCytoscape.jsなどのライブラリを利用)
- 音楽・オーディオ: 該当なし
- 開発ツール: Node.js (多数の自動化スクリプトの実行環境), Python (ファイルサイズチェック等のスクリプト), CodeQL (静的解析による呼び出しグラフ生成), GitHub Actions (ワークフローの自動実行プラットフォーム), VS Code (開発環境の設定), Gemini (README自動翻訳に利用)
- テスト: CodeQL (コードの静的解析を通じて潜在的な問題や品質をチェック)
- ビルドツール: Node.js/npm (JavaScriptスクリプトによる各種ドキュメント、グラフなどの自動生成)
- 言語機能: JavaScript (Node.jsのCommonJSモジュールとしてスクリプトを記述), Python (特定の自動化スクリプト), QL (CodeQLクエリ言語), Markdown (ドキュメント記述), TOML (設定ファイル)
- 自動化・CI/CD: GitHub Actions (ワークフローの定義と実行), Node.jsスクリプト群 (ファイル操作、データ解析、ドキュメント生成などの自動化処理)
- 開発標準: CodeQL (コード品質の向上と解析), `.vscode/settings.json` (開発環境におけるコードスタイルやリンティングの統一)

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
  📖 35.md
  📖 38.md
  📖 4.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明
- **`.github_automation/callgraph/codeql-queries/callgraph.ql`**: CodeQLを用いた関数呼び出しグラフを生成するためのクエリ定義ファイルです。ソースコードを解析し、関数間の依存関係を抽出します。
- **`.github_automation/callgraph/config/example.json`**: 呼び出しグラフ機能に関する設定例を記述したJSONファイルです。
- **`.github_automation/callgraph/docs/callgraph.md`**: 呼び出しグラフ機能の使用方法や詳細を説明するドキュメントです。
- **`.github_automation/callgraph/presets/callgraph.js`**: 呼び出しグラフのインタラクティブな表示ロジック（ノードの配置、情報表示、ズームなど）を記述したJavaScriptファイルです。
- **`.github_automation/callgraph/presets/style.css`**: 呼び出しグラフの見た目（色、サイズ、レイアウトなど）を定義するCSSファイルです。
- **`.github_automation/callgraph/scripts/analyze-codeql.cjs`**: CodeQLを使用してリポジトリのコードを解析し、解析結果を生成するNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/generate-html-graph.cjs`**: CodeQLの解析結果（SARIF形式など）を基に、インタラクティブなHTML形式の関数呼び出しグラフを生成するNode.jsスクリプトです。
- **`.github_automation/check-large-files/README.md`**: 大容量ファイルチェック機能に関する説明ドキュメントです。
- **`.github_automation/check-large-files/check-large-files.toml.example`**: 大容量ファイルチェックのルール設定例を示すTOMLファイルです。
- **`.github_automation/check-large-files/scripts/check_large_files.py`**: プロジェクト内の指定されたサイズを超えるファイルを検出するためのPythonスクリプトです。
- **`.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs`**: 最近のコミットが人間によって行われたものか（自動化されたものではないか）をチェックするためのNode.jsスクリプトです。
- **`.github_automation/project_summary/docs/daily-summary-setup.md`**: 日次サマリー生成機能のセットアップに関するドキュメントです。
- **`.github_automation/project_summary/prompts/development-status-prompt.md`**: 開発状況を生成する際に使用されるプロンプト（指示文）のテンプレートです。
- **`.github_automation/project_summary/prompts/project-overview-prompt.md`**: プロジェクト概要を生成する際に使用されるプロンプトのテンプレートです。
- **`.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`**: プロジェクトサマリー生成処理全体の調整役となるNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`**: プロジェクトの開発状況レポートを生成するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/development/GitUtils.cjs`**: Gitリポジトリ操作に関するユーティリティ関数を提供するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs`**: コードベースを分析し、ファイルや関数などの情報を抽出するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs`**: プロジェクトの概要を生成するロジックをカプセル化したNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/generate-project-summary.cjs`**: プロジェクトの概要や開発状況などを自動生成するためのメインのNode.jsスクリプトです。
- **`.github_automation/translate/docs/TRANSLATION_SETUP.md`**: README自動翻訳機能のセットアップに関するドキュメントです。
- **`.github_automation/translate/scripts/translate-readme.cjs`**: READMEファイルを指定された言語に自動翻訳するためのNode.jsスクリプトです。
- **`.gitignore`**: Gitがバージョン管理の対象から除外すべきファイルやディレクトリを指定する設定ファイルです。
- **`.vscode/settings.json`**: Visual Studio Codeエディタのワークスペース固有の設定ファイルで、開発環境の統一に貢献します。
- **`LICENSE`**: このプロジェクトのライセンス情報が記述されたファイルです。
- **`README.ja.md`**: プロジェクトの日本語版説明書で、このリポジトリの目的や使い方を説明しています。
- **`README.md`**: `README.ja.md`を基に自動生成されたプロジェクトの英語版説明書です。
- **`_config.yml`**: GitHub Pagesなどのサイト設定に関するファイルです。
- **`generated-docs/callgraph.html`**: 生成されたインタラクティブな関数呼び出しグラフを表示するHTMLファイルです。
- **`generated-docs/callgraph.js`**: `generated-docs/callgraph.html`で使用される、呼び出しグラフの表示ロジックを含むJavaScriptファイルです。`.github_automation/callgraph/presets/callgraph.js`のコピーである可能性が高いです。
- **`generated-docs/style.css`**: `generated-docs/callgraph.html`で使用されるスタイルシートファイルです。`.github_automation/callgraph/presets/style.css`のコピーである可能性が高いです。
- **`googled947dc864c270e07.html`**: Googleサイト認証用のファイルです。
- **`src/main.js`**: プロジェクトの機能例として含まれる、シンプルなJavaScriptコードです。

## 関数詳細説明
- **`escapeHtml`** (in `callgraph.js`): HTML特殊文字をエスケープし、安全に表示するための文字列処理関数です。
- **`getLayoutConfig`** (in `callgraph.js`): グラフのレイアウト設定を取得するための関数です。グラフの表示方法を決定するパラメータを返します。
- **`placeCentralNode`** (in `callgraph.js`): グラフ内の特定のノード（中心となる関数など）を画面中央に配置する関数です。
- **`showNodeInfo`** (in `callgraph.js`): グラフのノード（関数）に関する詳細情報をパネルに表示する関数です。
- **`showEdgeInfo`** (in `callgraph.js`): グラフのエッジ（関数呼び出し関係）に関する詳細情報をパネルに表示する関数です。
- **`hideInfoPanel`** (in `callgraph.js`): グラフ情報表示パネルを非表示にする関数です。
- **`showInfoPanel`** (in `callgraph.js`): グラフ情報表示パネルを表示する関数です。
- **`toggleInfoPanel`** (in `callgraph.js`): グラフ情報表示パネルの表示/非表示を切り替える関数です。
- **`generateGitHubURL`** (in `callgraph.js`): 関連するGitHubリポジトリやファイルへのURLを生成する関数です。
- **`resetLayout`** (in `callgraph.js`): グラフのレイアウトを初期状態にリセットする関数です。
- **`watchNodeMovementAndFixOverlapsWrap`** (in `callgraph.js`): ノードの動きを監視し、重なりを修正する処理をラップする関数です。
- **`watchNodeMovementAndFixOverlaps`** (in `callgraph.js`): グラフのノードが移動した際に、他のノードとの重なりを検出し、自動的に修正する関数です。
- **`resolveNodeOverlaps`** (in `callgraph.js`): 複数のノードが重なっている場合に、それらを適切に配置し直して重なりを解消する関数です。
- **`switchLayout`** (in `callgraph.js`): グラフの表示レイアウトを別の種類に切り替える関数です。
- **`resetNodeStates`** (in `callgraph.js`): グラフ内のノードの選択状態やハイライトなどの視覚的状態をリセットする関数です。
- **`fitToContent`** (in `callgraph.js`): グラフ全体がビューポート内に収まるようにズームレベルを調整する関数です。
- **`toggleNodeLabels`** (in `callgraph.js`): グラフノードのラベル（関数名など）の表示/非表示を切り替える関数です。
- **`toggleCalleeLocationFilter`** (in `callgraph.js`): 呼び出された関数の場所に基づいてフィルタリングを切り替える機能に関する関数です。
- **`replace`** (in `callgraph.js`): 文字列置換を行うための汎用的な関数です。
- **`switch`** (in `callgraph.js`): 条件分岐を行うための制御構造の一部です（JavaScriptのキーワードであり、個別の関数定義ではない可能性が高い）。
- **`function`** (in `callgraph.js`): JavaScriptで関数を定義するためのキーワードです（個別の関数定義ではない可能性が高い）。
- **`max`** (in `callgraph.js`): 最大値を計算するための汎用的な関数です（JavaScriptの`Math.max`か、独自のラッパー関数）。
- **`on`** (in `callgraph.js`): イベントリスナーを設定するための関数です（イベント駆動ライブラリのメソッドである可能性が高い）。
- **`if`** (in `callgraph.js`): 条件分岐を行うための制御構造の一部です（JavaScriptのキーワードであり、個別の関数定義ではない可能性が高い）。
- **`for`** (in `callgraph.js`): ループ処理を行うための制御構造の一部です（JavaScriptのキーワードであり、個別の関数定義ではない可能性が高い）。
- **`ready`** (in `callgraph.js`): ドキュメントや特定の要素が準備完了になったときに実行されるコールバックを設定する関数です（DOM Readyイベントハンドラなど）。
- **`addListener`** (in `callgraph.js`): イベントリスナーを追加するための関数です。
- **`greet`** (in `src/main.js`): 挨拶メッセージを生成する関数です。引数として名前を受け取り、挨拶文字列を返します。
- **`main`** (in `src/main.js`): アプリケーションのエントリーポイントとなるメイン関数です。`greet`関数を呼び出して結果を出力します。

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
Generated at: 2026-02-12 07:10:13 JST

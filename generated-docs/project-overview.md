Last updated: 2026-03-02

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽にするための共通ワークフロー集です。
- 🔗 共通化されたワークフローを提供し、様々なプロジェクトから簡単に再利用できます。
- ✅ ワークフローの一括メンテナンスを可能にし、各プロジェクトの開発者は本質的な開発に集中できます。

## 技術スタック
- フロントエンド:
    - **JavaScript (Cy.js)**: 関数呼び出しグラフのインタラクティブな表示や操作（ノード操作、レイアウト等）を制御するために利用されます。
    - **CSS**: 関数呼び出しグラフの視覚的なスタイル（色、フォント、配置など）を定義します。
- 音楽・オーディオ: 該当なし
- 開発ツール:
    - **GitHub Actions**: ワークフローの自動化と共通化のための基盤であり、プロジェクトの様々な自動化プロセスを実行します。
    - **CodeQL**: コードの静的解析を行い、セキュリティ脆弱性やバグを検出するツールです。特にJavaScript/TypeScriptプロジェクトの関数呼び出しグラフ生成に活用されます。
    - **Git**: ソースコードのバージョン管理システムとして、変更履歴の追跡や協力開発を支援します。
    - **GitHub**: プロジェクトのリポジトリホスティングとActionsの実行環境を提供します。
    - **Gemini**: READMEファイルの自動翻訳に利用されるAIサービスです。
    - **VS Code**: 開発者のための統合開発環境であり、`.vscode/settings.json`を通じて開発環境の設定統一に貢献します。
- テスト:
    - **CodeQL**: コードベースの品質とセキュリティを自動的にチェックするための静的解析ツールとして機能します。
- ビルドツール: 該当なし（直接的なビルドツールは使用されていませんが、Node.jsがスクリプト実行環境として機能します。）
- 言語機能:
    - **JavaScript (Node.js)**: 多くの自動化スクリプト（`.cjs`ファイル）の実行環境および主要なスクリプト言語として使用されます。
    - **Python**: 大容量ファイルチェック（`check_large_files.py`）スクリプトに使用されます。
    - **Markdown**: プロジェクトドキュメント（`README.md`、`generated-docs`内のファイルなど）の記述に利用される軽量マークアップ言語です。
    - **TOML**: 設定ファイル（`check-large-files.toml.default`）の記述形式です。
    - **JSON**: 設定ファイル（`example.json`, `settings.json`）やデータ交換に利用されるデータ形式です。
- 自動化・CI/CD:
    - **GitHub Actions**: プロジェクトの主要な自動化基盤であり、コード解析、ドキュメント生成、翻訳などの継続的インテグレーション/デリバリープロセスを自動化します。
- 開発標準:
    - **Markdown**: ドキュメントの記述と共有の標準形式として、プロジェクト内の様々な説明やレポートに利用されます。
    - **`.vscode/settings.json`**: 開発環境（VS Code）の設定を統一し、コードスタイルや開発効率の標準化を支援します。

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
  📖 46.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明
- **`.github_automation/callgraph/codeql-queries/callgraph.ql`**: CodeQLクエリファイル。JavaScript/TypeScriptプロジェクトの関数呼び出しグラフを生成するためにCodeQLエンジンによって実行されます。
- **`.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml`**: CodeQLパックの依存関係を管理し、ビルドの再現性を保証するためのロックファイルです。
- **`.github_automation/callgraph/codeql-queries/qlpack.yml`**: CodeQLパックのメタデータ（名前、バージョン、依存関係など）を定義するファイルです。
- **`.github_automation/callgraph/config/example.json`**: 関数呼び出しグラフ生成ツール（callgraph）の設定例を含むJSONファイルです。
- **`.github_automation/callgraph/docs/callgraph.md`**: callgraphツールの目的、使用方法、機能に関する説明を記述したMarkdownファイルです。
- **`.github_automation/callgraph/presets/callgraph.js`**: 関数呼び出しグラフをWebブラウザ上でインタラクティブに表示・操作するためのJavaScriptコードです。ノードの配置、情報パネルの表示、レイアウト切り替えなどの機能を提供します。
- **`.github_automation/callgraph/presets/style.css`**: 関数呼び出しグラフの視覚的なスタイル（色、フォント、レイアウトなど）を定義するCSSファイルです。
- **`.github_automation/callgraph/scripts/analyze-codeql.cjs`**: CodeQLツールキットを使用してコードベースを解析し、解析結果をSARIF（Static Analysis Results Interchange Format）形式で出力するNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/callgraph-utils.cjs`**: callgraphの生成および処理に関連する共通のユーティリティ関数を提供するNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/check-codeql-exists.cjs`**: システムにCodeQL CLIツールがインストールされているかを確認するためのNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/check-node-version.cjs`**: 必要なNode.jsのバージョンが満たされているかを確認するためのNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/common-utils.cjs`**: プロジェクト全体で利用される汎用的なユーティリティ関数を集めたNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/copy-commit-results.cjs`**: コミット結果や生成された成果物を特定の場所にコピーするためのNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/extract-sarif-info.cjs`**: CodeQL解析によって生成されたSARIFファイルから、関数呼び出しグラフに必要な情報を抽出するNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/find-process-results.cjs`**: 以前の処理結果や中間ファイルを検索するためのNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/generate-html-graph.cjs`**: 抽出された関数呼び出し情報に基づいて、視覚的なHTMLグラフファイルを生成するNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/generateHTML.cjs`**: HTMLコンテンツをプログラム的に生成するためのユーティリティを提供するNode.jsスクリプトです。
- **`.github_automation/check-large-files/README.md`**: 大容量ファイルチェック機能に関する説明を記述したMarkdownファイルです。
- **`.github_automation/check-large-files/check-large-files.toml.default`**: プロジェクト内の大容量ファイルを検出するための設定を定義するTOML形式のデフォルトファイルです。
- **`.github_automation/check-large-files/scripts/check_large_files.py`**: Gitリポジトリ内の指定されたサイズを超えるファイルを検出し、報告するPythonスクリプトです。
- **`.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs`**: 最近、人間によって行われたコミットが存在するかどうかをチェックするNode.jsスクリプトです。これは、自動化されたプロセスが無限ループに陥るのを防ぐためなどに使用されます。
- **`.github_automation/project_summary/docs/daily-summary-setup.md`**: 日次プロジェクトサマリーの生成と設定に関する手順を記述したMarkdownファイルです。
- **`.github_automation/project_summary/prompts/development-status-prompt.md`**: AIによる開発状況レポート生成時に使用されるプロンプトのテンプレートです。
- **`.github_automation/project_summary/prompts/project-overview-prompt.md`**: AIによるプロジェクト概要生成時に使用されるプロンプトのテンプレートです。
- **`.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`**: プロジェクトサマリー生成プロセス全体の調整役となるNode.jsスクリプトです。各コンポーネント（データ収集、解析、生成）の連携を管理します。
- **`.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`**: プロジェクトの開発状況に関するレポートを生成するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/development/GitUtils.cjs`**: Gitリポジトリ操作（コミット履歴の取得など）に関するユーティリティ関数を提供するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/development/IssueTracker.cjs`**: Issueトラッカー（GitHub Issuesなど）から情報を取得するためのユーティリティを提供するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/generate-project-summary.cjs`**: プロジェクトサマリーを生成するためのメインエントリーポイントとなるNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs`**: コードベースを解析し、ファイル数、行数、関数定義などの構造的な情報を収集するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs`**: プロジェクト解析プロセス全体を調整し、データ収集からレポート生成までの流れを管理するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs`**: プロジェクトに関する様々なデータ（ファイル情報、Git履歴など）を収集するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs`**: 収集したプロジェクトデータを、レポート生成に適した形式に整形するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs`**: 収集・整形されたデータに基づいて、プロジェクト概要レポートを生成するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/shared/BaseGenerator.cjs`**: プロジェクトサマリー生成に関わる様々なジェネレータの共通基底クラスを提供するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs`**: ファイルシステム操作（ファイルの読み書き、ディレクトリの作成など）に関する汎用ユーティリティ関数を提供するNode.jsスクリプトです。
- **`.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs`**: プロジェクト内のファイル操作に特化したユーティリティ関数を提供するNode.jsスクリプトです。
- **`.github_automation/translate/docs/TRANSLATION_SETUP.md`**: README自動翻訳機能の設定と使用方法に関する手順を記述したMarkdownファイルです。
- **`.github_automation/translate/scripts/translate-readme.cjs`**: プロジェクトのREADMEファイルを他の言語に自動翻訳するNode.jsスクリプトです。
- **`.gitignore`**: Gitバージョン管理システムが無視するファイルやディレクトリのパターンを定義するファイルです。
- **`.vscode/settings.json`**: Visual Studio Codeエディタのワークスペース固有の設定を定義するファイルで、コードの書式設定や拡張機能の設定などが含まれます。
- **`LICENSE`**: プロジェクトの配布条件と権利を示すライセンス情報ファイルです。
- **`README.ja.md`**: プロジェクトの日本語版説明書です。
- **`README.md`**: プロジェクトの英語版説明書で、`README.ja.md`から自動翻訳によって生成されます。
- **`_config.yml`**: GitHub Pagesで利用されるJekyll静的サイトジェネレータの設定ファイルです。
- **`generated-docs/callgraph.html`**: CodeQL解析とスクリプトによって生成された、インタラクティブな関数呼び出しグラフを表示するためのHTMLファイルです。
- **`generated-docs/callgraph.js`**: `generated-docs/callgraph.html`内でグラフの動的な挙動を制御するJavaScriptコードです。`.github_automation/callgraph/presets/callgraph.js` と同じ内容です。
- **`generated-docs/style.css`**: `generated-docs/callgraph.html`のスタイルを定義するCSSファイルです。`.github_automation/callgraph/presets/style.css` と同じ内容です。
- **`src/main.js`**: プロジェクトに含まれるシンプルなJavaScriptのサンプルコードファイルです。

## 関数詳細説明
- **`escapeHtml(str)`**: HTMLエンティティをエスケープし、文字列を安全に表示できるようにします。
- **`getLayoutConfig()`**: 関数呼び出しグラフのレイアウトに関する設定オブジェクトを返します。
- **`placeCentralNode(cy, node, x, y)`**: 指定されたノードをグラフの中心に配置します。`cy`はCytoscapeインスタンス、`node`はノードオブジェクト、`x, y`は座標です。
- **`showNodeInfo(node)`**: グラフ上のノードが選択された際に、そのノードに関する詳細情報を情報パネルに表示します。`node`は選択されたノードオブジェクトです。
- **`showEdgeInfo(edge)`**: グラフ上のエッジ（接続線）が選択された際に、そのエッジに関する詳細情報を情報パネルに表示します。`edge`は選択されたエッジオブジェクトです。
- **`hideInfoPanel()`**: 現在表示されている情報パネルを非表示にします。
- **`showInfoPanel()`**: 情報パネルを表示状態にします。
- **`toggleInfoPanel()`**: 情報パネルの表示・非表示を切り替えます。
- **`generateGitHubURL(path)`**: 指定されたパスに基づいてGitHubリポジトリへのURLを生成します。`path`はファイルパスです。
- **`resetLayout()`**: グラフのレイアウトを初期状態にリセットします。
- **`watchNodeMovementAndFixOverlapsWrap(cy, resolveOverlapsFunc, threshold)`**: ノードの移動を監視し、重なりが発生しないように修正する処理をラップします。`cy`はCytoscapeインスタンス、`resolveOverlapsFunc`は重なり解消関数、`threshold`は閾値です。
- **`watchNodeMovementAndFixOverlaps(cy, resolveOverlapsFunc)`**: ノードの動きを監視し、Cytoscapeグラフ内のノードの重なりを継続的に解消する処理を実行します。`cy`はCytoscapeインスタンス、`resolveOverlapsFunc`は重なり解消関数です。
- **`resolveNodeOverlaps(nodes, threshold)`**: 指定されたノード群の中で重なり合うものを検出し、それぞれを移動させて重なりを解消します。`nodes`はノードのコレクション、`threshold`は重なり判定の閾値です。
- **`switchLayout(cy, layoutType)`**: グラフの表示レイアウトを指定されたタイプ（例: 'cola', 'dagre'など）に切り替えます。`cy`はCytoscapeインスタンス、`layoutType`はレイアウトの種類です。
- **`resetNodeStates()`**: グラフ内のノードの状態（選択状態、ハイライトなど）をリセットします。
- **`fitToContent()`**: グラフの表示領域を調整し、すべてのノードが画面に収まるようにズームレベルを調整します。
- **`toggleNodeLabels()`**: グラフ上のノードのラベル（名前）の表示・非表示を切り替えます。
- **`toggleCalleeLocationFilter()`**: 呼び出し先（callee）のファイルロケーションに基づいてノードのフィルタリングを切り替えます。
- **`replace(search, replaceWith)`**: 文字列内の指定された部分を置換します。`search`は検索対象、`replaceWith`は置換文字列です。（一般的な文字列置換関数と想定されます。）
- **`greet()`**: 簡単な挨拶メッセージをコンソールに出力する関数です。
- **`main()`**: プログラムの主要な処理を実行するエントリーポイント関数です。

## 関数呼び出し階層ツリー
```
# 提供された情報からは、プロジェクト全体の明確な関数呼び出し階層を特定できませんでした。
# 以下は、プロジェクト内で検出された関数の一部であり、その関連性を示唆する情報として提示します。

- escapeHtml (.github_automation/callgraph/presets/callgraph.js)
- getLayoutConfig ()
  # この関数に関連する、またはそのスコープ内で利用される他の関数が検出されましたが、直接の呼び出し関係ではない可能性があります。
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
- greet (src/main.js)
- main (src/main.js)

---
Generated at: 2026-03-02 07:06:26 JST

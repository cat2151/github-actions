Last updated: 2025-11-10

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽にします。
- 🔗 共通化されたワークフローを提供し、どのプロジェクトからも呼び出すだけで利用可能です。
- ✅ ワークフローのメンテナンスを一括で行い、プロジェクト開発に集中できる環境を提供します。

## 技術スタック
本プロジェクトでは、GitHub Actionsワークフローの共通化と、それに付随するドキュメント生成やコード解析のために以下の技術を使用しています。

- フロントエンド: HTML (動的なコールグラフ表示), CSS (スタイル設定), JavaScript (コールグラフのインタラクティブ操作)
- 音楽・オーディオ: 該当なし
- 開発ツール: Node.js (スクリプト実行環境), Git (バージョン管理), CodeQL (コード解析、コールグラフ生成), VS Code (開発環境設定)
- テスト: CodeQL (静的コード解析による品質保証の一部)
- ビルドツール: (明示的なビルドツールはなし。Node.jsスクリプトが生成処理を担う)
- 言語機能: JavaScript (CommonJS形式のスクリプト), YAML (GitHub Actionsワークフロー定義), Markdown (ドキュメント記述)
- 自動化・CI/CD: GitHub Actions (共通ワークフローの実行、自動ドキュメント生成、翻訳など), Node.js (自動化スクリプト実行)
- 開発標準: Gemini (READMEファイルの自動翻訳に利用), CodeQL (コード品質の維持・向上に貢献)

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
  📖 4.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明
- **`.github_automation/callgraph/codeql-queries/callgraph.ql`**: CodeQLクエリ。コードベースから関数呼び出しグラフを抽出するためのロジックを定義します。
- **`.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml`**: CodeQLパックの依存関係をロックするためのファイルです。
- **`.github_automation/callgraph/codeql-queries/qlpack.yml`**: CodeQLパックのメタデータと設定を定義するファイルです。
- **`.github_automation/callgraph/config/example.json`**: コールグラフ生成に関連する設定の例が記述されています。
- **`.github_automation/callgraph/docs/callgraph.md`**: コールグラフ機能に関する詳細な説明ドキュメントです。
- **`.github_automation/callgraph/presets/callgraph.js`**: WebUI上でコールグラフの表示とインタラクション（ノードの移動、情報パネルの表示など）を制御するJavaScriptコードのプリセットです。`generated-docs/callgraph.js`として出力されます。
- **`.github_automation/callgraph/presets/style.css`**: コールグラフの視覚的なスタイルを定義するCSSファイルのプリセットです。`generated-docs/style.css`として出力されます。
- **`.github_automation/callgraph/scripts/analyze-codeql.cjs`**: CodeQLを使用してソースコードを解析し、SARIF形式の結果を生成するNode.jsスクリプトです。
- **`.github_automation/callgraph/scripts/callgraph-utils.cjs`**: コールグラフ生成に関連する汎用的なユーティリティ関数を提供します。
- **`.github_automation/callgraph/scripts/check-codeql-exists.cjs`**: システムにCodeQLがインストールされているかを確認するスクリプトです。
- **`.github_automation/callgraph/scripts/check-node-version.cjs`**: Node.jsのバージョンが要件を満たしているかを確認するスクリプトです。
- **`.github_automation/callgraph/scripts/common-utils.cjs`**: 複数のスクリプトで利用される共通のユーティリティ関数を集めたファイルです。
- **`.github_automation/callgraph/scripts/copy-commit-results.cjs`**: 特定のコミットに関連する結果ファイルをコピーするためのスクリプトです。
- **`.github_automation/callgraph/scripts/extract-sarif-info.cjs`**: CodeQL解析で生成されたSARIFファイルから必要な情報を抽出するスクリプトです。
- **`.github_automation/callgraph/scripts/find-process-results.cjs`**: 処理済み結果ファイルを見つけるためのスクリプトです。
- **`.github_automation/callgraph/scripts/generate-html-graph.cjs`**: CodeQLの解析結果を基に、HTML形式の関数呼び出しグラフを生成するスクリプトです。
- **`.github_automation/callgraph/scripts/generateHTML.cjs`**: HTMLコンテンツを生成するための汎用的なスクリプトです。
- **`.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs`**: 最新のコミットが人間によって行われたものか（自動化されたものではないか）をチェックするスクリプトです。
- **`.github_automation/project_summary/docs/daily-summary-setup.md`**: 日次サマリー生成機能の設定方法に関するドキュメントです。
- **`.github_automation/project_summary/prompts/development-status-prompt.md`**: 開発状況レポート生成時にAIに与えるプロンプトの定義です。
- **`.github_automation/project_summary/prompts/project-overview-prompt.md`**: プロジェクト概要生成時にAIに与えるプロンプトの定義です。
- **`.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`**: プロジェクトサマリー生成全体のプロセスを調整・管理する主要なスクリプトです。
- **`.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`**: プロジェクトの開発状況に関するレポートを生成するスクリプトです。
- **`.github_automation/project_summary/scripts/development/GitUtils.cjs`**: Gitリポジトリ操作に関連するユーティリティ関数を提供します。
- **`.github_automation/project_summary/scripts/development/IssueTracker.cjs`**: プロジェクトのIssue（課題）追跡に関連する機能を提供するスクリプトです。
- **`.github_automation/project_summary/scripts/generate-project-summary.cjs`**: プロジェクト全体のサマリーを生成するためのエントリスクリプトです。
- **`.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs`**: コードベースを解析し、構造や依存関係に関する情報を抽出するスクリプトです。
- **`.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs`**: プロジェクト分析プロセス全体を統括し、各コンポーネントの連携を管理するスクリプトです。
- **`.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs`**: プロジェクトに関する様々なデータ（ファイル、コード、コミットなど）を収集するスクリプトです。
- **`.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs`**: 収集したプロジェクトデータを、レポートや概要生成に適した形式に整形するスクリプトです。
- **`.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs`**: プロジェクトの概要説明を生成するスクリプトです。
- **`.github_automation/project_summary/scripts/shared/BaseGenerator.cjs`**: プロジェクトサマリーを生成する各種ジェネレーターの共通基盤となる機能を提供します。
- **`.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs`**: ファイルシステム操作（ファイルの読み書き、ディレクトリ作成など）に関する汎用ユーティリティ関数です。
- **`.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs`**: プロジェクト内のファイル構造や内容に関連するユーティリティ関数を提供します。
- **`.github_automation/translate/docs/TRANSLATION_SETUP.md`**: READMEなどのドキュメントを多言語に翻訳するための設定手順を説明するドキュメントです。
- **`.github_automation/translate/scripts/translate-readme.cjs`**: READMEファイルを指定された言語に自動翻訳するためのスクリプトです。
- **`.gitignore`**: Gitがバージョン管理の対象から除外するファイルやディレクトリを指定します。
- **`.vscode/settings.json`**: Visual Studio Codeエディタのワークスペース固有の設定を定義します。
- **`LICENSE`**: 本プロジェクトのライセンス情報が記述されています。
- **`README.ja.md`**: プロジェクトの日本語版説明書です。
- **`README.md`**: プロジェクトの英語版説明書です。`README.ja.md`を元に自動翻訳されて生成されます。
- **`_config.yml`**: GitHub Pagesなどの静的サイトジェネレーターの設定ファイルです。
- **`generated-docs/callgraph.html`**: CodeQL解析結果を基に生成された、関数呼び出しグラフを視覚的に表示するHTMLファイルです。
- **`generated-docs/callgraph.js`**: `generated-docs/callgraph.html`で使用されるJavaScriptコード。コールグラフのインタラクティブな操作を可能にします。
- **`generated-docs/style.css`**: `generated-docs/callgraph.html`で使用されるCSSファイル。コールグラフの見た目を定義します。
- **`issue-notes/*.md`**: プロジェクトのIssueに関するメモや詳細情報がMarkdown形式で保存されています。
- **`src/main.js`**: プロジェクトの基本的な動作を示す、シンプルなJavaScriptファイルです。

## 関数詳細説明
### .github_automation/callgraph/presets/callgraph.js および generated-docs/callgraph.js
これらのファイルは同じ内容を持ち、コールグラフのWebUIインタラクションを提供します。
- **`escapeHtml(unsafe)`**: HTML特殊文字をエスケープし、指定された文字列をHTMLとして安全に表示できるように変換します。
  - 引数: `unsafe` (string) - エスケープする文字列。
  - 戻り値: `string` - エスケープされた文字列。
- **`getLayoutConfig()`**: グラフの描画レイアウトに関する設定オブジェクトを取得します。
  - 引数: なし。
  - 戻り値: `object` - レイアウト設定。
- **`placeCentralNode(cy, node)`**: 指定されたCytoscapeインスタンス (`cy`) 上で、特定のノードを中央に配置する処理を実行します。
  - 引数: `cy` (object) - Cytoscapeグラフインスタンス、`node` (object) - 中央に配置するノード。
  - 戻り値: なし。
- **`showNodeInfo(node)`**: 選択されたノード（関数など）の詳細情報を情報パネルに表示します。
  - 引数: `node` (object) - 表示するノード。
  - 戻り値: なし。
- **`showEdgeInfo(edge)`**: 選択されたエッジ（関数呼び出し関係など）の詳細情報を情報パネルに表示します。
  - 引数: `edge` (object) - 表示するエッジ。
  - 戻り値: なし。
- **`hideInfoPanel()`**: 画面上の情報表示パネルを非表示にします。
  - 引数: なし。
  - 戻り値: なし。
- **`showInfoPanel()`**: 画面上の情報表示パネルを表示します。
  - 引数: なし。
  - 戻り値: なし。
- **`toggleInfoPanel()`**: 情報表示パネルの表示/非表示を切り替えます。
  - 引数: なし。
  - 戻り値: なし。
- **`generateGitHubURL(nodeData)`**: ノードデータ（例えばファイルパスや行番号）に基づいて、関連するGitHubリポジトリのURLを生成します。
  - 引数: `nodeData` (object) - ノードのデータ。
  - 戻り値: `string` - 生成されたGitHub URL。
- **`resetLayout(cy)`**: グラフのレイアウトを初期状態にリセットし、ノードの配置を再計算します。
  - 引数: `cy` (object) - Cytoscapeグラフインスタンス。
  - 戻り値: なし。
- **`watchNodeMovementAndFixOverlapsWrap(cy)`**: ノードの移動を監視し、重なりを修正するロジックをラップした関数です。
  - 引数: `cy` (object) - Cytoscapeグラフインスタンス。
  - 戻り値: なし。
- **`watchNodeMovementAndFixOverlaps(cy)`**: グラフ内のノードの動きをリアルタイムで監視し、他のノードとの重なりを自動的に解消します。
  - 引数: `cy` (object) - Cytoscapeグラフインスタンス。
  - 戻り値: なし。
- **`resolveNodeOverlaps(cy)`**: グラフ内のノードが重なっている場合に、それらを整理して視覚的な衝突を解決します。
  - 引数: `cy` (object) - Cytoscapeグラフインスタンス。
  - 戻り値: なし。
- **`switchLayout(cy, layoutName)`**: グラフのレイアウトアルゴリズム（例: 'cola', 'dagre'など）を動的に切り替えます。
  - 引数: `cy` (object) - Cytoscapeグラフインスタンス、`layoutName` (string) - 新しいレイアウトの名前。
  - 戻り値: なし。
- **`resetNodeStates(cy)`**: グラフ内のすべてのノードの選択状態、ハイライト状態などをリセットし、デフォルトの状態に戻します。
  - 引数: `cy` (object) - Cytoscapeグラフインスタンス。
  - 戻り値: なし。
- **`fitToContent(cy)`**: グラフ全体が現在のビューポートに収まるようにズームレベルとパン位置を調整します。
  - 引数: `cy` (object) - Cytoscapeグラフインスタンス。
  - 戻り値: なし。
- **`toggleNodeLabels(cy)`**: グラフ内のノードに表示されるラベル（関数名など）の表示/非表示を切り替えます。
  - 引数: `cy` (object) - Cytoscapeグラフインスタンス。
  - 戻り値: なし。
- **`toggleCalleeLocationFilter(cy)`**: 呼び出し先（Callee）の位置情報に基づくフィルタリング機能の有効/無効を切り替えます。
  - 引数: `cy` (object) - Cytoscapeグラフインスタンス。
  - 戻り値: なし。
- **`replace()`**: 文字列の置換操作を行う汎用的な関数です。（具体的な実装は文脈による）
  - 引数: 不明。
  - 戻り値: 不明。
- **`max()`**: 複数の値の中から最大値を計算する汎用的な関数です。（具体的な実装は文脈による）
  - 引数: 不明。
  - 戻り値: 不明。
- **`on()`**: イベントリスナーを登録する汎用的な関数です。通常、特定のイベントが発生した際に実行されるコールバック関数を登録します。
  - 引数: 不明 (通常は `eventName`, `handler` など)。
  - 戻り値: 不明。
- **`ready()`**: ドキュメントが完全に読み込まれ、操作可能になったときに実行される処理を登録する関数です。
  - 引数: 不明 (通常は `handler` など)。
  - 戻り値: 不明。
- **`addListener()`**: イベントリスナーを追加する汎用的な関数です。`on()`と同様にイベントハンドラを登録します。
  - 引数: 不明 (通常は `event`, `listener` など)。
  - 戻り値: 不明。

### src/main.js
- **`greet(name)`**: 指定された名前に挨拶メッセージを返します。
  - 引数: `name` (string) - 挨拶する対象の名前。
  - 戻り値: `string` - "Hello, [name]!" 形式の挨拶メッセージ。
- **`main()`**: アプリケーションのエントリポイントとなる関数。`greet`関数を呼び出し、その結果をコンソールに出力します。
  - 引数: なし。
  - 戻り値: なし。

## 関数呼び出し階層ツリー
```
[このツリーは、コード解析によって検出された関数間の関連性を示しています。必ずしもすべての直接的な呼び出し関係を反映しているわけではなく、特定のコンテキストで関連する関数として検出されたものも含まれています。]

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
  - max ()
  - on ()
  - ready ()
  - addListener ()

---
Generated at: 2025-11-10 07:05:38 JST

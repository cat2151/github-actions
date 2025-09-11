Last updated: 2025-09-11

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: なし (標準Web技術が一部利用される可能性はありますが、特定のフレームワークやライブラリは使用していません。)
- 音楽・オーディオ: なし (このプロジェクトの機能には関連しません。)
- 開発ツール:
    - Node.js runtime: JavaScriptの実行環境を提供します。
    - npm scripts: `package.json`に定義されたタスク（スクリプト）を実行するためのツールです。
    - Google Generative AI (@google/generative-ai): AIによる文書生成や要約をサポートするために使用されるAPIクライアントです。
    - @octokit/rest: GitHub APIと連携し、リポジトリ情報の取得やIssue管理などの操作を行うためのライブラリです。
- テスト: なし (現在のところ、特定のテストフレームワークは明示されていません。)
- ビルドツール: なし (特定のビルドツールは明示されていません。)
- 言語機能:
    - JavaScript: Node.js環境で動作するスクリプトの主要言語です。
    - CodeQL: コードの静的解析を行い、セキュリティ脆弱性やバグを検出するためのクエリ言語です。
- 自動化・CI/CD:
    - GitHub Actions: コード品質チェック、プロジェクト要約の自動生成、多言語翻訳、Issue管理など、様々な自動化ワークフローを実行するためのCI/CDプラットフォームです。
- 開発標準: なし (現在のところ、特定のコード品質ツールやスタイルガイドは明示されていません。)

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
- **`.github_automation/`**: GitHub Actionsによって実行される自動化スクリプトや設定ファイルを格納するメインディレクトリです。
- **`.github_automation/callgraph/`**: プロジェクト内の関数呼び出し関係を分析し、視覚的なグラフとして生成するための機能群が含まれます。
    - **`.github_automation/callgraph/codeql-queries/callgraph.ql`**: CodeQLを使用して呼び出しグラフデータを抽出するためのクエリファイルです。
    - **`.github_automation/callgraph/presets/callgraph.js`**: 生成された呼び出しグラフのHTMLビューで、インタラクティブな操作や表示設定を制御するJavaScriptコードです。
    - **`.github_automation/callgraph/presets/style.css`**: 呼び出しグラフのHTMLビューのスタイルを定義するCSSファイルです。
    - **`.github_automation/callgraph/scripts/analyze-codeql.cjs`**: CodeQLの解析を実行し、結果を処理するためのスクリプトです。
    - **`.github_automation/callgraph/scripts/generate-html-graph.cjs`**: CodeQLの解析結果を基に、HTML形式の呼び出しグラフを生成するスクリプトです。
- **`.github_automation/project_summary/`**: プロジェクトの概要や開発状況をAIを活用して自動生成するための機能群が含まれます。
    - **`.github_automation/project_summary/prompts/project-overview-prompt.md`**: プロジェクト概要を生成する際にAIに与える指示（プロンプト）のテンプレートです。
    - **`.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`**: プロジェクト概要生成処理の全体を調整・管理するスクリプトです。
    - **`.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs`**: プロジェクトの概要テキストを実際に生成するスクリプトです。
- **`.github_automation/translate/scripts/translate-readme.cjs`**: `README.md`ファイルなどのドキュメントを多言語に自動翻訳するためのスクリプトです。
- **`package.json`**: Node.jsプロジェクトのメタデータファイルです。プロジェクト名、バージョン、依存関係、実行スクリプトなどが定義されています。
- **`package-lock.json`**: `package.json`で定義された依存関係の正確なツリー構造とバージョンを記録し、ビルドの再現性を保証します。
- **`README.md` / `README.ja.md`**: プロジェクトの目的、使い方、設定方法などを説明する主要なドキュメントです。多言語対応しています。
- **`generated-docs/`**: GitHub Actionsによって生成されたドキュメント（呼び出しグラフのHTML、プロジェクト概要など）が保存されるディレクトリです。
    - **`generated-docs/callgraph.html`**: 生成された関数呼び出しグラフを視覚化したHTMLファイルです。
    - **`generated-docs/project-overview.md`**: AIによって自動生成されたプロジェクトの概要ドキュメントです。
- **`issue-notes/`**: GitHub Issuesに関連するメモや自動生成されたコンテンツが保存されるディレクトリです。
- **`src/main.js`**: プロジェクトの基本的な機能を示すサンプルコードやエントリポイントとなるJavaScriptファイルです。

## 関数詳細説明
- **`escapeHtml(html)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: HTMLの特殊文字（例: `<`、`>`、`&`）をエスケープし、安全に表示できる文字列に変換します。
    - 引数: `html` (文字列) - エスケープする元のHTML文字列。
    - 戻り値: (文字列) - エスケープされた安全な文字列。
    - 機能: クロスサイトスクリプティング (XSS) 攻撃を防ぐために、動的に生成されるコンテンツの表示前に使用されます。
- **`getLayoutConfig()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 呼び出しグラフのレイアウトに関する設定オブジェクトを返します。
    - 引数: なし。
    - 戻り値: (オブジェクト) - レイアウト設定を含むオブジェクト。
    - 機能: グラフの表示方法（例: ノードの配置、間隔）をカスタマイズするために利用されます。
- **`placeCentralNode()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフの中心となるノードを配置します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフの視覚的な焦点を定め、全体的な構造を整理するのに役立ちます。
- **`showNodeInfo(node)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 指定されたグラフノード（関数など）の詳細情報を表示パネルに表示します。
    - 引数: `node` (オブジェクト) - 表示するノードのデータ。
    - 戻り値: なし。
    - 機能: ユーザーが特定の関数についてより詳しい情報を得るためのUIを提供します。
- **`showEdgeInfo(edge)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 指定されたグラフのエッジ（呼び出し関係）の詳細情報を表示パネルに表示します。
    - 引数: `edge` (オブジェクト) - 表示するエッジのデータ。
    - 戻り値: なし。
    - 機能: 呼び出し元と呼び出し先の関係性や属性をユーザーに提示します。
- **`hideInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフの詳細情報表示パネルを非表示にします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: UIのスペースを節約したり、不要な情報を隠したりするために使用されます。
- **`showInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフの詳細情報表示パネルを表示します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザーが詳細情報を見たいときにパネルを表示します。
- **`toggleInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフの詳細情報表示パネルの表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザー操作に応じてパネルの状態を簡単に変更できるようにします。
- **`generateGitHubURL(node)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフノード（関数）に対応するGitHubリポジトリ上のファイルへのURLを生成します。
    - 引数: `node` (オブジェクト) - GitHub URLを生成する対象のノードデータ。
    - 戻り値: (文字列) - 生成されたGitHubのURL。
    - 機能: グラフ上の関数定義へ直接ジャンプできるリンクを提供します。
- **`resetLayout()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフの現在のレイアウトを初期状態にリセットします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザーがグラフの表示を混乱させてしまった場合に、元の見やすい状態に戻すことができます。
- **`watchNodeMovementAndFixOverlapsWrap()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: ノードの動きを監視し、他のノードとの重なりを自動的に解消する処理のラッパー関数です。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフのノードが密集しすぎたり重なったりしないように、自動調整を行います。
- **`watchNodeMovementAndFixOverlaps()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: ノードの動きを監視し、他のノードとの重なりを解消するメインのロジックを実装しています。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: `watchNodeMovementAndFixOverlapsWrap`から呼び出され、ノードの衝突を避けるための詳細な計算と配置調整を行います。
- **`resolveNodeOverlaps()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ内のノードの重なりを解決するためのアルゴリズムを実行します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフの可読性を高めるために、ノードが互いに重ならないように位置を調整します。
- **`switchLayout(layoutName)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフのレイアウト表示方式を、指定されたレイアウト名に基づいて切り替えます。
    - 引数: `layoutName` (文字列) - 適用するレイアウトの種類（例: 'cola', 'dagre'など）。
    - 戻り値: なし。
    - 機能: ユーザーが様々な視点からグラフ構造を分析できるように、異なるレイアウトオプションを提供します。
- **`resetNodeStates()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ内のすべてのノードの状態（例: 選択、ハイライト）をリセットします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザー操作後のグラフをクリーンな状態に戻すために使用されます。
- **`fitToContent()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフの表示領域を、すべてのコンテンツが収まるように調整します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフ全体を一望できるように、自動的にズームレベルやパン位置を調整します。
- **`toggleNodeLabels(visible)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフノードのラベル（名前）の表示/非表示を切り替えます。
    - 引数: `visible` (真偽値) - ラベルを表示するかどうか。
    - 戻り値: なし。
    - 機能: グラフの混雑度を減らしたり、特定の情報に焦点を当てたりするために使用されます。
- **`toggleCalleeLocationFilter(enabled)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 呼び出し先ノード（関数）の位置に基づくフィルタリング機能の有効/無効を切り替えます。
    - 引数: `enabled` (真偽値) - フィルターを有効にするかどうか。
    - 戻り値: なし。
    - 機能: 特定の場所に定義されている関数のみを表示するなど、複雑なグラフを絞り込むのに役立ちます。
- **`greet(name)`** (`src/main.js`):
    - 役割: 指定された名前に挨拶メッセージを返します。
    - 引数: `name` (文字列) - 挨拶の対象となる名前。
    - 戻り値: (文字列) - 挨拶メッセージ。
    - 機能: シンプルな文字列操作を示します。
- **`main()`** (`src/main.js`):
    - 役割: プロジェクトの主要な処理を実行するエントリポイント関数です。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: `greet`関数を呼び出し、その結果をコンソールに出力します。

## 関数呼び出し階層ツリー
```
- main (src/main.js)
  - greet (src/main.js)
- escapeHtml (.github_automation/callgraph/presets/callgraph.js)
- getLayoutConfig (.github_automation/callgraph/presets/callgraph.js)
- placeCentralNode (.github_automation/callgraph/presets/callgraph.js)
- showNodeInfo (.github_automation/callgraph/presets/callgraph.js)
- showEdgeInfo (.github_automation/callgraph/presets/callgraph.js)
- hideInfoPanel (.github_automation/callgraph/presets/callgraph.js)
- showInfoPanel (.github_automation/callgraph/presets/callgraph.js)
- toggleInfoPanel (.github_automation/callgraph/presets/callgraph.js)
- generateGitHubURL (.github_automation/callgraph/presets/callgraph.js)
- resetLayout (.github_automation/callgraph/presets/callgraph.js)
- watchNodeMovementAndFixOverlapsWrap (.github_automation/callgraph/presets/callgraph.js)
- watchNodeMovementAndFixOverlaps (.github_automation/callgraph/presets/callgraph.js)
- resolveNodeOverlaps (.github_automation/callgraph/presets/callgraph.js)
- switchLayout (.github_automation/callgraph/presets/callgraph.js)
- resetNodeStates (.github_automation/callgraph/presets/callgraph.js)
- fitToContent (.github_automation/callgraph/presets/callgraph.js)
- toggleNodeLabels (.github_automation/callgraph/presets/callgraph.js)
- toggleCalleeLocationFilter (.github_automation/callgraph/presets/callgraph.js)

---
Generated at: 2025-09-11 07:05:22 JST

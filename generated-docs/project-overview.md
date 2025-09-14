Last updated: 2025-09-15

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: このプロジェクトには該当する技術はありません。
- 音楽・オーディオ: このプロジェクトには該当する技術はありません。
- 開発ツール:
    - Node.js runtime: JavaScriptの実行環境で、このプロジェクトのスクリプトやGitHub Actionsのステップで利用されます。
    - npm scripts: `package.json`に定義されたタスクランナーで、プロジェクト内の各種スクリプトを実行するために使用されます。
    - Google Generative AI: `@google/generative-ai`ライブラリを通じて、AIによる文書生成をサポートし、プロジェクトの自動要約などに活用されます。
    - @octokit/rest: GitHub APIと連携するためのライブラリで、Issue管理やリポジトリ情報の取得などに利用されます。
- テスト: このプロジェクトには該当する技術はありません。
- ビルドツール: このプロジェクトには該当する技術はありません。
- 言語機能: このプロジェクトには該当する技術はありません。
- 自動化・CI/CD:
    - GitHub Actions: CI/CD（継続的インテグレーション/継続的デプロイ）を自動化するためのプラットフォームです。このプロジェクトは、以下のような共通ワークフローを提供します。
        - プロジェクト要約自動生成: リポジトリの変更を分析し、自動的にプロジェクト概要を生成します。
        - Issue自動管理: GitHub Issueのライフサイクル管理や、関連情報の自動生成を行います。
        - README多言語翻訳: `README.md`ファイルなどを自動的に多言語に翻訳し、複数の言語版を維持します。
        - i18n automation: 国際化（i18n）プロセスを自動化するためのワークフローです。
- 開発標準: このプロジェクトには該当する技術はありません。

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
- **.github_automation/callgraph/presets/callgraph.js**: 関数の呼び出しグラフをウェブブラウザでインタラクティブに表示するためのJavaScriptファイルです。グラフのレイアウト制御、ノードやエッジの詳細情報の表示、ズーム、パンなどのユーザーインタラクション機能を提供します。
- **.github_automation/callgraph/presets/style.css**: 呼び出しグラフの視覚的なスタイルを定義するCSSファイルです。ノード、エッジ、情報パネルなどの要素の見た目を設定します。
- **generated-docs/callgraph.html**: 生成された関数の呼び出しグラフをウェブページとして表示するためのHTMLファイルです。関連するJavaScriptとCSSファイルを読み込み、インタラクティブなグラフを提供します。
- **generated-docs/callgraph.js**: `callgraph.html`から読み込まれるJavaScriptファイルで、`.github_automation/callgraph/presets/callgraph.js`のコピーまたはその最終生成物と見られます。呼び出しグラフのインタラクティブな表示と操作ロジックを含みます。
- **generated-docs/style.css**: `callgraph.html`から読み込まれるCSSファイルで、`.github_automation/callgraph/presets/style.css`のコピーまたはその最終生成物と見られます。呼び出しグラフのスタイルを定義します。
- **src/main.js**: プロジェクトの基本的な機能やエントリーポイントを示すサンプルJavaScriptファイルです。シンプルな挨拶関数（`greet`）とその呼び出し（`main`）を含みます。

## 関数詳細説明
- **escapeHtml(text)**:
    - 役割: HTMLの特殊文字（例: `<`, `>`, `&`, `"`）をエスケープし、安全な文字列に変換します。これにより、XSS（クロスサイトスクリプティング）攻撃を防ぎ、ウェブページにテキストを安全に表示できるようにします。
    - 引数: `text` (string) - エスケープする文字列。
    - 戻り値: (string) - エスケープされた文字列。
- **getLayoutConfig()**:
    - 役割: 呼び出しグラフのレイアウト設定（例えば、ノード間の距離、配置アルゴリズムなど）を取得または生成します。
    - 引数: [情報なし]
    - 戻り値: (object) - レイアウト設定を含むオブジェクト。
- **placeCentralNode()**:
    - 役割: 呼び出しグラフ内の特定のノードを中央に配置する処理を行います。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **showNodeInfo()**:
    - 役割: グラフ内の特定のノード（関数など）に関する詳細情報を表示パネルに表示します。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **showEdgeInfo()**:
    - 役割: グラフ内の特定の「エッジ」（関数間の呼び出し関係など）に関する詳細情報を表示パネルに表示します。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **hideInfoPanel()**:
    - 役割: 呼び出しグラフの詳細情報パネルを非表示にします。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **showInfoPanel()**:
    - 役割: 呼び出しグラフの詳細情報パネルを表示します。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **toggleInfoPanel()**:
    - 役割: 呼び出しグラフの詳細情報パネルの表示/非表示を切り替えます。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **generateGitHubURL()**:
    - 役割: グラフノードに対応するGitHubリポジトリのソースコードへのURLを生成します。
    - 引数: [情報なし]
    - 戻り値: (string) - 生成されたGitHub URL。
- **resetLayout()**:
    - 役割: 呼び出しグラフのレイアウトを初期状態にリセットします。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **watchNodeMovementAndFixOverlapsWrap()**:
    - 役割: ノードの移動を監視し、他のノードとの重なりを解決する処理をラップ（間接的に呼び出す）します。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **watchNodeMovementAndFixOverlaps()**:
    - 役割: グラフ内のノードの移動を継続的に監視し、他のノードとの重なりが発生した場合に自動的に位置を調整して解決します。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **resolveNodeOverlaps()**:
    - 役割: グラフ内のノード間の重なりを検出し、それらを解消するためにノードの位置を調整します。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **switchLayout()**:
    - 役割: 呼び出しグラフの表示レイアウト（例えば、円形、ツリー型など）を別の種類に切り替えます。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **resetNodeStates()**:
    - 役割: グラフ内のノードの選択状態、ハイライト状態などの視覚的な状態をリセットし、デフォルトに戻します。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **fitToContent()**:
    - 役割: グラフの表示領域を、全てのコンテンツ（ノードとエッジ）が収まるように自動的に調整します。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **toggleNodeLabels()**:
    - 役割: グラフ内のノードに表示されるラベルの表示/非表示を切り替えます。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **toggleCalleeLocationFilter()**:
    - 役割: 呼び出される側の関数の位置情報に基づいて、グラフの表示をフィルタリングする機能を切り替えます。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **replace()**:
    - 役割: 文字列内の特定のパターンを別の文字列に置換します。これはJavaScriptの標準的な文字列メソッド、またはそれと同様の機能を持つユーティリティ関数である可能性があります。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **switch()**:
    - 役割: 複数の条件に基づいて異なる処理を実行するための制御構造です。JavaScriptの`switch`文、または類似の機能を持つユーティリティ関数である可能性があります。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **function()**:
    - 役割: JavaScriptにおける関数を定義するためのキーワードです。特定のプロジェクト関数ではなく、コード構造の一部として検出されたものです。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **max()**:
    - 役割: 複数の数値の中から最大値を返す関数です。JavaScriptの`Math.max`、または類似のユーティリティ関数である可能性があります。
    - 引数: [情報なし]
    - 戻り値: (number) - 最大値。
- **on()**:
    - 役割: イベントリスナーを要素にアタッチするために使用される一般的なメソッドです。jQueryなどのライブラリ、またはカスタムイベントシステムで使用される可能性があります。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **if()**:
    - 役割: 条件が真である場合にコードブロックを実行するための制御構造です。JavaScriptの`if`文、または類似の機能を持つユーティリティ関数である可能性があります。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **for()**:
    - 役割: コードブロックを繰り返し実行するための制御構造です。JavaScriptの`for`ループ、または類似の機能を持つユーティリティ関数である可能性があります。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **ready()**:
    - 役割: DOM（Document Object Model）が完全に読み込まれ、操作可能になったときに実行されるコールバックを設定するためのメソッドです。jQueryなどのライブラリで一般的に使用されます。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **addListener()**:
    - 役割: 特定のイベントが発生したときに実行されるリスナー関数を追加します。DOM APIの`addEventListener`、または類似のイベントハンドリング関数である可能性があります。
    - 引数: [情報なし]
    - 戻り値: [情報なし]
- **greet(name)**:
    - 役割: 与えられた名前に基づいて挨拶メッセージを生成します。
    - 引数: `name` (string) - 挨拶の対象となる名前。
    - 戻り値: (string) - 挨拶メッセージ。
- **main()**:
    - 役割: プロジェクトまたはモジュールの主要なエントリポイントとなる関数です。通常、他の関数を呼び出して全体の処理を orchestrate します。
    - 引数: [情報なし]
    - 戻り値: [情報なし]

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
Generated at: 2025-09-15 07:04:54 JST

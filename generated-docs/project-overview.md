Last updated: 2025-08-12

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: このプロジェクトは主にGitHub Actionsワークフローとスクリプトで構成されており、直接的なフロントエンド技術は使用していません。生成されるHTMLドキュメントの一部でJavaScriptとCSSが利用されています。
- 音楽・オーディオ:
    - Tone.js: Web Audio APIをベースにしたJavaScriptライブラリで、Webブラウザでインタラクティブな音楽やオーディオアプリケーションを構築するために使用されます。
    - MML (Music Macro Language): 音楽をテキスト形式で記述するための記法パーサー。
    - Web Audio API: ブラウザに組み込まれたオーディオ処理機能。Tone.js経由で利用されます。
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するための環境です。
    - npm scripts: `package.json`に定義されたスクリプトを実行するためのタスクランナーです。
    - Google Generative AI: AIによる文書生成をサポートするために利用されます。プロジェクトの概要自動生成などに活用されています。
    - @octokit/rest: GitHub APIと連携するための公式ライブラリで、GitHub Actions内でリポジトリ情報へのアクセスや操作を行うために使われます。
- テスト: このプロジェクトには明示的なテストフレームワークの記載はありません。
- ビルドツール: 明示的なビルドツールはありませんが、`npm scripts`がタスクの自動実行に、GitHub ActionsがCI/CDパイプラインとして機能します。
- 言語機能: このプロジェクトは主にJavaScript (Node.js) で記述されています。
- 自動化・CI/CD:
    - GitHub Actions: コードの変更や特定イベントをトリガーとして、ビルド、テスト、デプロイなどのワークフローを自動化するCI/CDプラットフォームです。このリポジトリには、プロジェクト要約自動生成、Issue自動管理、README多言語翻訳、i18n自動化などの共通ワークフローが8個含まれています。
- 開発標準: 明示的な開発標準ツールは記載されていませんが、共通ワークフローを通じてコード品質と自動化を促進しています。

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
      📖 project_summary_cjs_analysis.md
    📁 prompts/
      📖 development-status-prompt.md
      📖 project-overview-prompt.md
    📁 scripts/
      📄 FileSystemUtils.cjs
      📄 GitUtils.cjs
      📄 generate-project-summary.cjs
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
- **.github_automation/**: GitHub Actionsの自動化スクリプトと関連設定を含むトップレベルディレクトリ。
    - **callgraph/**: コードの関数呼び出しグラフを生成するためのツール群。
        - **codeql-queries/**: CodeQL解析のためのクエリファイルを格納。
            - `callgraph.ql`: コードの呼び出し関係を抽出するためのCodeQLクエリ。
            - `codeql-pack.lock.yml`, `qlpack.yml`: CodeQLパックの設定ファイル。
        - **config/**: 設定ファイルの例を格納。
            - `example.json`: 呼び出しグラフ生成ツールの設定例。
        - **docs/**: 呼び出しグラフ機能に関するドキュメント。
            - `callgraph.md`: 呼び出しグラフ機能の説明ドキュメント。
        - **presets/**: 呼び出しグラフの表示スタイルや動作を定義するファイル。
            - `.github_automation/callgraph/presets/callgraph.js`: 呼び出しグラフの動的な表示や操作ロジックを定義するJavaScriptファイル。ノードの配置、情報パネルの表示、レイアウトの切り替えなどを行います。
            - `.github_automation/callgraph/presets/style.css`: 呼び出しグラフのHTML表示におけるスタイル定義。ノードやエッジ、情報パネルなどの視覚的要素を制御します。
        - **scripts/**: 呼び出しグラフ生成に関する各種スクリプト。
            - `analyze-codeql.cjs`: CodeQLの解析を実行するスクリプト。
            - `callgraph-utils.cjs`: 呼び出しグラフ関連のユーティリティ関数。
            - `check-codeql-exists.cjs`: CodeQLの存在を確認するスクリプト。
            - `check-commits.cjs`: コミット履歴をチェックするスクリプト。
            - `check-node-version.cjs`: Node.jsのバージョンを確認するスクリプト。
            - `common-utils.cjs`: 共通的に利用されるユーティリティ関数。
            - `copy-commit-results.cjs`: コミット結果をコピーするスクリプト。
            - `extract-sarif-info.cjs`: SARIF形式の解析結果から情報を抽出するスクリプト。
            - `find-process-results.cjs`: プロセス結果を検索するスクリプト。
            - `generate-html-graph.cjs`: HTML形式のグラフを生成するスクリプト。
            - `generateHTML.cjs`: HTMLファイルを生成するためのスクリプト。
    - **project_summary/**: プロジェクトの概要を自動生成するためのツール群。
        - **docs/**: プロジェクト概要生成に関するドキュメント。
            - `daily-summary-setup.md`: 日次概要のセットアップ方法。
            - `project_summary_cjs_analysis.md`: プロジェクト概要生成スクリプトの分析に関するドキュメント。
        - **prompts/**: AIによる文書生成に使用するプロンプトファイル。
            - `development-status-prompt.md`: 開発状況に関するAIプロンプト。
            - `project-overview-prompt.md`: プロジェクト概要生成のためのAIプロンプト。
        - **scripts/**: プロジェクト概要生成に関するスクリプト。
            - `FileSystemUtils.cjs`: ファイルシステム操作のためのユーティリティ。
            - `GitUtils.cjs`: Git操作のためのユーティリティ。
            - `generate-project-summary.cjs`: プロジェクトの概要を生成するメインスクリプト。
    - **translate/**: READMEの多言語翻訳を自動化するためのツール群。
        - **docs/**: 翻訳機能に関するドキュメント。
            - `TRANSLATION_SETUP.md`: 翻訳機能のセットアップ方法。
        - **scripts/**: 翻訳に関するスクリプト。
            - `translate-readme.cjs`: READMEファイルを多言語に翻訳するスクリプト。
- **.gitignore**: Gitがバージョン管理の対象外とするファイルやディレクトリを指定する設定ファイル。
- **LICENSE**: プロジェクトのライセンス情報が記述されたファイル。
- **README.ja.md**: プロジェクトの概要を日本語で説明するメインドキュメント。
- **README.md**: プロジェクトの概要を英語で説明するメインドキュメント。
- **generated-docs/**: 自動生成されたドキュメントや静的ファイルが格納されるディレクトリ。
    - `generated-docs/callgraph.html`: 自動生成された関数呼び出しグラフのHTMLビュー。
    - `generated-docs/callgraph.js`: `callgraph.html`で使用される、呼び出しグラフの動的な表示や操作ロジックを提供するJavaScriptコード（`presets/callgraph.js`のコピーまたは変換版）。
    - `generated-docs/development-status.md`: 自動生成された開発状況レポート。
    - `generated-docs/project-overview.md`: AIによって自動生成されたプロジェクト概要。
    - `generated-docs/style.css`: `callgraph.html`で使用される、呼び出しグラフのスタイル定義（`presets/style.css`のコピーまたは変換版）。
- **issue-notes/**: Issue関連のメモや詳細が格納されるディレクトリ。
    - `10.md`から`9.md`まで: 個別のIssueに関連するメモや情報のMarkdownファイル。
- **package-lock.json**: `package.json`に記載された依存関係の正確なツリー構造とバージョンを記録し、ビルドの一貫性を保証します。
- **package.json**: プロジェクトのメタデータ（名前、バージョン、説明など）、スクリプト、および開発・実行に必要な依存関係を定義するファイル。
- **src/**: 主要なソースコードを格納するディレクトリ。
    - `src/main.js`: プロジェクトのエントリーポイントとなるメインのJavaScriptファイル。

## 関数詳細説明
- **.github_automation/callgraph/presets/callgraph.js** および **generated-docs/callgraph.js** (両ファイルの内容は同一と見なされます)
    - `escapeHtml(unsafe)`: HTML特殊文字をエスケープし、安全に表示可能な文字列を返します。
    - `getLayoutConfig()`: グラフのレイアウトに関する設定を取得します。
    - `placeCentralNode(cy, nodeId)`: 指定されたノードをグラフの中心に配置します。
    - `showNodeInfo(node)`: 指定されたノードの詳細情報を情報パネルに表示します。
    - `showEdgeInfo(edge)`: 指定されたエッジ（接続線）の詳細情報を情報パネルに表示します。
    - `hideInfoPanel()`: 情報パネルを非表示にします。
    - `showInfoPanel()`: 情報パネルを表示します。
    - `toggleInfoPanel()`: 情報パネルの表示/非表示を切り替えます。
    - `generateGitHubURL(nodeData)`: ノードデータから関連するGitHubリポジトリのURLを生成します。
    - `resetLayout()`: グラフのレイアウトを初期状態にリセットします。
    - `watchNodeMovementAndFixOverlapsWrap(cy)`: ノードの動きを監視し、重なりを修正するラッパー関数。
    - `watchNodeMovementAndFixOverlaps(cy, resolveOverlapDuration)`: ノードの動きを監視し、他のノードとの重なりを解決します。
    - `resolveNodeOverlaps(cy, nodeA, nodeB, overlapAmount)`: 2つのノード間の重なりを解消します。
    - `switchLayout(layoutName, cy, centralNodeId)`: 指定されたレイアウトにグラフを切り替えます。
    - `resetNodeStates(cy)`: 全てのノードの状態（選択状態など）をリセットします。
    - `fitToContent(cy)`: グラフ全体がビューポートに収まるようにズームレベルを調整します。
    - `toggleNodeLabels(cy, show)`: ノードのラベル表示を切り替えます。
    - `toggleCalleeLocationFilter(cy, show)`: 呼び出し先ノードの位置フィルター表示を切り替えます。
    - `replace()`: 文字列の置換操作に関連する可能性のある汎用関数。
    - `switch()`: 制御フローの一部として条件分岐を行う可能性のある汎用関数。
    - `function()`: 匿名関数または関数宣言の一部として検出された一般的な関数。
    - `max()`: 最大値を計算する可能性のある汎用関数。
    - `on()`: イベントリスナーを設定するための一般的な関数。
    - `if()`: 制御フローの一部として条件分岐を行う可能性のある汎用関数。
    - `for()`: 繰り返し処理を行うための一般的な関数。
    - `ready()`: DOMContentLoadedのような準備完了イベントを待機する一般的な関数。
    - `addListener()`: イベントリスナーを追加するための一般的な関数。
- **src/main.js**
    - `greet(name)`: 引数として受け取った名前を用いて挨拶メッセージを生成し、返します。
        - 引数: `name` (string) - 挨拶の対象となる名前。
        - 戻り値: `string` - 挨拶メッセージ。
    - `main()`: プロジェクトの主要な処理を実行するエントリーポイント関数。`greet`関数を呼び出してコンソールに出力します。
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
Generated at: 2025-08-12 07:05:09 JST

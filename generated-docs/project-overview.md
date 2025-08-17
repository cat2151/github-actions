Last updated: 2025-08-17

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽にするための共通ワークフロー集です。
- 🔗 共通化されたワークフローを提供し、どのプロジェクトからも呼び出すだけでCI/CDを実現します。
- ✅ GitHub Actionsのメンテナンスタスクを一括化し、プロジェクト開発に集中できる環境を提供します。

## 技術スタック
- フロントエンド: なし (ただし、生成されるHTML/JSファイルでは、標準的なJavaScriptによるDOM操作やインタラクションが用いられます。)
- 音楽・オーディオ: なし (プロジェクト情報には記載がありますが、このリポジトリの目的とは直接関連しないため、対象外と判断します。)
- 開発ツール:
    - Node.js runtime: JavaScript実行環境として、スクリプトの実行に利用されます。
    - npm scripts: プロジェクト内の各種タスク（スクリプトの実行など）を管理・実行するためのツールです。
    - Google Generative AI: AIによる文書生成（プロジェクト要約など）をサポートするために利用されます。
    - @octokit/rest: GitHub APIと連携し、リポジトリ情報の取得やIssue管理などの自動化に利用されます。
- テスト: なし
- ビルドツール: なし (JavaScriptのランタイム実行が主であり、特定のビルドツールは使用されていません。)
- 言語機能: なし (JavaScriptの標準機能が利用されています。)
- 自動化・CI/CD:
    - GitHub Actions: プロジェクトのCI/CDプロセスを自動化するための主要なプラットフォームです。プロジェクト要約の自動生成、Issue管理、READMEの多言語翻訳、i18n自動化など、8種類の共通ワークフローが含まれています。
- 開発標準: なし

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
      📄 BaseGenerator.cjs
      📄 BaseIssueTracker.cjs
      📄 BaseProjectAnalyzer.cjs
      📄 CodeAnalyzer.cjs
      📄 DevelopmentStatusGenerator.cjs
      📄 FileSystemUtils.cjs
      📄 GitUtils.cjs
      📄 ProjectAnalyzer.cjs
      📄 ProjectOverviewGenerator.cjs
      📄 ProjectSummaryCoordinator.cjs
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
- **.github_automation/:** GitHub Actionsによる自動化ワークフローに関連するスクリプト群を格納するディレクトリです。
    - **callgraph/:** プロジェクトの関数呼び出しグラフを生成・表示するための関連ファイル群です。
        - **codeql-queries/:** CodeQLのクエリ定義ファイル群です。JavaScriptプロジェクトの関数呼び出し関係を分析するために使用されます。
            - `callgraph.ql`: 関数呼び出しグラフを抽出するためのCodeQLクエリ。
            - `codeql-pack.lock.yml`: CodeQLパックの依存関係をロックするファイル。
            - `qlpack.yml`: CodeQLパックの設定ファイル。
        - **config/example.json:** 呼び出しグラフ生成スクリプトの設定例。
        - **docs/callgraph.md:** 呼び出しグラフ機能に関するドキュメント。
        - **presets/:** 呼び出しグラフのレンダリングやスタイリングに関するファイル。
            - `callgraph.js`: 生成された呼び出しグラフのインタラクティブな描画、レイアウト、操作ロジックをJavaScriptで実装しています。
            - `style.css`: 呼び出しグラフの表示スタイルを定義するCSSファイルです。
        - **scripts/:** 呼び出しグラフ生成に関連する各種スクリプト。
            - `analyze-codeql.cjs`: CodeQL解析を実行し、結果を処理するスクリプト。
            - `callgraph-utils.cjs`: 呼び出しグラフの生成・処理に共通して使用されるユーティリティ関数群。
            - `check-codeql-exists.cjs`: CodeQLの実行環境が存在するかどうかを確認するスクリプト。
            - `check-commits.cjs`: Gitコミット履歴をチェックするスクリプト。
            - `check-node-version.cjs`: Node.jsのバージョンが要件を満たしているか確認するスクリプト。
            - `common-utils.cjs`: プロジェクト全体で共通して使用されるユーティリティ関数群。
            - `copy-commit-results.cjs`: コミット解析結果をコピーするスクリプト。
            - `extract-sarif-info.cjs`: CodeQLの出力形式であるSARIFファイルから情報を抽出するスクリプト。
            - `find-process-results.cjs`: プロセス解析の結果を見つけるスクリプト。
            - `generate-html-graph.cjs`: CodeQLの解析結果からHTML形式の関数呼び出しグラフを生成するスクリプト。
            - `generateHTML.cjs`: 汎用的なHTMLファイル生成スクリプト。
    - **project_summary/:** プロジェクトの自動要約や開発状況レポート生成に関連するファイル群です。
        - **docs/daily-summary-setup.md:** 日次サマリーのセットアップに関するドキュメント。
        - **prompts/:** AIによる文書生成に使用されるプロンプト定義ファイル。
            - `development-status-prompt.md`: 開発状況レポート生成用のプロンプト。
            - `project-overview-prompt.md`: プロジェクト概要生成用のプロンプト。
        - **scripts/:** プロジェクト概要生成に関連する各種スクリプト。
            - `BaseGenerator.cjs`: 各種レポート生成クラスの基底クラス。
            - `BaseIssueTracker.cjs`: Issue追跡ロジックの基底クラス。
            - `BaseProjectAnalyzer.cjs`: プロジェクト解析クラスの基底クラス。
            - `CodeAnalyzer.cjs`: プロジェクトのコードを解析するロジック。
            - `DevelopmentStatusGenerator.cjs`: 開発状況レポートを生成するクラス。
            - `FileSystemUtils.cjs`: ファイルシステム操作に関連するユーティリティ関数。
            - `GitUtils.cjs`: Gitリポジトリ操作に関連するユーティリティ関数。
            - `ProjectAnalyzer.cjs`: プロジェクト全体の情報を解析し、構造化するクラス。
            - `ProjectOverviewGenerator.cjs`: プロジェクト概要を生成するクラス。
            - `ProjectSummaryCoordinator.cjs`: プロジェクトサマリー生成プロセス全体の調整役。
            - `generate-project-summary.cjs`: プロジェクトサマリー生成のメインスクリプト。
    - **translate/:** READMEファイルなどの多言語翻訳に関連するファイル群です。
        - **docs/TRANSLATION_SETUP.md:** 翻訳機能のセットアップに関するドキュメント。
        - **scripts/translate-readme.cjs:** READMEファイルを自動翻訳するためのスクリプト。
- **.gitignore:** Gitがバージョン管理の対象から除外するファイルやディレクトリを指定する設定ファイルです。
- **LICENSE:** プロジェクトの利用許諾条件を定義するライセンスファイルです。
- **README.ja.md:** プロジェクトの日本語版説明書です。
- **README.md:** プロジェクトの英語版説明書（主要な説明書）です。
- **generated-docs/:** GitHub Actionsによって自動生成されたドキュメントやレポートが格納されるディレクトリです。
    - `callgraph.html`: 生成された関数呼び出しグラフをブラウザで表示するためのHTMLファイル。
    - `callgraph.js`: `presets/callgraph.js` と同じ内容で、生成されたHTMLと共に使用されるインタラクティブなスクリプト。
    - `development-status.md`: 自動生成された開発状況レポート。
    - `project-overview.md`: 自動生成されたプロジェクト概要レポート。
    - `style.css`: `presets/style.css` と同じ内容で、生成されたHTMLと共に使用されるスタイルシート。
- **issue-notes/:** Issueに関するメモが格納されるディレクトリです。
- **package-lock.json:** `package.json`に記述された依存関係の具体的なバージョンをロックし、再現可能なビルドを保証するファイルです。
- **package.json:** プロジェクトのメタデータ（名前、バージョンなど）や、npmパッケージの依存関係を定義するファイルです。
- **src/main.js:** プロジェクトの簡単なエントリポイントとなるJavaScriptファイルです。

## 関数詳細説明
- `escapeHtml(unsafe)`: HTML特殊文字をエスケープし、XSS攻撃を防ぐための安全な文字列を生成します。
- `getLayoutConfig()`: グラフのレイアウトに関する設定オブジェクトを取得します。引数なし、戻り値はレイアウト設定オブジェクト。
- `placeCentralNode()`: グラフの中心となるノード（関数）を視覚的に配置するロジックを実行します。
- `showNodeInfo()`: 特定のノード（関数）に関する詳細情報を情報パネルに表示します。
- `showEdgeInfo()`: グラフのエッジ（呼び出し関係）に関する詳細情報を情報パネルに表示します。
- `hideInfoPanel()`: 情報表示パネルを非表示にします。
- `showInfoPanel()`: 情報表示パネルを表示します。
- `toggleInfoPanel()`: 情報表示パネルの表示/非表示を切り替えます。
- `generateGitHubURL()`: 指定されたファイルパスと行番号に基づき、GitHubリポジトリ上のファイルへのURLを生成します。
- `resetLayout()`: グラフの表示レイアウトを初期状態にリセットします。
- `watchNodeMovementAndFixOverlapsWrap()`: ノードの移動を監視し、ノードの重なりを解消する処理のラッパー関数です。
- `watchNodeMovementAndFixOverlaps()`: グラフ内のノードの動きを検知し、ノード同士が重ならないように位置を自動調整する主要ロジックです。
- `resolveNodeOverlaps()`: 重なり合っているノードを検出し、それらの位置を調整して重なりを解消します。
- `switchLayout()`: グラフの表示レイアウト（例：円形、ツリーなど）を別のモードに切り替えます。
- `resetNodeStates()`: グラフ内のすべてのノードの選択状態やハイライト状態をリセットし、初期状態に戻します。
- `fitToContent()`: グラフ全体がビューポート内に収まるようにズームレベルや位置を調整します。
- `toggleNodeLabels()`: グラフのノードに表示されるラベル（関数名など）の表示/非表示を切り替えます。
- `toggleCalleeLocationFilter()`: 呼び出し先の場所（ファイルパスなど）に基づいてノードの表示をフィルタリングする機能を切り替えます。
- `replace()`: 文字列の置換処理を行う可能性があります（JavaScriptのString.prototype.replaceに似た汎用的な用途）。
- `switch()`: JavaScriptの`switch`文の一部としてCodeQLにより検出されたものです。特定の関数ではありません。
- `function()`: JavaScriptの関数宣言の一部としてCodeQLにより検出されたものです。特定の関数ではありません。
- `max()`: 最大値を取得する処理を行う可能性があります（Math.maxに似た汎用的な用途）。
- `on()`: イベントリスナーを登録するメソッドです（例：jQueryの.on()に似たイベントハンドラ登録）。
- `if()`: JavaScriptの`if`文の一部としてCodeQLにより検出されたものです。特定の関数ではありません。
- `for()`: JavaScriptの`for`ループの一部としてCodeQLにより検出されたものです。特定の関数ではありません。
- `ready()`: DOMがロードされた後のイベント処理に関連する関数です（例：jQueryの$(document).ready()に似た機能）。
- `addListener()`: イベントリスナーを追加する汎用的なメソッドです。
- `greet(name)`: 引数として名前を受け取り、コンソールに挨拶メッセージを出力します。
- `main()`: `src/main.js`の主要なエントリポイント関数です。`greet`関数を呼び出します。

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
Generated at: 2025-08-17 07:04:41 JST

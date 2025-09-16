Last updated: 2025-09-17

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- 開発ツール: Node.js runtime (JavaScript実行環境), npm scripts (タスクランナー), Google Generative AI (AI文書生成サポート), @octokit/rest (GitHub API連携)
- 自動化・CI/CD: GitHub Actions (CI/CD自動化: プロジェクト要約自動生成、Issue自動管理、README多言語翻訳、i18n automation)

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

*   **.github_automation/**: GitHub Actionsワークフロー群を構成する自動化スクリプトや設定ファイルを格納するメインディレクトリ。
    *   **callgraph/**: コードの関数呼び出しグラフを生成・可視化するためのツール群。
        *   **codeql-queries/**: CodeQL分析クエリの定義。
            *   `callgraph.ql`: 関数呼び出しグラフを抽出するためのCodeQLクエリ。
            *   `codeql-pack.lock.yml`: CodeQLパックの依存関係をロックするファイル。
            *   `qlpack.yml`: CodeQLパックの設定ファイル。
        *   **config/**: 設定ファイル。
            *   `example.json`: 呼び出しグラフツールの設定例。
        *   **docs/**: ドキュメント。
            *   `callgraph.md`: 呼び出しグラフツールの使用方法や詳細に関する説明ドキュメント。
        *   **presets/**: 呼び出しグラフの表示設定やスタイル。
            *   `callgraph.js`: 呼び出しグラフのレンダリング、インタラクション、レイアウト調整などを行うJavaScriptファイル。
            *   `style.css`: 呼び出しグラフの視覚スタイルを定義するCSSファイル。
        *   **scripts/**: 呼び出しグラフの生成と分析に関連するスクリプト。
            *   `analyze-codeql.cjs`: CodeQLによるコード分析を実行するスクリプト。
            *   `callgraph-utils.cjs`: 呼び出しグラフ生成のためのユーティリティ関数群。
            *   `check-codeql-exists.cjs`: CodeQLが環境に存在するかを確認するスクリプト。
            *   `check-commits.cjs`: 特定のコミット履歴をチェックするスクリプト。
            *   `check-node-version.cjs`: Node.jsのバージョン互換性を確認するスクリプト。
            *   `common-utils.cjs`: プロジェクト全体で共通利用されるユーティリティ関数群。
            *   `copy-commit-results.cjs`: コミット分析結果をコピーするスクリプト。
            *   `extract-sarif-info.cjs`: SARIF形式の分析結果ファイルから情報を抽出するスクリプト。
            *   `find-process-results.cjs`: 処理結果ファイルを検索するスクリプト。
            *   `generate-html-graph.cjs`: 呼び出しグラフをHTML形式で生成するスクリプト。
            *   `generateHTML.cjs`: 一般的なHTMLドキュメントを生成するスクリプト。
    *   **project_summary/**: プロジェクトの概要や開発状況を自動生成するためのツール群。
        *   **docs/**: ドキュメント。
            *   `daily-summary-setup.md`: 日次プロジェクト概要生成の設定に関するドキュメント。
        *   **prompts/**: AIに渡すプロンプトテンプレート。
            *   `development-status-prompt.md`: 開発状況の概要を生成するためのAIプロンプト。
            *   `project-overview-prompt.md`: プロジェクト全体の概要を生成するためのAIプロンプト。
        *   **scripts/**: プロジェクト概要生成スクリプト。
            *   `ProjectSummaryCoordinator.cjs`: プロジェクト概要生成プロセス全体の調整役を担うスクリプト。
            *   **development/**: 開発状況の自動生成に関連するスクリプト。
                *   `DevelopmentStatusGenerator.cjs`: 開発状況の概要を生成するスクリプト。
                *   `GitUtils.cjs`: Gitリポジトリ操作に関するユーティリティ関数。
                *   `IssueTracker.cjs`: GitHub Issuesの情報を追跡・管理するためのユーティリティ。
            *   `generate-project-summary.cjs`: プロジェクト概要生成のメインエントリスクリプト。
            *   **overview/**: プロジェクト全体の概要自動生成に関連するスクリプト。
                *   `CodeAnalyzer.cjs`: コードベースの分析を行うスクリプト。
                *   `ProjectAnalysisOrchestrator.cjs`: プロジェクト分析プロセスのオーケストレーションを行うスクリプト。
                *   `ProjectDataCollector.cjs`: プロジェクトに関する各種データを収集するスクリプト。
                *   `ProjectDataFormatter.cjs`: 収集したプロジェクトデータを整形するスクリプト。
                *   `ProjectOverviewGenerator.cjs`: プロジェクト概要テキストを生成するスクリプト。
                *   `TechStackAnalyzer.cjs`: プロジェクトの技術スタックを分析するスクリプト。
            *   **shared/**: 共通ユーティリティ。
                *   `BaseGenerator.cjs`: 各種ジェネレータの共通基底クラス。
                *   `FileSystemUtils.cjs`: ファイルシステム操作に関するユーティリティ関数。
                *   `ProjectFileUtils.cjs`: プロジェクト内のファイル操作に関するユーティリティ関数。
    *   **translate/**: READMEなどの多言語翻訳を自動化するためのツール群。
        *   **docs/**: ドキュメント。
            *   `TRANSLATION_SETUP.md`: 翻訳設定に関するドキュメント。
        *   **scripts/**: 翻訳スクリプト。
            *   `translate-readme.cjs`: READMEファイルを自動翻訳するためのスクリプト。
*   `.gitignore`: Gitによるバージョン管理から除外するファイルやディレクトリを指定する設定ファイル。
*   `.vscode/`: VS Codeエディタ固有の設定を格納するディレクトリ。
    *   `settings.json`: VS Codeのワークスペース設定ファイル。
*   `LICENSE`: プロジェクトのライセンス情報を示すファイル。
*   `README.ja.md`: プロジェクトの日本語版説明書。
*   `README.md`: プロジェクトの英語版（またはデフォルト言語）説明書。
*   `generated-docs/`: 自動生成されたドキュメントや関連ファイルを格納するディレクトリ。
    *   `callgraph.html`: 生成された呼び出しグラフをブラウザで表示するためのHTMLファイル。
    *   `callgraph.js`: 生成された呼び出しグラフの表示・操作ロジックをサポートするJavaScriptファイル。
    *   `development-status-generated-prompt.md`: 開発状況の自動生成に使用されたプロンプトの出力。
    *   `development-status.md`: 自動生成された開発状況のドキュメント。
    *   `project-overview.md`: 自動生成されたプロジェクト概要のドキュメント。
    *   `style.css`: 生成されたドキュメントやグラフのスタイルシート。
*   `issue-notes/`: プロジェクトのIssueに関するメモを格納するディレクトリ。各ファイルは特定のIssueに関連する情報を保持する。
*   `package-lock.json`: `package.json`に記載された依存関係の具体的なバージョンをロックするファイル。
*   `package.json`: Node.jsプロジェクトのメタデータ、依存関係、スクリプトなどを定義するファイル。
*   `src/`: プロジェクトのソースコードを格納するディレクトリ。
    *   `main.js`: このプロジェクトの基本的な機能やエントリーポイントとして機能するJavaScriptファイル。

## 関数詳細説明

*   **.github_automation/callgraph/presets/callgraph.js** (および `generated-docs/callgraph.js`)
    *   `escapeHtml(text)`: HTMLエンティティをエスケープして、テキストを安全に表示できるようにする。
    *   `getLayoutConfig()`: グラフのレイアウトに関する設定オブジェクトを返す。
    *   `placeCentralNode(node)`: 指定されたノードを中央に配置する。
    *   `showNodeInfo(node)`: グラフ上のノード（関数など）の詳細情報を表示パネルに表示する。
    *   `showEdgeInfo(edge)`: グラフ上のエッジ（呼び出し関係）の詳細情報を表示パネルに表示する。
    *   `hideInfoPanel()`: 情報表示パネルを非表示にする。
    *   `showInfoPanel()`: 情報表示パネルを表示する。
    *   `toggleInfoPanel()`: 情報表示パネルの表示/非表示を切り替える。
    *   `generateGitHubURL(filePath, startLine)`: ファイルパスと行番号からGitHubリポジトリへのURLを生成する。
    *   `resetLayout()`: グラフのレイアウトを初期状態にリセットする。
    *   `watchNodeMovementAndFixOverlapsWrap()`: ノードの動きを監視し、重なりを修正する処理をラップする。
    *   `watchNodeMovementAndFixOverlaps()`: ノードの移動を監視し、他のノードとの重なりを自動的に解消する。
    *   `resolveNodeOverlaps()`: グラフ内のノードの重なりを解消し、見やすい配置に調整する。
    *   `switchLayout(layoutName)`: グラフのレイアウトアルゴリズムを切り替える。
    *   `resetNodeStates()`: すべてのノードの表示状態（選択、ハイライトなど）をリセットする。
    *   `fitToContent()`: グラフ全体が画面に収まるようにズームレベルと位置を調整する。
    *   `toggleNodeLabels()`: グラフノードのラベルの表示/非表示を切り替える。
    *   `toggleCalleeLocationFilter()`: 呼び出し先（Callee）のロケーションフィルターの表示/非表示を切り替える。
    *   `replace(str, search, replacement)`: 文字列内の指定部分を置換する。
    *   `switch(value)`: 渡された値に基づいて異なる処理を実行する（一般的なswitch文のラッパーまたはヘルパー）。
    *   `function(...)`: 匿名関数または内部関数として定義された処理。
    *   `max(a, b)`: 2つの値のうち大きい方を返す。
    *   `on(eventName, handler)`: イベントリスナーを設定する。
    *   `if(condition, trueBranch, falseBranch)`: 条件に基づいて処理を分岐させる（ヘルパー関数）。
    *   `for(initial, condition, increment, body)`: ループ処理を実行する（ヘルパー関数）。
    *   `ready(callback)`: DOMの準備ができたときにコールバックを実行する。
    *   `addListener(element, event, handler)`: 指定された要素にイベントリスナーを追加する。

*   **src/main.js**
    *   `greet(name)`: 引数として受け取った名前を用いて挨拶メッセージを返す。
        *   引数: `name` (文字列) - 挨拶の対象となる名前。
        *   戻り値: 文字列 - 挨拶メッセージ。
        *   機能: シンプルな文字列結合で挨拶メッセージを作成。
    *   `main()`: プログラムの主要な実行ロジックを含む関数。
        *   引数: なし。
        *   戻り値: なし。
        *   機能: `greet`関数を呼び出し、その結果をコンソールに出力する。

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
Generated at: 2025-09-17 07:04:48 JST

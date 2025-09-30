Last updated: 2025-10-01

# Project Overview

## プロジェクト概要
- 🚀 複数プロジェクトでのGitHub Actions管理を効率化します。
- 🔗 共通化されたワークフローを提供し、あらゆるプロジェクトから簡単に呼び出すことができます。
- ✅ ワークフローの一元的なメンテナンスにより、プロジェクト開発への集中を可能にします。

## 技術スタック
- フロントエンド: HTML, CSS, JavaScript (CodeQL生成の呼び出しグラフ可視化に利用)
- 開発ツール: Node.js runtime (JavaScript実行環境)
- 自動化・CI/CD: GitHub Actions (CI/CD自動化、プロジェクト要約自動生成、Issue自動管理、README多言語翻訳、i18n automationなど9種類のワークフロー)

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
  📖 3.md
  📖 4.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明

*   **.github_automation/**: GitHub Actionsワークフローで利用される各種自動化スクリプトや設定を格納するディレクトリです。
    *   **callgraph/**: CodeQLを使用してコードの関数呼び出しグラフを生成し、可視化するための関連ファイル群です。
        *   **codeql-queries/**: CodeQLのクエリファイルを格納します。
            *   `callgraph.ql`: 関数呼び出しグラフを抽出するためのCodeQLクエリ。
            *   `codeql-pack.lock.yml`: CodeQLパックの依存関係ロックファイル。
            *   `qlpack.yml`: CodeQLパックの定義ファイル。
        *   **config/**: 呼び出しグラフ生成に関する設定ファイルが含まれます。
            *   `example.json`: 設定の例。
        *   **docs/**: 呼び出しグラフ機能に関するドキュメント。
            *   `callgraph.md`: 呼び出しグラフ機能の説明ドキュメント。
        *   **presets/**: 呼び出しグラフのHTML表示に必要なJavaScriptとCSSファイル。
            *   `callgraph.js`: 呼び出しグラフのインタラクティブな表示ロジックを定義するJavaScript。
            *   `style.css`: 呼び出しグラフの視覚スタイルを定義するCSS。
        *   **scripts/**: 呼び出しグラフ生成プロセスを管理するスクリプト群。
            *   `analyze-codeql.cjs`: CodeQL分析を実行するスクリプト。
            *   `callgraph-utils.cjs`: 呼び出しグラフ関連のユーティリティ関数。
            *   `check-codeql-exists.cjs`: CodeQLの存在を確認するスクリプト。
            *   `check-node-version.cjs`: Node.jsのバージョンを確認するスクリプト。
            *   `common-utils.cjs`: 共通のユーティリティ関数。
            *   `copy-commit-results.cjs`: コミット結果をコピーするスクリプト。
            *   `extract-sarif-info.cjs`: SARIF形式のCodeQL結果から情報を抽出するスクリプト。
            *   `find-process-results.cjs`: プロセス結果を検索するスクリプト。
            *   `generate-html-graph.cjs`: HTML形式の呼び出しグラフを生成するスクリプト。
            *   `generateHTML.cjs`: HTMLファイルを生成するスクリプト。
    *   **check_recent_human_commit/**: 最近の人間のコミットをチェックするためのワークフロー関連ファイル。
        *   **scripts/**: 実際のチェック処理を行うスクリプト。
            *   `check-recent-human-commit.cjs`: 人間が最近コミットしたかどうかを確認するスクリプト。
    *   **project_summary/**: プロジェクトの概要や開発状況を自動生成するためのワークフロー関連ファイル。
        *   **docs/**: プロジェクト概要機能に関するドキュメント。
            *   `daily-summary-setup.md`: 日次概要の設定ガイド。
        *   **prompts/**: GPTなどに渡すプロンプトのテンプレート。
            *   `development-status-prompt.md`: 開発状況の要約用プロンプト。
            *   `project-overview-prompt.md`: プロジェクト概要の要約用プロンプト。
        *   **scripts/**: プロジェクト概要生成の主要ロジックを格納。
            *   `ProjectSummaryCoordinator.cjs`: プロジェクト要約生成プロセス全体を調整するスクリプト。
            *   **development/**: 開発状況の分析に関連するスクリプト。
                *   `DevelopmentStatusGenerator.cjs`: 開発状況レポートを生成するスクリプト。
                *   `GitUtils.cjs`: Git操作に関するユーティリティ。
                *   `IssueTracker.cjs`: Issueトラッキングに関するロジック。
            *   `generate-project-summary.cjs`: プロジェクト概要を実際に生成するエントリーポイント。
            *   **overview/**: プロジェクトのコード分析とデータ収集に関連するスクリプト。
                *   `CodeAnalyzer.cjs`: コードを分析するスクリプト。
                *   `ProjectAnalysisOrchestrator.cjs`: プロジェクト分析を調整するスクリプト。
                *   `ProjectDataCollector.cjs`: プロジェクトデータを収集するスクリプト。
                *   `ProjectDataFormatter.cjs`: 収集したデータを整形するスクリプト。
                *   `ProjectOverviewGenerator.cjs`: プロジェクト概要を生成するスクリプト。
                *   `TechStackAnalyzer.cjs`: 技術スタックを分析するスクリプト。
            *   **shared/**: 複数のスクリプトで共有される共通ユーティリティ。
                *   `BaseGenerator.cjs`: 各種ジェネレータの基底クラス。
                *   `FileSystemUtils.cjs`: ファイルシステム操作に関するユーティリティ。
                *   `ProjectFileUtils.cjs`: プロジェクトファイルに関するユーティリティ。
    *   **translate/**: READMEなどのドキュメントを多言語に翻訳するためのワークフロー関連ファイル。
        *   **docs/**: 翻訳機能に関するドキュメント。
            *   `TRANSLATION_SETUP.md`: 翻訳セットアップガイド。
        *   **scripts/**: 実際の翻訳処理を行うスクリプト。
            *   `translate-readme.cjs`: READMEファイルを翻訳するスクリプト。
*   `.gitignore`: Gitのバージョン管理から除外するファイルやディレクトリを指定する設定ファイル。
*   `.vscode/`: VS Codeエディタの設定ファイルを格納するディレクトリ。
    *   `settings.json`: VS Codeのワークスペース設定ファイル。
*   `LICENSE`: プロジェクトのライセンス情報が記載されたファイル。
*   `README.ja.md`: プロジェクトの概要や使用方法を日本語で説明するメインドキュメント。
*   `README.md`: プロジェクトの概要や使用方法を英語で説明するメインドキュメント。
*   **generated-docs/**: GitHub Actionsによって自動生成されたドキュメントや成果物を格納するディレクトリ。
    *   `callgraph.html`: CodeQL分析に基づいて生成された関数呼び出しグラフをブラウザで表示するためのHTMLファイル。
    *   `callgraph.js`: 上記HTMLファイルで使用される、呼び出しグラフのインタラクティブな表示ロジック（`.github_automation/callgraph/presets/callgraph.js`と同一内容）。
    *   `style.css`: 上記HTMLファイルで使用される、呼び出しグラフの視覚スタイル（`.github_automation/callgraph/presets/style.css`と同一内容）。
*   **issue-notes/**: Issueに関連する自動生成されたメモや追加情報が格納されるディレクトリ。
*   **src/**: プロジェクトのソースコードを格納するディレクトリ（このプロジェクトでは例示的なJavaScriptファイルのみ）。
    *   `main.js`: サンプルのJavaScriptファイル。

## 関数詳細説明

*   **escapeHtml** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: HTML文字列内の特殊文字をエスケープし、スクリプトインジェクションなどのセキュリティリスクを防ぎます。
    *   引数: `htmlString` (string) - エスケープするHTML文字列。
    *   戻り値: `string` - エスケープされたHTML文字列。
*   **getLayoutConfig** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: 呼び出しグラフのレイアウトに関する設定を取得します。
    *   引数: なし。
    *   戻り値: `object` - レイアウト設定オブジェクト。
*   **placeCentralNode** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: 呼び出しグラフの中央にノードを配置します。
    *   引数: なし (おそらく内部的にグラフオブジェクトを参照)。
    *   戻り値: なし。
*   **showNodeInfo** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: 選択されたノード（関数など）の詳細情報を表示パネルに表示します。
    *   引数: `node` (object) - 情報を表示するノードオブジェクト。
    *   戻り値: なし。
*   **showEdgeInfo** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: 選択されたエッジ（関数呼び出し関係など）の詳細情報を表示パネルに表示します。
    *   引数: `edge` (object) - 情報を表示するエッジオブジェクト。
    *   戻り値: なし。
*   **hideInfoPanel** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: 情報表示パネルを非表示にします。
    *   引数: なし。
    *   戻り値: なし。
*   **showInfoPanel** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: 情報表示パネルを表示します。
    *   引数: なし。
    *   戻り値: なし。
*   **toggleInfoPanel** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: 情報表示パネルの表示/非表示を切り替えます。
    *   引数: なし。
    *   戻り値: なし。
*   **generateGitHubURL** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: グラフノードに対応するGitHub上のソースコードへのURLを生成します。
    *   引数: `nodeId` (string) - ノードのID。
    *   戻り値: `string` - 生成されたGitHub URL。
*   **resetLayout** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: 呼び出しグラフのレイアウトを初期状態にリセットします。
    *   引数: なし。
    *   戻り値: なし。
*   **watchNodeMovementAndFixOverlapsWrap** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: ノードの動きを監視し、その動きに基づいて重なりを修正する処理をラップします。
    *   引数: なし。
    *   戻り値: なし。
*   **watchNodeMovementAndFixOverlaps** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: ノードの動きを監視し、他のノードとの重なりを解決します。グラフ描画の最適化に使用されます。
    *   引数: `nodes` (array) - 監視対象のノード配列。
    *   戻り値: なし。
*   **resolveNodeOverlaps** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: 重なり合っているノードの位置を調整し、視認性を高めます。
    *   引数: `nodes` (array) - 解決対象のノード配列。
    *   戻り値: なし。
*   **switchLayout** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: 呼び出しグラフの表示レイアウトを切り替えます。
    *   引数: `layoutName` (string) - 切り替えるレイアウトの名前。
    *   戻り値: なし。
*   **resetNodeStates** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: すべてのノードの状態（選択状態、ハイライトなど）をリセットします。
    *   引数: なし。
    *   戻り値: なし。
*   **fitToContent** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: グラフ全体がビューポートに収まるようにズームレベルを調整します。
    *   引数: なし。
    *   戻り値: なし。
*   **toggleNodeLabels** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: グラフノードのラベル表示/非表示を切り替えます。
    *   引数: なし。
    *   戻り値: なし。
*   **toggleCalleeLocationFilter** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: 呼び出し先（Callee）のロケーションフィルターの有効/無効を切り替えます。
    *   引数: なし。
    *   戻り値: なし。
*   **replace**, **switch**, **function**, **max**, **on**, **if**, **for**, **ready**, **addListener** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    *   役割: これらはJavaScriptのキーワードやグローバルオブジェクトのプロパティ、またはグラフライブラリ（Cy.jsなど）のイベントハンドラとして機能する可能性があり、特定のコンテキストで関数として扱われているものです。具体的な役割は、それぞれ文字列置換、条件分岐、関数定義、最大値取得、イベントリスナー登録、ループ処理、DOM準備完了イベント、イベントリスナー追加など多岐にわたります。
    *   引数・戻り値: コンテキストにより様々。
*   **greet** (ファイル: `src/main.js`)
    *   役割: 挨拶メッセージを生成します。
    *   引数: `name` (string) - 挨拶の対象となる名前。
    *   戻り値: `string` - 生成された挨拶メッセージ。
*   **main** (ファイル: `src/main.js`)
    *   役割: プログラムのエントリーポイントとして機能し、`greet`関数を呼び出してコンソールに出力します。
    *   引数: なし。
    *   戻り値: なし。

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
Generated at: 2025-10-01 07:05:52 JST

Last updated: 2025-09-06

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: callgraph.js (CytoScape.jsを用いた動的なグラフ表示、DOM操作)
- 音楽・オーディオ: Tone.js (Web Audio APIを介した音声ライブラリ), Web Audio API (ブラウザネイティブの音声処理技術), MML (Music Macro Languageのパース・解釈)
- 開発ツール: Node.js runtime (JavaScript実行環境), npm scripts (タスクランナー), Google Generative AI (AIによる文書生成サポート), @octokit/rest (GitHub API連携ライブラリ)
- テスト: 特になし
- ビルドツール: 特になし
- 言語機能: 特になし
- 自動化・CI/CD: GitHub Actions (CI/CDワークフロー自動化、プロジェクト要約生成、Issue自動管理、README多言語翻訳、i18n automation)
- 開発標準: 特になし

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
-   **`.github_automation/`**: GitHub Actionsの共通ワークフローに関連する自動化スクリプトや設定ファイルを格納するルートディレクトリ。
    -   **`callgraph/`**: CodeQLとJavaScriptを用いて、コードの関数呼び出しグラフを生成するためのリソース群。
        -   `codeql-queries/`: CodeQLのクエリファイル。`callgraph.ql`はソースコードの関数呼び出し関係を抽出するクエリ。
        -   `config/example.json`: 呼び出しグラフ生成に関する設定の例。
        -   `docs/callgraph.md`: 呼び出しグラフ機能に関するドキュメント。
        -   `presets/callgraph.js`: 生成されるHTML呼び出しグラフのインタラクティブな動作（ノード表示、レイアウト調整など）を制御するJavaScriptファイル。
        -   `presets/style.css`: 生成されるHTML呼び出しグラフの見た目を定義するCSSファイル。
        -   `scripts/`: 呼び出しグラフの生成プロセス全体を管理するNode.jsスクリプト群。CodeQL分析の実行、結果の解析、HTMLグラフの生成など、一連のステップを自動化する。
    -   **`project_summary/`**: GitHubリポジトリの情報を基に、プロジェクトの概要や開発ステータスを自動生成するためのリソース群。
        -   `docs/daily-summary-setup.md`: 日次サマリーのセットアップに関するドキュメント。
        -   `prompts/`: AIに渡すプロンプトテンプレートファイル。`development-status-prompt.md`や`project-overview-prompt.md`は、それぞれ開発ステータスやプロジェクト概要生成に使用される。
        -   `scripts/`: プロジェクト情報の収集、分析、AIを用いた要約生成を行うNode.jsスクリプト群。
            -   `ProjectSummaryCoordinator.cjs`: プロジェクト概要生成処理全体のオーケストレーションを行う。
            -   `development/`: 開発ステータス生成に関連するスクリプト。`GitUtils.cjs`はGit操作を、`IssueTracker.cjs`はIssueトラッキングを担当する。
            -   `overview/`: プロジェクト概要生成に関連するスクリプト。`CodeAnalyzer.cjs`はコードベースの分析、`ProjectDataCollector.cjs`はプロジェクトデータの収集、`ProjectOverviewGenerator.cjs`は最終的な概要生成を行う。
            -   `shared/`: 複数のスクリプトで共有される共通ユーティリティ関数（例: `FileSystemUtils.cjs`）。
    -   **`translate/`**: リポジトリの`README.md`などを多言語翻訳するためのリソース群。
        -   `docs/TRANSLATION_SETUP.md`: 翻訳機能のセットアップに関するドキュメント。
        -   `scripts/translate-readme.cjs`: `README.md`ファイルを指定された言語に自動翻訳するNode.jsスクリプト。
-   **`.gitignore`**: Gitが追跡しないファイルやディレクトリを指定する設定ファイル。
-   **`.vscode/settings.json`**: VS Codeエディタのワークスペース固有の設定ファイル。
-   **`LICENSE`**: プロジェクトのライセンス情報。
-   **`README.ja.md`**: プロジェクトの概要や利用方法を日本語で説明するメインドキュメント。
-   **`README.md`**: プロジェクトの概要や利用方法を英語で説明するメインドキュメント。
-   **`generated-docs/`**: GitHub Actionsによって自動生成されたドキュメントやファイルが格納されるディレクトリ。
    -   `callgraph.html`, `callgraph.js`, `style.css`: 生成された呼び出しグラフのHTMLページとその関連ファイル。
    -   `development-status-generated-prompt.md`, `development-status.md`: 開発ステータス生成に関連するプロンプトと生成結果。
    -   `project-overview.md`: AIによって自動生成されたプロジェクト概要ドキュメント。
-   **`issue-notes/`**: GitHub Issuesに関する自動生成または手動で作成されたメモファイル群。
-   **`package-lock.json`**: `package.json`に記述された依存関係の具体的なバージョン情報をロックするファイル。
-   **`package.json`**: プロジェクトのメタデータ（名前、バージョン、依存関係、スクリプトなど）を定義するファイル。
-   **`src/main.js`**: プロジェクトのメインエントリポイントまたはサンプルコード。

## 関数詳細説明
-   **`escapeHtml(html)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: HTML文字列内の特殊文字をエスケープし、安全に表示できるように変換します。
    -   **引数**: `html` (string) - エスケープするHTML文字列。
    -   **戻り値**: (string) - エスケープされたHTML文字列。
    -   **機能**: `<`、`>`、`&`、`"`、`'`の各文字を対応するHTMLエンティティに置換します。
-   **`getLayoutConfig()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: CytoScape.jsのレイアウト設定を取得または生成します。
    -   **引数**: なし。
    -   **戻り値**: (object) - レイアウト設定オブジェクト。
    -   **機能**: グラフのノード配置や動きに関するパラメータを定義します。
-   **`placeCentralNode(cy, node)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 指定されたノードをグラフの中心に配置します。
    -   **引数**: `cy` (object) - CytoScape.jsインスタンス, `node` (object) - 中央に配置するノードオブジェクト。
    -   **戻り値**: なし。
    -   **機能**: ノードの位置を固定し、特定のノードに焦点を当てます。
-   **`showNodeInfo(node)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 指定されたノードの詳細情報を情報パネルに表示します。
    -   **引数**: `node` (object) - 情報表示対象のノードオブジェクト。
    -   **戻り値**: なし。
    -   **機能**: ノードのID、ラベル、属性などを抽出し、UIの専用領域にレンダリングします。
-   **`showEdgeInfo(edge)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 指定されたエッジ（関係線）の詳細情報を情報パネルに表示します。
    -   **引数**: `edge` (object) - 情報表示対象のエッジオブジェクト。
    -   **戻り値**: なし。
    -   **機能**: エッジのソース、ターゲット、ラベル、属性などを抽出し、UIの専用領域にレンダリングします。
-   **`hideInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 情報パネルを非表示にします。
    -   **引数**: なし。
    -   **戻り値**: なし。
    -   **機能**: 情報パネルのCSSスタイルを変更して、ユーザーから見えないようにします。
-   **`showInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 情報パネルを表示します。
    -   **引数**: なし。
    -   **戻り値**: なし。
    -   **機能**: 情報パネルのCSSスタイルを変更して、ユーザーに見えるようにします。
-   **`toggleInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 情報パネルの表示/非表示を切り替えます。
    -   **引数**: なし。
    -   **戻り値**: なし。
    -   **機能**: 現在の表示状態に応じて`showInfoPanel`または`hideInfoPanel`を呼び出します。
-   **`generateGitHubURL(nodeData)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: ノードデータから関連するGitHubリポジトリやファイルへのURLを生成します。
    -   **引数**: `nodeData` (object) - ノードの属性データ。
    -   **戻り値**: (string) - 生成されたGitHub URL。
    -   **機能**: ファイルパス、行番号などの情報を用いて、ソースコードへのリンクを動的に作成します。
-   **`resetLayout(cy)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: グラフのレイアウトを初期状態に戻します。
    -   **引数**: `cy` (object) - CytoScape.jsインスタンス。
    -   **戻り値**: なし。
    -   **機能**: グラフノードの位置を再計算し、デフォルトのレイアウトを適用します。
-   **`watchNodeMovementAndFixOverlapsWrap(cy)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: ノードの動きを監視し、オーバーラップ（重なり）を自動的に修正するラッパー関数です。
    -   **引数**: `cy` (object) - CytoScape.jsインスタンス。
    -   **戻り値**: なし。
    -   **機能**: `watchNodeMovementAndFixOverlaps`を定期的に実行し、グラフの可読性を維持します。
-   **`watchNodeMovementAndFixOverlaps(cy)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: ノードの移動を検知し、ノードが重なった場合に位置を調整します。
    -   **引数**: `cy` (object) - CytoScape.jsインスタンス。
    -   **戻り値**: なし。
    -   **機能**: ノードの位置更新イベントにフックし、`resolveNodeOverlaps`を呼び出します。
-   **`resolveNodeOverlaps(cy, nodes)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 指定されたノードコレクション内の重なりを解消します。
    -   **引数**: `cy` (object) - CytoScape.jsインスタンス, `nodes` (collection) - 処理対象のノード。
    -   **戻り値**: なし。
    -   **機能**: 物理シミュレーションやアルゴリズムを用いてノード間の適切な間隔を確保します。
-   **`switchLayout(cy, layoutName)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: グラフのレイアウトアルゴリズムを切り替えます。
    -   **引数**: `cy` (object) - CytoScape.jsインスタンス, `layoutName` (string) - 適用するレイアウトの名前。
    -   **戻り値**: なし。
    -   **機能**: 指定されたレイアウト（例: `cose`, `dagre`など）をグラフに適用し、ノードを再配置します。
-   **`resetNodeStates(cy)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: すべてのノードの表示状態（選択状態、強調表示など）をリセットします。
    -   **引数**: `cy` (object) - CytoScape.jsインスタンス。
    -   **戻り値**: なし。
    -   **機能**: CSSクラスの削除などにより、ノードをデフォルトのスタイルに戻します。
-   **`fitToContent(cy)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: グラフ全体がビューポートに収まるようにズームとパンを調整します。
    -   **引数**: `cy` (object) - CytoScape.jsインスタンス。
    -   **戻り値**: なし。
    -   **機能**: グラフの全要素が可視範囲に収まるように、最適な表示スケールと位置を設定します。
-   **`toggleNodeLabels(cy)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: ノードのラベルの表示/非表示を切り替えます。
    -   **引数**: `cy` (object) - CytoScape.jsインスタンス。
    -   **戻り値**: なし。
    -   **機能**: ノードのラベル表示に関するCSSスタイルを切り替えます。
-   **`toggleCalleeLocationFilter(cy)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 呼び出し先のファイルパスフィルターの有効/無効を切り替えます。
    -   **引数**: `cy` (object) - CytoScape.jsインスタンス。
    -   **戻り値**: なし。
    -   **機能**: 特定のファイルパスを持つ呼び出し先ノードの表示を制御します。
-   **`greet(name)`** (`src/main.js`):
    -   **役割**: 指定された名前に挨拶メッセージを返します。
    -   **引数**: `name` (string) - 挨拶する対象の名前。
    -   **戻り値**: (string) - 挨拶メッセージ。
    -   **機能**: "Hello, [name]!"という形式の文字列を生成します。
-   **`main()`** (`src/main.js`):
    -   **役割**: アプリケーションのメイン実行関数です。
    -   **引数**: なし。
    -   **戻り値**: なし。
    -   **機能**: `greet`関数を呼び出し、その結果をコンソールに出力します。

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
Generated at: 2025-09-06 07:04:57 JST

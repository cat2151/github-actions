Last updated: 2025-09-09

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド:
  - HTML/CSS/JavaScript: 呼び出しグラフ表示（`callgraph.html`）のための基盤技術。特定のフレームワークは使用せず、Vanilla JSでグラフのインタラクティブな操作を提供。
- 音楽・オーディオ:
  - Tone.js: Web Audio APIを用いた高品質な音声合成・エフェクトを実現するJavaScriptライブラリ。
  - Web Audio API: ブラウザ上で高度な音声処理を行うための標準API（Tone.js経由で利用）。
  - MML (Music Macro Language): 簡易的な音楽記法を解析し、音楽を生成するためのパーサー。
  (注: これらの技術は、本リポジトリのGitHub Actionsワークフロー集としての主要目的とは直接関連が薄いですが、提供情報に含まれています。)
- 開発ツール:
  - Node.js runtime: JavaScriptコードの実行環境。各種スクリプトの動作基盤。
  - npm scripts: `package.json` に定義されたスクリプトを実行するためのタスクランナー。
  - Google Generative AI (@google/generative-ai): AIによる文書生成、特にプロジェクト概要や開発状況レポートの自動生成をサポート。
  - @octokit/rest: GitHub APIと連携し、リポジトリ情報やIssue情報の取得、操作を可能にするライブラリ。
- テスト: 特になし (提供情報に具体的なテスト関連技術の記載はありません)
- ビルドツール: 特になし (提供情報に特定のビルド・パース関連技術の記載はありませんが、CodeQLによるコード解析が含まれます)
- 言語機能:
  - JavaScript (CommonJS): 主にNode.js環境で動作するスクリプト言語。`.cjs` 拡張子でCommonJSモジュールを使用。
- 自動化・CI/CD:
  - GitHub Actions: コードのリント、テスト、デプロイなど、開発ワークフローを自動化する強力なプラットフォーム。本プロジェクトは、このGitHub Actionsの共通ワークフロー集として機能します。
  - プロジェクト要約自動生成: AIを活用してプロジェクトの概要や開発状況を自動的に生成するワークフロー。
  - Issue自動管理: GitHub Issuesの管理を自動化するワークフロー。
  - README多言語翻訳: READMEファイルを複数の言語に自動翻訳するワークフロー。
  - i18n automation: 国際化（i18n）に関する自動化ワークフロー。
- 開発標準: 特になし (提供情報に特定のコード品質・統一ルール関連技術の記載はありません)

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
- **`.github_automation/`**: GitHub Actionsの自動化ワークフローに関連するスクリプトや設定を格納する主要ディレクトリ。
  - **`callgraph/`**: CodeQLを用いた関数呼び出しグラフの生成と表示に関する機能を提供します。
    - **`codeql-queries/callgraph.ql`**: CodeQL言語で書かれたクエリ。コードベースから関数呼び出し関係を抽出し、グラフデータを生成します。
    - **`config/example.json`**: 呼び出しグラフの生成設定の例。
    - **`docs/callgraph.md`**: 呼び出しグラフ機能に関するドキュメント。
    - **`presets/callgraph.js`**: 生成された呼び出しグラフHTML (`callgraph.html`) で使用されるJavaScriptコード。グラフのインタラクティブな表示や操作（ノードの選択、情報パネルの表示など）を担当します。
    - **`presets/style.css`**: 生成された呼び出しグラフHTMLのスタイルを定義するCSSファイル。
    - **`scripts/`**: 呼び出しグラフ生成のためのユーティリティスクリプト群。
      - `analyze-codeql.cjs`: CodeQL解析を実行し、結果を処理します。
      - `callgraph-utils.cjs`: 呼び出しグラフ生成に関する汎用ユーティリティ関数。
      - `check-codeql-exists.cjs`: CodeQLが環境に存在するかを確認します。
      - `check-commits.cjs`: コミット履歴をチェックするユーティリティ。
      - `check-node-version.cjs`: Node.jsのバージョンを確認します。
      - `common-utils.cjs`: 共通で利用されるユーティリティ関数群。
      - `copy-commit-results.cjs`: コミット結果をコピーします。
      - `extract-sarif-info.cjs`: SARIF形式の解析結果から情報を抽出します。
      - `find-process-results.cjs`: プロセス結果を検索します。
      - `generate-html-graph.cjs`: 抽出されたデータからインタラクティブなHTML呼び出しグラフを生成します。
      - `generateHTML.cjs`: HTML生成に関するユーティリティ。
  - **`project_summary/`**: AIを用いたプロジェクト概要・開発状況レポートの自動生成に関する機能を提供します。
    - **`docs/daily-summary-setup.md`**: 日次サマリー設定に関するドキュメント。
    - **`prompts/`**: AIに渡すプロンプトのテンプレートファイル群。
      - `development-status-prompt.md`: 開発状況レポート生成用のプロンプト。
      - `project-overview-prompt.md`: プロジェクト概要生成用のプロンプト。
    - **`scripts/`**: プロジェクト概要生成のロジックを実装したスクリプト群。
      - `ProjectSummaryCoordinator.cjs`: プロジェクト概要生成処理全体の調整役。
      - `development/`
        - `DevelopmentStatusGenerator.cjs`: 開発状況レポートを生成するクラス。
        - `GitUtils.cjs`: Gitリポジトリ操作に関連するユーティリティ。
        - `IssueTracker.cjs`: GitHub Issueからの情報を取得・処理するクラス。
      - `generate-project-summary.cjs`: プロジェクト概要生成ワークフローのエントリポイント。
      - `overview/`
        - `CodeAnalyzer.cjs`: コードベースを解析し、構造や統計情報を抽出するクラス。
        - `ProjectAnalysisOrchestrator.cjs`: プロジェクト解析の各ステップを管理し、調整するクラス。
        - `ProjectDataCollector.cjs`: プロジェクトに関する各種データを収集するクラス。
        - `ProjectDataFormatter.cjs`: 収集したデータを整形するクラス。
        - `ProjectOverviewGenerator.cjs`: 収集・整形されたデータからプロジェクト概要を生成するクラス。
        - `TechStackAnalyzer.cjs`: 使用されている技術スタックを特定・解析するクラス。
      - `shared/`
        - `BaseGenerator.cjs`: 各種生成スクリプトの共通基底クラス。
        - `FileSystemUtils.cjs`: ファイルシステム操作に関するユーティリティ。
        - `ProjectFileUtils.cjs`: プロジェクト内のファイル操作に関するユーティリティ。
  - **`translate/`**: READMEの多言語翻訳に関する機能を提供します。
    - **`docs/TRANSLATION_SETUP.md`**: 翻訳機能の設定に関するドキュメント。
    - **`scripts/translate-readme.cjs`**: READMEファイルを指定された言語に自動翻訳するスクリプト。
- **`.gitignore`**: Gitがバージョン管理の対象外とするファイルやディレクトリを指定する設定ファイル。
- **`.vscode/settings.json`**: VS Codeエディタのプロジェクト固有の設定ファイル。
- **`LICENSE`**: プロジェクトのライセンス情報。
- **`README.ja.md`**: プロジェクトの日本語版説明書。
- **`README.md`**: プロジェクトの英語版（または主要言語）説明書。
- **`generated-docs/`**: GitHub Actionsワークフローによって自動生成されたドキュメントやファイルが格納されます。
  - **`callgraph.html`**: CodeQLで生成された呼び出しグラフを表示するHTMLファイル。
  - **`callgraph.js`**: `callgraph.html` で使用されるJavaScriptファイルで、インタラクティブなグラフ表示機能を提供します（`.github_automation/callgraph/presets/callgraph.js` と同じ内容）。
  - **`development-status-generated-prompt.md`**: AIによって生成された開発状況プロンプトの成果物。
  - **`development-status.md`**: AIによって生成された開発状況レポート。
  - **`project-overview.md`**: AIによって生成されたプロジェクト概要。
  - **`style.css`**: `callgraph.html` で使用されるCSSファイル（`.github_automation/callgraph/presets/style.css` と同じ内容）。
- **`issue-notes/`**: GitHub ActionsによってIssueから自動生成されたメモや情報が格納されます。
- **`package-lock.json`**: `package.json` に記載された依存関係の正確なバージョンと依存ツリーを記録するファイル。
- **`package.json`**: プロジェクトのメタデータ（名前、説明、スクリプト、依存関係など）を定義するファイル。
- **`src/main.js`**: プロジェクトの例として含まれるJavaScriptファイル。シンプルな挨拶関数とメイン関数を含みます。

## 関数詳細説明
- **`escapeHtml`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: HTML特殊文字をエスケープし、セキュリティを向上させます。
  - **機能**: 文字列中の `<` `>` `&` `"` `'` などを対応するHTMLエンティティに変換します。
- **`getLayoutConfig`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: グラフのレイアウト設定を返します。
  - **機能**: グラフの表示形式や配置に関する設定オブジェクトを提供します。
- **`placeCentralNode`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: グラフの中心ノードを配置します。
  - **機能**: 呼び出しグラフの中心となるノードの位置を調整します。
- **`showNodeInfo`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: グラフノードの詳細情報を表示します。
  - **機能**: ユーザーがノードを選択した際に、そのノードに関する追加情報を情報パネルに表示します。
- **`showEdgeInfo`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: グラフエッジ（線）の詳細情報を表示します。
  - **機能**: ユーザーがエッジを選択した際に、そのエッジに関する追加情報を情報パネルに表示します。
- **`hideInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: 情報表示パネルを非表示にします。
  - **機能**: グラフ上の情報パネルを隠します。
- **`showInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: 情報表示パネルを表示します。
  - **機能**: グラフ上の情報パネルを表示します。
- **`toggleInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: 情報表示パネルの表示/非表示を切り替えます。
  - **機能**: 現在の表示状態に応じてパネルを切り替えます。
- **`generateGitHubURL`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: GitHubのURLを生成します。
  - **機能**: ファイルパスや行番号などから、対応するGitHub上のコードへのリンクを作成します。
- **`resetLayout`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: グラフのレイアウトを初期状態にリセットします。
  - **機能**: ユーザーの操作で変更されたグラフの配置を元に戻します。
- **`watchNodeMovementAndFixOverlapsWrap`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: ノードの移動を監視し、重なりを修正する処理のラッパー。
  - **機能**: グラフ描画ライブラリのコールバックとして機能し、ノードの重なりを解決する処理を呼び出します。
- **`watchNodeMovementAndFixOverlaps`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: ノードの移動を監視し、重なりを修正します。
  - **機能**: ノードが移動した際に、他のノードとの重なりを検出し、自動的に位置を調整して見やすくします。
- **`resolveNodeOverlaps`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: ノード間の重なりを解決します。
  - **機能**: 複数のノードが視覚的に重なっている場合、それらを離して配置し、視認性を高めます。
- **`switchLayout`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: グラフのレイアウトを切り替えます。
  - **機能**: 異なるアルゴリズムや設定に基づいてグラフのノードとエッジを再配置します。
- **`resetNodeStates`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: グラフノードの状態（色、選択など）をリセットします。
  - **機能**: 選択状態やハイライト表示を解除し、ノードを初期表示に戻します。
- **`fitToContent`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: グラフ全体がビューポートに収まるようにズームレベルを調整します。
  - **機能**: グラフの全ての要素が見えるように、表示領域を最適化します。
- **`toggleNodeLabels`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: ノードラベルの表示/非表示を切り替えます。
  - **機能**: グラフノードに付随するテキストラベルの表示をオンオフします。
- **`toggleCalleeLocationFilter`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: 呼び出し先の場所によるフィルタリングを切り替えます。
  - **機能**: 特定のファイルやモジュールからの呼び出し元/呼び出し先のみを表示するなど、フィルタリングを適用・解除します。
- **`replace`**, **`switch`**, **`function`**, **`max`**, **`on`**, **`if`**, **`for`**, **`ready`**, **`addListener`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - **役割**: これらはJavaScriptの一般的なキーワード、組み込み関数 (`Math.max` など)、またはイベントハンドラ登録 (`jQuery.on`, `DOMContentLoaded` `ready` イベントリスナーなど) に関連する記述です。
  - **機能**: 個別のアプリケーションロジックを持つ関数ではなく、言語の基本的な制御構造やイベント処理の仕組みを構成する要素として機能します。
- **`greet`** (`src/main.js`):
  - **役割**: 特定のメッセージで挨拶を生成します。
  - **機能**: 入力された名前（`name`）を含む挨拶文字列を返します。
- **`main`** (`src/main.js`):
  - **役割**: プログラムの主要なエントリポイント。
  - **機能**: `greet` 関数を呼び出し、その結果をコンソールに出力します。

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
Generated at: 2025-09-09 09:30:04 JST

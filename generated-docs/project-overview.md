Last updated: 2025-09-30

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: (特になし。ただし、Callgraphの視覚化にJavaScript/CSSを使用)
- 音楽・オーディオ: Tone.js (Web Audio APIベースの音声ライブラリ), Web Audio API (ブラウザネイティブの音声処理技術), MML (Music Macro Languageの解析をサポートするパーサー) - これらは、このワークフロー集が解析対象とする可能性のあるプロジェクトで使用される技術です。
- 開発ツール: Node.js runtime (JavaScriptコードの実行環境)
- テスト: (特になし)
- ビルドツール: (特になし。ただし、ワークフロー内で様々なスクリプト実行を含む)
- 言語機能: (特になし)
- 自動化・CI/CD: GitHub Actions (CI/CDプロセスの自動化プラットフォーム。プロジェクト要約自動生成、Issue自動管理、README多言語翻訳、i18n自動翻訳などの共通ワークフローを提供)
- 開発標準: (特になし)

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

-   `.github_automation/`: GitHub Actionsの各種自動化ワークフローに関連するスクリプトや設定を格納するルートディレクトリです。
    -   `callgraph/`: コードの呼び出しグラフを生成し、可視化するための機能群です。
        -   `codeql-queries/`: CodeQLを用いたコード分析クエリを格納します。
            -   `callgraph.ql`: CodeQLでコードの呼び出しグラフを生成するためのクエリファイルです。
            -   `codeql-pack.lock.yml`: CodeQLパックの依存関係をロックするファイルです。
            -   `qlpack.yml`: CodeQLパックの設定ファイルです。
        -   `config/`: 呼び出しグラフ関連の設定ファイルを格納します。
            -   `example.json`: 設定の例を示すJSONファイルです。
        -   `docs/`: 呼び出しグラフ機能に関するドキュメントを格納します。
            -   `callgraph.md`: 呼び出しグラフ機能の説明や使用方法に関するMarkdownドキュメントです。
        -   `presets/`: 呼び出しグラフの表示スタイルやインタラクティブな動作を定義するファイル群です。
            -   `callgraph.js`: 呼び出しグラフのインタラクティブな描画、ノードの配置、情報パネルの表示制御などを行うJavaScriptコードです。
            -   `style.css`: 呼び出しグラフの視覚的なスタイル（色、フォント、レイアウトなど）を定義するCSSファイルです。
        -   `scripts/`: 呼び出しグラフ生成プロセスをサポートするユーティリティスクリプト群です。
            -   `analyze-codeql.cjs`: CodeQLを用いてコードを分析し、結果を生成するスクリプトです。
            -   `callgraph-utils.cjs`: 呼び出しグラフ関連の汎用的なユーティリティ関数を提供します。
            -   `check-codeql-exists.cjs`: CodeQLツールが環境に存在するかどうかを確認するスクリプトです。
            -   `check-node-version.cjs`: Node.jsのバージョンが要件を満たしているか確認するスクリプトです。
            -   `common-utils.cjs`: 複数のスクリプトで共有される共通のユーティリティ関数群です。
            -   `copy-commit-results.cjs`: コミット関連の分析結果をコピーするスクリプトです。
            -   `extract-sarif-info.cjs`: SARIF形式の分析結果ファイルから必要な情報を抽出するスクリプトです。
            -   `find-process-results.cjs`: 処理結果を検索・取得するスクリプトです。
            -   `generate-html-graph.cjs`: 分析結果からHTML形式の呼び出しグラフを生成するスクリプトです。
            -   `generateHTML.cjs`: 一般的なHTMLドキュメントを生成するスクリプトです。
    -   `check_recent_human_commit/`: 直近のコミットが人間によるものかを確認するワークフローに関連する機能群です。
        -   `scripts/`:
            -   `check-recent-human-commit.cjs`: 直近のコミットが自動化ツールではなく人間によって行われたものかを判断し、特定の自動処理の実行を制御するために使用されます。
    -   `project_summary/`: プロジェクトの概要を自動生成するワークフローに関連する機能群です。
        -   `docs/`: プロジェクト概要生成機能に関するドキュメントを格納します。
            -   `daily-summary-setup.md`: 日次プロジェクトサマリーの設定に関するドキュメントです。
        -   `prompts/`: 大規模言語モデル (LLM) に渡すプロンプト定義ファイルを格納します。
            -   `development-status-prompt.md`: 開発状況レポートを生成するためのプロンプトテンプレートです。
            -   `project-overview-prompt.md`: プロジェクト概要を生成するためのプロンプトテンプレートです。
        -   `scripts/`: プロジェクト概要生成のためのスクリプト群です。
            -   `ProjectSummaryCoordinator.cjs`: プロジェクト概要生成の全体的なフローを調整・管理するメインスクリプトです。
            -   `development/`: 開発状況の分析とレポート生成に関するスクリプトを格納します。
                -   `DevelopmentStatusGenerator.cjs`: 現在の開発状況に関するレポートを生成します。
                -   `GitUtils.cjs`: Gitリポジトリ操作（コミット履歴の取得など）に関するユーティリティ関数を提供します。
                -   `IssueTracker.cjs`: GitHub Issuesからの情報収集やトラッキングに関するユーティリティ関数を提供します。
            -   `generate-project-summary.cjs`: プロジェクト概要生成ワークフローのエントリーポイントとなるスクリプトです。
            -   `overview/`: プロジェクト概要のためのデータ収集、分析、整形、生成を行うスクリプト群です。
                -   `CodeAnalyzer.cjs`: コードベースを分析し、構造や機能に関する情報を抽出します。
                -   `ProjectAnalysisOrchestrator.cjs`: プロジェクト分析の各ステップを連携させるオーケストレーションを行います。
                -   `ProjectDataCollector.cjs`: プロジェクトに関する様々なデータ（ファイル、コード、依存関係など）を収集します。
                -   `ProjectDataFormatter.cjs`: 収集した生データを整形し、利用しやすい形式に変換します。
                -   `ProjectOverviewGenerator.cjs`: 最終的なプロジェクト概要ドキュメントを生成します。
                -   `TechStackAnalyzer.cjs`: プロジェクトで使用されている技術スタックを特定し、分析します。
            -   `shared/`: 複数のスクリプトで共通して利用されるユーティリティ群です。
                -   `BaseGenerator.cjs`: 各種ジェネレーターの基底クラスや共通処理を定義します。
                -   `FileSystemUtils.cjs`: ファイルシステム操作（ファイルの読み書き、ディレクトリ作成など）に関するユーティリティ関数を提供します。
                -   `ProjectFileUtils.cjs`: プロジェクトのファイル構造を操作・分析するためのユーティリティ関数を提供します。
    -   `translate/`: READMEなどのドキュメントを多言語に翻訳するワークフローに関連する機能群です。
        -   `docs/`: 翻訳機能に関するドキュメントを格納します。
            -   `TRANSLATION_SETUP.md`: 翻訳機能の設定方法に関するドキュメントです。
        -   `scripts/`:
            -   `translate-readme.cjs`: READMEファイルを自動的に多言語に翻訳するスクリプトです。
-   `.gitignore`: Gitがバージョン管理の対象としないファイルやディレクトリを指定する設定ファイルです。
-   `.vscode/`: Visual Studio Codeエディタのワークスペース設定を格納するディレクトリです。
    -   `settings.json`: VS Codeのワークスペース固有の設定が記述されたファイルです。
-   `LICENSE`: プロジェクトのライセンス情報が記載されたファイルです。
-   `README.ja.md`: プロジェクトの日本語版説明書です。
-   `README.md`: プロジェクトの主要な説明書（通常は英語版）です。
-   `generated-docs/`: GitHub Actionsワークフローによって自動生成されたドキュメントや視覚化結果を格納するディレクトリです。
    -   `callgraph.html`: 生成されたコードの呼び出しグラフをインタラクティブに表示するHTMLファイルです。
    -   `callgraph.js`: `callgraph.html` で使用されるJavaScriptコードで、グラフのインタラクティブな機能やレイアウト制御を担当します。
    -   `style.css`: `callgraph.html` の視覚的なスタイルを定義するCSSファイルです。
-   `issue-notes/`: GitHub Issuesに関連するメモや、ワークフローによって生成されたIssue関連の情報を格納するディレクトリです。
    -   `*.md`: 個々のIssueに関連するMarkdown形式のメモファイルです。
-   `src/`: プロジェクトの主要なソースコードを格納するディレクトリです。
    -   `main.js`: プロジェクトのメインエントリーポイントとなるJavaScriptファイルです。

## 関数詳細説明

-   **`escapeHtml`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: HTML特殊文字を安全にエスケープし、XSS攻撃などを防ぐために文字列をサニタイズします。
    -   **引数**: `text` (string) - エスケープ対象の文字列。
    -   **戻り値**: `string` - エスケープ処理後の文字列。
    -   **機能**: HTMLタグを構成する文字（`<`, `>`, `&`, `"`, `'`）をそれぞれのHTMLエンティティ参照に変換します。
-   **`getLayoutConfig`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: Cytoscape.jsグラフ描画のためのレイアウト設定オブジェクトを生成・取得します。
    -   **引数**: なし
    -   **戻り値**: `object` - Cytoscape.jsのレイアウト設定を含むオブジェクト。
    -   **機能**: グラフのノード配置アルゴリズムやそのパラメータ（例: スプリングモデル、円形配置など）を定義し、返します。
-   **`placeCentralNode`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: グラフ内の特定のノードを中央に配置するよう調整します。
    -   **引数**: `cy` (Cytoscape.jsインスタンス), `ele` (Cytoscape.js要素、通常はノード)
    -   **戻り値**: なし
    -   **機能**: 選択されたノードや特定の基準に基づき、そのノードがグラフビューの中心に来るように位置を調整します。
-   **`showNodeInfo`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: グラフのノードが選択された際に、そのノードの詳細情報を表示パネルに表示します。
    -   **引数**: `node` (Cytoscape.jsノード要素)
    -   **戻り値**: なし
    -   **機能**: ノードに関連するメタデータ（例: 関数名、ファイルパス、行番号）を整形し、ユーザーインターフェース上の情報パネルに表示します。
-   **`showEdgeInfo`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: グラフのエッジ（関係線）が選択された際に、そのエッジの詳細情報を表示パネルに表示します。
    -   **引数**: `edge` (Cytoscape.jsエッジ要素)
    -   **戻り値**: なし
    -   **機能**: エッジに関連する詳細（例: 呼び出し元と呼び出し先の関係性、引数情報など）を整形し、情報パネルに表示します。
-   **`hideInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 表示されている情報パネルを非表示にします。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: グラフ要素が非選択状態になった際や、ユーザーの操作に応じて情報パネルの表示を停止します。
-   **`showInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 指定された内容で情報パネルを表示します。
    -   **引数**: `title` (string) - パネルのタイトル, `content` (string) - パネルに表示するHTMLコンテンツ
    -   **戻り値**: なし
    -   **機能**: 呼び出しグラフの各要素（ノード、エッジ）の詳細を表示するために、動的に情報をパネルにセットして表示状態にします。
-   **`toggleInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 情報パネルの表示/非表示状態を切り替えます。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: ユーザーの操作（例: ボタンクリック）に応じて、情報パネルが見えている場合は隠し、隠れている場合は表示します。
-   **`generateGitHubURL`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 指定されたファイルパスと行番号に基づいて、GitHub上の該当コードへのURLを生成します。
    -   **引数**: `filePath` (string) - リポジトリルートからのファイルパス, `lineNumber` (number) - コードの行番号
    -   **戻り値**: `string` - 生成されたGitHub URL。
    -   **機能**: 呼び出しグラフのノードから直接GitHubのリポジトリ上のソースコードへジャンプするためのリンクを作成します。
-   **`resetLayout`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: グラフのレイアウトを初期状態にリセットします。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: ユーザーによるレイアウトの変更（ノードの移動、ズーム、パンなど）を元に戻し、最初の描画状態に戻します。
-   **`watchNodeMovementAndFixOverlapsWrap`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: ノードの動きを監視し、その重なりを修正する処理をラップして実行します。
    -   **引数**: `cy` (Cytoscape.jsインスタンス)
    -   **戻り値**: なし
    -   **機能**: Cytoscape.jsのイベントリスナーを設定し、ノードのドラッグや移動が発生した際に`resolveNodeOverlaps`を呼び出してノードの重なりを自動的に解消します。
-   **`watchNodeMovementAndFixOverlaps`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: グラフノードの動きを監視し、他のノードとの視覚的な重なりを自動的に修正します。
    -   **引数**: `cy` (Cytoscape.jsインスタンス)
    -   **戻り値**: なし
    -   **機能**: ノードが移動した際に重なりが発生しないように、隣接するノードの位置を調整し、グラフの可読性を保ちます。
-   **`resolveNodeOverlaps`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 複数のグラフノードが視覚的に重なっている状態を解消します。
    -   **引数**: `nodes` (Cytoscape.jsノード要素のコレクション)
    -   **戻り値**: なし
    -   **機能**: 重なっているノードを検出し、視覚的な衝突を避けるようにノードの位置を微調整します。
-   **`switchLayout`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: グラフの描画レイアウトアルゴリズムを動的に切り替えます。
    -   **引数**: `layoutName` (string) - 適用するレイアウトアルゴリズムの名前（例: 'cose', 'circle', 'grid' など）
    -   **戻り値**: なし
    -   **機能**: ユーザーの選択に応じて、グラフノードの配置スタイルを変更し、異なる視覚的表現を提供します。
-   **`resetNodeStates`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: グラフ内のノードの強調表示や選択状態などの視覚的状態を初期値にリセットします。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: ユーザーのインタラクションによって変更されたノードのハイライトやスタイルをクリアし、デフォルトの状態に戻します。
-   **`fitToContent`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: グラフ全体がビューポート内に収まるようにズームレベルとパン位置を調整します。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: グラフの内容がすべて表示されるように、表示領域を自動的に最適化します。
-   **`toggleNodeLabels`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: グラフノードのラベル（テキスト表示）の表示/非表示を切り替えます。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: グラフが混み合っている場合などに、ノードラベルの表示をトグルして可読性を調整します。
-   **`toggleCalleeLocationFilter`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 呼び出しグラフにおいて、呼び出し先（Callee）の場所（ファイルパスなど）に基づいてノードのフィルタリングを切り替えます。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: 特定の条件に合致する呼び出し先ノードのみを表示したり、隠したりすることで、グラフの焦点を絞り込みます。
-   **`greet`** (`src/main.js`):
    -   **役割**: シンプルな挨拶メッセージを生成します。
    -   **引数**: `name` (string) - 挨拶の対象となる人物やエンティティの名前。
    -   **戻り値**: `string` - 「Hello, [name]!」形式の挨拶文。
    -   **機能**: 指定された名前を含んだ挨拶文字列を返すユーティリティ関数です。
-   **`main`** (`src/main.js`):
    -   **役割**: アプリケーションの主要な実行ロジックをカプセル化します。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: プログラムのエントリーポイントとして機能し、`greet`関数を呼び出して挨拶を出力するなど、基本的な処理の流れを定義します。

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
Generated at: 2025-09-30 08:49:31 JST

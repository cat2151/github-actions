Last updated: 2025-10-11

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: なし (ただし、生成される呼び出しグラフのHTML/JS/CSSはブラウザで表示されます。)
- 音楽・オーディオ: なし
- 開発ツール: Node.js runtime (JavaScript実行環境として使用)
- テスト: なし
- ビルドツール: なし (GitHub Actions内でスクリプト実行やファイル生成が行われますが、特定のビルドツールは明示されていません。)
- 言語機能: JavaScript (Node.js環境で動作するスクリプト群)
- 自動化・CI/CD: GitHub Actions (複数プロジェクトで再利用可能な共通ワークフローを提供し、プロジェクト要約の自動生成、Issue自動管理、README多言語翻訳、国際化(i18n)の自動化などに利用されます。)
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
- **.github_automation/**: 複数プロジェクトで利用されるGitHub Actionsの共通ワークフローや関連スクリプトを格納するルートディレクトリ。
    - **callgraph/**: CodeQLを使用してプロジェクト内の関数呼び出しグラフを生成し、可視化するための機能群。
        - **codeql-queries/**: CodeQLの解析クエリと設定ファイルを格納。
            - `callgraph.ql`: コードベースから関数呼び出しグラフを抽出するためのCodeQLクエリ。
            - `codeql-pack.lock.yml`: CodeQLパックの依存関係をロックするファイル。
            - `qlpack.yml`: CodeQLパックの設定ファイル。
        - **config/**: 設定ファイル。
            - `example.json`: 呼び出しグラフ生成ツールの設定例。
        - **docs/**: ドキュメント。
            - `callgraph.md`: 呼び出しグラフツールの使用方法や詳細説明。
        - **presets/**: 呼び出しグラフをブラウザで表示するためのフロントエンド関連ファイル。
            - `callgraph.js`: 呼び出しグラフのインタラクティブな表示や操作ロジックを実装したJavaScriptファイル。
            - `style.css`: 呼び出しグラフの見た目を定義するCSSファイル。
        - **scripts/**: 呼び出しグラフ生成のための各種スクリプト。
            - `analyze-codeql.cjs`: CodeQL解析を実行するスクリプト。
            - `callgraph-utils.cjs`: 呼び出しグラフ生成に関連するユーティリティ関数を集めたスクリプト。
            - `check-codeql-exists.cjs`: CodeQLがシステムに存在するかを確認するスクリプト。
            - `check-node-version.cjs`: Node.jsのバージョンが要件を満たしているかを確認するスクリプト。
            - `common-utils.cjs`: 複数のスクリプトで共通利用されるユーティリティ関数。
            - `copy-commit-results.cjs`: コミット結果をコピーするスクリプト。
            - `extract-sarif-info.cjs`: CodeQLの出力形式であるSARIFファイルから必要な情報を抽出するスクリプト。
            - `find-process-results.cjs`: 処理結果を検索するスクリプト。
            - `generate-html-graph.cjs`: 呼び出しグラフのデータを基にHTML形式の可視化ファイルを生成するスクリプト。
            - `generateHTML.cjs`: 汎用的なHTML生成処理を提供するスクリプト。
    - **check_recent_human_commit/**: 最近の人間によるコミットをチェックする機能関連。
        - **scripts/**:
            - `check-recent-human-commit.cjs`: 最近のコミットが自動化されたものではなく、人間によって行われたものかを判断するスクリプト。
    - **project_summary/**: プロジェクトの概要を自動生成する機能群。
        - **docs/**: ドキュメント。
            - `daily-summary-setup.md`: 日次サマリーのセットアップ方法に関するドキュメント。
        - **prompts/**: LLM（大規模言語モデル）に渡すプロンプトテンプレート。
            - `development-status-prompt.md`: 開発状況のサマリー生成に使用されるプロンプト。
            - `project-overview-prompt.md`: プロジェクト全体の概要生成に使用されるプロンプト。
        - **scripts/**: プロジェクト概要生成のための各種スクリプト。
            - `ProjectSummaryCoordinator.cjs`: プロジェクトサマリー生成プロセス全体の調整役を担うスクリプト。
            - **development/**: 開発状況に関する情報を収集・生成するスクリプト。
                - `DevelopmentStatusGenerator.cjs`: 現在の開発状況に関するサマリーを生成するスクリプト。
                - `GitUtils.cjs`: Gitリポジトリから情報を取得するためのユーティリティ。
                - `IssueTracker.cjs`: Issueトラッカーから情報を取得するためのユーティリティ。
            - `generate-project-summary.cjs`: プロジェクトサマリー生成のメインエントリスクリプト。
            - **overview/**: プロジェクト概要に関する情報を収集・生成するスクリプト。
                - `CodeAnalyzer.cjs`: コードベースを解析し、構造や統計情報を取得するスクリプト。
                - `ProjectAnalysisOrchestrator.cjs`: プロジェクト解析の各ステップをオーケストレートするスクリプト。
                - `ProjectDataCollector.cjs`: プロジェクトに関する様々なデータを収集するスクリプト。
                - `ProjectDataFormatter.cjs`: 収集したプロジェクトデータを整形するスクリプト。
                - `ProjectOverviewGenerator.cjs`: プロジェクト概要の最終的なテキストを生成するスクリプト。
                - `TechStackAnalyzer.cjs`: 使用されている技術スタックを特定し、解析するスクリプト。
            - **shared/**: 複数の機能で共通利用されるユーティリティ群。
                - `BaseGenerator.cjs`: 各種ジェネレーターの基底クラスまたは基底機能を提供するスクリプト。
                - `FileSystemUtils.cjs`: ファイルシステム操作に関するユーティリティ関数。
                - `ProjectFileUtils.cjs`: プロジェクト内のファイル操作に関するユーティリティ関数。
    - **translate/**: READMEなどのドキュメントを多言語に翻訳する機能群。
        - **docs/**: ドキュメント。
            - `TRANSLATION_SETUP.md`: 翻訳機能のセットアップ方法に関するドキュメント。
        - **scripts/**:
            - `translate-readme.cjs`: READMEファイルを自動的に翻訳するスクリプト。
- `.gitignore`: Gitのバージョン管理から除外するファイルやディレクトリを指定する設定ファイル。
- `.vscode/`: Visual Studio Codeエディタの設定ファイルを格納するディレクトリ。
    - `settings.json`: VS Codeのワークスペース固有の設定を定義するファイル。
- `LICENSE`: プロジェクトの配布条件や利用許諾を定めるライセンス情報ファイル。
- `README.ja.md`: プロジェクトの概要や使い方を日本語で説明するMarkdownファイル。
- `README.md`: プロジェクトの概要や使い方を英語で説明するMarkdownファイル。
- `generated-docs/`: 自動生成されたドキュメントファイルを格納するディレクトリ。
    - `callgraph.html`: 生成された呼び出しグラフをブラウザで表示するためのHTMLファイル。
    - `callgraph.js`: `callgraph.html`で使用されるJavaScriptファイル。呼び出しグラフの表示ロジックを含む。
    - `style.css`: `callgraph.html`で使用されるCSSファイル。呼び出しグラフのスタイルを定義。
- `issue-notes/`: GitHub Issuesに関連する個別のメモや詳細情報を格納するディレクトリ。
    - `10.md`〜`28.md`、`2.md`〜`9.md`: 各数値は特定のIssue番号に対応するMarkdown形式のメモファイル。
- `src/main.js`: プロジェクトの主要なロジック、またはサンプルコードを含むJavaScriptファイル。

## 関数詳細説明
- **escapeHtml(unsafe)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: HTMLの特殊文字をエスケープし、XSS攻撃を防ぐ。
    - 引数: `unsafe` (文字列) - エスケープ対象のHTML文字列。
    - 戻り値: エスケープされた文字列。
    - 機能: `<`を`&lt;`、`>`を`&gt;`、`&`を`&amp;`など、HTMLエンティティに変換します。

- **getLayoutConfig()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフのレイアウトに関する設定オブジェクトを取得する。
    - 引数: なし。
    - 戻り値: レイアウト設定を含むオブジェクト。
    - 機能: グラフ描画ライブラリで使用されるレイアウトオプションを定義します。

- **placeCentralNode(nodeId)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 特定のノードをグラフの中心に配置する。
    - 引数: `nodeId` (文字列) - 中心に配置したいノードのID。
    - 戻り値: 未解析。
    - 機能: ユーザーが特定のノードに注目しやすくするために、そのノードをビューポートの中央に移動させます。

- **showNodeInfo(nodeId)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 特定のノードの詳細情報を情報パネルに表示する。
    - 引数: `nodeId` (文字列) - 情報を表示したいノードのID。
    - 戻り値: 未解析。
    - 機能: ノードがクリックされた際などに、そのノードの名前、関連ファイル、行番号などの詳細情報をユーザーに提示します。

- **showEdgeInfo(edgeId)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 特定のエッジ（辺）の詳細情報を情報パネルに表示する。
    - 引数: `edgeId` (文字列) - 情報を表示したいエッジのID。
    - 戻り値: 未解析。
    - 機能: エッジがクリックされた際などに、呼び出し元と呼び出し先の関係性や詳細をユーザーに提示します。

- **hideInfoPanel()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 現在表示されている情報パネルを非表示にする。
    - 引数: なし。
    - 戻り値: 未解析。
    - 機能: ユーザーが情報パネルを閉じる操作をした際に、パネルを画面から隠します。

- **showInfoPanel(title, content)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 指定されたタイトルと内容で情報パネルを表示する。
    - 引数: `title` (文字列) - パネルのタイトル。 `content` (文字列) - パネルに表示するHTMLコンテンツ。
    - 戻り値: 未解析。
    - 機能: 汎用的な情報表示パネルとして、様々な詳細情報をユーザーに提示するために使用されます。

- **toggleInfoPanel(title, content)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 情報パネルの表示・非表示を切り替える。既に表示されていれば非表示に、非表示であれば指定内容で表示する。
    - 引数: `title` (文字列) - パネルのタイトル。 `content` (文字列) - パネルに表示するHTMLコンテンツ。
    - 戻り値: 未解析。
    - 機能: ユーザーの操作に応じて情報パネルの状態を切り替えることで、画面の専有を最小限に抑えます。

- **generateGitHubURL(filePath, lineNumber)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 指定されたファイルパスと行番号に対応するGitHubのURLを生成する。
    - 引数: `filePath` (文字列) - リポジトリ内のファイルパス。 `lineNumber` (数値) - ファイル内の行番号。
    - 戻り値: GitHubのファイル表示URL (文字列)。
    - 機能: グラフ上のノードやエッジから直接GitHubのリポジトリの該当箇所に飛べるリンクを作成します。

- **resetLayout()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフのレイアウトを初期状態にリセットする。
    - 引数: なし。
    - 戻り値: 未解析。
    - 機能: ユーザーがレイアウトを操作した後、元の状態に戻したい場合に利用されます。

- **watchNodeMovementAndFixOverlapsWrap(graph)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: ノードの動きを監視し、重なりを修正するメインロジックをラップする。
    - 引数: `graph` (オブジェクト) - グラフインスタンス。
    - 戻り値: 未解析。
    - 機能: グラフの描画が完了した後やノードが移動した際に、ノード間の重なりを自動的に解決するための処理を開始します。

- **watchNodeMovementAndFixOverlaps(graph)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ内のノードの移動を監視し、ノードの重なりを解消する。
    - 引数: `graph` (オブジェクト) - グラフインスタンス。
    - 戻り値: 未解析。
    - 機能: ノードが移動した際に他のノードと重ならないように、位置を微調整します。

- **resolveNodeOverlaps(graph)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ内のノードの重なりを解決する。
    - 引数: `graph` (オブジェクト) - グラフインスタンス。
    - 戻り値: 未解析。
    - 機能: ノードの現在位置に基づいて、重なり合っているノードを検出し、適切な位置に移動させて重なりを解消します。

- **switchLayout(layoutName)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフのレイアウトアルゴリズムを切り替える。
    - 引数: `layoutName` (文字列) - 適用したいレイアウトの名前。
    - 戻り値: 未解析。
    - 機能: 円形レイアウト、階層レイアウトなど、異なる視覚化方法をユーザーが選択できるようにします。

- **resetNodeStates()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ内の全てのノードの状態（選択状態、ハイライトなど）をリセットする。
    - 引数: なし。
    - 戻り値: 未解析。
    - 機能: フィルタリングや選択が解除された際に、ノードの表示状態を初期状態に戻します。

- **fitToContent()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ全体がビューポート内に収まるようにズームレベルとパン位置を調整する。
    - 引数: なし。
    - 戻り値: 未解析。
    - 機能: グラフの全体像を素早く確認したい場合に利用されます。

- **toggleNodeLabels()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: ノードラベルの表示・非表示を切り替える。
    - 引数: なし。
    - 戻り値: 未解析。
    - 機能: グラフの密集度が高い場合にラベルを非表示にして見やすくしたり、詳細を確認するために表示したりする機能を提供します。

- **toggleCalleeLocationFilter()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 呼び出し先（Callee）の位置によるフィルタリングを切り替える。
    - 引数: なし。
    - 戻り値: 未解析。
    - 機能: 特定のファイルやディレクトリにある関数への呼び出しのみをハイライト表示するなど、視覚的なフィルタリングを行います。

- **replace(target, replacement)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 文字列の置換処理を行う汎用関数。
    - 引数: `target` (文字列) - 検索対象の文字列。 `replacement` (文字列) - 置換後の文字列。
    - 戻り値: 置換後の文字列。
    - 機能: 文字列操作に使用されるユーティリティ関数。

- **switch(value, map, defaultValue)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 値に基づいてマッピングされた値を選択する（JavaScriptの`switch`文の代替のような機能）。
    - 引数: `value` (任意) - 比較対象の値。 `map` (オブジェクト) - `value`に対応するキーと値のペアを持つオブジェクト。 `defaultValue` (任意) - `value`が`map`に見つからない場合のデフォルト値。
    - 戻り値: マッピングされた値、またはデフォルト値。
    - 機能: 条件に応じた値の選択を簡潔に記述します。

- **function(args)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 匿名関数、または汎用的な関数定義の言及。具体的な引数、戻り値、機能はコンテキストによる。
    - 引数: 未解析。
    - 戻り値: 未解析。
    - 機能: 未解析。

- **max(a, b)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 2つの値のうち大きい方を返す。
    - 引数: `a` (数値) - 比較対象の数値。 `b` (数値) - 比較対象の数値。
    - 戻り値: 2つの引数のうち大きい方の数値。
    - 機能: 数値比較を行うユーティリティ関数。

- **on(eventName, handler)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: イベントハンドラを設定する。
    - 引数: `eventName` (文字列) - イベント名。 `handler` (関数) - イベント発生時に実行されるコールバック関数。
    - 戻り値: 未解析。
    - 機能: DOM要素やカスタムイベントに対するイベントリスナーを登録します。

- **if(condition, trueValue, falseValue)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 条件に基づいて値を返す（三項演算子や`if`文の代替のような機能）。
    - 引数: `condition` (真偽値) - 評価する条件。 `trueValue` (任意) - 条件が真の場合に返す値。 `falseValue` (任意) - 条件が偽の場合に返す値。
    - 戻り値: 条件に基づいて選択された値。
    - 機能: 条件分岐を簡潔に記述します。

- **for(start, end, step, callback)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: ループ処理を実行する（`for`ループの代替のような機能）。
    - 引数: `start` (数値) - ループの開始値。 `end` (数値) - ループの終了値。 `step` (数値) - 各イテレーションでの増分。 `callback` (関数) - 各イテレーションで実行されるコールバック関数。
    - 戻り値: 未解析。
    - 機能: 指定された範囲で反復処理を実行します。

- **ready(callback)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: ドキュメントのDOMが完全にロードされ、解析可能になった際にコールバック関数を実行する。
    - 引数: `callback` (関数) - DOMContentLoadedイベントなどで実行されるコールバック関数。
    - 戻り値: 未解析。
    - 機能: DOM操作を安全に行うための一般的なパターンを提供します。

- **addListener(element, event, handler)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 指定された要素にイベントリスナーを追加する。
    - 引数: `element` (DOM要素) - イベントリスナーを追加する要素。 `event` (文字列) - 監視するイベントの種類。 `handler` (関数) - イベント発生時に実行されるコールバック関数。
    - 戻り値: 未解析。
    - 機能: クロスブラウザ対応のイベントリスナー追加機能を提供します。

- **greet(name)** (`src/main.js`)
    - 役割: 指定された名前に挨拶を返す。
    - 引数: `name` (文字列) - 挨拶の対象となる名前。
    - 戻り値: 挨拶メッセージ (文字列)。
    - 機能: コンソールに「Hello, [name]!」というメッセージを出力します。

- **main()** (`src/main.js`)
    - 役割: プログラムのメインエントリポイント。
    - 引数: なし。
    - 戻り値: 未解析。
    - 機能: `greet`関数を呼び出して挨拶メッセージを表示する、シンプルなプログラムの実行を開始します。

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
Generated at: 2025-10-11 07:05:49 JST

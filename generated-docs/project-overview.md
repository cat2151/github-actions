Last updated: 2025-10-10

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: なし (ただし、生成されるcallgraphのHTML/JS/CSSはフロントエンド技術を使用)
- 音楽・オーディオ: なし (プロジェクト情報に記載があるが、本プロジェクトのGitHub Actions共通ワークフロー集とは直接関連しないため、このプロジェクトの技術スタックとしては「なし」と判断)
- 開発ツール:
    - Node.js runtime: JavaScriptの実行環境として、GitHub Actionsスクリプトの実行に利用されます。
- テスト: なし
- ビルドツール: なし
- 言語機能: なし (スクリプトはJavaScript (CommonJS) で記述)
- 自動化・CI/CD:
    - GitHub Actions: CI/CDの自動化プラットフォームとして、共通ワークフローの実行を管理します。以下の9種類のワークフローが含まれます。
        - プロジェクト要約自動生成: プロジェクトの概要を自動生成します。
        - Issue自動管理: GitHub Issueの自動的な管理を行います。
        - README多言語翻訳: READMEファイルの多言語翻訳を自動化します。
        - i18n automation: 国際化対応のための自動翻訳ワークフローです。
        - (その他、提供情報にある重複しないワークフローが適用される)
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
- **.github_automation/**: GitHub Actionsワークフローに関連するスクリプトや設定ファイルをまとめたディレクトリです。
    - **callgraph/**: コードの呼び出しグラフ生成機能に関連するファイル群。
        - **codeql-queries/**: CodeQL解析のためのクエリファイルを格納。
            - `callgraph.ql`: コードの呼び出しグラフを生成するためのCodeQLクエリ。
            - `codeql-pack.lock.yml`: CodeQLパックの依存関係をロックするためのファイル。
            - `qlpack.yml`: CodeQLパックのメタデータや設定を定義するファイル。
        - **config/**: 設定ファイル。
            - `example.json`: 呼び出しグラフ生成のサンプル設定ファイル。
        - **docs/**: ドキュメント。
            - `callgraph.md`: 呼び出しグラフ機能に関する説明ドキュメント。
        - **presets/**: プリセットファイル。
            - `callgraph.js`: 生成された呼び出しグラフをインタラクティブに表示するためのJavaScriptコード。グラフの描画、レイアウト、イベントハンドリングなどを担当します。
            - `style.css`: 生成された呼び出しグラフのHTMLビューのスタイルを定義するCSS。
        - **scripts/**: 呼び出しグラフ生成に関連するNode.jsスクリプト。
            - `analyze-codeql.cjs`: CodeQLを使ってコードを解析し、SARIF形式のレポートを生成するスクリプト。
            - `callgraph-utils.cjs`: 呼び出しグラフ生成プロセスで利用される汎用ユーティリティ関数群。
            - `check-codeql-exists.cjs`: システムにCodeQLがインストールされているかを確認するスクリプト。
            - `check-node-version.cjs`: 実行環境のNode.jsバージョンが要件を満たしているかを確認するスクリプト。
            - `common-utils.cjs`: プロジェクト全体で共通利用されるユーティリティ関数。
            - `copy-commit-results.cjs`: 特定のコミット結果を別の場所にコピーするスクリプト。
            - `extract-sarif-info.cjs`: CodeQLが生成するSARIFファイルから必要な情報を抽出するスクリプト。
            - `find-process-results.cjs`: 処理結果を検索・特定するためのスクリプト。
            - `generate-html-graph.cjs`: CodeQLの解析結果を基に、HTML形式の呼び出しグラフビューを生成するスクリプト。
            - `generateHTML.cjs`: 汎用的なHTMLファイルを生成するスクリプト。
    - **check_recent_human_commit/**: 最近の人間によるコミットをチェックする機能。
        - **scripts/**:
            - `check-recent-human-commit.cjs`: GitHub Actionsが自動生成したコミットではなく、人間が行った最近のコミットが存在するかを確認するスクリプト。
    - **project_summary/**: プロジェクトの概要や開発状況を自動生成する機能。
        - **docs/**: ドキュメント。
            - `daily-summary-setup.md`: 日次サマリーの設定方法に関するドキュメント。
        - **prompts/**: プロンプト定義ファイル。
            - `development-status-prompt.md`: 開発状況レポート生成時に使用されるプロンプトの定義。
            - `project-overview-prompt.md`: プロジェクト概要生成時に使用されるプロンプトの定義。
        - **scripts/**: プロジェクトサマリー生成に関連するNode.jsスクリプト。
            - `ProjectSummaryCoordinator.cjs`: プロジェクトサマリー生成の全体プロセスを調整・管理するメインスクリプト。
            - **development/**: 開発状況レポートに関連するスクリプト。
                - `DevelopmentStatusGenerator.cjs`: 現在の開発状況（進捗、課題など）を分析し、レポートを生成するスクリプト。
                - `GitUtils.cjs`: Gitリポジトリからの情報取得や操作を行うためのユーティリティ。
                - `IssueTracker.cjs`: GitHub Issuesから情報を取得し、追跡するためのスクリプト。
            - `generate-project-summary.cjs`: プロジェクトサマリーの生成を開始するエントリポイントスクリプト。
            - **overview/**: プロジェクト概要に関連するスクリプト。
                - `CodeAnalyzer.cjs`: プロジェクトのコードベースを解析し、構造や統計情報を抽出するスクリプト。
                - `ProjectAnalysisOrchestrator.cjs`: プロジェクト分析プロセス全体を統括し、各分析モジュールを連携させるスクリプト。
                - `ProjectDataCollector.cjs`: プロジェクトに関する各種データ（ファイル、コード、コミットなど）を収集するスクリプト。
                - `ProjectDataFormatter.cjs`: 収集したプロジェクトデータを整形し、利用しやすい形式に変換するスクリプト。
                - `ProjectOverviewGenerator.cjs`: 収集・分析されたデータに基づいて、プロジェクトの概要テキストを生成するスクリプト。
                - `TechStackAnalyzer.cjs`: プロジェクトで使用されている技術スタックを自動的に分析し、特定するスクリプト。
            - **shared/**: 複数のスクリプトで共有される共通モジュール。
                - `BaseGenerator.cjs`: 各種レポートやドキュメント生成スクリプトの基底クラス。
                - `FileSystemUtils.cjs`: ファイルシステム操作（読み書き、ディレクトリ作成など）のためのユーティリティ。
                - `ProjectFileUtils.cjs`: プロジェクト内のファイルを扱うためのユーティリティ。
    - **translate/**: READMEなどの翻訳機能。
        - **docs/**: ドキュメント。
            - `TRANSLATION_SETUP.md`: 翻訳機能の設定方法に関するドキュメント。
        - **scripts/**:
            - `translate-readme.cjs`: READMEファイルを複数の言語に自動翻訳するためのスクリプト。
- `.gitignore`: Gitのバージョン管理から除外するファイルやディレクトリを指定する設定ファイル。
- `.vscode/`: Visual Studio Codeエディタの設定ファイルディレクトリ。
    - `settings.json`: VS Codeのワークスペース設定を定義するファイル。
- `LICENSE`: プロジェクトの配布ライセンス情報が記載されたファイル。
- `README.ja.md`: プロジェクトの日本語版説明書。
- `README.md`: プロジェクトの英語版（またはデフォルト）説明書。
- **generated-docs/**: 各種自動生成されたドキュメントを格納するディレクトリ。
    - `callgraph.html`: `generate-html-graph.cjs`によって生成された、呼び出しグラフのHTMLビュー。
    - `callgraph.js`: `presets/callgraph.js`の内容をコピーまたは処理して生成された、呼び出しグラフビューのインタラクティブなJavaScript。
    - `style.css`: `presets/style.css`の内容をコピーまたは処理して生成された、呼び出しグラフビューのスタイルシート。
- **issue-notes/**: GitHub Issueに関連するメモや詳細情報を格納するディレクトリ。各ファイルは特定のIssue番号に対応する。
- `src/main.js`: このプロジェクトのメインエントリポイントとして提供されている、シンプルなJavaScriptファイル。

## 関数詳細説明
- `escapeHtml(str)` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 与えられた文字列内のHTML特殊文字をエスケープします。
    - 引数: `str` (string) - エスケープ対象の文字列。
    - 戻り値: `string` - エスケープ処理後の文字列。
    - 機能: クロスサイトスクリプティング (XSS) 攻撃などを防ぐため、HTMLコンテンツとして表示する前に文字列を安全な形式に変換します。
- `getLayoutConfig()` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフ表示のレイアウト設定を取得します。
    - 引数: なし。
    - 戻り値: `object` - レイアウトに関する設定情報。
    - 機能: グラフの表示形式や配置に関するパラメータを提供します。
- `placeCentralNode(nodeId, position)` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 特定のノードをグラフの中央に配置します。
    - 引数: `nodeId` (string) - 中央に配置するノードのID。`position` (object, オプション) - ノードの配置座標 (x, y)。
    - 戻り値: なし。
    - 機能: ユーザーが注目するノードを視覚的に強調し、操作性を向上させます。
- `showNodeInfo(nodeId)` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 特定のノードの詳細情報を表示します。
    - 引数: `nodeId` (string) - 詳細情報を表示するノードのID。
    - 戻り値: なし。
    - 機能: グラフ上のノードをクリックした際などに、そのノードに関する追加情報をパネルなどに表示します。
- `showEdgeInfo(edgeId)` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 特定のエッジ（ノード間の接続）の詳細情報を表示します。
    - 引数: `edgeId` (string) - 詳細情報を表示するエッジのID。
    - 戻り値: なし。
    - 機能: グラフ上のエッジをクリックした際などに、そのエッジに関する追加情報を表示します。
- `hideInfoPanel()` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 情報表示パネルを非表示にします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザーが情報パネルを閉じる操作を行った際に、そのパネルを画面から隠します。
- `showInfoPanel()` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 情報表示パネルを表示します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: 詳細情報を表示する際に、非表示になっている情報パネルを画面上に表示します。
- `toggleInfoPanel()` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 情報表示パネルの表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザーの操作に応じて、情報パネルの現在の表示状態を反転させます（表示されていれば非表示に、非表示であれば表示に）。
- `generateGitHubURL(filePath, lineNumber)` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 指定されたファイルパスと行番号に対応するGitHubのURLを生成します。
    - 引数: `filePath` (string) - GitHubリポジトリ内のファイルパス。`lineNumber` (number, オプション) - ファイル内の行番号。
    - 戻り値: `string` - 生成されたGitHubのURL。
    - 機能: グラフ内のノードが参照するソースコードの場所へ直接リンクを張るために利用されます。
- `resetLayout()` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフのレイアウトを初期状態にリセットします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフの表示が複雑になった際に、初期の整理された状態に戻します。
- `watchNodeMovementAndFixOverlapsWrap()` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: ノードの動きを監視し、重なりを修正するロジックのラッパー関数です。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ノードの配置が変更された際に、他のノードとの視覚的な重なりを防ぐための処理を開始します。
- `watchNodeMovementAndFixOverlaps()` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: ノードの動きを監視し、他のノードとの重なりを解決する中心的なロジックです。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: レイアウトが動的に変化する際に、ノードが互いに重ならないように調整を行います。
- `resolveNodeOverlaps()` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 現在のレイアウトにおけるノード間の重なりを解決します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフのノードが密集している場合に、それらを適切に配置し直し、視認性を高めます。
- `switchLayout()` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフのレイアウトアルゴリズムを切り替えます。
    - 引数: `layoutName` (string) - 適用するレイアウトの名称 (例: 'force', 'grid')。
    - 戻り値: なし。
    - 機能: ユーザーが異なる視点や構造でグラフを分析できるよう、レイアウトアルゴリズムを変更します。
- `resetNodeStates()` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 全てのノードの視覚的な状態（選択、ハイライトなど）をリセットします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフの操作後に、選択状態などをクリアし、初期の表示状態に戻します。
- `fitToContent()` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフ全体が現在の表示領域に収まるようにズームレベルと位置を調整します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフの全ての内容を一度に表示し、全体像を把握しやすくします。
- `toggleNodeLabels()` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: ノードのラベル（名称）の表示/非表示を切り替えます。
    - 引数: `isVisible` (boolean, オプション) - ラベルを表示するかどうかの明示的な指定。
    - 戻り値: なし。
    - 機能: グラフの視認性を調整するために、ノードのテキストラベルの表示を制御します。
- `toggleCalleeLocationFilter()` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 呼び出し先（Callee）の場所によるフィルタリングの有効/無効を切り替えます。
    - 引数: `isEnabled` (boolean, オプション) - フィルタを有効にするかどうかの明示的な指定。
    - 戻り値: なし。
    - 機能: 特定の場所にある呼び出し先のみを表示するなど、複雑なグラフを絞り込むためのフィルタ機能を操作します。
- `replace(search, replace)` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 文字列内の特定のパターンを別の文字列に置換します。
    - 引数: `search` (string|RegExp) - 検索対象のパターン。`replace` (string|function) - 置換後の文字列または置換を行う関数。
    - 戻り値: `string` - 置換後の新しい文字列。
    - 機能: テキスト処理やデータ整形に利用されます。
- `function()` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 汎用的な匿名関数または高階関数の定義です。
    - 引数: 不明 (文脈に依存)。
    - 戻り値: 不明 (文脈に依存)。
    - 機能: 特定の処理を実行するためのコールバックやクロージャとして利用されます。
- `max(a, b)` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 二つの数値のうち大きい方を返します。
    - 引数: `a` (number) - 比較対象の数値。`b` (number) - 比較対象の数値。
    - 戻り値: `number` - より大きな数値。
    - 機能: 数値の比較や計算処理に利用されます。
- `on(event, handler)` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 特定のイベントが発生したときに実行されるハンドラ関数を登録します。
    - 引数: `event` (string) - イベントのタイプ (例: 'click', 'mouseover')。`handler` (function) - イベント発生時に呼び出される関数。
    - 戻り値: なし。
    - 機能: ユーザーインタラクションやシステムイベントに対する応答を定義します。
- `ready(handler)` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: DOMコンテンツが完全にロードされ、解析可能になったときに実行されるハンドラ関数を登録します。
    - 引数: `handler` (function) - DOM準備完了時に呼び出される関数。
    - 戻り値: なし。
    - 機能: スクリプトがHTML要素を安全に操作できる状態になった時点で初期化処理などを実行するために利用されます。
- `addListener(event, handler)` (./github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 要素にイベントリスナーを追加します。
    - 引数: `event` (string) - リッスンするイベントのタイプ。`handler` (function) - イベント発生時に実行されるコールバック関数。
    - 戻り値: なし。
    - 機能: `on` 関数と同様に、イベント駆動型の処理を実装するために使用されます。
- `greet(name)` (src/main.js):
    - 役割: 指定された名前に挨拶メッセージを生成します。
    - 引数: `name` (string) - 挨拶の対象となる名前。
    - 戻り値: `string` - "Hello, [name]!" という形式の挨拶メッセージ。
    - 機能: シンプルな文字列操作と、プログラムの基本的な出力を示します。
- `main()` (src/main.js):
    - 役割: プロジェクトの主要な処理を実行するエントリポイントです。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: `greet` 関数を呼び出してコンソールに出力するなど、アプリケーションの開始時に実行されるロジックをカプセル化します。

## 関数呼び出し階層ツリー
```
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
- replace (.github_automation/callgraph/presets/callgraph.js)
- max (.github_automation/callgraph/presets/callgraph.js)
- on (.github_automation/callgraph/presets/callgraph.js)
- ready (.github_automation/callgraph/presets/callgraph.js)
- addListener (.github_automation/callgraph/presets/callgraph.js)

---
Generated at: 2025-10-10 07:06:17 JST

Last updated: 2025-08-07

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: なし (ただし、Web Audio APIや関連ライブラリはブラウザ上で動作します)
- 音楽・オーディオ:
    - Tone.js: Web Audio APIを抽象化し、Web上で音楽やオーディオアプリケーションを構築するための高レベルなJavaScriptライブラリです。
    - MML (Music Macro Language): 音楽記法をテキストで表現するための言語を解析・処理するパーサーです。
    - Web Audio API: ブラウザに組み込まれた高機能な音声処理APIで、Tone.jsを通じて利用されます。
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するための非同期イベント駆動型のランタイム環境です。
    - npm scripts: `package.json`に定義されたスクリプトを実行するためのタスクランナーです。
    - Google Generative AI: テキスト生成などのAI機能を提供し、プロジェクトの文書生成を支援します。
    - @octokit/rest: GitHub APIと連携し、GitHub上の操作をプログラムから行うためのライブラリです。
- テスト: なし
- ビルドツール: なし
- 言語機能: なし
- 自動化・CI/CD:
    - GitHub Actions: GitHubリポジトリ上でコードのビルド、テスト、デプロイなどのワークフローを自動化するためのCI/CDプラットフォームです。このプロジェクトでは以下の8つのワークフローが利用されています。
        - プロジェクト要約自動生成
        - Issue自動管理
        - README多言語翻訳
        - i18n automation
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
- **.github_automation/**: GitHub Actionsの自動化ワークフローに関連するスクリプト、設定、ドキュメントを格納するルートディレクトリです。
    - **callgraph/**: コードの呼び出しグラフを生成・表示する機能に関連するファイル群です。
        - **codeql-queries/**: CodeQLツールで使用されるクエリファイル群で、コードの分析に使われます。
            - `callgraph.ql`: コードの呼び出しグラフを抽出するためのCodeQLクエリ。
            - `codeql-pack.lock.yml`: CodeQLパックの依存関係をロックするファイル。
            - `qlpack.yml`: CodeQLパックの設定ファイル。
        - **config/example.json**: Call Graph機能の設定例を示すJSONファイル。
        - **docs/callgraph.md**: Call Graph機能に関する説明ドキュメント。
        - **presets/**: Call Graphの表示やスタイルに関するファイル群です。
            - `.github_automation/callgraph/presets/callgraph.js` (および `generated-docs/callgraph.js`): 生成された呼び出しグラフのHTML表示をインタラクティブに操作するためのJavaScriptコードが含まれています。ノードやエッジの表示、レイアウト調整、情報パネルの制御などを行います。
            - `.github_automation/callgraph/presets/style.css` (および `generated-docs/style.css`): 呼び出しグラフのHTML表示の視覚的なスタイルを定義するCSSファイルです。
        - **scripts/**: Call Graphの生成と分析に関連する各種ユーティリティスクリプト。
            - `analyze-codeql.cjs`: CodeQL分析を実行するスクリプト。
            - `callgraph-utils.cjs`: Call Graph生成のための共通ユーティリティ関数群。
            - `check-codeql-exists.cjs`: CodeQLの存在を確認するスクリプト。
            - `check-commits.cjs`: コミット履歴をチェックするスクリプト。
            - `check-node-version.cjs`: Node.jsのバージョンを確認するスクリプト。
            - `common-utils.cjs`: 自動化スクリプトで共通的に使用されるユーティリティ関数群。
            - `copy-commit-results.cjs`: コミット結果をコピーするスクリプト。
            - `extract-sarif-info.cjs`: SARIFファイルから情報を抽出するスクリプト。
            - `find-process-results.cjs`: プロセス結果を検索するスクリプト。
            - `generate-html-graph.cjs`: 呼び出しグラフのHTMLを生成するスクリプト。
            - `generateHTML.cjs`: 一般的なHTML生成スクリプト。
    - **project_summary/**: プロジェクトの要約を自動生成する機能に関連するファイル群です。
        - **docs/daily-summary-setup.md**: 日次要約の設定に関するドキュメント。
        - **prompts/**: AIによる文書生成に使用されるプロンプトファイルです。
            - `development-status-prompt.md`: 開発状況の要約生成のためのプロンプト。
            - `project-overview-prompt.md`: プロジェクト概要生成のためのプロンプト。
        - **scripts/generate-project-summary.cjs**: プロジェクト要約を生成するスクリプト。
    - **translate/**: READMEなどのドキュメントを多言語に翻訳する機能に関連するファイル群です。
        - **docs/TRANSLATION_SETUP.md**: 翻訳機能の設定に関するドキュメント。
        - **scripts/translate-readme.cjs**: READMEファイルを翻訳するスクリプト。
- **.gitignore**: Gitが追跡しないファイルやディレクトリを指定する設定ファイルです。
- **LICENSE**: プロジェクトのライセンス情報が記述されたファイルです。
- **README.ja.md**: プロジェクトの概要や利用方法を日本語で説明するメインドキュメントです。
- **README.md**: プロジェクトの概要や利用方法を英語で説明するメインドキュメントです。
- **generated-docs/**: GitHub Actionsによって自動生成されたドキュメントやレポートを格納するディレクトリです。
    - `callgraph.html`: 自動生成された関数の呼び出しグラフを表示するHTMLファイル。
    - `callgraph.js`: `generated-docs/callgraph.html`で使用される、グラフのインタラクティブな動作を制御するJavaScript。`.github_automation/callgraph/presets/callgraph.js`と同じ内容。
    - `development-status.md`: 自動生成された開発状況のサマリー。
    - `project-overview.md`: 自動生成されたプロジェクトの概要。
    - `style.css`: `generated-docs/callgraph.html`で使用される、グラフのスタイルを定義するCSS。`.github_automation/callgraph/presets/style.css`と同じ内容。
- **issue-notes/**: GitHub Issuesに関連するメモや詳細情報を格納するMarkdownファイルのコレクションです。
- **package-lock.json**: `package.json`に記述された依存関係の正確なバージョンと依存ツリーを記録するファイルです。
- **package.json**: Node.jsプロジェクトのメタデータ（名前、バージョン、依存関係、スクリプトなど）を定義するファイルです。
- **src/main.js**: プロジェクトのコアとなる、簡単なJavaScriptコードの例が含まれるファイルです。

## 関数詳細説明
- **`escapeHtml(str)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: HTML特殊文字をエスケープし、文字列が安全にHTMLとしてレンダリングされるようにします。
    - 引数: `str` (string) - エスケープする文字列。
    - 戻り値: (string) - エスケープされた文字列。
    - 機能: `<`を`&lt;`、`>`を`&gt;`、`&`を`&amp;`、`"`を`&quot;`、`'`を`&#039;`に置換します。
- **`getLayoutConfig()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフのレイアウトに関する設定オブジェクトを返します。
    - 引数: なし。
    - 戻り値: (object) - レイアウト設定を含むオブジェクト。
    - 機能: グラフのノード配置やエッジのスタイリングなど、レイアウトを制御するためのパラメータを定義します。
- **`placeCentralNode()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフの中央ノードを特定の位置に配置します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフ表示の基準となるノードを初期位置に設定し、視覚的な中心を確立します。
- **`showNodeInfo(node)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 指定されたノードに関する情報を情報パネルに表示します。
    - 引数: `node` (object) - 情報表示対象のノードオブジェクト。
    - 戻り値: なし。
    - 機能: ノードのID、名前、タイプ、ファイルパスなどの詳細情報をパネルに動的に表示し、ユーザーがノードの詳細を確認できるようにします。
- **`showEdgeInfo(edge)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 指定されたエッジに関する情報を情報パネルに表示します。
    - 引数: `edge` (object) - 情報表示対象のエッジオブジェクト。
    - 戻り値: なし。
    - 機能: エッジのソースノード、ターゲットノード、呼び出し回数などの詳細情報をパネルに表示し、呼び出し関係の詳細をユーザーに伝えます。
- **`hideInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 情報パネルを非表示にします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: 現在表示されている情報パネルを画面から隠します。
- **`showInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 情報パネルを表示します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: 情報パネルを画面に表示します。
- **`toggleInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 情報パネルの表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: 現在の情報パネルの表示状態に応じて、表示または非表示を切り替えます。
- **`generateGitHubURL(filePath, startLine)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: ファイルパスと開始行番号からGitHubリポジトリのURLを生成します。
    - 引数:
        - `filePath` (string) - ファイルのパス。
        - `startLine` (number) - ファイル内の開始行番号。
    - 戻り値: (string) - 生成されたGitHub URL。
    - 機能: グラフのノードが参照するソースコードに直接リンクするためのURLを作成します。
- **`resetLayout()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフのレイアウトを初期状態にリセットします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザーが変更したグラフのノード位置やズームレベルをデフォルトに戻します。
- **`watchNodeMovementAndFixOverlapsWrap()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: ノードの動きを監視し、重なりを修正する処理のラッパー関数。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフ内のノードが動いた際に、他のノードとの重なりを検出し、自動的に位置を調整して見やすく保ちます。
- **`watchNodeMovementAndFixOverlaps(cy, node)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 特定のノードの動きを監視し、他のノードとの重なりを解消します。
    - 引数:
        - `cy` (object) - Cytoscape.jsインスタンス。
        - `node` (object) - 監視対象のノードオブジェクト。
    - 戻り値: なし。
    - 機能: ノードのドラッグやレイアウト変更時に、重なりが発生しないようにノードの位置を微調整します。
- **`resolveNodeOverlaps(cy, nodesToProcess, maxIterations)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 指定されたノード群の重なりを解消します。
    - 引数:
        - `cy` (object) - Cytoscape.jsインスタンス。
        - `nodesToProcess` (array) - 重なりを解決する対象のノード配列。
        - `maxIterations` (number) - 重なり解決の最大繰り返し回数。
    - 戻り値: なし。
    - 機能: 複数のノードが重なっている場合に、それらを押し出して最適な位置に配置し、グラフの可読性を高めます。
- **`switchLayout(layoutName)`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフのレイアウトを切り替えます。
    - 引数: `layoutName` (string) - 切り替えるレイアウトの名前（例: 'cola', 'dagre'など）。
    - 戻り値: なし。
    - 機能: グラフの視覚的な表示方法（ノードの配置アルゴリズム）を変更し、異なる視点からグラフを分析できるようにします。
- **`resetNodeStates()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ内のすべてのノードの状態（ハイライトなど）をリセットします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: 選択されたノードのハイライトやフィルターを解除し、グラフをデフォルトの表示状態に戻します。
- **`fitToContent()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ全体がビューポートに収まるようにズームレベルと位置を調整します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフが画面からはみ出している場合に、全体像を一目で確認できるように自動で調整します。
- **`toggleNodeLabels()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフノードのラベルの表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフのノードに表示されるテキストラベルの可視性を切り替え、詳細情報の表示を制御します。
- **`toggleCalleeLocationFilter()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 呼び出し先の場所によるフィルタリングを切り替えます。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: 特定のファイルやモジュールからの呼び出し元/呼び出し先のノードのみを表示するなど、グラフの表示を絞り込みます。
- **`replace()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 文字列内のパターンを別の文字列に置き換える一般的なJavaScriptのメソッドを指します。
    - 引数: (string) - 置き換え対象の文字列、(string|RegExp) - 検索パターン、(string|function) - 置換文字列または置換関数。
    - 戻り値: (string) - 置換後の文字列。
    - 機能: テキスト処理において、特定の部分を別の内容に更新します。
- **`switch`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 複数の条件分岐を扱うためのJavaScriptの制御構造を指します。
    - 引数: (expression) - 評価される式。
    - 戻り値: なし。
    - 機能: 式の値を複数のケース（case）と比較し、一致するケースのコードブロックを実行します。
- **`function`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: JavaScriptで関数を定義するためのキーワードを指します。
    - 引数: (任意) - 関数の引数。
    - 戻り値: (任意) - 関数が返す値。
    - 機能: 特定のタスクを実行する再利用可能なコードブロックを作成します。
- **`max()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 複数の数値の中から最大値を返すJavaScriptの`Math.max()`メソッドを指します。
    - 引数: (number...) - 比較する数値。
    - 戻り値: (number) - 最大値。
    - 機能: 数値の集合から最大値を効率的に取得します。
- **`on()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: DOM要素やCytoscape.jsオブジェクトに対してイベントリスナーをアタッチするメソッドを指します。
    - 引数: (string) - イベントタイプ、(function) - イベントハンドラ。
    - 戻り値: (object) - 呼び出し元のオブジェクト（チェーン可能）。
    - 機能: 特定のイベントが発生したときに実行される関数を登録します。
- **`if`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 条件付きでコードブロックを実行するためのJavaScriptの制御構造を指します。
    - 引数: (boolean) - 評価される条件。
    - 戻り値: なし。
    - 機能: 指定された条件が真（true）の場合にのみ、関連するコードを実行します。
- **`for`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: コードブロックを繰り返し実行するためのJavaScriptのループ構造を指します。
    - 引数: (任意) - ループの初期化、条件、更新式。
    - 戻り値: なし。
    - 機能: 指定された回数、または特定の条件が満たされるまで、コードを反復実行します。
- **`ready()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: DOMが完全にロードされたときに実行される関数を登録するメソッド（jQueryの文脈でよく見られる）またはCytoscape.jsインスタンスが準備できたときに実行されるコールバックを指します。
    - 引数: (function) - 実行されるコールバック関数。
    - 戻り値: (object) - 呼び出し元のオブジェクト。
    - 機能: ページやコンポーネントの初期化処理を、依存するリソースが完全に利用可能になった後に実行します。
- **`addListener()`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: イベントリスナーを要素に追加するメソッドを指します。
    - 引数: (string) - イベントタイプ、(function) - イベントハンドラ、(boolean) - キャプチャフェーズかバブリングフェーズかを指定。
    - 戻り値: なし。
    - 機能: 特定のイベントに応答してコードを実行するための関数を登録します。
- **`greet(name)`** (`src/main.js`)
    - 役割: 指定された名前に挨拶メッセージを返します。
    - 引数: `name` (string) - 挨拶の対象となる名前。
    - 戻り値: (string) - 挨拶メッセージ。
    - 機能: シンプルな文字列操作を行い、「Hello, [name]!」という形式のメッセージを生成します。
- **`main()`** (`src/main.js`)
    - 役割: プログラムのエントリーポイントとして機能し、`greet`関数を呼び出して結果をコンソールに出力します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: `greet`関数を利用し、処理フローの開始点として設定されています。

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
Generated at: 2025-08-07 07:05:42 JST

Last updated: 2025-08-06

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽にするための共通ワークフロー集です。
- 🔗 共通化されたワークフローを提供し、どのプロジェクトからでも簡単に呼び出して利用できます。
- ✅ GitHub Actionsのメンテナンスを一括で行い、プロジェクト開発に集中できる環境を支援します。

## 技術スタック
- フロントエンド: JavaScript (DOM操作、イベントハンドリングを含む動的なWebコンテンツ生成に使用)
- 音楽・オーディオ:
    - Tone.js: Web Audio APIを抽象化し、Web上で高度な音声処理を行うためのライブラリ。
    - MML (Music Macro Language): 音楽をテキストで記述するための記法パーサー。
    - Web Audio API: ブラウザで直接音声処理を行うための標準API（Tone.js経由で利用）。
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するためのランタイム環境。
    - npm scripts: `package.json`に定義されたスクリプトを実行するためのタスクランナー。
    - Google Generative AI: AIによる文書生成機能（プロジェクト要約やレポート作成など）をサポート。
    - @octokit/rest: GitHub APIと連携し、GitHubリソースをプログラムから操作するためのライブラリ。
- テスト: 該当なし
- ビルドツール: 該当なし
- 言語機能: 該当なし
- 自動化・CI/CD:
    - GitHub Actions: コードの変更を検知して自動でビルド、テスト、デプロイなどのワークフローを実行するCI/CDプラットフォーム。本プロジェクトでは、プロジェクト要約自動生成、Issue自動管理、README多言語翻訳、i18n automationといった多様なワークフローが定義されています。
- 開発標準: 該当なし

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
- **`.github_automation/`**: GitHub Actionsの自動化に関連するスクリプトや設定を格納する主要ディレクトリです。
    - **`callgraph/`**: コードの呼び出しグラフを生成・表示するための自動化処理を含みます。
        - `codeql-queries/`: CodeQLを用いたコード解析クエリ群を格納します。
            - `callgraph.ql`: コードの関数呼び出し関係を抽出するためのCodeQLクエリ。
            - `codeql-pack.lock.yml`: CodeQLパックの依存関係を固定するファイル。
            - `qlpack.yml`: CodeQLパックの設定を定義するファイル。
        - `config/`: 設定ファイルを格納します。
            - `example.json`: 各種設定の例を示すJSONファイル。
        - `docs/`: 呼び出しグラフ機能に関するドキュメントを格納します。
            - `callgraph.md`: 呼び出しグラフ機能の利用方法や詳細を説明するMarkdownドキュメント。
        - `presets/`: 呼び出しグラフの表示に関するプリセット（JavaScriptとCSS）を格納します。
            - `callgraph.js`: 呼び出しグラフのレンダリング、ノード配置、情報表示、レイアウト切り替えなど、グラフの動的な挙動を制御するJavaScriptコード。
            - `style.css`: 呼び出しグラフの視覚的なスタイル（色、フォント、レイアウト要素など）を定義するCSSファイル。
        - `scripts/`: 呼び出しグラフ生成プロセスで使用される補助スクリプト群です。
            - `analyze-codeql.cjs`: CodeQLによるコード解析を実行するスクリプト。
            - `callgraph-utils.cjs`: 呼び出しグラフに関連する共通のユーティリティ関数を提供します。
            - `check-codeql-exists.cjs`: CodeQLツールが環境に存在するかを確認するスクリプト。
            - `check-commits.cjs`: コミット履歴を分析し、特定の条件を満たすコミットを識別するスクリプト。
            - `check-node-version.cjs`: 実行環境のNode.jsバージョンをチェックするスクリプト。
            - `common-utils.cjs`: プロジェクト全体で共有される汎用的なユーティリティ関数集。
            - `copy-commit-results.cjs`: コミット分析の結果を所定の場所にコピーするスクリプト。
            - `extract-sarif-info.cjs`: SARIF形式の解析結果ファイルから必要な情報を抽出するスクリプト。
            - `find-process-results.cjs`: 特定の処理結果を検索・取得するスクリプト。
            - `generate-html-graph.cjs`: 解析結果を基にHTML形式の呼び出しグラフを生成するスクリプト。
            - `generateHTML.cjs`: HTMLドキュメントの生成に関連する汎用ユーティリティ。
    - **`project_summary/`**: プロジェクト概要の自動生成に関連する機能を含みます。
        - `docs/`: ドキュメントを格納します。
            - `daily-summary-setup.md`: 日次サマリーのセットアップ方法に関するドキュメント。
        - `prompts/`: AIによる文書生成のためのプロンプトテンプレートを格納します。
            - `development-status-prompt.md`: 開発状況レポートを生成するためのAIプロンプト。
            - `project-overview-prompt.md`: プロジェクト概要を生成するためのAIプロンプト。
        - `scripts/`: プロジェクト概要生成スクリプトを格納します。
            - `generate-project-summary.cjs`: AIプロンプトとプロジェクト情報を使用して、プロジェクト概要を自動生成するスクリプト。
    - **`translate/`**: 多言語翻訳機能に関連する機能を含みます。
        - `docs/`: ドキュメントを格納します。
            - `TRANSLATION_SETUP.md`: 翻訳機能のセットアップに関するドキュメント。
        - `scripts/`: 翻訳スクリプトを格納します。
            - `translate-readme.cjs`: READMEファイルを複数の言語に自動翻訳するスクリプト。
- **`.gitignore`**: Gitのバージョン管理システムで無視すべきファイルやディレクトリを指定する設定ファイル。
- **`LICENSE`**: プロジェクトの利用条件や配布に関するライセンス情報が記載されたファイル。
- **`README.ja.md`**: プロジェクトの日本語での概要、利用方法、貢献ガイドなどを記した主要なドキュメント。
- **`README.md`**: プロジェクトの英語での概要、利用方法、貢献ガイドなどを記した主要なドキュメント。
- **`generated-docs/`**: GitHub Actionsによって自動生成されたドキュメントや成果物を格納するディレクトリ。
    - `callgraph.html`: 自動生成された関数の呼び出しグラフを視覚的に表示するHTMLファイル。
    - `callgraph.js`: `callgraph.html`でグラフの描画やインタラクションを制御するJavaScriptファイル。`.github_automation/callgraph/presets/callgraph.js`が元になっている可能性があります。
    - `development-status.md`: 自動生成されたプロジェクトの開発状況レポート。
    - `project-overview.md`: 自動生成されたプロジェクトの概要説明ドキュメント。
    - `style.css`: `callgraph.html`のスタイルを定義するCSSファイル。`.github_automation/callgraph/presets/style.css`が元になっている可能性があります。
- **`issue-notes/`**: GitHub Issuesに関する追加のメモや詳細を格納するディレクトリ。
    - `[番号].md`: 各Issue番号に対応する詳細情報や関連するメモを記述したMarkdownファイル。
- **`package-lock.json`**: `package.json`に記載された依存関係の正確なツリー構造とバージョン、ハッシュ値などを記録し、一貫したインストールを保証するファイル。
- **`package.json`**: Node.jsプロジェクトのメタデータ（名前、バージョン、スクリプト、依存関係など）を定義する設定ファイル。
- **`src/`**: プロジェクトの主要なソースコードを格納するディレクトリ。
    - `main.js`: プロジェクトのメインエントリポイントとなるJavaScriptファイル。シンプルなデモンストレーション機能を持つ可能性があります。

## 関数詳細説明
- `escapeHtml(string)`: 与えられた文字列内のHTML特殊文字をエスケープし、スクリプトインジェクションなどのクロスサイトスクリプティング（XSS）攻撃を防ぎます。
- `getLayoutConfig()`: 呼び出しグラフの視覚的なレイアウトに関する設定オブジェクトを取得します。
- `placeCentralNode()`: 呼び出しグラフ内で特定のノード（通常は中心となる関数やモジュール）を中央に配置する処理を行います。
- `showNodeInfo()`: グラフ上で選択されたノード（関数など）に関する詳細情報をパネルに表示します。
- `showEdgeInfo()`: グラフ上で選択されたエッジ（呼び出し関係など）に関する詳細情報をパネルに表示します。
- `hideInfoPanel()`: 現在表示されている情報パネルを非表示にします。
- `showInfoPanel()`: 情報パネルを表示します。
- `toggleInfoPanel()`: 情報パネルの表示・非表示の状態を切り替えます。
- `generateGitHubURL()`: GitHubリポジトリ内のファイルやコミットなど、特定のGitHubリソースへのURLを生成します。
- `resetLayout()`: 呼び出しグラフの現在のレイアウトを初期状態にリセットし、ノードとエッジを再配置します。
- `watchNodeMovementAndFixOverlapsWrap()`: ノードの移動を監視し、その重なりを修正する処理をラップして提供します。
- `watchNodeMovementAndFixOverlaps()`: グラフ内のノードが移動する際に、他のノードとの重なりをリアルタイムで検出し、自動的に位置を調整して視認性を高めます。
- `resolveNodeOverlaps()`: グラフ内のすべてのノードを走査し、互いに重なっているノードを検出し、適切な間隔を保つように再配置します。
- `switchLayout()`: 呼び出しグラフの表示レイアウト（例: ツリー型、円形、力学ベースなど）を切り替えます。
- `resetNodeStates()`: グラフ内のノードの選択状態、ハイライト、展開/折りたたみ状態などの視覚的な状態をリセットします。
- `fitToContent()`: グラフ全体がビューポート内に収まるように、ズームレベルとパン位置を自動的に調整します。
- `toggleNodeLabels()`: グラフノードに表示されるラベル（関数名など）の表示/非表示を切り替えます。
- `toggleCalleeLocationFilter()`: 呼び出し元の位置に基づいて呼び出し先をフィルタリングする機能の有効/無効を切り替えます。
- `replace()`: 文字列の置換操作を行います。特定のパターンを別の文字列に置き換える用途で使われます。
- `switch()`: 複数の条件に基づいて異なるコードブロックを実行するための制御構造（JavaScriptのswitch文に相当）。
- `function()`: JavaScriptで関数を定義するためのキーワード。
- `max()`: 与えられた数値の中から最大値を返す関数。
- `on()`: 特定のイベントが発生したときに実行されるイベントリスナーを登録するメソッド（多くの場合、DOM要素やカスタムイベントに対して使用）。
- `if()`: 条件が真の場合に特定のコードブロックを実行するための制御構造（JavaScriptのif文に相当）。
- `for()`: 指定された回数だけ、または条件が満たされるまでコードブロックを繰り返し実行するための制御構造（JavaScriptのfor文に相当）。
- `ready()`: ドキュメントのDOMが完全にロードされ、操作可能になったときに実行される関数を登録します。
- `addListener()`: 特定のイベントリスナーをイベントにアタッチし、イベントが発生した際に登録されたコールバック関数を実行するようにします。
- `greet(name)`: 引数として受け取った`name`を用いて、挨拶メッセージを生成し返します。
- `main()`: このプロジェクトの主要なエントリポイントとなる関数で、`greet`関数を呼び出し、その結果をコンソールに出力します。

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
Generated at: 2025-08-06 07:05:41 JST

Last updated: 2025-08-11

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド:
    - **Cy.js (推測)**: 呼び出しグラフの可視化（`callgraph.js`および関連CSSファイルから推測）に使用される可能性のあるJavaScriptライブラリ。
    - **HTML/CSS/JavaScript**: `generated-docs`内のHTML/JS/CSSファイルを通じて、可視化された情報を提供するための基本的なWeb技術。
- 音楽・オーディオ:
    - **Tone.js**: Web Audio APIを抽象化し、Web上で高度なオーディオ処理や音楽制作を可能にするJavaScriptライブラリ。
    - **MML (Music Macro Language)**: 音楽をテキスト形式で記述するための記法パーサー。
    - **Web Audio API**: ブラウザ上で直接オーディオを処理・生成するためのW3C標準API（Tone.jsを介して利用）。
- 開発ツール:
    - **Node.js runtime**: JavaScriptコードを実行するための環境。
    - **npm scripts**: `package.json`に定義されたスクリプトを実行するためのタスクランナー。
    - **Google Generative AI (@google/generative-ai)**: AIによる文書生成（プロジェクト要約、開発ステータスなど）をサポートするためのライブラリ。
    - **@octokit/rest**: GitHub APIと連携し、リポジトリ情報の取得やIssue管理などを行うためのライブラリ。
- テスト: (情報なし)
- ビルドツール:
    - **npm scripts**: 一部のタスクがビルドやパースの役割を果たす可能性があります。
- 言語機能: (情報なし。主にJavaScriptを使用)
- 自動化・CI/CD:
    - **GitHub Actions**: リポジトリでのイベントに基づいて自動的にワークフローを実行するCI/CDプラットフォーム。
        - プロジェクト要約自動生成
        - Issue自動管理
        - README多言語翻訳
        - i18n automation (自動翻訳ワークフロー)
- 開発標準: (情報なし)

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
      📖 project_summary_cjs_analysis.md
    📁 prompts/
      📖 development-status-prompt.md
      📖 project-overview-prompt.md
    📁 scripts/
      📄 GitUtils.cjs
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
- **.github_automation/**: GitHub Actionsの自動化ワークフローに関連するスクリプト、設定、ドキュメントを格納するルートディレクトリ。
    - **callgraph/**: コードの呼び出しグラフを生成・可視化するためのモジュール。
        - **codeql-queries/**: CodeQL分析用のクエリファイル群。
            - `callgraph.ql`: CodeQLを用いてソースコードの関数呼び出し関係を抽出するクエリ。
            - `codeql-pack.lock.yml`, `qlpack.yml`: CodeQLパックの依存関係と設定ファイル。
        - **config/**: 各種設定ファイルが格納されるディレクトリ。
            - `example.json`: 設定ファイルの例。
        - **docs/**: 呼び出しグラフ機能に関するドキュメント。
            - `callgraph.md`: 呼び出しグラフ機能の説明ドキュメント。
        - **presets/**: 呼び出しグラフの可視化用スクリプトとスタイルシート。
            - `callgraph.js`: グラフの描画、インタラクション、レイアウト調整など、呼び出しグラフのフロントエンド処理を担うJavaScriptファイル。
            - `style.css`: 呼び出しグラフの見た目を定義するCSSファイル。
        - **scripts/**: 呼び出しグラフ生成プロセスを支援するユーティリティスクリプト群。
            - `analyze-codeql.cjs`: CodeQL分析を実行するスクリプト。
            - `callgraph-utils.cjs`: 呼び出しグラフ関連の共通ユーティリティ関数。
            - `check-codeql-exists.cjs`: CodeQLの存在を確認するスクリプト。
            - `check-commits.cjs`: コミット履歴をチェックするスクリプト。
            - `check-node-version.cjs`: Node.jsのバージョンを確認するスクリプト。
            - `common-utils.cjs`: プロジェクト全体で利用される共通ユーティリティ関数。
            - `copy-commit-results.cjs`: コミット結果をコピーするスクリプト。
            - `extract-sarif-info.cjs`: SARIF形式の分析結果から情報を抽出するスクリプト。
            - `find-process-results.cjs`: プロセス結果を検索するスクリプト。
            - `generate-html-graph.cjs`: HTML形式のグラフを生成するスクリプト。
            - `generateHTML.cjs`: HTMLファイルを生成するユーティリティ。
    - **project_summary/**: プロジェクト概要や開発状況レポートを自動生成するためのモジュール。
        - **docs/**: プロジェクト要約機能に関するドキュメント。
            - `daily-summary-setup.md`: 日次サマリーの設定手順に関するドキュメント。
            - `project_summary_cjs_analysis.md`: プロジェクト要約スクリプトの分析に関するドキュメント。
        - **prompts/**: AI文書生成に使用されるプロンプトファイル。
            - `development-status-prompt.md`: 開発ステータスレポート生成用のプロンプト。
            - `project-overview-prompt.md`: プロジェクト概要生成用のプロンプト。
        - **scripts/**: プロジェクト要約を生成するためのスクリプト群。
            - `GitUtils.cjs`: Gitリポジトリ操作に関するユーティリティ関数。
            - `generate-project-summary.cjs`: AI（Google Generative AI）を利用してプロジェクト要約を生成するメインスクリプト。
    - **translate/**: READMEなどの多言語翻訳を自動化するためのモジュール。
        - **docs/**: 翻訳機能に関するドキュメント。
            - `TRANSLATION_SETUP.md`: 翻訳機能の設定手順に関するドキュメント。
        - **scripts/**: 翻訳プロセスを担うスクリプト。
            - `translate-readme.cjs`: READMEファイルの多言語翻訳を実行するスクリプト。
- **.gitignore**: Gitが追跡しないファイルやディレクトリを指定する設定ファイル。
- **LICENSE**: プロジェクトのライセンス情報が記載されたファイル。
- **README.ja.md**: プロジェクトの日本語版説明ドキュメント。
- **README.md**: プロジェクトの英語版（メイン）説明ドキュメント。
- **generated-docs/**: 各種スクリプトによって自動生成されたドキュメントやレポートを格納するディレクトリ。
    - `callgraph.html`: 呼び出しグラフの可視化されたHTMLページ。
    - `callgraph.js`: `callgraph.html`内で使用されるJavaScriptコード。`.github_automation/callgraph/presets/callgraph.js`の複製または生成されたバージョン。
    - `development-status.md`: 自動生成された開発ステータスレポート。
    - `project-overview.md`: 自動生成されたプロジェクト概要。
    - `style.css`: `callgraph.html`や他の生成ドキュメントで使用されるスタイルシート。`.github_automation/callgraph/presets/style.css`の複製または生成されたバージョン。
- **issue-notes/**: GitHub Actionsによって自動管理されるIssueに関するメモが格納されるディレクトリ。
- **package-lock.json**: `package.json`の依存関係の正確なバージョンとツリー構造を記録するファイル。
- **package.json**: Node.jsプロジェクトのメタデータ、依存関係、スクリプトなどが定義された設定ファイル。
- **src/main.js**: プロジェクトのメインエントリポイントとなる、簡潔な例示用スクリプト。

## 関数詳細説明
- **greet()** (src/main.js):
    - 役割: コンソールに挨拶メッセージを出力します。
    - 引数: なし
    - 戻り値: なし (サイドエフェクトとしてコンソール出力)
- **main()** (src/main.js):
    - 役割: プログラムのメインエントリポイントとして、`greet`関数を呼び出します。
    - 引数: なし
    - 戻り値: なし
- **escapeHtml(text)** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: HTML特殊文字をエスケープし、XSS攻撃を防ぐための安全な文字列を返します。
    - 引数: `text` (string) - エスケープする文字列。
    - 戻り値: (string) - エスケープされた文字列。
- **getLayoutConfig()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 現在選択されているレイアウト設定（例えば、Cose-bilkentやGridなど）を取得し、その設定オブジェクトを返します。
    - 引数: なし
    - 戻り値: (object) - 選択されたレイアウト設定オブジェクト。
- **placeCentralNode()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフの特定のノード（中心ノード）を中央に配置し、レイアウトを調整します。
    - 引数: なし
    - 戻り値: なし
- **showNodeInfo(node)** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 指定されたノードに関する詳細情報を情報パネルに表示します。
    - 引数: `node` (object) - 表示するCy.jsノードオブジェクト。
    - 戻り値: なし
- **showEdgeInfo(edge)** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 指定されたエッジ（辺）に関する詳細情報を情報パネルに表示します。
    - 引数: `edge` (object) - 表示するCy.jsエッジオブジェクト。
    - 戻り値: なし
- **hideInfoPanel()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 情報パネルを非表示にします。
    - 引数: なし
    - 戻り値: なし
- **showInfoPanel()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 情報パネルを表示します。
    - 引数: なし
    - 戻り値: なし
- **toggleInfoPanel()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 情報パネルの表示/非表示を切り替えます。
    - 引数: なし
    - 戻り値: なし
- **generateGitHubURL(filePath, startLine)** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 指定されたファイルパスと行番号に基づいて、GitHubリポジトリへのURLを生成します。
    - 引数: `filePath` (string) - ファイルのパス。 `startLine` (number) - 行番号。
    - 戻り値: (string) - 生成されたGitHub URL。
- **resetLayout()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフのレイアウトを初期状態にリセットします。
    - 引数: なし
    - 戻り値: なし
- **watchNodeMovementAndFixOverlapsWrap()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: ノードの動きを監視し、重なりを修正する処理をラップします。
    - 引数: なし
    - 戻り値: なし
- **watchNodeMovementAndFixOverlaps()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフ内のノードの移動を監視し、ノード間の重なりを自動的に解消します。
    - 引数: なし
    - 戻り値: なし
- **resolveNodeOverlaps()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: ノードの重なりを解決し、視認性を向上させます。
    - 引数: なし
    - 戻り値: なし
- **switchLayout()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフのレイアウトアルゴリズムを切り替えます（例: Cose-bilkent, Gridなど）。
    - 引数: なし
    - 戻り値: なし
- **resetNodeStates()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 全てのノードの状態（ハイライトなど）をリセットし、初期表示に戻します。
    - 引数: なし
    - 戻り値: なし
- **fitToContent()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフ全体がビューポートに収まるようにズームレベルとパンを調整します。
    - 引数: なし
    - 戻り値: なし
- **toggleNodeLabels()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: グラフ内のノードのラベル表示を切り替えます（表示/非表示）。
    - 引数: なし
    - 戻り値: なし
- **toggleCalleeLocationFilter()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 呼び出し先（Callee）の位置によるフィルタリングを切り替えます。
    - 引数: なし
    - 戻り値: なし
- **replace(searchValue, replaceValue)** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 文字列内で特定の部分を別の文字列に置換します。（JavaScriptの`String.prototype.replace`メソッドがラッピングされているか、類似の機能を提供すると推測されます。）
    - 引数: `searchValue` (string|RegExp) - 検索する値。 `replaceValue` (string) - 置換する値。
    - 戻り値: (string) - 置換後の文字列。
- **switch()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 制御フロー構造の一部として条件分岐を実行します。（JavaScriptの`switch`文の文脈で使われている可能性があります。）
    - 引数: (任意)
    - 戻り値: (任意)
- **function()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 関数を定義するキーワードまたは関数を返す高階関数。（JavaScriptの`function`キーワードの文脈で使われている可能性があります。）
    - 引数: (任意)
    - 戻り値: (任意)
- **max(a, b, ...)** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 複数の数値の中から最大値を返します。（JavaScriptの`Math.max`に似た機能を提供すると推測されます。）
    - 引数: `a`, `b`, ... (number) - 比較する数値。
    - 戻り値: (number) - 最大値。
- **on(eventName, handler)** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 特定のイベントが発生した際に実行されるイベントハンドラを設定します。（Cy.jsなどのライブラリにおけるイベントリスナー設定メソッドと推測されます。）
    - 引数: `eventName` (string) - イベント名。 `handler` (function) - イベント発生時に呼び出されるコールバック関数。
    - 戻り値: (object) - 自身（チェーン可能）。
- **if()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 制御フロー構造の一部として条件付きコードブロックを実行します。（JavaScriptの`if`文の文脈で使われている可能性があります。）
    - 引数: (任意)
    - 戻り値: (任意)
- **for()** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 制御フロー構造の一部としてループ処理を実行します。（JavaScriptの`for`文の文脈で使われている可能性があります。）
    - 引数: (任意)
    - 戻り値: (任意)
- **ready(handler)** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: ドキュメントまたは特定のリソースが準備完了になったときに実行されるハンドラを設定します。（jQueryやCy.jsなどのライブラリにおける初期化処理イベントと推測されます。）
    - 引数: `handler` (function) - 準備完了時に呼び出されるコールバック関数。
    - 戻り値: (object) - 自身（チェーン可能）。
- **addListener(eventType, listener)** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
    - 役割: 特定のイベントタイプに対するイベントリスナーを追加します。（汎用的なイベントリスナー登録メソッドと推測されます。）
    - 引数: `eventType` (string) - イベントのタイプ。 `listener` (function) - イベント発生時に呼び出されるリスナー関数。
    - 戻り値: (object) - 自身。

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
Generated at: 2025-08-11 07:05:10 JST

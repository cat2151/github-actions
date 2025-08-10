Last updated: 2025-08-10

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: なし
- 音楽・オーディオ:
    - Tone.js: Web Audio APIを抽象化し、Web上で音楽やオーディオを生成・操作するためのJavaScriptライブラリ。
    - MML (Music Macro Language): 音楽の構造や音符、リズムなどをテキスト形式で記述するための記法パーサー。
    - Web Audio API: ブラウザで高度な音声処理を行うためのAPI。Tone.js経由で利用される。
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するための環境。
    - npm scripts: `package.json`に定義されたスクリプトを実行するタスクランナー。
    - Google Generative AI: AIによる文書生成などをサポートするAPI（`@google/generative-ai`ライブラリ経由）。
    - @octokit/rest: GitHub REST APIと連携するためのJavaScriptライブラリ。
- テスト: なし
- ビルドツール: なし
- 言語機能: なし
- 自動化・CI/CD:
    - GitHub Actions: CI/CDパイプラインを自動化するためのプラットフォーム。本プロジェクトでは、プロジェクト要約自動生成、Issue自動管理、README多言語翻訳、i18n automationといった共通ワークフローを提供します。
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
      📖 project_summary_cjs_analysis.md
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
- **`.github_automation/callgraph/codeql-queries/callgraph.ql`**: CodeQLを使用してJavaScript/TypeScriptプロジェクトの関数呼び出しグラフを抽出するためのクエリ。
- **`.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml`**: CodeQLパックの依存関係とバージョンをロックするファイル。
- **`.github_automation/callgraph/codeql-queries/qlpack.yml`**: CodeQLパックのメタデータと依存関係を定義するファイル。
- **`.github_automation/callgraph/config/example.json`**: 関数呼び出しグラフ生成スクリプトの設定例を格納するJSONファイル。
- **`.github_automation/callgraph/docs/callgraph.md`**: 関数呼び出しグラフ機能に関するドキュメント。
- **`.github_automation/callgraph/presets/callgraph.js`**: 生成された呼び出しグラフのビジュアル化とインタラクション（ノードの配置、情報表示、レイアウト切り替えなど）を制御するJavaScriptコード。
- **`.github_automation/callgraph/presets/style.css`**: 呼び出しグラフの見た目を定義するCSSスタイルシート。
- **`.github_automation/callgraph/scripts/analyze-codeql.cjs`**: CodeQLによる静的解析を実行し、プロジェクトのコードから情報を抽出するNode.jsスクリプト。
- **`.github_automation/callgraph/scripts/callgraph-utils.cjs`**: 呼び出しグラフの生成に関連する共通のユーティリティ関数を提供するNode.jsスクリプト。
- **`.github_automation/callgraph/scripts/check-codeql-exists.cjs`**: 環境にCodeQL CLIがインストールされているかを確認するNode.jsスクリプト。
- **`.github_automation/callgraph/scripts/check-commits.cjs`**: Gitコミットの履歴や内容をチェックするためのNode.jsスクリプト。
- **`.github_automation/callgraph/scripts/check-node-version.cjs`**: Node.jsの実行バージョンがプロジェクトの要件を満たしているかを確認するNode.jsスクリプト。
- **`.github_automation/callgraph/scripts/common-utils.cjs`**: プロジェクト全体で利用される汎用的なユーティリティ関数群を提供するNode.jsスクリプト。
- **`.github_automation/callgraph/scripts/copy-commit-results.cjs`**: コミットに関連する分析結果や成果物をコピーするためのNode.jsスクリプト。
- **`.github_automation/callgraph/scripts/extract-sarif-info.cjs`**: SARIF（Static Analysis Results Interchange Format）ファイルから静的解析の結果を抽出・解析するNode.jsスクリプト。
- **`.github_automation/callgraph/scripts/find-process-results.cjs`**: 実行中のプロセスやその結果を検索・特定するためのNode.jsスクリプト。
- **`.github_automation/callgraph/scripts/generate-html-graph.cjs`**: CodeQLの解析結果などからHTML形式の関数呼び出しグラフを生成する主要なNode.jsスクリプト。
- **`.github_automation/callgraph/scripts/generateHTML.cjs`**: 一般的なHTMLファイルの生成を補助するNode.jsスクリプト。
- **`.github_automation/project_summary/docs/daily-summary-setup.md`**: プロジェクトの日次サマリー自動生成機能の設定に関するドキュメント。
- **`.github_automation/project_summary/docs/project_summary_cjs_analysis.md`**: プロジェクト要約機能のCommonJSモジュール解析に関する技術的ドキュメント。
- **`.github_automation/project_summary/prompts/development-status-prompt.md`**: AIによる開発状況レポート生成に使用されるプロンプト定義。
- **`.github_automation/project_summary/prompts/project-overview-prompt.md`**: AIによるプロジェクト概要生成に使用されるプロンプト定義。
- **`.github_automation/project_summary/scripts/generate-project-summary.cjs`**: GitHub Actionsによってプロジェクトの概要や開発状況を自動生成するNode.jsスクリプト。
- **`.github_automation/translate/docs/TRANSLATION_SETUP.md`**: READMEなどの多言語翻訳機能の設定に関するドキュメント。
- **`.github_automation/translate/scripts/translate-readme.cjs`**: GitHub ActionsによってREADMEファイルを自動的に多言語に翻訳するNode.jsスクリプト。
- **`.gitignore`**: Gitがバージョン管理の対象外とするファイルやディレクトリのパターンを定義するファイル。
- **`LICENSE`**: プロジェクトの利用条件を定めるライセンス情報ファイル。
- **`README.ja.md`**: プロジェクトの日本語版説明書。
- **`README.md`**: プロジェクトの主要な説明書（通常は英語版）。
- **`generated-docs/callgraph.html`**: 生成された関数呼び出しグラフを表示するためのHTMLファイル。`.github_automation/callgraph/scripts/generate-html-graph.cjs`によって出力される。
- **`generated-docs/callgraph.js`**: `callgraph.html`内で使用されるJavaScriptファイルで、呼び出しグラフのインタラクションや視覚化を担う。内容的には`.github_automation/callgraph/presets/callgraph.js`と同一の機能を持つ。
- **`generated-docs/development-status.md`**: AIによって自動生成されたプロジェクトの開発状況に関するMarkdownドキュメント。
- **`generated-docs/project-overview.md`**: AIによって自動生成されたプロジェクトの概要に関するMarkdownドキュメント。
- **`generated-docs/style.css`**: `callgraph.html`内で使用されるCSSファイルで、呼び出しグラフのスタイルを定義する。内容的には`.github_automation/callgraph/presets/style.css`と同一の機能を持つ。
- **`issue-notes/*.md`**: GitHub Issuesの内容をMarkdown形式で個別に保存しているファイル群。
- **`package-lock.json`**: `package.json`に記述された依存関係の具体的なインストールバージョンを記録し、ビルドの再現性を保証するファイル。
- **`package.json`**: プロジェクトのメタデータ（名前、バージョン、説明など）、スクリプト、依存関係を定義するファイル。
- **`src/main.js`**: プロジェクトの例として含まれる、シンプルなNode.jsスクリプト。

## 関数詳細説明
- **`escapeHtml(text)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: 指定されたテキスト内のHTML特殊文字（&, <, >, ", '）を対応するHTMLエンティティに変換し、XSS（クロスサイトスクリプティング）攻撃を防ぐ。
    - **引数**: `text` (string) - エスケープする文字列。
    - **戻り値**: (string) - エスケープされた文字列。
- **`getLayoutConfig()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフのレイアウト設定を動的に取得または生成する。異なるレイアウトタイプに基づいて適切な設定を返す。
    - **引数**: なし
    - **戻り値**: (object) - レイアウト設定オブジェクト。
- **`placeCentralNode(cy, node)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: Cytoscape.jsグラフインスタンス (`cy`) 内で、特定のノードを中央に配置する。
    - **引数**:
        - `cy` (object): Cytoscape.jsグラフインスタンス。
        - `node` (object): 中央に配置するノードオブジェクト。
    - **戻り値**: なし
- **`showNodeInfo(node)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: 指定されたノードの詳細情報をウェブページの専用パネルに表示する。ノードのプロパティ（名前、タイプ、ファイルパス、行数など）を整形して表示。
    - **引数**: `node` (object) - 情報を表示するノードオブジェクト。
    - **戻り値**: なし
- **`showEdgeInfo(edge)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: 指定されたエッジ（グラフの接続線）の詳細情報をウェブページの専用パネルに表示する。エッジのソースとターゲットノードの情報を表示。
    - **引数**: `edge` (object) - 情報を表示するエッジオブジェクト。
    - **戻り値**: なし
- **`hideInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフ情報を表示するサイドパネルを非表示にする。
    - **引数**: なし
    - **戻り値**: なし
- **`showInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフ情報を表示するサイドパネルを表示する。
    - **引数**: なし
    - **戻り値**: なし
- **`toggleInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフ情報のサイドパネルの表示/非表示を切り替える。
    - **引数**: なし
    - **戻り値**: なし
- **`generateGitHubURL(filePath, startLine, endLine)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: GitHubリポジトリ上の特定のファイルおよび行範囲へのURLを生成する。
    - **引数**:
        - `filePath` (string): ファイルのパス。
        - `startLine` (number): 開始行番号。
        - `endLine` (number): 終了行番号。
    - **戻り値**: (string) - 生成されたGitHub URL。
- **`resetLayout(cy)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: Cytoscape.jsグラフの現在のレイアウトを初期状態にリセットし、ノードの配置を再計算する。
    - **引数**: `cy` (object) - Cytoscape.jsグラフインスタンス。
    - **戻り値**: なし
- **`watchNodeMovementAndFixOverlapsWrap(cy, layout)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: ノードの動きを監視し、その重なりを修正するロジックのラッパー関数。特定のレイアウトが完了した後に発火する。
    - **引数**:
        - `cy` (object): Cytoscape.jsグラフインスタンス。
        - `layout` (object): 適用中のレイアウトオブジェクト。
    - **戻り値**: なし
- **`watchNodeMovementAndFixOverlaps(cy, layout)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフ内のノードの移動を監視し、ノード間の重なりが発生した場合に位置を調整して重なりを解消する。
    - **引数**:
        - `cy` (object): Cytoscape.jsグラフインスタンス。
        - `layout` (object): 適用中のレイアウトオブジェクト。
    - **戻り値**: なし
- **`resolveNodeOverlaps(cy)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフ内の重なっているノードの位置を調整し、視覚的な重なりを解決する。
    - **引数**: `cy` (object) - Cytoscape.jsグラフインスタンス。
    - **戻り値**: なし
- **`switchLayout(cy, layoutName)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフのレイアウトアルゴリズムを切り替える。例えば、`cola`、`cose`、`dagre`などのレイアウトを適用できる。
    - **引数**:
        - `cy` (object): Cytoscape.jsグラフインスタンス。
        - `layoutName` (string): 適用するレイアウトの名前。
    - **戻り値**: なし
- **`resetNodeStates(cy)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフ内のすべてのノードの選択状態、ハイライト状態、その他の視覚的状態を初期値にリセットする。
    - **引数**: `cy` (object) - Cytoscape.jsグラフインスタンス。
    - **戻り値**: なし
- **`fitToContent(cy)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフ全体がビューポート内に収まるようにズームレベルとパン位置を調整する。
    - **引数**: `cy` (object) - Cytoscape.jsグラフインスタンス。
    - **戻り値**: なし
- **`toggleNodeLabels(cy)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフのノードラベルの表示/非表示を切り替える。
    - **引数**: `cy` (object) - Cytoscape.jsグラフインスタンス。
    - **戻り値**: なし
- **`toggleCalleeLocationFilter(cy)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: 呼び出し先のノード（関数など）に対する位置フィルタの適用を切り替える。特定の条件に基づいてノードの表示をフィルタリングする。
    - **引数**: `cy` (object) - Cytoscape.jsグラフインスタンス。
    - **戻り値**: なし
- **`greet(name)`** (`src/main.js`):
    - **役割**: 指定された名前を含む挨拶メッセージを生成する。
    - **引数**: `name` (string) - 挨拶の対象となる名前。
    - **戻り値**: (string) - "Hello, [name]!" 形式の挨拶文字列。
- **`main()`** (`src/main.js`):
    - **役割**: プログラムの主要なエントリポイント。`greet`関数を呼び出し、その結果をコンソールに出力する。
    - **引数**: なし
    - **戻り値**: なし

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
Generated at: 2025-08-10 07:05:30 JST

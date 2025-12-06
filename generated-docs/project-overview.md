Last updated: 2025-12-03

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: HTML (レポート表示), CSS (スタイル設定), JavaScript (コールグラフの動的表示とインタラクション)
- 音楽・オーディオ: 該当なし
- 開発ツール: Node.js (共通ワークフローの実行スクリプト環境), CodeQL (ソースコードの静的解析ツール), GitHub Actions (CI/CDワークフロー実行環境), Gemini (READMEファイルの自動翻訳サービスに利用)
- テスト: なし (プロジェクト情報に具体的なテストツールやフレームワークの記載はありません)
- ビルドツール: なし (特定のビルドツールは使用せず、Node.jsスクリプトで各種処理を実行します)
- 言語機能: JavaScript (スクリプト開発), YAML (GitHub Actionsワークフロー定義), Markdown (ドキュメント記述)
- 自動化・CI/CD: GitHub Actions (共通ワークフローの実行、ドキュメント生成、翻訳などの自動化を実現)
- 開発標準: なし (共通ワークフローの提供自体がプロジェクト間の開発標準化を促進しますが、具体的なコード品質ツールや統一ルールセットの記載はありません)

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
📄 _config.yml
📁 generated-docs/
  🌐 callgraph.html
  📜 callgraph.js
  🎨 style.css
🌐 googled947dc864c270e07.html
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
  📖 29.md
  📖 3.md
  📖 30.md
  📖 4.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明
- **`.github_automation/`**: GitHub Actionsによって実行される自動化スクリプトや設定ファイルを一元管理する最上位ディレクトリです。
- **`.github_automation/callgraph/`**: CodeQLを用いた関数呼び出しグラフ（コールグラフ）の生成に関連する機能群を格納しています。
    - **`codeql-queries/callgraph.ql`**: JavaScriptプロジェクトの関数呼び出し関係を抽出するためのCodeQLカスタムクエリ定義ファイルです。
    - **`codeql-pack.lock.yml`**: CodeQLパックの依存関係を管理するロックファイルです。
    - **`qlpack.yml`**: CodeQLパックの設定ファイルです。
    - **`config/example.json`**: CodeQL解析やコールグラフ生成に関する設定の例が記述されたJSONファイルです。
    - **`docs/callgraph.md`**: コールグラフ機能の詳細な説明や使用方法を記述したドキュメントです。
    - **`presets/callgraph.js`**: 生成されたコールグラフのHTMLページ上で、グラフの動的な表示やインタラクション（ノードの移動、情報の表示など）を制御するJavaScriptコードです。
    - **`presets/style.css`**: 生成されたコールグラフのHTMLページの視覚的なスタイル（色、レイアウトなど）を定義するCSSファイルです。
    - **`scripts/*.cjs`**: コールグラフの生成プロセス全体を担うNode.jsスクリプト群です。CodeQLの実行、SARIFレポートからの情報抽出、インタラクティブなHTMLグラフの生成などを行います。
- **`.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs`**: 最近のコミットが自動生成されたものではなく、人間によるものであるかをチェックするNode.jsスクリプトです。
- **`.github_automation/project_summary/`**: プロジェクトの概要や開発状況レポートを自動生成する機能群を格納しています。
    - **`docs/daily-summary-setup.md`**: 日次サマリーレポートの設定に関するドキュメントです。
    - **`prompts/*.md`**: 大規模言語モデル（LLM）に対して、プロジェクト概要や開発状況レポートを生成するための指示（プロンプト）のテンプレートを格納しています。
    - **`scripts/ProjectSummaryCoordinator.cjs`**: プロジェクトサマリー生成プロセス全体の調整と管理を行うNode.jsスクリプトです。
    - **`scripts/development/*.cjs`**: 開発状況レポートの生成に関連するスクリプト群です。Gitリポジトリの操作やIssueトラッキングシステムからの情報取得を行います。
    - **`scripts/generate-project-summary.cjs`**: プロジェクトサマリー生成のエントリポイントとなるNode.jsスクリプトです。
    - **`scripts/overview/*.cjs`**: プロジェクト概要の生成に関連するスクリプト群です。コードの静的解析、プロジェクトデータの収集と整形、概要レポートの生成を行います。
    - **`scripts/shared/*.cjs`**: プロジェクト内の複数の機能で共有される、ファイルシステム操作や汎用的なデータ処理などのユーティリティ関数を提供するスクリプト群です。
- **`.github_automation/translate/`**: ドキュメントの自動翻訳機能に関連するファイルを格納しています。
    - **`docs/TRANSLATION_SETUP.md`**: 翻訳機能の設定と使用方法に関するドキュメントです。
    - **`scripts/translate-readme.cjs`**: READMEファイルなどのドキュメントを自動翻訳するためのNode.jsスクリプトです。
- **`.gitignore`**: Gitのバージョン管理から除外するファイルやディレクトリを指定する設定ファイルです。
- **`.vscode/settings.json`**: Visual Studio Codeエディタのワークスペース固有の設定を定義するファイルです。
- **`LICENSE`**: このプロジェクトのソフトウェアライセンス情報が記述されています。
- **`README.ja.md`**: プロジェクトの概要や使用方法を日本語で記述したメインドキュメントです。
- **`README.md`**: プロジェクトの概要や使用方法を英語で記述したメインドキュメントです。`README.ja.md`を元に自動翻訳されて生成されます。
- **`_config.yml`**: GitHub PagesのJekyll設定ファイルです。生成される静的サイトの構成を定義します。
- **`generated-docs/`**: GitHub Actionsによって自動生成されたドキュメントやレポートを格納するディレクトリです。
    - **`callgraph.html`**: CodeQLによって解析され、生成されたインタラクティブな関数呼び出しグラフのHTMLファイルです。
    - **`callgraph.js`**: `callgraph.html` の動的な挙動を制御するJavaScriptファイルです（`.github_automation/callgraph/presets/callgraph.js`のコピー）。
    - **`style.css`**: `callgraph.html` のスタイルを定義するCSSファイルです（`.github_automation/callgraph/presets/style.css`のコピー）。
- **`googled947dc864c270e07.html`**: Googleサイト認証のために配置されたファイルです。
- **`issue-notes/`**: 過去のIssueに関するメモや詳細を格納するディレクトリです。具体的なIssue内容は含まれません。
- **`src/main.js`**: プロジェクトの基本的な機能やテスト実行のためのエントリポイントとなるJavaScriptファイルです。

## 関数詳細説明
- **`escapeHtml`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: HTML特殊文字をエスケープし、セキュリティを考慮した表示可能な文字列に変換します。
    - **引数**: `text` (string) - エスケープする対象の文字列。
    - **戻り値**: `string` - エスケープ処理後の文字列。
- **`getLayoutConfig`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: コールグラフの視覚的なレイアウトに関する設定を取得または生成します。
    - **引数**: なし (または、特定のレイアウトオプションを指定する場合があります)。
    - **戻り値**: `object` - レイアウト設定を含むオブジェクト。
- **`placeCentralNode`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: グラフの中心に特定のノード（関数など）を配置します。
    - **引数**: `nodeId` (string) - 中心に配置するノードの一意な識別子。
    - **戻り値**: なし。
- **`showNodeInfo`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: グラフ上のノード（関数など）に関する詳細情報を専用の情報パネルに表示します。
    - **引数**: `nodeData` (object) - 表示するノードのデータ。
    - **戻り値**: なし。
- **`showEdgeInfo`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: グラフ上のエッジ（関数呼び出し関係など）に関する詳細情報を情報パネルに表示します。
    - **引数**: `edgeData` (object) - 表示するエッジのデータ。
    - **戻り値**: なし。
- **`hideInfoPanel`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: 現在表示されている情報パネルを非表示にします。
    - **引数**: なし。
    - **戻り値**: なし。
- **`showInfoPanel`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: 情報パネルを表示状態にします。
    - **引数**: なし。
    - **戻り値**: なし。
- **`toggleInfoPanel`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: 情報パネルの現在の表示状態を切り替えます（表示されていれば非表示に、非表示であれば表示に）。
    - **引数**: なし。
    - **戻り値**: なし。
- **`generateGitHubURL`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: グラフ要素に対応するGitHubリポジトリ内のソースコードへのURLを生成します。
    - **引数**: `filePath` (string), `lineNumber` (number) - 対象のファイルパスと行番号。
    - **戻り値**: `string` - 生成されたGitHubのURL。
- **`resetLayout`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: コールグラフの表示レイアウトを初期状態にリセットします。
    - **引数**: なし。
    - **戻り値**: なし。
- **`watchNodeMovementAndFixOverlapsWrap`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: ノードの動きを監視し、他のノードとの重なりを修正する処理をラップする機能を提供します。
    - **引数**: なし。
    - **戻り値**: なし。
- **`watchNodeMovementAndFixOverlaps`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: グラフ内のノードの移動を継続的に監視し、ノード同士が重ならないように自動的に位置を調整します。
    - **引数**: なし。
    - **戻り値**: なし。
- **`resolveNodeOverlaps`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: グラフ内のノードの重なりを解決し、視覚的な明確さを保つようにノードを再配置します。
    - **引数**: なし。
    - **戻り値**: なし。
- **`switchLayout`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: グラフの表示レイアウト（例：円形、ツリー、グリッドなど）を別のタイプに切り替えます。
    - **引数**: `layoutType` (string) - 適用するレイアウトの種類。
    - **戻り値**: なし。
- **`resetNodeStates`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: グラフ内のすべてのノードの選択状態、ハイライト、位置などの状態を初期値にリセットします。
    - **引数**: なし。
    - **戻り値**: なし。
- **`fitToContent`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: グラフ全体が現在の表示領域に収まるようにズームレベルとパン位置を調整します。
    - **引数**: なし。
    - **戻り値**: なし。
- **`toggleNodeLabels`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: グラフノードに表示されるラベルの表示/非表示を切り替えます。
    - **引数**: なし。
    - **戻り値**: なし。
- **`toggleCalleeLocationFilter`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: 呼び出し先（Callee）のロケーションに基づいて、グラフノードの表示をフィルタリングする機能を切り替えます。
    - **引数**: なし。
    - **戻り値**: なし。
- **`replace`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: 文字列中の特定の部分を別の文字列に置換します（JavaScriptの`String.prototype.replace`メソッドに相当する汎用的な機能）。
    - **引数**: `searchValue` (string | RegExp), `replaceValue` (string) - 検索する値と置換する値。
    - **戻り値**: `string` - 置換後の文字列。
- **`switch`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: 複数の条件分岐を効率的に処理するためのJavaScriptの制御構文です。
    - **引数**: `expression` (any) - 評価する式。
    - **戻り値**: なし (コードの実行フローを制御)。
- **`function`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: 処理のブロックを定義し、再利用可能なコードとしてカプセル化するJavaScriptのキーワードです。
    - **引数**: なし (または、定義される関数の引数)。
    - **戻り値**: なし (関数自体を定義)。
- **`max`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: 与えられた数値のセットから最大値を見つけます（JavaScriptの`Math.max`に相当する汎用的な機能）。
    - **引数**: `values` (number...) - 比較する数値のリスト。
    - **戻り値**: `number` - 最大値。
- **`on`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: 特定のイベントが発生したときに実行されるイベントハンドラを設定します（jQueryなどのイベントリスナーに相当）。
    - **引数**: `eventType` (string), `handler` (function) - イベントの種類と、そのイベント発生時に実行される処理関数。
    - **戻り値**: なし (イベントリスナーを設定)。
- **`if`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: 指定された条件が真である場合にのみ、特定のコードブロックを実行するJavaScriptの条件分岐構文です。
    - **引数**: `condition` (boolean) - 評価する条件。
    - **戻り値**: なし (コードの実行フローを制御)。
- **`for`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: 指定された回数だけ、または特定の条件が満たされるまでコードブロックを繰り返し実行するJavaScriptのループ構文です。
    - **引数**: なし (ループの初期化、条件、更新式が含まれる)。
    - **戻り値**: なし (繰り返し処理を実行)。
- **`ready`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: ドキュメントオブジェクトモデル (DOM) の準備が完了したときに実行される関数を設定します（jQueryの`$(document).ready()`に相当）。
    - **引数**: `handler` (function) - DOM準備完了時に実行される関数。
    - **戻り値**: なし (イベントリスナーを設定)。
- **`addListener`** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - **役割**: イベントターゲットにイベントリスナーを追加し、特定のイベントの発生を監視します（Web APIの`EventTarget.addEventListener()`に相当）。
    - **引数**: `eventType` (string), `listener` (function) - イベントの種類と、イベント発生時に呼び出されるリスナー関数。
    - **戻り値**: なし (イベントリスナーを追加)。
- **`greet`** (src/main.js)
    - **役割**: 指定された名前に対して挨拶メッセージを生成します。
    - **引数**: `name` (string) - 挨拶する相手の名前。
    - **戻り値**: `string` - 例: "Hello, [name]!"
- **`main`** (src/main.js)
    - **役割**: プログラムの主要な実行ロジックを含み、通常はアプリケーションのエントリポイントとして機能します。
    - **引数**: なし。
    - **戻り値**: なし (コンソール出力などを実行)。

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
Generated at: 2025-12-03 07:06:00 JST

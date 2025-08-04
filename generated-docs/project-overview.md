Last updated: 2025-08-05

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽にします。
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼び出すだけで利用可能です。
- ✅ メンテは一括で行え、プロジェクト開発に集中できる環境を提供します。

## 技術スタック
- フロントエンド: 該当なし（本プロジェクトはGitHub Actionsの共通ワークフロー集であり、特定のフロントエンドフレームワークやライブラリは使用していません。）
- 音楽・オーディオ: 該当なし（本プロジェクトの目的とは関連性がありません。）
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するための環境。
    - npm scripts: `package.json`に定義されたタスクを実行するためのスクリプトランナー。
    - Google Generative AI: AIを活用した文書生成（プロジェクト要約、翻訳など）をサポートするAPI。
    - @octokit/rest: GitHub APIと連携し、リポジトリやIssueなどの情報を操作するためのJavaScriptライブラリ。
- テスト: 該当なし
- ビルドツール: 該当なし
- 言語機能: 該当なし（JavaScript/Node.jsを基盤としていますが、特定の言語機能として特筆すべきものはありません。）
- 自動化・CI/CD:
    - GitHub Actions: コードの変更を検知し、自動的にテスト、デプロイ、ドキュメント生成などのワークフローを実行するCI/CDプラットフォーム。
        - プロジェクト要約自動生成: AIを用いてプロジェクトの概要や進捗状況を自動生成するワークフロー。
        - Issue自動管理: GitHub Issuesの管理を自動化し、ライフサイクルや定型的な更新を支援するワークフロー。
        - README多言語翻訳: プロジェクトのREADMEファイルを複数の言語に自動翻訳するワークフロー。
        - i18n automation: 国際化対応（i18n）を自動化するための翻訳ワークフロー。
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
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLを利用してコードベースの関数呼び出しグラフを生成するためのクエリ定義ファイルです。
- **.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係とバージョンをロックし、再現可能な分析を保証するファイルです。
- **.github_automation/callgraph/codeql-queries/qlpack.yml**: CodeQLパックのメタデータ、依存関係、クエリのパスなどを定義する設定ファイルです。
- **.github_automation/callgraph/config/example.json**: 呼び出しグラフ生成ツールで使用される設定のサンプルを格納するJSONファイルです。
- **.github_automation/callgraph/docs/callgraph.md**: 呼び出しグラフ生成機能に関する詳細な説明と使用方法を提供するドキュメントです。
- **.github_automation/callgraph/presets/callgraph.js**: 生成された呼び出しグラフのHTML表示におけるインタラクティブな機能（ノード情報表示、レイアウト操作、重なり解決など）を提供するJavaScriptコードです。
- **.github_automation/callgraph/presets/style.css**: 生成された呼び出しグラフのHTML表示のスタイルを定義するCSSファイルです。
- **.github_automation/callgraph/scripts/analyze-codeql.cjs**: CodeQL分析を実行し、その結果を処理するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/callgraph-utils.cjs**: 呼び出しグラフの生成と表示に関連する共通のユーティリティ関数を提供するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/check-codeql-exists.cjs**: システムにCodeQLがインストールされているかを確認するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/check-commits.cjs**: Gitのコミット履歴をチェックするためのNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/check-node-version.cjs**: 実行中のNode.jsのバージョンが要件を満たしているかを確認するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/common-utils.cjs**: プロジェクト全体で共有される一般的なユーティリティ関数を提供するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/copy-commit-results.cjs**: コミット関連の分析結果をコピーするNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/extract-sarif-info.cjs**: CodeQL分析結果が出力するSARIF（Static Analysis Results Interchange Format）ファイルから必要な情報を抽出するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/find-process-results.cjs**: 特定の処理結果を検索・取得するためのNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/generate-html-graph.cjs**: CodeQLの分析結果を基に、呼び出しグラフをインタラクティブなHTML形式で生成するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/generateHTML.cjs**: HTMLファイルを動的に生成するための汎用的なNode.jsスクリプトです。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: プロジェクトの日次サマリーを自動生成するための設定方法を説明するドキュメントです。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: AIが開発状況のサマリーを生成する際に使用するプロンプトの定義です。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: AIがプロジェクト概要を生成する際に使用するプロンプトの定義です。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: Google Generative AIを利用してプロジェクトの概要や開発状況のサマリーを自動生成するNode.jsスクリプトです。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: READMEの多言語翻訳機能の設定手順を説明するドキュメントです。
- **.github_automation/translate/scripts/translate-readme.cjs**: Google Generative AIを利用してREADMEファイルを複数の言語に自動翻訳するNode.jsスクリプトです。
- **.gitignore**: Gitのバージョン管理システムが無視すべきファイルやディレクトリのパターンを定義する設定ファイルです。
- **LICENSE**: 本プロジェクトのソフトウェアライセンス情報が記述されたファイルです。
- **README.ja.md**: プロジェクトの目的、使い方、貢献方法などを日本語で説明するメインドキュメントです。
- **README.md**: プロジェクトの目的、使い方、貢献方法などを英語で説明するメインドキュメントです。
- **generated-docs/callgraph.html**: 呼び出しグラフ生成ワークフローによって出力された、インタラクティブな呼び出しグラフ表示用HTMLファイルです。
- **generated-docs/callgraph.js**: `generated-docs/callgraph.html`に組み込まれるJavaScriptコードです。`.github_automation/callgraph/presets/callgraph.js`と同一の内容で、グラフのインタラクションを制御します。
- **generated-docs/development-status.md**: プロジェクトサマリー生成ワークフローによって出力された、自動生成された開発状況の概要ドキュメントです。
- **generated-docs/project-overview.md**: プロジェクトサマリー生成ワークフローによって出力された、自動生成されたプロジェクトの概要ドキュメントです。
- **generated-docs/style.css**: `generated-docs/callgraph.html`に組み込まれるCSSコードです。`.github_automation/callgraph/presets/style.css`と同一の内容で、グラフの見た目を定義します。
- **issue-notes/** (ディレクトリ): GitHub Issuesに関連するメモや、自動化されたワークフローによって生成されたIssue関連の情報が格納されるディレクトリです。
- **package-lock.json**: `package.json`に記述された依存関係の正確なバージョンと、その依存関係ツリーを記録するファイルです。Node.jsプロジェクトの依存関係の再現性を保証します。
- **package.json**: Node.jsプロジェクトのメタデータ（名前、バージョン、スクリプトコマンド、依存関係など）を定義するファイルです。
- **src/main.js**: プロジェクトのメインのエントリーポイントとなる非常にシンプルなJavaScriptファイルです。主にデモンストレーションや簡単なテストに使用されます。

## 関数詳細説明
- **escapeHtml**: HTML特殊文字をエスケープし、セキュリティ脆弱性（XSS）を防ぐための文字列変換を行います。
    - 引数: `str` (string) - エスケープ対象の文字列。
    - 戻り値: (string) - エスケープされた文字列。
- **getLayoutConfig**: 呼び出しグラフの視覚的なレイアウトに関する設定オブジェクトを取得します。
    - 引数: なし
    - 戻り値: (object) - レイアウト設定を含むオブジェクト。
- **placeCentralNode**: グラフ表示において、特定のノードを中央に配置する処理を行います。
    - 引数: なし (通常、グラフライブラリの内部データを使用)
    - 戻り値: なし
- **showNodeInfo**: グラフ上のノード（関数）がクリックされた際などに、そのノードの詳細情報を情報パネルに表示します。
    - 引数: なし (通常、イベントオブジェクトやノードIDが内部的に渡される)
    - 戻り値: なし
- **showEdgeInfo**: グラフ上のエッジ（関数間の呼び出し関係）がクリックされた際に、そのエッジの詳細情報を情報パネルに表示します。
    - 引数: なし (通常、イベントオブジェクトやエッジIDが内部的に渡される)
    - 戻り値: なし
- **hideInfoPanel**: 情報表示パネルを非表示にします。
    - 引数: なし
    - 戻り値: なし
- **showInfoPanel**: 情報表示パネルを表示します。
    - 引数: なし
    - 戻り値: なし
- **toggleInfoPanel**: 情報表示パネルの表示/非表示状態を切り替えます。
    - 引数: なし
    - 戻り値: なし
- **generateGitHubURL**: グラフのノード情報に基づき、関連するGitHubリポジトリやファイルへのURLを生成します。
    - 引数: なし (通常、ノードデータが内部的に使用される)
    - 戻り値: (string) - 生成されたGitHub URL。
- **resetLayout**: 呼び出しグラフの表示レイアウトを初期状態にリセットします。
    - 引数: なし
    - 戻り値: なし
- **watchNodeMovementAndFixOverlapsWrap**: ノードの移動を監視し、他のノードとの重なりを解消する処理をラップします。
    - 引数: なし
    - 戻り値: なし
- **watchNodeMovementAndFixOverlaps**: グラフ内のノードが移動した際に、他のノードとの視覚的な重なりを自動的に調整し解消します。
    - 引数: なし
    - 戻り値: なし
- **resolveNodeOverlaps**: 既存のノード間の重なりを検出し、それらを解決して視認性を向上させます。
    - 引数: なし
    - 戻り値: なし
- **switchLayout**: 呼び出しグラフのレイアウトアルゴリズムを異なる種類に切り替えます（例: 円形レイアウト、階層型レイアウトなど）。
    - 引数: なし (通常、レイアウトの種類を指定するパラメータが渡される)
    - 戻り値: なし
- **resetNodeStates**: グラフ内のノードの選択状態、ハイライト、色などの視覚的状態を初期値にリセットします。
    - 引数: なし
    - 戻り値: なし
- **fitToContent**: グラフの表示領域を、全てのノードとエッジが収まるように自動調整します。
    - 引数: なし
    - 戻り値: なし
- **toggleNodeLabels**: グラフノードに表示されるラベル（関数名など）の表示/非表示を切り替えます。
    - 引数: なし
    - 戻り値: なし
- **toggleCalleeLocationFilter**: 呼び出し元または呼び出し先の位置によるフィルタリングを切り替えます。
    - 引数: なし
    - 戻り値: なし
- **replace**: 文字列内の特定のパターンを別の文字列に置換する処理を実行します。（JavaScriptの`String.prototype.replace`に類似する汎用関数）
    - 引数: (string, string, string) - 対象文字列、検索パターン、置換文字列。
    - 戻り値: (string) - 置換後の文字列。
- **switch**: 条件に基づいて複数の処理パスのいずれかを選択し実行する制御構造を示唆します。（JavaScriptの`switch`文に類似する概念）
    - 引数: (any) - 比較対象の値。
    - 戻り値: なし
- **function**: JavaScriptにおける関数定義のキーワード。特定の名前ではなく、無名関数やコールバックとして使用される文脈を示唆します。
    - 引数: 不明
    - 戻り値: 不明
- **max**: 複数の数値の中から最大値を取得する処理。（JavaScriptの`Math.max`に類似する汎用関数）
    - 引数: (number...) - 比較対象の数値のリスト。
    - 戻り値: (number) - 最大値。
- **on**: イベントリスナーを要素にアタッチし、特定のイベントが発生したときに指定された関数を実行します。（特定のライブラリの`.on()`メソッドに類似）
    - 引数: (string, function) - イベント名、イベント発生時に実行されるコールバック関数。
    - 戻り値: なし
- **if**: 条件式が真の場合に特定のコードブロックを実行する制御構造を示唆します。（JavaScriptの`if`文に類似する概念）
    - 引数: (boolean) - 評価される条件式。
    - 戻り値: なし
- **for**: 特定の回数だけコードブロックを繰り返し実行するループ制御構造を示唆します。（JavaScriptの`for`ループに類似する概念）
    - 引数: 不明 (ループの初期化、条件、更新式など)
    - 戻り値: なし
- **ready**: ドキュメントのDOMが完全に読み込まれ、操作可能になった時点で指定された関数を実行します。（特定のライブラリの`ready`イベントハンドラに類似）
    - 引数: (function) - DOM準備完了時に実行されるコールバック関数。
    - 戻り値: なし
- **addListener**: イベントリスナーをオブジェクトに追加し、特定のイベントが発生した際にコールバック関数を呼び出します。
    - 引数: (string, function) - イベント名、リスナー関数。
    - 戻り値: なし
- **greet** (`src/main.js`): 引数で渡された名前に挨拶メッセージを生成します。
    - 引数: `name` (string) - 挨拶の対象となる名前。
    - 戻り値: (string) - "Hello, [name]!" の形式の挨拶メッセージ。
- **main** (`src/main.js`): プロジェクトのメインエントリーポイント関数。`greet`関数を呼び出して結果をコンソールに出力するシンプルなロジックを実行します。
    - 引数: なし
    - 戻り値: なし

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
Generated at: 2025-08-05 07:05:58 JST

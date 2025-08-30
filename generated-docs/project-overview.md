Last updated: 2025-08-30

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽にするための共通ワークフロー集です。
- 🔗 共通化されたワークフローを提供し、どのプロジェクトからも呼び出すだけで利用可能です。
- ✅ ワークフローの一括メンテナンスにより、プロジェクト開発者はコア機能に集中できます。

## 技術スタック
- フロントエンド:
    - N/A (このリポジトリは主にバックエンド/CI/CDワークフローとツールに焦点を当てています)
- 音楽・オーディオ:
    - N/A (提供された技術スタック情報に記載がありますが、このプロジェクトのコア機能ではありません。おそらく以前のプロジェクト情報が混入しています。)
- 開発ツール:
    - Node.js runtime: JavaScript実行環境を提供し、スクリプトの実行基盤となります。
    - npm scripts: `package.json`に定義されたスクリプトを実行するタスクランナーです。
    - Google Generative AI (@google/generative-ai): AIを活用したドキュメント生成や要約をサポートします。
    - @octokit/rest: GitHub APIと連携し、リポジトリやIssueの操作を自動化します。
- テスト:
    - N/A
- ビルドツール:
    - N/A
- 言語機能:
    - JavaScript: Node.js環境で動作するスクリプトの主要言語です。
- 自動化・CI/CD:
    - GitHub Actions: コード品質チェック、ドキュメント自動生成、多言語翻訳、Issue管理など、様々な開発プロセスを自動化するためのCI/CDプラットフォームです。
        - プロジェクト要約自動生成
        - Issue自動管理
        - README多言語翻訳
        - i18n automation (国際化対応のための自動翻訳ワークフロー)
- 開発標準:
    - N/A

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
- **.github_automation/callgraph/codeql-queries/callgraph.ql**:
    CodeQLを使用してJavaScript/TypeScriptプロジェクトの関数呼び出しグラフを生成するためのクエリ定義ファイルです。
- **.github_automation/callgraph/presets/callgraph.js**:
    生成された関数呼び出しグラフをウェブページ上でインタラクティブに表示・操作するためのJavaScriptコードです。ノードの配置、情報パネルの表示、レイアウト調整などの機能を提供します。
- **.github_automation/callgraph/presets/style.css**:
    関数呼び出しグラフの視覚的なスタイル（色、フォント、ノードの形状など）を定義するCSSファイルです。
- **.github_automation/project_summary/docs/daily-summary-setup.md**:
    日次要約を生成するGitHub Actionsワークフローの設定手順に関するドキュメントです。
- **.github_automation/project_summary/prompts/development-status-prompt.md**:
    AIが開発ステータスに関する要約を生成する際に使用するプロンプトのテンプレートです。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**:
    AIがプロジェクト概要を生成する際に使用するプロンプトのテンプレートです。
- **.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs**:
    プロジェクト要約生成プロセス全体を調整・管理する主要なスクリプトです。
- **.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs**:
    開発ステータスに関する情報を収集・分析し、要約を生成するモジュールです。
- **.github_automation/project_summary/scripts/development/GitUtils.cjs**:
    Gitリポジトリからコミット履歴やブランチ情報などを取得するためのユーティリティ関数群です。
- **.github_automation/project_summary/scripts/development/IssueTracker.cjs**:
    GitHub Issuesから情報を取得・解析し、開発状況に関連するデータを提供するモジュールです。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**:
    GitHub Actionsから呼び出され、プロジェクトの概要や開発ステータスなどの要約を生成するメインスクリプトです。
- **.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs**:
    プロジェクトのソースコードを解析し、ファイル構造、関数、技術スタックなどの情報を抽出するモジュールです。
- **.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs**:
    プロジェクトの分析プロセスを統括し、複数の分析モジュール（CodeAnalyzer, TechStackAnalyzerなど）を調整します。
- **.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs**:
    プロジェクトに関する様々な生データ（ファイル情報、依存関係など）を収集するモジュールです。
- **.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs**:
    収集されたプロジェクトデータを、AIプロンプトや最終的なレポート出力に適した形式に整形するモジュールです。
- **.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs**:
    プロジェクトの全体像に関する要約を生成するモジュールで、AIプロンプトと連携して動作します。
- **.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs**:
    プロジェクトで使用されている技術スタックを特定し、その詳細情報を抽出するモジュールです。
- **.github_automation/project_summary/scripts/shared/BaseGenerator.cjs**:
    各種要約生成モジュールの基底クラスとして、共通のユーティリティや処理ロジックを提供します。
- **.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs**:
    ファイルシステムの操作（ファイルの読み書き、ディレクトリの走査など）に関するユーティリティ関数群です。
- **.github_automation/translate/scripts/translate-readme.cjs**:
    READMEファイルを多言語に自動翻訳するスクリプトです。AI翻訳サービスと連携して動作します。
- **.gitignore**:
    Gitがバージョン管理の対象としないファイルやディレクトリを指定する設定ファイルです。
- **.vscode/settings.json**:
    VS Codeエディタのワークスペース固有の設定を定義するファイルです。
- **LICENSE**:
    プロジェクトのライセンス情報（例: MIT License）を記述したファイルです。
- **README.ja.md**:
    プロジェクトの日本語版概要ドキュメントです。
- **README.md**:
    プロジェクトの英語版（または主要言語版）概要ドキュメントです。
- **generated-docs/callgraph.html**:
    生成された関数呼び出しグラフをブラウザで表示するためのHTMLファイルです。
- **generated-docs/callgraph.js**:
    `callgraph.html`で使用されるJavaScriptコードで、インタラクティブなグラフ表示機能を提供します。
- **generated-docs/development-status-generated-prompt.md**:
    開発ステータス生成のためにAIに与えられた具体的なプロンプトの内容が記録されたファイルです。
- **generated-docs/development-status.md**:
    自動生成された開発ステータスに関する要約ドキュメントです。
- **generated-docs/project-overview.md**:
    自動生成されたプロジェクト概要ドキュメントです。
- **generated-docs/style.css**:
    `generated-docs`内のHTMLファイルで使用されるスタイルシートです。
- **issue-notes/*.md**:
    特定のGitHub Issueに関連するメモや詳細情報を記録したMarkdownファイル群です。
- **package-lock.json**:
    `package.json`に記述された依存関係の正確なバージョンと解決された依存関係ツリーを記録するファイルです。これにより、開発環境間での依存関係の一貫性が保証されます。
- **package.json**:
    Node.jsプロジェクトのメタデータ（名前、バージョン、説明など）、依存関係、および実行可能なスクリプトを定義するファイルです。
- **src/main.js**:
    プロジェクトの最も基本的なエントリーポイントまたはテスト用ファイルで、シンプルな関数定義が含まれています。

## 関数詳細説明
- **escapeHtml** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: HTMLの特殊文字（例: `<`, `>`, `&`）をHTMLエンティティ（例: `&lt;`, `&gt;`, `&amp;`）に変換します。これにより、XSS攻撃を防ぎ、ウェブページ上での安全な文字列表示を可能にします。
    - 引数: `str` (文字列) - エスケープ対象の文字列。
    - 戻り値: エスケープされた文字列。
- **getLayoutConfig** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフの描画ライブラリで使用されるレイアウト設定オブジェクトを生成し、返します。グラフの種類や配置に関するパラメータを定義します。
    - 引数: なし。
    - 戻り値: グラフのレイアウト設定を定義したオブジェクト。
- **placeCentralNode** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフ表示において、特定のノード（通常は中央ノード）を画面の中心など、所定の位置に配置します。
    - 引数: `node` (オブジェクト) - 配置対象のノードオブジェクト。
    - 戻り値: なし。
- **showNodeInfo** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: ユーザーが選択したノードに関する詳細情報を、専用の情報パネルに表示します。
    - 引数: `nodeData` (オブジェクト) - 表示するノードのデータ。
    - 戻り値: なし。
- **showEdgeInfo** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: ユーザーが選択したエッジ（ノード間の接続線）に関する詳細情報を、情報パネルに表示します。
    - 引数: `edgeData` (オブジェクト) - 表示するエッジのデータ。
    - 戻り値: なし。
- **hideInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフの詳細情報を表示するパネルを非表示にします。
    - 引数: なし。
    - 戻り値: なし。
- **showInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフの詳細情報を表示するパネルを表示します。
    - 引数: なし。
    - 戻り値: なし。
- **toggleInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフの詳細情報パネルの表示状態（表示/非表示）を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **generateGitHubURL** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: ファイルパスや行番号などから、GitHubリポジトリ内の特定のコード行へのURLを生成します。
    - 引数: `filePath` (文字列), `lineNumber` (数値, オプション) など。
    - 戻り値: 生成されたGitHub URL文字列。
- **resetLayout** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフの現在のレイアウトを初期状態またはデフォルトのレイアウト設定に戻します。
    - 引数: なし。
    - 戻り値: なし。
- **watchNodeMovementAndFixOverlapsWrap** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: `watchNodeMovementAndFixOverlaps`関数のラッパーで、ノードの移動を監視し、重なりを解決する処理を開始します。
    - 引数: なし。
    - 戻り値: なし。
- **watchNodeMovementAndFixOverlaps** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフ内のノードの移動を継続的に監視し、ノード同士が重ならないように自動的に位置を調整します。
    - 引数: なし。
    - 戻り値: なし。
- **resolveNodeOverlaps** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 重なり合っているグラフノードの位置を調整し、視覚的な明確さを保ちます。物理シミュレーションに基づいて行われることが多いです。
    - 引数: なし。
    - 戻り値: なし。
- **switchLayout** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフの表示レイアウトを、例えば円形レイアウトからグリッドレイアウトへ、といった形で変更します。
    - 引数: `layoutName` (文字列) - 適用するレイアウトの名前。
    - 戻り値: なし。
- **resetNodeStates** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフ内の全てのノードの選択状態、ハイライト表示、その他の視覚的状態を初期値にリセットします。
    - 引数: なし。
    - 戻り値: なし。
- **fitToContent** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフ全体が現在のビューポート（表示領域）内に収まるように、グラフのズームレベルとパン位置を自動調整します。
    - 引数: なし。
    - 戻り値: なし。
- **toggleNodeLabels** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: グラフノードに表示されるラベルの表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **toggleCalleeLocationFilter** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 呼び出し先（callee）の場所に基づいてグラフノードをフィルタリングする機能のオン/オフを切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **replace** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 文字列内の特定のパターンを別の文字列で置換します（JavaScriptの`String.prototype.replace()`メソッドに相当すると推測されます）。
    - 引数: `search` (文字列または正規表現), `replacement` (文字列または関数)。
    - 戻り値: 置換後の新しい文字列。
- **switch** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: JavaScriptの制御構造である`switch`文。複数の実行パスから一つのパスを選択します。
    - 引数: `expression` (任意の型)。
    - 戻り値: N/A (制御構造のため)。
- **function** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: JavaScriptのキーワードで、関数を定義するために使用されます。
    - 引数: N/A (キーワードのため)。
    - 戻り値: N/A (キーワードのため)。
- **max** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 複数の数値の中から最大値を見つけ出します（`Math.max()`関数に相当すると推測されます）。
    - 引数: `num1`, `num2`, ... (数値)。
    - 戻り値: 最大の数値。
- **on** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 特定のイベントが発生したときに実行されるイベントリスナーを登録します（Cytoscape.jsなどのライブラリメソッドまたはjQueryのイベントハンドラに相当すると推測されます）。
    - 引数: `eventName` (文字列), `handlerFunction` (関数)。
    - 戻り値: N/A (イベントリスナー登録のため)。
- **if** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: JavaScriptの制御構造である`if`文。条件が真の場合にコードブロックを実行します。
    - 引数: `condition` (真偽値)。
    - 戻り値: N/A (制御構造のため)。
- **for** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: JavaScriptの制御構造である`for`ループ。指定された回数だけコードブロックを繰り返します。
    - 引数: `initialization`, `condition`, `increment`。
    - 戻り値: N/A (制御構造のため)。
- **ready** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: DOM（Document Object Model）が完全にロードされ、スクリプトが安全に実行できる状態になったときに、指定された関数を実行します（jQueryの`$(document).ready()`などに相当すると推測されます）。
    - 引数: `callbackFunction` (関数)。
    - 戻り値: N/A (イベント登録のため)。
- **addListener** (`.github_automation/callgraph/presets/callgraph.js`):
    - 役割: 特定のイベントにリスナー関数を追加します（ブラウザAPIやNode.jsのEventEmitter、または特定のライブラリのメソッドに相当すると推測されます）。
    - 引数: `eventName` (文字列), `listener` (関数)。
    - 戻り値: N/A (イベントリスナー登録のため)。
- **greet** (`src/main.js`):
    - 役割: 指定された名前に挨拶する文字列を生成します。
    - 引数: `name` (文字列) - 挨拶の対象となる名前。
    - 戻り値: 挨拶メッセージ文字列（例: "Hello, [name]!"）。
- **main** (`src/main.js`):
    - 役割: プログラムのメインエントリポイントとして機能し、基本的なロジックを実行します。
    - 引数: なし。
    - 戻り値: なし。

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
Generated at: 2025-08-30 07:05:03 JST

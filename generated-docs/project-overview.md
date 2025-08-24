Last updated: 2025-08-24

# Project Overview

## プロジェクト概要
- 🚀 このプロジェクトは、GitHub Actionsの共通ワークフローを集約し、複数プロジェクトでの再利用を容易にします。
- 🔗 プロジェクトごとにワークフローを管理する手間を省き、一元化されたワークフローを呼び出すだけで利用可能です。
- ✅ ワークフローの一括メンテナンスを可能にし、各プロジェクトの開発者が本質的な開発に集中できるよう支援します。

## 技術スタック
- フロントエンド: なし (ただし、生成されるドキュメントとしてHTML/CSS/JavaScriptが利用されます。)
- 音楽・オーディオ:
  - Tone.js: Web Audio APIを抽象化し、Webブラウザで豊かな音楽・オーディオ体験を構築するためのJavaScriptライブラリです。
  - Web Audio API: ウェブブラウザで高度なオーディオ処理を行うためのJavaScriptインターフェースです（Tone.js経由で使用）。
  - MML (Music Macro Language): 音楽をテキスト形式で記述するための簡易的な記法であり、パーサーによって音楽データに変換されます。
- 開発ツール:
  - Node.js runtime: JavaScriptコードを実行するための環境です。
  - npm scripts: `package.json`で定義されたスクリプトを実行するタスクランナーとして機能します。
  - Google Generative AI: AIによる文書生成機能を活用し、プロジェクトの要約や状況報告をサポートします。
  - @octokit/rest: GitHub APIと連携し、リポジトリ情報の取得やIssue管理などの操作を可能にします。
- テスト: なし
- ビルドツール: なし
- 言語機能:
  - JavaScript: Node.js runtime上で動作する主要なプログラミング言語です。
- 自動化・CI/CD:
  - GitHub Actions: コードの変更や特定イベントをトリガーに、様々なタスク（テスト、ビルド、デプロイなど）を自動化するCI/CDプラットフォームです。このプロジェクトでは、プロジェクト要約の自動生成、Issueの自動管理、READMEファイルの多言語翻訳、i18n関連の自動化ワークフローなどに利用されています。
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
  📖 16.md
  📖 17.md
  📖 18.md
  📖 19.md
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
- **.github_automation/**: GitHub Actions を利用した自動化スクリプト群を格納するディレクトリです。
  - **callgraph/**: コードの呼び出しグラフを生成・表示するための関連ファイル群です。
    - **codeql-queries/**: CodeQL解析で使用されるクエリファイル群です。`callgraph.ql`は呼び出しグラフを生成するための主要なクエリです。
    - **config/example.json**: 呼び出しグラフ設定のサンプルファイルです。
    - **docs/callgraph.md**: 呼び出しグラフ機能に関する説明ドキュメントです。
    - **presets/callgraph.js**: 呼び出しグラフをWebページで表示・操作するためのJavaScriptコードです。ノード（関数）やエッジ（呼び出し関係）の表示、レイアウト調整、情報パネルの表示・非表示、URL生成など、インタラクティブな機能を提供します。
    - **presets/style.css**: 呼び出しグラフの表示スタイルを定義するCSSファイルです。
    - **scripts/**: 呼び出しグラフの生成、分析、表示に関連する各種スクリプトファイルです。例えば、`analyze-codeql.cjs`はCodeQL解析を実行し、`generate-html-graph.cjs`は結果をHTMLグラフとして生成します。
  - **project_summary/**: プロジェクトの概要や開発状況を自動生成するための関連ファイル群です。
    - **docs/daily-summary-setup.md**: 日次サマリーの設定手順に関するドキュメントです。
    - **prompts/**: AIが概要を生成する際に使用するプロンプト定義ファイル群です。`development-status-prompt.md`や`project-overview-prompt.md`が含まれます。
    - **scripts/**: プロジェクト概要生成のロジックを含むスクリプトファイル群です。`ProjectSummaryCoordinator.cjs`が全体を調整し、`overview/`や`development/`の各スクリプトが特定のデータ収集や生成を担当します。
  - **translate/**: READMEなどのドキュメントを多言語翻訳するための関連ファイル群です。
    - **docs/TRANSLATION_SETUP.md**: 翻訳機能の設定手順に関するドキュメントです。
    - **scripts/translate-readme.cjs**: READMEファイルを自動翻訳するスクリプトです。
- **.gitignore**: Gitのバージョン管理から除外するファイルやディレクトリを指定します。
- **LICENSE**: プロジェクトのライセンス情報が記述されています。
- **README.ja.md**: プロジェクトの概要や使い方を日本語で説明するメインのドキュメントです。
- **README.md**: プロジェクトの概要や使い方を英語で説明するメインのドキュメントです。
- **generated-docs/**: GitHub Actionsによって自動生成されたドキュメントや成果物を格納するディレクトリです。
  - **callgraph.html**: 生成された呼び出しグラフを表示するためのHTMLファイルです。
  - **callgraph.js**: `presets/callgraph.js` と同じ内容で、生成されたドキュメントとして提供される呼び出しグラフ表示用JavaScriptファイルです。
  - **development-status.md**: 生成された開発状況サマリーです。
  - **project-overview.md**: 生成されたプロジェクト概要です。
  - **style.css**: `presets/style.css` と同じ内容で、生成されたドキュメントのスタイルを定義するCSSファイルです。
- **issue-notes/**: GitHub Issuesに関連するメモや詳細情報をMarkdown形式で格納するディレクトリです。各ファイルはIssue番号に対応しています。
- **package-lock.json**: `package.json`に基づいてインストールされたnpmパッケージの正確なバージョンと依存関係を記録し、ビルドの再現性を保証します。
- **package.json**: プロジェクトのメタデータ（名前、バージョン、依存関係、スクリプトなど）を定義するファイルです。
- **src/main.js**: 簡潔なJavaScriptファイルで、基本的な挨拶機能 (`greet` 関数) とメイン実行ロジック (`main` 関数) を含みます。プロジェクトの主要な機能ではなく、ユーティリティやテスト目的で使われている可能性があります。

## 関数詳細説明
- **escapeHtml(text)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: HTMLエンティティをエスケープし、入力された文字列を安全にWebページに表示できるように変換します。
  - 引数: `text` (文字列) - エスケープ対象の文字列。
  - 戻り値: エスケープ処理が施された文字列。
- **getLayoutConfig()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: 呼び出しグラフのレイアウト設定を定義し、返します。
  - 引数: なし。
  - 戻り値: グラフのレイアウト設定を含むオブジェクト。
- **placeCentralNode(cy, node, x, y)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: 指定されたグラフインスタンス上で、特定のノードを指定された座標に中央配置します。
  - 引数: `cy` (グラフインスタンス), `node` (配置するノードオブジェクト), `x` (X座標), `y` (Y座標)。
  - 戻り値: なし。
- **showNodeInfo(node)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: 選択されたグラフノード（関数など）に関する詳細情報を情報パネルに表示します。
  - 引数: `node` (情報を表示するノードオブジェクト)。
  - 戻り値: なし。
- **showEdgeInfo(edge)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: 選択されたグラフのエッジ（呼び出し関係など）に関する詳細情報を情報パネルに表示します。
  - 引数: `edge` (情報を表示するエッジオブジェクト)。
  - 戻り値: なし。
- **hideInfoPanel()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: 現在表示されている情報パネルを非表示にします。
  - 引数: なし。
  - 戻り値: なし。
- **showInfoPanel()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: 情報パネルを表示します。
  - 引数: なし。
  - 戻り値: なし。
- **toggleInfoPanel()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: 情報パネルの表示状態を切り替えます（表示されていれば非表示に、非表示であれば表示に）。
  - 引数: なし。
  - 戻り値: なし。
- **generateGitHubURL(filePath, startLine, endLine)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: ファイルパスと行番号に基づき、GitHub上のソースコードへのURLを生成します。
  - 引数: `filePath` (ファイルパス), `startLine` (開始行), `endLine` (終了行)。
  - 戻り値: 生成されたGitHub URL文字列。
- **resetLayout(cy)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: グラフのレイアウトを初期状態にリセットします。
  - 引数: `cy` (グラフインスタンス)。
  - 戻り値: なし。
- **watchNodeMovementAndFixOverlapsWrap(cy, resolveDelay, resolutionRate)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: ノードの動きを監視し、重なりを解決するためのラッパー関数です。
  - 引数: `cy` (グラフインスタンス), `resolveDelay` (解決遅延), `resolutionRate` (解決レート)。
  - 戻り値: なし。
- **watchNodeMovementAndFixOverlaps(cy, resolveDelay, resolutionRate)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: ノードの移動中に他のノードとの重なりを検出し、自動的に修正します。
  - 引数: `cy` (グラフインスタンス), `resolveDelay` (解決遅延), `resolutionRate` (解決レート)。
  - 戻り値: なし。
- **resolveNodeOverlaps(cy)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: グラフ内のノードの重なりを解消し、より見やすい配置に調整します。
  - 引数: `cy` (グラフインスタンス)。
  - 戻り値: なし。
- **switchLayout(layoutName)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: グラフの表示レイアウトを、指定されたレイアウト名に基づいて切り替えます。
  - 引数: `layoutName` (切り替えるレイアウトの名前)。
  - 戻り値: なし。
- **resetNodeStates(cy)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: グラフ内のすべてのノードの状態（選択状態、ハイライトなど）をリセットします。
  - 引数: `cy` (グラフインスタンス)。
  - 戻り値: なし。
- **fitToContent(cy)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: グラフの内容がすべて表示されるように、ズームレベルと位置を調整します。
  - 引数: `cy` (グラフインスタンス)。
  - 戻り値: なし。
- **toggleNodeLabels(cy)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: グラフノードのラベルの表示・非表示を切り替えます。
  - 引数: `cy` (グラフインスタンス)。
  - 戻り値: なし。
- **toggleCalleeLocationFilter()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: 呼び出し先の場所によるフィルタリング機能の有効・無効を切り替えます。
  - 引数: なし。
  - 戻り値: なし。
- **replace, switch, function, max, on, if, for, ready, addListener** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
  - 役割: これらはJavaScriptの基本的な言語構造（`if`, `for`, `switch`, `function`）、組み込みオブジェクトのメソッド（`max`, `replace`）、およびDOM操作やイベント処理に関連するメソッド（`on`, `ready`, `addListener`）です。`.github_automation/callgraph/presets/callgraph.js`内で、グラフの動的な描画、ユーザーイベントの処理、条件分岐、繰り返し処理、イベントリスナーの登録などに広く利用され、グラフのインタラクティブな機能を実現しています。これらは個別のプロジェクト定義関数というよりは、JavaScriptコードのロジックを構成する要素として機能します。
  - 引数: 利用される文脈により異なります（特定の引数や戻り値を持つ個別の関数ではありません）。
  - 戻り値: 利用される文脈により異なります。
- **greet()** (`src/main.js`):
  - 役割: コンソールに「Hello, GitHub Actions tmp!」という挨拶メッセージを出力します。
  - 引数: なし。
  - 戻り値: なし。
- **main()** (`src/main.js`):
  - 役割: プログラムのエントリポイントであり、`greet` 関数を呼び出して実行を開始します。
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
Generated at: 2025-08-24 09:47:35 JST

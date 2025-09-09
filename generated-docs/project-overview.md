Last updated: 2025-09-10

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: HTML, CSS, JavaScript (ブラウザ環境) - 主にCodeQLによる関数呼び出しグラフの可視化インターフェース（`callgraph.html`, `callgraph.js`, `style.css`）の構築に使用されます。動的なグラフ描画やユーザーインタラクションを提供します。
- 音楽・オーディオ:
    - Tone.js: Web Audio APIを基盤としたウェブベースの音楽アプリケーション向けフレームワークです。
    - Web Audio API: ウェブブラウザで高度な音声処理を行うためのAPIです（Tone.jsを介して利用）。
    - MML (Music Macro Language): 音楽をテキスト形式で記述し、解析するための簡易言語パーサーです。
- 開発ツール:
    - Node.js runtime: プロジェクトのJavaScriptスクリプトを実行するためのサーバーサイドJavaScript実行環境です。
    - npm scripts: `package.json`に定義されたタスク（例: スクリプトの実行、テスト）を管理・実行するためのツールです。
    - Google Generative AI (@google/generative-ai): Googleの生成AIサービスと連携し、プロジェクトの自動要約やドキュメント生成などのAI機能を提供するためのライブラリです。
    - @octokit/rest: GitHub APIと連携し、リポジトリ情報の取得、Issueの管理、ワークフローの操作などを行うためのライブラリです。
- テスト:
    - CodeQL: GitHub Actionsと連携し、コードのセキュリティ脆弱性やバグを検出するための静的解析エンジンです。本プロジェクトでは関数呼び出しグラフの生成にも利用されています。
- ビルドツール: 特に明記されたビルドツールはありませんが、Node.js環境とnpm scriptsが一般的なタスク実行に使用されます。
- 言語機能:
    - JavaScript (Node.js): プロジェクトの主要な開発言語であり、特にCommonJSモジュール形式 (`.cjs`) がスクリプトで広く採用されています。
- 自動化・CI/CD:
    - GitHub Actions: コードのビルド、テスト、デプロイ、ドキュメント生成など、プロジェクトの様々なワークフローを自動化するためのCI/CDプラットフォームです。以下の8種類の共通ワークフローが含まれます。
        - プロジェクト要約自動生成: AI（Google Generative AI）を活用し、プロジェクトの概要や開発状況を自動生成します。
        - Issue自動管理: GitHub Issuesの作成、更新、クローズなどを自動化し、Issue管理を効率化します。
        - README多言語翻訳: READMEファイルを複数の言語に自動翻訳し、多言語対応をサポートします。
        - i18n automation: 国際化対応（i18n）のための自動翻訳ワークフローで、コンテンツの多言語化を支援します。
- 開発標準:
    - CodeQL: コードの品質を維持し、潜在的な脆弱性やバグを早期に発見するための静的解析基準として利用されています。

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
  📖 23.md
  📖 24.md
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
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLを利用して、ソースコード内の関数間の呼び出し関係を分析するためのクエリファイルです。
- **.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係とバージョンをロックするためのファイルです。
- **.github_automation/callgraph/codeql-queries/qlpack.yml**: CodeQLパックのメタデータ（名前、バージョン、依存関係など）を定義するファイルです。
- **.github_automation/callgraph/config/example.json**: CodeQL呼び出しグラフ生成に関する設定の例が記述されたJSONファイルです。
- **.github_automation/callgraph/docs/callgraph.md**: 呼び出しグラフ機能の使用方法や詳細を説明するドキュメントです。
- **.github_automation/callgraph/presets/callgraph.js**: 生成されたHTML形式の呼び出しグラフに対して、動的な表示やインタラクション（ノードの操作、情報の表示など）を提供するJavaScriptコードです。
- **.github_automation/callgraph/presets/style.css**: 呼び出しグラフの表示に使用されるCSSスタイルを定義するファイルです。
- **.github_automation/callgraph/scripts/analyze-codeql.cjs**: CodeQL解析を実行し、プロジェクトのコードからデータを抽出するためのスクリプトです。
- **.github_automation/callgraph/scripts/callgraph-utils.cjs**: 呼び出しグラフ関連の汎用的なユーティリティ関数を集めたスクリプトです。
- **.github_automation/callgraph/scripts/check-codeql-exists.cjs**: CodeQL実行環境が利用可能かを確認するためのスクリプトです。
- **.github_automation/callgraph/scripts/check-commits.cjs**: Gitのコミット履歴を分析するためのスクリプトです。
- **.github_automation/callgraph/scripts/check-node-version.cjs**: Node.jsのバージョンが要件を満たしているかを確認するためのスクリプトです。
- **.github_automation/callgraph/scripts/common-utils.cjs**: プロジェクト全体で共通して使用されるユーティリティ関数をまとめたスクリプトです。
- **.github_automation/callgraph/scripts/copy-commit-results.cjs**: 特定のコミットに関連する解析結果をコピーするためのスクリプトです。
- **.github_automation/callgraph/scripts/extract-sarif-info.cjs**: CodeQLの出力形式であるSARIFファイルから必要な情報を抽出するためのスクリプトです。
- **.github_automation/callgraph/scripts/find-process-results.cjs**: 特定のプロセスに関連する解析結果を検索するためのスクリプトです。
- **.github_automation/callgraph/scripts/generate-html-graph.cjs**: CodeQLの解析結果を基に、HTML形式の関数呼び出しグラフを生成するためのメインスクリプトです。
- **.github_automation/callgraph/scripts/generateHTML.cjs**: HTMLコンテンツを生成するための汎用ユーティリティスクリプトです。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: 日次開発状況要約の設定方法を説明するドキュメントです。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: AIが開発状況を生成する際に使用するプロンプトのテンプレートです。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: AIがプロジェクト概要を生成する際に使用するプロンプトのテンプレートです。
- **.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs**: プロジェクト要約生成プロセスの全体を調整し、各ステップの実行を管理するスクリプトです。
- **.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs**: プロジェクトの現在の開発状況を分析し、レポートを生成するスクリプトです。
- **.github_automation/project_summary/scripts/development/GitUtils.cjs**: Gitリポジトリ操作（コミット履歴の取得など）のためのユーティリティ関数を提供するスクリプトです。
- **.github_automation/project_summary/scripts/development/IssueTracker.cjs**: GitHub Issueの情報を取得・解析し、開発状況レポートに組み込むためのスクリプトです。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: プロジェクトの総合的な要約を生成するためのメインスクリプトです。
- **.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs**: プロジェクトのコードベースを解析し、構造や統計情報を収集するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs**: プロジェクト分析プロセスの各フェーズ（データ収集、解析、整形）を統括するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs**: プロジェクトのファイル、ディレクトリ、依存関係などの生データを収集するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs**: 収集したプロジェクトデータを、要約生成に適した形式に整形するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs**: 整理されたプロジェクトデータとプロンプトを基に、AIを利用してプロジェクト概要を生成するスクリプトです。
- **.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs**: プロジェクトで使用されている技術スタックを自動的に識別・分析するスクリプトです。
- **.github_automation/project_summary/scripts/shared/BaseGenerator.cjs**: 各種ジェネレーター（要約、レポートなど）の共通の基底クラスやインターフェースを定義するスクリプトです。
- **.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs**: ファイルシステムの操作（ファイルの読み書き、ディレクトリの作成など）に関するユーティリティ関数を提供するスクリプトです。
- **.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs**: プロジェクト内のファイルパスの解決やファイル内容の取得など、プロジェクトファイルに関連するユーティリティスクリプトです。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: READMEの多言語翻訳機能の設定方法を説明するドキュメントです。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルを指定された言語に自動翻訳するためのスクリプトです。
- **.gitignore**: Gitバージョン管理システムが無視すべきファイルやディレクトリのパターンを定義します。
- **.vscode/settings.json**: Visual Studio Codeエディタのワークスペース固有の設定を定義するファイルです。
- **LICENSE**: このプロジェクトのソフトウェアライセンス情報が記述されています。
- **README.ja.md**: プロジェクトの概要、目的、使用方法などを日本語で説明するメインドキュメントです。
- **README.md**: プロジェクトの概要、目的、使用方法などを英語で説明するメインドキュメントです。
- **generated-docs/callgraph.html**: CodeQLによって生成された関数呼び出しグラフの対話型Webページです。
- **generated-docs/callgraph.js**: `callgraph.html`の動作を制御するJavaScriptコードで、グラフの描画やインタラクションを担当します。
- **generated-docs/development-status-generated-prompt.md**: AIによって生成された開発状況レポート用のプロンプトの内容が一時的に保存されるファイルです。
- **generated-docs/development-status.md**: AIによって生成されたプロジェクトの開発状況レポートです。
- **generated-docs/project-overview.md**: AIによって生成されたプロジェクトの概要ドキュメントです。
- **generated-docs/style.css**: `callgraph.html`やその他の生成されたドキュメントのスタイルを定義するCSSファイルです。
- **issue-notes/**: GitHub Issuesに関する詳細なメモや補足情報を格納するためのディレクトリです。
- **package-lock.json**: `package.json`で定義された依存関係の正確なバージョンと依存ツリーを記録し、ビルドの一貫性を保証します。
- **package.json**: プロジェクトのメタデータ（名前、バージョン、説明など）、スクリプト、依存関係を定義するファイルです。
- **src/main.js**: プロジェクトの基本的なエントリーポイントまたはサンプルコードであり、`greet`や`main`などの関数が定義されています。

## 関数詳細説明
- **escapeHtml(text)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: HTMLの特殊文字（<, >, &, ", 'など）を対応するHTMLエンティティに変換し、クロスサイトスクリプティング (XSS) 攻撃を防ぎます。
    - 引数: `text` (文字列) - エスケープする元のテキスト。
    - 戻り値: エスケープされた文字列。
- **getLayoutConfig()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフのレイアウトに関する設定オブジェクトを取得します。
    - 引数: なし。
    - 戻り値: グラフレイアウトの設定を含むオブジェクト。
- **placeCentralNode(cy, node)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 指定されたグラフ (cy) 上で、特定のノードを中央に配置します。
    - 引数: `cy` (Cytoscape.jsインスタンス), `node` (グラフのノードオブジェクト)。
    - 戻り値: なし。
- **showNodeInfo(node)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 特定のノード（関数など）に関する詳細情報を、情報パネルに表示します。
    - 引数: `node` (グラフのノードオブジェクト)。
    - 戻り値: なし。
- **showEdgeInfo(edge)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 特定のエッジ（関数間の呼び出し関係）に関する詳細情報を、情報パネルに表示します。
    - 引数: `edge` (グラフのエッジオブジェクト)。
    - 戻り値: なし。
- **hideInfoPanel()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 画面上の情報表示パネルを非表示にします。
    - 引数: なし。
    - 戻り値: なし。
- **showInfoPanel()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 画面上の情報表示パネルを表示します。
    - 引数: なし。
    - 戻り値: なし。
- **toggleInfoPanel()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 情報表示パネルの表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **generateGitHubURL(filePath, startLine, endLine)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 指定されたファイルパスと行番号に基づき、GitHub上のソースコードへの直接リンクを生成します。
    - 引数: `filePath` (文字列), `startLine` (数値), `endLine` (数値)。
    - 戻り値: GitHubのURL文字列。
- **resetLayout(cy)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフのレイアウトを初期状態にリセットし、ノードの配置を再計算します。
    - 引数: `cy` (Cytoscape.jsインスタンス)。
    - 戻り値: なし。
- **watchNodeMovementAndFixOverlapsWrap()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: ノードの移動を監視し、重なりを修正するロジックのラッパー関数です。
    - 引数: なし。
    - 戻り値: なし。
- **watchNodeMovementAndFixOverlaps(cy)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ内のノードの移動イベントを監視し、移動後に他のノードとの重なりが生じた場合に、自動的にその重なりを解消します。
    - 引数: `cy` (Cytoscape.jsインスタンス)。
    - 戻り値: なし。
- **resolveNodeOverlaps(cy)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ上のノードが互いに重なっている状態を検出し、視覚的に分かりやすく配置し直すことで重なりを解消します。
    - 引数: `cy` (Cytoscape.jsインスタンス)。
    - 戻り値: なし。
- **switchLayout(cy, layoutName)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフの表示レイアウトを、指定された`layoutName`に基づいて切り替えます（例: 円形レイアウト、階層型レイアウト）。
    - 引数: `cy` (Cytoscape.jsインスタンス), `layoutName` (文字列) - レイアウトの種類。
    - 戻り値: なし。
- **resetNodeStates(cy)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ内の全てのノードの選択状態、ハイライト状態などの視覚的な状態を初期値に戻します。
    - 引数: `cy` (Cytoscape.jsインスタンス)。
    - 戻り値: なし。
- **fitToContent(cy)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ全体が現在のビューポートに収まるようにズームレベルとパン位置を自動調整します。
    - 引数: `cy` (Cytoscape.jsインスタンス)。
    - 戻り値: なし。
- **toggleNodeLabels(cy, show)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ内のノードに表示されるラベルの表示/非表示を切り替えます。
    - 引数: `cy` (Cytoscape.jsインスタンス), `show` (真偽値) - trueで表示、falseで非表示。
    - 戻り値: なし。
- **toggleCalleeLocationFilter(cy)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 呼び出し先（callee）の場所に基づいてグラフ要素をフィルタリングする機能を切り替えます。
    - 引数: `cy` (Cytoscape.jsインスタンス)。
    - 戻り値: なし。
- **replace()**, **switch()**, **function()**, **max()**, **on()**, **if()**, **for()**, **ready()**, **addListener()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: これらはJavaScriptのキーワード、組み込みメソッド、または一般的なパターン（イベントハンドラ登録など）の一部として記述されています。具体的な関数としての引数/戻り値は、文脈によって多様ですが、`replace`は文字列置換、`max`は最大値取得、`on`/`ready`/`addListener`はイベントリスナーの登録、`if`/`for`/`switch`は制御フロー構造として機能します。
- **greet(name)** (`src/main.js`)
    - 役割: 引数として受け取った名前に挨拶文を生成して出力します。
    - 引数: `name` (文字列) - 挨拶の対象となる名前。
    - 戻り値: なし（コンソールに出力）。
- **main()** (`src/main.js`)
    - 役割: プログラムの主要な実行フローを定義するエントリーポイント関数です。他の関数を呼び出してアプリケーションのコアロジックを実行します。
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
Generated at: 2025-09-10 07:06:00 JST

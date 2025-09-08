Last updated: 2025-09-09

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: このプロジェクトでは特定のフロントエンドフレームワークは使用されていません。
- 音楽・オーディオ:
    - Tone.js: Web Audio APIをより直感的に操作できるJavaScriptライブラリ。
    - Web Audio API: ブラウザ上で高度な音声処理を行うための標準API（Tone.jsを介して利用）。
    - MML (Music Macro Language): 音楽をテキスト形式で記述・解析するための言語パーサー。
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するための環境。
    - npm scripts: プロジェクトのタスク（ビルド、テスト、スクリプト実行など）を自動化するための機能。
    - Google Generative AI: AIによる文章生成や要約をサポートするために使用されるAIサービス。
    - @octokit/rest: GitHub REST APIと連携し、GitHub上の操作をプログラムから行うためのJavaScriptライブラリ。
- テスト: このプロジェクトでは特定のテスト関連技術は明示されていません。
- ビルドツール: このプロジェクトでは特定のビルドツールは明示されていませんが、npm scriptsがその一部の役割を担います。
- 言語機能: このプロジェクトはNode.js上で動作するJavaScriptを使用しており、特定の言語機能に特化した説明は提供されていません。
- 自動化・CI/CD:
    - GitHub Actions: コードのビルド、テスト、デプロイ、ドキュメント生成などのワークフローを自動化するサービス。複数のプロジェクトで再利用可能な共通ワークフロー集として機能します。
- 開発標準: このプロジェクトでは特定のコード品質ツールや開発標準は明示されていません。

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
- **`.github_automation/`**: GitHub Actionsの自動化ワークフローを構成するためのスクリプト、設定、およびドキュメントを格納する主要ディレクトリです。
    - **`callgraph/`**: CodeQLを使用してコードの関数呼び出しグラフを生成し、視覚化するためのツール群です。
        - **`codeql-queries/callgraph.ql`**: CodeQLによってJavaScript/TypeScriptコードベースから関数呼び出し関係を抽出するためのクエリ定義ファイル。
        - **`config/example.json`**: 呼び出しグラフの生成や表示に関する設定例を提供するJSONファイル。
        - **`docs/callgraph.md`**: 関数呼び出しグラフ生成ツールの使用方法や設定に関する説明ドキュメント。
        - **`presets/callgraph.js`**: 生成された関数呼び出しグラフのインタラクティブな表示（レイアウト、イベント処理、UI操作など）を制御するJavaScriptコード。
        - **`presets/style.css`**: 関数呼び出しグラフの視覚的なスタイル（色、フォント、ノードの形状など）を定義するCSSファイル。
        - **`scripts/*.cjs`**: CodeQL分析の実行、結果の解析、グラフデータ処理、HTML生成など、呼び出しグラフ生成プロセスを自動化するための様々なユーティリティスクリプト。
    - **`project_summary/`**: AIを活用してプロジェクトの概要や開発状況レポートを自動生成するためのツール群です。
        - **`docs/daily-summary-setup.md`**: AIによる日次開発状況サマリー生成の設定方法に関するドキュメント。
        - **`prompts/*.md`**: Google Generative AIに与えるプロンプトのテンプレートファイル。`development-status-prompt.md`は開発状況レポート用、`project-overview-prompt.md`はプロジェクト概要生成用。
        - **`scripts/generate-project-summary.cjs`**: プロジェクトサマリー生成プロセス全体のオーケストレーションを行うメインスクリプト。
        - **`scripts/development/`**: 開発状況レポート生成に関連するモジュール。
            - **`DevelopmentStatusGenerator.cjs`**: 開発状況レポートを生成するロジックを実装。
            - **`GitUtils.cjs`**: Gitリポジトリからコミット履歴や変更情報などを取得するためのユーティリティ。
            - **`IssueTracker.cjs`**: GitHub Issuesに関する情報を取得・処理するためのモジュール。
        - **`scripts/overview/`**: プロジェクト概要生成に関連するモジュール。
            - **`CodeAnalyzer.cjs`**: コードベースを分析し、言語、フレームワーク、依存関係などの技術スタック情報を抽出。
            - **`ProjectAnalysisOrchestrator.cjs`**: プロジェクト分析の各ステップ（データ収集、解析、生成）を調整。
            - **`ProjectDataCollector.cjs`**: プロジェクトに関する様々なデータ（ファイル構造、コミットなど）を収集。
            - **`ProjectDataFormatter.cjs`**: 収集したデータをAIが処理しやすい形式に整形。
            - **`ProjectOverviewGenerator.cjs`**: AIを用いて最終的なプロジェクト概要を生成。
            - **`TechStackAnalyzer.cjs`**: プロジェクトで使用されている技術スタックを詳細に分析。
        - **`scripts/shared/`**: `project_summary`内の複数のスクリプトで共有される共通ユーティリティや基底クラス。
            - **`BaseGenerator.cjs`**: ジェネレーターの共通処理やインターフェースを定義する基底クラス。
            - **`FileSystemUtils.cjs`**: ファイルシステム操作（ファイルの読み書き、ディレクトリ作成など）のためのユーティリティ。
    - **`translate/`**: READMEなどのドキュメントを多言語に自動翻訳するためのツール群です。
        - **`docs/TRANSLATION_SETUP.md`**: 自動翻訳ワークフローの設定と利用方法に関するドキュメント。
        - **`scripts/translate-readme.cjs`**: READMEファイルを指定された言語に翻訳するスクリプト。
- **`.gitignore`**: Gitがバージョン管理の対象から除外するファイルやディレクトリのパターンを定義する設定ファイルです。
- **`.vscode/settings.json`**: Visual Studio Codeエディタのワークスペース固有の設定を定義するファイル。例えば、フォーマットやリンターの設定などが含まれます。
- **`LICENSE`**: このプロジェクトのソフトウェアライセンス情報が記述されたファイルです。
- **`README.ja.md`**: プロジェクトの目的、機能、使用方法などが日本語で記述された主要なドキュメント。
- **`README.md`**: プロジェクトの目的、機能、使用方法などが英語で記述された主要なドキュメント。
- **`generated-docs/`**: GitHub Actionsによって自動生成されたドキュメントや視覚化結果が出力されるディレクトリです。
    - **`callgraph.html`**: 生成された関数呼び出しグラフをブラウザで表示するためのHTMLファイル。
    - **`callgraph.js`**: `presets/callgraph.js`と同じ内容で、生成された`callgraph.html`に埋め込まれるか参照されるJavaScriptファイル。
    - **`development-status-generated-prompt.md`**: AIによる開発状況レポート生成のために使用された、最終的なプロンプトの内容を記録したファイル。
    - **`development-status.md`**: AIによって自動生成された最新の開発状況レポート。
    - **`project-overview.md`**: AIによって自動生成されたプロジェクトの概要ドキュメント。
    - **`style.css`**: `presets/style.css`と同じ内容で、生成されたHTMLファイルに適用されるCSSファイル。
- **`issue-notes/`**: GitHub Issuesに関連する補足情報や詳細なメモを格納するためのMarkdownファイルの集合体。各ファイルは特定のIssue番号に対応している可能性があります。
- **`package-lock.json`**: `package.json`で定義された依存関係とその依存関係の依存関係（推移的依存関係）を含む、厳密な依存関係ツリーとバージョンを記録するファイルです。これにより、開発環境間での依存関係の一貫性を保証します。
- **`package.json`**: Node.jsプロジェクトのメタデータ（プロジェクト名、バージョン、説明など）、スクリプトコマンド、プロジェクトが依存するパッケージのリストを定義するファイルです。
- **`src/main.js`**: このプロジェクトの基本的なJavaScriptコードの例や、テスト用のシンプルな機能を提供するファイル。

## 関数詳細説明
- **`escapeHtml`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: HTMLの特殊文字をエスケープし、セキュリティ脆弱性（XSSなど）を防ぐためのユーティリティ関数。
    - 引数: `text` (string) - エスケープ対象の文字列。
    - 戻り値: `string` - HTMLエンティティに変換された文字列。
    - 機能: `<`を`&lt;`、`>`を`&gt;`、`&`を`&amp;`などのように変換します。
- **`getLayoutConfig`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ描画ライブラリ（CytoScape.jsなど）で使用するレイアウト設定を取得します。
    - 引数: なし。
    - 戻り値: `object` - レイアウトアルゴリズム、ノード間隔、アニメーションなどの設定を含むオブジェクト。
    - 機能: グラフのノードやエッジの配置に関するパラメータを提供し、異なるレイアウトの切り替えに利用されます。
- **`placeCentralNode`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフの中心となるノードを特定の位置に配置します。
    - 引数: なし (おそらくグラフデータ内の特定のノードを指す)。
    - 戻り値: なし。
    - 機能: グラフの表示を特定のノードを中心として開始させたり、ユーザーの注目を集めたりする際に使用されます。
- **`showNodeInfo`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ上のノード（例: 関数）の詳細情報をUIパネルに表示します。
    - 引数: `node` (object) - 情報表示対象のノードオブジェクト。
    - 戻り値: なし。
    - 機能: ノードがクリックまたはホバーされた際に、そのノードの名称、ファイルパス、関連するGitHub URLなどの詳細情報をユーザーに提供します。
- **`showEdgeInfo`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ上のエッジ（例: 関数呼び出し）の詳細情報をUIパネルに表示します。
    - 引数: `edge` (object) - 情報表示対象のエッジオブジェクト。
    - 戻り値: なし。
    - 機能: エッジがクリックまたはホバーされた際に、そのエッジが表す関係（例: どの関数がどの関数を呼び出しているか）に関する詳細情報を表示します。
- **`hideInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 詳細情報を表示するパネルを非表示にします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザーが情報パネルを閉じる際や、他の情報が表示される際に、現在のパネルを隠します。
- **`showInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 詳細情報を表示するパネルを表示します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: `showNodeInfo`や`showEdgeInfo`が呼び出された際に、情報を表示するためのパネルを可視化します。
- **`toggleInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 詳細情報パネルの表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザーの操作に応じて、情報パネルの表示状態をトグルします。
- **`generateGitHubURL`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフのノードやエッジに関連するGitHubリソース（ファイル、行、コミットなど）へのURLを生成します。
    - 引数: `params` (object) - URL生成に必要な情報（例: リポジトリ、ファイルパス、行番号）。
    - 戻り値: `string` - 生成されたGitHubのURL。
    - 機能: コードの特定の場所へ直接移動できるリンクを提供し、グラフからソースコードへのナビゲーションを容易にします。
- **`resetLayout`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフのノード配置やズームレベルを初期状態にリセットします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザーがグラフを操作した後に、元の見やすい状態に戻すための機能を提供します。
- **`watchNodeMovementAndFixOverlapsWrap`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: ノードの移動を監視し、その後にノードの重なりを修正する処理をラップします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ノードのインタラクティブな移動中に、他のノードとの重なりを防ぎ、視認性を維持するための高レベルな調整処理を起動します。
- **`watchNodeMovementAndFixOverlaps`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ内のノードが移動した際に、ノード間の重なりを検出し、解消するための具体的な処理を行います。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: 動的なグラフレイアウトにおいて、ノードが互いに重なって情報が見えにくくなるのを防ぐための自動調整ロジックです。
- **`resolveNodeOverlaps`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフのノード間に発生した重なりを解消するためのアルゴリズムを実行します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: 複数のノードが同じ視覚領域を占めてしまう状況を、ノードをわずかに移動させることで解決し、グラフの可読性を高めます。
- **`switchLayout`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフの表示レイアウトアルゴリズムを変更します。
    - 引数: `layoutName` (string) - 新しく適用するレイアウトの識別子（例: 'cola', 'dagre'など）。
    - 戻り値: なし。
    - 機能: ユーザーがグラフのノード配置方法を動的に切り替えることを可能にし、異なる視点からグラフ構造を分析できるようにします。
- **`resetNodeStates`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ内の全てのノードの選択状態、ハイライト、フィルタリングなどの視覚的な状態を初期値にリセットします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: 特定の操作後にグラフの表示状態をクリーンアップし、ニュートラルなビューに戻します。
- **`fitToContent`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ全体が現在のビューポートに収まるようにズームレベルとパン位置を調整します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフの規模に関わらず、全ての要素が画面内に表示されるように自動的に最適化します。
- **`toggleNodeLabels`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフノードに表示されるラベル（通常は関数名など）の表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフが混雑している場合などにラベルを非表示にして全体像を把握しやすくしたり、詳細を確認する際に表示したりします。
- **`toggleCalleeLocationFilter`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 呼び出し先（callee）の場所に基づいてグラフ要素をフィルタリングする機能を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: 特定のファイルやモジュール内の関数呼び出しに焦点を当てたい場合に、関連のない要素を非表示にするためのフィルターを適用/解除します。
- **`replace`, `switch`, `function`, `max`, `on`, `if`, `for`, `ready`, `addListener`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: これらはJavaScriptの組み込み機能、キーワード、または特定のイベント処理フレームワーク（CytoScape.jsなど）のメソッドやイベントリスナーの登録に関連するものです。特定の独立した関数というよりは、コード内で利用される構文やAPIの一部として機能します。
    - 引数・戻り値・機能: 文脈によって異なりますが、一般的には文字列置換、条件分岐、ループ処理、最大値の取得、イベントハンドラの登録、DOMが準備完了時の処理、イベントリスナーの追加などを担当します。
- **`greet`** (`src/main.js`)
    - 役割: 指定された名前に挨拶メッセージを返すシンプルな関数。
    - 引数: `name` (string) - 挨拶の対象となる名前。
    - 戻り値: `string` - "Hello, [name]!" 形式の挨拶文字列。
    - 機能: 入力された名前に応じて、定型文の挨拶を生成します。
- **`main`** (`src/main.js`)
    - 役割: プログラムのエントリポイント。簡単な処理を実行するメイン関数。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: `greet`関数を呼び出し、その結果をコンソールに出力することで、プログラムの基本的な動作を示します。

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
Generated at: 2025-09-09 07:05:43 JST

Last updated: 2025-08-16

# Project Overview

## プロジェクト概要
- GitHub Actionsの共通ワークフローを複数プロジェクトで再利用可能にするリポジトリです。
- プロジェクトごとに個別にActionsを管理する手間を省き、中央集約されたワークフローを呼び出すだけで利用できます。
- 共通ワークフローの一括メンテナンスにより、各プロジェクトは自身の開発に集中できる環境を提供します。

## 技術スタック
- フロントエンド: 該当する主要な技術スタックは明示されていません。
- 音楽・オーディオ:
    - Tone.js: Web Audio APIをベースにしたJavaScriptライブラリで、Webブラウザ上で音楽やオーディオアプリケーションを構築するために使用されます。
    - MML (Music Macro Language): 音楽記法を記述するための言語で、主にオーディオコンテンツの構造化に使用されます。
    - Web Audio API: ブラウザに組み込まれたオーディオ処理のためのAPIで、Tone.jsを通じて利用されます。
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するためのランタイム環境です。
    - npm scripts: Node.jsプロジェクトでタスク自動化（スクリプト実行）のために使用されます。
    - Google Generative AI: AIによる文書生成を支援するために統合されています。
    - @octokit/rest: GitHub APIと連携し、GitHub上の操作をプログラムから行うために使用されます。
- テスト: 該当する主要な技術スタックは明示されていません。
- ビルドツール: 該当する主要な技術スタックは明示されていません。
- 言語機能: 該当する主要な技術スタックは明示されていません。
- 自動化・CI/CD:
    - GitHub Actions: コードのビルド、テスト、デプロイ、およびその他の自動化タスクを実行するためのCI/CDプラットフォームです。このプロジェクトでは、プロジェクト要約、Issue管理、README翻訳など8種類のワークフローが共通化されています。
- 開発標準: 該当する主要な技術スタックは明示されていません。

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
      📄 BaseSummaryGenerator.cjs
      📄 CodeAnalyzer.cjs
      📄 DevelopmentStatusGenerator.cjs
      📄 FileSystemUtils.cjs
      📄 GitUtils.cjs
      📄 ProjectAnalyzer.cjs
      📄 ProjectOverviewGenerator.cjs
      📄 ProjectSummaryCoordinator.cjs
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
- **.github_automation/callgraph/presets/callgraph.js**:
    - コード分析結果に基づく呼び出しグラフ（コールグラフ）を視覚的に表示するためのJavaScriptコードが含まれています。ノードやエッジの描画、インタラクション処理、レイアウト管理などの機能を提供します。
- **.github_automation/callgraph/presets/style.css**:
    - コールグラフの視覚化に使用されるCSSスタイル定義が含まれています。ノードやエッジ、情報パネルなどのデザインを制御します。
- **generated-docs/callgraph.html**:
    - 自動生成されたコールグラフのHTMLビューアです。JavaScriptとCSSを読み込み、コードの呼び出し関係をブラウザでインタラクティブに表示します。
- **generated-docs/callgraph.js**:
    - `.github_automation/callgraph/presets/callgraph.js` と同一の内容で、`generated-docs` ディレクトリにコピーされたコールグラフ表示用のJavaScriptファイルです。
- **generated-docs/style.css**:
    - `.github_automation/callgraph/presets/style.css` と同一の内容で、`generated-docs` ディレクトリにコピーされたコールグラフ表示用のCSSファイルです。
- **src/main.js**:
    - プロジェクトのサンプルまたはテスト目的のエントリポイントファイルです。`greet` 関数と `main` 関数を含みます。

## 関数詳細説明
- **escapeHtml** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: HTMLの特殊文字をエスケープし、文字列がHTMLとして安全に表示されるようにします。
    - 機能: & (アンパサンド)、< (小なり記号)、> (大なり記号)、" (二重引用符)、' (単一引用符) などの文字を対応するHTMLエンティティに変換します。
- **getLayoutConfig** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 呼び出しグラフのレイアウトに関する設定を取得または生成します。
    - 機能: グラフの表示方法やノード配置に関するパラメータを提供します。
- **placeCentralNode** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフの中心となるノードを特定の場所に配置します。
    - 機能: グラフの視覚的な開始点や注目点を設定します。
- **showNodeInfo** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ内の特定のノード（関数など）に関する詳細情報を表示します。
    - 機能: ノードがクリックされた際などに、そのノードの属性や関連データを示す情報パネルを更新します。
- **showEdgeInfo** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ内の特定のエッジ（呼び出し関係）に関する詳細情報を表示します。
    - 機能: エッジがクリックされた際などに、呼び出し元のファイル、行番号などの情報を示します。
- **hideInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 情報表示パネルを非表示にします。
    - 機能: ユーザーがグラフとのインタラクションを終えた際などに、邪魔にならないように情報パネルを隠します。
- **showInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 情報表示パネルを表示します。
    - 機能: ノードやエッジが選択された際に、詳細情報を提示するためのパネルを表示します。
- **toggleInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 情報表示パネルの表示状態（表示/非表示）を切り替えます。
    - 機能: ユーザーの操作に応じてパネルの表示をトグルします。
- **generateGitHubURL** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: GitHub上の対応するファイルやコード行へのURLを生成します。
    - 機能: コードの場所へ直接ジャンプできるリンクを作成します。
- **resetLayout** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフのレイアウトを初期状態にリセットします。
    - 機能: ユーザーがレイアウトを変更した後、元の配置に戻したい場合に利用されます。
- **watchNodeMovementAndFixOverlapsWrap** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: ノードの動きを監視し、その重なりを修正するためのラッパー関数です。
    - 機能: `watchNodeMovementAndFixOverlaps` 関数を特定のコンテキストで呼び出す準備をします。
- **watchNodeMovementAndFixOverlaps** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ内のノードの動きを継続的に監視し、ノード同士の重なりを自動的に解消します。
    - 機能: グラフの可読性を保つために、ノードが重ならないように配置を調整します。
- **resolveNodeOverlaps** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ内のノードの重なりを解決し、互いに適切な間隔を保つように配置を調整します。
    - 機能: グラフの描画時にノードが重なって見えにくくなるのを防ぎます。
- **switchLayout** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフの表示レイアウト（例: 円形、グリッドなど）を切り替えます。
    - 機能: 異なる視覚的表現でグラフを分析できるようにします。
- **resetNodeStates** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ内のノードの強調表示や選択状態をリセットし、デフォルトの状態に戻します。
    - 機能: ユーザーのインタラクション後にグラフの状態をクリーンアップします。
- **fitToContent** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフの表示領域を現在のコンテンツ（ノードとエッジ）に合わせて調整します。
    - 機能: ズームレベルやパン位置を自動的に調整し、グラフ全体が画面に収まるようにします。
- **toggleNodeLabels** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフノードのラベル（名前）の表示・非表示を切り替えます。
    - 機能: グラフの混雑度を減らしたり、特定の情報を強調したりするために使用されます。
- **toggleCalleeLocationFilter** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 呼び出し先の場所に基づくフィルターの有効/無効を切り替えます。
    - 機能: 特定のファイルやディレクトリからの呼び出しのみを表示するなど、グラフの表示を絞り込むために使用されます。
- **replace** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 文字列内の特定のパターンを別の文字列で置換します。（JavaScriptのString.prototype.replaceメソッドと関連している可能性が高い）
    - 機能: データ整形や表示調整に使用されます。
- **switch** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 複数の条件分岐を効率的に処理します。（JavaScriptのswitch文の構文の一部として検出された可能性が高い）
    - 機能: 特定の値に基づいて異なるコードブロックを実行します。
- **function** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 関数定義を示すキーワードです。（JavaScriptのfunctionキーワードとして検出された可能性が高い）
    - 機能: 実行可能なコードブロックを定義します。
- **max** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 与えられた数値の最大値を返します。（JavaScriptのMath.maxなど、組み込み関数または類似の役割を持つ関数として検出された可能性が高い）
    - 機能: 数値の比較や計算に使用されます。
- **on** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: イベントリスナーを登録するために使用されます。（jQueryの.on()やNode.jsのEventEmitter.on()など、イベントハンドリングのメソッドとして検出された可能性が高い）
    - 機能: 特定のイベントが発生したときに実行されるコールバック関数を関連付けます。
- **if** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 条件分岐を定義します。（JavaScriptのif文の構文の一部として検出された可能性が高い）
    - 機能: 指定された条件が真である場合にコードブロックを実行します。
- **for** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: ループ処理を定義します。（JavaScriptのfor文の構文の一部として検出された可能性が高い）
    - 機能: 特定の回数または条件が満たされるまでコードブロックを繰り返し実行します。
- **ready** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: ドキュメントの準備が完了したときに実行されるイベントハンドラを登録します。（jQueryの$(document).ready()など、DOMContentLoadedイベントに関連するメソッドとして検出された可能性が高い）
    - 機能: DOMが完全にロードされた後にスクリプトを実行するために使用されます。
- **addListener** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: イベントリスナーを追加します。（Node.jsのEventEmitterやWeb APIのaddEventListenerなど、イベントハンドリングのメソッドとして検出された可能性が高い）
    - 機能: 特定のオブジェクトや要素にイベントハンドラを割り当てます。
- **greet** (`src/main.js`):
    - 役割: 挨拶メッセージを生成します。
    - 機能: 指定された名前を含む挨拶文字列を返します。
- **main** (`src/main.js`):
    - 役割: プログラムのエントリポイントです。
    - 機能: `greet` 関数を呼び出し、その結果をコンソールに出力するシンプルな実行フローを定義します。

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
Generated at: 2025-08-16 07:05:05 JST

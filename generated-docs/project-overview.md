Last updated: 2025-08-21

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: プロジェクトが生成するドキュメント（例: 呼び出しグラフ）の可視化に、HTML、CSS、JavaScriptが使用されています。特に`callgraph.js`と`style.css`は、グラフ表示のロジックとスタイルを定義しています。
- 音楽・オーディオ:
    - Tone.js: Web Audio APIを用いたウェブベースの音声ライブラリ。
    - Web Audio API: ブラウザに組み込まれた音声処理APIで、Tone.js経由で利用されます。
    - MML (Music Macro Language): 音楽記法を解析するためのパーサー。
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するためのランタイム環境。
    - npm scripts: パッケージ管理ツールnpmに組み込まれたスクリプト実行機能で、開発タスクの自動化に使用されます。
    - Google Generative AI: AIによる文書生成機能をサポートするために利用されます。
    - @octokit/rest: GitHub APIと連携し、リポジトリ情報の取得や操作を可能にします。
- テスト: 該当なし
- ビルドツール: 該当なし
- 言語機能: JavaScript (Node.js環境で実行)
- 自動化・CI/CD:
    - GitHub Actions: コードの変更を検知し、自動的にテスト、ビルド、デプロイなどのワークフローを実行するためのCI/CDプラットフォーム。本プロジェクトでは以下の8つの共通ワークフローが提供されています。
        - プロジェクト要約自動生成
        - Issue自動管理
        - README多言語翻訳
        - i18n automation (自動翻訳ワークフロー)
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
- **`.github_automation/callgraph/codeql-queries/callgraph.ql`**: CodeQLを使用してコードベースの呼び出しグラフを生成するためのクエリファイル。
- **`.github_automation/callgraph/config/example.json`**: 呼び出しグラフ生成に関連する設定の例を示すJSONファイル。
- **`.github_automation/callgraph/docs/callgraph.md`**: 呼び出しグラフ機能に関するドキュメント。
- **`.github_automation/callgraph/presets/callgraph.js`**: 呼び出しグラフのHTML表示におけるインタラクティブな動作やレイアウト、ノード情報の表示などを制御するJavaScriptコード。
- **`.github_automation/callgraph/presets/style.css`**: 呼び出しグラフのHTML表示における視覚的なスタイル（色、レイアウトなど）を定義するCSSファイル。
- **`.github_automation/callgraph/scripts/analyze-codeql.cjs`**: CodeQL分析を実行し、結果を処理するためのスクリプト。
- **`.github_automation/callgraph/scripts/callgraph-utils.cjs`**: 呼び出しグラフ生成に関連するユーティリティ関数を提供するスクリプト。
- **`.github_automation/callgraph/scripts/generate-html-graph.cjs`**: CodeQLの分析結果からHTML形式の呼び出しグラフを生成するスクリプト。
- **`.github_automation/project_summary/docs/daily-summary-setup.md`**: 日次サマリーのセットアップに関するドキュメント。
- **`.github_automation/project_summary/prompts/development-status-prompt.md`**: 開発状況の要約を生成するためのAIプロンプト定義。
- **`.github_automation/project_summary/prompts/project-overview-prompt.md`**: プロジェクト概要を生成するためのAIプロンプト定義。
- **`.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`**: プロジェクトサマリー生成プロセス全体の調整を行うスクリプト。
- **`.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`**: 開発状況レポートを生成するスクリプト。
- **`.github_automation/project_summary/scripts/development/GitUtils.cjs`**: Gitリポジトリ操作に関するユーティリティ関数を提供するスクリプト。
- **`.github_automation/project_summary/scripts/development/IssueTracker.cjs`**: Issue追跡に関連する機能を提供するスクリプト。
- **`.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs`**: コードを分析し、構造や依存関係を抽出するスクリプト。
- **`.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs`**: プロジェクト分析全体のオーケストレーションを行うスクリプト。
- **`.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs`**: プロジェクトに関する各種データを収集するスクリプト。
- **`.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs`**: 収集したプロジェクトデータを整形するスクリプト。
- **`.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs`**: プロジェクト概要を生成するスクリプト。
- **`.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs`**: 技術スタックを分析し、識別するスクリプト。
- **`.github_automation/project_summary/scripts/shared/BaseGenerator.cjs`**: 各種生成スクリプトの基盤となる共通機能を提供するスクリプト。
- **`.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs`**: ファイルシステム操作に関するユーティリティ関数を提供するスクリプト。
- **`.github_automation/translate/docs/TRANSLATION_SETUP.md`**: 翻訳機能のセットアップに関するドキュメント。
- **`.github_automation/translate/scripts/translate-readme.cjs`**: READMEファイルなどを自動翻訳するためのスクリプト。
- **`.gitignore`**: Gitが追跡しないファイルやディレクトリを指定する設定ファイル。
- **`LICENSE`**: プロジェクトのライセンス情報。
- **`README.ja.md`**: プロジェクトの日本語版説明書。
- **`README.md`**: プロジェクトの英語版（メイン）説明書。
- **`generated-docs/callgraph.html`**: 生成された呼び出しグラフのHTML出力ファイル。
- **`generated-docs/callgraph.js`**: `callgraph.html`に埋め込まれるか、読み込まれる呼び出しグラフ表示ロジックのJavaScriptファイル。通常、`.github_automation/callgraph/presets/callgraph.js`のコピーまたは出力。
- **`generated-docs/development-status.md`**: 生成された開発状況レポートのMarkdownファイル。
- **`generated-docs/project-overview.md`**: 生成されたプロジェクト概要のMarkdownファイル。
- **`generated-docs/style.css`**: `callgraph.html`に適用されるCSSファイル。通常、`.github_automation/callgraph/presets/style.css`のコピーまたは出力。
- **`issue-notes/`**: 自動化されたIssue管理によって生成されるIssueに関するメモや詳細情報が格納されるディレクトリ。
- **`package-lock.json`**: `package.json`に記述された依存関係の正確なバージョンと依存ツリーを記録するファイル。
- **`package.json`**: Node.jsプロジェクトの設定ファイルで、プロジェクト名、バージョン、依存関係、スクリプトなどが定義されている。
- **`src/main.js`**: プロジェクトのメインエントリポイント、または簡単なテスト/サンプルコード。

## 関数詳細説明
- **`escapeHtml`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: HTMLの特殊文字をエスケープし、安全にHTMLコンテンツとして表示できるようにする。
    - 機能: 文字列を受け取り、`&`, `<`, `>`, `"`, `'`などの文字をそれぞれのHTMLエンティティに変換した新しい文字列を返す。
- **`getLayoutConfig`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 呼び出しグラフのレイアウト設定を取得する。
    - 機能: グラフの表示形式やノード配置に関する設定オブジェクトを返す。
- **`placeCentralNode`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフの中央ノードを配置する。
    - 機能: 指定されたノードをグラフの中心に配置し、視覚的な焦点を定める。
- **`showNodeInfo`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 特定のノードの詳細情報を表示する。
    - 機能: グラフ内のノードがクリックまたはホバーされた際に、そのノードの属性や関連情報を情報パネルに表示する。
- **`showEdgeInfo`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 特定のエッジ（接続線）の詳細情報を表示する。
    - 機能: グラフ内のエッジがクリックまたはホバーされた際に、そのエッジ（呼び出し関係など）の詳細情報を情報パネルに表示する。
- **`hideInfoPanel`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 情報表示パネルを非表示にする。
    - 機能: 表示されている情報パネルを画面から隠す。
- **`showInfoPanel`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 情報表示パネルを表示する。
    - 機能: 情報パネルを画面に表示し、`showNodeInfo`や`showEdgeInfo`で設定された内容を表示可能にする。
- **`toggleInfoPanel`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 情報表示パネルの表示状態を切り替える（表示されていれば非表示に、非表示であれば表示に）。
    - 機能: 情報パネルの現在の表示状態に基づいて、表示/非表示を切り替える。
- **`generateGitHubURL`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: GitHub上のリソースへのURLを生成する。
    - 機能: コードのファイルパスや行番号などに基づいて、対応するGitHub上のファイルやコード行へのリンクを生成する。
- **`resetLayout`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフのレイアウトを初期状態にリセットする。
    - 機能: グラフのノード位置やズームレベルなどをデフォルトの状態に戻す。
- **`watchNodeMovementAndFixOverlapsWrap`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: ノードの動きを監視し、重なりを修正する処理のラッパー関数。
    - 機能: 周期的にノードの重なりをチェックし、レイアウトが崩れないように調整する。
- **`watchNodeMovementAndFixOverlaps`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: ノードの重なりを解決する主要なロジック。
    - 機能: グラフ内のノード同士が重ならないように位置を調整する。
- **`resolveNodeOverlaps`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 具体的にノードの重なりを解決するアルゴリズムを実装。
    - 機能: 重なっているノードを検出し、互いに離れるように位置を微調整する。
- **`switchLayout`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフのレイアウトアルゴリズムを切り替える。
    - 機能: 異なるレイアウト（例: 円形、グリッドなど）にグラフの表示を変更する。
- **`resetNodeStates`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: すべてのノードの表示状態を初期化する。
    - 機能: 選択状態やハイライトなどを解除し、ノードを通常の状態に戻す。
- **`fitToContent`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ全体がビューポートに収まるようにズームレベルを調整する。
    - 機能: すべてのノードとエッジが画面内に表示されるように、ズームとパンを自動調整する。
- **`toggleNodeLabels`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: ノードラベルの表示/非表示を切り替える。
    - 機能: グラフ内のノードに付随するテキストラベルの表示をオン/オフする。
- **`toggleCalleeLocationFilter`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 呼び出し先（Callee）の位置によるフィルタの適用/解除を切り替える。
    - 機能: 特定の場所に存在する呼び出し先のみを表示するフィルタリング機能の有効/無効を切り替える。
- **`replace`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 文字列置換を行う。
    - 機能: 特定の文字列パターンを別の文字列に置き換える。
- **`switch`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 条件に応じた処理を分岐する（通常、switch文のコンテキストで使用される）。
    - 機能: 複数のケースに対して異なるコードパスを実行する。
- **`function`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: JavaScriptの関数定義（匿名関数や高階関数の一部として存在する可能性がある）。
    - 機能: 特定のタスクを実行する再利用可能なコードブロックを定義する。
- **`max`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 最大値を取得する（通常、Math.maxなどのコンテキストで使用される）。
    - 機能: 与えられた数値のセットから最大値を返す。
- **`on`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: イベントリスナーを登録する（通常、イベント処理のコンテキストで使用される）。
    - 機能: 特定のイベントが発生したときに実行されるコールバック関数を設定する。
- **`if`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 条件分岐を行う（通常、if文のコンテキストで使用される）。
    - 機能: 特定の条件が真の場合にコードブロックを実行する。
- **`for`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: ループ処理を行う（通常、forループのコンテキストで使用される）。
    - 機能: 特定の回数または条件が満たされるまでコードブロックを繰り返し実行する。
- **`ready`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: DOMContentLoadedなどのドキュメント準備完了イベントを待機する。
    - 機能: ドキュメントの読み込みと解析が完了した後にコールバックを実行する。
- **`addListener`** (in `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: イベントリスナーを追加する。
    - 機能: 特定のイベントターゲットに、指定されたイベントタイプに対するイベントハンドラを追加する。
- **`greet`** (in `src/main.js`):
    - 役割: 挨拶メッセージを生成する。
    - 引数: なし (ただし、内部でデフォルトの挨拶文字列を返すか、固定の引数を取る可能性がある)。
    - 戻り値: 挨拶メッセージ文字列。
    - 機能: "Hello from actions-tmp!" という文字列を返す。
- **`main`** (in `src/main.js`):
    - 役割: プログラムの主要な実行エントリポイント。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: `greet()`関数を呼び出し、その結果をコンソールに出力する。

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
Generated at: 2025-08-21 07:04:43 JST

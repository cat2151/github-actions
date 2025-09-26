Last updated: 2025-09-27

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: N/A (GitHub Actionsの共通ワークフローが主目的のため)
- 音楽・オーディオ:
    - **Tone.js**: Web Audio APIを抽象化し、Web上で音楽やオーディオアプリケーションを構築するためのフレームワークです。
    - **Web Audio API**: ブラウザ内で高度な音声処理を可能にするJavaScript APIで、Tone.js経由で利用されます。
    - **MML (Music Macro Language)**: 音楽をテキストで記述するための簡易記法パーサー。
- 開発ツール:
    - **Node.js runtime**: JavaScriptコードを実行するためのオープンソースのクロスプラットフォームなランタイム環境です。
- テスト: N/A (テストに関する具体的な技術スタックの記述なし)
- ビルドツール: N/A (ビルド・パースに関する具体的な技術スタックの記述なし)
- 言語機能: N/A (言語仕様・機能に関する具体的な記述なし、主にJavaScript)
- 自動化・CI/CD:
    - **GitHub Actions**: リポジトリでのイベントに基づいてソフトウェア開発ワークフローを自動化するためのプラットフォームです。このプロジェクトでは、以下の9個の共通ワークフローを提供します。
        - プロジェクト要約自動生成: プロジェクトの概要を自動的に生成します。
        - Issue自動管理: Issueのライフサイクル管理を自動化します。
        - README多言語翻訳: READMEファイルを複数の言語に自動翻訳します。
        - i18n automation: 国際化 (i18n) 関連の自動翻訳処理を実行します。
- 開発標準: N/A (コード品質・統一ルールに関する具体的な技術スタックの記述なし)

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
  📖 25.md
  📖 26.md
  📖 27.md
  📖 28.md
  📖 3.md
  📖 4.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明
- **`.github_automation/callgraph/codeql-queries/callgraph.ql`**: CodeQL言語で書かれたクエリファイル。コードの呼び出しグラフを解析するために使用されます。
- **`.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml`**: CodeQLパックの依存関係をロックするファイル。
- **`.github_automation/callgraph/codeql-queries/qlpack.yml`**: CodeQLパックの設定ファイル。クエリのメタデータを含みます。
- **`.github_automation/callgraph/config/example.json`**: 呼び出しグラフの生成設定の例を示すJSONファイル。
- **`.github_automation/callgraph/docs/callgraph.md`**: 呼び出しグラフ機能に関するドキュメント。
- **`.github_automation/callgraph/presets/callgraph.js`**: 呼び出しグラフの視覚化や操作に関するJavaScriptコード。グラフのレイアウト、ノード操作、情報表示などを担当します。
- **`.github_automation/callgraph/presets/style.css`**: 呼び出しグラフの視覚化に使用されるスタイルシート。
- **`.github_automation/callgraph/scripts/analyze-codeql.cjs`**: CodeQLを使用してコードを分析するスクリプト。
- **`.github_automation/callgraph/scripts/callgraph-utils.cjs`**: 呼び出しグラフ生成に関するユーティリティ関数を集めたスクリプト。
- **`.github_automation/callgraph/scripts/check-codeql-exists.cjs`**: CodeQLの存在を確認するスクリプト。
- **`.github_automation/callgraph/scripts/check-node-version.cjs`**: Node.jsのバージョンを確認するスクリプト。
- **`.github_automation/callgraph/scripts/common-utils.cjs`**: 共通のユーティリティ関数を提供するスクリプト。
- **`.github_automation/callgraph/scripts/copy-commit-results.cjs`**: コミット結果をコピーするスクリプト。
- **`.github_automation/callgraph/scripts/extract-sarif-info.cjs`**: SARIF形式のファイルから情報を抽出するスクリプト。
- **`.github_automation/callgraph/scripts/find-process-results.cjs`**: プロセス結果を検索するスクリプト。
- **`.github_automation/callgraph/scripts/generate-html-graph.cjs`**: HTML形式のグラフを生成するスクリプト。
- **`.github_automation/callgraph/scripts/generateHTML.cjs`**: HTMLコンテンツを生成するスクリプト。
- **`.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs`**: 最近の人間によるコミットがあるかどうかをチェックするスクリプト。CI/CDパイプラインでの不必要な実行を防ぐ目的などに使用されます。
- **`.github_automation/project_summary/docs/daily-summary-setup.md`**: 日次サマリー機能のセットアップに関するドキュメント。
- **`.github_automation/project_summary/prompts/development-status-prompt.md`**: 開発状況のサマリー生成に使用されるプロンプトテキスト。
- **`.github_automation/project_summary/prompts/project-overview-prompt.md`**: プロジェクト概要生成に使用されるプロンプトテキスト。
- **`.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`**: プロジェクトサマリー生成プロセス全体の調整役となるスクリプト。
- **`.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`**: 開発状況のサマリーを生成するスクリプト。
- **`.github_automation/project_summary/scripts/development/GitUtils.cjs`**: Git操作に関連するユーティリティ関数を提供するスクリプト。
- **`.github_automation/project_summary/scripts/development/IssueTracker.cjs`**: Issue追跡に関連する機能を提供するスクリプト。
- **`.github_automation/project_summary/scripts/generate-project-summary.cjs`**: プロジェクトサマリーを実際に生成するメインスクリプト。
- **`.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs`**: コードベースを分析するスクリプト。
- **`.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs`**: プロジェクト分析のオーケストレーションを行うスクリプト。
- **`.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs`**: プロジェクトから様々なデータを収集するスクリプト。
- **`.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs`**: 収集したプロジェクトデータを整形するスクリプト。
- **`.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs`**: プロジェクト概要の最終的な生成を担当するスクリプト。
- **`.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs`**: プロジェクトの技術スタックを分析するスクリプト。
- **`.github_automation/project_summary/scripts/shared/BaseGenerator.cjs`**: 各種ジェネレータの基底クラスまたは共通機能を提供するスクリプト。
- **`.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs`**: ファイルシステム操作に関するユーティリティ関数を提供するスクリプト。
- **`.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs`**: プロジェクトファイルに関するユーティリティ関数を提供するスクリプト。
- **`.github_automation/translate/docs/TRANSLATION_SETUP.md`**: 翻訳機能のセットアップに関するドキュメント。
- **`.github_automation/translate/scripts/translate-readme.cjs`**: READMEファイルを自動翻訳するスクリプト。
- **`.gitignore`**: Gitがバージョン管理の対象としないファイルやディレクトリを指定する設定ファイル。
- **`.vscode/settings.json`**: Visual Studio Codeのワークスペース設定ファイル。
- **`LICENSE`**: プロジェクトのライセンス情報が記載されたファイル。
- **`README.ja.md`**: プロジェクトの日本語版説明書。
- **`README.md`**: プロジェクトの英語版（またはデフォルト）説明書。
- **`generated-docs/callgraph.html`**: 呼び出しグラフのHTML形式の出力ファイル。
- **`generated-docs/callgraph.js`**: 呼び出しグラフの視覚化や操作に関するJavaScriptコード（生成されたもの）。`.github_automation/callgraph/presets/callgraph.js` と同じ内容。
- **`generated-docs/style.css`**: 呼び出しグラフの視覚化に使用されるスタイルシート（生成されたもの）。`.github_automation/callgraph/presets/style.css` と同じ内容。
- **`issue-notes/*.md`**: GitHub Issuesに関連するメモや自動生成された詳細情報を含むMarkdownファイル群。
- **`src/main.js`**: プロジェクトの主要なエントリーポイントとなるJavaScriptファイル。

## 関数詳細説明
- **`escapeHtml(str)`**:
    - 役割: HTMLの特殊文字（&, <, >, ", '）をHTMLエンティティに変換し、XSS攻撃などを防ぐためのエスケープ処理を行います。
    - 引数: `str` (string) - エスケープする文字列。
    - 戻り値: (string) - エスケープされた文字列。
- **`getLayoutConfig()`**:
    - 役割: 呼び出しグラフの表示レイアウトに関する設定オブジェクトを取得します。
    - 引数: なし。
    - 戻り値: (object) - レイアウト設定。
- **`placeCentralNode()`**:
    - 役割: グラフの中央に特定のノードを配置する処理を実行します。
    - 引数: なし。
    - 戻り値: なし。
- **`showNodeInfo()`**:
    - 役割: グラフのノードに関する詳細情報を表示するUIを更新します。
    - 引数: (おそらくノードIDまたはノードオブジェクト)。
    - 戻り値: なし。
- **`showEdgeInfo()`**:
    - 役割: グラフのエッジ（接続線）に関する詳細情報を表示するUIを更新します。
    - 引数: (おそらくエッジIDまたはエッジオブジェクト)。
    - 戻り値: なし。
- **`hideInfoPanel()`**:
    - 役割: 表示されている情報パネルを非表示にします。
    - 引数: なし。
    - 戻り値: なし。
- **`showInfoPanel()`**:
    - 役割: 非表示になっている情報パネルを表示します。
    - 引数: (おそらく表示するコンテンツ)。
    - 戻り値: なし。
- **`toggleInfoPanel()`**:
    - 役割: 情報パネルの表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **`generateGitHubURL()`**:
    - 役割: 特定のコードやリソースへのGitHubのURLを生成します。
    - 引数: (ファイルパス、行番号など)。
    - 戻り値: (string) - 生成されたGitHub URL。
- **`resetLayout()`**:
    - 役割: グラフの表示レイアウトを初期状態にリセットします。
    - 引数: なし。
    - 戻り値: なし。
- **`watchNodeMovementAndFixOverlapsWrap()`**:
    - 役割: ノードの動きを監視し、重なりが発生した場合に修正する処理のラッパー関数です。
    - 引数: なし。
    - 戻り値: なし。
- **`watchNodeMovementAndFixOverlaps()`**:
    - 役割: グラフノードの動きを継続的に監視し、ノード同士の重なりを解決するための処理を実行します。
    - 引数: なし。
    - 戻り値: なし。
- **`resolveNodeOverlaps()`**:
    - 役割: 重なり合っているノードの位置を調整し、視覚的に区別できるようにします。
    - 引数: なし。
    - 戻り値: なし。
- **`switchLayout()`**:
    - 役割: グラフの描画レイアウトアルゴリズム（例: 力学レイアウト、円形レイアウトなど）を切り替えます。
    - 引数: (string) - 新しいレイアウトの名前。
    - 戻り値: なし。
- **`resetNodeStates()`**:
    - 役割: グラフ内のすべてのノードの選択状態や強調表示などの状態をリセットします。
    - 引数: なし。
    - 戻り値: なし。
- **`fitToContent()`**:
    - 役割: グラフ全体がビューポート内に収まるようにズームレベルや位置を調整します。
    - 引数: なし。
    - 戻り値: なし。
- **`toggleNodeLabels()`**:
    - 役割: グラフノードのラベル（名称）の表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **`toggleCalleeLocationFilter()`**:
    - 役割: 呼び出し先（Callee）のロケーションフィルターの適用/解除を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **`replace()`**:
    - 役割: 文字列内の特定のパターンを別の文字列で置換する汎用的な関数です。
    - 引数: (string, string | RegExp, string) - 対象文字列、検索パターン、置換文字列。
    - 戻り値: (string) - 置換後の文字列。
- **`switch()`**:
    - 役割: 複数の条件分岐を処理するためのJavaScriptの`switch`ステートメントに相当する、またはそれを利用した処理です。
    - 引数: (任意) - 条件。
    - 戻り値: なし。
- **`function()`**:
    - 役割: 無名関数、または他の関数内で定義されるヘルパー関数としての利用が想定されます。
    - 引数: (任意)。
    - 戻り値: (任意)。
- **`max()`**:
    - 役割: 複数の数値の中から最大値を返す関数です。
    - 引数: (number...) - 比較対象となる数値群。
    - 戻り値: (number) - 最大値。
- **`on()`**:
    - 役割: イベントリスナーを要素にアタッチするための関数です（例: jQueryの`.on()`）。
    - 引数: (string, function) - イベントタイプ、イベントハンドラ。
    - 戻り値: なし。
- **`if()`**:
    - 役割: 条件付きでコードブロックを実行するためのJavaScriptの`if`ステートメントに相当する処理です。
    - 引数: (boolean) - 評価する条件。
    - 戻り値: なし。
- **`for()`**:
    - 役割: 特定の回数だけコードブロックを繰り返すためのJavaScriptの`for`ループに相当する処理です。
    - 引数: (任意) - ループ条件、増減式など。
    - 戻り値: なし。
- **`ready()`**:
    - 役割: DOM (Document Object Model) が完全にロードされ、スクリプトが安全に操作できる状態になったときに実行されるイベントハンドラを登録します（例: jQueryの`.ready()`）。
    - 引数: (function) - 実行するコールバック関数。
    - 戻り値: なし。
- **`addListener()`**:
    - 役割: 特定のイベントが発生したときに実行されるリスナー関数を追加します。
    - 引数: (string, function) - イベントタイプ、リスナー関数。
    - 戻り値: なし。
- **`greet(name)` (src/main.js)**:
    - 役割: 指定された名前に挨拶する文字列を生成します。
    - 引数: `name` (string) - 挨拶の対象となる名前。
    - 戻り値: (string) - 挨拶メッセージ。
- **`main()` (src/main.js)**:
    - 役割: プログラムの主要な実行ロジックを含むエントリーポイント関数です。
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
Generated at: 2025-09-27 07:05:26 JST

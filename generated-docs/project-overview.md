Last updated: 2025-08-23

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: なし (生成されるドキュメントの表示にJavaScriptやCSSが使用されますが、本プロジェクト自体はWebアプリケーションではありません)
- 音楽・オーディオ:
    - Tone.js: Web Audio APIを抽象化し、Webブラウザでリッチな音楽・オーディオ体験を実現するフレームワーク。
    - Web Audio API: Webブラウザで高度な音声処理を行うためのJavaScript API。
    - MML (Music Macro Language): 音楽をテキストで記述するための記法。パーサーとして利用される可能性。
- 開発ツール:
    - Node.js runtime: JavaScript実行環境。GitHub Actionsワークフローや関連スクリプトの実行基盤。
    - npm scripts: `package.json`に定義されたタスクランナー。開発・自動化スクリプトの実行を簡素化。
    - Google Generative AI: AIによる文書生成機能を活用し、プロジェクトの要約や説明文の自動生成を支援。
    - @octokit/rest: GitHub APIと連携するためのJavaScriptライブラリ。リポジトリ情報の取得や操作に利用。
- テスト: なし
- ビルドツール: なし
- 言語機能: なし
- 自動化・CI/CD:
    - GitHub Actions: リポジトリでのイベントをトリガーに、自動でビルド、テスト、デプロイなどのワークフローを実行するCI/CDサービス。本リポジトリの主要な提供物です。
        - プロジェクト要約自動生成: AIを用いてプロジェクトの概要や開発状況を自動で生成するワークフロー。
        - Issue自動管理: GitHub Issuesの作成、更新、クローズなどを自動化し、プロジェクト管理を効率化するワークフロー。
        - README多言語翻訳: READMEファイルを複数の言語に自動翻訳するワークフロー。
        - i18n automation: 国際化対応（i18n）を支援する自動翻訳ワークフロー。
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
- **`.github_automation/callgraph/codeql-queries/callgraph.ql`**: CodeQLを使用してコードベースの関数呼び出しグラフを生成するためのクエリ定義ファイル。
- **`.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml`**: CodeQLパックの依存関係とバージョンを固定するためのロックファイル。
- **`.github_automation/callgraph/codeql-queries/qlpack.yml`**: CodeQLパックのメタデータ（名前、バージョン、依存関係など）を定義するファイル。
- **`.github_automation/callgraph/config/example.json`**: コールグラフ生成に関連する設定の例を示すJSONファイル。
- **`.github_automation/callgraph/docs/callgraph.md`**: コールグラフ生成ワークフローに関するドキュメンテーション。
- **`.github_automation/callgraph/presets/callgraph.js`**: 生成されたコールグラフのHTMLページでのインタラクティブな表示や操作（ノードの配置、情報表示など）を制御するJavaScriptファイル。
- **`.github_automation/callgraph/presets/style.css`**: コールグラフ表示ページのスタイルを定義するCSSファイル。
- **`.github_automation/callgraph/scripts/analyze-codeql.cjs`**: CodeQLを実行してコード分析を行い、SARIF形式の結果を出力するスクリプト。
- **`.github_automation/callgraph/scripts/callgraph-utils.cjs`**: コールグラフ生成プロセスで利用されるユーティリティ関数群を含むスクリプト。
- **`.github_automation/callgraph/scripts/check-codeql-exists.cjs`**: システムにCodeQLがインストールされているかを確認するスクリプト。
- **`.github_automation/callgraph/scripts/check-commits.cjs`**: 特定のコミット履歴や変更をチェックするためのスクリプト。
- **`.github_automation/callgraph/scripts/check-node-version.cjs`**: Node.jsのバージョンが要件を満たしているかを確認するスクリプト。
- **`.github_automation/callgraph/scripts/common-utils.cjs`**: プロジェクト全体で共通利用される汎用ユーティリティ関数を集めたスクリプト。
- **`.github_automation/callgraph/scripts/copy-commit-results.cjs`**: コミット関連の分析結果を所定の場所にコピーするスクリプト。
- **`.github_automation/callgraph/scripts/extract-sarif-info.cjs`**: CodeQLなどから出力されるSARIF形式の分析結果ファイルから必要な情報を抽出するスクリプト。
- **`.github_automation/callgraph/scripts/find-process-results.cjs`**: 特定の処理の結果ファイルやディレクトリを検索するスクリプト。
- **`.github_automation/callgraph/scripts/generate-html-graph.cjs`**: 抽出されたコールグラフデータから、ブラウザで表示可能なHTML形式のグラフを生成するスクリプト。
- **`.github_automation/callgraph/scripts/generateHTML.cjs`**: HTMLコンテンツを生成するための汎用スクリプト。
- **`.github_automation/project_summary/docs/daily-summary-setup.md`**: 日次プロジェクトサマリーの自動生成設定に関するドキュメント。
- **`.github_automation/project_summary/prompts/development-status-prompt.md`**: AIが開発状況を生成する際に使用するプロンプトのテンプレートファイル。
- **`.github_automation/project_summary/prompts/project-overview-prompt.md`**: AIがプロジェクト概要を生成する際に使用するプロンプトのテンプレートファイル。
- **`.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`**: プロジェクトサマリー生成ワークフロー全体を調整し、各サブプロセスを連携させるスクリプト。
- **`.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`**: 現在の開発状況（コミット数、アクティブなブランチなど）に基づいたレポートを生成するスクリプト。
- **`.github_automation/project_summary/scripts/development/GitUtils.cjs`**: Gitリポジトリ操作（コミット履歴の取得、ブランチ情報の取得など）に関連するユーティリティ関数群。
- **`.github_automation/project_summary/scripts/development/IssueTracker.cjs`**: GitHub Issuesから情報を取得し、開発状況レポートに組み込むための機能を提供するスクリプト。
- **`.github_automation/project_summary/scripts/generate-project-summary.cjs`**: プロジェクトの概要と開発状況に関するサマリーを自動生成するメインスクリプト。
- **`.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs`**: コードベースを分析し、ファイル構造、言語使用、主要な関数定義などの情報を抽出するスクリプト。
- **`.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs`**: プロジェクト分析プロセスを統括し、データ収集、解析、整形をオーケストレーションするスクリプト。
- **`.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs`**: リポジトリからファイル一覧、内容、メタデータなどのプロジェクト関連データを収集するスクリプト。
- **`.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs`**: 収集・解析されたプロジェクトデータを、レポート生成に適した形式に整形するスクリプト。
- **`.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs`**: 収集・整形されたデータに基づいて、プロジェクト概要レポートを生成するスクリプト。
- **`.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs`**: `package.json`やコード内容から使用されている技術スタックを特定し、分析するスクリプト。
- **`.github_automation/project_summary/scripts/shared/BaseGenerator.cjs`**: 各種レポート生成スクリプトの基底クラスとして機能し、共通のメソッドやプロパティを提供するスクリプト。
- **`.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs`**: ファイルシステム操作（ファイルの読み書き、ディレクトリの作成など）に関するユーティリティ関数群。
- **`.github_automation/translate/docs/TRANSLATION_SETUP.md`**: READMEなどのドキュメントの多言語翻訳ワークフローの設定に関するドキュメント。
- **`.github_automation/translate/scripts/translate-readme.cjs`**: プロジェクトのREADMEファイルを自動的に翻訳するスクリプト。
- **`.gitignore`**: Gitによるバージョン管理から除外するファイルやディレクトリのパターンを定義するファイル。
- **`LICENSE`**: プロジェクトのオープンソースライセンス情報。
- **`README.ja.md`**: プロジェクトの概要を日本語で説明する主要なドキュメント。
- **`README.md`**: プロジェクトの概要を英語で説明する主要なドキュメント。
- **`generated-docs/callgraph.html`**: CodeQLによって解析され生成されたコールグラフを視覚化したHTMLファイル。
- **`generated-docs/callgraph.js`**: `callgraph.html`ページでグラフのインタラクションや表示を制御するJavaScriptファイル（`.github_automation/callgraph/presets/callgraph.js`の出力版）。
- **`generated-docs/development-status.md`**: プロジェクトサマリー生成ワークフローによって生成された、開発状況に関するMarkdown形式のレポート。
- **`generated-docs/project-overview.md`**: プロジェクトサマリー生成ワークフローによって生成された、プロジェクトの概要に関するMarkdown形式のレポート。
- **`generated-docs/style.css`**: 生成されたドキュメントの共通スタイルシート（`.github_automation/callgraph/presets/style.css`の出力版）。
- **`issue-notes/*.md`**: GitHub Issuesに関する追加のメモや詳細情報を記録するためのMarkdownファイル群。
- **`package-lock.json`**: `package.json`で定義された依存関係の正確なバージョンと依存ツリーを記録し、ビルドの一貫性を保証するファイル。
- **`package.json`**: プロジェクトのメタデータ（名前、バージョン）、スクリプト、および開発・実行時の依存関係を定義するファイル。
- **`src/main.js`**: このリポジトリのサンプルまたはテスト目的で含まれるシンプルなJavaScriptファイル。

## 関数詳細説明
- **`escapeHtml(html)`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: HTML文字列内の特殊文字をエスケープし、クロスサイトスクリプティング（XSS）攻撃などの脆弱性を防ぎます。
    - **引数**: `html` (文字列) - エスケープ対象のHTML文字列。
    - **戻り値**: エスケープされた文字列。
    - **機能**: `<`, `>`, `&`, `"`, `'` などのHTMLエンティティを対応する文字参照に変換します。
- **`getLayoutConfig()`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: グラフ表示のレイアウトに関する設定オブジェクトを返します。
    - **引数**: なし。
    - **戻り値**: レイアウト設定を含むオブジェクト。
    - **機能**: グラフの配置アルゴリズムやノード間の距離などを定義します。
- **`placeCentralNode(cy, node, position)`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: 指定されたノードをグラフの中心に配置します。
    - **引数**: `cy` (Cytoscape.jsインスタンス), `node` (Cytoscape.jsノード要素), `position` (オブジェクト) - 中心ノードの座標。
    - **戻り値**: なし。
    - **機能**: コールグラフの中心となるノードを特定の座標に固定または配置します。
- **`showNodeInfo(node)`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: 指定されたノード（関数など）に関する詳細情報を表示パネルに表示します。
    - **引数**: `node` (Cytoscape.jsノード要素)。
    - **戻り値**: なし。
    - **機能**: ノードのクリックイベントなどに応じて、そのノードの属性（関数名、ファイルパスなど）をUIに表示します。
- **`showEdgeInfo(edge)`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: 指定されたエッジ（関数呼び出し関係など）に関する詳細情報を表示パネルに表示します。
    - **引数**: `edge` (Cytoscape.jsエッジ要素)。
    - **戻り値**: なし。
    - **機能**: エッジのクリックイベントなどに応じて、そのエッジの属性（呼び出し元/先、行番号など）をUIに表示します。
- **`hideInfoPanel()`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: 情報表示パネルを非表示にします。
    - **引数**: なし。
    - **戻り値**: なし。
    - **機能**: ユーザーアクションに応じて、詳細情報パネルを隠します。
- **`showInfoPanel()`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: 情報表示パネルを表示します。
    - **引数**: なし。
    - **戻り値**: なし。
    - **機能**: ユーザーアクションに応じて、詳細情報パネルを表示します。
- **`toggleInfoPanel()`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: 情報表示パネルの表示/非表示を切り替えます。
    - **引数**: なし。
    - **戻り値**: なし。
    - **機能**: ボタンクリックなどでパネルの表示状態をトグルします。
- **`generateGitHubURL(filePath, startLine, endLine)`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: 指定されたファイルパスと行番号に基づいて、GitHubリポジトリの該当コードへのURLを生成します。
    - **引数**: `filePath` (文字列), `startLine` (数値), `endLine` (数値)。
    - **戻り値**: 生成されたGitHub URL (文字列)。
    - **機能**: ソースコードへの直接リンクを提供し、ユーザーがコードを素早く参照できるようにします。
- **`resetLayout()`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: グラフのレイアウトを初期状態にリセットします。
    - **引数**: なし。
    - **戻り値**: なし。
    - **機能**: ユーザーがグラフの配置を変更した後、元の配置に戻すための機能です。
- **`watchNodeMovementAndFixOverlapsWrap()`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: ノードの動きを監視し、ノードの重なりを修正するロジックをラップする関数です。
    - **引数**: なし。
    - **戻り値**: なし。
    - **機能**: `watchNodeMovementAndFixOverlaps`関数を適切に呼び出すためのラッパーとして機能します。
- **`watchNodeMovementAndFixOverlaps()`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: グラフ内のノードの移動を監視し、ノード同士が重ならないように位置を自動調整します。
    - **引数**: なし。
    - **戻り値**: なし。
    - **機能**: ユーザーがノードをドラッグした際などに、他のノードとの衝突を避け、視認性を保つための自動レイアウト調整を行います。
- **`resolveNodeOverlaps()`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: グラフ内の重なっているノードを検出し、その重なりを解消するように位置を調整します。
    - **引数**: なし。
    - **戻り値**: なし。
    - **機能**: 静的なレイアウト調整や、ノード移動後の後処理として、重なりを解決します。
- **`switchLayout(layoutName)`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: グラフのレイアウトアルゴリズムを切り替えます。
    - **引数**: `layoutName` (文字列) - 適用するレイアウトアルゴリズムの名前（例: 'cose', 'grid'）。
    - **戻り値**: なし。
    - **機能**: ユーザーが異なる視覚的表現でグラフを探索できるようにします。
- **`resetNodeStates()`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: グラフ内のすべてのノードの状態（選択状態、強調表示など）を初期値にリセットします。
    - **引数**: なし。
    - **戻り値**: なし。
    - **機能**: ユーザーが操作した後の視覚的状態をクリアします。
- **`fitToContent()`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: グラフ全体がビューポートに収まるようにズームレベルとパン位置を調整します。
    - **引数**: なし。
    - **戻り値**: なし。
    - **機能**: グラフの全要素を一目で確認できるようにします。
- **`toggleNodeLabels()`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: グラフのノードラベルの表示/非表示を切り替えます。
    - **引数**: なし。
    - **戻り値**: なし。
    - **機能**: ユーザーがグラフの視覚的密度を調整できるようにします。
- **`toggleCalleeLocationFilter()`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: 呼び出し先（Callee）の位置に基づくフィルタの適用/解除を切り替えます。
    - **引数**: なし。
    - **戻り値**: なし。
    - **機能**: 特定の条件に基づいてグラフ要素の表示をフィルタリングします。
- **`greet(name)`** (ファイル: `src/main.js`):
    - **役割**: 入力された名前に基づいて挨拶メッセージを生成します。
    - **引数**: `name` (文字列) - 挨拶の対象となる名前。
    - **戻り値**: 挨拶メッセージ (文字列)。
    - **機能**: "Hello, [name]!" という形式の文字列を作成します。
- **`main()`** (ファイル: `src/main.js`):
    - **役割**: プロジェクトのメインエントリポイントとして機能します。
    - **引数**: なし。
    - **戻り値**: なし。
    - **機能**: `greet`関数を呼び出し、その結果をコンソールに出力します。

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
Generated at: 2025-08-23 07:05:10 JST

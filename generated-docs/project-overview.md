Last updated: 2025-10-15

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: HTML, CSS (Webページ構造とスタイル), JavaScript (Webページの動的な操作、グラフ描画ライブラリの利用)
- 音楽・オーディオ: なし (本プロジェクトの機能とは直接関連しません)
- 開発ツール: Node.js runtime (JavaScript実行環境), CodeQL (コード分析エンジン)
- テスト: なし
- ビルドツール: Node.js (スクリプト実行環境として、コード生成や分析スクリプトを実行)
- 言語機能: JavaScript/ECMAScript (スクリプト開発), CodeQL (静的解析クエリ言語)
- 自動化・CI/CD: GitHub Actions (CI/CD自動化プラットフォーム。プロジェクト要約、Issue管理、README翻訳、i18n等のワークフローを提供)
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
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLクエリ。JavaScript/TypeScriptプロジェクトの関数呼び出しグラフを生成するためのロジックを定義します。
- **.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係を管理するロックファイル。
- **.github_automation/callgraph/codeql-queries/qlpack.yml**: CodeQLパックのメタデータを定義するファイル。
- **.github_automation/callgraph/config/example.json**: コールグラフ生成に関連する設定の例を示すJSONファイル。
- **.github_automation/callgraph/docs/callgraph.md**: コールグラフ機能に関するドキュメント。
- **.github_automation/callgraph/presets/callgraph.js**: コールグラフの視覚化に使用されるフロントエンドJavaScriptコード。グラフの描画、インタラクション、レイアウト調整などを担当します。
- **.github_automation/callgraph/presets/style.css**: コールグラフの視覚化に使用されるCSSスタイルシート。グラフの外観や情報パネルのスタイルを定義します。
- **.github_automation/callgraph/scripts/analyze-codeql.cjs**: CodeQLを用いてコードベースを分析し、結果を生成するスクリプト。
- **.github_automation/callgraph/scripts/callgraph-utils.cjs**: コールグラフ生成に関連するユーティリティ関数を集めたスクリプト。
- **.github_automation/callgraph/scripts/check-codeql-exists.cjs**: CodeQLがシステムに存在するかどうかを確認するスクリプト。
- **.github_automation/callgraph/scripts/check-node-version.cjs**: Node.jsのバージョンが要件を満たしているか確認するスクリプト。
- **.github_automation/callgraph/scripts/common-utils.cjs**: プロジェクト全体で共有される汎用的なユーティリティ関数。
- **.github_automation/callgraph/scripts/copy-commit-results.cjs**: 特定のコミットの分析結果をコピーするスクリプト。
- **.github_automation/callgraph/scripts/extract-sarif-info.cjs**: CodeQLの出力フォーマットであるSARIFファイルから情報を抽出するスクリプト。
- **.github_automation/callgraph/scripts/find-process-results.cjs**: プロセス関連の結果を検索するスクリプト。
- **.github_automation/callgraph/scripts/generate-html-graph.cjs**: コード分析結果からHTML形式の呼び出しグラフを生成するスクリプト。
- **.github_automation/callgraph/scripts/generateHTML.cjs**: HTML生成の共通ロジックを持つスクリプト。
- **.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs**: 最近人間によるコミットがあったかをチェックするスクリプト。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: プロジェクトのデイリーサマリー設定に関するドキュメント。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: 開発状況の要約を生成するためのプロンプトテンプレート。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: プロジェクト概要を生成するためのプロンプトテンプレート。
- **.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs**: プロジェクト要約生成プロセスの全体を調整するスクリプト。
- **.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs**: 開発状況の要約を生成するスクリプト。
- **.github_automation/project_summary/scripts/development/GitUtils.cjs**: Git操作に関するユーティリティ関数を提供するスクリプト。
- **.github_automation/project_summary/scripts/development/IssueTracker.cjs**: Issueトラッキングに関するロジックを扱うスクリプト。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: プロジェクトの要約を自動生成するメインスクリプト。
- **.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs**: コードベースを分析し、構造や統計情報を抽出するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs**: プロジェクト分析全体のオーケストレーションを行うスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs**: プロジェクトから様々なデータを収集するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs**: 収集したプロジェクトデータを整形するスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs**: プロジェクト概要のテキストを生成するスクリプト。
- **.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs**: プロジェクトの使用技術スタックを分析するスクリプト。
- **.github_automation/project_summary/scripts/shared/BaseGenerator.cjs**: 各種ジェネレータの基底クラスまたは共通機能を提供するスクリプト。
- **.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs**: ファイルシステム操作に関するユーティリティ関数。
- **.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs**: プロジェクト内のファイル操作に関するユーティリティ関数。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: 自動翻訳機能の設定に関するドキュメント。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルを多言語に自動翻訳するスクリプト。
- **.gitignore**: Gitが追跡しないファイルやディレクトリを指定するファイル。
- **.vscode/settings.json**: VS Codeエディタのワークスペース固有の設定ファイル。
- **LICENSE**: プロジェクトのライセンス情報。
- **README.ja.md**: プロジェクトの日本語版説明ドキュメント。
- **README.md**: プロジェクトの英語版（またはデフォルト）説明ドキュメント。
- **generated-docs/callgraph.html**: 生成された関数呼び出しグラフを可視化するHTMLファイル。`.github_automation/callgraph/scripts/` 配下のスクリプトによって生成されます。
- **generated-docs/callgraph.js**: `generated-docs/callgraph.html` に組み込まれるJavaScriptファイルで、グラフの動的な挙動やインタラクションを制御します。`.github_automation/callgraph/presets/callgraph.js` と同内容の可能性があります。
- **generated-docs/style.css**: `generated-docs/callgraph.html` に組み込まれるスタイルシートで、グラフやUIの見た目を定義します。`.github_automation/callgraph/presets/style.css` と同内容の可能性があります。
- **issue-notes/** (複数の .md ファイル): 各Issueに関する開発者向けのメモファイル群。
- **src/main.js**: プロジェクトのデモンストレーションやエントリーポイントとして機能するJavaScriptファイル。

## 関数詳細説明
- **escapeHtml(html) (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: HTML文字列内の特殊文字をエスケープし、安全に表示できるようにします。
  - 引数: `html` (string) - エスケープするHTML文字列。
  - 戻り値: (string) - エスケープされたHTML文字列。
  - 機能: XSS攻撃などのセキュリティリスクを軽減し、マークアップが正しく解釈されるようにします。
- **getLayoutConfig() (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: グラフのレイアウト設定を取得または定義します。
  - 引数: なし。
  - 戻り値: (object) - レイアウト設定を含むオブジェクト。
  - 機能: グラフノードの配置や重なり方に関する設定を提供し、異なるレイアウトオプションを切り替える際に使用されます。
- **placeCentralNode(nodeId) (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: 指定されたノードをグラフの中心に配置し、その周辺に関連ノードを配置します。
  - 引数: `nodeId` (string) - 中心に配置するノードのID。
  - 戻り値: なし。
  - 機能: 特定の関数を中心に据えてその呼び出し関係を視覚的に強調するのに役立ちます。
- **showNodeInfo(node) (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: グラフ上のノード（関数）に関する詳細情報を情報パネルに表示します。
  - 引数: `node` (object) - 表示するノードのデータオブジェクト。
  - 戻り値: なし。
  - 機能: ユーザーがノードをクリックまたはホバーした際に、そのノードのメタデータ（ファイルパス、行数など）を提供します。
- **showEdgeInfo(edge) (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: グラフ上のエッジ（呼び出し関係）に関する詳細情報を情報パネルに表示します。
  - 引数: `edge` (object) - 表示するエッジのデータオブジェクト。
  - 戻り値: なし。
  - 機能: ユーザーがエッジをクリックまたはホバーした際に、その呼び出しに関する詳細（例: 呼び出し箇所）を提供します。
- **hideInfoPanel() (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: 情報表示パネルを非表示にします。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: グラフの表示領域を広げたり、不要な情報を隠したりします。
- **showInfoPanel() (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: 情報表示パネルを表示します。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: 詳細情報をユーザーに提示する際にパネルを表示します。
- **toggleInfoPanel() (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: 情報表示パネルの表示/非表示を切り替えます。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: ユーザーがボタンなどをクリックして情報パネルの表示状態を簡単に変更できるようにします。
- **generateGitHubURL(filePath, startLine, endLine) (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: GitHubリポジトリの特定のファイル、特定の行範囲へのURLを生成します。
  - 引数: `filePath` (string), `startLine` (number), `endLine` (number)。
  - 戻り値: (string) - 生成されたGitHub URL。
  - 機能: グラフ上のノードやエッジから直接ソースコードの該当箇所にジャンプできるようにします。
- **resetLayout() (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: グラフのレイアウトを初期状態にリセットします。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: ユーザーがグラフ操作で混乱した場合に、元の見やすい状態に戻すことができます。
- **watchNodeMovementAndFixOverlapsWrap() (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: ノードの動きを監視し、重なりを修正する処理のラッパー関数。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: `watchNodeMovementAndFixOverlaps` の実行を制御します。
- **watchNodeMovementAndFixOverlaps() (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: グラフのノードが移動する際に、他のノードとの重なりを自動的に修正します。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: グラフの見やすさを保ち、ノード情報が隠れないようにします。
- **resolveNodeOverlaps() (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: グラフ内の重なっているノードの位置を調整し、重なりを解消します。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: グラフが密になりすぎたときに、ノードを分散させて個々の要素を識別しやすくします。
- **switchLayout(layoutType) (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: グラフのレイアウトアルゴリズムを切り替えます。
  - 引数: `layoutType` (string) - 使用するレイアウトの種類（例: 'circle', 'grid'）。
  - 戻り値: なし。
  - 機能: 異なる視覚的ニーズやグラフの規模に応じて、最適なレイアウトを選択できるようにします。
- **resetNodeStates() (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: グラフ内の全ノードの状態（選択状態、ハイライトなど）をリセットします。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: グラフを操作した後、ノードの視覚的な状態を初期化します。
- **fitToContent() (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: グラフの表示範囲を調整し、全てのノードが画面に収まるようにズームレベルを変更します。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: 大規模なグラフでも全体像を一度に把握できるようにします。
- **toggleNodeLabels() (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: グラフノードのラベル（関数名など）の表示/非表示を切り替えます。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: ラベルが多すぎてグラフが見にくい場合に非表示にしたり、特定のノードを識別するために表示したりします。
- **toggleCalleeLocationFilter() (.github_automation/callgraph/presets/callgraph.js / generated-docs/callgraph.js)**:
  - 役割: 呼び出された関数（Callee）の場所に基づいたフィルターの有効/無効を切り替えます。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: 特定のファイルやモジュールに限定して呼び出し関係を分析する際に使用されます。
- **greet(name) (src/main.js)**:
  - 役割: 指定された名前に挨拶メッセージを生成します。
  - 引数: `name` (string) - 挨拶の対象となる名前。
  - 戻り値: (string) - 挨拶メッセージ。
  - 機能: プロジェクトの基本的なJavaScript関数のデモンストレーションや、簡単なユーティリティとして使用されます。
- **main() (src/main.js)**:
  - 役割: プロジェクトのエントリーポイントとなるメイン関数です。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: アプリケーションの開始時に実行されるロジック（例: `greet` 関数の呼び出し）を含みます。

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
Generated at: 2025-10-15 07:06:12 JST

Last updated: 2025-10-09

# Project Overview

## プロジェクト概要
- 🚀 複数プロジェクトにおけるGitHub Actionsの管理を効率化します。
- 🔗 共通化されたワークフローを提供し、プロジェクト横断で再利用を可能にします。
- ✅ ワークフローの一括メンテナンスを実現し、各プロジェクトの開発に集中できる環境を提供します。

## 技術スタック
- フロントエンド: 特になし
- 音楽・オーディオ:
    - Tone.js: Web Audio APIを抽象化し、Web上で高度な音楽・オーディオ処理を可能にするJavaScriptライブラリ。
    - Web Audio API: ブラウザに搭載されているネイティブの音声処理APIで、Tone.jsを介して利用されます。
    - MML (Music Macro Language): 楽譜をテキストで記述するための記法パーサー。
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するための非同期イベント駆動型JavaScript実行環境。
- テスト: 特になし
- ビルドツール: 特になし
- 言語機能: 特になし
- 自動化・CI/CD:
    - GitHub Actions: コードリポジトリからのイベントをトリガーに、様々な自動化ワークフローを実行するCI/CDサービス。プロジェクト要約自動生成、Issue自動管理、README多言語翻訳、i18n automationなどが含まれます。
- 開発標準: 特になし

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
- **`.github_automation/callgraph/codeql-queries/callgraph.ql`**: CodeQLを使用してコードの呼び出しグラフを生成するためのクエリ定義ファイルです。
- **`.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml`**: CodeQLパックの依存関係をロックするためのファイルです。
- **`.github_automation/callgraph/codeql-queries/qlpack.yml`**: CodeQLパックの設定ファイルです。
- **`.github_automation/callgraph/config/example.json`**: 関数呼び出しグラフ生成に関する設定の例が記述されたJSONファイルです。
- **`.github_automation/callgraph/docs/callgraph.md`**: 関数呼び出しグラフ機能に関する説明ドキュメントです。
- **`.github_automation/callgraph/presets/callgraph.js`**: 生成された関数呼び出しグラフの表示ロジック、インタラクション、レイアウト制御を定義するJavaScriptファイルです。
- **`.github_automation/callgraph/presets/style.css`**: 関数呼び出しグラフのHTMLビューの視覚的なスタイルを定義するCSSファイルです。
- **`.github_automation/callgraph/scripts/analyze-codeql.cjs`**: CodeQLの分析を実行するためのスクリプトです。
- **`.github_automation/callgraph/scripts/callgraph-utils.cjs`**: 関数呼び出しグラフ関連のユーティリティ関数を提供するスクリプトです。
- **`.github_automation/callgraph/scripts/check-codeql-exists.cjs`**: CodeQLが環境に存在するかどうかをチェックするスクリプトです。
- **`.github_automation/callgraph/scripts/check-node-version.cjs`**: Node.jsのバージョンをチェックするスクリプトです。
- **`.github_automation/callgraph/scripts/common-utils.cjs`**: 共通のユーティリティ関数を提供するスクリプトです。
- **`.github_automation/callgraph/scripts/copy-commit-results.cjs`**: コミット結果をコピーするためのスクリプトです。
- **`.github_automation/callgraph/scripts/extract-sarif-info.cjs`**: SARIF形式のファイルから情報を抽出するスクリプトです。
- **`.github_automation/callgraph/scripts/find-process-results.cjs`**: 処理結果を検索するスクリプトです。
- **`.github_automation/callgraph/scripts/generate-html-graph.cjs`**: HTML形式のグラフを生成するスクリプトです。
- **`.github_automation/callgraph/scripts/generateHTML.cjs`**: HTMLコンテンツを生成するスクリプトです。
- **`.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs`**: 最近の人間によるコミットをチェックし、CI/CDの挙動を調整するためのスクリプトです。
- **`.github_automation/project_summary/docs/daily-summary-setup.md`**: 日次プロジェクト概要生成に関する設定手順を記述したドキュメントです。
- **`.github_automation/project_summary/prompts/development-status-prompt.md`**: 開発状況の概要を生成するためのプロンプトのテンプレートです。
- **`.github_automation/project_summary/prompts/project-overview-prompt.md`**: プロジェクト全体の概要を生成するためのプロンプトのテンプレートです。
- **`.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`**: プロジェクト概要生成処理全体の調整役を担うスクリプトです。
- **`.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`**: 開発状況のレポートを生成するスクリプトです。
- **`.github_automation/project_summary/scripts/development/GitUtils.cjs`**: Git操作に関連するユーティリティ関数を提供するスクリプトです。
- **`.github_automation/project_summary/scripts/development/IssueTracker.cjs`**: Issue追跡に関連する機能を提供するスクリプトです。
- **`.github_automation/project_summary/scripts/generate-project-summary.cjs`**: プロジェクト概要を生成するためのメインスクリプトです。
- **`.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs`**: プロジェクトのコードを分析するスクリプトです。
- **`.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs`**: プロジェクト分析プロセスを統括するスクリプトです。
- **`.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs`**: プロジェクトデータを収集するスクリプトです。
- **`.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs`**: 収集したプロジェクトデータを整形するスクリプトです。
- **`.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs`**: プロジェクトの概要を生成するスクリプトです。
- **`.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs`**: プロジェクトの技術スタックを分析するスクリプトです。
- **`.github_automation/project_summary/scripts/shared/BaseGenerator.cjs`**: 各種ジェネレータの基底クラスを提供するスクリプトです。
- **`.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs`**: ファイルシステム操作に関するユーティリティ関数を提供するスクリプトです。
- **`.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs`**: プロジェクト内のファイル操作に関するユーティリティ関数を提供するスクリプトです。
- **`.github_automation/translate/docs/TRANSLATION_SETUP.md`**: READMEなどの多言語翻訳機能に関するセットアップ手順を記述したドキュメントです。
- **`.github_automation/translate/scripts/translate-readme.cjs`**: READMEファイルを自動で多言語に翻訳するためのスクリプトです。
- **`.gitignore`**: Gitがバージョン管理の対象から除外するファイルやディレクトリを指定する設定ファイルです。
- **`.vscode/settings.json`**: Visual Studio Codeエディタのワークスペース固有の設定ファイルです。
- **`LICENSE`**: プロジェクトのライセンス情報が記述されています。
- **`README.ja.md`**: プロジェクトの目的、使い方、貢献方法などを日本語で説明するメインドキュメントです。
- **`README.md`**: プロジェクトの目的、使い方、貢献方法などを英語で説明するメインドキュメントです。
- **`generated-docs/callgraph.html`**: 生成された関数呼び出しグラフを視覚化するためのHTMLファイルです。
- **`generated-docs/callgraph.js`**: `presets/callgraph.js` と同じく、生成されたグラフのインタラクションを制御するJavaScriptファイルです。
- **`generated-docs/style.css`**: `presets/style.css` と同じく、生成されたグラフのスタイリング定義です。
- **`issue-notes/`**: GitHub Issuesに関連する自動生成されたメモや情報が格納されるディレクトリです。
- **`src/main.js`**: プロジェクトの主要なエントリーポイントとなるJavaScriptファイルで、簡単な挨拶機能を含みます。

## 関数詳細説明
- **`escapeHtml(text)`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: HTMLの特殊文字をエスケープし、テキストがHTMLとして安全に表示されるようにします。
    - 引数: `text` (string) - エスケープする文字列。
    - 戻り値: エスケープされた文字列。
- **`getLayoutConfig()`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフのレイアウト設定を取得または決定します。
    - 引数: なし。
    - 戻り値: レイアウト設定オブジェクト。
- **`placeCentralNode(nodeId, x, y)`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: 特定のノードを中心位置に配置します。
    - 引数: `nodeId` (string) - 中心に配置するノードのID。`x` (number), `y` (number) - 配置する座標。
    - 戻り値: なし。
- **`showNodeInfo(node)`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフ上の特定のノードに関する詳細情報を表示パネルに表示します。
    - 引数: `node` (object) - 表示するノードオブジェクト。
    - 戻り値: なし。
- **`showEdgeInfo(edge)`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフ上の特定のエッジ（線）に関する詳細情報を表示パネルに表示します。
    - 引数: `edge` (object) - 表示するエッジオブジェクト。
    - 戻り値: なし。
- **`hideInfoPanel()`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフ情報の表示パネルを非表示にします。
    - 引数: なし。
    - 戻り値: なし。
- **`showInfoPanel()`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフ情報の表示パネルを表示します。
    - 引数: なし。
    - 戻り値: なし。
- **`toggleInfoPanel()`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフ情報の表示パネルの表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **`generateGitHubURL(filePath, startLine, endLine)`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: 指定されたファイルパスと行範囲に基づいて、GitHub上のソースコードへのURLを生成します。
    - 引数: `filePath` (string), `startLine` (number), `endLine` (number)。
    - 戻り値: 生成されたGitHub URL (string)。
- **`resetLayout()`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフのレイアウトを初期状態にリセットします。
    - 引数: なし。
    - 戻り値: なし。
- **`watchNodeMovementAndFixOverlapsWrap()`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: ノードの動きを監視し、その動きに応じて重なりを修正する処理をラップします。
    - 引数: なし。
    - 戻り値: なし。
- **`watchNodeMovementAndFixOverlaps()`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: ノードの移動イベントをリッスンし、ノード間の重なりを自動的に解決します。
    - 引数: なし。
    - 戻り値: なし。
- **`resolveNodeOverlaps()`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフ内のノードの重なりを検出し、視覚的に見やすいように位置を調整して解決します。
    - 引数: なし。
    - 戻り値: なし。
- **`switchLayout(layoutName)`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフの表示レイアウトを異なるアルゴリズムに切り替えます。
    - 引数: `layoutName` (string) - 切り替えるレイアウトの名前。
    - 戻り値: なし。
- **`resetNodeStates()`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフ内の全てのノードの選択状態やハイライト状態をリセットします。
    - 引数: なし。
    - 戻り値: なし。
- **`fitToContent()`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフ全体がビューポート内に収まるようにズームレベルや位置を調整します。
    - 引数: なし。
    - 戻り値: なし。
- **`toggleNodeLabels()`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: グラフノードのラベルの表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **`toggleCalleeLocationFilter()`** (.github_automation/callgraph/presets/callgraph.js):
    - 役割: 呼び出し先（Callee）の場所によるフィルタリングを有効/無効に切り替えます。
    - 引数: なし。
    - 戻り値: なし。
- **`greet(name)`** (src/main.js):
    - 役割: 指定された名前に対して挨拶メッセージを生成します。
    - 引数: `name` (string) - 挨拶の対象となる名前。
    - 戻り値: 挨拶メッセージ (string)。
- **`main()`** (src/main.js):
    - 役割: プロジェクトの主要な実行ロジックをカプセル化し、`greet`関数を呼び出して結果をコンソールに出力します。
    - 引数: なし。
    - 戻り値: なし。
- (その他、`on`, `ready`, `addListener`はイベントリスナーの登録に関連する一般的なメソッド、`function`, `switch`, `replace`, `max`, `if`, `for`はJavaScriptの言語構文や組み込み関数/メソッドであり、本プロジェクト固有の関数としての説明は割愛します。)

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
- main (src/main.js)
  - greet (src/main.js)

---
Generated at: 2025-10-09 07:05:34 JST

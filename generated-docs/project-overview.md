Last updated: 2025-10-04

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽にします。
- 🔗 共通化されたワークフローを提供し、どのプロジェクトからも簡単に呼び出せるようにします。
- ✅ ワークフローのメンテナンスを一括で行い、各プロジェクトの開発に集中できる環境を整えます。

## 技術スタック
- フロントエンド: 該当する主要技術はありませんが、生成されるコールグラフの可視化にはJavaScript、HTML、CSSが用いられています。
- 音楽・オーディオ:
    - Tone.js: Web Audio APIを抽象化し、ブラウザ上で音楽やオーディオ処理を容易にするためのライブラリです。
    - Web Audio API: ブラウザに標準搭載されている音声処理のためのAPIで、Tone.js経由で利用されます。
    - MML (Music Macro Language): 音楽記法を記述するための言語で、このプロジェクト内で何らかの解析・処理に利用される可能性があります。
- 開発ツール:
    - Node.js runtime: JavaScriptの実行環境であり、プロジェクト内の各種スクリプトの実行に利用されています。
- テスト: 該当する主要技術は明示されていません。
- ビルドツール: 該当する主要技術は明示されていませんが、CodeQLは解析結果からSARIFレポートを生成します。
- 言語機能: 該当する主要技術は明示されていません。
- 自動化・CI/CD:
    - GitHub Actions: CI/CDの自動化ツールであり、以下の9つの共通ワークフローを提供しています。
        - プロジェクト要約自動生成
        - Issue自動管理
        - README多言語翻訳
        - i18n automation (自動翻訳ワークフロー)

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
-   `.github_automation/callgraph/codeql-queries/callgraph.ql`: CodeQLクエリ言語で書かれたファイルで、ソースコード内の関数呼び出し関係を分析し、呼び出しグラフを生成するために使用されます。
-   `.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml`: CodeQLパックの依存関係とそのバージョンを固定するためのロックファイルです。
-   `.github_automation/callgraph/codeql-queries/qlpack.yml`: CodeQLパックの設定ファイルで、クエリのメタデータや依存関係を定義します。
-   `.github_automation/callgraph/config/example.json`: 関数呼び出しグラフ生成ツールの設定例を記述したJSONファイルです。
-   `.github_automation/callgraph/docs/callgraph.md`: 関数呼び出しグラフ生成機能に関する詳細なドキュメントです。
-   `.github_automation/callgraph/presets/callgraph.js`: 生成された関数呼び出しグラフをインタラクティブに表示・操作するためのJavaScriptコードです。ノードの配置、情報表示、レイアウト調整などの機能を提供します。
-   `.github_automation/callgraph/presets/style.css`: 生成された関数呼び出しグラフの視覚的なスタイルを定義するCSSファイルです。
-   `.github_automation/callgraph/scripts/analyze-codeql.cjs`: CodeQL解析を実行し、その結果であるSARIFレポートを処理するためのスクリプトです。
-   `.github_automation/callgraph/scripts/callgraph-utils.cjs`: 関数呼び出しグラフ生成に関連する様々なユーティリティ関数を集めたスクリプトです。
-   `.github_automation/callgraph/scripts/check-codeql-exists.cjs`: システムにCodeQLがインストールされているかを確認するためのスクリプトです。
-   `.github_automation/callgraph/scripts/check-node-version.cjs`: スクリプト実行に必要なNode.jsのバージョンが満たされているかを確認するためのスクリプトです。
-   `.github_automation/callgraph/scripts/common-utils.cjs`: プロジェクト内の複数のスクリプトで共通的に利用される汎用ユーティリティ関数群です。
-   `.github_automation/callgraph/scripts/copy-commit-results.cjs`: コミット関連の処理結果をコピーするためのスクリプトです。
-   `.github_automation/callgraph/scripts/extract-sarif-info.cjs`: SARIF形式の解析結果ファイルから必要な情報を抽出するためのスクリプトです。
-   `.github_automation/callgraph/scripts/find-process-results.cjs`: 特定の処理結果を検索・特定するためのスクリプトです。
-   `.github_automation/callgraph/scripts/generate-html-graph.cjs`: 解析結果からHTML形式の関数呼び出しグラフを生成するためのスクリプトです。
-   `.github_automation/callgraph/scripts/generateHTML.cjs`: HTMLコンテンツを生成するための汎用的なスクリプトです。
-   `.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs`: 自動化されたプロセスが誤ってコミットを行わないよう、最近人間がコミットしたかどうかを確認するスクリプトです。
-   `.github_automation/project_summary/docs/daily-summary-setup.md`: 日次プロジェクトサマリーの生成と設定に関するドキュメントです。
-   `.github_automation/project_summary/prompts/development-status-prompt.md`: 開発状況レポートを生成する際に使用されるプロンプトのテンプレートです。
-   `.github_automation/project_summary/prompts/project-overview-prompt.md`: プロジェクト概要を生成する際に使用されるプロンプトのテンプレートです。
-   `.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`: プロジェクトサマリー生成プロセス全体の調整役となるスクリプトです。
-   `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`: 現在の開発状況に関するレポートを生成するスクリプトです。
-   `.github_automation/project_summary/scripts/development/GitUtils.cjs`: Gitリポジトリの操作（コミット履歴の取得など）に関するユーティリティ関数を提供します。
-   `.github_automation/project_summary/scripts/development/IssueTracker.cjs`: GitHub Issuesの情報を追跡・処理するためのスクリプトです。
-   `.github_automation/project_summary/scripts/generate-project-summary.cjs`: プロジェクトサマリー生成処理全体の実行をトリガーするメインスクリプトです。
-   `.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs`: プロジェクトのコードベースを分析し、構造や品質に関する情報を収集するスクリプトです。
-   `.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs`: プロジェクト分析プロセスの各ステップを調整し、全体を管理するスクリプトです。
-   `.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs`: プロジェクトに関する様々なデータ（ファイル、コード、依存関係など）を収集するスクリプトです。
-   `.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs`: 収集したプロジェクトデータを特定のフォーマットに整形するためのスクリプトです。
-   `.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs`: 収集・分析されたデータに基づいて、プロジェクトの概要を生成するスクリプトです。
-   `.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs`: プロジェクトで使用されている技術スタックを特定し、分析するスクリプトです。
-   `.github_automation/project_summary/scripts/shared/BaseGenerator.cjs`: 各種レポートや概要を生成するスクリプトの基盤となる共通機能を提供します。
-   `.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs`: ファイルシステムに対する操作（ファイルの読み書き、ディレクトリの作成など）に関するユーティリティ関数を提供します。
-   `.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs`: プロジェクト内のファイルに関する操作（特定のファイルの検索、内容の読み込みなど）に関するユーティリティ関数を提供します。
-   `.github_automation/translate/docs/TRANSLATION_SETUP.md`: プロジェクトの多言語翻訳機能の設定方法に関するドキュメントです。
-   `.github_automation/translate/scripts/translate-readme.cjs`: `README.md`ファイルなどのドキュメントを自動的に多言語に翻訳するためのスクリプトです。
-   `.gitignore`: Gitバージョン管理システムが無視すべきファイルやディレクトリのパターンを定義するファイルです。
-   `.vscode/settings.json`: Visual Studio Codeエディタのワークスペース固有の設定を定義するファイルです。
-   `LICENSE`: プロジェクトのライセンス情報が記述されたファイルです。
-   `README.ja.md`: プロジェクトの概要と使用方法を日本語で説明するメインドキュメントです。
-   `README.md`: プロジェクトの概要と使用方法を英語で説明するメインドキュメントです。
-   `generated-docs/callgraph.html`: `callgraph`機能によって生成された、プロジェクトの関数呼び出し関係を視覚化したHTMLファイルです。
-   `generated-docs/callgraph.js`: `generated-docs/callgraph.html`で使用されるJavaScriptファイルで、グラフのインタラクティブな操作や表示ロジックを担います。
-   `generated-docs/style.css`: `generated-docs/callgraph.html`で使用されるCSSファイルで、グラフの外観を定義します。
-   `issue-notes/X.md` (Xは数字): 特定のGitHub Issueに関連するメモや追加情報を格納するMarkdownファイル群です。
-   `src/main.js`: このプロジェクトの基本的な機能やエントリーポイントとして機能するJavaScriptファイルです。

## 関数詳細説明
-   `escapeHtml` (.github_automation/callgraph/presets/callgraph.js): HTML特殊文字を安全な表現に変換し、XSS攻撃などを防ぎます。
-   `getLayoutConfig` (.github_automation/callgraph/presets/callgraph.js): グラフ描画のためのレイアウト設定オブジェクトを取得します。
-   `placeCentralNode` (.github_automation/callgraph/presets/callgraph.js): グラフの中心となるノードを特定の位置に配置します。
-   `showNodeInfo` (.github_automation/callgraph/presets/callgraph.js): 選択されたノード（関数など）に関する詳細情報を表示パネルに表示します。
-   `showEdgeInfo` (.github_automation/callgraph/presets/callgraph.js): 選択されたエッジ（呼び出し関係）に関する詳細情報を表示パネルに表示します。
-   `hideInfoPanel` (.github_automation/callgraph/presets/callgraph.js): グラフ情報表示用のパネルを非表示にします。
-   `showInfoPanel` (.github_automation/callgraph/presets/callgraph.js): グラフ情報表示用のパネルを表示します。
-   `toggleInfoPanel` (.github_automation/callgraph/presets/callgraph.js): グラフ情報表示パネルの表示状態を切り替えます。
-   `generateGitHubURL` (.github_automation/callgraph/presets/callgraph.js): 指定された情報に基づき、GitHubリポジトリ内のファイルへのURLを生成します。
-   `resetLayout` (.github_automation/callgraph/presets/callgraph.js): グラフの表示レイアウトを初期状態にリセットします。
-   `watchNodeMovementAndFixOverlapsWrap` (.github_automation/callgraph/presets/callgraph.js): ノードの動きを監視し、重なりを修正するロジックをラップする関数です。
-   `watchNodeMovementAndFixOverlaps` (.github_automation/callgraph/presets/callgraph.js): グラフ上のノードが移動する際に、他のノードとの重なりが発生しないように調整します。
-   `resolveNodeOverlaps` (.github_automation/callgraph/presets/callgraph.js): 重なり合ったノードを検出し、適切な位置に移動させて重なりを解消します。
-   `switchLayout` (.github_automation/callgraph/presets/callgraph.js): グラフの描画レイアウトアルゴリズムを切り替えます。
-   `resetNodeStates` (.github_automation/callgraph/presets/callgraph.js): グラフ上の全てのノードの状態（選択状態、ハイライトなど）を初期化します。
-   `fitToContent` (.github_automation/callgraph/presets/callgraph.js): グラフ全体がビューポート内に収まるようにズームレベルと位置を調整します。
-   `toggleNodeLabels` (.github_automation/callgraph/presets/callgraph.js): グラフ上のノードに表示されるラベルの表示・非表示を切り替えます。
-   `toggleCalleeLocationFilter` (.github_automation/callgraph/presets/callgraph.js): 呼び出し先（Callee）のロケーションに基づいてノードをフィルタリングする機能を切り替えます。
-   `replace` (.github_automation/callgraph/presets/callgraph.js): 文字列内の特定のパターンを別の文字列で置換する汎用関数です。
-   `switch` (.github_automation/callgraph/presets/callgraph.js): 複数の条件分岐を効率的に処理するための制御構文（JavaScriptの`switch`文）。
-   `function` (.github_automation/callgraph/presets/callgraph.js): 匿名関数または別の関数定義のコンテキスト内で使用される汎用関数定義です。
-   `max` (.github_automation/callgraph/presets/callgraph.js): 与えられた数値の中から最大値を返す汎用関数です。
-   `on` (.github_automation/callgraph/presets/callgraph.js): 特定のイベントが発生したときに実行されるコールバック関数を登録するための関数です。
-   `if` (.github_automation/callgraph/presets/callgraph.js): 条件が真である場合に特定のコードブロックを実行するための制御構文（JavaScriptの`if`文）。
-   `for` (.github_automation/callgraph/presets/callgraph.js): 特定の回数だけコードブロックを繰り返すための制御構文（JavaScriptの`for`文）。
-   `ready` (.github_automation/callgraph/presets/callgraph.js): ドキュメントオブジェクトモデル（DOM）の準備が完了したときに実行されるコールバック関数を登録します。
-   `addListener` (.github_automation/callgraph/presets/callgraph.js): 指定された要素にイベントリスナーを追加します。
-   `greet` (src/main.js): 簡単な挨拶メッセージを生成し、返します。
-   `main` (src/main.js): プロジェクトの主要な処理を実行するエントリーポイント関数です。

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
Generated at: 2025-10-04 07:05:03 JST

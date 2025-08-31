Last updated: 2025-08-31

# Project Overview

## プロジェクト概要
- 🚀 このリポジトリは、GitHub Actionsの共通ワークフローを集約し、プロジェクトごとのActions管理を簡素化します。
- 🔗 標準化されたワークフローを呼び出すだけで、開発者は個々のプロジェクトでGitHub Actionsの設定に時間を費やす必要がなくなります。
- ✅ ワークフローの一元的なメンテナンスを可能にし、プロジェクト開発に集中できる環境を提供します。

## 技術スタック
- フロントエンド: なし
- 音楽・オーディオ:
  - Tone.js: Web Audio APIを抽象化し、ブラウザ上で音楽やオーディオ処理を容易にするJavaScriptライブラリです。
  - Web Audio API: ウェブブラウザ上で高度な音声処理を行うための標準的なAPIです（Tone.js経由で使用）。
  - MML (Music Macro Language): テキストベースで音楽を記述するための言語記法パーサーです。
- 開発ツール:
  - Node.js runtime: JavaScriptの実行環境であり、サーバーサイドスクリプトやツール開発に使用されます。
  - npm scripts: `package.json`ファイルに定義されたスクリプトを実行するためのNode.jsパッケージマネージャーの機能です。
  - Google Generative AI: AIによるテキスト生成や分析をサポートし、プロジェクトのドキュメント生成などに活用されます。
  - @octokit/rest: GitHub APIと連携し、リポジトリやIssueなどの情報をプログラムで操作するためのライブラリです。
- テスト: なし
- ビルドツール: なし
- 言語機能:
  - JavaScript: Node.js環境で動作する主要なプログラミング言語です。
- 自動化・CI/CD:
  - GitHub Actions: GitHubリポジトリ内でコードのビルド、テスト、デプロイなどのワークフローを自動化するためのCI/CDプラットフォームです。このリポジトリには以下の8つのワークフローが含まれます:
    - プロジェクト要約自動生成: AIを利用してプロジェクトの概要や進捗を自動生成します。
    - Issue自動管理: GitHub Issueのライフサイクル管理や情報抽出を自動化します。
    - README多言語翻訳: READMEファイルを自動的に複数の言語に翻訳します。
    - i18n automation: 国際化 (i18n) プロセスを自動化するためのワークフローです。
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
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLのクエリファイル。リポジトリのコードベースから関数呼び出しグラフを抽出するための論理を定義します。
- **.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係をロックするためのファイルで、分析の一貫性を保証します。
- **.github_automation/callgraph/codeql-queries/qlpack.yml**: CodeQLパックの設定ファイル。クエリのメタデータや依存関係を定義します。
- **.github_automation/callgraph/config/example.json**: 関数呼び出しグラフ生成ツールの設定例を記述したJSONファイルです。
- **.github_automation/callgraph/docs/callgraph.md**: 関数呼び出しグラフ生成機能に関する説明ドキュメントです。
- **.github_automation/callgraph/presets/callgraph.js**: 関数呼び出しグラフをブラウザ上で表示・操作するためのJavaScriptコード。グラフのレイアウト、ノードやエッジの情報表示、インタラクティブな機能を提供します。
- **.github_automation/callgraph/presets/style.css**: 関数呼び出しグラフの見た目を定義するCSSファイルです。グラフのノード、エッジ、情報パネルなどのスタイルを含みます。
- **.github_automation/callgraph/scripts/analyze-codeql.cjs**: CodeQLの分析を実行し、その結果を処理するためのスクリプトです。
- **.github_automation/callgraph/scripts/callgraph-utils.cjs**: 関数呼び出しグラフ生成に関連する共通ユーティリティ関数群を提供します。
- **.github_automation/callgraph/scripts/check-codeql-exists.cjs**: CodeQLが環境に存在するかどうかを確認するスクリプトです。
- **.github_automation/callgraph/scripts/check-commits.cjs**: コミット履歴をチェックし、特定の条件を満たすコミットを識別するスクリプトです。
- **.github_automation/callgraph/scripts/check-node-version.cjs**: Node.jsのバージョンが要件を満たしているかを確認するスクリプトです。
- **.github_automation/callgraph/scripts/common-utils.cjs**: プロジェクト全体で利用される汎用ユーティリティ関数を提供します。
- **.github_automation/callgraph/scripts/copy-commit-results.cjs**: コミット関連の分析結果をコピーするためのスクリプトです。
- **.github_automation/callgraph/scripts/extract-sarif-info.cjs**: SARIF形式の分析結果から必要な情報を抽出するスクリプトです。
- **.github_automation/callgraph/scripts/find-process-results.cjs**: プロセス実行の結果を検索・処理するためのスクリプトです。
- **.github_automation/callgraph/scripts/generate-html-graph.cjs**: 分析結果からHTML形式のグラフを生成するスクリプトです。
- **.github_automation/callgraph/scripts/generateHTML.cjs**: HTMLファイルを生成するための汎用スクリプトです。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: 日次進捗レポートのセットアップに関するドキュメントです。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: 開発状況の要約を生成するためのAIプロンプトのテンプレートです。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: プロジェクト概要を生成するためのAIプロンプトのテンプレートです。
- **.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs**: プロジェクト概要生成のプロセス全体を調整・管理するメインスクリプトです。
- **.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs**: 開発状況のレポートを生成するスクリプトです。
- **.github_automation/project_summary/scripts/development/GitUtils.cjs**: Gitリポジトリ操作に関するユーティリティ関数を提供します。
- **.github_automation/project_summary/scripts/development/IssueTracker.cjs**: GitHub Issueの追跡と情報取得を行うスクリプトです。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: プロジェクトの概要を生成するためのメインエントリーポイントとなるスクリプトです。
- **.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs**: コードベースを分析し、構造や統計情報を収集するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs**: プロジェクト分析プロセス全体のオーケストレーションを担当するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs**: プロジェクトに関する各種データを収集するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs**: 収集したプロジェクトデータを整形し、出力に適した形式にするスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs**: 収集・整形されたデータに基づいて、最終的なプロジェクト概要を生成するスクリプトです。
- **.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs**: プロジェクトの技術スタックを分析し、その情報を抽出するスクリプトです。
- **.github_automation/project_summary/scripts/shared/BaseGenerator.cjs**: 各種レポート生成スクリプトの基底クラスや共通機能を提供します。
- **.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs**: ファイルシステム操作に関するユーティリティ関数を提供します。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: 多言語翻訳ワークフローのセットアップに関するドキュメントです。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルを多言語に翻訳するためのスクリプトです。
- **.gitignore**: Gitのバージョン管理から除外するファイルやディレクトリを指定する設定ファイルです。
- **.vscode/settings.json**: VS Codeエディタのプロジェクト固有の設定を定義するファイルです。
- **LICENSE**: プロジェクトのライセンス情報が記述されたファイルです。
- **README.ja.md**: プロジェクトの概要や使い方を日本語で説明するメインのドキュメントです。
- **README.md**: プロジェクトの概要や使い方を英語で説明するメインのドキュメントです。
- **generated-docs/callgraph.html**: 生成された関数呼び出しグラフを可視化したHTMLファイルです。
- **generated-docs/callgraph.js**: 生成された関数呼び出しグラフを表示・操作するためのJavaScriptコードです。`callgraph.js`と同様の機能を持つ、動的に生成されたスクリプトです。
- **generated-docs/development-status-generated-prompt.md**: AIによって生成された開発状況プロンプトの最終出力です。
- **generated-docs/development-status.md**: 生成された開発状況レポートです。
- **generated-docs/project-overview.md**: 生成されたプロジェクト概要レポートです。
- **generated-docs/style.css**: 生成されたドキュメントのスタイルを定義するCSSファイルです。`style.css`と同様の定義を持つ、動的に生成されたスタイルシートです。
- **issue-notes/*.md**: 各Issueに関連するメモや詳細情報を記述したMarkdownファイル群です。
- **package-lock.json**: プロジェクトの依存関係の正確なバージョンを記録し、ビルドの一貫性を保証するファイルです。
- **package.json**: プロジェクトのメタデータ（名前、バージョン、スクリプト、依存関係など）を定義するファイルです。
- **src/main.js**: プログラムのメインのエントリポイントとなるJavaScriptファイルです。

## 関数詳細説明
- **escapeHtml (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: HTMLの特殊文字をエスケープし、クロスサイトスクリプティング（XSS）攻撃を防ぐためのユーティリティ関数です。
  - 引数: `text` (文字列) - エスケープ対象の文字列。
  - 戻り値: エスケープされた文字列。
  - 機能: HTMLエンティティ（例: `<`を`&lt;`に）に変換します。
- **getLayoutConfig (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: グラフのレイアウトに関する設定を取得します。
  - 引数: なし。
  - 戻り値: レイアウト設定オブジェクト。
  - 機能: グラフの表示形式や配置に関するパラメータを提供します。
- **placeCentralNode (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: グラフの中央にノードを配置します。
  - 引数: なし (おそらくノードIDや位置情報を受け取る)。
  - 戻り値: なし。
  - 機能: 特定のノードを視覚的に中心に配置することで、注目させます。
- **showNodeInfo (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: 特定のノード（関数など）の詳細情報を表示します。
  - 引数: `node` (オブジェクト) - 表示するノードのデータ。
  - 戻り値: なし。
  - 機能: ノードの属性（名前、ファイル、行数など）を情報パネルに表示します。
- **showEdgeInfo (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: 特定のエッジ（呼び出し関係など）の詳細情報を表示します。
  - 引数: `edge` (オブジェクト) - 表示するエッジのデータ。
  - 戻り値: なし。
  - 機能: エッジの属性（呼び出し元、呼び出し先など）を情報パネルに表示します。
- **hideInfoPanel (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: グラフの情報表示パネルを非表示にします。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: 詳細情報表示エリアを閉じます。
- **showInfoPanel (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: グラフの情報表示パネルを表示します。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: 詳細情報表示エリアを開きます。
- **toggleInfoPanel (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: グラフの情報表示パネルの表示/非表示を切り替えます。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: 情報パネルの状態を反転させます。
- **generateGitHubURL (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: GitHubリポジトリ内のファイルやコードへのURLを生成します。
  - 引数: `filePath` (文字列), `lineNumber` (数値) など。
  - 戻り値: 生成されたGitHub URL文字列。
  - 機能: コードの特定の場所へのリンクを動的に作成します。
- **resetLayout (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: グラフのレイアウトを初期状態に戻します。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: ノードの配置やズームレベルをリセットします。
- **watchNodeMovementAndFixOverlapsWrap (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: ノードの移動を監視し、オーバーラップを解消する処理をラップします。
  - 引数: なし (おそらくタイマーIDなど)。
  - 戻り値: なし。
  - 機能: ノードが重なり合わないように定期的に調整処理を呼び出します。
- **watchNodeMovementAndFixOverlaps (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: ノードの移動を監視し、他のノードとの重なりを自動的に解消します。
  - 引数: なし (おそらくノードリスト)。
  - 戻り値: なし。
  - 機能: グラフの視認性を高めるためにノードの位置を調整します。
- **resolveNodeOverlaps (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: 視覚的に重なっているノードの位置を調整し、重なりを解消します。
  - 引数: なし (おそらくノードリスト)。
  - 戻り値: なし。
  - 機能: グラフ内のノードの衝突を避け、整列させます。
- **switchLayout (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: グラフのレイアウトアルゴリズムを切り替えます。
  - 引数: `layoutType` (文字列) - 新しいレイアウトの種類。
  - 戻り値: なし。
  - 機能: 異なる視覚的表現のためにグラフの配置方法を変更します。
- **resetNodeStates (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: グラフ内の全てのノードの状態（選択、ハイライトなど）をリセットします。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: ノードの強調表示などをクリアします。
- **fitToContent (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: グラフ全体がビューポートに収まるようにズームレベルを調整します。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: グラフ全体を一度に表示できるようにします。
- **toggleNodeLabels (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: グラフノードのラベル（名前）の表示/非表示を切り替えます。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: ノードの識別子が表示されるかどうかを制御します。
- **toggleCalleeLocationFilter (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: 呼び出し先（callee）のファイルロケーションに基づくフィルタリングの有効/無効を切り替えます。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: 特定の場所に定義されている関数のみを表示するなどのフィルタリングを行います。
- **replace (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: 文字列内の特定のパターンを置換する一般的なユーティリティ関数。
  - 引数: `str` (文字列), `searchValue` (文字列|正規表現), `replaceValue` (文字列)
  - 戻り値: 置換後の文字列。
  - 機能: 文字列操作を行います。
- **switch (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: JavaScriptのswitch文。複数の条件分岐を処理します。
  - 引数: `expression` - 評価する値。
  - 戻り値: なし。
  - 機能: 複数のケースに基づいて異なるコードブロックを実行します。
- **function (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: JavaScriptの関数宣言または無名関数。特定の処理をカプセル化します。
  - 引数: なし (または任意のパラメータ)。
  - 戻り値: なし (または任意の値を返す)。
  - 機能: コードの再利用性や構造化を可能にします。
- **max (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: 数値の最大値を返す関数（おそらく`Math.max`）。
  - 引数: `num1, num2, ...` (数値)。
  - 戻り値: 最大値の数値。
  - 機能: 複数の数値の中から最大のものを特定します。
- **on (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: イベントリスナーを登録する関数（おそらくjQueryなどのイベントハンドラ）。
  - 引数: `eventType` (文字列), `handler` (関数)。
  - 戻り値: なし。
  - 機能: 特定のイベントが発生したときに指定された関数を実行します。
- **if (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: JavaScriptのif文。条件に基づいてコードブロックを実行します。
  - 引数: `condition` (真偽値)。
  - 戻り値: なし。
  - 機能: 条件が真の場合にのみ特定の処理を行います。
- **for (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: JavaScriptのfor文。指定された回数だけコードブロックを繰り返します。
  - 引数: ループ変数、条件、増減式など。
  - 戻り値: なし。
  - 機能: 配列のイテレーションや繰り返し処理を実行します。
- **ready (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: ドキュメントの準備が完了したときに実行されるイベントハンドラ（おそらくjQueryの`$(document).ready()`）。
  - 引数: `handler` (関数)。
  - 戻り値: なし。
  - 機能: DOMが完全にロードされてからスクリプトを実行します。
- **addListener (in .github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)**:
  - 役割: イベントリスナーを追加する汎用的な関数。
  - 引数: `target` (イベントソース), `eventType` (文字列), `handler` (関数)。
  - 戻り値: なし。
  - 機能: 特定の要素やオブジェクトにイベントハンドラを紐付けます。
- **greet (in src/main.js)**:
  - 役割: 簡単な挨拶メッセージを生成して返します。
  - 引数: なし。
  - 戻り値: 挨拶文字列 ("Hello, World!").
  - 機能: 基本的な出力機能を提供します。
- **main (in src/main.js)**:
  - 役割: プログラムのエントリポイントとなる関数です。
  - 引数: なし。
  - 戻り値: なし。
  - 機能: `greet`関数を呼び出し、その結果をコンソールに出力します。

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
Generated at: 2025-08-31 07:04:44 JST

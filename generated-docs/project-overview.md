Last updated: 2025-09-23

# Project Overview

## プロジェクト概要
- プロジェクトごとのGitHub Actions管理をもっと楽にし、運用の負担を軽減します。
- 共通化されたワークフローを、どのプロジェクトからも呼び出すだけで利用可能です。
- ワークフローのメンテナンスは一括で行え、プロジェクト開発者は本来の開発に集中できます。

## 技術スタック
- フロントエンド: 該当なし（直接的なフロントエンドフレームワークやライブラリの言及なし）
- 音楽・オーディオ:
  - Tone.js: Web Audio APIを利用したウェブベースの音声合成・エフェクト処理ライブラリ。
  - Web Audio API: ブラウザ上で高度な音声処理を行うためのAPI。Tone.jsを介して利用されます。
  - MML (Music Macro Language): 音楽をテキスト形式で記述するための記法パーサー。
- 開発ツール:
  - Node.js runtime: JavaScriptコードを実行するための環境。自動化スクリプトの実行に利用されます。
- テスト: 該当なし
- ビルドツール: 該当なし
- 言語機能:
  - MML (Music Macro Language): 音楽記法そのものであり、その解析機能が利用されます。
- 自動化・CI/CD:
  - GitHub Actions: コードの変更を検知して自動でタスクを実行するCI/CDプラットフォーム。以下の共通ワークフローが含まれます:
    - プロジェクト要約自動生成
    - Issue自動管理
    - README多言語翻訳
    - i18n automation: 国際化対応のための自動翻訳ワークフロー
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
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLを利用してコードベース内の関数呼び出し関係を抽出するためのクエリ定義ファイルです。
- **.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係を管理するロックファイルです。
- **.github_automation/callgraph/codeql-queries/qlpack.yml**: CodeQLパックのメタデータと設定を定義するファイルです。
- **.github_automation/callgraph/config/example.json**: 関数呼び出しグラフ生成のための設定例を含むJSONファイルです。
- **.github_automation/callgraph/docs/callgraph.md**: 関数呼び出しグラフ機能に関する説明ドキュメントです。
- **.github_automation/callgraph/presets/callgraph.js**: 生成された関数呼び出しグラフのインタラクティブな表示、ノードの操作、レイアウト調整などを担当するJavaScriptコードです。
- **.github_automation/callgraph/presets/style.css**: 関数呼び出しグラフのHTML表示に使用されるCSSスタイル定義ファイルです。
- **.github_automation/callgraph/scripts/analyze-codeql.cjs**: CodeQL分析プロセスを実行するためのCommonJSスクリプトです。
- **.github_automation/callgraph/scripts/callgraph-utils.cjs**: 関数呼び出しグラフの生成・処理に関するユーティリティ関数群を提供するCommonJSスクリプトです。
- **.github_automation/callgraph/scripts/check-codeql-exists.cjs**: システムにCodeQLがインストールされているかを確認するCommonJSスクリプトです。
- **.github_automation/callgraph/scripts/check-node-version.cjs**: 実行環境のNode.jsバージョンを確認するCommonJSスクリプトです。
- **.github_automation/callgraph/scripts/common-utils.cjs**: 複数のスクリプトで利用される汎用的なユーティリティ関数群を提供するCommonJSスクリプトです。
- **.github_automation/callgraph/scripts/copy-commit-results.cjs**: 特定のコミットに関連する結果ファイルをコピーするCommonJSスクリプトです。
- **.github_automation/callgraph/scripts/extract-sarif-info.cjs**: SARIF (Static Analysis Results Interchange Format) ファイルから分析結果情報を抽出するCommonJSスクリプトです。
- **.github_automation/callgraph/scripts/find-process-results.cjs**: 特定の処理結果を検索・特定するためのCommonJSスクリプトです。
- **.github_automation/callgraph/scripts/generate-html-graph.cjs**: CodeQL分析結果から関数呼び出しグラフのHTMLビューを生成するCommonJSスクリプトです。
- **.github_automation/callgraph/scripts/generateHTML.cjs**: HTMLドキュメントの生成に関連する共通ロジックを提供するCommonJSスクリプトです。
- **.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs**: 最近のコミットが人間によって行われたものか（ボットによるものではないか）をチェックするCommonJSスクリプトです。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: プロジェクトのデイリーサマリー自動生成機能の設定方法に関するドキュメントです。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: 開発状況レポートを生成するためのプロンプトテンプレートです。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: プロジェクト概要を生成するためのプロンプトテンプレートです。
- **.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs**: プロジェクト概要生成ワークフロー全体を調整・管理するCommonJSスクリプトです。
- **.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs**: プロジェクトの現在の開発状況を分析し、レポートを生成するCommonJSスクリプトです。
- **.github_automation/project_summary/scripts/development/GitUtils.cjs**: Gitリポジトリ操作に関連するユーティリティ関数群を提供するCommonJSスクリプトです。
- **.github_automation/project_summary/scripts/development/IssueTracker.cjs**: GitHub Issueの追跡と情報取得に関連する機能を提供するCommonJSスクリプトです。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: プロジェクトの全体概要を生成するためのメインとなるCommonJSスクリプトです。
- **.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs**: プロジェクトのコードベースを解析し、構造や統計情報を抽出するCommonJSスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs**: プロジェクト分析の各ステップを調整し、全体的なフローを管理するCommonJSスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs**: プロジェクトに関する様々なデータ（ファイル情報、コミット履歴など）を収集するCommonJSスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs**: 収集したプロジェクトデータを、特定のレポート形式に合わせて整形するCommonJSスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs**: 収集・整形されたデータに基づいて、最終的なプロジェクト概要レポートを作成するCommonJSスクリプトです。
- **.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs**: プロジェクトで使用されている技術スタックを特定し、詳細を分析するCommonJSスクリプトです。
- **.github_automation/project_summary/scripts/shared/BaseGenerator.cjs**: 各種生成スクリプトの共通の基底クラスやユーティリティ関数を提供するCommonJSスクリプトです。
- **.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs**: ファイルシステムの操作（読み書き、ディレクトリ作成など）に関する汎用ユーティリティ関数を提供するCommonJSスクリプトです。
- **.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs**: プロジェクトファイルに特化した操作（特定のファイル検索、内容読み込みなど）に関するユーティリティ関数を提供するCommonJSスクリプトです。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: READMEなどの多言語翻訳機能の設定方法に関するドキュメントです。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルを指定された言語に自動翻訳するCommonJSスクリプトです。
- **.gitignore**: Gitのバージョン管理から除外するファイルやディレクトリのパターンを定義します。
- **.vscode/settings.json**: Visual Studio Codeのワークスペース固有の設定を定義するファイルです。
- **LICENSE**: プロジェクトのソフトウェアライセンス情報が記述されています。
- **README.ja.md**: プロジェクトの日本語版説明ドキュメントです。
- **README.md**: プロジェクトの英語版説明ドキュメントです。
- **generated-docs/callgraph.html**: 自動生成された関数呼び出しグラフのHTMLファイルです。
- **generated-docs/callgraph.js**: `presets/callgraph.js`が生成物としてコピーされたもので、生成されたHTMLグラフのインタラクティブな動作を制御します。
- **generated-docs/style.css**: `presets/style.css`が生成物としてコピーされたもので、生成されたHTMLグラフのスタイルを定義します。
- **issue-notes/*.md**: GitHub Actionsによる自動管理または手動で作成された、特定のIssueに関する詳細なメモや情報が記述されたMarkdownファイルです。
- **src/main.js**: プロジェクトの動作例として含まれる、シンプルなJavaScriptのエントリポイントファイルです。

## 関数詳細説明
- **escapeHtml** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: HTML特殊文字をエスケープし、セキュリティを強化した文字列を生成します。
  - 機能: HTMLエンティティへの変換を行います。
- **getLayoutConfig** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフ描画のためのレイアウト設定オブジェクトを取得します。
  - 機能: グラフの配置や表示に関する設定値を返します。
- **placeCentralNode** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフ表示における中心となるノードを配置します。
  - 機能: 視覚的な焦点を当てるノードの初期位置を設定します。
- **showNodeInfo** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 特定のノード（関数など）に関する詳細情報を表示パネルに表示します。
  - 機能: ノード選択時にその詳細な属性や関連情報をユーザーに提示します。
- **showEdgeInfo** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 特定のエッジ（呼び出し関係など）に関する詳細情報を表示パネルに表示します。
  - 機能: エッジ選択時にその詳細な属性や関連情報をユーザーに提示します。
- **hideInfoPanel** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 情報表示パネルを非表示にします。
  - 機能: ユーザーインターフェースから情報パネルを一時的に隠します。
- **showInfoPanel** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 情報表示パネルを表示します。
  - 機能: 隠されていた情報パネルをユーザーインターフェースに表示します。
- **toggleInfoPanel** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 情報表示パネルの表示/非表示状態を切り替えます。
  - 機能: パネルが非表示なら表示し、表示中なら非表示にします。
- **generateGitHubURL** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフのノードに対応するGitHub上のコードへのURLを生成します。
  - 機能: 特定のファイルや行番号へ直接リンクするURLを作成します。
- **resetLayout** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフのレイアウトを初期状態にリセットします。
  - 機能: ユーザーによる変更やズームなどを元に戻し、デフォルトの配置に戻します。
- **watchNodeMovementAndFixOverlapsWrap** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: ノードの移動監視とオーバーラップ解決の処理をラップする関数です。
  - 機能: 複数の処理をまとめて実行するためのインターフェースを提供します。
- **watchNodeMovementAndFixOverlaps** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフ内のノードの移動を監視し、他のノードとの視覚的な重なりを解決します。
  - 機能: ノードが移動した際に、自動的に他のノードとの衝突を避け、見やすい配置を維持します。
- **resolveNodeOverlaps** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフ内のノードが重なっている場合に、それらを解決して適切な位置に再配置します。
  - 機能: ノードの視覚的な重なりを検出し、重ならないように調整します。
- **switchLayout** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフのレイアウトアルゴリズムまたは表示モードを切り替えます。
  - 機能: 異なる視覚化スタイルや配置方法を適用します。
- **resetNodeStates** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフ内のすべてのノードの選択状態やハイライトなどの状態をリセットします。
  - 機能: ノードの視覚的な状態を初期化します。
- **fitToContent** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフ全体が現在のビューポートに収まるようにズームレベルとパンを調整します。
  - 機能: グラフの内容がすべて見えるように表示を最適化します。
- **toggleNodeLabels** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: グラフノードのラベル（テキスト表示）の表示/非表示を切り替えます。
  - 機能: グラフの視認性を高めるため、ラベルのオン/オフを制御します。
- **toggleCalleeLocationFilter** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 呼び出し先（Callee）の位置に基づくフィルタリングの有効/無効を切り替えます。
  - 機能: 特定の場所の呼び出し先のみを表示するなど、フィルタリング機能を提供します。
- **replace** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 文字列内の特定のパターンを別の文字列に置換します。
  - 機能: 主にDOM要素のテキスト内容の調整やデータ処理に使用されます。
- **switch** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 複数の条件に基づいて異なるコードブロックを実行します。
  - 機能: 通常は選択肢に基づいた処理の分岐に使用されます。（ここではキーワードとして検出）
- **function** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: JavaScriptにおける関数定義のキーワード。文脈上は匿名関数やコールバック関数として利用されます。
  - 機能: コードの塊を定義し、再利用可能な形で実行します。
- **max** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 複数の数値の中から最大値を返します。
  - 機能: 比較や制約計算などに使用されます。（ここでは汎用的な数学関数として検出）
- **on** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 特定のイベントが発生したときに実行されるイベントリスナーを設定します。
  - 機能: ユーザーの操作やシステムイベントに応答するインタラクティブな動作を実装します。
- **if** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 条件が真の場合にコードブロックを実行する条件分岐ステートメントです。
  - 機能: プログラムのフローを制御します。（ここではキーワードとして検出）
- **for** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 特定の回数だけコードブロックを繰り返し実行するループステートメントです。
  - 機能: 配列の走査や繰り返し処理に使用されます。（ここではキーワードとして検出）
- **ready** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: ドキュメントオブジェクトモデル (DOM) の準備が完了したときに実行される処理を設定します。
  - 機能: DOM操作が必要なスクリプトが、ページが完全にロードされる前に実行されないようにします。
- **addListener** (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js):
  - 役割: 特定のDOM要素やオブジェクトにイベントリスナーを追加します。
  - 機能: イベント駆動型プログラミングにおいて、イベント発生時のコールバック関数を登録します。
- **greet** (src/main.js):
  - 役割: 指定された名前に挨拶メッセージを生成します。
  - 引数: `name` (string) - 挨拶の対象となる名前。
  - 機能: "Hello, [name]!" という形式の文字列を返します。
- **main** (src/main.js):
  - 役割: プログラムのエントリポイントであり、基本的な実行フローを定義します。
  - 引数: なし。
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
Generated at: 2025-09-23 07:05:45 JST

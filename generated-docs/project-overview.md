Last updated: 2025-09-12

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: N/A (本プロジェクトは共通ワークフロー集であり、直接的なフロントエンドUIは含まれませんが、一部のツールでブラウザ上での表示を生成する機能があります。)
- 音楽・オーディオ:
    - Tone.js: Web Audio APIを抽象化し、ブラウザ上で高度な音声処理を可能にするJavaScriptライブラリ。
    - Web Audio API: ブラウザに組み込まれた音声処理API。Tone.jsを介して利用されます。
    - MML (Music Macro Language): 音楽をテキストで記述するための記法パーサー。
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するためのサーバーサイド実行環境。
    - npm scripts: `package.json`で定義されたスクリプトを実行するためのタスクランナー。
    - Google Generative AI: AIによるテキスト生成や分析をサポートするGoogleのジェネレーティブAIサービスとの連携ライブラリ。
    - @octokit/rest: GitHub APIと連携し、リポジトリ情報の取得や操作を可能にするライブラリ。
- テスト: N/A
- ビルドツール: N/A (npm scriptsが簡単なタスク実行に使用されます。)
- 言語機能:
    - JavaScript: プロジェクトのスクリプト開発に使用されるプログラミング言語。
- 自動化・CI/CD:
    - GitHub Actions: コードのビルド、テスト、デプロイなどのワークフローを自動化するCI/CDプラットフォーム。本プロジェクトでは以下の共通ワークフローを提供します。
        - プロジェクト要約自動生成: リポジトリの内容を分析し、要約を自動生成します。
        - Issue自動管理: GitHub Issuesの管理を自動化します。
        - README多言語翻訳: READMEファイルを複数の言語に自動翻訳します。
        - i18n automation: 国際化対応のための自動翻訳ワークフロー。
- 開発標準: N/A

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
-   `.github_automation/callgraph/codeql-queries/callgraph.ql`: CodeQLを用いて、ソースコード内の関数呼び出し関係を抽出するためのクエリを定義します。
-   `.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml`: CodeQLパックの依存関係とバージョンをロックするファイルです。
-   `.github_automation/callgraph/codeql-queries/qlpack.yml`: CodeQLパックのメタデータと設定を定義するファイルです。
-   `.github_automation/callgraph/config/example.json`: 関数呼び出しグラフ生成ツールの設定例をJSON形式で提供します。
-   `.github_automation/callgraph/docs/callgraph.md`: 関数呼び出しグラフツールの使い方や機能に関するドキュメントです。
-   `.github_automation/callgraph/presets/callgraph.js`: 生成された関数呼び出しグラフのインタラクティブな表示（ノード配置、情報表示、レイアウト切り替えなど）を制御するJavaScriptコードです。
-   `.github_automation/callgraph/presets/style.css`: 関数呼び出しグラフの見た目（色、フォント、レイアウトなど）を定義するCSSファイルです。
-   `.github_automation/callgraph/scripts/analyze-codeql.cjs`: CodeQLによるコード分析を実行し、呼び出しグラフのデータソースを生成するスクリプトです。
-   `.github_automation/callgraph/scripts/callgraph-utils.cjs`: 呼び出しグラフの生成と表示に関する共通ユーティリティ関数を提供します。
-   `.github_automation/callgraph/scripts/check-codeql-exists.cjs`: システムにCodeQLがインストールされているかを確認するスクリプトです。
-   `.github_automation/callgraph/scripts/check-commits.cjs`: Gitコミット履歴をチェックし、特定の条件を満たすコミットを識別するスクリプトです。
-   `.github_automation/callgraph/scripts/check-node-version.cjs`: 必要なNode.jsのバージョンが満たされているかを確認するスクリプトです。
-   `.github_automation/callgraph/scripts/common-utils.cjs`: プロジェクト全体で利用される汎用的なユーティリティ関数を集めたスクリプトです。
-   `.github_automation/callgraph/scripts/copy-commit-results.cjs`: コミット分析の結果ファイルなどを指定の場所にコピーするスクリプトです。
-   `.github_automation/callgraph/scripts/extract-sarif-info.cjs`: CodeQLが生成するSARIF形式のレポートファイルから必要な情報を抽出するスクリプトです。
-   `.github_automation/callgraph/scripts/find-process-results.cjs`: プロセス実行結果や中間ファイルを見つけるためのスクリプトです。
-   `.github_automation/callgraph/scripts/generate-html-graph.cjs`: 分析結果からHTML形式の関数呼び出しグラフを生成するスクリプトです。
-   `.github_automation/callgraph/scripts/generateHTML.cjs`: HTMLファイルを動的に生成するための汎用的なスクリプトです。
-   `.github_automation/project_summary/docs/daily-summary-setup.md`: 日次プロジェクトサマリー自動生成ワークフローのセットアップ手順を説明するドキュメントです。
-   `.github_automation/project_summary/prompts/development-status-prompt.md`: 開発状況レポートを生成する際にAIに与えるプロンプトのテンプレートです。
-   `.github_automation/project_summary/prompts/project-overview-prompt.md`: プロジェクト概要を生成する際にAIに与えるプロンプトのテンプレートです。
-   `.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`: プロジェクトサマリー生成プロセス全体を調整・管理するスクリプトです。
-   `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`: 現在の開発状況に関するレポートを生成するスクリプトです。
-   `.github_automation/project_summary/scripts/development/GitUtils.cjs`: Gitリポジトリ操作（コミット履歴取得など）に関するユーティリティ関数を提供します。
-   `.github_automation/project_summary/scripts/development/IssueTracker.cjs`: GitHub Issuesの情報を取得・追跡するための機能を提供します。
-   `.github_automation/project_summary/scripts/generate-project-summary.cjs`: プロジェクトサマリー生成ワークフローのエントリスクリプトです。
-   `.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs`: ソースコードの内容を分析し、構造や特徴を把握するスクリプトです。
-   `.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs`: プロジェクト分析の各ステップを連携・実行するオーケストレータースクリプトです。
-   `.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs`: プロジェクトに関する各種データ（ファイルリスト、コード統計など）を収集するスクリプトです。
-   `.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs`: 収集したプロジェクトデータを、レポート生成に適した形式に整形するスクリプトです。
-   `.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs`: プロジェクトの全体像を要約した概要レポートを生成するスクリプトです。
-   `.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs`: プロジェクトで使用されている技術スタックを分析し、リストアップするスクリプトです。
-   `.github_automation/project_summary/scripts/shared/BaseGenerator.cjs`: 各種レポート生成スクリプトの基盤となる共通機能や抽象クラスを提供します。
-   `.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs`: ファイルシステムへのアクセス（読み書き、ディレクトリ作成など）に関するユーティリティ関数を提供します。
-   `.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs`: プロジェクト内のファイル操作（特定の種類のファイル検索など）に特化したユーティリティ関数を提供します。
-   `.github_automation/translate/docs/TRANSLATION_SETUP.md`: README翻訳ワークフローのセットアップ手順を説明するドキュメントです。
-   `.github_automation/translate/scripts/translate-readme.cjs`: READMEファイルを自動的に異なる言語に翻訳するスクリプトです。
-   `.gitignore`: Gitによってバージョン管理の対象外とするファイルやディレクトリを指定する設定ファイルです。
-   `.vscode/settings.json`: Visual Studio Codeエディタのワークスペース固有の設定を定義するファイルです。
-   `LICENSE`: プロジェクトの利用条件を定めるライセンス情報が記述されたファイルです。
-   `README.ja.md`: プロジェクトの概要、使い方、貢献方法などを日本語で説明する主要なドキュメントです。
-   `README.md`: プロジェクトの概要、使い方、貢献方法などを英語（またはメイン言語）で説明する主要なドキュメントです。
-   `generated-docs/callgraph.html`: 自動生成された関数呼び出しグラフのHTMLビューファイルです。
-   `generated-docs/callgraph.js`: 自動生成されたHTMLグラフ内でインタラクションを制御するJavaScriptファイルです。
-   `generated-docs/development-status-generated-prompt.md`: AIが生成した開発状況プロンプトの出力結果を保存するファイルです。
-   `generated-docs/development-status.md`: 自動生成された開発状況の要約レポートファイルです。
-   `generated-docs/project-overview.md`: 自動生成されたプロジェクト概要レポートファイルです。
-   `generated-docs/style.css`: `generated-docs`内のHTMLファイルに適用されるスタイルシートです。
-   `issue-notes/*.md`: 各GitHub Issueに関連する補足情報やメモを記録するためのMarkdownファイル群です。
-   `package-lock.json`: `package.json`に記述された依存関係の正確なバージョンとツリー構造を記録し、ビルドの再現性を保証するファイルです。
-   `package.json`: プロジェクトのメタデータ（名前、バージョン、スクリプトなど）と依存関係を定義するファイルです。
-   `src/main.js`: プロジェクトの簡単なエントリスクリプトまたはテスト用スクリプトとして機能するJavaScriptファイルです。

## 関数詳細説明
-   `escapeHtml(text)`
    -   役割: 与えられたテキストに含まれるHTML特殊文字（&, <, >, ", 'など）をエスケープ処理し、安全にHTMLとして表示できるようにします。
    -   引数: `text` (string) - エスケープ対象の文字列。
    -   戻り値: (string) - エスケープ処理された文字列。
-   `getLayoutConfig()`
    -   役割: グラフのレイアウトに関する設定オブジェクトを取得します。
    -   引数: なし
    -   戻り値: (object) - レイアウト設定を含むオブジェクト。
-   `placeCentralNode()`
    -   役割: グラフの中心に配置されるべきノードの位置を調整します。
    -   引数: なし
    -   戻り値: なし
-   `showNodeInfo()`
    -   役割: 指定されたノードの詳細情報をUI上に表示します。
    -   引数: ノード識別子またはノードデータ
    -   戻り値: なし
-   `showEdgeInfo()`
    -   役割: 指定されたエッジ（ノード間の接続線）の詳細情報をUI上に表示します。
    -   引数: エッジ識別子またはエッジデータ
    -   戻り値: なし
-   `hideInfoPanel()`
    -   役割: グラフ表示に関連する情報パネルを非表示にします。
    -   引数: なし
    -   戻り値: なし
-   `showInfoPanel()`
    -   役割: グラフ表示に関連する情報パネルを表示します。
    -   引数: なし
    -   戻り値: なし
-   `toggleInfoPanel()`
    -   役割: グラフ表示に関連する情報パネルの表示/非表示を切り替えます。
    -   引数: なし
    -   戻り値: なし
-   `generateGitHubURL()`
    -   役割: 特定のリソース（ファイル、コミットなど）へのGitHub URLを生成します。
    -   引数: URL生成に必要なパラメータ
    -   戻り値: (string) - 生成されたGitHub URL。
-   `resetLayout()`
    -   役割: グラフのレイアウトを初期状態にリセットします。
    -   引数: なし
    -   戻り値: なし
-   `watchNodeMovementAndFixOverlapsWrap()`
    -   役割: ノードの移動を監視し、ノード同士の重なりを修正する処理のラッパー関数を提供します。
    -   引数: なし
    -   戻り値: なし
-   `watchNodeMovementAndFixOverlaps()`
    -   役割: グラフ内のノードの移動イベントを監視し、ノード同士が重ならないように自動的に位置を調整します。
    -   引数: なし
    -   戻り値: なし
-   `resolveNodeOverlaps()`
    -   役割: グラフ内のノードの重なりを検出し、互いに離れるように位置を調整して解決します。
    -   引数: なし
    -   戻り値: なし
-   `switchLayout()`
    -   役割: グラフの表示レイアウト（例: 円形、階層型など）を別のレイアウトに切り替えます。
    -   引数: 切り替えるレイアウトの種類
    -   戻り値: なし
-   `resetNodeStates()`
    -   役割: グラフ内のすべてのノードの選択状態やハイライト状態などを初期状態に戻します。
    -   引数: なし
    -   戻り値: なし
-   `fitToContent()`
    -   役割: グラフ全体がビューポート内に収まるようにズームレベルやパン位置を調整します。
    -   引数: なし
    -   戻り値: なし
-   `toggleNodeLabels()`
    -   役割: グラフノードのラベル（名前）の表示/非表示を切り替えます。
    -   引数: なし
    -   戻り値: なし
-   `toggleCalleeLocationFilter()`
    -   役割: 呼び出し先（callee）ノードのフィルタリング機能の有効/無効を切り替えます。
    -   引数: なし
    -   戻り値: なし
-   `replace()`
    -   役割: 文字列内の特定のパターンを別の文字列で置換する機能。JavaScriptの`String.prototype.replace()`に類似。
    -   引数: 検索パターン、置換文字列
    -   戻り値: (string) - 置換後の文字列。
-   `switch()`
    -   役割: 複数の実行パスから一つのパスを選択する制御構造。JavaScriptの`switch`文に類似。
    -   引数: 評価する値
    -   戻り値: なし (制御フローを管理)
-   `function()`
    -   役割: 匿名関数または関数定義のコンテキストを示す。特定の処理をカプセル化し、後で実行可能にする。
    -   引数: (可変) 関数定義による。
    -   戻り値: (可変) 関数定義による。
-   `max()`
    -   役割: 与えられた数値のリストから最大値を取得する。JavaScriptの`Math.max()`に類似。
    -   引数: (number...) - 比較する数値。
    -   戻り値: (number) - 最大値。
-   `on()`
    -   役割: 特定のイベントが発生したときに実行されるイベントハンドラを登録する。jQueryの`.on()`に類似。
    -   引数: イベントタイプ、イベントハンドラ関数
    -   戻り値: なし
-   `if()`
    -   役割: 条件が真である場合にのみ特定のコードブロックを実行する制御構造。JavaScriptの`if`文に類似。
    -   引数: 評価する条件
    -   戻り値: なし (制御フローを管理)
-   `for()`
    -   役割: 特定の条件が満たされる間、または特定の回数だけコードブロックを繰り返し実行する制御構造。JavaScriptの`for`文に類似。
    -   引数: 初期化、条件、更新式
    -   戻り値: なし (制御フローを管理)
-   `ready()`
    -   役割: ドキュメント（DOM）の準備が完了したときに実行される関数を登録する。jQueryの`.ready()`に類似。
    -   引数: なし
    -   戻り値: なし
-   `addListener()`
    -   役割: イベントターゲットにイベントリスナーを追加する。
    -   引数: イベントタイプ、イベントハンドラ関数
    -   戻り値: なし
-   `greet(name)`
    -   役割: 指定された名前に対して挨拶メッセージを生成します。
    -   引数: `name` (string) - 挨拶の対象となる名前。
    -   戻り値: (string) - 挨拶メッセージ。
-   `main()`
    -   役割: プロジェクトまたはアプリケーションの主要なエントリポイントとして機能し、中心的な処理を実行します。
    -   引数: なし
    -   戻り値: なし

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
Generated at: 2025-09-12 07:05:19 JST

Last updated: 2025-09-03

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド:
    - HTML/CSS/JavaScript: 自動生成されるドキュメント（`generated-docs/callgraph.html`, `style.css`, `callgraph.js`）において、視覚的な関数呼び出しグラフを表示するための基盤技術として使用されます。
- 音楽・オーディオ:
    - Tone.js: Web Audio APIを抽象化し、ブラウザ上で音楽制作や複雑なオーディオ処理を容易にするJavaScriptライブラリ。
    - Web Audio API: ブラウザに標準搭載された、高度な音声処理を行うためのAPI（Tone.jsを通じて利用）。
    - MML (Music Macro Language): 音楽をテキストで記述し、パーシングして演奏データに変換するための音楽記法。
- 開発ツール:
    - Node.js runtime: プロジェクトのJavaScriptスクリプトを実行するためのサーバーサイドJavaScript実行環境。
    - npm scripts: `package.json`に定義されたスクリプトを実行し、開発タスクを自動化するためのタスクランナー。
    - Google Generative AI: AIモデルを活用し、プロジェクトの文書生成や情報整理をサポートするためのサービスまたはAPI。
    - @octokit/rest: GitHub APIと連携し、リポジトリ情報の取得、Issueの操作、ワークフローの管理などを行うためのJavaScriptライブラリ。
- テスト: 特になし (提供情報に基づく)
- ビルドツール: 特になし (提供情報に基づく。シンプルなタスクはnpm scriptsで処理)
- 言語機能:
    - JavaScript: プロジェクトの主要な開発言語。Node.js環境で実行されるスクリプトが中心です。
- 自動化・CI/CD:
    - GitHub Actions: プロジェクトの継続的インテグレーションおよび継続的デリバリー（CI/CD）プロセスを自動化するためのプラットフォーム。
        - プロジェクト要約自動生成: AIを用いてプロジェクトの概要を自動生成するワークフロー。
        - Issue自動管理: GitHub Issueのライフサイクル管理を自動化するワークフロー。
        - README多言語翻訳: READMEファイルを複数の言語に自動翻訳するワークフロー。
        - i18n automation: 国際化対応のための自動翻訳ワークフロー。
        - CodeQL: コードの静的解析を行い、セキュリティ脆弱性やバグを検出するワークフロー。
- 開発標準: 特になし (提供情報に基づく)

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
  📖 23.md
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
- **.github_automation/:** GitHub Actionsによる自動化ワークフローや関連スクリプトを格納するルートディレクトリ。
    - **callgraph/:** コードの関数呼び出しグラフ生成に関連するツール群とスクリプトをまとめたディレクトリ。
        - **codeql-queries/:** CodeQLのクエリ定義を格納するディレクトリ。
            - **callgraph.ql:** CodeQLを用いてプロジェクト内の関数呼び出し関係を抽出するためのクエリ。
            - **codeql-pack.lock.yml:** CodeQLパックの依存関係とバージョンを固定するためのロックファイル。
            - **qlpack.yml:** CodeQLパックの設定ファイル。クエリのメタデータや依存関係を定義します。
        - **config/:** 設定ファイルを格納するディレクトリ。
            - **example.json:** 設定ファイルの例。特定の機能の動作をカスタマイズするためのテンプレートを提供します。
        - **docs/:** ドキュメントを格納するディレクトリ。
            - **callgraph.md:** 呼び出しグラフの生成方法や利用方法に関する説明ドキュメント。
        - **presets/:** 呼び出しグラフの表示に関するプリセット定義やスタイルを格納するディレクトリ。
            - **callgraph.js:** 呼び出しグラフの描画、インタラクション、レイアウト調整など、クライアントサイドのロジックを定義するJavaScriptファイル。
            - **style.css:** 呼び出しグラフの表示スタイル（色、フォント、配置など）を定義するCSSファイル。
        - **scripts/:** 呼び出しグラフ生成プロセス全体を管理・実行するための各種スクリプト。
            - **analyze-codeql.cjs:** CodeQL解析を実行し、コードベースからデータを抽出するスクリプト。
            - **callgraph-utils.cjs:** 呼び出しグラフの処理に特化したユーティリティ関数を提供するスクリプト。
            - **check-codeql-exists.cjs:** CodeQLツールが実行環境に存在するかどうかを確認するスクリプト。
            - **check-commits.cjs:** Gitのコミット履歴をチェックし、特定の条件に合致するコミットを特定するスクリプト。
            - **check-node-version.cjs:** 実行中のNode.jsのバージョンが必要な要件を満たしているかを確認するスクリプト。
            - **common-utils.cjs:** プロジェクト全体で共有される汎用的なユーティリティ関数（ファイル操作、ログ出力など）を提供するスクリプト。
            - **copy-commit-results.cjs:** 特定のコミットに関連する結果ファイルをコピーするスクリプト。
            - **extract-sarif-info.cjs:** CodeQLの出力形式であるSARIFファイルから必要な情報を抽出するスクリプト。
            - **find-process-results.cjs:** 特定の処理結果や生成物をファイルシステムから検索するスクリプト。
            - **generate-html-graph.cjs:** 抽出された呼び出しグラフデータを基に、HTML形式の視覚的なグラフを生成するスクリプト。
            - **generateHTML.cjs:** 一般的なHTMLファイルを生成するためのヘルパースクリプト。
    - **project_summary/:** プロジェクトの自動要約機能に関連するスクリプトとリソース。
        - **docs/:** ドキュメントを格納するディレクトリ。
            - **daily-summary-setup.md:** 日次サマリー機能の設定方法に関するドキュメント。
        - **prompts/:** AIモデルに渡すためのプロンプト定義ファイル。
            - **development-status-prompt.md:** 開発状況レポートを生成するためのAIプロンプト。
            - **project-overview-prompt.md:** プロジェクト概要を生成するためのAIプロンプト。
        - **scripts/:** プロジェクトの要約生成プロセスを管理・実行する各種スクリプト。
            - **ProjectSummaryCoordinator.cjs:** プロジェクトサマリー生成プロセス全体のオーケストレーションを行うスクリプト。
            - **development/:** 開発状況レポート生成に関連するスクリプト。
                - **DevelopmentStatusGenerator.cjs:** 開発状況に関する情報を収集・分析し、レポートを生成するスクリプト。
                - **GitUtils.cjs:** Gitリポジトリ操作（コミット履歴取得、ブランチ情報など）のためのユーティリティ関数。
                - **IssueTracker.cjs:** GitHub Issueの情報を取得・解析するためのユーティリティ関数。
            - **generate-project-summary.cjs:** プロジェクト全体の要約を生成するメインスクリプト。
            - **overview/:** プロジェクト概要生成に関連するスクリプト。
                - **CodeAnalyzer.cjs:** プロジェクトのソースコードを解析し、構造や特徴を把握するスクリプト。
                - **ProjectAnalysisOrchestrator.cjs:** プロジェクト解析の各フェーズを調整し、データ収集・分析フローを管理するスクリプト。
                - **ProjectDataCollector.cjs:** プロジェクトの様々なデータ（ファイル、コード、依存関係など）を収集するスクリプト。
                - **ProjectDataFormatter.cjs:** 収集したプロジェクトデータを整形し、AIモデルが処理しやすい形式に変換するスクリプト。
                - **ProjectOverviewGenerator.cjs:** 収集・解析されたデータに基づいて、プロジェクト概要を生成するスクリプト。
                - **TechStackAnalyzer.cjs:** プロジェクトで使用されている技術スタックを特定・分析するスクリプト。
            - **shared/:** 複数の生成スクリプト間で共有される共通ユーティリティ。
                - **BaseGenerator.cjs:** 各種ジェネレータの基底クラスとして、共通のメソッドやプロパティを提供するスクリプト。
                - **FileSystemUtils.cjs:** ファイルシステム操作（ファイルの読み書き、ディレクトリ作成など）のためのユーティリティ関数。
    - **translate/:** 多言語翻訳機能に関連するスクリプトとリソース。
        - **docs/:** ドキュメントを格納するディレクトリ。
            - **TRANSLATION_SETUP.md:** 翻訳機能の設定方法に関するドキュメント。
        - **scripts/:** 翻訳プロセスを管理するスクリプト。
            - **translate-readme.cjs:** READMEファイルを指定された言語に自動翻訳するスクリプト。
- **.gitignore:** Gitがバージョン管理の対象から除外するファイルやディレクトリのパターンを定義するファイル。
- **.vscode/:** Visual Studio Codeエディタのワークスペース固有の設定を格納するディレクトリ。
    - **settings.json:** VS Codeのワークスペース設定ファイル。リンティング、フォーマット、エディタの動作などをカスタマイズします。
- **LICENSE:** プロジェクトのライセンス情報が記述されたファイル。
- **README.ja.md:** プロジェクトの概要、目的、使用方法などを日本語で説明するメインのドキュメント。
- **README.md:** プロジェクトの概要、目的、使用方法などを英語で説明するメインのドキュメント。
- **generated-docs/:** 自動化ワークフローによって生成されたドキュメントやレポートを格納するディレクトリ。
    - **callgraph.html:** 自動生成された関数呼び出しグラフをブラウザで表示するためのHTMLファイル。
    - **callgraph.js:** 自動生成された`callgraph.html`で使用される、インタラクティブな呼び出しグラフ描画ロジックを含むJavaScriptファイル。
    - **development-status-generated-prompt.md:** 自動生成された開発状況レポートのプロンプト。
    - **development-status.md:** 自動生成された開発状況レポート。
    - **project-overview.md:** 自動生成されたプロジェクトの概要ドキュメント。
    - **style.css:** 自動生成されたドキュメントの表示スタイルを定義するCSSファイル。
- **issue-notes/:** GitHub Issueに関連する個別のメモや詳細情報を格納するディレクトリ。
    - **[ID].md (例: 10.md):** 各IssueのIDに対応するMarkdown形式のメモファイル。
- **package-lock.json:** `package.json`に記述された依存関係の正確なバージョンとそのサブ依存関係を記録するファイル。
- **package.json:** プロジェクトのメタデータ（名前、バージョン、説明など）、依存関係、スクリプトコマンドを定義するファイル。
- **src/:** プロジェクトの主要なソースコードを格納するディレクトリ。
    - **main.js:** プロジェクトのエントリポイント、または主要なアプリケーションロジックを含むJavaScriptファイル。

## 関数詳細説明
- **escapeHtml(html):** HTML文字列内の特殊文字（`<`, `>`, `&`, `"`, `'`）を対応するHTMLエンティティに変換し、XSS攻撃を防ぐための安全な表示を可能にします。
- **getLayoutConfig():** 呼び出しグラフのレイアウトに関する設定オブジェクト（例: ノードの配置規則、初期位置）を取得します。
- **placeCentralNode():** グラフ内で特定のノード（通常は最も重要なノード）を中央に配置するロジックを実装します。
- **showNodeInfo():** グラフ上のノードがクリックまたはホバーされた際に、そのノードの詳細情報（関数名、ファイルパスなど）を表示する関数。
- **showEdgeInfo():** グラフ上のエッジ（呼び出し関係の線）がクリックまたはホバーされた際に、そのエッジの詳細情報（呼び出し元・呼び出し先、関係性など）を表示する関数。
- **hideInfoPanel():** 表示されている情報パネル（ノードやエッジの詳細を表示するUI要素）を非表示にします。
- **showInfoPanel():** 指定された情報パネルを表示します。
- **toggleInfoPanel():** 情報パネルの現在の表示状態を切り替えます（表示されていれば非表示に、非表示であれば表示に）。
- **generateGitHubURL():** 関数定義やファイルパスに基づいて、対応するGitHubリポジトリのURLを生成します。
- **resetLayout():** 呼び出しグラフのレイアウトを初期状態にリセットします。
- **watchNodeMovementAndFixOverlapsWrap():** ノードの移動を監視し、他のノードとの重なりを自動的に修正する処理をラップする関数。
- **watchNodeMovementAndFixOverlaps():** グラフ内のノードが移動した際に、他のノードとの視覚的な重なりが発生しないように調整するアルゴリズムを実行します。
- **resolveNodeOverlaps():** グラフ内の重なり合っているノードを検出し、互いに干渉しないように位置を調整します。
- **switchLayout():** 呼び出しグラフの描画レイアウトアルゴリズム（例: 力学モデル、階層型）を切り替えます。
- **resetNodeStates():** グラフ内の全ノードの視覚的な状態（選択、ハイライトなど）を初期状態に戻します。
- **fitToContent():** グラフ全体が現在のビューポートに収まるように、ズームレベルや位置を調整します。
- **toggleNodeLabels():** グラフノードに表示されるラベル（関数名など）の表示/非表示を切り替えます。
- **toggleCalleeLocationFilter():** 呼び出し先（Callee）のロケーションに基づいてノードをフィルタリングする機能のオン/オフを切り替えます。
- **replace():** 文字列内の特定のパターンを別の文字列で置換する汎用的な関数。
- **switch():** 制御フローの切り替えを行うための言語構成要素。コンテキストによっては、特定の状態に基づいて異なる処理を実行する関数として利用されます。
- **function():** JavaScriptにおける関数定義のためのキーワード。文脈によっては、無名関数やコールバック関数として使用されます。
- **max():** 複数の数値の中から最大値を取得する汎用的な関数。
- **on():** イベントリスナーを要素にアタッチし、特定のイベントが発生したときに指定された関数を実行する汎用的な関数（例: jQueryのイベント処理）。
- **if():** 条件分岐を行うための言語構成要素。特定の条件が真の場合にコードブロックを実行します。
- **for():** ループ処理を行うための言語構成要素。指定された回数だけコードブロックを繰り返します。
- **ready():** ドキュメントオブジェクトモデル（DOM）が完全にロードされ、操作可能になったときに実行される関数（例: jQueryの`$(document).ready()`）。
- **addListener():** イベントリスナーをオブジェクトに追加し、特定のイベントが発生したときにコールバック関数を呼び出す汎用的な関数。
- **greet(name):** 引数として名前を受け取り、「Hello, [name]!」というあいさつメッセージを返す関数。
- **main():** プログラムのエントリポイントとして機能する主要な関数。プロジェクトのコアロジックや初期化処理を実行します。

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
Generated at: 2025-09-03 07:05:12 JST

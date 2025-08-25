Last updated: 2025-08-26

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: 主要なフロントエンド技術の直接的な使用は確認されません。
- 音楽・オーディオ: このプロジェクトはGitHub Actionsの共通ワークフロー集であり、音楽・オーディオ関連技術（Tone.js, Web Audio API, MML）は主要な機能として直接使用されていません。
- 開発ツール: 
    - Node.js runtime: JavaScriptコードを実行するための環境です。
    - npm scripts: プロジェクト内のタスク（スクリプトの実行など）を自動化するための機能です。
    - Google Generative AI: AIによるテキスト生成能力を活用し、ドキュメント生成などの自動化を支援します。
    - @octokit/rest: GitHub APIと連携し、リポジトリ情報の取得やIssueの操作などをプログラムから行います。
- テスト: 主要なテスト関連技術の直接的な使用は確認されません。
- ビルドツール: 主要なビルド・パース関連技術の直接的な使用は確認されません。
- 言語機能: 
    - JavaScript (Node.js): プロジェクトのスクリプト開発に使用される主要なプログラミング言語です。
- 自動化・CI/CD: 
    - GitHub Actions: コードの変更やイベントに基づいて、自動テスト、デプロイ、ドキュメント生成などのワークフローを実行するための強力なCI/CDプラットフォームです。このプロジェクトでは、以下の共通ワークフローを提供しています。
        - プロジェクト要約自動生成: プロジェクトの情報を分析し、概要を自動的に生成します。
        - Issue自動管理: GitHubのIssueを自動的に管理・更新します。
        - README多言語翻訳: READMEファイルを複数の言語に自動翻訳します。
        - i18n automation: 国際化（i18n）関連の自動化ワークフローを実行します。
- 開発標準: 主要なコード品質・統一ルール関連技術の直接的な使用は確認されません。

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
- **.github_automation/:** GitHub Actionsの共通ワークフローや自動化スクリプトを格納する主要なディレクトリです。
    - **callgraph/:** プロジェクトの関数呼び出しグラフを生成・表示するための機能を含みます。
        - **codeql-queries/:** CodeQL（コード解析エンジン）を使用して呼び出しグラフデータを抽出するためのクエリファイル群です。
            - `callgraph.ql`: 呼び出しグラフを生成するCodeQLクエリです。
            - `codeql-pack.lock.yml`: CodeQLパックの依存関係をロックするファイルです。
            - `qlpack.yml`: CodeQLパックの定義ファイルです。
        - **config/:** 呼び出しグラフ生成の設定ファイルを含みます。
            - `example.json`: 設定の例を示すJSONファイルです。
        - **docs/:** 呼び出しグラフ機能に関するドキュメントを格納します。
            - `callgraph.md`: 呼び出しグラフ機能に関する説明ドキュメントです。
        - **presets/:** 呼び出しグラフの表示スタイルや動作を定義するファイル群です。
            - `callgraph.js`: 呼び出しグラフのレンダリングやインタラクションを制御するJavaScriptコードです。
            - `style.css`: 呼び出しグラフの見た目を定義するCSSファイルです。
        - **scripts/:** 呼び出しグラフ生成プロセスを自動化するためのスクリプト群です。
            - `analyze-codeql.cjs`: CodeQL解析を実行するスクリプトです。
            - `callgraph-utils.cjs`: 呼び出しグラフ関連のユーティリティ関数を提供します。
            - `check-codeql-exists.cjs`: CodeQLの存在を確認するスクリプトです。
            - `check-commits.cjs`: コミット履歴をチェックするスクリプトです。
            - `check-node-version.cjs`: Node.jsのバージョンを確認するスクリプトです。
            - `common-utils.cjs`: 共通のユーティリティ関数を提供します。
            - `copy-commit-results.cjs`: コミット結果をコピーするスクリプトです。
            - `extract-sarif-info.cjs`: SARIFファイルから情報を抽出するスクリプトです。
            - `find-process-results.cjs`: プロセス結果を検索するスクリプトです。
            - `generate-html-graph.cjs`: HTML形式の呼び出しグラフを生成するスクリプトです。
            - `generateHTML.cjs`: HTMLファイルを生成するユーティリティスクリプトです。
    - **project_summary/:** プロジェクトの概要や開発状況レポートを自動生成するための機能を含みます。
        - **docs/:** プロジェクト概要機能に関するドキュメントを格納します。
            - `daily-summary-setup.md`: 日次サマリーの設定に関するドキュメントです。
        - **prompts/:** AIによる生成で使用されるプロンプト定義ファイルを含みます。
            - `development-status-prompt.md`: 開発状況レポート生成用のプロンプトです。
            - `project-overview-prompt.md`: プロジェクト概要生成用のプロンプトです。
        - **scripts/:** プロジェクト概要生成プロセスを自動化するためのスクリプト群です。
            - `ProjectSummaryCoordinator.cjs`: プロジェクトサマリー生成プロセス全体の調整役です。
            - **development/:** 開発状況レポートに関連するスクリプト群です。
                - `DevelopmentStatusGenerator.cjs`: 開発状況レポートを生成します。
                - `GitUtils.cjs`: Gitリポジトリ操作に関するユーティリティ関数を提供します。
                - `IssueTracker.cjs`: GitHub Issueの追跡と管理を行います。
            - `generate-project-summary.cjs`: プロジェクトサマリーを生成するためのメインスクリプトです。
            - **overview/:** プロジェクト概要レポートに関連するスクリプト群です。
                - `CodeAnalyzer.cjs`: コードを分析し、構造や統計情報を抽出します。
                - `ProjectAnalysisOrchestrator.cjs`: プロジェクト分析プロセスのオーケストレーションを行います。
                - `ProjectDataCollector.cjs`: プロジェクトデータを収集します。
                - `ProjectDataFormatter.cjs`: 収集したプロジェクトデータを整形します。
                - `ProjectOverviewGenerator.cjs`: プロジェクト概要を生成します。
                - `TechStackAnalyzer.cjs`: プロジェクトの技術スタックを分析します。
            - **shared/:** 複数のスクリプトで共有される共通機能を含みます。
                - `BaseGenerator.cjs`: 各種ジェネレータの基底クラスです。
                - `FileSystemUtils.cjs`: ファイルシステム操作に関するユーティリティ関数を提供します。
    - **translate/:** READMEファイルなどの多言語翻訳を自動化するための機能を含みます。
        - **docs/:** 翻訳機能に関するドキュメントを格納します。
            - `TRANSLATION_SETUP.md`: 翻訳機能の設定に関するドキュメントです。
        - **scripts/:** 翻訳プロセスを自動化するためのスクリプト群です。
            - `translate-readme.cjs`: READMEファイルを指定された言語に翻訳します。
- **.gitignore:** Gitでバージョン管理しないファイルやディレクトリを指定するファイルです。
- **LICENSE:** プロジェクトのライセンス情報が記述されたファイルです。
- **README.ja.md:** プロジェクトの概要や使い方を日本語で説明するメインドキュメントです。
- **README.md:** プロジェクトの概要や使い方を英語で説明するメインドキュメントです。
- **generated-docs/:** 自動化スクリプトによって生成されたドキュメントやレポートを格納するディレクトリです。
    - `callgraph.html`: 生成された呼び出しグラフをブラウザで表示するためのHTMLファイルです。
    - `callgraph.js`: `callgraph.html`で使用される、生成された呼び出しグラフのデータやスクリプトです。
    - `development-status.md`: 自動生成された開発状況レポートです。
    - `project-overview.md`: 自動生成されたプロジェクト概要レポートです。
    - `style.css`: `callgraph.html`などのドキュメントで使用されるスタイルシートです。
- **issue-notes/:** GitHub Issuesに関連する自動生成または手動で作成されたメモファイルが格納されます。
    - `[数値].md`: 各Issueに関連するMarkdown形式のメモファイルです（例: `10.md`, `11.md`など）。
- **package-lock.json:** `package.json`に記載された依存関係の正確なバージョンと依存ツリーを記録するファイルです。
- **package.json:** プロジェクトのメタデータ（名前、バージョン、依存関係、スクリプトなど）を定義するファイルです。
- **src/main.js:** プロジェクトの基本的なエントリーポイントまたはサンプルコードです。非常にシンプルなスクリプトであり、主要な自動化機能のコア部分ではありません。

## 関数詳細説明
- **escapeHtml** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: HTML特殊文字をエスケープし、スクリプトインジェクションを防ぐなど、安全に文字列をHTMLに埋め込むための処理を行います。
    - 引数: エスケープ対象の文字列。
    - 戻り値: エスケープされた文字列。
    - 機能: &、<、>、"、'、/などの記号をHTMLエンティティに変換します。
- **getLayoutConfig** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 呼び出しグラフのレイアウト設定を取得または決定します。
    - 引数: なし (または、レイアウトの種類などを指定するオプション)。
    - 戻り値: グラフ描画ライブラリで使用するレイアウト設定オブジェクト。
    - 機能: グラフノードの配置や描画スタイルに関する設定を提供します。
- **placeCentralNode** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフの中心となるノードを特定し、その配置を調整します。
    - 引数: なし (または、対象のノードID)。
    - 戻り値: なし。
    - 機能: 呼び出しグラフの視覚的な中心を設定し、ユーザーが主要な要素に注目しやすくします。
- **showNodeInfo** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフのノード（関数など）が選択されたときに、その詳細情報を表示します。
    - 引数: 表示するノードのデータ。
    - 戻り値: なし。
    - 機能: 選択された関数の名前、ファイルパス、行数などの情報をパネルに表示します。
- **showEdgeInfo** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフのエッジ（関数間の呼び出し関係）が選択されたときに、その詳細情報を表示します。
    - 引数: 表示するエッジのデータ。
    - 戻り値: なし。
    - 機能: 呼び出し元と呼び出し先の関係、呼び出しが行われるファイルや行数などの情報をパネルに表示します。
- **hideInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 表示されている情報パネルを非表示にします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザーがノードやエッジの選択を解除した際などに、パネルを閉じます。
- **showInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 情報パネルを表示します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: `showNodeInfo`や`showEdgeInfo`から呼び出され、パネルの可視性を設定します。
- **toggleInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 情報パネルの表示・非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザーの操作に応じてパネルの表示状態をトグルします。
- **generateGitHubURL** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフノードやエッジに関連するGitHubリポジトリのURLを生成します。
    - 引数: リポジトリ名、ファイルパス、行数などの情報。
    - 戻り値: 生成されたGitHubのURL文字列。
    - 機能: ソースコードへの直接リンクを作成し、コードの参照を容易にします。
- **resetLayout** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフのレイアウトを初期状態に戻します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: 手動で変更されたノード位置などをリセットし、元の自動レイアウト状態に戻します。
- **watchNodeMovementAndFixOverlapsWrap** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: ノードの動きを監視し、オーバーラップを修正する処理のラッパー関数です。
    - 引数: なし (または、グラフインスタンス)。
    - 戻り値: なし。
    - 機能: `watchNodeMovementAndFixOverlaps`を適切に呼び出すための準備や調整を行います。
- **watchNodeMovementAndFixOverlaps** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフノードが移動した際に、他のノードとの重なりを検出し、自動的に修正します。
    - 引数: なし (または、グラフインスタンス)。
    - 戻り値: なし。
    - 機能: グラフの可読性を保つため、ノードが互いに重ならないように位置を調整します。
- **resolveNodeOverlaps** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフノードのオーバーラップを解決します。
    - 引数: 重なっているノードの集合。
    - 戻り値: なし。
    - 機能: 重なっているノードの位置を調整し、明確に表示されるようにします。
- **switchLayout** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフのレイアウトアルゴリズムを切り替えます。
    - 引数: 切り替えるレイアウトの種類。
    - 戻り値: なし。
    - 機能: 異なる視覚表現で呼び出しグラフを探索できるようにします（例: 円形レイアウト、力学レイアウトなど）。
- **resetNodeStates** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフノードの表示状態（選択、ハイライトなど）をリセットします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザー操作で変更されたノードの状態を初期状態に戻します。
- **fitToContent** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフ全体が画面に収まるようにズームレベルとパン位置を調整します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフ全体を一目で確認できるように表示を最適化します。
- **toggleNodeLabels** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: グラフノードに表示されるラベルの表示・非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフが密集している場合にラベルを非表示にしたり、詳細を確認したい場合に表示したりする機能を提供します。
- **toggleCalleeLocationFilter** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    - 役割: 呼び出し先（callee）の場所に基づいてノードをフィルタリングする機能を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: 特定のファイルやモジュールからの呼び出しのみを表示するなど、複雑なグラフの探索を助けます。
- **greet** (`src/main.js`)
    - 役割: シンプルな挨拶メッセージを生成します。
    - 引数: なし。
    - 戻り値: "Hello, world!"という文字列。
    - 機能: プロジェクトの基本的な動作を確認するためのサンプル関数です。
- **main** (`src/main.js`)
    - 役割: `src/main.js`のメイン処理を実行します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: `greet`関数を呼び出し、その結果をコンソールに出力します。

## 関数呼び出し階層ツリー
```
- escapeHtml (.github_automation/callgraph/presets/callgraph.js)
- getLayoutConfig (.github_automation/callgraph/presets/callgraph.js)
- placeCentralNode (.github_automation/callgraph/presets/callgraph.js)
- showNodeInfo (.github_automation/callgraph/presets/callgraph.js)
- showEdgeInfo (.github_automation/callgraph/presets/callgraph.js)
- hideInfoPanel (.github_automation/callgraph/presets/callgraph.js)
- showInfoPanel (.github_automation/callgraph/presets/callgraph.js)
- toggleInfoPanel (.github_automation/callgraph/presets/callgraph.js)
- generateGitHubURL (.github_automation/callgraph/presets/callgraph.js)
- resetLayout (.github_automation/callgraph/presets/callgraph.js)
- watchNodeMovementAndFixOverlapsWrap (.github_automation/callgraph/presets/callgraph.js)
  - watchNodeMovementAndFixOverlaps (.github_automation/callgraph/presets/callgraph.js)
    - resolveNodeOverlaps (.github_automation/callgraph/presets/callgraph.js)
- switchLayout (.github_automation/callgraph/presets/callgraph.js)
- resetNodeStates (.github_automation/callgraph/presets/callgraph.js)
- fitToContent (.github_automation/callgraph/presets/callgraph.js)
- toggleNodeLabels (.github_automation/callgraph/presets/callgraph.js)
- toggleCalleeLocationFilter (.github_automation/callgraph/presets/callgraph.js)
- greet (src/main.js)
- main (src/main.js)
  - greet (src/main.js)

---
Generated at: 2025-08-26 07:05:29 JST

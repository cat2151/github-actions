Last updated: 2025-09-13

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド:
    - **JavaScript (コールグラフ表示)**: コールグラフのインタラクティブな表示ロジックに利用されます。
    - **CSS (コールグラフスタイル)**: コールグラフの視覚的なスタイルを定義します。
- 音楽・オーディオ:
    - **Tone.js**: Web Audio APIを抽象化し、Webブラウザで高度なオーディオ処理を行うためのライブラリです。
    - **Web Audio API**: ブラウザで音声処理を行うための標準APIで、Tone.jsを通じて利用されます。
    - **MML (Music Macro Language)**: 音楽記法を解析し、プログラムで音楽を生成するために使用される可能性があります。
- 開発ツール:
    - **Node.js runtime**: JavaScriptコードを実行するための環境です。
    - **npm scripts**: プロジェクト内の各種タスク（スクリプト実行など）を管理・実行します。
    - **Google Generative AI**: プロジェクトの要約や文書生成など、AIを活用したテキスト生成をサポートします。
    - **@octokit/rest**: GitHub APIと連携し、リポジトリ情報やIssue管理などを行います。
- テスト: 該当する明示的な技術スタックはありません。
- ビルドツール: 該当する明示的なビルドツールはありません。タスクランナーとして`npm scripts`が一部役割を担います。
- 言語機能:
    - **JavaScript**: プロジェクトの主要なスクリプト言語です。
    - **Markdown**: ドキュメント、プロンプト、生成される要約などの記述に用いられます。
    - **YAML**: GitHub Actionsのワークフロー定義に用いられます。
    - **CodeQL**: コードの静的解析に使用されるクエリ言語です。
- 自動化・CI/CD:
    - **GitHub Actions**: プロジェクトのCI/CD（継続的インテグレーション/継続的デリバリー）を自動化します。以下の主要なワークフローが含まれます。
        - プロジェクト要約自動生成
        - Issue自動管理
        - README多言語翻訳
        - i18n automation (自動翻訳ワークフロー)
- 開発標準: 該当する明示的なコード品質・統一ルール関連技術はありません。

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
- **.github_automation/callgraph/presets/callgraph.js**: コールグラフの描画ロジック、インタラクション（ノード表示、レイアウト調整、イベント処理など）、およびユーティリティ関数を定義するJavaScriptファイルです。
- **.github_automation/callgraph/presets/style.css**: コールグラフの視覚的なスタイル（色、フォント、レイアウトなど）を定義するCSSファイルです。
- **generated-docs/callgraph.html**: 生成されたコールグラフのHTMLビューを提供します。これには`callgraph.js`と`style.css`が組み込まれ、インタラクティブなグラフを表示します。
- **generated-docs/callgraph.js**: `presets/callgraph.js`の内容が、生成物として配置されたものです。
- **generated-docs/style.css**: `presets/style.css`の内容が、生成物として配置されたものです。
- **src/main.js**: このプロジェクトにおけるシンプルなJavaScriptのデモンストレーションまたはテスト用のエントリーポイントファイルです。
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLを利用してコードベースから関数の呼び出し関係を抽出するためのクエリを定義します。
- **.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係とバージョンをロックするファイルです。
- **.github_automation/callgraph/codeql-queries/qlpack.yml**: CodeQLパックのメタデータと設定を定義するファイルです。
- **.github_automation/callgraph/config/example.json**: コールグラフ生成に関する設定の例が記述されたJSONファイルです。
- **.github_automation/callgraph/docs/callgraph.md**: コールグラフ機能に関する詳細な説明や使用方法が記載されたドキュメントです。
- **.github_automation/callgraph/scripts/analyze-codeql.cjs**: CodeQL解析プロセスを実行し、SARIF形式の結果を生成するためのスクリプトです。
- **.github_automation/callgraph/scripts/callgraph-utils.cjs**: コールグラフ生成プロセスで利用される補助的なユーティリティ関数群を提供します。
- **.github_automation/callgraph/scripts/check-codeql-exists.cjs**: CodeQL実行環境の存在を確認するスクリプトです。
- **.github_automation/callgraph/scripts/check-commits.cjs**: コミット履歴をチェックし、特定の条件を満たすかを検証するスクリプトです。
- **.github_automation/callgraph/scripts/check-node-version.cjs**: Node.jsのバージョンが要件を満たしているかを確認するスクリプトです。
- **.github_automation/callgraph/scripts/common-utils.cjs**: コールグラフに関連するスクリプト全体で共有される共通ユーティリティです。
- **.github_automation/callgraph/scripts/copy-commit-results.cjs**: コミット結果を特定の場所にコピーするスクリプトです。
- **.github_automation/callgraph/scripts/extract-sarif-info.cjs**: CodeQLによって生成されたSARIFファイルから必要な情報を抽出するスクリプトです。
- **.github_automation/callgraph/scripts/find-process-results.cjs**: 特定の処理結果を検索・特定するスクリプトです。
- **.github_automation/callgraph/scripts/generate-html-graph.cjs**: CodeQLの解析結果からインタラクティブなHTMLコールグラフを生成するスクリプトです。
- **.github_automation/callgraph/scripts/generateHTML.cjs**: HTMLファイルを生成するための汎用的なスクリプトです。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: プロジェクトの日次要約の設定に関するドキュメントです。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: AIによる開発状況要約のためのプロンプト定義です。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: AIによるプロジェクト概要生成のためのプロンプト定義です。
- **.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs**: プロジェクト要約生成プロセス全体を調整・管理するメインスクリプトです。
- **.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs**: プロジェクトの開発状況に関する情報を収集し、要約を生成します。
- **.github_automation/project_summary/scripts/development/GitUtils.cjs**: Gitリポジトリからコミット履歴などの情報を取得するためのユーティリティです。
- **.github_automation/project_summary/scripts/development/IssueTracker.cjs**: GitHub Issueから情報を追跡・収集するためのユーティリティです。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: プロジェクト要約を生成するためのメインエントリーポイントスクリプトです。
- **.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs**: プロジェクトのコードベースを解析し、構造や統計情報を抽出します。
- **.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs**: プロジェクト分析の様々なステップを調整し、全体的な概要を構築します。
- **.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs**: プロジェクトに関する各種データ（ファイル、コード、設定など）を収集します。
- **.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs**: 収集されたプロジェクトデータを整形し、人間が理解しやすい形式に変換します。
- **.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs**: 収集・整形されたデータに基づき、プロジェクト概要を生成します。
- **.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs**: プロジェクトで使用されている技術スタックを特定し、詳細を分析します。
- **.github_automation/project_summary/scripts/shared/BaseGenerator.cjs**: 各種ジェネレータが共通して利用する基底機能を提供します。
- **.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs**: ファイルシステム操作（読み書き、ディレクトリ作成など）のためのユーティリティです。
- **.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs**: プロジェクトファイルのパスや内容を扱うためのユーティリティです。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: READMEの多言語翻訳機能の設定手順に関するドキュメントです。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルを自動的に多言語に翻訳するスクリプトです。
- **.gitignore**: Gitがバージョン管理の対象としないファイルやディレクトリを指定します。
- **.vscode/settings.json**: Visual Studio Codeエディタのワークスペース設定ファイルです。
- **LICENSE**: このプロジェクトのソフトウェアライセンス情報が記載されています。
- **README.ja.md**: プロジェクトの日本語版説明ドキュメントです。
- **README.md**: プロジェクトの英語版説明ドキュメントです。
- **generated-docs/development-status-generated-prompt.md**: AIが生成した開発状況に関するプロンプトの出力です。
- **generated-docs/development-status.md**: 生成された開発状況の要約ドキュメントです。
- **generated-docs/project-overview.md**: 生成されたプロジェクト概要のドキュメントです。
- **issue-notes/*.md**: GitHub Issuesに関連するメモや詳細情報が個別のMarkdownファイルとして保存されています。
- **package-lock.json**: `package.json`で定義された依存関係の正確なバージョンとツリー構造を記録し、再現可能なビルドを保証します。
- **package.json**: Node.jsプロジェクトのメタデータ、依存関係、および実行スクリプトを定義します。

## 関数詳細説明
- **escapeHtml** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): HTMLの特殊文字をエスケープし、セキュリティリスク（XSS攻撃など）を防ぎ、安全に文字列をHTMLとして表示できるようにします。
- **getLayoutConfig** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): コールグラフのレイアウト設定を決定し、取得します。
- **placeCentralNode** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): グラフ内の特定のノードを中央に配置する処理を行います。
- **showNodeInfo** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): グラフ上のノードが選択された際に、そのノードに関する詳細情報を表示します。
- **showEdgeInfo** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): グラフ上のエッジ（接続線）が選択された際に、そのエッジに関する詳細情報を表示します。
- **hideInfoPanel** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): 表示されている情報パネルを非表示にします。
- **showInfoPanel** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): 情報パネルを表示します。
- **toggleInfoPanel** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): 情報パネルの表示/非表示状態を切り替えます。
- **generateGitHubURL** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): グラフ要素に関連するGitHub上のURL（ファイルパス、コミットなど）を生成します。
- **resetLayout** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): コールグラフのレイアウトを初期状態にリセットします。
- **watchNodeMovementAndFixOverlapsWrap** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): ノードの移動を監視し、重なりを修正するロジックをラップする関数です。
- **watchNodeMovementAndFixOverlaps** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): グラフ内のノードが移動した際に、他のノードとの重なりが発生しないように調整します。
- **resolveNodeOverlaps** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): 発生したノードの重なりを解決し、視覚的な衝突を避けるように配置を調整します。
- **switchLayout** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): グラフの表示レイアウト（例: 円形、階層型など）を切り替えます。
- **resetNodeStates** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): グラフ内の各ノードの状態（選択、ハイライトなど）をリセットします。
- **fitToContent** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): グラフ全体が現在のビューポートに収まるようにズームレベルや位置を調整します。
- **toggleNodeLabels** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): グラフノードのラベルの表示/非表示を切り替えます。
- **toggleCalleeLocationFilter** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): 呼び出し先の場所に基づいてグラフ要素の表示をフィルタリングする機能を切り替えます。
- **replace** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): 文字列内の特定のパターンを別の文字列に置換します。汎用的な文字列操作関数です。
- **switch** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): 複数の条件に基づいて異なるコードブロックを実行する制御構造です。
- **function** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): JavaScriptにおける関数定義を指します。
- **max** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): 複数の数値の中から最大値を取得します。
- **on** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): 特定のイベントが発生したときに実行されるイベントリスナーを設定します。
- **if** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): 条件が真である場合にコードブロックを実行する制御構造です。
- **for** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): 指定された回数または条件が満たされるまでコードブロックを繰り返し実行するループ構造です。
- **ready** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): DOMが完全にロードされ、スクリプトの実行準備が整ったときに実行されるイベントです。
- **addListener** (ファイル: `.github_automation/callgraph/presets/callgraph.js`): オブジェクトにイベントリスナーを追加します。
- **greet** (ファイル: `src/main.js`): 簡単な挨拶メッセージを生成または表示するシンプルな関数です。
- **main** (ファイル: `src/main.js`): プログラムのエントリーポイントとなる関数で、主要な処理を呼び出します。

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
Generated at: 2025-09-13 07:04:49 JST

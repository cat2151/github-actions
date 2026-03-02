Last updated: 2026-03-03

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理を効率化し、共通化されたワークフローを提供します。
- 🔗 どのプロジェクトからも簡単に呼び出せる共通ワークフローにより、導入の手間を削減します。
- ✅ ワークフローのメンテナンスを一元化し、プロジェクト開発者は自身のコードに集中できる環境を支援します。

## 技術スタック
- フロントエンド: JavaScript (呼び出しグラフの動的な可視化やインタラクションに使用)、CSS (グラフのスタイリングやUIデザインに使用)、HTML (静的なドキュメントや生成されたグラフの表示構造)。
- 音楽・オーディオ: なし
- 開発ツール: GitHub Actions (継続的インテグレーション/デリバリーの自動化プラットフォーム)、CodeQL (コードベースの静的解析ツール)、Node.js (JavaScript実行環境、各種スクリプトに使用)、Python (特定スクリプトの実行に使用)、Git (バージョン管理システム)。
- テスト: CodeQL (コードのセキュリティ脆弱性や品質問題を静的に解析し、潜在的なバグを検出)。
- ビルドツール: 特に明示的なビルドツールは記述されていませんが、Node.js環境下でのJavaScriptスクリプト実行や、GitHub Actionsによる自動生成プロセスが含まれます。
- 言語機能: JavaScript (CommonJSモジュール形式 `.cjs` を含む)、Python、CodeQL (コード解析クエリ言語)、Markdown (ドキュメント記述)、YAML (GitHub Actionsワークフロー定義)、TOML (設定ファイル記述)。
- 自動化・CI/CD: GitHub Actions (リポジトリ全体の中核をなす自動化および継続的デリバリーの仕組み)。
- 開発標準: VS Code設定 (`.vscode/settings.json`、エディタ設定やコーディングスタイル)、GitHub Pages設定 (`_config.yml`、ドキュメント生成や公開のための設定)。

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
      📄 🌲 generateHTML.cjs
  📁 check-large-files/
    📖 README.md
    📄 check-large-files.toml.default
    📁 scripts/
      📄 check_large_files.py
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
📄 _config.yml
📁 generated-docs/
  🌐 callgraph.html
  📜 callgraph.js
  🎨 style.css
🌐 googled947dc864c270e07.html
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
  📖 29.md
  📖 3.md
  📖 30.md
  📖 35.md
  📖 38.md
  📖 4.md
  📖 40.md
  📖 44.md
  📖 49.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明
-   `.github_automation/callgraph/codeql-queries/callgraph.ql`: CodeQLで記述されたクエリファイルで、プロジェクトの関数呼び出しグラフを生成するためのロジックを含みます。
-   `.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml`: CodeQLパックの依存関係を管理し、ビルドの再現性を保証するためのロックファイルです。
-   `.github_automation/callgraph/codeql-queries/qlpack.yml`: CodeQLパックのメタデータと依存関係を定義する設定ファイルです。
-   `.github_automation/callgraph/config/example.json`: 呼び出しグラフの生成や表示に関連する設定のサンプルが記述されています。
-   `.github_automation/callgraph/docs/callgraph.md`: 呼び出しグラフ機能に関する詳細な説明ドキュメントです。
-   `.github_automation/callgraph/presets/callgraph.js`: 呼び出しグラフの動的な表示、レイアウト、ユーザーインタラクションなどを制御するJavaScriptコードです。
-   `.github_automation/callgraph/presets/style.css`: 呼び出しグラフの見た目（色、フォント、配置など）を定義するCSSファイルです。
-   `.github_automation/callgraph/scripts/analyze-codeql.cjs`: CodeQLを使ってコードベースを解析し、解析結果を生成するためのNode.jsスクリプトです。
-   `.github_automation/callgraph/scripts/callgraph-utils.cjs`: 呼び出しグラフの生成プロセスで利用される共通のユーティリティ関数群を含むNode.jsスクリプトです。
-   `.github_automation/callgraph/scripts/check-codeql-exists.cjs`: システムにCodeQLがインストールされ、利用可能であるかを確認するNode.jsスクリプトです。
-   `.github_automation/callgraph/scripts/check-node-version.cjs`: 実行環境のNode.jsのバージョンが要件を満たしているかを確認するNode.jsスクリプトです。
-   `.github_automation/callgraph/scripts/common-utils.cjs`: プロジェクト全体で利用される汎用的なユーティリティ関数群を含むNode.jsスクリプトです。
-   `.github_automation/callgraph/scripts/copy-commit-results.cjs`: コミットの結果や関連ファイルを特定の場所にコピーするためのNode.jsスクリプトです。
-   `.github_automation/callgraph/scripts/extract-sarif-info.cjs`: CodeQLなどから出力されるSARIF形式の解析結果ファイルから、必要な情報を抽出するためのNode.jsスクリプトです。
-   `.github_automation/callgraph/scripts/find-process-results.cjs`: 実行されたプロセスの結果ファイルやログを見つけるためのNode.jsスクリプトです。
-   `.github_automation/callgraph/scripts/generate-html-graph.cjs`: 解析結果をもとに、視覚的なHTML形式のグラフ（呼び出しグラフ）を生成するNode.jsスクリプトです。
-   `.github_automation/callgraph/scripts/generateHTML.cjs`: HTMLファイルを生成するための一般的なユーティリティ機能を提供するNode.jsスクリプトです。
-   `.github_automation/check-large-files/README.md`: 大容量ファイルチェック機能に関する説明ドキュメントです。
-   `.github_automation/check-large-files/check-large-files.toml.default`: リポジトリ内の大容量ファイルを検出するためのデフォルト設定をTOML形式で記述したファイルです。
-   `.github_automation/check-large-files/scripts/check_large_files.py`: Pythonで記述されたスクリプトで、リポジトリ内の大容量ファイルをチェックし、レポートします。
-   `.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs`: 最近のコミットが自動化されたものではなく、人間によるものであるかを検証するNode.jsスクリプトです。
-   `.github_automation/project_summary/docs/daily-summary-setup.md`: 日次プロジェクトサマリーの生成と設定に関するドキュメントです。
-   `.github_automation/project_summary/prompts/development-status-prompt.md`: 開発状況レポートを生成する際に、AIモデルに指示を与えるためのプロンプト定義ファイルです。
-   `.github_automation/project_summary/prompts/project-overview-prompt.md`: プロジェクト概要を生成する際に、AIモデルに指示を与えるためのプロンプト定義ファイルです。
-   `.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`: プロジェクトサマリー生成プロセス全体の調整と管理を行うNode.jsスクリプトです。
-   `.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`: 現在の開発状況に関する情報を収集し、レポートを生成するNode.jsスクリプトです。
-   `.github_automation/project_summary/scripts/development/GitUtils.cjs`: Gitリポジトリ操作（コミット履歴の取得など）のためのユーティリティ関数を提供するNode.jsスクリプトです。
-   `.github_automation/project_summary/scripts/development/IssueTracker.cjs`: イシュートラッキングシステム（例: GitHub Issues）から情報を取得するためのインターフェースまたはモックを提供するNode.jsスクリプトです。
-   `.github_automation/project_summary/scripts/generate-project-summary.cjs`: プロジェクト全体のサマリー情報を生成するメインのNode.jsスクリプトです。
-   `.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs`: プロジェクトのソースコードを解析し、構造や依存関係などの情報を抽出するNode.jsスクリプトです。
-   `.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs`: プロジェクト分析プロセスの各ステップ（データ収集、解析、整形）を調整するNode.jsスクリプトです。
-   `.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs`: プロジェクトに関する様々なデータ（ファイル情報、コミット履歴など）を収集するNode.jsスクリプトです。
-   `.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs`: 収集したプロジェクトデータを、レポート生成に適した形式に整形するNode.jsスクリプトです。
-   `.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs`: 収集・整形されたデータをもとに、プロジェクト概要のテキストを生成するNode.jsスクリプトです。
-   `.github_automation/project_summary/scripts/shared/BaseGenerator.cjs`: 各種サマリーやレポートを生成するための共通の基盤機能を提供するNode.jsスクリプトです。
-   `.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs`: ファイルシステム操作（ファイルの読み書き、ディレクトリ作成など）のためのユーティリティ関数を提供するNode.jsスクリプトです。
-   `.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs`: プロジェクト内のファイルパスや種類に関するユーティリティ関数を提供するNode.jsスクリプトです。
-   `.github_automation/translate/docs/TRANSLATION_SETUP.md`: プロジェクトの翻訳機能の設定と利用方法に関するドキュメントです。
-   `.github_automation/translate/scripts/translate-readme.cjs`: `README.ja.md`ファイルを基に、多言語版（例: `README.md`）を自動翻訳するNode.jsスクリプトです。
-   `.gitignore`: Gitのバージョン管理から除外するファイルやディレクトリを指定する設定ファイルです。
-   `.vscode/settings.json`: VS Codeエディタのワークスペース固有の設定（フォーマット、リンターなど）を定義するファイルです。
-   `LICENSE`: このプロジェクトのライセンス情報が記載されています。
-   `README.ja.md`: プロジェクトの日本語での概要や利用方法を説明する主要なドキュメントです。
-   `README.md`: プロジェクトの英語での概要や利用方法を説明するドキュメントです。通常、`README.ja.md`から自動翻訳されます。
-   `_config.yml`: GitHub Pagesのサイト設定ファイルで、Jekyllによるドキュメントサイトの構築に使用されます。
-   `generated-docs/callgraph.html`: 生成された呼び出しグラフの対話的な表示を含むHTMLファイルです。
-   `generated-docs/callgraph.js`: `presets/callgraph.js` と同じ内容で、`callgraph.html`に埋め込まれ、グラフの動的な機能を提供します。
-   `generated-docs/style.css`: `presets/style.css` と同じ内容で、`callgraph.html`に埋め込まれ、グラフのスタイルを定義します。
-   `googled947dc864c270e07.html`: Googleサイトの所有権確認に使用されるファイルです。
-   `src/main.js`: プロジェクトの簡単な機能を示すサンプルコードまたはエントリーポイントとなるJavaScriptファイルです。

## 関数詳細説明
-   **`escapeHtml`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: HTMLの特殊文字をエスケープし、スクリプトインジェクション攻撃などを防ぎます。
    -   引数: `text` (string) - エスケープする文字列。
    -   戻り値: `string` - エスケープされた文字列。
    -   機能: ユーザー提供のデータがHTMLコンテキストで安全に表示されるように変換します。
-   **`getLayoutConfig`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: グラフのレイアウト設定オブジェクトを取得します。
    -   引数: なし。
    -   戻り値: `object` - レイアウト設定を含むオブジェクト。
    -   機能: グラフの視覚的な配置や振る舞いを決定する各種パラメータを提供します。
-   **`placeCentralNode`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: 特定のノードをグラフの中心に配置します。
    -   引数: なし (おそらく内部的に現在の中心ノードを決定)。
    -   戻り値: なし。
    -   機能: ユーザーが注目しているノードや、グラフの開始点を中央に固定して見やすくします。
-   **`showNodeInfo`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: グラフ上のノード（例: 関数）の詳細情報を表示するパネルを更新します。
    -   引数: (イベントオブジェクトまたはノードIDを内部的に処理)。
    -   戻り値: なし。
    -   機能: ノードがクリックまたはホバーされた際に、そのノードのファイルパス、行番号などの詳細情報をユーザーに提示します。
-   **`showEdgeInfo`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: グラフ上のエッジ（例: 関数呼び出し）の詳細情報を表示するパネルを更新します。
    -   引数: (イベントオブジェクトまたはエッジIDを内部的に処理)。
    -   戻り値: なし。
    -   機能: エッジがクリックまたはホバーされた際に、呼び出し元と呼び出し先の情報や関係性をユーザーに提示します。
-   **`hideInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: 情報表示パネルを非表示にします。
    -   引数: なし。
    -   戻り値: なし。
    -   機能: ユーザーがグラフ要素から離れた際などに、詳細情報パネルを画面から隠します。
-   **`showInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: 情報表示パネルを表示します。
    -   引数: なし。
    -   戻り値: なし。
    -   機能: `showNodeInfo`や`showEdgeInfo`と連携し、詳細情報パネルを可視化します。
-   **`toggleInfoPanel`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: 情報表示パネルの表示/非表示を切り替えます。
    -   引数: なし。
    -   戻り値: なし。
    -   機能: ユーザー操作に応じてパネルの状態を反転させます。
-   **`generateGitHubURL`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: グラフ要素（ノードなど）に対応するGitHubリポジトリのURLを生成します。
    -   引数: (ファイルパス、行番号などを内部的に処理)。
    -   戻り値: `string` - 生成されたGitHub URL。
    -   機能: グラフから直接、対応するソースコードのGitHub上の位置へジャンプできるようにします。
-   **`resetLayout`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: グラフのレイアウトを初期状態にリセットします。
    -   引数: なし。
    -   戻り値: なし。
    -   機能: ユーザーが変更したグラフの配置やズームを元の状態に戻します。
-   **`watchNodeMovementAndFixOverlapsWrap`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: ノードの動きを監視し、重なりを修正する処理を始めるためのラッパー関数です。
    -   引数: なし。
    -   戻り値: なし。
    -   機能: レイアウトの安定化のため、ノードの重なり解消処理の開始と管理を行います。
-   **`watchNodeMovementAndFixOverlaps`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: グラフ内のノードの移動をリアルタイムで監視し、他のノードとの重なりが発生しないように自動的に位置を調整します。
    -   引数: なし。
    -   戻り値: なし。
    -   機能: グラフの視認性を保ち、ノードが混み合わないように自動でレイアウトを調整します。
-   **`resolveNodeOverlaps`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: 複数のノードが互いに重なり合っている場合に、それらの位置を調整して重なりを解消します。
    -   引数: (ノードのコレクションを内部的に処理)。
    -   戻り値: なし。
    -   機能: グラフの要素が密集しすぎないようにし、視認性を高めます。
-   **`switchLayout`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: グラフのレイアウトアルゴリズム（例: 円形、ツリー、力指向）を切り替えます。
    -   引数: (新しいレイアウトの種類を内部的に処理)。
    -   戻り値: なし。
    -   機能: ユーザーが異なる視点や構造でグラフを探索できるように、動的に表示形式を変更します。
-   **`resetNodeStates`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: グラフ内のすべてのノードの選択、ハイライトなどの視覚的状態を初期値に戻します。
    -   引数: なし。
    -   戻り値: なし。
    -   機能: 特定の操作後にグラフの視覚的要素をクリアし、新たな操作に備えます。
-   **`fitToContent`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: グラフ全体が現在の表示領域（ビューポート）に収まるようにズームレベルとパンを調整します。
    -   引数: なし。
    -   戻り値: なし。
    -   機能: グラフ全体を一度に確認できるように自動でスケールを調整します。
-   **`toggleNodeLabels`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: グラフノードに表示されるラベル（関数名など）の表示/非表示を切り替えます。
    -   引数: なし。
    -   戻り値: なし。
    -   機能: グラフが複雑な場合に、ラベルを非表示にして全体像を見やすくしたり、必要に応じて詳細を表示したりします。
-   **`toggleCalleeLocationFilter`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: 呼び出し先（Callee）の場所に基づいてグラフの表示をフィルタリングする機能をオン/オフします。
    -   引数: なし。
    -   戻り値: なし。
    -   機能: 特定のファイルやモジュールからの呼び出しのみを表示するなど、関心のある範囲に絞ってグラフを分析できるようにします。
-   **`replace`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: 文字列内の特定のパターンを別の文字列に置換します。
    -   引数: (置換対象の文字列、検索パターン、置換文字列を内部的に処理)。
    -   戻り値: `string` - 置換後の文字列。
    -   機能: 一般的な文字列操作ユーティリティとして使用されます。
-   **`switch`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: 複数の条件分岐の中から、合致するケースの処理を実行します。
    -   引数: (評価される値やコンテキストに応じて変動)。
    -   戻り値: なし (処理結果は副作用による)。
    -   機能: プログラムの制御フローを、複数の選択肢に基づいて切り替えます。
-   **`function`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: 無名関数、または特定の処理をカプセル化した関数定義を表します。
    -   引数: (コンテキストによる)。
    -   戻り値: (コンテキストによる)。
    -   機能: JavaScriptコード内で、特定のタスクを実行するための再利用可能なコードブロックを定義します。
-   **`max`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: 複数の数値の中から最大値を返します。
    -   引数: (比較対象の数値を内部的に処理)。
    -   戻り値: `number` - 最大値。
    -   機能: 数値の集合から最も大きい値を見つける際に使用されます。
-   **`on`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: 特定のイベントが発生したときに実行されるイベントハンドラを設定します。
    -   引数: (イベント名、コールバック関数を内部的に処理)。
    -   戻り値: なし。
    -   機能: ユーザーのアクション（クリック、キー入力など）やシステムイベントに応答して処理を実行します。
-   **`if`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: 特定の条件が真である場合にのみ、コードブロックを実行します。
    -   引数: (評価される条件を内部的に処理)。
    -   戻り値: なし (処理結果は副作用による)。
    -   機能: プログラムの制御フローを、条件に基づいて分岐させます。
-   **`for`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: 指定された回数だけコードブロックを繰り返し実行します。
    -   引数: (ループの初期化、条件、増分を内部的に処理)。
    -   戻り値: なし (処理結果は副作用による)。
    -   機能: 配列の処理や、一定の回数繰り返す必要があるタスクを実行します。
-   **`ready`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: Webページ（DOM）の読み込みが完了し、スクリプトから操作可能になった時点で実行されるコールバック関数を設定します。
    -   引数: (コールバック関数を内部的に処理)。
    -   戻り値: なし。
    -   機能: DOM要素にアクセスする前に、安全にスクリプトを実行できるように保証します。
-   **`addListener`** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
    -   役割: 特定の要素やオブジェクトに対してイベントリスナーを追加し、イベント発生時に指定された関数を実行させます。
    -   引数: (イベント名、リスナー関数、オプションを内部的に処理)。
    -   戻り値: なし。
    -   機能: 要素のインタラクティブな挙動を設定するために使用されます。
-   **`greet`** (`src/main.js`)
    -   役割: 指定された名前に対する挨拶メッセージを生成します。
    -   引数: `name` (string) - 挨拶の対象となる人物の名前。
    -   戻り値: `string` - 「Hello, [name]!」形式の挨拶メッセージ。
    -   機能: 簡単な文字列結合によって、パーソナライズされた挨拶文を作成します。
-   **`main`** (`src/main.js`)
    -   役割: プログラムの主要な実行ロジックを含み、アプリケーションのエントリーポイントとして機能します。
    -   引数: なし。
    -   戻り値: なし (主にコンソール出力などの副作用)。
    -   機能: `greet`関数を呼び出し、その結果をコンソールに出力することで、基本的なアプリケーションの流れを示します。

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
Generated at: 2026-03-03 07:09:31 JST

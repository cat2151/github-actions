Last updated: 2026-04-20

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: HTML, CSS, JavaScript (Call Graphの視覚化UI構築に使用。グラフの表示、ノード情報の操作、レイアウト調整などに利用されます。)
- 音楽・オーディオ: 該当なし
- 開発ツール: GitHub Actions (共通ワークフローの実行環境としてプロジェクトの核をなす。ドキュメント生成、翻訳、コード解析などを自動化します。), CodeQL (コードの静的解析ツール。特に、ソースコードから関数呼び出しグラフを抽出し、セキュリティ脆弱性やバグを特定するために利用されます。), Gemini (Googleの大規模言語モデルAPI。主にREADMEファイルの自動翻訳機能に利用されます。), Node.js (JavaScriptスクリプト（`.cjs`ファイル）の実行環境として、様々な自動化スクリプトを動かすために使用されます。), Python (Pythonスクリプト（`.py`ファイル）の実行環境として、特定のリポジトリ管理タスク（例: 大容量ファイルチェック）に利用されます。)
- テスト: Pythonテストフレームワーク (大容量ファイルチェック機能のユニットテストに利用されていますが、具体的なフレームワーク名は特定されていません。)
- ビルドツール: 該当なし (GitHub Actionsワークフロー内で直接スクリプトを実行する形式を取っています。)
- 言語機能: JavaScript (CommonJS) (Node.js環境で動作するスクリプトに使用されます。), Python (リポジトリ管理ツールや補助スクリプトに使用されます。), CodeQL (QL言語) (CodeQLクエリの記述に使用される特殊なクエリ言語です。)
- 自動化・CI/CD: GitHub Actions (プロジェクトの中核となるプラットフォームであり、共通ワークフローの実行、ドキュメントの自動生成、翻訳、コード品質チェックなど、継続的インテグレーションおよびデリバリープロセス全体を自動化します。)
- 開発標準: CodeQL (コードの品質維持と潜在的な問題の早期発見に貢献し、プロジェクト全体のコードベースの品質標準を向上させます。)

## ファイル階層ツリー
```
📄 .gitattributes
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
  📁 check-large-files/
    📖 README.md
    📄 check-large-files.toml.default
    📁 scripts/
      📄 check_large_files.py
      📄 test_check_large_files.py
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
📖 AGENTS.md
📄 LICENSE
📖 README.ja.md
📖 README.md
📄 _config.yml
📁 generated-docs/
  🌐 callgraph.html
  📜 callgraph.js
  🎨 style.css
🌐 googled947dc864c270e07.html
📁 src/
  📜 main.js
```

## ファイル詳細説明
- **`.gitattributes`**: Gitがファイルを扱う際の属性（例: 行末コード、マージ方法）を定義し、リポジトリ全体での一貫性を保ちます。
- **`.github_automation/`**: GitHub Actionsの共通ワークフローおよびそれに関連する補助スクリプトを格納する主要なディレクトリです。プロジェクトの自動化機能の全てがここに集約されています。
- **`.github_automation/callgraph/`**: CodeQLを使用して、プロジェクト内の関数呼び出しグラフを生成し、それを視覚的に表示するための機能一式を管理しています。
    - **`codeql-queries/callgraph.ql`**: CodeQLがソースコードから関数呼び出し関係を抽出するために使用する、特定のクエリが記述されています。
    - **`presets/callgraph.js`**: 生成された呼び出しグラフをWebブラウザでインタラクティブに表示・操作するためのJavaScriptロジックが含まれています（例: ノードのレイアウト、情報パネルの表示、GitHubへのリンク生成）。
    - **`presets/style.css`**: 呼び出しグラフの見た目（色、フォント、配置など）を定義するCSSスタイルシートです。
    - **`scripts/analyze-codeql.cjs`**: CodeQLを実行し、コード解析を行い、SARIF形式の解析結果を生成するNode.jsスクリプトです。
    - **`scripts/generate-html-graph.cjs`**: SARIF形式のCodeQL解析結果を基に、HTML形式の関数呼び出しグラフを生成するNode.jsスクリプトです。
- **`.github_automation/check-large-files/`**: リポジトリ内に設定された閾値を超える大容量ファイルが存在しないかをチェックする機能を提供します。
    - **`scripts/check_large_files.py`**: Pythonで書かれた、大容量ファイルを検出するためのロジックを実行するスクリプトです。
- **`.github_automation/check_recent_human_commit/`**: 最近の人間によるコミットをチェックするスクリプト群を格納します。
- **`.github_automation/project_summary/`**: プロジェクトの概要や開発状況を自動的に生成するための機能を提供します。
    - **`prompts/development-status-prompt.md`**: 開発状況レポートを生成する際にAIに与えるためのプロンプト定義です。
    - **`prompts/project-overview-prompt.md`**: プロジェクト概要を生成する際にAIに与えるためのプロンプト定義です。
    - **`scripts/ProjectSummaryCoordinator.cjs`**: プロジェクト概要生成のプロセス全体を調整・管理する主要なNode.jsスクリプトです。
    - **`scripts/overview/ProjectOverviewGenerator.cjs`**: プロジェクト概要の具体的なコンテンツを生成する役割を担うNode.jsスクリプトです。
- **`.github_automation/translate/`**: READMEなどのドキュメントを多言語に自動翻訳する機能を提供します。
    - **`scripts/translate-readme.cjs`**: READMEファイルを自動的に翻訳するためのNode.jsスクリプトです。
- **`README.ja.md`**: プロジェクトの日本語での説明が記述されたメインドキュメントです。
- **`README.md`**: `README.ja.md`を基に自動翻訳されて生成される、プロジェクトの英語版説明ドキュメントです。
- **`_config.yml`**: GitHub Pagesのサイト設定を定義するファイルです。
- **`generated-docs/`**: GitHub Actionsによって自動生成されたHTMLドキュメント、JavaScript、CSSなどのレポートやアセットが格納されるディレクトリです。
    - **`callgraph.html`**: 生成された関数呼び出しグラフを視覚化したHTMLファイルで、ブラウザで開くことでグラフを閲覧できます。
    - **`callgraph.js`**: `presets/callgraph.js`と同じ内容のスクリプトで、`callgraph.html`に埋め込まれ、グラフのインタラクティブな動作を提供します。
    - **`style.css`**: `presets/style.css`と同じ内容のスタイルシートで、`callgraph.html`に適用され、グラフの表示スタイルを定義します。
- **`googled947dc864c270e07.html`**: Googleサイト認証のために使用される検証ファイルです。
- **`src/main.js`**: プロジェクトの機能を例示するための簡単なJavaScriptファイルです。

## 関数詳細説明
- **`escapeHtml(str)`**: HTMLの特殊文字（<, >, &, ", 'など）を対応するHTMLエンティティに変換し、Webページでの安全な表示を保証します。これにより、クロスサイトスクリプティング（XSS）などのセキュリティリスクを防ぎます。
    - 役割: HTMLエスケープ処理。
    - 引数: `str` (string) - エスケープする文字列。
    - 戻り値: `string` - エスケープされた文字列。
- **`getLayoutConfig()`**: グラフの表示に使用されるレイアウトアルゴリズムの設定オブジェクトを取得します。これにより、グラフのノード配置や全体の構造を制御できます。
    - 役割: グラフレイアウト設定の取得。
    - 引数: なし。
    - 戻り値: `object` - レイアウト設定オブジェクト。
- **`placeCentralNode(node)`**: 指定されたノードをグラフの視覚的中心に配置します。特定の関数やモジュールに焦点を当てたい場合に有用です。
    - 役割: 特定ノードの中心配置。
    - 引数: `node` (object) - 配置するノードのデータ。
    - 戻り値: なし。
- **`showNodeInfo(node)`**: グラフ上のノード（関数など）がクリックまたはホバーされた際に、そのノードに関する詳細情報（名前、ファイルパス、行数など）を表示するパネルを制御します。
    - 役割: ノード情報の表示。
    - 引数: `node` (object) - 情報表示対象のノードデータ。
    - 戻り値: なし。
- **`showEdgeInfo(edge)`**: グラフ上のエッジ（呼び出し関係など）に関する詳細情報（呼び出し元、呼び出し先、関係の種類など）を表示するパネルを制御します。
    - 役割: エッジ情報の表示。
    - 引数: `edge` (object) - 情報表示対象のエッジデータ。
    - 戻り値: なし。
- **`hideInfoPanel()`**: 現在表示されている情報パネルを非表示にします。
    - 役割: 情報パネルの非表示。
    - 引数: なし。
    - 戻り値: なし。
- **`showInfoPanel()`**: 情報パネルを表示状態にします。
    - 役割: 情報パネルの表示。
    - 引数: なし。
    - 戻り値: なし。
- **`toggleInfoPanel()`**: 情報パネルが現在表示されている場合は非表示に、非表示の場合は表示に切り替えます。
    - 役割: 情報パネルの表示/非表示切り替え。
    - 引数: なし。
    - 戻り値: なし。
- **`generateGitHubURL(nodeData)`**: 与えられたノードデータ（ファイル名、行番号など）に基づいて、GitHubリポジトリ上の対応するソースコード行へのURLを生成します。これにより、グラフから直接ソースコードへジャンプできます。
    - 役割: GitHubソースコードURLの生成。
    - 引数: `nodeData` (object) - ノードに関連するデータ。
    - 戻り値: `string` - 生成されたGitHub URL。
- **`resetLayout()`**: グラフのノード配置やズームレベルを初期状態にリセットします。グラフが複雑になった際に元の表示に戻すために使用されます。
    - 役割: グラフレイアウトのリセット。
    - 引数: なし。
    - 戻り値: なし。
- **`watchNodeMovementAndFixOverlapsWrap()`**: ノードの動きを監視し、重なりを解決するメインのロジックをラップする関数です。
    - 役割: ノードの重なり解決処理のラッパー。
    - 引数: なし。
    - 戻り値: なし。
- **`watchNodeMovementAndFixOverlaps()`**: グラフ内のノードが移動するのを継続的に監視し、ノード同士が重なり合わないように自動的に位置を調整します。これにより、グラフの可読性を保ちます。
    - 役割: ノードの動き監視と重なり調整。
    - 引数: なし。
    - 戻り値: なし。
- **`resolveNodeOverlaps(nodes)`**: 複数のノードが視覚的に重なっている場合に、それらを離して配置し、各ノードが独立して見えるようにする処理を実行します。
    - 役割: ノードの重なり解消。
    - 引数: `nodes` (array) - 処理対象のノードの配列。
    - 戻り値: なし。
- **`switchLayout(layoutName)`**: グラフのレイアウトアルゴリズム（例: 力学ベース、階層型など）を指定された名前に切り替えます。ユーザーがグラフの表示形式を選択できるようにします。
    - 役割: グラフレイアウトの切り替え。
    - 引数: `layoutName` (string) - 切り替えるレイアウトの名前。
    - 戻り値: なし。
- **`resetNodeStates()`**: グラフ内のすべてのノードの現在の状態（選択、ハイライト、フィルタリングなど）を初期状態にリセットします。
    - 役割: ノード状態のリセット。
    - 引数: なし。
    - 戻り値: なし。
- **`fitToContent()`**: グラフ全体が現在のビューポート（画面領域）に収まるように、グラフのズームレベルと中心位置を自動的に調整します。
    - 役割: グラフ全体のフィット表示。
    - 引数: なし。
    - 戻り値: なし。
- **`toggleNodeLabels(show)`**: グラフノードに表示されるラベル（通常は関数名）の表示/非表示を切り替えます。グラフが密集している場合に視認性を向上させるために使用できます。
    - 役割: ノードラベルの表示/非表示切り替え。
    - 引数: `show` (boolean) - ラベルを表示するかどうか。
    - 戻り値: なし。
- **`toggleCalleeLocationFilter()`**: 呼び出し先（Callee）のソースコードの場所に基づいて、グラフノードのフィルタリングを有効/無効に切り替えます。特定のファイルやモジュールからの呼び出しに限定して表示したい場合に有用です。
    - 役割: 呼び出し先位置フィルターの切り替え。
    - 引数: なし。
    - 戻り値: なし。
- **`greet(name)` (src/main.js)**: 引数として与えられた名前に「Hello, [name]!」という形式の挨拶メッセージを返します。
    - 役割: 挨拶メッセージの生成。
    - 引数: `name` (string) - 挨拶する相手の名前。
    - 戻り値: `string` - 挨拶メッセージ。
- **`main()` (src/main.js)**: アプリケーションの主要なエントリポイントであり、`greet` 関数を呼び出してその結果をコンソールに出力します。
    - 役割: アプリケーションのメイン処理。
    - 引数: なし。
    - 戻り値: なし。

## 関数呼び出し階層ツリー
```
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
- main (src/main.js)
  - greet (src/main.js)

---
Generated at: 2026-04-20 07:11:25 JST

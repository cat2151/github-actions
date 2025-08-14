Last updated: 2025-08-15

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actionsの管理を効率化し、共通ワークフロー集として提供します。
- 🔗 共通化されたワークフローは、どのプロジェクトからも簡単に呼び出して利用できます。
- ✅ ワークフローの一括メンテナンスを可能にし、各プロジェクトの開発に集中できる環境を支援します。

## 技術スタック
- フロントエンド: 該当なし（本プロジェクトは主にバックエンドの自動化ワークフローが中心のため、特定のフロントエンド技術は使用していません。）
- 音楽・オーディオ:
    - Tone.js: Web Audio APIを抽象化し、Web上で音楽やオーディオアプリケーションを構築するための高レベルなJavaScriptライブラリです。
    - MML (Music Macro Language): 音楽をテキスト形式で記述するための記法で、パーサーを通じてWeb Audio APIで演奏されます。
    - Web Audio API: ブラウザに組み込まれた音声処理APIで、複雑な音声合成、エフェクト、空間オーディオなどを実現します（Tone.js経由で利用）。
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するための非同期イベント駆動型ランタイム環境です。
    - npm scripts: `package.json`に定義されたスクリプトを実行するためのNode.jsパッケージマネージャの機能で、各種タスクの自動化に利用されます。
    - Google Generative AI: AIによる文書生成機能をサポートするためのGoogleの生成AIサービス連携ライブラリです。
    - @octokit/rest: GitHub APIと連携するためのJavaScriptライブラリで、GitHub ActionsからのAPI操作に利用されます。
- テスト: 該当なし（テストに関する具体的な技術情報は提供されていません。）
- ビルドツール: 該当なし（特定のビルドツールは提供されていませんが、`npm scripts`が一部ビルド相当のタスクを担う可能性があります。）
- 言語機能: 該当なし（特定のJavaScript言語機能や仕様に特化した説明は提供されていません。）
- 自動化・CI/CD:
    - GitHub Actions: コードリポジトリ上でのソフトウェア開発ワークフローを自動化するためのCI/CDプラットフォームです。プロジェクト要約、Issue管理、README翻訳など8種類の共通ワークフローが含まれます。
- 開発標準: 該当なし（コード品質や統一ルールに関する具体的な技術情報は提供されていません。）

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
      📖 project_summary_cjs_analysis.md
    📁 prompts/
      📖 development-status-prompt.md
      📖 project-overview-prompt.md
    📁 scripts/
      📄 CodeAnalyzer.cjs
      📄 FileSystemUtils.cjs
      📄 GitUtils.cjs
      📄 ProjectAnalyzer.cjs
      📄 ProjectSummaryGenerator.cjs
      📄 generate-project-summary.cjs
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
  📖 2.md
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
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLを利用して、コードベースから関数呼び出しグラフを抽出するためのクエリを定義します。
- **.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係とバージョンを固定するためのファイルです。
- **.github_automation/callgraph/codeql-queries/qlpack.yml**: CodeQLクエリパックのメタデータを定義し、クエリの管理を支援します。
- **.github_automation/callgraph/config/example.json**: 関数呼び出しグラフ生成プロセスで使用される設定の例を格納するJSONファイルです。
- **.github_automation/callgraph/docs/callgraph.md**: 関数呼び出しグラフ機能の使用方法や詳細に関するドキュメントです。
- **.github_automation/callgraph/presets/callgraph.js**: 関数呼び出しグラフの可視化とユーザーインタラクション（ノード情報表示、レイアウト切り替えなど）を制御するJavaScriptコードです。
- **.github_automation/callgraph/presets/style.css**: 関数呼び出しグラフの視覚的なスタイル（色、フォント、配置など）を定義するCSSファイルです。
- **.github_automation/callgraph/scripts/analyze-codeql.cjs**: CodeQL分析を実行し、その結果を処理するためのNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/callgraph-utils.cjs**: 関数呼び出しグラフの生成と表示に関する様々なユーティリティ関数を提供するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/check-codeql-exists.cjs**: CodeQLがシステムに存在するかどうかを確認するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/check-commits.cjs**: Gitのコミット履歴を分析・チェックするためのNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/check-node-version.cjs**: Node.jsのバージョンが要件を満たしているかを確認するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/common-utils.cjs**: プロジェクト全体で利用される共通のユーティリティ関数を集めたNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/copy-commit-results.cjs**: 特定のコミット結果をコピーするためのNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/extract-sarif-info.cjs**: SARIF (Static Analysis Results Interchange Format) ファイルから分析結果情報を抽出するためのNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/find-process-results.cjs**: 特定のプロセス実行結果を検索するためのNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/generate-html-graph.cjs**: CodeQLの分析結果を基に、インタラクティブなHTML形式の関数呼び出しグラフを生成するNode.jsスクリプトです。
- **.github_automation/callgraph/scripts/generateHTML.cjs**: HTML文書をプログラム的に生成するための汎用的なNode.jsスクリプトです。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: 日次プロジェクトサマリーの自動生成設定に関するドキュメントです。
- **.github_automation/project_summary/docs/project_summary_cjs_analysis.md**: プロジェクトサマリー生成におけるCJS（CommonJS）モジュール分析の詳細を記述したドキュメントです。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: AIによる開発状況サマリー生成に使用されるプロンプト（指示文）テキストです。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: AIによるプロジェクト概要生成に使用されるプロンプト（指示文）テキストです。
- **.github_automation/project_summary/scripts/CodeAnalyzer.cjs**: コードベースの静的解析を行い、構造や特性を把握するためのNode.jsスクリプトです。
- **.github_automation/project_summary/scripts/FileSystemUtils.cjs**: ファイルシステムへの読み書き、ディレクトリ操作などのユーティリティ関数を提供するNode.jsスクリプトです。
- **.github_automation/project_summary/scripts/GitUtils.cjs**: Gitリポジトリ操作（コミット情報の取得、ブランチ管理など）のためのユーティリティ関数を提供するNode.jsスクリプトです。
- **.github_automation/project_summary/scripts/ProjectAnalyzer.cjs**: プロジェクト全体の構造、依存関係、活動などを分析し、サマリー生成の基礎データを提供するNode.jsスクリプトです。
- **.github_automation/project_summary/scripts/ProjectSummaryGenerator.cjs**: プロジェクト分析の結果を基に、AIを活用してプロジェクトサマリーを生成するコアロジックを実装したNode.jsスクリプトです。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: プロジェクトサマリー生成ワークフローの実行を担当するNode.jsスクリプトです。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: READMEの多言語翻訳ワークフローの設定手順に関するドキュメントです。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルを指定された言語に自動翻訳するためのNode.jsスクリプトです。
- **.gitignore**: Gitがバージョン管理の対象外とするファイルやディレクトリのパターンを定義します。
- **LICENSE**: 本プロジェクトの利用条件を定めるライセンス情報（例: MIT Licenseなど）が記述されています。
- **README.ja.md**: プロジェクトの日本語版概要ドキュメントです。
- **README.md**: プロジェクトの英語版概要ドキュメントです。
- **generated-docs/callgraph.html**: `generate-html-graph.cjs`によって自動生成された関数呼び出しグラフをブラウザで表示するためのHTMLファイルです。
- **generated-docs/callgraph.js**: `generated-docs/callgraph.html`で使用される、関数呼び出しグラフのインタラクティブな動作を制御するJavaScriptコードです。`.github_automation/callgraph/presets/callgraph.js`がベースとなります。
- **generated-docs/development-status.md**: 自動生成されたプロジェクトの現在の開発状況に関するMarkdown形式のドキュメントです。
- **generated-docs/project-overview.md**: 自動生成されたプロジェクトの概要に関するMarkdown形式のドキュメントです。
- **generated-docs/style.css**: `generated-docs`内の自動生成されたドキュメントに適用されるCSSスタイルシートです。`.github_automation/callgraph/presets/style.css`がベースとなります。
- **issue-notes/*.md**: GitHub Issuesの情報を基に自動生成された、各Issueの詳細や関連情報が記述されたMarkdownファイル群です。
- **package-lock.json**: `package.json`に定義されたnpmパッケージの依存関係を正確にロックし、ビルドの再現性を保証するファイルです。
- **package.json**: プロジェクトのメタデータ（名前、バージョン、説明など）、スクリプト、依存関係パッケージなどが定義されています。
- **src/main.js**: プロジェクトの基本的なエントリポイントとなるJavaScriptファイルで、シンプルな関数の定義と呼び出しの例が含まれています。

## 関数詳細説明
- **escapeHtml(text)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: HTML特殊文字を安全な形式にエスケープします。
    - 引数: `text` (文字列) - エスケープするテキスト。
    - 戻り値: エスケープ処理後の文字列。
    - 機能: クロスサイトスクリプティング (XSS) 攻撃を防ぐため、HTMLコンテンツとして表示される文字列内の特殊文字（例: `<`, `>`, `&`）を対応するHTMLエンティティに変換します。
- **getLayoutConfig()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ描画のためのレイアウト設定オブジェクトを取得します。
    - 引数: なし。
    - 戻り値: レイアウト設定を格納したオブジェクト。
    - 機能: グラフノードの配置アルゴリズムやそのパラメーターを定義し、グラフの視覚的な構造を決定します。
- **placeCentralNode()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ内の特定のノードを中央に配置する処理を行います。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザーが注目すべきノードを画面の中心に表示し、視認性を高めます。
- **showNodeInfo(node)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ上で選択されたノード（関数など）の詳細情報を表示します。
    - 引数: `node` (オブジェクト) - 詳細を表示するノードのデータ。
    - 戻り値: なし。
    - 機能: 関数の名前、ファイルパス、定義行などの関連情報を専用の情報パネルに表示します。
- **showEdgeInfo(edge)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ上で選択されたエッジ（呼び出し関係）の詳細情報を表示します。
    - 引数: `edge` (オブジェクト) - 詳細を表示するエッジのデータ。
    - 戻り値: なし。
    - 機能: 呼び出し元と呼び出し先の関数名、関連するファイルや行番号などの情報を情報パネルに表示します。
- **hideInfoPanel()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフの詳細情報を表示するパネルを非表示にします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: 画面上の情報パネルを隠し、グラフ本体の表示領域を広げます。
- **showInfoPanel()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフの詳細情報を表示するパネルを表示します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: 隠されていた情報パネルを再び表示させます。
- **toggleInfoPanel()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 情報表示パネルの表示状態を切り替えます（表示されていれば非表示に、非表示であれば表示に）。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザーの操作に応じて情報パネルの表示/非表示を簡単に切り替えることができます。
- **generateGitHubURL(filePath, startLine, endLine)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 指定されたファイルパスと行番号に基づき、GitHubリポジトリ上のソースコードへの直接リンクを生成します。
    - 引数: `filePath` (文字列), `startLine` (数値), `endLine` (数値) - ファイルのパスと開始・終了行。
    - 戻り値: GitHub上のファイルへのURL文字列。
    - 機能: グラフ上の要素から直接ソースコードへジャンプするためのURLを構築します。
- **resetLayout()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフのレイアウトとズームレベルを初期状態にリセットします。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ユーザーがグラフの表示状態を操作した後、元の見やすい状態に戻します。
- **watchNodeMovementAndFixOverlapsWrap()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: ノードの移動を監視し、重なりを修正する処理をラップして実行します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: ノードの重なり解決処理が意図したタイミングで、効率的に実行されるように制御します。
- **watchNodeMovementAndFixOverlaps()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ内のノードの動きを継続的に監視し、ノード同士が重ならないように自動的に位置を調整します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: 複雑なグラフでもノードが視覚的に重なることを防ぎ、可読性を維持します。
- **resolveNodeOverlaps()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ内の重なっているノードを検出し、それらが互いに重ならないように位置を再調整します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: レイアウトが乱れた際に、手動または自動でノードの衝突を解決します。
- **switchLayout(layoutName)** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフの表示レイアウトを、指定されたアルゴリズム（例: 'cola', 'dagre'など）に切り替えます。
    - 引数: `layoutName` (文字列) - 適用するレイアウトの名前。
    - 戻り値: なし。
    - 機能: グラフの表示形式を動的に変更し、異なる視点から関係性を分析できるようにします。
- **resetNodeStates()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフノードの選択状態、ハイライト、フィルタリングなどの視覚的な状態を初期化します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフを操作した後に、すべてのノードをデフォルトの表示状態に戻します。
- **fitToContent()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフ全体が現在のビューポートに収まるようにズームレベルとパン位置を調整します。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフ全体を一目で確認できるように自動的に表示を最適化します。
- **toggleNodeLabels()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: グラフノードに表示されるラベル（名前など）の表示/非表示を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: グラフが混雑している場合などに、ラベルを非表示にして可読性を向上させたり、必要に応じて表示したりします。
- **toggleCalleeLocationFilter()** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - 役割: 呼び出し先関数（Callee）の定義場所に基づくフィルタリングの有効/無効を切り替えます。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: 特定のファイルやモジュール内で定義されている呼び出し先のみを表示するなど、複雑なグラフの絞り込みを支援します。
- **greet(name)** (`src/main.js`):
    - 役割: 指定された名前に挨拶のメッセージを生成します。
    - 引数: `name` (文字列) - 挨拶の対象となる名前。
    - 戻り値: 挨拶メッセージの文字列（例: "Hello, [name]!"）。
    - 機能: シンプルな文字列操作による挨拶文の作成。
- **main()** (`src/main.js`):
    - 役割: プログラムの主要な実行エントリポイントです。
    - 引数: なし。
    - 戻り値: なし。
    - 機能: `greet`関数を呼び出し、その結果をコンソールに出力することで、プログラムの基本的な動作を示します。

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
Generated at: 2025-08-15 07:05:32 JST

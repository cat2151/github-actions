Last updated: 2025-08-20

# Project Overview

## プロジェクト概要
- GitHub Actionsの共通ワークフローを集約し、複数プロジェクトでの再利用を可能にするリポジトリです。
- 各プロジェクトは共通化されたワークフローを呼び出すだけでCI/CDを簡単に導入できます。
- ワークフローのメンテナンスを一括で行うことで、プロジェクト開発者はコアな開発に集中できます。

## 技術スタック
- フロントエンド: N/A
- 音楽・オーディオ: Tone.js (Web Audio API音声ライブラリ), Web Audio API (ブラウザ音声技術), MML (Music Macro Language - 音楽記法パーサー)
- 開発ツール: Node.js runtime (JavaScript実行環境), npm scripts (タスクランナー), Google Generative AI (AI文書生成サポート), @octokit/rest (GitHub API連携)
- テスト: N/A
- ビルドツール: N/A
- 言語機能: N/A
- 自動化・CI/CD: GitHub Actions (CI/CD自動化)
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
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLを用いてJavaScript/TypeScriptプロジェクトの関数呼び出しグラフを生成するためのクエリファイルです。
- **.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係を正確にロックするためのファイルです。
- **.github_automation/callgraph/codeql-queries/qlpack.yml**: CodeQLパックの定義と設定を記述するファイルです。
- **.github_automation/callgraph/config/example.json**: 呼び出しグラフ生成スクリプトの動作を設定するための設定ファイルの例です。
- **.github_automation/callgraph/docs/callgraph.md**: 呼び出しグラフ生成機能に関する詳細なドキュメントを提供します。
- **.github_automation/callgraph/presets/callgraph.js**: CodeQLによって生成された呼び出しグラフデータをWebブラウザ上でインタラクティブに可視化・操作するためのJavaScriptコードです。Cytoscape.jsを利用してグラフの描画、ノード・エッジ情報の表示、レイアウト切り替えなどを制御します。
- **.github_automation/callgraph/presets/style.css**: 呼び出しグラフのWebビューアのスタイル（色、フォント、レイアウトなど）を定義するCSSファイルです。
- **.github_automation/callgraph/scripts/**: 呼び出しグラフの生成、分析、および関連ファイルの処理を行うための各種スクリプトが格納されています。
  - `analyze-codeql.cjs`: CodeQL分析を実行し、SARIF形式の結果を処理します。
  - `callgraph-utils.cjs`: 呼び出しグラフの処理に特化したユーティリティ関数を提供します。
  - `check-codeql-exists.cjs`: システムにCodeQL CLIがインストールされているかを確認します。
  - `check-commits.cjs`: 特定のコミット履歴や変更をチェックするスクリプトです。
  - `check-node-version.cjs`: 実行環境のNode.jsバージョンが要件を満たしているかを確認します。
  - `common-utils.cjs`: プロジェクト全体で共通利用されるユーティリティ関数群です。
  - `copy-commit-results.cjs`: コミット分析の結果をコピーするスクリプトです。
  - `extract-sarif-info.cjs`: SARIFファイルから特定の情報を抽出するスクリプトです。
  - `find-process-results.cjs`: 特定の処理結果やファイルを検索します。
  - `generate-html-graph.cjs`: CodeQLの分析結果を基に、HTML形式のインタラクティブな呼び出しグラフを生成します。
  - `generateHTML.cjs`: 汎用的なHTMLファイルを生成するためのスクリプトです。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: プロジェクトのデイリーサマリーを自動生成するための設定手順が記述されたドキュメントです。
- **.github_automation/project_summary/prompts/**: AIによるプロジェクトの要約や開発ステータスレポート生成に使用されるプロンプト（指示文）が定義されています。
  - `development-status-prompt.md`: 開発ステータスレポート生成のためのプロンプトです。
  - `project-overview-prompt.md`: プロジェクト概要生成のためのプロンプトです。
- **.github_automation/project_summary/scripts/**: プロジェクトの概要や開発ステータスを自動生成するためのスクリプト群です。
  - `ProjectSummaryCoordinator.cjs`: プロジェクトサマリー生成プロセス全体を調整し、各サブスクリプトの連携を管理します。
  - `development/DevelopmentStatusGenerator.cjs`: 現在の開発状況に関するレポートを生成します。
  - `development/GitUtils.cjs`: Gitリポジトリからの情報取得など、Git操作に関連するユーティリティ機能を提供します。
  - `development/IssueTracker.cjs`: GitHub IssuesなどのIssueトラッカーから情報を収集し、処理します。
  - `generate-project-summary.cjs`: プロジェクトサマリー生成プロセスのメインエントリポイントです。
  - `overview/CodeAnalyzer.cjs`: プロジェクトのコードベースを分析し、構造や統計情報を抽出します。
  - `overview/ProjectAnalysisOrchestrator.cjs`: プロジェクト分析の各ステップをオーケストレーションし、データ収集からレポート生成までを調整します。
  - `overview/ProjectDataCollector.cjs`: プロジェクトに関する各種データ（ファイル情報、依存関係など）を収集します。
  - `overview/ProjectDataFormatter.cjs`: 収集した生データをAIモデルが利用しやすい形式に整形します。
  - `overview/ProjectOverviewGenerator.cjs`: プロジェクトの全体像を要約した概要を生成します。
  - `overview/TechStackAnalyzer.cjs`: プロジェクトで使用されている技術スタックを特定し、分析します。
  - `shared/BaseGenerator.cjs`: 各種レポート生成スクリプトの共通基盤となるクラスまたは機能を提供します。
  - `shared/FileSystemUtils.cjs`: ファイルシステムの読み書き、ディレクトリ操作などのユーティリティ機能を提供します。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: READMEファイルの自動翻訳機能の設定に関するドキュメントです。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルを複数言語に自動翻訳するためのスクリプトです。
- **.gitignore**: Gitがバージョン管理の対象から除外すべきファイルやディレクトリを指定する設定ファイルです。
- **LICENSE**: 本プロジェクトのソフトウェアライセンス情報が記述されています。
- **README.ja.md**: プロジェクトの概要、目的、使い方などを日本語で説明するメインドキュメントです。
- **README.md**: プロジェクトの概要、目的、使い方などを英語で説明するメインドキュメントです。
- **generated-docs/**: 各種自動化スクリプトによって生成されたドキュメントが格納されるディレクトリです。
  - `callgraph.html`: 生成された関数呼び出しグラフのHTMLビューアファイルです。
  - `callgraph.js`: `callgraph.html`で使用されるJavaScriptファイルで、インタラクティブなグラフ描画を制御します。
  - `development-status.md`: 自動生成された開発ステータスに関するレポートです。
  - `project-overview.md`: AIによって自動生成されたプロジェクト概要です。
  - `style.css`: `callgraph.html`に適用されるCSSスタイルシートです。
- **issue-notes/**: GitHub Issuesに関連するメモや追加情報が個別のMarkdownファイルとして格納されています。
- **package-lock.json**: `package.json`に基づいてnpmがインストールするパッケージの正確なバージョンと依存関係ツリーを記録するファイルです。これにより、開発環境間での依存関係の一貫性が保たれます。
- **package.json**: Node.jsプロジェクトのメタデータ（名前、バージョン、スクリプト、依存関係など）を定義するファイルです。
- **src/main.js**: プロジェクトの簡単なテストや動作確認用のエントリポイントとなるJavaScriptファイルです。

## 関数詳細説明
- `escapeHtml(text)` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: HTML特殊文字を安全なエンティティに変換し、クロスサイトスクリプティング（XSS）攻撃を防ぐためのユーティリティ関数です。
    - **引数**: `text` (string) - エスケープする文字列。
    - **戻り値**: (string) - エスケープされた文字列。
    - **機能**: `<`、`>`、`&`、`"`などの文字を、対応するHTMLエスケープシーケンスに置換します。
- `getLayoutConfig(layoutName)` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: 指定されたレイアウト名に対応するCytoscape.jsのレイアウト設定オブジェクトを返します。
    - **引数**: `layoutName` (string) - 取得したいレイアウトの名前（例: 'cose', 'dagre'）。
    - **戻り値**: (object) - Cytoscape.jsのレイアウト設定オブジェクト。
    - **機能**: グラフの表示形式を動的に切り替える際に、各レイアウト固有のオプションを提供します。
- `placeCentralNode(cy, node)` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: Cytoscape.jsグラフ上で指定されたノードを中央に配置し、適切なズームレベルに調整します。
    - **引数**: `cy` (Cytoscape.js instance) - グラフインスタンス。 `node` (Cytoscape.js node) - 中央に配置するノード。
    - **戻り値**: なし。
    - **機能**: 特定のノードに焦点を当て、その関連要素の視認性を高めます。
- `showNodeInfo(node)` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: グラフ上のノード（関数など）が選択された際に、その詳細情報を情報パネルに表示します。
    - **引数**: `node` (Cytoscape.js node) - 情報表示対象のノード。
    - **戻り値**: なし。
    - **機能**: ノードのID、タイプ、関連ファイルパスなどのメタデータを抽出し、ユーザーインターフェース上に整形して表示します。
- `showEdgeInfo(edge)` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: グラフ上のエッジ（呼び出し関係など）が選択された際に、その詳細情報を情報パネルに表示します。
    - **引数**: `edge` (Cytoscape.js edge) - 情報表示対象のエッジ。
    - **戻り値**: なし。
    - **機能**: エッジのソースノード、ターゲットノード、関係のタイプなどのメタデータを抽出し、ユーザーインターフェース上に整形して表示します。
- `hideInfoPanel()` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: グラフの情報表示パネルを非表示にします。
    - **引数**: なし。
    - **戻り値**: なし。
    - **機能**: ユーザーが情報パネルを閉じる操作を行った際に、パネルの表示状態を制御します。
- `showInfoPanel()` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: グラフの情報表示パネルを表示します。
    - **引数**: なし。
    - **戻り値**: なし。
    - **機能**: ユーザーがノードやエッジをクリックした際などに、情報パネルを表示状態にします。
- `toggleInfoPanel()` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: グラフの情報表示パネルの表示/非表示を切り替えます。
    - **引数**: なし。
    - **戻り値**: なし。
    - **機能**: ボタンクリックなどのイベントに応答して、パネルの現在の表示状態を反転させます。
- `generateGitHubURL(nodeData)` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: ノードのデータに基づいて、対応するGitHubリポジトリのファイルへのURLを生成します。
    - **引数**: `nodeData` (object) - ノードのIDやファイルパスを含むデータオブジェクト。
    - **戻り値**: (string) - 生成されたGitHub URL。
    - **機能**: グラフ上のノードから直接ソースコードへジャンプするためのリンクを作成します。
- `resetLayout(cy)` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: Cytoscape.jsグラフの現在のレイアウトを初期状態にリセットします。
    - **引数**: `cy` (Cytoscape.js instance) - グラフインスタンス。
    - **戻り値**: なし。
    - **機能**: ユーザーがグラフを操作した後に、元のレイアウトに戻したい場合に利用されます。
- `watchNodeMovementAndFixOverlapsWrap(cy, options)` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: ノードの動きを監視し、オーバーラップを修正するメカニズムのラッパー関数です。
    - **引数**: `cy` (Cytoscape.js instance) - グラフインスタンス。 `options` (object) - 監視と修正に関するオプション。
    - **戻り値**: なし。
    - **機能**: グラフの動的なレイアウト調整やユーザーによるノード移動後に、ノードが重なり合わないように位置を調整します。
- `watchNodeMovementAndFixOverlaps(cy, options)` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: Cytoscape.jsグラフ内のノードのオーバーラップを検出・修正するコアロジックを実装します。
    - **引数**: `cy` (Cytoscape.js instance) - グラフインスタンス。 `options` (object) - 監視と修正に関するオプション。
    - **戻り値**: なし。
    - **機能**: グラフの視認性を高めるため、ノードの衝突を避け、整然と表示されるように自動調整します。
- `resolveNodeOverlaps(cy, options)` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: グラフ内のノードのオーバーラップを具体的に解決する関数です。
    - **引数**: `cy` (Cytoscape.js instance) - グラフインスタンス。 `options` (object) - 解決に関するオプション。
    - **戻り値**: なし。
    - **機能**: 重複するノードの位置を微調整し、互いに離れるように移動させます。
- `switchLayout(cy, layoutName)` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: Cytoscape.jsグラフのレイアウトを動的に切り替えます。
    - **引数**: `cy` (Cytoscape.js instance) - グラフインスタンス。 `layoutName` (string) - 適用したい新しいレイアウトの名前。
    - **戻り値**: なし。
    - **機能**: ユーザーが異なる視点や整理方法でグラフを見たい場合に、レイアウトエンジンを再実行します。
- `resetNodeStates(cy)` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: Cytoscape.jsグラフ内のノードの表示状態（例: ハイライト、選択状態）を初期状態に戻します。
    - **引数**: `cy` (Cytoscape.js instance) - グラフインスタンス。
    - **戻り値**: なし。
    - **機能**: ユーザーの操作によって変更されたノードの視覚的状態をクリアし、デフォルトの表示に戻します。
- `fitToContent(cy)` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: Cytoscape.jsグラフをその内容に合わせてズームおよびパンし、全ての要素がビューポート内に収まるように調整します。
    - **引数**: `cy` (Cytoscape.js instance) - グラフインスタンス。
    - **戻り値**: なし。
    - **機能**: グラフ全体の俯瞰を提供し、見切れている要素がないようにします。
- `toggleNodeLabels(cy)` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: Cytoscape.jsグラフのノードに表示されるラベルの表示/非表示を切り替えます。
    - **引数**: `cy` (Cytoscape.js instance) - グラフインスタンス。
    - **戻り値**: なし。
    - **機能**: グラフの要素が多い場合に、ラベルを非表示にして視覚的なノイズを減らしたり、必要に応じて表示したりします。
- `toggleCalleeLocationFilter(cy)` (定義元: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    - **役割**: 呼び出しグラフにおいて、呼び出し先（Callee）の位置に基づくフィルタリングの有効/無効を切り替えます。
    - **引数**: `cy` (Cytoscape.js instance) - グラフインスタンス。
    - **戻り値**: なし。
    - **機能**: 特定の条件（例: 同じファイル内の呼び出しのみ表示）でグラフを絞り込み、分析の焦点を絞るのに役立ちます。
- `greet(name)` (定義元: `src/main.js`):
    - **役割**: 指定された名前に挨拶する文字列を返します。
    - **引数**: `name` (string) - 挨拶の対象となる名前。
    - **戻り値**: (string) - 例: "Hello, World!"
    - **機能**: シンプルな文字列操作の例として機能します。
- `main()` (定義元: `src/main.js`):
    - **役割**: プログラムの主要なエントリポイントとして機能し、`greet`関数を呼び出してコンソールにメッセージを出力します。
    - **引数**: なし。
    - **戻り値**: なし。
    - **機能**: アプリケーションの開始時に実行され、基本的な機能の連携を示します。

## 関数呼び出し階層ツリー
```
- main()
  - greet()

---
Generated at: 2025-08-20 07:05:43 JST

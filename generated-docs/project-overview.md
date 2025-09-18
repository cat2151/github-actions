Last updated: 2025-09-19

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽にします。
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけで利用可能です。
- ✅ メンテナンスは一括で効率化し、プロジェクト開発に集中できる環境を提供します。

## 技術スタック
- フロントエンド:
    - `generated-docs/callgraph.js`: 生成された呼び出しグラフをブラウザでインタラクティブに表示・操作するためのJavaScriptコード。
    - `generated-docs/style.css`: 生成された呼び出しグラフのHTML表示に適用されるCSSスタイルシート。
- 音楽・オーディオ: (本プロジェクトには直接関連しない情報として提供されていますが、参考情報として記載します)
    - Tone.js: Web Audio APIを用いたWebベースの音楽・オーディオアプリケーション開発ライブラリ。
    - Web Audio API: ウェブブラウザ上で高度な音声処理を行うためのAPI（Tone.js経由で利用）。
    - MML (Music Macro Language): 音楽をテキスト形式で記述するための簡易記法パーサー。
- 開発ツール:
    - Node.js runtime: プロジェクト内の自動化スクリプト（`.cjs`ファイル）を実行するためのJavaScript実行環境。
    - CodeQL: ソフトウェアのセキュリティ脆弱性やバグを検出するための静的解析エンジン。本プロジェクトでは関数呼び出しグラフの生成に利用されています。
- テスト:
    - CodeQL: コードの品質と潜在的な問題を検出するための静的解析ツールとして、テスト・品質保証の一環で活用されます。
- ビルドツール:
    - Node.jsスクリプト: プロジェクト内の`.cjs`ファイル群が、様々な自動化処理やドキュメント生成の役割を担っており、実質的なビルド・生成ツールとして機能しています。
- 言語機能:
    - JavaScript: 主に自動化スクリプトやウェブコンテンツの動的な振る舞いを記述するために使用されています。
    - CommonJS (.cjs): Node.js環境におけるモジュールシステム。多くのスクリプトファイルでこの形式が採用されています。
- 自動化・CI/CD:
    - GitHub Actions: コードの変更やリポジトリのイベントに基づいて、様々な自動化ワークフローを実行するためのCI/CDプラットフォーム。
        - プロジェクト要約自動生成: リポジトリの情報を基にプロジェクト概要を自動で生成するワークフロー。
        - Issue自動管理: Issueのライフサイクルや関連情報を自動で管理するワークフロー。
        - README多言語翻訳: `README.md` ファイルを複数の言語に自動翻訳するワークフロー。
        - i18n automation: 国際化 (i18n) 関連の自動化処理を行うワークフロー。
- 開発標準:
    - CodeQL: コードの潜在的な問題を特定し、品質とセキュリティ標準を維持するための静的解析を行います。
    - GitHub Actions: 自動化されたワークフローにより、コードのフォーマットチェックや特定のルールの適用を促し、開発標準の維持に貢献します。

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
  📖 3.md
  📖 4.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLを用いて、ソースコード内の関数呼び出し関係を分析し、グラフデータを抽出するためのクエリ。
- **.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係とバージョンをロックするファイル。
- **.github_automation/callgraph/codeql-queries/qlpack.yml**: CodeQLパックのメタデータを定義するファイル（名前、バージョン、依存関係など）。
- **.github_automation/callgraph/config/example.json**: 関数呼び出しグラフの生成または表示に関する設定例を格納するJSONファイル。
- **.github_automation/callgraph/docs/callgraph.md**: 関数呼び出しグラフ機能に関するドキュメントや説明が記述されたMarkdownファイル。
- **.github_automation/callgraph/presets/callgraph.js**: 関数呼び出しグラフの表示ロジック、インタラクション、レイアウトなどを定義するJavaScriptファイル。`generated-docs/callgraph.js` の元となるコード。
- **.github_automation/callgraph/presets/style.css**: 関数呼び出しグラフのHTML表示に適用されるCSSスタイルシート。`generated-docs/style.css` の元となるコード。
- **.github_automation/callgraph/scripts/analyze-codeql.cjs**: CodeQL解析を実行し、SARIF形式の結果を生成するためのNode.jsスクリプト。
- **.github_automation/callgraph/scripts/callgraph-utils.cjs**: 関数呼び出しグラフの生成・処理に関連する共通ユーティリティ関数を提供するNode.jsスクリプト。
- **.github_automation/callgraph/scripts/check-codeql-exists.cjs**: CodeQL実行環境の存在を確認するためのNode.jsスクリプト。
- **.github_automation/callgraph/scripts/check-commits.cjs**: Gitのコミット履歴をチェックするためのNode.jsスクリプト。
- **.github_automation/callgraph/scripts/check-node-version.cjs**: Node.jsのバージョンが要件を満たしているか確認するためのNode.jsスクリプト。
- **.github_automation/callgraph/scripts/common-utils.cjs**: プロジェクト全体で利用される共通のユーティリティ関数をまとめたNode.jsスクリプト。
- **.github_automation/callgraph/scripts/copy-commit-results.cjs**: コミット関連の結果をコピーするためのNode.jsスクリプト。
- **.github_automation/callgraph/scripts/extract-sarif-info.cjs**: CodeQLのSARIF結果ファイルから必要な情報を抽出するためのNode.jsスクリプト。
- **.github_automation/callgraph/scripts/find-process-results.cjs**: 特定の処理結果を検索するためのNode.jsスクリプト。
- **.github_automation/callgraph/scripts/generate-html-graph.cjs**: CodeQLの解析結果を基に、HTML形式の関数呼び出しグラフを生成するNode.jsスクリプト。
- **.github_automation/callgraph/scripts/generateHTML.cjs**: HTMLファイルを生成するための汎用的なNode.jsスクリプト。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: プロジェクトのデイリーサマリー機能を設定するためのドキュメント。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: 開発状況に関する情報を収集・生成するためのプロンプト定義ファイル。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: プロジェクト概要を生成するためのプロンプト定義ファイル。
- **.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs**: プロジェクト概要生成処理全体を調整・管理するNode.jsスクリプト。
- **.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs**: 開発状況のレポートを生成するためのNode.jsスクリプト。
- **.github_automation/project_summary/scripts/development/GitUtils.cjs**: Gitリポジトリ操作に関するユーティリティ関数を提供するNode.jsスクリプト。
- **.github_automation/project_summary/scripts/development/IssueTracker.cjs**: Issueトラッキングシステムと連携するためのNode.jsスクリプト。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: プロジェクト概要を実際に生成するNode.jsスクリプトのエントリポイント。
- **.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs**: ソースコードを分析し、構造や統計情報を抽出するNode.jsスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs**: プロジェクト分析の各ステップをオーケストレーションするNode.jsスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs**: プロジェクトに関する様々なデータを収集するNode.jsスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs**: 収集したプロジェクトデータを特定の形式に整形するNode.jsスクリプト。
- **.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs**: 収集・整形されたデータからプロジェクト概要テキストを生成するNode.jsスクリプト。
- **.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs**: プロジェクトで使用されている技術スタックを分析・特定するNode.jsスクリプト。
- **.github_automation/project_summary/scripts/shared/BaseGenerator.cjs**: 各種ジェネレータの基底クラスまたは共通機能を提供するNode.jsスクリプト。
- **.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs**: ファイルシステム操作に関するユーティリティ関数を提供するNode.jsスクリプト。
- **.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs**: プロジェクト内のファイル操作に特化したユーティリティ関数を提供するNode.jsスクリプト。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: 翻訳機能の設定方法に関するドキュメント。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルを自動翻訳するためのNode.jsスクリプト。
- **.gitignore**: Gitが追跡しないファイルやディレクトリを指定する設定ファイル。
- **.vscode/settings.json**: VS Codeエディタのワークスペース固有の設定を定義するファイル。
- **LICENSE**: 本プロジェクトの利用許諾条件を定めるライセンスファイル。
- **README.ja.md**: プロジェクトの概要、使い方などを日本語で説明するメインのドキュメント。
- **README.md**: プロジェクトの概要、使い方などを英語で説明するメインのドキュメント。
- **generated-docs/callgraph.html**: 関数呼び出しグラフを可視化したHTMLファイル。
- **generated-docs/callgraph.js**: `generated-docs/callgraph.html` で使用される、グラフの動的な描画やインタラクションを制御するJavaScriptコード。
- **generated-docs/style.css**: `generated-docs/callgraph.html` のスタイルを定義するCSSファイル。
- **issue-notes/*.md**: GitHub Actionsによって管理されるIssueに関連する自動生成されたメモファイル群。
- **src/main.js**: サンプルまたはテスト目的のシンプルなJavaScriptファイル。

## 関数詳細説明
- **switch**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: JavaScriptの `switch` 文の一部として、複数の条件分岐を処理する。
    - 機能: 特定の値に基づいて、対応するコードブロックを実行する。
- **escapeHtml**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: HTML特殊文字をエスケープし、スクリプトインジェクションなどのセキュリティリスクを防ぐ。
    - 機能: 文字列内のHTMLエンティティ（例: `<`, `>`, `&`）を安全な形式に変換する。
- **getLayoutConfig**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: グラフのレイアウト設定を取得する。
    - 機能: グラフ描画のための設定オブジェクトを返す。
- **placeCentralNode**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: グラフの中央ノードを配置する。
    - 機能: 視覚的な中心となるノードの位置を調整する。
- **showNodeInfo**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: 特定のノード（関数など）に関する情報を表示する。
    - 機能: ノードがクリックされたりホバーされたりした際に、詳細パネルにそのノードの情報を展開する。
- **showEdgeInfo**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: 特定のエッジ（関数呼び出し関係など）に関する情報を表示する。
    - 機能: エッジがクリックされたりホバーされたりした際に、詳細パネルにそのエッジの情報を展開する。
- **hideInfoPanel**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: グラフの詳細情報パネルを非表示にする。
    - 機能: ユーザーがパネルを閉じる操作を行った際に、パネルを畳む。
- **showInfoPanel**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: グラフの詳細情報パネルを表示する。
    - 機能: ノードやエッジが選択された際に、パネルを展開する。
- **toggleInfoPanel**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: グラフの詳細情報パネルの表示/非表示を切り替える。
    - 機能: パネルの現在の状態に応じて、表示と非表示を交互に切り替える。
- **generateGitHubURL**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: GitHub上の対応するソースコードへのURLを生成する。
    - 機能: ノードやエッジの情報から、そのコードが存在するGitHubリポジトリのURLを構築する。
- **resetLayout**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: グラフのレイアウトを初期状態にリセットする。
    - 機能: ユーザーがグラフの配置を操作した後、元の状態に戻す。
- **watchNodeMovementAndFixOverlapsWrap**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: ノードの動きを監視し、重なりを修正するラッパー関数。
    - 機能: `watchNodeMovementAndFixOverlaps` の呼び出しをラップし、必要に応じて重なり解決ロジックを適用する。
- **watchNodeMovementAndFixOverlaps**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: ノードの動きをリアルタイムで監視し、他のノードとの重なりを解決する。
    - 機能: グラフが動的に変化する際に、ノードが互いに重ならないように位置を調整する。
- **resolveNodeOverlaps**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: グラフ内の重なっているノードの位置を調整して解決する。
    - 機能: 複数のノードが同じ位置に表示されるのを防ぐため、位置を微調整する。
- **switchLayout**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: グラフのレイアウトアルゴリズムを切り替える。
    - 機能: ユーザーの選択に応じて、異なるレイアウト（例: 円形、強制指向）にグラフを再描画する。
- **resetNodeStates**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: 全てのノードの状態（選択、ハイライトなど）をリセットする。
    - 機能: グラフのインタラクション後に、ノードを初期状態に戻す。
- **fitToContent**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: グラフ全体がビューポートに収まるようにズームレベルとパンを調整する。
    - 機能: グラフの全体像を一画面で表示する。
- **toggleNodeLabels**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: ノードのラベルの表示/非表示を切り替える。
    - 機能: グラフの視認性を高めるため、ノード名の表示をオン/オフする。
- **toggleCalleeLocationFilter**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: 呼び出し先の場所に基づいてノードをフィルタリングする機能のオン/オフを切り替える。
    - 機能: 特定の場所に定義されている関数のみを表示するなどのフィルタリングを適用する。
- **replace**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: 文字列置換操作を行う。JavaScriptの標準的な `String.prototype.replace` メソッドを参照。
    - 機能: 文字列内のパターンを別の文字列に置き換える。
- **function**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: JavaScriptにおける関数定義のキーワード。
    - 機能: 関数スコープを作成し、特定の処理をカプセル化する。
- **max**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: 複数の数値の中から最大値を返す。JavaScriptの標準的な `Math.max` メソッドを参照。
    - 機能: 引数として与えられた数値群の最大値を計算する。
- **on**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: イベントリスナーを要素にアタッチする。jQueryなどのイベントハンドリングメソッドを参照。
    - 機能: 指定されたイベントが発生したときに特定の関数を実行するように設定する。
- **if**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: JavaScriptにおける条件分岐のキーワード。
    - 機能: 指定された条件が真である場合にのみコードブロックを実行する。
- **for**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: JavaScriptにおけるループ処理のキーワード。
    - 機能: 指定された回数または条件が満たされるまでコードブロックを繰り返し実行する。
- **ready**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: DOMが完全にロードされたときに実行される関数を設定する。jQueryの `$(document).ready()` などに類似。
    - 機能: ウェブページが準備完了になった後、スクリプトを実行する。
- **addListener**: (.github_automation/callgraph/presets/callgraph.js, generated-docs/callgraph.js)
    - 役割: イベントリスナーを追加する。DOMの `EventTarget.prototype.addEventListener` に類似。
    - 機能: 特定のイベントが発生したときに呼び出される関数を登録する。
- **greet**: (src/main.js)
    - 役割: シンプルな挨拶メッセージを生成する。
    - 機能: 引数に名前を受け取り、「Hello, [名前]!」という文字列を返す。
- **main**: (src/main.js)
    - 役割: `src/main.js` の主要な実行エントリポイント。
    - 機能: `greet` 関数を呼び出し、その結果をコンソールに出力する。

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
Generated at: 2025-09-19 07:05:12 JST

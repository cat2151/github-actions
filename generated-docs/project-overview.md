Last updated: 2025-08-01

# Project Overview

## プロジェクト概要
- ソースコードの関数呼び出し関係を視覚化・分析するためのツールを提供します。
- プロジェクトの概要や開発状況を自動生成する機能を備えています。
- さらに、ドキュメントの多言語翻訳を支援するユーティリティも統合しています。

## 技術スタック
- フロントエンド: JavaScript (UIインタラクション、データ処理), CSS (スタイリング), HTML (グラフおよび情報の表示)
- 音楽・オーディオ: 特になし
- 開発ツール: Node.js (スクリプト実行環境), CodeQL (コードの静的分析、呼び出しグラフの抽出)
- テスト: 特になし（明示的な情報なし）
- ビルドツール: Node.jsスクリプト (ファイルの生成、コピー、分析の実行など)
- 言語機能: JavaScript (CommonJSモジュール、ESNext構文の一部), Markdown (ドキュメント記述)
- 自動化・CI/CD: Node.jsスクリプト (コード分析、レポート生成、バージョンチェック、コミットチェックなど、自動化処理に利用)
- 開発標準: 特になし（明示的な情報なし）

## ファイル階層ツリー
```
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
    📄 generate-project-summary.cjs
📁 translate/
  📁 docs/
    📖 TRANSLATION_SETUP.md
  📁 scripts/
    📄 translate-readme.cjs
```

## ファイル詳細説明
- **callgraph/codeql-queries/callgraph.ql**: CodeQLを利用してソースコードから関数間の呼び出し関係を抽出し、呼び出しグラフを生成するためのクエリを定義します。
- **callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係とバージョンをロックし、ビルドの一貫性を保証するためのファイルです。
- **callgraph/codeql-queries/qlpack.yml**: CodeQLパックのメタデータと設定を定義するファイルで、クエリの構成を管理します。
- **callgraph/config/example.json**: callgraph機能の各種設定例をJSON形式で提供します。
- **callgraph/docs/callgraph.md**: 関数呼び出しグラフ機能の使用方法、設定、および詳細に関するドキュメントです。
- **callgraph/presets/callgraph.js**: 関数呼び出しグラフの視覚化、ユーザーインタラクション、ノード配置、情報表示など、フロントエンドの主要なロジックを実装しています。
- **callgraph/presets/style.css**: 関数呼び出しグラフおよび関連するUI要素のスタイルを定義し、表示を整形します。
- **callgraph/scripts/analyze-codeql.cjs**: CodeQL分析を実行し、ソースコードから静的分析結果（SARIF形式など）を生成するためのスクリプトです。
- **callgraph/scripts/callgraph-utils.cjs**: 関数呼び出しグラフに関連するユーティリティ関数やヘルパーロジックを提供します。
- **callgraph/scripts/check-codeql-exists.cjs**: システムにCodeQLがインストールされているかを確認するためのスクリプトです。
- **callgraph/scripts/check-commits.cjs**: プロジェクトのコミット履歴を分析し、特定の条件を満たすかチェックするためのスクリプトです。
- **callgraph/scripts/check-node-version.cjs**: Node.jsのバージョンがプロジェクトの要件を満たしているかを確認するためのスクリプトです。
- **callgraph/scripts/common-utils.cjs**: プロジェクト全体で汎用的に利用される共通ユーティリティ関数を提供します。
- **callgraph/scripts/copy-commit-results.cjs**: コミット分析の結果を所定の場所にコピーするためのスクリプトです。
- **callgraph/scripts/extract-sarif-info.cjs**: CodeQL分析によって生成されたSARIF（Static Analysis Results Interchange Format）ファイルから必要な情報を抽出するためのスクリプトです。
- **callgraph/scripts/find-process-results.cjs**: 特定のプロセス実行結果を検索し、処理するためのスクリプトです。
- **callgraph/scripts/generate-html-graph.cjs**: CodeQL分析結果などに基づき、インタラクティブなHTML形式の呼び出しグラフを生成するスクリプトです。
- **callgraph/scripts/generateHTML.cjs**: HTMLコンテンツを動的に生成するための汎用的なスクリプトです。
- **project_summary/docs/daily-summary-setup.md**: 日次プロジェクトサマリーの生成設定に関するドキュメントです。
- **project_summary/prompts/development-status-prompt.md**: 開発状況サマリーを生成する際に使用されるプロンプトのテンプレートです。
- **project_summary/prompts/project-overview-prompt.md**: プロジェクト概要を生成する際に使用されるプロンプトのテンプレートです。
- **project_summary/scripts/generate-project-summary.cjs**: 提供されたプロンプトテンプレートとプロジェクト情報を基に、プロジェクトサマリーを自動生成するスクリプトです。
- **translate/docs/TRANSLATION_SETUP.md**: 翻訳機能のセットアップと使用方法に関するドキュメントです。
- **translate/scripts/translate-readme.cjs**: READMEファイルなどのドキュメントを多言語に翻訳するためのスクリプトです。

## 関数詳細説明
- **escapeHtml**: HTML特殊文字をエスケープし、スクリプトインジェクション攻撃（XSS）を防ぐためのユーティリティ関数。
- **getLayoutConfig**: グラフの描画レイアウトに関する設定オブジェクトを取得します。
- **placeCentralNode**: グラフ内で特定のノードを中心位置に配置します。
- **showNodeInfo**: 特定のノード（関数やファイルなど）に関する詳細情報をUIパネルに表示します。
- **showEdgeInfo**: グラフ上のエッジ（呼び出し関係など）に関する詳細情報をUIパネルに表示します。
- **hideInfoPanel**: 現在表示されている情報パネルを非表示にします。
- **showInfoPanel**: 情報パネルを表示し、コンテンツを設定します。
- **toggleInfoPanel**: 情報パネルの表示/非表示を切り替えます。
- **generateGitHubURL**: GitHubリポジトリの特定のファイルやコミットへのURLを生成します。
- **resetLayout**: グラフのレイアウトを初期状態に戻し、ズームや位置をリセットします。
- **watchNodeMovementAndFixOverlapsWrap**: ノードの動きを監視し、他のノードとの重なりを自動的に解消する処理のラッパー関数です。
- **watchNodeMovementAndFixOverlaps**: ノードが移動した際に他のノードとの衝突を検知し、位置を調整して重なりを解消します。
- **resolveNodeOverlaps**: 指定されたノード間の重なりを数学的に計算し、最適な配置に調整します。
- **switchLayout**: グラフの描画に使用するレイアウトアルゴリズムを切り替えます（例: 円形、強制指向型など）。
- **resetNodeStates**: グラフ内の全てのノードの選択状態、ハイライト状態などの視覚的状態を初期化します。
- **fitToContent**: グラフ全体がビューポート内に収まるようにズームレベルとパン位置を自動調整します。
- **toggleNodeLabels**: グラフノードに表示されるラベルの表示/非表示を切り替えます。
- **toggleCalleeLocationFilter**: 呼び出し先の位置に基づいてノードをフィルタリングする機能の有効/無効を切り替えます。
- **replace**: 文字列内の特定のパターンを別の文字列に置換するなどの汎用的な置換操作を行います。
- **switch**: JavaScriptの`switch`文に関連するコードブロック。複数の選択肢に基づいて異なる処理パスを実行します。
- **function**: 匿名関数やコールバックとして使用される可能性のある、汎用的な関数定義です。
- **max**: 複数の数値の中から最大値を取得する処理を行う関数です。
- **on**: イベントリスナーを登録する際に使用される関数。特定のイベント発生時に指定されたコールバックを実行します。
- **if**: JavaScriptの`if`文に関連するコードブロック。特定の条件が真である場合にのみ実行される処理を定義します。
- **for**: JavaScriptの`for`ループに関連するコードブロック。指定された回数だけ、または条件が満たされるまで繰り返し処理を実行します。
- **ready**: ドキュメントの読み込み完了やDOMの準備完了など、特定の状態になった際に実行される処理を定義する関数です。
- **addListener**: イベントリスナーを追加する関数。`on`関数と類似の役割を持ちます。

## 関数呼び出し階層ツリー
```
- switch (callgraph/presets/callgraph.js)
  - escapeHtml (callgraph/presets/callgraph.js)
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
- if (callgraph/presets/callgraph.js)
- for (callgraph/presets/callgraph.js)

---
Generated at: 2025-08-01 07:05:20 JST

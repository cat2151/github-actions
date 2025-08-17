Last updated: 2025-08-18

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: なし（本プロジェクトはGitHub Actions共通ワークフロー集であり、直接的なユーザーインターフェースは持ちません。）
- 音楽・オーディオ:
    - Tone.js: Web Audio APIを用いたウェブベースの音声ライブラリ。
    - MML (Music Macro Language): 音楽記法を解析し、音を生成するためのパーサー。
    - Web Audio API: ブラウザ上で高度な音声処理を行うためのAPI（主にTone.js経由で使用）。
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するための環境。
    - npm scripts: プロジェクトのタスク自動化（スクリプト実行）に利用される。
    - Google Generative AI: AIによる文書生成（プロジェクト要約、開発状況レポートなど）を支援。
    - @octokit/rest: GitHub REST APIと連携し、リポジトリ操作や情報取得を行うためのライブラリ。
- テスト: なし（具体的なテスト技術の記述はありません。）
- ビルドツール: なし（具体的なビルド・パース関連技術の記述はありません。）
- 言語機能: なし（具体的な言語仕様・機能の記述はありません。）
- 自動化・CI/CD:
    - GitHub Actions: CI/CDパイプラインを自動化するサービス。プロジェクト要約生成、Issue管理、README翻訳など、8つのワークフローが共通化されています。
- 開発標準: なし（具体的なコード品質・統一ルール関連技術の記述はありません。）

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
      📄 BaseGenerator.cjs
      📄 BaseProjectAnalyzer.cjs
      📄 CodeAnalyzer.cjs
      📄 DevelopmentStatusGenerator.cjs
      📄 FileSystemUtils.cjs
      📄 GitUtils.cjs
      📄 IssueTracker.cjs
      📄 ProjectAnalyzer.cjs
      📄 ProjectOverviewGenerator.cjs
      📄 ProjectSummaryCoordinator.cjs
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
-   **.github_automation/callgraph/presets/callgraph.js**: コード呼び出しグラフの可視化を制御するJavaScriptファイル。グラフのレイアウト、ノードとエッジ情報の表示、インタラクション（ズーム、パン、ノードの移動）などを担当します。
-   **.github_automation/callgraph/presets/style.css**: コード呼び出しグラフの見た目を定義するCSSファイル。ノードの色、サイズ、エッジのスタイル、情報パネルのレイアウトなど、視覚的な要素を規定します。
-   **generated-docs/callgraph.html**: 自動生成された呼び出しグラフの表示用HTMLファイル。`callgraph.js`と`style.css`を読み込み、グラフをブラウザにレンダリングします。
-   **generated-docs/callgraph.js**: `callgraph.html`から読み込まれ、呼び出しグラフの動的な挙動を制御するJavaScriptファイル。`.github_automation/callgraph/presets/callgraph.js`と同じ内容であると推測されますが、こちらは生成物として配置されます。
-   **generated-docs/style.css**: `callgraph.html`から読み込まれ、呼び出しグラフのスタイルを適用するCSSファイル。`.github_automation/callgraph/presets/style.css`と同じ内容であると推測されますが、こちらも生成物として配置されます。
-   **src/main.js**: プロジェクトのエントリポイントとなるJavaScriptファイル。シンプルな挨拶関数`greet`と、その関数を呼び出す`main`関数が含まれています。

## 関数詳細説明
-   **escapeHtml** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: HTML特殊文字をエスケープし、セキュリティを確保しながら文字列を安全に表示できるようにします。
    -   機能: 入力文字列に含まれるHTML予約文字（例: `<`, `>`, `&`, `"`, `'`）を対応するHTMLエンティティに変換します。
-   **getLayoutConfig** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: グラフのレイアウト設定を取得または決定します。
    -   機能: グラフの表示方式（例えば、中心ノードの配置、ノード間の距離など）に関する設定を提供します。
-   **placeCentralNode** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: グラフの中心となるノードを配置します。
    -   機能: 特定のノードを画面中央に配置するなど、レイアウトの基準点を設定します。
-   **showNodeInfo** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: 特定のノードに関する情報を表示します。
    -   機能: グラフのノード（関数など）が選択された際に、その詳細情報（名前、ファイルパスなど）をパネルに表示します。
-   **showEdgeInfo** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: 特定のエッジ（呼び出し関係）に関する情報を表示します。
    -   機能: グラフのエッジが選択された際に、その呼び出し元の関数と呼び出し先の関数の関係性などをパネルに表示します。
-   **hideInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: 情報表示パネルを非表示にします。
    -   機能: グラフ上のノードやエッジの選択が解除された際などに、詳細情報パネルを隠します。
-   **showInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: 情報表示パネルを表示します。
    -   機能: ノードやエッジが選択された際に、詳細情報パネルを表示します。
-   **toggleInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: 情報表示パネルの表示/非表示を切り替えます。
    -   機能: ユーザー操作に応じてパネルの表示状態をトグルします。
-   **generateGitHubURL** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: GitHubリポジトリ内のファイルやコミットへのURLを生成します。
    -   機能: グラフ内の要素に関連するGitHub上のリソースに直接リンクするためのURLを構築します。
-   **resetLayout** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: グラフのレイアウトを初期状態にリセットします。
    -   機能: ユーザーがグラフの表示を操作した後に、元の位置やズームレベルに戻します。
-   **watchNodeMovementAndFixOverlapsWrap** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: ノードの移動を監視し、重なりを修正する処理をラップします。
    -   機能: `watchNodeMovementAndFixOverlaps`の呼び出しを管理し、実行環境に合わせた調整を行います。
-   **watchNodeMovementAndFixOverlaps** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: ノードが移動した際に、他のノードとの重なりを自動的に解消します。
    -   機能: グラフの可読性を保つため、ノードが互いに重ならないように位置を調整します。
-   **resolveNodeOverlaps** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: 複数のノードが重なっている状態を解決します。
    -   機能: 検出されたノードの重なりを解消するための具体的なアルゴリズムを実行します。
-   **switchLayout** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: グラフのレイアウトアルゴリズムを切り替えます。
    -   機能: 異なる視覚的な表現や整理方法のために、グラフの配置方法を変更します。
-   **resetNodeStates** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: ノードの表示状態（選択状態、ハイライトなど）をリセットします。
    -   機能: グラフの操作後にノードの見た目を初期状態に戻します。
-   **fitToContent** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: グラフ全体が画面内に収まるようにズームレベルを調整します。
    -   機能: 全てのノードが見えるようにビューポートを調整します。
-   **toggleNodeLabels** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: ノードのラベル（テキスト）の表示/非表示を切り替えます。
    -   機能: グラフの密度が高い場合などにラベルの表示を調整し、可読性を向上させます。
-   **toggleCalleeLocationFilter** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: 呼び出された関数の位置に基づくフィルタリングを切り替えます。
    -   機能: 特定のファイルやディレクトリ内の関数呼び出しのみを表示するなど、グラフの表示範囲を絞り込みます。
-   **replace** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: 文字列内のパターンを置換します。
    -   機能: 特定の文字や文字列を別のものに置き換える汎用的な処理です。
-   **switch** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: 複数の中から条件に合致する処理を選択し実行します。
    -   機能: 一般的な制御フローの一部として、条件に応じた処理分岐を行います。
-   **function** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: 処理のブロックを定義します。
    -   機能: JavaScriptの関数定義を示します。
-   **max** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: 複数の数値の中から最大値を返します。
    -   機能: 数値の比較を行い、最大値を特定します。
-   **on** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: イベントリスナーを登録します。
    -   機能: 特定のイベントが発生したときに実行されるコールバック関数を設定します（例: jQueryイベントハンドラなど）。
-   **if** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: 条件分岐を定義します。
    -   機能: 指定された条件が真の場合にコードブロックを実行します。
-   **for** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: ループ処理を定義します。
    -   機能: 指定された回数または条件が満たされるまでコードブロックを繰り返し実行します。
-   **ready** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: DOMツリーが完全に構築された後にコードを実行します。
    -   機能: ページのロード完了を待って初期化処理などを行います（例: jQueryの`$(document).ready()`）。
-   **addListener** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   役割: イベントリスナーを追加します。
    -   機能: 特定のオブジェクトや要素にイベントハンドラを付加します。
-   **greet** (`src/main.js`):
    -   役割: 挨拶メッセージをコンソールに出力します。
    -   機能: "Hello, world!"という文字列をコンソールに表示します。
-   **main** (`src/main.js`):
    -   役割: プログラムのエントリポイントです。
    -   機能: `greet`関数を呼び出し、プログラムの主要な処理を開始します。

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
Generated at: 2025-08-18 07:04:46 JST

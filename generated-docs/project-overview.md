Last updated: 2025-08-08

# Project Overview

## プロジェクト概要
- 🚀 このリポジトリは、GitHub Actionsの共通ワークフローを集約し、複数プロジェクトでのアクション管理を効率化します。
- 🔗 標準化されたワークフローを提供することで、各プロジェクトは呼び出すだけでCI/CDプロセスを簡単に導入・実行できます。
- ✅ ワークフローの一元管理によりメンテナンスコストを削減し、開発チームがコアなプロジェクト開発に集中できる環境を実現します。

## 技術スタック
- フロントエンド: このプロジェクトの主要機能はバックエンドの自動化ワークフローであり、特化したフロントエンド技術は使用されていません。ただし、生成されるレポートやグラフの表示にJavaScript/CSSが利用されています。
- 音楽・オーディオ: このプロジェクトの直接的な目的ではありませんが、提供情報によると、将来的または派生的な機能として以下の技術が含まれる可能性があります。
    - Tone.js: Web Audio APIをベースにしたJavaScriptライブラリで、ブラウザ上での音声合成やエフェクト処理を可能にします。
    - MML (Music Macro Language): 音楽をテキストで記述するためのマクロ言語で、音楽のシーケンスや構造を定義するのに使われます。
    - Web Audio API: ブラウザに組み込まれた音声処理APIで、複雑なオーディオ操作を可能にします（Tone.jsを介して利用）。
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するためのオープンソースのサーバーサイド実行環境です。
    - npm scripts: Node.jsプロジェクトにおけるタスクランナーとして機能し、パッケージのインストール、テスト、ビルドなどのコマンドを実行します。
    - Google Generative AI: プロジェクトの概要生成やドキュメント作成など、AIを活用したテキスト生成をサポートします。
    - @octokit/rest: GitHub REST APIを操作するためのJavaScriptライブラリで、GitHub上での自動化や情報取得に利用されます。
- テスト: 明示的なテストフレームワークの記載はありませんが、GitHub Actionsワークフロー内での基本的なチェックや検証は実施されます。
- ビルドツール: プロジェクトのビルドやパースに特化したツールは明示されていませんが、Node.jsのランタイムとnpm scriptsが基本的なタスク実行を担います。
- 言語機能: 主にJavaScript/Node.jsの言語機能が使用されています。
- 自動化・CI/CD:
    - GitHub Actions: GitHubが提供するCI/CDサービスで、コードのビルド、テスト、デプロイ、およびその他の自動化タスクを実行するために使用されます。このリポジトリでは以下の8つの共通ワークフローを提供します。
        - プロジェクト要約自動生成: AIを用いてプロジェクトの概要やステータスレポートを自動生成します。
        - Issue自動管理: GitHub Issuesのライフサイクル管理や自動応答などを支援します。
        - README多言語翻訳: READMEファイルを複数の言語に自動翻訳します。
        - i18n automation: 国際化（i18n）関連の自動化ワークフローです。
- 開発標準: 明示的な開発標準ツールは記載されていませんが、統一されたワークフローとスクリプトにより一定の品質と運用標準が保たれます。

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
- **`.github_automation/`**: GitHub Actionsワークフローで利用される自動化スクリプトや設定ファイルを格納するディレクトリです。
    - **`callgraph/`**: CodeQLを使用してコードの関数呼び出しグラフを生成するためのツール群です。
        - **`codeql-queries/`**: CodeQLのカスタムクエリを格納します。
            - `callgraph.ql`: コードベース内の関数呼び出し関係を抽出するためのCodeQLクエリです。
            - `codeql-pack.lock.yml`, `qlpack.yml`: CodeQLパックの依存関係と設定を定義するファイルです。
        - **`config/example.json`**: 呼び出しグラフ生成に関する設定の例を示します。
        - **`docs/callgraph.md`**: 呼び出しグラフ生成ツールの使用方法や詳細を説明するドキュメントです。
        - **`presets/`**: 呼び出しグラフの表示に関する設定やスクリプトを格納します。
            - `callgraph.js`: 生成された呼び出しグラフをブラウザでインタラクティブに表示するためのJavaScriptコードが含まれています。グラフのレイアウト、ノードの操作、情報の表示などを担当します。
            - `style.css`: 呼び出しグラフの視覚的なスタイル（色、レイアウトなど）を定義するCSSファイルです。
        - **`scripts/`**: 呼び出しグラフ生成プロセスの各ステップを実行するNode.jsスクリプト群です。
            - `analyze-codeql.cjs`: CodeQL分析を実行し、コードベースから情報を抽出します。
            - `callgraph-utils.cjs`: 呼び出しグラフ関連の共通ユーティリティ関数を提供します。
            - `check-codeql-exists.cjs`: システムにCodeQLがインストールされているかを確認します。
            - `check-commits.cjs`: 特定のコミット履歴をチェックするスクリプトです。
            - `check-node-version.cjs`: Node.jsのバージョンが要件を満たしているかを確認します。
            - `common-utils.cjs`: プロジェクト全体で利用される汎用的なユーティリティ関数を集めたファイルです。
            - `copy-commit-results.cjs`: コミット分析の結果をコピーするスクリプトです。
            - `extract-sarif-info.cjs`: CodeQLなどの静的解析ツールが出力するSARIF形式の結果から必要な情報を抽出します。
            - `find-process-results.cjs`: 処理結果を検索・特定するスクリプトです。
            - `generate-html-graph.cjs`: 抽出された呼び出し情報から、HTML形式のインタラクティブなグラフを生成します。
            - `generateHTML.cjs`: HTMLファイルを生成するためのユーティリティスクリプトです。
    - **`project_summary/`**: プロジェクト概要や開発状況レポートを自動生成するためのツール群です。
        - **`docs/daily-summary-setup.md`**: 日次サマリーのセットアップ方法を説明するドキュメントです。
        - **`prompts/`**: AIによる文章生成の際に使用されるプロンプトテンプレートを格納します。
            - `development-status-prompt.md`: 開発状況レポート生成用のプロンプトです。
            - `project-overview-prompt.md`: プロジェクト概要生成用のプロンプトです。
        - **`scripts/generate-project-summary.cjs`**: Google Generative AIを利用して、プロジェクトの概要や開発状況を自動生成するNode.jsスクリプトです。
    - **`translate/`**: READMEなどのドキュメントを多言語に翻訳するためのツール群です。
        - **`docs/TRANSLATION_SETUP.md`**: 翻訳機能のセットアップと使用方法を説明するドキュメントです。
        - **`scripts/translate-readme.cjs`**: READMEファイルを自動翻訳するNode.jsスクリプトです。
- **`.gitignore`**: Gitのバージョン管理から除外するファイルやディレクトリを指定します。
- **`LICENSE`**: プロジェクトのライセンス情報です。
- **`README.ja.md`, `README.md`**: プロジェクトの概要、目的、使用方法などを記述したドキュメントで、それぞれ日本語版と英語版です。
- **`generated-docs/`**: GitHub Actionsワークフローによって自動生成されるドキュメントや静的アセットを格納するディレクトリです。
    - `callgraph.html`, `callgraph.js`, `style.css`: 生成された関数呼び出しグラフのインタラクティブなHTMLビューとその関連ファイルです。
    - `development-status.md`, `project-overview.md`: `project_summary`ワークフローによって自動生成された開発状況レポートとプロジェクト概要です。
- **`issue-notes/`**: GitHub Issuesに関する自動生成されたメモや関連情報が格納されます。来訪者向けの詳細な情報ではありませんが、自動管理システムの一部として機能します。
- **`package-lock.json`**: Node.jsプロジェクトの依存関係の正確なツリー構造とバージョンを記録し、ビルドの再現性を保証します。
- **`package.json`**: Node.jsプロジェクトのメタデータ（名前、バージョン、スクリプト、依存関係など）を定義するファイルです。
- **`src/main.js`**: このリポジトリの主要なコードエントリポイントとして記載されていますが、共通ワークフロー集という性質上、簡易なテスト関数や汎用的な処理を含むことが多いです。

## 関数詳細説明
- **`escapeHtml(str)`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: HTML特殊文字（`<`, `>`, `&`, `"`, `'`）をHTMLエンティティに変換し、XSS攻撃を防ぐなど、文字列を安全にHTMLに埋め込むために使用されます。
    - **引数**: `str` (string) - エスケープする文字列。
    - **戻り値**: (string) - エスケープされた文字列。
- **`getLayoutConfig()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: 呼び出しグラフのレイアウトに関する設定オブジェクトを取得します。グラフの表示スタイルや配置ルールなどを定義するのに使われます。
    - **引数**: なし
    - **戻り値**: (object) - レイアウト設定を含むオブジェクト。
- **`placeCentralNode()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフ表示において、特定のノード（例えば、選択された関数）を中央に配置する処理を行います。
    - **引数**: なし
    - **戻り値**: なし
- **`showNodeInfo()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフ上のノード（関数など）が選択された際に、そのノードに関する詳細情報をパネルに表示します。
    - **引数**: なし (おそらく内部的に選択ノードの情報を取得)
    - **戻り値**: なし
- **`showEdgeInfo()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフ上のエッジ（関数間の呼び出し線）が選択された際に、そのエッジに関する詳細情報を表示します。
    - **引数**: なし (おそらく内部的に選択エッジの情報を取得)
    - **戻り値**: なし
- **`hideInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: 表示されている情報パネルを非表示にします。
    - **引数**: なし
    - **戻り値**: なし
- **`showInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: 非表示になっている情報パネルを表示します。
    - **引数**: なし
    - **戻り値**: なし
- **`toggleInfoPanel()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: 情報パネルの表示状態を切り替えます（表示されていれば非表示に、非表示であれば表示に）。
    - **引数**: なし
    - **戻り値**: なし
- **`generateGitHubURL()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: コードの特定の箇所（ファイル、行など）を指すGitHubリポジトリへのURLを生成します。
    - **引数**: なし (おそらく内部的にノードの情報を取得)
    - **戻り値**: (string) - 生成されたGitHub URL。
- **`resetLayout()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフのレイアウトを初期状態にリセットします。
    - **引数**: なし
    - **戻り値**: なし
- **`watchNodeMovementAndFixOverlapsWrap()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: ノードの動きを監視し、その動きによって発生するノードの重なりを修正する処理をラップします。
    - **引数**: なし
    - **戻り値**: なし
- **`watchNodeMovementAndFixOverlaps()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフ内のノードが移動した際に、他のノードとの重なりが発生しないように調整します。
    - **引数**: なし
    - **戻り値**: なし
- **`resolveNodeOverlaps()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: 既に発生しているノード間の重なりを検出し、解消するための配置調整を行います。
    - **引数**: なし
    - **戻り値**: なし
- **`switchLayout()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフの表示レイアウト（例: ツリー型、力学モデルなど）を別のタイプに切り替えます。
    - **引数**: なし (おそらくレイアウトタイプを指定)
    - **戻り値**: なし
- **`resetNodeStates()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフ内のノードの選択状態、ハイライト状態などの視覚的な状態をリセットします。
    - **引数**: なし
    - **戻り値**: なし
- **`fitToContent()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフ全体が画面に収まるようにズームレベルやパン位置を調整します。
    - **引数**: なし
    - **戻り値**: なし
- **`toggleNodeLabels()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: グラフノードのラベル（名前）の表示/非表示を切り替えます。
    - **引数**: なし
    - **戻り値**: なし
- **`toggleCalleeLocationFilter()`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: 呼び出し先（Callee）の場所に基づいたフィルタリング機能のON/OFFを切り替えます。
    - **引数**: なし
    - **戻り値**: なし
- **`replace`, `switch`, `function`, `max`, `on`, `if`, `for`, `ready`, `addListener`** (`.github_automation/callgraph/presets/callgraph.js`):
    - **役割**: これらのエントリは、JavaScriptの標準メソッド (`replace`, `max`)、キーワード (`function`, `if`, `for`, `switch`)、またはイベントリスニング関連の一般的な関数 (`on`, `ready`, `addListener`) である可能性が高いです。特定のビジネスロジックを持つ関数というよりは、コード内で直接使用される言語構造や汎用的なユーティリティ、あるいはDOMイベントハンドラとして機能します。
    - **引数・戻り値**: 使用される文脈により異なります。
- **`greet(name)`** (`src/main.js`):
    - **役割**: 与えられた名前に挨拶メッセージを返すシンプルな関数です。
    - **引数**: `name` (string) - 挨拶の対象となる名前。
    - **戻り値**: (string) - 挨拶メッセージ。
- **`main()`** (`src/main.js`):
    - **役割**: `src/main.js`のエントリポイントとなる関数で、簡単な処理（例として`greet`関数を呼び出すなど）を実行します。
    - **引数**: なし
    - **戻り値**: なし

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
Generated at: 2025-08-08 07:05:31 JST

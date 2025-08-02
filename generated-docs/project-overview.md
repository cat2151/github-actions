Last updated: 2025-08-02

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: 該当なし。本プロジェクトは主にバックエンドの自動化ワークフローに焦点を当てています。
- 音楽・オーディオ:
    - Tone.js: Web Audio APIを抽象化し、ブラウザ上で高度な音声合成やエフェクトを実現するためのJavaScriptライブラリ。
    - MML (Music Macro Language): 音楽をテキストで記述するための記法を解析し、音楽データを生成するために使用されます。
    - Web Audio API: ブラウザに組み込まれた音声処理APIで、Tone.jsを通じて間接的に利用されます。
- 開発ツール:
    - Node.js runtime: JavaScriptコードを実行するためのランタイム環境。
    - npm scripts: `package.json`に定義されたスクリプトを実行し、開発・ビルド・テストなどのタスクを自動化します。
    - Google Generative AI: AIによる文書生成機能をサポートし、プロジェクトの概要やレポートの自動生成に利用されます。
    - @octokit/rest: GitHub APIと連携し、GitHubリポジトリやIssueなどの情報をプログラムから操作するためのライブラリ。
- テスト: 該当なし。
- ビルドツール: 該当なし。
- 言語機能: 該当なし。
- 自動化・CI/CD:
    - GitHub Actions: コードのリポジトリ（GitHub）と連携し、ビルド、テスト、デプロイ、ドキュメント生成などの継続的インテグレーション/デリバリー（CI/CD）プロセスを自動化するためのプラットフォームです。このプロジェクトは、複数のプロジェクトで再利用可能な共通ワークフローを提供します。
- 開発標準: 該当なし。

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
- **`.github_automation/`**: GitHub Actionsによる様々な自動化スクリプトや設定ファイルを格納するディレクトリです。
    - **`callgraph/`**: コードの関数呼び出し関係を視覚化する呼び出しグラフ生成ツールに関連するファイル群です。
        - **`codeql-queries/`**: CodeQL（コードの静的解析ツール）のクエリを格納します。
            - `callgraph.ql`: 関数呼び出しグラフを生成するためのCodeQLクエリ。
            - `codeql-pack.lock.yml`, `qlpack.yml`: CodeQLパックの設定ファイル。
        - **`config/`**: 設定ファイルを格納します。
            - `example.json`: 設定ファイルの例。
        - **`docs/`**: 関連するドキュメントを格納します。
            - `callgraph.md`: 呼び出しグラフに関する説明ドキュメント。
        - **`presets/`**: 呼び出しグラフの表示スタイルやロジックに関するプリセットを格納します。
            - `callgraph.js`: 関数呼び出しグラフの描画、操作、インタラクティブ機能を提供するJavaScriptファイル。
            - `style.css`: 呼び出しグラフの見た目を定義するCSSファイル。
        - **`scripts/`**: 呼び出しグラフの生成、分析、関連ファイルの処理を行う補助スクリプト群。
            - `analyze-codeql.cjs`: CodeQL分析を実行するスクリプト。
            - `callgraph-utils.cjs`: 呼び出しグラフ関連のユーティリティ関数群。
            - `check-codeql-exists.cjs`: CodeQLツールがシステムに存在するかを確認するスクリプト。
            - `check-commits.cjs`: コミット履歴をチェックするスクリプト。
            - `check-node-version.cjs`: Node.jsのバージョンが適切かを確認するスクリプト。
            - `common-utils.cjs`: 複数のスクリプトで共有される共通ユーティリティ関数群。
            - `copy-commit-results.cjs`: コミット結果を所定の場所にコピーするスクリプト。
            - `extract-sarif-info.cjs`: SARIF形式の分析結果から特定の情報を抽出するスクリプト。
            - `find-process-results.cjs`: 処理結果を検索するスクリプト。
            - `generate-html-graph.cjs`: HTML形式の呼び出しグラフを生成するスクリプト。
            - `generateHTML.cjs`: HTMLファイルを生成する汎用スクリプト。
    - **`project_summary/`**: プロジェクト概要の自動生成に関連するファイル群です。
        - **`docs/`**: 関連するドキュメントを格納します。
            - `daily-summary-setup.md`: 日次概要レポートの設定に関するドキュメント。
        - **`prompts/`**: AIによる文書生成に使用されるプロンプト（指示文）を格納します。
            - `development-status-prompt.md`: 開発状況レポート生成用のプロンプト。
            - `project-overview-prompt.md`: プロジェクト概要生成用のプロンプト。
        - **`scripts/`**: プロジェクト概要を生成するスクリプトを格納します。
            - `generate-project-summary.cjs`: プロジェクトの概要情報を自動的に生成するスクリプト。
    - **`translate/`**: READMEなどの多言語翻訳自動化に関連するファイル群です。
        - **`docs/`**: 関連するドキュメントを格納します。
            - `TRANSLATION_SETUP.md`: 翻訳プロセスのセットアップに関するドキュメント。
        - **`scripts/`**: 翻訳を実行するスクリプトを格納します。
            - `translate-readme.cjs`: READMEファイルを自動的に多言語翻訳するスクリプト。
- **`.gitignore`**: Gitによるバージョン管理から特定のファイルやディレクトリを除外するための設定ファイルです。
- **`LICENSE`**: プロジェクトの利用条件や著作権情報を示すライセンスファイルです。
- **`README.ja.md`, `README.md`**: プロジェクトの概要、使い方、主要機能などを説明するドキュメントファイル（日本語版と英語版）。
- **`generated-docs/`**: 自動生成されたドキュメントやレポートを格納するディレクトリです。
    - `callgraph.html`: 自動生成された関数呼び出しグラフのインタラクティブなHTMLビュー。
    - `callgraph.js`: `callgraph.html`で使用されるJavaScriptコード。通常は`.github_automation/callgraph/presets/callgraph.js`から生成されます。
    - `development-status.md`: 自動生成された開発状況に関するレポート。
    - `project-overview.md`: 自動生成されたプロジェクトの概要説明ドキュメント。
    - `style.css`: 自動生成されたドキュメントで使用されるスタイルシート。通常は`.github_automation/callgraph/presets/style.css`から生成されます。
- **`issue-notes/`**: プロジェクトのIssueに関する詳細なメモや記録を保持するディレクトリです。
- **`package-lock.json`**: `package.json`に記述された依存関係の正確なバージョンと依存ツリーを記録し、ビルドの再現性を保証するファイルです。
- **`package.json`**: Node.jsプロジェクトのメタデータ（プロジェクト名、バージョン、説明など）、スクリプト、依存関係が定義されたファイルです。
- **`src/`**: プロジェクトの主要なソースコードが格納されるディレクトリです。
    - `main.js`: プロジェクトのメインエントリポイントとなるJavaScriptファイルで、シンプルな実行ロジックを含みます。

## 関数詳細説明
- `escapeHtml(text)`: HTMLの特殊文字（例: `< > & " '`）を対応するHTMLエンティティに変換し、クロスサイトスクリプティング（XSS）などのセキュリティ脆弱性を防ぎます。
- `getLayoutConfig()`: グラフやUI要素の配置に関する設定情報を取得し、レイアウトの調整に使用されます。
- `placeCentralNode(node)`: グラフ描画において、特定のノードを画面の中央に配置するための位置計算や調整を行います。
- `showNodeInfo(nodeId)`: 指定されたノードIDに対応するノードの詳細情報（例: 名前、プロパティ）をユーザーインターフェース上の情報パネルに表示します。
- `showEdgeInfo(edgeId)`: 指定されたエッジIDに対応するエッジ（ノード間の接続）の詳細情報（例: 接続元のノード、接続先のノード）を情報パネルに表示します。
- `hideInfoPanel()`: 現在表示されている情報パネルを非表示にします。
- `showInfoPanel()`: 情報パネルを表示します。
- `toggleInfoPanel()`: 情報パネルの表示状態（表示中か非表示か）を切り替えます。
- `generateGitHubURL(filePath, lineNumber)`: GitHubリポジトリ内の特定のファイルと行番号を指すURLを生成します。コードの場所を素早く参照する際に利用されます。
- `resetLayout()`: グラフやUI要素の現在のレイアウトを初期状態にリセットし、再配置します。
- `watchNodeMovementAndFixOverlapsWrap()`: `watchNodeMovementAndFixOverlaps`関数のラッパーであり、ノードの動きを監視し、重なりを修正する処理を間接的に開始します。
- `watchNodeMovementAndFixOverlaps()`: グラフ内のノードが移動するのを監視し、ノード同士が重なり合わないように自動的に位置を調整し、視認性を高めます。
- `resolveNodeOverlaps()`: グラフ内の重なり合っているノードを検出し、互いに重ならないように位置を再計算し調整します。
- `switchLayout(layoutName)`: グラフの表示レイアウト（例: 円形、ツリー状）を異なる種類に切り替えます。
- `resetNodeStates()`: グラフ内のすべてのノードの選択状態、ハイライト状態、またはその他の表示状態を初期値に戻します。
- `fitToContent()`: グラフの表示領域を、すべてのノードやエッジが収まるように自動的に拡大・縮小し、全体像を一度に表示します。
- `toggleNodeLabels(visibility)`: グラフノードに付随するラベルの表示/非表示を切り替えます。
- `toggleCalleeLocationFilter(filterStatus)`: 呼び出し先（Callee）の位置に基づくフィルタリング機能の有効/無効を切り替えます。
- `replace(...)`: 文字列内の特定の部分を別の文字列で置き換えるなど、一般的な置換処理を行う可能性があります。
- `switch(...)`: JavaScriptの制御構造の一つで、複数の条件分岐を簡潔に記述する際に使用されます。
- `function(...)`: JavaScriptで関数を定義する際に用いられるキーワードです。特定の文脈では匿名関数やコールバック関数として使われます。
- `max(...)`: 複数の数値の中から最大値を計算して返す可能性があります。
- `on(...)`: イベントハンドラを登録する際によく使われる関数名です。特定のイベント（例: クリック、ロード）が発生した際に実行されるコールバック関数を設定します。
- `if(...)`: JavaScriptの制御構造の一つで、条件が真である場合にのみ特定のコードブロックを実行します。
- `for(...)`: JavaScriptの制御構造の一つで、指定された回数だけ、または特定の条件が満たされるまでコードブロックを繰り返し実行します。
- `ready(...)`: ウェブページやドキュメントの読み込みが完了した際に実行される処理を設定するためによく使われます（例: jQueryの`$(document).ready()`）。
- `addListener(...)`: イベントリスナーを追加する関数で、特定のイベントが発生したときに指定された処理（コールバック関数）を実行するように設定します。
- `greet(name)`: 引数として名前を受け取り、その名前を使った挨拶メッセージの文字列（例: "Hello, [name]!"）を生成して返します。
- `main()`: アプリケーションの主要なエントリポイントとなる関数です。プログラムの実行を開始し、基本的な処理の流れを制御します。

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
Generated at: 2025-08-02 07:05:28 JST

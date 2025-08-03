Last updated: 2025-08-03

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理を容易にする共通ワークフロー集です。
- 🔗 共通化されたワークフローを提供し、どのプロジェクトからも呼び出すだけで利用できます。
- ✅ ワークフローの一括メンテナンスにより、プロジェクト開発に集中できる環境を支援します。

## 技術スタック
- フロントエンド:
    - `callgraph.js` (`.github_automation/callgraph/presets/callgraph.js`および`generated-docs/callgraph.js`) - コードの呼び出しグラフをブラウザ上で視覚的に表示するためのクライアントサイドJavaScriptロジックを提供します。
    - `style.css` (`.github_automation/callgraph/presets/style.css`および`generated-docs/style.css`) - 生成されたHTMLドキュメントやコールグラフの視覚的スタイルを定義します。
- 音楽・オーディオ: (このプロジェクトの目的とは関連性が低いため、該当なし)
- 開発ツール:
    - Node.js runtime - JavaScriptおよびTypeScriptの実行環境として使用されます。
    - npm scripts - パッケージ管理とスクリプト実行のためのタスクランナーとして機能します。
    - Google Generative AI - プロジェクトの概要や開発状況の自動生成を支援するために使用されます。
    - @octokit/rest - GitHub APIと連携し、リポジトリ情報の取得や操作を行います。
- テスト: (該当情報なし)
- ビルドツール: (該当情報なし)
- 言語機能: (特定の言語機能の明記なし。主要言語はJavaScript)
- 自動化・CI/CD:
    - GitHub Actions - プロジェクトのCI/CDパイプラインを自動化し、以下の主要なワークフローを提供します：
        - プロジェクト要約自動生成
        - Issue自動管理
        - README多言語翻訳
        - i18n automation (国際化対応の自動翻訳)
- 開発標準: (特定の開発標準ツールの明記なし)

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
- **`.github_automation/`**: GitHub Actionsの自動化スクリプトや関連設定を格納するルートディレクトリ。
- **`.github_automation/callgraph/`**: コードの関数呼び出しグラフを生成し、表示するための関連ファイル群。
    - **`codeql-queries/`**: CodeQLツールで使用されるクエリファイル群。
        - **`callgraph.ql`**: ソースコードから関数呼び出しグラフを抽出するためのCodeQLクエリ。
        - **`codeql-pack.lock.yml`**: CodeQLパックの依存関係を固定するためのロックファイル。
        - **`qlpack.yml`**: CodeQLパックのメタデータを定義するファイル。
    - **`config/example.json`**: コールグラフ生成や表示に関する設定の例が記述されたJSONファイル。
    - **`docs/callgraph.md`**: コールグラフ機能の使用方法や詳細を説明するMarkdownドキュメント。
    - **`presets/callgraph.js`**: コールグラフの視覚化（表示ロジック、インタラクションなど）を定義するJavaScriptファイル。
    - **`presets/style.css`**: 生成されるコールグラフのHTMLページのスタイルを定義するCSSファイル。
    - **`scripts/`**: コールグラフ生成プロセスに関連するユーティリティスクリプト群。
        - **`analyze-codeql.cjs`**: CodeQL分析を実行し、結果を生成するスクリプト。
        - **`callgraph-utils.cjs`**: コールグラフのデータ処理や操作に役立つ共通ユーティリティ関数を提供するスクリプト。
        - **`check-codeql-exists.cjs`**: システムにCodeQLがインストールされているかを確認するスクリプト。
        - **`check-commits.cjs`**: コミット履歴を分析し、特定の条件を満たすコミットをチェックするスクリプト。
        - **`check-node-version.cjs`**: Node.jsのバージョンが要件を満たしているかを確認するスクリプト。
        - **`common-utils.cjs`**: プロジェクト全体で利用される共通のユーティリティ関数群を提供するスクリプト。
        - **`copy-commit-results.cjs`**: コミット分析結果を所定の場所にコピーするスクリプト。
        - **`extract-sarif-info.cjs`**: SARIF形式の分析結果ファイルから必要な情報を抽出するスクリプト。
        - **`find-process-results.cjs`**: 特定のプロセス実行結果を検索し、処理するスクリプト。
        - **`generate-html-graph.cjs`**: CodeQLの分析結果を基に、HTML形式のインタラクティブなコールグラフを生成するスクリプト。
        - **`generateHTML.cjs`**: 一般的なHTMLドキュメントを生成するためのユーティリティスクリプト。
- **`.github_automation/project_summary/`**: プロジェクトの概要や開発状況を自動生成する機能に関連するファイル群。
    - **`docs/daily-summary-setup.md`**: 日次サマリーの自動生成設定に関する説明ドキュメント。
    - **`prompts/`**: AIモデルに渡すプロンプト（指示文）ファイル群。
        - **`development-status-prompt.md`**: 開発状況の概要を生成するためのAIプロンプト。
        - **`project-overview-prompt.md`**: プロジェクト全体の概要を生成するためのAIプロンプト。
    - **`scripts/generate-project-summary.cjs`**: AIモデルを利用してプロジェクトの概要を自動生成するスクリプト。
- **`.github_automation/translate/`**: READMEなどのドキュメントの多言語翻訳を自動化する機能に関連するファイル群。
    - **`docs/TRANSLATION_SETUP.md`**: 翻訳機能のセットアップと設定に関するドキュメント。
    - **`scripts/translate-readme.cjs`**: READMEファイルを指定された言語に自動翻訳するスクリプト。
- **`.gitignore`**: Gitがバージョン管理から無視するファイルやディレクトリのパターンを定義するファイル。
- **`LICENSE`**: プロジェクトのオープンソースライセンス情報が記述されたファイル。
- **`README.ja.md`**: プロジェクトの日本語版説明書。
- **`README.md`**: プロジェクトの英語版説明書（メインのREADME）。
- **`generated-docs/`**: 自動生成されたHTMLドキュメント、レポート、および関連するスクリプトやスタイルシートを格納するディレクトリ。
    - **`callgraph.html`**: 生成されたインタラクティブなコールグラフを表示するHTMLファイル。
    - **`callgraph.js`**: `presets/callgraph.js`と同じ内容で、生成されたコールグラフのHTMLページで使用されるJavaScriptロジック。
    - **`development-status.md`**: AIによって自動生成された開発状況の概要ドキュメント。
    - **`project-overview.md`**: AIによって自動生成されたプロジェクトの概要ドキュメント。
    - **`style.css`**: `presets/style.css`と同じ内容で、生成されたコールグラフのHTMLページで使用されるCSS。
- **`issue-notes/`**: GitHub Issuesに関連する個別のメモや詳細を格納するためのディレクトリ。
    - **`10.md`...`9.md`**: 各Issueに関する追加情報やメモが記述されたMarkdownファイル。
- **`package-lock.json`**: `package.json`に記述された依存関係の厳密なバージョンツリーを記録し、ビルドの再現性を保証するファイル。
- **`package.json`**: Node.jsプロジェクトのメタデータ（プロジェクト名、バージョン、スクリプト、依存関係など）を定義するファイル。
- **`src/main.js`**: プロジェクトの主要なエントリーポイント、またはデモンストレーション用のシンプルなスクリプト。

## 関数詳細説明
- **`escapeHtml(html)`**: HTML文字列をエスケープし、スクリプトインジェクションなどのセキュリティ脆弱性を防ぎます。
- **`getLayoutConfig()`**: グラフの表示レイアウトに関する設定オブジェクトを取得します。
- **`placeCentralNode()`**: グラフの表示において、中心となるノードを配置します。
- **`showNodeInfo()`**: グラフ内の特定のノード（関数など）に関する詳細情報を表示パネルに表示します。
- **`showEdgeInfo()`**: グラフ内の特定のエッジ（関数呼び出し関係など）に関する詳細情報を表示パネルに表示します。
- **`hideInfoPanel()`**: 現在表示されている情報パネルを非表示にします。
- **`showInfoPanel()`**: 情報パネルを表示します。
- **`toggleInfoPanel()`**: 情報パネルの表示・非表示を切り替えます。
- **`generateGitHubURL()`**: 指定されたファイルパス、行番号、リポジトリ情報に基づいてGitHub上のソースコードへのURLを生成します。
- **`resetLayout()`**: グラフのレイアウトを初期状態にリセットします。
- **`watchNodeMovementAndFixOverlapsWrap()`**: ノードの動きを監視し、ノードが重ならないように位置を調整する処理をラップします。
- **`watchNodeMovementAndFixOverlaps()`**: ノードの動きをリアルタイムで監視し、必要に応じてノードの重なりを解決します。
- **`resolveNodeOverlaps()`**: グラフ内のノードの重なりを検出し、視覚的に見やすいように位置を調整します。
- **`switchLayout()`**: グラフの表示レイアウト（例: 円形、グリッドなど）を別のタイプに切り替えます。
- **`resetNodeStates()`**: グラフ内のすべてのノードの選択状態やハイライト状態などをリセットし、デフォルトの状態に戻します。
- **`fitToContent()`**: グラフ全体がビューポート内に収まるようにズームレベルや位置を調整します。
- **`toggleNodeLabels()`**: グラフノードに表示されるラベルの表示・非表示を切り替えます。
- **`toggleCalleeLocationFilter()`**: 呼び出し先のファイル場所に基づいてノードをフィルタリングする機能を切り替えます。
- **`replace()`**: 文字列内の特定の部分を別の文字列に置換する、または汎用的な置換操作を行います。
- **`switch()`**: 特定の条件に基づいて異なる処理パスを選択する制御フローに関連する関数（通常はCytoscape.jsなどのライブラリ内部で使われるコールバックやユーティリティ）。
- **`function()`**: 汎用的な関数定義やコールバックとして認識される名前。
- **`max()`**: 複数の値の中から最大値を返す汎用関数。
- **`on()`**: イベントリスナーを要素にアタッチし、特定のイベントが発生したときにコールバック関数を実行します。
- **`if()`**: 条件分岐のロジックに関連する関数（通常はCytoscape.jsなどのライブラリ内部で使われるコールバックやユーティリティ）。
- **`for()`**: ループ処理のロジックに関連する関数（通常はCytoscape.jsなどのライブラリ内部で使われるコールバックやユーティリティ）。
- **`ready()`**: ドキュメントのDOM（Document Object Model）が完全にロードされ、操作可能になったときに実行されるコールバック関数を登録します。
- **`addListener()`**: 特定のイベントのリスナーを追加します。
- **`greet()` (`src/main.js`)**: "Hello World!"という文字列をコンソールに出力する簡単なデモンストレーション関数。
- **`main()` (`src/main.js`)**: プログラムの主要なエントリーポイント関数で、`greet()`関数を呼び出します。

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
Generated at: 2025-08-03 07:05:16 JST

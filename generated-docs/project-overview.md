Last updated: 2026-02-14

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: **HTML** (生成されたコールグラフの表示), **CSS** (コールグラフのスタイル設定), **JavaScript** (コールグラフの動的な操作や情報の表示制御)
- 音楽・オーディオ: 該当する技術はありません。
- 開発ツール: **GitHub Actions** (プロジェクトの中心となる自動化プラットフォーム), **CodeQL** (コードの静的解析、コールグラフ生成に使用), **Node.js** (多数の自動化スクリプトの実行環境), **Python** (特定ファイルのチェック用スクリプト), **VS Code** (開発環境設定)
- テスト: **CodeQL** (コードの脆弱性やバグを検出するための静的解析)
- ビルドツール: **Node.js** (各種スクリプトを実行し、ドキュメントやレポートを生成する役割)
- 言語機能: **JavaScript** (大部分の自動化スクリプトやウェブページの動的な処理に使用), **Python** (大容量ファイルチェックに使用), **YAML** (GitHub Actionsのワークフロー定義), **Markdown** (プロジェクトのドキュメントやプロンプト定義), **JSON** (設定ファイルやデータ交換), **TOML** (設定ファイルの例)
- 自動化・CI/CD: **GitHub Actions** (複数のプロジェクトにわたる共通ワークフローの実行), **Gemini API** (READMEの自動翻訳機能)
- 開発標準: **GitHub Actions** (共通ワークフローを提供することで開発プロセスの標準化と品質向上に貢献), **CodeQL** (コード品質とセキュリティの確保)

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
      📄 generateHTML.cjs
  📁 check-large-files/
    📖 README.md
    📄 check-large-files.toml.example
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
  📖 42.md
  📖 7.md
  📖 8.md
  📖 9.md
📁 src/
  📜 main.js
```

## ファイル詳細説明
-   **`.github_automation/callgraph/codeql-queries/callgraph.ql`**: CodeQLを使用してJavaScript/TypeScriptプロジェクトの関数呼び出しグラフを生成するためのクエリを定義しています。
-   **`.github_automation/callgraph/config/example.json`**: コールグラフ生成に関連する設定の例をJSON形式で提供します。
-   **`.github_automation/callgraph/docs/callgraph.md`**: コールグラフ機能に関する詳細なドキュメントを提供します。
-   **`.github_automation/callgraph/presets/callgraph.js`**: 生成されたコールグラフをウェブブラウザ上でインタラクティブに表示・操作するためのJavaScriptコードを含んでいます。ノードの配置、情報表示、レイアウト調整などの機能を提供します。
-   **`.github_automation/callgraph/presets/style.css`**: コールグラフの視覚的なスタイル（色、フォント、レイアウトなど）を定義するCSSファイルです。
-   **`.github_automation/callgraph/scripts/analyze-codeql.cjs`**: CodeQL解析を実行し、結果を処理するためのJavaScriptスクリプトです。
-   **`.github_automation/callgraph/scripts/generate-html-graph.cjs`**: CodeQLの解析結果から、ウェブブラウザで表示可能なHTML形式のコールグラフを生成するスクリプトです。
-   **`.github_automation/check-large-files/README.md`**: 大容量ファイルチェック機能についての説明ドキュメントです。
-   **`.github_automation/check-large-files/check-large-files.toml.example`**: 大容量ファイルチェック機能の設定例をTOML形式で提供します。
-   **`.github_automation/check-large-files/scripts/check_large_files.py`**: Gitリポジトリ内の大容量ファイルを検出するためのPythonスクリプトです。
-   **`.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs`**: 特定の期間内に人間がコミットした履歴があるかをチェックするためのJavaScriptスクリプトです。
-   **`.github_automation/project_summary/docs/daily-summary-setup.md`**: 日次サマリーのセットアップ方法に関するドキュメントです。
-   **`.github_automation/project_summary/prompts/development-status-prompt.md`**: 開発状況レポートを生成するためのプロンプトテンプレートです。
-   **`.github_automation/project_summary/prompts/project-overview-prompt.md`**: プロジェクト概要を生成するためのプロンプトテンプレートです。
-   **`.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs`**: プロジェクト概要や開発状況レポートの生成プロセス全体を調整するスクリプトです。
-   **`.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs`**: プロジェクトの開発状況レポートを生成するロジックを含みます。
-   **`.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs`**: プロジェクトの概要を生成するロジックを含みます。
-   **`.github_automation/translate/scripts/translate-readme.cjs`**: READMEファイルを自動翻訳するためのJavaScriptスクリプトです。
-   **`.gitignore`**: Gitによるバージョン管理から除外するファイルやディレクトリを指定します。
-   **`.vscode/settings.json`**: Visual Studio Codeのワークスペース固有の設定を定義します。
-   **`LICENSE`**: プロジェクトの利用条件を定めるライセンス情報です。
-   **`README.ja.md`**: プロジェクトの日本語での主要な説明ドキュメントです。
-   **`README.md`**: プロジェクトの英語での主要な説明ドキュメントです。
-   **`_config.yml`**: GitHub Pagesのサイト設定ファイルです。
-   **`generated-docs/callgraph.html`**: 自動生成されたコールグラフのHTMLファイルです。
-   **`generated-docs/callgraph.js`**: `presets/callgraph.js` がコピーされたもので、生成されたHTMLと共に動作するJavaScriptファイルです。
-   **`generated-docs/style.css`**: `presets/style.css` がコピーされたもので、生成されたHTMLと共に動作するCSSファイルです。
-   **`googled947dc864c270e07.html`**: Googleサイト認証のために使用されるファイルです。
-   **`issue-notes/*.md`**: 特定のIssueに関連する開発メモや詳細情報がMarkdown形式で保存されています。
-   **`src/main.js`**: プロジェクトのメインエントリーポイントとなるJavaScriptファイルです。現時点ではシンプルな処理のみが含まれています。

## 関数詳細説明
-   **`escapeHtml`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: HTMLの特殊文字をエスケープし、安全に表示できる文字列に変換します。
    -   **引数**: `string` (エスケープ対象の文字列)
    -   **戻り値**: エスケープ後の文字列
    -   **機能**: `<`、`>`、`&`、`"`、`'`といった文字を対応するHTMLエンティティに変換します。
-   **`getLayoutConfig`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: コールグラフのレイアウト設定を返します。
    -   **引数**: なし
    -   **戻り値**: レイアウト設定オブジェクト
    -   **機能**: コールグラフのノード配置や視覚的な構成に関するパラメータを提供します。
-   **`placeCentralNode`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: グラフの中央にノードを配置します。
    -   **引数**: ノードIDなど
    -   **戻り値**: なし
    -   **機能**: 特定のノードを中心にグラフを配置する際のヘルパー関数です。
-   **`showNodeInfo`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 特定のノード（関数など）に関する詳細情報を表示します。
    -   **引数**: ノードデータ
    -   **戻り値**: なし
    -   **機能**: グラフ上のノードがクリックされた際などに、そのノードの属性や関連情報を情報パネルに表示します。
-   **`showEdgeInfo`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 特定のエッジ（呼び出し関係）に関する詳細情報を表示します。
    -   **引数**: エッジデータ
    -   **戻り値**: なし
    -   **機能**: グラフ上のエッジがクリックされた際などに、呼び出し元の情報や呼び出し先の情報などを情報パネルに表示します。
-   **`hideInfoPanel`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 情報表示パネルを非表示にします。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: ユーザー操作に応じて、表示されているノード/エッジの詳細パネルを閉じます。
-   **`showInfoPanel`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 情報表示パネルを表示します。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: ユーザー操作に応じて、ノード/エッジの詳細パネルを開きます。
-   **`toggleInfoPanel`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 情報表示パネルの表示/非表示を切り替えます。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: パネルの現在の状態に応じて表示・非表示を切り替えます。
-   **`generateGitHubURL`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 関連するGitHubリポジトリやファイルのURLを生成します。
    -   **引数**: ファイルパス、行番号など
    -   **戻り値**: GitHubのURL文字列
    -   **機能**: コードの場所を示すGitHubのリンクを動的に生成します。
-   **`resetLayout`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: コールグラフのレイアウトを初期状態にリセットします。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: ユーザーが変更したグラフの配置やズームなどを元に戻します。
-   **`watchNodeMovementAndFixOverlapsWrap`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: ノードの移動を監視し、重なりを解消するためのラッパー関数です。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: ノードの動きを検知し、別の`watchNodeMovementAndFixOverlaps`関数を呼び出します。
-   **`watchNodeMovementAndFixOverlaps`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: ノードが移動した際に他のノードとの重なりを自動的に解消します。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: グラフの可読性を保つため、ノードが互いに重ならないように調整します。
-   **`resolveNodeOverlaps`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 既存のノードの重なりを解消します。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: 重なっているノードの位置を調整し、視覚的なクリアさを確保します。
-   **`switchLayout`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: コールグラフのレイアウトアルゴリズムを切り替えます。
    -   **引数**: レイアウトタイプ
    -   **戻り値**: なし
    -   **機能**: ユーザーが異なるグラフ表示スタイルを選択できるようにします。
-   **`resetNodeStates`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: すべてのノードの状態（選択、ハイライトなど）をリセットします。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: グラフのフィルタリングや選択が解除された際に、ノードの表示を初期状態に戻します。
-   **`fitToContent`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: グラフ全体が画面に収まるようにズームレベルを調整します。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: グラフ全体を一目で確認できるように表示を調整します。
-   **`toggleNodeLabels`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: ノードラベルの表示/非表示を切り替えます。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: グラフの混雑度に応じて、ノードの名前表示をオン/オフします。
-   **`toggleCalleeLocationFilter`** (ファイル: `.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`):
    -   **役割**: 呼び出される側の関数（Callee）の位置に基づくフィルターのオン/オフを切り替えます。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: 特定のファイルやディレクトリ内の関数呼び出しのみを表示するなど、グラフの表示を絞り込みます。
-   **`greet`** (ファイル: `src/main.js`):
    -   **役割**: シンプルな挨拶メッセージを生成します。
    -   **引数**: なし
    -   **戻り値**: "Hello, GitHub Actions!"という文字列
    -   **機能**: プロジェクトの基本的な実行テストやエントリーポイントとして機能します。
-   **`main`** (ファイル: `src/main.js`):
    -   **役割**: プロジェクトのメイン処理を実行します。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: `greet`関数を呼び出し、その結果をコンソールに出力します。

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
Generated at: 2026-02-14 07:10:19 JST

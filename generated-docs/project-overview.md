Last updated: 2025-08-29

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: なし
- 音楽・オーディオ: なし (このリポジトリはGitHub Actions共通ワークフロー集であり、音楽・オーディオ関連機能は直接提供しません。)
- 開発ツール:
    - Node.js runtime: JavaScript実行環境を提供します。
    - npm scripts: プロジェクト内の各種タスク（スクリプト実行など）を自動化するためのタスクランナーです。
    - Google Generative AI (`@google/generative-ai`): AIを活用した文書生成（プロジェクト要約、開発状況レポートなど）をサポートします。
    - @octokit/rest (`@octokit/rest`): GitHub APIとの連携を容易にし、リポジトリやIssueの情報を操作するために使用されます。
- テスト: なし
- ビルドツール: なし
- 言語機能:
    - JavaScript/Node.js: プロジェクトのスクリプト開発に使用される主要なプログラミング言語および実行環境です。
- 自動化・CI/CD:
    - GitHub Actions: コードのテスト、ビルド、デプロイ、そして本プロジェクトが提供する「プロジェクト要約自動生成」「Issue自動管理」「README多言語翻訳」などの様々な自動化ワークフローを定義・実行するためのCI/CDプラットフォームです。
- 開発標準:
    - CodeQL: コードの静的解析を行い、セキュリティ脆弱性や品質の問題を検出・改善するためのツールです。本プロジェクトでは、関数呼び出しグラフの生成にも利用されます。

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
📁 .vscode/
  📊 settings.json
📄 LICENSE
📖 README.ja.md
📖 README.md
📁 generated-docs/
  🌐 callgraph.html
  📜 callgraph.js
  📖 development-status-generated-prompt.md
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
  📖 16.md
  📖 17.md
  📖 18.md
  📖 19.md
  📖 2.md
  📖 20.md
  📖 21.md
  📖 22.md
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
- **.github_automation/callgraph/presets/callgraph.js**: 関数呼び出しグラフの描画ロジック、インタラクティブな機能（ノードの選択、情報パネルの表示、レイアウト調整など）を定義するJavaScriptファイルです。
- **.github_automation/callgraph/presets/style.css**: 関数呼び出しグラフの視覚的なスタイル（色、フォント、レイアウトなど）を定義するCSSファイルです。
- **generated-docs/callgraph.html**: 自動生成された関数呼び出しグラフを表示するためのHTMLファイルです。このファイルは、`callgraph.js`と`style.css`を読み込み、インタラクティブなグラフをブラウザに表示します。
- **generated-docs/callgraph.js**: `presets/callgraph.js` と同様の内容で、`generated-docs/callgraph.html` に組み込まれ、自動生成された呼び出しグラフに動的な機能を提供します。
- **generated-docs/style.css**: `presets/style.css` と同様の内容で、`generated-docs/callgraph.html` に組み込まれ、自動生成されたドキュメントのスタイルを定義します。
- **src/main.js**: プロジェクトの基本的な実行エントリポイントとなるJavaScriptファイルで、シンプルな挨拶機能を含んでいます。

## 関数詳細説明
- **escapeHtml**: HTML特殊文字をエスケープし、安全な文字列を生成する機能を提供します。
- **getLayoutConfig**: グラフのレイアウト設定を取得する機能を提供します。
- **placeCentralNode**: グラフの中央ノードを配置する機能を提供します。
- **showNodeInfo**: グラフのノード（関数など）に関する詳細情報を表示する機能を提供します。
- **showEdgeInfo**: グラフのエッジ（関数間の呼び出し関係）に関する詳細情報を表示する機能を提供します。
- **hideInfoPanel**: 情報表示パネルを非表示にする機能を提供します。
- **showInfoPanel**: 情報表示パネルを表示する機能を提供します。
- **toggleInfoPanel**: 情報表示パネルの表示・非表示を切り替える機能を提供します。
- **generateGitHubURL**: 関連するGitHubリソースへのURLを生成する機能を提供します。
- **resetLayout**: グラフのレイアウトを初期状態にリセットする機能を提供します。
- **watchNodeMovementAndFixOverlapsWrap**: ノードの動きを監視し、重なりを修正する処理のラッパー機能を提供します。
- **watchNodeMovementAndFixOverlaps**: グラフノードの動きを検知し、ノード間の重なりを自動的に解消する機能を提供します。
- **resolveNodeOverlaps**: グラフノードの重なりを解決する機能を提供します。
- **switchLayout**: グラフの表示レイアウト方式を切り替える機能を提供します。
- **resetNodeStates**: グラフノードの表示状態をリセットする機能を提供します。
- **fitToContent**: グラフ全体が画面に収まるように表示を調整する機能を提供します。
- **toggleNodeLabels**: グラフノードのラベル（名前）の表示・非表示を切り替える機能を提供します。
- **toggleCalleeLocationFilter**: 呼び出される関数の場所によるフィルタリング機能のON/OFFを切り替える機能を提供します。
- **greet**: 簡単な挨拶メッセージを生成する機能を提供します。（`src/main.js`）
- **main**: プログラムの主要な実行ロジックで、`greet`関数を呼び出して挨拶を出力します。（`src/main.js`）

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
Generated at: 2025-08-29 07:04:51 JST

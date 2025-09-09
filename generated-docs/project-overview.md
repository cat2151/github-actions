Last updated: 2025-09-09

# Project Overview

## プロジェクト概要
- 🚀 プロジェクトごとのGitHub Actions管理をもっと楽に
- 🔗 共通化されたワークフローで、どのプロジェクトからも呼ぶだけでOK
- ✅ メンテは一括、プロジェクト開発に集中できます

## 技術スタック
- フロントエンド: 特になし (本プロジェクトはGitHub Actions共通ワークフロー集であり、直接的なフロントエンドは持ちません)
- 音楽・オーディオ:
  - Tone.js: Web Audio APIを抽象化し、Webブラウザで高度な音楽・オーディオ処理を可能にするJavaScriptライブラリです。
  - Web Audio API: ウェブブラウザ上で高度な音声処理を行うための標準APIです（Tone.jsを介して利用）。
  - MML (Music Macro Language): 音楽をテキスト形式で記述するための簡易記法で、特定のツールがこの記法をパーシングして音楽を生成します。
- 開発ツール:
  - Node.js runtime: JavaScriptコードを実行するための環境です。
  - npm scripts: `package.json`に定義されたスクリプトを実行するタスクランナーです。
  - Google Generative AI: AIによる文書生成、要約、翻訳などのタスクをサポートするためのGoogleの生成AIサービス連携ライブラリです。
  - @octokit/rest: GitHub REST APIを操作するための公式ライブラリです。
- テスト: 特になし (プロジェクト情報にテスト関連技術の明示的な記載はありません)
- ビルドツール: 特になし (プロジェクト情報にビルド・パース関連技術の明示的な記載はありません。MMLは音楽記法であり、ビルドツールではありません。)
- 言語機能: 特になし (JavaScriptが主要言語ですが、特定の「言語機能」として挙げられるものはプロジェクト情報にありません)
- 自動化・CI/CD:
  - GitHub Actions: コードのビルド、テスト、デプロイなどのワークフローを自動化するためのCI/CDプラットフォームです。以下のワークフローが含まれます。
    - プロジェクト要約自動生成: プロジェクトの概要や進捗状況を自動で生成します。
    - Issue自動管理: GitHub Issuesの管理を自動化します。
    - README多言語翻訳: READMEファイルを多言語に自動翻訳します。
    - i18n automation: 国際化（i18n）関連の自動翻訳ワークフローです。
- 開発標準: 特になし (プロジェクト情報にコード品質や統一ルール関連技術の明示的な記載はありません)

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
  📖 23.md
  📖 24.md
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
- **.github_automation/callgraph/codeql-queries/callgraph.ql**: CodeQLを用いて呼び出しグラフを解析するためのクエリを定義しています。
- **.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml**: CodeQLパックの依存関係とバージョンをロックするファイルです。
- **.github_automation/callgraph/codeql-queries/qlpack.yml**: CodeQLパックのメタデータを定義するファイルです。
- **.github_automation/callgraph/config/example.json**: 呼び出しグラフ関連の設定例を定義するJSONファイルです。
- **.github_automation/callgraph/docs/callgraph.md**: 呼び出しグラフ機能に関するドキュメントです。
- **.github_automation/callgraph/presets/callgraph.js**: 呼び出しグラフの表示・操作に関するJavaScriptコードで、Cytoscape.jsなどのライブラリと連携してグラフのインタラクションやレイアウトを制御します。ノード情報の表示、レイアウトのリセット、ズーム調整などの機能を含みます。
- **.github_automation/callgraph/presets/style.css**: 呼び出しグラフの視覚的なスタイルを定義するCSSファイルです。ノード、エッジ、情報パネルなどのデザインを制御します。
- **.github_automation/callgraph/scripts/analyze-codeql.cjs**: CodeQL分析を実行し、結果を処理するスクリプトです。
- **.github_automation/callgraph/scripts/callgraph-utils.cjs**: 呼び出しグラフ生成に関連するユーティリティ関数を提供します。
- **.github_automation/callgraph/scripts/check-codeql-exists.cjs**: CodeQLが環境に存在するかどうかを確認するスクリプトです。
- **.github_automation/callgraph/scripts/check-commits.cjs**: コミット履歴をチェックするスクリプトです。
- **.github_automation/callgraph/scripts/check-node-version.cjs**: Node.jsのバージョンが要件を満たしているかを確認するスクリプトです。
- **.github_automation/callgraph/scripts/common-utils.cjs**: 汎用的なユーティリティ関数を提供します。
- **.github_automation/callgraph/scripts/copy-commit-results.cjs**: コミット結果をコピーするスクリプトです。
- **.github_automation/callgraph/scripts/extract-sarif-info.cjs**: SARIFファイルから情報を抽出するスクリプトです。
- **.github_automation/callgraph/scripts/find-process-results.cjs**: プロセス結果を検索するスクリプトです。
- **.github_automation/callgraph/scripts/generate-html-graph.cjs**: HTML形式の呼び出しグラフを生成するスクリプトです。
- **.github_automation/callgraph/scripts/generateHTML.cjs**: HTMLを生成するための汎用スクリプトです。
- **.github_automation/project_summary/docs/daily-summary-setup.md**: 日次サマリーのセットアップに関するドキュメントです。
- **.github_automation/project_summary/prompts/development-status-prompt.md**: 開発状況サマリー生成のためのAIプロンプト定義です。
- **.github_automation/project_summary/prompts/project-overview-prompt.md**: プロジェクト概要生成のためのAIプロンプト定義です。
- **.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs**: プロジェクトサマリー生成プロセス全体を調整・管理するスクリプトです。
- **.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs**: 開発状況に関する情報を収集し、サマリーを生成するスクリプトです。
- **.github_automation/project_summary/scripts/development/GitUtils.cjs**: Gitリポジトリ操作に関するユーティリティ関数を提供します。
- **.github_automation/project_summary/scripts/development/IssueTracker.cjs**: GitHub Issueトラッキングに関連する機能を提供します。
- **.github_automation/project_summary/scripts/generate-project-summary.cjs**: プロジェクトサマリーを実際に生成するメインスクリプトです。
- **.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs**: プロジェクトのコードを解析し、構造や統計情報を抽出するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs**: プロジェクト分析の各段階をオーケストレーション（調整）するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs**: プロジェクトに関する様々なデータを収集するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs**: 収集したプロジェクトデータを特定の形式に整形するスクリプトです。
- **.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs**: プロジェクト概要を生成するスクリプトです。
- **.github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs**: プロジェクトの技術スタックを解析し、特定するスクリプトです。
- **.github_automation/project_summary/scripts/shared/BaseGenerator.cjs**: 各種ジェネレータの基底クラスまたは共通機能を提供するスクリプトです。
- **.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs**: ファイルシステム操作に関するユーティリティ関数を提供します。
- **.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs**: プロジェクト内のファイル操作に関するユーティリティ関数を提供します。
- **.github_automation/translate/docs/TRANSLATION_SETUP.md**: 翻訳機能のセットアップに関するドキュメントです。
- **.github_automation/translate/scripts/translate-readme.cjs**: READMEファイルを自動翻訳するスクリプトです。
- **.gitignore**: Gitが追跡しないファイルやディレクトリを指定するファイルです。
- **.vscode/settings.json**: Visual Studio Codeのエディタ設定を定義するファイルです。
- **LICENSE**: プロジェクトのライセンス情報です。
- **README.ja.md**: プロジェクトの概要や使用方法を日本語で説明するメインドキュメントです。
- **README.md**: プロジェクトの概要や使用方法を英語で説明するメインドキュメントです。
- **generated-docs/callgraph.html**: 生成されたHTML形式の呼び出しグラフのビューです。
- **generated-docs/callgraph.js**: 生成された呼び出しグラフのインタラクティブな動作を制御するJavaScriptファイルです。`.github_automation/callgraph/presets/callgraph.js` と同じ内容を含みます。
- **generated-docs/development-status-generated-prompt.md**: 生成された開発状況プロンプトの出力ファイルです。
- **generated-docs/development-status.md**: 生成された開発状況サマリーの出力ファイルです。
- **generated-docs/project-overview.md**: 生成されたプロジェクト概要の出力ファイルです。
- **generated-docs/style.css**: 生成されたドキュメントやグラフのスタイルを定義するCSSファイルです。`.github_automation/callgraph/presets/style.css` と同じ内容を含みます。
- **issue-notes/**: GitHub Issuesに関連するメモや詳細情報を格納するディレクトリです。
- **package-lock.json**: `package.json` に記述された依存関係の正確なツリー構造とバージョンをロックするファイルです。
- **package.json**: プロジェクトのメタデータ（名前、バージョン、説明など）と、依存関係（ライブラリ）およびスクリプトを定義するファイルです。
- **src/main.js**: メインのエントリスクリプトまたは簡単な機能を実装するファイルです。

## 関数詳細説明
- **escapeHtml** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: HTMLの特殊文字をエスケープし、セキュリティ脆弱性（XSSなど）を防ぎながら文字列を安全に表示できるようにします。
  - 引数: 不明 (通常はHTML文字列)
  - 戻り値: 不明 (通常はエスケープされた文字列)
  - 機能: `<`を`&lt;`に、`>`を`&gt;`に、`&`を`&amp;`に変換するなど。
- **getLayoutConfig** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフのレイアウトに関する設定オブジェクトを取得します。
  - 引数: 不明 (特定のレイアウトタイプやオプションなど)
  - 戻り値: 不明 (レイアウト設定オブジェクト)
  - 機能: グラフのノード配置やエッジ表示方法などのパラメータを提供します。
- **placeCentralNode** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフの中央に特定のノードを配置します。
  - 引数: 不明 (中央に配置するノードのIDや座標など)
  - 戻り値: 不明
  - 機能: グラフの視覚的な中心を設定し、ユーザーの注目を集めやすくします。
- **showNodeInfo** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 選択されたノードに関する詳細情報を表示するパネルまたはツールチップをアクティブにします。
  - 引数: 不明 (表示するノードのデータ)
  - 戻り値: 不明
  - 機能: ノードの属性や関連データなどをユーザーに提示します。
- **showEdgeInfo** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 選択されたエッジ（ノード間の接続）に関する詳細情報を表示するパネルまたはツールチップをアクティブにします。
  - 引数: 不明 (表示するエッジのデータ)
  - 戻り値: 不明
  - 機能: エッジのタイプ、関連性、データフローなどをユーザーに提示します。
- **hideInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 表示されている情報パネルを非表示にします。
  - 引数: なし
  - 戻り値: 不明
  - 機能: ユーザーがパネルを閉じるか、別の要素を選択した際に情報を隠します。
- **showInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 情報パネルを表示します。
  - 引数: 不明 (表示する情報の内容)
  - 戻り値: 不明
  - 機能: ユーザーが特定の要素を選択した際に情報パネルを表示します。
- **toggleInfoPanel** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 情報パネルの表示・非表示を切り替えます。
  - 引数: なし
  - 戻り値: 不明
  - 機能: ユーザーのアクションに応じてパネルの可視性を反転させます。
- **generateGitHubURL** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: GitHub上の特定のファイルやコード行へのURLを生成します。
  - 引数: 不明 (ファイルパス、行番号、コミットハッシュなど)
  - 戻り値: 不明 (生成されたGitHub URL)
  - 機能: 呼び出しグラフのノードから直接GitHubのソースコードへナビゲートできるようにします。
- **resetLayout** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフのレイアウトを初期状態にリセットします。
  - 引数: なし
  - 戻り値: 不明
  - 機能: ユーザーがグラフを操作した後に、元の整列された状態に戻します。
- **watchNodeMovementAndFixOverlapsWrap** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: ノードの動きを監視し、重なりを修正する機能のラッパー関数です。
  - 引数: 不明
  - 戻り値: 不明
  - 機能: ノードが移動した際に、他のノードとの重なりを自動的に調整するためのロジックをカプセル化します。
- **watchNodeMovementAndFixOverlaps** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフ内のノードの移動を監視し、他のノードとの視覚的な重なりが発生した場合に位置を修正します。
  - 引数: 不明 (監視対象のノード、レイアウト設定など)
  - 戻り値: 不明
  - 機能: ユーザーがノードをドラッグした際や、自動レイアウトが適用された際に、見やすい配置を維持します。
- **resolveNodeOverlaps** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフ内のノードが互いに重なっている状態を検出し、その重なりを解消するようにノードの位置を調整します。
  - 引数: 不明 (重なりをチェックするノードの集合)
  - 戻り値: 不明
  - 機能: グラフの視認性を向上させ、ノードが隠れて見えなくなることを防ぎます。
- **switchLayout** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフの表示レイアウトを別の種類（例：円形、グリッド、階層型など）に切り替えます。
  - 引数: 不明 (切り替えるレイアウトのタイプ)
  - 戻り値: 不明
  - 機能: ユーザーが異なる視点からグラフ構造を分析できるように、表示形式を変更します。
- **resetNodeStates** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: すべてのノードの選択状態、強調表示、その他の視覚的な状態を初期値にリセットします。
  - 引数: なし
  - 戻り値: 不明
  - 機能: グラフを「クリーンな」状態に戻し、新しい分析や操作の準備をします。
- **fitToContent** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフ全体がビューポートに収まるようにズームレベルと位置を調整します。
  - 引数: なし
  - 戻り値: 不明
  - 機能: グラフの全体像を素早く確認できるようにします。
- **toggleNodeLabels** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: グラフノードに表示されるラベルの表示・非表示を切り替えます。
  - 引数: なし
  - 戻り値: 不明
  - 機能: ラベルが多すぎてグラフが見にくい場合に非表示にしたり、詳細を確認したい場合に表示したりできます。
- **toggleCalleeLocationFilter** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 呼び出し先（Callee）の場所に基づいたフィルターの有効/無効を切り替えます。
  - 引数: なし
  - 戻り値: 不明
  - 機能: 特定の場所にある呼び出し先のみを表示したり、非表示にしたりして、グラフの焦点を絞ります。
- **replace** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 文字列内で特定のパターンを別の文字列に置き換える汎用的な処理を行います。
  - 引数: 不明 (検索パターン、置換文字列など)
  - 戻り値: 不明 (置換後の文字列)
  - 機能: データ整形や表示用の文字列操作に利用されます。
- **switch** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 複数の条件分岐のうち、いずれか一つを実行する制御フローを実装します。
  - 引数: 不明 (評価対象の値、各ケースの処理)
  - 戻り値: 不明
  - 機能: プログラムの実行パスを効率的に選択します。
- **function** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 匿名関数または関数を定義し、特定の処理をカプセル化します。
  - 引数: 不明
  - 戻り値: 不明
  - 機能: コードの再利用性やモジュール性を高めます。
- **max** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 複数の数値の中から最大値を計算します。
  - 引数: 不明 (数値のリストまたは複数の数値引数)
  - 戻り値: 不明 (最大値)
  - 機能: 比較や制限値の設定などに利用されます。
- **on** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 特定のイベントが発生したときに実行されるイベントリスナーを設定します。
  - 引数: 不明 (イベントタイプ、ハンドラー関数)
  - 戻り値: 不明
  - 機能: ユーザーのインタラクションやシステムイベントに応答するインタラクティブな要素を作成します。
- **if** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 条件が真の場合に特定のコードブロックを実行する制御フローを実装します。
  - 引数: 不明 (評価する条件)
  - 戻り値: 不明
  - 機能: プログラムの実行パスを条件に基づいて分岐させます。
- **for** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 特定の回数だけコードブロックを繰り返すループ処理を実装します。
  - 引数: 不明 (初期化、条件、増減式)
  - 戻り値: 不明
  - 機能: コレクションの反復処理や繰り返しのタスクに利用されます。
- **ready** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: ドキュメントオブジェクトモデル (DOM) が完全にロードされ、スクリプトから安全に操作できる状態になったことを検出します。
  - 引数: 不明 (DOMが準備完了したときに実行されるコールバック関数)
  - 戻り値: 不明
  - 機能: DOM操作を行うスクリプトが、HTML要素が存在する前に実行されるのを防ぎます。
- **addListener** (`.github_automation/callgraph/presets/callgraph.js`, `generated-docs/callgraph.js`)
  - 役割: 特定のイベントにイベントリスナーを追加します。
  - 引数: 不明 (イベントタイプ、イベントハンドラー関数)
  - 戻り値: 不明
  - 機能: `on` 関数と同様に、イベント駆動型プログラミングをサポートします。
- **greet** (`src/main.js`)
  - 役割: 挨拶メッセージをコンソールに出力します。
  - 引数: なし
  - 戻り値: なし
  - 機能: プログラムが実行された際に簡単なメッセージを表示します。
- **main** (`src/main.js`)
  - 役割: アプリケーションのエントリポイントとして機能し、主要な処理を調整します。
  - 引数: なし
  - 戻り値: なし
  - 機能: プログラムの開始時に呼び出され、他の関数を呼び出して全体の流れを制御します。

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
Generated at: 2025-09-09 23:03:51 JST

Last updated: 2026-03-02

# 開発状況生成プロンプト（開発者向け）

## 生成するもの：
- 現在openされているissuesを3行で要約する
- 次の一手の候補を3つlistする
- 次の一手の候補3つそれぞれについて、極力小さく分解して、その最初の小さな一歩を書く

## 生成しないもの：
- 「今日のissue目標」などuserに提案するもの
  - ハルシネーションの温床なので生成しない
- ハルシネーションしそうなものは生成しない（例、無価値なtaskや新issueを勝手に妄想してそれをuserに提案する等）
- プロジェクト構造情報（来訪者向け情報のため、別ファイルで管理）

## 「Agent実行プロンプト」生成ガイドライン：
「Agent実行プロンプト」作成時は以下の要素を必ず含めてください：

### 必須要素
1. **対象ファイル**: 分析/編集する具体的なファイルパス
2. **実行内容**: 具体的な分析や変更内容（「分析してください」ではなく「XXXファイルのYYY機能を分析し、ZZZの観点でmarkdown形式で出力してください」）
3. **確認事項**: 変更前に確認すべき依存関係や制約
4. **期待する出力**: markdown形式での結果や、具体的なファイル変更

### Agent実行プロンプト例

**良い例（上記「必須要素」4項目を含む具体的なプロンプト形式）**:
```
対象ファイル: `.github/workflows/translate-readme.yml`と`.github/workflows/call-translate-readme.yml`

実行内容: 対象ファイルについて、外部プロジェクトから利用する際に必要な設定項目を洗い出し、以下の観点から分析してください：
1) 必須入力パラメータ（target-branch等）
2) 必須シークレット（GEMINI_API_KEY）
3) ファイル配置の前提条件（README.ja.mdの存在）
4) 外部プロジェクトでの利用時に必要な追加設定

確認事項: 作業前に既存のworkflowファイルとの依存関係、および他のREADME関連ファイルとの整合性を確認してください。

期待する出力: 外部プロジェクトがこの`call-translate-readme.yml`を導入する際の手順書をmarkdown形式で生成してください。具体的には：必須パラメータの設定方法、シークレットの登録手順、前提条件の確認項目を含めてください。
```

**避けるべき例**:
- callgraphについて調べてください
- ワークフローを分析してください
- issue-noteの処理フローを確認してください

## 出力フォーマット：
以下のMarkdown形式で出力してください：

```markdown
# Development Status

## 現在のIssues
[以下の形式で3行でオープン中のissuesを要約。issue番号を必ず書く]
- [1行目の説明]
- [2行目の説明]
- [3行目の説明]

## 次の一手候補
1. [候補1のタイトル。issue番号を必ず書く]
   - 最初の小さな一歩: [具体的で実行可能な最初のアクション]
   - Agent実行プロンプト:
     ```
     対象ファイル: [分析/編集する具体的なファイルパス]

     実行内容: [具体的な分析や変更内容を記述]

     確認事項: [変更前に確認すべき依存関係や制約]

     期待する出力: [markdown形式での結果や、具体的なファイル変更の説明]
     ```

2. [候補2のタイトル。issue番号を必ず書く]
   - 最初の小さな一歩: [具体的で実行可能な最初のアクション]
   - Agent実行プロンプト:
     ```
     対象ファイル: [分析/編集する具体的なファイルパス]

     実行内容: [具体的な分析や変更内容を記述]

     確認事項: [変更前に確認すべき依存関係や制約]

     期待する出力: [markdown形式での結果や、具体的なファイル変更の説明]
     ```

3. [候補3のタイトル。issue番号を必ず書く]
   - 最初の小さな一歩: [具体的で実行可能な最初のアクション]
   - Agent実行プロンプト:
     ```
     対象ファイル: [分析/編集する具体的なファイルパス]

     実行内容: [具体的な分析や変更内容を記述]

     確認事項: [変更前に確認すべき依存関係や制約]

     期待する出力: [markdown形式での結果や、具体的なファイル変更の説明]
     ```
```


# 開発状況情報
- 以下の開発状況情報を参考にしてください。
- Issue番号を記載する際は、必ず [Issue #番号](../issue-notes/番号.md) の形式でMarkdownリンクとして記載してください。

## プロジェクトのファイル一覧
- .github/actions-tmp/.github/workflows/call-callgraph.yml
- .github/actions-tmp/.github/workflows/call-check-large-files.yml
- .github/actions-tmp/.github/workflows/call-daily-project-summary.yml
- .github/actions-tmp/.github/workflows/call-issue-note.yml
- .github/actions-tmp/.github/workflows/call-rust-windows-check.yml
- .github/actions-tmp/.github/workflows/call-translate-readme.yml
- .github/actions-tmp/.github/workflows/callgraph.yml
- .github/actions-tmp/.github/workflows/check-large-files.yml
- .github/actions-tmp/.github/workflows/check-recent-human-commit.yml
- .github/actions-tmp/.github/workflows/daily-project-summary.yml
- .github/actions-tmp/.github/workflows/issue-note.yml
- .github/actions-tmp/.github/workflows/rust-windows-check.yml
- .github/actions-tmp/.github/workflows/translate-readme.yml
- .github/actions-tmp/.github_automation/callgraph/codeql-queries/callgraph.ql
- .github/actions-tmp/.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml
- .github/actions-tmp/.github_automation/callgraph/codeql-queries/qlpack.yml
- .github/actions-tmp/.github_automation/callgraph/config/example.json
- .github/actions-tmp/.github_automation/callgraph/docs/callgraph.md
- .github/actions-tmp/.github_automation/callgraph/presets/callgraph.js
- .github/actions-tmp/.github_automation/callgraph/presets/style.css
- .github/actions-tmp/.github_automation/callgraph/scripts/analyze-codeql.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/callgraph-utils.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/check-codeql-exists.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/check-node-version.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/common-utils.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/copy-commit-results.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/extract-sarif-info.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/find-process-results.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/generate-html-graph.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/generateHTML.cjs
- .github/actions-tmp/.github_automation/check-large-files/README.md
- .github/actions-tmp/.github_automation/check-large-files/check-large-files.toml.default
- .github/actions-tmp/.github_automation/check-large-files/scripts/check_large_files.py
- .github/actions-tmp/.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs
- .github/actions-tmp/.github_automation/project_summary/docs/daily-summary-setup.md
- .github/actions-tmp/.github_automation/project_summary/prompts/development-status-prompt.md
- .github/actions-tmp/.github_automation/project_summary/prompts/project-overview-prompt.md
- .github/actions-tmp/.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/development/GitUtils.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/development/IssueTracker.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/generate-project-summary.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/shared/BaseGenerator.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs
- .github/actions-tmp/.github_automation/translate/docs/TRANSLATION_SETUP.md
- .github/actions-tmp/.github_automation/translate/scripts/translate-readme.cjs
- .github/actions-tmp/.gitignore
- .github/actions-tmp/.vscode/settings.json
- .github/actions-tmp/LICENSE
- .github/actions-tmp/README.ja.md
- .github/actions-tmp/README.md
- .github/actions-tmp/_config.yml
- .github/actions-tmp/generated-docs/callgraph.html
- .github/actions-tmp/generated-docs/callgraph.js
- .github/actions-tmp/generated-docs/development-status-generated-prompt.md
- .github/actions-tmp/generated-docs/development-status.md
- .github/actions-tmp/generated-docs/project-overview-generated-prompt.md
- .github/actions-tmp/generated-docs/project-overview.md
- .github/actions-tmp/generated-docs/style.css
- .github/actions-tmp/googled947dc864c270e07.html
- .github/actions-tmp/issue-notes/10.md
- .github/actions-tmp/issue-notes/11.md
- .github/actions-tmp/issue-notes/12.md
- .github/actions-tmp/issue-notes/13.md
- .github/actions-tmp/issue-notes/14.md
- .github/actions-tmp/issue-notes/15.md
- .github/actions-tmp/issue-notes/16.md
- .github/actions-tmp/issue-notes/17.md
- .github/actions-tmp/issue-notes/18.md
- .github/actions-tmp/issue-notes/19.md
- .github/actions-tmp/issue-notes/2.md
- .github/actions-tmp/issue-notes/20.md
- .github/actions-tmp/issue-notes/21.md
- .github/actions-tmp/issue-notes/22.md
- .github/actions-tmp/issue-notes/23.md
- .github/actions-tmp/issue-notes/24.md
- .github/actions-tmp/issue-notes/25.md
- .github/actions-tmp/issue-notes/26.md
- .github/actions-tmp/issue-notes/27.md
- .github/actions-tmp/issue-notes/28.md
- .github/actions-tmp/issue-notes/29.md
- .github/actions-tmp/issue-notes/3.md
- .github/actions-tmp/issue-notes/30.md
- .github/actions-tmp/issue-notes/35.md
- .github/actions-tmp/issue-notes/38.md
- .github/actions-tmp/issue-notes/4.md
- .github/actions-tmp/issue-notes/40.md
- .github/actions-tmp/issue-notes/44.md
- .github/actions-tmp/issue-notes/46.md
- .github/actions-tmp/issue-notes/7.md
- .github/actions-tmp/issue-notes/8.md
- .github/actions-tmp/issue-notes/9.md
- .github/actions-tmp/package-lock.json
- .github/actions-tmp/package.json
- .github/actions-tmp/src/main.js
- .github/workflows/call-callgraph.yml
- .github/workflows/call-check-large-files.yml
- .github/workflows/call-daily-project-summary.yml
- .github/workflows/call-issue-note.yml
- .github/workflows/call-rust-windows-check.yml
- .github/workflows/call-translate-readme.yml
- .github/workflows/callgraph.yml
- .github/workflows/check-large-files.yml
- .github/workflows/check-recent-human-commit.yml
- .github/workflows/daily-project-summary.yml
- .github/workflows/issue-note.yml
- .github/workflows/rust-windows-check.yml
- .github/workflows/translate-readme.yml
- .github_automation/callgraph/codeql-queries/callgraph.ql
- .github_automation/callgraph/codeql-queries/codeql-pack.lock.yml
- .github_automation/callgraph/codeql-queries/qlpack.yml
- .github_automation/callgraph/config/example.json
- .github_automation/callgraph/docs/callgraph.md
- .github_automation/callgraph/presets/callgraph.js
- .github_automation/callgraph/presets/style.css
- .github_automation/callgraph/scripts/analyze-codeql.cjs
- .github_automation/callgraph/scripts/callgraph-utils.cjs
- .github_automation/callgraph/scripts/check-codeql-exists.cjs
- .github_automation/callgraph/scripts/check-node-version.cjs
- .github_automation/callgraph/scripts/common-utils.cjs
- .github_automation/callgraph/scripts/copy-commit-results.cjs
- .github_automation/callgraph/scripts/extract-sarif-info.cjs
- .github_automation/callgraph/scripts/find-process-results.cjs
- .github_automation/callgraph/scripts/generate-html-graph.cjs
- .github_automation/callgraph/scripts/generateHTML.cjs
- .github_automation/check-large-files/README.md
- .github_automation/check-large-files/check-large-files.toml.default
- .github_automation/check-large-files/scripts/check_large_files.py
- .github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs
- .github_automation/project_summary/docs/daily-summary-setup.md
- .github_automation/project_summary/prompts/development-status-prompt.md
- .github_automation/project_summary/prompts/project-overview-prompt.md
- .github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs
- .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
- .github_automation/project_summary/scripts/development/GitUtils.cjs
- .github_automation/project_summary/scripts/development/IssueTracker.cjs
- .github_automation/project_summary/scripts/generate-project-summary.cjs
- .github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs
- .github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs
- .github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs
- .github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs
- .github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs
- .github_automation/project_summary/scripts/shared/BaseGenerator.cjs
- .github_automation/project_summary/scripts/shared/FileSystemUtils.cjs
- .github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs
- .github_automation/translate/docs/TRANSLATION_SETUP.md
- .github_automation/translate/scripts/translate-readme.cjs
- .gitignore
- .vscode/settings.json
- LICENSE
- README.ja.md
- README.md
- _config.yml
- generated-docs/callgraph.html
- generated-docs/callgraph.js
- generated-docs/project-overview-generated-prompt.md
- generated-docs/style.css
- googled947dc864c270e07.html
- issue-notes/10.md
- issue-notes/11.md
- issue-notes/12.md
- issue-notes/13.md
- issue-notes/14.md
- issue-notes/15.md
- issue-notes/16.md
- issue-notes/17.md
- issue-notes/18.md
- issue-notes/19.md
- issue-notes/2.md
- issue-notes/20.md
- issue-notes/21.md
- issue-notes/22.md
- issue-notes/23.md
- issue-notes/24.md
- issue-notes/25.md
- issue-notes/26.md
- issue-notes/27.md
- issue-notes/28.md
- issue-notes/29.md
- issue-notes/3.md
- issue-notes/30.md
- issue-notes/35.md
- issue-notes/38.md
- issue-notes/4.md
- issue-notes/40.md
- issue-notes/44.md
- issue-notes/46.md
- issue-notes/7.md
- issue-notes/8.md
- issue-notes/9.md
- src/main.js

## 現在のオープンIssues
## [Issue #48](../issue-notes/48.md): 大きなファイルの検出: 1個のファイルが500行を超えています
⚠️ 巨大ファイルが検知されていますがテストが見つかりません。まずテストを実装し、リファクタリング前後で結果を確認してください。

以下のファイルが500行を超えています。リファクタリングを検討してください。

## 検出されたファイル

| ファイル | 行数 | 超過行数 |
|---------|------|----------|
| `generated-docs/callgraph.js` | 526 | +26 |

## テスト実施のお願い

- リファクタリング前後にテストを実行し、それぞれのテスト失敗件数を報告してください
- リファクタリング前後のどちらかでテストがred...
ラベル: refactoring, code-quality, automated
--- issue-notes/48.md の内容 ---

```markdown

```

## [Issue #13](../issue-notes/13.md): issue-note を他projectから使いやすくする
[issue-notes/13.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/13.md)

...
ラベル: 
--- issue-notes/13.md の内容 ---

```markdown
# issue issue-note を他projectから使いやすくする #13
[issues #13](https://github.com/cat2151/github-actions/issues/13)

- docs
    - call導入手順を書く

```

## [Issue #11](../issue-notes/11.md): translate を他projectから使いやすくする
[issue-notes/11.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/11.md)

...
ラベル: 
--- issue-notes/11.md の内容 ---

```markdown
# issue translate を他projectから使いやすくする #11
[issues #11](https://github.com/cat2151/github-actions/issues/11)

# ブレインストーミング
- 課題、個別dirへの移動が必要。
    - scripts
- 課題、promptをハードコーディングでなく、promptsに切り出す。
    - さらに、呼び出し元ymlから任意のpromptsを指定できるようにする。
- 済、課題、README以外のtranslateも可能にするか検討する
    - 対策、シンプル優先でREADME決め打ちにする
        - 理由、README以外の用途となると、複数ファイルをどうGemini APIにわたすか？等、仕様が爆発的にふくらんでいくリスクがある
        - README以外の用途が明確でないうちは、README決め打ちにするほうがよい
- docs
    - call導入手順を書く

# 状況
- 上記のうち、別dirへの切り分け等は実施済みのはず
- どうする？
    - それをここに可視化する。

```

## ドキュメントで言及されているファイルの内容
### .github/actions-tmp/.github_automation/callgraph/presets/callgraph.js
```js
{% raw %}
// callgraph.js
// このファイルは generateHTML.cjs から分離したCytoscape.jsの描画・操作ロジックです。
// 依存: graphData, repo, branch（グローバル変数としてHTML側で宣言されていること）

// HTMLエスケープ関数（グローバルで利用可能に）
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (c) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c];
    });
}

// ダークモード検出
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// ダークモード用のカラーパレット
const colors = {
    light: {
        node: '#2196F3',
        nodeBorder: '#1976D2',
        nodeSelected: '#FF5722',
        nodeSelectedBorder: '#D84315',
        nodeWithLocation: '#4CAF50',
        edge: '#666',
        edgeSelected: '#FF5722',
        edgeWithLocation: '#4CAF50',
        textBackground: 'white'
    },
    dark: {
        node: '#64B5F6',
        nodeBorder: '#42A5F5',
        nodeSelected: '#FF7043',
        nodeSelectedBorder: '#FF5722',
        nodeWithLocation: '#66BB6A',
        edge: '#999',
        edgeSelected: '#FF7043',
        edgeWithLocation: '#66BB6A',
        textBackground: '#1e1e1e'
    }
};

const currentColors = isDarkMode ? colors.dark : colors.light;

const layoutNames = ['breadthfirst', 'concentric', 'cose', 'grid', 'circle'];
let currentLayoutIndex = 0;

const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
        ...graphData.nodes.map(node => ({
            data: {
                id: node.id,
                label: node.label,
                locations: node.locations || [],
                hasLocationInfo: node.hasLocationInfo || false,
                hasCalleeLocationInfo: node.hasCalleeLocationInfo || false,
                calleeFncDef: node.calleeFncDef || false,
            }
        })),
        ...graphData.edges.map(edge => ({
            data: {
                id: edge.id,
                source: edge.source,
                target: edge.target,
                file: edge.file || '',
                line: edge.line || 0,
                column: edge.column || 0,
                location: edge.location || '',
                hasLocationInfo: edge.hasLocationInfo || false,
                hasCalleeLocationInfo: edge.hasCalleeLocationInfo || false
            }
        }))
    ],
    style: [
        { selector: 'node', style: {
            'background-color': currentColors.node,
            'label': 'data(label)',
            'color': isDarkMode ? '#ffffff' : '#333',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '12px',
            'font-weight': 'bold',
            'text-wrap': 'wrap',
            'text-max-width': '100px',
            'width': '70px',
            'height': '70px',
            'border-width': '2px',
            'border-color': currentColors.nodeBorder,
            'text-background-color': currentColors.textBackground,
            'text-background-opacity': 0.8,
            'text-background-padding': '3px'
        }},
        { selector: 'node:selected', style: {
            'background-color': currentColors.nodeSelected,
            'border-color': currentColors.nodeSelectedBorder
        }},
        { selector: 'node[hasLocationInfo = true]', style: {
            'border-width': '3px',
            'border-color': currentColors.nodeWithLocation
        }},
        { selector: 'node[hasCalleeLocationInfo = true]', style: {
            'border-width': '4px',
            'border-color': '#FF9800'
        }},
        { selector: 'node[hasCalleeLocationInfo = false]', style: {
            'border-style': 'dotted',
            'border-width': '2px',
            'opacity': 0.6
        }},
        { selector: 'edge', style: {
            'width': 2,
            'line-color': currentColors.edge,
            'target-arrow-color': currentColors.edge,
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'arrow-scale': 1.2
        }},
        { selector: 'edge:selected', style: {
            'line-color': currentColors.edgeSelected,
            'target-arrow-color': currentColors.edgeSelected,
            'width': 3
        }},
        { selector: 'edge[hasLocationInfo = true]', style: {
            'line-color': currentColors.edgeWithLocation,
            'target-arrow-color': currentColors.edgeWithLocation
        }},
        { selector: 'node[hasLocationInfo = false]', style: {
            'border-style': 'dashed',
            'border-width': '2px',
            'opacity': 0.8
        }},
        { selector: 'edge[hasCalleeLocationInfo = true]', style: {
            'line-color': '#FF9800',
            'target-arrow-color': '#FF9800',
            'width': 3
        }},
        { selector: 'edge[hasLocationInfo = false]', style: {
            'line-style': 'dashed',
            'opacity': 0.7
        }}
    ],
    layout: getLayoutConfig('cose')
});

function getLayoutConfig(name) {
    switch (name) {
        case 'cose':
            return {
                name: 'cose',
                fit: true,          // ←もう一度trueに戻す（座標がズレない）
                padding: 50,        // 余白は控えめ
                animate: true,
                randomize: false,   // ←初期配置を固定して安定させる
                nodeRepulsion: 8000, // ←ほどよい反発（200000は強すぎた）
                idealEdgeLength: 120, // ←適度な長さに戻す
                edgeElasticity: 0.45,
                gravity: 1.2,        // ←少し強めて中央に集める
                numIter: 1000,       // ほどほどに
                componentSpacing: 80,
                nestingFactor: 0.9
            };
        case 'breadthfirst':
            return {
                name: 'breadthfirst', fit: true, padding: 30, directed: true, animate: true, spacingFactor: 1.2
            };
        case 'concentric':
            return {
                name: 'concentric', fit: true, padding: 30, animate: true,
                concentric: function(node) { return node.degree(); },
                levelWidth: function(nodes) { return 2; }
            };
        case 'grid':
            return {
                name: 'grid',
                fit: true,
                padding: 30,
                animate: true,
                avoidOverlap: true,
                spacingFactor: 1.2,
                rows: undefined, // 自動計算
                cols: undefined
            };
        case 'circle':
            return {
                name: 'circle',
                fit: true,
                padding: 30,
                animate: true,
                radius: 200,
                ready: function() {
                    placeCentralNode();
                }
            };
        default:
            return {
                name: 'circle', fit: true, padding: 30, animate: true, radius: 200
            };
    }
}

function placeCentralNode() {
    // エッジ数が一番多いノードを探す
    let maxDegreeNode = cy.nodes().max(function(node) {
        return node.degree(); // degree() = in+outの合計
    }).ele;

    if (maxDegreeNode.nonempty()) {
        // 中央に配置（画面中央座標を取得して移動）
        const centerPos = { x: cy.width() / 2, y: cy.height() / 2 };
        maxDegreeNode.position(centerPos);
        maxDegreeNode.lock(); // レイアウトで動かないよう固定
    }
}

cy.on('tap', 'node', function(evt) {
    const node = evt.target;
    const data = node.data();
    showNodeInfo(data);
});

cy.on('tap', 'edge', function(evt) {
    const edge = evt.target;
    const data = edge.data();
    showEdgeInfo(data);
});

cy.on('tap', function(evt) {
    if (evt.target === cy) {
        hideInfoPanel();
    }
});

function showNodeInfo(data) {
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('info-content');
    let html = '<div class="info-title">Function: ' + data.label + '</div>';
    if (data.hasCalleeLocationInfo && data.calleeFncDef) {
        // calleeの関数定義のソースコードを1行表示
        // html += '<p><strong>✓ This function has source location info</strong></p>'; // コメントアウト理由 : かわりに calleeFncDef を表示しているので
        // html += '<div style="margin-bottom:6px;font-size:13px;color:#888">'; // 備忘、888だと暗い
        html += '<div style="margin-bottom:6px;font-size:13px;color:#EEE">'; // 備忘、EEEだとダークモードならOK、今後はライトモードとダークモードの切り替えに対応予定
        html += '<div class="location-item"><div><small>';
        html += '<pre class="source-line">' + escapeHtml(data.calleeFncDef) + '</pre>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
      } else {
        html += '<p><strong>⚠ This function has NO source location info</strong></p>';
        html += '<p><small>匿名関数、動的関数、または外部ライブラリの関数である可能性があります。</small></p>';
    }
    if (data.hasLocationInfo && data.locations && data.locations.length > 0) {
        html += '<h4>Callers:</h4>';
        data.locations.forEach(loc => {
            const githubURL = generateGitHubURL(loc.file, loc.line);
            html += '<div class="location-item">';
            html += '<div class="location-file">' + loc.file + ':' + loc.line + ':' + loc.column + '</div>';
            html += '<div><small>Type: ' + loc.type + '</small></div>';
            if (loc.sourceLine) {
                html += '<pre class="source-line">' + escapeHtml(loc.sourceLine) + '</pre>';
            }
            if (githubURL) {
                html += '<div><a href="' + githubURL + '" target="_blank" class="location-link">View on GitHub</a></div>';
            }
            html += '</div>';
        });
    } else {
        html += '<p>呼び出し位置情報がありません</p>';
    }
    content.innerHTML = html;
    showInfoPanel();
}

function showEdgeInfo(data) {
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('info-content');
    let html = '<div class="info-title">Call: ' + data.source + ' → ' + data.target + '</div>';
    html += '<div style="margin-bottom:6px;font-size:13px;color:#888">';
    html += '<b>source:</b> <span style="color:#1976D2">' + data.source + '</span> &nbsp; ';
    html += '<b>target:</b> <span style="color:#FF9800">' + data.target + '</span>';
    html += '</div>';
    if (data.hasCalleeLocationInfo) {
        html += '<p><strong>✓ Target function (' + data.target + ') has source location</strong></p>';
    } else {
        html += '<p><strong>⚠ Target function (' + data.target + ') has NO source location</strong></p>';
        html += '<p><small>呼び出し先が匿名関数や外部ライブラリ関数の可能性があります。</small></p>';
    }
    if (data.hasLocationInfo && data.location) {
        html += '<h4>Call Location:</h4>';
        html += '<div class="edge-info">';
        html += '<div class="location-file">' + data.location + '</div>';
        if (data.sourceLine) {
            html += '<pre class="source-line">' + escapeHtml(data.sourceLine) + '</pre>';
        }
        const githubURL = generateGitHubURL(data.file, data.line);
        if (githubURL) {
            html += '<div><a href="' + githubURL + '" target="_blank" class="location-link">View on GitHub</a></div>';
        }
        html += '</div>';
    } else {
        html += '<p>呼び出し位置情報がありません</p>';
        html += '<p><small>この呼び出しは動的に発生するか、CodeQLで検出できない方法で行われている可能性があります。</small></p>';
    }
// HTMLエスケープ関数
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (c) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c];
    });
}
    content.innerHTML = html;
    showInfoPanel();
}

function hideInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.add('hidden');
}

function showInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.remove('hidden');
}

function toggleInfoPanel() {
    const panel = document.getElementById('info-panel');
    const isHidden = panel.classList.contains('hidden');
    if (isHidden) {
        panel.classList.remove('hidden');
        panel.style.transform = 'scale(1.02)';
        setTimeout(() => { panel.style.transform = 'scale(1)'; }, 200);
    } else {
        panel.classList.add('hidden');
    }
}

function generateGitHubURL(file, line) {
    if (!repo || !file) return null;
    let normalizedFile = file.replace(/\\\\/g, '/');
    if (normalizedFile.includes('/src/')) {
        const srcIndex = normalizedFile.lastIndexOf('/src/');
        normalizedFile = normalizedFile.substring(srcIndex + 1);
    } else if (normalizedFile.startsWith('src/')) {
        normalizedFile = normalizedFile;
    } else {
        const lastSlash = normalizedFile.lastIndexOf('/');
        if (lastSlash !== -1) {
            normalizedFile = normalizedFile.substring(lastSlash + 1);
        }
    }
    return 'https://github.com/' + repo + '/blob/' + branch + '/' + normalizedFile + '#L' + line;
}

function resetLayout() {
    currentLayoutIndex = 0;
    const layout = cy.layout(getLayoutConfig(layoutNames[currentLayoutIndex]));
    layout.run();

    watchNodeMovementAndFixOverlapsWrap();
}

function watchNodeMovementAndFixOverlapsWrap() {
    watchNodeMovementAndFixOverlaps(100, 20);
}

let movementWatcherTimer;

/**
 * ノードの動きを監視して、動きが止まったら重なり修正をする関数
 * @param {number} interval - チェック間隔(ms)
 * @param {number} maxChecks - 最大チェック回数
 */
function watchNodeMovementAndFixOverlaps(interval, maxChecks) {
    let prevPositions = new Map();
    let checks = 0;
    let stableCount = 0;
    const movementThreshold = 1.0; // 動き判定閾値(px)
    const stableThreshold = 3;     // 何回連続で動かないと止まった判定するか

    // 初期ノード位置を記録
    cy.nodes().forEach(node => {
        prevPositions.set(node.id(), {...node.position()});
    });

    if (movementWatcherTimer) {
        clearInterval(movementWatcherTimer);
        movementWatcherTimer = null;
    }

    movementWatcherTimer = setInterval(() => {
        let moving = false;

        cy.nodes().forEach(node => {
            const prevPos = prevPositions.get(node.id());
            const currentPos = node.position();
            if (Math.abs(currentPos.x - prevPos.x) > movementThreshold || Math.abs(currentPos.y - prevPos.y) > movementThreshold) {
                moving = true;
                prevPositions.set(node.id(), {...currentPos});
            }
        });

        if (!moving) {
            stableCount++;
        } else {
            stableCount = 0;
        }

        checks++;

        if (stableCount >= stableThreshold || checks >= maxChecks) {
            clearInterval(movementWatcherTimer);
            movementWatcherTimer = null;
            if (!moving) {
              console.log('ノードの動きが止まった！重なり修正開始 (check' + checks + '回)');
            } else {
              console.log('時間切れ！重なり修正開始');
            }

            resolveNodeOverlaps(100, 0.2, 10);
            cy.fit();
        }
    }, interval);
}

/**
 * ノード同士の重なりを軽減する
 * 反発力ベースで自然に押しのける
 * @param {number} minDistance - ノード間の最小距離(px)
 * @param {number} shiftRatio - 移動の強さ(0~1)
 * @param {number} iterations - 繰り返し回数
 */
function resolveNodeOverlaps(minDistance, shiftRatio, iterations) {
    for (let iter = 0; iter < iterations; iter++) {
        cy.nodes().forEach(node => {
            const pos = node.position();
            
            cy.nodes().forEach(other => {
                if (node.id() === other.id()) return; // 自分自身はスキップ

                const otherPos = other.position();
                const dx = pos.x - otherPos.x;
                const dy = pos.y - otherPos.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < minDistance && dist > 0.0001) {
                    // 反発力の大きさ（距離が近いほど強く押す）
                    const force = (1 - dist / minDistance) * shiftRatio;

                    // 正規化ベクトル（方向だけを表す）
                    const nx = dx / dist;
                    const ny = dy / dist;

                    // お互いを少しずつ押しのける（対称に動かす）
                    node.position({
                        x: pos.x + nx * force * (minDistance / 2),
                        y: pos.y + ny * force * (minDistance / 2)
                    });

                    other.position({
                        x: otherPos.x - nx * force * (minDistance / 2),
                        y: otherPos.y - ny * force * (minDistance / 2)
                    });
                }
            });
        });
    }
}

function switchLayout(button) {
    resetNodeStates();
    currentLayoutIndex = (currentLayoutIndex + 1) % layoutNames.length;
    const layoutName = layoutNames[currentLayoutIndex];
    const layout = cy.layout(getLayoutConfig(layoutName));
    layout.run();
    if (button) button.textContent = 'レイアウト切替 (' + layoutName + ')';

    watchNodeMovementAndFixOverlapsWrap();
}

function resetNodeStates() {
    cy.nodes().unlock();          // すべてのロック解除
    cy.nodes().positions(() => {  // 古い座標をクリア（nullにしておく）
        return null;
    });
}

function fitToContent() {
    cy.fit();
}

let labelsVisible = true;
let calleeLocationFilterEnabled = false;

function toggleNodeLabels() {
    labelsVisible = !labelsVisible;
    cy.style()
        .selector('node')
        .style('label', labelsVisible ? 'data(label)' : '')
        .update();
}

function toggleCalleeLocationFilter() {
    calleeLocationFilterEnabled = !calleeLocationFilterEnabled;
    const button = event.target;
    if (calleeLocationFilterEnabled) {
        cy.nodes('[hasCalleeLocationInfo = false]').style('display', 'none');
        cy.edges('[hasCalleeLocationInfo = false]').style('display', 'none');
        button.textContent = 'Show No-Callee-Location';
        button.style.backgroundColor = '#FF5722';
    } else {
        cy.nodes().style('display', 'element');
        cy.edges().style('display', 'element');
        button.textContent = 'Hide No-Callee-Location';
        button.style.backgroundColor = '#2196F3';
    }
}

cy.ready(function() {
    resetLayout();
});

if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(function(e) {
        window.location.reload();
    });
}

{% endraw %}
```

### .github/actions-tmp/generated-docs/callgraph.js
```js
{% raw %}
// callgraph.js
// このファイルは generateHTML.cjs から分離したCytoscape.jsの描画・操作ロジックです。
// 依存: graphData, repo, branch（グローバル変数としてHTML側で宣言されていること）

// HTMLエスケープ関数（グローバルで利用可能に）
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (c) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c];
    });
}

// ダークモード検出
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// ダークモード用のカラーパレット
const colors = {
    light: {
        node: '#2196F3',
        nodeBorder: '#1976D2',
        nodeSelected: '#FF5722',
        nodeSelectedBorder: '#D84315',
        nodeWithLocation: '#4CAF50',
        edge: '#666',
        edgeSelected: '#FF5722',
        edgeWithLocation: '#4CAF50',
        textBackground: 'white'
    },
    dark: {
        node: '#64B5F6',
        nodeBorder: '#42A5F5',
        nodeSelected: '#FF7043',
        nodeSelectedBorder: '#FF5722',
        nodeWithLocation: '#66BB6A',
        edge: '#999',
        edgeSelected: '#FF7043',
        edgeWithLocation: '#66BB6A',
        textBackground: '#1e1e1e'
    }
};

const currentColors = isDarkMode ? colors.dark : colors.light;

const layoutNames = ['breadthfirst', 'concentric', 'cose', 'grid', 'circle'];
let currentLayoutIndex = 0;

const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
        ...graphData.nodes.map(node => ({
            data: {
                id: node.id,
                label: node.label,
                locations: node.locations || [],
                hasLocationInfo: node.hasLocationInfo || false,
                hasCalleeLocationInfo: node.hasCalleeLocationInfo || false,
                calleeFncDef: node.calleeFncDef || false,
            }
        })),
        ...graphData.edges.map(edge => ({
            data: {
                id: edge.id,
                source: edge.source,
                target: edge.target,
                file: edge.file || '',
                line: edge.line || 0,
                column: edge.column || 0,
                location: edge.location || '',
                hasLocationInfo: edge.hasLocationInfo || false,
                hasCalleeLocationInfo: edge.hasCalleeLocationInfo || false
            }
        }))
    ],
    style: [
        { selector: 'node', style: {
            'background-color': currentColors.node,
            'label': 'data(label)',
            'color': isDarkMode ? '#ffffff' : '#333',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '12px',
            'font-weight': 'bold',
            'text-wrap': 'wrap',
            'text-max-width': '100px',
            'width': '70px',
            'height': '70px',
            'border-width': '2px',
            'border-color': currentColors.nodeBorder,
            'text-background-color': currentColors.textBackground,
            'text-background-opacity': 0.8,
            'text-background-padding': '3px'
        }},
        { selector: 'node:selected', style: {
            'background-color': currentColors.nodeSelected,
            'border-color': currentColors.nodeSelectedBorder
        }},
        { selector: 'node[hasLocationInfo = true]', style: {
            'border-width': '3px',
            'border-color': currentColors.nodeWithLocation
        }},
        { selector: 'node[hasCalleeLocationInfo = true]', style: {
            'border-width': '4px',
            'border-color': '#FF9800'
        }},
        { selector: 'node[hasCalleeLocationInfo = false]', style: {
            'border-style': 'dotted',
            'border-width': '2px',
            'opacity': 0.6
        }},
        { selector: 'edge', style: {
            'width': 2,
            'line-color': currentColors.edge,
            'target-arrow-color': currentColors.edge,
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'arrow-scale': 1.2
        }},
        { selector: 'edge:selected', style: {
            'line-color': currentColors.edgeSelected,
            'target-arrow-color': currentColors.edgeSelected,
            'width': 3
        }},
        { selector: 'edge[hasLocationInfo = true]', style: {
            'line-color': currentColors.edgeWithLocation,
            'target-arrow-color': currentColors.edgeWithLocation
        }},
        { selector: 'node[hasLocationInfo = false]', style: {
            'border-style': 'dashed',
            'border-width': '2px',
            'opacity': 0.8
        }},
        { selector: 'edge[hasCalleeLocationInfo = true]', style: {
            'line-color': '#FF9800',
            'target-arrow-color': '#FF9800',
            'width': 3
        }},
        { selector: 'edge[hasLocationInfo = false]', style: {
            'line-style': 'dashed',
            'opacity': 0.7
        }}
    ],
    layout: getLayoutConfig('cose')
});

function getLayoutConfig(name) {
    switch (name) {
        case 'cose':
            return {
                name: 'cose',
                fit: true,          // ←もう一度trueに戻す（座標がズレない）
                padding: 50,        // 余白は控えめ
                animate: true,
                randomize: false,   // ←初期配置を固定して安定させる
                nodeRepulsion: 8000, // ←ほどよい反発（200000は強すぎた）
                idealEdgeLength: 120, // ←適度な長さに戻す
                edgeElasticity: 0.45,
                gravity: 1.2,        // ←少し強めて中央に集める
                numIter: 1000,       // ほどほどに
                componentSpacing: 80,
                nestingFactor: 0.9
            };
        case 'breadthfirst':
            return {
                name: 'breadthfirst', fit: true, padding: 30, directed: true, animate: true, spacingFactor: 1.2
            };
        case 'concentric':
            return {
                name: 'concentric', fit: true, padding: 30, animate: true,
                concentric: function(node) { return node.degree(); },
                levelWidth: function(nodes) { return 2; }
            };
        case 'grid':
            return {
                name: 'grid',
                fit: true,
                padding: 30,
                animate: true,
                avoidOverlap: true,
                spacingFactor: 1.2,
                rows: undefined, // 自動計算
                cols: undefined
            };
        case 'circle':
            return {
                name: 'circle',
                fit: true,
                padding: 30,
                animate: true,
                radius: 200,
                ready: function() {
                    placeCentralNode();
                }
            };
        default:
            return {
                name: 'circle', fit: true, padding: 30, animate: true, radius: 200
            };
    }
}

function placeCentralNode() {
    // エッジ数が一番多いノードを探す
    let maxDegreeNode = cy.nodes().max(function(node) {
        return node.degree(); // degree() = in+outの合計
    }).ele;

    if (maxDegreeNode.nonempty()) {
        // 中央に配置（画面中央座標を取得して移動）
        const centerPos = { x: cy.width() / 2, y: cy.height() / 2 };
        maxDegreeNode.position(centerPos);
        maxDegreeNode.lock(); // レイアウトで動かないよう固定
    }
}

cy.on('tap', 'node', function(evt) {
    const node = evt.target;
    const data = node.data();
    showNodeInfo(data);
});

cy.on('tap', 'edge', function(evt) {
    const edge = evt.target;
    const data = edge.data();
    showEdgeInfo(data);
});

cy.on('tap', function(evt) {
    if (evt.target === cy) {
        hideInfoPanel();
    }
});

function showNodeInfo(data) {
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('info-content');
    let html = '<div class="info-title">Function: ' + data.label + '</div>';
    if (data.hasCalleeLocationInfo && data.calleeFncDef) {
        // calleeの関数定義のソースコードを1行表示
        // html += '<p><strong>✓ This function has source location info</strong></p>'; // コメントアウト理由 : かわりに calleeFncDef を表示しているので
        // html += '<div style="margin-bottom:6px;font-size:13px;color:#888">'; // 備忘、888だと暗い
        html += '<div style="margin-bottom:6px;font-size:13px;color:#EEE">'; // 備忘、EEEだとダークモードならOK、今後はライトモードとダークモードの切り替えに対応予定
        html += '<div class="location-item"><div><small>';
        html += '<pre class="source-line">' + escapeHtml(data.calleeFncDef) + '</pre>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
      } else {
        html += '<p><strong>⚠ This function has NO source location info</strong></p>';
        html += '<p><small>匿名関数、動的関数、または外部ライブラリの関数である可能性があります。</small></p>';
    }
    if (data.hasLocationInfo && data.locations && data.locations.length > 0) {
        html += '<h4>Callers:</h4>';
        data.locations.forEach(loc => {
            const githubURL = generateGitHubURL(loc.file, loc.line);
            html += '<div class="location-item">';
            html += '<div class="location-file">' + loc.file + ':' + loc.line + ':' + loc.column + '</div>';
            html += '<div><small>Type: ' + loc.type + '</small></div>';
            if (loc.sourceLine) {
                html += '<pre class="source-line">' + escapeHtml(loc.sourceLine) + '</pre>';
            }
            if (githubURL) {
                html += '<div><a href="' + githubURL + '" target="_blank" class="location-link">View on GitHub</a></div>';
            }
            html += '</div>';
        });
    } else {
        html += '<p>呼び出し位置情報がありません</p>';
    }
    content.innerHTML = html;
    showInfoPanel();
}

function showEdgeInfo(data) {
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('info-content');
    let html = '<div class="info-title">Call: ' + data.source + ' → ' + data.target + '</div>';
    html += '<div style="margin-bottom:6px;font-size:13px;color:#888">';
    html += '<b>source:</b> <span style="color:#1976D2">' + data.source + '</span> &nbsp; ';
    html += '<b>target:</b> <span style="color:#FF9800">' + data.target + '</span>';
    html += '</div>';
    if (data.hasCalleeLocationInfo) {
        html += '<p><strong>✓ Target function (' + data.target + ') has source location</strong></p>';
    } else {
        html += '<p><strong>⚠ Target function (' + data.target + ') has NO source location</strong></p>';
        html += '<p><small>呼び出し先が匿名関数や外部ライブラリ関数の可能性があります。</small></p>';
    }
    if (data.hasLocationInfo && data.location) {
        html += '<h4>Call Location:</h4>';
        html += '<div class="edge-info">';
        html += '<div class="location-file">' + data.location + '</div>';
        if (data.sourceLine) {
            html += '<pre class="source-line">' + escapeHtml(data.sourceLine) + '</pre>';
        }
        const githubURL = generateGitHubURL(data.file, data.line);
        if (githubURL) {
            html += '<div><a href="' + githubURL + '" target="_blank" class="location-link">View on GitHub</a></div>';
        }
        html += '</div>';
    } else {
        html += '<p>呼び出し位置情報がありません</p>';
        html += '<p><small>この呼び出しは動的に発生するか、CodeQLで検出できない方法で行われている可能性があります。</small></p>';
    }
// HTMLエスケープ関数
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (c) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c];
    });
}
    content.innerHTML = html;
    showInfoPanel();
}

function hideInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.add('hidden');
}

function showInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.remove('hidden');
}

function toggleInfoPanel() {
    const panel = document.getElementById('info-panel');
    const isHidden = panel.classList.contains('hidden');
    if (isHidden) {
        panel.classList.remove('hidden');
        panel.style.transform = 'scale(1.02)';
        setTimeout(() => { panel.style.transform = 'scale(1)'; }, 200);
    } else {
        panel.classList.add('hidden');
    }
}

function generateGitHubURL(file, line) {
    if (!repo || !file) return null;
    let normalizedFile = file.replace(/\\\\/g, '/');
    if (normalizedFile.includes('/src/')) {
        const srcIndex = normalizedFile.lastIndexOf('/src/');
        normalizedFile = normalizedFile.substring(srcIndex + 1);
    } else if (normalizedFile.startsWith('src/')) {
        normalizedFile = normalizedFile;
    } else {
        const lastSlash = normalizedFile.lastIndexOf('/');
        if (lastSlash !== -1) {
            normalizedFile = normalizedFile.substring(lastSlash + 1);
        }
    }
    return 'https://github.com/' + repo + '/blob/' + branch + '/' + normalizedFile + '#L' + line;
}

function resetLayout() {
    currentLayoutIndex = 0;
    const layout = cy.layout(getLayoutConfig(layoutNames[currentLayoutIndex]));
    layout.run();

    watchNodeMovementAndFixOverlapsWrap();
}

function watchNodeMovementAndFixOverlapsWrap() {
    watchNodeMovementAndFixOverlaps(100, 20);
}

let movementWatcherTimer;

/**
 * ノードの動きを監視して、動きが止まったら重なり修正をする関数
 * @param {number} interval - チェック間隔(ms)
 * @param {number} maxChecks - 最大チェック回数
 */
function watchNodeMovementAndFixOverlaps(interval, maxChecks) {
    let prevPositions = new Map();
    let checks = 0;
    let stableCount = 0;
    const movementThreshold = 1.0; // 動き判定閾値(px)
    const stableThreshold = 3;     // 何回連続で動かないと止まった判定するか

    // 初期ノード位置を記録
    cy.nodes().forEach(node => {
        prevPositions.set(node.id(), {...node.position()});
    });

    if (movementWatcherTimer) {
        clearInterval(movementWatcherTimer);
        movementWatcherTimer = null;
    }

    movementWatcherTimer = setInterval(() => {
        let moving = false;

        cy.nodes().forEach(node => {
            const prevPos = prevPositions.get(node.id());
            const currentPos = node.position();
            if (Math.abs(currentPos.x - prevPos.x) > movementThreshold || Math.abs(currentPos.y - prevPos.y) > movementThreshold) {
                moving = true;
                prevPositions.set(node.id(), {...currentPos});
            }
        });

        if (!moving) {
            stableCount++;
        } else {
            stableCount = 0;
        }

        checks++;

        if (stableCount >= stableThreshold || checks >= maxChecks) {
            clearInterval(movementWatcherTimer);
            movementWatcherTimer = null;
            if (!moving) {
              console.log('ノードの動きが止まった！重なり修正開始 (check' + checks + '回)');
            } else {
              console.log('時間切れ！重なり修正開始');
            }

            resolveNodeOverlaps(100, 0.2, 10);
            cy.fit();
        }
    }, interval);
}

/**
 * ノード同士の重なりを軽減する
 * 反発力ベースで自然に押しのける
 * @param {number} minDistance - ノード間の最小距離(px)
 * @param {number} shiftRatio - 移動の強さ(0~1)
 * @param {number} iterations - 繰り返し回数
 */
function resolveNodeOverlaps(minDistance, shiftRatio, iterations) {
    for (let iter = 0; iter < iterations; iter++) {
        cy.nodes().forEach(node => {
            const pos = node.position();
            
            cy.nodes().forEach(other => {
                if (node.id() === other.id()) return; // 自分自身はスキップ

                const otherPos = other.position();
                const dx = pos.x - otherPos.x;
                const dy = pos.y - otherPos.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < minDistance && dist > 0.0001) {
                    // 反発力の大きさ（距離が近いほど強く押す）
                    const force = (1 - dist / minDistance) * shiftRatio;

                    // 正規化ベクトル（方向だけを表す）
                    const nx = dx / dist;
                    const ny = dy / dist;

                    // お互いを少しずつ押しのける（対称に動かす）
                    node.position({
                        x: pos.x + nx * force * (minDistance / 2),
                        y: pos.y + ny * force * (minDistance / 2)
                    });

                    other.position({
                        x: otherPos.x - nx * force * (minDistance / 2),
                        y: otherPos.y - ny * force * (minDistance / 2)
                    });
                }
            });
        });
    }
}

function switchLayout(button) {
    resetNodeStates();
    currentLayoutIndex = (currentLayoutIndex + 1) % layoutNames.length;
    const layoutName = layoutNames[currentLayoutIndex];
    const layout = cy.layout(getLayoutConfig(layoutName));
    layout.run();
    if (button) button.textContent = 'レイアウト切替 (' + layoutName + ')';

    watchNodeMovementAndFixOverlapsWrap();
}

function resetNodeStates() {
    cy.nodes().unlock();          // すべてのロック解除
    cy.nodes().positions(() => {  // 古い座標をクリア（nullにしておく）
        return null;
    });
}

function fitToContent() {
    cy.fit();
}

let labelsVisible = true;
let calleeLocationFilterEnabled = false;

function toggleNodeLabels() {
    labelsVisible = !labelsVisible;
    cy.style()
        .selector('node')
        .style('label', labelsVisible ? 'data(label)' : '')
        .update();
}

function toggleCalleeLocationFilter() {
    calleeLocationFilterEnabled = !calleeLocationFilterEnabled;
    const button = event.target;
    if (calleeLocationFilterEnabled) {
        cy.nodes('[hasCalleeLocationInfo = false]').style('display', 'none');
        cy.edges('[hasCalleeLocationInfo = false]').style('display', 'none');
        button.textContent = 'Show No-Callee-Location';
        button.style.backgroundColor = '#FF5722';
    } else {
        cy.nodes().style('display', 'element');
        cy.edges().style('display', 'element');
        button.textContent = 'Hide No-Callee-Location';
        button.style.backgroundColor = '#2196F3';
    }
}

cy.ready(function() {
    resetLayout();
});

if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(function(e) {
        window.location.reload();
    });
}

{% endraw %}
```

### .github_automation/callgraph/presets/callgraph.js
```js
{% raw %}
// callgraph.js
// このファイルは generateHTML.cjs から分離したCytoscape.jsの描画・操作ロジックです。
// 依存: graphData, repo, branch（グローバル変数としてHTML側で宣言されていること）

// HTMLエスケープ関数（グローバルで利用可能に）
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (c) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c];
    });
}

// ダークモード検出
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// ダークモード用のカラーパレット
const colors = {
    light: {
        node: '#2196F3',
        nodeBorder: '#1976D2',
        nodeSelected: '#FF5722',
        nodeSelectedBorder: '#D84315',
        nodeWithLocation: '#4CAF50',
        edge: '#666',
        edgeSelected: '#FF5722',
        edgeWithLocation: '#4CAF50',
        textBackground: 'white'
    },
    dark: {
        node: '#64B5F6',
        nodeBorder: '#42A5F5',
        nodeSelected: '#FF7043',
        nodeSelectedBorder: '#FF5722',
        nodeWithLocation: '#66BB6A',
        edge: '#999',
        edgeSelected: '#FF7043',
        edgeWithLocation: '#66BB6A',
        textBackground: '#1e1e1e'
    }
};

const currentColors = isDarkMode ? colors.dark : colors.light;

const layoutNames = ['breadthfirst', 'concentric', 'cose', 'grid', 'circle'];
let currentLayoutIndex = 0;

const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
        ...graphData.nodes.map(node => ({
            data: {
                id: node.id,
                label: node.label,
                locations: node.locations || [],
                hasLocationInfo: node.hasLocationInfo || false,
                hasCalleeLocationInfo: node.hasCalleeLocationInfo || false,
                calleeFncDef: node.calleeFncDef || false,
            }
        })),
        ...graphData.edges.map(edge => ({
            data: {
                id: edge.id,
                source: edge.source,
                target: edge.target,
                file: edge.file || '',
                line: edge.line || 0,
                column: edge.column || 0,
                location: edge.location || '',
                hasLocationInfo: edge.hasLocationInfo || false,
                hasCalleeLocationInfo: edge.hasCalleeLocationInfo || false
            }
        }))
    ],
    style: [
        { selector: 'node', style: {
            'background-color': currentColors.node,
            'label': 'data(label)',
            'color': isDarkMode ? '#ffffff' : '#333',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '12px',
            'font-weight': 'bold',
            'text-wrap': 'wrap',
            'text-max-width': '100px',
            'width': '70px',
            'height': '70px',
            'border-width': '2px',
            'border-color': currentColors.nodeBorder,
            'text-background-color': currentColors.textBackground,
            'text-background-opacity': 0.8,
            'text-background-padding': '3px'
        }},
        { selector: 'node:selected', style: {
            'background-color': currentColors.nodeSelected,
            'border-color': currentColors.nodeSelectedBorder
        }},
        { selector: 'node[hasLocationInfo = true]', style: {
            'border-width': '3px',
            'border-color': currentColors.nodeWithLocation
        }},
        { selector: 'node[hasCalleeLocationInfo = true]', style: {
            'border-width': '4px',
            'border-color': '#FF9800'
        }},
        { selector: 'node[hasCalleeLocationInfo = false]', style: {
            'border-style': 'dotted',
            'border-width': '2px',
            'opacity': 0.6
        }},
        { selector: 'edge', style: {
            'width': 2,
            'line-color': currentColors.edge,
            'target-arrow-color': currentColors.edge,
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'arrow-scale': 1.2
        }},
        { selector: 'edge:selected', style: {
            'line-color': currentColors.edgeSelected,
            'target-arrow-color': currentColors.edgeSelected,
            'width': 3
        }},
        { selector: 'edge[hasLocationInfo = true]', style: {
            'line-color': currentColors.edgeWithLocation,
            'target-arrow-color': currentColors.edgeWithLocation
        }},
        { selector: 'node[hasLocationInfo = false]', style: {
            'border-style': 'dashed',
            'border-width': '2px',
            'opacity': 0.8
        }},
        { selector: 'edge[hasCalleeLocationInfo = true]', style: {
            'line-color': '#FF9800',
            'target-arrow-color': '#FF9800',
            'width': 3
        }},
        { selector: 'edge[hasLocationInfo = false]', style: {
            'line-style': 'dashed',
            'opacity': 0.7
        }}
    ],
    layout: getLayoutConfig('cose')
});

function getLayoutConfig(name) {
    switch (name) {
        case 'cose':
            return {
                name: 'cose',
                fit: true,          // ←もう一度trueに戻す（座標がズレない）
                padding: 50,        // 余白は控えめ
                animate: true,
                randomize: false,   // ←初期配置を固定して安定させる
                nodeRepulsion: 8000, // ←ほどよい反発（200000は強すぎた）
                idealEdgeLength: 120, // ←適度な長さに戻す
                edgeElasticity: 0.45,
                gravity: 1.2,        // ←少し強めて中央に集める
                numIter: 1000,       // ほどほどに
                componentSpacing: 80,
                nestingFactor: 0.9
            };
        case 'breadthfirst':
            return {
                name: 'breadthfirst', fit: true, padding: 30, directed: true, animate: true, spacingFactor: 1.2
            };
        case 'concentric':
            return {
                name: 'concentric', fit: true, padding: 30, animate: true,
                concentric: function(node) { return node.degree(); },
                levelWidth: function(nodes) { return 2; }
            };
        case 'grid':
            return {
                name: 'grid',
                fit: true,
                padding: 30,
                animate: true,
                avoidOverlap: true,
                spacingFactor: 1.2,
                rows: undefined, // 自動計算
                cols: undefined
            };
        case 'circle':
            return {
                name: 'circle',
                fit: true,
                padding: 30,
                animate: true,
                radius: 200,
                ready: function() {
                    placeCentralNode();
                }
            };
        default:
            return {
                name: 'circle', fit: true, padding: 30, animate: true, radius: 200
            };
    }
}

function placeCentralNode() {
    // エッジ数が一番多いノードを探す
    let maxDegreeNode = cy.nodes().max(function(node) {
        return node.degree(); // degree() = in+outの合計
    }).ele;

    if (maxDegreeNode.nonempty()) {
        // 中央に配置（画面中央座標を取得して移動）
        const centerPos = { x: cy.width() / 2, y: cy.height() / 2 };
        maxDegreeNode.position(centerPos);
        maxDegreeNode.lock(); // レイアウトで動かないよう固定
    }
}

cy.on('tap', 'node', function(evt) {
    const node = evt.target;
    const data = node.data();
    showNodeInfo(data);
});

cy.on('tap', 'edge', function(evt) {
    const edge = evt.target;
    const data = edge.data();
    showEdgeInfo(data);
});

cy.on('tap', function(evt) {
    if (evt.target === cy) {
        hideInfoPanel();
    }
});

function showNodeInfo(data) {
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('info-content');
    let html = '<div class="info-title">Function: ' + data.label + '</div>';
    if (data.hasCalleeLocationInfo && data.calleeFncDef) {
        // calleeの関数定義のソースコードを1行表示
        // html += '<p><strong>✓ This function has source location info</strong></p>'; // コメントアウト理由 : かわりに calleeFncDef を表示しているので
        // html += '<div style="margin-bottom:6px;font-size:13px;color:#888">'; // 備忘、888だと暗い
        html += '<div style="margin-bottom:6px;font-size:13px;color:#EEE">'; // 備忘、EEEだとダークモードならOK、今後はライトモードとダークモードの切り替えに対応予定
        html += '<div class="location-item"><div><small>';
        html += '<pre class="source-line">' + escapeHtml(data.calleeFncDef) + '</pre>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
      } else {
        html += '<p><strong>⚠ This function has NO source location info</strong></p>';
        html += '<p><small>匿名関数、動的関数、または外部ライブラリの関数である可能性があります。</small></p>';
    }
    if (data.hasLocationInfo && data.locations && data.locations.length > 0) {
        html += '<h4>Callers:</h4>';
        data.locations.forEach(loc => {
            const githubURL = generateGitHubURL(loc.file, loc.line);
            html += '<div class="location-item">';
            html += '<div class="location-file">' + loc.file + ':' + loc.line + ':' + loc.column + '</div>';
            html += '<div><small>Type: ' + loc.type + '</small></div>';
            if (loc.sourceLine) {
                html += '<pre class="source-line">' + escapeHtml(loc.sourceLine) + '</pre>';
            }
            if (githubURL) {
                html += '<div><a href="' + githubURL + '" target="_blank" class="location-link">View on GitHub</a></div>';
            }
            html += '</div>';
        });
    } else {
        html += '<p>呼び出し位置情報がありません</p>';
    }
    content.innerHTML = html;
    showInfoPanel();
}

function showEdgeInfo(data) {
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('info-content');
    let html = '<div class="info-title">Call: ' + data.source + ' → ' + data.target + '</div>';
    html += '<div style="margin-bottom:6px;font-size:13px;color:#888">';
    html += '<b>source:</b> <span style="color:#1976D2">' + data.source + '</span> &nbsp; ';
    html += '<b>target:</b> <span style="color:#FF9800">' + data.target + '</span>';
    html += '</div>';
    if (data.hasCalleeLocationInfo) {
        html += '<p><strong>✓ Target function (' + data.target + ') has source location</strong></p>';
    } else {
        html += '<p><strong>⚠ Target function (' + data.target + ') has NO source location</strong></p>';
        html += '<p><small>呼び出し先が匿名関数や外部ライブラリ関数の可能性があります。</small></p>';
    }
    if (data.hasLocationInfo && data.location) {
        html += '<h4>Call Location:</h4>';
        html += '<div class="edge-info">';
        html += '<div class="location-file">' + data.location + '</div>';
        if (data.sourceLine) {
            html += '<pre class="source-line">' + escapeHtml(data.sourceLine) + '</pre>';
        }
        const githubURL = generateGitHubURL(data.file, data.line);
        if (githubURL) {
            html += '<div><a href="' + githubURL + '" target="_blank" class="location-link">View on GitHub</a></div>';
        }
        html += '</div>';
    } else {
        html += '<p>呼び出し位置情報がありません</p>';
        html += '<p><small>この呼び出しは動的に発生するか、CodeQLで検出できない方法で行われている可能性があります。</small></p>';
    }
// HTMLエスケープ関数
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (c) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c];
    });
}
    content.innerHTML = html;
    showInfoPanel();
}

function hideInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.add('hidden');
}

function showInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.remove('hidden');
}

function toggleInfoPanel() {
    const panel = document.getElementById('info-panel');
    const isHidden = panel.classList.contains('hidden');
    if (isHidden) {
        panel.classList.remove('hidden');
        panel.style.transform = 'scale(1.02)';
        setTimeout(() => { panel.style.transform = 'scale(1)'; }, 200);
    } else {
        panel.classList.add('hidden');
    }
}

function generateGitHubURL(file, line) {
    if (!repo || !file) return null;
    let normalizedFile = file.replace(/\\\\/g, '/');
    if (normalizedFile.includes('/src/')) {
        const srcIndex = normalizedFile.lastIndexOf('/src/');
        normalizedFile = normalizedFile.substring(srcIndex + 1);
    } else if (normalizedFile.startsWith('src/')) {
        normalizedFile = normalizedFile;
    } else {
        const lastSlash = normalizedFile.lastIndexOf('/');
        if (lastSlash !== -1) {
            normalizedFile = normalizedFile.substring(lastSlash + 1);
        }
    }
    return 'https://github.com/' + repo + '/blob/' + branch + '/' + normalizedFile + '#L' + line;
}

function resetLayout() {
    currentLayoutIndex = 0;
    const layout = cy.layout(getLayoutConfig(layoutNames[currentLayoutIndex]));
    layout.run();

    watchNodeMovementAndFixOverlapsWrap();
}

function watchNodeMovementAndFixOverlapsWrap() {
    watchNodeMovementAndFixOverlaps(100, 20);
}

let movementWatcherTimer;

/**
 * ノードの動きを監視して、動きが止まったら重なり修正をする関数
 * @param {number} interval - チェック間隔(ms)
 * @param {number} maxChecks - 最大チェック回数
 */
function watchNodeMovementAndFixOverlaps(interval, maxChecks) {
    let prevPositions = new Map();
    let checks = 0;
    let stableCount = 0;
    const movementThreshold = 1.0; // 動き判定閾値(px)
    const stableThreshold = 3;     // 何回連続で動かないと止まった判定するか

    // 初期ノード位置を記録
    cy.nodes().forEach(node => {
        prevPositions.set(node.id(), {...node.position()});
    });

    if (movementWatcherTimer) {
        clearInterval(movementWatcherTimer);
        movementWatcherTimer = null;
    }

    movementWatcherTimer = setInterval(() => {
        let moving = false;

        cy.nodes().forEach(node => {
            const prevPos = prevPositions.get(node.id());
            const currentPos = node.position();
            if (Math.abs(currentPos.x - prevPos.x) > movementThreshold || Math.abs(currentPos.y - prevPos.y) > movementThreshold) {
                moving = true;
                prevPositions.set(node.id(), {...currentPos});
            }
        });

        if (!moving) {
            stableCount++;
        } else {
            stableCount = 0;
        }

        checks++;

        if (stableCount >= stableThreshold || checks >= maxChecks) {
            clearInterval(movementWatcherTimer);
            movementWatcherTimer = null;
            if (!moving) {
              console.log('ノードの動きが止まった！重なり修正開始 (check' + checks + '回)');
            } else {
              console.log('時間切れ！重なり修正開始');
            }

            resolveNodeOverlaps(100, 0.2, 10);
            cy.fit();
        }
    }, interval);
}

/**
 * ノード同士の重なりを軽減する
 * 反発力ベースで自然に押しのける
 * @param {number} minDistance - ノード間の最小距離(px)
 * @param {number} shiftRatio - 移動の強さ(0~1)
 * @param {number} iterations - 繰り返し回数
 */
function resolveNodeOverlaps(minDistance, shiftRatio, iterations) {
    for (let iter = 0; iter < iterations; iter++) {
        cy.nodes().forEach(node => {
            const pos = node.position();
            
            cy.nodes().forEach(other => {
                if (node.id() === other.id()) return; // 自分自身はスキップ

                const otherPos = other.position();
                const dx = pos.x - otherPos.x;
                const dy = pos.y - otherPos.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < minDistance && dist > 0.0001) {
                    // 反発力の大きさ（距離が近いほど強く押す）
                    const force = (1 - dist / minDistance) * shiftRatio;

                    // 正規化ベクトル（方向だけを表す）
                    const nx = dx / dist;
                    const ny = dy / dist;

                    // お互いを少しずつ押しのける（対称に動かす）
                    node.position({
                        x: pos.x + nx * force * (minDistance / 2),
                        y: pos.y + ny * force * (minDistance / 2)
                    });

                    other.position({
                        x: otherPos.x - nx * force * (minDistance / 2),
                        y: otherPos.y - ny * force * (minDistance / 2)
                    });
                }
            });
        });
    }
}

function switchLayout(button) {
    resetNodeStates();
    currentLayoutIndex = (currentLayoutIndex + 1) % layoutNames.length;
    const layoutName = layoutNames[currentLayoutIndex];
    const layout = cy.layout(getLayoutConfig(layoutName));
    layout.run();
    if (button) button.textContent = 'レイアウト切替 (' + layoutName + ')';

    watchNodeMovementAndFixOverlapsWrap();
}

function resetNodeStates() {
    cy.nodes().unlock();          // すべてのロック解除
    cy.nodes().positions(() => {  // 古い座標をクリア（nullにしておく）
        return null;
    });
}

function fitToContent() {
    cy.fit();
}

let labelsVisible = true;
let calleeLocationFilterEnabled = false;

function toggleNodeLabels() {
    labelsVisible = !labelsVisible;
    cy.style()
        .selector('node')
        .style('label', labelsVisible ? 'data(label)' : '')
        .update();
}

function toggleCalleeLocationFilter() {
    calleeLocationFilterEnabled = !calleeLocationFilterEnabled;
    const button = event.target;
    if (calleeLocationFilterEnabled) {
        cy.nodes('[hasCalleeLocationInfo = false]').style('display', 'none');
        cy.edges('[hasCalleeLocationInfo = false]').style('display', 'none');
        button.textContent = 'Show No-Callee-Location';
        button.style.backgroundColor = '#FF5722';
    } else {
        cy.nodes().style('display', 'element');
        cy.edges().style('display', 'element');
        button.textContent = 'Hide No-Callee-Location';
        button.style.backgroundColor = '#2196F3';
    }
}

cy.ready(function() {
    resetLayout();
});

if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(function(e) {
        window.location.reload();
    });
}

{% endraw %}
```

### generated-docs/callgraph.js
```js
{% raw %}
// callgraph.js
// このファイルは generateHTML.cjs から分離したCytoscape.jsの描画・操作ロジックです。
// 依存: graphData, repo, branch（グローバル変数としてHTML側で宣言されていること）

// HTMLエスケープ関数（グローバルで利用可能に）
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (c) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c];
    });
}

// ダークモード検出
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// ダークモード用のカラーパレット
const colors = {
    light: {
        node: '#2196F3',
        nodeBorder: '#1976D2',
        nodeSelected: '#FF5722',
        nodeSelectedBorder: '#D84315',
        nodeWithLocation: '#4CAF50',
        edge: '#666',
        edgeSelected: '#FF5722',
        edgeWithLocation: '#4CAF50',
        textBackground: 'white'
    },
    dark: {
        node: '#64B5F6',
        nodeBorder: '#42A5F5',
        nodeSelected: '#FF7043',
        nodeSelectedBorder: '#FF5722',
        nodeWithLocation: '#66BB6A',
        edge: '#999',
        edgeSelected: '#FF7043',
        edgeWithLocation: '#66BB6A',
        textBackground: '#1e1e1e'
    }
};

const currentColors = isDarkMode ? colors.dark : colors.light;

const layoutNames = ['breadthfirst', 'concentric', 'cose', 'grid', 'circle'];
let currentLayoutIndex = 0;

const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
        ...graphData.nodes.map(node => ({
            data: {
                id: node.id,
                label: node.label,
                locations: node.locations || [],
                hasLocationInfo: node.hasLocationInfo || false,
                hasCalleeLocationInfo: node.hasCalleeLocationInfo || false,
                calleeFncDef: node.calleeFncDef || false,
            }
        })),
        ...graphData.edges.map(edge => ({
            data: {
                id: edge.id,
                source: edge.source,
                target: edge.target,
                file: edge.file || '',
                line: edge.line || 0,
                column: edge.column || 0,
                location: edge.location || '',
                hasLocationInfo: edge.hasLocationInfo || false,
                hasCalleeLocationInfo: edge.hasCalleeLocationInfo || false
            }
        }))
    ],
    style: [
        { selector: 'node', style: {
            'background-color': currentColors.node,
            'label': 'data(label)',
            'color': isDarkMode ? '#ffffff' : '#333',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '12px',
            'font-weight': 'bold',
            'text-wrap': 'wrap',
            'text-max-width': '100px',
            'width': '70px',
            'height': '70px',
            'border-width': '2px',
            'border-color': currentColors.nodeBorder,
            'text-background-color': currentColors.textBackground,
            'text-background-opacity': 0.8,
            'text-background-padding': '3px'
        }},
        { selector: 'node:selected', style: {
            'background-color': currentColors.nodeSelected,
            'border-color': currentColors.nodeSelectedBorder
        }},
        { selector: 'node[hasLocationInfo = true]', style: {
            'border-width': '3px',
            'border-color': currentColors.nodeWithLocation
        }},
        { selector: 'node[hasCalleeLocationInfo = true]', style: {
            'border-width': '4px',
            'border-color': '#FF9800'
        }},
        { selector: 'node[hasCalleeLocationInfo = false]', style: {
            'border-style': 'dotted',
            'border-width': '2px',
            'opacity': 0.6
        }},
        { selector: 'edge', style: {
            'width': 2,
            'line-color': currentColors.edge,
            'target-arrow-color': currentColors.edge,
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'arrow-scale': 1.2
        }},
        { selector: 'edge:selected', style: {
            'line-color': currentColors.edgeSelected,
            'target-arrow-color': currentColors.edgeSelected,
            'width': 3
        }},
        { selector: 'edge[hasLocationInfo = true]', style: {
            'line-color': currentColors.edgeWithLocation,
            'target-arrow-color': currentColors.edgeWithLocation
        }},
        { selector: 'node[hasLocationInfo = false]', style: {
            'border-style': 'dashed',
            'border-width': '2px',
            'opacity': 0.8
        }},
        { selector: 'edge[hasCalleeLocationInfo = true]', style: {
            'line-color': '#FF9800',
            'target-arrow-color': '#FF9800',
            'width': 3
        }},
        { selector: 'edge[hasLocationInfo = false]', style: {
            'line-style': 'dashed',
            'opacity': 0.7
        }}
    ],
    layout: getLayoutConfig('cose')
});

function getLayoutConfig(name) {
    switch (name) {
        case 'cose':
            return {
                name: 'cose',
                fit: true,          // ←もう一度trueに戻す（座標がズレない）
                padding: 50,        // 余白は控えめ
                animate: true,
                randomize: false,   // ←初期配置を固定して安定させる
                nodeRepulsion: 8000, // ←ほどよい反発（200000は強すぎた）
                idealEdgeLength: 120, // ←適度な長さに戻す
                edgeElasticity: 0.45,
                gravity: 1.2,        // ←少し強めて中央に集める
                numIter: 1000,       // ほどほどに
                componentSpacing: 80,
                nestingFactor: 0.9
            };
        case 'breadthfirst':
            return {
                name: 'breadthfirst', fit: true, padding: 30, directed: true, animate: true, spacingFactor: 1.2
            };
        case 'concentric':
            return {
                name: 'concentric', fit: true, padding: 30, animate: true,
                concentric: function(node) { return node.degree(); },
                levelWidth: function(nodes) { return 2; }
            };
        case 'grid':
            return {
                name: 'grid',
                fit: true,
                padding: 30,
                animate: true,
                avoidOverlap: true,
                spacingFactor: 1.2,
                rows: undefined, // 自動計算
                cols: undefined
            };
        case 'circle':
            return {
                name: 'circle',
                fit: true,
                padding: 30,
                animate: true,
                radius: 200,
                ready: function() {
                    placeCentralNode();
                }
            };
        default:
            return {
                name: 'circle', fit: true, padding: 30, animate: true, radius: 200
            };
    }
}

function placeCentralNode() {
    // エッジ数が一番多いノードを探す
    let maxDegreeNode = cy.nodes().max(function(node) {
        return node.degree(); // degree() = in+outの合計
    }).ele;

    if (maxDegreeNode.nonempty()) {
        // 中央に配置（画面中央座標を取得して移動）
        const centerPos = { x: cy.width() / 2, y: cy.height() / 2 };
        maxDegreeNode.position(centerPos);
        maxDegreeNode.lock(); // レイアウトで動かないよう固定
    }
}

cy.on('tap', 'node', function(evt) {
    const node = evt.target;
    const data = node.data();
    showNodeInfo(data);
});

cy.on('tap', 'edge', function(evt) {
    const edge = evt.target;
    const data = edge.data();
    showEdgeInfo(data);
});

cy.on('tap', function(evt) {
    if (evt.target === cy) {
        hideInfoPanel();
    }
});

function showNodeInfo(data) {
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('info-content');
    let html = '<div class="info-title">Function: ' + data.label + '</div>';
    if (data.hasCalleeLocationInfo && data.calleeFncDef) {
        // calleeの関数定義のソースコードを1行表示
        // html += '<p><strong>✓ This function has source location info</strong></p>'; // コメントアウト理由 : かわりに calleeFncDef を表示しているので
        // html += '<div style="margin-bottom:6px;font-size:13px;color:#888">'; // 備忘、888だと暗い
        html += '<div style="margin-bottom:6px;font-size:13px;color:#EEE">'; // 備忘、EEEだとダークモードならOK、今後はライトモードとダークモードの切り替えに対応予定
        html += '<div class="location-item"><div><small>';
        html += '<pre class="source-line">' + escapeHtml(data.calleeFncDef) + '</pre>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
      } else {
        html += '<p><strong>⚠ This function has NO source location info</strong></p>';
        html += '<p><small>匿名関数、動的関数、または外部ライブラリの関数である可能性があります。</small></p>';
    }
    if (data.hasLocationInfo && data.locations && data.locations.length > 0) {
        html += '<h4>Callers:</h4>';
        data.locations.forEach(loc => {
            const githubURL = generateGitHubURL(loc.file, loc.line);
            html += '<div class="location-item">';
            html += '<div class="location-file">' + loc.file + ':' + loc.line + ':' + loc.column + '</div>';
            html += '<div><small>Type: ' + loc.type + '</small></div>';
            if (loc.sourceLine) {
                html += '<pre class="source-line">' + escapeHtml(loc.sourceLine) + '</pre>';
            }
            if (githubURL) {
                html += '<div><a href="' + githubURL + '" target="_blank" class="location-link">View on GitHub</a></div>';
            }
            html += '</div>';
        });
    } else {
        html += '<p>呼び出し位置情報がありません</p>';
    }
    content.innerHTML = html;
    showInfoPanel();
}

function showEdgeInfo(data) {
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('info-content');
    let html = '<div class="info-title">Call: ' + data.source + ' → ' + data.target + '</div>';
    html += '<div style="margin-bottom:6px;font-size:13px;color:#888">';
    html += '<b>source:</b> <span style="color:#1976D2">' + data.source + '</span> &nbsp; ';
    html += '<b>target:</b> <span style="color:#FF9800">' + data.target + '</span>';
    html += '</div>';
    if (data.hasCalleeLocationInfo) {
        html += '<p><strong>✓ Target function (' + data.target + ') has source location</strong></p>';
    } else {
        html += '<p><strong>⚠ Target function (' + data.target + ') has NO source location</strong></p>';
        html += '<p><small>呼び出し先が匿名関数や外部ライブラリ関数の可能性があります。</small></p>';
    }
    if (data.hasLocationInfo && data.location) {
        html += '<h4>Call Location:</h4>';
        html += '<div class="edge-info">';
        html += '<div class="location-file">' + data.location + '</div>';
        if (data.sourceLine) {
            html += '<pre class="source-line">' + escapeHtml(data.sourceLine) + '</pre>';
        }
        const githubURL = generateGitHubURL(data.file, data.line);
        if (githubURL) {
            html += '<div><a href="' + githubURL + '" target="_blank" class="location-link">View on GitHub</a></div>';
        }
        html += '</div>';
    } else {
        html += '<p>呼び出し位置情報がありません</p>';
        html += '<p><small>この呼び出しは動的に発生するか、CodeQLで検出できない方法で行われている可能性があります。</small></p>';
    }
// HTMLエスケープ関数
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (c) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c];
    });
}
    content.innerHTML = html;
    showInfoPanel();
}

function hideInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.add('hidden');
}

function showInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.remove('hidden');
}

function toggleInfoPanel() {
    const panel = document.getElementById('info-panel');
    const isHidden = panel.classList.contains('hidden');
    if (isHidden) {
        panel.classList.remove('hidden');
        panel.style.transform = 'scale(1.02)';
        setTimeout(() => { panel.style.transform = 'scale(1)'; }, 200);
    } else {
        panel.classList.add('hidden');
    }
}

function generateGitHubURL(file, line) {
    if (!repo || !file) return null;
    let normalizedFile = file.replace(/\\\\/g, '/');
    if (normalizedFile.includes('/src/')) {
        const srcIndex = normalizedFile.lastIndexOf('/src/');
        normalizedFile = normalizedFile.substring(srcIndex + 1);
    } else if (normalizedFile.startsWith('src/')) {
        normalizedFile = normalizedFile;
    } else {
        const lastSlash = normalizedFile.lastIndexOf('/');
        if (lastSlash !== -1) {
            normalizedFile = normalizedFile.substring(lastSlash + 1);
        }
    }
    return 'https://github.com/' + repo + '/blob/' + branch + '/' + normalizedFile + '#L' + line;
}

function resetLayout() {
    currentLayoutIndex = 0;
    const layout = cy.layout(getLayoutConfig(layoutNames[currentLayoutIndex]));
    layout.run();

    watchNodeMovementAndFixOverlapsWrap();
}

function watchNodeMovementAndFixOverlapsWrap() {
    watchNodeMovementAndFixOverlaps(100, 20);
}

let movementWatcherTimer;

/**
 * ノードの動きを監視して、動きが止まったら重なり修正をする関数
 * @param {number} interval - チェック間隔(ms)
 * @param {number} maxChecks - 最大チェック回数
 */
function watchNodeMovementAndFixOverlaps(interval, maxChecks) {
    let prevPositions = new Map();
    let checks = 0;
    let stableCount = 0;
    const movementThreshold = 1.0; // 動き判定閾値(px)
    const stableThreshold = 3;     // 何回連続で動かないと止まった判定するか

    // 初期ノード位置を記録
    cy.nodes().forEach(node => {
        prevPositions.set(node.id(), {...node.position()});
    });

    if (movementWatcherTimer) {
        clearInterval(movementWatcherTimer);
        movementWatcherTimer = null;
    }

    movementWatcherTimer = setInterval(() => {
        let moving = false;

        cy.nodes().forEach(node => {
            const prevPos = prevPositions.get(node.id());
            const currentPos = node.position();
            if (Math.abs(currentPos.x - prevPos.x) > movementThreshold || Math.abs(currentPos.y - prevPos.y) > movementThreshold) {
                moving = true;
                prevPositions.set(node.id(), {...currentPos});
            }
        });

        if (!moving) {
            stableCount++;
        } else {
            stableCount = 0;
        }

        checks++;

        if (stableCount >= stableThreshold || checks >= maxChecks) {
            clearInterval(movementWatcherTimer);
            movementWatcherTimer = null;
            if (!moving) {
              console.log('ノードの動きが止まった！重なり修正開始 (check' + checks + '回)');
            } else {
              console.log('時間切れ！重なり修正開始');
            }

            resolveNodeOverlaps(100, 0.2, 10);
            cy.fit();
        }
    }, interval);
}

/**
 * ノード同士の重なりを軽減する
 * 反発力ベースで自然に押しのける
 * @param {number} minDistance - ノード間の最小距離(px)
 * @param {number} shiftRatio - 移動の強さ(0~1)
 * @param {number} iterations - 繰り返し回数
 */
function resolveNodeOverlaps(minDistance, shiftRatio, iterations) {
    for (let iter = 0; iter < iterations; iter++) {
        cy.nodes().forEach(node => {
            const pos = node.position();
            
            cy.nodes().forEach(other => {
                if (node.id() === other.id()) return; // 自分自身はスキップ

                const otherPos = other.position();
                const dx = pos.x - otherPos.x;
                const dy = pos.y - otherPos.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < minDistance && dist > 0.0001) {
                    // 反発力の大きさ（距離が近いほど強く押す）
                    const force = (1 - dist / minDistance) * shiftRatio;

                    // 正規化ベクトル（方向だけを表す）
                    const nx = dx / dist;
                    const ny = dy / dist;

                    // お互いを少しずつ押しのける（対称に動かす）
                    node.position({
                        x: pos.x + nx * force * (minDistance / 2),
                        y: pos.y + ny * force * (minDistance / 2)
                    });

                    other.position({
                        x: otherPos.x - nx * force * (minDistance / 2),
                        y: otherPos.y - ny * force * (minDistance / 2)
                    });
                }
            });
        });
    }
}

function switchLayout(button) {
    resetNodeStates();
    currentLayoutIndex = (currentLayoutIndex + 1) % layoutNames.length;
    const layoutName = layoutNames[currentLayoutIndex];
    const layout = cy.layout(getLayoutConfig(layoutName));
    layout.run();
    if (button) button.textContent = 'レイアウト切替 (' + layoutName + ')';

    watchNodeMovementAndFixOverlapsWrap();
}

function resetNodeStates() {
    cy.nodes().unlock();          // すべてのロック解除
    cy.nodes().positions(() => {  // 古い座標をクリア（nullにしておく）
        return null;
    });
}

function fitToContent() {
    cy.fit();
}

let labelsVisible = true;
let calleeLocationFilterEnabled = false;

function toggleNodeLabels() {
    labelsVisible = !labelsVisible;
    cy.style()
        .selector('node')
        .style('label', labelsVisible ? 'data(label)' : '')
        .update();
}

function toggleCalleeLocationFilter() {
    calleeLocationFilterEnabled = !calleeLocationFilterEnabled;
    const button = event.target;
    if (calleeLocationFilterEnabled) {
        cy.nodes('[hasCalleeLocationInfo = false]').style('display', 'none');
        cy.edges('[hasCalleeLocationInfo = false]').style('display', 'none');
        button.textContent = 'Show No-Callee-Location';
        button.style.backgroundColor = '#FF5722';
    } else {
        cy.nodes().style('display', 'element');
        cy.edges().style('display', 'element');
        button.textContent = 'Hide No-Callee-Location';
        button.style.backgroundColor = '#2196F3';
    }
}

cy.ready(function() {
    resetLayout();
});

if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(function(e) {
        window.location.reload();
    });
}

{% endraw %}
```

### .github/actions-tmp/issue-notes/11.md
```md
{% raw %}
# issue translate を他projectから使いやすくする #11
[issues #11](https://github.com/cat2151/github-actions/issues/11)

# ブレインストーミング
- 課題、個別dirへの移動が必要。
    - scripts
- 課題、promptをハードコーディングでなく、promptsに切り出す。
    - さらに、呼び出し元ymlから任意のpromptsを指定できるようにする。
- 済、課題、README以外のtranslateも可能にするか検討する
    - 対策、シンプル優先でREADME決め打ちにする
        - 理由、README以外の用途となると、複数ファイルをどうGemini APIにわたすか？等、仕様が爆発的にふくらんでいくリスクがある
        - README以外の用途が明確でないうちは、README決め打ちにするほうがよい
- docs
    - call導入手順を書く

# 状況
- 上記のうち、別dirへの切り分け等は実施済みのはず
- どうする？
    - それをここに可視化する。

{% endraw %}
```

### issue-notes/11.md
```md
{% raw %}
# issue translate を他projectから使いやすくする #11
[issues #11](https://github.com/cat2151/github-actions/issues/11)

# ブレインストーミング
- 課題、個別dirへの移動が必要。
    - scripts
- 課題、promptをハードコーディングでなく、promptsに切り出す。
    - さらに、呼び出し元ymlから任意のpromptsを指定できるようにする。
- 済、課題、README以外のtranslateも可能にするか検討する
    - 対策、シンプル優先でREADME決め打ちにする
        - 理由、README以外の用途となると、複数ファイルをどうGemini APIにわたすか？等、仕様が爆発的にふくらんでいくリスクがある
        - README以外の用途が明確でないうちは、README決め打ちにするほうがよい
- docs
    - call導入手順を書く

# 状況
- 上記のうち、別dirへの切り分け等は実施済みのはず
- どうする？
    - それをここに可視化する。

{% endraw %}
```

### .github/actions-tmp/issue-notes/13.md
```md
{% raw %}
# issue issue-note を他projectから使いやすくする #13
[issues #13](https://github.com/cat2151/github-actions/issues/13)

- docs
    - call導入手順を書く

{% endraw %}
```

### issue-notes/13.md
```md
{% raw %}
# issue issue-note を他projectから使いやすくする #13
[issues #13](https://github.com/cat2151/github-actions/issues/13)

- docs
    - call導入手順を書く

{% endraw %}
```

### .github/actions-tmp/issue-notes/3.md
```md
{% raw %}
# issue GitHub Actions「issue note生成」を共通ワークフロー化する #3
[issues #3](https://github.com/cat2151/github-actions/issues/3)

- 前提
  - userは、translateのworkflowを共通ワークフロー化し、動くようにしたので、共通ワークフロー化の知識がある
  - よって、今回は、promptでplanさせ、そのplanをuserがレビューし、planの改善を指示できるので、ハルシネーションのリスクを下げることができる

- prompt
```
あなたはGitHub Actionsと共通ワークフローのスペシャリストです。
このymlはまだ共通ワークフロー化されず、
呼び出し元からコピーされたままの状態です。
このymlファイル名のまま、
中身を共通ワークフロー化してください。
呼び出し元ymlは別途書きますので気にしないでください。
まずplanしてください
```

- plan 生成結果
```
共通ワークフロー化のためのplanは以下の通りです。

1. 目的
現在の issue-note.yml を「共通ワークフロー」として再設計し、他リポジトリや他ワークフローから workflow_call で呼び出せるようにする。
2. 主な変更点
on: トリガーを workflow_call に変更（直接イベントで起動しない）。
必要な入力（inputs）やシークレット（secrets）を workflow_call セクションで定義。
github.event.issue などのイベント依存部分を、inputs経由で受け取る形に修正。
既存の処理（issueノート生成、コミット、issue body更新）はそのまま活かすが、パラメータ化する。
3. 具体的な修正内容
on: issues: → on: workflow_call: に変更。
inputs で必要な値（例: issue_title, issue_number, issue_body, issue_url など）を受け取る。
スクリプト内の ${{ github.event.issue.xxx }} を ${{ inputs.xxx }} に置換。
github-script ステップも同様にinputsを参照。
必要に応じて secrets も workflow_call で受け取れるようにする。
4. ファイル名・配置
ファイル名はそのまま issue-note.yml。
配置場所は workflows でOK（共通ワークフローとしてもこの場所で良い）。
5. 呼び出し元への影響
呼び出し元ワークフローで uses: <repo>/.github/workflows/issue-note.yml@main のように参照し、inputsを渡す形になる。
このplanで進めます。次に、実際の共通ワークフロー化のためのyml修正案を作成しますか？
```

- userがplanレビューし、OKを出した
- agentに生成結果ymlをレビューさせた、OKとなった
  - userはこのレビューは認知負荷が高いのでskipとする（単純な細かい間違い探し作業になるので、それはagentに任せた）
-  エラー。呼び出し元ymlのエラーがあり修正。共通ワークフローのエラー指摘があり、共通ワークフロー側の修正が必要となった
```
原因の分析：

呼び出し元（tonejs-mml-to-jsonのissue-note.yml）は、reusable workflow（cat2151/github-actions/.github/workflows/issue-note.yml@main）をusesで呼び出し、inputsをwithで渡しています。
共通ワークフロー（reusable workflow）は inputs を workflow_call で受け取り、各ステップで ${{ inputs.xxx }} で参照しています。
しかし、エラーが発生したのは actions/github-script@v7 の script 内です。
エラーの本質的な原因：

actions/github-script の script: で ${{ inputs.issue_number }} のような式を直接 JavaScript テンプレートリテラル内で使っていますが、これはサポートされていません。
script: の中は JavaScript であり、YAMLの ${{ ... }} は展開されません（または意図通りに展開されません）。
そのため、inputs 変数は script 内の JavaScript で未定義となり、ReferenceError になります。
正しい書き方：

actions/github-script の script: でワークフローの inputs を使いたい場合は、with: で input を environment 変数や script の引数として渡し、JavaScript で process.env から取得するか、github-script の input 機能を使う必要があります。
例（修正版）：

このように、inputs の値を env で渡し、script 内では process.env で参照してください。

まとめ：

actions/github-script の script 内で ${{ inputs.xxx }} を直接使うと ReferenceError になる
env: で値を渡し、process.env で参照するのが正しい
修正が必要です。修正版のワークフローが必要な場合はお知らせください。
```

- test green
- closeとする

{% endraw %}
```

### issue-notes/3.md
```md
{% raw %}
# issue GitHub Actions「issue note生成」を共通ワークフロー化する #3
[issues #3](https://github.com/cat2151/github-actions/issues/3)

- 前提
  - userは、translateのworkflowを共通ワークフロー化し、動くようにしたので、共通ワークフロー化の知識がある
  - よって、今回は、promptでplanさせ、そのplanをuserがレビューし、planの改善を指示できるので、ハルシネーションのリスクを下げることができる

- prompt
```
あなたはGitHub Actionsと共通ワークフローのスペシャリストです。
このymlはまだ共通ワークフロー化されず、
呼び出し元からコピーされたままの状態です。
このymlファイル名のまま、
中身を共通ワークフロー化してください。
呼び出し元ymlは別途書きますので気にしないでください。
まずplanしてください
```

- plan 生成結果
```
共通ワークフロー化のためのplanは以下の通りです。

1. 目的
現在の issue-note.yml を「共通ワークフロー」として再設計し、他リポジトリや他ワークフローから workflow_call で呼び出せるようにする。
2. 主な変更点
on: トリガーを workflow_call に変更（直接イベントで起動しない）。
必要な入力（inputs）やシークレット（secrets）を workflow_call セクションで定義。
github.event.issue などのイベント依存部分を、inputs経由で受け取る形に修正。
既存の処理（issueノート生成、コミット、issue body更新）はそのまま活かすが、パラメータ化する。
3. 具体的な修正内容
on: issues: → on: workflow_call: に変更。
inputs で必要な値（例: issue_title, issue_number, issue_body, issue_url など）を受け取る。
スクリプト内の ${{ github.event.issue.xxx }} を ${{ inputs.xxx }} に置換。
github-script ステップも同様にinputsを参照。
必要に応じて secrets も workflow_call で受け取れるようにする。
4. ファイル名・配置
ファイル名はそのまま issue-note.yml。
配置場所は workflows でOK（共通ワークフローとしてもこの場所で良い）。
5. 呼び出し元への影響
呼び出し元ワークフローで uses: <repo>/.github/workflows/issue-note.yml@main のように参照し、inputsを渡す形になる。
このplanで進めます。次に、実際の共通ワークフロー化のためのyml修正案を作成しますか？
```

- userがplanレビューし、OKを出した
- agentに生成結果ymlをレビューさせた、OKとなった
  - userはこのレビューは認知負荷が高いのでskipとする（単純な細かい間違い探し作業になるので、それはagentに任せた）
-  エラー。呼び出し元ymlのエラーがあり修正。共通ワークフローのエラー指摘があり、共通ワークフロー側の修正が必要となった
```
原因の分析：

呼び出し元（tonejs-mml-to-jsonのissue-note.yml）は、reusable workflow（cat2151/github-actions/.github/workflows/issue-note.yml@main）をusesで呼び出し、inputsをwithで渡しています。
共通ワークフロー（reusable workflow）は inputs を workflow_call で受け取り、各ステップで ${{ inputs.xxx }} で参照しています。
しかし、エラーが発生したのは actions/github-script@v7 の script 内です。
エラーの本質的な原因：

actions/github-script の script: で ${{ inputs.issue_number }} のような式を直接 JavaScript テンプレートリテラル内で使っていますが、これはサポートされていません。
script: の中は JavaScript であり、YAMLの ${{ ... }} は展開されません（または意図通りに展開されません）。
そのため、inputs 変数は script 内の JavaScript で未定義となり、ReferenceError になります。
正しい書き方：

actions/github-script の script: でワークフローの inputs を使いたい場合は、with: で input を environment 変数や script の引数として渡し、JavaScript で process.env から取得するか、github-script の input 機能を使う必要があります。
例（修正版）：

このように、inputs の値を env で渡し、script 内では process.env で参照してください。

まとめ：

actions/github-script の script 内で ${{ inputs.xxx }} を直接使うと ReferenceError になる
env: で値を渡し、process.env で参照するのが正しい
修正が必要です。修正版のワークフローが必要な場合はお知らせください。
```

- test green
- closeとする

{% endraw %}
```

### .github/actions-tmp/issue-notes/8.md
```md
{% raw %}
# issue 関数コールグラフhtmlビジュアライズ生成の対象ソースファイルを、呼び出し元ymlで指定できるようにする #8
[issues #8](https://github.com/cat2151/github-actions/issues/8)

# これまでの課題
- 以下が決め打ちになっていた
```
  const allowedFiles = [
    'src/main.js',
    'src/mml2json.js',
    'src/play.js'
  ];
```

# 対策
- 呼び出し元ymlで指定できるようにする

# agent
- agentにやらせることができれば楽なので、初手agentを試した
- 失敗
    - ハルシネーションしてscriptを大量破壊した
- 分析
    - 修正対象scriptはagentが生成したもの
    - 低品質な生成結果でありソースが巨大
    - ハルシネーションで破壊されやすいソース
    - AIの生成したソースは、必ずしもAIフレンドリーではない

# 人力リファクタリング
- 低品質コードを、最低限agentが扱えて、ハルシネーションによる大量破壊を防止できる内容、にする
- 手短にやる
    - そもそもビジュアライズは、agentに雑に指示してやらせたもので、
    - 今後別のビジュアライザを選ぶ可能性も高い
    - 今ここで手間をかけすぎてコンコルド効果（サンクコストバイアス）を増やすのは、project群をトータルで俯瞰して見たとき、損
- 対象
    - allowedFiles のあるソース
        - callgraph-utils.cjs
            - たかだか300行未満のソースである
            - この程度でハルシネーションされるのは予想外
            - やむなし、リファクタリングでソース分割を進める

# agentに修正させる
## prompt
```
allowedFilesを引数で受け取るようにしたいです。
ないならエラー。
最終的に呼び出し元すべてに波及して修正したいです。

呼び出し元をたどってエントリポイントも見つけて、
エントリポイントにおいては、
引数で受け取ったjsonファイル名 allowedFiles.js から
jsonファイル allowedFiles.jsonの内容をreadして
変数 allowedFilesに格納、
後続処理に引き渡す、としたいです。

まずplanしてください。
planにおいては、修正対象のソースファイル名と関数名を、呼び出し元を遡ってすべて特定し、listしてください。
```

# 修正が順調にできた
- コマンドライン引数から受け取る作りになっていなかったので、そこだけ指示して修正させた
- yml側は人力で修正した

# 他のリポジトリから呼び出した場合にバグらないよう修正する
- 気付いた
    - 共通ワークフローとして他のリポジトリから使った場合はバグるはず。
        - ymlから、共通ワークフロー側リポジトリのcheckoutが漏れているので。
- 他のyml同様に修正する
- あわせて全体にymlをリファクタリングし、修正しやすくし、今後のyml読み書きの学びにしやすくする

# local WSL + act : test green

# closeとする
- もし生成されたhtmlがNGの場合は、別issueとするつもり

{% endraw %}
```

### issue-notes/8.md
```md
{% raw %}
# issue 関数コールグラフhtmlビジュアライズ生成の対象ソースファイルを、呼び出し元ymlで指定できるようにする #8
[issues #8](https://github.com/cat2151/github-actions/issues/8)

# これまでの課題
- 以下が決め打ちになっていた
```
  const allowedFiles = [
    'src/main.js',
    'src/mml2json.js',
    'src/play.js'
  ];
```

# 対策
- 呼び出し元ymlで指定できるようにする

# agent
- agentにやらせることができれば楽なので、初手agentを試した
- 失敗
    - ハルシネーションしてscriptを大量破壊した
- 分析
    - 修正対象scriptはagentが生成したもの
    - 低品質な生成結果でありソースが巨大
    - ハルシネーションで破壊されやすいソース
    - AIの生成したソースは、必ずしもAIフレンドリーではない

# 人力リファクタリング
- 低品質コードを、最低限agentが扱えて、ハルシネーションによる大量破壊を防止できる内容、にする
- 手短にやる
    - そもそもビジュアライズは、agentに雑に指示してやらせたもので、
    - 今後別のビジュアライザを選ぶ可能性も高い
    - 今ここで手間をかけすぎてコンコルド効果（サンクコストバイアス）を増やすのは、project群をトータルで俯瞰して見たとき、損
- 対象
    - allowedFiles のあるソース
        - callgraph-utils.cjs
            - たかだか300行未満のソースである
            - この程度でハルシネーションされるのは予想外
            - やむなし、リファクタリングでソース分割を進める

# agentに修正させる
## prompt
```
allowedFilesを引数で受け取るようにしたいです。
ないならエラー。
最終的に呼び出し元すべてに波及して修正したいです。

呼び出し元をたどってエントリポイントも見つけて、
エントリポイントにおいては、
引数で受け取ったjsonファイル名 allowedFiles.js から
jsonファイル allowedFiles.jsonの内容をreadして
変数 allowedFilesに格納、
後続処理に引き渡す、としたいです。

まずplanしてください。
planにおいては、修正対象のソースファイル名と関数名を、呼び出し元を遡ってすべて特定し、listしてください。
```

# 修正が順調にできた
- コマンドライン引数から受け取る作りになっていなかったので、そこだけ指示して修正させた
- yml側は人力で修正した

# 他のリポジトリから呼び出した場合にバグらないよう修正する
- 気付いた
    - 共通ワークフローとして他のリポジトリから使った場合はバグるはず。
        - ymlから、共通ワークフロー側リポジトリのcheckoutが漏れているので。
- 他のyml同様に修正する
- あわせて全体にymlをリファクタリングし、修正しやすくし、今後のyml読み書きの学びにしやすくする

# local WSL + act : test green

# closeとする
- もし生成されたhtmlがNGの場合は、別issueとするつもり

{% endraw %}
```

## 最近の変更（過去7日間）
### コミット履歴:
20fdf8e Update callgraph.html [auto]
d9f3f08 Refactor large file detection script with enhancements
e0a4002 Update large file detection configuration
f023235 Refactor check_large_files.py for clarity and efficiency
18e0b14 Update large file detection configuration
276193a Merge pull request #47 from cat2151/copilot/fix-large-files-check
7721c73 Refactor find_large_files to compute scan stats inline instead of storing all scanned files
a70da7b check large files
8e5a651 Add GITHUB_STEP_SUMMARY scan statistics for check-large-files
979b5b8 Initial plan

### 変更されたファイル:
.github/workflows/call-check-large-files.yml
.github_automation/check-large-files/check-large-files.toml.default
.github_automation/check-large-files/scripts/check_large_files.py
generated-docs/callgraph.html


---
Generated at: 2026-03-02 07:05:21 JST

Last updated: 2025-09-08

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
以下の開発状況情報を参考にして要約を生成してください：

## プロジェクトのファイル一覧
- .git/FETCH_HEAD
- .git/HEAD
- .git/config
- .git/config.worktree
- .git/description
- .git/hooks/applypatch-msg.sample
- .git/hooks/commit-msg.sample
- .git/hooks/fsmonitor-watchman.sample
- .git/hooks/post-update.sample
- .git/hooks/pre-applypatch.sample
- .git/hooks/pre-commit.sample
- .git/hooks/pre-merge-commit.sample
- .git/hooks/pre-push.sample
- .git/hooks/pre-rebase.sample
- .git/hooks/pre-receive.sample
- .git/hooks/prepare-commit-msg.sample
- .git/hooks/push-to-checkout.sample
- .git/hooks/sendemail-validate.sample
- .git/hooks/update.sample
- .git/index
- .git/info/exclude
- .git/logs/HEAD
- .git/logs/refs/heads/main
- .git/logs/refs/remotes/origin/main
- .git/objects/pack/pack-d9dc01d66cd6ffb9cfdb63bb11d471fa3519d651.idx
- .git/objects/pack/pack-d9dc01d66cd6ffb9cfdb63bb11d471fa3519d651.pack
- .git/objects/pack/pack-d9dc01d66cd6ffb9cfdb63bb11d471fa3519d651.rev
- .git/refs/heads/main
- .git/refs/remotes/origin/main
- .github/workflows/call-callgraph.yml
- .github/workflows/call-daily-project-summary.yml
- .github/workflows/call-issue-note.yml
- .github/workflows/call-translate-readme.yml
- .github/workflows/callgraph.yml
- .github/workflows/daily-project-summary.yml
- .github/workflows/issue-note.yml
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
- .github_automation/callgraph/scripts/check-commits.cjs
- .github_automation/callgraph/scripts/check-node-version.cjs
- .github_automation/callgraph/scripts/common-utils.cjs
- .github_automation/callgraph/scripts/copy-commit-results.cjs
- .github_automation/callgraph/scripts/extract-sarif-info.cjs
- .github_automation/callgraph/scripts/find-process-results.cjs
- .github_automation/callgraph/scripts/generate-html-graph.cjs
- .github_automation/callgraph/scripts/generateHTML.cjs
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
- .github_automation/project_summary/scripts/overview/TechStackAnalyzer.cjs
- .github_automation/project_summary/scripts/shared/BaseGenerator.cjs
- .github_automation/project_summary/scripts/shared/FileSystemUtils.cjs
- .github_automation/translate/docs/TRANSLATION_SETUP.md
- .github_automation/translate/scripts/translate-readme.cjs
- .gitignore
- .vscode/settings.json
- LICENSE
- README.ja.md
- README.md
- generated-docs/callgraph.html
- generated-docs/callgraph.js
- generated-docs/development-status-generated-prompt.md
- generated-docs/development-status.md
- generated-docs/project-overview.md
- generated-docs/style.css
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
- issue-notes/3.md
- issue-notes/4.md
- issue-notes/7.md
- issue-notes/8.md
- issue-notes/9.md
- node_modules/.package-lock.json
- node_modules/@google/generative-ai/LICENSE
- node_modules/@google/generative-ai/README.md
- node_modules/@google/generative-ai/dist/generative-ai.d.ts
- node_modules/@google/generative-ai/dist/index.js
- node_modules/@google/generative-ai/dist/index.js.map
- node_modules/@google/generative-ai/dist/index.mjs
- node_modules/@google/generative-ai/dist/index.mjs.map
- node_modules/@google/generative-ai/dist/scripts/check-format.d.ts
- node_modules/@google/generative-ai/dist/scripts/format-patterns.d.ts
- node_modules/@google/generative-ai/dist/scripts/license.d.ts
- node_modules/@google/generative-ai/dist/scripts/run-format.d.ts
- node_modules/@google/generative-ai/dist/server/index.js
- node_modules/@google/generative-ai/dist/server/index.js.map
- node_modules/@google/generative-ai/dist/server/index.mjs
- node_modules/@google/generative-ai/dist/server/index.mjs.map
- node_modules/@google/generative-ai/dist/server/scripts/check-format.d.ts
- node_modules/@google/generative-ai/dist/server/scripts/format-patterns.d.ts
- node_modules/@google/generative-ai/dist/server/scripts/license.d.ts
- node_modules/@google/generative-ai/dist/server/scripts/run-format.d.ts
- node_modules/@google/generative-ai/dist/server/server.d.ts
- node_modules/@google/generative-ai/dist/server/src/errors.d.ts
- node_modules/@google/generative-ai/dist/server/src/gen-ai.d.ts
- node_modules/@google/generative-ai/dist/server/src/index.d.ts
- node_modules/@google/generative-ai/dist/server/src/methods/chat-session-helpers.d.ts
- node_modules/@google/generative-ai/dist/server/src/methods/chat-session.d.ts
- node_modules/@google/generative-ai/dist/server/src/methods/count-tokens.d.ts
- node_modules/@google/generative-ai/dist/server/src/methods/embed-content.d.ts
- node_modules/@google/generative-ai/dist/server/src/methods/generate-content.d.ts
- node_modules/@google/generative-ai/dist/server/src/models/generative-model.d.ts
- node_modules/@google/generative-ai/dist/server/src/requests/request-helpers.d.ts
- node_modules/@google/generative-ai/dist/server/src/requests/request.d.ts
- node_modules/@google/generative-ai/dist/server/src/requests/response-helpers.d.ts
- node_modules/@google/generative-ai/dist/server/src/requests/stream-reader.d.ts
- node_modules/@google/generative-ai/dist/server/src/server/cache-manager.d.ts
- node_modules/@google/generative-ai/dist/server/src/server/constants.d.ts
- node_modules/@google/generative-ai/dist/server/src/server/file-manager.d.ts
- node_modules/@google/generative-ai/dist/server/src/server/index.d.ts
- node_modules/@google/generative-ai/dist/server/src/server/request.d.ts
- node_modules/@google/generative-ai/dist/server/types/content.d.ts
- node_modules/@google/generative-ai/dist/server/types/enums.d.ts
- node_modules/@google/generative-ai/dist/server/types/function-calling.d.ts
- node_modules/@google/generative-ai/dist/server/types/index.d.ts
- node_modules/@google/generative-ai/dist/server/types/requests.d.ts
- node_modules/@google/generative-ai/dist/server/types/responses.d.ts
- node_modules/@google/generative-ai/dist/server/types/search-grounding.d.ts
- node_modules/@google/generative-ai/dist/server/types/server/caching.d.ts
- node_modules/@google/generative-ai/dist/server/types/server/files.d.ts
- node_modules/@google/generative-ai/dist/server/types/server/index.d.ts
- node_modules/@google/generative-ai/dist/server/types/server/shared.d.ts
- node_modules/@google/generative-ai/dist/src/errors.d.ts
- node_modules/@google/generative-ai/dist/src/gen-ai.d.ts
- node_modules/@google/generative-ai/dist/src/index.d.ts
- node_modules/@google/generative-ai/dist/src/methods/chat-session-helpers.d.ts
- node_modules/@google/generative-ai/dist/src/methods/chat-session.d.ts
- node_modules/@google/generative-ai/dist/src/methods/count-tokens.d.ts
- node_modules/@google/generative-ai/dist/src/methods/embed-content.d.ts
- node_modules/@google/generative-ai/dist/src/methods/generate-content.d.ts
- node_modules/@google/generative-ai/dist/src/models/generative-model.d.ts
- node_modules/@google/generative-ai/dist/src/requests/request-helpers.d.ts
- node_modules/@google/generative-ai/dist/src/requests/request.d.ts
- node_modules/@google/generative-ai/dist/src/requests/response-helpers.d.ts
- node_modules/@google/generative-ai/dist/src/requests/stream-reader.d.ts
- node_modules/@google/generative-ai/dist/src/server/cache-manager.d.ts
- node_modules/@google/generative-ai/dist/src/server/constants.d.ts
- node_modules/@google/generative-ai/dist/src/server/file-manager.d.ts
- node_modules/@google/generative-ai/dist/src/server/index.d.ts
- node_modules/@google/generative-ai/dist/src/server/request.d.ts
- node_modules/@google/generative-ai/dist/tsdoc-metadata.json
- node_modules/@google/generative-ai/dist/types/content.d.ts
- node_modules/@google/generative-ai/dist/types/enums.d.ts
- node_modules/@google/generative-ai/dist/types/function-calling.d.ts
- node_modules/@google/generative-ai/dist/types/index.d.ts
- node_modules/@google/generative-ai/dist/types/requests.d.ts
- node_modules/@google/generative-ai/dist/types/responses.d.ts
- node_modules/@google/generative-ai/dist/types/search-grounding.d.ts
- node_modules/@google/generative-ai/dist/types/server/caching.d.ts
- node_modules/@google/generative-ai/dist/types/server/files.d.ts
- node_modules/@google/generative-ai/dist/types/server/index.d.ts
- node_modules/@google/generative-ai/dist/types/server/shared.d.ts
- node_modules/@google/generative-ai/package.json
- node_modules/@google/generative-ai/server/package.json
- node_modules/@octokit/auth-token/LICENSE
- node_modules/@octokit/auth-token/README.md
- node_modules/@octokit/auth-token/dist-bundle/index.js
- node_modules/@octokit/auth-token/dist-bundle/index.js.map
- node_modules/@octokit/auth-token/dist-src/auth.js
- node_modules/@octokit/auth-token/dist-src/hook.js
- node_modules/@octokit/auth-token/dist-src/index.js
- node_modules/@octokit/auth-token/dist-src/is-jwt.js
- node_modules/@octokit/auth-token/dist-src/with-authorization-prefix.js
- node_modules/@octokit/auth-token/dist-types/auth.d.ts
- node_modules/@octokit/auth-token/dist-types/hook.d.ts
- node_modules/@octokit/auth-token/dist-types/index.d.ts
- node_modules/@octokit/auth-token/dist-types/is-jwt.d.ts
- node_modules/@octokit/auth-token/dist-types/types.d.ts
- node_modules/@octokit/auth-token/dist-types/with-authorization-prefix.d.ts
- node_modules/@octokit/auth-token/package.json
- node_modules/@octokit/core/LICENSE
- node_modules/@octokit/core/README.md
- node_modules/@octokit/core/dist-src/index.js
- node_modules/@octokit/core/dist-src/version.js
- node_modules/@octokit/core/dist-types/index.d.ts
- node_modules/@octokit/core/dist-types/types.d.ts
- node_modules/@octokit/core/dist-types/version.d.ts
- node_modules/@octokit/core/package.json
- node_modules/@octokit/endpoint/LICENSE
- node_modules/@octokit/endpoint/README.md
- node_modules/@octokit/endpoint/dist-bundle/index.js
- node_modules/@octokit/endpoint/dist-bundle/index.js.map
- node_modules/@octokit/endpoint/dist-src/defaults.js
- node_modules/@octokit/endpoint/dist-src/endpoint-with-defaults.js
- node_modules/@octokit/endpoint/dist-src/index.js
- node_modules/@octokit/endpoint/dist-src/merge.js
- node_modules/@octokit/endpoint/dist-src/parse.js
- node_modules/@octokit/endpoint/dist-src/util/add-query-parameters.js
- node_modules/@octokit/endpoint/dist-src/util/extract-url-variable-names.js
- node_modules/@octokit/endpoint/dist-src/util/is-plain-object.js
- node_modules/@octokit/endpoint/dist-src/util/lowercase-keys.js
- node_modules/@octokit/endpoint/dist-src/util/merge-deep.js
- node_modules/@octokit/endpoint/dist-src/util/omit.js
- node_modules/@octokit/endpoint/dist-src/util/remove-undefined-properties.js
- node_modules/@octokit/endpoint/dist-src/util/url-template.js
- node_modules/@octokit/endpoint/dist-src/version.js
- node_modules/@octokit/endpoint/dist-src/with-defaults.js
- node_modules/@octokit/endpoint/dist-types/defaults.d.ts
- node_modules/@octokit/endpoint/dist-types/endpoint-with-defaults.d.ts
- node_modules/@octokit/endpoint/dist-types/index.d.ts
- node_modules/@octokit/endpoint/dist-types/merge.d.ts
- node_modules/@octokit/endpoint/dist-types/parse.d.ts
- node_modules/@octokit/endpoint/dist-types/util/add-query-parameters.d.ts
- node_modules/@octokit/endpoint/dist-types/util/extract-url-variable-names.d.ts
- node_modules/@octokit/endpoint/dist-types/util/is-plain-object.d.ts
- node_modules/@octokit/endpoint/dist-types/util/lowercase-keys.d.ts
- node_modules/@octokit/endpoint/dist-types/util/merge-deep.d.ts
- node_modules/@octokit/endpoint/dist-types/util/omit.d.ts
- node_modules/@octokit/endpoint/dist-types/util/remove-undefined-properties.d.ts
- node_modules/@octokit/endpoint/dist-types/util/url-template.d.ts
- node_modules/@octokit/endpoint/dist-types/version.d.ts
- node_modules/@octokit/endpoint/dist-types/with-defaults.d.ts
- node_modules/@octokit/endpoint/package.json
- node_modules/@octokit/graphql/LICENSE
- node_modules/@octokit/graphql/README.md
- node_modules/@octokit/graphql/dist-bundle/index.js
- node_modules/@octokit/graphql/dist-bundle/index.js.map
- node_modules/@octokit/graphql/dist-src/error.js
- node_modules/@octokit/graphql/dist-src/graphql.js
- node_modules/@octokit/graphql/dist-src/index.js
- node_modules/@octokit/graphql/dist-src/version.js
- node_modules/@octokit/graphql/dist-src/with-defaults.js
- node_modules/@octokit/graphql/dist-types/error.d.ts
- node_modules/@octokit/graphql/dist-types/graphql.d.ts
- node_modules/@octokit/graphql/dist-types/index.d.ts
- node_modules/@octokit/graphql/dist-types/types.d.ts
- node_modules/@octokit/graphql/dist-types/version.d.ts
- node_modules/@octokit/graphql/dist-types/with-defaults.d.ts
- node_modules/@octokit/graphql/package.json
- node_modules/@octokit/openapi-types/LICENSE
- node_modules/@octokit/openapi-types/README.md
- node_modules/@octokit/openapi-types/package.json
- node_modules/@octokit/openapi-types/types.d.ts
- node_modules/@octokit/plugin-paginate-rest/LICENSE
- node_modules/@octokit/plugin-paginate-rest/README.md
- node_modules/@octokit/plugin-paginate-rest/dist-bundle/index.js
- node_modules/@octokit/plugin-paginate-rest/dist-bundle/index.js.map
- node_modules/@octokit/plugin-paginate-rest/dist-src/compose-paginate.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/generated/paginating-endpoints.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/index.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/iterator.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/normalize-paginated-list-response.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/paginate.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/paginating-endpoints.js
- node_modules/@octokit/plugin-paginate-rest/dist-src/version.js
- node_modules/@octokit/plugin-paginate-rest/dist-types/compose-paginate.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/generated/paginating-endpoints.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/index.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/iterator.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/normalize-paginated-list-response.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/paginate.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/paginating-endpoints.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/types.d.ts
- node_modules/@octokit/plugin-paginate-rest/dist-types/version.d.ts
- node_modules/@octokit/plugin-paginate-rest/package.json
- node_modules/@octokit/plugin-request-log/LICENSE
- node_modules/@octokit/plugin-request-log/README.md
- node_modules/@octokit/plugin-request-log/dist-src/index.js
- node_modules/@octokit/plugin-request-log/dist-src/version.js
- node_modules/@octokit/plugin-request-log/dist-types/index.d.ts
- node_modules/@octokit/plugin-request-log/dist-types/version.d.ts
- node_modules/@octokit/plugin-request-log/package.json
- node_modules/@octokit/plugin-rest-endpoint-methods/LICENSE
- node_modules/@octokit/plugin-rest-endpoint-methods/README.md
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/endpoints-to-methods.js
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/endpoints-to-methods.js.map
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/generated/endpoints.js
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/generated/endpoints.js.map
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/index.js
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/index.js.map
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/version.js
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/version.js.map
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/endpoints-to-methods.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/generated/endpoints.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/generated/method-types.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/generated/parameters-and-response-types.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/index.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/types.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/version.d.ts
- node_modules/@octokit/plugin-rest-endpoint-methods/package.json
- node_modules/@octokit/request/LICENSE
- node_modules/@octokit/request/README.md
- node_modules/@octokit/request/dist-bundle/index.js
- node_modules/@octokit/request/dist-bundle/index.js.map
- node_modules/@octokit/request/dist-src/defaults.js
- node_modules/@octokit/request/dist-src/fetch-wrapper.js
- node_modules/@octokit/request/dist-src/index.js
- node_modules/@octokit/request/dist-src/is-plain-object.js
- node_modules/@octokit/request/dist-src/version.js
- node_modules/@octokit/request/dist-src/with-defaults.js
- node_modules/@octokit/request/dist-types/defaults.d.ts
- node_modules/@octokit/request/dist-types/fetch-wrapper.d.ts
- node_modules/@octokit/request/dist-types/index.d.ts
- node_modules/@octokit/request/dist-types/is-plain-object.d.ts
- node_modules/@octokit/request/dist-types/version.d.ts
- node_modules/@octokit/request/dist-types/with-defaults.d.ts
- node_modules/@octokit/request/package.json
- node_modules/@octokit/request-error/LICENSE
- node_modules/@octokit/request-error/README.md
- node_modules/@octokit/request-error/dist-src/index.js
- node_modules/@octokit/request-error/dist-types/index.d.ts
- node_modules/@octokit/request-error/dist-types/types.d.ts
- node_modules/@octokit/request-error/package.json
- node_modules/@octokit/rest/LICENSE
- node_modules/@octokit/rest/README.md
- node_modules/@octokit/rest/dist-src/index.js
- node_modules/@octokit/rest/dist-src/index.js.map
- node_modules/@octokit/rest/dist-src/version.js
- node_modules/@octokit/rest/dist-src/version.js.map
- node_modules/@octokit/rest/dist-types/index.d.ts
- node_modules/@octokit/rest/dist-types/version.d.ts
- node_modules/@octokit/rest/package.json
- node_modules/@octokit/types/LICENSE
- node_modules/@octokit/types/README.md
- node_modules/@octokit/types/dist-types/AuthInterface.d.ts
- node_modules/@octokit/types/dist-types/EndpointDefaults.d.ts
- node_modules/@octokit/types/dist-types/EndpointInterface.d.ts
- node_modules/@octokit/types/dist-types/EndpointOptions.d.ts
- node_modules/@octokit/types/dist-types/Fetch.d.ts
- node_modules/@octokit/types/dist-types/GetResponseTypeFromEndpointMethod.d.ts
- node_modules/@octokit/types/dist-types/OctokitResponse.d.ts
- node_modules/@octokit/types/dist-types/RequestError.d.ts
- node_modules/@octokit/types/dist-types/RequestHeaders.d.ts
- node_modules/@octokit/types/dist-types/RequestInterface.d.ts
- node_modules/@octokit/types/dist-types/RequestMethod.d.ts
- node_modules/@octokit/types/dist-types/RequestOptions.d.ts
- node_modules/@octokit/types/dist-types/RequestParameters.d.ts
- node_modules/@octokit/types/dist-types/RequestRequestOptions.d.ts
- node_modules/@octokit/types/dist-types/ResponseHeaders.d.ts
- node_modules/@octokit/types/dist-types/Route.d.ts
- node_modules/@octokit/types/dist-types/StrategyInterface.d.ts
- node_modules/@octokit/types/dist-types/Url.d.ts
- node_modules/@octokit/types/dist-types/VERSION.d.ts
- node_modules/@octokit/types/dist-types/generated/Endpoints.d.ts
- node_modules/@octokit/types/dist-types/index.d.ts
- node_modules/@octokit/types/package.json
- node_modules/before-after-hook/LICENSE
- node_modules/before-after-hook/README.md
- node_modules/before-after-hook/index.d.ts
- node_modules/before-after-hook/index.js
- node_modules/before-after-hook/lib/add.js
- node_modules/before-after-hook/lib/register.js
- node_modules/before-after-hook/lib/remove.js
- node_modules/before-after-hook/package.json
- node_modules/fast-content-type-parse/.gitattributes
- node_modules/fast-content-type-parse/.github/.stale.yml
- node_modules/fast-content-type-parse/.github/dependabot.yml
- node_modules/fast-content-type-parse/.github/tests_checker.yml
- node_modules/fast-content-type-parse/.github/workflows/ci.yml
- node_modules/fast-content-type-parse/.github/workflows/package-manager-ci.yml
- node_modules/fast-content-type-parse/LICENSE
- node_modules/fast-content-type-parse/README.md
- node_modules/fast-content-type-parse/benchmarks/simple-ows.js
- node_modules/fast-content-type-parse/benchmarks/simple.js
- node_modules/fast-content-type-parse/benchmarks/suite.js
- node_modules/fast-content-type-parse/benchmarks/with-param-quoted.js
- node_modules/fast-content-type-parse/benchmarks/with-param.js
- node_modules/fast-content-type-parse/eslint.config.js
- node_modules/fast-content-type-parse/index.js
- node_modules/fast-content-type-parse/package.json
- node_modules/fast-content-type-parse/test/index.test.js
- node_modules/fast-content-type-parse/types/.gitkeep
- node_modules/fast-content-type-parse/types/index.d.ts
- node_modules/fast-content-type-parse/types/index.test-d.ts
- node_modules/universal-user-agent/.github/workflows/release.yml
- node_modules/universal-user-agent/.github/workflows/test.yml
- node_modules/universal-user-agent/.github/workflows/update-prettier.yml
- node_modules/universal-user-agent/CODE_OF_CONDUCT.md
- node_modules/universal-user-agent/LICENSE.md
- node_modules/universal-user-agent/README.md
- node_modules/universal-user-agent/SECURITY.md
- node_modules/universal-user-agent/index.d.ts
- node_modules/universal-user-agent/index.js
- node_modules/universal-user-agent/index.test-d.ts
- node_modules/universal-user-agent/index.test.js
- node_modules/universal-user-agent/package.json
- package-lock.json
- package.json
- src/main.js

## 現在のオープンIssues
## [Issue #24](../issue-notes/24.md): Geminiが503で落ちたのでretryを実装する
[issue-notes/24.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/24.md)

...
ラベル: 
--- issue-notes/24.md の内容 ---

```markdown
# issue Geminiが503で落ちたのでretryを実装する #24
[issues #24](https://github.com/cat2151/github-actions/issues/24)

# 何が困るの？
- 朝起きて、development statusがgenerateされてないのは困る
    - それをタスク実施のヒントにしているので
    - 毎朝generatedな状態を維持したい

# 方法
- retryを実装する
    - 現在は `this.model.generateContent(developmentPrompt);`
    - 実装後は `this.generateContent(developmentPrompt);`
    - BaseGenerator 側に、
        - generateContent関数を実装する
            - そこで、
                - `this.model.generateContent(developmentPrompt);` する
                - 503のとき、
                    - retryあり
                    - Exponential Backoff


```

## [Issue #21](../issue-notes/21.md): project-summary の development-status 生成時、project-overviewが生成済みのproject-overview.mdもpromptに添付、を試す
[issue-notes/21.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/21.md)

...
ラベル: 
--- issue-notes/21.md の内容 ---

```markdown
# issue project-summary の development-status 生成時、project-overviewが生成済みのproject-overview.mdもpromptに添付、を試す #21
[issues #21](https://github.com/cat2151/github-actions/issues/21)

# 何が困るの？
- project-overview.mdがpromptに添付されていたほうが、Geminiの生成品質が改善できる可能性がある。
    - メリットは、ファイル一覧、関数一覧、をGeminiにわたせること

# 検討事項
- 課題、その一覧に付記されている「ファイルや関数の要約」は、Geminiが「ファイル名や関数名を元に生成しただけ」で、「ファイル内容や関数内容を参照せずに生成した」可能性が高い
    - 対策、project-overview.mdに依存しない。
        - 方法、新規関数をagentに実装させる
            - 新規関数で、ファイル一覧と関数一覧を生成する
        - 根拠、そのほうが、シンプルに目的を達成できる可能性が高そう。
        - 根拠、project-overview.mdだと、不具合として.github 配下のymlがlistに含まれておらず、ymlに関するissue、に関する生成、をするとき不具合の可能性がありそう。そういった、別機能の不具合に影響されがち。
- 課題、早期に実施したほうが毎日好影響が出る可能性がある
    - 対策、上記検討事項の対処は後回しにして、先に実装してみる
    - agentに投げる
- 課題、ProjectSummaryCoordinator をみたところ、並列処理されている
    - なので、project-overview.mdを参照したいときに、まだ生成されていない、という可能性が高い
    - 対策、前述の、新規関数で、ファイル一覧と関数一覧を生成させる

# agentに投げるための整理
- 編集対象ファイル
    - prompt
        - .github_automation/project_summary/prompts/development-status-prompt.md
        - 編集内容
            - projectのファイル一覧を埋め込む用の、プレースホルダーを追加する
    - source
        - .github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
        - 編集内容
            - projectのファイル一覧を生成する関数、を実装し、
            - それを前述のプレースホルダーに埋め込む

```

## [Issue #20](../issue-notes/20.md): project-summary の development-status 生成時、issue-notes/ 配下のmdにファイル名が書いてあれば、そのファイル内容もpromptに添付、を試す
[issue-notes/20.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/20.md)

...
ラベル: 
--- issue-notes/20.md の内容 ---

```markdown
# issue project-summary の development-status 生成時、issue-notes/ 配下のmdにファイル名が書いてあれば、そのファイル内容もpromptに添付、を試す #20
[issues #20](https://github.com/cat2151/github-actions/issues/20)

# 何が困るの？
- Geminiに次の一手を生成させるとき、cjsの内容も添付したほうが、生成品質が改善できる可能性がある。

# 方法は？
- cjsでファイル検索をさせる。
    - project内のファイル検索をさせる。
    - まず書いてあるファイル名そのもので検索させる。
    - 見つからない場合、パス部分を削除して改めてproject内の全ファイルlistから見つかった最初のファイルを対象とする。
- 課題、issue-notes/ 配下のmdファイルの内容、からファイル名を得る方法が曖昧。
    - 案、.yml と .cjs がある部分で、space区切り。
    - 案、agentに方法を検討させる。

```

## [Issue #16](../issue-notes/16.md): issue-note / project-summary / translate / callgraph をtonejs-mml-to-jsonから呼び出す
[issue-notes/16.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/16.md)

...
ラベル: 
--- issue-notes/16.md の内容 ---

```markdown
# issue issue-note / project-summary / translate / callgraph をtonejs-mml-to-jsonから呼び出す #16
[issues #16](https://github.com/cat2151/github-actions/issues/16)

# これまでの課題
- issue issue-note / project-summary / translate / callgraph は、github-actions リポジトリ上ではtest greenである。
- だが他のリポジトリにおいて動作するか？が可視化不足である。

# 対策
- issue-note / project-summary / translate / callgraph をtonejs-mml-to-jsonから呼び出す
- 詳しく
    - まず、現状、tonejs-mml-to-json でその4つのworkflowがどうなっているか、このmdに可視化する
    - 例えば、既に呼び出している、呼び出していない、tonejs-mml-to-jsonにある古いworkflowを呼び出している

# 調査結果
- まず、現状、tonejs-mml-to-json でその4つのworkflowがどうなっているか、このmdに可視化する
    - 結果：
        - issue-note
            - tonejs-mml-to-jsonにある古いworkflowを呼び出している
        - project-summary
            - tonejs-mml-to-jsonにある古いworkflowを呼び出している
        - translate
            - tonejs-mml-to-jsonにある古いworkflowを呼び出している
        - callgraph
            - tonejs-mml-to-jsonにある古いworkflowを呼び出している

# どうする？
- issue-note
    - github-actions リポジトリにある、call-issue-note.yml をcpして使うようにする、まず単純cpして動くかを確認する
- project-summary
    - github-actions リポジトリにある、call-daily-project-summary.yml をcpして使うようにする、まず単純cpして動くかを確認する
- translate
    - github-actions リポジトリにある、call-translate-readme.yml をcpして使うようにする、まず単純cpして動くかを確認する
- callgraph
    - github-actions リポジトリにある、call-callgraph.yml をcpして使うようにする、まず単純cpして動くかを確認する

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

## [Issue #12](../issue-notes/12.md): project-summary を他projectから使いやすくする
[issue-notes/12.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/12.md)

...
ラベル: 
--- issue-notes/12.md の内容 ---

```markdown
# issue project-summary を他projectから使いやすくする #12
[issues #12](https://github.com/cat2151/github-actions/issues/12)

- 課題、個別dirへの移動が必要。
    - scripts
    - prompts
        - さらに、呼び出し元ymlから任意のpromptsを指定できるようにする。
- 課題、これだと別project時に動かない。
    - 現在はたまたま共通ワークフローのリポジトリと呼び出し元ワークフローのリポジトリが同一のため、
    - 呼び出し元checkoutをするだけで、
    - 共通ワークフロー側のscriptファイルが取得できてしまっている
    - 対策
        - 他のyml同様、共通ワークフロー側のリポジトリをcheckoutする
- docs
    - call導入手順を書く
- 課題、promptを呼び出し元ymlから指定できるようにすべし。
    - 現在はscript内にファイル名決め打ちで存在しているため、他のprojectで別ymlを指定できない。
    - 方法、他のcallワークフローで指定しているところを参考にすべし


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

```

## [Issue #10](../issue-notes/10.md): callgraph を他projectから使いやすくする
[issue-notes/10.md](https://github.com/cat2151/github-actions/blob/main/issue-notes/10.md)

...
ラベル: 
--- issue-notes/10.md の内容 ---

```markdown
# issue callgraph を他projectから使いやすくする #10
[issues #10](https://github.com/cat2151/github-actions/issues/10)

# ブレインストーミング
- 洗い出し
    - 他projectから使う場合の問題を洗い出す、今見えている範囲で、手早く、このnoteに可視化する
    - 洗い出したものは、一部は別issueに切り分ける
- close条件
    - まずは4つそれぞれを個別のdirに切り分けてtest greenとなること、とするつもり
    - それ以外は別issueに切り分けるつもり
- 切り分け
    - 別dirに切り分ける
        - 課題、`codeql-queries/` が `.github/` 配下にある。対策、`.github_automation/callgraph_enhanced/codeql-queries/` とする
        - 課題、scriptも、`.github/`配下にある。対策、移動する
        - 方法、agentを試し、ハルシネーションで時間が取られるなら人力に切り替える
- test
    - local WSL + act でtestする
- 名前
    - 課題、名前 enhanced が不要。対策、名前から enhanced を削除してymlなどもそれぞれ同期して修正すべし
- docs
    - call導入手順を書く

```

## 最近の変更（過去7日間）
コミット履歴:
${recentChanges}

変更されたファイル:
${recentChanges}

上記の情報を基に、プロンプトで指定された形式で開発状況を生成してください。
Issue番号を記載する際は、必ず [Issue #番号](../issue-notes/番号.md) の形式でMarkdownリンクとして記載してください。


---
Generated at: 2025-09-08 07:04:23 JST

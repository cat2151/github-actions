# Daily Project Summary Setup

## 機能説明

毎日、プロジェクトの最新状況の要約と、
次の一手の候補、そのための小さな一歩のヒント
（フォーマットがプロンプトですので、Agentに渡すだけで実現できます）を
Geminiに生成させます。

## 利用方法

外部プロジェクトから Daily Project Summary 機能を利用する方法を説明します。

### 1. ワークフローファイルの配置

あなたのプロジェクトの `.github/workflows/` ディレクトリに、
当リポジトリの `.github/workflows/call-daily-project-summary.yml`
をコピーしてください。

### 2. GitHub Secrets の設定

リポジトリの **Settings > Secrets and variables > Actions** で以下のシークレットを設定してください：

**GEMINI_API_KEY** (必須)
- Google AI Studio で取得した Gemini API キー
- [Google AI Studio](https://aistudio.google.com/) でAPIキーを作成

**GITHUB_TOKEN** (自動設定)
- GitHub Actions で自動的に提供されます
- Issue情報の取得に使用されます

### 3. 必要なファイル構成

あなたのプロジェクトに以下のファイル・ディレクトリを作成してください：

```
.github/
└── workflows/
    └── call-daily-project-summary.yml  # ステップ1で配置したファイル

.github_automation/project_summary/
└── prompts/
    ├── project-overview-prompt.md      # 来訪者向けプロンプト
    └── development-status-prompt.md    # 開発者向けプロンプト

generated-docs/                         # 自動生成される出力先(手動作成不要)
├── project-overview.md                 # プロジェクト概要（来訪者向け）
└── development-status.md               # 開発状況（開発者向け）
```

### 4. プロンプトファイルの準備

#### `.github_automation/project_summary/prompts/project-overview-prompt.md` (来訪者向け)

プロジェクト概要を生成するためのプロンプトを記述します。

**推奨内容:**
- プロジェクトの目的と概要
- 使用している技術スタック
- ファイル構造の説明方針
- 関数の説明レベル

**参考:** [サンプルプロンプト](https://github.com/cat2151/github-actions/blob/main/.github_automation/project_summary/prompts/project-overview-prompt.md)

#### `.github_automation/project_summary/prompts/development-status-prompt.md` (開発者向け)

開発状況を生成するためのプロンプトを記述します。

**推奨内容:**
- Issuesの要約方針
- 次のアクション提案の基準
- 小さな一歩の粒度

**参考:** [サンプルプロンプト](https://github.com/cat2151/github-actions/blob/main/.github_automation/project_summary/prompts/development-status-prompt.md)

### 5. 実行とスケジュール

**自動実行:**
- 毎日日本時間 07:00 に自動実行
- 過去24時間以内にユーザーによるコミットプッシュがある場合のみ実行
- GitHub Actionsによるコミットは除外

**手動実行:**
1. GitHub リポジトリの **Actions** タブに移動
2. "Call Daily Project Summary" ワークフローを選択
3. **Run workflow** ボタンをクリック

### 6. 生成される文書

実行後、`generated-docs/` ディレクトリに以下の2つの文書が生成されます：

**`project-overview.md` (来訪者向け):**
- プロジェクト概要（3行）
- 技術スタック（カテゴリ別）
- ファイル階層ツリー
- ファイル詳細説明
- 関数詳細説明
- 関数呼び出し階層

**`development-status.md` (開発者向け):**
- オープンIssues要約（3行）
- 次の一手候補（3つ）
- 各候補の最初の小さな一歩

## トラブルシューティング

### よくある問題

**1. GEMINI_API_KEY not set**
- GitHub Secrets で GEMINI_API_KEY が正しく設定されているか確認

**2. No user commits found**
- 過去24時間以内にユーザーによるコミットがない場合は正常な動作
- 手動実行 (`workflow_dispatch`) で強制実行可能

**3. Issues collection failed**
- GITHUB_TOKEN の権限を確認
- プライベートリポジトリの場合は issues:read 権限が必要

**4. Prompt file not found**
- `.github_automation/project_summary/prompts/` ディレクトリにプロンプトファイルが存在するか確認
- ファイル名が正確に一致しているか確認

### ログの確認

GitHub Actions の実行ログで詳細なエラー情報を確認できます：
1. **Actions** タブ → ワークフロー実行 → ログを確認

## API制限について

**Gemini API:**
- 無料枠: 1日50リクエスト
- Daily Summary は1日1回の実行のため問題なし
- 必要に応じて有料プランの検討

**GitHub API:**
- 認証済みリクエスト: 5000回/時間
- 1日1回のIssue取得なので十分な余裕

## セキュリティ

- APIキーは GitHub Secrets で管理（コードに直接記述しない）
- 生成されたコンテンツはリポジトリの公開設定に従う
- プライベート情報を含むプロンプトは避ける

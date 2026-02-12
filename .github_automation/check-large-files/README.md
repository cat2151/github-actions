# Check Large Files Workflow

This reusable workflow checks for source files that exceed a configured line count threshold and automatically creates GitHub issues when large files are detected.

## Purpose

- Automatically detect files that are becoming too large
- Create or update GitHub issues with detailed information about large files
- Help maintain code quality by identifying files that may need refactoring

## Usage

### 1. Create Configuration File

In your repository, create `.github/check-large-files.toml` with the following content:

Test files are included in the scan; avoid excluding them unless there's a specific reason.

```toml
[settings]
max_lines = 500
issue_labels = ["refactoring", "code-quality", "automated"]
issue_title = "大きなファイルの検出: {count}個のファイルが{max_lines}行を超えています"

[scan]
include_patterns = ["**/*"]
exclude_patterns = [
    "**/node_modules/**",
    "**/dist/**",
    "**/*.md",
    # Add more patterns as needed
    # Note: The workflow automatically excludes .github/actions-tmp/**
]
exclude_files = []
```

See `check-large-files.toml.example` for a complete example with common patterns.

### 2. Create Caller Workflow

Create `.github/workflows/call-check-large-files.yml` in your repository:

```yaml
name: Call Check Large Files

on:
  schedule:
    # Run daily at 3:00 AM JST (18:00 UTC)
    - cron: '0 18 * * *'
  workflow_dispatch:

permissions:
  contents: read
  issues: write

jobs:
  call-check-large-files:
    uses: cat2151/github-actions/.github/workflows/check-large-files.yml@main
```

## Configuration Options

### `settings` section

- `max_lines`: Line count threshold (files exceeding this will be reported)
- `issue_labels`: Array of labels to apply to created issues
- `issue_title`: Template for issue title (supports `{count}` and `{max_lines}` placeholders)

### `scan` section

- `include_patterns`: Glob patterns for files to check (default: `["**/*"]`)
- `exclude_patterns`: Glob patterns for files/directories to exclude
  - Common lockfiles (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, `npm-shrinkwrap.json`) are excluded by default; set `scan.auto_exclude_lockfiles = false` to include them
- `exclude_files`: Specific file paths to exclude

## How It Works

1. The workflow checks out your repository
2. Checks out this shared repository to access the Python script (into `.github/actions-tmp/`, automatically excluded from scanning)
3. Runs the `check_large_files.py` script to scan for large files
4. If large files are found:
   - Checks if a similar issue already exists (by title pattern)
   - If exists: Adds a comment with updated information
   - If not: Creates a new issue with file details and recommendations

**Note**: The workflow automatically excludes the `.github/actions-tmp/**` directory where it checks out the shared repository, so you don't need to add this exclusion manually.

## Issue Format

Created issues include:

- Table of detected files with line counts and excess lines
- Recommendations for refactoring
- Automatic labels for tracking

## Example

For a project with TypeScript files, you might want to:

```toml
[settings]
max_lines = 300  # Stricter limit for TypeScript

[scan]
include_patterns = ["src/**/*.ts", "src/**/*.tsx"]
exclude_patterns = [
    "**/*.d.ts"
]
```

## Requirements

- Python 3.11 or later
- GitHub Actions permissions: `contents: read`, `issues: write`

## Related Files

- Workflow: `.github/workflows/check-large-files.yml`
- Script: `.github_automation/check-large-files/scripts/check_large_files.py`
- Example config: `.github_automation/check-large-files/check-large-files.toml.example`

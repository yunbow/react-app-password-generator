# パスワードジェネレーター (TypeScript + React + Storybook)

React 18とTypeScript、Atomic Designパターンで構築されたパスワード生成アプリケーションです。

## デモプレイ
https://yunbow.github.io/react-app-password-generator/demo/

## 主要機能

### パスワード生成
- パスワード長設定（4-50文字、スライダー）
- 文字種選択（大文字・小文字・数字・記号のチェックボックス）
- パスワード生成ボタン
- 生成結果の表示・コピー機能
- パスワード強度表示（視覚的なバーと評価）

### セキュリティ機能
- 各文字種から最低1文字を確保
- 暗号学的に安全なランダム生成
- 強度評価（弱い・普通・強い・非常に強い）

### 操作方法
- **スライダー**: パスワード長を4-50文字で調整
- **チェックボックス**: 使用する文字種を選択
- **生成ボタン**: 新しいパスワードを生成
- **コピーボタン**: パスワードをクリップボードにコピー

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── components/
│   ├── atoms/          # 基本コンポーネント
│   │   ├── Button/     # ボタンコンポーネント
│   │   ├── Input/      # 入力フィールド
│   │   ├── Checkbox/   # チェックボックス
│   │   └── Text/       # テキスト表示
│   ├── molecules/      # 機能単位コンポーネント
│   │   ├── LengthSlider/       # 長さ選択スライダー
│   │   ├── CharacterOptions/   # 文字種選択オプション
│   │   ├── PasswordOutput/     # パスワード出力・コピー
│   │   └── StrengthIndicator/  # 強度インジケーター
│   └── organisms/      # 画面領域コンポーネント
│       └── PasswordGenerator/  # パスワードジェネレーター全体
├── stories/            # Storybook用ストーリー
├── types/              # TypeScript型定義
├── hooks/              # カスタムフック
├── utils/              # 共通処理
├── Config.ts           # アプリケーション設定
├── App.tsx             # メインアプリ
└── main.tsx            # エントリーポイント
```

## Atomic Design構成

### Atoms（基本コンポーネント）
- `Button` - 操作ボタン（生成、コピー）
- `Input` - テキスト入力・レンジスライダー
- `Checkbox` - 文字種選択チェックボックス
- `Text` - テキスト表示

### Molecules（機能単位）
- `LengthSlider` - パスワード長選択スライダー
- `CharacterOptions` - 文字種選択オプション群
- `PasswordOutput` - パスワード表示・コピー機能
- `StrengthIndicator` - パスワード強度表示

### Organisms（画面領域）
- `PasswordGenerator` - パスワードジェネレーター全体

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License
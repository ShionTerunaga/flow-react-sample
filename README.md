# React + Flow template

React、Flow、Vite、React Router、StyleXを組み合わせたテンプレートです。

コンポーネントとカスタムフックにはFlowの`component` / `hook`構文を使用します。

## セットアップ

```sh
pnpm install
pnpm flow
pnpm dev
```

開発サーバーは `http://localhost:3000` で起動します。

## コマンド

```sh
pnpm build
pnpm test
pnpm test:cv
pnpm storybook
pnpm build-storybook
```

## ルーティング

`src/router.jsx` でReact Routerの`Routes` / `Route`を使い、画面とURLの対応を定義します。ブラウザ履歴との接続は`src/main.jsx`の`BrowserRouter`が担当します。

## 環境変数

APIのURLは `.env` の `VITE_API_KEY` から読み込みます。

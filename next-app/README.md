# Next.js × Django ブログ

## Next.js(フロントエンド)の環境構築

### プロジェクト作成
```
npx create-next-app -e with-tailwindcss next-app
```

### サーバ起動
```
yarn dev
```

### API(Djangoで生成した)データの取得
lib>posts.tsでfetchでデータを取得し、データが必要な場所にSSRやSSG、ISRで返し、propsで表示したい場所に渡す。

### ビルド
```
yarn build
```

### ビルド後
```
yarn start
```

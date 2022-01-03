## よく使うコマンド一覧

### blog-frontを起動するとき

```
npx nx serve blog-front
```

### blog-frontにコンポーネントを追加するとき

```
npx nx g @nrwl/next:component <コンポーネント名> --project=blog-front --directory=components
```

### blog-frontのstorybookを起動するとき

```
 npx nx storybook blog-front
 ```

 ### storybookの作り方(例)

 ```
 nx generate @nrwl/react:component-story --project=shared-ui --componentPath=./lib/date-time/date-time.tsx --no-interactive 
 ```

 ### topic-buttonにアイコンを追加する方法

 [ここ](https://devicon.dev/)からSVGを取得する。

 ファイル名は小文字に変換して同じであればいい。
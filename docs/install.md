---
title: 安装
date: 2023-12-15
---

### 安装
``` sh
npm install @shi-zhong/genshin-ui -D
```

### 引入
必须在 main.ts 中引入样式

``` ts
// main.ts
import { createApp } from 'vue'
import App from './app.vue'
import GenshinUI, { Loading } from '@shi-zhong/genshin-ui'
// 在文件中引入需要保证入口文件中引入了样式，否则会丢失样式
import '@shi-zhong/genshin-ui/css';

const app = createApp(App)

app.mount('#app')

// 可选：全局引入GenshinUI
app.use(GenshinUI)
// 可选：全局引入Loading，也可在单组件文件中直接引入
app.use(Loading)

```
全局引入注意事项

``` html
<!-- template -->
<!-- 全局引入时，所有的组件名会自带一个G前缀 -->
<g-loading></g-loading>
<GLoading></GLoading>

<!-- 局部引入时，组件名不会添加G前缀 -->
<Loading></Loading>
```


::: warning

图片点击放大效果为文档内置提供，若无说明，均无此效果
:::

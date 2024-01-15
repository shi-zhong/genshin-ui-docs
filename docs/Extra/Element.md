### 元素图片
:::demo

```vue
<template>
  <div>
    <GIcon :src="ElementWebp.Pyro" :size="60" />
    <GIcon :src="ElementWebp.Hydro" :size="60" />
    <GIcon :src="ElementWebp.Anemo" :size="60" />
    <GIcon :src="ElementWebp.Electro" :size="60" />
    <GIcon :src="ElementWebp.Dendro" :size="60" />
    <GIcon :src="ElementWebp.Cryo" :size="60" />
    <GIcon :src="ElementWebp.Geo" :size="60" />
  </div>

  <div>
    <GIcon type="projection" color="var(--highlight-fire)" :src="ElementPng.Pyro" :size="60" />
    <GIcon type="projection" color="var(--highlight-water)" :src="ElementPng.Hydro" :size="60" />
    <GIcon type="projection" color="var(--highlight-wind)" :src="ElementPng.Anemo" :size="60" />
    <GIcon type="projection" color="var(--highlight-elec)" :src="ElementPng.Electro" :size="60" />
    <GIcon type="projection" color="var(--highlight-grass)" :src="ElementPng.Dendro" :size="60" />
    <GIcon type="projection" color="var(--highlight-ice)" :src="ElementPng.Cryo" :size="60" />
    <GIcon type="projection" color="var(--highlight-stone)" :src="ElementPng.Geo" :size="60" />
  </div>
</template>
<script setup>
  import { ElementWebp, ElementPng} from '@shi-zhong/genshin-ui'
</script>
```
:::

### 源文件导出

``` ts
// element.ts
export enum Elements {
  Pyro = '火',
  Hydro = '水',
  Anemo = '风',
  Electro = '雷',
  Dendro = '草',
  Cryo = '冰',
  Geo = '岩'
}

export enum ElementsCTE {
  火 = 'Pyro',
  水 = 'Hydro',
  风 = 'Anemo',
  雷 = 'Electro',
  草 = 'Dendro',
  冰 = 'Cryo',
  岩 = 'Geo'
}

export type ElementsCode = keyof typeof Elements
export type ElementsChinese = `${Elements}`

// 无颜色图标
export const ElementPng: { [key in ElementsCode ]: string } = { /* ... */}
// 彩色图标
export const ElementWebp : { [key in ElementsCode ]: string } = {/* ... */}
```
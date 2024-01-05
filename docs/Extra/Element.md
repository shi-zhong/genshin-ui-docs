### 元素图片

<div>
  <GIcon :src="elements.ElementWebp.Pyro" :size="60" />
  <GIcon :src="elements.ElementWebp.Hydro" :size="60" />
  <GIcon :src="elements.ElementWebp.Anemo" :size="60" />
  <GIcon :src="elements.ElementWebp.Electro" :size="60" />
  <GIcon :src="elements.ElementWebp.Dendro" :size="60" />
  <GIcon :src="elements.ElementWebp.Cryo" :size="60" />
  <GIcon :src="elements.ElementWebp.Geo" :size="60" />
</div>

<div>
  <GIcon type="projection" color="var(--highlight-fire)" :src="elements.ElementPng.Pyro" :size="60" />
  <GIcon type="projection" color="var(--highlight-water)" :src="elements.ElementPng.Hydro" :size="60" />
  <GIcon type="projection" color="var(--highlight-wind)" :src="elements.ElementPng.Anemo" :size="60" />
  <GIcon type="projection" color="var(--highlight-elec)" :src="elements.ElementPng.Electro" :size="60" />
  <GIcon type="projection" color="var(--highlight-grass)" :src="elements.ElementPng.Dendro" :size="60" />
  <GIcon type="projection" color="var(--highlight-ice)" :src="elements.ElementPng.Cryo" :size="60" />
  <GIcon type="projection" color="var(--highlight-stone)" :src="elements.ElementPng.Geo" :size="60" />
</div>

``` ts
import { Element } from '@shi-zhong/genshin-ui'
```

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

export type ElementsCode = keyof typeof Elements
export type ElementsChinese = `${Elements}`

// 无颜色图标
export const ElementPng: { [key in ElementsCode ]: string } = { /* ... */}
// 彩色图标
export const ElementWebp : { [key in ElementsCode ]: string } = {/* ... */}

// index.ts
import * as Element from 'element'

export { Element }
```
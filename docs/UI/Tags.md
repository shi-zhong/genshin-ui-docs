### 使用用例

#### Attention
::: demo `n = 0`时展示感叹号，默认展示感叹号

``` vue
<!-- 
  interface AttentionDecorationProps {
    size?: number;
    n?: number;
  }
 -->
<template>
  <GAttentionDecoration :size="50" />
  <GAttentionDecoration :size="50" :n="0" />
  <GAttentionDecoration :size="50" :n="5" />
</template>
```
:::

#### Enable

::: demo 
``` vue
<!-- 
  interface EnableProps {
    enable?: boolean;
    size?: number;
  }
 -->
<template>
  <GEnable enable :size="50" />
  <GEnable :size="50" />
</template>
```
:::

#### Lock

::: demo 
``` vue
<!-- 
  interface LockProps {
    lock?: boolean;
    size?: number;
    modelValue?: boolean;
  }
 -->
<template>
  <GLock :size="50" />
  <GLock :size="50" lock />
  <GLock :size="50" v-model="lock" />
</template>
<script setup>
  import { ref } from 'vue'
  const lock = ref(false)
</script>
```
:::

#### 稀有度等级
::: demo
``` vue
<!-- 
  interface RarityBarProps {
    rarity: 1 | 2 | 3 | 4 | 5; @default: 1;
    align?: 'left' | 'center' | 'right'; @default: 'center';
    size?: number; @default: 20;
  }
 -->
<template>
  <GRarity align="left" :rarity="5" :size="50" />
  <GRarity align="center" :rarity="5" :size="50" />
  <GRarity align="right" :rarity="5" :size="50" />
</template>
```
:::

#### 精炼
::: demo
``` vue
<!-- 
  interface props {
    refine: number; @default: 1;
    refineEnd: boolean;
    text?: boolean; @default: false;
    size?: number; @default: 20;
  }
);
 -->
<template>
  <GRefine :refine="5" :size="50" />
  <GRefine :refine="5" :size="50" refineEnd/>
  <GRefine :refine="5" :size="50" text />
</template>
```
:::

#### 分割线
::: demo
``` vue
<template>
  <div style="background: var(--font-light-gray)">
    <GLine />
  </div>
</template>
```
:::

#### 突破星级
::: demo
``` vue
<!-- 
  interface props {
    rank: 0 | 1 | 2 | 3 | 4 | 5 | 6; @default: 0;
    maxRank?: number; @default: 6;
    size?: number; @default: 25;
  }
 -->
<template>
  <GRankBar 
    :rank="3"
    :maxRank="5"
  />
  <br />
  <GRankBar :rank="3"/>
</template>
```
:::

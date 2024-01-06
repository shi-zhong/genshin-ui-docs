### 武器图片

``` ts
import { Weapon } from '@shi-zhong/genshin-ui'
```

:::demo

```vue
<template>
  <div style="background: var(--font-light-gray)">
    <GIcon :size="120" :src="Bow" />
    <GIcon :size="120" :src="Claymore" />
    <GIcon :size="120" :src="Catalyst" />
    <GIcon :size="120" :src="Polearm" />
    <GIcon :size="120" :src="Sword" />
  </div>
</template>
<script setup>
  import { Weapon } from '@shi-zhong/genshin-ui'
  
  const { WeaponPicture } = Weapon;
  const { Bow, Claymore, Catalyst, Polearm, Sword } = WeaponPicture;
</script>
```
:::

### 源文件导出

``` ts
// weapon.ts
export enum Weapons {
  Bow = '弓',
  Claymore = '双手剑',
  Catalyst = '法器',
  Polearm = '长柄武器',
  Sword = '单手剑'
}

export type WeaponsCode = keyof typeof Weapons
export type WeaponsChinese = `${Weapons}`

export const WeaponPicture: { [key in WeaponCode ]: string } = { /* ** */ } as const

// index.ts
import * as Weapon from 'weapon'

export { Weapon }

```
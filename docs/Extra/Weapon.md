### 武器图片

<div style="background: var(--font-light-gray)">
  <GIcon :size="120" :src="weapons.WeaponPicture.Bow" />
  <GIcon :size="120" :src="weapons.WeaponPicture.Claymore" />
  <GIcon :size="120" :src="weapons.WeaponPicture.Catalyst" />
  <GIcon :size="120" :src="weapons.WeaponPicture.Polearm" />
  <GIcon :size="120" :src="weapons.WeaponPicture.Sword" />
</div>

``` ts
import { Weapon } from '@shi-zhong/genshin-ui'
```

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
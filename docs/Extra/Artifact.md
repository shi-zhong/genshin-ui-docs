### 圣遗物部位图


<div style="background: var(--font-light-gray)">
  <GIcon type="projection"  :src="artifact.ArtifactPicture.FlowerOfLife" :size="60" />
  <GIcon type="projection"  :src="artifact.ArtifactPicture.PlumnOfDeath" :size="60" />
  <GIcon type="projection"  :src="artifact.ArtifactPicture.SandsOfEon" :size="60" />
  <GIcon type="projection"  :src="artifact.ArtifactPicture.GobletOfEonothem" :size="60" />
  <GIcon type="projection"  :src="artifact.ArtifactPicture.CircletOfLogos" :size="60" />
</div>

``` ts
import { Artifact } from '@shi-zhong/genshin-ui'
```

### 源文件导出

``` ts
// artifact.ts
export enum ArtifactSlots {
  FlowerOfLife = '生之花',
  PlumnOfDeath = '死之羽',
  SandsOfEon = '时之沙',
  GobletOfEonothem = '空之杯',
  CircletOfLogos = '理之冠'
}

export type ArtifactSlotsCode = keyof typeof ArtifactSlots
export type ArtifactSlotsChinese = `${ArtifactSlots}`

export const ArtifactPicture = {
  FlowerOfLife,
  PlumnOfDeath,
  SandsOfEon,
  GobletOfEonothem,
  CircletOfLogos
} as const


// index.ts
import * as Element from 'element'

export { Element }
```
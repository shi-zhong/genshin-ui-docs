### 使用用例

#### Icon 一般用法

:::demo 使用drop-shadow 来改变icon的颜色表现

```vue
<template>
  <GIcon :src="ElementWebp.Geo" />
  <GIcon type="origin" :src="ElementWebp.Geo" :size="50" />
  <GIcon type="origin" :src="ElementWebp.Geo" :size="80" alt="geo" />

  <GIcon type="projection" color="red" :src="ElementPng.Geo" />
  <GIcon type="projection" color="blue" :src="ElementPng.Geo" :size="50" />
  <GIcon type="projection" color="green" :src="ElementPng.Geo" :size="80" />
</template>
<script setup>
  import { ElementWebp, ElementPng } from '@shi-zhong/genshin-ui'
</script>
```
:::


### 类型定义


``` ts
interface IconCommon {
  src: string;
  alt?: string;
  size?: number;
  imgStyle?: object;
}

interface IconPropsOrigin {
  type: 'origin';
}

interface IconPropsProjection {
  type: 'projection';
  color: string;
}

type IconProps = IconCommon & (IconPropsOrigin | IconPropsProjection);

const props = withDefaults(defineProps<IconProps>(), {
  type: 'origin',
  size: 20,
  color: 'white'
});
```

### 类型说明

| 参数     | 说明                 | 类型     | 可选值                 | 默认值   |
| -------- | -------------------- | -------- | ---------------------- | -------- |
| type     | 原始 / 投射          | `string` | `origin`  `projection` | `origin` |
| src      | 图片资源             | `string` |                        |          |
| alt      | 图片描述             | `string` |                        |          |
| size     | 图片尺寸             | `number` |                        | `20`     |
| color    | 图片颜色             | `string` |                        | `white`  |
| imgStyle | 图片样式，同 `style` | `object` |                        |          |


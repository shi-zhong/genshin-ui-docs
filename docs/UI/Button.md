### 使用用例

#### 基本按钮类型 type

::: demo `spread`和`shrink`; `spread`时按钮只能是圆形，且不包含文字

```vue
<template>
  <div style="background: var(--font-dark-gray)">
    <div class="in-bk">
      <GButton class="w-50 mg-10" type="spread">无法包含文字</GButton>
      <GButton class="w-50 mg-10" type="spread" icon="fork"></GButton>
      <GButton class="w-50 mg-10" type="shrink" shape="round"></GButton>
      <GButton class="w-100 mg-10" type="shrink">确认</GButton>
    </div>
  </div>
</template>
``` 
:::

#### 使用 Icon 来定义按钮图标

::: demo `icon`会置于左侧位置，且当按钮为圆形时展示在按钮中央。可以传入预设值或图片。带有`/`,`.`的文本被视为图片路径，否则视为以`decoration-${icon}`的方式传入`class`中。可以尝试通过`:deep`伪类创建自定义css图标。

```vue
<template>
  <div style="background: var(--font-dark-gray); color: var(--blank-white);">
    <div>
      <GButton class="w-150 mg-10" type="shrink" balance icon="round">round</GButton>
      <GButton class="w-150 mg-10" type="shrink" balance icon="fork">fork</GButton>
      <GButton class="w-150 mg-10" type="shrink" balance icon="del">del</GButton>
      <GButton class="w-150 mg-10" type="shrink" balance icon="loading">loading</GButton>
      <GButton class="w-50 mg-10" type="shrink" balance shape="round" icon="menu"></GButton>
      <GButton class="w-50 mg-10" type="shrink" balance shape="round" icon="sort"></GButton>
      <GButton class="w-50 mg-10" type="shrink" balance shape="round" icon="filter"></GButton>
      <GButton class="w-50 mg-10" type="shrink" balance shape="round" icon="back"></GButton>
      <GButton class="w-50 mg-10" type="shrink" balance shape="round" icon="close"></GButton>

    </div>
    <div style="padding-left: 10px;font-size: 20px;">图片形式传入icon</div>
    <div>
      <GButton class="w-150 mg-10" type="shrink" :icon="elements.ElementWebp.Pyro" balance>图片icon</GButton>
    </div>
    <div style="padding-left: 10px;font-size: 20px;">自定义icon</div>
    <div>
      <GButton class="w-150 mg-10" type="shrink" icon="custom" balance>自定义</GButton>
    </div>
  </div>
</template>
<style>
/* scope 中请使用:deep选择器 */
  .decoration-custom {
    position: relative;
    aspect-ratio: 1;
    height: 100%;
    border-radius: 50%;
    background-color: rgb(49, 49, 49);
  }

  .decoration-custom::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 0;
    height: 0;

    --b-width: 9px;
    border: calc(var(--b-width) * 2) solid rgb(251, 204, 62);
    border-top: none;
    border-left: var(--b-width) solid transparent;
    border-right: var(--b-width) solid transparent;
  }
</style>
``` 
:::

#### disable 和 sleep

::: demo 使用`disable`禁用按钮，内置`sleep`方法实现按钮后禁用一段时间。

```vue
<template>
  <div style="background: var(--font-dark-gray)">
    <div class="in-bk">
      <GButton class="w-100 mg-10" type="shrink">确认</GButton>
      <GButton class="w-100 mg-10" type="shrink" disable>确认</GButton>
      <GButton class="w-300 mg-10" type="shrink" :sleep="1000">确认(后禁用)</GButton>
    </div>
  </div>
</template>
``` 
:::

#### 主题

::: demo 主题分为`light`，`dark`，默认`dark`。

```vue
<template>
  <div style="background: var(--blank-white)">
    <GButton class="w-150 mg-10" type="shrink" icon="fork" theme="dark" balance>确认</GButton>
  </div>
</template>

```
:::


#### 杂项

::: demo 使用`balance`来控制文字表现。使用`shape`来快速定义按钮形状。提供一个有`replay`属性的对象，按钮会在点击时尝试执行函数。

```vue
<template>
  <div style="background: var(--font-dark-gray)">
    <div class="in-bk">
      <GButton class="w-150 mg-10" type="shrink" attention>attention</GButton>
    </div>
    <div class="in-bk">
      <GButton class="w-200 mg-10 bk" type="shrink" icon="round">确认</GButton>
      <GButton class="w-200 mg-10 bk" type="shrink" icon="round" balance>确认</GButton>
    </div>
    <div class="in-bk">
      <GButton class="w-50 mg-10 bk" type="shrink" shape="round"></GButton>
    </div>
  </div>
</template>
``` 
:::


### 类型定义
``` ts
defineProps<{
  type: 'shrink' | 'spread'
  shape?: 'round'
  balance?: boolean
  icon?: 'round' | 'fork' | undefined | string
  disable?: boolean
  attention?: boolean
  theme?: 'dark' | 'light'
  sound?:  { replay: () => void }
  sleep?: number;
}>()
```

### 类型说明

| 参数      | 说明                               | 类型      | 可选值                              | 默认值   |
| --------- | ---------------------------------- | --------- | ----------------------------------- | -------- |
| type      | 按钮类型                           | `string`  | `shrink` `spread`                   | `shrink` |
| shape     | 按钮形状                           | `string`  | `round`                             |  |
| balance   | 当按钮长度过小时，用于平衡视觉效果 | `boolean` |                                     | `false`  |
| icon      | 按钮按钮图标                       | `string`  | `round` `fork` `以上文小节内容为准` |   |
| disable   | 按钮是否禁用                       | `boolean` |                                     | `false`  |
| attention | 红色感叹号                         | `boolean` |                                     | `false`  |
| theme     | 按钮主题                           | `string`  | `dark` `light`                      | `light`  |
| sound     | 按钮声音                           | `object`  |                                     |          |
| sleep     | 点击后禁用时间                     | `number`  |                                     |          |

<style>
  .w-50 {
    width: 50px !important;
  }

  .w-100 {
    width: 100px !important;
  }

  .w-150 {
    width: 150px !important;
  }

  .w-200 {
    width: 200px !important;
  }

  .w-300 {
    width: 200px !important;
  }

  .mg-10 {
    margin: 10px !important;
  }

  .in-bk {
    display: inline-block;
  }

  .bk {
    display: block;
  }
</style>
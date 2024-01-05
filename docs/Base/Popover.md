### 使用用例

#### mode 和 placement
:::demo 字母组合代表所占用的块

```vue 
<template>
  <GPopover>
    <div class="active-area">top hover (default)</div>
    <template #popover><div>popover</div></template>
  </GPopover>

  <GPopover mode="click" placement="bottom">
    <div class="active-area">bottom click</div>
    <template #popover><div>popover</div></template>
  </GPopover>

  <GPopover placement="B">
    <div class="active-area">B 总是居中显示</div>
    <template #popover><div>popover</div></template>
  </GPopover>
</template>
``` 
:::

#### syncWidth
:::demo 仅用于同步宽度

```vue 
<template>
  <GPopover>
    <div class="active-area">默认</div>
    <template #popover><div class="popover-area">popover</div></template>
  </GPopover>

  <GPopover syncWidth>
    <div class="active-area">宽度同步</div>
    <template #popover><div class="popover-area">popover</div></template>
  </GPopover>
</template>
``` 
:::


#### floating
:::demo 跟随鼠标移动，默认当悬浮元素小于激活元素的 `1 / 3` 主方向的长度时，悬浮元素随鼠标移动，否则居中

```vue 
<template>
  <GPopover>
    <div class="active-area">默认</div>
    <template #popover><div class="popover-area">popover</div></template>
  </GPopover>

  <GPopover :floating="() => false">
    <div class="active-area">关闭跟随鼠标</div>
    <template #popover><div class="popover-area">popover</div></template>
  </GPopover>
</template>
``` 
:::


#### autoPlacement 和 priority
:::demo 当悬浮元素无法完整出现在视口内时，会自动触发调整，通过 `autoplacement = flase` 关闭。 `priority` 用于调整调整顺序，默认为 `['top', 'bottom', 'left', 'right']`。当当前设置的位置无法完整显示悬浮元素时，会先对位置进行降级尝试，当`placement`为边时，会先尝试对边，再遍历优先级列表。当`placement`为角落元素`A`/`C`/`E`/`G`时，会先进行水平方向的尝试，后进行垂直方向的尝试，然后遍历优先列表。当`placement`有明显的方向性时，会先成为边，然后遍历优先列表。Exp: 若`A`无法完整显示，尝试`top` `left`,若仍无法展示，则遍历`priority`,若全部都不符合条件，则使用原始值。

```vue 
<template>
  <GPopover>
    <div class="active-area">调整浏览器窗口，移动非实时</div>
    <template #popover><div class="popover-area h-600 z-i-100">popover</div></template>
  </GPopover>

  <GPopover :autoPlacement="false">
    <div class="active-area">关闭智能移动</div>
    <template #popover><div class="popover-area h-600">popover</div></template>
  </GPopover>
</template>
``` 
:::

#### slot数据
:::demo 通过访问`v-slot:popover="{}"`来更改UI状态
```vue 
<template>
  <GPopover>
    <div class="active-area">slot</div>
    <template v-slot:popover="{ placement }"><div class="popover-area h-600">{{ placement }}</div></template>
  </GPopover>
</template>
```
:::

#### expose
:::demo `placement = none`可以关闭内部的内置事件，使用`popoverVisible(bool)`来切换显示状态，`popover.visible()`来获取当前状态，由于展示时会获取一次鼠标位置，而这种触发方式无法获取，所以会展示在默认位置，可以设置`placement = 'B'`来获取居中效果
```vue 
<template>
  <GPopover ref="popover" mode="none">
    <div class="active-area">expose</div>
    <template #popover><div class="popover-area">popover</div></template>
  </GPopover>
  <GButton class="w-150 mg-10" type="shrink" icon="fork"  balance @click="popover.popoverVisible(!popover.visible())">切换</GButton>

  <GPopover ref="popover2" mode="none" placement="B">
    <div class="active-area">expose</div>
    <template #popover><div class="popover-area">popover</div></template>
  </GPopover>
  <GButton class="w-150 mg-10" type="shrink" icon="fork"  balance @click="popover2.popoverVisible(!popover2.visible())">切换</GButton>
</template>
<script setup>
import { ref } from 'vue'

const popover = ref()
const popover2 = ref()
</script>
``` 
:::
<style>
  .active-area {
    margin: 40px 0;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #f0f0f0;
    overflow: hidden;
  }

  .popover-area {
    background-color: #eeeeee;
  }
  
  .h-600 {
    height: 600px;
  }

  .z-i-100{
    z-index: 100 !important;
  }

  .w-150 {
    width: 150px !important;
  }
  
</style>


### 类型定义

``` ts
type acceptDirection =
  | 'top'| 'bottom'| 'left' | 'right'
  | 'A'  | 'C'     | 'E'     | 'G'
  | 'BA' | 'B'     | 'BC'
  | 'DC' | 'D'     | 'DE'
  | 'FE' | 'F'     | 'FG'
  | 'HG' | 'H'     | 'HA'


  /**
   * 
   * I 为触发元素
   * 
   * top = ABC
   * bottom = GFE
   * left = AHG
   * right = CDE
   * 
   * A | B | C
   * H | I | D
   * G | F | E
   */


defineProps<{
  mode?: 'hover' | 'click' | 'none'
  placement?: acceptDirection
  syncWidth?: boolean
  autoPlacement?: boolean
  priority?: acceptDirection[]
  floating?: (content: number, popover: number) => boolean
}>()

defineExpose<{
  popover: ref<HTMLElement>,
  activeArea: ref<HTMLElement>,
  popoverVisible: (v: boolean) => void,
  visible: () => boolean
}>()

```

### 类型说明

| 参数          | 说明                                | 类型                                 | 可选值                 | 默认值                               |
| ------------- | ----------------------------------- | ------------------------------------ | ---------------------- | ------------------------------------ |
| mode          | 触发方式,不为`none`时，内部自动控制 | `string`                             | `hover` `click` `none` | `hover`                              |
| placement     | 弹出位置                            | `acceptDirection`                    | 见类型定义             | `top`                                |
| syncWidth     | 弹窗宽度同步触发区域                | `boolean`                            |                        | `false`                              |
| autoPlacement | 空间不足自动调整位置                | `boolean`                            |                        | `true`                               |
| priority      | 弹出位置优先级                      | `acceptDirection[]`                  | 见类型定义             | `['top', 'bottom', 'left', 'right']` |
| floating      | 浮动阈值                            | `(c: number, p: number) => boolean ` |                        | `(c, p) => c > 3 * p`                |


### 插槽说明

| 插槽名  | 说明     | 暴露数据                                          | 数据说明                                                    |
| ------- | -------- | ------------------------------------------------- | ----------------------------------------------------------- |
| default | 触发元素 |                                                   |                                                             |
| popover | 浮动元素 | `{placement, visible, left, top, width, height }` | 暴露了浮动元素实际大小及位置信息， 可以用于调整UI，如气泡尖 |

### 暴露接口

| 接口名         | 说明                 | 类型                   |
| -------------- | -------------------- | ---------------------- |
| popover        | 浮动元素ref对象      | `Ref<HTMLElement>`     |
| activeArea     | 触发元素ref对象      | `Ref<HTMLElement>`     |
| popoverVisible | 控制浮动元素是否显示 | `(v: boolean) => void` |
| visible        | 浮动元素可视情况     | `() => boolean`        |

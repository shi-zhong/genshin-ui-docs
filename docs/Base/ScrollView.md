### 使用用例

#### 滚动方向

:::demo 注: scrollbar 颜色较浅，故使用了较深的背景色

```vue 
<template>
  <GScrollView class="g-scroll-view" scrollBehavior="scroll">
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </GScrollView>


  <GScrollView class="g-scroll-view" scrollBehavior="scroll" direction='x'>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </GScrollView>

  <GScrollView class="g-scroll-view" direction='both'>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </GScrollView>
</template>
``` 

:::

#### 滑动行为:BETA

:::demo 滑动触发行为未被严格定义，现触发动作为长距离大幅度滑动后松手

```vue 
<template>
  <GScrollView class="g-scroll-view g-scroll-limit-height" scrollBehavior="scroll">
    <div v-for="(_, i) in Array(100)">content {{ i }}</div>
  </GScrollView>

  <GScrollView 
    class="g-scroll-view g-scroll-limit-height" 
    scrollBehavior="scroll" 
    slide 
  >
    <div v-for="(_, i) in Array(100)">content {{ i }}</div>
  </GScrollView>
</template>
``` 

:::


#### 边界限制

:::demo 默认边界为50%， 指定border后仅为固定值，剩余边为 0

```vue 
<template>
  <GScrollView class="g-scroll-view " scrollBehavior="scroll" :border="{ top: 30, bottom: 100 }">
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </GScrollView>
</template>
``` 

:::



#### 自定义样式

:::demo 外层样式定义可视区域，`transformBoxClass`定义滚动区域. 滚动条分别具有类名 `scroll-track` 和 `scroll-thumb`， 可以通过类组合样式覆盖改变滚动条样式

```vue 
<template>
  <GScrollView class="g-scroll-view">
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </GScrollView>

  <GScrollView class="g-scroll-view" style="background: white;" transformBoxClass="g-scroll-black">
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </GScrollView>

  <GScrollView class="g-scroll-view" scrollBehavior="scroll" customScrollbar="g-scroll-red">
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </GScrollView>
</template>

<style>
  .scroll-thumb.g-scroll-red {
    background-color: red;
  }
</style>
``` 

:::


#### 可视区域定位插槽

:::demo extra插槽位于滚动区域外，可视区域内，用于处理不受滚动影响，但定位等受制于整体元素的额外元素

```vue 
<template>
  <GScrollView class="g-scroll-view">
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <template #extra>
      <div>混入其中</div>
    </template>
  </GScrollView>
</template>
``` 

:::


#### 插曲：滚动区域嵌套

:::demo 滚动嵌套时，会尝试先滚动内部元素，直到内部触碰边界，才会抛出滚动任务

```vue 
<template>
  <GScrollView class="g-scroll-view">
    <div>content</div>
    <GScrollView class="g-scroll-view g-scroll-limit-height-x100">
      <div>inner</div>
      <div>inner</div>
      <div>inner</div>
      <div>inner</div>
      <div>inner</div>
      <div>inner</div>
      <div>inner</div>
      <div>inner</div>
      <div>inner</div>
    </GScrollView>
    <div>content</div>
  </GScrollView>
</template>
``` 

:::


<style>
  .g-scroll-view {
    margin: 10px;
    display: inline-block;
    width: 100px;
    background-color: #000;
    color: white;
    user-select: none;
  }

  .g-scroll-black {
    background-color: #000;
  }

  .g-scroll-limit-height {
    height: 200px;
  }

  .g-scroll-limit-height-x100 {
    height: 100px;
  }

</style>

### 类型定义

``` ts
interface ScrollViewProps {
  direction?: 'x' | 'y' | 'both';
  scrollBehavior?: 'auto' | 'scroll' | 'hidden';

  customScrollbar?: string;
  transformBoxClass?: string;

  border?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };

  slide?: boolean;
  slideOption?: {
    threshold: number; // 滑动阈值
    distance: (i: number) => number; // 自定义滑动距离，传入瞬时滑动速度，返回距离
  };
}

interface ScrollViewEmits {
  (event: 'click', e: Event): void;
  (
    event: 'touchBorder',
    type: {
      direction: ['top' | 'bottom' | '', 'left' | 'right' | ''];
      mouseState: 'up' | 'move' | 'down';
    }
  ): void;
  (
    event: 'scroll',
    e: Event,
    scrollState: {
      mouseState: 'up' | 'move' | 'down';
      scroll: {
        x: number;
        y: number;
      };
    }
  ): void;
}


defineExpose({
  scrollTo: (
    pos: { top: number; left: number; behavior?: 'smooth' },
    duration: number = 500
  ): void,
  scrollBy: (
    pos: { top: number; left: number; behavior?: 'smooth' },
    duration: number = 500
  ): void,
  getScroll: () => ({ x: number, y: number })
});
```

### 类型说明

| 参数              | 说明             | 类型    | 可选值                     | 默认值              |
| ----------------- | ---------------- | ------- | -------------------------- | ------------------- |
| direction         | 滚动方向         | `string`  | `x` `y` `both`             | `y`                 |
| scrollBehavior    | 滚动行为         | `string`  | `auto` `scroll` `hidden`   | `auto`              |
| customScrollbar   | 自定义滚动条样式 | `string`  |                            |                     |
| transformBoxClass | 滚动条容器样式   | `string`  |                            |                     |
| border            | 四周额外空白距离 | `object`  | `{ [key: string]: number}` | `方向的各50%`         |
| slide             | 是否开启滑动     | `boolean` |                            | `false`             |
| slideOption       | 滑动配置         | `object`  |                            | `23`, `a => 30 * a` |

### 事件说明

| 事件名      | 说明     | 回调参数                  |
| ----------- | -------- | ------------------------- |
| click       | 鼠标点击 | 详见[类型定义](#类型定义) |
| touchBorder | 触碰边界 | 详见[类型定义](#类型定义) |
| scroll      | 滚动     | 详见[类型定义](#类型定义) |

### 插槽说明

| 插槽名 | 说明                                                                                        |
| ------ | ------------------------------------------------------------------------------------------- |
| extra  | extra插槽位于滚动区域外，可视区域内，用于处理不受滚动影响，但定位等受制于整体元素的额外元素 |

### 暴露接口

| 接口名    | 说明           | 类型                             |
| --------- | -------------- | -------------------------------- |
| scrollTo  | 滚动视区       | 详见[类型定义](#类型定义)        |
| getScroll | 获取滚动条位置 | `() => ({x: number, y: number})` |
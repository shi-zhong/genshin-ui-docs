使用`useMockScrollDrag`来模拟滚动拖拽。
Base 中的 [ScrollView](../Base//ScrollView.md)就使用了这个钩子

### 使用用例

#### 在顶层作用域使用ref
:::demo 
```vue
<template>
  <div ref="scrollRef" class="container">
    <div class="" v-for="(_, index) in Array(100)" :key="index">{{ index }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useMockScrollDrag } from '@shi-zhong/genshin-ui'
const scrollRef = ref(null)

/**
 * 在没有指明movemethod时，默认1：1进行scrolltop拖拽滚动
 */
const { mouseState } = useMockScrollDrag(scrollRef, {})
</script>
```
:::

#### 在onMounted钩子中传入元素实例调用
:::demo 当传入为 HTMLElement 类型的数据时，需要放在onMounted钩子中，此时无法暴露出mouseState，尽管可用let赋值，但很怪异，不推荐
```vue
<template>
  <div ref="scrollRef" class="container">
    <div class="" v-for="(_, index) in Array(100)" :key="index">{{ index }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMockScrollDrag } from '@shi-zhong/genshin-ui'
const scrollRef = ref(null)

onMounted(() => {
  useMockScrollDrag(scrollRef.value, {})
})
</script>

```
:::

<style>
  .container {
    width: 300px;
    height: 300px;
    user-select: none;
    overflow: hidden;
    background: lightgray;
  }
</style>

### 类型定义 

```ts
function useMockScrollDrag(scrollRef: Ref<HTMLElement> | HTMLElement, options: MockScrollDragOptions): {
  mouseState: Ref<'up' | 'move' | 'down'>;
}

interface MockScrollDragOptions {
  mouseDown?: (e: MouseEvent & { payload?: object }) => void;
  mouseMove?: (
    e: MouseEvent & { payload?: object },
    mouseState: 'up' | 'move' | 'down'
  ) => void;
  mouseUp?: (e: MouseEvent & { payload?: object }) => void;
  moveMethod?: (
    crtPos: MousePositionInfo,
    pvePos: MousePositionInfo,
    e: MouseEvent & { payload?: object }
  ) => void | boolean;
  stopPropagation?: (e: MouseEvent & { payload?: object }) => boolean;
  debug?: boolean;
}

interface MousePositionInfo {
  clientX: number;
  clientY: number;
  movementX: number;
  movementY: number;
  offsetX: number;
  offsetY: number;
  pageX: number;
  pageY: number;
  calcMovementX: number;
  calcMovementY: number;
  timeStamp: number;
}
```

### 参数说明

| 参数名    | 类型                              | 默认值 | 说明         |
| --------- | --------------------------------- | ------ | ------------ |
| scrollRef | `Ref<HTMLElement> \| HTMLElement` |        | 滚动容器 ref |
| options   | `MockScrollDragOptions`           |        | 配置项       |

### 配置项额外说明
| 参数名          | 说明                        |
| --------------- | --------------------------- |
| moveMethod      | 显示返回 false 阻止本次移动 |
| stopPropagation | 显示返回 false 阻止冒泡     |
| debug           | 启用true会在控制台输出ref   |

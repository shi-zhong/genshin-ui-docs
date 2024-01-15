### 事件委派函数

在列表事件中，对每个子项目注册事件会让程序在挂载或卸载中获得额外的性能开销，通过在子项目中绑定数据，父项目中绑定事件可以减少事件注册的开销。

### 使用示例

:::demo

```vue
<template>
  <div @click="handleClick">
    <div v-for="f in fruits" data-type="child" :data-fruit="f">{{ f }}</div>
  </div>
</template>
<script setup>
  import { EventDispatch } from '@shi-zhong/genshin-ui'
  const fruits =  ["apple", "banana", "orange", "grape", "lemon", "kiwi", "mango", "pineapple", "strawberry"];
  const handleClick = (e) => {
    EventDispatch(e, {
      'child': (dataset) => {
        alert(dataset.fruit)
      }
    })
  }
</script>

```
:::

1. 在子元素上注册`data-type`属性来指定监听元素，函数会执行传参上的同名属性并传入对应元素的`dataset`。可以通过`option.type`来更改类型名`data-${option.type}`。
2. 当元素被成功匹配后，会停止向上查找，通过对应函数返回`true`来继续执行。注意此处并非对事件进行`stopPropagation`处理。
3. 为了避免程序出现不可预知的错误，在从向上查找目标元素的过程中，循环最多执行`maxLoop`次，默认为10次。
4. 当该函数至少成功匹配一次元素后，会返回`true`，否则返回`false`


### 函数定义

```ts
type EventDispatch<T> = (
  e: Event, 
  events: { 
    [key: string]: (dataset: T) => void | boolean | undefined; 
  },
  option?: {
    maxLoop?: number;
    type?: string
  }
) => boolean;
```

### 函数代码

```ts
export const EventDispatch = <T = { [key: string]: string }>(
  e: Event,
  events: {
    [key: string]: (dataset: T) => void | boolean | undefined;
  },
  option?: {
    maxLoop?: number;
    type?: string
  }
): boolean => {
  const type = option?.type || 'type';
  const maxLoop = option?.maxLoop || 10;
  const topElement = e.currentTarget as unknown as HTMLElement

  let i = 0;
  let target = e.target as unknown as (HTMLElement | null);
  const eventNames = Object.keys(events);

  while (i < maxLoop && target !== null && target !== topElement) {
    if (target.dataset[type] && eventNames.includes(target.dataset[type]!)) {
      const next = events[target.dataset[type]!](target.dataset as T);
      if (!next) {
        return true;
      }
    }

    target = target.parentElement;
    i++;
  }
  return false;
};
```
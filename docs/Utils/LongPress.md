使用`vLong`来注册按钮长按事件

### 导入

```js
import { LongPress } from '@shi-zhong/genshin-ui'
```

### 使用示例

```vue
<script setup>
import { LongPress } from '@shi-zhong/genshin-ui'

const { vLong, clickCancel} = LongPress()
</script>
<template>
  <button 
    @click="clickCancel(() => {})"
    v-long.repeat="() => {}"
  >click</button>
</template>
```

使用该指令后，在对按钮进行长按后会触发长按事件。如果鼠标按下时间为达到阈值，则触发点击事件。触发后松开或移动鼠标，长按事件结束，使用`clickCancel`包裹`@click`函数来取消dom元素的点击事件。如果多个节点使用同一个函数解构出的指令，由于内部长按状态标志只有一个，不支持同时对多个元素进行长按。

``` ts
type ClickCancelType = (fn:Fucntion) => void
```

该指令接受一个`参数`个两个`修饰符`。

1. 接受一个纯数字`arg`作为长按前置阈值
2. 接受一个`mouseDown`函数，返回一个函数在长按结束后运行
3. 接受`.repeat`修饰符在长按时循环执行函数和一个纯数字修饰符作为repeat触发间隔

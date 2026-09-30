### 使用用例

#### 开关切换

::: demo 基本用法, 使用`v-model`来绑定数据，在动画执行期间无法再次切换。

```vue
<template>
  <div class="colored-bg pl-100">
    <GSwitch style="margin: 10px" />
    <GSwitch style="margin: 10px" :defaultValue="true" />
    <GSwitch
      style="margin: 10px"
      v-model="switchValue"
      on-text="显示细节"
      off-text="隐藏细节"
    />
    <GSwitch
      style="margin: 10px"
      v-model="switchValue"
      on-text="显示细节"
      off-text="隐藏细节"
      text-side="right"
    />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const switchValue = ref(false)
</script>
``` 
:::


#### 事件处理

::: demo `@change`事件会在组件值改变时调用，`@click`事件会在组件被点击时调用。`@click`事件提供一个回调函数，通过调用回调函数来更新组件值。如果回调函数传入空值，组件会对当前值取反。

```vue
<template>
  <div class="colored-bg pl-100">
    <GSwitch
      style="margin: 10px"
      v-model="switchValue"
      on-text="显示细节"
      off-text="隐藏细节"
      @change="() => Message.info('change')"
    />
    <GSwitch
      style="margin: 10px"
      v-model="switchValue"
      on-text="显示细节"
      off-text="隐藏细节"
      text-side="right"
      @click="switchFallback"
    />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from '@shi-zhong/genshin-ui'
  const switchValue = ref(false)
  const switchFallback = (n, f) => {
    // 模拟异步操作
    new Promise((r) => {
      setTimeout(() => {
        r(void 0)
      }, 1000)
    }).then(() => {
      f()
    })
  }
</script>
``` 
:::


<Props type="props" :define="
`
modelValue?: boolean // 绑定值
onText?: string // 激活文字
offText?: string // 非激活文字
textSide?: 'left' | 'right' // 文字陈列方向
disable?: boolean // 是否禁用
size?: number // 大小
defaultValue?: boolean // 默认值
`"
:defaults="{
  textSide: 'left',
  size: 20,
  disable: false,
  defaultValue: false
}" />

<Emits
:define="`
click  @ 点击组件触发 @ (n: boolean) => void
change @ 状态更新触发 @ (n: boolean, switchValue: (n?: boolean) => void): void 
`"
 />

<style>
.colored-bg {
  background-color: rgb(149, 149, 233);
  padding: 30px;
}
.pl-100 {
  padding-left: 100px;
}
</style>
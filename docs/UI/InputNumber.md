### 使用用例

该页面组件用于处理数字输入问题

#### 数字输入框 

::: demo 使用`v-model`来绑定数据，当外部数据变化时，组件会根据约束重新为数据赋值。双边按钮支持长按和长按步幅。

```vue
<template>
  <div style="background: var(--font-light-gray); padding: 10px;">
  
  <GInputNumber v-model="num"/>
  <GInputNumber v-model="num" :step="2" :longStep="5" :size="30" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const num = ref(0)
</script>
``` 
:::


#### 验证输入

::: demo 每次数据变动都会调用一次`validate`函数，函数可以返回一个`number`类型的值来更新值，或者返回一个`boolean`类型的值来通过或者阻止本次更新。注意！当多个组件控制同一个值时，根据组件先后顺序，顺位较后的组件检查自身约束时，可能会覆盖前一个组件的约束，导致值无法满足所有组件的约束。

```vue
<template>
  <div style="background: var(--font-light-gray); padding: 10px;">
  <GInputNumber v-model="num" :validate="validateValue" />
  <GInputNumber v-model="num" :min="0" :max="50" :step="2" :longStep="5" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const num = ref(0)
  
  const validateValue = (n) => {
    return !(n % 3 === 0)
  }
</script>
``` 
:::

#### 滑动输入组件

::: demo 使用`v-model`来绑定数据。支持点击滑轨和拖动滑块修改数值。双边按钮支持长按和长按步幅。

```vue
<template>
  <div class="colored-bg">
    <GInputNumberSlider v-model="num" :min="0" :max="100" :step="1" style="width: 300px;" />
    <GInputNumberSlider v-model="num2" :min="0" :max="100" :step="10" theme="dark" style="width: 300px" />
    <GInputNumberSlider v-model="num2" :min="0" :max="100" style="width: 300px" :showNumbers="false" :showButtons="false" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const num = ref(0)
  const num2 = ref(0)
</script>
``` 
:::


<Props
name="NumberInputCommon"
:define="`
  modelValue: number // 数据绑定
  step?: number // 点击按钮的递增(减)步数
  size?: number // 按钮大小
  min?: number // 最小值
  max?: number // 最大值
  longStep?: number // 长按的跳跃步数
  validate?: (n: number) => number | boolean // 验证函数
`"
:defaults="{
  step: 1,
  min: -Infinity,
  max: Infinity,
  longStep: 10,
  size: 20
}"
/>


<Props
repeat
name="InputNumberSlider"
:define="`
  theme?: 'dark' | 'light' // 主题
  showNumbers?: booelan // 是否显示数字
  showButtonss?: booelan // 是否显示按钮
  modelValue: number // 数据绑定
  step?: number // 点击按钮的递增(减)步数
  size?: number // 按钮大小
  min?: number // 最小值
  max?: number // 最大值
  longStep?: number // 长按的跳跃步数
  validate?: (n: number) => number | boolean // 验证函数
`"
:defaults="{
    theme: 'light',
    step: 1,
    longStep: 1,
    min: 0,
    max: 100,
    size: 20,
    showNumbers: true,
    showButtons: true
}"
/>


#### 样式变量
Slider
| css变量名             | 变量含义             |
| --------------------- | -------------------- |
| --theme-color         | 主题色(指示按钮色)   |
| --theme-color-reserve | 主题反色(指示轨道色等) |

<style>
  .colored-bg {
  background-color: rgb(149, 149, 233);
  padding: 30px;
}
</style>
### 使用用例

#### 基本使用

:::demo

```vue
<template>
  <GButton class="w-200 mg-10" type="shrink" icon="round" balance @click="visible = true">打开弹窗</GButton>
  <GModal :visible="visible" @close="visible = false" title="标题" :ok="{ text: 'confirm', disable: true}" :cancel="{ text: 'cancel' }">
    <div style="color: var(--blank-white); font-size: 25px;">
      通过`visible`控制弹窗显示与隐藏
      <br />
      '@close' 会在点击 × 或者开启遮罩层关闭后执行, mask默认开启
      <br />
      通过 ok、cancel 配置按钮，不配置则不显示按钮， 可以进行单个配置，优先级高于统一配置，见类型定义
    </div>
  </GModal>
</template>
<script setup>
  import { ref } from 'vue'
  const visible = ref(false)
</script>

``` 
:::


#### 嵌套使用

:::demo 组件内部维护了一个层级表，保证后者能够位于前者之上。可以使用`zIndex`属性指定一个层级表

```vue
<template>
  <GButton class="w-200 mg-10" type="shrink" icon="round" balance @click="visible = true">打开弹窗</GButton>
  <GModal :visible="visible" @close="visible = false">
    <GButton class="w-200 mg-10" type="shrink" icon="round" balance @click="visible2 = true">打开弹窗2</GButton>
  </GModal>

  <GModal :visible="visible2" @close="visible2 = false">
    <div style="color: var(--blank-white); font-size: 25px;">
      弹窗二号
      <br />
      组件内部维护了一个层级表，保证后者能够位于前者之上。可以使用zIndex属性指定一个层级表
    </div>
  </GModal>
</template>
<script setup>
  import { ref } from 'vue'
  const visible = ref(false)
  const visible2 = ref(false)
</script>

``` 
:::

#### 内置主题
:::demo 内置了`light`和`dark`两种主题，可以通过`theme`属性进行配置; light主题下，无法使用关闭按钮(还原游戏内容)


```vue
<template>
  <GButton class="w-200 mg-10" type="shrink" icon="round" balance @click="() => {theme = 'dark'; visible = true}">Dark</GButton>
  <GButton class="w-200 mg-10" type="shrink" icon="round" balance @click="() => {theme = 'light'; visible = true}">Light</GButton>
  <GModal :visible="visible" @close="visible = false" :theme="theme" okText="确认" cancelText="取消">
   
  </GModal>
</template>
<script setup>
  import { ref } from 'vue'
  const visible = ref(false)
  const theme = ref('dark')
</script>

``` 
:::

#### 函数式调用
:::demo 函数式调用 默认关闭`mask`


```vue
<template>
  <GButton class="w-200 mg-10" type="shrink" icon="round" balance @click="() => callModal('dark')">Dark</GButton>
  <GButton class="w-200 mg-10" type="shrink" icon="round" balance @click="() => callModal('light')">Light</GButton>

</template>
<script setup>
  import { ModalFunc } from '@shi-zhong/genshin-ui'

  const callModal = (theme) => {
    ModalFunc({
      title: '标题',
      text: '正文默认居中',
      theme,
      mask: true,
      okText: '确认',
    })
  }

</script>

``` 
:::

### 类型定义


``` ts:no-line-numbers

interface ModalButtonConfig {
  text?: string
  icon?: string
  disable?: boolean
}

interface ModalProps {
  visible: boolean
  theme?: 'dark' | 'light'

  title?: string

  okText?: string
  okIcon?: string
  okDisable?: boolean

  cancelText?: string
  cancelIcon?: string
  cancelDisable?: boolean

  // 总配置 单个配置优先
  ok?: ModalButtonConfig
  cancel?: ModalButtonConfig
  mask?: boolean

  zIndex?: number
}

interface ModalEmits {
  (e: 'close'): void
  (e: 'cancel'): void
  (e: 'ok'): void
}

interface ModalOptionProps {
  title?: string
  text?: string
  mask?: boolean
  theme?: 'dark' | 'light'
  ok?: ModalButtonConfig
  cancel?: ModalButtonConfig
}

interface ModalCallback {
  onOk?: () => void
  onCancel?: () => void
  onClose?: () => void
}

type ModalFunc = (option?: ModalOptionProps, callback?: ModalCallback) => void

```

### 类型说明

#### Modal
| 参数          | 说明               | 类型                | 可选值         | 默认值     |
| ------------- | ------------------ | ------------------- | -------------- | ---------- |
| visible       | 是否显示           | `boolean`           |                |            |
| theme         | 主题               | `string`            | `dark` `light` | `dark`     |
| title         | 标题               | `string`            |                | `Title`     |
| okText        | 确认按钮文字       | `string`            |                | `Confirm`  |
| okIcon        | 确认按钮图标       | `string`            |                | `round`    |
| okDisable     | 确认按钮是否禁用   | `boolean`           |                | `false`    |
| cancelText    | 取消按钮文字       | `string`            |                | `Cancel`   |
| cancelIcon    | 取消按钮图标       | `string`            |                | `fork`     |
| cancelDisable | 取消按钮是否禁用   | `boolean`           |                | `false`    |
| ok            | 确认按钮总配置     | `ModalButtonConfig` |                |            |
| cancel        | 取消按钮总配置     | `ModalButtonConfig` |                |            |
| mask          | 是否启用遮罩层关闭 | `boolean`           |                | `true`     |
| zIndex        | 面板层级           | `number`            |                | `内部生成` |




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

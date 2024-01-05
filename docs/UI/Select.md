### 使用用例

#### 基本使用, 使用`default`改变默认项
:::demo

```vue 
<template>
  <GSelect 
    default="5"
    :options="[
      { text: '暴击率', value: '1' },
      { text: '暴击伤害', value: '2' },
      { text: '攻击力百分比', value: '3' },
      { text: '防御力百分比', value: '4' },
      { text: '生命值百分比', value: '5' },
    ]"
  />
</template>

``` 
:::


#### 使用`v-model`绑定值
:::demo

```vue 
<template>
  <div style="font-size: 25px; height: 50px;">当前选中值为 <input style="font-size: 25px; height: 40px;" v-model="select" /></div>
  <GSelect 
    v-model="select"
    :options="[
      { text: '暴击率', value: '1' },
      { text: '暴击伤害', value: '2' },
      { text: '攻击力百分比', value: '3' },
      { text: '防御力百分比', value: '4' },
      { text: '生命值百分比', value: '5' },
    ]"
  />
</template>
<script setup>
  import { ref } from 'vue'
  const select = ref('2')
</script>
``` 
:::

#### 改变默认展开方向
:::demo `select`会执行避让，尝试把该条目移至边缘后重试查看效果。

```vue 
<template>
  <GSelect 
    class="w-200 mg-20 in-bk"
    :options="options"
  />
  <GSelect 
    class="w-200 mg-20 in-bk"
    :options="options"
    placement="G"
  />
  <GSelect 
    class="w-200 mg-20 in-bk"
    :options="options"
    placement="bottom"
  />
  <GSelect 
    class="w-200 mg-20 in-bk"
    :options="options"
    placement="DC"
  />
</template>
<script setup>
const options = [
  { text: '暴击率', value: '1' },
  { text: '暴击伤害', value: '2' },
  { text: '攻击力百分比', value: '3' },
  { text: '防御力百分比', value: '4' },
  { text: '生命值百分比', value: '5' },
]
</script>
``` 
:::

#### 改变列表高度来获得更好的效果
:::demo 滚动区域支持滚轮和拖拽

```vue 
<template>
  <GSelect 
    :maxHeight="300"
    :options="[
      { text: '暴击率', value: '1' },
      { text: '暴击伤害', value: '2' },
      { text: '攻击力百分比', value: '3' },
      { text: '防御力百分比', value: '4' },
      { text: '生命值百分比', value: '5' },
      { text: '暴击率', value: '6' },
      { text: '暴击伤害', value: '7' },
      { text: '攻击力百分比', value: '8' },
      { text: '防御力百分比', value: '9' },
      { text: '生命值百分比', value: '10' },
    ]"
  />
</template>

``` 
:::

#### 阻止更新

#### 改变列表高度来获得更好的效果
:::demo 通过调用`stop`来阻止更新

```vue 
<template>
  <GSelect 
    :maxHeight="300"
    :options="[
      { text: '暴击率', value: '1' },
      { text: '暴击伤害', value: '2' },
      { text: '攻击力百分比', value: '3' },
      { text: '防御力百分比', value: '4' },
      { text: '生命值百分比', value: '5' },
    ]"
    @change="({stop}) => stop()"
  />
</template>

``` 
:::

### 类型定义

``` ts
interface SelectProps {
  options: SelectOptionProps[]
  modelValue?: string | SelectOptionProps
  maxHeight?: number
  default?: string
  placement?: acceptDirection
}

interface SelectOptionProps {
  text: string
  value: string
}

defineEmits<{
  (event: 'update:modelValue', aft: string): void
  (
    event: 'change',
    value: {
      prv: SelectOptionProps
      aft: SelectOptionProps
      stop: () => void
    }
  ): void
}>()
```

### 类型说明

#### Select
| 参数       | 说明     | 类型                  | 可选值                              | 默认值 |
| ---------- | -------- | --------------------- | ----------------------------------- | ------ |
| options    | 选项列表 | `SelectOptionProps[]` |                                     |        |
| modelValue | 绑定值   | `string`              |                                     |        |
| maxHeight  | 最大高度 | `number`              |                                     |        |
| default    | 默认值   | `string`              |                                     |        |
| placement  | 方向     | `acceptDirection`     | [见Popover](/Base/popover#类型定义) | `top`  |

#### SelectOption
| 参数  | 说明           | 类型   | 可选值 | 默认值 |
| ----- | -------------- | ------ | ------ | ------ |
| text  | 选项文本       | string | -      | -      |
| value | 选项值（唯一） | string | -      | -      |


### 事件说明

| 事件名       | 说明                            | 回调参数                                             | 返回值    |
| ------------ | ------------------------------- | ---------------------------------------------------- | --------- |
| update:model | 更新绑定值                      | string                                               | void      |
| change       | 选项改变, 返回false阻止选项更新 | `{ prv: SelectOptionProps, aft: SelectOptionProps }` | `boolean` |

<style>
.w-200 {
  width: 200px;
}

.mg-20 {
  margin: 20px;
}

.in-bk {
  display: inline-block;
}
</style>
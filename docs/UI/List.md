### 使用用例

ConfigList用于设置项的展示和更改。

#### 四种基本的列表项类型

::: demo `item`一共有`slider`,`select`,`link`和`switch`四种类型，给组件绑定一个`v-model`属性来获得内部值，需要注意的是`v-model`属性需要根据`item`来传入初始值来保证内部正常运转

```vue
<template>
  <div class="colored-bg pl-100">
    <ConfigList name="设置列表展示" :items="listItems" v-model="values" />
  </div>
</template>
<script setup >
import { ref } from 'vue'

const values = ref({
  music: 0,
  vedioAPI: 'no',
  attention: false
})

const listItems = [
  {
    type: 'slider',
    name: 'music',
    title: '音乐音量',
    tag: 'voice'
  },
  {
    type: 'select',
    name: 'vedioAPI',
    title: '音频API兼容模式',
    options: [
      {
        text: '不使用',
        value: 'no'
      },
      {
        text: '使用',
        value: 'yes'
      }
    ]
  },
  {
    type: 'link',
    title: '用户中心',
    text: '点击转跳'
  },
  {
    type: 'switch',
    name: 'attention',
    title: '树脂回满时提醒'
  }
]
</script>
``` 
:::

#### 单独使用ConfigListItem

::: demo `ConfigListItem`组件也可以单独使用
```vue
<template>
  <div style="background: var(--font-dark-gray); color: var(--blank-white);">
    <GConfigListItem
      v-model="data"
      title="是否开启"
      :item="item"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue'

const data = ref(false)

const item = {
  name: ''
  type: 'switch'
  onChange?: (n) => {alert(n)}
}

</script>

``` 
:::

<Props
name="ConfigList"
:define="`
  name: string // 列表名
  items: ({ title: string } & ListItemType)[] // 列表项配置
  modelValue: { [key: string]: string | number | boolean } // 绑定值
`"
 />

 <Props
 repeate
name="LinkProps"
:define="`
  type: 'link' // link类型
  text: string // 链接文本
  onClick?: Function // 点击函数
`"
/>

 <Props
 repeate
name="SliderProps"
:define="`
  name: string // 对应数据key值
  type: 'slider' // 滑块类型
  min?: number // 最小值
  max?: number // 最大值
  step?: number // 步长
  tag?: 'voice' // 是否显示音量图标
  onChange?: Function // 更新时触发函数
`"
/>

 <Props
 repeate
name="SelectProps"
:define="`
  name: string // 对应数据key值
  type: 'select' // 选择类型
  options: Option // 同Select.Options
  onChange?: Function // 更新时触发函数
`"
/>

 <Props
 repeate
name="SwitchProps"
:define="`
  name: string // 对应数据key值
  type: 'switch' // switch类型
  onChange?: Function // 更新时触发函数
`"
/>

```ts
type onChangeFunc = (newValue, oldValue, bindItem) => void
```

<style>
.colored-bg {
  background-color: rgb(149, 149, 233);
  padding: 30px;
}
.pl-100 {
  padding-left: 100px;
}
</style>
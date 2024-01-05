### 使用用例

#### 使用Tabs 和 TabPane 组件来构建切换选项卡

:::demo 所有 TabPane 的子元素会被`GScrollView`组件包裹

```vue 
<template>
  <GTabs>
    <GTabPane tabKey="tab1" title="tab1"> this is tab A</GTabPane>
    <GTabPane tabKey="tab2" title="tab2"> this is tab B</GTabPane>
    <GTabPane tabKey="tab3" title="tab3"> this is tab C</GTabPane>
    <GTabPane tabKey="tab4" title="tab4"> this is tab D</GTabPane>
  </GTabs>
</template>
``` 
:::

#### 默认值
:::demo

```vue 
<template>
  <GTabs default="tab3">
    <GTabPane tabKey="tab1" title="tab1"> this is tab A</GTabPane>
    <GTabPane tabKey="tab2" title="tab2"> this is tab B</GTabPane>
    <GTabPane tabKey="tab3" title="tab3"> this is tab C</GTabPane>
    <GTabPane tabKey="tab4" title="tab4"> this is tab D</GTabPane>
  </GTabs>
</template>
``` 
:::


#### 选择禁用
:::demo

```vue 
<template>
  <GTabs :disable="['tab3','tab1']">
    <GTabPane tabKey="tab1" title="tab1"> this is tab A</GTabPane>
    <GTabPane tabKey="tab2" title="tab2"> this is tab B</GTabPane>
    <GTabPane tabKey="tab3" title="tab3"> this is tab C</GTabPane>
    <GTabPane tabKey="tab4" title="tab4"> this is tab D</GTabPane>
  </GTabs>
</template>
``` 
:::


#### 受控组件
:::demo

```vue 
<template>
  <GSelect 
    style="margin: 10px 0;" 
    v-model="tab"
    :options="[
      { text: 'tab1', value: 'tab1' },
      { text: 'tab2', value: 'tab2' },
      { text: 'tab3', value: 'tab3' },
      { text: 'tab4', value: 'tab4' },
    ]"
  />
  <GTabs :disable="['tab3','tab1']" :active="tab">
    <GTabPane tabKey="tab1" title="tab1"> this is tab A</GTabPane>
    <GTabPane tabKey="tab2" title="tab2"> this is tab B</GTabPane>
    <GTabPane tabKey="tab3" title="tab3"> this is tab C</GTabPane>
    <GTabPane tabKey="tab4" title="tab4"> this is tab D</GTabPane>
  </GTabs>
</template>
<script setup>
  import { ref } from 'vue'
  const tab = ref('tab1')
</script>
``` 
:::


### 类型定义


``` ts
interface TabPaneProps {
  tabKey: string
  title?: string
}

interface TabProps {
  default?: string; 
  disable?: string[]; 
  active?: string
}

defineEmits<{
  click: (tab: string) => void
  change: (tab: string) => void
}>()
```

### 类型说明

Tab
| 参数    | 说明           | 类型       | 可选值 | 默认值 |
| ------- | -------------- | ---------- | ------ | ------ |
| default | 默认选中项     | `string`   |        |        |
| disable | 禁用项         | `string[]` |        |        |
| active  | 控制权移交外部 | `string`   |        |        |

TabPane
| 参数   | 说明         | 类型     | 可选值 | 默认值 |
| ------ | ------------ | -------- | ------ | ------ |
| tabKey | 选项卡的标识 | `string` |        |        |
| title  | 选项卡的标题 | `string` |        |        |

### 事件说明

| 事件名 | 说明             | 回调参数      |
| ------ | ---------------- | ------------- |
| click  | 点击选项卡时触发 | `tab: string` |
| change | 切换选项卡时触发 | `tab: string` |

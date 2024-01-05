### 使用用例


#### progress

:::demo 使用 `progress` 参数控制进度条

```vue
<template>
  <GLoading class="gl-loading" :progress="50" />
</template>
``` 

:::


#### stage & parts

:::demo 使用 `stage` 和 `parts` 参数控制进度条

```vue
<template>
  <GLoading class="gl-loading" :stage="7 * 4" :parts="6 * 4 + 2" />
</template>
```

:::

#### 展示

:::demo

```vue
<template>
  <GLoading class="gl-loading" :stage="7 * 4" :parts="parts" />
  <GButton class="w-200 mg-10 bk" type="shrink" icon="round" balance @click="onLoading">Loading</GButton>
</template>
<script setup>
  import { ref } from 'vue';

  const parts = ref(0)
  const timeout = ref(0)

  const waiting = [{
    wait: 0,
    parts: 0
  }, {
    wait: 100,
    parts: 1
  }, {
    wait: 1000,
    parts: 9
  },{
    wait: 500,
    parts: 14
  },{
    wait: 1000,
    parts: 26
  },{
    wait: 2500,
    parts: 28
  }]

  const onLoading = (i = 0) => {
    if (i === 0) clearTimeout(timeout)
    const time = waiting[i]
    if (time) {
      parts.value = time.parts
      timeout.value = setTimeout(() => {
        onLoading(i + 1)
      }, time.wait*5)
    }
  }
</script>
```

:::

### 类型定义


``` ts:no-line-numbers
defineProps<{
  progress: number
} & {
  stage: number  
  parts: number
}>()
```

### 类型说明

| 参数     | 说明              | 类型     | 可选值 | 默认值 |
| -------- | ----------------- | -------- | ------ | ------ |
| progress | 进度条进度        | `number` |        |        |
| stage    | 把总进度分割成n块 | `number` |        |        |
| parts    | 进度条总进度      | `number` |        |        |
<style>
.gl-loading {
  transform: scale(0.8);
}

.w-200 {
  width: 200px !important;
}
.mg-10 {
  margin: 10px !important;
}
.bk {
  display: block;
}

</style>

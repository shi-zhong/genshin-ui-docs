### 使用用例

::: demo 支持 v-model

```vue
<template>
  <div style="background: #000">
    <span style="color: white; font-size: 30px">{{ chosen }}</span>
    <GSelect v-model="chosen" :options="[
      { text: '属性', value: 'attr' },
      { text: '武器', value: 'weapon' },
      { text: '圣遗物', value: 'artifact' },
      { text: '命之座', value: 'life' },
      { text: '天赋', value: 'talent' },
      { text: '资料', value: 'data' },
    ]" />
    <GMenu v-model="chosen" @change="handleUpdate" :options="[
      { txt: '属性', url: 'attr' },
      { txt: '武器', url: 'weapon' },
      { txt: '圣遗物', url: 'artifact', n: 5 },
      { txt: '命之座', url: 'life' },
      { txt: '天赋', url: 'talent' },
      { txt: '资料', url: 'data', n: 0 },
    ]" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const chosen = ref('')
  const handleUpdate = (pve, aft, stop) => {
    if (pve === 'weapon' && aft === 'artifact') {
      stop()
    }
  }
</script>
``` 

:::



### 类型定义


``` ts:no-line-numbers
defineProps<{
  modelValue?: string
  options: {
    txt: string
    url: string
    n?: number
  }[]
}>()

defineEmits<{
  // 使用stop来阻止更新
  (e: 'change', pveUrl: string, aftUrl: string, stop: () => void): void
  (e: 'update:modelValue', value: string): void
}>()
```

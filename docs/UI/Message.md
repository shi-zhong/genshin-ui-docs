### 使用用例

``` ts
import { Message } from 'genshin-ui';
```

:::demo

```vue
<template>
  <GButton class="w-150 mg-10" type="shrink" icon="round" balance @click="() => Message.success('Success')">Success</GButton>
  <GButton class="w-150 mg-10" type="shrink" icon="round" balance @click="() => Message.info('Info')">Info</GButton>
  <GButton class="w-150 mg-10" type="shrink" icon="round" balance @click="() => Message.error('Error')">Error</GButton>
  <GButton class="w-150 mg-10" type="shrink" icon="round" balance @click="() => Message.clear()">清除</GButton>
</template>
``` 

:::


### 类型定义


``` ts:no-line-numbers

export type Message = {
  msg: (
    msg: string | number,
    option?: {
      type?: 'success' | 'info' | 'error'
      duration?: number
    }
  ) => void;
  success: (msg: string | number, duration?: number) => void;
  info: (msg: string | number, duration?: number) => void;
  error: (msg: string | number, duration?: number) => void;
  clear: () => void;
}
```

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

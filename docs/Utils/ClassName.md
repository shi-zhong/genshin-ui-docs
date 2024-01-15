### 类名拼接函数

在为网页元素注册`class`属性时，为了避免冲突污染网页样式，通常每个页面有自己的特殊前缀。现在已经有了许多的解决方案，例如模块化css，vue中的scoped，react中的css-in-js等。受vue中`class`属性可以接受`string`,`Array`,`Object`属性的启发，提供了一个不受框架限制的简单函数。


### 使用示例

<script setup>
  import { ref, watchEffect } from 'vue'
  import { ClassNameFactor, Message } from '@shi-zhong/genshin-ui'

  const value = ref('')
  const S = ClassNameFactor('color-')
  const input = ref('')

  let cooldown = false

  const Msg = () => {
    if (!cooldown) {
      Message.info('unexpected argument')
      cooldown = true
      setTimeout(() => cooldown = false, 2000)
    }
  }

  watchEffect(() => {
    const v = input.value.trim().replaceAll('\n', '')
    const is = /^\[.*\]$/.test(v) || /^\{.*\}$/.test(v)
    const willdo = `value.value = S(${is ? v : `"${v}"`})`

    try {
      eval(willdo)
    } catch (e) {
      console.log(willdo)
      Msg()
    }
  })

  const placeholder = `必要时使用单引号标注字符串
example: 
link,
['red', 'blue'],
{
  red: ['blue', 'white'],
  green: false
}
  `

</script>

<div style="display: flex;">
  <textarea v-model="input" class="input" :placeholder="placeholder" />
  <div class="input list">
    <div v-for="(l, i) in value.split(' ')" :key="l + i">{{ l }}</div>
  </div>
</div>

<style scoped>
  .input {
    font-size: 20px;
    resize: none;
    width: 400px;
    height: 300px;
  }
  .list {
    overflow: auto;
  }
</style>


```ts
import CssModule from './style.css' // style.less style.sass

ClassName('red', 'color-') // 'color-red'
ClassName(['red', 'blue'], 'color-') // 'color-red color-blue'
ClassName({ red: true, blue: false, yellow: true}, 'color-') // 'color-red color-yellow'
ClassName(undefined, 'color-') // 'color-' 此处意义不大，在于 ClassNameFactor

const Style = ClassNameFactor('color-')

Style() // 'color-'
Style('red') // 'color-red'
Style(['red', 'blue']) // 'color-red color-blue'
Style({ red: true, blue: false, yellow: true}) // 'color-red color-yellow'

Style({ 'red-': { blue: 1}}) // color-red-blue
Style({ 'red-': ['first', 'second']}) // color-red-first color-red-second
Style({ 'red-': ['first', { 'second': true}]}) // color-red-first color-red-second


// 对于CssModule来说，函数会依次从对象中取值，当读取不存在的值且debug为true，会在控制台输出样式名用以排查
ClassNameWithCSSModuleFactor(CssModule, 'red', 'color', false)
const CssStyle = ClassNameWithCSSModuleFactor(CssModule, 'color', false)
// 同上，下略
```

简要总结
1. 当参数类型为`string`时，直接拼接前缀和参数
2. 当参数类型为`Array`时，依次拼接前缀和参数
3. 当参数类型为`Object`时，根据键值：
  1. 键值为`number`, `string`, `boolean`时，若是`truthy`，则对键名进行拼接
  2. 键值为`string[]`时，将键名作为前缀进行拼接
  3. 键值为`ClassNameObject`时，对键名进行递归操作

```ts
interface ClassNameObject {
  [key: string]: ClassNameObject | string[] | string | number | boolean;
}

type classNameProps = string | ClassNameObject | undefined | classNameProps[];

type ClassName = (classinfo: classNameProps, prefix: string) => string

type ClassNameWithCSSModule = (
  Style: any,
  classinfo: classNameProps,
  prefix: string,
  debug?: boolean
) => string

type ClassNameFactor = (prefix?: string) => (classinfo: classNameProps) => string

type ClassNameWithCSSModuleFactor = (cssModule: any, prefix?: string, debug?: boolean) => (
  classinfo: classNameProps,
) => string
```
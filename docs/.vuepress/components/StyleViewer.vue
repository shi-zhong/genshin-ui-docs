<!-- @format -->

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{
  styles: string;
}>();

/**
 * --shiki-color-text key
 * --shiki-token-keyword :
 *
 * --shiki-token-function
 * --shiki-token-constant () text
 * --shiki-token-punctuation ，
 */

const sty = ref('');

// read as // @tag: tagName;
const pair =
  /^\s*(--[\w-^_]+)\s*:\s([\w-^_\s,\(\)^;]+;)\s*(\/\/.*@tag: *([a-zA-Z][a-zA-Z-]*[a-zA-Z]);)?/;
/**
 * css变量名 遵循 --开头 包含可以包含数字字母和-的组合
 */

const colors = [
  'black',
  'white',
  'red',
  'green',
  'blue',
  'yellow',
  'orange',
  'purple',
  'gray',
  'brown',
  'pink',
  'violet',
  'gunmetal',
  'darkgreen',
  'lightgreen',
  'grain',
  'greyscale',
  'lightblue',
  'lightgreen',
  'lightyellow',
  'deepblue',
  'darkgreen',
  'lightblue',
  'lightgreen',
  'lightyellow',
  'grain',
  'greyscale',
  'lightblue',
  'lightgreen',
  'lightyellow',
  'darkbrown',
  'lightbrown',
  'darktan',
  'lighttan',
  'darkkhaki',
  'lightkhaki',
  'darkolive',
  'lightolive',
  'darkseagreen',
  'lightseagreen',
  'darkteal',
  'lightteal',
  'darknavy',
  'lightnavy',
  'darkindigo',
  'lightindigo',
  'darkgold',
  'lightgold',
  'darksilver',
  'lightsilver',
  'darkcopper',
  'lightcopper',
];

const colorReg =
  /(^#[0-9a-fA-F]{3,6}$)|rgba?\(\s*[0-9]{1,3}\s*,\s*[0-9]{1,3}\s*,\s*[0-9]{1,3}\s*(,\s*[0-9]{1,3}\s*)?\)/;

const isColor = (s: string) => colorReg.test(s) || colors.includes(s);

const isColorImage = (s: string) => /gradient/.test(s);

const isKeyword = (s: string) => ['deg', 'px', 'rem', 'em'].includes(s);

const explainAttrValue = (value: string) => {
  const readNumber = (s: string) => /^([0-9]+)/.exec(s)?.[0] || '';

  const readText = (s: string) => /^([a-zA-Z-]+)/.exec(s)?.[0] || '';

  const operator = (s: string) => /^[\+\-\*\/,;\(\)]/.exec(s)?.[0] || '';

  const space = (s: string) => /^\s+/.exec(s)?.[0] || '';

  let i = 0;

  const tokens: any[] = [];

  /**
   * 1. 将左括号合并至左侧text，形成func
   * 2. 将空白区域合并至左侧任意类型
   */

  const mergeToken = (nk: any) => {
    const l = tokens[tokens.length - 1];

    if (l === undefined) {
      tokens.push(nk);
    } else {
      if (nk.type === 'space' || nk.type === l.type) {
        l.value += nk.value;
      } else if (nk.value === '(' && l.type === 'text') {
        l.role = '--shiki-token-function';
        tokens.push(nk);
      } else if (nk.type === 'text' && isKeyword(nk.value)) {
        nk.role = '--shiki-token-keyword';
        tokens.push(nk);
      } else {
        tokens.push(nk);
      }
    }
  };

  while (i <= value.length) {
    // read number
    const n = readNumber(value.slice(i));
    if (n !== '') {
      mergeToken({
        type: 'number',
        value: n,
        role: '--shiki-token-constant',
      });
      i += n.length;
      continue;
    }

    // read text
    const t = readText(value.slice(i));
    if (t !== '') {
      if (isKeyword(t)) {
        mergeToken({
          type: 'keyword',
          value: t,
          role: '--shiki-token-keyword',
        });
      } else {
        mergeToken({
          type: 'text',
          value: t,
          role: '--shiki-token-constant',
        });
      }
      i += t.length;
      continue;
    }

    // read operator
    const o = operator(value.slice(i));
    if (o !== '') {
      mergeToken({
        type: 'operator',
        value: o,
        role: ['(', ')', ';'].includes(o)
          ? '--shiki-color-text'
          : o === ','
          ? '--shiki-token-punctuation'
          : '--shiki-token-keyword',
      });
      i += o.length;
      continue;
    }

    // read space
    const s = space(value.slice(i));
    if (s !== '') {
      mergeToken({
        type: 'space',
        value: s,
        role: 'space',
      });
      i += s.length;
      continue;
    }

    break;
  }

  return tokens;
};

// 按属性处理原文本，将行根据是否属于同一属性进行分类
const splitCssVariableSets = (str: string) => {
  const sets: (string | string[])[] = [];

  let close = true;

  str.split('\n').forEach((l: string) => {
    if (close) {
      if (l.includes(';') || l.trim() === '') sets.push(l);
      else {
        close = false;
        sets.push([l]);
      }
    } else {
      (sets[sets.length - 1] as string[]).push(l);
      if (l.includes(';')) close = true;
    }
  });

  return sets;
};

// 处理各个属性，提取属性名和属性值, 尝试进行tag解析
const getKeyValueTag = (line: string | string[]) => {
  const result = pair.exec(typeof line !== 'string' ? line.join('\n') : line);

  if (result === null)
    return {
      origin: line,
      k: '',
      v: '',
      tag: '',
      tokens: [],
    }; // 空行

  const [_d, k, v, _d2, tag] = result;

  const Variable = {
    origin: line,
    k,
    v,
    tag: tag || '',
    tokens: [
      { role: '--shiki-color-text', value: k },
      { role: '--shiki-token-keyword', value: ': ' },
      ...explainAttrValue(v),
    ],
  };

  if (tag === undefined) {
    // 尝试解析tag
    if (isColor(v) || isColorImage(v)) {
      Variable.tag = 'background';
    }
  }

  return Variable;
};

const preDecoded = computed(() =>
  splitCssVariableSets(props.styles || '')
    .map(getKeyValueTag)
);

// console.log(preDecoded.value);
</script>

<template>
  <div
    class="large-preview"
    :style="sty"
  >
    点击色块预览
  </div>
  <div class="language-css ext-css-variables">
    <pre
      class="shiki"
      style="background-color: var(--shiki-color-background)"
    >
<code>
<template v-for="(pre, i) in preDecoded" :key="i"><span class="line"><span title="点击预览" class="color-block" :style="`${pre.tag}: var(${pre.k})`" @click="sty = `${pre.tag}: var(${pre.k})`"></span><span v-for="token in pre.tokens" :key="token.value" :style="`color: var(${token.role})`">{{ token.value }}</span></span>
</template>
</code></pre>
  </div>
</template>

<style>
div[class*='language-'].ext-css-variables:before {
  content: 'css-variables';
}

.color-block {
  display: inline-block;
  vertical-align: middle;
  width: 15px;
  margin: 5px;
  aspect-ratio: 1;
}

.large-preview {
  height: 600px;
  width: 80px;

  position: fixed;
  right: 30px;
}
</style>

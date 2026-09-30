<!-- @format -->

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  name?: string;
  define: string;
  defaults?: object;
  repeat?: boolean
}>();

const handleProps = (props: string, defaults?: object) => {
  return props
    .split('\n')
    .filter((item) => item)
    .map((item) => {
      const resReg = /([a-zA-Z^?:]*):(.*)\/\/(.*)/.exec(item);
      if (resReg === null) return;

      const res = {
        name: resReg[1].trim(),
        types: resReg[2].trim(),
        describe: resReg[3].trim(),
        optional: false,
        default: undefined,
      };

      if (res.name.endsWith('?')) {
        res.name = res.name.slice(0, -1);
        res.optional = true;
      }

      if (defaults?.hasOwnProperty(res.name)) {
        res.default = defaults[res.name];
      }

      if (res.name === 'modelValue') {
        res.name = 'v-model';
      }

      return res;
    });
};

const pps = ref(handleProps(props.define, props.defaults));

const propsDefines = ['参数', '说明', '类型', '是否可选', '默认值'];
</script>

<template>
  <h3 v-if="!repeat" id="参数定义" tabindex="-1"><a class="header-anchor" href="#参数定义" aria-hidden="true">#</a> 参数定义</h3>
  <h4
    :id="name"
    v-if="name"
    tabindex="-1"
  >
    <a
      class="header-anchor"
      :href="`#${name}`"
      aria-hidden="true"
      >#</a
    >
    {{ name }}
  </h4>
  <table>
    <thead>
      <tr>
        <th
          v-for="t of propsDefines"
          :key="t"
        >
          {{ t }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="l of pps"
        :key="l.name"
      >
        <td>{{ l.name }}</td>
        <td>{{ l.describe }}</td>
        <td>
          <code>{{ l.types }}</code>
        </td>
        <td>
          <code>{{ l.optional ? '可选' : '必须' }}</code>
        </td>
        <td>
          <code>{{ l.default ?? '-' }}</code>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="less"></style>

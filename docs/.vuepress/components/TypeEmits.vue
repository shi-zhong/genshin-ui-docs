<!-- @format -->

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  name?: string;
  define: string;
  defaults?: object;
  repeat?: boolean;
}>();

const handleProps = (props: string) => {
  return props
    .split('\n')
    .filter((item) => item)
    .map((item) => {
      const sp = item.split('@');
      return {
        name: sp[0].trim(),
        desc: sp[1].trim(),
        type: sp[2].trim(),
      };
    });
};

const pps = ref(handleProps(props.define));

const propsDefines = ['事件名', '说明', '回调参数'];
</script>

<template>
  <h3
    v-if="!repeat"
    id="事件说明"
    tabindex="-1"
  >
    <a
      class="header-anchor"
      href="#事件说明"
      aria-hidden="true"
      >#</a
    >
    事件说明
  </h3>
  <p>{{ name }}</p>
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
        <td>{{ l.desc }}</td>
        <td>
          <code>{{ l.type }}</code>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="less"></style>

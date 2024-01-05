<script setup lang="ts">
/** @todo 使用网络获取数据  */
interface ArtifacDescribe {
  active: number; // 激活数
  name: string;
  hideDisable?: boolean;
  effects: {
    limit: number;
    describe: string;
  }[]
}

withDefaults(defineProps<ArtifacDescribe & { size?: number }>(), {
  size: 50
});

</script>

<template>
  <div :style="`--title-height: ${size}px`">
    <div class="describe-enable">{{ name }}:</div>
    <div
      class="suit"
      v-for="i of effects"
      :key="i.limit"
      v-show="!(hideDisable && i.limit > active)"
    >
      <GEnable
        :size="size / 3"
        :enable="i.limit <= active"
      />
      <div
        :class="{
          'describe-enable': i.limit <= active,
          effect: true
        }"
      >
        {{ i.limit }}件套：{{ i.describe }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.effect {
  text-align: justify;
  display: inline-block;
  color: var(--font-light-gray);
  line-height: calc(var(--title-height, 50px) * 0.5);
}
.suit {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 5px;
}
.describe-enable {
  color: var(--font-green);
}
</style>

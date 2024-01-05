<script setup lang="ts">
interface WeaponDescribeProps {
  refine: number;
  effect: {
    name: string;
    describe: string;
    $: number[][];
  };
}

const props = withDefaults(defineProps<WeaponDescribeProps & { size?: number }>(), {
  size: 50
});

/**
 * 将数字或字符串编码成百分比格式或从百分比格式还原
 * 字符串转换需要匹配 /^\d+.?\d+%?$/ => 10.54% | 10 | 10.54
 * 因为精度问题，会调用toPrecision(15)
 * @param data
 */
function DataDecoder(data: string): number;
function DataDecoder(data: number, fix?: number): string;
function DataDecoder(data: number | string, fix?: number) {
  if (typeof data === 'number') {
    if (data > 1) {
      return fix === undefined ? data + '' : data.toFixed(fix);
    } else {
      return fix === undefined
        ? Number((data * 100).toPrecision(15)) + '%'
        : Number((data * 100).toFixed(15)).toFixed(fix) + '%';
    }
  } else if (/^(\d|,)+(.\d+)?%?$/.test(data)) {
    // 成功匹配字符串
    const nData = data
      .split('')
      .filter((s) => s !== ',')
      .join('');
    if (nData.includes('%')) {
      return Number((0.01 * Number(nData.slice(0, -1))).toPrecision(15));
    } else {
      return Number(nData);
    }
  } else {
    return 0;
  }
}


const describeDecoder = (code: string) => {
  const decode:any[] = [];
  let str = '';
  let i = 0;
  while (i < code.length) {
    if (code[i] !== '$') {
      str += code[i];
    } else {
      // 提交文本部分
      decode.push({
        type: 'text',
        value: str
      });
      str = '';
      // 提交数值部分

      decode.push({
        type: 'value',
        value: code[i + 1]
      });
      i++;
    }
    i++;
  }

  if (str !== '') {
    decode.push({
      type: 'text',
      value: str
    });
  }
  return decode;
};
const valueDecoder = (value: string) => {
  const data = props.effect['$'][Number(value) - 1];
  if (props.refine == 0) {
    // group
    const group = [
      {
        type: 'text',
        value: '('
      }
    ];
    data.forEach((v, i) => {
      group.push({
        type: 'value',
        value: DataDecoder(v)
      });
      if (i !== data.length - 1) {
        group.push({
          type: 'text',
          value: ' / '
        });
      }
    });
    group.push({
      type: 'text',
      value: ')'
    });
    return group;
  } else {
    return [
      {
        type: 'value',
        value: DataDecoder(data[props.refine - 1])
      }
    ];
  }
};
</script>

<template>
  <div :style="`--title-height: ${size}px`">
    <div>{{ effect.name }}</div>
    <div class="weapon-describe-content">
      <template
        v-for="(des, index) in describeDecoder(effect.describe)"
        :key="index"
      >
        <span
          v-if="des.type === 'text'"
          class="weapon-inhert"
          >{{ des.value }}
        </span>
        <template
          v-else
          v-for="(v, index) in valueDecoder(des.value)"
          :key="index"
        >
          <span :class="{ 'weapon-blue': v.type === 'value', 'weapon-inhert': v.type === 'text' }">
            {{ v.value }}
          </span>
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped>
.weapon-blue {
  color: rgb(56, 153, 202);
}
.weapon-inhert {
  color: inherit;
}
.weapon-describe-content {
  word-break: break-all;
}
</style>

### 使用用例

#### Card

::: demo 此处展现效果未进行细节刻画，仅供参考
```vue
<template>
  <div style="background: var(--font-light-gray)">
    <GCard
      showStar
      :star="5"
      :imgUrl="$withBase('/sky-bow.webp')"
      desc="Lv.90"
    > 
      <GRefine style="margin:5px" :refine="3" :size="15" />
      <GLock lock />
    </GCard>

    <GCard
      showStar
      :star="4"
      :imgUrl="$withBase('/flower.webp')"
      desc="Lv.16"
    > 
      <GLock />
    </GCard>

    <GCard
      :star="5"
      :imgUrl="$withBase('/Ayaka.png')"
      desc="神里绫华"
      foucsing
    > 
      <GIcon class="card-element" :src="ElementWebp.Cryo" />
    </GCard>
  </div>
</template>
<script setup>
  import { ElementWebp } from '@shi-zhong/genshin-ui'
  
</script>
```
:::


#### DetailCard

::: demo

```vue
<template>
  <GDetailCard 
    :size="30"
    class="in-bk"
    title="天空之翼"
    :rarity="5"
    type="弓"
    :imgUrl="$withBase('/sky-bow.webp')"
    :main="{key: '基础攻击力', value: '674'}"
    :sub="{key: '暴击率', value: '22.1%'}"
  >
    <div class="wp-lvl-container">
      <div style="display: flex">
        <span class="wp-lvl">Lv.90 / 90</span>
        &nbsp; &nbsp;
        <GRankBar :rank="6" :maxRank="6" :size="15" />
      </div>
      <GLock :size="20" lock />
    </div>
    <GRefine :refine="3" :size="18" text />
    <!-- 文档中定义的组件 -->
   <WeaponDescribe
      :refine="3"
      :effect="{
        name: '回响长天的诗歌',
        describe: '· 暴击伤害提高$1；攻击命中时有$2概率造成125%攻击力的小范围物理伤害，该效果每$3秒只能触发一次',
        $: [[ 0.2, 0.25, 0.30, 0.35, 0.40], [0.60, 0.75, 0.90, 1.05, 1.20], [4, 3.5, 3, 2.5, 2]],
      }"
    />
    <div class="wp-describe">象征风龙身为风之神眷属的大弓。释弦时的鸣声是风之神的偏爱，蕴含苍空与长风的力量</div>
  </GDetailCard>

  <GDetailCard 
    :size="30"
    class="in-bk"
    title="乐团的晨光"
    :rarity="5"
    type="生之花"
    :imgUrl="$withBase('/flower.webp')"
    :main="{key: '生命值', value: '4,780'}"
  >
    <div class="wp-lvl-container">
      <div style="display: flex">
        <span class="wp-lvl">+20</span>
      </div>
      <GLock :size="20" lock />
    </div>

    <div>
      <div> · 攻击力+33</div>
      <div> · 暴击率+11.3%</div>
      <div> · 元素精通+16</div>
      <div> · 暴击伤害+21.8%</div>
    </div>
   <ArtifactDescribe
      name="流浪大地的乐团"
      :active="3"
      :effects="[{
        limit: 2,
        describe: '元素精通提高80点'
      }, {
        limit: 4,
        describe: '装备该圣遗物套装的角色为法器、弓箭角色时，角色重击造成的伤害提高35%'
      }]"
    />
    <div class="wp-describe">小小的花型徽章。侧耳细听的话，仿佛能听到悠扬的笛声和清新的歌唱声。</div>
  </GDetailCard>
</template>
``` 

:::


### 类型定义


``` ts

interface CardProps {
  showStars?: boolean
  star: 1 | 2 | 3 | 4 | 5
  imgUrl: string
  desc?: string
  foucsing?: boolean
}

interface DetailCardProps {
  size?: number;
  title?: string
  type?: string
  rarity?: 1 | 2 | 3 | 4 | 5
  imgUrl?: string
  main?: {
    key: string
    value: string
    [key: string]: any
  }
  sub?: {
    key: string
    value: string
    [key: string]: any
  }
}
```

### 类型说明

#### Card
| 参数      | 说明                | 类型      | 可选值              | 默认值  |
| --------- | ------------------- | --------- | ------------------- | ------- |
| showStars | 展示星星            | `boolean` |                     | `false` |
| star      | 星级                | `number`  | `1` `2` `3` `4` `5` | `1`     |
| imgUrl    | 图片地址            | `string`  |                     |         |
| desc      | 描述                | `string`  |                     |         |
| foucsing  | 聚焦:表现为选中效果 | `boolean` |                     | `false` |


#### DetailCard
| 参数   | 说明     | 类型     | 可选值              | 默认值  |
| ------ | -------- | -------- | ------------------- | ------- |
| title  | 标题     | `string` |                     | `Title` |
| type   | 类型     | `string` |                     |         |
| rarity | 稀有度   | `number` | `1` `2` `3` `4` `5` | `1`     |
| imgUrl | 图片地址 | `string` |                     |         |
| main   | 主属性   | `object` |                     |         |
| sub    | 副属性   | `object` |                     |         |
| size   |          | `number` |                     | `50`    |


### 插槽说明

#### Card
| 名称    | 说明                   |
| ------- | ---------------------- |
| default | 星星区域上方的空白部分 |


#### DetailCard
| 名称    | 说明               |
| ------- | ------------------ |
| default | 卡片下方的空白部分 |

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

  .wp-describe {
    margin-top: 10px;
    font-size: var(--attribute-size);
    color: var(--font-light-gray);
  }

  .card-element {
    width: 30px;
    margin: 3px;
  }

  .wp-lvl {
    display: inline-block;

    padding: 0 10px;
    border-radius: 3px;
    background-color: var(--shadow);
    font-size: calc(var(--attribute-size) * 0.8);
    color: var(--blank-white);
  }

  .wp-lvl-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }

</style>
<template>
  <div class="container">
    <Category title="美食">
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsales.mafengwo.net%2Fmfs%2Fs12%2FM00%2F25%2F04%2FwKgED1vAdMCAWGnZAARZUzY2n2o52.jpeg&refer=http%3A%2F%2Fsales.mafengwo.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655194027&t=8461c1485a2923b7045a8f18e25c24ae" alt="">
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(item,index) in games" :key="index">
          {{ item }}
        </li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Count";

export default {
  name: 'App',
  data: function () {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
    }
  },
  components: {
    Category
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>


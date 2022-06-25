<template>
  <div class="container">
    <Category title="美食">
      <img slot="center"
           src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsales.mafengwo.net%2Fmfs%2Fs12%2FM00%2F25%2F04%2FwKgED1vAdMCAWGnZAARZUzY2n2o52.jpeg&refer=http%3A%2F%2Fsales.mafengwo.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655194027&t=8461c1485a2923b7045a8f18e25c24ae"
           alt="">
      <a slot="footer" href="https://blog.csdn.net/weixin_46370979?spm=1011.2415.3001.5343">我的csdn</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">
          {{ item }}
        </li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://github.com/Morries-Wu">我的github</a>
        <a href="https://space.bilibili.com/435453411?spm_id_from=333.1007.0.0">我的bilibili</a>
      </div>
    </Category>

    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" slot="center"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.bilibili.com/">经典</a>
          <a href="https://www.bilibili.com/">经典</a>
          <a href="https://www.bilibili.com/">经典</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>

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
.container, .foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>


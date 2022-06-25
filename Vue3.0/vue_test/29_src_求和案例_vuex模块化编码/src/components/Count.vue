<template>
  <div align="center">
    <h1>当前求和为:{{ sum }}</h1>
    <h3>当前求和放大10倍为:{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <h3 style="color: red">Person组件的总人数是:{{ personList.length }}</h3>

    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd(num)">当前求和为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button>
  </div>

</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: "Count",
  data: function () {
    return {
      /*当前用户选择的数字*/
      num: 1,
    }
  },
  methods: {
    ...mapMutations('countAbout',{increment: 'JIA', decrement: 'JIAN'}),
    ...mapActions('countAbout',{incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'})

  },
  computed: {
    /*...mapState(['countAbout','personAbout']),*/
    ...mapState('countAbout', ['sum', 'school', 'subject']),
    ...mapState('personAbout', ['personList']),

    /*...mapGetters(['countOptions'])*/
    ...mapGetters('countAbout', ['bigSum'])
  },
  mounted() {
    const x = mapState({
      sum: 'sum',
      school: 'school',
      subject: 'subject'
    })
    console.log(x);
  },


}
</script>

<style>
button {
  margin-left: 5px;
}

</style>

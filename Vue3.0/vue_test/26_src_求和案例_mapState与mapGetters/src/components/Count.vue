<template>
  <div align="center">
    <h1>当前求和为:{{ sum }}</h1>
    <h3>当前求和放大10倍为:{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>

    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>

</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: "Count",
  data: function () {
    return {
      /*当前用户选择的数字*/
      num: 1,
    }
  },
  methods: {
    increment: function () {
      this.$store.commit("JIA", this.num)
    },
    decrement: function () {
      this.$store.commit("JIAN", this.num)
    },
    incrementOdd: function () {
      this.$store.dispatch('jiaOdd', this.num)
    },
    incrementWait: function () {

      this.$store.dispatch('jiaWait', this.num)


    }
  },
  computed: {
    /*
    靠程序员自己亲自去写计算属性
    sum: function () {
      return this.$store.state.sum
    },
    school: function () {
      return this.$store.state.school
    },
    subject: function () {
      return this.$store.state.subject
    },
    bigSum: function () {
      return this.$store.getters.bigSum
    }

    */

    /*借助mapState生成计算属性,从state中读取数据,(对象写法)
     ...mapState({sum:'sum', school:'school', subject:'subject'}),*/

    /*借助mapState生成计算属性,从state中读取数据,(数组写法)*/
    ...mapState(['sum','school','subject']),

    /*借助mapGetters生成计算属性,从getters中读取数据*/
    ...mapGetters(['bigSum'])

  },
  mounted() {
    console.log('CountComponent', this)
    const x=mapState({
      sum:'sum',
      school:'school',
      subject:'subject'
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

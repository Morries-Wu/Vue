<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为:{{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addPersonWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个人,名字随机</button>
    <ul>
      <li v-for="item in personList" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>

</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {nanoid} from 'nanoid'

export default {
  name: "Person",
  data: function () {
    return {
      name: ""
    }
  },
  computed: {
    ...mapState('personAbout', ['personList']),
    ...mapState('countAbout', ['sum']),
    firstPersonName: function () {
      return this.$store.getters['personAbout/firstPersonName']
    }
  },
  methods: {
    add: function () {
      const personObj = {id: nanoid(), name: this.name}
      this.$store.commit('personAbout/ADD_PERSON', personObj)
      this.name = ""
    },
    addPersonWang: function () {
      const personObj = {id: nanoid(), name: this.name}
      this.$store.dispatch('personAbout/addPersonWang', personObj)
      this.name = ""
    },
    addPersonServer:function (){
      this.$store.dispatch('personAbout/addPersonServer')
    }
  }

}
</script>

<style scoped>

</style>

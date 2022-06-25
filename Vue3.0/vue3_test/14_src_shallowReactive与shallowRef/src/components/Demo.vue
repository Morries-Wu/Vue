<template>
  <h4>当前的x是{{ x }}</h4>
  <button @click="x++">点我x++</button>
  <br>
  <h4>{{ person }}</h4>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.job1.salary }}</h2>
  <button @click="name+='~'">修改姓名</button>
  <br>
  <button @click="age++">增长年龄</button>
  <br>
  <button @click="job.job1.salary++">涨薪</button>

</template>

<script>
import {reactive, toRefs, shallowReactive, shallowRef, ref} from "vue";

export default {
  name: "Demo",
  setup: function () {
    /*
    只会考虑第一层数据的响应式
    let person =shallowReactive({})
    */
    
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        job1: {
          salary: 20
        }
      }
    })

    let x = shallowRef(0)


    /*返回一个对象(常用)*/
    return {
      person,
      ...toRefs(person),
      x
    }
  },


}
</script>

<style scoped>

</style>

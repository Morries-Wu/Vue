<template>
  <h4>当前求和为{{ sum }}</h4>
  <button @click="sum++">点我sum++</button>
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
import {reactive, ref, toRefs, readonly,shallowReadonly} from "vue";

export default {
  name: "Demo",
  setup: function () {


    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        job1: {
          salary: 20
        }
      }
    })

    let sum = ref(0)
    /*person=readonly(person)*/

    person=shallowReadonly(person)


    /*返回一个对象(常用)*/
    return {
      person,
      ...toRefs(person),
      sum
    }
  },


}
</script>

<style scoped>

</style>

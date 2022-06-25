<template>
  <h4>{{ person }}</h4>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ salary }}</h2>
  <button @click="name+='~'">修改姓名</button>
  <br>
  <button @click="age++">增长年龄</button>
  <br>
  <button @click="salary++">涨薪</button>

</template>

<script>
import {reactive, toRef, toRefs} from "vue";

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

    const Obj = toRefs(person)
    console.log(Obj);


    /*返回一个对象(常用)*/
    return {
      person,
      /*
      name: toRef(person, 'name'),
      age: toRef(person, 'age'),
      salary: toRef(person.job.job1, 'salary')
      */
      ...toRefs(person)
    }
  },


}
</script>

<style scoped>

</style>

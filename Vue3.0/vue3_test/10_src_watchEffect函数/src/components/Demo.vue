<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <br>
  <h2>当前的信息为:{{ msg }}</h2>
  <button @click="msg+='!'">修改信息</button>
  <br>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ person.job.job1.salary }}</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <br>
  <button @click="person.age++">增长年龄</button>
  <br>
  <button @click="person.job.job1.salary++">涨薪</button>

</template>

<script>
import {ref, watch, reactive, watchEffect} from "vue";

export default {
  name: "Demo",
  setup: function () {
    let sum = ref(0)
    let msg = ref('Morries_wu')
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        job1: {
          salary: 20
        }
      }
    })

    /*监视
    watch(sum, (newValue, oldValue) => {
          console.log('sum的值变化了', newValue, oldValue)
        }, {immediate: true}
    )*/

    watchEffect(() => {
      const x1 = sum.value
      const x2 = person.job.job1.salary
      console.log('watchEffect所指定的回调执行了')
    })


    /*返回一个对象(常用)*/
    return {
      sum,
      msg,
      person
    }
  },


}
</script>

<style scoped>

</style>

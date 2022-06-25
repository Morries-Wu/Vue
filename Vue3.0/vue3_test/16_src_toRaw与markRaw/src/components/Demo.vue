<template>
  <h4>当前求和为{{ sum }}</h4>
  <button @click="sum++">点我sum++</button>
  <br>
  <h4>{{ person }}</h4>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.job1.salary }}</h2>
  <h3 v-show="person.car">座驾信息:{{ person.car }}</h3>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.job1.salary++">涨薪</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">添加一辆车</button>
  <button @click="person.car.name+='!'">换车名</button>
  <button @click="changePrice">换价格</button>

</template>

<script>
import {reactive, ref, toRefs, toRaw, markRaw} from "vue";

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

    function showRawPerson() {
      const P = toRaw(person)
      P.age++
      console.log(P)
    }

    function addCar() {
      let car = {
        name: '奔驰',
        price: 40
      }
      person.car = markRaw(car)
    }

    function changePrice(){
      person.car.price++
      console.log(person.car.price);
    }


    /*返回一个对象(常用)*/
    return {
      person,
      ...toRefs(person),
      sum,
      showRawPerson,
      addCar,
      changePrice
    }
  },


}
</script>

<style scoped>

</style>

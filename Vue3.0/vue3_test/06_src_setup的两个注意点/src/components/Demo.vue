<template>
  <h1>一个人的信息</h1>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "Demo",
  props: ['msg', 'school'],
  emits: ['hello'],
  setup: function (props, context) {
    /*详单与Vue2中的$attrs*/
    console.log(props, context)
    /*详单与Vue2中的$attrs*/
    console.log(props, context.attrs)
    /*触发自定义事件的*/
    console.log(props, context.emit)
    /*插槽*/
    console.log(props, context.slots)

    let person = reactive({
      name: 'Morries_Wu',
      age: 18,
    })

    /*方法*/
    function test() {
      context.emit('hello', 666)
    }


    /*返回一个对象(常用)*/
    return {
      person,
      test
    }

  },
  beforeCreate() {
    console.log('---beforeCreate---')
  },

}
</script>

<style scoped>

</style>

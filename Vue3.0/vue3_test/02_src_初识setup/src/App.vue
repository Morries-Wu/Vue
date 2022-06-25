<template>
  <h1>一个人的信息</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>性别:{{ sex }}</h2>
  <button @click="sayHello">说话(Vue3所配置的--sayHello)</button>
  <br>
  <button @click="sayWelcome">说话(Vue2所配置的--sayWelcome)</button>
  <br>
  <button @click="Test2">测试一下在Vue2的配置中去读取Vue3中的数据、方法</button>
  <br>
  <button @click="Test3">测试一下在Vue3的配置中去读取Vue2中的数据、方法</button>

</template>

<script>
import {h} from 'vue'

export default {
  name: 'App',
  data: function () {
    return {
      sex: '男'
    }
  },
  methods: {
    sayWelcome: function () {
      alert('欢迎来到华广')
    },
    Test2: function () {
      console.log(this.sex)
      console.log(this.name)
      console.log(this.age)
      console.log(this.sayHello)
    }
  },
  /*此处只是测试一个setup,暂时不考虑响应式问题*/
  setup: function () {
    /*数据*/
    let name = 'Morries_Wu'
    let age = 18

    /*方法*/
    function sayHello() {
      alert(`我叫${name},我${age}岁了,你好啊!`)
    }

    function Test3() {
      console.log(this.name)
      console.log(this.age)
      console.log(this.sex)
      console.log(sayHello)
      console.log(this.sayWelcome)
    }

    /*返回一个对象(常用)*/
    return {
      name,
      age,
      sayHello,
      Test3
    }

    /*返回一个函数(渲染函数)*/
    return () => h('h1', '尚硅谷')

  }
}
</script>



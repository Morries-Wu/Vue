<template>
  <div align="center">
    <h1>一个人的信息</h1>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>工作种类:{{job.type}}</h2>
    <h2>工作薪水:{{job.salary}}</h2>
    <button @click="changeInfo">修改人的信息</button>
  </div>


</template>

<script>
import {ref} from 'vue'

export default {
  name: 'App',
  setup: function () {
    /*数据*/
    let name = ref('Morries_Wu')
    let age = ref(18)
    let job=ref({
      type:'后端工程师',
      salary:'30k'
    })

    function changeInfo() {
      name.value = '老六'
      age.value = 20
      job.value.type='算法工程师'
      job.value.salary='50k'
      console.log(this)
    }


    /*返回一个对象(常用)*/
    return {
      name,
      age,
      job,
      changeInfo
    }

  }
}
</script>



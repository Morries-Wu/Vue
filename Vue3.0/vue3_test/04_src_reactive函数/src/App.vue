<template>
  <div align="center">
    <h1>一个人的信息</h1>
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <h2>工作种类:{{ person.job.type }}</h2>
    <h2>工作薪水:{{ person.job.salary }}</h2>
    <h3>爱好:{{ person.hobby }}</h3>
    <h3>测试的数据c:{{ person.job.a.b.c }}</h3>
    <button @click="changeInfo">修改人的信息</button>
  </div>


</template>

<script>
import {reactive} from 'vue'

export default {
  name: 'App',
  setup: function () {
    /*数据*/
    /*
    let name = ref('Morries_Wu')
    let age = ref(18)
    */

    /*
    let job = reactive({
      type: '后端工程师',
      salary: '30k',
      a: {
        b: {
          c: 666
        }
      }
    })
    */

    /*let hobby = reactive(['抽烟', '喝酒', '洗澡'])*/

    let person = reactive({
      name: 'Morries_Wu',
      age: 18,
      job: {
        type: '后端工程师',
        salary: '30k',
        a: {
          b: {
            c: 666
          }
        }
      },
      hobby: ['抽烟', '喝酒', '洗澡']
    })


    function changeInfo() {
      /*
      name.value = '老六'
      age.value = 20
      job.type = '算法工程师'
      job.salary = '50k'
      job.a.b.c = 999
      hobby[0] = '老六'
      console.log(job)*/

      person.name = '老六'
      person.age = 20
      person.job.type = '算法工程师'
      person.job.salary = '50k'
      person.job.a.b.c = 999
      person.hobby[0] = '老六'
      console.log(person.job)
    }


    /*返回一个对象(常用)*/
    return {
      /*name,
      age,
      job,
      hobby,*/
      person,
      changeInfo
    }

  }
}
</script>



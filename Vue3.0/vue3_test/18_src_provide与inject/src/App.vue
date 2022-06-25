<template>
  <div class="app" align="center">
    <h3>我是App组件(祖),车名:{{ name }},价格:{{ price }}</h3>
    <Child/>
  </div>
</template>

<script>
import Child from "@/components/Child";
import {provide, reactive, toRefs} from "vue";

export default {
  name: 'App',
  components: {
    Child
  },
  setup: function () {
    let car = reactive({
      name: '奔驰',
      price: '40W'
    })

    /*给自己的后代组件传递数据*/
    provide('car', car)

    return {
      ...toRefs(car)
    }


  }

}
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>



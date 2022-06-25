<template>
  <div class="app" align="center">
    <h3>我是App组件(祖)</h3>
  </div>
</template>

<script>

import {reactive, toRefs, ref, readonly, isReactive, isReadonly, isRef, isProxy} from "vue";

export default {
  name: 'App',
  components: {},
  setup: function () {
    let car = reactive({
      name: '奔驰',
      price: '40W'
    })
    let sum = ref(0)
    let car2 = readonly(car)

    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(car2))
    console.log(isProxy(car2))
    console.log(isProxy(car))


    return {
      ...toRefs(car),
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



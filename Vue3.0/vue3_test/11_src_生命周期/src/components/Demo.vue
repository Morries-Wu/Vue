<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue";

export default {
  name: "Demo",
  setup: function () {
    console.log('--setup--')
    let sum = ref(0)

    /*通过组合式API的形式去使用声明周期钩子*/
    onBeforeMount(() => {
      console.log('--onBeforeMount--')
    })

    onMounted(() => {
      console.log('--onMounted--')
    })

    onBeforeUpdate(() => {
      console.log('--onBeforeUpdate--')
    })

    onUpdated(() => {
      console.log('--onUpdated--')
    })

    onBeforeUnmount(() => {
      console.log('--onBeforeUnmount--')
    })

    onUnmounted(() => {
      console.log('--onUnmounted--')
    })


    /*返回一个对象(常用)*/
    return {
      sum,
    }
  },
  beforeCreate() {
    console.log('--beforeCreate--')
  },
  Create() {
    console.log('--Create--')
  },
  beforeMount() {
    console.log('--beforeMount--')
  },
  mounted() {
    console.log('--mounted--')
  },
  beforeUpdate() {
    console.log('--beforeUpdate--')
  },
  updated() {
    console.log('--updated--')
  },
  beforeUnmount() {
    console.log('--beforeUnmount--')
  },
  unmounted() {
    console.log('--unmounted--')
  }


}
</script>

<style scoped>

</style>

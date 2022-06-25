<template>
  <div class="Son">
    <h3>我是Son组件(孙),车名:{{ car.name }},价格:{{ car.price }}</h3>
  </div>
</template>

<script>
import {inject, toRefs} from "vue";

export default {
  name: "Son",
  setup: function () {
    let car = inject('car')
    return {
      car
    }
  }
}
</script>

<style>
.Son {
  background-color: orange;
  padding: 10px;
}
</style>

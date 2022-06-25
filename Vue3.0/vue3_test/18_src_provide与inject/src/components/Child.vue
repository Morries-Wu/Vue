<template>
  <div class="Child">
    <h3>我是Child组件(子),车名:{{ car.name }},价格:{{ car.price }}</h3>
    <Son/>
  </div>
</template>

<script>
import Son from "@/components/Son";
import {inject} from "vue";

export default {
  name: "Child",
  components: {
    Son
  },
  setup: function () {
    let car = inject(`car`)
    return {car}
  }
}
</script>

<style>
.Child {
  background-color: skyblue;
  padding: 10px;
}
</style>

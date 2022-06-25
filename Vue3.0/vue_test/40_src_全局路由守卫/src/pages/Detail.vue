<template>
  <ul>
    <li>a:{{id}}</li>
    <li>b:{{title}}</li>
  </ul>

</template>

<script>
export default {
  name: "Detail",
  /*props:['a','b'],*/
  props:['id','title']
}
</script>

<style scoped>

</style>

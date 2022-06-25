<template>
  <!--组件结构  -->
  <div class="demo">
    <h2 class="title">学校名称:{{name}}</h2>
    <h2 class="qwe">学校地址:{{address}}</h2>
  </div>
</template>

<script>
  /*组件交互相关的代码(数据、方法等等)*/
  export default {
    name: 'School',
    data:function () {
      return{
        name: "广工",
        address:"广东",
      }
    },
  }
</script>

<style lang="less">
.demo{
  background-color: pink;
  .qwe{
    font-size: 40px;
  }
}
</style>


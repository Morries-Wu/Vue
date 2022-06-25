<template>
  <!--组件结构  -->
  <div class="demo">
    <h2 @click="showName">学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
  /*import {mix} from "../../mixin";*/
  /*组件交互相关的代码(数据、方法等等)*/
  export default {
    name: 'School',
    data:function () {
      return{
        name: "广工",
        address:"广东",
      }
    },
    /*mixins:[mix]*/
  }
</script>


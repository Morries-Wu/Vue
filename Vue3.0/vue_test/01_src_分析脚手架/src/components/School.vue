<template>
  <!--组件结构  -->
  <div class="demo">
    <h2>学校名称:{{schoolName}}</h2>
    <h2>学校地址:{{address}}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
  /*组件交互相关的代码(数据、方法等等)*/
  export default {
    name: 'School',
    data:function () {
      return{
        schoolName: "广工",
        address:"广东",
      }
    },
    methods:{
      showName(){
        alert(this.schoolName)
      }
    },
  }

</script>

<style scoped>
  .demo{
    background-color: orange;
  }

</style>

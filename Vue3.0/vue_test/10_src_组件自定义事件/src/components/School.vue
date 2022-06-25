<template>
  <!--组件结构  -->
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
/*组件交互相关的代码(数据、方法等等)*/
export default {
  name: 'School',
  data: function () {
    return {
      name: "广工",
      address: "广东",
    }
  },
  props:['getSchoolName'],
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name)
    }

  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>



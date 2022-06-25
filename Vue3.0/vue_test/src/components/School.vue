<template>
  <!--组件结构  -->
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
/*组件交互相关的代码(数据、方法等等)*/
import pubsub from 'pubsub-js'
export default {
  name: 'School',
  data: function () {
    return {
      name: "广工",
      address: "广东",
    }
  },
  mounted() {
    /*
    this.$bus.$on("hello",(data)=>{
      console.log("我是school组件,收到了数据",data)
    })
    */
    this.pubid=pubsub.subscribe('hello',function (msgName,value){
      console.log("有人发布了hello消息,hello消息的回调执行了",msgName,value)
    })
  },
  beforeDestroy() {
    /*this.$bus.$off('hello')*/
    pubsub.unsubscribe(this.pubid)
  } 

}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>



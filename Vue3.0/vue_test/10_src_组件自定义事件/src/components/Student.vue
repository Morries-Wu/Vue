<template>
  <div class="student">
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>当前求和为:{{number}}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑getEmitStudent</button>
    <button @click="death">销毁当前Student组件的实例(vc)</button>
  </div>

</template>

<script>
export default {
  name: 'Student',
  data:function (){
    return{
      name:"Morries_Wu",
      sex:"男",
      number:0
    }
  },
  methods:{
    add:function (){
      console.log("add回调被调用了")
      this.number++
    },
    sendStudentName(){
      /*触发Student组件实例身上atguigu事件*/
      this.$emit("getEmitStudent",this.name)
      this.$emit('demo')
    },
    unbind(){
      /*
      解绑一个自定义事件
      this.$off("getEmitStudent")
      */

      /*
      解绑多个自定义事件
      this.$off(['getEmitStudent','demo'])
      */

      /*解绑所有的自定义事件*/
      this.$off()
    },
    death:function (){
      /*
        销毁当前Student组件的实例
        销毁后所有student实例的自定义事件全都不奏效
        */
      this.$destroy()
    }
  }


}
</script>

<style lang="less" scoped>
.student{
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>


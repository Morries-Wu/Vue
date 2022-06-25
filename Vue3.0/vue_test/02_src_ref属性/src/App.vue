<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button  ref="btn" @click="showDom">点我输出上方的Dom元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
import School from "@/components/School";

export default {
  name: 'App',
  components: {
    School,
  },
  data:function (){
    return{
      msg:"欢迎继续内卷Vue"
    }
  },
  methods:{
    showDom:function (){
      /*真实DOM元素*/
      console.log(this.$refs.title)
      /*真实DOM元素*/
      console.log(this.$refs.btn)
      /*真实组件实例对象 VC*/
      console.log(this.$refs.sch)
    }
  }
}
</script>



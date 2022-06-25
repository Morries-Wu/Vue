<template>
  <div class="app">
    <h1>{{ msg }},学生姓名是{{ studentName }}</h1>
    <!--通过父组件给自组件传递函数类型的props实现:子给父传递数据-->
    <School :getSchoolName="getSchoolName"></School>
    <!--通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(第一种写法,使用@或v-on) -->
    <!--<Student @getEmitStudent="getStudentName" @demo="m1"/>-->

    <!--通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(第二种写法,使用ref ) -->
    <Student ref="student" @click.native="show"/>
  </div>
</template>

<script>
import Student from "@/components/Student";
import School from "@/components/School";

export default {
  name: 'App',
  components: {
    Student,
    School
  },
  data: function () {
    return {
      msg: "你好啊!",
      studentName: ""
    }
  },
  methods: {
    getSchoolName: function (name) {
      console.log("App收到了学校名:", name)
    },
    /*getStudentName: function (name) {
      console.log("App收到了学生名:", name)
      this.studentName = name
    },*/
    m1: function () {
      console.log("demo事件被触发了")
    },
    show(){
      alert(123)
    }
  },
  mounted() {
    /*绑定自定义事件*/
    this.$refs.student.$on('getEmitStudent',function (name){
      console.log("App收到了学生名:", name)
      this.studentName = name
    })
  }
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>






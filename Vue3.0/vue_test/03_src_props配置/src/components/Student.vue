<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名:{{name}}</h2>
    <h2>学生年龄:{{myAge+1}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>

</template>

<script>
export default {
  name: 'Student',
  data:function (){
    return{
      msg:"我是农村学校的一个学生",
      myAge:this.age
    }
  },

  /*简单接收
  props:['name','sex','age'],
  */

  /*
  接收的同时对数据进行类型限制
  props:{
    'name':String,
    'sex':String,
    'age':Number}
  */

  /*接受的同时对数据:进行类型限制+默认值的指定+必要性的限制*/
  props:{
    name:{
      /*name的类型是字符串*/
      type:String,
      /*name是必要的*/
      required:true
    },
    age:{
      type:Number,
      /*默认值*/
      default:99
    },
    sex:{
      type:String,
      required:true
    }
  },

  methods:{
    updateAge:function (){
      this.myAge=22
    }
  }



}
</script>



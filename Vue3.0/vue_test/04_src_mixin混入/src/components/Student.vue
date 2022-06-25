<template>
  <div>
    <h2 @click="showName">学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
  </div>

</template>

<script>
/*import {mix} from "../../mixin";*/
export default {
  name: 'Student',
  data:function (){
    return{
      name:"Morries_Wu",
      sex:"男"
    }
  },
  /*mixins:[mix]*/




}
</script>



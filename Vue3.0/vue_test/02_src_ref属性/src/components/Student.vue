<template>
  <div>
    <h2>学生年龄:{{age}}</h2>
    <h2>学生姓名:{{name}}</h2>
  </div>

</template>

<script>
export default {
  name: 'Student',
  data:function (){
    return{
      age:18,
      name:"Morries_Wu"
    }
  }
}
</script>



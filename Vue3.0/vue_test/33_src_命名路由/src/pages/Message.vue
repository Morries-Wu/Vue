<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
        <!-- 跳转路由并携带query参数,to的字符串写法
        <router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`"></router-link>-->


        <!-- 跳转路由并携带query参数,to的对象写法-->
        <router-link :to="{
          name:'xiangqing',
          query:{
            id:item.id,
            title:item.title
          }
        }">{{item.title}}</router-link>&nbsp;&nbsp;
      </li>
    </ul>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Message",
  data:function (){
    return{
      messageList: [
        {id:'001',title:'消息001'},
        {id:'002',title:'消息002'},
        {id:'003',title:'消息003'},
        {id:'004',title:'消息004'},
      ]
    }
  }

}
</script>

<style scoped>

</style>

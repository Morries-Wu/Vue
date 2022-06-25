<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data: function () {
    return {
      keyWord: ""
    }
  },
  methods:{
    searchUsers:function (){
      /*请求前更新List的数据*/
      this.$bus.$emit('updateListData',{isFirst:false,users:[],isLoading:true,errMsg:''})
      axios.get(`http://api.github.com/search/users?q=${this.keyWord}`).then(
          response=>{
            /*请求成功后更新List的数据*/
            console.log('请求成功',response.data.items)
            this.$bus.$emit('updateListData',{isFirst:false,users:response.data.items,isLoading:false,errMsg:''})
          },
          error=>{
            /*请求失败后更新List的数据*/
            console.log('请求失败',error.message)
            this.$bus.$emit('updateListData',{isFirst:false,users:[],isLoading:false,errMsg:error.message})
          }
      )
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>

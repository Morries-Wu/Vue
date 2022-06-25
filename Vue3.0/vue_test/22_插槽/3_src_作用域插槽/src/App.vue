<template>
  <div class="container">

    <Category title="游戏">
      <template scope="{mimi}">
        <ul>
          <li v-for="(item,index) in mimi" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </Category>


    <Category title="游戏">
      <template scope="data">
        <ol>
          <li style="color: red" v-for="(item,index) in data.mimi" :key="index">
            {{ item }}
          </li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="data">
        <h4 v-for="(item,index) in data.mimi" :key="index">
          {{ item }}
        </h4>
      </template>

    </Category>


  </div>
</template>

<script>
import Category from "@/components/Count";

export default {
  name: 'App',
  components: {
    Category
  }
}
</script>

<style>
.container, .foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>


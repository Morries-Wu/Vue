<template>
  <div align="center">
    <h1>当前求和为:{{sum}}</h1>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>

</template>

<script>
export default {
  name: "Count",
  data: function () {
    return {
      /*当前用户选择的数字*/
      num: 1,
      /*当前的和*/
      sum: 0
    }
  },
  methods: {
    increment: function () {
      this.sum = this.sum + this.num
    },
    decrement: function () {
      this.sum = this.sum - this.num
    },
    incrementOdd: function () {
      if (this.sum % 2) {
        this.sum = this.sum + this.num
      }

    },
    incrementWait: function () {
      setTimeout(() => {
        this.sum = this.sum + this.num
      }, 500)

    }

  }


}
</script>

<style>
button {
  margin-left: 5px;
}

</style>

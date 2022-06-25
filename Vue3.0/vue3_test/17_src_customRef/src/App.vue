<template>
  <div align="center">
    <input type="text" v-model="keyWord">
    <h3>{{ keyWord }}</h3>
  </div>
</template>

<script>
import {customRef} from 'vue'

export default {
  name: 'App',
  setup: function () {
    /*使用Vue提供的ref*/
    /*let keyWord = ref('hello')*/

    /*自定义一个ref——名为:myRef*/
    function myRef(value, delay) {
      console.log('--myRef', value)
      return customRef((track, trigger) => {
        return {
          get: function () {
            console.log(`有人把myRef这个容器读取数据了,我把${value}给他了`)
            /*通知Vue追踪value的变化(提前和get商量一下,让他认为这个value是有用的)*/
            track()
            return value
          },
          set: function (newValue) {
            console.log(`有人把myRef这个容器读取数据改为了,${newValue}`)
            setTimeout(() => {
              value = newValue
              /*通知Vue去重新解析模板*/
              trigger()
            }, delay)

          }

        }
      })
    }

    /*使用程序员自定义的ref*/
    let keyWord = myRef('hello', 500)

    return {
      keyWord,
      myRef
    }
  }
}
</script>



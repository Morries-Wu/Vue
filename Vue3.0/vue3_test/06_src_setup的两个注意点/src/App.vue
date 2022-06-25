<template>
  <div align="center">
    <Demo @hello="showHelloMsg" msg="你好啊" school="广广">
      <template v-slot:="qwe">
        <span>老六学编程</span>
      </template>
    </Demo>
  </div>


</template>

<script>
import Demo from "@/components/Demo";

export default {
  name: 'App',
  components: {
    Demo
  },
  setup: function () {
    function showHelloMsg(value) {
      alert(`你好啊,你触发了hello事件,我收到的参数是:${value}!`)
    }

    return {
      showHelloMsg
    }
  }

}
</script>



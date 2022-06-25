<template>
  <div class="Son">
    <h3>我是Son组件</h3>
    <Dialog></Dialog>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog";

export default {
  name: "Son",
  components: {
    Dialog
  }
}
</script>

<style>
.Son {
  background-color: orange;
  padding: 10px;
}
</style>

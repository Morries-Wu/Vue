import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
/*引入插件*/
import plugins from "./plugins";

//应用插件
Vue.use(plugins)
/*创建Vue实例对象*/
new Vue({
  /*将App组件放入容器中*/
  render:h=> h(App)
}).$mount("#app")

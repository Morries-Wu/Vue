/*引入Vue*/
import Vue from 'vue'
/*引入App*/
import App from './App.vue'
/*按需引入*/
import {Button, Row, DatePicker} from 'element-ui';

Vue.use(Button)
Vue.use(Row)
Vue.use(DatePicker)
/*关闭Vue的生产提示*/
Vue.config.productionTip = false
/*创建vm*/
new Vue({
    el: '#app',
    render: h => h(App),
})


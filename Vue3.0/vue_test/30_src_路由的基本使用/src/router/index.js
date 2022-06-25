/*该文件专门创建整个应用的路由器*/
import VueRouter from 'vue-router'
import Home from "@/pages/Home";
import About from "@/pages/About";
import News from "@/pages/News";
import Message from "@/pages/Message";

/*创建并暴露一个路由器*/
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
        },

    ]
})



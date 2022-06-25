/*该文件专门创建整个应用的路由器*/
import VueRouter from 'vue-router'
import Home from "@/pages/Home";
import About from "@/pages/About";
import News from "@/pages/News";
import Message from "@/pages/Message";
import Detail from "@/pages/Detail";

/*创建并暴露一个路由器*/
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {
                title: '关于',
                isAuth: true,
            }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {
                title: '主页'
            },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: {
                        isAuth: true,
                        title: '新闻'
                    },
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: {
                        isAuth: true,
                        title: '消息'
                    },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            meta: {
                                isAuth: true,
                                title: '详情'
                            },
                            props: function ($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        },
    ]
})



export default router

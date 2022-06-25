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
                title: '关于'
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
                    beforeEnter: (to, from, next) => {
                        console.log(to, from);
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === 'guigu') {
                                next()
                            } else {
                                alert('学校名不对,无权限查看')
                            }
                        } else {
                            next()
                        }

                    }
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

/*全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用*/
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from)
    document.title = to.meta.title = '真的是服了你个老六' || 'super系统'
})


export default router

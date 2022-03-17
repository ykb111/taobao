import Vue from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter);
//引入页面
import Home from '@/page/home'
import Login from '@/page/login'
import Register from '@/page/register'
import Search from '@/page/search'

export default new VueRouter({
    routes: [
        //重定向
        {
            path:"/",
            redirect:"/home"
        },
        //项目
        {
            path: "/home",
            component: Home
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        },
        {
            path:"/search",
            component:Search
        }

    ],
})

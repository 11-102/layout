import Vue from 'vue'
// 导入路由插件
import VueRouter from 'vue-router'
// 导入路由组件
import Home from '../components/home'
import Find from '../components/find'
import Login from '../components/login'
import Regist from '../components/register'
Vue.use(VueRouter)
// 定义路由
const routes = [    
    { path: '/',redirect: '/find'},
    { path: '/home',component:Home,meta:{ title: '首页' },},
    { path: '/find',component:Find,meta:{ title: '发现' },},
    { path: '/login',component:Login,meta:{ title: '登录' },},
    { path: '/regist',component:Regist,meta:{ title: '注册加入' },},
]
// 创建router实例
const router = new VueRouter({
    routes,
    mode: 'history',
})

// 创建完路由实例之后，可以使用路由守卫    meta title
router.beforeEach((to, from, next) => {
      window.document.title = to.meta.title
      next()
    })

//  导出router实例
export default router
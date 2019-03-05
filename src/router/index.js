import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 基础路由
export const constantRouterMap = [
  // 登录页
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
]
// 动态路由
export const asyncRouterMap = [

  // 404页面必须在动态路由的最后一项实例中
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // 整个项目的路径，若是放在根路径，则使用 '/' ，默认值为 '/'
  base: process.env.BASE_URL,
  // 当路由跳转时的滚动行为
  scrollBehavior: () => { { 0 } },    // 跳转到顶部,
  // 路由默认载入 基础路由，后续使用动态添加路由到实例
  routes: constantRouterMap
})

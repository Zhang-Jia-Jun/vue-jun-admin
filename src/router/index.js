import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/**
 * meta:{
 *  hidden:true             在侧边栏中隐藏
 *  title:"index"           面包屑标题
 *  icon:"scg-name"         侧边栏图标
 *  breadcrumbHidden:true   在面包屑中隐藏
 * }
 *  */

// 基础路由
export const constantRouterMap = [
  // 登录页
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    meta: {
      hidden: true
    }
  }
];
// 应用程序路由表 动态路由
export const asyncRouterMap = [
  // 基础页
  {
    // 先进入布局页
    path: "/",
    component: () => import("@/views/layout/index"),
    children: [
      {
        // 进入默认页面
        path: "/",
        component: () => import("@/views/default/index"),
        meta: {
          title: "首页",
          icon: "home"
        }
      },
      {
        path: "nested",
        name: "Nested",
        redirect: "/nested/menu1",
        // 注意！！父级路由必须引入组件，否则子路由将无法匹配
        component: () => import("@/views/nested/index"),
        meta: {
          title: "Nested",
          icon: "nested"
        },
        children: [
          {
            path: "menu1",
            component: () => import("@/views/nested/menu1/index"), // Parent router-view
            name: "Menu1",
            meta: { title: "Menu1" },
            children: [
              {
                path: "menu1-1",
                component: () => import("@/views/nested/menu1/menu1-1"),
                name: "Menu1-1",
                meta: { title: "Menu1-1" }
              },
              {
                path: "menu1-2",
                component: () => import("@/views/nested/menu1/menu1-2"),
                name: "Menu1-2",
                meta: { title: "Menu1-2" },
                children: [
                  {
                    path: "menu1-2-1",
                    component: () =>
                      import("@/views/nested/menu1/menu1-2/menu1-2-1"),
                    name: "Menu1-2-1",
                    meta: { title: "Menu1-2-1" }
                  },
                  {
                    path: "menu1-2-2",
                    component: () =>
                      import("@/views/nested/menu1/menu1-2/menu1-2-2"),
                    name: "Menu1-2-2",
                    meta: { title: "Menu1-2-2" }
                  }
                ]
              },
              {
                path: "menu1-3",
                component: () => import("@/views/nested/menu1/menu1-3"),
                name: "Menu1-3",
                meta: { title: "Menu1-3" }
              }
            ]
          },
          {
            path: "Menu2",
            component: () => import("@/views/nested/menu2/index"),
            meta: { title: "Menu2" }
          }
        ]
      }
    ]
  },
  // 404页面必须在动态路由的最后一项实例中
  {
    path: "*",
    alias: "404",
    component: () => import("@/views/404"),
    meta: {
      hidden: true
    }
  }
];

export default new Router({
  // 整个项目的路径，若是放在根路径，则使用 '/' ，默认值为 '/'
  base: process.env.BASE_URL,
  // 当路由跳转时的滚动行为
  scrollBehavior: () => {
    {
      0;
    }
  }, // 跳转到顶部,
  // 路由默认载入 基础路由，后续使用动态添加路由到实例
  routes: constantRouterMap
});

/* eslint-disable */
// 用于初始化用户权限表,动态添加路由
import router from "./router";
// 获取用户的API
import userAPI from "./api/user";
// 用户仓库
import store from "./store";
// 认证工具
import { getToken } from "./utils/auth";

router.beforeEach((to, from, next) => {
    return next();
  // 只有用户登录了才有权限表
  if (getToken()) {
    // 判断用户是否已经存在路由表
    if (!store.getters.user_permisstion) {
      userAPI
        .getPermissionTable() // 拉取路由表
        .then(res => {
          const permisstion = res.data; // 得到用户权限
          // 修改store状态
          store.dispatch("GenerateRoutes", permisstion).then(() => {
            router.addRoutes(); // 修改路由表
          });
        })
        // 获取权限失败！
        .catch(err => {
          store.dispatch("LogOut"); // 控制用户退出
          next("/"); // 进入登录页面
        });
    } else {
      // 用户已经拉取路由表，执行结束
      next();
    }
  }
  next();
});

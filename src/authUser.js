// 用于初始化用户权限表,动态添加路由
import router from "./router";
// 用户仓库
import store from "./store";
import { getToken } from "./utils/auth";
import NProgress from "nprogress";

const whiteList = ["/login"]; //免登录白名单

router.beforeEach(async (to, from, next) => {
  // 用户尚未登录
  if (!getToken()) {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next("/login");
      // 导航终止，会导致进度条结束失败，必须在这里手动结束
      NProgress.done();
    }
  } else {
    // 用户尚未初始化
    if (!store.getters.token) {
      await store.dispatch("GetInfo"); //获取用户信息
      await store.dispatch("GenerateRoutes"); // 这里将请求接口，将路由表放入store
      router.addRoutes(store.getters.addRouters); //动态添加路由
      next({ ...to }); //关键步骤，当添加路由规则之后，必须使用这种方式进行跳转，否则出现空白页
    }
    if (to.path == "/login") {
      next(false);
      NProgress.done();
    } else {
      next();
    }
  }
});

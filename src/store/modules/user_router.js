// 用户路由store
import { constantRouterMap, asyncRouterMap } from "@/router";
import userAPI from "../../api/user";


function filterAsyncRouter(router,roles){
  const res = [];

  router
}


const permisstion = {
  state: {
    // 用户路由表
    routers: constantRouterMap,
    // 用户通过动态添加的路由信息
    addRouters: []
  },
  mutations: {
    // 设置路由表
    SET_ROUTERS(state, routers) {
      state.routers = [...state.routers, ...routers];
      state.addRouters = routers;
    }
  },
  actions: {
    // 生成路由
    async GenerateRoutes({ commit, state }) {
      const data = await userAPI.getRouter();
      commit("SET_ROUTERS",asyncRouterMap)
      return state.addRouters;
    }
  }
};

export default permisstion;

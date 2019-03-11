// 用户路由store
import { constantRouterMap, asyncRouterMap } from "@/router";

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
      state.addRouters = routers;
      state.routers = [...constantRouterMap, ...routers];
    }
  },
  actions: {
    // 生成路由
    GenerateRoutes({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit("SET_ROUTERS", data);
        resolve();
      });
    }
  }
};

export default permisstion;

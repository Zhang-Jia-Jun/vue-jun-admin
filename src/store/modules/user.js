// 登录的api接口
import userAPI from "@/api/user";
// 设置token的cookie工具
import { setToken, removeToken,getToken } from "../../utils/auth";

const user = {
  state: {
    token: "", // 用户token密匙
    name: "default", // 用户名
    avatar: "", // 用户头像
    roles: [] // 用户角色
  },
  // 操作状态
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  },
  actions: {
    // 登录操作，可执行异步操作
    async Login({ commit }, userInfo) {
      let res = await userAPI.login(userInfo.username, userInfo.password); // 执行登录请求，异步操作，返回异步对象
      let { data } = res;
      setToken(data.token); // 登录成功，将获得的token写入cookie
    },
    // 获取用户信息
    async GetInfo({ commit }) {
      let { data } = await userAPI.getInfo();
      commit("SET_NAME", data.account.name);
      commit("SET_AVATAR", data.account.avatar);
      commit("SET_ROLES", data.roles);
      commit("SET_TOKEN", getToken());
    },
    // (未完成)，使用单点登录
    async LogOut({ commit }) {
      return new Promise((resolve, reject) => {
        commit("SET_ROUTERS", []);
        commit("SET_TOKEN", "");
        removeToken();
        resolve();
      });
    }
  }
};
export default user;

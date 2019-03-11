// 登录的api接口
import userAPI from "@/api/user";
// 设置token的cookie工具
import { setToken, removeToken } from "@/utils/auth";

const user = {
  state: {
    // 用户token密匙
    token: "",
    // 用户名
    name: "default",
    headPortrait: "/"
  },
  // 操作状态
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    }
  },
  actions: {
    // 登录操作，可执行异步操作
    // 登录到了这一步将会进行数据请求，此时编写API
    Login({ commit }, userInfo) {
      // 登录为异步操作
      return new Promise((resolve, reject) => {
        // 执行登录请求，异步操作，返回异步对象
        userAPI
          .login(userInfo.username, userInfo.password)
          .then(response => {
              // 获取请求信息
              const data = response.data;
              console.log(data)
              // 登录成功，将获得的token写入cookie
            setToken(data.token);
            // 修改state
            commit("SET_TOKEN", data.token);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    LogOut({ commit }) {
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

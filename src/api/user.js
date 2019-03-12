// API对应请求，所以这里引入请求工具 request.js
import request from "@/utils/request";

export default {
  // 登录API
  login(username, password) {
    return request({
      url: "/user/login",
      method: "post",
      data: {
        username,
        password
      }
    });
  },
  // 获取用户信息
  getInfo() {
    return request({
      url: "/user/info",
      method: "post"
    });
  },
  // 获取用户路由表
  getRouter() {
    return request({
      url: "/user/router",
      method: "post"
    });
  },
  // 退出账号
  loginOut() {
    return request({
      url: "/user/logout",
      method: "post"
    });
  }
};

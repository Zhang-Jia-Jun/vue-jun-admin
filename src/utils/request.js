// 项目请求 使用 axios 框架
import axios from "axios";
import { MessageBox,Message } from "element-ui";
import store from "../store";

// 创建 axios 实例
const service = axios.create({
  // 项目的根路径
  baseURL: "http://rest.apizza.net/mock/dbb28c3d1d69ee2fc1c12a7791df45d5/",
  // 请求5秒超时
  timeout: 5000
});

// request 拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    Message.error({ message: "请求超时!" });
    return Promise.reject(err);
  }
);
// response 拦截器
service.interceptors.response.use(
  // 在接收服务器响应的拦截器上只能做一些简单的处理，主要的处理还是在业务代码当中
  ({ data }) => {
    if (data.code != 200) {
      Message.error({ message:data.msg});
      return Promise.reject(data);
    }
    // 业务状态，5000表示token认证失败或者过期
    if (data.code === 5000) {
      MessageBox.confirm(
        "你已被登出，可以继续留在该页面，或者重新登录",
        "确定登出",
        {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(() => {
        store.dispatch("logOut").then(() => {
          location.reload(); // 为了重新实例化vue-router对象 避免bug
        });
      });
      return Promise.reject(data);
    }
    return data;
  },
  // 响应已接收，但服务器响应的状态码不在 2xx 范围内,则会进入响应错误拦截器
  ({response}) => {
    if (response.status == 504 || response.status == 404) {
      Message.error({ message: "服务器被吃了⊙﹏⊙∥" });
    } else if (response.status == 403) {
      Message.error({ message: "权限不足,请联系管理员!" }); 
    } else {
      Message.error({ message: "未知错误!" });
    }
    return Promise.reject(response);
  }
);

export default service;

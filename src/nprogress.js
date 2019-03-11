/* eslint-disable */
import router from "./router";
//引入nprogress 进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css"; //这个样式必须引入

NProgress.configure({ showSpinner: false }); // 禁用进度环

router.beforeEach((to,from,next) => {
  // 进度条开始
  NProgress.start();
  next();
});

router.afterEach(() => {
  // 进度条结束
  NProgress.done();
});

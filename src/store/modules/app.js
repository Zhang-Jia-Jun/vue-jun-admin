import Cookies from "js-cookie";

const app = {
  state: {
    // 侧边栏
    sidebar: {
      // 侧边栏是否打开
      opened: !!Cookies.get("sidebarStatus")
    }
  },
  mutations: {
    //   切换 侧边栏
    TOGGLE_SIDEBAR: state => {
      const status = !state.sidebar.opened;
      Cookies.set("sidebarStatus", status);
      state.sidebar.opened = status;
    }
  },
  actions: {}
};

export default app;

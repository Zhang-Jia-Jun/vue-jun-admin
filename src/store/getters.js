// 将所有state属性写入getter文件，方便查询store属性
const getters = {
    // 侧边栏状态
    sidebar: state => state.app.sidebar,
    // token密匙
    token: state => state.user.token,
    // 用户名称
    name: state => state.user.name,
    // 用户路由表
    // permission_routers: state => state.user_permisstion

  }
  export default getters
  
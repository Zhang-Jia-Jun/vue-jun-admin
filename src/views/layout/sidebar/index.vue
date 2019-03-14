<template>
  <!-- 滚动条组件，element-UI 文档没有说明 -->
  <el-scrollbar>
    <el-menu
      class="sidebar"
      :router="true"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      :collapse="isMenuOpen"
      :default-active="this.$route.fullPath"
    >
      <!-- 侧边栏对象组件 -->
      <sidebarItem v-for="item in router" :key="item.path" :Item="item" :basePath="item.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
// 引入vuex辅助函数
import { mapGetters } from "vuex";
import sidebarItem from "./sidebarItem";
// 全局样式变量
import variables from "@/styles/variables.scss";

export default {
  components: {
    sidebarItem
  },
  computed: {
    ...mapGetters([
      // 用户授权表
      "user_routers",
      // 侧边栏状态
      "sidebar"
    ]),
    variables() {
      return variables;
    },
    isMenuOpen() {
      return this.sidebar.opened;
    },
    router() {
      // 获得布局页中的路由,并且设置为显示状态
      return this.user_routers.find(item => {
        return item.path == this.$enum.indexPath;
      }).children;
    }
  }
};
</script>

<style scoped lang='scss'>
// ！！！重点 Element-UI 侧边栏有巨大的坑，对侧边栏设置width的时候必须排除 .el-menu--collapse ，否则动画效果会有BUG
.sidebar {
  height: 100vh;
  &:not(.el-menu--collapse) {
    width: 180px;
  }
}
</style>
<style>
.el-menu {
  border: none;
}
</style>


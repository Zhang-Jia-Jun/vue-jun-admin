<template>
  <!-- 滚动条组件，element-UI 文档没有说明 -->
  <el-scrollbar>
    <el-menu
      class="sidebar"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      :collapse="!isMenuOpen"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
// 引入vuex辅助函数
import { mapGetters } from "vuex";

// 全局样式变量
import variables from "@/styles/variables.scss";

export default {
  computed: {
    ...mapGetters([
      // 用户授权表
      "permission_routers",
      // 侧边栏状态
      "sidebar"
    ]),
    variables() {
      return variables;
    },
    isMenuOpen() {
      return this.sidebar.opened;
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

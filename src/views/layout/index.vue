<template>
  <!-- 布局页面 -->
  <el-container class="layout">
    <el-aside width='initial'>
        <!-- 侧边栏 -->
      <sideber></sideber>
    </el-aside>
    <el-container>
      <el-header height='50px'>
          <!-- 导航栏 -->
        <navber></navber>
      </el-header>
      <el-main>
          <!-- 主体内容 -->
        <appMain></appMain>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import appMain from "./components/appMain";
import navber from "./components/navber";
import sideber from "./components/sidebar";
export default {
  data() {
    return {};
  },
  components: {
    appMain,
    navber,
    sideber
  }
};
</script>

<style scoped>
.layout {
  width: 100vw;
  height: 100vh;
}
</style>
<style lang='scss'>
.layout{
    .el-header,.el-main{
        padding: 0;
    }
}
</style>


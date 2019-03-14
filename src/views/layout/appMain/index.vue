<template>
  <el-scrollbar wrapClass="wrap">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="this.$route.path"/>
    </transition>
  </el-scrollbar>
</template>

<script>
export default {};
</script>

<style>
.wrap {
  height: calc(100vh - 50px);
}
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transform-enter-active,
.fade-transform-leave-active {
  transition: all 0.3s;
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

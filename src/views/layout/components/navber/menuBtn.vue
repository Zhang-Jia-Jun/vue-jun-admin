<template>
  <!-- Menu 打开关闭按钮 -->
  <div class="sidebar-isopen">
    <icon @click.native="toggleMenu()" :class="{'is-active':this.menuState}" iconName="menu-state"></icon>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // 引入store的侧边栏状态
    ...mapGetters(["sidebar"]),
    menuState() {
      return this.sidebar.opened;
    }
  },
  methods: {
    // 改变sidebar侧边栏状态
    toggleMenu() {
      this.$store.commit("TOGGLE_SIDEBAR");
    }
  }
};
</script>

<style lang="scss" scoped>
// Menu 菜单按钮样式
.sidebar-isopen {
  font-size: 1.15rem;
  line-height: 50px;
  padding: 0 10px;
  height: 50px;
  .icon {
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
    &.is-active {
      transform: rotate(180deg);
    }
  }
}
</style>

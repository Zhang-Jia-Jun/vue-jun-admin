<template>
  <div class="navber">
    <div class="sidebar-isopen">
      <icon
        @click.native="toggleMenu()"
        :class="{'is-active':!this.menuState}"
        iconName="menu-state"
      ></icon>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sidebar"]),
    menuState() {
      return this.sidebar.opened;
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit("TOGGLE_SIDEBAR");
    }
  }
};
</script>

<style scoped lang='scss'>
.navber {
  display: flex;
  // box-shadow 绘制阴影 参数（x轴，y轴，阴影模糊范围，阴影大小，颜色） 以逗号隔开为多条阴影
  box-shadow: 0 0 3px 0 rgba($color: #000000, $alpha: 0.25),
    0 2px 5px 0 rgba($color: #000000, $alpha: 0.025);
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
}
</style>


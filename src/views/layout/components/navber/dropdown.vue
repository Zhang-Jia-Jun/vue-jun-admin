<template>
  <el-dropdown trigger="click" placement="top">
    <span class="el-dropdown-link">
      <!-- @error 使用该事件，图片加载失败时，使用默认图片 $event 表示事件对象 -->
      <img :src="headPortrait" width="35" height="35" @error="resetHeadPortrait($event)">
      <span class="user-name">{{name}}</span>
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <router-link to="/" tag="span">
        <el-dropdown-item>首页</el-dropdown-item>
      </router-link>
      <el-dropdown-item @click.native="logOut()">切换账户</el-dropdown-item>
      <el-dropdown-item divided>退出系统</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import defaultheadPortrait from "@/assets/headPortrait.png";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["name", "headPortrait"])
  },
  methods: {
    resetHeadPortrait(event) {
      event.target.src = defaultheadPortrait;
    },
    logOut() {
      this.$store.dispatch("LogOut");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.el-dropdown {
  padding: 3px 5px;
  margin-right: 15px;
  line-height: 35px;
  display: flex;
  cursor: pointer;
  .user-name {
    padding: 0 5px;
  }
}
</style>


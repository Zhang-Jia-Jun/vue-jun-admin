<template>
  <el-dropdown trigger="click" placement="top">
    <span class="el-dropdown-link">
      <!-- @error 使用该事件，图片加载失败时，使用默认图片 $event 表示事件对象 -->
      <img :src="avatar" width="35" height="35" @error="resetAvatar($event)">
      <span class="user-name">{{name}}</span>
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <router-link to="/" tag="span">
        <el-dropdown-item>首页</el-dropdown-item>
      </router-link>
      <el-dropdown-item >查看权限</el-dropdown-item>
      <el-dropdown-item divided @click.native="logOut()">退出账号</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import defaultAvatar from "@/assets/avatar.png";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["name", "avatar"])
  },
  methods: {
    resetAvatar(event) {
      event.target.src = defaultAvatar;
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
  .el-dropdown-link img{
    border-radius: 100%;
    overflow: hidden;
  }
  .user-name {
    padding: 0 5px;
  }
}
</style>


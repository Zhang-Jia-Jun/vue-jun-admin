<template>
  <div class="login-container">
    <el-form class="login-form">
      <h3 class="title">个人博客管理系统</h3>
      <el-form-item>
        <span class="svg-container">
          <icon icon-name="people_fill"></icon>
        </span>

        <el-input placeholder="用户账号" v-model="loginAccount.username"></el-input>
      </el-form-item>
      <el-form-item>
        <span class="svg-container">
          <icon icon-name="lock_fill"></icon>
        </span>
        <el-input placeholder="用户密码" v-model="loginAccount.password" :type="this.pwdState ? '' : 'password'"></el-input>
        <span class="show-pwd" @click="showPwd()">
          <icon :icon-name="this.pwdState ? 'eye':'eye-close'"></icon>
        </span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Sign in</el-button>
      </el-form-item>
      <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span>password: admin</span>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginAccount: {
        username: "admin",
        password: "admin"
      },
      pwdState:false,
    };
  },
  computed:{
  },
  methods:{
    showPwd(){
      this.pwdState = !this.pwdState;
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

// 登录页背景颜色
$bg: #2d3a4b;
// icon颜色
$icon-color: #889aa4;
// 输入框颜色
$ipt-color: #eee;
// title颜色
$title-color: #eee;

.login-container {
  width: 100vw;
  height: 100vh;
  background-color: $bg;
  .login-form {
    position: fixed;
    left: 0;
    right: 0;
    top: calc(50% - 340px / 2 - 50px);
    margin: 0 auto;
    padding: 35px;
    width: 520px;
    max-width: 100%;
    .title {
      font-size: 26px;
      color: $title-color;
      margin: 0 auto 40px auto;
      text-align: center;
    }
    .svg-container{
      line-height: 45px;
      font-size: 1.5rem;
      padding-left: 15px;
      color:rgba($color: #fff, $alpha: .3)
    }
    .show-pwd{
      line-height: 47px;
      font-size: 1.3rem;
      color: rgba($color: #fff, $alpha: .5);
      width: 50px;
      text-align: center;
    }
  }
}
</style>

<style rel="stylesheet/scss" lang="scss">
// 由于使用scoped会导致无法修改第三方样式，所以单独分离出来

/* reset element-ui css */
.login-container{
  .el-input {
    display: inline-block;
    input {
      background: transparent;
      border: 0px;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #eee;
      height: 47px;
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    & > div {
      display: flex;
    }
  }
  .el-button {
    width: 100%;
  }
}
</style>
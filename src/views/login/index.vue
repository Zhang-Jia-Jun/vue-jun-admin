<template>
  <div class="login-container">
    <el-form>
      <h3>个人博客管理系统</h3>
      <el-form-item>
          <el-input placeholder="用户账号" v-model="loginAccount.username"></el-input>
      </el-form-item>
      <el-form-item>
          <el-input placeholder="用户密码" v-model="loginAccount.password"></el-input>
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
    data(){
        return {
            loginAccount:{
                username:'admin',
                password:'admin'
            }
        }
    }
};
</script>

<style lang="scss" scoped>
// 登录页背景颜色
$bg: #2d3a4b;
// icon颜色
$icon-color: #889aa4;
// 输入框颜色
$ipt-color: #eee;

.login-container{
    background-color: $bg;
}
</style>
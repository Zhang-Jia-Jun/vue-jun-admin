<template>
  <div class="login-container">
    <!-- ref：组件ID 通过vm.$ref['ID']可获取该组件，rules：获取一个规则对象，model：获得一个作用域对象 方便el-form-item组件prop特性的使用 -->
    <el-form ref="loginForm" class="login-form" :rules="loginRules" :model="loginAccount">
      <h3 class="title">个人博客管理系统</h3>
      <!-- prop特性，该组件所要验证的属性 -->
      <el-form-item prop="username">
        <span class="svg-container">
          <icon icon-name="people_fill"></icon>
        </span>

        <el-input placeholder="用户账号" name="username" v-model="loginAccount.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <icon icon-name="lock_fill"></icon>
        </span>
        <el-input
          placeholder="用户密码"
          name="password"
          v-model="loginAccount.password"
          :type="this.pwdState ? '' : 'password'"
          @keyup.enter.native="validateLogin()"
        ></el-input>
        <span class="show-pwd" @click="showPwd()">
          <icon :icon-name="this.pwdState ? 'eye':'eye-close'"></icon>
        </span>
      </el-form-item>
      <el-form-item>
        <!-- loading 加载中，接收Boolean值 -->
        <el-button
          :loading="loading"
          type="primary"
          @click.native.prevent="validateLogin()"
        >{{loadMsg}}</el-button>
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
      // 用户登录信息
      loginAccount: {
        username: "admin",
        password: "admin"
      },
      // 显示密码状态
      pwdState: false,
      // loginRules验证规则对象 验证规则参见 async-validator
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入用户名称" },
          { min: 3, max: 5, trigger: "blur", message: "长度在 3 到 5 个字符" }
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入用户密码" }
        ]
      },
      // 登录按钮加载状态
      loading: false
    };
  },
  computed: {
    // 改变登录按钮文字
    loadMsg() {
      return this.loading ? "正在登录" : "Sign in";
    }
  },
  watch: {},
  methods: {
    // 改变密码状态
    showPwd() {
      this.pwdState = !this.pwdState;
    },
    // El 组件内置 validate 验证函数，回调参数（valid：是否校验成功，obj：未通过校验的字段）
    validateLogin() {
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          this.loading = true;
          // 模拟登录
          this.$store
            .dispatch("Login", this.loginAccount)
            .then(() => {
              this.loading = false;
              this.$router.push('/')
            })
            .catch(error => {
              this.loading = false;
              // 业务状态码，6020表示账号密码错误
              if (error.code == 6020) {
                this.$message.error("账号密码错误");
              }
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
// 登录页背景颜色
$bg: #2d3a4b;
// icon颜色
$icon-color: #889aa4;
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
    .svg-container {
      line-height: 45px;
      font-size: 1.5rem;
      padding-left: 15px;
      color: rgba($color: $icon-color, $alpha: 0.3);
    }
    .show-pwd {
      cursor: pointer;
      line-height: 47px;
      font-size: 1.3rem;
      color: rgba($color: $icon-color, $alpha: 0.5);
      width: 50px;
      text-align: center;
    }
  }
}
</style>

<style rel="stylesheet/scss" lang="scss">
// 输入框颜色
$ipt-color: #ccc;
// 由于使用scoped会导致无法修改第三方样式，所以单独分离出来

/* reset element-ui css */
.login-container {
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    & > div {
      display: flex;
    }
    .el-input {
      display: inline-block;
      input {
        background: transparent;
        border: 0px;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $ipt-color;
        height: 47px;
      }
    }
  }
  .el-button {
    width: 100%;
  }
}
</style>
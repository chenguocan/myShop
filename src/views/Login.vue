<template>
  <div class="loginPage">
    <div class="login">
      <h1> 登录系统</h1>
      <div class="login-form">
        <el-form ref="form" :model="loginForm">
          <el-form-item >
            <el-input v-model="loginForm.username" placeholder="请输入用户"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input v-model="loginForm.password" placeholder="请输入密码" ></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" class="login-btn">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      loginForm:{
        username:'',
        password:'',
      }
    }
  },
  created() {

  }
}
</script>

<style scoped lang="scss">
.loginPage{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eaeaea;
  .login{
    width: 500px;
    height: 300px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    .login-form{
      width: 300px;
      margin: 20px 40px;
      .login-btn{
        width: 100%;
      }
    }
  }
}
</style>

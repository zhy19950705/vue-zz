<template>
    <div class="login-container">
       <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
         <div class="title-container">
           <h3 class="title">真真</h3>
         </div>
         <el-form-item prop="username">
            <span class="svg-container svg-container-login">
             <svg-icon icon-class="user" />
           </span>
           <el-input name="username" type="text" v-model="loginForm.username" auto-complete="on" placeholder="username" />
         </el-form-item>
         <el-form-item prop="password">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
           <el-input name="password" :type="passwordType" v-model="loginForm.password" auto-complete="on" placeholder="password" />
           <span class="show-pwd" @click="showPwd">
             <svg-icon icon-class="eye" />
           </span>
         </el-form-item>
         <el-button type="primary" style="width: 100%;margin-bottom:30px" @click="login" >登录</el-button>
       </el-form>
    </div>
</template>

<script>
    export default {
      name: 'login',
      data() {
        const validateUsername = (rule, value, callback) => {
          if (value.length < 0) {
            callback(new Error('please enter the correct user name'))
          } else {
            callback()
          }
        }
        const validatePassword = (rule, value, callback) => {
          if (value.length < 6) {
            callback(new Error("the password can't be less than 6 digits"))
          } else {
            callback()
          }
        }
        return {
          loginForm: {
            username: 'admin',
            password: '111111'
          },
          loginRules: {
            username: [{ required: true, trigger: 'blur', validator: validateUsername, message: '请输入正确的用户名' }],
            password: [{ required: true, trigger: 'blur', validator: validatePassword }]
          },
          passwordType: 'password'
        }
      },
      methods: {
        showPwd() {
          if (this.passwordType === 'password') {
            this.passwordType = ''
          } else {
            this.passwordType = 'password'
          }
        },
        login() {
          this.$refs.loginForm.validate(valid => {
            if (valid) {
              this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
                this.$router.push({ path: '/hello' })
              }).catch(() => {

              })
            } else {
              console.log('error submit')
              return false
            }
          })
        }
      }
    }
</script>

<style lang="scss">
$bg: #0d4b12;
$light_gray:#eee;
$dark_gray:#889aa4;
  .login-container{
    position:fixed;
    width: 100%;
    height: 100%;
    background: $bg;
    .login-form{
      width: 520px;
      margin:200px auto;
      .el-form-item{
        border: 1px solid rgba(255, 255, 255, 0.5);
      }
      .title-container{
        position: relative;
        .title{
          font-size: 26px;
          font-weight: 400;
          color:$light_gray;
          margin: 0 auto 40px auto;
          text-align: center;
        }
      }
      .svg-container{
        display: inline-block;
        width: 30px;
        padding:6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
      }
      .el-input{
        display: inline-block;
        width: 85%;
        input{
          background: transparent;
          border-radius: 2px;
          border: 0px;
          -webkit-appearance: none;
          padding: 12px 5px 12px 15px;
          color: $light_gray;
          height: 47px;
        }
      }
    }
  }
</style>

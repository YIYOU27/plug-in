<template>
  <el-form status-icon :model="loginForm" ref="loginForm" :rules="rules">
    <el-form-item prop="user_name">
      <el-input placeholder="用户名" type="text" v-model="loginForm.user_name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item :error="passError" prop="password">
      <el-input placeholder="密码" type="password" v-model="loginForm.password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="loginFun('loginForm')" class="login-btn" type="success">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    let x = 'asdasd'
    return {
      passError: null,
      login: false,
      loginForm: {
        user_name: '',
        password: ''
      },
      rules: {
        user_name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 4, max: 10, message: '长度在 4 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: x, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    loginFun (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('http://192.168.1.100:8081/login', this.loginForm)
            .then((res) => {
              if (res.data === '用户名或者密码错误') {
                this.login = false
              } else {
                this.login = true
                window.localStorage.setItem('login', JSON.stringify(this.login)) // 存放登录状态
                this.$store.commit('login', window.localStorage.login) // 将登录状态存入vuex
                this.$router.push({path: '/'})
              }
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.register-btn
  display flex
  flex-direction row
  justify-content space-between
.login-btn
  display block
  margin 0 auto
  width 100px
</style>

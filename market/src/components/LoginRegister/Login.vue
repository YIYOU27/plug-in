<template>
  <el-form class="login" :model="loginForm" :rules="rules" ref="loginForm">
      <el-form-item label="电话号码" prop="user_phone">
          <el-input v-model="loginForm.user_phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="user_password">
          <el-input type="password" v-model="loginForm.user_password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button style="width:100%" type="primary" @click="login">登录</el-button>
      </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    var validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入联系电话'))
      } else {
        var reg = /^1[34578]\d{9}$/
        if (reg.test(value) === false) {
          callback(new Error('电话号码格式不正确，例如13612345678'))
        } else {
          callback()
        }
      }
    }
    return {
      loginForm: {
        user_phone: '',
        user_password: ''
      },
      rules: {
        user_phone: [
          { required: true, validator: validatePhone, trigger: 'blur' }
        ],
        user_password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
  },
  methods: {
    login () {
      this.$http.post('https://easy-mock.com/mock/5c65006bba54f57d008c0d04/example/login', this.loginForm)
        .then((response) => {
          if (response !== null) {
            window.localStorage.setItem('login', JSON.stringify(response.data.data))
            this.$store.commit('login', window.localStorage.login)
            this.$router.push('/')
          }
        })
        .catch((err) => {
          console.log(err)
        })
        console.log(this.loginForm)
    }
  }
}
</script>

<style lang="stylus" scoped>
.login
  width 370px
  margin 0 auto
</style>

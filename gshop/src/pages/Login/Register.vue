<template>
  <el-form status-icon :model="registerForm" ref="registerForm" :rules="rules">
    <el-form-item prop="user_name">
      <el-input placeholder="用户名" type="text" v-model="registerForm.user_name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item prop="email">
      <el-input placeholder="邮箱" type="text" v-model="registerForm.email" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input placeholder="密码" type="password" v-model="registerForm.password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input placeholder="确认密码" type="password" v-model="registerForm.checkPass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item class="register-btn">
      <el-button class="login-btn" @click="toRegister('registerForm')" type="success">注册</el-button>
      <el-button class="login-btn" @click="resetForm('registerForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    let validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else {
        let reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
        if (reg.test(value) === false) {
          callback(new Error('邮箱格式不正确, 请输入真实邮箱'))
        } else {
          callback()
        }
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        user_name: '',
        email: '',
        password: '',
        checkPass: ''
      },
      rules: {
        user_name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 4, max: 10, message: '长度在 4 到 10 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, validator: validateEmail, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    toRegister (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('http://192.168.1.100:8081/register', this.registerForm)
            .then((res) => {
              console.log(res)
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
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
  width 100px
</style>

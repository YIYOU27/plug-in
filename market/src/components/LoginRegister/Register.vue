<template>
    <el-form class="login" :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="邮箱" prop="email">
          <el-input type="email" v-model="ruleForm.email"></el-input>
         </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
         </el-form-item>
        <el-form-item label="确认密码" prop="checkpass">
            <el-input type="password" v-model="ruleForm.checkpass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="verification">
            <img class="verifications" :src="imgDataURL" @click="changeVerification" alt="">
            <el-input type="text" v-model="ruleForm.verification" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
  </el-form>
</template>

<script>
import verification from 'verification-code'

export default {
  data () {
    var Pass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var ValidatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var ValidateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else {
        var reg = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/
        if (reg.test(value) === false) {
          callback(new Error('邮箱格式不正确，例如web@baidu.com'))
        } else {
          callback()
        }
      }
    }
    var Verification = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else if (value !== this.code) {
        callback(new Error('验证码不正确!'))
      } else {
        callback()
      }
    }
    return {
      imgDataURL: '',
      code: '',
      ruleForm: {
        email: '',
        pass: '',
        checkpass: '',
        verification: ''
      },
      rules: {
        email: [
          { required: true, validator: ValidateEmail, trigger: 'blur' }
        ],
        pass: [
          { required: true, validator: Pass, trigger: 'blur' }
        ],
        checkpass: [
          { required: true, validator: ValidatePass, trigger: 'blur' }
        ],
        verification: [
          { required: true, validator: Verification, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    changeVerification () {
      var result = verification.create()
      this.code = result.code
      this.imgDataURL = result.dataURL
      console.log(this.code, this.imgDataURL)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  mounted () {
    this.changeVerification()
  }
}
</script>

<style lang="stylus" scoped>
.verifications
    width 90px
    height 30px
    display block
    background #eee
.login
  width 370px
  margin 0 auto
</style>

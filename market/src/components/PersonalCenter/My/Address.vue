<template>
    <div class="address">
        <h3 class="maintitle">添加收货地址</h3>
        <el-form :model="addressForm" :rules="rules" ref="addressForm" label-width="120px" class="demo-addressForm">
            <el-form-item label="收货人姓名" prop="name" >
                <el-input v-model="addressForm.name" placeholder="请填写收货人姓名"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop="phoneNum" >
                <el-input v-model="addressForm.phoneNum" placeholder="请填写联系人电话"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-select v-model="addressForm.sex" placeholder="">
                    <el-option label="男" value="man"></el-option>
                    <el-option label="女" value="woman"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="生日">
                <el-col :span="11">
                    <el-form-item prop="birthday">
                        <el-date-picker type="date" placeholder="选择日期" v-model="addressForm.birthday" style="width: 100%"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="所在区域" prop="selectedOptions">
                <el-cascader size="large" :options="options" v-model="addressForm.selectedOptions" @change="handleChange"> </el-cascader>
            </el-form-item>
            <el-form-item label="详细地址" prop="detailedAddress">
                <el-input type="textarea" v-model="addressForm.detailedAddress"></el-input>
            </el-form-item>
            <el-form-item label="邮编" prop="postcode">
                <el-input v-model="addressForm.postcode"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('addressForm')">立即创建</el-button>
                <el-button @click="resetForm('addressForm')">重置</el-button>
            </el-form-item>

            </el-form>
    </div>
</template>

<script>
import { regionData, CodeToText } from 'element-china-area-data'
export default {
  components: {
  },
  data () {
    var Phonerule = (rule, value, callback) => {
      var regMobile = /^1\d{10}$/
      if (value === '') {
        callback(new Error('联系电话不能为空！！！'))
      } else if (regMobile.test(value)) {
        callback()
      } else {
        callback(new Error('手机号码输入不正确！！！'))
      }
    }
    var Postcode = (rule, value, callback) => {
      var pattern = /\d{6}/
      if (value === '') {
        callback(new Error('邮编不能为空！！！'))
      } else if (pattern.test(value)) {
        callback()
      } else {
        callback(new Error('邮编格式不正确！！！'))
      }
    }
    return {
      options: regionData,
      selectedOptions: [],
      addressForm: {
        name: '',
        phoneNum: '',
        sex: '',
        birthday: '',
        selectedOptions: [],
        detailedAddress: '',
        postcode: ''
      },
      rules: {
        name: [
          { required: true, message: '联系人不能为空', trigger: 'blur' }
        ],
        phoneNum: [
          { required: true, validator: Phonerule, trigger: 'blur' }
        ],
        detailedAddress: [
          { required: true, message: '详细地址不能为空', trigger: 'blur' },
          { min: 5, max: 100, message: '长度在 5 到 100 个字符', trigger: 'blur' }
        ],
        postcode: [
          { required: true, validator: Postcode, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleChange (value) {
      for (let i = 0; i < this.addressForm.selectedOptions.length; i++) {
        this.addressForm.selectedOptions[i] = CodeToText[this.addressForm.selectedOptions[i]]
      }
      console.log(this.addressForm.selectedOptions)
      console.log(this.addressForm.sex)
      console.log(this.addressForm)
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
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  mounted () {
    console.log(this.$route.params)
  }
}
</script>

<style lang="stylus" scoped>
.address
    margin-top 60px
    margin-right 120px
    padding 28px 46px 0
    width 840px
    float right
    min-height 459px
    border 1px solid #c7c7c7
    .maintitle
        height 31px
        line-height 31px
        overflow hidden
        margin-bottom 18px
        font-weight 700
        border-bottom 1px solid #959595
</style>

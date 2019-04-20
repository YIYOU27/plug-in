<template>
    <div class="myprofile">
        <h3 class="maintitle">我的资料</h3>
        <table class="table1">
          <tr>
            <td class="td1">姓名：</td>
            <td class="td2">彭贵鑫</td>
          </tr>
          <tr>
            <td class="td1">生日：</td>
            <td class="td2">2019.03.08</td>
          </tr>
          <tr>
            <td class="td1">电子邮箱：</td>
            <td class="td2">1234567891</td>
          </tr>
          <tr>
            <td class="td1">手机号码：</td>
            <td class="td2">12345678912</td>
          </tr>
        </table>
       <table class="table2">
         <tr>
           <td class="td3">
             <router-link to="password">
              更改您的密码
              </router-link>
            </td>
           <td class="td3">
              <router-link to="info">
                更改个人信息
              </router-link>
            </td>
         </tr>
       </table>
    </div>
</template>

<style lang="stylus" scoped>
.myprofile
    margin-top 60px
    margin-right 120px
    padding 28px 46px 0
    width 840px
    float right
    min-height 459px
    border 1px solid #c7c7c7
    .maintitle
        height 31px
        font-weight 700
        line-height 31px
        overflow hidden
        margin-bottom 18px
        border-bottom 1px solid #959595
    .table1
        .td1
            width 74px
            height 28px
            line-height 28px
            font-size 14px
        .td2
            width 100px

    .table2
        margin-top 20px
        .td3
            width 140px
            text-align center
            height 29px
            line-height 29px
            background #fff
            border 1px solid #ccc
            &:hover
                background #e9004f
                color #fff

</style>

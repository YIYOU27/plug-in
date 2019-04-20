<template>
    <section class="loginContainer">
      <router-link tag="a" to="/profile" class="go_back">
        <i class="iconfont icon-jiantou2"></i>
      </router-link>
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">书吧</h2>
          <div class="login_header_title">
              <router-link exact active-class='on'  to="/loginRegister" tag="a">
                  登录
              </router-link>
              <router-link exact active-class='on' to="/register" tag="a">
                  注册
              </router-link>
          </div>
        </div>

        <div class="login_content">
           <router-view></router-view>
        </div>
      </div>
    </section>
</template>

<script>
import Login from './Login.vue'
export default {
  components: {
    Login
  }
}
</script>

<style lang="stylus" scoped>
.go_back
  position absolute
  top 20px
  left 10px
  i
    font-size 30px
.loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
.on
  color #02a774
  font-weight 700
  border-bottom 2px solid #02a774

.login_content
  padding-top 20px
</style>

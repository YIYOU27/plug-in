<template>
    <div class="market-header">
        <div class="container clearfix">
            <div class="header-info y-left">
                <el-breadcrumb separator="|">
                    <el-breadcrumb-item to="/">
                        <el-tooltip class="item" effect="light" content="首页" placement="bottom">
                            <i class="iconfont iconhome2 change-font-color"></i>
                        </el-tooltip>
                    </el-breadcrumb-item>
                    <el-breadcrumb-item to="/">
                        <el-tooltip class="item" effect="light" content="欢迎来到商城" placement="bottom">
                            <i class="iconfont iconqiatongxingxiang change-font-color"></i>
                        </el-tooltip>
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>
                        <el-tooltip class="item" effect="light" content="全屏" placement="bottom">
                            <i class="iconfont iconquanping change-font-color" @click="handleFullScreen"></i>
                        </el-tooltip>
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="header-info y-right">
                <el-breadcrumb separator="|">
                    <el-breadcrumb-item>
                      <router-link v-if="!login" to="/loginregister" class="change-font-color">请登录</router-link>
                      <el-tooltip v-if="login" class="item" effect="light" content="个人中心" placement="bottom">
                        <router-link to="/personalcenter">
                          <i class="iconfont iconwode change-font-color"></i>
                        </router-link>
                      </el-tooltip>
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>
                        <el-tooltip class="item" effect="light" content="购物车" placement="bottom">
                          <router-link to="/flowpath/shoppingcar">
                            <i class="iconfont icongouwucheman change-font-color"></i>
                          </router-link>
                        </el-tooltip>
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>
                        <el-tooltip class="item" effect="light" content="收藏夹" placement="bottom">
                          <router-link to="/collectList">
                            <i class="iconfont iconshoucang change-font-color"></i>
                          </router-link>
                        </el-tooltip>
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>
                        <el-tooltip class="item" effect="light" content="退出登录" placement="bottom">
                            <i class="iconfont icontuichudenglu change-font-color" @click="exit"></i>
                            {{login}}
                        </el-tooltip>
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    login () {
      return this.$store.state.login
    }
  },
  mounted () {
    if ('loing' in window.localStorage) {
      this.$store.commit('login', window.localStorage.login)
    }
  },
  methods: {
    // 全屏事件
    handleFullScreen () {
      let element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    },
    exit () {
      if (window.localStorage.hasOwnProperty('login')) {
        window.localStorage.removeItem('login')
      }
      this.$store.commit('exit') // vuex
    },
    x () {
      console.log(this.login)
      // console.log(this.$store.state.login)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styl/index'

.market-header
    width 100%
    background $theme-backgroud
    .container
        .header-info
            padding 10px
            line-height 1
</style>

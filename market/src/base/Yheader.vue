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
                    <el-breadcrumb-item to="/">
                        <el-tooltip class="item" effect="light" content="全屏" placement="bottom">
                            <i class="iconfont iconquanping change-font-color" @click="handleFullScreen"></i>
                        </el-tooltip>
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="header-info y-right">
                <el-breadcrumb separator="|">
                    <el-breadcrumb-item>
                         <el-dropdown placement="bottom" trigger="hover">
                        <span class="el-dropdown-link">
                            <i class="iconfont iconwode change-font-color"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>登录</el-dropdown-item>
                            <el-dropdown-item>注册</el-dropdown-item>
                            <el-dropdown-item>注销</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>
                        <el-tooltip class="item" effect="light" content="购物车" placement="bottom">
                            <i class="iconfont icongouwucheman change-font-color"></i>
                        </el-tooltip>
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>
                        <el-tooltip class="item" effect="light" content="收藏夹" placement="bottom">
                            <i class="iconfont iconshoucangjia change-font-color"></i>
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
      login: true
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

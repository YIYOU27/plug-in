<template>
<div class="container">
    <el-header class="clearfix">
        <el-menu class="ul-nav y-left" mode="horizontal">
            <el-menu-item index="1">
                <i class="iconfont icongaiicon-"></i>
                微商城
            </el-menu-item>
            <el-menu-item index="1">
                |
            </el-menu-item>
            <el-menu-item index="1">
                <i class="iconfont iconweibo"></i>
                官方微博
            </el-menu-item>
        </el-menu>
        <el-menu class="ul-nav y-right" mode="horizontal">
            <el-menu-item index="1">
                <router-link to="/login">
                登陆/注册
                </router-link>
            </el-menu-item>
            <el-menu-item index="1">
                |
            </el-menu-item>
            <el-menu-item index="1">
                 购物车
            </el-menu-item>
            <el-menu-item index="1">
                |
            </el-menu-item>
            <el-menu-item index="1">收藏夹</el-menu-item>
        </el-menu>
    </el-header>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import '~common/styl/index'
    .el-header
        padding 0 0px //r
        height 36px!important //r
        background $theme-backgroud
        border-bottom: solid 1px #e6e6e6
        font-size $font-size-middle
        .el-menu.el-menu--horizontal
            background $theme-backgroud
            border-bottom 0 //r
            &>.el-menu-item
                height 36px //r
                color $text-theme
                padding 0 5px //r
                line-height 36px //r
                &:hover           //导航
                    border-bottom 3px solid #38d39f!important
                    background $theme-backgroud //r
                .el-badge
                    .el-badge__content.is-fixed
                        top 8px!important
</style>

<template>
    <div class="container">
        <div class="loginregister">
            <div class="switch p-center">
                <router-link to="/loginregister">
                    登录
                </router-link>
                <router-link style="margin-left:195px" to="/loginregister/register">
                    注册
                </router-link>
            </div>
            <div class="">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
@import '~common/styl/variable'
.loginregister
    border 0
    padding 5px 0
    background $color-f
    box-shadow 1px 1px 2px 0 rgba(0,0,0,.3)
    .switch
        height 46px
        line-height 46px
        font-size 16px
        border-bottom 1px solid #e2e2e2
</style>

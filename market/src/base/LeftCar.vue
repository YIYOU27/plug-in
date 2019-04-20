<template>
    <div class="car">
        <div class="location">
            <router-link tag="a" to="/flowpath/shoppingcar">
                <div class="cartext">
                    <div class="text">
                        <i class="iconfont icongouwuche"></i>
                        购物车
                    </div>
                    <div class="carnum">0</div>
                </div>
            </router-link>
            <router-link tag="a" to="">
                <div class="collect">
                    <el-tooltip class="item" effect="light" content="收藏夹" placement="right">
                        <i class="iconfont iconshoucang1"></i>
                    </el-tooltip>
                </div>
            </router-link>
        </div>
        <el-tooltip class="item" effect="light" content="回到顶部" placement="right">
            <vueToTop style="dispaly:block;z-index:10000;" bottom="100" color="#38d39f" size="40" top="5" right="0" type="4"></vueToTop>
        </el-tooltip>
    </div>
</template>

<style lang="stylus" scoped>
.car
    width 40px
    height 100%
    position fixed
    top 0px
    right 0px
    background #444851
    z-index 1000
    .location
        position absolute
        top 40%
        height 200px
        a
            .cartext
                width 40px
                height 139px
                background #31353e
                border-bottom 1px solid  rgba(255, 255, 240,.5)
                &:hover
                    background #d02631
                &:hover .carnum
                    background #fff
                    color #d02631
                .text
                    padding: 7px 12px
                    width: 16px
                    font-size: 14px
                    line-height 23px
                    font-weight: normal
                    color: #fff
                    display: block
                .carnum
                    width 20px
                    height 20px
                    line-height 20px
                    border-radius 10px
                    color #fff
                    text-align center
                    font-size 14px
                    background #d02631
                    margin 0 auto
    .collect
        background #31353e
        border-bottom 1px solid  rgba(255, 255, 240,.5)
        i
            font-size 39px
            color #d02631

</style>

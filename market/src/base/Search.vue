<template>
<div class="container">
    <div class="center">
        <div class="search-img">
            <div class="logo">
                <router-link to="/home">
                    <img src="../common/images/download.png" alt="元祖食品">
                </router-link>
            </div>
            <div class="search">
                <form action="get" class="clearfix">
                    <input type="text" placeholder="请输入搜索名字">
                    <button type="button">搜索</button>
                </form>
                <p>
                    酒店预订：
                    <a href="javascript:;">MUCH蛋糕</a>
                    <a href="javascript:;">精致糕点</a>
                </p>
            </div>
            <div class="tel">
                <img src="../common/images/download.jpg" alt="400-100-3737">
            </div>
        </div>
        <nav>
            <div class="submenu">
                <el-dropdown class="dropdown" placement="top-start" trigger="click">
                    <el-button class="dropdown-button">
                        全部商品分类
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu class="dropdown-menu" slot="dropdown">
                        <el-dropdown-item>
                            <div>
                                <span>
                                    <i></i>
                                    <a href="javascript:;">踏青季</a>
                                </span>
                                <router-link to="/commodityType">踏青小食</router-link>
                                <router-link to="/commodityType">踏青蛋糕</router-link>
                            </div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div>
                                <span>
                                    <i></i>
                                <router-link to="/commodityType">MUCH蛋糕</router-link>
                                </span>
                                <router-link to="/commodityType">鲜奶蛋糕</router-link>
                                <router-link to="/commodityType">巧克力蛋糕</router-link>
                                <router-link to="/commodityType">慕斯蛋糕</router-link>
                                <router-link to="/commodityType">多层蛋糕</router-link>
                            </div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div>
                                <span>
                                    <i></i>
                                    <router-link to="/commodityType">元祖礼盒</router-link>
                                </span>
                                <router-link to="/commodityType">水果礼盒</router-link>
                                <router-link to="/commodityType">糕点礼盒</router-link>
                            </div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div>
                                <span>
                                    <i></i>
                                    <router-link to="/commodityType">精致西点</router-link>
                                </span>
                                <router-link to="/commodityType">小慕思类</router-link>
                                <router-link to="/commodityType">麻糬类</router-link>
                                <router-link to="/commodityType">其他</router-link>
                            </div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div>
                                <span>
                                    <i></i>
                                    <router-link to="/commodityType">元祖卡卷</router-link>
                                </span>
                                <router-link to="/commodityType">礼卡</router-link>
                                <router-link to="/commodityType">水果卷</router-link>
                                <router-link to="/commodityType">西点卷</router-link>
                                <router-link to="/commodityType">蛋糕卷</router-link>
                                <router-link to="/commodityType">电子卷</router-link>
                            </div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="center clearfix">
                <router-link to="/market">商城</router-link>
                <router-link to="/story">品牌故事</router-link>
                <router-link to="/eden">启蒙乐园</router-link>
                <router-link to="/contact">联系我们</router-link>
            </div>
       </nav>
    </div>
</div>
</template>

<style lang="stylus" scoped>
@import '~common/styl/variable.styl'

.dropdown-menu
    margin-top 0!important
.center
    position relative
    .search-img
        display flex
        justify-content space-between
        align-items center
        .logo
            width 240px
            height 135px
            text-align center
            &>a>img
                margin-top 20px
        .search
            width 522px
            height 72px
            position relative
            form
                input
                    float left
                    color #999
                    width 420px
                    height 36px
                    line-height 30px
                    padding-left 16px
                    border 3px solid #c5023a
                    border-right 0
                button
                    float left
                    color #fff
                    width 70px
                    height 36px
                    background #c7023a
                    font-size $font-size-large
                    border 0
            p
                line-height 30px
                color #aeaeae
                font-family '宋体'
        .tel
            width 260px
            height 135px
    nav
        height 40px
        position relative
        background-color #ffffff
        border-bottom 2px solid #e4004f
        .submenu
            float left
            .dropdown
                .dropdown-button
                    background #e9004f
                    color $color-f
                    border 0
                    border-radius 0
        .center
            a
                width 120px
                height 40px
                line-height 40px
                text-align center
                float left
                font-size $font-size-large
</style>

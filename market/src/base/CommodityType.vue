<template>
    <div class="container">
        <el-tabs>
            <el-tab-pane label="综合排序" name="first">综合排序</el-tab-pane>
            <el-tab-pane label="价格" name="second">价格</el-tab-pane>
            <el-tab-pane label="销量" name="third">销量</el-tab-pane>
        </el-tabs>
        <div class="products">
            <router-link tag="a" to="/particulars" class="photo">
                <img src="./p1.jpg" alt="">
            </router-link>
            <div class="ms">
                <h5>
                    <router-link to="/particulars">很好吃的蛋糕</router-link>
                </h5>
                <p>雪如万里云，韵若云间峦</p>
                <p class="spec">规格：6号、8号</p>
            </div>
            <strong class="price">¥280.00</strong>
            <router-link class="btn_minxi" to="/particulars">立即购买</router-link>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.products
    padding 10px 0
    height 170px
    background #fff
    border-bottom 1px solid #e1e1e1
    .photo
        margin 0 22px 0 5px
        float left
        width 150px
        height 150px
        display block
        img
            width 100%
            height 100%
    .ms
        width 450px
        float left
        font-size 14px
        padding-top 15px
        h5
            height 22px
            line-height 22px
            overflow hidden
            display block
            font-size 16px
            margin-bottom 10px
            font-weight 700
        p
            line-height 20px
            color #3c3c3c
            height 40px
            overflow hidden
        p.spec
            margin-top 20px
    .price
        float left
        width 180px
        font-size 24px
        color #e93d6d
        margin-top 50px
    .btn_minxi
        margin 50px 43px 0 0
        float right
        width 130px
        height 34px
        line-height 34px
        text-align center
        font-size 16px
        color #fff
        background #e50150
        display block
</style>

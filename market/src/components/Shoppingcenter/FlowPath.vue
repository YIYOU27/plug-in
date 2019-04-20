<template>
    <div class="container clearfix">
        <el-steps :active="0">
            <el-step title="1.购物车" icon="iconfont icongouwucheman"></el-step>
            <el-step title="2.填写订单信息" icon="iconfont icondingdanliebiao"></el-step>
            <el-step title="3.提交成功" icon="iconfont icontijiao"></el-step>
            <el-step title="4.在线支付" icon="iconfont iconzaixianzhifu"></el-step>
        </el-steps>
        <router-view></router-view>

    </div>
</template>

<style lang="stylus" scoped>
/deep/ .iconfont
    font-size 30px
/deep/ .el-step.is-simple .el-step__arrow::after, /deep/ .el-step.is-simple .el-step__arrow::before
    content ''
    display inline-block
    position absolute
    height 15px
    width 2px
    background #0b89f5

</style>

<template> <!--订单信息-->
    <div class="container">
        <div class="orderinformation">
            <!--收件人信息-->
            <div class="consignee info clearfix">
                <div class="header">
                    <p>收件人信息</p>
                </div>
                <p class="addressText" v-text="addressText"></p>
                <el-button class="addressBtn" type="text">修改地址</el-button>
                <p>
                    <el-button type="text" class="a-text" @click="dialogFormVisible = true">新建收货人地址</el-button>
                    <el-dialog class="tankuang" title='新建收货人地址' :visible.sync="dialogFormVisible">
                        <Address></Address>
                    </el-dialog>
                </p>
            </div>
            <!--购物清单-->
            <div class="shoppingList info">
                <div class="header">
                    <p>购物清单</p>
                </div>
                <router-link to="/flowpath/shoppingcar">
                    <span class="a-text y-right">&lt;&lt;返回购物车</span>
                </router-link>
                <br/>
                <table width="100%" border="0" cellspacing="0" cellpadding="0" class="box">
                    <tbody>
                            <tr>
                                <th scope="col" width="370">商品</th>
                                <th scope="col" width="158">单价</th>
                                <th scope="col" width="210">数量</th>
                                <th scope="col">总计</th>
                            </tr>
                            <tr>
                                <td>
                                    <div class="cartProduct">
                                            <router-link to="/particulars:123">
                                                西美糕
                                            </router-link>
                                            <input type="hidden" name="productName" value="樱花礼盒">
                                    </div>
                                </td>
                                <td>
                                    <em>
                                        ￥20.00
                                    </em>
                                </td>
                                <td>1</td>
                                <td>
                                    <em>
                                        ￥20.00
                                    </em>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="peisong">
                                        <h4>配送方式：</h4>
                                        <ul>
                                            <li>
                                                <input name="FRESH" id="pickup" type="radio" value="pickup" checked>&nbsp;&nbsp;<label for="pickup">门店自取</label>
                                            </li>
                                            <li>
                                                <input name="FRESH" type="radio" id="delivery" value="delivery">&nbsp;&nbsp;<label for="delivery">门店配送</label>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td style="text-align:left">
                                    <ul>
                                        <li>
                                            <input type="radio" id="alipay" value="alipay" name="paymentModeDto.name" checked><label for="alipay">支付宝</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="wechat" value="wechat" name="paymentModeDto.name"><label for="wechat">微信支付</label>
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    最终金额
                                </td>
                                <td>
                                    <em>
                                    ￥20.00
                                    </em>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="4" style="text-align: right">
                                    <el-button type="danger">
                                        <router-link to="/flowpath/submit">
                                        下订单
                                        </router-link>
                                    </el-button>
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Address from 'components/PersonalCenter/My/Address'
export default {
  data () {
    return {
      dialogFormVisible: false,
      addressText: '132 重庆市 重庆市 沙坪坝 西永天街 400400 18275387589'
    }
  },
  components: {
    Address
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styl/variable.styl'
p,div
    font-size $font-size-small
em
    color #e70050

.header
    width 171px
    height 100%
    position absolute
    left 0
    background linear-gradient(#e7e5e6, #ededed)
    margin-top -12px
    text-align center
    p
        margin-top 30px

.info
    position relative
    border-bottom 1px solid #c7c7c7
    padding 12px 12px 12px 185px

.orderinformation
    width 100%
    background #f9f9f9
    border: 1px solid #c7c7c7
    margin-top 20px
    margin-top 20px
    .consignee
        min-height 84px
        .addressText
            width 850px
            min-height 14px
            word-break break-all
            font-size $font-size-middle
        .addressBtn
            position absolute
            right 80px
            top 0px
    .shoppingList
        position relative
        .box
            background #fff
            border 1px solid #d2d2d2
        table
            margin-top 10px
            tr
                th
                    line-height 37px
                    background #e6e4e5
                td
                    padding 5px 20px
                    line-height 32px
                    text-align center
                    min-height 57px
                    border-bottom 1px solid #ccc
                    .cartProduct
                        width 370px
                        line-height 30px
                        text-align left
                        a
                            color #4f4f4f
                            font-weight 700!important
                            font-size $font-size-small
                        p
                            font-size $font-size-small
                            span  font-size $font-size-small
                    .peisong
                        text-align left
                        h4
                            line-height 32px
                            float left
                            margin-left 21px
                            display inline
                        ul
                            float left
                            overflow hidden
    .payment
        position relative
        .box
            padding 13px 13px
            p
                line-height 27px
            ul
                li
                    display inline
                    margin-right 20px
.tankuang
    /deep/ .address
        width 943px
        margin 0 0
        float none
        border 0

// .shopping-list

</style>

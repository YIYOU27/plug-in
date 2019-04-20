<template>
    <div class="addresslist">
        <h3 class="maintitle">
            管理收货地址
            <router-link to="/personalcenter/address">
                <button class="btn">
                    添加收获地址
                </button>
            </router-link>
        </h3>
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tbody>
                <tr>
                    <th>地址</th>
                    <th style="text-align:center;" width="148">操作</th>
                </tr>
                <tr>
                    <td>
                        <p>
                            <span>123</span>
                        </p>
                        <p>
                            <span>中国</span>，
                            <span>重庆市</span>，
                            <span>重庆市</span>，
                            <span>重庆市</span>，
                            <span>重庆市</span>，
                            <span>重庆市</span>，
                            <span>重庆市</span>，
                            <span>重庆市</span>，
                            <span>重庆市</span>，
                            <span>重庆市</span>
                        </p>
                        <p>13245678911</p>
                    </td>
                    <td>
                        <p>
                            <router-link tag="a" to="/personalcenter/address/xxx">
                                编辑
                            </router-link>
                            <a href="javascript:;">删除</a>
                            <a href="javascript:;" style="color:#e93d6d;font-weight:bold;">默认地址</a>
                        </p>
                    </td>
                </tr>
                 <tr>
                    <td>
                        <p>
                            <span>123</span>
                        </p>
                        <p>
                            <span>中国</span>，
                            <span>重庆市</span>，
                            <span>重庆市</span>，
                            <span>重庆市</span>，
                            <span>重庆市</span>，
                            <span>重庆市</span>，
                            <span>重庆市</span>，
                            <span>重庆市</span>，
                            <span>重庆市</span>，
                            <span>重庆市</span>
                        </p>
                        <p>13245678911</p>
                    </td>
                    <td>
                        <p>
                            <a href="javascript:;">编辑</a>
                            <a href="javascript:;">删除</a>
                            <a href="javascript:;" style="color:#e93d6d;font-weight:bold;">默认地址</a>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.addresslist
    margin-top 60px
    margin-right 120px
    padding 28px 46px 0
    width 840px
    float right
    min-height 459px
    border 1px solid #c7c7c7
    .maintitle
        height 31px
        line-height 31px
        overflow hidden
        margin-bottom 18px
        font-weight 700
        border-bottom 1px solid #959595
        .btn
            margin-left 530px
            margin-bottom 2px
            width 108px
            height 31px
            line-height 31px
            text-align center
            color #fff
            border 0
            background-color #df5451
    table
        tr
            th
                height 28px
                line-height 28px
                color #999
                padding 0 15px
                background #f9f9f9
                text-align left
            td
                padding 15px
                border none
                border-top 1px solid #eaeaea
                color #000
                line-height 24px
                vertical-align middle
</style>

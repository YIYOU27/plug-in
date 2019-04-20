<template> <!--商品详情页-->
    <div class="container clearfix">
      <div id="product" class="">
        <div id="ProductPhoto">
          <vue-magnify :previewImg="img.img" :zoomImg="images[0]">
</vue-magnify>
        </div>
        <div class="product_value y-right">
          <h1>{{img.NAME}}</h1>
          <div class="summary">都会好的多多多</div>
          <div class="price-box">
            <span class="price-text">优惠价：</span>
            <span class="price">￥{{img.min_price}}.00</span>
          </div>
          <div class="selector">
            <div class="price-text">奥术大师大撒多：</div>
            <div class="selector_title">
              <div :key="index" class="title" v-for="(item,index) in img.flavor.flavor_item">
                {{item}}
              </div>
            </div>
          </div>
          <div class="buyBox clearfix">
            <form action="" method="post">
              <div class="price y-left">
                数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：
              </div>
              <div class="buy y-right">
                <el-input-number class="y-left" name="num" v-model="num" :min="0" controls-position="right"></el-input-number>
                <button class="btn-buy y-left" type="button">立即购买</button>
                <router-link :to="'/flowpath/shoppingcar/' + id">
                  <button class="btn_addcart y-left" type="button">
                    <i class="iconfont icon56"></i>
                    加入购物车
                  </button>
                </router-link>
              </div>
            </form>
          </div>
          <div class="chengnuo">
            服务承诺：<i class="iconfont iconicon"></i>精选食材
            <i class="iconfont iconicon"></i>品质保证
            <i class="iconfont iconicon"></i>五星服务
            <i class="iconfont iconicon"></i>贴心宅配
          </div>
          <div class="bianhao">
            商品编号：100000732
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      images: [],
      id: null,
      img: null
    }
  },
  mounted () {
    this.id = this.$route.params.imageID
    console.log(this.$route.params.imageID)
    this.$http.get('http://192.168.83.252:5000/selectGoods', {
      params: {
        id: this.id
      }
    })
      .then((response) => {
        console.log(response)
        this.img = response.data.data.outcome
        console.log(this.img)
      })
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styl/variable'

.price-text
  height 25px
  line-height 25px
  font-size $font-size-middle
  color $text-commodity
  white-space nowrap
  vertical-align middle
#product
  width 991px
  padding-top 17px
  background-color $color-f
  overflow hidden
  #ProductPhoto
    float left
    width 450px
    height 450px
    display inline-block
    /deep/ .vue-magnify
      .preview-box
        img
          width 100%
          height 100%
      .zoom-box
        z-index 1000
  .product_value
    width 428px
    height 554px
    margin-right 40px
    display inline-block
    h1
      height 25px
      line-height 25px
      overflow hidden
      font-size $font-size-large
    .summary
      font-size $font-size-small
      color $text-subhead
      margin-bottom 15px
    .price-box
      margin-bottom 15px
      .price
        font-size 24px
        color $text-price
        vertical-align middle
    .selector
      display flex
      margin-bottom 15px
      justify-content flex-start
      .price-text
      .selector_title
        display flex
        justify-content flex-start
        flex-direction row
        flex-wrap wrap
        .title
          margin-right 10px
          text-align center
          margin-bottom 5px
          padding 0 6px
          border 2px solid $text-price
          height 21px
          line-height 19px
          font-size $font-size-small
    .buyBox
      margin-bottom 20px
      display flex
      justify-content flex-start
      form
        .price
          height 25px
          line-height 25px
          font-size $font-size-middle
          color $text-commodity
          white-space nowrap
        .buy
          /deep/ .el-input-number
            display block
            width 80px
            box-sizing border-box
            & > span:hover
              color $text-price
              &:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled)
                border-color $text-price
          .btn-buy
            display block
            width 110px
            height 38px
            margin 0 7px
            font-size 20px
            color $text-price
            background #feedf3
            border 1px solid $text-price
          .btn_addcart
            display block
            width 150px
            height 38px
            font-size 20px
            color $color-f
            border 0
            background: $text-price
    .chengnuo
      padding 0 12px
      line-height 29px
      color $text-subhead
      margin-bottom 21px
      background #f7f3e8
      font-size 12px
      .bianhao
        margin-left 30px
</style>

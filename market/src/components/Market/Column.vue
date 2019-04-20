<template> <!--商品大类-->
<div class="container">
    <div class="column">
      <h3 class="PartTitle">
        <i class="iconfont"></i>
        {{itemCategory.name}}
      </h3>
      <div class="PartTitleimg">
        <img :src="itemCategory[1]" alt="">
      </div>
      <div class="ProductList clearfix">
        <div class="box" :key="index" v-for="(column, index) in itemCategory">
          <Commodity :seen="seen" :images="column" ></Commodity>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import Commodity from './Commodity'
export default {
  data () {
    return {
      seen: true
    }
  },
  props: {
    itemCategory: { // 列表
      required: true
    }
  },
  mounted () {
    this.$http.get('http://192.168.83.252:5000/activity')
      .then((response) => {
        // this.$store.commit('recommend', response.data.data.result)
        console.log(response)
      })
  },
  components: {
    Commodity
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styl/variable'
.column
  background $color-f
  overflow hidden
  .PartTitle
    height 40px
    line-height 40px
    position relative
    font-size $font-size-large-x
    overflow hidden
    background #f9f9f9
    border-bottom 2px solid $text-price
  .PartTitleimg
    width 317px
    height 368px
    position relative
    float left
    overflow hidden
    margin-left 20px
    img
      width 100%
      height 100%
  .ProductList
    .box
      float left
      padding 0 15px
      /deep/ a
        .commodity
          width 248px
          height 347px
          text-align center
          padding 20px 20px 0
          img
            width 180px!important
            height 180px!important
            margin 50px auto 10px auto
            display block
          .custom-name
            height 28px
            line-height 28px
            overflow hidden
            font-weight 700
          .custom-introduce
            height 19px
            line-height  19px
            overflow hidden
</style>

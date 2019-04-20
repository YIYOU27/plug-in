<template scope="imgs"> <!--商品信息banner框-->
  <router-link tag="a" :to="'/particulars/'+ imgs.id">
    <div class="commodity">
        <img alt="" :src="imgs && imgs.img ? imgs.img: ''" >
        <p class="p-center custom-name">{{imgs.NAME}}</p>
        <p v-if="seen" class="p-center custom-introduce">{{imgs.introduce}}xx</p>
        <p class="p-center custom-price">￥{{imgs.min_price}}.00</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    seen: {},
    imgs: {
    }
  },
  // computed: {
  //   img () {
  //     return this.img
  //   }
  // },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styl/variable'
a
  display block
  .commodity
    width 100%
    height 100%
    padding 10px 18px
    background $color-f
    &:hover
      border 1px solid #ccc
      box-shadow 0 0 8px $box-shadow
    img
      width 100%
      height 100%
      display block
    p
      display block
      font-size $font-size-large-x
    .custom-name
      height 31px
      line-height 31px
    .custom-introduce
      height 31px
      line-height 31px
      font-size $font-size-middle
    .custom-price
      color $text-price
      font-size $font-size-large-x
      height 28px
      line-height 28px
</style>

<template>
    <div>
        <Slide class="marketSlide" :className = "mar" :images = "images" :swiperx = "banners"></Slide> <!--banner轮播-->
        <br/>
        <Recommend></Recommend> <!--推荐-->
        <br/>
        <Column :itemCategory="images"></Column> <!--商品大类-->
    </div>
</template>

<script>
import Slide from 'base/Slide'
import v1 from 'common/images/banner/v1.jpg'
import v2 from 'common/images/banner/v2.jpg'
import v3 from 'common/images/banner/v3.jpg'
import v4 from 'common/images/banner/v4.jpg'

import Recommend from './Recommend'
import Column from './Column'
export default {
  data () {
    return {
      mar: {
        name: 'mar',
        pagination: 'marpagination',
        navigation: {
          prev: 'marprev',
          next: 'marnext'
        },
        scrollbar: 'marscrollbar'
      },
      images: [v1, v2, v3, v4],
      banners: {
        speed: 300,
        loop: true,
        direction: 'horizontal',
        autoplay: false,
        pagination: true, // 分页器
        button: true, // 导航按钮
        scrollbar: false, // 滚动条
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      dalei: null
    }
  },
  mounted () {
    this.$http.get('http://192.168.83.252:5000/activity')
      .then((response) => {
        this.$store.commit('recommend', response.data.data.result)
        console.log(response)
      })
  },
  components: {
    Slide,
    Recommend,
    Column
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styl/variable'
.marketSlide
  /deep/ .swiper-container
    width 100%
    height 438px
    .swiper-wrapper
      .swiper-slide
        a
          img
            width $center-width
            height 438px
</style>

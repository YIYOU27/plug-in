<template>
    <div>
        <Slide class="marketSlide" :className = "mar" :images = "images" :swiperx = "banners"></Slide>
        <br/>
        <Recommend></Recommend>
        <br/>
        <Column :itemCategory="images"></Column>
    </div>
</template>

<script>
import Slide from 'base/Slide'
import png from 'common/images/banner/p3.jpg'
import png2 from 'common/images/banner/p4.jpg'
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
      images: [png, png2, png],
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
      }
    }
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

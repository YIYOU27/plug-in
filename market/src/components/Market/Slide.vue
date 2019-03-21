<template>
    <div class="container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:;">
                <img :src="png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;">
                <img :src="png" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;">
                <img :src="png" alt="">
              </a>
            </div>
          </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
</template>

<script>
import png from 'common/images/banner/p3.jpg'
import Swiper from 'swiper'

export default {
  data () {
    return {
      png
    }
  },
  mounted () {
    let mySwiper = new Swiper('.swiper-container', { // eslint-disable-line no-unused-vars
      speed: 300, // 速度
      loop: true, // 循环
      direction: 'horizontal',
      autoplay: true,
      pagination: { // 分页器
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: { // 前进后退按钮
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styl/variable'
.swiper-container
  width 100%
  height 438px
  .swiper-wrapper
    .swiper-slide
      a
        img
          width $center-width
          height 438px
</style>

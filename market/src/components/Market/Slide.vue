<template>
    <div>
        <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img :src="png" alt=""></div>
        <div class="swiper-slide"><img :src="png" alt=""></div>
        <div class="swiper-slide"><img :src="png" alt=""></div>
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
import png from 'common/images/banner/p1.jpg'
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

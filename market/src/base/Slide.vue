<template>
    <div class="container">
      <div class="swiper-scrollbar" :class="className.scrollbar" v-if="swiperx.scrollbar"></div>
      <div class="swiper-container" :class="className.name">
        <div class="swiper-wrapper">
            <div :key="index" v-for="(imgUrl, index) in images" class="swiper-slide">
              <a href="javascript:;">
                <img :src="imgUrl" alt="">
              </a>
            </div>
            <slot name="commodity"></slot>
          </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination" :class="className.pagination" v-if="swiperx.pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev" :class="className.navigation.prev" v-if="swiperx.button"></div>
        <div class="swiper-button-next" :class="className.navigation.next" v-if="swiperx.button"></div>
        <!-- 如果需要滚动条 -->
      </div>
    </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  props: {
    images: {
      required: true
    },
    swiperx: {
      required: true
    },
    className: {
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    swiperslide () {
      var mySwiper = new Swiper('.' + this.className.name, { // eslint-disable-line no-unused-vars
        watchOverflow: true, // 只有一个slide的时候，不会触发swiper
        speed: this.swiperx.speed || 300, // 速度
        loop: this.swiperx.loop || false, // 循环
        direction: this.swiperx.direction || 'horizontal',
        autoplay: this.swiperx.autoplay || false,
        pagination: { // 分页器
          el: '.' + this.className.pagination,
          clickable: true
        },
        navigation: { // 前进回头按钮
          nextEl: '.' + this.className.navigation.prev,
          prevEl: '.' + this.className.navigation.next
        },
        scrollbar: { // 滚动条
          el: '.' + this.className.scrollbar
          // scrollbarDraggable: true
        },
        slidesPerView: this.swiperx.slidesPerView || 1,
        slidesPerGroup: this.swiperx.slidesPerView || 1,
        spaceBetween: this.swiperx.spaceBetween || 0,
        uniqueNavElements: false,
        on: this.swiperx.on || null
      })
      this.$emit('sendSwiper', mySwiper)
    }
  },
  mounted () {
    this.swiperslide()
  }
}
</script>

<style lang="stylus" scoped>

</style>

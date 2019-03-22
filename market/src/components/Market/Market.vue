<template>
    <div>
        <Slide :className = "mar" :images = "images" :swiperx = "banners"></Slide>
        <Recommend></Recommend>
    </div>
</template>

<script>
import Slide from 'base/Slide'
import png from 'common/images/banner/p3.jpg'
import png2 from 'common/images/banner/p4.jpg'
import Recommend from './Recommend'


export default {
  data () {
    return {
      mar: 'mar',
      images: [png,png2],
      banners: {
        speed: 300,
        loop: true,
        direction: 'horizontal',
        autoplay: true,
        pagination: true, // 分页器
        button: false, // 导航按钮
        scrollbar: false, // 滚动条
        slidesPerView : 1,
        slidesPerGroup : 1,
      }
    }
  },
  components: {
    Slide,
    Recommend
  }
}
</script>

<style lang="stylus" scoped>
</style>

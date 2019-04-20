import Swiper from 'swiper'

var mySwiper = new Swiper('.' + this.className.name, { // eslint-disable-line no-unused-vars
  speed: this.swiperx.speed || 300, // 速度
  loop: this.swiperx.loop || false, // 循环
  direction: this.swiperx.direction || 'horizontal',
  autoplay: this.swiperx.autoplay || false,
  pagination: {
    el: '.' + this.className.pagination,
    clickable: true
  },
  navigation: { // 前进回头按钮
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  scrollbar: {
    el: '.' + this.className.scrollbar
  },
  slidesPerView: this.swiperx.slidesPerView || 1,
  slidesPerGroup: this.swiperx.slidesPerView || 1,
  updateOnImagesReady: true
})

class MySwiper {
  constructor (moreSwiper) {
    this.initialSlide = moreSwiper.initialSlide || 0
    this.direction = moreSwiper.direction || 'horizontal'
    this.speed = moreSwiper.speed || 300
    this.grabCursor = moreSwiper.grabCursor || false
    this.virtualTranslate = moreSwiper.virtualTranslate || false
    this.roundLengths = moreSwiper.roundLengths || false
    this.autoHeight = moreSwiper.autoHeight || false
    this.nested = moreSwiper.nested || false
    this.runCallbacksOnInit = moreSwiper.runCallbacksOnInit || false
    this.watchOverflow = moreSwiper.watchOverflow || false
    this.on = moreSwiper.on || null
    this.init = moreSwiper.init || false
    this.preloadImages = moreSwiper.preloadImages || false
    this.updateOnImagesReady = moreSwiper.updateOnImagesReady || false
    this.centeredSlides = moreSwiper.centeredSlides || false
    this.slidesPerView = moreSwiper.slidesPerView || 1
    this.slidesPerGroup = moreSwiper.slidesPerGroup || 1
    this.spaceBetween = moreSwiper.spaceBetween || 0
    this.slidesPerColumn = moreSwiper.slidesPerColumn || 1
    this.slidesPerColumnFill = moreSwiper.slidesPerColumnFill || 'column'
    this.slidesOffsetBefore = moreSwiper.slidesOffsetBefore || 0
    this.slidesOffsetAfter = moreSwiper.slidesOffsetAfter || 0
    this.effect = moreSwiper.effect || 'slide'
    this.slidesOffsetAfter = moreSwiper.slidesOffsetAfter || 0
    this.slidesOffsetAfter = moreSwiper.slidesOffsetAfter || 0
    this.slidesOffsetAfter = moreSwiper.slidesOffsetAfter || 0
  }
}
console.log(MySwiper)

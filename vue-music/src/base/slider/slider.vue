<template>      <!--轮播组件-->
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup"> <!--横向滚动，不能被撑宽，需要手动设置宽度-->
            <slot><!--vuejs的插槽，外部引入的slider包裹的dom会插入这里-->
            </slot>
        </div>
        <div class="dots">
          <span class="dot" :key="index" v-for="(item, index) in dots" :class="{active: currentPageIndex === index}"></span>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {addClass} from 'common/js/dom'

export default {
  data () {
    return {
      dots: [],
      currentPageIndex: 0 // 当前第几页
    }
  },
  props: {
    loop: { // 循环轮播
      type: Boolean,
      default: true
    },
    autoPlay: { // 自动轮播
      type: Boolean,
      default: true
    },
    interval: { // 轮播间隔
      type: Number,
      default: 4000
    }
  },
  mounted () { // 因为怕better-scroll初始化过后不能滚动，或者报错。因为是初始化的时候组建没有得到真正的渲染，或者是高度宽度计算不对，所以用mounted
    setTimeout(() => { // 保证成功渲染加个延时，浏览器一般在17ms刷新一次
      this._setSliderWidth()
      this._initDots()
      this._initSlider()

      if (this.autoPlay) {
        this._paly()
      }
    }, 20)

    window.addEventListener('resize', () => { // 当窗口改变的的时候，需要重新计算
      if (!this.slider) {
        return
      }
      this._setSliderWidth(true)
      this.slider.refresh()
    })
  },
  methods: {
    _setSliderWidth (isResize) { // 横向滚动，需要设置宽度
      this.children = this.$refs.sliderGroup.children //  获取列表元素 dom对象

      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth// 父容器的宽度 被图片撑宽
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item') // 给每一个添加样式
        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }
      if (this.loop && !isResize) { // 如果loop是true的话 会clone两个dom，一边一个 ，保证循环切换
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initDots () { // 初始化点
      this.dots = new Array(this.children.length) // 页面是7，length为5
    },
    _initSlider () { // 初始化slider
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        }
      })
      this.slider.on('scrollEnd', () => {
        let pageIndex = this.slider.getCurrentPage().pageX
        // if (this.loop) {
        //   pageIndex -= 1
        // }
        this.currentPageIndex = pageIndex
        if (this.autoPlay) {
          clearTimeout(this.timer) // 手动滑动清除
          this._paly()
        }
      }) // 绑定一个事件
    },
    _paly () {
      let pageIndex = this.currentPageIndex + 1
      // if (this.loop) {
      //   pageIndex += 1
      // }
      this.timer = setTimeout(() => {
        this.slider.goToPage(pageIndex, 0, 400) // 0代表Y方向上的
      }, this.interval)
    }
  },
  distoryed () {
    clearTimeout(this.timer)
  }
}
</script>

<style lang="stylus" scoped>
  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: rgba(255, 255, 255, 0.5)
        &.active
          width: 20px
          border-radius: 5px
          background: rgba(255, 255, 255, 0.8)
</style>

<template> <!--推荐-->
  <div class="container recommendNav clearfix">
    <div class="pnav">
      <p id="p0">新品</p>
      <p id="p4">热销推荐</p>
      <p id="p8">节庆民俗</p>
      <p id="p12">卡卷</p>
    </div>
    <div class="conbox">
      <h1>最新消息</h1>
      <ul class="news">
        <li>
          <router-link to="/news:seen">
            asdasdasd
          </router-link>
        </li>
      </ul>
    </div>
    <Slide v-if="recommend" @sendSwiper="pslide" :images="null" class="recommendSlide" :className="rec"  :swiperx = "banner">
      <div  slot="commodity" :key="index" v-for="(image, index) in recommend" class="swiper-slide" >
        <Commodity  v-if="recommend.length>0" :imgs="image" :isSeen="seen"></Commodity>
      </div>
    </Slide>
  </div>
</template>

<script>
import Slide from 'base/Slide'
import Recommend from './Recommend'
import Commodity from './Commodity'

export default {
  data () {
    return {
      seen: false,
      temp: null,
      rec: {
        name: 'rec',
        pagination: 'recpagination',
        navigation: {
          prev: 'recprev',
          next: 'nextnext'
        },
        scrollbar: 'recscrollbar'
      },
      banner: {
        speed: 300,
        loop: false,
        direction: 'horizontal',
        autoplay: false,
        pagination: false, // 分页器
        button: false, // 导航按钮
        scrollbar: true, // 滚动条
        slidesPerView: 4, // 可视数
        slidesPerGroup: 4, // 多少个一组
        spaceBetween: 7,
        on: {
          slideChange: function () {
          }
        }
      }
    }
  },
  computed: {
    recommend () {
      return this.$store.state.recommend
    }
  },
  components: {
    Slide,
    Recommend,
    Commodity
  },
  methods: {
    pslide (swiper) {
      document.getElementById('p0').onmousemove = function () {
        swiper.slideTo(0, 300, false)
      }
      document.getElementById('p4').onmousemove = function () {
        swiper.slideTo(4, 300, false)
      }
      document.getElementById('p8').onmousemove = function () {
        swiper.slideTo(8, 300, false)
      }
      document.getElementById('p12').onmousemove = function () {
        swiper.slideTo(12, 300, false)
      }
    }
  },
  mounted () {
    this.$http.get('http://192.168.83.252:5000/activity')
      .then((response) => {
        this.$store.commit('recommend', response.data.data.result)
      })
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styl/variable'
.recommendNav
  position relative
  height 332px
  overflow hidden
  .pnav
    display flex
    align-items center
    justify-content center
    width 908px
    p
      flex-grow: 1
      text-align center
      color $text-default
      font-size $font-size-large-x
      &:hover
        color $text-price
.conbox
  width 270px
  height 200px
  background #fff
  position absolute
  right 0
  h1
    height 40px
    line-height 40px
    overflow hidden
    padding-left 30px
    background #efefef
  .news
    margin 0 18px
    padding-top 5px
    li
      height 30px
      line-height 30px
      overflow hidden
/deep/ .recommendSlide
  width 900px!important
  margin-left 0
  .swiper-scrollbar
    height 5px
    margin 10px
    background $text-default
    .swiper-scrollbar-drag
      background $text-price
  .swiper-container
    width 920px!important
    .swiper-wrapper
      .swiper-slide
        &:hover
          border 1px solid #ccc
          box-shadow 0 0 8px $box-shadow
        a
          .commodity
            height 264px
            img
              width 185px
              height 185px
              cursor pointer
            .custom-price
              height 26px
              line-height 26px
</style>

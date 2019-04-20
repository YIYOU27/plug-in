<template>
    <!--首页外卖-->
      <section class="msite">
        <!--首页头部-->
        <header-top title="读书...">
          <span class="header_search" slot="left">
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span class="header_login" slot="right">
            <span class="header_login_text">
              <router-link to="/loginRegister">
                {{loginRegister}}
              </router-link>
            </span>
          </span>
        </header-top>
        <!--首页导航-->
        <!-- <nav class="msite_nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
              </div>
            </div> -->
            <!-- Add Pagination -->
            <!-- <div class="swiper-pagination"></div>
          </div>
        </nav> -->
        <!--首页附近商家-->
        <section class="bookselfs">
          <book :key="index" v-for="(item, index) in images" :img="item"/>
        </section>
      </section>
</template>

<script>
import Swiper from 'swiper'
import Book from './book.vue'
import 'swiper/dist/css/swiper.min.css'
import HeaderTop from 'components/HeaderTop/HeaderTop.vue'

export default {
  data () {
    return {
      images: null,
      img: null,
      loginRegister: null
    }
  },
  components: {
    HeaderTop,
    Book
  },
  created () {
    this.$http.get('http://192.168.1.100:8081/books')
      .then((res) => {
        this.images = res.data
        // console.log(this.images)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  mounted () {
    // 创建一个Swiper实例对象，来实现轮播
    new Swiper('.swiper-container', { // eslint-disable-line no-new
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
    this.$store.commit('login', window.localStorage.login) // 将登录状态存入vuex
    console.log(this.$store.state.login)
    if (this.$store.state.login) {
      this.loginRegister = '注销'
    } else {
      this.loginRegister = '登录|注册'
    }
    console.log(this.$store.state.login)
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
.msite  //首页
  width 100%
  .bookselfs
    margin 0 auto
    margin-top 45px
    margin-bottom 45px
    display flex
    width 320px
    flex-direction row
    flex-wrap wrap
    align-content center

</style>

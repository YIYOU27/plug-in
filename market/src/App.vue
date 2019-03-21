<template>
  <div id="app">
      <Yheader></Yheader>
      <Search></Search>
      <div v-if="see" class="location-nav container">
        <router-link to="/market">主页</router-link>   >
        <a href="javascript:;">{{$route.name}}</a>
      </div>
      <transition mode="out-in" :name="name">
        <router-view></router-view>
      </transition>
      <Yfooter></Yfooter>
  </div>
</template>

<script>
import Yheader from 'base/Yheader'
import Yfooter from 'base/Yfooter'
import Search from 'base/Search'

export default {
  name: 'App',
  components: {
    Yheader,
    Yfooter,
    Search
  },
  data () {
    return {
      name: '',
      see: 0
    }
  },
  mounted () {
    this.see = this.$route.name !== '主页' && '主页' ? 1 : 0
  },
  watch: {
    $route (to, from) {
      if (to.meta.index > from.meta.index) {
        this.name = 'left'
      } else {
        this.name = 'right'
      }
      this.see = to.name !== '主页' ? 1 : 0
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.left-enter { transform:translateX(100%) }
.left-enter-to { translateX(0) }
.left-enter-active { transition:1s }
.left-leave { transform:translateX(0) }
.left-leave-to { translateX(-100%) }
.left-leave-active { transition:1s }

.right-enter { transform:translateX(-100%) }
.right-enter-to { translateX(0) }
.right-enter-active { transition:1s }
.right-leave { transform:translateX(0) }
.right-leave-to { translateX(100%) }
.right-leave-active { transition:1s }

.location-nav
  height 45px
  line-height 45px
  color #4f4f4f

</style>

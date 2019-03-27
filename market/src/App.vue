<template>
  <div id="app">
      <Yheader></Yheader>
      <Search></Search>
      <div v-if="see" class="location-nav container">
        <el-tag>
          <router-link to="/market">主页</router-link>
        </el-tag>
         <el-tag>
            {{$route.name}}
        </el-tag>
      </div>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
      <Yfooter></Yfooter>
      <Car></Car>
  </div>
</template>

<script>
import Yheader from 'base/Yheader'
import Yfooter from 'base/Yfooter'
import Search from 'base/Search'
import Car from 'base/Car'

export default {
  name: 'App',
  components: {
    Yheader,
    Yfooter,
    Search,
    Car
  },
  data () {
    return {
      name: '',
      see: 0
    }
  },
  mounted () {
    this.see = this.$route.name !== '主页' && this.$route.name !== 'home' ? 1 : 0
  },
  watch: {
    $route (to, from) {
      this.see = to.name !== '主页' && 'home' ? 1 : 0
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.v-enter
  transform translateY(5%)
  opacity 0
.v-enter-to
  transform translateY(0)
  opacity 1
.v-enter-active, .v-leave-active
  transition: 0.4s
.v-leave
  transform translateY(0)
  opacity 1
.v-leave-to
  translateY(-5%)
  opacity 0

.location-nav
  height 45px
  line-height 45px
  color #4f4f4f

</style>

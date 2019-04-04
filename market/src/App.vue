<template>
  <div id="app">
      <Yheader></Yheader>
      <Search></Search>
      <div v-if="see" class="location-nav container">
      </div>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
      <Yfooter></Yfooter>
      <LeftCar></LeftCar>
  </div>
</template>

<script>
import Yheader from 'base/Yheader'
import Yfooter from 'base/Yfooter'
import Search from 'base/Search'
import LeftCar from 'base/LeftCar'

export default {
  name: 'App',
  components: {
    Yheader,
    Yfooter,
    Search,
    LeftCar
  },
  data () {
    return {
      name: '',
      see: 0
    }
  },
  mounted () {
    if ('loing' in window.localStorage) {
      this.$store.commit('login', window.localStorage.login)
      // console.log(this.$store.state.login.id)
    }
  },
  watch: {
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

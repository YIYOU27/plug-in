<template>
  <div id="app">
    <div class="container">
      <Yheader></Yheader>
      <Search></Search>
      <transition mode="out-in" :name="name">
        <router-view></router-view>
      </transition>
      <Yfooter></Yfooter>
    </div>
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
      name: ''
    }
  },
  watch: {
    $route (to, from) {
      if (to.meta.index > from.meta.index) {
        this.name = 'left'
      } else {
        this.name = 'right'
      }
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
</style>

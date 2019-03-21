<template>
    <p class="p-center">
        <img :src="eden" alt="">
    </p>
</template>

<script>
import eden from 'common/images/eden.jpg'
export default {
  data () {
    return {
      eden
    }
  }
}
</script>

<style lang="stylus" scoped>
img
    width 100%
</style>

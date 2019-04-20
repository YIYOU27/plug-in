<template>
    <div @touchstart="touchstart" @touchend="touchend" class="container" :class="{border:border}">
        <img :src="img.url" alt="">
        <p class="title">{{img.book_name}}</p>
    </div>
</template>

<script>
export default {
  props: {
    img: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      border: false
    }
  },
  methods: {
    touchstart () {
      this.border = true
      console.log(this.img.book_id)
    },
    touchend () {
      this.border = false
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
.border
    border 2px solid #02a774 !important
.container
    margin 10px 10px
    width 80px
    border 2px solid transparent
    border-radius 5px
    box-shadow 0 1px 6px rgba(32, 33, 36, 0.28)
    img
        width 80px
        height 120px
        display block
        margin 0 auto
        border-radius 5px
    .title
        padding 4px 0 4px 0
        font-family "Microsoft YaHei"
        font-weight 600
        text-align center
        font-size 12px
        display block
</style>

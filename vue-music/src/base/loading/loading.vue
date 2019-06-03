<!-- 展示模板 -->
<template>
<div class="loading">
  <img src="./loading.gif" width="24" height="24" alt="">
  <p class="desc">{{title}}</p>
</div>
</template>

<script>
// 导入组件
export default {
  props: {
    title: {
      type: String,
      default: '正在载入'
    }
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus">
  @import "~common/stylus/variable";
   .loading
     width: 100%
     text-align: center
     .desc
      line-height: 20px
      font-size: $font-size-small
      color: $color-text-l
</style>

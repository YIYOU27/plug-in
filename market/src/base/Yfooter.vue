<template>
    <footer class="container ">
        <img class="footer-img" :src="footer" alt="">
        <p class="p-center footer-p">版权所有 @ 元祖股份有限公司 沪ICP备17013537号</p>
        <p class="p-center">
            <img class="danger" :src="danger" alt="">
        </p>
    </footer>
</template>

<script>
import footer from 'common/images/footer.jpg'
import danger from 'common/images/danger.jpg'

export default {
  data () {
    return {
      footer,
      danger
    }
  }
}
</script>

<style lang="stylus" scoped>
footer
    margin 25px auto 0px auto
    padding-bottom 50px
    background-color #ffffff
    border-top 7px solid #de5251
    .footer-img
        margin 20px 0
    .footer-p
        color #535353
        margin-bottom: 10px
        font-size $font-size-small
</style>

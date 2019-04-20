<template>
      <section class="profile">
        <header-top title="我的"></header-top>
        <section class="profile-number">
          <router-link to="/loginRegister"  class="profile-link">
            <div class="profile_image">
              <i class="iconfont icon-person"></i>
            </div>
            <p class="user-info">登录/注册</p>
          </router-link>
        </section>
        <section class="profile_my_order border-1px">
          <el-collapse accordion>
            <el-collapse-item>
              <template slot="title">
              <span class="my-collection">我的收藏</span>
              </template>
              <div class="bookselfs">
              </div>
            </el-collapse-item>
          </el-collapse>
        </section>
      </section>
</template>

<script>
import book from 'pages/Reading/book.vue'
import HeaderTop from 'components/HeaderTop/HeaderTop.vue'
export default {
  components: {
    HeaderTop,
    book
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
        .profile //我的
          width 100%
          overflow hidden
          .profile-number
            margin-top 45.5px
            .profile-link
              clearFix()
              position relative
              display block
              background #02a774
              padding 20px 10px
              .profile_image
                float left
                width 60px
                height 60px
                border-radius 50%
                overflow hidden
                .icon-person
                  background #e4e4e4
                  font-size 62px
              .user-info
                float left
                color #fff
                font-size 20px
                line-height 60px
                margin-left 15px
.bookselfs
    margin 0 10px
    display inline-flex
    flex-direction row
    flex-wrap wrap
    align-content center
.my-collection
  padding-left 20px

</style>

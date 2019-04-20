<template>
    <div class="usertab">
        <el-card class="tab">
            <div slot="header">
                <span>资料设置</span>
             </div>
            <div class="text">
               <router-link to="/personalcenter/myprofile">
                  更新个人设置
               </router-link>
            </div>
            <div class="text">
               <router-link to="/personalcenter/password">
                  修改密码
               </router-link>
            </div>
            <div class="text">
              <router-link to="/personalcenter/address-list">
                  收获地址
               </router-link>
            </div>
            <div class="text">
               <router-link to="">
                  增值税发票
               </router-link>
            </div>
        </el-card>

         <el-card class="tab">
            <div slot="header">
                <span>账户查询</span>
             </div>
            <div class="text">
               我的电子卷
            </div>
            <div class="text">
               我的积分
            </div>
        </el-card>

         <el-card class="tab">
            <div slot="header">
                <span>我的设置</span>
             </div>
            <div class="text">
               我的收藏夹
            </div>
        </el-card>

         <el-card class="tab">
            <div slot="header">
                <span>订到管理</span>
             </div>
            <div class="text">
               订单历史记录
            </div>
        </el-card>
    </div>
</template>

<style lang="stylus" scoped>
.usertab
    float right
    width 932px
    min-height 459px
    border 1px solid #eee
    display flex
    justify-content space-between
    flex-wrap wrap
    padding 12px 12px
    .tab
        width 49%
        margin-bottom 20px
        display block
        .el-card__header
            div
                text-align center
        /deep/ .el-card__body
            padding 0
            height 160px
            .text
                text-align  center
                height 40px
                line-height 40px
                &:hover
                    background #ecf5ff
</style>

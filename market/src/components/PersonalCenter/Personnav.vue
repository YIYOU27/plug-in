<template>
        <div class="y-left">
        <el-menu default-active="1-5-6" class="el-menu-vertical-demo">
            <el-menu-item index="1">
                <i class="iconfont iconqiatongxingxiang"></i>
                <span slot="title">欢迎来到元祖食品</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="iconfont iconhuiyuan"></i>
                <span slot="title">会员中心</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="iconfont iconidinput"></i>
                <span slot="title">ID:18275387016</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="iconfont iconhuiyuandengji"></i>
                <span slot="title">会员等级:</span>
            </el-menu-item>
            <el-submenu index="5">
                <template slot="title">
                    <router-link to="/personalcenter">
                        <i class="iconfont icongerenzhongxin"></i>
                    </router-link>
                    <span slot="title">
                        <router-link to="/personalcenter">
                            个人中心
                        </router-link>
                    </span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">
                        <router-link to="/personalcenter/myprofile">
                            我的资料
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <router-link to="/personalcenter/password">
                            修改密码
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="1-3">
                        <router-link to="/personalcenter/address-list">
                            收获地址
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="1-3">增值税发票</el-menu-item>
                    <el-menu-item index="1-4">我的电子卷</el-menu-item>
                    <el-menu-item index="1-5">我的积分</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
           <el-submenu index="6">
                <template slot="title">
                    <i class="iconfont icongouwu"></i>
                    <span slot="title">购物中心</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">
                        <router-link to="/flowpath/shoppingcar">
                        购物车
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <router-link to="collectList">
                            订单列表
                        </router-link>
                        </el-menu-item>
                    <el-menu-item index="1-3">
                        <router-link to="OrderList">
                            收藏列表
                        </router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

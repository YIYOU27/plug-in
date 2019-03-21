<template>
<div>
    <p class="p-center">
        <img src="./company.jpg" alt="上海元祖">
    </p>
    <p class="contact">
        上海元祖梦果子股份有限公司1981年成立于台湾，1993年第一块鲜亮醒目的 “元祖红” 招牌在上海竖起。至今元祖食品以上海为基地，先后在中国大陆的
上海、无锡、杭州、成都、武汉、青岛、长沙、重庆、广东、福建、大连等主要城市设立了十几家分公司。门店遍及台海两岸，力求以时效确保品质新鲜、服务
贴心，从初创时期开始，随着产品的不断创新和门店的扩增，公司每年都在稳步成长。今天，这块元祖红招牌已遍布中国各大城市，并成为家喻户晓的 “精
致礼品名家代言者”。
    </p>
    <div class="history">
        <div class="left">
            <ul>
                <li>1980年创立于台湾万华（如意堂果业本铺）元祖麻糬正式生产</li>
                <li>1991年台湾第四十家门店，准备国际化</li>
                <li>1993年进入中国大市场，成立上海元祖食品有限公司</li>
                <li>1994年浙江分公司成立，经营浙江市场</li>
                <li>1995年江苏分公司成立，经营江苏，安徽市场</li>
                <li>1997年四川分公司成立，经营四川，贵州，广西市场</li>
                <li>2003年湖北分公司成立，经营湖北，江西市场</li>
                <li>2005年山东分公司成立，经营山东市场</li>
                <li>2006年湖南分公司成立，经营湖南市场</li>
                <li>2008年广东分公司成立，经营广东市场</li>
                <li>2011年荣获上海著名商标</li>
                <li>2012年福建分公司成立，经营福建市场</li>
                <li>2013年北京分公司成立，经营北京天津市场</li>
            </ul>
        </div>
    </div>
    <div class="contact-us">
        <h1>让人与人之间的联结更紧密</h1>
        <h4>元祖品牌统一形象，全国连锁通路， 带给消费者五星级服务。</h4>
        <p>&nbsp;</p>
        <img src="./us.jpg">
        <h4>优美典雅的店内设计，优质的服务，让你享有快乐购物的尊贵感受</h4>
    </div>
    <div class="us">
      <img src="./contact-us.jpg" alt="">
      <div class="left">
        <ul>
          <li>张忠义</li>
          <li>魏心</li>
          <li>王国闯</li>
          <li>彭贵鑫</li>
          <li>向杰</li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li>贵阳：123456789</li>
          <li>重庆：123456789</li>
          <li>重庆：123456789</li>
          <li>贵阳：123456789</li>
          <li>重庆：123456789</li>
        </ul>
      </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.contact
    width 1295px
    height 130px
    font-size 18px
    color #6b6b6b
    line-height 34px
    margin 20px auto
.history
    width 450px
    height 480px
    margin 35px auto
    overflow hidden
    border-bottom 1px dashed #ccc
    .left
        width 409px
        height 500px
        float left
        ul
            width 409px
            height 450px
            padding-left 25px
            padding-top 25px
            background url('./contact.png') no-repeat left center
            li
                height 35px
                line-height 26px
                color #6b6b6b
                font-size 14px
.contact-us
    width 1000px
    height 700px
    margin 60px auto
    text-align center
    h1
        width 610px
        line-height 60px
        font-size 42px
        font-weight bold
        color #aa001a
        border-bottom 1px solid #ccc
        margin 0 auto
    h4
        color #6b6b6b
        line-height 34px
.us
    width 1000px
    height 700px
    margin 0 auto
    overflow hidden
    img
        display block
        margin 0 auto
    .left
        width 500px
        height 500px
        float left
        ul
            margin-top 60px
            height 900px
            li
                padding-left 150px
                color #6b6b6b
                font-size 18px
                height 44px
                line-height 44px
    .right
        width 390px
        float right
        margin-top 60px
        margin-left 90px
        ul
            li
                color #6b6b6b
                font-size 18px
                height 44px
                line-height 44px

</style>

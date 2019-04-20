<template>
    <div class="password">
        <h3 class="maintitle">修改密码</h3>
        <div class="pass">
            <form action="" method="post">
                <div class="word">
                    原始密码：
                    <input type="text">
                </div>
                <div class="word">
                    新的密码：
                    <input type="password" name="" id="">
                </div>
                <div class="word">
                    确认密码：
                    <input type="password" name="" id="">
                </div>
                <div class="word">
                    <button type="button" class="submit">确定</button>
                    <button type="button" class="back">返回</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.password
    margin-top 60px
    margin-right 120px
    padding 28px 46px 0
    width 840px
    float right
    min-height 459px
    border 1px solid #c7c7c7
    .maintitle
        height 31px
        line-height 31px
        overflow hidden
        margin-bottom 18px
        font-weight 700
        border-bottom 1px solid #959595
    .pass
        padding 30px 80px
        .word
            margin-bottom 20px
            margin-left 30px
            .submit
                width 74px
                height 28px
                color #fff
                background #de5351
                border-radius 4px
                border 0
            .back
                margin-left 100px
                width 74px
                height 28px
                color #fff
                border 0
                border-radius 4px
</style>

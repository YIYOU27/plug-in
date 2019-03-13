# 常用插件
1.触摸滑动插件---swiper

安装：cnpm i swiper --save

Vue使用:

    import Swiper from 'swiper'
    var mySwiper = new Swiper('.swiper-container', {
  	    loop: true, // 循环模式
        direction: 'horizontal / vertical', // Slides的滑动方向
        scrollbar: {  // 滚动条
        el: '.swiper-scroll // Scrollbar容器的css选择器或HTML元素。
        draggable: true, // true时允许拖动滚动条。
        snapOnRelease: true, // 释放滚动条时slide不会自动贴合。
        navigation: { // 前进后推按钮
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
        }
     })





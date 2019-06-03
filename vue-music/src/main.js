import 'babel-polyfill'// 对es6的一些api做一个转义
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick' // 对于移动端点击300ms的问题
import VueLazyload from 'vue-lazyload'

import 'common/stylus/index.styl'// 为什么引入进来，页面就变黑了

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

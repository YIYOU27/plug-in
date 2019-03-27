// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router/index.js'
import ElementUI from 'element-ui'
import vueToTop from 'vue-totop'

import 'swiper/dist/css/swiper.css'
import 'common/styl/index.styl'
import 'element-ui/lib/theme-chalk/index.css'

import vueMagnify from 'vue-magnify'
Vue.use(vueMagnify)

Vue.use(ElementUI)
Vue.use(vueToTop)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

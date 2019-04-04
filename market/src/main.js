// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router/index.js'
import ElementUI from 'element-ui'
import vueToTop from 'vue-totop'
import store from './store/index'

import 'swiper/dist/css/swiper.css'
import 'common/styl/index.styl'
import 'common/styl/variable.styl'
import 'element-ui/lib/theme-chalk/index.css'
import VueAxios from 'vue-axios'
import Axios from 'axios'

import vueMagnify from 'vue-magnify'
Vue.use(vueMagnify)

Vue.use(VueAxios, Axios)

Vue.use(ElementUI)
Vue.use(vueToTop)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

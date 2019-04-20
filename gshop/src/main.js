// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router/index.js'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueAxios, Axios)
Vue.use(ElementUI)
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

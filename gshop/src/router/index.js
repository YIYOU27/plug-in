import Vue from 'vue'
import VueRouter from 'vue-router'

import Reading from 'pages/Reading/Reading.vue'
import Profile from 'pages/Profile/Profile.vue'
import Search from 'pages/Search/Search.vue'
import LoginRegister from 'pages/Login/LoginRegister.vue'
import Login from 'pages/Login/Login.vue'
import Register from 'pages/Login/Register.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  // 所有路由
  routes: [
    {
      path: '/',
      component: Reading,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/reading',
      component: Reading,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/loginRegister',
      component: LoginRegister,
      children: [
        {
          path: '',
          component: Login
        },
        {
          path: '/register',
          component: Register
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    }
  ]
})

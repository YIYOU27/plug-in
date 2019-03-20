import Vue from 'vue'
import Router from 'vue-router'
import Login from 'base/Login'
import Home from 'components/Home/Home'
import Eden from 'components/Eden/Eden'
import Story from 'components/Story/Story'
import Market from 'components/Market/Market'
import Contact from 'components/Contact/Contact'
import Foretaste from 'components/Foretaste/Foretaste'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/market',
      component: Market,
      meta: {
        index: 0
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/story',
      component: Story,
      meta: {
        index: 1
      }
    },
    {
      path: '/foretaste',
      component: Foretaste,
      meta: {
        index: 2
      }
    },
    {
      path: '/eden',
      component: Eden,
      meta: {
        index: 3
      }
    },
    {
      path: '/contact',
      component: Contact,
      meta: {
        index: 4
      }
    }
  ]
})

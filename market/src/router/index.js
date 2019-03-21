import Vue from 'vue'
import Login from 'base/Login'
import Router from 'vue-router'
import Eden from 'components/Eden/Eden'
import Story from 'components/Story/Story'
import Market from 'components/Market/Market'
import Contact from 'components/Contact/Contact'
import Foretaste from 'components/Foretaste/Foretaste'

Vue.use(Router)

export default new Router({
  mode: 'history',
  savePosition (to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [
    {
      path: '/',
      component: Market,
      name: 'home'
    },
    {
      path: '/market',
      component: Market,
      name: '主页',
      meta: {
        index: 0
      }
    },
    {
      path: '/login',
      component: Login,
      name: '登录'
    },
    {
      path: '/story',
      component: Story,
      name: '故事',
      meta: {
        index: 1
      }
    },
    {
      path: '/foretaste',
      component: Foretaste,
      name: '企业试吃',
      meta: {
        index: 2
      }
    },
    {
      path: '/eden',
      component: Eden,
      name: '乐园',
      meta: {
        index: 3
      }
    },
    {
      path: '/contact',
      component: Contact,
      name: '联系',
      meta: {
        index: 4
      }
    }
  ]
})

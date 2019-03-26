import Vue from 'vue'
import Router from 'vue-router'
import Eden from 'components/Eden/Eden'
import Story from 'components/Story/Story'
import Market from 'components/Market/Market'
import Particulars from 'components/Market/Particulars'
import LoginRegister from 'components/LoginRegister/LoginRegister'
import Login from 'components/LoginRegister/Login'
import Register from 'components/LoginRegister/Register'

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
      name: '主页'
    },
    {
      path: '/particulars',
      name: '商品详情',
      component: Particulars
    },
    {
      path: '/loginregister',
      component: LoginRegister,
      children: [
        {
          path: '',
          component: Login,
          name: '登录'
        },
        {
          path: 'register',
          name: '注册',
          component: Register
        }
      ]
    },
    {
      path: '/story',
      component: Story,
      name: '故事'
    },
    {
      path: '/foretaste',
      component: Foretaste,
      name: '企业试吃'
    },
    {
      path: '/eden',
      component: Eden,
      name: '乐园'
    },
    {
      path: '/contact',
      component: Contact,
      name: '联系'
    }
  ]
})

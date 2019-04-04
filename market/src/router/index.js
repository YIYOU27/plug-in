import Vue from 'vue'
import Router from 'vue-router'
import News from 'base/News.vue'
import CommodityType from 'base/CommodityType' // 商品小类页
import Eden from 'components/Eden/Eden' // 乐园
import Story from 'components/Story/Story' // 故事
import Contact from 'components/Contact/Contact' // 联系我们
import OrderList from 'components/Order-list/Order-list' // 订单页
import CollectList from 'components/Collect-list/Collect-list' // 收藏页

import Market from 'components/Market/Market' // 商城
import Particulars from 'components/Market/Particulars' // 商品详情

import LoginRegister from 'components/LoginRegister/LoginRegister' // 登录注册
import Login from 'components/LoginRegister/Login' // 登录
import Register from 'components/LoginRegister/Register' // 注册

import FlowPath from 'components/Shoppingcenter/FlowPath' // 购物流程
import Shoppongcar from 'components/Shoppingcenter/Shoppingcar' // 购物车页
import Orderinformation from 'components/Shoppingcenter/Orderinformation' // 订单详情
import Submit from 'components/Shoppingcenter/Submit' // 订单详情

import PersonalCenter from 'components/PersonalCenter/PersonalCenter' // 个人中心
import Tabcard from 'components/PersonalCenter/Tabcard' // 个人中心卡片
import Myprofile from 'components/PersonalCenter/My/My-profile' // 我的信息
import Password from 'components/PersonalCenter/My/Password' // 修改密码
import Info from 'components/PersonalCenter/My/Info' // 修改个人信息
import Address from 'components/PersonalCenter/My/Address' // 添加地址
import Addresslist from 'components/PersonalCenter/My/Addresslist' // 地址页

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
      path: '/commodityType',
      component: CommodityType
    },
    {
      path: '/news:news?',
      component: News
    },
    {
      path: '/orderlist',
      component: OrderList,
      name: 'orderlist',
      meta: {
        name: '订单列表'
      }
    },
    {
      path: '/collectList',
      component: CollectList,
      name: 'collectList',
      meta: {
        name: '我的收藏'
      }
    },
    {
      path: '/flowpath',
      component: FlowPath,
      children: [
        {
          path: 'shoppingcar/:id?',
          component: Shoppongcar,
          name: 'shoppingcar',
          meta: {
            name: '购物车'
          }
        },
        {
          path: 'orderinformation',
          component: Orderinformation,
          name: 'orderinformation',
          meta: {
            name: '订单详情'
          }
        },
        {
          path: 'submit',
          component: Submit,
          name: 'Submit',
          meta: {
            name: '提交成功'
          }
        }
      ]
    },
    {
      path: '/personalcenter',
      component: PersonalCenter,
      children: [
        {
          path: '',
          name: 'Tabcard',
          component: Tabcard,
          meta: {
            name: '个人中心'
          }
        },
        {
          path: 'myprofile',
          name: 'myprofile',
          component: Myprofile,
          meat: {
            name: '我的信息'
          }
        },
        {
          path: 'password',
          name: 'password',
          component: Password,
          meta: {
            name: '修改密码'
          }
        },
        {
          path: 'modifyInfo',
          name: 'modifyInfo',
          component: Info,
          meta: {
            name: '修改个人信息'
          }
        },
        {
          path: 'address/:addressID?',
          name: 'address',
          component: Address,
          meta: {
            name: '修改个人信息'
          }
        },
        {
          path: 'address-list',
          name: 'address-list',
          component: Addresslist,
          meta: {
            name: '收货地址'
          }
        }
      ]
    },
    {
      path: '/market',
      component: Market,
      name: 'market',
      meta: {
        name: '商城'
      }
    },
    {
      path: '/particulars/:imageID?',
      name: 'particulars',
      meta: {
        name: '商品详情页'
      },
      component: Particulars
    },
    {
      path: '/loginregister',
      component: LoginRegister,
      children: [
        {
          path: '',
          component: Login,
          name: 'login',
          meta: {
            name: '登录'
          }
        },
        {
          path: 'register',
          name: 'register',
          meta: {
            name: '注册'
          },
          component: Register
        }
      ]
    },
    {
      path: '/story',
      component: Story,
      name: 'story',
      meta: {
        name: '企业故事'
      }
    },
    {
      path: '/eden',
      component: Eden,
      name: 'eden',
      meta: {
        name: '乐园'
      }
    },
    {
      path: '/contact',
      component: Contact,
      name: 'contact',
      meta: {
        name: '联系我们'
      }
    }
  ]
})

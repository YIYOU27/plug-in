import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    login: null,
    recommend: null
  },
  mutations: {
    login (state, obj) {
      state.login = JSON.parse(obj) // 传入的是json字符串转换为json对象
    },
    exit (state) {
      state.login = null
    },
    recommend (state, arg) {
      state.recommend = arg
    }
  }
})

export default store

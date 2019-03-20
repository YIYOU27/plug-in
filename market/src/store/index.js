import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex({
  state: {
    count: 1
  }
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'

//引入user.module
import user from "./user";

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    //使用user.js中的action
    user
  }
})


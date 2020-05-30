import Vue from 'vue'
import App from './App.vue'

//路由
import router from './router'

//vuex
import store from './store'

//element ui框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//axios
import axios from 'axios'
Vue.prototype.axios = axios


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//封装request模块
import {request} from "./api/requset";


request({
  url: '/home'
},res => {
  console.log(res);
},err => {
  console.log(err);
})



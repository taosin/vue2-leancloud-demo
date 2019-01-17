import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// var AV = require('leancloud-storage')
// Vue.use(AV)
// AV.init('appId', 'appKey')

import axios from './request.js' // 全局添加请求函数配置
Vue.prototype.$axios = axios;
new Vue({
  render: h => h(App),
}).$mount('#app')

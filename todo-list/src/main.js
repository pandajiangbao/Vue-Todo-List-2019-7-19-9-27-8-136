import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router'
var fly=require("flyio")
Vue.config.productionTip = false
fly.config.baseURL="http://localhost:8080"
Vue.prototype.$fly=fly
new Vue({
  store,
  router,
  fly,
  render: h => h(App),
}).$mount('#app')

export {fly}

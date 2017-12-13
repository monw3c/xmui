import Vue from 'vue'
import App from './App'
import router from './router'
import xmui from './comps/index'

Vue.use(xmui)
Vue.config.productionTip = false
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

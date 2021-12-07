import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import API from './api/api'


Vue.config.productionTip = false
Vue.prototype.$api = new API()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

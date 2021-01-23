import Vue from 'vue'
import App from './App.vue'
import Meta from 'vue-meta'
import VeeValidate from 'vee-validate'

import router from './router'
import store from './store'

import './assets/css/main.scss'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(Meta)
Vue.use(VeeValidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

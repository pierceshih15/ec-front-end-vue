import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'
import './assets/css/theme/index.css'
import './assets/js/common/utils'
import axios from 'axios'
import qs from 'query-string'
import VCharts from 'v-charts'

Vue.use(Element)

Vue.use(VCharts)

Vue.config.productionTip = false

window.axios = axios
window.qs = qs
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

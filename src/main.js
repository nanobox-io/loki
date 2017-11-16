// Polyfill for browsers that don't yet support promises
require('es6-promise').polyfill()

// Imports
import Vue    from 'vue'
import app    from './app'
import router from './router'
import axios  from 'axios'
import shim   from '../data-shims'
import store  from './store'

Vue.config.productionTip = false

Vue.prototype.axios = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

/* eslint-disable no-new */
new Vue({
  el         : '#app',
  store      : store,
  router     : router,
  template   : '<app/>',
  components : { app }
})

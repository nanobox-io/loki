import Vue from 'vue'
import Router from 'vue-router'
/*
  We are using the following import structure here so these components
  are lazy loaded only when this route is visited.
  See : https://router.vuejs.org/en/advanced/lazy-loading.html
*/
const EnvVars    = ()=> import('@/components/env-vars')

Vue.use(Router)

export default new Router({
  routes: [
    { path : '/env-vars', component: EnvVars },
  ]
})

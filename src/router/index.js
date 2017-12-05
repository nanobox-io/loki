import Vue from 'vue'
import Router from 'vue-router'
/*
  We are using the following import structure here so these components
  are lazy loaded only when this route is visited.
  See : https://router.vuejs.org/en/advanced/lazy-loading.html
*/
const AccountAdmin = ()=> import('@/components/account-admin/account-admin')
const LaunchApp    = ()=> import('@/components/app-launch/app-launch')
Vue.use(Router)

export default new Router({
  routes: [
    { path : '/admin',      component: AccountAdmin },
    { path : '/launch-app', component: LaunchApp },
  ]
})

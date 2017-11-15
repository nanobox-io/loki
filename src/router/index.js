import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bavaria from '@/components/bavaria'

Vue.use(Router)

export default new Router({
  routes: [
    { path : '/',        component: HelloWorld },
    { path : '/bavaria', component: bavaria },
  ]
})

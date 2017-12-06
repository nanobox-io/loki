import Vuex from 'vuex'
import Vue from 'vue'

import user      from './modules/user'
import envVars   from './modules/env-vars'
import appLaunch from './modules/app-launch'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    envVars, user, appLaunch
  }
})

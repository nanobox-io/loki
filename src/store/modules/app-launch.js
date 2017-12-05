import axios from 'axios'
import _     from 'lodash'

export default {
  namespaced:true,
  state     : {
    providers : []
  },

  // ------------------------------------ Retrieve data (called by components)
  getters   : {
    providers : state => {
      return state.providers
    },
  },

  // ------------------------------------ Actions (called by components)
  actions   : {
    getProviders(context) {
      axios.get('/providers-launch')
        .then((response)=>{
          context.commit('receiveAppData', response.data)
        })
        .catch((error)=>{console.log( error )})
    }
  },

  // ------------------------------------ Data Mutations
  mutations : {
    receiveAppData(state, data) {
      state.providers = data
    }
  }
}

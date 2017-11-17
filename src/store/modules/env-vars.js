import axios from 'axios'
import _     from 'lodash'

export default {
  state     : {
    vars : [],
  },

  // ------------------------------------ Retrieve data (called by components)
  getters   : {
    allVars : (state)=>{
      return state.vars
    }
  },

  // ------------------------------------ Actions (called by components)
  actions   : {
    // Get the variables from the API
    getEnvVars(context) {
      axios.get('/env-vars')
        .then((response)=>{
          context.commit('receiveEnvVars', response.data)
        })
        .catch((error)=>{console.log( error )})
    },
    // Delete a variable
    deleteVar(context, data) {
      context.commit('deleteVar', data.varKey)
    }

  },

  // ------------------------------------ Data Mutations
  mutations : {
    // Called when data is loaded
    receiveEnvVars(state, data) {
      state.vars = data.vars
    },
    deleteVar(state, key){
      let matchIndex
      _.find(state.vars, (item, index)=>{
        if(item.key == key){matchIndex = index; return true}
      })
      state.vars.splice(matchIndex, 1)
    }
  }
}

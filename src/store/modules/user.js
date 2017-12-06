import axios from 'axios'
import _     from 'lodash'

export default {
  namespaced: true,
  state     : {
    username        :'',
    email           :'',
    adminPath       :'',
    appsPath        :'',
    id              :'',
    contextId       :'',
    teams           :[],
    providerAccounts:[],
  },

  // ------------------------------------ Retrieve data (called by components)
  getters   : {
    username         : state => {return state.username},
    providerAccounts : state => {return state.providers},
    email            : state => {return state.email },
    adminPath        : state => {return state.adminPath },
    appsPath         : state => {return state.appsPath },
    id               : state => {return state.id },
    teams            : state => {return state.teams },
    contextId        : state => {return state.contextId },
  },

  // ------------------------------------ Actions (called by components)
  actions   : {
    getUser(context) {
      axios.get('/user')
        .then((response)=>{
          context.commit('receiveUserData', response.data)
        })
        .catch((error)=>{console.log( error )})
    }
  },

  // ------------------------------------ Data Mutations
  mutations : {
    receiveUserData(state, data) {

      let hexToRgb = function(hex, alpha){
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})`
      }
      state.username         = data.username
      state.email            = data.email
      state.adminPath        = data.adminPath
      state.appsPath         = data.appsPath
      state.id               = data.id
      state.teams            = data.teams
      state.contextId        = data.contextId
      state.providerAccounts = data.providerAccounts

      // Set colors for teams
      let colors = ["#F07146", "#F046A1", "#00BACC", "#00A42E", "#F00000"]
      let count  = 0
      for ( let team of state.teams ){
        team.color = hexToRgb(colors[count++], 0.7)
        if(count == colors.length)
          count = 0
      }
    }
  }
}

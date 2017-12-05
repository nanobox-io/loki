import axios  from 'axios'
import Mocker from 'axios-mock-adapter'

let delay = 0
let mock  = new Mocker(axios, { delayResponse: delay } )

// Mocked API paths
mock.onGet('/evars').reply(200    , require('./evars').default )

// Get user data
mock.onGet('/user').reply(200     , require('./user').default )

// Get the provider info needed to launch an app
mock.onGet('/providers-launch').reply(200, require('./providers-launch').default )

import axios  from 'axios'
import Mocker from 'axios-mock-adapter'

let delay = 0
let mock  = new Mocker(axios, { delayResponse: delay } )

// Mocked API paths
mock.onGet('/env-vars').reply(200, require('./env-vars').default )

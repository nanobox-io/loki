import axios  from 'axios'
import Mocker from 'axios-mock-adapter'

let delay = 0
let mock  = new Mocker(axios, { delayResponse: delay } )

// Mocked API paths
mock.onGet('/evars').reply(200, require('./evars').default )
mock.onGet('/user').reply(200 , require('./user').default )

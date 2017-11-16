# loki

The nanobox dashboard front-end app

# Overview

### Model
See `src/store`

### Router
See `src/router`

### API integration
We are using [axios](https://github.com/axios/axios) for our API communication. This communication happens in the VUEX modules (the model).

### Local API Mocking
See `data-shims`

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run unit tests
yarn run unit

# run e2e tests
yarn run e2e

# run all tests
yarn test
```

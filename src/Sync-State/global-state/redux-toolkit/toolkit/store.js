import {configureStore} from '@reduxjs/toolkit'

import cakeReducer from './cake/cakeSlice.js'
import curdReducer from './curd/curdSlice.js'

export let store = configureStore({
  reducer: {
    cake: cakeReducer,
    curd: curdReducer
  }
})
import {applyMiddleware, combineReducers, createStore} from 'redux'
import { cakeReducer } from './cake/cakeReducer'
import { curdReducer } from './curd/curdReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from "@redux-devtools/extension";


let rootReducer = combineReducers({
  cake : cakeReducer,
  curd : curdReducer
})


export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))
console.log(store)

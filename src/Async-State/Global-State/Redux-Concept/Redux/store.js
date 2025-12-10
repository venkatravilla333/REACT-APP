import { applyMiddleware, combineReducers, createStore } from "redux";
import { postsReducer } from "./postsReducer";
import { thunk } from 'redux-thunk'


let rootReducer = combineReducers({
  posts: postsReducer
})


export let store = createStore(rootReducer, applyMiddleware(thunk))
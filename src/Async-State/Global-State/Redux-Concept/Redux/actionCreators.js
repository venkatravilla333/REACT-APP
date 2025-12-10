import axios from "axios"
import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./actionTypes"


let fetchPostRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
}

let fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  }
}
let fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  }
}

export let fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest())
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
      dispatch(fetchPostsSuccess(res.data))
    })
      .catch((err) => {
      dispatch(fetchPostsFailure(err.message))
    })
  }
}


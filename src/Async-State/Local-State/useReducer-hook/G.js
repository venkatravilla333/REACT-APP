import axios from 'axios'
import React, { useReducer } from 'react'

function G() {

  let initialState = {
    loading: false,
    posts: [],
    error: null
  }

  let postsReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
      case 'FETCH_POSTS_REQUEST':
        return {
          ...state,
          loading: true
        }
        break;
      case 'FETCH_POSTS_SUCCESS':
        return {
          ...state,
          loading: false,
          posts: action.payload
          
        }
        break;
      case 'FETCH_POSTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload

        }
      
    }
    
  }
  let [state, dispatch] = useReducer(postsReducer, initialState)

  console.log('render')
  
  function getData() {
    dispatch({type: 'FETCH_POSTS_REQUEST'})
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res.data)
        dispatch({type: 'FETCH_POSTS_SUCCESS', payload: res.data })
      }).catch((err) => {
        console.log(err)
        dispatch({type: 'FETCH_POSTS_FAILURE', payload: err.message})
    })
  }
  return (
    <div>
      <h3>G com</h3>
      <button onClick={getData}>get data</button>
      {
        state.loading ? <h2>Loading</h2> : state.error ? <h3>{state.error}</h3> :
          state.posts.map((post) => {
            return <div style={{border: "2px solid red", margin: "20px", padding: "20px"}}>
              <h4>User ID: {post.userId} </h4>
              <h4> ID: {post.id} </h4>
              <h4> Title: {post.title} </h4>
              <h4> Body: {post.body} </h4>
            </div>
          })
      }
    </div>
  )
}

export default G
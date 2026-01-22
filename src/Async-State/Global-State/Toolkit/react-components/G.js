import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../toolkit-concept/postsSlice'

function G() {
 let state = useSelector((state) => {
    return state.posts
 })
  console.log(state)
  console.log('render')

  let disptch = useDispatch()

  // let getData = () => {
  useEffect(() => {
    disptch(fetchPosts()) 
  }, [])
  // }
  return (
    <div>
      <h3>G compomnent</h3>
      {/* <button onClick={getData}>get data</button> */}
      {
        state.loading ? <h1>Loading</h1> : state.error ? <h3>{state.error}</h3> :
          state.posts.map((post) => {
            return <div style={{border: "2px solid red", margin: "20px", padding: "20px"}}>
              <h3>User ID: {post.userId}</h3>
              <h3>ID: {post.id}</h3>
              <h3>Title: {post.title}</h3>
              <h3>Body: {post.body}</h3>
            </div>
          })
      }
    </div>
  )
}

export default G
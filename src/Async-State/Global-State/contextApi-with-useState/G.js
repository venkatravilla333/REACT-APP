import React, { useContext} from 'react'
import { postsContext } from './A'

function G(props) {
  let state = useContext(postsContext)

  console.log('G render')

  return (
    <div>
      {
        state.loading ? <h3>Loading</h3> : state.error ? <h3>{state.error}</h3> : 
        state.posts.map((post) => {
          return <div style={{ border: "2px solid red", padding: "20px", margin: "20px"}}>
            <h4>User ID: { post.userId}</h4>
            <h4>ID: { post.id}</h4>
            <h4>Title: { post.title}</h4>
            <h4>Body: { post.body}</h4>
          </div>
        })
      }
      <h3>G:</h3>
     
    </div>
  )
}

export default G
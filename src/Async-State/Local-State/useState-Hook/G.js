import React, { useEffect, useState } from 'react'
import axios from 'axios'

function G(props) {

  let [loading, setLoading]  = useState(false)
  let [posts, setPosts]  = useState([])
  let [error, setError] = useState(null)
  console.log('render')

  // function getData() {
  //   setLoading(true)
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => {
  //       console.log(res)
  //       setLoading(false)
  //       setPosts(res.data)
  //     }).catch((err) => {
  //       console.log(err)
  //       setLoading(false)
  //       setError(err.message)
  //   })
    
  // }

  useEffect(() => {
    console.log('use effect called')
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res)
        setLoading(false)
        setPosts(res.data)
      }).catch((err) => {
        console.log(err)
        setLoading(false)
        setError(err.message)
    })
    
  }, [])
  

  console.log('render')

  return (
    <div>
      {/* <button onClick={getData}>get data</button> */}
      {
        loading ? <h3>Loading</h3> : error ? <h3>{error}</h3> : 
        posts.map((post) => {
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
import React, { useState } from 'react'
import B from './B'
import C from './C'
import axios from 'axios'

export let postsContext = React.createContext()

function A() {
 let [loading, setLoading] = useState(false)
  let [posts, setPosts] = useState([])
  let [error, setError] = useState(null)
  
  let getData = () => {
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setLoading(false)
        setPosts(res.data)
    })
      .catch((err) => {
        setLoading(false)
        setError(err.message)
    })
  }
  return (
    <div>
      <button onClick={getData}>get data</button>
      <postsContext.Provider value={{loading, posts, error}}>

      <B />
      <C/>
      </postsContext.Provider>
    </div>
  )
}

export default A
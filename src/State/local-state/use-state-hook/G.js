import React, { useState } from 'react'

function G(props) {

  // let [name, setName] = useState('sachin')
  // let [count, setCount] = useState(0)

  console.log('render')

  return (
    <div>
      <h3>G: Name: {props.name}</h3>
      {/* <button onClick={()=>setName('kohli')}>update name</button>
      <h3>G: Count: {count}</h3>
      <button onClick={()=>setCount(count+1)}>update count</button> */}
    </div>
  )
}

export default G
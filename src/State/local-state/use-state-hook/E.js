import React, { useState } from 'react'

function E(props) {
  console.log(props)

  // let [name, setName] = useState('sachin')
  // let [count, setCount] = useState(0)

  // console.log(res[0])
  // console.log(res[1])
  console.log('render')

  return (
    <div>
      <h3>E: Name: {props.name}</h3>
      <button onClick={()=>props.setName('kohli')}>update name</button>
      {/* <h3>E: Count: {count}</h3>
      <button onClick={()=>setCount(count+1)}>update count</button> */}
    </div>
  )
}

export default E
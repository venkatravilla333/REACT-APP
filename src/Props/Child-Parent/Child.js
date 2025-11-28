import React from 'react'

function Child(props) {
  console.log(props)
  let data = 'child data'
  return (
    <div>
      <button onClick={()=>props.test(data)}>send data to patent</button>
    </div>
  )
}

export default Child
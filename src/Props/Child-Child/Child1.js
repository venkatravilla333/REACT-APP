import React from 'react'

function Child1(props) {
  console.log(props)
  let data = 'child data'
  return (
    <div>
      <button onClick={()=>props.test(data)}>Child-1 send data to patent</button>
    </div>
  )
}

export default Child1
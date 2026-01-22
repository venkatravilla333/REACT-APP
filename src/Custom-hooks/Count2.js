import React, { useState } from 'react'
import useCount from './useCount'

function Count2() {
  // var [count, setCount] = useState(0)
  
  // function updateCount2() {
  //   setCount(count+1)
  // }

  var [count, updateCount] = useCount()
  return (
    <div>
      <h2>Count2: {count}</h2>
      <button onDoubleClick={updateCount}>update count2</button>
    </div>
  )
}

export default Count2
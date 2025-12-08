import React, { useContext } from 'react'
import { countContext } from './A'

function G() {
  //  let count = countContext._currentValue

  let { count, setCount } = useContext(countContext)
  return (
    <div>
      <h3>G: count: {count}</h3>
      <button onClick={()=>setCount(count+1)}>update count</button>
    </div>
  )
}

export default G
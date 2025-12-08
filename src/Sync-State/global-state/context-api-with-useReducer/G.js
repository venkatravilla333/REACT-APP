import React, { useContext } from 'react'
import { countContext } from './A'

function G() {
  //  let count = countContext._currentValue

  let {state, dispatch} = useContext(countContext)
  return (
    <div>
      <h3>G: count: {state.count}</h3>
      <button onClick={()=>dispatch({type:"INCREASE" })}>increase count</button>
      <button onClick={()=>dispatch({type:"DECREASE" })}>decrease count</button>
     
    </div>
  )
}

export default G
import React, { useState } from 'react'
import B from './B'
import C from './C'

export let countContext = React.createContext()
console.log(countContext)

function A() {
  
  let [count, setCount] = useState(0)

  return (
    <div>
      <countContext.Provider value={{ count, setCount }} >
      <B />
      <C />
      </countContext.Provider>
    </div>
  )
}

export default A
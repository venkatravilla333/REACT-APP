import React, { useState } from 'react'
import B from './B'
import C from './C'

function A() {
  
  let [name, setName] = useState('sachin')
  let [count, setCount] = useState(0)

  return (
    <div>
      <B name={name} setName={setName } />
      <C name={name}/>
    </div>
  )
}

export default A
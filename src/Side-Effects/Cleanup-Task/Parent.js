import React, { useEffect, useState } from 'react'

function Parent() {
  let [X, setX] = useState(0)
  let [Y, setY] = useState(0)

  let updateState = (e) => {
    console.log('state update')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('effect called')
    window.addEventListener('mousemove', updateState) //side effect
    return () => {
      window.removeEventListener('mousemove', updateState)
      console.log('cleanup task')
    }
  }, [])

  console.log('render')
  return (
    <div>
      <h3>X: {X}</h3>
      <h3>Y: {Y}</h3>
      
    </div>
  )
}

export default Parent
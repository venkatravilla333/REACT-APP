import React, { useEffect, useState } from 'react'

function Parent() {
  let [X, setX] = useState(0)
  let [Y, setY] = useState(0)

  let updateState = (e) => {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('effect called')
    window.addEventListener('mousemove', updateState) //side effect
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
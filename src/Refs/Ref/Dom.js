import React, { useEffect, useRef } from 'react'

function Dom() {

  var inputRef = useRef()
  console.log(inputRef.current)

  useEffect(() => {
    console.log('effect called')
    inputRef.current.focus()
  })

  function getvalue() {
   alert(inputRef.current.value)
  }
  
  console.log('render')
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={getvalue}>get value</button>
    </>
  
  )
}

export default Dom
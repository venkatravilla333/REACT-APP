import React, { useRef, useState } from 'react'

function Value() {

  var nv = 1

  var [sv, setSv] = useState(1)

  var rv = useRef(1)
  console.log(rv)

  function updateNv() {
    nv++
    console.log(nv)
  }

  function updateSv() {
    setSv(sv + 1)
    console.log(sv)
  }

  function updateRv() {
    rv.current++
    console.log(rv.current)
  }
console.log('render')
  return (
    <div>
      <h2>Nv: {nv}</h2>
      <button onClick={updateNv}>update NV</button>
      <h2>Sv: {sv}</h2>
      <button onClick={updateSv}>update SV</button>
      <h2>Rv: {rv.current}</h2>
      <button onClick={updateRv}>update RV</button>
    </div>
  )
}

export default Value
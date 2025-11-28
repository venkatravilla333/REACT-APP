import React from 'react'
import Child from './Child'

function Parent() {
  //api call
var name = 'sachin' //state

  return (
    <div>
      <h2>Parent: {name}</h2>
      <Child name = {name} />
    </div>
  )
}

export default Parent
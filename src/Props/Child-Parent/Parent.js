import React, { useState } from 'react'
import Child from './Child'

function Parent() {

  // var data = 'hello'
  var [data, setData] = useState('hello')

  function test(x) {
    console.log(x)
    // data = x
    setData(x)
    console.log(data)
  } //define a function in parent

  console.log('render')
  return (
    <div>
      <h3>Parent com: {data}</h3>
      <Child test = {test} /> 
    </div>
  )
}

export default Parent
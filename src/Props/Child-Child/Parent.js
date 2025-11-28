import React, { useState } from 'react'
import Child from './Child1'
import Child1 from './Child1'
import Child2 from './Child2'

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
      <Child1 test={test} />
      <Child2 data = {data} />
    </div>
  )
}

export default Parent
import React, { useEffect, useState } from 'react'

function Parent() {
  let [normalCount, setNormalcount] = useState(0)
  let [domCount, setDomcount] = useState(0)

  useEffect(() => {
    console.log('effect called')
    document.title = domCount
  }, [domCount])

  console.log('render')
  return (
    <div>
      <h3>Normal count: {normalCount}</h3>
      <button onClick={()=>setNormalcount(normalCount+1)}>update normal count</button>
      <h3>Dom count: {domCount}</h3>
      <button onClick={()=>setDomcount(domCount+1)}>updatedom count</button>
    </div>
  )
}

export default Parent
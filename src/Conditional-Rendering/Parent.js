import React, { useState } from 'react'
import Login from './Login'
import Profile from './Profile'

function Parent() {
  var [isLogin, isSetLogin] = useState(false)

  // var element
  
  // if (isLogin) {
  //   return <Profile isSetLogin={isSetLogin} />
  // } else {
  //   return <Login isSetLogin= {isSetLogin} />
  // }

  //  if (isLogin) {
  //   element = <Profile isSetLogin={isSetLogin} />
  // } else {
  //   element = <Login isSetLogin= {isSetLogin} />
  // }
  
  //  return isLogin ?  <Profile isSetLogin={isSetLogin} /> : <Login isSetLogin= {isSetLogin} />
  
 return isLogin && <Profile isSetLogin={isSetLogin} />

  // return element
  // return (
  //   <div>
  //     <Login />
  //     <Profile/>
  //   </div>
  // )
}

export default Parent
import React from 'react'

function Login(props) {
  return (
    <div>
      <h3>Login</h3>
      <input type="text" />
      <br />
      <br />
      <input type="text" />
      <br />
      <br />
      <button onClick={()=>props.isSetLogin(true)}>Submit</button>
    </div>
  )
}

export default Login
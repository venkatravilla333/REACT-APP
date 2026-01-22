import React, { useEffect } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

function PageNotFound() {
  let navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2000)
  })
  

  return (
    <div>
      <h3>Page Not Found 404 Error</h3>
      {/* <Navigate to='/'/> */}
    </div>
  )
}

export default PageNotFound
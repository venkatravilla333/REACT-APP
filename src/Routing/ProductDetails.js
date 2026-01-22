import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ProductDetails() {
  let { id } = useParams()
  let url = useLocation()
  console.log(url)
  
  return (
    <h2>ProductDetails: {id}</h2>
  )
}

export default ProductDetails
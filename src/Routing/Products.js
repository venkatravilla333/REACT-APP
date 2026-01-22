import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  let [products, setProducts] = useState([{ id: 1, name: 'Apple', price: 200 }, { id: 2, name: 'Banana', price: 100 }, { id: 3, name: 'Grape', price: 50 }, { id: 4, name: 'Orange', price: 20 }, {id: 5, name: 'Mango', price: 20}])
  
  return (
    <div>
      <h2>Products component</h2>
      <div className='products-list'>
      {
        products.map((product) => {
          
          return <Link  to={`/products/${product.id}`}>{product.name}</Link>
          
        })
      }
      </div>
      <Outlet/>
      {/* <a href="/products/2">Banana</a>
      <a href="/products/3">Grape</a>
      <a href="/products/4">Orange</a> */}
    </div>
  )
}

export default Products
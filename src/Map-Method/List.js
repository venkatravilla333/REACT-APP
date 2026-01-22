import React from 'react'

function List() {

  var products = [{ name: 'apple', price: 200 }, { name: 'banana', price: 60 }, { name: 'grape', price: 100 }, { name: 'papaya', price: 20 }]
  
  return (
    <div>
      <h3>Lists of Products</h3>
      {/* <h4>Name: {products[0].name}</h4>
      <h4>Price: {products[0].price}</h4>
      <h4>Name: {products[1].name}</h4>
      <h4>Price: {products[1].price}</h4>
      <h4>Name: {products[2].name}</h4>
      <h4>Price: {products[2].price}</h4>
      <h4>Name: {products[3].name}</h4>
      <h4>Price: {products[3].price}</h4> */}
    {
        products.map((product) => {
          return <React.Fragment>
                  <h4>Name: {product.name}</h4>
                  <h4>Name: {product.name}</h4>
                </React.Fragment> 
       }) 
     }
    </div>
  )
}

export default List
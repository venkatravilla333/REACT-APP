import React from 'react'
import Home from './Home'
// import About from './About'
import Products from './Products'
import {Routes, Route, useLocation} from 'react-router-dom'
import Header from './Header'
import PageNotFound from './PageNotFound'
import ProductDetails from './ProductDetails'

let About = React.lazy(()=>import('./About.js'))

function Parent() {
  let url = useLocation()
  
  return (
    <div>
      <Header/>
      {/* {url.pathname !== '/products' && <Header/>} */}
      
      <Routes>
        <Route path='/'>
           <Route index element={<Home/>} />
           <Route path='/about' element={
          <React.Suspense fallback='Loading'>
          <About/>
          </React.Suspense>} />
          <Route path='/products' element={<Products/>}> 
          <Route path=':id' element={<ProductDetails />} />
          </Route>
          <Route path='*' element={<PageNotFound/>} />
          </Route>
        
      </Routes>

    </div>
  )
}

export default Parent
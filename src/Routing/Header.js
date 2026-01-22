import React from 'react'
import './style.css'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products" style={({isActive}) => {
        return isActive ? {color: 'yellow'} : null
      }}>Products</NavLink>
    </div>
  )
}

export default Header
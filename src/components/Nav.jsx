import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <div className="nav">
        <Link to="/"  className="item">home</Link>
        <Link to='/products' className="item">products</Link>
        <Link to='/cart' className="item">Cart</Link>
    
    </div>
  )
}

export default Nav
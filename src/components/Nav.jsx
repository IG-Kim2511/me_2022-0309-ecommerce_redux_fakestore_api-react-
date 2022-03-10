import React from 'react'

// 🧨js0309.
import { Link } from 'react-router-dom'


import './Nav.css'

const Nav = () => {
  return (
    <div className="nav">
        
        <Link to="/" className="item myBtn">Home</Link>
        <Link to="/products" className="item myBtn">products</Link>
        <Link to="/cart" className="item myBtn">Cart</Link>
    
    </div>
  )
}

export default Nav
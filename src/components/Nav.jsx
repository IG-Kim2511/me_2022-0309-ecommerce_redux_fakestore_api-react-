import React from 'react'

// 🧨js0309.
import { Link } from 'react-router-dom'


import './Nav.css'

const Nav = () => {
  return (
    <div className="nav">
        
        <Link to="/" className="item">products</Link>
        <Link to="/cart" className="item">Cart</Link>
    
    </div>
  )
}

export default Nav
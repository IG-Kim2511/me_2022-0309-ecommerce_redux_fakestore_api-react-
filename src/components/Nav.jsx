import React from 'react'
import { useSelector } from 'react-redux'

// 🧨js0309.
import { Link } from 'react-router-dom'



import './Nav.css'

const Nav = () => {

  // 🥒js0310-0440. redux 
  const state = useSelector((state)=> state.reducer_handleCart);

  
  return (
    <div className="nav">
    
    <Link to="/" className="item myBtn">Home</Link>
    <Link to="/products" className="item myBtn">products</Link>

    {/*  🍤bug. 왜 안되는지 모르겠음.  - state.length  */}
    <Link to="/cart" className="item myBtn">Cart ({state})</Link>
    
    </div>
  )
}

export default Nav
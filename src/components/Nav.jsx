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
    
    <Link to="https://ig-kim2511.github.io/me_2022-0309-ecommerce_redux_fakestore_api-react-build/" className="item myBtn">Home</Link>
    <Link to="/products" className="item myBtn">products</Link>

    {/*  🥒js0310-0440. redux  
        state = cart 
        state.length : cart안의 아이템들 갯수
      */}
    <Link to="/cart" className="item myBtn">Cart ({state.length})</Link>
    
    </div>
  )
}

export default Nav
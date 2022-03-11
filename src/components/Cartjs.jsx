
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart, clearCart } from "../redux/action";

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';


import './Cartjs.css'

const Cartjs = () => {
  const state = useSelector((state) => state.reducer_handleCart);
  const dispatch = useDispatch();

  const cartItems = (p_cartItem) => {
    return (
      <div>
        <div className="items-wrap">
          <div className="items" key={p_cartItem.id}>

            <div className="item">
              <div className="img-parent">
                <img src={p_cartItem.image} alt={p_cartItem.title} />
              </div>
            </div>

            
            {/*🥒js0310-0420.   */}
            
            <div className="item">

              <div className="title">Name: {p_cartItem.title}</div>

              <div className="price"> {p_cartItem.qty} x %{p_cartItem.price} = ${parseFloat(p_cartItem.qty * p_cartItem.price).toFixed(2)}</div> 

              <div className="btn-parents">

               {/*🥒js0310-0420. 👉redeucer_handleCart.js  */}

                <button onClick={()=>dispatch(addCart(p_cartItem))}> <AddCircleRoundedIcon/> </button>

                 <h3>{p_cartItem.qty}</h3>

                <button onClick={()=> dispatch(delCart(p_cartItem))}> <RemoveCircleOutlineRoundedIcon/> </button>
              </div>  
              
                {/* 🥒js0310-0440. 👉redeucer_handleCart.js  */}

                <button className="myBtn del" onClick={()=> dispatch(clearCart(p_cartItem))}>
                    delete         
                </button>
            </div>

          </div>  
        </div>
      </div>
    );
  };

// 🥒js0311-0320  
 const checkout = () => {
    return (
      <div>
        <button className="myBtn">Proceed to checkout</button>
      
      </div>
    )
  }
  

  return (
    <div className="cartjs">
       
    {/* 🍀js0311-0320  
      cart에 아이템 없으면 'empty'메시지
      cart에 아이템 있으면, state.map() + button() 호출*/}


    {state.length === 0 && <h1>your cart is empyt</h1>}
    
    {state.length !== 0 && state.map(cartItems)}

    {state.length !== 0 && checkout()}
    
    

    
    
    </div>
  );
};

export default Cartjs;

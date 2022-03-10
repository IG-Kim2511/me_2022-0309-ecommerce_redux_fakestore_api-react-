import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Product_js = () => {

    // 🍀0310-0240 useParams, 
    const {id} =useParams()

    // 🥒0310-0230, fetch api
    const [product, setProduct] = useState([]);

    const [loading, setLoading] = useState(false)

    // 🍀0310-0230, fetch api, 
    /* 🍄
      10. product.jsx의 fetch code 복붙
      15. const {id} =useParams()
      20. api address `` 으로 바꿈, 
      30. api address: ~~~~/${id} 추가    🦄
    */
    useEffect(() => {
        const fetchItems = async () => {
    
          setLoading(true);
    
        // 🥒0310-0240
          const result = await axios(`https://fakestoreapi.com/products/${id}`);
    
          console.log(result.data);
    
          setProduct(result.data);         
    
          setLoading(false);
        };
        fetchItems();
      }, []);
    
    
      const Loading = () => {
        return(
          <div>
            <h1>Loading...</h1>
          </div>
          )
      }

       // 🍀0310-0255, each product rendering 👉Products.jsx
       /* 🦄
        return (~~) 빼먹지말고 꼭 넣을것
       */
      const ShowProduct = () => {
        return(
          <div>
            <div>            
              <img src={product.image} alt="" />
            </div>          
          </div>
          )
      }

      return (
        <div className="product_js">        
        
          {loading ? <Loading/> : <ShowProduct/>}
        </div>
      )
}

export default Product_js
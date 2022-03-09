import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Products.css"

const Products = () => {
  const [data, setData] = useState([]);

  const [filter, setFilter] = useState(data);

// 🍀js0309-0610. loading
/* 🍄
    fetch data 완료전에는 loading
    fetch data 완료 후에는 ShowProducts
*/

  const [loading, setLoading] = useState(false);


    useEffect(() => {

        // 🧨js0309-0610. 
        setLoading(true);

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))    

        // 🧨js0309-0610. 
        setLoading(false);
        
    }, [])

    // 🧨js0309-0610. 
    const Loading = () => {
        return(
            <div>
                Loading....
                
            </div>
        )
    }

    // 🧨js0309-0610. 
    const ShowProducts = () => {
        return (
          <div>
            <div className="button-container">
              <button className="myBtn">All</button>
              <button className="myBtn">Men</button>
              <button className="myBtn">Women</button>
              <button className="myBtn">Jewelery</button>
              <button className="myBtn">Electronic</button>
            </div>
          </div>
        );
    }


    return (
        <div className="products">

        
        {/*🧨js0309-0610.  */}
            {
                loading ? <Loading/> : <ShowProducts/>
            }
     
        
        </div>
      )
};






export default Products;

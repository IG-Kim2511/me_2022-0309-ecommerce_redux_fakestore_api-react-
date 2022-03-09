import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Products.css"

const Products = () => {
  const [data, setData] = useState([]);

  const [filter, setFilter] = useState(data);

  const [loading, setLoading] = useState(false);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))

    return () => {
        
    }
    }, [])


    return (
        <div className="products">

            <div className="button-container">
                <button className="myBtn">All</button>
                <button className="myBtn">Men</button>
                <button className="myBtn">Women</button>
                <button className="myBtn">Jewelery</button>
                <button className="myBtn">Electronic</button>
            
            </div>
            
     
        
        </div>
      )
};






export default Products;

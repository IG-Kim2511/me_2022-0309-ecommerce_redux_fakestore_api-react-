import axios from "axios";
import React, { useEffect, useState } from "react";

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


  return <div>Products</div>;
};

export default Products;

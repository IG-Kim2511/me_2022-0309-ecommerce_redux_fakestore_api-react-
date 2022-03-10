import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Products.css";

const Products = () => {
  // 🥒js0309-1140, filtered data vs fetched data 구별하기용
  const [data, setData] = useState([]);

  //🍀JS0309-1140, filter by category btn
    const [filterData, setFilterData] = useState(data);

  // 🍀js0309-0610. loading
  /* 🍄
    fetch data 완료전에는 loading
    fetch data 완료 후에는 ShowProducts
  */
  const [loading, setLoading] = useState(false);

  // 🍀js0309-0630. fetch data, {data_item.description.substring(0, 12)}...
  useEffect(() => {
    const fetchItems = async () => {

      setLoading(true);

      const result = await axios("https://fakestoreapi.com/products");

      console.log(result.data);

      setData(result.data);
      setFilterData(result.data);

      setLoading(false);
    };
    fetchItems();
  }, []);


    // 🥒JS0309-1140
  const filterProductFunc = (p_item) => {
      console.log(p_item)

      const updatedList= data.filter((x)=>x.category === p_item)

      setFilterData(updatedList);    

  }

  // 🥒js0309-0610.
  const Loading = () => {
    return <h1>Loading....</h1>;
  };

  const ShowProducts = () => {
    return (
      <div>
        {/* 🥒js0309-0610. 🥒JS0309-1140, */}
        <div className="button-container">
          <button className="myBtn" onClick={()=>setFilterData(data)}>All</button>
          <button className="myBtn" onClick={()=>filterProductFunc("men's clothing")}>Men</button>
          <button className="myBtn" onClick={()=>filterProductFunc("women's clothing")}>Women</button>
          <button className="myBtn" onClick={()=>filterProductFunc("jewelery")}>Jewelery</button>
          <button className="myBtn" onClick={()=>filterProductFunc("electronics")}>Electronic</button>
        </div>


        
        {/* 🥒js0309-0630, 🥒JS0309-1140, */}
        <div className="items-container">
          {filterData.map((filter_item) => (
            <div className="items" key={filter_item.id}>
              <div className="item">
                <div className="img-parent">
                  <img src={filter_item.image} alt={filter_item.title} />
                </div>
                <div className="title">
                  {filter_item.title.substring(0, 12)}...
                </div>
                <div className="price">$ {filter_item.price}</div>
                <div className="description">
                  {filter_item.description.substring(0, 12)}...
                </div>
                <button className="myBtn">Buy Now</button>
              </div>
            </div>
          ))}
        </div>

        
        {/* 🥒js0309-0630.  */}
        {       
    /*  <div className="items-container">
          {data.map((data_item) => (
            <div className="items" key={data_item.id}>
              <div className="item">
                <div className="img-parent">
                  <img src={data_item.image} alt={data_item.title} />
                </div>
                <div className="title">
                  {data_item.title.substring(0, 12)}...
                </div>
                <div className="price">$ {data_item.price}</div>
                <div className="description">
                  {data_item.description.substring(0, 12)}...
                </div>
                <button className="myBtn">Buy Now</button>
              </div>
            </div>
          ))}
        </div> */
        }

      </div>
    );
  };

  return (
    <div className="products">
      {/*🥒js0309-0610.  */}
      {loading ? <Loading/> : <ShowProducts/>}
    </div>
  );
};

export default Products;

import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Products.css";

const Products = () => {
  // 🧨js0309-0630
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  // 🍀js0309-0610. loading
  /* 🍄
    fetch data 완료전에는 loading
    fetch data 완료 후에는 ShowProducts
*/

  const [loading, setLoading] = useState(false);

  // 🍀js0309-0630. fetch data
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios("https://fakestoreapi.com/products");

      console.log(result);
      console.log(result.data);

      setData(result.data);
      
      setLoading(false);
    };    
    fetchItems();
  }, []);

  // 🧨js0309-0610.
  const Loading = () => {
    return <div>Loading....</div>;
  };

  const ShowProducts = () => {
    return (
      <div>
        {/* 🧨js0309-0610.  */}
        <div className="button-container">
          <button className="myBtn">All</button>
          <button className="myBtn">Men</button>
          <button className="myBtn">Women</button>
          <button className="myBtn">Jewelery</button>
          <button className="myBtn">Electronic</button>
        </div>

        <div className="container">
            {/* 🧨js0309-0630.  */}
            {data.map((data_item) => (
            <div className="items-container" key={data_item.id}>
                <div className="items">
                <div className="img-parent">
                    <img src={data_item.image} />
                </div>
                <div className="items">{data_item.title}</div>
                </div>
            </div>
            ))}
        </div>
      </div>
    );
  };

  return (
    <div className="products">
      {/*🧨js0309-0610.  */}
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;

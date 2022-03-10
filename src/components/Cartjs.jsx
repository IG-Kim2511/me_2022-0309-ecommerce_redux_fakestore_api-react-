import React from "react";
import { useSelector } from "react-redux";

const Cartjs = () => {
  const state = useSelector((state)=> state.reducer_handleCart);

  return (
    <div className="cartjs">
      <div className="item">
        <div className="title">Name: {state.title}</div>
        <div className="price">$ {state.price}</div>

        <div className="description">Desc: {state.description}</div>
      </div>
    </div>
  );
};

export default Cartjs;

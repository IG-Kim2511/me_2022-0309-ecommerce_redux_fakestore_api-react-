import React from "react";
import { useSelector } from "react-redux";

const Cartjs = () => {
  const state = useSelector((state)=> state.reducer_handleCart);

  return (
    <div className="cartjs">
          hi
    </div>
  );
};

export default Cartjs;

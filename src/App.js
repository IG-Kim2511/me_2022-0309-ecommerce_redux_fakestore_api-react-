
// 🍀js0309.router
import { Route, Routes } from "react-router-dom";


import Cartjs from "./components/Cartjs";
import Nav from "./components/Nav";
import Products from "./components/Products";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Nav />

      
      <Routes>
        
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cartjs />} />
      </Routes>
    </div>
  );
}

export default App;

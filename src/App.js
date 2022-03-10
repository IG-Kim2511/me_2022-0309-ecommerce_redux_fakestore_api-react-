
// 🍀js0309.router 👉index.js, nav.jsx
import { Route, Routes } from "react-router-dom";


import Cartjs from "./components/Cartjs";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Productjs from "./components/Productjs";

import "./App.css";
import Homejs from "./components/Homejs";


function App() {
  return (
    <div className="App">
      <Nav />

      
      <Routes>
        
        <Route path="/" element={<Homejs/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Productjs />} />
        <Route path="cart" element={<Cartjs />} />
      </Routes>
    </div>
  );
}

export default App;

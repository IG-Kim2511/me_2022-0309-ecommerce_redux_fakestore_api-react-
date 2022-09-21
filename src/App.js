
// 🍀js0309.router 👉index.js, nav.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Cartjs from "./components/Cartjs";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Product_js from "./components/Product_js";

import "./App.css";
import Homejs from "./components/Homejs";

function App() {
  return ( 
      <div className="App">
          <Nav />

          <Routes>
            <Route path="/" element={<Homejs/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product_js />} />
            <Route path="cart" element={<Cartjs />} />

          </Routes>

          <div>
          <h1>Simple ecommerce website with fake shop API</h1>
          <br />
          <br />
          <br />
      
          <h2>skills: react, redux, fetch api, router</h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>Let's click Procucts tab on navigation</h1>
          <br />
          <br />
          <br />
          <br />
          <h1>(You can see my CSS skills from my the other porjects on my portfolio)</h1>
          
        </div>
      </div>   
  );
}

export default App;

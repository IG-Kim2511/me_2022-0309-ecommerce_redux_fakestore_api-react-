
// 🍀js0309.router 👉index.js, nav.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Cartjs from "./components/Cartjs";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Product_js from "./components/Product_js";

import "./App.css";
import Homejs from "./components/Homejs";

/* 

      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
*/
/* 

 
            <Route path="/" index element={<Homejs/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product_js />} />
            <Route path="cart" element={<Cartjs />} />
*/
function App() {
  return ( 
      <div className="App">
          <Nav />

        <Routes>
              <Route path="/" index element={<Homejs/>} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Product_js />} />
              <Route path="cart" element={<Cartjs />} />
          </Routes>
      </div>   
  );
}

export default App;

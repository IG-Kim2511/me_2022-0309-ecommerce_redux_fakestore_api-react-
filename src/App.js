import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cartjs from "./components/Cartjs";
import Homejs from "./components/Homejs";
import Nav from "./components/Nav";
import Products from "./components/Products";

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

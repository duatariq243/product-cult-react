import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

import Trending from "./components/Trending";
import ProductDetail from "./pages/ProductDetail";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
     
      <Route path="/product/:id" element={<ProductDetail />} />

    </Routes>
    
    
  );
}

export default App;

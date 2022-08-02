import About from "./components/About";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Products from "./components/Products";
import Shop from "./components/Shop";
import Seller from "./components/Seller";
import User from "./components/User";
import {Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path ="/shop" element={<Shop/>} />
      <Route path ="/user" element={<User/>} />
      <Route path ="/seller" element={<Seller/>} />
      <Route path ="/seller/products" element={<Products/>} />
      <Route path ="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Header from './Components/Entities/Header/Header';
import Footer from './Components/Entities/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import Products from './Components/Pages/Products/Products';
import Register from './Components/Pages/Register/Register';
import Signin from './Components/Pages/Signin/Signin';
import { Route, Routes } from 'react-router-dom';
import ProductItems from './server/products/index.get.json';

import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className='App'>
      <Header handleClick={handleClick} cart={cart} onRemove={onRemove} />
      <Routes>
        <Route path='/' exact={true} element={<Home />} />
        <Route
          path='/products'
          element={<Products handleClick={handleClick} cart={cart} />}
        />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

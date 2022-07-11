import { createContext, useContext, useReducer } from 'react';
import Products from '../server/products/index.get.json';
import { cartReducer, productReducer } from './Reducers';

const Cart = createContext();

const Context = ({ children }) => {
  const products = Products;

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;

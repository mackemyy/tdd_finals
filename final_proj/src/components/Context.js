import list from "./data"
import { createContext, useContext, useState } from "react";


const Cart = createContext();


const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [products] = useState(list);

  return (
    <Cart.Provider value={{ cart, setCart, products }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;

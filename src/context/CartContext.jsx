// import React, { useState } from 'react'

// export const CART_CONTEXT = React.createContext() 

// const {Provider , Consumer} = CART_CONTEXT


// const CartContext = ({children}) => {
//   const [cart , setCart] = useState([])

//   const value = {
//     cart,
//     setCart
//   }

//   return  (
//     <Provider value={value}>{children}</Provider>
//   )
// }

// export default CartContext

// src/context/CartContext.jsx
import { createContext, useState } from 'react';

// CART_CONTEXT - контекст түзүү
export const CART_CONTEXT = createContext();

// CartProvider - контекстти провайдер аркылуу чыгаруу
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);  // cart массиви

    return (
        <CART_CONTEXT.Provider value={{ cart, setCart }}>
            {children}
        </CART_CONTEXT.Provider>
    );
};


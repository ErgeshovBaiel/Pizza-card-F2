
import { createContext, useEffect, useState } from 'react';

export const CART_CONTEXT = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); 

    useEffect( () => {
        const arr = JSON.parse(localStorage.getItem("cart")) || []
        setCart(arr)
    }, [])

    return (
        <CART_CONTEXT.Provider value={{ cart, setCart }}>
            {children}
        </CART_CONTEXT.Provider>
    );
};


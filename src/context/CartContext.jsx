
import { createContext, useState } from 'react';

export const CART_CONTEXT = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); 

    return (
        <CART_CONTEXT.Provider value={{ cart, setCart }}>
            {children}
        </CART_CONTEXT.Provider>
    );
};


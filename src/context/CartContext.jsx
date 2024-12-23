import React, { useState } from 'react'

export const CART_CONTEXT = React.createContext() 

const {Provider , Consumer} = CART_CONTEXT


const CartContext = ({children}) => {
  const [cart , setCart] = useState([])

  const value = {
    cart,
    setCart
  }

  return  (
    <Provider value={value}>{children}</Provider>
  )
}

export default CartContext
import React, { useContext } from 'react'
import { CART_CONTEXT } from '../../context/CartContext'

const CartPage = () => {
    const { cart } =useContext(CART_CONTEXT)
    console.log(cart);
    
  return (
    <div>CartPage</div>
  )
}

export default CartPage
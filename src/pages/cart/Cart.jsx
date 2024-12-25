import { useContext } from 'react';
import { CART_CONTEXT } from '../../context/CartContext';
import { FiCheck, FiPlus, FiTrash2 } from 'react-icons/fi';
import './Cart.css';
import Header from '../../components/header/Header';

const Cart = () => {
  const { cart, clearCart, removeItem, increaseQuantity, decreaseQuantity } = useContext(CART_CONTEXT);

  return (
    <div className="cart-container">
      <Header />
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-cart-message text-3xl font-normal text-center mt-40">
            Ваша корзина пуста 🙄
          </p>
          <p className="empty-cart-subtext text-center text-[14px] font-light text-gray-500 mt-1">
            Пора добавлять пиццы в корзину и оформлять заказ
          </p>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="cart-item-quantity">
                  <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>
                    -
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>
                </div>
                <div className="cart-item-footer">
                  <span>{item.price * item.quantity} ₴</span>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>
                    <FiTrash2 /> Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;



import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CartProvider } from './context/CartContext'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  </BrowserRouter>
);


// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import CartContext from "./context/CartContext.jsx";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Cart from './pages/cart/Cart.jsx'

// createRoot(document.getElementById('root')).render(
//     <BrowserRouter>
//     <CartContext>
//        <Routes>
//         <Route path='/' element={<App/>}/>
//         <Route path='/cart' element={ <Cart/>}/>
//        </Routes>
//     </CartContext>
//     </BrowserRouter>
// )
// src/main.jsx
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CartProvider } from './context/CartContext';  // CartProvider импорттоо
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // react-router импорту
import Cart from './pages/cart/Cart.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>  {/* CartProvider менен коргоо */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  </BrowserRouter>
);


import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartContext from './context/CartContext.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import CartPage from './pages/cart/CartPage.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <CartContext>
       <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/cart' element={ <CartPage/>}/>
       </Routes>
    </CartContext>
    </BrowserRouter>
)

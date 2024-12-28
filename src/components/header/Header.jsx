import { useContext, useState } from 'react';
import './Header.css';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { HiOutlineUser } from 'react-icons/hi2';
import { CART_CONTEXT } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Header = ({ onFilter }) => {
  const { cart } = useContext(CART_CONTEXT);
  const [pizzaName, setPizzaName] = useState('');

  const total = cart.reduce((a,b) => {
    return a + parseInt(b.price,10)
  },0)

  const onChange = (e) => {
    const text = e.target.value;
    setPizzaName(text);
    onFilter(text);
  };

  return (
    <div> 
    <header className="container">
      <div className="logo">
        <Link to="/"> 
          <div className="flex gap-6 font-normal">
            <img
              src="https://react-pizza-v2-psi.vercel.app/assets/img/logo.svg"
              alt=""
            />
            <div>
              <h4 className="text-xl font-semibold">React Pizza</h4>
              <p className="text-slate-700">лучшая пицца в вашем городе</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="search">
        <div>
          <span>
            <FiSearch className="text-xl text-gray-500 ml-5 mr-1 mb-1" />
          </span>
          <input
            value={pizzaName}
            onChange={onChange}
            type="text"
            placeholder="Поиск..."
            className="text-xl int"
          />
        </div>
      </div>
      <div className="buttons">
        <Link to="/cart">
          <button className="button flex">
            <span className="icon">
              <HiOutlineShoppingCart className="text-xl" />
            </span>
            &nbsp;&nbsp;
            <span>{total} $</span>&nbsp;&nbsp; | &nbsp;&nbsp;
            <span>{cart.length}</span>
          </button>
        </Link>
        <button className="button flex">
          <span className="icon">
            <HiOutlineUser className="text-xl" />
          </span>
          Личный кабинет
        </button>
      </div>
    </header>
    </div>
  );
};

export default Header;

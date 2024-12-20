import './Header.css'
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";

const Header = () => {
    return (
        <header className='container'>
            <div className='logo'>
                <img src="https://react-pizza-v2-psi.vercel.app/assets/img/logo.svg" alt="" />
                <div>
                    <h4>React Pizza</h4>
                    <p>лучшая пицца в вашем городе</p>
                </div>
            </div>
            <div className='search'>
                <div>
                    <span> <FiSearch /> </span>
                    <input type="text" placeholder='Поиск...' />
                </div>
            </div>
            <div className='buttons'>
                <button style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: '20px' }}>
                        <HiOutlineShoppingCart />
                    </span>&nbsp;&nbsp;
                    <span>0 $</span>&nbsp;&nbsp; | &nbsp;&nbsp;
                    <span> 0 </span>
                </button>
                <button style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: '20px' }}><HiOutlineUser /></span>
                    Личный кабинет
                </button>
            </div>
        </header>
    )
}

export default Header
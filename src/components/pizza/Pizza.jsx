import { useContext } from "react";
import "./Pizza.css";
import { CART_CONTEXT } from "../../context/CartContext";

const Pizza = (props) => {
    const { pizzaData } = props;
    const {setCart} = useContext(CART_CONTEXT)

    const addToCart = (pizza) => {
        setCart((oldPizza) => {
            return [...oldPizza, pizza]
        })
    }

    const handleSizeClick = (e) => {
        const buttons = e.target.parentNode.querySelectorAll("button");
        buttons.forEach((btn) => btn.classList.remove("active"));
        e.target.classList.add("active");
    };

    const handleCrustClick = (e) => {
        const buttons = e.target.parentNode.querySelectorAll("button");
        buttons.forEach((btn) => btn.classList.remove("active"));
        e.target.classList.add("active");
    };

    return (
        <div className="container pizza-wrap">
            {pizzaData.map((item) => (
                <div className="p-card" key={item.name}>
                    <div className="p-image">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className="p-details">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                    </div>
                    <div className="sizes">
                        {item.sizes.map((s) => (
                            <button key={s} onClick={handleSizeClick}>
                                {s}
                            </button>
                        ))}
                    </div>
                    <div className="crusts">
                        {item.crusts.map((c) => (
                            <button key={c} onClick={handleCrustClick}>
                                {c}
                            </button>
                        ))}
                    </div>
                    <div className="p-footer">
                        <h4>{item.price} сом</h4>
                        <button onClick={()=> {
                            addToCart(item)
                        }}>В корзину</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Pizza;

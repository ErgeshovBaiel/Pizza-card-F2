import { useContext, useState } from "react";
import "./Pizza.css";
import { CART_CONTEXT } from "../../context/CartContext";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";


const Pizza = ({ pizzaData }) => {
    const { cart, setCart } = useContext(CART_CONTEXT);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [addedPizza, setAddedPizza] = useState({});

    const addToCart = (pizza) => {
        const selectedSize = selectedOptions[pizza.name]?.size || pizza.sizes[0];
        const selectedCrust = selectedOptions[pizza.name]?.crust || pizza.crusts[0];

        const pizzaToCart = {
            name: pizza.name,
            price: pizza.price,
            size: selectedSize,
            crust: selectedCrust,
        };

        setCart((prev) => [...prev, pizzaToCart]);
        setAddedPizza((prev) => ({
            ...prev,
            [pizza.name]: true,
        })); 
    };

    const handleOptionChange = (pizzaName, optionType, value) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [pizzaName]: {
                ...prev[pizzaName],
                [optionType]: value,
            },
        }));
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
                            <button
                                key={s}
                                className={selectedOptions[item.name]?.size === s ? "active" : ""}
                                onClick={() => handleOptionChange(item.name, "size", s)}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                    <div className="crusts">
                        {item.crusts.map((c) => (
                            <button
                                key={c}
                                className={selectedOptions[item.name]?.crust === c ? "active" : ""}
                                onClick={() => handleOptionChange(item.name, "crust", c)}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                    <div className="p-footer">
                        <h4>{item.price} сом</h4>
                        <button onClick={() => addToCart(item)}>
                            {addedPizza[item.name] ? <FaCheck  style={{ fontSize: '15px' }}/> : <FaPlus  style={{ fontSize: '15px' }} />} 
                            {addedPizza[item.name] ? " Добавлено" : " В корзину"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Pizza;

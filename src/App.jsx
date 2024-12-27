import Button from './components/button/Button';
import Header from './components/header/Header';
import { useEffect, useState } from 'react';
import './App.css';
import Pizza from './components/pizza/Pizza';
import { ToastContainer, toast } from 'react-toastify';

const buttons = [
  { id: 1, name: 'Все' },
  { id: 2, name: 'Мясные' },
  { id: 3, name: 'Сырные' },
  { id: 4, name: 'Гриль' },
  { id: 5, name: 'Вегетарианские' },
  { id: 6, name: 'Острые' },
  { id: 7, name: 'Закрытые' },
];

const App = () => {
  const [activeBtn, setActiveBtn] = useState('Все');
  const [pizzaData, setPizzaData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const url = 'https://673c34cc96b8dcd5f3f8e777.mockapi.io/api/v1/pizza2';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPizzaData(data[0].menu);
        setFilteredData(data[0].menu);
      })
      .catch((error) => {});
  }, []);

  const filterPizzas = (name) => {
    const filtered = pizzaData.filter((pizza) =>
      pizza.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <ToastContainer />
      <Header onFilter={filterPizzas} />
      <div className="container filter-buttons">
        {buttons.map((btn) => (
          <Button
            onClick={() => setActiveBtn(btn.name)}
            activeBtn={activeBtn}
            key={btn.id}
            name={btn.name}
          />
        ))}
      </div>
      <Pizza pizzaData={filteredData}  activeBtn={activeBtn} />
    </div>
  );
};

export default App;

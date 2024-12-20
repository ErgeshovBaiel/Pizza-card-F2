
import Button from "./components/button/Button"
import Header from "./components/header/Header"
import { useEffect, useState } from "react"
import './App.css'
import Check from "./components/check/Check"
import Pizza from "./components/pizza/Pizza"

const buttons = [
  {
    id: 1,
    name: "Все"
  },
  {
    id: 2,
    name: "Мясные"
  },
  {
    id: 3,
    name: "Сырные"
  },
  {
    id: 4,
    name: "Гриль"
  },
  {
    id: 5,
    name: "Вегетарианские"
  },
  {
    id: 6,
    name: "Острые"
  },
  {
    id: 7,
    name: "Закрытые"
  },
]

const App = () => {
  const [activeBtn, setActiveBtn] = useState('Все')
  const [pizzaData, setPizzaData] = useState([])
  
  
  useEffect( () =>  {
    const url = 'https://run.mocky.io/v3/592376c2-1f1d-47ef-b487-711bd84b802c'    
    fetch(url)
    .then( (response) => {
      return response.json()
    })
    .then( (data) => {
      console.log(data);
      setPizzaData(data.menu)
    })
    .catch( (error) => {})
  } , [])
  console.log('render2');
  return (
    <div>
      <Header />
      <div className="container filter-buttons">
        {buttons.map((btn) => {
          return <Button
            onClick={() => {
              setActiveBtn(btn.name)
            }}
            activeBtn={activeBtn}
            key={btn.id}
            name={btn.name} />
        })}
      </div>
      <Pizza pizzaData={pizzaData}/>
    </div>
  )
}

export default App
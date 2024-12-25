import Button from './components/button/Button'
import Header from './components/header/Header'
import { useEffect, useState } from 'react'
import './App.css'
import Check from './components/check/Check'
import Pizza from './components/pizza/Pizza'

const buttons = [
  {
    id: 1,
    name: 'Все'
  },
  {
    id: 2,
    name: 'Мясные'
  },
  {
    id: 3,
    name: 'Сырные'
  },
  {
    id: 4,
    name: 'Гриль'
  },
  {
    id: 5,
    name: 'Вегетарианские'
  },
  {
    id: 6,
    name: 'Острые'
  },
  {
    id: 7,
    name: 'Закрытые'
  }
]

const App = () => {
  const [activeBtn, setActiveBtn] = useState('Все')
  const [pizzaData, setPizzaData] = useState([])

  useEffect(() => {
    const url = 'https://673c34cc96b8dcd5f3f8e777.mockapi.io/api/v1/pizza2'
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setPizzaData(data[0].menu)
      })
      .catch(error => {})
  }, [])
  console.log('render2')
  return (
    <div>
      <Header />
      <div className='container filter-buttons'>
        {buttons.map(btn => {
          return (
            <Button
              onClick={() => {
                setActiveBtn(btn.name)
              }}
              activeBtn={activeBtn}
              key={btn.id}
              name={btn.name}
            />
          )
        })}
      </div>
      <Pizza pizzaData={pizzaData}  activeBtn={activeBtn} />
    </div>
  )
}

export default App

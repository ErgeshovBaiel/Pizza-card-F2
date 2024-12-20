import "./Pizza.css"
const Pizza = (props) => {
    const {pizzaData} = props
   
  return (
    <div className="container pizza-wrap">
         {pizzaData.map( (item) => {
            return <div className="p-card" key={item.name} >
                <div>
                    <img src={item.image} alt="" />
                </div>
                <div>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                </div>
                <div className="sizes">
                  {item.sizes.map(s => <button key={s}>{s}</button> )}
                </div>
                <div className="crusts">
                {item.crusts.map(c => <button key={c}>{c}</button> )}
                </div>
                <div className="p-footer">
                    <h4>{item.price}</h4>
                    <button>В корзину</button>
                </div>
            </div>
         })}
    </div>
  )
}

export default Pizza
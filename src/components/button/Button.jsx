

import "./Button.css";

const Button = (props) => {
  const { activeBtn, onClick } = props

  // conditions - (условие) 3 ef else, switch case , ? :
  return (
    <button
      onClick={onClick}
      className={activeBtn === props.name ? "btn active" : "btn"} >
      {props.name}
    </button>
  )
}

export default Button
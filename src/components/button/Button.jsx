

import "./Button.css";

const Button = (props) => {
  const { activeBtn, onClick } = props

  return (
    <button
      onClick={onClick}
      className={activeBtn === props.name ? "btn active" : "btn"} >
      {props.name}
    </button>
  )
}

export default Button
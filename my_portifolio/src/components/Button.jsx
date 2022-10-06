import React from 'react'
import { Link } from 'react-router-dom'

function Button({ path, text }) {
  //recebo o path para onde devo redirecionar
  // e o texto que dovo exibir no link
  // meu extilo está no App.css
  return (
    <Link className="button-black" to={path}>{text}</Link> 
  )
}

export default Button;

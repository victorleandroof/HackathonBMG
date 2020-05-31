import React from 'react';
import './Botao.css'

function Botao({titulo}) {
  return (
    <div className="flex-center">
      <div className="botao"> 
       <div className="botao-text">{titulo}</div>
      </div>
    </div>
  )
}

export default Botao;
import React from 'react';
import './Botao.css'

function Botao({titulo}) {
  return (
    <div className="flex-center">
      <div className="botao"> 
       <div className="botao-text"><a href="/modal">{titulo}</a></div>
      </div>
    </div>
  )
}

export default Botao;
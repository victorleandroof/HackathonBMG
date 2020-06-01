import React from 'react';
import './Botao.css'

function Botao({titulo, url}) {
  return (
    <div className="flex-center">
      <div className="botao"> 
       <div className="botao-text"><a href={url}>{titulo}</a></div>
      </div>
    </div>
  )
}

export default Botao;
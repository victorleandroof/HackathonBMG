import React from 'react';
import './AcoesBMG.css'


function AcoesBMG({titulo, conteudo}) {
  return (
    <div className="acoes-bmg">
      <h1>{titulo}</h1>
      <p>
        {conteudo}
      </p>      
    </div>
  )
}

export default AcoesBMG;
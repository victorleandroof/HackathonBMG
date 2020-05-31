import React from 'react';
import './SaldoPontos.css'

function SaldoPontos() {
  return (
    <div className="background-saldo text-saldo-pontos flex-position">
      <div className="saldo">
        <div className="label"> Saldo disponivel</div>
        <div className="content"> R$89,00</div>
      </div>
      <div className="pontos">
        <div className="label">Pontuação</div>
        <div className="content">240</div>
      </div>
    </div>
  )
}

export default SaldoPontos;
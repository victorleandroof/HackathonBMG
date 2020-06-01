import React from 'react';

import './Compra.css';

function CardComprar(compra,data) {
  return (
    <div>
        <h4>26/05 - Americanas</h4>                
        <div className="circulo-verde"></div>
            <ul>
                <li>Pagamento aprovado</li>
                <li className="valor-compra">Valor: R$  128,00</li>                
                <li className="informação">Mais informações</li>
            </ul>
    </div>
   );
}

export default CardComprar;
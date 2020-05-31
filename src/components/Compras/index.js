import React from 'react';
import './Compras.css'

function Compras() {
  return (
    <div className="center-card">
      <div className="card">
        <div className="container">
          <div className="tabs">
            <div className="tab-2">
              <label for="tab2-1">Atual</label>
              <input id="tab2-1" name="tabs-two" type="radio" checked="checked" />
              <div>
                <h4>30/05 - Amazon</h4>                
                <div className="circulo-verde"></div>
                <ul>
                  <li>Pagamento aprovado</li>
                  <li className="valor-compra">Valor: R$ 290</li>                
                  <li className="informação">Mais informação</li>
                </ul>
              </div>
            </div>
            <div className="tab-2">
              <label for="tab2-2">Futuras</label>
              <input id="tab2-2" name="tabs-two" type="radio" />
              <div>
              <h4>30/06 - Amazon</h4>                
              <div className="circulo-verde"></div>
                <ul>
                  <li>Pagamento futuro</li>
                  <li className="valor-compra">Valor: R$ 290</li>
                  <li className="informação">Mais informação</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





  )
}

export default Compras;
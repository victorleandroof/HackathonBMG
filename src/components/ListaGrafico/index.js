import React from 'react';
import './ListaGrafico.css';
import Grafico from '../Grafico'
function ListaGrafico() {
  return (
      <div className="lista-grafico-container">
           <Grafico />
            <Grafico />
            <Grafico />
      </div>
  );
}

export default ListaGrafico;
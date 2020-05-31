import React from 'react';
import './Dashboard.css';
import Grafico from '../Grafico';
import { getProdutos } from '../../services/produtos';
import { FaArrowRight } from 'react-icons/fa';

function Dashboard() {
  const graficoData = getProdutos();
  return (
      <div className="dashboard-container">
          <h1>Ações_BMG</h1>
          <Grafico data={graficoData}/>
          <div className="right"><a href="/acoes"><FaArrowRight/></a></div>
      </div>
  );
}

export default Dashboard;
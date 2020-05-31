import React from 'react';
import './Dashboard.css';
import ListaGrafico from '../ListaGrafico'

function Dashboard() {
  return (
    <div className="dashboard-container">
        <h1>Ações_BMG</h1>
        <ListaGrafico/>
    </div>
  );
}

export default Dashboard;
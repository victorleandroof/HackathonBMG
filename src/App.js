import React from 'react';
import './App.css';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import SaldoPontos from './components/SaldoPontos'
import Compras from './components/Compras'

function App() {
  return (
    <React.Fragment>
      <Header  titulo='Extrato'/>
      <SaldoPontos />
      <Dashboard />
      <Compras />
    </React.Fragment>
  );
}

export default App;
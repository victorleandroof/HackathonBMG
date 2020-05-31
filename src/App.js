import React from 'react';
import './App.css';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import SaldoPontos from './components/SaldoPontos'

function App() {
  return (
    <React.Fragment>
      <Header  titulo='Extrato'/>
      <SaldoPontos />
      <Dashboard />
    </React.Fragment>
  );
}

export default App;
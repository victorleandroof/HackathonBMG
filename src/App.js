import React from 'react';
import './App.css';
import Header from './components/Header'
import SaldoPontos from './components/SaldoPontos'

function App() {
  return (
    <div>
      <Header titulo='Extrato' />
      <SaldoPontos />
    </div>
  );
}

export default App;
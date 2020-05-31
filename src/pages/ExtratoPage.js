import React from 'react';
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import SaldoPontos from '../components/SaldoPontos'
import Compras from '../components/Compras'

function Extrato() {
  return (
    <React.Fragment>
        <Header  titulo='Extrato'/>
        <SaldoPontos />
        <Dashboard />
        <Compras />
    </React.Fragment>
  )
}

export default Extrato;
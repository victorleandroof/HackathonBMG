import React from 'react';
import Header from '../../components/Header'
import Dashboard from '../../components/Dashboard'
import SaldoPontos from '../../components/SaldoPontos'
import Compras from '../../components/Compras'
import { getUsuario } from '../../services/usuario'
import Informacao from '../../components/Informacao';


function page() {
  const usuarioData = getUsuario();
  return (
    <React.Fragment>
        <Header  titulo='Extrato'/>
        <SaldoPontos usuario={usuarioData}/>        
        <Informacao/>
        <Dashboard />
        <Compras usuario={usuarioData}/>
    </React.Fragment>
  )
}

export default page;
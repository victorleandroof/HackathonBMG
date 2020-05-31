import React from 'react';
import './Acoes.css';
import Header from '../../components/Header';
import SaldoPontos from '../../components/SaldoPontos';
import Dashboard from '../../components/Dashboard';
import AcoesBMG from '../../components/AcoesBMG';
import Botao from '../../components/Botao';
import { getUsuario } from '../../services/usuario'



function Acoes() {
  const usuarioData = getUsuario();
  return (
    <React.Fragment>
      <Header titulo="Ação" />
      <SaldoPontos usuario={usuarioData}/>
      <Dashboard />      
      <AcoesBMG titulo="Ação_BMG" conteudo="Lorem ipsum dolor sit, amet consectetur adipisicing elit."/>      
      <AcoesBMG titulo="Beneficios" conteudo="Lorem ipsum dolor sit, amet consectetur adipisicing elit."/>      
      <Botao titulo="COMEÇAR INVESTIR"/>
    </React.Fragment>
  )
}

export default Acoes;
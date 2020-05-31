import React from 'react';
import './Acoes.css';
import Header from '../../components/Header';
import Saldo from '../../components/SaldoPontos';
import Dashboard from '../../components/Dashboard';
import AcoesBMG from '../../components/AcoesBMG';
import Botao from '../../components/Botao';

function Acoes() {
  return (
    <React.Fragment>
      <Header titulo="Ação" />
      <Saldo />
      <Dashboard />      
      <AcoesBMG titulo="Ação_BMG" conteudo="Lorem ipsum dolor sit, amet consectetur adipisicing elit."/>      
      <AcoesBMG titulo="Beneficios" conteudo="Lorem ipsum dolor sit, amet consectetur adipisicing elit."/>      
      <Botao titulo="COMEÇAR INVESTIR"/>
    </React.Fragment>
  )
}

export default Acoes;
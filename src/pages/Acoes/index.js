import React,{ useEffect } from 'react';
import './Acoes.css';
import Header from '../../components/Header';
import SaldoPontos from '../../components/SaldoPontos';
import Dashboard from '../../components/Dashboard';
import AcoesBMG from '../../components/AcoesBMG';
import Botao from '../../components/Botao';
import { getUsuario } from '../../services/usuario'
import Informacao from '../../components/Informacao';




function Acoes() {
  const usuarioData = getUsuario();
  const url = window.location.href;
  useEffect(() => {
    const timer = setTimeout(() => window.location.href=`${url}#openModal-about`, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <React.Fragment>
      <Header titulo="Ação" />
      <SaldoPontos usuario={usuarioData}/>
      <Dashboard />
      <Informacao/>      
      <AcoesBMG titulo="Ação_BMG" conteudo="Nunca é tarde demais para começar a investir. O ação_BMG está aqui para te ensinar como investir e poupar seu dinheiro. Você sabia que pode começar a investir com apenas 28 reais? aqui o pouco pode virar muito."/>      
      <AcoesBMG titulo="Beneficios" conteudo="Se tornar sócio de grandes empresas sem a necessidade de um grande capital. Possibilidade de ganhos maiores com bom gerenciamento de riscos. Diversificação de investimentos."/>      
      <Botao titulo="COMEÇAR INVESTIR"/>
    </React.Fragment>
  )
}

export default Acoes;
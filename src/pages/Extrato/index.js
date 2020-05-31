import React from 'react';
import Header from '../../components/Header'
import Dashboard from '../../components/Dashboard'
import SaldoPontos from '../../components/SaldoPontos'
import Compras from '../../components/Compras'
import { ApolloProvider } from 'react-apollo'
import apolloClient from '../../services/usuario'

function page() {
  return (
    <ApolloProvider client={apolloClient}>
        <Header  titulo='Extrato'/>
        <SaldoPontos />
        <Dashboard />
        <Compras />
    </ApolloProvider>
  )
}

export default page;
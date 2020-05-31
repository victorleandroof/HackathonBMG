import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Extrato from './pages/ExtratoPage'
import Acoes from './pages/Acoes'
import Modal from './pages/Modal'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Extrato} />
            <Route path="/acoes" exact component={Acoes} />
            <Route path="/modal" exact component={Modal} />
        </BrowserRouter>
    )
}
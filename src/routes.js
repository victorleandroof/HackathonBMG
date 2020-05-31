import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Extrato from './pages/ExtratoPage'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Extrato} />
        </BrowserRouter>
    )
}
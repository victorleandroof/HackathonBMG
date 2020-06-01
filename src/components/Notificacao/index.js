import React from 'react';
import './Notificacao.css'
import Botao from '../Botao'

function Notificacao() {
    return (
        <div>
            <a href="#openModal-about">Modal</a>
            <div id="openModal-about" className="modalDialog">
                <div>
                    <div className="flex-close">
                        <a href="#close" title="Close" className="close"></a>
                    </div>
                    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, vel! Vel dolorum laboriosam minima dolorem beatae, aut ipsam repudiandae veniam fugiat earum debitis cumque consectetur ad aspernatur et assumenda eum.</h4>
                    <Botao />
                </div>
            </div>
        </div>
    )
}

export default Notificacao;
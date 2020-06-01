import React from 'react';
import './Informacao.css';
import Botao from '../Botao';

function Informacao() {
    return (
        <div>        
            <div id="openModal-about" className="modalDialog">
                <div>
                <div className="flex-close">
                    <a href="#close" title="Close" className="close"></a>
                </div>
                    <p>Olá, você já pensou em investir, porém não sabe por onde começar? Então estou aqui para te ajudar justamente com isso. Que tal entrar no mundo das ações? "Mas Duda eu não entendo nada de ações", bem eu recomendo você dar uma olhada no vídeo da Nath Finanças, eu mesma sou uma grande fã</p>
<<<<<<< HEAD
                    <Botao titulo="ASSISTA AO VÍDEO" url="https://youtu.be/IBAqRvQpMfY"/>
=======
                    <Botao titulo="ASSISTA AO VÍDEO" url="https://youtu.be/IBAqRvQpMfY"/>                    
>>>>>>> 7f10b22074612e66c07b6335ab2e9594f1dab860
                </div>
            </div>
        </div>
    )
}

export default Informacao;
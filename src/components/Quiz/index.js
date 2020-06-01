import React from 'react';
import './Quiz.css'

function Quiz() {
    return (
        <div>
            <a href="#openModal-about">Modal</a>            
            <div id="openModal-about" className="modalDialog">
                <div>
                <div className="flex-close">
                    <a href="#close" title="Close" className="close"></a>
                </div>
                    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, vel! Vel dolorum laboriosam minima dolorem beatae, aut ipsam repudiandae veniam fugiat earum debitis cumque consectetur ad aspernatur et assumenda eum.</h4>
                    <ol>
                    <li>Lorem Ipsum </li>
                    <li>Lorem Ipsum </li>
                    <li>Lorem Ipsum </li>
                    <li>Lorem Ipsum </li>
                    <li>Lorem Ipsum </li>

                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Quiz;
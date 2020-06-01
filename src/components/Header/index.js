import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import './Header.css'

function Header({titulo}) {
  return (
    <div className="header-container">
        <a href="/"><FaArrowLeft className="back" /></a><h1>{titulo}</h1>
    </div>
  );
}

export default Header;
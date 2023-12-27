import React from 'react';
import './Header.css';
import logito from "./PM.png" // Asegúrate de importar tu archivo CSS aquí

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logito} alt="Logotipo" />
      </div>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#caracteristicas">Características</a></li>
          <li><a href="#testimonials">Testimonios</a></li>
          <li><a href="#pricing">Precios</a></li>
          <li><a href="#cta">Bonus</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


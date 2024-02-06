// CTASection.jsx
import React from 'react';
import './CTASection.css';
import bonus1 from "./bonus1.jpg";
import bonus2 from "./bonus2.jpg";
import bonus3 from "./bonus3.jpg";

const CTASection = () => {
  

  const generateWhatsAppLink = () => {
    window.location.href = 'https://t.me/ProgramadorMillonary';
  };

  return (
    <section id="cta" className="cta-container">
      <h2>¿Listo para Comenzar?</h2>
      <p>Únete a nosotros y transforma tu vida hoy mismo.</p>
      <button onClick={generateWhatsAppLink}>¡Regístrate Ahora!</button>

      <div className="bonus-section">
        <h3>Bonus</h3>
        <div className="bonus-images">
          <div className='imagentainer'>
            <img src={bonus1} alt="Bonus 1" />
            <p>Libro "Código De Éxito - Programador Millonario"</p>
          </div>

          <div className='imagentainer'>
            <img src={bonus2} alt="Bonus 2" />
            <p>Mentoría Programador Millonario</p>
          </div>

          <div className='imagentainer'>
            <img src={bonus3} alt="Bonus 3" />
            <p>Comunidad De Telegram Programador Millonario</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

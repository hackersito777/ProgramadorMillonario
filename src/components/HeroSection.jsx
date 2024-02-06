// HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  

  const generateWhatsAppLink = () => {
    location.href = 'https://t.me/ProgramadorMillonary';
  };

  return (
    <>
      <section id="hero" className="hero-container">
        <div className="text-container">
          <h1>"Haz que tu Código Trabaje para Ti: Programador Millonario"</h1>
          <p>"De las Líneas de Código a los Billetes Verdes: Tu Viaje Empieza Aquí"</p>
          <button onClick={generateWhatsAppLink}>¡Comienza Ahora!</button>
        </div>
      </section>

      <div className="hero-video-container">
        <iframe
          title="Google Drive Video"
          width="100%"
          height="315"
          src="https://drive.google.com/file/d/1B5BihILccOY9bU4UNNWjKpPYMKCV752T/preview"
          allow="autoplay"
        ></iframe>
      </div>
    </>
  );
};

export default HeroSection;

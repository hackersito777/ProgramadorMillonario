// TestimonialsSection.jsx
import React from 'react';
import './TestimonialsSection.css';
import imagen1 from "./imagen1.jpg";
import imagen2 from "./imagen2.jpg"
import imagen3 from "./imagen3.jpg"
import imagen4 from "./imagen4.jpg"
import imagen5 from "./imagen5.jpg"
import imagen6 from "./imagen6.jpg"
import imagen7 from "./imagen7.jpg"
import imagen8 from "./imagen8.jpg"
import imagen9 from "./imagen9.jpg"
import imagen10 from "./imagen10.jpg"

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials-container">
      <h2>Lo Que Mis Ganancias Dicen</h2>
      <p>Hasta ahora estamos comenzando, por eso no tenemos aún testimonios. Tú vas a ser el primero en testificar. ¡Estoy completamente seguro!</p>
      <div className="testimonials">
        <div className="testimonial">
          <img src={imagen1} alt="Testimonio 1" />
        </div>
        <div className="testimonial">
          <img src={imagen2} alt="Testimonio 2" />
        </div>
        <div className="testimonial">
          <img src={imagen3} alt="Testimonio 3" />
        </div>
        <div className="testimonial">
          <img src={imagen4} alt="Testimonio 4" />
        </div>
        <div className="testimonial">
          <img src={imagen5} alt="Testimonio 5" />
        </div>
        <div className="testimonial">
          <img src={imagen6} alt="Testimonio 6" />
        </div>
        <div className="testimonial">
          <img src={imagen7} alt="Testimonio 7" />
        </div>
        <div className="testimonial">
          <img src={imagen8} alt="Testimonio 8" />
        </div>
        <div className="testimonial">
          <img src={imagen9} alt="Testimonio 9" />
        </div>
        <div className="testimonial">
          <img src={imagen10} alt="Testimonio 10" />
        </div>
        {/* ... Agrega las demás imágenes */}
      </div>
    </section>
  );
};

export default TestimonialsSection;

import React from "react";
import banner from "../../../../public/img/banner.png"; 

const About = () => {
  return (
    <div className="about">
      <h2 className="about-title">Sobre mí</h2>
      <p className="about-description">
        Soy migrante en Bélgica y madre de dos criaturas. Historiadora y músico de estudios y profesión, soy una cabeza inquieta.
        A partir de la maternidad me encontré con la necesidad de formarme y aprender en otros ámbitos.
        Soy educadora de Disciplina Positiva para familias y parejas y no paro de formarme en autorregulación, corregulación y el funcionamiento del cerebro y el cuerpo.
        He acompañado a criaturas y adolescentes desde el mundo del asociacionismo y la educación. Mi activismo se centra en torno a la educación y la escuela, el feminismo, la ecología y en cambiar la idea de que sólo hay una forma de vivir y criar.
        Me apasiona leer, si te despistas estaré leyendo algún artículo, un libro o las etiquetas que tenga delante. También me gusta el chocolate de +80% y aprender cosas nuevas.
      </p>
      <div className="banner-container">
        <img className="about-banner" src={banner} alt="Banner" />
      </div>
    </div>
  );
};

export default About;


import React from "react";
import retrato from "../../../../public/img/Dida.png"; 

const Asesorias = () => {
  return (
    <>
    <div className="asesorias">
      <h1>¿Quieres una asesoría conmigo?</h1>

      <div className="fotoDida">
        <img className="fotoRetrato" src={retrato} alt="Dida" />
      </div>

      <div className="descripcionAsesoria">
        <p>Ofrezco asesoría sobre:</p>
        <ul>
          <li>(Re)conexión de la pareja.</li>
          <li>Mejorar la comunicación y acuerdos de la pareja.</li>
          <li>Diferencias en el enfoque de la crianza con la pareja.</li>
          <li>Autorregulación y corregulación física y emocional de personas adultas y criaturas.</li>
          <li>Criaturas con agresividad.</li>
          <li>Dificultades en la crianza.</li>
          <li>Límites y acuerdos.</li>
          <li>Desarrollo y necesidades de las criaturas.</li>
          <li>Adolescentes.</li>
          <li>Orientación para familias expatriadas.</li>
        </ul>

        <p>
          Si intentas educar de forma respetuosa y no lo consigues, este es el lugar.
        </p>
        <p>
          Si quieres una visión de la crianza que se sustenta en todo lo que hoy sabemos sobre el cerebro y la neurobiología, aquí me encuentras.
        </p>
        <p>
          Idiomas: Catalán, Castellano, Inglés, Neerlandés y Francés.
        </p>
      </div>
    </div>
    </>
  );
};
export default Asesorias;
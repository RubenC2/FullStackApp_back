import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [formErrors, setFormErrors] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData({
      ...formData,
      [name]: value, 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // Validación del nombre
    if (!formData.nombre.trim()) {
      errors.nombre = "El nombre es obligatorio";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.nombre)) {
      errors.nombre = "El nombre solo debe tener letras y espacios";
    } else if (formData.nombre.trim().length < 3) {
      errors.nombre = "El nombre debe tener al menos 3 caracteres";
    }

    // Validación del correo electrónico con REGEX
    if (!formData.email.trim()) {
      errors.email = "El email es obligatorio";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      errors.email = "Por favor, introduce un email válido";
    }

    // Validación del mensaje
    if (!formData.mensaje.trim()) {
      errors.mensaje = "El mensaje no puede estar vacío";
    } else if (formData.mensaje.trim().length < 10) {
      errors.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }

    // Si hay errores, no se envía el formulario
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return; 
    }

   
    setFormErrors({});
    setFormSubmitted(true);

  
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="contact-form">
      <div className="form-card">
        <h2>Contactame</h2>
        {formSubmitted && (
          <p className="success-message">
            ¡Gracias por tu mensaje, te contestaré lo antes posible!
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="nombre" 
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Introduce tu nombre"
            />
            {formErrors.nombre && <p className="error">{formErrors.nombre}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            {formErrors.email && <p className="error">{formErrors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="mensaje" 
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Escribe tu mensaje"
            ></textarea>
            {formErrors.mensaje && <p className="error">{formErrors.mensaje}</p>}
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

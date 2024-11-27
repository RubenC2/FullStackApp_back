import React from 'react';

const Card = ({ articulo }) => {
  const { id, cat_id, titulo, autoria, contenido, fecha_publicacion, imagen_url } = articulo;

  return (
    <div className="card" key={id}>
      <p>Categoría #{cat_id}</p>
      <h3>{titulo}</h3>
      <h4>{autoria}</h4>
      <h5>{new Date(fecha_publicacion).toLocaleDateString()}</h5>
      <img src={imagen_url} alt={titulo} />
      <p>{contenido}</p>
    </div>
  );
};

export default Card;


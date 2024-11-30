import React from 'react';

const ArtDetails = ({ articulo, onVolver }) => {
  if (!articulo) return;

  return (
    <div className="art-details">
      <h1>{articulo.titulo}</h1>
      <h4>Escrito por {articulo.autoria}</h4>
      <p>{new Date(articulo.fecha_publicacion).toLocaleDateString()}</p>
      <img src={articulo.imagen_url} alt={articulo.titulo} />
      <p>{articulo.contenido}</p>
      <button onClick={onVolver}>Volver a la lista de artículos</button>
    </div>
  );
};

export default ArtDetails;



import React from 'react';
import ReactHtmlParser from 'html-react-parser';
import { DNA } from 'react-loader-spinner'; 

const ArtDetails = ({ articulo, onVolver }) => {
  
  if (!articulo) return <div> <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  /></div>;

  return (
    <div className="art-details">
      <h1>{articulo.titulo}</h1>
      <h4>Escrito por {articulo.autoria}</h4>
      <p>{new Date(articulo.fecha_publicacion).toLocaleDateString()}</p>
      <img src={articulo.imagen_url} alt={articulo.titulo} />
      <p>{ReactHtmlParser(articulo.contenido)}</p>
      <button onClick={onVolver}>Volver a la lista de artículos</button>
    </div>
  );
};

export default ArtDetails;



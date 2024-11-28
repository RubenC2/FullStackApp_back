import React, { useState, useEffect } from 'react';

import axios from 'axios';


const Card = () => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticulos = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/articulos`)
        setArticulos(response.data.articulos);
        setLoading(false);
      } catch (err) {
        setError('Error al obtener los artículos');
        setLoading(false);
      }
    };

    fetchArticulos();
  }, []);


  if (loading) {
    return <div>Cargando...</div>;
  }


  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="card">
      <h1 className="h1arts">ARTÍCULOS</h1>
      {Array.isArray(articulos) && articulos.length > 0 ? (
        articulos.map((item) => (
          <div key={item.id}>
            <h1>{item.titulo}</h1>
            <img src={item.imagen_url} />
          </div>
        ))
      ) : (
        <p>No hay artículos disponibles en esta categoría</p>
      )}
    </div>
  );
};

export default Card;

{/* <div className="card" key={id}>
      <p>Categoría #{cat_id}</p>
      <h3>{titulo}</h3>
      <h4>{autoria}</h4>
      <h5>{new Date(fecha_publicacion).toLocaleDateString()}</h5>
      <img src={imagen_url} alt={titulo} />
      <p>{contenido}</p>
    </div> */}
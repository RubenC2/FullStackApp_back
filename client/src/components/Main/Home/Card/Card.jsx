import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DebounceInput } from 'react-debounce-input';

const Card = () => {
  const [articulos, setArticulos] = useState([]); // Artículos completos
  const [loading, setLoading] = useState(true);    // Estado de carga
  const [error, setError] = useState(null);        // Estado de error
  const [nombreart, setNombreArt] = useState([]);  // Resultados de la búsqueda
  const [titulo, setTitulo] = useState('');        // Estado para almacenar el título de búsqueda


  useEffect(() => {
    const fetchArticulos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/articulos');
        setArticulos(response.data.articulos); 
        setLoading(false);
      } catch (err) {
        setError('Error al obtener los artículos');
        setLoading(false);
      }
    };

    fetchArticulos();
  }, []);

  
  useEffect(() => {
    if (titulo.trim() === '') return;  
    const fetchArticulosNombre = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/articulos/titulo/${titulo}`);
        setNombreArt(response.data); 
        setLoading(false);
      } catch (err) {
        setError('Error al obtener los artículos por título');
        setLoading(false);
      }
    };

    fetchArticulosNombre();
  }, [titulo]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo.trim()) {
      setNombreArt([]);  
    } else {
      alert('Por favor, ingresa un título para la búsqueda');
    }
  };

  const handleChange = (e) => {
    setTitulo(e.target.value);  
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="card">
      <h1 className="h1arts">ARTÍCULOS</h1>
      <form onSubmit={handleSubmit}>
        <DebounceInput
          minLength={1}
          debounceTimeout={1000}
          onChange={handleChange}  
          className='inputSearch'
          type="text"
          value={titulo}  
          placeholder="Buscar artículo"
        />
        <button type="submit">Buscar Artículo</button>
      </form>

   
      {nombreart.length > 0 ? (
        nombreart.map((item) => (
          <div key={item.id}>
            <h1>{item.titulo}</h1>
            <img src={item.imagen_url} alt={item.titulo} />
            <p>{item.contenido}</p>
          </div>
        ))
      ) : (
        <div>
         
          {articulos.length > 0 ? (
            articulos.map((item) => (
              <div key={item.id}>
                <h1>{item.titulo}</h1>
                <img src={item.imagen_url} alt={item.titulo} />
                <p>{item.contenido}</p>
              </div>
            ))
          ) : (
            <p>No hay artículos disponibles</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;

import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Home = () => {
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
    <div className="artsContainer">
      <h1 className="h1arts">ARTÍCULOS</h1>

      {Array.isArray(articulos) && articulos.length > 0 ? (
        articulos.map((item) => <Card key={item.id} articulo={item} />)
      ) : (
        <p>No hay artículos disponibles</p>
      )}
    </div>
  );
};

export default Home;

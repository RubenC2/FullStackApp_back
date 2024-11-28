import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card/Card';


const Home = () => {
  const [categorias, setCategorias] = useState([]); 
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);     

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/categorias`)
        setCategorias(response.data.categorias); 
        setLoading(false); 
      } catch (err) {
        setError('Error al obtener categorías');
        setLoading(false); 
      }
    };

    fetchCategorias(); 
  }, []); 

  
  if (loading) {
    return <div>Cargando...</div>;
  }

  
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
    <h1 className="h1categs">Categorías</h1>
    <div className="categContainer">
        
        {Array.isArray(categorias) && categorias.length > 0 ? (
          categorias.map((item) => (
            <div key={item.id}> 
              <h2>{item.titulo}</h2> 
              <p>{item.descripcion}</p>
              <img className="imgCateg" src={item.imagen_url} alt={item.titulo} /> 
            </div>
          ))
        ) : (
          <p>No hay categorías disponibles</p>
        )}
      {/* <Card /> */}
      </div>
    </>
  );
};
  
export default Home;

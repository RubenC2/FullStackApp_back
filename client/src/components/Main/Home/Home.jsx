import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import { DNA } from 'react-loader-spinner'; 

const Home = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/categorias');
        if (response.data && Array.isArray(response.data.categorias)) {
          setCategorias(response.data.categorias);
        } else {
          setError('Datos no válidos');
        }
        setLoading(false);
      } catch (err) {
        setError('Error al obtener categorías');
        setLoading(false);
      }
    };

    fetchCategorias();
  }, []);

  if (loading) {
    return <div>
       <DNA
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
      />
    </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1 className="h1categs">Categorías</h1>
      <div className="categContainer">
        {categorias.length > 0 ? (
          categorias.map((item) => (
            <div className="categoriaContainer" key={item.cat_id}>
              <h2>{item.nombre}</h2>
              <p>{item.descripcion}</p>
              <img className="imgCateg" src={item.imagen_url} alt={item.nombre} />
              <Link to={`/categoria/${item.cat_id}`}>
                <button>Ver artículos</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No hay categorías disponibles</p>
        )}
      </div>
    </>
  );
};

export default Home;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import ArtDetails from './ArtDetails';
import { DNA } from 'react-loader-spinner'; 
import ReactHtmlParser from 'html-react-parser'; 


const Card = () => {
  const { cat_id } = useParams();
  const [articulos, setArticulos] = useState([]); // Artículos completos
  const [loading, setLoading] = useState(true);    // Estado de carga
  const [error, setError] = useState(null);        // Estado de error
  const [nombreart, setNombreArt] = useState([]);  // Resultados de la búsqueda
  const [titulo, setTitulo] = useState('');        // Estado para almacenar el título de búsqueda
  const [articuloSeleccionado, setArticuloSeleccionado] = useState(null);  // Artículo seleccionado
  const [mostrarCard, setMostrarCard] = useState(true);
  const [sortedArticulos, setSortedArticulos] = useState([]); // Artículos ordenados

  console.log("cat_id desde la URL:", cat_id);
  useEffect(() => {
    const fetchArticulos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/articulos');
        const articulosOrdenados = response.data.articulos.sort((a, b) =>
          new Date(b.fecha_publicacion) - new Date(a.fecha_publicacion)  // Aquí los ordeno de más reciente a más antiguo
        );
        setArticulos(articulosOrdenados);
        setSortedArticulos(articulosOrdenados); // Se muestran de entrada ordenados
        setLoading(false);
      } catch (err) {
        setError('Error al obtener los artículos');
        setLoading(false);
      }
    };

    fetchArticulos();
  }, []);


  const filteredArticulos = articulos.filter(item => item.cat_id === parseInt(cat_id));
 

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

  const handleArticuloClick = (articulo) => {
    // Al hacer click en un artículo, lo guardamos en el estado y ocultamos la lista de artículos
    setArticuloSeleccionado(articulo);
    setMostrarCard(false);
  };

  const handleSort = () => {
    setSortedArticulos(sortedArticulos.sort((a, b) => a.titulo.localeCompare(b.titulo)));
  };
  

  const handleVolver = () => {
    // Al hacer click en "Volver", vuelve a la vista de todos los artículos
    setArticuloSeleccionado(null);
    setMostrarCard(true);
  };

  // Muestro las primeras 20 palabras
  const previsualizarArticulo = (content) => {
    const words = content.split(' ');
    const preview = words.slice(0, 20).join(' ') + (words.length > 20 ? '...' : '');
    return ReactHtmlParser(preview);
  };

  if (loading) return <div> <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  /></div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <h1 className="h1arts">ARTÍCULOS</h1>
      <form className="formSearch" onSubmit={handleSubmit}>
        <DebounceInput
          minLength={1}
          debounceTimeout={3000}
          onChange={handleChange}
          className='inputSearch'
          type="text"
          value={titulo}
          placeholder="Buscar artículo"
        />
        <button type="submit">Buscar Artículo</button>
      </form>

      <button onClick={handleSort}>Ordenar A-Z</button>

      <div className="card">
        {mostrarCard ? (
          nombreart.length > 0 ? (
            nombreart.map((item) => (
              <div className="artContainer" key={item.id} onClick={() => handleArticuloClick(item)}>
                <h1>{item.titulo}</h1>
                <img src={item.imagen_url} alt={item.titulo} />
                <p>{previsualizarArticulo(item.contenido)}</p>
                <h4>LEER MÁS</h4>
              </div>
            ))
          ) : filteredArticulos.length > 0 ? (
            filteredArticulos.map((item) => (
              <div className="artContainer" key={item.id} onClick={() => handleArticuloClick(item)}>
                <h1>{item.titulo}</h1>
                <img src={item.imagen_url} alt={item.titulo} />
                <p>{previsualizarArticulo(item.contenido)}</p>
                <h4>LEER MÁS</h4>
              </div>
            ))
          ) : (
            <p>No hay artículos disponibles</p>
          )
        ) : (
          <ArtDetails articulo={articuloSeleccionado} onVolver={handleVolver} />
        )}
      </div>
    </>
  );
};

export default Card;
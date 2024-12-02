// import HTMLReactParser from 'html-react-parser';
//       <div>{HTMLReactParser(content)}</div>
import React, { useState, useRef } from "react";
import JoditEditor from 'jodit-react';
import axios from "axios";

const ArticuloAdd = () => {

  const [catId, setCatId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [autoria, setAutoria] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagenUrl, setImagenUrl] = useState("");
  const [message, setMessage] = useState("");
  const editor = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault();



    if (!catId || !titulo || !autoria || !contenido || !imagenUrl) {
      setMessage("Faltan campos por completar.");
      return;
    }

    // Datos que envío
    const articuloData = {
      cat_id: catId,
      titulo: titulo,
      autoria: autoria,
      contenido: contenido,
      imagen_url: imagenUrl
    };

    try {

      const response = await axios.post("http://localhost:3000/api/articulos", articuloData);
      console.log("Artículo guardado:", response.data);

      setMessage("Artículo creado exitosamente!");


      setCatId("");
      setTitulo("");
      setAutoria("");
      setImagenUrl("");
      setContenido("");

    } catch (error) {
      console.error("Error al guardar el artículo:", error);
    }
  };

  return (
    <div>
      <h1>Crear Artículo</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Categoria ID:</label>
          <input
            type="text"
            value={catId}
            onChange={(e) => setCatId(e.target.value)}
            placeholder="ID de la categoría"
          />
        </div>


        <div>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Título"
          />
        </div>


        <div>
          <label>Autoría:</label>
          <input
            type="text"
            value={autoria}
            onChange={(e) => setAutoria(e.target.value)}
            placeholder="Autoría"
          />
        </div>


        <div>
          <label></label>
          <JoditEditor
            ref={editor}
            value={contenido}
            onBlur={(newContent) => setContenido(newContent)} 
            onChange={(newContent) => {}}  
            config={{ editorCssClass: "my-editor" }} />

        </div>


        <div>
          <label>Imagen URL:</label>
          <input
            type="text"
            value={imagenUrl}
            onChange={(e) => setImagenUrl(e.target.value)}
            placeholder="URL de la imagen"
          />
        </div>

        <button type="submit">Guardar Artículo</button>
      </form>
    </div>
  );
};

export default ArticuloAdd;

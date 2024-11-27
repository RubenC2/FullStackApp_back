
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    logged boolean, DEFAULT 'false' CHECK (logged IN ('true', 'false')) 
    rol VARCHAR(10) DEFAULT 'user' CHECK (rol IN ('admin', 'user'))
);

INSERT INTO users (nombre, apellidos, email, password, logged, rol) VALUES 
  ('Dida',  'Castro', 'didaxample@gmail.com', '123456', 'false', 'admin'),
  ('Rubén', 'Castro', 'rubenexample@gmail.com', '123456', 'false', 'user')

  
CREATE TABLE articulos (
    id SERIAL PRIMARY KEY,
    cat_id INT,
    titulo VARCHAR(100) NOT NULL,
    autoria VARCHAR(100) NOT NULL,
    contenido TEXT NOT NULL,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    imagen_url VARCHAR(255)
);

INSERT INTO articulos (cat_id, titulo, autoria, contenido, imagen_url) VALUES 
  (1, 'Las emociones', 'Dida', 'aqui va el texto largo', 'https://thumbs.dreamstime.com/b/retrato-de-gato-dom%C3%A9stico-curl-americano-adulto-contra-fondo-negro-195877559.jpg'),
  (2, 'Las rabietas', 'Dida', 'aqui va el texto largo', 'https://thumbs.dreamstime.com/b/retrato-de-gato-dom%C3%A9stico-curl-americano-adulto-contra-fondo-negro-195877559.jpg'),
  (3, 'Las reuniones familiares', 'Dida', 'aqui va el texto largo', 'https://thumbs.dreamstime.com/b/retrato-de-gato-dom%C3%A9stico-curl-americano-adulto-contra-fondo-negro-195877559.jpg');


ALTER TABLE articulos
ADD CONSTRAINT fk_articulos
FOREIGN KEY (cat_id)
REFERENCES categorias(id);



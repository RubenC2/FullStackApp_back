CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    logged BOOLEAN DEFAULT FALSE CHECK (logged IN (FALSE, TRUE)),
    rol VARCHAR(10) DEFAULT 'user' CHECK (rol IN ('admin', 'user'))
);


CREATE TABLE categorias (
    cat_id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    imagen_url VARCHAR(255)
);

CREATE TABLE articulos (
    id SERIAL PRIMARY KEY,
    cat_id INT,
    titulo VARCHAR(100) NOT NULL,
    autoria VARCHAR(100) NOT NULL,
    contenido TEXT NOT NULL,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    imagen_url VARCHAR(255),
    FOREIGN KEY (cat_id) REFERENCES categorias(cat_id)
);


CREATE TABLE suscripcion (
    PRIMARY KEY (user_id, cat_id),
    user_id INT NOT NULL,
    cat_id INT NOT NULL,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (cat_id) REFERENCES categorias(cat_id)
);


INSERT INTO users (nombre, apellidos, email, password, logged, rol) VALUES 
  ('Dida',  'Castro', 'didaxample@gmail.com', '123456', 'false', 'admin'),
  ('Rubén', 'Castro', 'rubenexample@gmail.com', '123456', 'false', 'user')

INSERT INTO categorias (cat_id, nombre, imagen_url) VALUES 
  (1, 'Fluyendo en familia', 'https://thumbs.dreamstime.com/b/retrato-de-gato-dom%C3%A9stico-curl-americano-adulto-contra-fondo-negro-195877559.jpg'),
  (2, 'Pareja conectada', 'https://thumbs.dreamstime.com/b/retrato-de-gato-dom%C3%A9stico-curl-americano-adulto-contra-fondo-negro-195877559.jpg'),
  (3, 'Todo empieza por ti', 'https://thumbs.dreamstime.com/b/retrato-de-gato-dom%C3%A9stico-curl-americano-adulto-contra-fondo-negro-195877559.jpg');

INSERT INTO articulos (cat_id, titulo, autoria, contenido, imagen_url) VALUES 
  (1, 'Las emociones', 'Dida', 'aqui va el texto largo', 'https://thumbs.dreamstime.com/b/retrato-de-gato-dom%C3%A9stico-curl-americano-adulto-contra-fondo-negro-195877559.jpg'),
  (2, 'Las rabietas', 'Dida', 'aqui va el texto largo', 'https://thumbs.dreamstime.com/b/retrato-de-gato-dom%C3%A9stico-curl-americano-adulto-contra-fondo-negro-195877559.jpg'),
  (3, 'Las reuniones familiares', 'Dida', 'aqui va el texto largo', 'https://thumbs.dreamstime.com/b/retrato-de-gato-dom%C3%A9stico-curl-americano-adulto-contra-fondo-negro-195877559.jpg');
  


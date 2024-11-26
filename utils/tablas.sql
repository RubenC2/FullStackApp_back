
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
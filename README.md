# :deciduous_tree: :baby: Bewust Opvoeden (FullStackApp)

Es una aplicación web sobre crianza consciente que ofrece un blog categorizado con artículos, información sobre la autora, servicios de asesoría y un panel de administración para publicar artículos.

<u>Tabla de Contenidos</u>

:seedling: Descripción

:seedling: Lenguajes y herramientas

:seedling: Características

:seedling: Instalación

:seedling: Uso

:seedling: Contribuciones

:seedling: Licencia

------------------------------------------------------------------------------------------------------------
**Descripción**
---
Bewust Opvoeden es una aplicación web que ofrece contenido sobre crianza consciente. Al acceder puedes explorar artículos categorizados en tres secciones: **Fluyendo en familia, Pareja conectada y Todo empieza por ti**. Además, la aplicación cuenta con un sistema de búsqueda de artículos por palabras clave.

La plataforma también incluye información sobre la autora y los servicios de asesoría que ofrece, junto con un panel de administración donde la autora puede publicar sus artículos de manera sencilla utilizando un editor de texto.

Es un proyecto personal que se utiliza para compartir contenido valioso sobre el enfoque consciente en la crianza.

**:hammer_and_wrench: Lenguajes y herramientas:**
---
El **frontend** de la aplicación está construido utilizando React. React Router se utiliza para gestionar la navegación entre las distintas páginas de la aplicación y la interfaz de usuario está estilizada utilizando SASS. Además, el frontend consume la API RESTful proporcionada por el backend, utilizando axios para realizar solicitudes HTTP. Los datos de los artículos y las categorías se obtienen desde el servidor, y las respuestas se muestran de forma dinámica en la interfaz. También gracias a la implementación del editor de texto JoditEditor se pueden crear los artículos desde el panel de administración.

El **backend** de la aplicación está construido utilizando Node.js con el framework Express para crear una API RESTful que gestiona la lógica de negocio de la aplicación, la manipulación de artículos y la conexión con la base de datos. 

La aplicación utiliza **PostgreSQL** como sistema de gestión de bases de datos relacional SQL para almacenar y gestionar la información. 

Este enfoque combinado de React en el frontend y PostgreSQL en el backend permite crear una aplicación eficiente, escalable y fácil de mantener, con una experiencia de usuario fluida y dinámica.

<div> <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="React" alt="React" width="40" height="40"/>&nbsp; <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" title="Node.js" alt="Node.js" width="40" height="40"/>&nbsp; <img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg" title="Express" alt="Express" width="40" height="40"/>&nbsp; <img src="https://github.com/devicons/devicon/blob/master/icons/postgresql/postgresql-original.svg" title="PostgreSQL" alt="PostgreSQL" width="40" height="40"/>&nbsp; <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg" title="Git" alt="Git" width="40" height="40"/>&nbsp; 
<img src="https://res.cloudinary.com/hl8zoliad/image/fetch/f_auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxdan%2Fjodit%2Fmain%2Fexamples%2Fassets%2Flogo.png" title="Jodit Editor" alt="Jodit Editor" width="90" height="40"/>&nbsp; <img src="https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg" title="SCSS" alt="SCSS" width="40" height="40"/>&nbsp; </div>
</div>

**Características**
---
:large_blue_circle: Blog categorizado: Artículos organizados en tres categorías: Fluyendo en familia, Pareja conectada y Todo empieza por ti.

:yellow_circle: Búsqueda de artículos: Se pueden buscar artículos por palabras clave.

:orange_circle: Panel de administración: Un panel para que la autora cree y publique artículos con un editor de texto (Jodit Editor).

:white_circle: Menú hamburguesa: Navegación sencilla con enlaces a Categorías, Sobre mí, Asesorías y Contacto.

:green_circle: Redes sociales: Enlaces a las redes sociales de la autora en el footer de la página.

:red_circle: Base de datos en PostgreSQL: Utiliza una base de datos PostgreSQL para gestionar artículos y contenido.

:purple_circle: Estilos SCSS: La aplicación utiliza SCSS para gestionar los estilos, lo que facilita una estructura modular y escalable para el diseño.

**Como iniciar el proyecto**
---
1. Clona el repositorio
```bash
git clone https://github.com/RubenC2/FullStackApp
```
2. Instala las dependencias del backend:
```bash
npm install
```
3. Configuración de las Variables de Entorno. Crea un archivo .env en el directorio backend con las siguientes variables:

```bash
DB_HOST=
DB_USER=
DB_DATABASE=
DB_PORT=
DB_PASSWORD=
```
4. Instalar y ejecutar PostgreSQL. Crea la base de datos.
5.  Iniciar el servidor del Back
```bash
npm start
```
6. Instalación del Front (React + SASS). Accede:
```bash
cd ./client
```
- Instala las dependencias
```bash
npm install
```
-En el directorio client, ejecuta el siguiente comando para iniciar el servidor de desarrollo:
```bash
npm start
```
7. Abre tu navegador y ve a
```bash
http://localhost:5173
```

**Mejoras futuras**
---
1. Autenticación: Uno de los objetivos es permitir que las personas puedan registrarse, inicien sesión y gestionar su cuenta dentro de la aplicación.
2. Determinación de Roles Admin o User para acceso y funcionalidades controladas.
3. Permitir comentarios debajo de los artículos para mejorar la experiencia de usuario.
4. Selección de categoría(s) favorita(s) al registrarse y posibilidad de modificarla(s) desde su perfil.
5. Implementación de un sistema de mailing que permita enviar correos electrónicos tipo newsletter a users.

**Contribuciones**
---
Si deseas contribuir a este proyecto, puedes hacerlo de la siguiente manera:

Haz un fork del repositorio.

Crea una rama nueva (git checkout -b feature-nueva-característica).

Realiza tus cambios y haz commit (git commit -am 'Añadir nueva característica').

Sube tus cambios (git push origin feature-nueva-característica).

Abre un pull request y describe tus cambios.

¡Gracias por tu aportación!


**Licencia**
---
Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.

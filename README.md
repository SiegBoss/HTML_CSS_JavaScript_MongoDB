# Sistema de Gestión de Usuarios con Node.js, Express, y MongoDB

Este proyecto es un sistema de gestión de usuarios que permite a los usuarios realizar algunas operaciones (Crear, Leer y Eliminar) a través de una interfaz web.
La parte del frontend está desarrollada con HTML, CSS y JavaScript, mientras que la lógica del backend se ha implementado utilizando Node.js, Express y Mongoose para interactuar con una base de datos MongoDB.

## Estructura del Proyecto

El proyecto está organizado en los siguientes archivos y carpetas:

- `index.html` : Archivo HTML que contiene la interfaz de usuario para interactuar con el sistema.
- `index.css` : Archivo CSS que define los estilos y el diseño de la interfaz de usuario.
- `index.js` : Archivo JavaScript que proporciona la interactividad y la lógica del frontend.
- `app.js` : Archivo principal del servidor Node.js que utiliza Express para manejar las solicitudes HTTP y las operaciones CRUD en la base de datos.

## Tecnologías Utilizadas

### Frontend:

- HTML: Para la estructura y los elementos de la página web.
- CSS: Para dar estilo y diseño a la interfaz de usuario.
- JavaScript: Para la lógica y la interactividad de la página web.

### Backend:
- Node.js: Entorno de ejecución para JavaScript en el servidor.
- Express: Framework de Node.js para construir aplicaciones web.
- MongoDB y Mongoose: Base de datos NoSQL y ODM (Object Data Modeling) para almacenar y gestionar los datos de los usuarios.

## Funcionalidades

El sistema de gestión de usuarios permite realizar las siguientes operaciones:

Crear usuario: Los usuarios pueden agregar su nombre, edad, correo, número y género a la base de datos.
Leer usuario: Mostrar la lista de usuarios registrados.
Eliminar usuario: Eliminar usuarios de la base de datos.

## Licencia
Este proyecto sigue la licencia MIT. Consulta el archivo LICENSE para obtener más detalles sobre los términos de uso y distribución.
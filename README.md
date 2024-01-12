# Sistema de Gestión de Usuarios con Node.js, Express y MongoDB

Este proyecto es un sistema de gestión de usuarios que permite a los usuarios realizar algunas operaciones (Crear, Leer y Eliminar) a través de una interfaz web.

La parte del frontend está desarrollada con HTML, CSS y JavaScript, mientras que la lógica del backend se ha implementado utilizando Node.js, Express y Mongoose para interactuar con una base de datos MongoDB.

## Estructura del Proyecto

El proyecto está organizado en los siguientes archivos:

- `app.js` : Archivo principal del servidor Node.js que utiliza Express para manejar las solicitudes HTTP y las operaciones CRUD en la base de datos.
- `index.html` : Archivo HTML que contiene la interfaz de usuario para interactuar con el sistema.
- `index.css` : Archivo CSS que define los estilos y el diseño de la interfaz de usuario.
- `index.js` : Archivo JavaScript que proporciona la interactividad y la lógica del frontend.
- `users_page.html` : Archivo HTML que contiene la interfaz para poder ver la base de datos.
- `users_page.css` : Archivo CSS que define los estilos y el diseño de la interfaz de usuario
- `users_page.js` : Archivo JavaScript que proporciona la interactividad y la lógica del frontend.

## Tecnologías Utilizadas

### Frontend:

- HTML: Para la estructura y los elementos de la página web.
- CSS: Para dar estilo y diseño a la interfaz de usuario.
- JavaScript: Para la lógica y la interactividad de la página web.

### Backend:

- Node.js: Entorno de ejecución para JavaScript en el servidor.
- Express: Framework de Node.js para construir aplicaciones web.
- Mongoose: Base de datos NoSQL y ODM (Object Data Modeling) para almacenar y gestionar los datos de los usuarios.

## Funcionalidades

El sistema de gestión de usuarios permite realizar las siguientes operaciones:

- Crear usuario: Los usuarios pueden agregar su nombre, edad, correo, número y género a la base de datos.
- Leer usuario: Mostrar la lista de usuarios registrados.
- Eliminar usuario: Eliminar usuarios de la base de datos.

## Licencia

Este proyecto sigue la licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles sobre los términos de uso y distribución.

------------------------------

# User Management System with Node.js, Express and MongoDB

This project is a user management system that allows users to perform some operations (Create, Read, and Delete) through a web interface. The frontend part is developed with HTML, CSS, and JavaScript, while the backend logic has been implemented using Node.js, Express, and Mongoose to interact with a MongoDB database.

## Project Structure

The project is organized into the following files and folders:

- `app.js` : Main Node.js server file that uses Express to handle HTTP requests and CRUD operations in the database.
- `index.html` : HTML file that contains the user interface to interact with the system.
- `index.css` : CSS file that defines the styles and design of the user interface.
- `index.js` : JavaScript file that provides interactivity and frontend logic.
- `users_page.html`.html: HTML file that contains the interface to view the database.
- `users_page.css`: CSS file that defines the styles and design of the user interface.
- `users_page.js`: JavaScript file that provides interactivity and frontend logic.


## Technologies Used

### Frontend:

- HTML: For the structure and elements of the webpage.
- CSS: To style and design the user interface.
- JavaScript: For the logic and interactivity of the webpage.

### Backend:

- Node.js: Runtime environment for JavaScript on the server.
- Express: Node.js framework for building web applications.
- Mongoose: NoSQL database and ODM (Object Data Modeling) to store and manage user data.

## Features

The user management system allows the following operations:

- Create user: Users can add their name, age, email, number, and gender to the database.
- Read user: Display the list of registered users.
- Delete user: Remove users from the database.

## License

This project follows the MIT license. Check the `LICENSE` file for more details about the terms of use and distribution.
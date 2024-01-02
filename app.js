// Base de datos en MongoDB con NodeJS y Express | Database in MongoDB with NodeJS and Express

// Instalar dependencias | Install dependencies

// Express : Sirve para crear el servidor | Used to create the server
const express = require('express');
// Mongoose : Sirve para conectarse a la base de datos | Used to connect to the database
const mongoose = require('mongoose');

// Crear el servidor | Create the server
const app = express();
// app.use(express.json()) : 
// Permite que el servidor entienda los datos que se envían desde el formulario | Allows the server to understand the data that is sent from the form
app.use(express.json());
// app.use(express.static('public')) :
//Permite que el servidor pueda acceder a los archivos estáticos de la carpeta public | Allows the server to access the static files of the public folder
app.use(express.static('public'));

// URL de conexión a la base de datos de MongoDB | MongoDB database connection URL
mongoose.connect('mongodb://localhost/NodeJS_MongoDB');
// Conexión a la base de datos | Database connection
const db = mongoose.connection;
// Mensaje de error al conectarse a la base de datos | Error message when connecting to the database
mongoose.connection.on('error', (err) => {

    console.error('Error de conexión:', err);

});

// db.once('open', callback) : 
// Se ejecuta cuando la conexión a la base de datos es exitosa | Executed when the connection to the database is successful
db.once('open', function () {

    // Mensaje de éxito al conectarse a la base de datos en la consola | Success message when connecting to the database in the console
    console.log("Conexión a la base de datos exitosa");

    // Crear el esquema de la base de datos | Create the database schema
    const schema = new mongoose.Schema({
        username: String,
        name: String,
        age: Number,
        email: String,
        phone: Number,
        gender: String
    });

    // Crear el modelo de Mongoose que representa una colección en la base de datos | Create the Mongoose model that represents a collection in the database
    const collection = mongoose.model('users', schema);

    // Ruta para guardar los datos en la base de datos | Route to save data to the database
    app.post('/addData', async (req, res) => {

        // Obtener los datos del formulario | Get the form data
        const data = req.body;
        // Crear un nuevo dato con los datos del formulario | Create a new data with the form data
        const dato = new collection(data);

        try {

            // Guardar el dato en la base de datos | Save the data to the database
            await dato.save();

            //Mensaje de éxito al guardar el dato en la consola | Success message when saving the data in the console
            console.log("Dato guardado");
            // Enviar una respuesta al cliente | Send a response to the client
            res.status(200).send('Dato guardado exitosamente');

        } catch (err) {

            // Mensaje de error al guardar el dato en la consola | Error message when saving the data in the console
            console.log(err);
            // Enviar una respuesta de error al cliente | Send an error response to the client
            res.status(500).send('Error al guardar el dato');
        }
    });

    // Ruta para obtener todos los usuarios de la base de datos | Route to get all users from the database
    app.get('/getUsers', async (req, res) => {

        try {

            // Obtener todos los usuarios de la colección | Get all users from the collection
            const users = await collection.find({});
            // Enviar los usuarios como respuesta | Send users as response
            res.json(users);

        } catch (err) {

            // Enviar un mensaje de error en caso de fallo | Send an error message in case of failure
            res.status(500).json({ message: err.message });
        }
    });

    // Ruta para eliminar un usuario por su ID
    app.delete('/deleteUser/:id', async (req, res) => {
        
        // Obtener el ID del usuario | Get the user ID
        const userId = req.params.id;

        try {

            // Eliminar el usuario de la base de datos por su ID | Delete the user from the database by its ID
            await collection.findByIdAndDelete(userId);
            // Enviar una respuesta exitosa al cliente | Send a successful response to the client
            res.status(200).send('Usuario eliminado correctamente');

        } catch (err) {

            // Enviar un mensaje de error en caso de fallo | Send an error message in case of failure
            res.status(500).json({ message: err.message });
        }
    });

});

// app.listen(3000) : 
// Inicia el servidor en el puerto 3000 | Starts the server on port 3000
function onServerStart() {
    console.log('Servidor corriendo en el puerto 3000');
}

// Iniciar el servidor | Start the server
app.listen(3000, onServerStart);

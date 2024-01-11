// Función para eliminar un usuario por su ID de la base de datos | Function to delete a user by his ID from the database
const deleteUser = async (userId, row) => {

    try {

        // Realiza una solicitud DELETE al servidor para eliminar el usuario con el ID proporcionado | Make a DELETE request to the server to delete the user with the provided ID
        const response = await fetch(`/deleteUser/${userId}`, {
            method: 'DELETE'
        });

        // Verifica si la operación de eliminación fue exitosa (código de respuesta 200) | Check if the deletion operation was successful (response code 200)
        if (response.ok) {

            // Elimina la fila correspondiente de la tabla en el cliente | Delete the corresponding row from the table on the client
            document.getElementById('user-data-body').removeChild(row);
            return true;
        }

    } catch (error) {

        // Registra un mensaje de error en la consola si falla la eliminación del usuario | Log an error message to the console if the user deletion fails
        console.error('Error al eliminar usuario:', error);
    }
    return false;
};

// Realiza una solicitud al servidor para obtener la lista de usuarios | Make a request to the server to get the list of users
fetch('/getUsers')

// Convierte la respuesta a formato JSON | Convert the response to JSON format
    .then(response => response.json()) 
    .then(users => {

        // Obtiene una referencia al cuerpo de la tabla que muestra los datos de los usuarios | Get a reference to the table body that shows the user data
        const userDataBody = document.getElementById('user-data-body');

        // Itera a través de cada usuario obtenido
        users.forEach(user => {

            // Crea una nueva fila en la tabla que muestra los datos de los usuarios | Create a new row in the table that shows the user data
            const row = document.createElement('tr'); 

            // Llena cada fila con los datos del usuario y agrega un botón de eliminar | Fill each row with the user data and add a delete button
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.gender}</td>
                <td><button class="delete-button">Eliminar</button></td>
            `;

            // Agrega un evento de clic al botón de eliminar en cada fila | Add a click event to the delete button on each row
            row.querySelector('.delete-button').addEventListener('click', async () => {

                // Pregunta al usuario si está seguro de que quiere eliminar al usuario seleccionado | Ask the user if he is sure he wants to delete the selected user
                const confirmed = confirm(`¿Estás Seguro que Quieres Eliminar a ${user.username}?`);

                if (confirmed) {
                    
                    // Llama a la función deleteUser para eliminar el usuario seleccionado | Call the deleteUser function to delete the selected user
                    const deleted = await deleteUser(user._id, row);

                    if (deleted) {

                        // Muestra un mensaje en la consola si el usuario se eliminó correctamente | Show a message in the console if the user was deleted successfully
                        console.log('Usuario Eliminado Correctamente');
                    }
                }
            });

            // Agrega la fila a la tabla que muestra los datos de los usuarios | Add the row to the table that shows the user data
            userDataBody.appendChild(row);
        });
    })
    // Muestra un mensaje en la consola si falla la obtención de usuarios | Show a message in the console if the user retrieval fails
    .catch(error => console.error('Error al obtener usuarios:', error));

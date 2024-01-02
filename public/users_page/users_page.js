// Función para eliminar un usuario por su ID de la base de datos
const deleteUser = async (userId, row) => {

    try {

        // Realiza una solicitud DELETE al servidor para eliminar el usuario con el ID proporcionado
        const response = await fetch(`/deleteUser/${userId}`, {
            method: 'DELETE'
        });

        // Verifica si la operación de eliminación fue exitosa (código de respuesta 200)
        if (response.ok) {
            // Elimina la fila correspondiente de la tabla en el cliente
            document.getElementById('userDataBody').removeChild(row);
            return true;
        }

    } catch (error) {

        // Registra un mensaje de error en la consola si falla la eliminación
        console.error('Error al eliminar usuario:', error);
    }
    return false;
};

// Realiza una solicitud al servidor para obtener la lista de usuarios
fetch('/getUsers')

    .then(response => response.json()) // Convierte la respuesta a formato JSON
    .then(users => {

        const userDataBody = document.getElementById('userDataBody');

        // Itera a través de cada usuario obtenido
        users.forEach(user => {

            const row = document.createElement('tr'); // Crea una nueva fila en la tabla
            // Llena cada fila con los datos del usuario y agrega un botón de eliminar
            
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.gender}</td>
                <td><button class="deleteButton">Eliminar</button></td>
            `;

            // Agrega un evento de clic al botón de eliminar en cada fila
            row.querySelector('.deleteButton').addEventListener('click', async () => {
                const confirmed = confirm(`¿Estás seguro que quieres eliminar a ${user.username}?`);
                if (confirmed) {
                    // Llama a la función deleteUser para eliminar el usuario seleccionado
                    const deleted = await deleteUser(user._id, row);
                    if (deleted) {
                        console.log('Usuario eliminado correctamente');
                    }
                }
            });

            // Agrega la fila a la tabla que muestra los datos de los usuarios
            userDataBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error al obtener usuarios:', error));

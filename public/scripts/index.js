// Obtener referencia al botón "Eliminar" | Get reference to "Delete" button
const deleteButton = document.getElementById('delete');
// Obtener referencia al botón "Agregar" | Get reference to "Add" button
const addButton = document.getElementById('add-data');

// Agrega un evento de clic al botón con el id 'addData' | Add a click event to the button with the id 'addData'
addButton.addEventListener('click', async () => {

    // Crea un objeto con los datos del formulario | Create an object with the form data
    const data = {
        // Obtiene el valor del campo 'username' | Get the value of the 'username' field
        username: document.getElementById('username').value,
        // Obtiene el valor del campo 'name' | Get the value of the 'name' field
        name: document.getElementById('name').value,
        // Obtiene el valor del campo 'age' | Get the value of the 'age' field
        age: document.getElementById('age').value,
        // Obtiene el valor del campo 'email' | Get the value of the 'email' field
        email: document.getElementById('email').value,
        // Obtiene el valor del campo 'phone' | Get the value of the 'phone' field
        phone: document.getElementById('phone').value,
        // Obtiene el valor del campo 'gender' | Gets the value of the 'gender' field
        gender: document.getElementById('gender').value
    };

    // Define las opciones para la solicitud fetch | Define the options for the fetch request
    const options = {

        // Método de la solicitud | Request
        method: 'POST',
        // Tipo de contenido de la solicitud | Request content type          
        headers: { 'Content-Type': 'application/json' },
        // Convierte los datos del formulario a una cadena JSON | Converts form data to a JSON string
        body: JSON.stringify(data)
    };

    try {

        // Realizar la solicitud fetch al servidor y obtener la respuesta | Make the fetch request to the server and get the response
        const response = await fetch('/addData', options);
        // Convierte la respuesta a JSON | Convert the response to JSON
        const json = await response.json();
        // Mostrar en consola la respuesta del servidor | Show the server response in console
        console.log(json);

    } catch (error) {

        // Manejar cualquier error que pueda ocurrir durante la solicitud fetch | Handle any errors that may occur during the fetch request
        console.error('Error:', error);
    }

    // Alerta al usuario que el dato se ha guardado | Alert the user that the data has been saved
    alert('Dato Guardado');


});

// Agregar evento de clic al botón "Eliminar" | Add click event to "Delete" button
deleteButton.addEventListener('click', function () {

    // Obtener referencia al formulario | Get reference to form
    const formData = document.getElementById('data-form');

    // Restablecer los valores de los campos del formulario | Reset form field values
    formData.reset();
});

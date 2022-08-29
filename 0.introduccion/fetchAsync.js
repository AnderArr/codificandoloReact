// fetch
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => console.log("json",json))
    .catch(e => console.log(e))

// async await
const obtenerUsuario = async() => {
    try {
        const respuesta = await fetch ("https://jsonplaceholder.typicode.com/todos/1")
        const datos = await respuesta.json();
        console.log('datos: ', datos);
    } catch(error){
        console.log('error: ', error);
    }
}
obtenerUsuario();
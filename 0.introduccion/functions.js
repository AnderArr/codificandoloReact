// Diferentes formas de declarar funciones
function saludar(){
    console.log("Saludo");
}

 saludar();

const saludo = () => {
    console.log("Saludando desde arrow function");
}

saludo();

// Al ser una sola linea se puede quitar el salto de línea y las llaves {}
// const saludo = () => console.log("Saludando desde arrow function");

// Para ejecutar este archivo js "node .\functions.js"

const nombre = "Ander";
const apellido = "Arriaga";

// Normal
console.log("El nombre es " + nombre + " y el apellido es " + apellido);
// Template String
console.log(`El nombre es ${nombre} y el apellido es ${apellido}`);

// Destructuring
const persona = {
    nombrePersona: "Ander",
    edad: 24,
    pareja:{
        nombrePareja: "Nagore"
    }
}

const {nombrePersona} = persona;
const {nombrePareja} = persona.pareja;

console.log('nombrePersona: ', nombrePersona);
console.log('nombrePareja: ', nombrePareja);

// map
const datos=[
    { nombre:'Manuel', edad:37 },
    { nombre:'Victoria', edad:20 },
    { nombre:'Francisca', edad:60 },
    { nombre:'Juan', edad:45 }
]

console.log("Recorrer con forEach");
datos.forEach( elemento => {
    console.log('elemento.nombre: ', elemento.nombre);
})

console.log("Recorrer con map");
datos.map( elemento => {
    console.log('elemento.nombre: ', elemento.nombre);
});

// Propagación
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, ...array2];
console.log('array3: ', array3);


import React, {useState} from 'react'

export const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");

    const validar = (evento) => {
        evento.preventDefault();
        console.log("Pulsado el botón");
        if(!nombre.trim()){
            console.log("El nombre está vacio");
        }
    }

  return (
    <div className='container'>
        <form className="form-group" onSubmit={validar}>
            <input className="form-control mb-3" type="text" placeholder='Introduce el nombre' onChange={ (evento) =>{setNombre(evento.target.value)}} />
            <input className="form-control mb-3" type="text" placeholder='Introduce la edad' onChange={ (evento) =>{setEdad(evento.target.value)}}/>
            <input className="btn btn-info btn-block mb-3" type="submit"  />
        </form>
    </div>
  )
}

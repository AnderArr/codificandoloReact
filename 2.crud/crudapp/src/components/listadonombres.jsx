import React, {useState} from 'react';
import uniqid from "uniqid";

export const Listadonombres = () => {

    const [nombre, setNombre] = useState("");
    const [listaNombres, setListaNombres] = useState([]);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [id, setId] = useState("");
    const [error, setError] = useState();

    const addNombre = (evento) => {
        evento.preventDefault();
        if(!nombre.trim()){
            setError("El campo nombre está vacio");
        } else {
            const nuevoNombre = {
                id:uniqid(),
                tituloNombre: nombre
            }
            setListaNombres([...listaNombres, nuevoNombre])
            setNombre("");
        }
    }

    const deleteNombre = (id) => {
        const nuevoArray = listaNombres.filter(item => item.id !== id);
        setListaNombres(nuevoArray);
    }

    const editar = (item) => {
        setModoEdicion(true);
        setNombre(item.tituloNombre);
        setId(item.id);
    }

    const editarNombre = (evento) => {
        evento.preventDefault();
        if(!nombre.trim()){
            setError("El campo nombre está vacio");
        } else {
            const nuevoArray = listaNombres.map(item => item.id === id ? {id: item.id, tituloNombre:nombre} : item);
            setListaNombres(nuevoArray);
            setModoEdicion(false);
        }
    }

  return (
    <div>
        <h2>Aplicación CRUD básica</h2>
        <div className="row">
            <div className="col">
                <h2>Listado de nombres</h2>
                <ul className="list-group">
                    {
                        listaNombres.map(item => 
                            <li key={item.id} className="list-group-item">
                                {item.tituloNombre}
                                <button className="btn btn-danger float-end" onClick={()=>{deleteNombre(item.id)}}>Borrar</button>
                                <button className="btn btn-info float-end" onClick={()=>{editar(item)}}>Editar</button>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="col">
                <h2>Formulario para añadir nombres</h2>
                <form className='form-group' onSubmit={modoEdicion ? editarNombre: addNombre}>
                    <input  onChange={(evento)=>{
                        setNombre(evento.target.value);
                        setError();
                    }} 
                            className="form-control mb-3" 
                            type="text" 
                            placeholder='Introduce el nombre' 
                            value={nombre}/>
                    <input className="btn btn-info btn-block" type="submit" value={modoEdicion ? "Editar nombre" : "Registrar nombre"} />
                </form>
                {
                    error != null ? 
                        ( <div className='alert alert-danger mt-2'>{error}</div>) : 
                        ( <div></div> )
                }
            </div>
        </div>
    </div>
  )
}

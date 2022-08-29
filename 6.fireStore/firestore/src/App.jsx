import React, {useState, useEffect} from "react";
import {store, doc, addDoc, collection, getDocs, deleteDoc, updateDoc} from "./firebaseconfig";

function App() {
  const [nombre,  setNombre ]  = useState("");
  const [numTel,  setNumTel ]  = useState("");
  const [usuario, setUsuario]  = useState([]);
  const [error,   setError  ]  = useState(null);
  const [cargado, setCargado]  = useState(false);
  const [copiar,  setCopiar ]  = useState(false);
  const [key,     setKey    ]  = useState("");

  const getUsuarios = async()=>{
    const {docs} = await getDocs(collection(store, "agenda"));
    const nuevoArray =  docs.map( item => ({
                          id: item.id, ...item.data()
                        }));
    setUsuario(nuevoArray);
    setCargado(true);
  }

  useEffect( () => { getUsuarios(); },[]);

  const setUsuarios = async (evento) =>{
    evento.preventDefault();
    if(!nombre.trim()){
      setError("Debe introducir un nombre");
    } else if(!numTel.trim()){
      setError("Debe introducir un número de teléfono");
    } else {
      setError(null);
      try{
        const usuario = {
          nombre: nombre,
          telefono: numTel
        }

        await addDoc(collection(store, "agenda"), usuario);
        setNombre("");
        setNumTel("");
        getUsuarios();

      } catch(errorSetUsuarios){
        console.log('errorSetUsuarios: ', errorSetUsuarios);
      }
    }
  }

  const actualizar = async (evento) => {
    evento.preventDefault();
    if(!nombre.trim()){
      setError("Debe introducir un nombre");
    } else if(!numTel.trim()){
      setError("Debe introducir un número de teléfono");
    } else {
      setError(null);
    
      try{

        const itemRef = doc(store, "agenda", key);
        await updateDoc(itemRef, {
          nombre: nombre,
          telefono: numTel
        });
        getUsuarios();
        setCopiar(false);
        setNombre("");
        setNumTel("");
        setKey("");

      } catch(error){
        console.log('errorBorrar: ', error);
      }
    }
  }

  const borrar = async (key) => {
    try{
      await deleteDoc(doc(store, "agenda", key));
      getUsuarios();
      setError(null);

    } catch(errorBorrar){
      console.log('errorBorrar: ', errorBorrar);
    }
  }

  const copiarDatos = (item) => {
    setNombre(item.nombre);
    setNumTel(item.telefono);
    setCopiar(true);
    setKey(item.id);
    setError(null);
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <h2>Formulario de usuarios</h2>
          <form className="form-group" onSubmit={ copiar ? actualizar:setUsuarios}>
            < input placeholder= "Introduce el nombre" type="text" className="form-control mt-3" 
              onChange={(evento) => {setNombre(evento.target.value)}} value={nombre}
            />

            < input placeholder= "Introduce el teléfono" type="text" className="form-control mt-3" 
              onChange={(evento) => {setNumTel(evento.target.value)}} value={numTel}
            />
            {copiar ? (
              <input value="Actualizar datos" type="submit" className="btn btn-dark btn-block mt-3" />
              ) : (
                <input value="Registrar" type="submit" className="btn btn-dark btn-block mt-3" />
              )
            }

          </form>
          { error!=null ? 
            (<div className="alert alert-danger mt-4">{error}</div>) : 
            (<div/>)
          }
        </div>
        <div className="col">
          <h2>Lista de tu Agenda</h2>
          <ul className="list-group" style={{marginLeft: "2rem"}}>
          {
            usuario.length !== 0 ? 
              (
                usuario.map(item => (
                  <li key={item.id} className="list-group-item">{item.nombre} -- {item.telefono}

                    <button className="btn btn-danger float-end" onClick={(id)=>borrar(item.id)}>Eliminar</button>
                    <button className="btn btn-info float-end" style={{marginRight:"2rem"}} onClick={(id)=>copiarDatos(item)}>Actualizar</button>
                  </li>
                ))
              ) : 
              (
                cargado ? 
                  (<div className="alert alert-danger mt-4">Lo siento no hay tareas que mostrar</div>) : 
                  (<div></div>)
              )
            }
            </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

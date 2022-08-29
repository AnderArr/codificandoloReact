import React, {useState} from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const obtenerUsuarios = async()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const users = await response.data;
        setUsuarios(users);
    }

    useEffect(()=>{
        obtenerUsuarios()
    },[]);

  return (
    <div>
        <h2>Lista de Usuarios</h2>
        {
            usuarios.map((item) => (
                <div key={item.id}>
                        <Link to={`/usuario/${item.id}`}>{item.name}</Link>
                </div>
            ))
        }
    </div>
  )
}

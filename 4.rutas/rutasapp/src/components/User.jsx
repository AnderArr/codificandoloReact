import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

export const User = () => {
    const [user, setUser] = useState([]);
    const {id} = useParams();
    const obtenerUsuario = async()=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await response.data;
        setUser(user);
    }

    useEffect(()=>{
        obtenerUsuario()
    },[]);
  return (
    <div>
        <h4>Usuario</h4>
        <p>Nombre: {user.name}</p>
        <p>Email: {user.email}</p>
        <small>Teléfono: {user.phone}</small>
        </div>
  )
}

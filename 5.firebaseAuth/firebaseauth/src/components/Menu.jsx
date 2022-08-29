import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {auth, onAuthStateChanged, signOut} from "../firebaseconfig";

export const Menu = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{ 
      if(user){
        setUsuario(user.email);
        console.log('user.email: ', user.email);
      }
    })
  },[]);

  const cerrarSesion = () => {
    signOut(auth);
    setUsuario(null);
    navigate("/");
  }

  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to="/">Inicio</Link>
            </li>
            {
              usuario ? 
              ( <li className='nav-item'>
                  <Link className='nav-link' to="/admin">Admin</Link>
                </li>
              ) : 
              (
                <li className='nav-item'>
                  <Link className='nav-link' to="/login">Login</Link>
                </li>
              )
            }
            
          </ul>
          {
            usuario ? 
            (<button onClick={cerrarSesion} className='btn btn-danger'>Cerrar sesión</button>) : 
            (<div></div>)
          }
        </nav>
    </div>
  )
}

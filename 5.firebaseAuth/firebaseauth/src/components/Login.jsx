import React, {useState} from 'react';
import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '../firebaseconfig';
import {useNavigate} from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgError, setMsgError] = useState(null);

  const registrarUsuario = (evento) => {
    evento.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(
        response => {
          setMsgError(null);
          setEmail("");
          setPassword("");
          alert("Usuario registrado");
          navigate("/");
        }
      )
      .catch(errorRegistrarUsuario => {
        if(errorRegistrarUsuario.code === "auth/invalid-email"){
          setMsgError("Formato de email incorrecto");
        } else if(errorRegistrarUsuario.code === "auth/weak-password"){
          setMsgError("La contraseña debe tener 6 caracteres o más");
        }
      })
  }

  const loginUsuario = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(
      response => {
        console.log('response: ', response);
        navigate("/");
      }
    )
    .catch(
      errorLogin => {
        if(errorLogin.code == "auth/wrong-password"){
          setMsgError("Contraseña incorrecta")
        }
      }
    )
  }

  return (
    <div className='row mt-5'>
        <div className="col"></div>
        <div className="col">
          <form className='form-group' onSubmit={registrarUsuario}>
            <input className="form-control"                 type="email"      onChange={(evento)=>{setEmail(evento.target.value)}}    placeholder='Introduce el Email' />
            <input className="form-control mt-4"            type="password"   onChange={(evento)=>{setPassword(evento.target.value)}} placeholder='Introduce la Contraseña'/>
            <input className="btn btn-dark btn-block mt-4"  type="submit"     value="Registrar usuario"/>
          </form>
          <button className="btn btn-success btn-block mt-4" onClick={loginUsuario}>Iniciar sesión</button>
          {
            msgError !=null ? (
              <div className="alert alert-danger mt-4">{msgError}</div>
            ) : (
              <div></div>
            )
          }
        </div>
        <div className="col"></div>
    </div>
  )
}

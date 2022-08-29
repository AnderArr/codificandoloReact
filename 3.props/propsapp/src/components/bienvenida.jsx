import React from 'react'

export const Bienvenida = (props) => {
    const {nombre, sexo} = props;
  return (
    sexo === "M" ? 
    
        (<div>Bienvenido {nombre}</div>) : 
        (<div>Bienvenida {nombre}</div>)
  )
}

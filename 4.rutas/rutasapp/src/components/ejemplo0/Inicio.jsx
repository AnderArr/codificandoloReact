import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom';

export const Inicio = () => {
    const {nombre} = useParams();
  return (
    <Fragment>
        <h1>Página de inicio</h1>
        <h3>Hola {nombre}</h3>
    </Fragment>
  )
}

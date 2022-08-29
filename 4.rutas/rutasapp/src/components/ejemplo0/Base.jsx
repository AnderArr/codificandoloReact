import React, { Fragment, useState, useEffect } from 'react'

export const Base = () => {
    const [nombre, setNombre] = useState("Ander");
    useEffect(()=>{
        setTimeout(()=>{
            setNombre("Nagore");
        }, 2000);
    });

  return (
    <Fragment>
        <h1>Página de Base Ruta /</h1>
        {nombre}
    </Fragment>
  )
}

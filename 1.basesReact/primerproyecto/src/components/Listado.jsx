import React, {Fragment, useState} from 'react'

export const Listado = () => {
    const [numeros, setNumeros] = useState ([1,2,3,4,5,6]);

  return (
    <Fragment>
        <div className="container">
            <button className='btn btn-success btn-block'>Boton</button>
            <ul>
                {numeros.map ((item, index) => 
                    <li key={index}>{item}, {index}</li>
                )}      
            </ul>                                   
        </div>
    </Fragment>
  )
}

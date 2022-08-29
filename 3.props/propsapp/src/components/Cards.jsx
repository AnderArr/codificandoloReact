import React from 'react'

export const Cards = (props) => {
    const {imagen, titulo, texto} = props;
    const style = {
        width: "18rem", 
        border: "1px solid red"
    }

  return (
    <div className='card' style={style}>
        <img src={imagen} alt="..." className='card-img-top img-thumbnail' />
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{texto}</p>
            <a href="#" className="btn btn-primary">Ver más</a>
        </div>
    </div>
  )
}

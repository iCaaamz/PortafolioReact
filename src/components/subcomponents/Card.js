import React from 'react'


function Card({title, imageSource}) {
  return (
    <div className='card text-center bg-secondary'>
        <img src={imageSource} alt='HTML'/>
        <div className='card-body text-light'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-light'>Un diferencia importante entre ambos personajes es que solo Vegetto tuvo una aparición en el manga, además del anime. Gogeta, por otro lado, solo es exclusivo en la versión animada de la franquicia.30 nov 2018</p>
        </div>

    </div>
  )
}

export default Card;
import React from 'react';
import Card from './Card'
import './CardContainer.css'


const CardContainer = (props) => {

  const { reservations } = props
  const displayCard = reservations.map(res => {
    return <Card {...res} key={res.id} />
  })

  return(
    <div className='card-container'>
      {displayCard}
    </div>
  )
}

export default CardContainer
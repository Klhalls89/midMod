import React from 'react';
import Card from './Card'

const CardContainer = (props) => {

  const { reservations } = props
  const displayCard = reservations.map(res => {
    return <Card {...res} key={res.id} />
  })

  return(
    <div className='resy-container'>
      {displayCard}
    </div>
  )
}

export default CardContainer